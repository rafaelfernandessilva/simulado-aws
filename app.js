const byId = id => document.getElementById(id);
const domainLabels = {
  Segurança: "Segurança",
  Resiliência: "Resiliência",
  Desempenho: "Alto desempenho",
  Custo: "Otimização de custos",
};
const domainSelect = byId("domain");
const sourceGroupSelect = byId("source-group");
const countInput = byId("count");
const exam = byId("exam");
const results = byId("results");
let session;

function create(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function button(text, click, className) {
  const node = create("button", text, className);
  node.type = "button";
  node.addEventListener("click", click);
  return node;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pool() {
  return questions.filter(q =>
    (!domainSelect.value || q.domain === domainSelect.value) &&
    (!sourceGroupSelect.value || q.sourceGroup === Number(sourceGroupSelect.value)));
}

function updateQuantity() {
  const max = pool().length;
  countInput.max = max;
  countInput.disabled = max === 0;
  byId("start-exam").disabled = max === 0;
  countInput.value = max > 0 ? Math.min(countInput.valueAsNumber || 10, max) : "";
  byId("available").textContent = max > 0
    ? `Escolha de 1 a ${max} questões.`
    : "Nenhuma questão corresponde ao conjunto e ao domínio selecionados.";
  byId("presets").replaceChildren(...[...new Set([5, 10, 20, 65, max])]
    .filter(n => n > 0 && n <= max)
    .map(n => button(n === max ? "Todas" : String(n), () => { countInput.value = n; })));
}

function show(id) {
  for (const section of ["setup", "exam", "results"]) byId(section).hidden = section !== id;
  window.scrollTo(0, 0);
}

function focusHeading(node) {
  node.tabIndex = -1;
  node.focus({ preventScroll: true });
}

function start(event) {
  event.preventDefault();
  const count = countInput.valueAsNumber;
  const available = shuffle(pool());
  const selected = available.slice(0, count);
  session = {
    questions: selected.map(q => ({ ...q, options: shuffle(q.options) })),
    index: 0,
    answers: new Map(),
  };
  show("exam");
  renderQuestion();
}

function renderQuestion() {
  const { index, answers, questions: selected } = session;
  const question = selected[index];
  const saved = answers.get(index) ?? new Set();
  const head = create("div", undefined, "exam-head");
  head.append(create("p", `Questão ${index + 1} de ${selected.length}`), create("span", domainLabels[question.domain], "tag"));
  const progress = create("progress");
  progress.max = selected.length;
  progress.setAttribute("aria-label", "Questões respondidas");
  const panel = create("div", undefined, "panel");
  const group = create("fieldset");
  const title = create("legend", question.prompt);
  title.className = "question-text";
  const instruction = create("p", question.required === 1 ? "Selecione uma alternativa." : `Selecione ${question.required} alternativas.`, "instruction");
  instruction.id = "instruction";
  group.setAttribute("aria-describedby", "instruction");
  group.append(title, instruction);
  const notice = create("p", "", "notice");
  notice.setAttribute("role", "status");
  const inputs = question.options.map((option, i) => {
    const label = create("label", undefined, "option");
    const input = create("input");
    input.type = question.required === 1 ? "radio" : "checkbox";
    input.name = "answer";
    input.checked = saved.has(i);
    label.append(input, create("span", option.text));
    group.append(label);
    return input;
  });
  function answeredCount() {
    return [...answers].filter(([position, choices]) => choices.size === selected[position].required).length;
  }
  const actions = create("div", undefined, "actions");
  const previous = button("← Anterior", () => move(-1));
  previous.disabled = index === 0;
  const isLast = index === selected.length - 1;
  const next = button(isLast ? "Finalizar" : "Próxima →", () => {
    if (isLast) finish();
    else move(1);
  }, "primary");
  function update() {
    progress.value = answeredCount();
    notice.textContent = "";
  }
  inputs.forEach(input => input.addEventListener("change", () => {
    const checked = new Set(inputs.flatMap((choice, position) => choice.checked ? [position] : []));
    if (checked.size > question.required) {
      input.checked = false;
      notice.textContent = `Escolha no máximo ${question.required} alternativas.`;
      return;
    }
    if (checked.size) answers.set(index, checked);
    else answers.delete(index);
    update();
  }));
  function move(delta) {
    session.index += delta;
    window.scrollTo(0, 0);
    renderQuestion();
  }
  function finish() {
    const incomplete = selected.length - answeredCount();
    if (incomplete && !window.confirm(`Há ${incomplete} questão(ões) em branco ou incompletas. Deseja finalizar agora?`)) return;
    renderResults();
  }
  actions.append(previous, next);
  panel.append(group, notice, actions);
  exam.replaceChildren(head, progress, panel);
  update();
  focusHeading(title);
}

function renderResults() {
  const reviewItems = session.questions.map((question, index) => {
    const chosen = session.answers.get(index) ?? new Set();
    const complete = chosen.size === question.required;
    const correct = complete && [...chosen].every(i => question.options[i].correct);
    return { question, chosen, complete, correct };
  });
  const score = reviewItems.filter(item => item.correct).length;
  const complete = reviewItems.filter(item => item.complete).length;
  const total = reviewItems.length;
  const panel = create("div", undefined, "panel");
  const header = create("div", undefined, "result-head");
  const intro = create("div");
  const title = create("h2", "Resultado do simulado");
  intro.append(title, create("p", `${score} de ${total} acertos · ${total - complete} em branco ou incompletas`));
  header.append(intro, create("div", `${Math.round(score * 100 / total)}%`, "score"));
  const review = create("div", undefined, "review");
  const reviewHead = create("div", undefined, "review-head");
  const detailsList = reviewItems.map(({ question, chosen, complete, correct }, index) => {
    const details = create("details");
    const summary = create("summary");
    const status = correct ? "Correta" : complete ? "Incorreta" : "Em branco ou incompleta";
    summary.append(create("span", status, correct ? "good" : "bad"), ` · Questão ${index + 1} · Bloco ${question.sourceGroup}, pergunta ${question.sourceNumber}`);
    details.append(summary, create("p", question.prompt, "question-text"));
    if (question.technicalNote) {
      details.append(create("p", question.technicalNote, "technical-note"));
    }
    const options = create("ul");
    question.options.forEach((option, i) => {
      const marks = [option.correct ? "gabarito" : "", chosen.has(i) ? "sua escolha" : ""].filter(Boolean);
      const item = create("li", option.text + (marks.length ? ` (${marks.join(", ")})` : ""), option.correct ? "good" : chosen.has(i) ? "bad" : "muted");
      if (option.note) item.append(create("span", option.note, "option-note"));
      options.append(item);
    });
    const sources = create("ul");
    question.references.forEach((url, i) => {
      const link = create("a", question.references.length === 1 ? "Documentação oficial da AWS" : `Referência AWS ${i + 1}`);
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      const item = create("li");
      item.append(link);
      sources.append(item);
    });
    details.append(options, create("h4", "Explicação geral"),
      create("p", question.explanation, "source-explanation"), sources);
    return details;
  });
  const toggleReview = button("Abrir todas as explicações", () => {
    const open = detailsList.some(details => !details.open);
    detailsList.forEach(details => { details.open = open; });
    updateReviewButton();
  });
  function updateReviewButton() {
    toggleReview.textContent = detailsList.every(details => details.open)
      ? "Recolher todas as explicações"
      : "Abrir todas as explicações";
  }
  detailsList.forEach(details => details.addEventListener("toggle", updateReviewButton));
  reviewHead.append(create("h3", "Gabarito comentado"), toggleReview);
  review.append(reviewHead, ...detailsList);
  panel.append(header, button("Novo simulado", () => {
    show("setup");
    focusHeading(byId("setup").querySelector("h1"));
  }, "primary"), review);
  results.replaceChildren(panel);
  show("results");
  focusHeading(title);
}

byId("bank-size").textContent = questions.length;
domainSelect.append(new Option("Todos os domínios", ""));
sourceGroupSelect.append(new Option("Todos os blocos", ""));
for (const group of [...new Set(questions.map(question => question.sourceGroup))]) {
  const count = questions.filter(question => question.sourceGroup === group).length;
  sourceGroupSelect.append(new Option(`Bloco ${group} · ${count} questões`, String(group)));
}
for (const [key, label] of Object.entries(domainLabels)) {
  domainSelect.append(new Option(label, key));
  const topic = create("div", undefined, "topic");
  topic.append(create("strong", label), `${questions.filter(q => q.domain === key).length} questões`);
  byId("topics").append(topic);
}
domainSelect.addEventListener("change", updateQuantity);
sourceGroupSelect.addEventListener("change", updateQuantity);
byId("setup-form").addEventListener("submit", start);
updateQuantity();

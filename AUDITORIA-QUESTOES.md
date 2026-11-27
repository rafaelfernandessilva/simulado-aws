# Auditoria das questões do Simulado AWS SAA C03

Revisão em 25 a 27 de novembro de 2026. Foram conferidos os gabaritos, os enunciados, as explicações gerais e as notas das alternativas das 361 questões. Os links de documentação usados na revisão estão disponíveis também no gabarito comentado do simulado.

As decisões abaixo interpretam os cenários à luz da documentação da AWS. A classificação como confirmada se refere ao cenário descrito; não transforma as questões em material oficial da prova.

- Questões com correção de conteúdo: **332**.
- Questões com troca das alternativas consideradas corretas ou da quantidade de seleções: **20**.
- Questões cujo texto de alguma resposta correta foi ajustado: **173**.
- Questões confirmadas sem alteração de conteúdo: **29**.

As categorias podem se sobrepor. A inclusão de referências, por si só, não conta como correção.

## Correções por questão

### Bloco 1 pergunta 1

Identificador do banco: 1.

- O tempo de visibilidade reduz reentregas prematuras, mas não garante idempotência ou processamento exatamente uma vez. AddPermission adiciona permissões; não as revoga.

Campos ajustados: prompt, options, explanation.

Documentação: [SQS: visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [SQS: AddPermission](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html).

### Bloco 1 pergunta 2

Identificador do banco: 2.

- Fargate dispensa servidores EC2, mas mantém configuração de serviços e tarefas. Lambda suporta imagens e runtimes personalizados; não exige universalmente reescrita em outra linguagem. HPC não é tecnicamente incapaz de hospedar serviços web.

Campos ajustados: options, explanation.

Documentação: [ECS com Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html); [Imagens de contêiner no Lambda](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html).

### Bloco 1 pergunta 3

Identificador do banco: 3.

- SAN não é diretamente um local DataSync. Direct Connect não criptografa por padrão e DataSync não é um serviço de streaming contínuo. Transferência pública com TLS não é inerentemente insegura.

Campos ajustados: prompt, options, explanation.

Documentação: [Locais compatíveis do DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html); [Criptografia em trânsito do DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/encryption-in-transit.html); [Criptografia do Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html).

### Bloco 1 pergunta 4

Identificador do banco: 4.

- Distinguir Multi-AZ de instância de banco e clusters Multi-AZ que possuem leitores. Capacidade equivalente é recomendação de dimensionamento, não garantia. Uma AZ pode conter vários data centers.

Campos ajustados: prompt, options, explanation.

Documentação: [Réplicas de leitura do RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html); [Criação e dimensionamento de réplicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.Create.html).

### Bloco 1 pergunta 5

Identificador do banco: 5.

**Gabarito anterior**

- 3. Configure a recuperação point-in-time (PITR) do DynamoDB para a tabela. Em caso de corrupção, restaure a tabela para o ponto no tempo desejado dentro dos últimos 35 dias, garantindo o atendimento ao RPO e RTO estabelecidos.

**Gabarito corrigido**

- 3. Habilitar a recuperação pontual (PITR) do DynamoDB e restaurar para uma nova tabela no instante anterior à corrupção, dentro da janela de recuperação configurada.

- PITR não garante RTO de uma hora para toda tabela. A restauração cria outra tabela, e a janela é configurável entre 1 e 35 dias. Classes Glacier têm tempos de acesso diferentes.

Campos ajustados: prompt, options, explanation.

Documentação: [Backups pontuais do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Point-in-time-recovery.html); [Backup e restauração do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup-and-Restore.html); [Planejamento dos tempos de restauração](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CreateBackup.html).

### Bloco 1 pergunta 6

Identificador do banco: 6.

**Gabarito anterior**

- 3. Configure o Amazon S3 para enviar uma notificação de evento para uma fila Amazon Simple Queue Service (Amazon SQS). Use uma função AWS Lambda para ler da fila e processar os dados. Armazene o arquivo JSON resultante no Amazon DynamoDB.

**Gabarito corrigido**

- 3. Configure notificações de criação de objetos do S3 para uma fila SQS padrão. Configure um mapeamento de origem de eventos para uma função Lambda processar os arquivos e gravar o resultado JSON como item no DynamoDB.

- EC2 pode usar Auto Scaling; DynamoDB armazena itens, não arquivos, e limita cada item a 400 KB. Eventos não eliminam duplicações nem limites de escala.

Campos ajustados: prompt, options, explanation.

Documentação: [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Limites do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html).

### Bloco 1 pergunta 7

Identificador do banco: 7.

**Gabarito anterior**

- 4. Configure o grupo de Auto Scaling para usar múltiplas zonas de disponibilidade. Configure o banco de dados como Multi-AZ no Amazon Aurora PostgreSQL. Utilize uma instância Amazon RDS Proxy para o banco de dados.

**Gabarito corrigido**

- 4. Distribua o grupo de Auto Scaling em múltiplas zonas de disponibilidade. Adicione uma réplica Aurora em outra zona e configure o RDS Proxy para gerenciar as conexões da aplicação.

- O armazenamento Aurora já se distribui entre zonas mesmo com uma só instância. Réplicas leitoras e réplica de armazenamento não são a mesma coisa. Um ASG é regional; failover não implica indisponibilidade zero.

Campos ajustados: prompt, options, explanation.

Documentação: [Alta disponibilidade do Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html); [Fargate e infraestrutura gerenciada](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html).

### Bloco 1 pergunta 8

Identificador do banco: 8.

**Gabarito anterior**

- 1. Crie um endpoint VPC para o Amazon S3 e vincule o endpoint à tabela de rotas para as sub-redes públicas onde as instâncias EC2 estão localizadas.

**Gabarito corrigido**

- 1. Crie um endpoint VPC do tipo gateway para o S3 na mesma região do bucket e associe-o às tabelas de rotas das sub-redes das instâncias.

- Precisar o tipo gateway e remover garantias gerais de segurança, latência e conformidade. NAT/IGW não são endpoints privados, mas não se deve afirmar que todo acesso público a serviços AWS percorre redes externas.

Campos ajustados: options, explanation.

Documentação: [Endpoint de gateway S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 1 pergunta 9

Identificador do banco: 9.

**Gabarito anterior**

- 4. Salve os arquivos .pdf no Amazon S3. Configure um evento S3 PUT para invocar uma função AWS Lambda para converter os arquivos para o formato .jpg e armazená-los de volta no Amazon S3.

**Gabarito corrigido**

- 4. Armazene os PDFs no Amazon S3. Configure notificações apenas para o prefixo de entrada ou para arquivos PDF, invoque uma função Lambda para convertê-los e salve os JPEGs em outro prefixo ou bucket S3.

- DynamoDB limita itens a 400 KB; EFS é escalável e não deve ser descrito como incapaz de escalar. Evitar recursão no bucket e explicitar que a conversão cabe nos limites Lambda.

Campos ajustados: prompt, options, explanation.

Documentação: [Notificações S3 com Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html); [Limites de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html).

### Bloco 1 pergunta 10

Identificador do banco: 10.

- Política KMS autoriza principais, não confia em outra chave. Compartilhar não equivale a exportar; não há exposição automática durante transporte. Permissões KMS da conta destinatária também precisam ser configuradas.

Campos ajustados: options, explanation.

Documentação: [Compartilhar AMI com contas específicas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html); [Exportação de VM](https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html).

### Bloco 1 pergunta 11

Identificador do banco: 11.

**Gabarito anterior**

- 2. Altere a fila padrão do SQS para uma fila FIFO do SQS. Use o ID de desduplicação de mensagens para descartar mensagens duplicadas.

**Gabarito corrigido**

- 2. Torne a função idempotente: use um identificador estável do evento e um registro persistente de processamento para reconhecer eventos já concluídos e evitar repetir o envio correspondente.

- FIFO deduplica envios em uma janela, mas não garante execução única do consumidor. S3 não envia notificações diretamente a FIFO e long polling tem máximo de 20 segundos. A alternativa correta foi reformulada para idempotência.

Campos ajustados: options, explanation.

Documentação: [Lambda e processamento com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Destinos de notificações S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html); [Boas práticas do Lambda](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html); [Long polling SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html).

### Bloco 1 pergunta 12

Identificador do banco: 12.

- Egress-only internet gateway existe para IPv6. Internet gateway é anexado à VPC, não a uma sub-rede; um NAT zonal oferece redundância dentro da própria zona, não garantia absoluta.

Campos ajustados: prompt, options, explanation.

Documentação: [Fundamentos de NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-basics.html); [Egress-only internet gateway IPv6](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html).

### Bloco 1 pergunta 13

Identificador do banco: 13.

- Especificar a resistência à perda de zona e Glacier Flexible Retrieval. One Zone-IA tem alta durabilidade dentro da zona, mas não resistência à sua destruição. A última alternativa falha por não excluir após quatro anos.

Campos ajustados: prompt, options, explanation.

Documentação: [Classes de armazenamento S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

### Bloco 1 pergunta 14

Identificador do banco: 14.

- Remover garantias absolutas de durabilidade e preço. EFS também escala; EBS pode ter Multi-Attach, mas é zonal. Precisar que a aplicação aceita acesso por API de objetos.

Campos ajustados: prompt, options, explanation.

Documentação: [Visão geral do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).

### Bloco 1 pergunta 15

Identificador do banco: 15.

- Transferência EC2–S3 na mesma região não é cobrada como saída de internet apenas por usar IGW. A economia do endpoint ocorre ao evitar o processamento NAT. NAT não recebe política de endpoint e API Gateway não é implantado em sub-rede como roteador.

Campos ajustados: prompt, options, explanation.

Documentação: [Endpoint de gateway S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html); [Preços do S3 e transferência regional](https://aws.amazon.com/s3/pricing/).

### Bloco 1 pergunta 16

Identificador do banco: 16.

**Gabarito anterior**

- 1. Adicione uma política baseada em recursos à função Lambda com a ação lambda:InvokeFunction e Service principal events.amazonaws.com.

**Gabarito corrigido**

- 1. Adicione à função uma política de recurso que permita lambda:InvokeFunction a events.amazonaws.com, com condição aws:SourceArn limitada ao ARN da regra EventBridge autorizada.

- O principal do serviço sozinho não restringe a regra autorizada. Aplicar SourceArn e separar autorização de invocação da função de execução.

Campos ajustados: options, explanation.

Documentação: [Políticas de recursos para EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-use-resource-based.html).

### Bloco 1 pergunta 17

Identificador do banco: 17.

- Requester Pays muda o responsável pela cobrança; não reduz o custo agregado nem o volume transferido.

Campos ajustados: prompt, options, explanation.

Documentação: [Buckets Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html).

### Bloco 1 pergunta 18

Identificador do banco: 18.

- Explicitar mecanismo compatível e tolerância ao atraso; réplicas assíncronas não garantem dados imediatamente atualizados. Distinguir Multi-AZ de instância e cluster.

Campos ajustados: prompt, options, explanation.

Documentação: [Casos de uso de réplicas RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

### Bloco 1 pergunta 19

Identificador do banco: 19.

**Gabarito anterior**

- 3. Crie um stream de entrega do Amazon Kinesis Data Firehose. Configure o grupo de logs como a fonte dos streams de entrega. Configure o Amazon OpenSearch Service (antigo Amazon Elasticsearch Service) como o destino dos streams de entrega.

**Gabarito corrigido**

- 4. Use no console CloudWatch a opção de criar um filtro de assinatura do Amazon OpenSearch Service para o grupo de logs. Configure o domínio e a função IAM exigida pela integração, que usa Lambda para entregar os eventos.

- A integração de assinatura OpenSearch existe e usa Lambda. A documentação exclui o caminho direto de logs CloudWatch agrupados pelo Firehose para OpenSearch. Trocar o gabarito de C para D e explicitar o fluxo real.

Campos ajustados: options, explanation.

Documentação: [Assinatura CloudWatch Logs para OpenSearch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html); [Limitação CloudWatch Logs–Firehose–OpenSearch](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-cloudwatch-logs.html).

### Bloco 1 pergunta 20

Identificador do banco: 20.

- Especificar Glacier Flexible Retrieval em vez de generalizar todas as classes Glacier. URLs pré-assinadas concedem acesso a quem as possui durante a validade; processamento deve evitar recursão.

Campos ajustados: options, explanation.

Documentação: [Upload com URL pré-assinada](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html); [Notificações S3 e Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html).

### Bloco 1 pergunta 21

Identificador do banco: 21.

**Gabarito anterior**

- 2. Use o Amazon MQ com brokers ativos/standby configurados em duas zonas de disponibilidade. Adicione um grupo de Auto Scaling para as instâncias consumidoras EC2 em duas zonas de disponibilidade. Use o Amazon RDS para MySQL com Multi-AZ habilitado.

**Gabarito corrigido**

- 2. Use Amazon MQ for ActiveMQ ativo/standby em duas zonas, um grupo EC2 Auto Scaling com capacidade mínima e desejada de pelo menos dois consumidores distribuídos nessas zonas, e RDS for MySQL Multi-AZ.

- Serviços gerenciados e ASG reduzem operação, mas não eliminam administração de consumidores nem interrupções. A alternativa com duas instâncias fixas tem redundância, embora menos recuperação automatizada.

Campos ajustados: options, explanation.

Documentação: [Amazon MQ ActiveMQ ativo/standby](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-broker-architecture.html); [ASG em múltiplas zonas](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-az-console.html).

### Bloco 1 pergunta 22

Identificador do banco: 22.

- Buckets S3 são regionais e não residem em sub-redes. Endpoint não garante sozinho sigilo, conformidade ou latência menor; o requisito deve limitar-se ao tráfego S3.

Campos ajustados: prompt, options, explanation.

Documentação: [Acesso regional por endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 1 pergunta 23

Identificador do banco: 23.

- Clonagem reduz cópia inicial por copy-on-write, mas não sincroniza continuamente staging nem promete impacto zero ou eliminação de toda latência.

Campos ajustados: prompt, options, explanation.

Documentação: [Clonagem do Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html).

### Bloco 1 pergunta 24

Identificador do banco: 24.

- DynamoDB suporta atributos binários, mas tem limite de 400 KB por item. Precisar o tamanho das imagens para eliminar a ambiguidade e não descrever EBS como incapaz de escalar.

Campos ajustados: prompt, options, explanation.

Documentação: [Processamento de objetos com Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html); [Limites de tamanho do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html).

### Bloco 1 pergunta 25

Identificador do banco: 25.

**Gabarito anterior**

- 4. Crie um bucket S3 com o S3 Object Lock habilitado, ative o versionamento, defina um período de retenção de 100 anos e configure o modo de governança como padrão para novos objetos no bucket.

**Gabarito corrigido**

- 4. Habilite Object Lock e versionamento. Defina retenção padrão no modo Governance pelo prazo exigido e conceda s3:BypassGovernanceRetention somente aos administradores autorizados, além das permissões necessárias às operações.

- Distinguir retenção com prazo de Legal Hold sem expiração. Governance requer permissão de bypass e cabeçalho; bloqueia versões, não a criação de novas versões. Remover prazo arbitrário de cem anos e afirmações falsas sobre controles Glacier.

Campos ajustados: prompt, options, explanation.

Documentação: [Object Lock e retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html); [Bypass do modo Governance](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html).

### Bloco 1 pergunta 26

Identificador do banco: 26.

- /tmp pode sobreviver à reutilização de um ambiente, mas não é durável nem compartilhado. FIFO ordena por grupo e não garante efeitos exatamente uma vez.

Campos ajustados: options, explanation.

Documentação: [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Armazenamento temporário Lambda](https://docs.aws.amazon.com/lambda/latest/dg/configuration-ephemeral-storage.html).

### Bloco 1 pergunta 27

Identificador do banco: 27.

**Gabarito anterior**

- 1. Crie o novo site e implemente-o em um bucket Amazon S3 com hospedagem de site estático habilitada.
- 2. Configure o Amazon CloudFront na frente do site para usar a funcionalidade HTTPS.

**Gabarito corrigido**

- 1. Armazene os arquivos estáticos em um bucket S3 privado, mantendo o bloqueio de acesso público e usando o endpoint REST do bucket como origem.
- 2. Configure uma distribuição CloudFront com HTTPS para os visitantes e Origin Access Control (OAC) para acessar o bucket S3 privado.

- A explicação original inteira descreve outro problema, com SQS e Aurora. Para reforçar segurança, usar bucket privado com origem REST e OAC; o endpoint de website não suporta OAC nem HTTPS na origem.

Campos ajustados: options, explanation.

Documentação: [Origem S3 privada com CloudFront OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html).

### Bloco 1 pergunta 28

Identificador do banco: 28.

**Gabarito anterior**

- 3. Crie um sistema de arquivos Amazon FSx for Lustre. Anexe o sistema de arquivos ao servidor de origem no data center on-premises. Conecte o servidor de aplicação ao sistema de arquivos para acesso compartilhado e de alta performance.

**Gabarito corrigido**

- 3. Crie um sistema de arquivos Amazon FSx for Lustre e monte-o nos clientes Lustre locais por uma conexão Direct Connect ou VPN até a VPC, com rotas e regras de rede adequadas.

- Precisar conectividade privada e montagem via cliente Lustre, sem prometer latência local ou anexar volume como EBS.

Campos ajustados: options, explanation.

Documentação: [Montagem FSx for Lustre a partir de rede local](https://docs.aws.amazon.com/fsx/latest/LustreGuide/mounting-on-premises.html).

### Bloco 1 pergunta 29

Identificador do banco: 29.

- MFA Delete protege exclusão permanente de versões e mudanças de versionamento, não qualquer DELETE. MFA também pode ser exigida em políticas para APIs; não se limita ao login. Remover garantia genérica de conformidade.

Campos ajustados: options, explanation.

Documentação: [MFA Delete do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html).

### Bloco 1 pergunta 30

Identificador do banco: 30.

- EC2 com SQS também pode ser resiliente. Tornar explícito o objetivo de reduzir administração de servidores; SNS possui armazenamento para retries, mas não é uma fila de trabalho consultada por consumidores.

Campos ajustados: prompt, options, explanation.

Documentação: [Lambda com fila SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Políticas de entrega SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html).

### Bloco 1 pergunta 31

Identificador do banco: 31.

**Gabarito anterior**

- 2. Substituir o Network Load Balancer (NLB) por um Application Load Balancer (ALB). Habilitar verificações de integridade HTTP fornecendo a URL do endpoint do aplicativo e configurar uma ação do Auto Scaling para substituir instâncias com falhas automaticamente.

**Gabarito corrigido**

- 3. Configure health checks HTTP ou HTTPS no target group do NLB, com caminho e códigos de sucesso apropriados. Habilite verificações de integridade do Elastic Load Balancing no grupo Auto Scaling.

- NLB suporta verificações HTTP e HTTPS. Não é necessário substituí-lo por ALB. Habilitar verificações ELB no ASG é necessário para substituir instâncias com falha de aplicação.

Campos ajustados: prompt, options, explanation.

Documentação: [Health checks HTTP do NLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html); [Health checks ELB no Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html).

### Bloco 1 pergunta 32

Identificador do banco: 32.

- Comprehend Medical suporta texto clínico em inglês e detecta entidades, não mascara nem garante anonimização/conformidade. Rekognition possui OCR para imagens, mas Textract atende melhor a documentos PDF/JPEG.

Campos ajustados: prompt, options, explanation.

Documentação: [Detecção de PHI](https://docs.aws.amazon.com/comprehend-medical/latest/dev/textanalysis-phi.html); [Idiomas do Comprehend Medical](https://docs.aws.amazon.com/comprehend-medical/latest/dev/comprehendmedical-welcome.html).

### Bloco 1 pergunta 33

Identificador do banco: 33.

**Gabarito anterior**

- 2. Crie uma política de bucket que limite o acesso apenas à camada de aplicação executando na VPC.
- 3. Configure um endpoint de gateway VPC para o Amazon S3 dentro da VPC.

**Gabarito corrigido**

- 2. Configure a política do bucket para limitar os principais autorizados à função da aplicação e restringir as solicitações ao endpoint VPC autorizado com aws:SourceVpce.
- 3. Configure um endpoint de gateway VPC para o Amazon S3 dentro da VPC.

- Origem VPC/endpoint sozinha não identifica a aplicação. Combinar a identidade da função EC2 com a condição do endpoint e não prometer latência ou conformidade.

Campos ajustados: prompt, options, explanation.

Documentação: [Controle por política e endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 1 pergunta 34

Identificador do banco: 34.

**Gabarito anterior**

- 2. Implante e configure o Amazon FSx for Windows File Server na AWS. Implante e configure um Amazon FSx File Gateway on-premises. Mova os dados dos arquivos on-premises para o FSx File Gateway. Configure as cargas de trabalho na nuvem para usar o FSx for Windows File Server na AWS. Configure as cargas de trabalho on-premises para usar o FSx File Gateway.

**Gabarito corrigido**

- 2. Use FSx for Windows File Server na AWS e o FSx File Gateway local já elegível. Migre os dados para os compartilhamentos FSx; configure os clientes locais para usar o gateway e os clientes na nuvem para acessar o FSx.

- FSx File Gateway está fechado a novos clientes desde 28/10/2024. Acesso direto FSx pela VPN é possível. S3 File Gateway suporta SMB/ACL e cache, mas não é equivalente a um namespace Windows ativo simultaneamente pela API de objetos.

Campos ajustados: prompt, options, explanation.

Documentação: [Disponibilidade do FSx File Gateway](https://docs.aws.amazon.com/filegateway/latest/filefsxw/DocumentHistory.html); [Acesso híbrido FSx Windows](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/supported-fsx-clients.html); [Recursos SMB do S3 File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html).

### Bloco 1 pergunta 35

Identificador do banco: 35.

**Gabarito anterior**

- 2. Crie uma chave gerenciada pelo cliente no AWS Key Management Service (AWS KMS). Permita que o papel da instância EC2 utilize essa chave KMS para operações de criptografia e descriptografia em tempo real. Armazene os certificados criptografados no Amazon S3, aproveitando sua alta disponibilidade e durabilidade.

**Gabarito corrigido**

- 2. Use uma chave KMS gerenciada pelo cliente e armazene o material no S3 com SSE-KMS ou criptografia por envelope. Autorize o papel da instância a acessar os objetos e usar a chave conforme necessário.
- 4. Armazene o material no Secrets Manager protegido por KMS. Autorize o papel da instância a obter o segredo e atualize suas versões quando os certificados forem renovados.

- O cenário admite KMS com S3 e Secrets Manager para material compatível. A exclusão original do Secrets Manager era tecnicamente falsa; aceitar duas arquiteturas em vez de impor preferência. KMS Encrypt direto tem limite de 4 KiB com chave simétrica; usar envelope ou SSE-KMS no S3.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Criptografia de segredos](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html); [Limites do Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html); [KMS Encrypt e limite direto](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html); [SSE-KMS no S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html).

### Bloco 1 pergunta 36

Identificador do banco: 36.

- Snowball está restrito a clientes existentes e tem suporte comercial previsto até 31/12/2026; Snowcone foi descontinuado. Corrigir capacidade antiga e não prometer prazo de transporte. DataSync não se limita a volumes moderados.

Campos ajustados: prompt, options, explanation.

Documentação: [Atualização de dispositivos Snow](https://aws.amazon.com/blogs/storage/aws-snow-device-updates/); [Snowball Edge](https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html); [Alternativas e fim de suporte Snow](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-storage-service.html).

### Bloco 1 pergunta 37

Identificador do banco: 37.

**Gabarito anterior**

- 4. Armazene as credenciais do usuário do banco de dados no AWS Secrets Manager. Conceda as permissões necessárias do IAM para permitir que os servidores web acessem o AWS Secrets Manager.

**Gabarito corrigido**

- 4. Armazene as credenciais no Secrets Manager e configure a rotação automática apropriada para o usuário do RDS MySQL. Autorize os papéis dos servidores a recuperar o segredo e adapte a aplicação para obter as versões atuais.

- Armazenar o segredo não ativa rotação automaticamente nem garante ausência de impacto. Configurar estratégia, agenda, conectividade e recuperação de credenciais atuais.

Campos ajustados: options, explanation.

Documentação: [Rotação de segredos](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html).

### Bloco 1 pergunta 38

Identificador do banco: 38.

**Gabarito anterior**

- 4. Use instâncias On-Demand para as instâncias EC2 de produção. Use instâncias Spot para as instâncias EC2 de desenvolvimento e teste, com automação para desligamento quando não estiverem em uso.

**Gabarito corrigido**

- 2. Use instâncias reservadas para as instâncias EC2 de produção. Use instâncias On-Demand para as instâncias EC2 de desenvolvimento e teste.

- Corrigir gabarito de D para B. Produção contínua e previsível favorece desconto comprometido; Spot exige tolerância a interrupções não declarada. On-Demand não garante disponibilidade contínua. Havia duas alternativas idênticas.
- A correção foi incorporada ao enunciado, alternativas e explicação; remover ressalva antiga.

Campos ajustados: prompt, options, explanation, technicalNote.

Documentação: [Modelo de Reserved Instances EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html).

### Bloco 1 pergunta 39

Identificador do banco: 39.

**Gabarito anterior**

- 2. Crie um sistema de arquivos Amazon FSx for Windows File Server na AWS e defina o domínio Active Directory para autenticação.

**Gabarito corrigido**

- 2. Crie um sistema de arquivos Amazon FSx for Windows File Server com implantação Multi-AZ e integre-o ao Active Directory apropriado para autenticação.

- FSx Windows exige selecionar implantação Multi-AZ para redundância entre zonas. Storage Gateway suporta Active Directory; não usar essa alegação falsa para descartá-lo.

Campos ajustados: options, explanation.

Documentação: [FSx Windows Single-AZ e Multi-AZ](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [SMB e Active Directory no S3 File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html).

### Bloco 1 pergunta 40

Identificador do banco: 40.

**Gabarito anterior**

- 4. Armazenar os documentos em um bucket Amazon S3 com Bloqueio de Objetos S3 (S3 Object Lock) ativado e configurar políticas de retenção legais para 7 anos.

**Gabarito corrigido**

- 4. Armazene os documentos em um bucket S3 com versionamento e Object Lock. Aplique a cada versão retenção no modo Compliance por sete anos.

- Retenção fixa de sete anos exige Retention Period; Legal Hold não tem prazo. Usar Compliance para impedir redução por administradores. Glacier e Object Lock são compatíveis, não mecanismos mutuamente exclusivos.

Campos ajustados: options, explanation.

Documentação: [Object Lock e modos de retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html); [Object Lock com ciclo de vida e criptografia](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html).

### Bloco 1 pergunta 41

Identificador do banco: 41.

**Gabarito anterior**

- 2. Crie uma fila Amazon SQS para armazenar as tarefas que precisam ser processadas. Crie uma Amazon Machine Image (AMI) com o aplicativo processador. Utilize um template de lançamento com essa AMI e configure um grupo de Auto Scaling para adicionar ou remover nós com base no número de mensagens na fila SQS.

**Gabarito corrigido**

- 2. Crie uma fila SQS para as tarefas e uma AMI do consumidor sem estado. Use um template de lançamento em um ASG e uma política de target tracking baseada no backlog de mensagens disponíveis por instância, com meta derivada do tempo de processamento e da espera aceitável.

- Para target tracking, usar backlog por instância, não só total de mensagens. SNS tem políticas de retenção para entrega, mas não substitui a fila de trabalho consultada. Durabilidade não é garantia absoluta de perda impossível.

Campos ajustados: options, explanation.

Documentação: [Auto Scaling por backlog SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html); [Retentativas de entrega SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html).

### Bloco 1 pergunta 42

Identificador do banco: 42.

**Gabarito anterior**

- 2. Use o AWS Database Migration Service (DMS) com captura de alterações (CDC) para capturar as atualizações do banco de dados Amazon RDS e enviar os dados para um tópico Amazon SNS, que distribui as mensagens para múltiplas filas Amazon SQS consumidas pelos sistemas de destino.
- 5. Configure triggers no banco de dados Amazon RDS para registrar alterações em uma tabela auxiliar e use o AWS Database Migration Service (DMS) com captura de alterações (CDC) para enviar esses dados para um Amazon Kinesis Data Stream. Em seguida, crie uma função AWS Lambda acionada pelo Kinesis para processar os dados e enviá-los para uma fila Amazon Simple Queue Service (Amazon SQS) padrão para os sistemas de destino consumirem.

**Gabarito corrigido**

- 2. Configure DMS CDC com o log de origem adequado e Kinesis Data Streams como destino. Use Lambda para interpretar as alterações e publicar eventos de venda em SNS, com uma fila SQS distinta assinada para cada sistema de destino.
- 5. Na mesma transação que remove o anúncio, grave um evento com os dados necessários em uma tabela outbox. Use um publicador que consulte a outbox com controle de progresso e envie a SNS, com uma fila SQS distinta por sistema de destino; torne os consumidores idempotentes.

- DMS não tem destino SNS ou SQS direto; usar Kinesis e um consumidor intermediário. Uma fila única distribui trabalho, não uma cópia a cada sistema. Eventos operacionais RDS não são CDC de linhas; polling de outbox pode ser uma solução confiável.
- A correção foi incorporada ao enunciado, alternativas e explicação; remover ressalva antiga.

Campos ajustados: prompt, options, explanation, technicalNote.

Documentação: [Kinesis como destino DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html); [Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html).

### Bloco 1 pergunta 43

Identificador do banco: 43.

- Rotação exige configuração e atualização da aplicação; não garante ausência de downtime. Parameter Store pode integrar segredos, mas não possui um botão de rotação de senha para parâmetros comuns. S3 protegido não é intrinsecamente inseguro.

Campos ajustados: options, explanation.

Documentação: [Configuração de rotação Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html); [Estrutura de um segredo](https://docs.aws.amazon.com/secretsmanager/latest/userguide/whats-in-a-secret.html).

### Bloco 1 pergunta 44

Identificador do banco: 44.

**Gabarito anterior**

- 2. Instale um agente AWS DataSync no data center on-premises para facilitar a transferência dos dados para o Amazon EFS.
- 5. Use o AWS DataSync para criar uma configuração de local (location) adequada para o servidor SFTP on-premises e para o sistema de arquivos Amazon EFS.

**Gabarito corrigido**

- 2. Instale um agente AWS DataSync no data center on-premises para facilitar a transferência dos dados para o Amazon EFS.
- 5. Crie um local DataSync de origem NFS para o armazenamento usado pelo servidor SFTP e um local de destino Amazon EFS. Configure uma tarefa de transferência entre eles.

- DataSync lê o NFS subjacente, não SFTP. EFS possui modalidades regional e One Zone e recomenda mount target na zona do cliente. EBS tem Multi-Attach em configurações específicas; rsync pode ser automatizado.

Campos ajustados: options, explanation.

Documentação: [DataSync com origem NFS](https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html); [Locais suportados DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html).

### Bloco 1 pergunta 45

Identificador do banco: 45.

**Gabarito anterior**

- 1. Usar Amazon Kinesis Data Streams para capturar e processar os dados em tempo real, e armazenar os dados no Amazon S3 para armazenamento durável e escalável.

**Gabarito corrigido**

- 1. Use Kinesis Data Streams em modo sob demanda para ingerir os dados. Configure consumidores, como Lambda ou Managed Service for Apache Flink, para processá-los e uma entrega gerenciada ou consumidor para persistir os resultados no S3.

- Kinesis Data Streams ingere e retém registros; o processamento é feito por consumidores. Explicitar modo sob demanda e não afirmar que Lambda ou Redshift sejam incapazes de streaming.

Campos ajustados: options, explanation.

Documentação: [Modos de capacidade Kinesis](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html); [Consumidores de processamento Kinesis](https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-implementation-app-java.html).

### Bloco 1 pergunta 46

Identificador do banco: 46.

- EBS tem Multi-Attach em configurações específicas, EFS escala e S3 não é econômico por estar em várias zonas. Especificar acesso por API de objetos e não presumir preço universal.

Campos ajustados: prompt, options, explanation.

Documentação: [Objetos e recursos do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).

### Bloco 1 pergunta 47

Identificador do banco: 47.

**Gabarito anterior**

- 2. Armazene os documentos carregados em um bucket Amazon S3 com Versionamento S3 e Bloqueio de Objetos S3 (S3 Object Lock) ativados.

**Gabarito corrigido**

- 2. Use S3 com versionamento e Object Lock e aplique às versões retenção no modo Compliance pelo prazo obrigatório, por configuração padrão ou individual.

- Apenas habilitar Object Lock não aplica retenção. Precisar Compliance e duração exigida; proteção de versões não bloqueia novas versões e não comprova automaticamente conformidade.

Campos ajustados: prompt, options, explanation.

Documentação: [Proteção de versões Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

### Bloco 1 pergunta 48

Identificador do banco: 48.

- Distinguir retenção de snapshots de preservação de cada transação. Backups DynamoDB não são objetos exportáveis para bucket próprio; exportação é outro recurso. AWS Backup não torna todo backup imutável nem restaura automaticamente por padrão.

Campos ajustados: prompt, options, explanation.

Documentação: [Backups avançados DynamoDB no AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html); [Backup sob demanda DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html).

### Bloco 1 pergunta 49

Identificador do banco: 49.

**Gabarito anterior**

- 4. Usar o AWS Database Migration Service (DMS) com replicação contínua. Configurar o Amazon RDS para MySQL com uma implantação Multi-AZ.

**Gabarito corrigido**

- 4. Use DMS com carga inicial e CDC, mantendo a origem ativa durante a cópia. Prepare RDS for MySQL Multi-AZ como destino e execute um cutover controlado após validar e sincronizar os dados.

- Backup não exige universalmente origem offline. CDC possui atraso variável, sem SLA de tempo real; cutover e failover não são ininterruptos por definição.

Campos ajustados: options, explanation.

Documentação: [DMS full load e CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html).

### Bloco 1 pergunta 50

Identificador do banco: 50.

- Failover depende de rotas, BGP e túneis previamente configurados; Route 53 não é o mecanismo desse caminho privado. Direct Connect não criptografa por padrão nem garante latência universal. Criação e configuração podem ser automatizadas, mas circuito físico não surge por CLI após falhar.

Campos ajustados: options, explanation.

Documentação: [VPN como backup de Direct Connect](https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/direct-connect.html); [Preferência de rotas e backup no Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html); [Criptografia Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html).

### Bloco 1 pergunta 51

Identificador do banco: 51.

**Gabarito anterior**

- 3. Criptografia do lado do servidor com chaves do AWS KMS (SSE-KMS) com rotação automática.

**Gabarito corrigido**

- 3. Use SSE-KMS com chave simétrica gerenciada pelo cliente elegível à rotação automática. Habilite a rotação com período de 365 dias e configure CloudTrail para registrar as operações KMS relevantes.

- Configurar explicitamente chave simétrica gerenciada pelo cliente com rotação anual. Rotação de material não recriptografa objetos nem troca chaves de dados; CloudTrail não registra automaticamente toda operação possível sem configuração.

Campos ajustados: options, explanation.

Documentação: [Rotação de chaves KMS](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html); [SSE-KMS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html).

### Bloco 1 pergunta 52

Identificador do banco: 52.

**Gabarito anterior**

- 2. Substitua o grupo de segurança atual das instâncias da aplicação por um que permita acesso SSH de entrada apenas do endereço IP privado do bastion host.
- 5. Substitua o grupo de segurança atual do bastion host por um que permita apenas acesso de entrada do intervalo de IP público autorizado da empresa.

**Gabarito corrigido**

- 2. Substitua o grupo de segurança atual das instâncias da aplicação por um que permita acesso SSH de entrada apenas do endereço IP privado do bastion host.
- 5. Permita TCP 22 de entrada no bastion somente a partir do intervalo de IPs públicos autorizado da empresa.

- Duas alternativas eram equivalentes e outra combinava uma regra válida com uma saída redundante, sem invalidar o fluxo. Tornar os distratores objetivamente distintos e explicitar portas e estado de conexões.

Campos ajustados: options, explanation.

Documentação: [Regras de segurança para SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html).

### Bloco 1 pergunta 53

Identificador do banco: 53.

- CloudFront não armazena indiscriminadamente conteúdo dinâmico personalizado nem torna imediato o acesso a um backend distante. Distinguir cache seguro e otimização do transporte.

Campos ajustados: options, explanation.

Documentação: [Origens personalizadas CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html).

### Bloco 1 pergunta 54

Identificador do banco: 54.

**Gabarito anterior**

- 2. Armazenar os dados no Amazon S3 e habilitar a criptografia do lado do servidor com chaves gerenciadas pelo AWS Key Management Service (SSE-KMS). Ativar o AWS CloudTrail para registrar todas as chamadas de API e auditar o acesso aos dados.

**Gabarito corrigido**

- 2. Armazene os dados em S3 com SSE-KMS, bloqueio de acesso público e políticas IAM e de bucket limitadas às identidades autorizadas. Configure CloudTrail com eventos de dados para as operações de objetos que precisam ser auditadas.

- Eventos de dados S3 não são registrados por padrão. Criptografia e logs não restringem sozinhos usuários; adicionar IAM/política de bucket e bloqueio público. CSE não impede auditoria e CloudTrail não audita consultas SQL RDS automaticamente.

Campos ajustados: options, explanation.

Documentação: [Eventos S3 no CloudTrail](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging-s3-info.html); [SSE-KMS e permissões](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html).

### Bloco 1 pergunta 55

Identificador do banco: 55.

- Remover garantias de indisponibilidade zero e afirmação de Spot sem aviso. GuardDuty e automações não substituem mitigação DDoS; CloudFront não cacheia todo conteúdo dinâmico.

Campos ajustados: prompt, options, explanation.

Documentação: [Proteções Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-summary.html).

### Bloco 1 pergunta 56

Identificador do banco: 56.

- Modo sob demanda não oferece escala ilimitada ou ausência de monitoramento; cobrança inclui armazenamento e outros recursos além das solicitações.

Campos ajustados: options, explanation.

Documentação: [Capacidade sob demanda DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).

### Bloco 1 pergunta 57

Identificador do banco: 57.

**Gabarito anterior**

- 2. Configure o grupo de segurança para o tier web para permitir tráfego de saída na porta 443 para 0.0.0.0/0.
- 3. Configure o grupo de segurança para o tier web para permitir tráfego de entrada na porta 443 de 0.0.0.0/0.
- 5. Configure o grupo de segurança para o tier de banco de dados para permitir tráfego de entrada na porta 1433 do grupo de segurança para o tier web.

**Gabarito corrigido**

- 2. Permita TCP 1433 de saída no grupo da camada web, com o grupo de segurança do banco como destino.
- 3. Configure o grupo de segurança para o tier web para permitir tráfego de entrada na porta 443 de 0.0.0.0/0.
- 5. Configure o grupo de segurança para o tier de banco de dados para permitir tráfego de entrada na porta 1433 do grupo de segurança para o tier web.

- Saída web443 não permite iniciar SQL1433. Incluir saída1433 para o grupo do banco, entradaHTTPS pública e entradaSQL da camadaweb. SG tem somente Allow e estado de resposta; 0.0.0.0/0 significa todo IPv4.

Campos ajustados: prompt, options, explanation.

Documentação: [Regras web e banco EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html); [Estado de conexões dos grupos de segurança](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html).

### Bloco 1 pergunta 58

Identificador do banco: 58.

- Bookmarks de S3 usam last-modified e rastreiam a origem, não deduplicam todo registro ou limpam saídas. Explicitar preservação da origem para distinguir exclusão dos arquivos.

Campos ajustados: prompt, options, explanation.

Documentação: [Marcadores de trabalho Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html).

### Bloco 1 pergunta 59

Identificador do banco: 59.

- ALB também aceita certificados IAM, não apenas ACM. TLS cliente–ALB não garante TLS até backend. Importados não têm renovação gerenciada, mas a reimportação pode ser automatizada; monitorar expiração real, não supor validade anual.

Campos ajustados: prompt, options, explanation.

Documentação: [Certificados importados no ACM](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html); [Eventos ACM no EventBridge](https://docs.aws.amazon.com/acm/latest/userguide/supported-events.html).

### Bloco 1 pergunta 60

Identificador do banco: 60.

**Gabarito anterior**

- 4. Crie um acelerador padrão no AWS Global Accelerator. Configure grupos de endpoints nas regiões us-west-2 e eu-west-1 e adicione os dois NLBs como endpoints para esses grupos, permitindo que o Global Accelerator distribua o tráfego automaticamente com base no ponto de entrada mais próximo e na saúde dos endpoints.

**Gabarito corrigido**

- 4. Crie um acelerador padrão no Global Accelerator, com listeners TCP e UDP na porta 53. Configure grupos de endpoints em us-west-2 e eu-west-1 e associe o NLB de cada região, com verificações de integridade e políticas apropriadas.

- CloudFront e ALB não transportam DNS UDP/TCP comum; essa é a razão decisiva, não incapacidade geral de conteúdo dinâmico. Corrigir regiões do exemplo e remover garantia de failover instantâneo.

Campos ajustados: options, explanation.

Documentação: [Aceleradores padrão Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html).

### Bloco 1 pergunta 61

Identificador do banco: 61.

- Glue também oferece Streaming ETL; não descartá-lo como exclusivamente batch. Kinesis não executa a lógica de transformação, Firehose usa buffers e não garante entrega instantânea.

Campos ajustados: prompt, options, explanation.

Documentação: [Transformações no Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html); [Glue Streaming ETL](https://docs.aws.amazon.com/glue/latest/dg/add-job-streaming.html).

### Bloco 1 pergunta 62

Identificador do banco: 62.

**Gabarito anterior**

- 4. Configure o AWS Firewall Manager em ambas as regiões para gerenciar centralmente as regras do AWS WAF, aplicando políticas de segurança consistentes contra ataques de injeção de SQL e XSS em múltiplas contas e regiões.

**Gabarito corrigido**

- 4. Na conta administradora do Firewall Manager, use políticas AWS WAF regionais em us-east-1 e ap-southeast-2 para aplicar grupos de regras contra SQL injection e XSS aos estágios REST API das contas e recursos no escopo da organização.

- Precisar conta administradora, organização com todos recursos e políticas regionais. Firewall Manager centraliza WAF; não é preciso configurá-lo como se fosse um appliance em cada região nem supor uma política regional única global.

Campos ajustados: options, explanation.

Documentação: [Pré-requisitos Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html); [Políticas WAF gerenciadas por Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-fms.html); [Organizations para Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/join-aws-orgs.html).

### Bloco 1 pergunta 63

Identificador do banco: 63.

**Gabarito anterior**

- 3. Use o Amazon API Gateway com o AWS Lambda.

**Gabarito corrigido**

- 3. Use API Gateway e Lambda para receber e consultar posições. Grave o estado atual em DynamoDB e encaminhe eventos ou dados históricos à plataforma analítica existente.

- API Gateway e Lambda não são armazenamento durável. Completar a alternativa com banco e integração analítica; Kinesis Data Analytics/Flink não é serviço exclusivamente histórico ou batch.

Campos ajustados: options, explanation.

Documentação: [REST API com Lambda e DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html).

### Bloco 1 pergunta 64

Identificador do banco: 64.

**Gabarito anterior**

- 4. Crie uma regra do AWS Config que verifica certificados que expirarão dentro de 30 dias. Configure o Amazon EventBridge para invocar um alerta personalizado por meio do Amazon SNS quando o AWS Config relatar um recurso não conforme.

**Gabarito corrigido**

- 1. Capture no EventBridge o evento ACM Certificate Approaching Expiration com DaysToExpiry menor ou igual a 30. Envie ao SNS, diretamente ou por Lambda quando for necessário personalizar a mensagem.
- 4. Configure a regra gerenciada AWS Config acm-certificate-expiration-check com daysToExpiration=30. Encaminhe mudanças de conformidade relevantes por EventBridge para SNS.

- ACM possui eventos nativos Approaching Expiration; A também é válida. Aceitar A e D, e explicitar escopo distinto dos checks Trusted Advisor em vez de afirmar que nenhum monitora certificado.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Eventos nativos de expiração ACM](https://docs.aws.amazon.com/acm/latest/userguide/supported-events.html); [Regra Config de expiração ACM](https://docs.aws.amazon.com/config/latest/developerguide/acm-certificate-expiration-check.html); [Escopo de verificações Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/security-checks.html).

### Bloco 1 pergunta 65

Identificador do banco: 65.

- CloudFront não transcodifica automaticamente vídeo nem escolhe formatos por região sem lógica adicional. Precisar conteúdo previamente codificado e distinguir cache/entrega de geração de formatos.

Campos ajustados: prompt, options, explanation.

Documentação: [Vídeo sob demanda com CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-video.html).

### Bloco 2 pergunta 1

Identificador do banco: 66.

**Gabarito anterior**

- 4. Criar uma chave gerenciada pelo cliente no AWS Key Management Service (KMS). Habilitar a rotação automática anual da chave. Configurar o bucket S3 para usar essa chave KMS como padrão para criptografia no lado do servidor (SSE-KMS). Em seguida, mover os dados para o bucket S3.

**Gabarito corrigido**

- 4. Crie uma chave simétrica KMS gerenciada pelo cliente com material gerado pelo KMS. Habilite rotação automática com período de 365 dias. Configure SSE-KMS com essa chave como padrão do bucket e envie os dados.

- Rotação automática exige chave simétrica de origem AWS_KMS elegível e configuração explícita. Material importado não tem rotação automática. Criptografia padrão não recriptografa objetos existentes nem impede outros cabeçalhos.

Campos ajustados: options, explanation.

Documentação: [Habilitar rotação KMS](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable.html); [SSE-KMS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html).

### Bloco 2 pergunta 2

Identificador do banco: 67.

- Distinguir dois dias de espera e retenção de uma execução contínua de dois dias, que excederia a visibilidade máxima. SNS e Kinesis possuem retenção/retries; DLQ SQS depende de maxReceiveCount e não de qualquer erro de negócio observado automaticamente.

Campos ajustados: prompt, options, explanation.

Documentação: [DLQ no SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html); [Visibilidade SQS e limite de doze horas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [Retries SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html).

### Bloco 2 pergunta 3

Identificador do banco: 68.

- SQS não garante que nenhuma solicitação jamais se perca sem aceite confirmado, retenção e idempotência. EventBridge/SNS podem tentar entrega novamente, mas aceitação do comando não confirma conclusão do pedido.

Campos ajustados: options, explanation.

Documentação: [Recebimento, exclusão e retry SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [Auto Scaling para consumidores SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html).

### Bloco 2 pergunta 4

Identificador do banco: 69.

**Gabarito anterior**

- 2. Usar o AWS Shield Advanced com o Network Load Balancer (NLB).
- 4. Usar o AWS WAF para proteger o Amazon API Gateway.

**Gabarito corrigido**

- 2. Habilite Shield Advanced nos Elastic IPs associados ao NLB público, protegendo o tráfego desses endereços.
- 4. Associe uma web ACL WAF regional ao estágio REST da API Gateway e configure as regras de inspeção necessárias.

- Shield Advanced protege NLB por EIPs associados, não pelo ARN do NLB. Especificar API Gateway REST e NLB público com EIPs, pois NLB interno não atende a esse desenho. WAF também suporta outros recursos além de ALB/API/CloudFront.

Campos ajustados: prompt, options, explanation.

Documentação: [Proteção Shield de EC2 e NLB por EIP](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-protections-ec2-nlb.html); [Recursos protegidos pelo WAF](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html); [CreateProtection Shield](https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html).

### Bloco 2 pergunta 5

Identificador do banco: 70.

**Gabarito anterior**

- 3. Criar um AWS Transit Gateway na conta da AWS da equipe de rede e configurar rotas estáticas para cada VPC, permitindo uma gestão centralizada e escalável das conexões entre as VPCs.

**Gabarito corrigido**

- 3. Crie um Transit Gateway na conta de rede e compartilhe-o com as contas pelo AWS RAM. Crie attachments das VPCs e configure associações, propagação ou rotas explícitas nas tabelas do Transit Gateway e rotas nas VPCs conforme a conectividade desejada.

- Completar compartilhamento entre contas e roteamento. Peering é não transitivo e uma malha completa cresce quadraticamente, não exponencialmente. NAT/IGW não criam roteamento privado entre VPCs.

Campos ajustados: options, explanation.

Documentação: [Compartilhamento Transit Gateway por RAM](https://docs.aws.amazon.com/vpc/latest/tgw/working-with-transit-gateways.html).

### Bloco 2 pergunta 6

Identificador do banco: 71.

**Gabarito anterior**

- 2. Armazenar imagens de contêiner no repositório Amazon Elastic Container Registry (Amazon ECR). Utilizar um cluster do Amazon Elastic Container Service (Amazon ECS) com o tipo de lançamento AWS Fargate para executar os contêineres. Usar o rastreamento de destino para dimensionar automaticamente com base na demanda.

**Gabarito corrigido**

- 2. Armazene as imagens no ECR e execute um serviço ECS com Fargate em sub-redes de múltiplas zonas, com tarefas suficientes para redundância e balanceamento. Configure Service Auto Scaling com target tracking sobre uma métrica adequada.

- Fargate elimina hosts EC2, não toda configuração do cluster e serviço. Alta disponibilidade exige distribuição de tarefas, capacidade mínima e balanceamento; Auto Scaling precisa ser configurado.

Campos ajustados: options, explanation.

Documentação: [Fargate para ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html); [Auto Scaling de serviços ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html).

### Bloco 2 pergunta 7

Identificador do banco: 72.

- ASG não pode atravessar regiões. Restringir a questão à camada web e não garantir disponibilidade de todas as camadas ou capacidade restante apenas pela distribuição.

Campos ajustados: prompt, options, explanation.

Documentação: [ASG distribuído entre zonas](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-az-console.html).

### Bloco 2 pergunta 8

Identificador do banco: 73.

- DAX requer cliente compatível e endpoint, não é ativação transparente sem alterações. Cacheia leituras eventualmente consistentes; leituras fortes passam ao DynamoDB. DAX e ElastiCache exigem configuração e monitoramento.

Campos ajustados: prompt, options, explanation.

Documentação: [Operação e consistência DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html).

### Bloco 2 pergunta 9

Identificador do banco: 74.

- RDS Proxy reduz overhead de conexões, mas ainda pode enfileirar, limitar ou rejeitar. Provisioned concurrency prepara ambientes Lambda e não resolve o pool de conexões. Remover garantias absolutas de ausência de timeout.

Campos ajustados: options, explanation.

Documentação: [Pool e limites do RDS Proxy Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html).

### Bloco 2 pergunta 10

Identificador do banco: 75.

- Caches podem reduzir carga no RDS; não negá-lo. Réplicas assíncronas não substituem automaticamente failover Multi-AZ. Esclarecer consultas variadas com pouca reutilização e HA já existente.

Campos ajustados: prompt, options, explanation.

Documentação: [Réplicas RDS para relatórios](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

### Bloco 2 pergunta 11

Identificador do banco: 76.

- Nem toda solicitação é cache hit. CRR pode ajudar proximidade quando há roteamento, mas não implementa uma CDN sozinha. Distinguir URLs S3 pré-assinadas das assinaturas CloudFront.

Campos ajustados: options, explanation.

Documentação: [Entrega CloudFront a partir de S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html); [Conteúdo privado e assinaturas CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).

### Bloco 2 pergunta 12

Identificador do banco: 77.

- Cache pode melhorar custos, mas não há garantia universal de menor preço nem eliminação de cobranças CloudFront. A transferência S3 para CloudFront tem regra de preço específica.

Campos ajustados: options, explanation.

Documentação: [CloudFront para entrega de mídia](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-video.html); [Preços S3 e transferência para CloudFront](https://aws.amazon.com/s3/pricing/).

### Bloco 2 pergunta 13

Identificador do banco: 78.

**Gabarito anterior**

- 2. Implantar um Gateway Load Balancer (GWLB) na VPC de inspeção. Criar um endpoint do Gateway Load Balancer para receber os pacotes de entrada e encaminhar o tráfego diretamente para o appliance de firewall para inspeção.

**Gabarito corrigido**

- 2. Implante GWLB na VPC dos appliances compatíveis com GENEVE e publique seu serviço de endpoint. Crie endpoints GWLB na VPC da aplicação e ajuste rotas de ingresso e retorno para o tráfego passar pela inspeção antes de chegar aos servidores.

- GWLB encaminha para o appliance, não inspeciona sozinho. Exige compatibilidade GENEVE e rotas de ida e volta. Transit Gateway não fica dentro de uma VPC e pode compor inspeção, mas não substitui o appliance.

Campos ajustados: options, explanation.

Documentação: [Modelo GWLB e appliances](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html); [Rotas de inspeção GWLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html).

### Bloco 2 pergunta 14

Identificador do banco: 79.

**Gabarito anterior**

- 1. Garantir que a aplicação utilize criptografia em repouso com AWS KMS para proteger os dados sensíveis armazenados, complementando a segurança em trânsito fornecida pelo HTTPS.
- 5. Configurar URLs assinadas do CloudFront para restringir o acesso ao conteúdo servido pela distribuição, garantindo que apenas aplicações autorizadas possam acessar os dados.
- 6. Implementar AWS WAF para criar regras que bloqueiem ou permitam o acesso a solicitações específicas, protegendo a aplicação contra ataques e acessos não autorizados.

**Gabarito corrigido**

- 1. Configure field-level encryption no CloudFront, selecionando os campos e fornecendo a chave pública. Mantenha a chave privada somente na aplicação que deve descriptografar os valores.

- A combinação original de KMS em repouso, URL assinada e WAF não mantém campos cifrados entre componentes. Corrigir o objetivo para field-level encryption e remover alegação falsa de inferioridade de cookies assinados.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Criptografia de campos CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html); [URLs e cookies assinados](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).

### Bloco 2 pergunta 15

Identificador do banco: 80.

**Gabarito anterior**

- 4. Configurar o Amazon CloudFront e o Amazon S3 para usar uma identidade de acesso à origem (OAI) para restringir o acesso ao bucket S3. Habilitar o AWS WAF na distribuição do CloudFront para inspecionar todas as requisições.

**Gabarito corrigido**

- 4. Use um bucket S3 privado com origem REST, OAC no CloudFront e política do bucket restrita à distribuição. Associe uma web ACL WAF à distribuição e mantenha bloqueado o acesso público ao bucket.

- WAF possui ARNs; não é identidade que lê o bucket. OAC é recomendado para novos desenhos, OAI é mecanismo legado ainda suportado. Associação WAF não restringe sozinha acesso direto à origem.

Campos ajustados: options, explanation.

Documentação: [Restringir origem S3 com OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html); [Recursos WAF suportados](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html).

### Bloco 2 pergunta 16

Identificador do banco: 81.

**Gabarito anterior**

- 1. Utilizar um banco de dados global Amazon Aurora com uma implantação de ""pilot light"".

**Gabarito corrigido**

- 2. Utilizar um banco de dados global Amazon Aurora com uma implantação de "warm standby".

- Warm standby mantém versão completa funcional em escala reduzida; pilot light ainda exige ativar recursos antes de servir. Pelo menor RTO com aplicação mínima já pronta, corrigir A para B. Multi-AZ não é replicação regional, mas RDS pode ter outros mecanismos entre regiões.

Campos ajustados: prompt, options, explanation.

Documentação: [Estratégias de recuperação AWS](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html).

### Bloco 2 pergunta 17

Identificador do banco: 82.

- A função IAM não é identidade temporária; as credenciais emitidas o são. Distinguir task role, execution role e identidade que lançou as instâncias.

Campos ajustados: options, explanation.

Documentação: [Função IAM da tarefa ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html).

### Bloco 2 pergunta 18

Identificador do banco: 83.

**Gabarito anterior**

- 1. Amazon FSx for Lustre integrado com o Amazon S3

**Gabarito corrigido**

- 1. Use FSx for Lustre para o sistema de arquivos paralelo compartilhado e associe-o a um repositório S3. Configure importação e exportação ou tarefas de repositório para preservar entradas e resultados no S3.

- Exportação para S3 precisa ser configurada e é assíncrona. FSx Windows suporta clientes concorrentes; EBS Multi-Attach existe em tipos específicos. Não tratar toda classe Glacier como lenta.

Campos ajustados: options, explanation.

Documentação: [Associação de repositório FSx Lustre e S3](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html).

### Bloco 2 pergunta 19

Identificador do banco: 84.

- Geolocalização corresponde ao endereço IP, não comprova localização física ou identidade do usuário. NACL/SG não têm regra nativa de país, embora listas IP possam ser mantidas externamente.

Campos ajustados: options, explanation.

Documentação: [Regra geográfica WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html).

### Bloco 2 pergunta 20

Identificador do banco: 85.

**Gabarito anterior**

- 1. Criar um plano de uso no API Gateway com uma chave de API compartilhada apenas com usuários legítimos para controlar o acesso.
- 4. Implementar uma regra no AWS WAF para identificar padrões de tráfego malicioso e bloquear automaticamente as solicitações suspeitas.

**Gabarito corrigido**

- 1. Configure um authorizer de user pool Cognito nos métodos protegidos e exija tokens válidos dos usuários, com os escopos apropriados quando necessários.
- 4. Associe uma web ACL WAF ao estágio REST e configure regras e limites de taxa apropriados para os padrões de abuso identificados.

- Chave API e usage plan não autenticam nem autorizam usuários. Substituir a alternativa por authorizer de identidade. WAF reduz abuso mas não garante classificar toda botnet sem falsos positivos.

Campos ajustados: prompt, options, explanation.

Documentação: [API keys não são autenticação](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html); [Authorizer Cognito para REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html); [WAF em APIs REST](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html).

### Bloco 2 pergunta 21

Identificador do banco: 86.

**Gabarito anterior**

- 1. Partitionar os dados por data e região no Amazon S3.
- 3. Usar um processo de extração, transformação e carga (ETL) da AWS para converter os arquivos CSV para o formato Apache Parquet.

**Gabarito corrigido**

- 1. Particionar os dados por data e região no Amazon S3.
- 3. Usar um processo de extração, transformação e carga (ETL) da AWS para converter os arquivos CSV para o formato Apache Parquet.

- Particionamento e Parquet reduzem a leitura quando compatíveis com os filtros; não há percentual garantido de redução nem regra universal de 126 MB. Arquivos grandes divisíveis podem ser processados em paralelo, e a troca do mecanismo de análise não otimiza por si só o Athena.

Campos ajustados: options, explanation.

Documentação: [Athena: organização, partições, formatos colunares e tamanho dos arquivos](https://docs.aws.amazon.com/athena/latest/ug/performance-tuning-data-optimization-techniques.html).

### Bloco 2 pergunta 22

Identificador do banco: 87.

- DynamoDB aceita dados binários e bancos relacionais podem armazenar BLOBs. A escolha de S3 com CDN decorre da adequação a objetos estáticos e distribuição global, não de uma incapacidade absoluta dos outros serviços.

Campos ajustados: options, explanation.

Documentação: [CloudFront: bucket S3 como origem](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html); [DynamoDB: limites de tamanho dos itens](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html).

### Bloco 2 pergunta 23

Identificador do banco: 88.

**Gabarito anterior**

- 3. Criar uma função IAM com permissões de leitura específicas para o parâmetro no Parameter Store e permitir a permissão Decrypt em uma chave do AWS Key Management Service (AWS KMS) usada para criptografar o parâmetro. Atribuir essa função IAM à instância EC2 para que ela possa acessar as credenciais de forma segura.

**Gabarito corrigido**

- 3. Armazenar as credenciais como um parâmetro SecureString criptografado com uma chave KMS gerenciada pelo cliente. Atribuir à instância EC2 uma função IAM com leitura apenas desse parâmetro e permissão kms:Decrypt na chave, autorizada também pela política da chave.

- Especificar SecureString, autorização de leitura e de KMS e a função da instância evita tratar todos os tipos de parâmetros como criptografados ou prometer ausência absoluta de exposição.

Campos ajustados: options, explanation.

Documentação: [Parameter Store: criptografia de SecureString com KMS](https://docs.aws.amazon.com/systems-manager/latest/userguide/secure-string-parameter-kms-encryption.html); [IAM: funções para Amazon EC2](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html).

### Bloco 2 pergunta 24

Identificador do banco: 89.

**Gabarito anterior**

- 2. Amazon RDS MySQL com funcionalidade Multi-AZ ativada

**Gabarito corrigido**

- 2. Amazon RDS for MySQL em uma implantação de instância Multi-AZ, com uma primária e um standby síncrono em outra Zona de Disponibilidade.

- A documentação atual oferece tanto instância Multi-AZ com standby síncrono quanto cluster Multi-AZ de três AZs com replicação semissíncrona. Corrigir a afirmação de que RDS MySQL só suporta dois nós, mantendo a distinção técnica da alternativa sobre três confirmações síncronas.

Campos ajustados: options, explanation.

Documentação: [RDS: implantação Multi-AZ com um standby síncrono](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html); [RDS: cluster Multi-AZ com três AZs e replicação semissíncrona](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html).

### Bloco 2 pergunta 25

Identificador do banco: 90.

- Glacier Instant Retrieval permite acesso em milissegundos, portanto a alternativa deve especificar Flexible Retrieval. Diferenciar latência de acesso ao objeto de um RTO para restaurar toda a aplicação.

Campos ajustados: prompt, options, explanation.

Documentação: [S3: diferenças entre classes Glacier e tempos de recuperação](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html); [S3: classes de armazenamento](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

### Bloco 2 pergunta 26

Identificador do banco: 91.

- Snowball deixou de atender novos clientes em 2025 e seu suporte comercial termina em 2026. A transferência física evita o gargalo WAN, mas logística e cópia local não têm prazo garantido. DataSync não se limita a volumes moderados.

Campos ajustados: prompt, options, explanation.

Documentação: [Snowball: transferência física, preparação do dispositivo e encerramento de vendas](https://aws.amazon.com/snowball/faqs/); [Snowball: fim de suporte nas Regiões comerciais em 31/12/2026](https://aws.amazon.com/snowball/); [Snowball: disponibilidade apenas para clientes existentes desde 07/11/2025](https://docs.aws.amazon.com/snowball/latest/developer-guide/doc-history.html).

### Bloco 2 pergunta 27

Identificador do banco: 92.

**Gabarito anterior**

- 1. Implantar a aplicação web em um ambiente AWS Elastic Beanstalk. Usar a troca de URL para alternar entre vários ambientes Elastic Beanstalk para testes de recursos.

**Gabarito corrigido**

- 1. Implantar a aplicação em ambientes AWS Elastic Beanstalk com plataforma compatível, balanceador de carga e instâncias em pelo menos duas AZs. Testar novas versões em um ambiente separado e trocar os CNAMEs dos ambientes após a validação.

- Beanstalk só oferece redundância entre AZs quando configurado para isso. A troca de CNAME implementa blue/green, não um teste A/B ou canário automático, e a equipe continua responsável pela aplicação e configuração.

Campos ajustados: options, explanation.

Documentação: [Elastic Beanstalk: implantação blue/green por troca de CNAME](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html); [Elastic Beanstalk: ambientes com balanceamento e Auto Scaling](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.as.html).

### Bloco 2 pergunta 28

Identificador do banco: 93.

**Gabarito anterior**

- 1. Modificar os modelos do AWS CloudFormation. Substituir as instâncias EC2 por instâncias R5. Utilizar as métricas de memória EC2 integradas do Amazon CloudWatch para monitorar o desempenho da aplicação para o planejamento futuro de capacidade.

**Gabarito corrigido**

- 3. Modificar os modelos do AWS CloudFormation para usar instâncias R5 dimensionadas para a memória necessária e instalar e configurar o agente do Amazon CloudWatch para publicar métricas de uso de memória. Automatizar a implantação e a configuração do agente.

- O uso de memória dentro do sistema operacional não é uma métrica EC2 publicada por padrão. A alternativa com agente é necessária para medir memória; o diagnóstico foi explicitado para não prometer que a troca de família resolve qualquer latência.

Campos ajustados: prompt, options, explanation.

Documentação: [EC2: métricas publicadas no CloudWatch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html); [CloudWatch: métricas adicionais coletadas pelo agente](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html); [EC2: instâncias otimizadas para memória, incluindo R5](https://docs.aws.amazon.com/ec2/latest/instancetypes/mo.html).

### Bloco 2 pergunta 29

Identificador do banco: 94.

- Athena é adequado para consultar os arquivos sem criar infraestrutura de banco. Redshift Spectrum também consulta S3 sem ingestão, e Redshift tem modalidade Serverless; remover a afirmação de que todo Redshift exige ETL, cluster dedicado e custo fixo.

Campos ajustados: options, explanation.

Documentação: [Athena: consultas SQL serverless sobre dados no S3](https://docs.aws.amazon.com/athena/latest/ug/what-is.html); [Redshift Spectrum: consultas ao S3 sem carregar tabelas locais](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html).

### Bloco 2 pergunta 30

Identificador do banco: 95.

**Gabarito anterior**

- 4. Utilizar o Amazon ElastiCache para gerenciar e armazenar dados de sessão.

**Gabarito corrigido**

- 4. Armazenar os dados de sessão em um Amazon ElastiCache compartilhado pela aplicação, com Valkey ou Redis OSS e uma configuração Multi-AZ com failover automático.

- Sessões persistentes não impedem Auto Scaling, mas não externalizam o estado. ElastiCache deve ser configurado para disponibilidade; cache, replicação e expiração não garantem preservação absoluta de todas as sessões.

Campos ajustados: prompt, options, explanation.

Documentação: [ElastiCache: Multi-AZ e failover com Valkey e Redis OSS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html); [ALB: funcionamento das sessões persistentes](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html).

### Bloco 2 pergunta 31

Identificador do banco: 96.

- CloudWatch Logs atualmente suporta SQL para seus grupos de logs, e Redshift Spectrum não exige ingestão. Athena requer esquema e formato JSON compatível; retirar promessas de consulta imediata de qualquer JSON e a negação de recursos dos distratores.

Campos ajustados: options, explanation.

Documentação: [Athena: SQL serverless sobre arquivos no S3](https://docs.aws.amazon.com/athena/latest/ug/what-is.html); [CloudWatch Logs: consultas OpenSearch SQL](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_SQL.html); [Redshift Spectrum: consultar S3 sem carregar os arquivos](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html).

### Bloco 2 pergunta 32

Identificador do banco: 97.

**Gabarito anterior**

- 3. Criar uma política de controle de serviço (SCP) na unidade organizacional raiz para negar acesso aos serviços ou ações específicos em todas as contas da organização.

**Gabarito corrigido**

- 3. Criar uma política de controle de serviço (SCP) que negue as ações necessárias e anexá-la à raiz da organização, após testar seu impacto, para aplicar o limite às contas-membro.

- SCPs limitam principais das contas-membro, não a conta de gerenciamento nem funções vinculadas a serviços. A raiz da organização não é uma OU, SCP não concede permissões nem ativa serviços, e ACL de S3 não é firewall de rede.

Campos ajustados: prompt, options, explanation.

Documentação: [Organizations: SCPs, escopo e exceções](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

### Bloco 2 pergunta 33

Identificador do banco: 98.

**Gabarito anterior**

- 1. Criar uma função IAM que concede acesso ao bucket S3. Anexar essa função às instâncias EC2 para que possam acessar o bucket de forma segura e eficiente.

**Gabarito corrigido**

- 1. Criar uma função IAM com as permissões mínimas necessárias no bucket S3 e associá-la às duas instâncias EC2 por meio de um perfil de instância. Usar as credenciais temporárias da função na aplicação.

- A renovação automática é das credenciais temporárias, não das permissões IAM. Explicitar perfil de instância e menor privilégio sem afirmar que usuários IAM não podem ser usados por software ou que uma função garante conformidade absoluta.

Campos ajustados: options, explanation.

Documentação: [IAM: função e perfil de instância EC2, credenciais temporárias](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html).

### Bloco 2 pergunta 34

Identificador do banco: 99.

**Gabarito anterior**

- 1. Utilizar Reserved Instances para a capacidade básica e Spot Instances para lidar com capacidade adicional.

**Gabarito corrigido**

- 4. Usar o desconto de Reserved Instances para a capacidade básica e instâncias On-Demand para a capacidade adicional.

- O cenário não admite interromper e reiniciar tarefas, portanto Spot não atende a esse requisito. Reserved Instances são um benefício de cobrança; a modalidade regional não reserva capacidade. Corrigir o gabarito em vez de acrescentar tolerância a falhas para justificar Spot.

Campos ajustados: prompt, options, explanation.

Documentação: [EC2: Spot, tolerância a interrupções e disponibilidade de capacidade](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html); [EC2: Reserved Instances regionais e zonais](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html).

### Bloco 2 pergunta 35

Identificador do banco: 100.

**Gabarito anterior**

- 4. Ampliar o aplicativo para adicionar um atributo de carimbo de data/hora (timestamp) a cada novo item criado e configurar o DynamoDB para usar esse atributo como Time-to-Live (TTL).

**Gabarito corrigido**

- 4. Adicionar a cada item um atributo Number de expiração, calculado como o instante de criação mais 30 dias em segundos Unix. Habilitar TTL na tabela usando esse atributo e tratar itens expirados nas leituras da aplicação.

- TTL requer instante de expiração, não apenas data de criação, como Number em segundos Unix. A exclusão é assíncrona, normalmente após alguns dias, e não garante remoção ou conformidade exata aos 30 dias. Streams não é um temporizador periódico.

Campos ajustados: prompt, options, explanation.

Documentação: [DynamoDB: TTL e exclusão em segundo plano](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html); [DynamoDB: cálculo do TTL em segundos Unix](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html); [DynamoDB: filtrar itens expirados ainda presentes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ttl-expired-items.html).

### Bloco 2 pergunta 36

Identificador do banco: 101.

**Gabarito anterior**

- 2. Criar um endpoint de VPC do tipo gateway para o Amazon S3 na mesma região onde a instância EC2 está localizada. Anexar uma política de bucket no S3 que restrinja o acesso ao IAM Role da instância EC2 e garanta que somente chamadas provenientes do endpoint da VPC sejam aceitas.

**Gabarito corrigido**

- 2. Criar um endpoint VPC gateway para o S3 e associá-lo às tabelas de rotas da instância. Conceder o upload à função IAM exclusiva da instância e configurar negações explícitas no bucket para uploads de outros principais ou fora do endpoint autorizado, usando aws:SourceVpce.

- O S3 também suporta endpoints de interface; um Allow para uma função não obriga o uso do endpoint e não prova sozinho a origem em uma EC2 específica.
- Explicitados a Região, o principal exclusivo e a restrição de caminho que distinguem a solução completa.

Campos ajustados: prompt, options, explanation.

Documentação: [Endpoints de interface e gateway do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html); [Políticas de bucket com aws:SourceVpce](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html).

### Bloco 2 pergunta 37

Identificador do banco: 102.

**Gabarito anterior**

- 3. Configurar a função Lambda para usar a fila do Amazon Simple Queue Service (Amazon SQS) como fonte de invocação. Quando a mensagem SQS for processada com sucesso, excluir a mensagem da fila para evitar processamento duplicado.
- 5. Criar uma fila do Amazon Simple Queue Service (Amazon SQS). Configurar o bucket S3 para enviar uma notificação à fila SQS sempre que uma imagem for carregada no bucket S3.

**Gabarito corrigido**

- 3. Configurar o mapeamento de origem de eventos da fila SQS para a função Lambda. Processar a imagem e gravar o resultado de forma idempotente; após o processamento bem-sucedido do lote, o Lambda exclui as mensagens da fila.
- 5. Criar uma fila do Amazon Simple Queue Service (Amazon SQS). Configurar o bucket S3 para enviar uma notificação à fila SQS sempre que uma imagem for carregada no bucket S3.

- A exclusão após o sucesso não garante processamento exatamente uma vez, e a integração gerenciada realiza a exclusão do lote.

Campos ajustados: options, explanation.

Documentação: [Processamento do SQS pelo Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Destinos das notificações do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html).

### Bloco 2 pergunta 38

Identificador do banco: 103.

- Corrigidas as alegações de operação manual obrigatória em EC2/EKS, capacidade ilimitada implícita e o papel do Cluster Autoscaler.

Campos ajustados: options, explanation.

Documentação: [Escolha de serviços serverless](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-serverless-service.html); [O que o Cluster Autoscaler dimensiona](https://docs.aws.amazon.com/eks/latest/best-practices/cas.html).

### Bloco 2 pergunta 39

Identificador do banco: 104.

**Gabarito anterior**

- 3. Configurar uma conexão AWS Direct Connect do data center para a AWS. Criar um Transit Gateway e associar cada VPC ao Transit Gateway. Estabelecer conectividade entre a conexão Direct Connect e o Transit Gateway.

**Gabarito corrigido**

- 3. Configurar uma conexão AWS Direct Connect com uma interface virtual de trânsito associada a um Direct Connect gateway. Associar esse gateway a um Transit Gateway, anexar as três VPCs e configurar as rotas entre VPCs e o data center.

- O volume diário não basta para escolher Direct Connect por custo ou latência; explicitado o caminho dedicado que fundamenta a decisão.
- A ligação entre Direct Connect e Transit Gateway exige transit VIF e Direct Connect gateway.
- Removidas garantias absolutas de menor custo, baixa latência e alta disponibilidade de um único circuito.

Campos ajustados: prompt, options, explanation.

Documentação: [Integração de Direct Connect gateway e Transit Gateway](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html).

### Bloco 2 pergunta 40

Identificador do banco: 105.

**Gabarito anterior**

- 2. Implementar a aplicação com os elementos de infraestrutura necessários no lugar. Usar o Amazon Route 53 para configurar failover ativo-passivo. Criar uma réplica Aurora em uma segunda região da AWS.

**Gabarito corrigido**

- 2. Preparar a infraestrutura mínima de recuperação em outra Região e manter um cluster secundário do Aurora Global Database. Configurar Route 53 para roteamento ativo-passivo e um procedimento testado que promova o banco secundário e ative a aplicação antes de receber tráfego.

- Route 53 não promove banco nem ativa computação; RTO e perda de dados dependem de replicação e do procedimento testado.

Campos ajustados: options, explanation.

Documentação: [Failover de Aurora Global Database](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html); [Estratégias de recuperação de desastres](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html).

### Bloco 2 pergunta 41

Identificador do banco: 106.

- Esclarecido que a política dimensiona tarefas, administra os alarmes e não garante desempenho sem limites ou resposta instantânea.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html).

### Bloco 2 pergunta 42

Identificador do banco: 107.

**Gabarito anterior**

- 3. Criar uma AMI que referencia um snapshot do Amazon Elastic Block Store (Amazon EBS) com a restauração rápida habilitada para esse snapshot. Utilizar essa AMI no grupo de Auto Scaling para garantir inicializações mais rápidas das instâncias.

**Gabarito corrigido**

- 3. Usar uma AMI cujos snapshots EBS tenham Fast Snapshot Restore habilitado e pronto nas AZs do Auto Scaling, com créditos suficientes para criar volumes já inicializados.

- FSR otimiza a inicialização dos blocos EBS, não garante lançamento instantâneo da instância; explicitado o gargalo e os requisitos por AZ.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html).

### Bloco 2 pergunta 43

Identificador do banco: 108.

- DocumentDB não tem compatibilidade total com MongoDB e EKS/Fargate tem restrições; removida promessa universal de migração sem alterações.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/documentdb/latest/devguide/functional-differences.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/fargate.html).

### Bloco 2 pergunta 44

Identificador do banco: 109.

- Corrigidas as promessas de alerta imediato, o escopo de captura do CloudTrail e a descrição de entrega direta de logs para FIFO.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event-cloudtrail.html).

### Bloco 2 pergunta 45

Identificador do banco: 110.

**Gabarito anterior**

- 3. Use um grupo de colocação de cluster (placement group). Anexe um volume Amazon EBS SSD com IOPS provisionado a todas as instâncias usando o EBS Multi-Attach.

**Gabarito corrigido**

- 3. Usar um cluster placement group e anexar um volume EBS io2 com Multi-Attach às oito instâncias compatíveis, mantendo a coordenação de acesso concorrente da aplicação.

- Cluster placement group não exige mesmo rack; Multi-Attach tem limite de instâncias/AZ e exige coordenação de escrita. EFS não é universalmente inadequado para HPC.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-strategies.html).

### Bloco 2 pergunta 46

Identificador do banco: 111.

**Gabarito anterior**

- 3. Amazon S3 com a classe de armazenamento S3 Glacier

**Gabarito corrigido**

- 3. Armazenar os arquivos ativos no Amazon S3 Standard e configurar regras S3 Lifecycle para mover os arquivos concluídos para o S3 Glacier Deep Archive.

- O nome genérico S3 Glacier mistura classes com comportamentos distintos. Separar mídia ativa de arquivo frio evita recomendar recuperação lenta para processamento ativo; esclarecer duração mínima, restauração e custos, sem prometer desempenho ou durabilidade absoluta.

Campos ajustados: prompt, options, explanation.

Documentação: [Classes de armazenamento do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html); [Opções de recuperação de arquivos](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html); [Gerenciamento do ciclo de vida de objetos](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html); [Armazenamento de arquivos elástico do Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html).

### Bloco 2 pergunta 47

Identificador do banco: 112.

**Gabarito anterior**

- 2. Configurar o dimensionamento automático de armazenamento na instância RDS for Oracle.
- 4. Configurar o grupo de Auto Scaling para usar a CPU média como métrica de dimensionamento.

**Gabarito corrigido**

- 2. Configurar o dimensionamento automático de armazenamento na instância RDS for Oracle.
- 4. Configurar uma política de rastreamento de destino no grupo de Auto Scaling usando a utilização média de CPU.

- CPU não é universalmente superior à memória: o cenário precisa indicar o gargalo observado. Corrigir a promessa de expansão sem interrupções e o disparo pelo limite máximo; distinguir alarme isolado de política automática, limites de armazenamento e compatibilidade Oracle.

Campos ajustados: prompt, options, explanation.

Documentação: [Políticas de rastreamento de destino do EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html); [Políticas de dimensionamento e alarmes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html); [Dimensionamento automático do armazenamento RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html); [Compatibilidade dos mecanismos do Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html).

### Bloco 2 pergunta 48

Identificador do banco: 113.

**Gabarito anterior**

- 4. Aplicar uma função IAM à função Lambda. Aplicar uma política IAM à função para conceder acesso de leitura especificamente ao bucket S3 necessário.

**Gabarito corrigido**

- 4. Associar uma função de execução IAM à função Lambda e conceder somente as ações de leitura necessárias nos objetos do bucket específico.

- Uma política de bucket pode ser granular e segura; a alternativa original não especificava um acesso amplo e era ambígua. Explicitar concessão pública no distrator e explicar a função de execução, credenciais temporárias e escopo de objetos, removendo promessas automáticas de conformidade.

Campos ajustados: options, explanation.

Documentação: [Permissões da função de execução Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html); [Exemplos de políticas de bucket S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html).

### Bloco 2 pergunta 49

Identificador do banco: 114.

**Gabarito anterior**

- 1. Configurar uma distribuição Amazon CloudFront com o ALB como origem. Definir as configurações de comportamento de cache para basear-se no cabeçalho de solicitação Accept-Language.

**Gabarito corrigido**

- 1. Configurar uma distribuição Amazon CloudFront com o ALB como origem e uma política de cache que inclua Accept-Language na chave de cache e o encaminhe à origem.

- Accept-Language só deve compor a chave se a origem realmente variar a resposta por idioma. Adicionar essa condição e o objetivo de menor operação, explicar encaminhamento, fragmentação e limites do cache; API Gateway também pode ter cache e caches próprios podem escalar.

Campos ajustados: prompt, options, explanation.

Documentação: [Cache CloudFront baseado em cabeçalhos e idioma](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html); [Políticas de chave de cache do CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html); [Configurações da origem CloudFront e ALB](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html); [Cache de APIs REST no API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html).

### Bloco 2 pergunta 50

Identificador do banco: 115.

**Gabarito anterior**

- 2. Projetar uma API REST usando o Amazon API Gateway que aceita os nomes dos itens. O API Gateway envia os nomes dos itens para o AWS Lambda para cálculos de impostos.

**Gabarito corrigido**

- 2. Usar uma API REST do Amazon API Gateway integrada a uma função AWS Lambda que recebe os dados dos itens e calcula os impostos.

- Retirar afirmações de elasticidade total, ausência universal de custo ocioso e incapacidade geral de escalar EC2. Especificar cálculos curtos e sem estado, dimensionamento gerenciado sujeito a cotas e distinguir instâncias fixas de EC2 com Auto Scaling.

Campos ajustados: prompt, options, explanation.

Documentação: [Integração proxy Lambda com API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html); [Concorrência e dimensionamento das funções Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html); [EC2 Auto Scaling com rastreamento de destino](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html).

### Bloco 2 pergunta 51

Identificador do banco: 116.

**Gabarito anterior**

- 1. Configurar o Amazon FSx for Windows File Server. Montar o sistema de arquivos do Amazon FSx em cada instância EC2 Windows.

**Gabarito corrigido**

- 1. Configurar um sistema de arquivos Amazon FSx for Windows File Server Multi-AZ e mapear o compartilhamento SMB em cada instância EC2 Windows.

- EFS usa NFS e não oferece SMB nativo, ao contrário das notas e do glossário originais. EBS admite Multi-Attach, inclusive io2 com Windows, mas apenas na mesma AZ e sem fornecer SMB. Tornar explícito Multi-AZ para sustentar a disponibilidade entre AZs.

Campos ajustados: prompt, options, explanation.

Documentação: [FSx for Windows File Server e protocolo SMB](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html); [Implantações Single-AZ e Multi-AZ do FSx Windows](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [Protocolos de montagem do EFS](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html); [Limitações e suporte do EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html); [Volume Gateway usa volumes iSCSI](https://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html).

### Bloco 2 pergunta 52

Identificador do banco: 117.

**Gabarito anterior**

- 3. Criar uma fila do Amazon Simple Queue Service (Amazon SQS). Adicionar código aos produtores de dados para enviar mensagens para a fila. Adicionar código aos consumidores de dados para processar mensagens provenientes da fila.

**Gabarito corrigido**

- 3. Criar uma fila Standard do Amazon SQS por etapa de trabalho. Os produtores enviam mensagens, e as tarefas consumidoras do ECS recebem, processam de forma idempotente e excluem as mensagens após sucesso.

- Remover falsas incapacidade de entrega do SNS e ausência de fila assíncrona do Lambda. Explicitar fila de trabalho com um consumidor por mensagem, retenção finita e idempotência; corrigir o exemplo de estoque/pagamentos que usava uma fila como se fosse fan-out e reconhecer usos legítimos de DynamoDB Streams.

Campos ajustados: prompt, options, explanation.

Documentação: [Filas Standard do Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html); [Visibilidade e exclusão de mensagens SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [Retenção e cotas de mensagens SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html); [Tentativas de entrega do Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html); [Fila de invocação assíncrona do Lambda](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html); [Captura de alterações por DynamoDB Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html).

### Bloco 2 pergunta 53

Identificador do banco: 118.

**Gabarito anterior**

- 1. Configurar um autorizador de pool de usuários do Amazon Cognito no API Gateway para permitir que o Amazon Cognito valide diretamente cada solicitação.

**Gabarito corrigido**

- 1. Configurar um autorizador COGNITO_USER_POOLS nos métodos protegidos da API REST, para que o API Gateway valide os tokens emitidos pelo pool de usuários do Amazon Cognito.

- A validação de cada chamada protegida é executada pelo autorizador no API Gateway sobre os tokens emitidos pelo Cognito, não por uma chamada direta ao Cognito a cada requisição. Corrigir chave de API como autenticação, e-mail falsificável, responsabilidade do backend e alegada necessidade de escalar Lambda manualmente.

Campos ajustados: options, explanation.

Documentação: [Autorizador de pools Cognito para APIs REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html); [Recomendações sobre planos de uso e chaves de API](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html); [Autorizadores Lambda no API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html).

### Bloco 2 pergunta 54

Identificador do banco: 119.

**Gabarito anterior**

- 1. Utilizar a Amazon Simple Queue Service (Amazon SQS) para armazenar em buffer as solicitações e configurar uma função Lambda para processar as mensagens da fila e gravá-las gradualmente no DynamoDB.

**Gabarito corrigido**

- 1. Manter a API assíncrona, enfileirar as solicitações no Amazon SQS antes de confirmar o recebimento e usar Lambda para consumi-las com concorrência e taxa de escrita controladas, gravando no DynamoDB e encaminhando o trabalho após sucesso.

- O cenário não demonstrava a causa da perda; explicitar picos de escrita e falhas sem reprocessamento. Uma fila não limita automaticamente a taxa de gravação nem elimina toda perda: incluir confirmação do enqueue, concorrência, retries, retenção, idempotência e preservação do contrato assíncrono. DAX tem write-through, mas não é buffer durável de escrita.

Campos ajustados: prompt, options, explanation.

Documentação: [SQS Standard para desacoplamento e buffer](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html); [Integração Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Controle da concorrência no mapeamento SQS](https://docs.aws.amazon.com/lambda/latest/dg/services-sqs-scaling.html); [Retenção das mensagens SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html); [Operações de escrita write-through no DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html); [Índices globais secundários do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html).

### Bloco 2 pergunta 55

Identificador do banco: 120.

**Gabarito anterior**

- 4. Utilizar um endpoint de VPC para o DynamoDB.

**Gabarito corrigido**

- 4. Criar um gateway VPC endpoint para DynamoDB e associá-lo às tabelas de rotas das sub-redes da aplicação.

- Tráfego para endpoints públicos AWS via NAT/IGW não necessariamente sai da rede AWS, conforme FAQ oficial; o enunciado original não distinguia essa propriedade. Explicitar acesso sem NAT/IGW, mesma Região e menor custo, usar gateway endpoint e retirar garantias de latência, segurança/compliance automática e custo de transferência evitado.

Campos ajustados: prompt, options, explanation.

Documentação: [Gateway endpoints para DynamoDB](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html); [Conectividade e encaminhamento na rede AWS — FAQ VPC](https://aws.amazon.com/vpc/faqs/); [Gateways NAT públicos e privados](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html); [Requisitos de uma instância NAT](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html).

### Bloco 2 pergunta 56

Identificador do banco: 121.

- Taxa de 800 invocações por minuto e recursos baixos não provam, isoladamente, saturação de conexões. Explicitar diagnóstico e retirar a garantia de que Proxy elimina todos os timeouts ou dispensa toda configuração.

Campos ajustados: prompt, options, explanation.

Documentação: [RDS Proxy: pool, reutilização, fila e limites de conexões](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html).

### Bloco 2 pergunta 57

Identificador do banco: 122.

- A falta de leitor CSV na aplicação não impede consultar CSV por SQL com Spectrum. Preservar a melhor alternativa apresentada sem afirmar que ETL é tecnicamente obrigatório e explicar a etapa temporária no S3 do conector Glue.

Campos ajustados: options, explanation.

Documentação: [AWS Glue: leitura e gravação em Redshift por integração com Spark](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect-redshift-home.html); [Redshift Spectrum: formatos suportados, incluindo OpenCSV](https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-data-files.html).

### Bloco 2 pergunta 58

Identificador do banco: 123.

- Intelligent-Tiering não mantém a mesma disponibilidade nominal de Standard nem garante custo mínimo para qualquer objeto. Distinguir camadas automáticas de acesso imediato e arquivamento opcional com restauração, custo de monitoramento e limite de 128 KB.

Campos ajustados: options, explanation.

Documentação: [S3: três camadas automáticas e duas camadas de arquivo opcionais no Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html); [S3: comparação das classes de armazenamento](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

### Bloco 2 pergunta 59

Identificador do banco: 124.

**Gabarito anterior**

- 3. Re-hospedar a aplicação no AWS Elastic Beanstalk utilizando a plataforma .NET com uma implantação Multi-AZ configurada para garantir alta disponibilidade.
- 4. Utilizar o AWS Database Migration Service (AWS DMS) para migrar o banco de dados Oracle local para uma instância Oracle no Amazon RDS configurada em Multi-AZ para alta disponibilidade.

**Gabarito corrigido**

- 3. Implantar a aplicação no AWS Elastic Beanstalk com plataforma .NET no Windows, balanceador de carga e múltiplas instâncias em pelo menos duas AZs.
- 4. Usar AWS DMS para migrar os dados Oracle para RDS for Oracle SE2 Multi-AZ, com preparação do esquema, carga completa, CDC quando aplicável e uma mudança de conexão validada.

- Beanstalk Windows suporta aplicações web compatíveis, não toda aplicação .NET de forma indistinta. Explicitar compatibilidade e SE2 suportada; DMS e Multi-AZ reduzem riscos e indisponibilidade, mas não garantem migração sem ajustes ou sem interrupção.

Campos ajustados: prompt, options, explanation.

Documentação: [Elastic Beanstalk: plataforma Windows para aplicações web .NET](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.html); [RDS for Oracle: suporte e implantação Multi-AZ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html); [RDS for Oracle: SE2 e licenciamento de Multi-AZ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Concepts.Licensing.html); [DMS: carga completa, CDC e preparação da mudança para o destino](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.HighLevelView.html).

### Bloco 2 pergunta 60

Identificador do banco: 125.

**Gabarito anterior**

- 1. Criar um data lake utilizando o AWS Lake Formation. Criar uma conexão JDBC AWS Glue para o Amazon RDS. Registrar o bucket S3 no Lake Formation. Utilizar controles de acesso do Lake Formation para limitar o acesso.

**Gabarito corrigido**

- 1. Criar um data lake no S3 governado pelo AWS Lake Formation. Usar um job AWS Glue com conexão JDBC para ingerir e atualizar os dados do RDS no S3, catalogar os conjuntos e registrar as localizações. Conceder permissões e filtros do Lake Formation para as equipes em um mecanismo de consulta compatível.

- Criar conexão JDBC ou catálogo não transporta automaticamente os registros do RDS. Completar o pipeline da alternativa correta, distinguir ingestão e governança e remover alegações de que RDS não suporta esse volume ou que Redshift não dispõe de controle granular.

Campos ajustados: options, explanation.

Documentação: [AWS Glue: conexão JDBC usada por jobs ETL](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect-jdbc-home.html); [Glue Data Catalog e crawlers: metadados, não cópia dos dados](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html); [Lake Formation: segurança por coluna, linha e célula](https://docs.aws.amazon.com/lake-formation/latest/dg/data-filtering.html); [Lake Formation: criação, ingestão e governança do data lake](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html).

### Bloco 2 pergunta 61

Identificador do banco: 126.

**Gabarito anterior**

- 3. Habilitar o AWS Shield Advanced para prevenir ataques DDoS.

**Gabarito corrigido**

- 3. Assinar AWS Shield Advanced e habilitar a proteção para o ALB. Configurar as proteções de camada de aplicação com uma web ACL do AWS WAF e regras adequadas ao tráfego.

- Assinar Shield não registra automaticamente todo ALB. Mitigação não impede que ataques ocorram nem garante latência ou disponibilidade perfeitas. Atualizar a orientação de camada 7 para a mudança de março de 2026 e retirar instalação de agente em ALB gerenciado.

Campos ajustados: options, explanation.

Documentação: [Shield: proteção gerenciada contra DDoS e responsabilidade compartilhada](https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html); [Shield Advanced: adicionar recursos protegidos](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-choose-resources.html); [Shield: transição de L7 Auto Mitigation para Anti-DDoS Managed Rule Group em 2026](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-automatic-app-layer-response.html); [AWS WAF: grupo gerenciado Anti-DDoS](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-anti-ddos.html).

### Bloco 2 pergunta 62

Identificador do banco: 127.

**Gabarito anterior**

- 3. Usar o Amazon Transcribe para reconhecimento de vários falantes e geração de transcrições. Armazenar os arquivos de transcrição no Amazon S3 e utilizar o Amazon Athena para consultas e análise dos dados.

**Gabarito corrigido**

- 3. Usar Amazon Transcribe com diarização habilitada, gravar as transcrições em um bucket S3 com retenção configurada para sete anos e definir tabelas compatíveis no Athena para consultas SQL.

- Diarização distingue vozes e turnos, mas não autentica nem identifica pessoas pelo nome. Consultar JSON no Athena exige esquema e leitor compatível. Retenção por sete anos exige configuração e não equivale a conformidade automática.

Campos ajustados: prompt, options, explanation.

Documentação: [Transcribe: diarização e rótulos de falantes](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html); [Athena: consultas SQL sobre dados S3](https://docs.aws.amazon.com/athena/latest/ug/what-is.html); [S3: Object Lock para impedir exclusão de versões durante retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

### Bloco 2 pergunta 63

Identificador do banco: 128.

**Gabarito anterior**

- 3. Atualizar a política do bucket para negar requisições PutObject que não possuam o cabeçalho x-amz-server-side-encryption configurado.

**Gabarito corrigido**

- 3. Manter a criptografia padrão do bucket com SSE-S3, que o S3 aplica automaticamente aos novos uploads quando não é solicitada outra opção de criptografia. Não exigir cabeçalho de criptografia apenas para garantir SSE.

- Desde janeiro de 2023 novos uploads S3 já recebem SSE. Negar ausência de cabeçalho é desnecessário para exigir apenas criptografia em repouso e quebra clientes que dependem da configuração padrão. Substituir a alternativa correta por comportamento atual sem inventar requisito KMS.

Campos ajustados: prompt, options, explanation.

Documentação: [S3: criptografia automática de novos uploads desde 05/01/2023](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html).

### Bloco 2 pergunta 64

Identificador do banco: 129.

**Gabarito anterior**

- 2. Armazenar os dados no Amazon S3 Glacier.

**Gabarito corrigido**

- 2. Armazenar os dados no Amazon S3 Glacier Flexible Retrieval, com recuperação Standard.

- A classe deve ser nomeada Glacier Flexible Retrieval. Seu modo padrão leva tipicamente 3–5 horas, não 1–5 horas garantidas; distinguir tempo por objeto da restauração de todos os 50 TB e explicitar a tolerância que exclui Deep Archive.

Campos ajustados: prompt, options, explanation.

Documentação: [S3: classes Glacier, modalidades e tempos típicos de recuperação](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html).

### Bloco 2 pergunta 65

Identificador do banco: 130.

**Gabarito anterior**

- 1. Criar uma configuração de ciclo de vida do S3 para transição dos objetos do S3 Standard para o S3 Glacier Deep Archive após 1 mês.

**Gabarito corrigido**

- 1. Configurar S3 Lifecycle para transicionar os objetos elegíveis de S3 Standard para S3 Glacier Deep Archive após 30 dias, sem regra de expiração.

- Ciclo de vida muda a classe de armazenamento, não impede exclusões nem garante conformidade. Considerar objetos pequenos, duração mínima e custos de transição; Intelligent-Tiering usa camadas internas, não troca automaticamente a classe do objeto.

Campos ajustados: options, explanation.

Documentação: [S3: transições por ciclo de vida e limite padrão de 128 KB](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html); [S3: Deep Archive, recuperação e duração mínima](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html); [S3: camadas automáticas e opcionais de Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html); [S3: Object Lock e retenção de versões](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

### Bloco 3 pergunta 1

Identificador do banco: 131.

- OAI continua válido como mecanismo legado, mas a AWS recomenda OAC; conteúdo público não é por si uma violação de segurança e Lightsail também pode hospedar conteúdo estático.

Campos ajustados: options, explanation.

Documentação: [CloudFront: acesso privado à origem S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html).

### Bloco 3 pergunta 2

Identificador do banco: 132.

**Gabarito anterior**

- 1. Utilizar instâncias Spot EC2 para picos de tráfego e instâncias Reserved para cargas base.

**Gabarito corrigido**

- 1. Configurar um grupo EC2 Auto Scaling com instâncias mistas: base On-Demand coberta por Reserved Instances correspondentes e capacidade Spot para os picos, com política de dimensionamento e tratamento de interrupções.

- Modalidades de compra não criam escalabilidade sozinhas, Reserved Instances não garantem capacidade em todos os casos e Dedicated Instances também podem participar de Auto Scaling.

Campos ajustados: prompt, options, explanation.

Documentação: [EC2 Auto Scaling: tipos e opções de compra combinados](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html).

### Bloco 3 pergunta 3

Identificador do banco: 133.

- Backup nativo sob demanda do DynamoDB não é um arquivo que se escolhe armazenar no próprio bucket S3; exportação para S3 é recurso distinto.

Campos ajustados: options.

Documentação: [DynamoDB com AWS Backup](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedBackupsAWS.html); [Configuração de planos e retenção de backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/plan-options-and-configuration.html).

### Bloco 3 pergunta 5

Identificador do banco: 135.

**Gabarito anterior**

- 1. Use uma função AWS Lambda que periodicamente consulta o banco de dados Amazon RDS para detectar vendas e, em seguida, envia mensagens para uma fila Amazon Simple Queue Service (Amazon SQS) padrão para processamento pelos sistemas de destino.
- 2. Implemente triggers no banco de dados Amazon RDS que escrevam eventos de alteração em uma tabela de eventos. Use uma função AWS Lambda para consultar periodicamente essa tabela, enviar mensagens para uma fila Amazon Simple Queue Service (Amazon SQS) padrão e permitir que os sistemas de destino consumam as mensagens de forma escalável.
- 3. Utilize o AWS Database Migration Service (DMS) com captura de alterações (CDC) para capturar as modificações no banco de dados Amazon RDS e enviar os dados para uma fila Amazon Simple Queue Service (Amazon SQS) padrão, que será consumida pelos sistemas de destino.

**Gabarito corrigido**

- 1. Fazer a aplicação gravar a venda e um evento em uma tabela outbox na mesma transação do RDS. Usar Lambda agendado para publicar os eventos pendentes em SNS, com novas tentativas, e assinar uma fila SQS por sistema de destino.
- 2. Criar triggers no banco RDS que gravem eventos de venda em uma tabela outbox na mesma transação. Consultar os eventos confirmados com Lambda e publicá-los em SNS, com uma fila SQS assinante por sistema de destino.
- 3. Usar AWS DMS com CDC, em um mecanismo RDS compatível, para enviar alterações a Kinesis Data Streams. Usar Lambda para filtrar vendas confirmadas e publicá-las em SNS, com uma fila SQS por sistema de destino.

- DMS não publica diretamente em SQS, eventos administrativos do RDS não representam alterações de linhas, e uma única fila compartilhada não entrega uma cópia para cada sistema.

Campos ajustados: prompt, options, explanation, technicalNote.

Documentação: [Padrão transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html); [DMS com destino Kinesis Data Streams](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html); [Fan-out SNS para filas SQS](https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html); [Eventos RDS no EventBridge](https://docs.aws.amazon.com/prescriptive-guidance/latest/amazon-rds-monitoring-alerting/eventbridge-rules.html).

### Bloco 3 pergunta 7

Identificador do banco: 137.

- Direct Connect não garante uma latência absoluta; failover requer caminho previamente configurado e a infraestrutura pode ser provisionada por automação.

Campos ajustados: options, explanation.

Documentação: [VPN com Direct Connect](https://docs.aws.amazon.com/vpn/latest/s2svpn/Examples.html).

### Bloco 3 pergunta 8

Identificador do banco: 138.

- Recursos equivalentes não garantem desempenho, réplica não pode iniciar com metade do armazenamento alocado da origem e Multi-AZ de instância precisa ser distinguido do cluster com leitores.

Campos ajustados: options, explanation.

Documentação: [Réplicas de leitura RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

### Bloco 3 pergunta 9

Identificador do banco: 139.

- Snowcone foi descontinuado e existia também a versão SSD de 14 TB; Snowball tem restrições de elegibilidade e fim de suporte que precisam ser explicitadas.

Campos ajustados: options, explanation, technicalNote.

Documentação: [Atualizações dos dispositivos Snow](https://aws.amazon.com/blogs/storage/aws-snow-device-updates/); [Disponibilidade e fim de suporte Snowball](https://aws.amazon.com/snowball/).

### Bloco 3 pergunta 10

Identificador do banco: 140.

- Clonagem usa copy-on-write e não garante impacto nulo ou tempo instantâneo; a restrição de standby se aplica à implantação Multi-AZ de instância.

Campos ajustados: options, explanation.

Documentação: [Clonagem de volumes Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html); [Réplicas RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

### Bloco 3 pergunta 12

Identificador do banco: 142.

- A explicação prometia absorver picos sem planejamento e ausência de custos ociosos em termos absolutos; serviços possuem cotas e armazenamento continua sendo cobrado.

Campos ajustados: options, explanation.

Documentação: [Rekognition com S3 e Lambda](https://docs.aws.amazon.com/rekognition/latest/dg/label-marketing-tutorial.html).

### Bloco 3 pergunta 13

Identificador do banco: 143.

**Gabarito anterior**

- 1. Utilizar instâncias Reserved para a carga base e instâncias Spot para lidar com os picos de tráfego.

**Gabarito corrigido**

- 1. Usar um grupo EC2 Auto Scaling de instâncias mistas com base On-Demand coberta por Reserved Instances correspondentes e capacidade Spot para os picos, tratando interrupções.

- Spot não garante capacidade para todos os picos e a aplicação precisa tolerar interrupções; descontos de reserva não criam escalabilidade.

Campos ajustados: prompt, options, explanation.

Documentação: [Grupos de instâncias mistas do Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html).

### Bloco 3 pergunta 14

Identificador do banco: 144.

**Gabarito anterior**

- 4. Criar uma regra do Amazon EventBridge para capturar eventos de expiração do ACM e configurar uma ação para enviar notificações via Amazon SNS.
- 5. Criar uma função AWS Lambda que verifica periodicamente a data de expiração dos certificados ACM e envia notificações via Amazon SNS quando estiverem a 30 dias da expiração.

**Gabarito corrigido**

- 1. Habilitar a gravação dos certificados no AWS Config e a regra acm-certificate-expiration-check com daysToExpiration=30. Encaminhar a mudança para NON_COMPLIANT por EventBridge a um tópico SNS.
- 4. Configurar DaysBeforeExpiry=30 nos eventos de expiração do ACM. Criar uma regra EventBridge para ACM Certificate Approaching Expiration com SNS como destino.
- 5. Criar uma função AWS Lambda que verifica periodicamente a data de expiração dos certificados ACM e envia notificações via Amazon SNS quando estiverem a 30 dias da expiração.

- A regra gerenciada Config ACM_CERTIFICATE_EXPIRATION_CHECK existe, portanto há três soluções válidas. Eventos ACM começam por padrão 45 dias antes, não automaticamente aos 30 dias; CloudWatch também oferece DaysToExpiry.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Regra Config de expiração ACM](https://docs.aws.amazon.com/config/latest/developerguide/acm-certificate-expiration-check.html); [Monitoramento Config com EventBridge](https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html); [Configuração dos eventos de expiração ACM](https://docs.aws.amazon.com/cli/latest/reference/acm/put-account-configuration.html); [Métrica DaysToExpiry](https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html).

### Bloco 3 pergunta 16

Identificador do banco: 146.

- HTTPS e gerenciamento de certificados precisam distinguir conexão do usuário, origem website HTTP e configuração de domínio; não há escala ilimitada garantida.

Campos ajustados: options, explanation.

Documentação: [CloudFront e origem S3 privada ou de site](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html).

### Bloco 3 pergunta 17

Identificador do banco: 147.

**Gabarito anterior**

- 2. Substitua o Network Load Balancer (NLB) por um Application Load Balancer (ALB). Habilite verificações de integridade HTTP configurando a URL do endpoint do aplicativo para monitoramento. Em seguida, configure políticas de Auto Scaling para substituir automaticamente instâncias EC2 que falharem nas verificações de integridade, garantindo alta disponibilidade sem necessidade de scripts personalizados.

**Gabarito corrigido**

- 2. Usar um ALB com health check HTTP no caminho de saúde da aplicação e habilitar health checks do Elastic Load Balancing no grupo Auto Scaling para substituir instâncias consideradas não saudáveis.

- NLB suporta health checks TCP, HTTP e HTTPS. Substituição de instâncias depende de habilitar checks ELB no grupo, não de política de dimensionamento.

Campos ajustados: options, explanation.

Documentação: [Health checks HTTP/HTTPS de NLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html); [Checks ELB no Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-checks-overview.html).

### Bloco 3 pergunta 20

Identificador do banco: 150.

- Processamento genérico de vídeos pode exceder limites do Lambda; EBS pode armazenar vídeos e não é tecnicamente inadequado a arquivos grandes.

Campos ajustados: prompt, options, explanation.

Documentação: [Cotas do Lambda](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html); [Limite de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html); [Eventos S3 com Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html).

### Bloco 3 pergunta 21

Identificador do banco: 151.

**Gabarito anterior**

- 3. Configure o Amazon S3 para enviar uma notificação de evento para uma fila Amazon Simple Queue Service (Amazon SQS). Use uma função AWS Lambda para ler da fila e processar os dados. Armazene o arquivo JSON resultante no Amazon DynamoDB.

**Gabarito corrigido**

- 3. Configurar notificações de criação do S3 para uma fila SQS. Usar um mapeamento de origem SQS do Lambda para processar as mensagens, ler os arquivos e gravar os resultados JSON como itens do DynamoDB.

- Fila e Lambda não garantem processamento sem atraso ou duplicação; dados armazenados no DynamoDB precisam caber em itens de até 400 KB.

Campos ajustados: prompt, options, explanation.

Documentação: [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Limites de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html).

### Bloco 3 pergunta 22

Identificador do banco: 152.

- Sob demanda não elimina todo throttling; há limites de pico anterior, capacidade aquecida, partições e cotas.

Campos ajustados: options, explanation.

Documentação: [Modo sob demanda do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).

### Bloco 3 pergunta 24

Identificador do banco: 154.

**Gabarito anterior**

- 1. Implemente e configure o Amazon FSx for Windows File Server na AWS. Mova os dados dos arquivos locais para o FSx for Windows File Server. Reconfigure as cargas de trabalho para usar o FSx for Windows File Server na AWS.

**Gabarito corrigido**

- 4. Implante e configure o Amazon FSx for Windows File Server na AWS. Implante e configure um Amazon FSx File Gateway on-premises. Mova os dados dos arquivos locais para o FSx File Gateway. Configure as cargas de trabalho na nuvem para usar o FSx for Windows File Server e as cargas locais para usar o FSx File Gateway.

- Acesso direto por VPN continua sujeito à latência WAN; o cache local do FSx File Gateway é a alternativa que trata o requisito de baixa latência híbrida.

Campos ajustados: options, explanation, technicalNote.

Documentação: [FSx File Gateway e acesso local](https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html); [Elegibilidade do FSx File Gateway](https://docs.aws.amazon.com/filegateway/latest/filefsxw/create-file-gateway.html).

### Bloco 3 pergunta 25

Identificador do banco: 155.

**Gabarito anterior**

- 1. Crie um sistema de arquivos Amazon FSx for Windows File Server na AWS e configure a autenticação via domínio Active Directory.

**Gabarito corrigido**

- 1. Criar um sistema de arquivos Amazon FSx for Windows File Server com implantação Multi-AZ e integrá-lo ao domínio Active Directory.

- S3 File Gateway suporta integração AD; FSx precisa ser Multi-AZ para a disponibilidade entre zonas descrita.

Campos ajustados: options, explanation.

Documentação: [FSx e Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/aws-ad-integration-fsxW.html); [FSx Multi-AZ](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [S3 File Gateway com SMB e AD](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html).

### Bloco 3 pergunta 28

Identificador do banco: 158.

**Gabarito anterior**

- 1. Crie um bucket S3 com S3 Object Lock habilitado. Habilite o versionamento. Defina o modo de retenção Compliance para garantir imutabilidade. Adicione uma retenção legal (Legal Hold) aos objetos. Conceda permissões IAM específicas, incluindo s3:GetObjectLegalHold e s3:DeleteObject, somente aos usuários designados para que possam remover o Legal Hold e excluir os objetos.

**Gabarito corrigido**

- 1. Habilitar S3 Object Lock e versionamento no bucket. Aplicar legal hold às versões no fluxo de upload. Conceder s3:PutObjectLegalHold, s3:DeleteObjectVersion e, quando necessário, s3:DeleteObject somente aos usuários designados, restringindo essas operações aos demais.

- GetObjectLegalHold não permite remover legal hold; compliance não pode ser liberado antes do prazo e Object Lock protege versões, não impede criar uma nova versão.

Campos ajustados: prompt, options, explanation.

Documentação: [Object Lock e legal hold](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html); [Permissões das operações S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-policy-actions.html).

### Bloco 3 pergunta 30

Identificador do banco: 160.

**Gabarito anterior**

- 2. Os usuários não podem encerrar instâncias EC2 na região us-west-2 quando o IP de origem do usuário for 192.168.1.100.
- 4. Os usuários podem encerrar instâncias EC2 em todas as regiões, exceto na us-west-2 quando o IP de origem for 192.168.1.100.

**Gabarito corrigido**

- 2. Os usuários não podem encerrar instâncias na us-west-2 a partir de 203.0.113.100.
- 4. Os usuários podem encerrar instâncias na us-east-1 a partir de 203.0.113.100, nas premissas informadas.

- Faltava a política a avaliar, havia respostas sobrepostas e um IP privado usado como SourceIp público. A questão agora apresenta Allow e Deny explícitos e cenários distintos.

Campos ajustados: prompt, options, explanation.

Documentação: [Operadores de condição IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html); [Validação de SourceIp e IPs privados](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-policy-checks.html).

### Bloco 3 pergunta 31

Identificador do banco: 161.

**Gabarito anterior**

- 2. Configure o grupo de segurança da camada web para permitir tráfego de saída na porta 443 para 0.0.0.0/0.
- 3. Configure o grupo de segurança da camada de banco de dados para permitir tráfego de entrada na porta 1433 proveniente do grupo de segurança da camada web.

**Gabarito corrigido**

- 2. No grupo da web, permitir saída TCP443 para os serviços HTTPS externos e saída TCP1433 com destino ao grupo de segurança do banco.
- 3. Configure o grupo de segurança da camada de banco de dados para permitir tráfego de entrada na porta 1433 proveniente do grupo de segurança da camada web.

- Ao restringir saída da camada web, também é necessário permitir TCP1433 para o banco; respostas são stateful e não exigem regra reversa.

Campos ajustados: prompt, options, explanation.

Documentação: [Regras de grupos de segurança](https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html).

### Bloco 3 pergunta 32

Identificador do banco: 162.

- Shield e CloudFront reduzem risco e impacto, mas não garantem zero indisponibilidade ou proteção automática de toda arquitetura sem configuração.

Campos ajustados: prompt, options, explanation.

Documentação: [Proteção Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-summary.html).

### Bloco 3 pergunta 33

Identificador do banco: 163.

- Arquivos de 5 MB excedem o limite DynamoDB; o mesmo bucket pode criar recursão e a explicação afirmava incorretamente provisionamento manual obrigatório de EFS/Beanstalk.

Campos ajustados: options, explanation.

Documentação: [S3 e Lambda: notificações e recursão](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html); [Limite de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html).

### Bloco 3 pergunta 34

Identificador do banco: 164.

- /tmp pode persistir entre invocações no mesmo ambiente, mas não é durável nem compartilhado; FIFO não garante execução única do efeito no banco.

Campos ajustados: options, explanation.

Documentação: [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Ciclo de vida do ambiente Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html).

### Bloco 3 pergunta 35

Identificador do banco: 165.

- Durabilidade é um objetivo de projeto, não garantia de ausência de perda; S3 também cobra solicitações e EBS/EFS não são inviáveis apenas pelo volume.

Campos ajustados: options, explanation.

Documentação: [Proteção e durabilidade dos dados S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html); [Classes de armazenamento S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

### Bloco 3 pergunta 36

Identificador do banco: 166.

- DataSync protege transferência por TLS também na internet pública; Direct Connect não criptografa tudo por si e DataSync é transferência de arquivos, não streaming analítico em tempo real.

Campos ajustados: prompt, options, explanation.

Documentação: [Criptografia em trânsito DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/encryption-in-transit.html).

### Bloco 3 pergunta 37

Identificador do banco: 167.

**Gabarito anterior**

- 2. Configure o AWS WAF em ambas as regiões e associe Web ACLs regionais a um estágio da API no API Gateway.
- 4. Configure o AWS Firewall Manager para gerenciar centralmente as regras do AWS WAF para as APIs em ambas as regiões.

**Gabarito corrigido**

- 2. Configure o AWS WAF em ambas as regiões e associe Web ACLs regionais a um estágio da API no API Gateway.
- 4. Atender aos pré-requisitos do Firewall Manager no AWS Organizations e usar políticas WAF separadas em cada Região para administrar centralmente a proteção dos estágios REST no escopo.

- Firewall Manager exige pré-requisitos organizacionais e políticas separadas por Região; WAF complementa, não substitui, segurança no código.

Campos ajustados: options, explanation.

Documentação: [WAF em API Gateway REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html); [Políticas regionais Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/create-policy.html); [Pré-requisitos Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html).

### Bloco 3 pergunta 42

Identificador do banco: 172.

- Spot blocks não estão disponíveis desde o fim do suporte; reserva é desconto e não garantia genérica de continuidade, e baixa CPU recomenda dimensionar antes do compromisso.

Campos ajustados: options, explanation, technicalNote.

Documentação: [Opções de compra e descontinuação de Spot blocks](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-purchasing-options.html); [Descontos e instâncias mistas](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html).

### Bloco 3 pergunta 43

Identificador do banco: 173.

- Comprehend também retorna sentimento misto, possui limites de texto/idioma e a arquitetura não elimina cobranças S3 nem cotas.

Campos ajustados: options, explanation.

Documentação: [DetectSentiment e categorias](https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html); [Eventos de criação S3 para Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html).

### Bloco 3 pergunta 44

Identificador do banco: 174.

- SQS não garante conservar toda requisição antes de envio aceito; SNS possui FIFO e o erro do distrator é tratá-lo como fila consultável com comprimento.

Campos ajustados: options, explanation.

Documentação: [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Métricas SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html); [Entrega SNS FIFO](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-delivery.html).

### Bloco 3 pergunta 45

Identificador do banco: 175.

- Buckets S3 são regionais e rotas do gateway endpoint cobrem prefixos e tabelas associados, não todo tráfego S3 irrestritamente.

Campos ajustados: options, explanation.

Documentação: [Gateway endpoints S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 3 pergunta 48

Identificador do banco: 178.

**Gabarito anterior**

- 2. Armazene as credenciais do usuário do banco de dados no AWS Secrets Manager. Conceda as permissões necessárias do IAM para permitir que os servidores web acessem o AWS Secrets Manager de forma segura e automatizada.

**Gabarito corrigido**

- 2. Armazenar as credenciais no AWS Secrets Manager e configurar a rotação automática apropriada para o usuário PostgreSQL. Conceder leitura do segredo às funções IAM dos servidores e atualizar as credenciais usadas pela aplicação após a rotação.

- Só armazenar o segredo não habilita rotação; deve existir rotação configurada e o cliente precisa buscar a versão atual.

Campos ajustados: options, explanation.

Documentação: [Rotação de segredos Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html).

### Bloco 3 pergunta 49

Identificador do banco: 179.

**Gabarito anterior**

- 2. Use o Amazon MQ com brokers ativos/standby configurados em duas zonas de disponibilidade. Adicione um grupo de Auto Scaling para as instâncias consumidoras EC2 distribuídas em múltiplas zonas de disponibilidade. Utilize o Amazon RDS para MySQL com Multi-AZ habilitado.
- 5. Use o Amazon MQ com brokers ativos/standby configurados em duas zonas de disponibilidade. Adicione uma instância de consumidor EC2 adicional em outra zona de disponibilidade. Utilize o Amazon RDS para MySQL com Multi-AZ habilitado.

**Gabarito corrigido**

- 2. Use o Amazon MQ com brokers ativos/standby configurados em duas zonas de disponibilidade. Adicione um grupo de Auto Scaling para as instâncias consumidoras EC2 distribuídas em múltiplas zonas de disponibilidade. Utilize o Amazon RDS para MySQL com Multi-AZ habilitado.
- 4. Usar Amazon MQ for ActiveMQ ativo/standby em duas zonas. Configurar um mapeamento de origem Amazon MQ do Lambda, com credenciais e conectividade necessárias, para consumir a fila e gravar em RDS MySQL Multi-AZ.
- 5. Use o Amazon MQ com brokers ativos/standby configurados em duas zonas de disponibilidade. Adicione uma instância de consumidor EC2 adicional em outra zona de disponibilidade. Utilize o Amazon RDS para MySQL com Multi-AZ habilitado.

- Lambda possui integração nativa com Amazon MQ por event source mapping; há três arquiteturas válidas, não duas, e ativo/standby refere-se ao ActiveMQ.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Lambda com Amazon MQ](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html); [Configuração da origem MQ](https://docs.aws.amazon.com/lambda/latest/dg/process-mq-messages-with-lambda.html).

### Bloco 3 pergunta 50

Identificador do banco: 180.

**Gabarito anterior**

- 2. Crie uma fila Amazon SQS para armazenar os trabalhos que precisam ser processados. Crie uma Amazon Machine Image (AMI) que contenha o aplicativo processador. Crie um template de lançamento que utilize essa AMI. Crie um grupo de Auto Scaling usando o template de lançamento. Defina a política de escalonamento para o grupo de Auto Scaling para adicionar e remover nós com base no número de itens na fila SQS.

**Gabarito corrigido**

- 2. Criar uma fila SQS para os trabalhos e um grupo EC2 Auto Scaling com launch template e a AMI dos processadores. Usar target tracking com backlog por instância InService para ajustar os trabalhadores.

- SNS armazena mensagens duravelmente para entrega e novas tentativas; o motivo de usar SQS é fila de trabalho consultável. Target tracking deve usar backlog por instância.

Campos ajustados: options, explanation.

Documentação: [Auto Scaling por backlog SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html); [Durabilidade SNS](https://aws.amazon.com/sns/features/).

### Bloco 3 pergunta 51

Identificador do banco: 181.

**Gabarito anterior**

- 4. Configure uma assinatura de logs do Amazon CloudWatch Logs para transmitir os logs diretamente ao Amazon OpenSearch Service.

**Gabarito corrigido**

- 4. Usar no console CloudWatch Logs a ação de criar assinatura Amazon OpenSearch Service, configurando a função IAM e a conectividade da integração Lambda criada pelo fluxo.

- A integração assistida CloudWatch Logs/OpenSearch utiliza Lambda; não é uma assinatura sem intermediários. O fluxo Firehose descrito tem limitação documentada para esse formato de logs.

Campos ajustados: prompt, options, explanation.

Documentação: [CloudWatch Logs para OpenSearch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html); [Limitação CloudWatch Logs/Firehose/OpenSearch](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-cloudwatch-logs.html).

### Bloco 3 pergunta 52

Identificador do banco: 182.

**Gabarito anterior**

- 4. Usar o Amazon API Gateway com o Amazon Kinesis Data Analytics.

**Gabarito corrigido**

- 4. Usar API Gateway integrado a Kinesis Data Streams na ingestão. Processar janelas com Amazon Managed Service for Apache Flink e gravar posições/saídas no DynamoDB e histórico no S3. Expor GET por API Gateway e Lambda para consultar a posição no DynamoDB.

- API Gateway com um processador analítico isolado não fornece ingestão, armazenamento histórico e consulta de posições; completado o fluxo e atualizado o produto para Apache Flink.

Campos ajustados: prompt, options, explanation, technicalNote.

Documentação: [API REST como proxy Kinesis](https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-kinesis.html); [Fontes Flink](https://docs.aws.amazon.com/managed-flink/latest/java/how-sources.html); [Destinos Flink](https://docs.aws.amazon.com/managed-flink/latest/java/how-sinks.html); [Descontinuação Kinesis Data Analytics SQL](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/discontinuation.html).

### Bloco 3 pergunta 57

Identificador do banco: 187.

**Gabarito anterior**

- 1. Crie três gateways NAT gerenciados pela AWS, um em cada sub-rede pública de cada AZ. Configure uma tabela de rotas privada para cada AZ que direcione o tráfego destinado a fora da VPC para o gateway NAT correspondente naquela AZ, garantindo alta disponibilidade e baixa latência.

**Gabarito corrigido**

- 1. Criar três NAT Gateways públicos zonais, cada um com Elastic IP na sub-rede pública de sua zona. Configurar 0.0.0.0/0 de cada tabela privada para o NAT da mesma zona e manter rota do NAT ao Internet Gateway.

- Egress-only Internet Gateway existe, mas é IPv6; NAT de internet precisa ser público, e uma AZ pode conter vários data centers.

Campos ajustados: options, explanation.

Documentação: [NAT gateways e roteamento](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html); [Egress-only IPv6](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html).

### Bloco 3 pergunta 59

Identificador do banco: 189.

**Gabarito anterior**

- 2. Armazene os documentos carregados em um bucket Amazon S3 com versionamento habilitado e ative o Bloqueio de Objetos S3 (S3 Object Lock) para aplicar políticas WORM (Write Once, Read Many).

**Gabarito corrigido**

- 2. Armazenar os documentos em bucket S3 com versionamento e Object Lock, aplicando retenção padrão compliance de sete anos a todas as novas versões.

- Object Lock precisa ter retenção aplicada às versões, e só compliance impede bypass até por administradores; versão protegida não impede criar novas versões.

Campos ajustados: prompt, options, explanation.

Documentação: [Object Lock e modos de retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

### Bloco 3 pergunta 63

Identificador do banco: 193.

- Requester Pays realoca cobrança e não reduz o custo total de transferência; o objetivo precisa ser a despesa da proprietária e o solicitante deve autenticar e aceitar cobrança.

Campos ajustados: prompt, options, explanation.

Documentação: [Cobrança Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html).

### Bloco 4 pergunta 1

Identificador do banco: 196.

**Gabarito anterior**

- 2. Configurar cada ambiente de desenvolvimento com seu próprio banco de dados Amazon Aurora On-Demand compatível com PostgreSQL.

**Gabarito corrigido**

- 2. Configurar cada ambiente com Aurora Serverless v2 compatível com PostgreSQL, em versão compatível com auto-pause, mínimo de zero ACUs e intervalo de pausa adequado.

- Aurora On-Demand não escala computação automaticamente. Serverless v2 com mínimo zero pode pausar apenas em versões e configurações compatíveis; RDS também pode ser parado.

Campos ajustados: prompt, options, explanation, technicalNote.

Documentação: [Aurora Serverless v2: pausa automática](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2-auto-pause.html).

### Bloco 4 pergunta 2

Identificador do banco: 197.

**Gabarito anterior**

- 1. Use o AWS Config para identificar todos os recursos sem marcação. Marque os recursos identificados programaticamente. Use tags no plano de backup.

**Gabarito corrigido**

- 1. Usar AWS Config para detectar ausência da tag obrigatória e associar remediação personalizada para aplicar a tag com permissões apropriadas. Manter a seleção por tag nos planos AWS Backup e o opt-in dos serviços necessários.

- AWS Backup não suporta todos os recursos AWS e uma regra Config apenas avalia; é necessária remediação associada e escopo compatível.

Campos ajustados: prompt, options, explanation.

Documentação: [Regra required-tags e remediação](https://docs.aws.amazon.com/config/latest/developerguide/required-tags.html); [Seleção de recursos AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html).

### Bloco 4 pergunta 3

Identificador do banco: 198.

**Gabarito anterior**

- 3. Criar uma função AWS Lambda que faça a varredura da tabela DynamoDB e use o Amazon Simple Notification Service (Amazon SNS) para enviar mensagens de email aos funcionários quando necessário. Agendar essa função Lambda para ser executada todos os dias.

**Gabarito corrigido**

- 3. Agendar uma função Lambda diária para consultar o DynamoDB e publicar no tópico SNS Standard do funcionário aniversariante, cuja única assinatura de email está confirmada.

- Um tópico comum envia a todos os assinantes e SNS não fornece modelos de email transacional; é preciso selecionar destinatários e confirmar assinaturas.

Campos ajustados: options, explanation.

Documentação: [Assinaturas de email SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-email-notifications.html).

### Bloco 4 pergunta 4

Identificador do banco: 199.

**Gabarito anterior**

- 4. Montar um sistema de arquivos Amazon Elastic File System (Amazon EFS) em todas as instâncias EC2. Instruir os funcionários a acessar os arquivos das instâncias EC2.

**Gabarito corrigido**

- 4. Montar o mesmo sistema de arquivos Amazon EFS Regional nas instâncias EC2, com mount targets e regras NFS nas zonas utilizadas.

- EFS tem limites por arquivo, Regional precisa ser distinguido de One Zone e o requisito de sistema de arquivos deve ser explícito para excluir objetos S3.

Campos ajustados: prompt, options, explanation.

Documentação: [EFS Regional e consistência](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Cotas EFS](https://docs.aws.amazon.com/efs/latest/ug/limits.html).

### Bloco 4 pergunta 5

Identificador do banco: 200.

- Logging de conteúdo não cobre sessões SSH nem port forwarding; a configuração também exige permissões e conectividade do agente.

Campos ajustados: prompt, options, explanation.

Documentação: [Logging S3 de Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging-s3.html); [Limitações de SSH e port forwarding](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html).

### Bloco 4 pergunta 6

Identificador do banco: 201.

**Gabarito anterior**

- 3. Mover as imagens do site para um sistema de arquivos do Amazon Elastic File System (Amazon EFS) que está montado em cada instância EC2.
- 4. Criar uma Imagem de Máquina Amazon (AMI) a partir da instância EC2 existente. Usar a AMI para provisionar novas instâncias por trás de um Application Load Balancer como parte de um grupo de Auto Scaling. Configurar o grupo de Auto Scaling para manter um mínimo de duas instâncias. Configurar uma distribuição do Amazon CloudFront para o site.

**Gabarito corrigido**

- 3. Mover as imagens para um sistema Amazon EFS Regional e montá-lo em todas as instâncias EC2 do CMS.
- 4. Criar uma AMI do CMS e usá-la em Auto Scaling com mínimo de duas instâncias distribuídas em pelo menos duas zonas, atrás de um ALB. Configurar CloudFront com cache das imagens.

- S3 pode ser montado por ferramentas, mas não fornece a mesma semântica POSIX. Global Accelerator também melhora rede; o requisito de cache distingue a escolha CloudFront.

Campos ajustados: prompt, options, explanation.

Documentação: [EFS Regional](https://docs.aws.amazon.com/efs/latest/ug/features.html); [CloudFront e cache na borda](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html).

### Bloco 4 pergunta 7

Identificador do banco: 202.

**Gabarito anterior**

- 3. Provisionar um endpoint de gateway VPC. Configurar a tabela de roteamento para a sub-rede privada para usar o endpoint do gateway como rota para todo o tráfego do S3.

**Gabarito corrigido**

- 3. Provisionar um gateway endpoint S3 e associá-lo à tabela de rotas privada para os prefixos S3 da mesma Região.

- A economia é de processamento e dependência do NAT; tráfego S3/EC2 na mesma Região já não recebe cobrança comum de transferência regional apenas por passar no NAT.

Campos ajustados: options, explanation.

Documentação: [Endpoint gateway S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 4 pergunta 8

Identificador do banco: 203.

**Gabarito anterior**

- 4. Projetar uma API REST usando o Amazon API Gateway. Hospedar a aplicação no Amazon Elastic Container Service (Amazon ECS) em uma sub-rede privada. Criar um link VPC privado para que o API Gateway acesse o Amazon ECS.

**Gabarito corrigido**

- 4. Criar uma API REST no API Gateway e um VPC link com integração privada para um NLB interno que encaminhe ao serviço ECS em sub-redes privadas.

- Um VPC link precisa de integração e destino de backend suportado; não é um link genérico diretamente ao serviço ECS nem sinônimo de um recurso PrivateLink isolado.

Campos ajustados: options, explanation.

Documentação: [Integração privada API Gateway REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html).

### Bloco 4 pergunta 9

Identificador do banco: 204.

**Gabarito anterior**

- 3. Criar endpoints de VPC de interface para permitir que os nós acessem o plano de controle.

**Gabarito corrigido**

- 3. Criar endpoints para as dependências AWS necessárias: interfaces ECR API/ECR DKR e EC2, gateway S3 e STS/Logs quando usados, com DNS privado, políticas e regras adequadas.

- O endpoint Kubernetes privado é criado pelo EKS e não é o interface endpoint da API administrativa. Sem diagnóstico não se distingue falha de IAM, DNS, SG ou dependências.

Campos ajustados: prompt, options, explanation.

Documentação: [Clusters EKS privados](https://docs.aws.amazon.com/eks/latest/userguide/private-clusters.html); [Endpoint Kubernetes privado](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html); [Endpoint EKS PrivateLink e limitações](https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html).

### Bloco 4 pergunta 10

Identificador do banco: 205.

- Aumentar classe da instância não aumenta armazenamento alocado; autoscaling possui limites e não garante evitar toda situação storage-full.

Campos ajustados: options, explanation.

Documentação: [Storage autoscaling RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html).

### Bloco 4 pergunta 11

Identificador do banco: 206.

- Function URL não autentica genericamente qualquer terceiro: AWS_IAM exige assinatura/permissões, enquanto NONE precisa de validação no código e política apropriada.

Campos ajustados: options, explanation.

Documentação: [Autorização de Function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).

### Bloco 4 pergunta 12

Identificador do banco: 207.

**Gabarito anterior**

- 1. Construir cargas de trabalho de análise durante horas especificadas e quando a aplicação não está ativa.
- 2. Escalar globalmente para suportar petabytes de dados e dezenas de milhões de solicitações por minuto.
- 6. Suportar APIs de dados para acessar dados com aplicativos tradicionais, containerizados e orientados a eventos.

**Gabarito corrigido**

- 1. Construir cargas de trabalho de análise durante horas especificadas e quando a aplicação não está ativa.
- 2. Executar consultas analíticas SQL sobre grandes conjuntos de dados, usando processamento paralelo e armazenamento colunar.
- 6. Suportar APIs de dados para acessar dados com aplicativos tradicionais, containerizados e orientados a eventos.

- O atributo de dezenas de milhões de solicitações globais por minuto foi transplantado de outro perfil de banco. Ajustadas as descrições ambíguas de réplica e criptografia para testar capacidades reais.

Campos ajustados: options, explanation.

Documentação: [Arquitetura analítica Redshift](https://docs.aws.amazon.com/redshift/latest/dg/c_redshift_system_overview.html); [Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html).

### Bloco 4 pergunta 13

Identificador do banco: 208.

**Gabarito anterior**

- 1. Exportar os dados diretamente do DynamoDB para o Amazon S3 com backups contínuos. Ativar a recuperação no ponto no tempo para a tabela.

**Gabarito corrigido**

- 1. Habilitar PITR na tabela e solicitar uma exportação completa nativa para S3 no ponto desejado da janela PITR.

- PITR não transmite continuamente backups ao bucket do cliente. Exportação é operação assíncrona solicitada sobre a janela PITR.

Campos ajustados: prompt, options, explanation.

Documentação: [Exportação DynamoDB para S3](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html); [Solicitar exportação completa/incremental](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport_Requesting.html).

### Bloco 4 pergunta 15

Identificador do banco: 210.

- A explicação afirmava que sub-redes privadas precisam de Internet/NAT para serviços AWS, embora possam usar endpoints; especificado o caminho regional correto.

Campos ajustados: explanation.

Documentação: [Gateway endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 4 pergunta 16

Identificador do banco: 211.

**Gabarito anterior**

- 1. Criar uma política de controle de serviço (SCP) para negar acesso às informações de faturamento. Anexar o SCP à unidade organizacional raiz (OU).

**Gabarito corrigido**

- 1. Criar uma SCP que negue as ações de acesso às informações de faturamento e anexá-la à raiz da organização, abrangendo as contas membro.

- Negação explícita IAM não é sobreposta por outra permissão Allow; identidade IAM não pode ser anexada ao root. A raiz organizacional não é uma OU.

Campos ajustados: options, explanation.

Documentação: [SCPs e usuários root de membros](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

### Bloco 4 pergunta 17

Identificador do banco: 212.

**Gabarito anterior**

- 4. Utilizar o ciclo de vida do S3 para excluir as versões expiradas do objeto e reter apenas as duas versões mais recentes.

**Gabarito corrigido**

- 4. Configurar Lifecycle NoncurrentVersionExpiration com NewerNoncurrentVersions=1 e NoncurrentDays adequado, mantendo a versão atual e aceitando a exclusão assíncrona das demais.

- A versão atual não entra na contagem NewerNoncurrentVersions; Lifecycle é assíncrono e depende também de idade, não mantém exatamente duas versões a todo instante.

Campos ajustados: prompt, options, explanation.

Documentação: [Expiração de versões S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html); [Exemplos de Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html).

### Bloco 4 pergunta 18

Identificador do banco: 213.

- Média inferior a 10% não garante que 200 Mbps suporte picos; preço do parceiro e requisitos precisam ser medidos, e acesso privado não equivale a criptografia automática.

Campos ajustados: prompt, options, explanation.

Documentação: [Conexões hospedadas Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/hosted_connection.html).

### Bloco 4 pergunta 19

Identificador do banco: 214.

- Organizations não possui mecanismo de login de funcionários diretamente ligado ao Directory Service; acesso a contas também exige atribuições/permissões no Identity Center.

Campos ajustados: options, explanation.

Documentação: [Fontes de identidade IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source.html).

### Bloco 4 pergunta 20

Identificador do banco: 215.

- Service Catalog combinado a permissões apropriadas pode impedir provisionamento fora do catálogo; a SCP vence pelo menor desenvolvimento para a restrição organizacional simples, não pela impossibilidade da alternativa.

Campos ajustados: options, explanation.

Documentação: [SCP para impedir tipos de instância](https://docs.aws.amazon.com/managedservices/latest/userguide/scp-library-compliance.html); [Restrições de lançamento Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-launch.html).

### Bloco 4 pergunta 21

Identificador do banco: 216.

**Gabarito anterior**

- 1. Sistema de Arquivos Elástico da Amazon (Amazon EFS) com vários destinos de montagem.

**Gabarito corrigido**

- 1. Amazon EFS Regional com mount targets nas zonas utilizadas.

- FSx pode ser acessado via VPN, EBS Multi-Attach permite múltiplos EC2 e access points não criam mount targets nem impedem clientes locais.

Campos ajustados: options, explanation.

Documentação: [Montagem EFS por clientes locais](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-helper-direct.html); [EFS Regional](https://docs.aws.amazon.com/efs/latest/ug/features.html); [EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html).

### Bloco 4 pergunta 22

Identificador do banco: 217.

- DAX acelera cache de leituras eventualmente consistentes, não garante mensagens novas imediatamente; DynamoDB não possui o endpoint de read replica RDS descrito.

Campos ajustados: prompt, options, explanation.

Documentação: [Consistência DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html); [Adequação do DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html).

### Bloco 4 pergunta 23

Identificador do banco: 218.

**Gabarito anterior**

- 4. Criar um site estático hospedado no Amazon S3 que invoque funções do AWS Lambda para redimensionar as imagens e armazená-las em um bucket do Amazon S3.

**Gabarito corrigido**

- 4. Hospedar o frontend estático no S3. Receber uploads em bucket de entrada e configurar evento S3 para Lambda redimensionar as imagens e gravar num bucket de saída.

- Site estático não executa Lambda diretamente sem integração, Step Functions pode orquestrar processamento e a alternativa ECS tem um worker EC2 único.

Campos ajustados: options, explanation.

Documentação: [Redimensionamento S3 e Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html); [Eventos S3 e prevenção de loops](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html).

### Bloco 4 pergunta 25

Identificador do banco: 220.

- Transit Gateway é regional e o peering entre Regiões exige anexos/rotas estáticas; criar os peers não fornece automaticamente toda conectividade.

Campos ajustados: explanation.

Documentação: [Peering entre Transit Gateways](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-peering.html).

### Bloco 4 pergunta 26

Identificador do banco: 221.

**Gabarito anterior**

- 1. Criar um endpoint de VPC para o Amazon S3. Criar uma rota na tabela de roteamento da VPC para o endpoint.

**Gabarito corrigido**

- 1. Criar um gateway endpoint S3 na Região da VPC e associá-lo às tabelas de rotas das sub-redes das instâncias.

- Não há custo adicional para gateway endpoint S3, mas interface endpoint tem cobrança; S3 não é bucket global nem privado por si dispensa TLS/IAM.

Campos ajustados: options, explanation.

Documentação: [Gateway endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html).

### Bloco 4 pergunta 27

Identificador do banco: 222.

- DLQ SNS é uma fila SQS vinculada à assinatura; DynamoDB e Kinesis não são destinos alternativos de DLQ, independentemente de sua capacidade de retenção.

Campos ajustados: explanation.

Documentação: [DLQs de assinaturas SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html).

### Bloco 4 pergunta 28

Identificador do banco: 223.

**Gabarito anterior**

- 3. Amazon Elastic File System (Amazon EFS) com a classe de armazenamento Standard.

**Gabarito corrigido**

- 3. Amazon EFS Regional, com mount targets nas zonas utilizadas, e plano AWS Backup com cópias para a Região de recuperação.

- FSx OpenZFS, Windows e ONTAP também têm suporte AWS Backup atual; a característica que distingue EFS é mount target por zona. RPO exige cronograma e conclusão de cópia, não é automático.

Campos ajustados: options, explanation.

Documentação: [EFS Regional e mount targets](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Recursos suportados pelo AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html); [Cópias de backup entre Regiões](https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html).

### Bloco 4 pergunta 29

Identificador do banco: 224.

- Software de terceiros pode centralizar backups e Systems Manager pode executar automação; a vantagem é a orquestração nativa dos recursos suportados, sem promessa de sucesso infalível.

Campos ajustados: explanation.

Documentação: [Matriz de suporte AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html).

### Bloco 4 pergunta 30

Identificador do banco: 225.

**Gabarito anterior**

- 3. Implementar um gateway de arquivos do AWS Storage Gateway para substituir o armazenamento NFS.
- 4. Implementar um gateway de volume do AWS Storage Gateway para substituir o armazenamento de bloco.

**Gabarito corrigido**

- 3. Implementar S3 File Gateway com compartilhamento NFS e cache local para os arquivos.
- 4. Implementar Volume Gateway com cached volumes, apresentando armazenamento de bloco por iSCSI aos servidores.

- EFS suporta montagem local por VPN, ferramentas podem montar S3 e Volume Gateway precisa de cached volumes para diminuir capacidade local.

Campos ajustados: options, explanation.

Documentação: [Volume Gateway e cached volumes](https://docs.aws.amazon.com/storagegateway/latest/vgw/StorageGatewayConcepts.html); [S3 File Gateway SMB/arquivos](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html); [EFS por VPN](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-helper-direct.html).

### Bloco 4 pergunta 31

Identificador do banco: 226.

- Lifecycle seleciona idade/filtros, não mede último acesso; Intelligent-Tiering faz a movimentação por acesso depois da transição, com custos e condições.

Campos ajustados: explanation.

Documentação: [Funcionamento Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html).

### Bloco 4 pergunta 32

Identificador do banco: 227.

**Gabarito anterior**

- 1. Configurar a aplicação para usar o escalonamento automático do EC2 Multi-AZ e criar um Balanceador de Carga de Aplicativos.

**Gabarito corrigido**

- 1. Configurar Auto Scaling da aplicação com pelo menos duas instâncias distribuídas por duas ou mais zonas, atrás de um ALB com health checks apropriados.

- ALB Multi-AZ não cria instâncias em outras zonas; Route53 pode fazer verificação/failover, mas não corrige sozinho uma camada computacional de zona única.

Campos ajustados: options, explanation.

Documentação: [ALB e alvos em zonas](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html); [Checks ELB em Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-checks-overview.html).

### Bloco 4 pergunta 33

Identificador do banco: 228.

- Athena pode analisar conteúdo quando recebe os dados; consultar apenas Inventory não inspeciona conteúdo. Macie detecta e gera achados, não garante ausência absoluta de PII.

Campos ajustados: explanation.

Documentação: [Identificadores gerenciados Macie](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html).

### Bloco 4 pergunta 35

Identificador do banco: 230.

- Auto Scaling não garante disponibilidade de capacidade Spot e não há ordenação universal de descontos RI vs Savings Plans.

Campos ajustados: explanation.

Documentação: [Capacidade e interrupções Spot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html).

### Bloco 4 pergunta 36

Identificador do banco: 231.

- Algumas rotações usam Lambda, ainda que se possa empregar template; só rotação gerenciada não usa função.

Campos ajustados: explanation.

Documentação: [Tipos de rotação Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html).

### Bloco 4 pergunta 37

Identificador do banco: 232.

- Athena precisa dos arquivos CloudTrail no S3 e tabela; ativar apenas histórico de eventos não os disponibiliza automaticamente. Cobrança não é universalmente só bytes lidos.

Campos ajustados: prompt, explanation.

Documentação: [Consultar CloudTrail no Athena](https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html).

### Bloco 4 pergunta 38

Identificador do banco: 233.

- Proxy reduz o impacto de reconexão, mas não garante failover transparente a toda transação; leitores também contribuem para disponibilidade sem resolver sozinhos conexões.

Campos ajustados: explanation.

Documentação: [RDS Proxy: failover e transações](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.howitworks.html).

### Bloco 4 pergunta 39

Identificador do banco: 234.

**Gabarito anterior**

- 1. Migrar a aplicação web para instâncias Amazon EC2 que executem em um grupo de Auto Scaling em duas Zonas de Disponibilidade atrás de um Application Load Balancer. Migrar o banco de dados para o Amazon RDS com implantação Multi-AZ.

**Gabarito corrigido**

- 1. Migrar a web para Auto Scaling com pelo menos duas instâncias distribuídas em duas zonas atrás de ALB. Migrar o banco para RDS for SQL Server Multi-AZ em configuração compatível.

- Explicitado o mecanismo SQL Server e capacidade web redundante; operar três bancos EC2 sem replicação não fornece HA automaticamente.

Campos ajustados: options, explanation.

Documentação: [Multi-AZ SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerMultiAZ.html); [ALB e disponibilidade](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html).

### Bloco 4 pergunta 40

Identificador do banco: 235.

**Gabarito anterior**

- 4. Garantir que os clientes criem uma função IAM em sua conta com permissões apenas de leitura para EC2 e CloudWatch e uma política de confiança para a conta da empresa.

**Gabarito corrigido**

- 4. Pedir a cada cliente uma função IAM com ações mínimas de leitura de EC2/CloudWatch, confiança no principal autorizado do fornecedor e condição sts:ExternalId única por cliente. O fornecedor deve usar AssumeRole com esse ExternalId.

- A solução mais segura de fornecedor multicliente deve prevenir confused deputy com ExternalId e confiança restrita; Cognito pode federar credenciais, mas não é o fluxo direto necessário.

Campos ajustados: options, explanation.

Documentação: [Acesso de terceiros e ExternalId](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html).

### Bloco 4 pergunta 41

Identificador do banco: 236.

**Gabarito anterior**

- 2. Solicitar um certificado curinga que corresponda ao nome de domínio personalizado no AWS Certificate Manager (ACM) na mesma região.
- 3. Criar um nome de domínio personalizado no API Gateway para a API REST. Importar o certificado do AWS Certificate Manager (ACM).
- 5. Registrar o domínio necessário em um registrador. Criar um nome de domínio personalizado curinga em uma zona hospedada do Route 53 e um registro na zona que aponta para o endpoint do API Gateway.

**Gabarito corrigido**

- 2. Solicitar e validar no ACM da mesma Região um certificado que cubra *.api.example.com.
- 3. Criar o domínio personalizado Regional *.api.example.com no API Gateway, associar o ARN do certificado ACM e configurar o mapeamento para o estágio REST.
- 5. Na zona Route53 do domínio registrado, criar registro wildcard A Alias de *.api.example.com apontando para o hostname Regional do domínio personalizado API Gateway.

- Região do certificado depende do tipo de endpoint. Domínio personalizado é criado no API Gateway; Route53 contém DNS, e certificado ACM é associado por ARN, não importado a partir do ACM.

Campos ajustados: prompt, options, explanation.

Documentação: [Domínio Regional API Gateway e certificado](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html); [Domínios wildcard REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html).

### Bloco 4 pergunta 42

Identificador do banco: 237.

- Cluster global não é apenas Multi-AZ numa Região, ASG não cruza Regiões e Aurora Global não promete promoção automática só por usar Route53. DMS suporta CDC.

Campos ajustados: prompt, options, explanation.

Documentação: [Switchover/failover Aurora Global Database](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html); [DMS e replicação contínua CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html).

### Bloco 4 pergunta 43

Identificador do banco: 238.

**Gabarito anterior**

- 4. Usar a Família AWS Transfer para criar um servidor FTP para armazenar os arquivos recebidos no Amazon S3 Standard. Criar uma função AWS Lambda para processar os arquivos e excluir os arquivos após serem processados. Usar uma notificação de evento do S3 para invocar a função Lambda quando os arquivos chegarem.

**Gabarito corrigido**

- 4. Criar servidor FTP Transfer Family com endpoint VPC interno e armazenamento S3 Standard. Usar evento de criação S3 para Lambda processar os arquivos e excluí-los apenas após confirmar sucesso.

- FTP Transfer Family exige endpoint VPC interno; EBS é adequado a I/O frequente e não é destino Transfer Family nem fonte de notificações S3.

Campos ajustados: prompt, options, explanation.

Documentação: [Protocolos e endpoints Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/sftp-for-transfer-family.html); [Lambda por eventos S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html).

### Bloco 4 pergunta 44

Identificador do banco: 239.

- Reserved concurrency não pré-inicializa ambientes, e provisionada só mitiga inicialização na capacidade atendida; não garante latência total da API.

Campos ajustados: explanation.

Documentação: [Reserved e provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html); [Spillover e cold starts](https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting-invocation.html).

### Bloco 4 pergunta 45

Identificador do banco: 240.

- Write-through não cria uma transação atômica entre MySQL e cache nem garante igualdade em todas as falhas; corrigida a exigência absoluta.

Campos ajustados: prompt, explanation.

Documentação: [Estratégias de cache ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html).

### Bloco 4 pergunta 46

Identificador do banco: 241.

- Volume de acessos sozinho não determina classe mais barata: importa predominância de armazenamento vs operações. Sob demanda também tem limites.

Campos ajustados: prompt, explanation.

Documentação: [Classes de tabela DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.TableClasses.html); [Capacidade sob demanda](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).

### Bloco 4 pergunta 47

Identificador do banco: 242.

**Gabarito anterior**

- 1. Usar o Amazon Comprehend para criar os relatórios de análise de sentimento.
- 4. Usar o Amazon Translate para traduzir texto em qualquer idioma para inglês.
- 6. Usar o Amazon Transcribe para converter as gravações de áudio em qualquer idioma em texto.

**Gabarito corrigido**

- 1. Usar o Amazon Comprehend para criar os relatórios de análise de sentimento.
- 4. Usar Amazon Translate para traduzir a transcrição para inglês, nos idiomas/pares suportados.
- 6. Usar Amazon Transcribe para converter as gravações em texto nos idiomas e modos de transcrição suportados.

- Transcribe/Translate não suportam qualquer idioma e Comprehend retorna resultados de sentimento; relatórios precisam ser compostos pela aplicação.

Campos ajustados: options, explanation.

Documentação: [Idiomas e funcionalidades Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html); [Idiomas Translate](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html); [Análise de sentimento Comprehend](https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html).

### Bloco 4 pergunta 48

Identificador do banco: 243.

- Internet Gateway permite rota de entrada, mas não libera automaticamente tráfego bloqueado por SG; explicitado o mecanismo IPv6 de saída e retorno.

Campos ajustados: explanation.

Documentação: [Egress-only IPv6](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html).

### Bloco 4 pergunta 49

Identificador do banco: 244.

- ElastiCache pode armazenar dados de conteúdo estático; o erro é tratá-lo como destino de arquivos diretamente conectado ao ALB.

Campos ajustados: explanation.

Documentação: [Distribuição CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html); [Componentes e targets ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html).

### Bloco 4 pergunta 50

Identificador do banco: 245.

**Gabarito anterior**

- 1. Armazene os arquivos de vídeo no Amazon S3 Glacier e use recuperações Expedited.

**Gabarito corrigido**

- 1. Armazenar em S3 Glacier Flexible Retrieval e usar Expedited com capacidade provisionada dimensionada para a demanda.

- Expedited é tempo típico, depende de tamanho e capacidade, não garante teto universal de cinco minutos; One Zone-IA tem durabilidade projetada de onze noves mas não resiste à perda da zona.

Campos ajustados: prompt, options, explanation.

Documentação: [Opções de recuperação de arquivos S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html); [Classes S3 e resiliência](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

### Bloco 4 pergunta 51

Identificador do banco: 246.

**Gabarito anterior**

- 1. Implementar agentes AWS DataSync localmente. Agendar tarefas do DataSync para transferir os dados para o sistema de arquivos do Amazon FSx for Windows File Server.
- 2. Encomendar um dispositivo AWS Snowcone. Conectar o dispositivo à rede local. Iniciar agentes AWS DataSync no dispositivo. Agendar tarefas do DataSync para transferir os dados para o sistema de arquivos do Amazon FSx for Windows File Server.

**Gabarito corrigido**

- 1. Executar DataSync em um agente local suportado, com origem SMB e destino FSx Windows, configurando preservação dos descritores de segurança NTFS e privilégios necessários.
- 2. Copiar diretamente dos compartilhamentos SMB para FSx com Robocopy configurado para preservar dados, atributos, timestamps, ACLs, proprietário e auditoria, usando privilégios de backup/restauração apropriados.

- Snowcone foi descontinuado e não é oferta atual; o fluxo offline via S3 não conserva automaticamente NTFS ACLs. Substituída a segunda solução por Robocopy documentado pela AWS.

Campos ajustados: prompt, options, explanation.

Documentação: [Metadados preservados pelo DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/metadata-copied.html); [Migração FSx com Robocopy](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/migrate-files-to-fsx.html); [Descontinuação Snowcone](https://aws.amazon.com/blogs/storage/aws-snow-device-updates/).

### Bloco 4 pergunta 52

Identificador do banco: 247.

- CloudFormation reproduz os recursos descritos, mas não os implanta instantaneamente nem exige inventar necessidade de controle total para excluir Beanstalk.

Campos ajustados: explanation.

Documentação: [CloudFormation e reprodução de infraestrutura](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html).

### Bloco 4 pergunta 53

Identificador do banco: 248.

- CloudWatch Logs oferece criptografia dos próprios logs; ele não habilita criptografia do banco. RDS não administra automaticamente todo dimensionamento e configuração de segurança.

Campos ajustados: explanation.

Documentação: [Criptografia de recursos RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html).

### Bloco 4 pergunta 54

Identificador do banco: 249.

**Gabarito anterior**

- 3. Converter o aplicativo para usar o Amazon DynamoDB. Usar uma tabela global para a tabela central de reservas. Usar o endpoint Regional correto em cada implantação Regional.

**Gabarito corrigido**

- 4. Usar Aurora MySQL Global Database com um cluster primário e secundários regionais. Encaminhar todas as gravações de reserva e leituras críticas ao endpoint escritor global; usar leitores regionais apenas para consultas que toleram atraso.

- Tabelas globais DynamoDB não mantêm um primário único. A solução anterior confundia MREC assíncrono com MRSC e não atendia à autoridade de escrita única; escolhida Aurora Global com leituras críticas no primário.

Campos ajustados: prompt, options, explanation.

Documentação: [Aurora Global Database e escritor primário](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html); [Modos de consistência de tabelas globais DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html).

### Bloco 4 pergunta 56

Identificador do banco: 251.

- Savings Plan é compromisso de gasto por hora, não compra de capacidade. Compartilhamento só aproveita uso elegível existente e respeita contas/preferências.

Campos ajustados: explanation.

Documentação: [Aplicação e compartilhamento Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-applying.html); [Preferências de faturamento](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-pref.html).

### Bloco 4 pergunta 57

Identificador do banco: 252.

**Gabarito anterior**

- 2. Usar o Kubernetes Metrics Server para ativar o escalonamento automático horizontal de pods.
- 5. Usar o Kubernetes Cluster Autoscaler para gerenciar o número de nós no cluster.

**Gabarito corrigido**

- 2. Disponibilizar Metrics Server e configurar Horizontal Pod Autoscaler com metas e requests adequados para a aplicação.
- 5. Usar o Kubernetes Cluster Autoscaler para gerenciar o número de nós no cluster.

- Metrics Server não cria HPA sozinho; Cluster Autoscaler adiciona/remove nós horizontalmente e considera pods não agendáveis/requests, não apenas CPU dos nós.

Campos ajustados: options, explanation.

Documentação: [HPA em EKS](https://docs.aws.amazon.com/eks/latest/userguide/horizontal-pod-autoscaler.html); [Cluster Autoscaler EKS](https://docs.aws.amazon.com/eks/latest/best-practices/cas.html).

### Bloco 4 pergunta 58

Identificador do banco: 253.

**Gabarito anterior**

- 3. Use o Amazon Kinesis Data Firehose para ingerir dados. Use o Amazon Kinesis Data Analytics para analisar os dados em tempo real.

**Gabarito corrigido**

- 2. Ingerir os pagamentos em Kinesis Data Streams e usar Lambda por event source mapping para analisar os registros e gravar os resultados no S3.

- O fluxo Firehose como origem de Kinesis Data Analytics for SQL é descontinuado e Firehose não é fonte Flink equivalente. Corrigida a alternativa Kinesis/Lambda para explicitar a persistência pedida.

Campos ajustados: prompt, options, explanation.

Documentação: [Lambda com Kinesis Data Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html); [Descontinuação Kinesis Data Analytics SQL](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/discontinuation.html).

### Bloco 4 pergunta 59

Identificador do banco: 254.

- Previsão de doze meses deve usar granularidade mensal; paginação aplica-se às operações que retornam token. Budgets não oferece ações FTP como alternativa funcional.

Campos ajustados: explanation.

Documentação: [API de custos e uso](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html); [API de previsão de custos](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html).

### Bloco 4 pergunta 60

Identificador do banco: 255.

- Não se deve sugerir simplesmente ativar criptografia em volumes EBS e instâncias RDS existentes não criptografados; é necessário migrar/copiar/restaurar conforme o recurso.

Campos ajustados: explanation.

Documentação: [Criptografia EBS e recursos existentes](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html); [Criptografia RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html); [Cópia de snapshot RDS criptografada](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html).

### Bloco 4 pergunta 61

Identificador do banco: 256.

- As letras e comparações da explicação estavam trocadas; personalizações devem respeitar o perímetro suportado e há fim de suporte anunciado.

Campos ajustados: explanation, technicalNote.

Documentação: [Requisitos e limites RDS Custom Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits.html); [Migração para RDS Custom Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-migrating-oracle.html); [Fim de suporte RDS Custom Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/RDS-Custom-for-Oracle-end-of-support.html).

### Bloco 4 pergunta 62

Identificador do banco: 257.

- CloudFront distribui uma origem; EKS/Fargate também dispensa gestão de nós, RI é desconto de cobrança e RDS precisa da configuração de disponibilidade adequada.

Campos ajustados: explanation.

Documentação: [Fargate para ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html); [S3 e CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html).

### Bloco 4 pergunta 64

Identificador do banco: 259.

- SCPs e boundaries não concedem acesso; funções não são anexadas a grupos. O cenário de IAM users não deve ser confundido com recomendação geral contra federação.

Campos ajustados: explanation.

Documentação: [Grupos de usuários IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html); [SCP não concede permissões](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

### Bloco 4 pergunta 65

Identificador do banco: 260.

**Gabarito anterior**

- 1. Criar um novo bucket do Amazon S3 com a versão do S3 habilitada. Usar o S3 Object Lock com um período de retenção de acordo com a data designada. Configurar o bucket S3 para hospedagem de site estático. Definir uma política de bucket S3 para permitir acesso somente leitura aos objetos.

**Gabarito corrigido**

- 1. Criar bucket S3 com versionamento e Object Lock. Aplicar retenção compliance até a data designada às versões publicadas e política que permita somente a leitura pública necessária dos objetos/versões.

- Object Lock precisa de modo compliance para impedir remoção antes do prazo por qualquer identidade e protege versões, não bloqueia automaticamente novos uploads. Retirada sobra de texto da explicação.

Campos ajustados: prompt, options, explanation.

Documentação: [S3 Object Lock e versões protegidas](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

### Bloco 5 pergunta 1

Identificador do banco: 261.

- O EKS Connector oferece visualização, não gerenciamento dos clusters conectados.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html).

### Bloco 5 pergunta 2

Identificador do banco: 262.

**Gabarito anterior**

- 4. Configurar uma política de roteamento geográfico. Envie o tráfego próximo a us-west-1 para o data center local. Envie o tráfego próximo a eu-central-1 para eu-central-1.

**Gabarito corrigido**

- 3. Configurar registros de roteamento por latência para os dois endpoints. Associar o endereço do data center local à Região us-west-1 e o endpoint hospedado na AWS à Região eu-central-1.

- O requisito é minimizar latência, e geolocalização não é uma medição de desempenho.
- A alternativa de latência citava apenas uma Região e estava incompleta.
- A explicação afirmava indevidamente que geolocalização é mais precisa para latência.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html).

### Bloco 5 pergunta 3

Identificador do banco: 263.

**Gabarito anterior**

- 1. Usar uma máquina local para criar um certificado que seja assinado pelo CA de terceiros. Importar o certificado no AWS Certificate Manager (ACM). Criar uma API HTTP no Amazon API Gateway com um domínio personalizado. Configurar o domínio personalizado para usar o certificado.

**Gabarito corrigido**

- 1. Gerar a chave privada e a solicitação de assinatura de certificado fora do ACM, obter a assinatura da CA de terceiros e importar o certificado no ACM. Criar uma API REST regional no Amazon API Gateway com domínio personalizado, configurar a política SecurityPolicy_TLS13_1_3_2025_09 e desabilitar o endpoint padrão para exigir o uso desse domínio.

- A alternativa correta original não garantia a exigência estrita de TLS 1.3.
- Suporte a negociação TLS não equivale a exigir exclusivamente TLS 1.3.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-security-policies.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-security-policies-list.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html).

### Bloco 5 pergunta 5

Identificador do banco: 265.

**Gabarito anterior**

- 2. Comprar uma Reserva de Capacidade na região de failover.

**Gabarito corrigido**

- 2. Criar Reservas de Capacidade sob demanda nas Zonas de Disponibilidade planejadas da Região de failover, com os atributos e a quantidade de instâncias necessários.

- Reservas de Capacidade são zonais, não uma garantia indiscriminada para toda a Região.
- A garantia depende da AZ e dos atributos da reserva ativa.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html).

### Bloco 5 pergunta 6

Identificador do banco: 266.

- A periodicidade do backup não garante o prazo de restauração nem a idade da cópia concluída.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html).

### Bloco 5 pergunta 9

Identificador do banco: 269.

- Retenção de backups automáticos e snapshots manuais têm ciclos distintos, e o risco de interrupção depende da transição para/de zero.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.BackupRetention.html).

### Bloco 5 pergunta 10

Identificador do banco: 270.

- O DAX exige integração com cliente e planejamento explícito de capacidade.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html).

### Bloco 5 pergunta 11

Identificador do banco: 271.

- Corrigidos os efeitos de DNS e separadas implantação gradual e preservação dos dados.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html).

### Bloco 5 pergunta 12

Identificador do banco: 272.

**Gabarito anterior**

- 1. Use grupos de replicação Redis Multi-AZ com fragmentos que contenham vários nós.

**Gabarito corrigido**

- 1. Usar um grupo de replicação Redis OSS com modo de cluster habilitado, vários fragmentos e réplicas em diferentes Zonas de Disponibilidade, com Multi-AZ e failover automático.

- O enunciado original exigia garantias impossíveis e não distinguia duas alternativas válidas de Multi-AZ.
- Explicitado o modo de cluster para distinguir particionamento de HA de um único fragmento.
- Redis OSS Multi-AZ não fornece perda zero nem DR regional.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Replication.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html).

### Bloco 5 pergunta 13

Identificador do banco: 273.

**Gabarito anterior**

- 1. Usar o Amazon S3 para armazenar as imagens. Usar o Amazon CloudFront para distribuir as imagens com restrições geográficas. Fornecer uma URL assinada para cada cliente acessar os dados no CloudFront.

**Gabarito corrigido**

- 1. Armazenar as imagens em um bucket S3 privado e restringir sua leitura à distribuição CloudFront por Origin Access Control (OAC). Distribuir as imagens pelo CloudFront com restrições geográficas e fornecer URLs assinadas aos clientes autorizados.

- A origem precisava impedir acesso direto que contornasse o CloudFront.
- Assinaturas não reduzem os bytes armazenados nem substituem a proteção da origem.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).

### Bloco 5 pergunta 14

Identificador do banco: 274.

- O texto confundia certificado do servidor com certificado do cliente.
- Corrigida a função da política de segurança e explicitados requisitos de renovação.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-renewal.html).

### Bloco 5 pergunta 15

Identificador do banco: 275.

- Ativação para faturamento não é propagação de tags aos recursos.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html).

### Bloco 5 pergunta 16

Identificador do banco: 276.

**Gabarito anterior**

- 1. Provisionar as contas da AWS usando o AWS Control Tower. Utilizar notificações de desvio de conta para identificar as alterações na hierarquia de OUs.

**Gabarito corrigido**

- 1. Registrar as chamadas de gerenciamento do AWS Organizations no CloudTrail e criar uma regra do EventBridge em us-east-1 para as operações que alteram OUs e posicionamento de contas, como CreateOrganizationalUnit, UpdateOrganizationalUnit, DeleteOrganizationalUnit e MoveAccount. Enviar os eventos a um tópico SNS com a equipe de operações inscrita.

- A detecção de desvio ControlTower não cobre qualquer alteração da hierarquia Organizations sem pré-condições.
- Mantido o requisito original amplo; corrigida a arquitetura de detecção.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_cloudtrail-integration.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-organizations.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/controltower/latest/userguide/governance-drift.html).

### Bloco 5 pergunta 18

Identificador do banco: 278.

- Corrigida a viabilidade de associar usuário IAM a EC2 e o alcance das permissões.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html).

### Bloco 5 pergunta 20

Identificador do banco: 280.

- Réplica de leitura não é backup e o Athena não é inadequado a relatórios regulares por definição.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

### Bloco 5 pergunta 23

Identificador do banco: 283.

**Gabarito anterior**

- 4. Configurar um banco de dados Amazon RDS para SQL Server standby no AWS. Configurar o AWS Database Migration Service (AWS DMS) para usar a captura de dados de alteração (CDC).

**Gabarito corrigido**

- 1. Usar o AWS Elastic Disaster Recovery configurado para replicar as alterações de disco para a AWS como uma luz piloto.

- Replicação de blocos em área de preparação é o padrão de menor custo adequado à recuperação da VM/aplicação.
- CDC não garante RPO e o destino DMS não é standby gerenciada de Multi-AZ.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/drs/latest/userguide/FAQ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html).

### Bloco 5 pergunta 25

Identificador do banco: 285.

- ACU é capacidade aproximada e compatibilidade não garante migração sem ajustes.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html).

### Bloco 5 pergunta 26

Identificador do banco: 286.

- A explicação confundia famílias GPU com a classificação HPC.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ec2/latest/instancetypes/ac.html).

### Bloco 5 pergunta 27

Identificador do banco: 287.

- EMR e Glue podem realizar processamento paralelo e integrar Redshift; faltava um requisito para diferenciar a arquitetura.
- Glue é um mecanismo de ETL distribuído, e Athena também processa em paralelo.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/redshift/latest/mgmt/spark-redshift-connector.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-redshift.html).

### Bloco 5 pergunta 28

Identificador do banco: 288.

**Gabarito anterior**

- 3. Usar o Amazon ElastiCache para Redis para armazenar o estado da sessão. Atualizar a aplicação para usar o ElastiCache para Redis para armazenar o estado da sessão.

**Gabarito corrigido**

- 3. Usar um grupo de replicação do Amazon ElastiCache para Redis OSS com réplicas em outras Zonas de Disponibilidade, Multi-AZ e failover automático. Atualizar a aplicação para armazenar e consultar o estado de sessão nesse grupo.

- A exigência de memória e baixa latência distingue Redis de uma solução relacional válida para sessões.
- Uma instância isolada Redis não estabelece a HA pedida.
- ALB não externaliza ou replica sessões para Redis.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Replication.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html).

### Bloco 5 pergunta 29

Identificador do banco: 289.

- Pertencer a duas organizações simultaneamente é tecnicamente proibido.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html).

### Bloco 5 pergunta 31

Identificador do banco: 291.

**Gabarito anterior**

- 1. Execute as instâncias EC2 em um grupo de colocação distribuída.

**Gabarito corrigido**

- 1. Executar as instâncias EC2 em um grupo de colocação por partição (partition placement group), distribuindo os grupos de nós entre partições distintas.

- A descrição de grupos de nós em hardware separado corresponde a partition, não ao termo ambíguo distribuída.
- Baixa latência e alta largura de banda são objetivos de cluster, não de spread/partition.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html).

### Bloco 5 pergunta 32

Identificador do banco: 292.

- A explicação prometia retenção garantida de sessões e não distinguia os modelos Multi-AZ do RDS.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Replication.html).

### Bloco 5 pergunta 33

Identificador do banco: 293.

- Repetia a afirmação incorreta de auto scaling do DAX e integração sem alteração.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html).

### Bloco 5 pergunta 34

Identificador do banco: 294.

- Corrigidas promessas de capacidade ilimitada e a caracterização de interfaces de backup.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/storagegateway/latest/tgw/StorageGatewayConcepts.html).

### Bloco 5 pergunta 35

Identificador do banco: 295.

**Gabarito anterior**

- 2. Migrar o banco de dados existente RDS para MySQL para um cluster Aurora Serverless v2 do MySQL.

**Gabarito corrigido**

- 2. Migrar para Aurora MySQL compatível com Serverless v2 e pausa automática, configurar capacidade mínima de 0 ACU e retomada automática, sem manter conexões que impeçam a pausa.

- A pausa Serverless v2 depende de versão compatível e mínimo zero.
- Serverless v2 não desliga em toda configuração, e o armazenamento continua cobrado.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2-auto-pause.html).

### Bloco 5 pergunta 36

Identificador do banco: 296.

- Gp3 não é a categoria de blocos mais barata universalmente.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/general-purpose.html).

### Bloco 5 pergunta 37

Identificador do banco: 297.

**Gabarito anterior**

- 2. Usar o Amazon RDS implantado em um cluster de implantação Multi-AZ para criar um banco de dados Oracle. Direcionar as funções de relatório para usar a instância leitora no cluster de implantação.

**Gabarito corrigido**

- 2. Migrar para uma instância Amazon RDS for Oracle com implantação Multi-AZ e criar uma réplica de leitura Oracle separada usando Active Data Guard. Direcionar os relatórios para o endpoint da réplica de leitura.

- O gabarito propunha um tipo de implantação não disponível para Oracle.
- Explicitadas as licenças exigidas para leitura Active Data Guard.
- Standby de instância Multi-AZ Oracle não é um leitor consultável.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.overview.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Concepts.Licensing.html).

### Bloco 5 pergunta 38

Identificador do banco: 298.

- O termo Glacier era genérico e incluía Instant Retrieval de acesso imediato.
- EBS não pode ser origem direta do CloudFront; nem toda classe Glacier exige restauração.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html).

### Bloco 5 pergunta 39

Identificador do banco: 299.

- Eliminadas garantias automáticas de desempenho/conexões e caracterização errada de Auto Scaling para banco em EC2.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html).

### Bloco 5 pergunta 40

Identificador do banco: 300.

- Cognito não confere pagamentos e S3 pode hospedar frontend que chama APIs.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

### Bloco 5 pergunta 43

Identificador do banco: 303.

**Gabarito anterior**

- 2. Gerar uma URL pré-assinada que tenha acesso necessário à localização do relatório no bucket S3. Compartilhar a URL pré-assinada com o consultor externo.

**Gabarito corrigido**

- 2. Gerar com AWS CLI ou SDK uma URL pré-assinada SigV4 para GetObject apenas do relatório, com expiração de 7 dias e credenciais de assinatura válidas durante todo esse período. Compartilhar somente a URL com o consultor.

- Sete dias exigem método e credenciais compatíveis.
- O prazo configurado não supera a expiração das credenciais temporárias.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html).

### Bloco 5 pergunta 44

Identificador do banco: 304.

**Gabarito anterior**

- 1. Configurar um endpoint do Amazon API Gateway na frente de um Firehose de Dados do Amazon Kinesis que armazena as informações que a empresa recebe em um bucket do Amazon S3. Usar um autorizador de Lambda do API Gateway para resolver a autorização.

**Gabarito corrigido**

- 1. Configurar uma API REST do Amazon API Gateway com integração ao Amazon Data Firehose para entregar os dados a um bucket S3. Usar um autorizador Lambda do API Gateway para avaliar a autorização.

- Atualizado o nome e especificada a integração para entrega.
- ECS pode executar streaming; GWLB não é um endpoint de API/autorização e Firehose usa buffering.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html).

### Bloco 5 pergunta 45

Identificador do banco: 305.

**Gabarito anterior**

- 2. Criar um endpoint de gateway para o DynamoDB.
- 3. Criar uma entrada na tabela de roteamento para o endpoint.

**Gabarito corrigido**

- 1. Criar um endpoint de gateway para o DynamoDB.
- 2. Associar ao endpoint de gateway as tabelas de rotas das sub-redes usadas pelas instâncias, para que a rota do DynamoDB pelo endpoint seja adicionada.

- Uma instrução de seleção havia sido importada como alternativa.
- As rotas são criadas automaticamente nas tabelas associadas e há controles nas instâncias.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html).

### Bloco 5 pergunta 46

Identificador do banco: 306.

- A exigência irrestrita de sempre duas não pode ser garantida por nenhuma alternativa.
- Instâncias sob demanda e mínimo de ASG não garantem disponibilidade absoluta.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html).

### Bloco 5 pergunta 47

Identificador do banco: 307.

**Gabarito anterior**

- 1. Adicionar permissões do AWS KMS na função de execução do Lambda.
- 3. Permitir a função de execução do Lambda na política da chave do AWS KMS.

**Gabarito corrigido**

- 1. Conceder kms:Decrypt para a chave específica na política IAM da função de execução do Lambda.
- 3. Configurar a política da chave KMS para autorizar o uso pela função de execução, diretamente ou habilitando a delegação por políticas IAM da conta.

- Criptografia de cliente e modelo de autorização precisavam ser diferenciados da criptografia padrão em repouso.
- Havia duas alternativas indistintas sobre política da função.
- DescribeKey não é necessário para todo Decrypt; key policy direta na mesma conta pode bastar.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars-encryption.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html).

### Bloco 5 pergunta 48

Identificador do banco: 308.

**Gabarito anterior**

- 1. Utilizar o Amazon Kinesis Data Firehose para enviar dados de streaming para o Amazon S3.

**Gabarito corrigido**

- 1. Utilizar o Amazon Data Firehose para entregar os dados de streaming ao Amazon S3, configurando o buffering e a transformação necessária.

- Atualizado o nome do serviço.
- Glue suporta streaming e Lambda não exige gestão de servidores.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/glue/latest/dg/add-job-streaming.html).

### Bloco 5 pergunta 49

Identificador do banco: 309.

- Multi-Attach existe, e o problema é o limite de AZ/interface, não concorrência genérica do S3.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html).

### Bloco 5 pergunta 51

Identificador do banco: 311.

- O atraso de S3 decorre do sync horário e HA de EFS depende de Regional.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/efs/latest/ug/features.html).

### Bloco 5 pergunta 52

Identificador do banco: 312.

- O EKS moderno já criptografa os dados da API por envelope por padrão.
- Atualizada a configuração padrão a partir de Kubernetes 1.28.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/envelope-encryption.html).

### Bloco 5 pergunta 53

Identificador do banco: 313.

- Escalonamento automático é uma categoria ampla que também inclui o agendado; o distrator precisava especificar políticas dinâmicas.
- Corrigida a equivalência indevida entre todo Auto Scaling e políticas por métricas.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html).

### Bloco 5 pergunta 54

Identificador do banco: 314.

- Leitores Multi-AZ são cobrados e a standby tradicional não é acessível para consultas.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html).

### Bloco 5 pergunta 55

Identificador do banco: 315.

- Corrigidos quatro conceitos de controle de acesso CloudFront.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).

### Bloco 5 pergunta 57

Identificador do banco: 317.

- A proteção contra administradores depende da separação do acesso às chaves e à aplicação.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html).

### Bloco 5 pergunta 58

Identificador do banco: 318.

- Endpoint de interface em sub-rede pública não recebe exposição pública e SQS não tem endpoint de gateway.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html).

### Bloco 5 pergunta 59

Identificador do banco: 319.

**Gabarito anterior**

- 4. Usar o Amazon Macie. Criar uma regra do Amazon EventBridge para filtrar o tipo de evento SensitiveData dos resultados do Macie e enviar uma notificação do Amazon Simple Notification Service (Amazon SNS) para a equipe de segurança.

**Gabarito corrigido**

- 4. Usar o Amazon Macie para descobrir dados sensíveis no S3. Criar uma regra EventBridge para eventos Macie Finding com source aws.macie e filtrar detail.type pelos tipos de dados pessoais, incluindo SensitiveData:S3Object/Personal e categorias Multiple pertinentes. Enviar o alerta a um tópico SNS com a equipe inscrita.

- O tipo de evento informado era impreciso e poderia gerar filtro que nunca corresponde.
- Diferenciados envelope EventBridge e tipo de descoberta Macie.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/macie/latest/user/findings-publish-event-schemas.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/macie/latest/user/findings-types.html).

### Bloco 5 pergunta 61

Identificador do banco: 321.

**Gabarito anterior**

- 4. Criar um banco de dados Amazon RDS com implantação de cluster de banco de dados Multi-AZ.

**Gabarito corrigido**

- 4. Criar um cluster Amazon RDS for PostgreSQL Multi-AZ com um gravador e dois leitores em três Zonas de Disponibilidade.

- Distinguidos explicitamente os dois tipos de implantação Multi-AZ.
- O limite de quinze leitores não descreve um cluster RDS Multi-AZ.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html).

### Bloco 5 pergunta 62

Identificador do banco: 322.

- Criptografia de camada dupla usa o nome DSSE-KMS.
- SSE não implica dados vulneráveis no transporte; cliente não é opção de bucket gerenciada pelo S3.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html).

### Bloco 5 pergunta 63

Identificador do banco: 323.

**Gabarito anterior**

- 4. Configurar uma configuração de failover ativo-passivo no Route 53. Direcionar o tráfego para uma página de erro estática hospedada em um bucket do Amazon S3 quando os checks de saúde do Route 53 determinarem que o endpoint do ALB está indisponível.

**Gabarito corrigido**

- 4. Configurar failover ativo-passivo no Route 53, com o ALB como primário e uma página estática S3 distribuída por CloudFront como secundário. Usar verificação de integridade ou Evaluate Target Health apropriado no primário e configurar o domínio e certificado HTTPS também na distribuição de backup.

- S3 website direto não atende HTTPS do domínio e o usuário pediu atenção a HTTPS.
- DNS tem cache e multivalue não é o mecanismo de A/B descrito.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html).

### Bloco 5 pergunta 64

Identificador do banco: 324.

**Gabarito anterior**

- 1. Encomendar vários dispositivos AWS Snowball que possuem Tape Gateway. Copie as fitas físicas para fitas virtuais no Snowball. Envie os dispositivos Snowball para a AWS. Crie uma política de ciclo de vida para mover as fitas para o Amazon S3 Glacier Deep Archive.

**Gabarito corrigido**

- 1. Ler e restaurar os dados das fitas em armazenamento local usando o software de backup existente. Copiar os arquivos restaurados para vários Snowball Edge em trabalhos de importação S3 e enviá-los para a AWS. Após a importação, aplicar uma política de ciclo de vida S3 para Glacier Deep Archive e os controles de retenção exigidos.

- Disponibilidade do Snowball mudou e não deve ser sugerida a novos clientes indiscriminadamente.
- Tape Gateway em Snowball foi descontinuado e a movimentação precisa de um fluxo real de restauração/importação.
- Corrigida integração obsoleta e cobrança indevida de entrada de dados.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/doc-history.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/using-adapter.html).

### Bloco 6 pergunta 1

Identificador do banco: 326.

- DAX não integra Aurora.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html).

### Bloco 6 pergunta 2

Identificador do banco: 327.

**Gabarito anterior**

- 1. Usar Amazon Kinesis Data Firehose para ingerir os dados.
- 5. Usar AWS Fargate com Amazon Elastic Container Service (Amazon ECS) para processar os dados.

**Gabarito corrigido**

- 1. Usar Amazon Data Firehose para ingerir os registros e entregá-los ao S3, com buffering adequado, de onde os jobs consumirão os lotes.
- 5. Processar os lotes do S3 em tarefas Amazon ECS sobre AWS Fargate e configurar a orquestração e o dimensionamento das tarefas conforme a demanda.

- Step Functions pode coordenar workflows longos; o limite relevante é cada execução Lambda.
- Explicitado um fluxo de entrega real entre ingestão e contêineres.
- Fargate não faz auto scaling de tarefas sem configuração, e Firehose não entrega diretamente a ECS.
- O limite de quinze minutos se aplica ao modo sob demanda padrão, não a todas as modalidades atuais do Lambda.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/fargate-or-lambda.html); [Tempo limite da função Lambda e modalidades de execução](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html).

### Bloco 6 pergunta 5

Identificador do banco: 330.

**Gabarito anterior**

- 1. Use o AWS Config para criar uma regra personalizada que identifique todos os buckets do S3 que não estão com o versionamento ativado em todas as Regiões.

**Gabarito corrigido**

- 1. Habilitar o AWS Config nas Regiões pertinentes e implantar a regra gerenciada s3-bucket-versioning-enabled. Agregar os resultados de conformidade para visualizar os buckets entre Regiões.
- 2. Configurar o Amazon S3 Storage Lens com escopo para as Regiões e contas pertinentes e analisar as métricas de versionamento por bucket para identificar buckets sem versionamento habilitado.

- As duas primeiras soluções atendem ao requisito; a questão de escolha única estava ambígua.
- Substituída regra customizada por regra gerenciada e completados escopos.
- StorageLens fornece métricas explícitas de versionamento.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-versioning-enabled.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-data-protection.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html).

### Bloco 6 pergunta 8

Identificador do banco: 333.

**Gabarito anterior**

- 4. Criar uma organização no AWS Organizations na conta de gerenciamento com a política padrão. Criar uma política de controle de serviço (SCP) que negue o lançamento de instâncias grandes do EC2 e aplicá-la às contas da AWS

**Gabarito corrigido**

- 4. Organizar as contas no AWS Organizations com todos os recursos habilitados. Manter as permissões-base apropriadas e anexar às OUs/contas-membro uma SCP que negue ec2:RunInstances para os tipos de instância não permitidos, usando a condição ec2:InstanceType.

- SCP não limita a conta de gerenciamento.
- SCP exige todos os recursos e condição apropriada de instância.
- Delimitado o alcance e exceções de SCP.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

### Bloco 6 pergunta 9

Identificador do banco: 334.

**Gabarito anterior**

- 3. Configurar o AWS Systems Manager Patch Manager para gerenciar todas as instâncias EC2. Implantar o Amazon Inspector e configurar relatórios mensais.

**Gabarito corrigido**

- 3. Usar AWS Systems Manager Inventory e Patch Manager para inventário e aplicação de patches nas versões de sistemas suportadas. Habilitar Amazon Inspector para vulnerabilidades e exportar seus achados para as revisões mensais.

- O requisito de inventário não estava explícito na solução e suporte não é universal.
- Corrigidas garantias sobre qualquer SO/atualização e relatório automático.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-prerequisites.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/inspector/latest/user/supported.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/inspector/latest/user/findings-managing-exporting-reports.html).

### Bloco 6 pergunta 10

Identificador do banco: 335.

- Tabelas globais e DNS não garantem transição instantânea nem replicação sem atraso.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html).

### Bloco 6 pergunta 11

Identificador do banco: 336.

- Uma alternativa havia concatenado o texto de outra opção.
- Endpoint gratuito não significa ausência de qualquer cobrança de transferência/uso.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html).

### Bloco 6 pergunta 12

Identificador do banco: 337.

**Gabarito anterior**

- 1. Configurar novas instâncias EC2 em uma zona de disponibilidade diferente. Usar o Amazon Route 53 para rotear o tráfego para todas as instâncias.
- 4. Criar um grupo de Auto Scaling para as instâncias EC2. Configurar o grupo de Auto Scaling para usar múltiplas Zonas de Disponibilidade. Configurar o grupo de Auto Scaling para realizar verificações de integridade das instâncias.

**Gabarito corrigido**

- 2. Configurar um Network Load Balancer em múltiplas Zonas de Disponibilidade e associar seu grupo de destino ao grupo Auto Scaling.
- 4. Criar um grupo Auto Scaling em múltiplas Zonas de Disponibilidade, com verificações de integridade EC2 e do Elastic Load Balancing habilitadas para substituir destinos não íntegros.

- A integração NLB+Auto Scaling cobre camada 4, destinos dinâmicos e integridade.
- A alternativa DNS genérica permitia interpretações de outra arquitetura viável.
- Auto Scaling não usa saúde de aplicação/ELB sem habilitar e DNS simples não exclui IPs falhos.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/getting-started-elastic-load-balancing.html).

### Bloco 6 pergunta 13

Identificador do banco: 338.

- Scripts no cliente não expõem automaticamente lógica de servidor nem são inseguros por natureza.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-email-notifications.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html).

### Bloco 6 pergunta 14

Identificador do banco: 339.

- Contatos alternativos não eliminam notificações ao e-mail root.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html).

### Bloco 6 pergunta 15

Identificador do banco: 340.

**Gabarito anterior**

- 2. Configure a aplicação para usar um cluster Amazon ElastiCache na frente do cluster Aurora PostgreSQL DB.
- 3. Atualize a aplicação para enviar as solicitações de compra para uma fila do Amazon Simple Queue Service (Amazon SQS). Configure um grupo de Auto Scaling de novas instâncias EC2 que leem da fila SQS.

**Gabarito corrigido**

- 2. Usar ElastiCache para armazenar em cache leituras frequentes e tolerantes à defasagem, como dados do catálogo, mantendo a gravação e a validação transacional das compras no Aurora.
- 3. Atualize a aplicação para enviar as solicitações de compra para uma fila do Amazon Simple Queue Service (Amazon SQS). Configure um grupo de Auto Scaling de novas instâncias EC2 que leem da fila SQS.

- Cache não pode ser descrito como substituto da persistência transacional de compras.
- Corrigidas generalizações de custo Lambda e adicionada idempotência obrigatória para compras assíncronas.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html).

### Bloco 6 pergunta 17

Identificador do banco: 342.

**Gabarito anterior**

- 1. Definir o TTL padrão do CloudFront para 2 minutos
- 5. Adicionar uma diretiva Cache-Control: max-age de 24 horas aos objetos no Amazon S3. Ao implantar uma nova versão, criar uma invalidação no CloudFront para limpar os arquivos alterados dos caches de borda.

**Gabarito corrigido**

- 1. Para o HTML e outros arquivos que apontam para a versão atual, configurar TTL máximo e padrão de120 segundos no comportamento CloudFront, com mínimo 0, e Cache-Control: max-age=120 na origem.
- 5. Publicar os arquivos estáticos de cada versão com nomes ou URLs diferentes e atualizar o HTML para apontar aos novos arquivos. Usar cache longo apenas nesses arquivos versionados e manter cache curto do HTML.

- TTL padrão curto não prevalece sobre max-age longo e invalidação não limpa navegador.
- Eliminada garantia de atualização imediata por invalidação.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).

### Bloco 6 pergunta 18

Identificador do banco: 343.

- EC2InstanceSP não é ReservedInstance e subnetpública não expõe Lambda.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

### Bloco 6 pergunta 19

Identificador do banco: 344.

- Orçamento não é teto em tempo real e DenyAll não para custos existentes.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-action-review.html).

### Bloco 6 pergunta 20

Identificador do banco: 345.

- As alternativas continham pistas explicativas que deviam ficar na revisão.
- Corrigida a generalização de insegurança e explicitado estado de conexão.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html).

### Bloco 6 pergunta 22

Identificador do banco: 347.

**Gabarito anterior**

- 1. Configurar os atributos da conta do EC2 para sempre criptografar novos volumes do EBS.

**Gabarito corrigido**

- 1. Habilitar a criptografia EBS por padrão em cada Região usada pela conta e restringir ec2:DisableEbsEncryptionByDefault com uma política IAM ou SCP aplicável, para que as identidades responsáveis pelas cargas não desabilitem a configuração.

- A configuração padrão podia ser desabilitada por identidades autorizadas e é regional.
- Distinguidos padrão regional, controle preventivo e recursos existentes.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/encryption-by-default.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

### Bloco 6 pergunta 23

Identificador do banco: 348.

**Gabarito anterior**

- 2. Criar uma conexão de emparelhamento de VPC (VPC peering) entre as VPCs da conta primária e da conta secundária.

**Gabarito corrigido**

- 2. Configurar VPC peering entre as VPCs na mesma Região, com rotas e acesso NFS/TCP 2049 aos mount targets do EFS. Configurar o ponto de acesso EFS na função Lambda e as permissões IAM, da política do sistema de arquivos e POSIX necessárias ao acesso entre contas.

- Peering era apenas uma das pré-condições necessárias.
- Conectividade não configura montagem/autorização automaticamente.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem-efs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-cross-account.html); [Documentação oficial da AWS](https://aws.amazon.com/blogs/aws/new-a-shared-file-system-for-your-lambda-functions/).

### Bloco 6 pergunta 25

Identificador do banco: 350.

**Gabarito anterior**

- 4. Criar uma chave do AWS Key Management Service (AWS KMS). Ativar os auxiliares de criptografia nas funções Lambda para usar a chave do KMS para armazenar e criptografar as variáveis de ambiente.

**Gabarito corrigido**

- 4. Usar auxiliares de criptografia do lado do cliente com uma chave KMS gerenciada pelo cliente. Permitir kms:Decrypt somente à função de execução autorizada, negar esse acesso aos desenvolvedores e impedir que eles alterem o código ou assumam a função com acesso aos segredos.

- A alternativa omitia a barreira contra uso indireto do runtime autorizado.
- Quem controla o código com acesso à chave pode revelar o segredo.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars-encryption.html).

### Bloco 6 pergunta 26

Identificador do banco: 351.

- Organizations consegue provisionar contas e RAM compartilha sub-redes com pré-condições.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html).

### Bloco 6 pergunta 28

Identificador do banco: 353.

- A alternativa Volume Gateway é inválida pelo protocolo, e HA entre AZs exige implantação específica.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/storagegateway/latest/vgw/StorageGatewayConcepts.html).

### Bloco 6 pergunta 29

Identificador do banco: 354.

**Gabarito anterior**

- 2. Converter o cluster Aurora em um banco de dados global do Aurora. Configurar o failover gerenciado.

**Gabarito corrigido**

- 2. Adicionar um cluster secundário em us-west-1 a um Aurora Global Database em versões compatíveis. Preparar e testar o procedimento de failover gerenciado para promover essa Região e reconectar a aplicação.

- Explicitados secundário e procedimento de recuperação, em vez de failover como garantia automática.
- Tempos típicos não são garantias, e o failover regional requer ação.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html).

### Bloco 6 pergunta 30

Identificador do banco: 355.

**Gabarito anterior**

- 1. Criar um contêiner para o trabalho. Agendar a execução do trabalho como uma tarefa AWS Fargate em um cluster do Amazon Elastic Container Service (Amazon ECS) usando o Amazon EventBridge Scheduler.

**Gabarito corrigido**

- 1. Criar um contêiner para o trabalho e agendá-lo pelo EventBridge Scheduler como tarefa ECS com o provedor de capacidade FARGATE, sem usar FARGATE_SPOT.

- Nenhum serviço garante ausência absoluta de falhas ou interrupções.
- Fargate também tem modalidade Spot; a escolha precisava ser explícita.
- Fargate não garante zero interrupções.
- O limite de quinze minutos se aplica ao modo sob demanda padrão, não a todas as modalidades atuais do Lambda.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tasks-scheduled-eventbridge-scheduler.html); [Tempo limite da função Lambda e modalidades de execução](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html).

### Bloco 6 pergunta 31

Identificador do banco: 356.

- Transit Gateway ainda exige rotas/segurança e peering em estrela não fornece trânsito entre aplicativos.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/secure-outbound-network-traffic/vpc-region-communication.html).

### Bloco 6 pergunta 32

Identificador do banco: 357.

- Somente transportar HTTP não diferencia ALB de NLB, que pode transportar HTTP sobreTCP.
- Corrigidos limite de NLB e auto scaling automático atribuído a Fargate.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-anywhere.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html).

### Bloco 6 pergunta 33

Identificador do banco: 358.

- KMS para RDS não ativa TLS e a gestão do banco continua parcialmente com o cliente.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Concepts.General.SSL.Using.html).

### Bloco 6 pergunta 34

Identificador do banco: 359.

**Gabarito anterior**

- 1. Criar um grupo do Auto Scaling contendo várias instâncias do Amazon EC2 que hospedam o aplicativo em duas Zonas de Disponibilidade. Configurar um Application Load Balancer (ALB) e definir o grupo do Auto Scaling como o destino. Conectar um WAF ao ALB.

**Gabarito corrigido**

- 1. Criar um grupo Auto Scaling com instâncias EC2 em duas Zonas de Disponibilidade. Associar o target group de um Application Load Balancer ao grupo Auto Scaling e associar uma web ACL do AWS WAF ao ALB.
- 3. Criar duas instâncias do Amazon EC2 que hospedam o aplicativo em duas Zonas de Disponibilidade. Configurar as instâncias do EC2 como destinos de um Application Load Balancer (ALB). Conectar um WAF ao ALB.

- Duas alternativas satisfazem o requisito original de HA+WAF.
- ASG não é alvo direto de ALB.
- A ausência de escala automática não invalida HA em duasAZs.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/solutions/latest/security-automations-for-aws-waf/step-2.-associate-the-web-acl-with-your-web-application.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/getting-started-elastic-load-balancing.html).

### Bloco 6 pergunta 35

Identificador do banco: 360.

**Gabarito anterior**

- 1. Criar pontos de acesso dedicados do S3 e políticas de pontos de acesso para cada aplicação.

**Gabarito corrigido**

- 1. Criar um S3 Access Point por aplicação e políticas que permitam apenas o prefixo correspondente. Configurar a política do bucket para autorizar/delegar esse acesso e restringir caminhos diretos alternativos que permitam contornar o isolamento.

- Política restrita do accesspoint não remove permissões de acesso direto ao bucket.
- As políticas de accesspoint e bucket são avaliadas conjuntamente.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html).

### Bloco 6 pergunta 36

Identificador do banco: 361.

- Notificações/filas não garantem execução única e RI não obriga servidor sempre ligado.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/services-sqs-configure.html).

### Bloco 6 pergunta 37

Identificador do banco: 362.

**Gabarito anterior**

- 1. Criar um acelerador usando o AWS Global Accelerator. Adicionar os balanceadores de carga como pontos finais.
- 4. Configurar um balanceador de carga de rede em cada Região para endereçar os pontos finais do EC2. Configurar um balanceador de carga de rede em cada Região que roteie para os pontos finais no local.

**Gabarito corrigido**

- 1. Criar um acelerador usando o AWS Global Accelerator. Adicionar os balanceadores de carga como pontos finais.
- 4. Usar NLBs nas Regiões para a carga TCP em EC2. Para a carga UDP local, usar NLBs com proxies UDP em EC2 dentro da VPC, distribuídos em mais de uma AZ, que encaminhem os datagramas aos servidores locais por VPN ou Direct Connect com rotas de ida e retorno configuradas.

- NLB com targetgroupUDP não suporta o alvoIPfora VPC descrito no gabarito.
- Explicada limitação de alvosUDP e continuidade de estado.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html).

### Bloco 6 pergunta 38

Identificador do banco: 363.

- SnapshotEBSnão éobjeto S3 comum e a retenção não é retroativa.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin-create-rule.html).

### Bloco 6 pergunta 39

Identificador do banco: 364.

**Gabarito anterior**

- 1. Confirmar que o AWS Systems Manager Agent (SSM Agent) está instalado em todas as instâncias. Atribuir um perfil de instância com a política necessária para conectar ao Systems Manager. Usar o AWS IAM Identity Center para fornecer acesso ao console para os engenheiros de suporte externos. Usar o Systems Manager Session Manager para atribuir as permissões necessárias.

**Gabarito corrigido**

- 1. Gerenciar as instâncias com SSM Agent, perfil de instância e conectividade aos endpoints Systems Manager. Conceder acesso federado ao console pelo IAM Identity Center e atribuir, via permission sets/IAM, permissões mínimas para iniciar sessões Session Manager nas instâncias autorizadas.

- Permissões são atribuídas porIAM/IdentityCenter, nãopeloSessionManager.
- Corrigida atribuição de permissões e generalização de SSH.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-instance-profile.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-restrict-access.html).

### Bloco 6 pergunta 41

Identificador do banco: 366.

- Diferenciados dois produtos RDSMulti-AZ e explicitado atraso de réplica.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.Replication.ReadReplicas.html).

### Bloco 6 pergunta 43

Identificador do banco: 368.

- S3 não garante acionamento imediato ou único e cobrança Lambda não é apenas tempo.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html).

### Bloco 6 pergunta 44

Identificador do banco: 369.

**Gabarito anterior**

- 4. Habilite o S3 Inventory. Crie uma função AWS Lambda para filtrar e deletar objetos. Invoque a função Lambda com o S3 Batch Operations para deletar objetos usando os relatórios de inventário.

**Gabarito corrigido**

- 4. Gerar um S3 Inventory e um manifesto dos objetos candidatos. Usar a operação Invoke Lambda do S3 Batch Operations; a função verifica a data e a lista de retenção e exclui apenas os objetos ou versões autorizados.

- AWSBatch pode usarFargate, e a operação de exclusão do Batch S3 precisa do Lambda.
- Inventory não oferece data de criação universal e BatchOperations não exclui objetos nativamente.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-operations.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-invoke-lambda.html).

### Bloco 6 pergunta 45

Identificador do banco: 370.

- Corrigidas capacidades automáticas RDS e distinção NLB/ALB comLambda.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html).

### Bloco 6 pergunta 46

Identificador do banco: 371.

**Gabarito anterior**

- 3. Implementar um cluster do Amazon ElastiCache para Redis. Armazenar os dados dos jogadores no cluster do ElastiCache.

**Gabarito corrigido**

- 3. Usar Amazon MemoryDB compatível com Valkey/Redis OSS, com réplicas e log transacional durável Multi-AZ. Armazenar as classificações usando estruturas como sorted sets.

- O requisito pede persistência em disco, não só cacheRedis.
- ElastiCacheRedis não ofereceAOFmoderno nem persistência garantida; reinícioappnãoreiniciacache.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/memorydb/latest/devguide/consistency.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/memorydb/latest/devguide/servicename-feature-overview.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/VersionManagementConsiderations.html).

### Bloco 6 pergunta 47

Identificador do banco: 372.

- Isolamento depende também de políticas, e chaves cifradas em S3 são parte legítima de criptografia por envelope.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/developerguide/logging-using-cloudtrail.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html).

### Bloco 6 pergunta 48

Identificador do banco: 373.

- Fila eMulti-AZnão garantemzero perda/impacto;NLB+ALB podeserválido.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html).

### Bloco 6 pergunta 49

Identificador do banco: 374.

- A configuração io1 original excedia a razão máxima IOPS/GiB e não localizava o gargalo.
- Aumentarcapacidade não amplia IOPS jáno teto;striping requerbanda eproteção.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/provisioned-iops.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/raid-config.html).

### Bloco 6 pergunta 51

Identificador do banco: 376.

**Gabarito anterior**

- 1. Redimensionar a instância EC2 para um tipo de instância EC2 com maior capacidade de CPU. Configurar um grupo Auto Scaling com um tamanho mínimo e máximo de 1. Configurar uma réplica de leitura do RDS para solicitações de leitura.

**Gabarito corrigido**

- 1. Redimensionar a instância EC2 para um tipo de instância EC2 com maior capacidade de CPU. Configurar um grupo Auto Scaling com um tamanho mínimo e máximo de 1. Configurar uma réplica de leitura do RDS para solicitações de leitura.
- 4. Redimensionar a instância EC2 para um tipo de instância EC2 com maior capacidade de CPU. Configurar um grupo Auto Scaling com um tamanho mínimo e máximo de 1. Redimensionar a instância de banco de dados RDS para um tipo de instância com maior capacidade de CPU

- Escalarverticalmenteo RDS também pode atender aoobjetivo de desempenho.
- ASG um não garanteHAininterrupta e réplica não é únicacorreçãopara leituras.

Campos ajustados: prompt, required, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/change-instance-type-of-ebs-backed-instance.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html).

### Bloco 6 pergunta 52

Identificador do banco: 377.

**Gabarito anterior**

- 2. Definir funções IAM que tenham permissões detalhadas com base no princípio do menor privilégio. Atribuir uma função IAM a cada desenvolvedor.

**Gabarito corrigido**

- 2. Definir funçõesIAM com permissões mínimas por tarefa e conceder aos desenvolvedores acesso federado para assumir as funções autorizadas, usando credenciais temporárias e identidades individuais auditáveis.

- A função deve ser assumida em sessão, não atribuída como um grupo.
- Corrigidos papel deCognito e rastreamento por indivíduo versusfunção.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html).

### Bloco 6 pergunta 53

Identificador do banco: 378.

**Gabarito anterior**

- 3. Usar o AWS Identity and Access Management (IAM) Access Analyzer para revisar todos os recursos e contas da empresa.

**Gabarito corrigido**

- 3. Criar um analisador de acesso não utilizado do IAM Access Analyzer no escopo da organização, revisar as permissões e credenciais sem uso no período de acompanhamento e validar com os responsáveis quais podem ser removidas.

- O tipo de analisador e a validação humana precisavam ser explícitos.
- Acesso não usado não significa automaticamente desnecessário.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-create-unused.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-concepts.html).

### Bloco 6 pergunta 54

Identificador do banco: 379.

**Gabarito anterior**

- 2. Ativar o S3 Object Lock nos objetos necessários e habilitar o modo de conformidade.

**Gabarito corrigido**

- 2. Habilitar S3 Object Lock e versionamento no bucket e aplicar retenção em modo de conformidade às versões dos documentos pelo período exigido.

- ObjectLocké configurado no bucket e protege versões específicas.
- ObjectLocknão impede novas versões ou delete markers.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

### Bloco 6 pergunta 55

Identificador do banco: 380.

**Gabarito anterior**

- 4. Assinar o AWS Shield Advanced. Configurar zonas hospedadas no Route 53. Adicionar recursos do ALB como recursos protegidos.

**Gabarito corrigido**

- 4. Assinar Shield Advanced e um plano AWS Support elegível. Proteger o ALB, associar uma verificação de integridade Route 53 à proteção, habilitar engajamento proativo do SRT e cadastrar contatos disponíveis para responder aos incidentes.

- Faltavam pré-condições obrigatórias do engajamento proativo.
- Proatividade não começa apenas com assinatura e proteção.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-srt-proactive-engagement.html).

### Bloco 6 pergunta 56

Identificador do banco: 381.

**Gabarito anterior**

- 1. Criar uma política de recurso para o tópico do SNS que permita que a função Lambda publique mensagens no tópico.
- 3. Criar uma política de recurso para a chave de criptografia usada pelo tópico do SNS que tenha as permissões necessárias do AWS KMS.
- 6. Configurar uma função de execução do Lambda que tenha as permissões necessárias do IAM para usar uma chave gerenciada pelo cliente no AWS KMS.

**Gabarito corrigido**

- 1. Configurar a política do tópico SNS para permitir sns:Publish ao ARN da função de execução IAM usada pela função Lambda na outra conta.
- 3. Configurar a política da chave KMS para autorizar a função de execução externa nas ações kms:GenerateDataKey* e kms:Decrypt necessárias ao tópico.
- 6. Conceder à função de execução Lambda sns:Publish no tópico específico e kms:GenerateDataKey* e kms:Decrypt na chave KMS específica.

- Na mesma conta, uma política específica no tópico nem sempre é necessária.
- Faltava sns:Publish naexecução e havia confusãoCMK/SSE/principal.
- Criptografia SNS éserver-side e o principaldepublicação é arole.

Campos ajustados: prompt, options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-key-management.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html).

### Bloco 6 pergunta 57

Identificador do banco: 382.

- O requisito não explicitava interface que distinguisse EFS de S3 comacessoprivado.
- EBSMultiAttach eMountpoint S3 existem;S3 podeserprivado econcorrente.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mountpoint.html).

### Bloco 6 pergunta 58

Identificador do banco: 383.

**Gabarito anterior**

- 3. Usar o plugin Amazon VPC CNI para Kubernetes. Definir sub-redes personalizadas no cluster VPC para os pods usarem.

**Gabarito corrigido**

- 3. Habilitar custom networking no Amazon VPC CNI em nós EC2, definir ENIConfig por AZ com as sub-redes e grupos de segurança dos pods e configurar as políticas de rede/permissões necessárias à comunicação.

- A alternativa genérica precisava dos recursos deconfiguração adequados.
- NetworkPolicy não controla colocação e CNI não concede segurança automaticamente.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/best-practices/custom-networking.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/cni-subnet-selection.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/best-practices/sgpp.html).

### Bloco 6 pergunta 59

Identificador do banco: 384.

- RDS não pode ser anexado a ASGEC2 e HA não elimina interrupções.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ModifyInstance.Settings.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html).

### Bloco 6 pergunta 60

Identificador do banco: 385.

**Gabarito anterior**

- 1. Usar o Amazon FSx for NetApp ONTAP para armazenamento. Configurar acesso multiprotocolo.

**Gabarito corrigido**

- 1. Usar FSx for NetApp ONTAP com implantação Multi-AZ e acesso multiprotocolo NFS/SMB ao mesmo volume, configurando as identidades, permissões e a conectividade necessárias.

- A tolerância àperdadeAZ exige implantaçãoMulti-AZ.
- S3 File Gateway suporta NFS eSMB, masnão equivaleao compartilhamentomultiprotocolo coordenado.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnNFSFileShare.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html).

### Bloco 6 pergunta 61

Identificador do banco: 386.

- Um ASG não pode abranger váriasRegiões.

Campos ajustados: explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-az-console.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html).

### Bloco 6 pergunta 62

Identificador do banco: 387.

**Gabarito anterior**

- 2. Criar uma camada Lambda que recupere informações sensíveis.
- 3. Armazenar informações sensíveis no AWS Secrets Manager.

**Gabarito corrigido**

- 2. Adicionar às funções a layer oficial AWS Parameters and Secrets Lambda Extension e configurar sua recuperação/cache de segredos com TTL compatível com a rotação.
- 3. Armazenar os segredos no AWS Secrets Manager e configurar a rotação automática suportada pelo tipo de segredo ou pela função de rotação apropriada.

- Uma layergenérica não entrega menor esforço nemcache/rotação por si só.
- Rotação éconfiguradae cachepodeficardefasado;variáveis deambiente não são semprevisíveis.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-secrets-manager.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html).

### Bloco 6 pergunta 64

Identificador do banco: 389.

**Gabarito anterior**

- 2. Redimensionar a réplica de leitura para um tamanho de instância menor. Não fazer alterações na instância primária.

**Gabarito corrigido**

- 2. Validar em testes uma classe menor para a réplica de leitura, monitorando CPU, memória, E/S e atraso de replicação, e reduzi-la se os objetivos de desempenho e margem forem atendidos. Manter a instância primária.

- Redução baseada apenas em CPU não demonstra capacidadedeaplicarreplicação.
- Não há garantia deperformanceou crescimento apartirde CPU25%.

Campos ajustados: options, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.Create.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html).

### Bloco 6 pergunta 65

Identificador do banco: 390.

- Longa duração não implica três anos estáveis nem disponibilidade de pré-pagamento.
- Pré-pagamentotrêsanos não é universalmente a menor despesa ou risco.

Campos ajustados: prompt, explanation.

Documentação: [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html).

## Cobertura integral e fontes

| Bloco | Pergunta | ID | Resultado | Documentação |
| --- | --- | --- | --- | --- |
| 1 | 1 | 1 | Corrigida | [SQS: visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [SQS: AddPermission](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html) |
| 1 | 2 | 2 | Corrigida | [ECS com Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html); [Imagens de contêiner no Lambda](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html) |
| 1 | 3 | 3 | Corrigida | [Locais compatíveis do DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html); [Criptografia em trânsito do DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/encryption-in-transit.html); [Criptografia do Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html) |
| 1 | 4 | 4 | Corrigida | [Réplicas de leitura do RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html); [Criação e dimensionamento de réplicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.Create.html) |
| 1 | 5 | 5 | Corrigida | [Backups pontuais do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Point-in-time-recovery.html); [Backup e restauração do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup-and-Restore.html); [Planejamento dos tempos de restauração](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CreateBackup.html) |
| 1 | 6 | 6 | Corrigida | [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Limites do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html) |
| 1 | 7 | 7 | Corrigida | [Alta disponibilidade do Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html); [Fargate e infraestrutura gerenciada](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) |
| 1 | 8 | 8 | Corrigida | [Endpoint de gateway S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 1 | 9 | 9 | Corrigida | [Notificações S3 com Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html); [Limites de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html) |
| 1 | 10 | 10 | Corrigida | [Compartilhar AMI com contas específicas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html); [Exportação de VM](https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html) |
| 1 | 11 | 11 | Corrigida | [Lambda e processamento com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Destinos de notificações S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html); [Boas práticas do Lambda](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html); [Long polling SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html) |
| 1 | 12 | 12 | Corrigida | [Fundamentos de NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-basics.html); [Egress-only internet gateway IPv6](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html) |
| 1 | 13 | 13 | Corrigida | [Classes de armazenamento S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) |
| 1 | 14 | 14 | Corrigida | [Visão geral do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) |
| 1 | 15 | 15 | Corrigida | [Endpoint de gateway S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html); [Preços do S3 e transferência regional](https://aws.amazon.com/s3/pricing/) |
| 1 | 16 | 16 | Corrigida | [Políticas de recursos para EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-use-resource-based.html) |
| 1 | 17 | 17 | Corrigida | [Buckets Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) |
| 1 | 18 | 18 | Corrigida | [Casos de uso de réplicas RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html) |
| 1 | 19 | 19 | Corrigida | [Assinatura CloudWatch Logs para OpenSearch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html); [Limitação CloudWatch Logs–Firehose–OpenSearch](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-cloudwatch-logs.html) |
| 1 | 20 | 20 | Corrigida | [Upload com URL pré-assinada](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html); [Notificações S3 e Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html) |
| 1 | 21 | 21 | Corrigida | [Amazon MQ ActiveMQ ativo/standby](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-broker-architecture.html); [ASG em múltiplas zonas](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-az-console.html) |
| 1 | 22 | 22 | Corrigida | [Acesso regional por endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 1 | 23 | 23 | Corrigida | [Clonagem do Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html) |
| 1 | 24 | 24 | Corrigida | [Processamento de objetos com Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html); [Limites de tamanho do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html) |
| 1 | 25 | 25 | Corrigida | [Object Lock e retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html); [Bypass do modo Governance](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html) |
| 1 | 26 | 26 | Corrigida | [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Armazenamento temporário Lambda](https://docs.aws.amazon.com/lambda/latest/dg/configuration-ephemeral-storage.html) |
| 1 | 27 | 27 | Corrigida | [Origem S3 privada com CloudFront OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) |
| 1 | 28 | 28 | Corrigida | [Montagem FSx for Lustre a partir de rede local](https://docs.aws.amazon.com/fsx/latest/LustreGuide/mounting-on-premises.html) |
| 1 | 29 | 29 | Corrigida | [MFA Delete do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html) |
| 1 | 30 | 30 | Corrigida | [Lambda com fila SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Políticas de entrega SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html) |
| 1 | 31 | 31 | Corrigida | [Health checks HTTP do NLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html); [Health checks ELB no Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html) |
| 1 | 32 | 32 | Corrigida | [Detecção de PHI](https://docs.aws.amazon.com/comprehend-medical/latest/dev/textanalysis-phi.html); [Idiomas do Comprehend Medical](https://docs.aws.amazon.com/comprehend-medical/latest/dev/comprehendmedical-welcome.html) |
| 1 | 33 | 33 | Corrigida | [Controle por política e endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 1 | 34 | 34 | Corrigida | [Disponibilidade do FSx File Gateway](https://docs.aws.amazon.com/filegateway/latest/filefsxw/DocumentHistory.html); [Acesso híbrido FSx Windows](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/supported-fsx-clients.html); [Recursos SMB do S3 File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html) |
| 1 | 35 | 35 | Corrigida | [Criptografia de segredos](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html); [Limites do Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html); [KMS Encrypt e limite direto](https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html); [SSE-KMS no S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) |
| 1 | 36 | 36 | Corrigida | [Atualização de dispositivos Snow](https://aws.amazon.com/blogs/storage/aws-snow-device-updates/); [Snowball Edge](https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html); [Alternativas e fim de suporte Snow](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-storage-service.html) |
| 1 | 37 | 37 | Corrigida | [Rotação de segredos](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html) |
| 1 | 38 | 38 | Corrigida | [Modelo de Reserved Instances EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html) |
| 1 | 39 | 39 | Corrigida | [FSx Windows Single-AZ e Multi-AZ](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [SMB e Active Directory no S3 File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html) |
| 1 | 40 | 40 | Corrigida | [Object Lock e modos de retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html); [Object Lock com ciclo de vida e criptografia](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html) |
| 1 | 41 | 41 | Corrigida | [Auto Scaling por backlog SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html); [Retentativas de entrega SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html) |
| 1 | 42 | 42 | Corrigida | [Kinesis como destino DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html); [Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html) |
| 1 | 43 | 43 | Corrigida | [Configuração de rotação Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html); [Estrutura de um segredo](https://docs.aws.amazon.com/secretsmanager/latest/userguide/whats-in-a-secret.html) |
| 1 | 44 | 44 | Corrigida | [DataSync com origem NFS](https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html); [Locais suportados DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html) |
| 1 | 45 | 45 | Corrigida | [Modos de capacidade Kinesis](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html); [Consumidores de processamento Kinesis](https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-implementation-app-java.html) |
| 1 | 46 | 46 | Corrigida | [Objetos e recursos do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) |
| 1 | 47 | 47 | Corrigida | [Proteção de versões Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) |
| 1 | 48 | 48 | Corrigida | [Backups avançados DynamoDB no AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html); [Backup sob demanda DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html) |
| 1 | 49 | 49 | Corrigida | [DMS full load e CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html) |
| 1 | 50 | 50 | Corrigida | [VPN como backup de Direct Connect](https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/direct-connect.html); [Preferência de rotas e backup no Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html); [Criptografia Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html) |
| 1 | 51 | 51 | Corrigida | [Rotação de chaves KMS](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html); [SSE-KMS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) |
| 1 | 52 | 52 | Corrigida | [Regras de segurança para SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) |
| 1 | 53 | 53 | Corrigida | [Origens personalizadas CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) |
| 1 | 54 | 54 | Corrigida | [Eventos S3 no CloudTrail](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging-s3-info.html); [SSE-KMS e permissões](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) |
| 1 | 55 | 55 | Corrigida | [Proteções Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-summary.html) |
| 1 | 56 | 56 | Corrigida | [Capacidade sob demanda DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html) |
| 1 | 57 | 57 | Corrigida | [Regras web e banco EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html); [Estado de conexões dos grupos de segurança](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html) |
| 1 | 58 | 58 | Corrigida | [Marcadores de trabalho Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html) |
| 1 | 59 | 59 | Corrigida | [Certificados importados no ACM](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html); [Eventos ACM no EventBridge](https://docs.aws.amazon.com/acm/latest/userguide/supported-events.html) |
| 1 | 60 | 60 | Corrigida | [Aceleradores padrão Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html) |
| 1 | 61 | 61 | Corrigida | [Transformações no Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html); [Glue Streaming ETL](https://docs.aws.amazon.com/glue/latest/dg/add-job-streaming.html) |
| 1 | 62 | 62 | Corrigida | [Pré-requisitos Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html); [Políticas WAF gerenciadas por Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-fms.html); [Organizations para Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/join-aws-orgs.html) |
| 1 | 63 | 63 | Corrigida | [REST API com Lambda e DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html) |
| 1 | 64 | 64 | Corrigida | [Eventos nativos de expiração ACM](https://docs.aws.amazon.com/acm/latest/userguide/supported-events.html); [Regra Config de expiração ACM](https://docs.aws.amazon.com/config/latest/developerguide/acm-certificate-expiration-check.html); [Escopo de verificações Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/security-checks.html) |
| 1 | 65 | 65 | Corrigida | [Vídeo sob demanda com CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-video.html) |
| 2 | 1 | 66 | Corrigida | [Habilitar rotação KMS](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable.html); [SSE-KMS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) |
| 2 | 2 | 67 | Corrigida | [DLQ no SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html); [Visibilidade SQS e limite de doze horas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [Retries SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html) |
| 2 | 3 | 68 | Corrigida | [Recebimento, exclusão e retry SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [Auto Scaling para consumidores SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html) |
| 2 | 4 | 69 | Corrigida | [Proteção Shield de EC2 e NLB por EIP](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-protections-ec2-nlb.html); [Recursos protegidos pelo WAF](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html); [CreateProtection Shield](https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html) |
| 2 | 5 | 70 | Corrigida | [Compartilhamento Transit Gateway por RAM](https://docs.aws.amazon.com/vpc/latest/tgw/working-with-transit-gateways.html) |
| 2 | 6 | 71 | Corrigida | [Fargate para ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html); [Auto Scaling de serviços ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html) |
| 2 | 7 | 72 | Corrigida | [ASG distribuído entre zonas](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-az-console.html) |
| 2 | 8 | 73 | Corrigida | [Operação e consistência DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html) |
| 2 | 9 | 74 | Corrigida | [Pool e limites do RDS Proxy Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html) |
| 2 | 10 | 75 | Corrigida | [Réplicas RDS para relatórios](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html) |
| 2 | 11 | 76 | Corrigida | [Entrega CloudFront a partir de S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html); [Conteúdo privado e assinaturas CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) |
| 2 | 12 | 77 | Corrigida | [CloudFront para entrega de mídia](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-video.html); [Preços S3 e transferência para CloudFront](https://aws.amazon.com/s3/pricing/) |
| 2 | 13 | 78 | Corrigida | [Modelo GWLB e appliances](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html); [Rotas de inspeção GWLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html) |
| 2 | 14 | 79 | Corrigida | [Criptografia de campos CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html); [URLs e cookies assinados](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) |
| 2 | 15 | 80 | Corrigida | [Restringir origem S3 com OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html); [Recursos WAF suportados](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html) |
| 2 | 16 | 81 | Corrigida | [Estratégias de recuperação AWS](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html) |
| 2 | 17 | 82 | Corrigida | [Função IAM da tarefa ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) |
| 2 | 18 | 83 | Corrigida | [Associação de repositório FSx Lustre e S3](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html) |
| 2 | 19 | 84 | Corrigida | [Regra geográfica WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) |
| 2 | 20 | 85 | Corrigida | [API keys não são autenticação](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html); [Authorizer Cognito para REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html); [WAF em APIs REST](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html) |
| 2 | 21 | 86 | Corrigida | [Athena: organização, partições, formatos colunares e tamanho dos arquivos](https://docs.aws.amazon.com/athena/latest/ug/performance-tuning-data-optimization-techniques.html) |
| 2 | 22 | 87 | Corrigida | [CloudFront: bucket S3 como origem](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html); [DynamoDB: limites de tamanho dos itens](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html) |
| 2 | 23 | 88 | Corrigida | [Parameter Store: criptografia de SecureString com KMS](https://docs.aws.amazon.com/systems-manager/latest/userguide/secure-string-parameter-kms-encryption.html); [IAM: funções para Amazon EC2](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) |
| 2 | 24 | 89 | Corrigida | [RDS: implantação Multi-AZ com um standby síncrono](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html); [RDS: cluster Multi-AZ com três AZs e replicação semissíncrona](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) |
| 2 | 25 | 90 | Corrigida | [S3: diferenças entre classes Glacier e tempos de recuperação](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html); [S3: classes de armazenamento](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) |
| 2 | 26 | 91 | Corrigida | [Snowball: transferência física, preparação do dispositivo e encerramento de vendas](https://aws.amazon.com/snowball/faqs/); [Snowball: fim de suporte nas Regiões comerciais em 31/12/2026](https://aws.amazon.com/snowball/); [Snowball: disponibilidade apenas para clientes existentes desde 07/11/2025](https://docs.aws.amazon.com/snowball/latest/developer-guide/doc-history.html) |
| 2 | 27 | 92 | Corrigida | [Elastic Beanstalk: implantação blue/green por troca de CNAME](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html); [Elastic Beanstalk: ambientes com balanceamento e Auto Scaling](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.as.html) |
| 2 | 28 | 93 | Corrigida | [EC2: métricas publicadas no CloudWatch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html); [CloudWatch: métricas adicionais coletadas pelo agente](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html); [EC2: instâncias otimizadas para memória, incluindo R5](https://docs.aws.amazon.com/ec2/latest/instancetypes/mo.html) |
| 2 | 29 | 94 | Corrigida | [Athena: consultas SQL serverless sobre dados no S3](https://docs.aws.amazon.com/athena/latest/ug/what-is.html); [Redshift Spectrum: consultas ao S3 sem carregar tabelas locais](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html) |
| 2 | 30 | 95 | Corrigida | [ElastiCache: Multi-AZ e failover com Valkey e Redis OSS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html); [ALB: funcionamento das sessões persistentes](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html) |
| 2 | 31 | 96 | Corrigida | [Athena: SQL serverless sobre arquivos no S3](https://docs.aws.amazon.com/athena/latest/ug/what-is.html); [CloudWatch Logs: consultas OpenSearch SQL](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_SQL.html); [Redshift Spectrum: consultar S3 sem carregar os arquivos](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html) |
| 2 | 32 | 97 | Corrigida | [Organizations: SCPs, escopo e exceções](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) |
| 2 | 33 | 98 | Corrigida | [IAM: função e perfil de instância EC2, credenciais temporárias](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) |
| 2 | 34 | 99 | Corrigida | [EC2: Spot, tolerância a interrupções e disponibilidade de capacidade](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html); [EC2: Reserved Instances regionais e zonais](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html) |
| 2 | 35 | 100 | Corrigida | [DynamoDB: TTL e exclusão em segundo plano](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html); [DynamoDB: cálculo do TTL em segundos Unix](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html); [DynamoDB: filtrar itens expirados ainda presentes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ttl-expired-items.html) |
| 2 | 36 | 101 | Corrigida | [Endpoints de interface e gateway do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html); [Políticas de bucket com aws:SourceVpce](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html) |
| 2 | 37 | 102 | Corrigida | [Processamento do SQS pelo Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Destinos das notificações do S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html) |
| 2 | 38 | 103 | Corrigida | [Escolha de serviços serverless](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-serverless-service.html); [O que o Cluster Autoscaler dimensiona](https://docs.aws.amazon.com/eks/latest/best-practices/cas.html) |
| 2 | 39 | 104 | Corrigida | [Integração de Direct Connect gateway e Transit Gateway](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html) |
| 2 | 40 | 105 | Corrigida | [Failover de Aurora Global Database](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html); [Estratégias de recuperação de desastres](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html) |
| 2 | 41 | 106 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html) |
| 2 | 42 | 107 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html) |
| 2 | 43 | 108 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/documentdb/latest/devguide/functional-differences.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/fargate.html) |
| 2 | 44 | 109 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event-cloudtrail.html) |
| 2 | 45 | 110 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-strategies.html) |
| 2 | 46 | 111 | Corrigida | [Classes de armazenamento do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html); [Opções de recuperação de arquivos](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html); [Gerenciamento do ciclo de vida de objetos](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html); [Armazenamento de arquivos elástico do Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html) |
| 2 | 47 | 112 | Corrigida | [Políticas de rastreamento de destino do EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html); [Políticas de dimensionamento e alarmes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html); [Dimensionamento automático do armazenamento RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html); [Compatibilidade dos mecanismos do Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) |
| 2 | 48 | 113 | Corrigida | [Permissões da função de execução Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html); [Exemplos de políticas de bucket S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) |
| 2 | 49 | 114 | Corrigida | [Cache CloudFront baseado em cabeçalhos e idioma](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html); [Políticas de chave de cache do CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html); [Configurações da origem CloudFront e ALB](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html); [Cache de APIs REST no API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) |
| 2 | 50 | 115 | Corrigida | [Integração proxy Lambda com API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html); [Concorrência e dimensionamento das funções Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html); [EC2 Auto Scaling com rastreamento de destino](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html) |
| 2 | 51 | 116 | Corrigida | [FSx for Windows File Server e protocolo SMB](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html); [Implantações Single-AZ e Multi-AZ do FSx Windows](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [Protocolos de montagem do EFS](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html); [Limitações e suporte do EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html); [Volume Gateway usa volumes iSCSI](https://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html) |
| 2 | 52 | 117 | Corrigida | [Filas Standard do Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html); [Visibilidade e exclusão de mensagens SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html); [Retenção e cotas de mensagens SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html); [Tentativas de entrega do Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html); [Fila de invocação assíncrona do Lambda](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html); [Captura de alterações por DynamoDB Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html) |
| 2 | 53 | 118 | Corrigida | [Autorizador de pools Cognito para APIs REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html); [Recomendações sobre planos de uso e chaves de API](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html); [Autorizadores Lambda no API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) |
| 2 | 54 | 119 | Corrigida | [SQS Standard para desacoplamento e buffer](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html); [Integração Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Controle da concorrência no mapeamento SQS](https://docs.aws.amazon.com/lambda/latest/dg/services-sqs-scaling.html); [Retenção das mensagens SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html); [Operações de escrita write-through no DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html); [Índices globais secundários do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html) |
| 2 | 55 | 120 | Corrigida | [Gateway endpoints para DynamoDB](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-ddb.html); [Conectividade e encaminhamento na rede AWS — FAQ VPC](https://aws.amazon.com/vpc/faqs/); [Gateways NAT públicos e privados](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html); [Requisitos de uma instância NAT](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html) |
| 2 | 56 | 121 | Corrigida | [RDS Proxy: pool, reutilização, fila e limites de conexões](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html) |
| 2 | 57 | 122 | Corrigida | [AWS Glue: leitura e gravação em Redshift por integração com Spark](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect-redshift-home.html); [Redshift Spectrum: formatos suportados, incluindo OpenCSV](https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-data-files.html) |
| 2 | 58 | 123 | Corrigida | [S3: três camadas automáticas e duas camadas de arquivo opcionais no Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html); [S3: comparação das classes de armazenamento](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) |
| 2 | 59 | 124 | Corrigida | [Elastic Beanstalk: plataforma Windows para aplicações web .NET](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.html); [RDS for Oracle: suporte e implantação Multi-AZ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html); [RDS for Oracle: SE2 e licenciamento de Multi-AZ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Concepts.Licensing.html); [DMS: carga completa, CDC e preparação da mudança para o destino](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.HighLevelView.html) |
| 2 | 60 | 125 | Corrigida | [AWS Glue: conexão JDBC usada por jobs ETL](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-connect-jdbc-home.html); [Glue Data Catalog e crawlers: metadados, não cópia dos dados](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html); [Lake Formation: segurança por coluna, linha e célula](https://docs.aws.amazon.com/lake-formation/latest/dg/data-filtering.html); [Lake Formation: criação, ingestão e governança do data lake](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html) |
| 2 | 61 | 126 | Corrigida | [Shield: proteção gerenciada contra DDoS e responsabilidade compartilhada](https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html); [Shield Advanced: adicionar recursos protegidos](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-choose-resources.html); [Shield: transição de L7 Auto Mitigation para Anti-DDoS Managed Rule Group em 2026](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-automatic-app-layer-response.html); [AWS WAF: grupo gerenciado Anti-DDoS](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-anti-ddos.html) |
| 2 | 62 | 127 | Corrigida | [Transcribe: diarização e rótulos de falantes](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html); [Athena: consultas SQL sobre dados S3](https://docs.aws.amazon.com/athena/latest/ug/what-is.html); [S3: Object Lock para impedir exclusão de versões durante retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) |
| 2 | 63 | 128 | Corrigida | [S3: criptografia automática de novos uploads desde 05/01/2023](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html) |
| 2 | 64 | 129 | Corrigida | [S3: classes Glacier, modalidades e tempos típicos de recuperação](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html) |
| 2 | 65 | 130 | Corrigida | [S3: transições por ciclo de vida e limite padrão de 128 KB](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html); [S3: Deep Archive, recuperação e duração mínima](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html); [S3: camadas automáticas e opcionais de Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html); [S3: Object Lock e retenção de versões](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) |
| 3 | 1 | 131 | Corrigida | [CloudFront: acesso privado à origem S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) |
| 3 | 2 | 132 | Corrigida | [EC2 Auto Scaling: tipos e opções de compra combinados](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) |
| 3 | 3 | 133 | Corrigida | [DynamoDB com AWS Backup](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedBackupsAWS.html); [Configuração de planos e retenção de backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/plan-options-and-configuration.html) |
| 3 | 5 | 135 | Corrigida | [Padrão transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html); [DMS com destino Kinesis Data Streams](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html); [Fan-out SNS para filas SQS](https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html); [Eventos RDS no EventBridge](https://docs.aws.amazon.com/prescriptive-guidance/latest/amazon-rds-monitoring-alerting/eventbridge-rules.html) |
| 3 | 7 | 137 | Corrigida | [VPN com Direct Connect](https://docs.aws.amazon.com/vpn/latest/s2svpn/Examples.html) |
| 3 | 8 | 138 | Corrigida | [Réplicas de leitura RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html) |
| 3 | 9 | 139 | Corrigida | [Atualizações dos dispositivos Snow](https://aws.amazon.com/blogs/storage/aws-snow-device-updates/); [Disponibilidade e fim de suporte Snowball](https://aws.amazon.com/snowball/) |
| 3 | 10 | 140 | Corrigida | [Clonagem de volumes Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html); [Réplicas RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html) |
| 3 | 12 | 142 | Corrigida | [Rekognition com S3 e Lambda](https://docs.aws.amazon.com/rekognition/latest/dg/label-marketing-tutorial.html) |
| 3 | 13 | 143 | Corrigida | [Grupos de instâncias mistas do Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) |
| 3 | 14 | 144 | Corrigida | [Regra Config de expiração ACM](https://docs.aws.amazon.com/config/latest/developerguide/acm-certificate-expiration-check.html); [Monitoramento Config com EventBridge](https://docs.aws.amazon.com/config/latest/developerguide/monitor-config-with-cloudwatchevents.html); [Configuração dos eventos de expiração ACM](https://docs.aws.amazon.com/cli/latest/reference/acm/put-account-configuration.html); [Métrica DaysToExpiry](https://docs.aws.amazon.com/acm/latest/userguide/cloudwatch-metrics.html) |
| 3 | 16 | 146 | Corrigida | [CloudFront e origem S3 privada ou de site](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) |
| 3 | 17 | 147 | Corrigida | [Health checks HTTP/HTTPS de NLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html); [Checks ELB no Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-checks-overview.html) |
| 3 | 20 | 150 | Corrigida | [Cotas do Lambda](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html); [Limite de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html); [Eventos S3 com Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html) |
| 3 | 21 | 151 | Corrigida | [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Limites de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html) |
| 3 | 22 | 152 | Corrigida | [Modo sob demanda do DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html) |
| 3 | 24 | 154 | Corrigida | [FSx File Gateway e acesso local](https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html); [Elegibilidade do FSx File Gateway](https://docs.aws.amazon.com/filegateway/latest/filefsxw/create-file-gateway.html) |
| 3 | 25 | 155 | Corrigida | [FSx e Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/aws-ad-integration-fsxW.html); [FSx Multi-AZ](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [S3 File Gateway com SMB e AD](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html) |
| 3 | 28 | 158 | Corrigida | [Object Lock e legal hold](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html); [Permissões das operações S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-policy-actions.html) |
| 3 | 30 | 160 | Corrigida | [Operadores de condição IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html); [Validação de SourceIp e IPs privados](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-policy-checks.html) |
| 3 | 31 | 161 | Corrigida | [Regras de grupos de segurança](https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html) |
| 3 | 32 | 162 | Corrigida | [Proteção Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-summary.html) |
| 3 | 33 | 163 | Corrigida | [S3 e Lambda: notificações e recursão](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html); [Limite de itens DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html) |
| 3 | 34 | 164 | Corrigida | [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Ciclo de vida do ambiente Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html) |
| 3 | 35 | 165 | Corrigida | [Proteção e durabilidade dos dados S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html); [Classes de armazenamento S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) |
| 3 | 36 | 166 | Corrigida | [Criptografia em trânsito DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/encryption-in-transit.html) |
| 3 | 37 | 167 | Corrigida | [WAF em API Gateway REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html); [Políticas regionais Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/create-policy.html); [Pré-requisitos Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html) |
| 3 | 42 | 172 | Corrigida | [Opções de compra e descontinuação de Spot blocks](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-purchasing-options.html); [Descontos e instâncias mistas](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) |
| 3 | 43 | 173 | Corrigida | [DetectSentiment e categorias](https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html); [Eventos de criação S3 para Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html) |
| 3 | 44 | 174 | Corrigida | [Lambda com SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Métricas SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html); [Entrega SNS FIFO](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-delivery.html) |
| 3 | 45 | 175 | Corrigida | [Gateway endpoints S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 3 | 48 | 178 | Corrigida | [Rotação de segredos Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html) |
| 3 | 49 | 179 | Corrigida | [Lambda com Amazon MQ](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html); [Configuração da origem MQ](https://docs.aws.amazon.com/lambda/latest/dg/process-mq-messages-with-lambda.html) |
| 3 | 50 | 180 | Corrigida | [Auto Scaling por backlog SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html); [Durabilidade SNS](https://aws.amazon.com/sns/features/) |
| 3 | 51 | 181 | Corrigida | [CloudWatch Logs para OpenSearch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html); [Limitação CloudWatch Logs/Firehose/OpenSearch](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-cloudwatch-logs.html) |
| 3 | 52 | 182 | Corrigida | [API REST como proxy Kinesis](https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-kinesis.html); [Fontes Flink](https://docs.aws.amazon.com/managed-flink/latest/java/how-sources.html); [Destinos Flink](https://docs.aws.amazon.com/managed-flink/latest/java/how-sinks.html); [Descontinuação Kinesis Data Analytics SQL](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/discontinuation.html) |
| 3 | 57 | 187 | Corrigida | [NAT gateways e roteamento](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html); [Egress-only IPv6](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html) |
| 3 | 59 | 189 | Corrigida | [Object Lock e modos de retenção](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) |
| 3 | 63 | 193 | Corrigida | [Cobrança Requester Pays](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html) |
| 4 | 1 | 196 | Corrigida | [Aurora Serverless v2: pausa automática](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2-auto-pause.html) |
| 4 | 2 | 197 | Corrigida | [Regra required-tags e remediação](https://docs.aws.amazon.com/config/latest/developerguide/required-tags.html); [Seleção de recursos AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html) |
| 4 | 3 | 198 | Corrigida | [Assinaturas de email SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-email-notifications.html) |
| 4 | 4 | 199 | Corrigida | [EFS Regional e consistência](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Cotas EFS](https://docs.aws.amazon.com/efs/latest/ug/limits.html) |
| 4 | 5 | 200 | Corrigida | [Logging S3 de Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging-s3.html); [Limitações de SSH e port forwarding](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html) |
| 4 | 6 | 201 | Corrigida | [EFS Regional](https://docs.aws.amazon.com/efs/latest/ug/features.html); [CloudFront e cache na borda](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) |
| 4 | 7 | 202 | Corrigida | [Endpoint gateway S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 4 | 8 | 203 | Corrigida | [Integração privada API Gateway REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html) |
| 4 | 9 | 204 | Corrigida | [Clusters EKS privados](https://docs.aws.amazon.com/eks/latest/userguide/private-clusters.html); [Endpoint Kubernetes privado](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html); [Endpoint EKS PrivateLink e limitações](https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html) |
| 4 | 10 | 205 | Corrigida | [Storage autoscaling RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html) |
| 4 | 11 | 206 | Corrigida | [Autorização de Function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) |
| 4 | 12 | 207 | Corrigida | [Arquitetura analítica Redshift](https://docs.aws.amazon.com/redshift/latest/dg/c_redshift_system_overview.html); [Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html) |
| 4 | 13 | 208 | Corrigida | [Exportação DynamoDB para S3](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html); [Solicitar exportação completa/incremental](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport_Requesting.html) |
| 4 | 14 | 209 | Confirmada | [Uploads com URLs pré-assinadas](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html) |
| 4 | 15 | 210 | Corrigida | [Gateway endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 4 | 16 | 211 | Corrigida | [SCPs e usuários root de membros](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) |
| 4 | 17 | 212 | Corrigida | [Expiração de versões S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html); [Exemplos de Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html) |
| 4 | 18 | 213 | Corrigida | [Conexões hospedadas Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/hosted_connection.html) |
| 4 | 19 | 214 | Corrigida | [Fontes de identidade IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source.html) |
| 4 | 20 | 215 | Corrigida | [SCP para impedir tipos de instância](https://docs.aws.amazon.com/managedservices/latest/userguide/scp-library-compliance.html); [Restrições de lançamento Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-launch.html) |
| 4 | 21 | 216 | Corrigida | [Montagem EFS por clientes locais](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-helper-direct.html); [EFS Regional](https://docs.aws.amazon.com/efs/latest/ug/features.html); [EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html) |
| 4 | 22 | 217 | Corrigida | [Consistência DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html); [Adequação do DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html) |
| 4 | 23 | 218 | Corrigida | [Redimensionamento S3 e Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html); [Eventos S3 e prevenção de loops](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html) |
| 4 | 25 | 220 | Corrigida | [Peering entre Transit Gateways](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-peering.html) |
| 4 | 26 | 221 | Corrigida | [Gateway endpoint S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) |
| 4 | 27 | 222 | Corrigida | [DLQs de assinaturas SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html) |
| 4 | 28 | 223 | Corrigida | [EFS Regional e mount targets](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Recursos suportados pelo AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html); [Cópias de backup entre Regiões](https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html) |
| 4 | 29 | 224 | Corrigida | [Matriz de suporte AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html) |
| 4 | 30 | 225 | Corrigida | [Volume Gateway e cached volumes](https://docs.aws.amazon.com/storagegateway/latest/vgw/StorageGatewayConcepts.html); [S3 File Gateway SMB/arquivos](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html); [EFS por VPN](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-helper-direct.html) |
| 4 | 31 | 226 | Corrigida | [Funcionamento Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html) |
| 4 | 32 | 227 | Corrigida | [ALB e alvos em zonas](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html); [Checks ELB em Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-checks-overview.html) |
| 4 | 33 | 228 | Corrigida | [Identificadores gerenciados Macie](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html) |
| 4 | 34 | 229 | Confirmada | [Delegação entre contas por funções IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html) |
| 4 | 35 | 230 | Corrigida | [Capacidade e interrupções Spot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html) |
| 4 | 36 | 231 | Corrigida | [Tipos de rotação Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html) |
| 4 | 37 | 232 | Corrigida | [Consultar CloudTrail no Athena](https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html) |
| 4 | 38 | 233 | Corrigida | [RDS Proxy: failover e transações](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.howitworks.html) |
| 4 | 39 | 234 | Corrigida | [Multi-AZ SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerMultiAZ.html); [ALB e disponibilidade](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) |
| 4 | 40 | 235 | Corrigida | [Acesso de terceiros e ExternalId](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html) |
| 4 | 41 | 236 | Corrigida | [Domínio Regional API Gateway e certificado](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html); [Domínios wildcard REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) |
| 4 | 42 | 237 | Corrigida | [Switchover/failover Aurora Global Database](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html); [DMS e replicação contínua CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html) |
| 4 | 43 | 238 | Corrigida | [Protocolos e endpoints Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/sftp-for-transfer-family.html); [Lambda por eventos S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html) |
| 4 | 44 | 239 | Corrigida | [Reserved e provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html); [Spillover e cold starts](https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting-invocation.html) |
| 4 | 45 | 240 | Corrigida | [Estratégias de cache ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html) |
| 4 | 46 | 241 | Corrigida | [Classes de tabela DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.TableClasses.html); [Capacidade sob demanda](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html) |
| 4 | 47 | 242 | Corrigida | [Idiomas e funcionalidades Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html); [Idiomas Translate](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html); [Análise de sentimento Comprehend](https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html) |
| 4 | 48 | 243 | Corrigida | [Egress-only IPv6](https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html) |
| 4 | 49 | 244 | Corrigida | [Distribuição CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html); [Componentes e targets ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) |
| 4 | 50 | 245 | Corrigida | [Opções de recuperação de arquivos S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html); [Classes S3 e resiliência](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) |
| 4 | 51 | 246 | Corrigida | [Metadados preservados pelo DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/metadata-copied.html); [Migração FSx com Robocopy](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/migrate-files-to-fsx.html); [Descontinuação Snowcone](https://aws.amazon.com/blogs/storage/aws-snow-device-updates/) |
| 4 | 52 | 247 | Corrigida | [CloudFormation e reprodução de infraestrutura](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) |
| 4 | 53 | 248 | Corrigida | [Criptografia de recursos RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html) |
| 4 | 54 | 249 | Corrigida | [Aurora Global Database e escritor primário](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html); [Modos de consistência de tabelas globais DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html) |
| 4 | 55 | 250 | Confirmada | [Global Accelerator: TCP/UDP e endpoints](https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html) |
| 4 | 56 | 251 | Corrigida | [Aplicação e compartilhamento Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-applying.html); [Preferências de faturamento](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-pref.html) |
| 4 | 57 | 252 | Corrigida | [HPA em EKS](https://docs.aws.amazon.com/eks/latest/userguide/horizontal-pod-autoscaler.html); [Cluster Autoscaler EKS](https://docs.aws.amazon.com/eks/latest/best-practices/cas.html) |
| 4 | 58 | 253 | Corrigida | [Lambda com Kinesis Data Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html); [Descontinuação Kinesis Data Analytics SQL](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/discontinuation.html) |
| 4 | 59 | 254 | Corrigida | [API de custos e uso](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html); [API de previsão de custos](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html) |
| 4 | 60 | 255 | Corrigida | [Criptografia EBS e recursos existentes](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html); [Criptografia RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html); [Cópia de snapshot RDS criptografada](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html) |
| 4 | 61 | 256 | Corrigida | [Requisitos e limites RDS Custom Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits.html); [Migração para RDS Custom Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-migrating-oracle.html); [Fim de suporte RDS Custom Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/RDS-Custom-for-Oracle-end-of-support.html) |
| 4 | 62 | 257 | Corrigida | [Fargate para ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html); [S3 e CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) |
| 4 | 63 | 258 | Confirmada | [Produtos, portfólios e autoatendimento Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html) |
| 4 | 64 | 259 | Corrigida | [Grupos de usuários IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html); [SCP não concede permissões](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) |
| 4 | 65 | 260 | Corrigida | [S3 Object Lock e versões protegidas](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) |
| 5 | 1 | 261 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html) |
| 5 | 2 | 262 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html) |
| 5 | 3 | 263 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-security-policies.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-security-policies-list.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) |
| 5 | 4 | 264 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html) |
| 5 | 5 | 265 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) |
| 5 | 6 | 266 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html) |
| 5 | 7 | 267 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) |
| 5 | 8 | 268 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/directconnect/latest/UserGuide/resiliency_toolkit.html) |
| 5 | 9 | 269 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.BackupRetention.html) |
| 5 | 10 | 270 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html) |
| 5 | 11 | 271 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html) |
| 5 | 12 | 272 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Replication.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html) |
| 5 | 13 | 273 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) |
| 5 | 14 | 274 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-renewal.html) |
| 5 | 15 | 275 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html) |
| 5 | 16 | 276 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_cloudtrail-integration.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-organizations.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/controltower/latest/userguide/governance-drift.html) |
| 5 | 17 | 277 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html) |
| 5 | 18 | 278 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) |
| 5 | 19 | 279 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) |
| 5 | 20 | 280 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html) |
| 5 | 21 | 281 | Confirmada | [Documentação oficial da AWS](https://aws.amazon.com/blogs/networking-and-content-delivery/demystifying-amazon-vpc-peering-charges/) |
| 5 | 22 | 282 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) |
| 5 | 23 | 283 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/drs/latest/userguide/FAQ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html) |
| 5 | 24 | 284 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/macie/latest/user/discovery-asdd-account-configure.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/macie/latest/user/discovery-supported-storage.html) |
| 5 | 25 | 285 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html) |
| 5 | 26 | 286 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ec2/latest/instancetypes/ac.html) |
| 5 | 27 | 287 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/redshift/latest/mgmt/spark-redshift-connector.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-redshift.html) |
| 5 | 28 | 288 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Replication.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html) |
| 5 | 29 | 289 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html) |
| 5 | 30 | 290 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-monitoring-events-best-practices.html) |
| 5 | 31 | 291 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) |
| 5 | 32 | 292 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Replication.html) |
| 5 | 33 | 293 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html) |
| 5 | 34 | 294 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/storagegateway/latest/tgw/StorageGatewayConcepts.html) |
| 5 | 35 | 295 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2-auto-pause.html) |
| 5 | 36 | 296 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/general-purpose.html) |
| 5 | 37 | 297 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.overview.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Concepts.Licensing.html) |
| 5 | 38 | 298 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) |
| 5 | 39 | 299 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html) |
| 5 | 40 | 300 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html) |
| 5 | 41 | 301 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/sample-schedules.html) |
| 5 | 42 | 302 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) |
| 5 | 43 | 303 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) |
| 5 | 44 | 304 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html) |
| 5 | 45 | 305 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html) |
| 5 | 46 | 306 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html) |
| 5 | 47 | 307 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars-encryption.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) |
| 5 | 48 | 308 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/glue/latest/dg/add-job-streaming.html) |
| 5 | 49 | 309 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html) |
| 5 | 50 | 310 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_eventbridge.html) |
| 5 | 51 | 311 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/efs/latest/ug/features.html) |
| 5 | 52 | 312 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/envelope-encryption.html) |
| 5 | 53 | 313 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html) |
| 5 | 54 | 314 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) |
| 5 | 55 | 315 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html) |
| 5 | 56 | 316 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html) |
| 5 | 57 | 317 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html) |
| 5 | 58 | 318 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html) |
| 5 | 59 | 319 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/macie/latest/user/findings-publish-event-schemas.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/macie/latest/user/findings-types.html) |
| 5 | 60 | 320 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html) |
| 5 | 61 | 321 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) |
| 5 | 62 | 322 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/cryptographic-details/client-side-encryption.html) |
| 5 | 63 | 323 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html) |
| 5 | 64 | 324 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/doc-history.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/snowball/latest/developer-guide/using-adapter.html) |
| 5 | 65 | 325 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html) |
| 6 | 1 | 326 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html) |
| 6 | 2 | 327 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/fargate-or-lambda.html); [Tempo limite da função Lambda e modalidades de execução](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html) |
| 6 | 4 | 329 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ebs-recommendations.html) |
| 6 | 5 | 330 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-versioning-enabled.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-data-protection.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) |
| 6 | 6 | 331 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html) |
| 6 | 7 | 332 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools.html) |
| 6 | 8 | 333 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) |
| 6 | 9 | 334 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-prerequisites.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/inspector/latest/user/supported.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/inspector/latest/user/findings-managing-exporting-reports.html) |
| 6 | 10 | 335 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html) |
| 6 | 11 | 336 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html) |
| 6 | 12 | 337 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/getting-started-elastic-load-balancing.html) |
| 6 | 13 | 338 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-email-notifications.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html) |
| 6 | 14 | 339 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html) |
| 6 | 15 | 340 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html) |
| 6 | 16 | 341 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/cur/latest/userguide/cur-query-athena.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/quick/latest/userguide/create-a-data-set-athena.html) |
| 6 | 17 | 342 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) |
| 6 | 18 | 343 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html) |
| 6 | 19 | 344 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-action-review.html) |
| 6 | 20 | 345 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) |
| 6 | 21 | 346 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html) |
| 6 | 22 | 347 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/encryption-by-default.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) |
| 6 | 23 | 348 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem-efs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-cross-account.html); [Documentação oficial da AWS](https://aws.amazon.com/blogs/aws/new-a-shared-file-system-for-your-lambda-functions/) |
| 6 | 24 | 349 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/security-lake/latest/userguide/source-management.html) |
| 6 | 25 | 350 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars-encryption.html) |
| 6 | 26 | 351 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html) |
| 6 | 27 | 352 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) |
| 6 | 28 | 353 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/storagegateway/latest/vgw/StorageGatewayConcepts.html) |
| 6 | 29 | 354 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html) |
| 6 | 30 | 355 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tasks-scheduled-eventbridge-scheduler.html); [Tempo limite da função Lambda e modalidades de execução](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html) |
| 6 | 31 | 356 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/secure-outbound-network-traffic/vpc-region-communication.html) |
| 6 | 32 | 357 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-anywhere.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html) |
| 6 | 33 | 358 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Concepts.General.SSL.Using.html) |
| 6 | 34 | 359 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/solutions/latest/security-automations-for-aws-waf/step-2.-associate-the-web-acl-with-your-web-application.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/getting-started-elastic-load-balancing.html) |
| 6 | 35 | 360 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html) |
| 6 | 36 | 361 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/services-sqs-configure.html) |
| 6 | 37 | 362 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html) |
| 6 | 38 | 363 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin-create-rule.html) |
| 6 | 39 | 364 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-instance-profile.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-restrict-access.html) |
| 6 | 40 | 365 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) |
| 6 | 41 | 366 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.Replication.ReadReplicas.html) |
| 6 | 43 | 368 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html) |
| 6 | 44 | 369 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-operations.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-invoke-lambda.html) |
| 6 | 45 | 370 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) |
| 6 | 46 | 371 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/memorydb/latest/devguide/consistency.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/memorydb/latest/devguide/servicename-feature-overview.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/VersionManagementConsiderations.html) |
| 6 | 47 | 372 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/developerguide/logging-using-cloudtrail.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) |
| 6 | 48 | 373 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html) |
| 6 | 49 | 374 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/provisioned-iops.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/raid-config.html) |
| 6 | 50 | 375 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html) |
| 6 | 51 | 376 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/change-instance-type-of-ebs-backed-instance.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html) |
| 6 | 52 | 377 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html) |
| 6 | 53 | 378 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-create-unused.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-concepts.html) |
| 6 | 54 | 379 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) |
| 6 | 55 | 380 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-srt-proactive-engagement.html) |
| 6 | 56 | 381 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-key-management.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html) |
| 6 | 57 | 382 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/efs/latest/ug/features.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mountpoint.html) |
| 6 | 58 | 383 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/best-practices/custom-networking.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/userguide/cni-subnet-selection.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/eks/latest/best-practices/sgpp.html) |
| 6 | 59 | 384 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ModifyInstance.Settings.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html) |
| 6 | 60 | 385 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnNFSFileShare.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html) |
| 6 | 61 | 386 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-az-console.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html) |
| 6 | 62 | 387 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/lambda/latest/dg/with-secrets-manager.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html) |
| 6 | 63 | 388 | Confirmada | [Documentação oficial da AWS](https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ebs-recommendations.html) |
| 6 | 64 | 389 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.Create.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html) |
| 6 | 65 | 390 | Corrigida | [Documentação oficial da AWS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html); [Documentação oficial da AWS](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html) |

## Links e HTTPS

O nome Estudo Simulado SAA aponta para https://simulado-saa.rafael.bhz.br/. O blog e todas as referências da AWS usam HTTPS. Os recursos locais usam caminhos relativos e acompanham o protocolo da página.

Na conferência do domínio, a página HTTPS respondeu com HTTP 200 e o endereço HTTP respondeu com HTTP 301 redirecionando para HTTPS.

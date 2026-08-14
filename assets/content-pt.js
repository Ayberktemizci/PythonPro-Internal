/* ============================================================================
   Kodland Formação de Tutores Python Pro — CONTEÚDO (Português)
   Este arquivo é o equivalente em português de content-en.js. NÃO altere as
   chaves, a estrutura, as tags HTML, as classes CSS nem o código Python —
   dentro dos blocos de código, traduza APENAS os comentários com #.

   REGRA DE SEGURANÇA: nunca cole neste arquivo um token real de bot do
   Discord, uma chave de API, um cookie de sessão ou uma senha da plataforma.
   Use os marcadores "YOUR_BOT_TOKEN" / "YOUR_API_KEY" exatamente como os
   materiais do curso fazem.
   ============================================================================ */
window.CONTENT = {
code: 'pt',
htmlLang: 'pt-BR',
title: 'Formação de Tutores Python Pro — Kodland',
ui: {
  logoSub: 'Formação Python Pro',
  heroEyebrow: '🐍 Programa de Formação de Tutores',
  heroTitle: 'Prepare-se para ensinar<br><span class="h-pill">Python Pro</span><br>a jovens de 13 a 17 anos',
  heroSub: 'Percorra cada módulo em ordem e passe no teste para concluir sua preparação como tutor. Tire 70% ou mais no teste de um módulo para desbloquear o próximo — não dá para pular etapas, e o Teste de Habilidade Digital só abre quando todos os módulos estiverem concluídos.',
  progLabel: 'módulos concluídos',
  modulesLabel: 'Seus módulos',
  allDone: '🏆 Tudo concluído!',
  completeWord: 'concluídos',
  backModules: '← Módulos',
  exitQuiz: '← Sair do teste',
  backDashboard: '← Painel',
  faqNav: '❓ FAQ',
  changeRegion: '🌐 Idioma',
  moduleWord: 'Módulo',
  ofWord: 'de',
  objectiveWord: 'Objetivo',
  badgePassed: '✓ Aprovado',
  badgeLocked: '🔒 Bloqueado',
  badgeStart: 'Começar →',
  badgeWatched: '✓ Assistido',
  badgeWatch: '▶ Assistir',
  tagCompleted: 'Concluído',
  tagExampleLesson: 'Aula modelo',
  completeModuleWord: 'Conclua o módulo',
  completeAllFirst: 'Conclua todos os módulos primeiro',
  scoreWord: 'Nota',
  questionsWord: 'perguntas',
  takeQuiz: '📝 Fazer o teste do módulo →',
  retakeQuiz: '🔄 Refazer o teste',
  markComplete: 'Marcar como concluído',
  doneCompleted: '✓ Concluído',
  moduleComplete: 'Módulo concluído',
  questionWord: 'Pergunta',
  correctPrefix: '✅ Correto! ',
  notQuitePrefix: '❌ Não exatamente. ',
  seeResults: 'Ver resultados →',
  nextBtn: 'Próxima →',
  modulePassed: 'Módulo aprovado!',
  keepReviewing: 'Continue revisando',
  scoreLine: 'Você acertou {s} de {t}.',
  passMsg: ' Próximo módulo desbloqueado!',
  failMsg: ' Você precisa de 70% para passar. Revise o módulo e tente de novo!',
  reviewModuleWord: '📖 Revisar o módulo',
  startModuleWord: 'Começar o módulo',
  watchModuleWord: '▶ Assistir ao módulo',
  viewCertificate: '🏆 Ver certificado',
  trainingComplete: 'Formação concluída!',
  completeSub: 'Você percorreu todos os módulos — parabéns! Está pronto para o Teste de Habilidade Digital.',
  certLabel: 'Certificado de conclusão',
  certTitle: 'Formação de Tutores Python Pro',
  certLine: 'Kodland · Todos os {n} módulos · Nota média nos testes: {avg}%',
  takeDST: '🎯 Fazer o Teste de Habilidade Digital →',
  backDashboard2: '← Voltar ao painel',
  dstCardStage: 'Etapa final',
  dstCardTitle: 'Teste de Habilidade Digital',
  dstCardDesc: 'A avaliação prática final — só abre depois que todos os módulos estiverem concluídos.',
  dstReady: 'Pronto',
  dstCardTag: 'Avaliação prática',
  devSkipDST: '🔓 Dev: ir direto para o DST →',
  prepWord: 'preparação',
  practicalTitle: 'Antes de ensinar isto',
  practicalNote: 'Isto é uma autodeclaração — ninguém consegue verificar por aqui. Marque com honestidade: o teste do módulo só confirma que você leu, não que consegue fazer.',
  practicalWarn: 'Ainda restam {n} item(ns) práticos não marcados em “Antes de ensinar isto”.\n\nO teste só verifica se você leu o módulo — não verifica se você consegue realmente construir isto. Seguir em frente sem fazer a parte prática é exatamente como uma aula desmorona na frente da turma.\n\nFazer o teste mesmo assim?',
  // rótulos do bloco brief
  briefOverview: 'Visão geral',
  briefWhy: 'Por que importa',
  briefLearn: 'O que os alunos constroem e aplicam',
  briefConfident: 'Domine 100%',
  // marcadores
  imgPhTitle: 'Espaço para imagem',
  videoPhTitle: 'Espaço para vídeo',
  videoPhBody: 'Uma gravação será adicionada aqui.',
  videoFallback: 'Seu navegador não consegue reproduzir este vídeo. Você pode baixá-lo na pasta assets/media/videos.',
  // FAQ
  faqTitle: 'FAQ e solução de problemas para tutores',
  faqSub: 'Respostas rápidas para as situações que você vai enfrentar de verdade em uma aula — os erros que os alunos cometem em todos os módulos, as regras de segurança que nunca podem ser flexibilizadas, o que dizer quando você não sabe a resposta e o que fazer quando um aluno está adiantado ou atrasado em relação ao grupo. Sempre disponível, de qualquer tela.'
},
dst: {
  /* Traduzido do documento original. O formulário de envio foi deixado vazio
     de propósito, como nas outras versões — cada região fornecerá o seu. */
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🎯 Etapa final</div>
      <h1 class="dst-h1">Teste para Candidatos a Tutor de Python Pro</h1>
      <p class="dst-sub">Olá! O principal objetivo deste curso é que os alunos criem projetos incríveis em várias áreas — automação de chatbots, desenvolvimento web e inteligência artificial — usando as diversas bibliotecas do Python. Nesta tarefa, você mostra que tem conhecimento avançado de Python e que consegue ajudar os alunos enquanto eles escrevem esses projetos.</p>
    </div>

    <div class="dst-block">
      <div class="sch">🧩 A tarefa prática</div>
      <div class="card">
        <p>Usando o <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a> e habilidades de banco de dados, construa um <strong>site de quiz</strong> dinâmico e interessante voltado para adolescentes.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">✅ Critérios do projeto</div>
      <div class="card"><ul class="dst-check">
        <li>O site precisa ter um quiz que cubra <strong>todos</strong> os temas sugeridos.</li>
        <li>O quiz precisa ter <strong>no mínimo 5</strong> perguntas.</li>
        <li>É obrigatório usar um <strong>banco de dados relacional</strong>. (Você pode usar o <a href="https://flask-sqlalchemy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Flask-SQLAlchemy</a>.)</li>
        <li>O site precisa ser publicado no <a href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">PythonAnywhere</a>.</li>
        <li>O site precisa ter uma página separada capaz de <strong>detectar ou classificar uma imagem enviada pelo usuário</strong>.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">📚 Temas do quiz</div>
      <div class="card"><ul class="dst-check">
        <li>Automação de chatbots com Python (<a href="https://discordpy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Discord.py</a>)</li>
        <li>Desenvolvimento web com Python (<a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a>)</li>
        <li>Desenvolvimento de inteligência artificial com Python</li>
        <li>Visão computacional (<a href="https://www.tensorflow.org/api_docs/python/tf" target="_blank" rel="noopener noreferrer">TensorFlow</a>, <a href="https://imageai.readthedocs.io/en/latest/detection/index.html" target="_blank" rel="noopener noreferrer">ImageAI</a>)</li>
        <li>Processamento de Linguagem Natural (<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" rel="noopener noreferrer">BeautifulSoup</a>, <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">NLTK</a>)</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">⚠️ Pontos de atenção</div>
      <div class="card"><ul class="dst-check">
        <li>Quando o usuário enviar o quiz, <strong>a nota obtida deve ser exibida</strong>. O usuário pode refazer o quiz, e tanto o <strong>último resultado</strong> quanto a <strong>maior nota</strong> precisam aparecer.</li>
        <li>No <strong>canto superior direito da tela</strong> devem aparecer a maior nota já obtida entre todos os usuários e a maior nota do usuário atual.</li>
        <li>O <strong>rodapé de todas as páginas</strong> do site precisa trazer informações sobre o autor.</li>
        <li>Os resultados da detecção de imagem precisam ser <strong>exibidos na tela</strong> (por exemplo: nome da classe + índice de confiança) e <strong>salvos no banco de dados</strong>. Como modelo, você pode usar um treinado no Teachable Machine ou o Tiny YOLO do ImageAI.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">🖼️ Um site de exemplo</div>
      <p class="dst-note">A implementação de referência mostra uma página de quiz com <em>Seu nome</em>, perguntas numeradas e alternativas de múltipla escolha, com <strong>Melhor nota pessoal</strong> e <strong>Melhor nota geral</strong> no canto superior direito — e uma página de resultado com <em>Sua nota</em>, <em>Melhor nota pessoal</em>, <em>Melhor nota geral</em>, um botão <strong>Tentar de novo</strong> e o crédito do autor no rodapé.</p>
      <div class="dl-row">
        <a class="dl-btn" href="https://github.com/GitKodland/HardSkillsTest" target="_blank" rel="noopener noreferrer">
          <span class="dl-ico">📦</span><span class="dl-tx"><b>O modelo</b><small>github.com/GitKodland/HardSkillsTest</small></span>
        </a>
      </div>
      <p class="dst-note" style="margin-top:12px">Você pode usar este modelo ou criar um novo do zero.</p>
    </div>

    <div class="dst-block">
      <div class="sch">📝 Observação</div>
      <div class="card hi">
        <h4>Esta tarefa avalia suas habilidades de back-end</h4>
        <p>Por isso, não é preciso caprichar demais no design.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">‼️ Importante</div>
      <div class="card">
        <p><strong>Teste o projeto por completo antes de enviá-lo.</strong> Todos os critérios precisam ser atendidos, todos os elementos exigidos precisam estar nas páginas e o projeto precisa funcionar sem erros.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">🚀 Como enviar</div>
      <div class="card"><ol class="dst-steps">
        <li>Suba o projeto finalizado no <strong>GitHub</strong> e deixe o acesso <strong>público</strong>.</li>
        <li>Publique-o no <strong>PythonAnywhere</strong>.</li>
        <li>Faça o teste de habilidade e coloque o link do seu projeto como resposta da <strong>última pergunta</strong> do teste.</li>
      </ol></div>
    </div>

    <div class="dst-block">
      <div class="sch">🔗 Teste de habilidade</div>
      <div class="form-ph">
        <div class="form-ph-ico">📝</div>
        <strong>Link do formulário de envio em breve</strong>
        <p>O formulário de envio ainda não está vinculado aqui. Sua equipe de formação vai adicioná-lo — confira novamente antes de enviar.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="card">
        <p style="text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:18px;color:var(--text);margin:0">Boa sorte! 🍀</p>
      </div>
    </div>

    <hr class="divider">

    <div class="dst-block">
      <div class="sch">📎 Da sua formação — não faz parte do briefing acima</div>
      <div class="card hi">
        <h4>Onde cada requisito foi ensinado</h4>
        <p>Todas as habilidades exigidas nesta tarefa estão em algum módulo que você já concluiu. Se algo parecer frágil, volte a ele em vez de começar do zero:</p>
        <ul>
          <li><strong>Flask, rotas, templates e formulários</strong> → Módulo 7 (curso M3)</li>
          <li><strong>Banco relacional com Flask-SQLAlchemy e notas por usuário</strong> → Módulo 8 (curso M4)</li>
          <li><strong>Publicação no PythonAnywhere, incluindo a etapa do WSGI</strong> → Módulo 8 (curso M4L3)</li>
          <li><strong>Treinar um modelo no Teachable Machine</strong> → Módulo 9 (curso M5L4)</li>
          <li><strong>Rodar esse modelo em código e detecção com ImageAI / Tiny YOLO</strong> → Módulo 10 (curso M6)</li>
          <li><strong>Discord.py, BeautifulSoup e NLTK</strong> — conteúdo do quiz → Módulos 5 e 9</li>
        </ul>
      </div>
      <div class="callout cw"><span class="ci">⚠️</span><span>Antes de tornar o repositório público: seu projeto pode conter um token de bot, uma chave de API ou a <code>secret_key</code> do Flask. Nenhum deles pode ir para um repositório público, e apagá-los depois não resolve, porque o Git guarda o histórico. Verifique antes do push — é a mesma regra que você vai exigir dos seus próprios alunos.</span></div>
    </div>
  </div>`
},
faq: [
  {
    cat: '📖 Glossário — os termos usados no curso',
    items: [
      {q: 'Termos de Python e código', a: '<strong>Interpretador</strong> — o programa que traduz seu Python para código de máquina. <strong>IDE</strong> — o editor que ajuda a escrever código (aqui, o VS Code). <strong>Biblioteca / módulo / pacote</strong> — código de outra pessoa que você importa. <strong>pip</strong> — a ferramenta que instala bibliotecas. <strong>Ambiente virtual</strong> — um conjunto isolado de bibliotecas de um único projeto. <strong>Dependência</strong> — uma biblioteca que seu projeto precisa para rodar. <strong>Framework</strong> — uma biblioteca grande que dá estrutura ao projeto (Flask). <strong>Decorador</strong> — a linha com <code>@</code> que entrega sua função a uma biblioteca. <strong>async / await</strong> — permite que uma função espere sem congelar todo o resto. <strong>Classe</strong> — o molde do qual os objetos são feitos. <strong>Objeto / instância</strong> — uma coisa feita a partir desse molde. <strong>Herança</strong> — uma classe recebendo as capacidades de outra. <strong>Método</strong> — uma função que pertence a uma classe. <strong>Argumento / parâmetro</strong> — os valores que a função recebe. <strong>return</strong> — o valor que ela devolve. <strong>Exceção</strong> — um erro que o Python levanta; <code>try</code>/<code>except</code> o captura. <strong>Refatoração</strong> — melhorar o código sem mudar o que ele faz. <strong>Linter</strong> — ferramenta que aponta problemas de estilo (<code>flake8</code>).'},
      {q: 'Termos de web e Flask', a: '<strong>Front-end</strong> — o que o usuário vê (HTML, CSS, JavaScript). <strong>Back-end</strong> — a lógica por trás (aqui, Python/Flask). <strong>HTML</strong> — conteúdo e estrutura da página. <strong>CSS</strong> — aparência. <strong>Tag</strong> — um elemento HTML como <code>&lt;p&gt;</code>. <strong>URL</strong> — o endereço de uma página. <strong>Rota</strong> — o código que roda para uma URL específica. <strong>Template</strong> — uma página HTML que o Flask preenche com dados. <strong>Jinja</strong> — o motor de templates que faz esse preenchimento, usando <code>{{ }}</code>. <strong>Formulário</strong> — os campos que o usuário envia. <strong>GET / POST</strong> — pedir uma página vs enviar dados para ela. <strong>Sessão</strong> — como o servidor lembra quem está logado. <strong>Widget / iframe</strong> — o app de outra pessoa embutido na sua página. <strong>Deploy</strong> — colocar seu app na internet. <strong>PythonAnywhere</strong> — o serviço de hospedagem usado no curso. <strong>Arquivo WSGI</strong> — o arquivo que o servidor lê para encontrar seu app. <strong>UI / UX</strong> — como parece vs como é usar.'},
      {q: 'Termos de dados e IA', a: '<strong>API</strong> — um serviço do qual você pede dados por código. <strong>JSON</strong> — o formato de texto em que as APIs costumam responder. <strong>Requisição</strong> — pedir algo a um servidor. <strong>Scraping</strong> — extrair informação de uma página. <strong>Parsing</strong> — analisar a estrutura para extrair dados específicos. <strong>Crawling</strong> — percorrer muitas páginas coletando dados. <strong>robots.txt</strong> — arquivo que indica quais partes do site podem ser rastreadas. <strong>DataFrame</strong> — uma tabela no pandas. <strong>CSV</strong> — arquivo de planilha em texto puro. <strong>Dataset</strong> — os dados com que o modelo aprende. <strong>Amostra de treino / teste</strong> — dados usados para ensinar vs para verificar (os de teste precisam ser inéditos). <strong>Modelo</strong> — a coisa treinada que faz previsões. <strong>Rede neural</strong> — o tipo de modelo usado aqui. <strong>Classificação</strong> — rotular uma imagem inteira. <strong>Detecção</strong> — localizar objetos nela. <strong>Segmentação</strong> — decidir quais pixels pertencem a quê. <strong>Inferência</strong> — usar um modelo treinado em uma entrada nova. <strong>Hiperparâmetro</strong> — um ajuste de treino que você escolhe, como as épocas. <strong>Época</strong> — uma passada completa pelos dados de treino. <strong>Prompt</strong> — a instrução dada a um modelo generativo. <strong>PLN</strong> — processamento de linguagem natural. <strong>Tokenização</strong> — dividir o texto em partes. <strong>Lematização</strong> — reduzir uma palavra à sua forma base. <strong>Stop words</strong> — palavras comuns removidas antes da análise. <strong>Pipeline</strong> — uma sequência de etapas de processamento. <strong>Colab</strong> — o ambiente de notebooks do Google no navegador. <strong>Notebook / célula</strong> — o formato do arquivo e seus blocos executáveis.'},
      {q: 'Termos de Git e trabalho em equipe', a: '<strong>Git</strong> — o programa de controle de versão na sua máquina. <strong>GitHub</strong> — o site que hospeda repositórios. <strong>Repositório (repo)</strong> — a pasta de projeto que o Git acompanha. <strong>Commit</strong> — uma alteração salva com uma mensagem. <strong>Push / pull</strong> — enviar alterações / trazer alterações. <strong>Clone</strong> — baixar um repositório. <strong>Branch (ramo)</strong> — uma cópia paralela para uma tarefa específica. <strong>Merge</strong> — juntar um branch de volta. <strong>Conflito</strong> — quando duas alterações mexem nas mesmas linhas. <strong>README</strong> — o arquivo que descreve o projeto. <strong>Código aberto</strong> — código publicado para qualquer um ler. <strong>Token</strong> — chave secreta que autentica seu programa; trate como senha. <strong>Intents</strong> — as permissões que um bot do Discord solicita. <strong>Agile</strong> — a filosofia de desenvolvimento flexível e colaborativo. <strong>Scrum</strong> — uma forma concreta de praticá-la. <strong>Sprint</strong> — período fixo para um conjunto de tarefas. <strong>Backlog</strong> — a lista priorizada de tarefas. <strong>Retrospectiva</strong> — a revisão após um sprint. <strong>Code review</strong> — ler o código de alguém e sugerir melhorias. <strong>Live Share</strong> — a extensão do VS Code para editar em conjunto.'},
      {q: 'Termos da Kodland', a: '<strong>Plataforma</strong> — onde ficam as tarefas, a teoria e as notas. <strong>Backoffice (BO)</strong> — onde você confere os envios e encontra os links do grupo. <strong>TS</strong> — assistente técnico, seu segundo par de mãos. <strong>DST</strong> — Teste de Habilidade Digital, a avaliação prática final. <strong>EduScrum</strong> — a adaptação do Scrum para a sala de aula. <strong>LiveCoding</strong> — construir o código em conjunto na tela. <strong>UMC</strong> — Usar–Modificar–Criar. <strong>Metacognição</strong> — pensar sobre como você aprende. <strong>Creativity Card</strong> — o formulário que acompanha o projeto final do aluno. <strong>Teste somativo</strong> — o teste de revisão dentro de uma aula.'}
    ]
  },
  {
    cat: '🔐 Regras de segurança que nunca podem ser flexibilizadas',
    items: [
      {q: 'Um aluno pergunta: “posso só subir meu token para o GitHub?”', a: 'A resposta é sempre <strong>não</strong>. Um token de bot do Discord é uma senha: quem o tiver controla o bot por completo e pode usá-lo para spam ou ataques. O curso destaca isso em M1L3. No código das aulas escrevemos o marcador <code>bot.run("YOUR_BOT_TOKEN")</code> e colamos o token real só localmente. Diga essa regra em voz alta toda vez que um projeto for publicado.'},
      {q: 'Um aluno já subiu o token (ou colou no chat do grupo). E agora?', a: 'Trate como vazado, porque vazou mesmo. Peça que vá ao Discord Developer Portal → Bot → <strong>Reset Token</strong> e cole o novo apenas localmente. Lembre que <strong>apagar o arquivo não resolve</strong> — o Git guarda o histórico para sempre, que é exatamente o que você ensinou em M1L4. Regenerar é a única solução.'},
      {q: 'É seguro compartilhar a tela com meu token aparecendo?', a: 'Não — e isso pega tutores, não só alunos. Antes de compartilhar a tela ou gravar uma aula, troque seu token pelo marcador ou deixe-o num arquivo separado que você nunca abre na câmera. Vale o mesmo para senhas da plataforma e abas do Backoffice.'},
      {q: 'O projeto “Diário do Programador” guarda senhas em texto puro. Devo comentar isso?', a: '<strong>Sim.</strong> O código de M4L2 grava a <code>password</code> direto na tabela <code>User</code> para que iniciantes vejam o laço de comparação funcionando. Isso é uma simplificação didática, não um padrão. Diga uma frase: “aplicativos reais nunca guardam a senha em si — guardam uma impressão digital embaralhada chamada hash. Hoje pulamos isso para a lógica ficar visível.” Custa dez segundos e evita um hábito genuinamente ruim.'},
      {q: 'O que os alunos nunca devem colocar num projeto publicado?', a: 'Tokens e chaves de API, e-mails e senhas reais deles ou de outras pessoas, endereço residencial ou escola, e fotos de terceiros sem permissão. Repositório público significa público para sempre. Se o projeto precisar de um formulário de login, use dados de teste claramente fictícios.'},
      {q: 'Web scraping é permitido? O que digo aos alunos?', a: 'Ensine os limites de M5L2 como parte da habilidade, não como uma nota de rodapé: verifique o <strong>robots.txt</strong>, respeite os <strong>termos de uso e a política de privacidade</strong> do site, não redistribua conteúdo <strong>protegido por direitos autorais</strong> e não colete <strong>dados pessoais</strong> (LGPD/GDPR). Usamos o site de notícias de prática justamente porque é seguro fazer scraping nele.'},
      {q: 'Um aluno quer gerar imagens de uma pessoa real, ou passar imagens de IA como reais.', a: 'É exatamente o risco em torno do qual M6L2 foi construída. Imagens geradas que imitam fotos reais espalham desinformação, e conteúdo gerado pode ser discriminatório. Mantenha os prompts em animais, objetos e personagens inventados — nunca pessoas reais e identificáveis — e faça da discussão “como identificar uma imagem falsa?” parte da aula, e não um aviso colado no final.'}
    ]
  },
  {
    cat: '🐞 Erros que aparecem em toda turma',
    items: [
      {q: '“ModuleNotFoundError” logo depois de um pip install bem-sucedido.', a: 'Quase sempre um <strong>interpretador trocado</strong>: a biblioteca foi para um Python e o VS Code está rodando outro. Resolva com <code>Shift+Ctrl+P</code> (<code>Cmd+Shift+P</code> no Mac) → <em>Python: Select Interpreter</em> → escolha o ambiente do projeto. Dentro de um projeto com pipenv, o comando de instalação precisa ser <code>pipenv install &lt;biblioteca&gt;</code>, e não <code>pip install</code> puro.'},
      {q: '“pip is not recognised” / sem terminal no VS Code.', a: 'Abra um em <strong>Terminal → New Terminal</strong>. Se o próprio <code>pip</code> não é encontrado, o Python não foi adicionado ao PATH na instalação — reinstalar com a caixa “Add Python to PATH” marcada é mais rápido do que depurar ao vivo. M1L2 cobre isso; não deixe a instalação de um aluno travar a turma inteira.'},
      {q: 'O bot aparece online mas ignora todas as mensagens.', a: 'Duas causas, nesta ordem. (1) Falta <code>intents.message_content = True</code> no código. (2) A chave <strong>Message Content Intent</strong> está desligada no Discord Developer Portal → página Bot. O código e o portal precisam permitir.'},
      {q: 'Comandos como $hello não fazem nada, mesmo o bot respondendo a mensagens comuns.', a: 'Estão misturando as duas classes. <code>Client</code> reage a <em>eventos</em> (<code>@client.event</code>); <code>Bot</code> reage a <em>comandos</em> (<code>@bot.command()</code>). M1L4 é construída sobre essa comparação. As duas não podem ser usadas no mesmo programa, e a mensagem precisa começar com o <code>command_prefix</code> exato.'},
      {q: '“FileNotFoundError” quando o bot de memes tenta enviar uma imagem.', a: 'Problema de caminho, não de código. A pasta de imagens precisa estar dentro da pasta do projeto, o nome e a extensão precisam bater exatamente (inclusive maiúsculas) e <code>os.listdir(\'images\')</code> é relativo a de onde o script é executado. Peça que imprimam o caminho antes de abrir.'},
      {q: '“TypeError: \'&gt;\' not supported between instances of \'str\' and \'int\'”', a: '<code>input()</code> sempre devolve <strong>texto</strong>. É preciso <code>int(input(...))</code>. É o mesmo bug escondido no exercício de code review de M8L3, então quando ele aparecer naturalmente, dê nome a ele — assim eles mesmos o encontram na aula de revisão.'},
      {q: 'A página do Flask não muda, não importa o que editem.', a: 'Verifique três coisas: <code>app.run(debug=True)</code> para o servidor recarregar, um refresh forçado no navegador (Ctrl/Cmd+Shift+R) para vencer o cache e se salvaram o arquivo. Confirme também que estão editando o template que o Flask realmente renderiza.'},
      {q: '“jinja2.exceptions.TemplateNotFound”', a: 'O Flask só procura numa pasta chamada exatamente <code>templates</code> (e <code>static</code> para CSS e imagens), ao lado do arquivo <code>.py</code> principal. Um erro de digitação ou uma pasta aninhada quebra tudo. Peça para mostrarem a árvore de arquivos em vez do erro.'},
      {q: '“sqlite3.OperationalError: no such table”', a: 'O arquivo <code>.db</code> foi criado antes de a classe existir, ou uma coluna foi adicionada depois. Neste curso a solução ensinada em M4L2 é direta: apague o <code>.db</code> antigo e crie outro pelo terminal. Avise antes que isso apaga os registros.'},
      {q: 'O Colab esqueceu o modelo / as imagens / os arquivos.', a: 'Sessões do Colab são temporárias — tudo que foi enviado some quando a sessão reinicia, e todas as células precisam ser executadas em ordem. Para sessões longas, mostre como montar o Google Drive (M6L1 sugere isso para turmas mais fortes). Lembre-os de guardar uma cópia do notebook no próprio Drive.'},
      {q: '“Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”', a: 'Conflito de versão de biblioteca com o modelo exportado do Teachable Machine. Num projeto com pipenv: <code>pipenv uninstall tensorflow</code> e depois <code>pipenv install tensorflow==2.15</code> (compatível com Python 3.11). No Colab o curso fixa <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> e importa <code>tf_keras</code>. Deixe os comandos prontos para colar — não depure versões ao vivo.'},
      {q: 'O pyttsx3 não emite som, ou o speech_recognition dá erro no meio da aula.', a: 'Confira o dispositivo de saída e, principalmente, <strong>silencie seu microfone no Zoom e rode de novo</strong> — M7L3 destaca isso, porque o Zoom segura o microfone. Em alguns sistemas o índice de voz em <code>voices[0].id</code> não existe; peça que tentem <code>voices[1]</code>.'},
      {q: 'O Git se recusa a commitar e menciona uma identidade.', a: 'Rode uma vez por máquina, com os dados do próprio aluno: <code>git config --global user.email "you@example.com"</code> e <code>git config --global user.name "Your Name"</code>. Está nas notas de M2L3.'},
      {q: 'O modelo de um aluno erra tudo com total confiança.', a: 'Esperado, e é um momento de ensino. O classificador só conhece as classes que viu — ele vai forçar qualquer entrada para uma delas (M6L1). Corrija o <strong>dataset</strong>, não o código: mais imagens, mais variedade e uma imagem de teste que o modelo nunca viu.'}
    ]
  },
  {
    cat: '🙋 Momentos difíceis — o que dizer de verdade',
    items: [
      {q: 'Um aluno pergunta algo que eu realmente não sei.', a: 'O padrão é <strong>“Ótima pergunta, não tenho certeza. Vamos descobrir — onde a gente procuraria?”</strong> e então procurar de verdade, com a tela compartilhada. Essa é a aula M1L4 acontecendo ao vivo: ninguém sabe uma biblioteca de cor, e encontrar a resposta <em>é</em> a habilidade profissional. Se estiver no meio de um sprint e sem tempo, adie: “quero responder isso direito — volto no chat do grupo hoje à noite.” E volte mesmo. A única resposta que realmente te prejudica é um palpite dado com confiança, porque os alunos conferem durante a aula.'},
      {q: 'Como digo “não sei” sem perder autoridade?', a: 'Diga de forma curta e parta para a ação — a frase que funciona é “não sei, vamos descobrir”, e não “desculpa, não sou muito bom nisso”. Sua autoridade aqui vem de conduzir uma boa aula e saber onde procurar, não de saber tudo. Pratique a frase em voz alta antes da primeira aula para que saia natural, e não como uma confissão.'},
      {q: 'Um aluno claramente sabe mais do que eu sobre algo.', a: 'Use isso. O curso pede explicitamente que você entregue a tela a alunos fortes para conduzirem uma instalação, explicarem uma solução ou darem uma miniaula. Diga abertamente — “nessa você está na minha frente, vem mostrar pra gente” — e elogie a <em>explicação</em>. Um tutor que faz isso parece confiante, não fraco. O que continua sendo seu é a aula: o ritmo, a estrutura e garantir que todo mundo acompanhe.'},
      {q: 'Meu próprio código quebra enquanto faço LiveCoding na frente de todo mundo.', a: 'Isso é um presente, e o método foi feito para isso — o LiveCoding recomenda explicitamente errar <em>de propósito</em>. Diga “certo, vamos ler o que ele está dizendo” e depure em voz alta. Os alunos aprendem mais vendo você diagnosticar um erro real com calma do que vendo digitação impecável, e isso normaliza o erro como algo comum, não vergonhoso.'},
      {q: 'Estou sem tempo e a etapa não terminou.', a: 'Proteja a estrutura, sacrifique o escopo. Vá para a retrospectiva ou a reflexão mesmo assim e diga claramente o que não deu tempo e quando vocês retomam. Nunca corte a reflexão para terminar uma tarefa — é nela que a aula se consolida, e tarefa inacabada é um resultado normal de sprint.'},
      {q: 'Um aluno diz que o projeto é inútil ou chato.', a: 'Vá para a pergunta do público em vez de defender a tarefa: “quem usaria isso de verdade, e o que faria o seu ser diferente?” Todo projeto do curso tem um enquadramento do mundo real e uma versão aberta, então “resolva o seu problema para as suas pessoas” está sempre disponível. Autonomia reengaja um adolescente muito mais rápido do que justificativa.'},
      {q: 'Um aluno não fez a lição e ficou quieto.', a: 'Os planos são enfáticos: envolva mesmo assim e não seja negativo. Pergunte o que ele <em>acha</em>, não o que terminou. M1L3 até dá uma frase que salva a cara — “o cachorro comeu minha lição” — para que ele passe a vez sem constrangimento e continue na sala.'},
      {q: 'Ninguém responde quando faço uma pergunta para a turma.', a: 'A pergunta quase certamente estava grande demais. Reduza até virar algo respondível em poucas palavras: não “como resolvemos isso?”, mas “de que tipo essa variável precisa ser?”. Os planos de aula modelam perguntas estreitas o tempo todo. Silêncio costuma ser tamanho de pergunta, não falta de vontade.'}
    ]
  },
  {
    cat: '🚀 Quando um aluno está à frente da turma',
    items: [
      {q: 'Um aluno termina a tarefa principal em dez minutos.', a: 'Toda aula deste curso traz <strong>tarefas adicionais</strong> (marcadas com ⭐️ ou “Add.”) exatamente para isso. Use-as antes de inventar qualquer coisa: as tarefas de API em M2L1, os comandos mágicos em M5L1, a extensão de recorte com OpenCV em M6L3. Elas aprofundam o conceito de hoje em vez de correr à frente do grupo.'},
      {q: 'Como mantenho um aluno rápido engajado sem abandonar os outros?', a: 'Dê a ele um papel. O curso sugere repetidamente que um aluno forte <strong>compartilhe a tela e conduza a instalação ou o live coding</strong> (M3L1, M6L3, M7L1). Explicar uma solução consolida o aprendizado, mantém o aluno ocupado de forma significativa e libera você para quem está travado. Elogie a explicação, não a rapidez.'},
      {q: 'Devo deixar um aluno avançado pular para o conteúdo da próxima aula?', a: 'Prefira profundidade a velocidade — pular dessincroniza o grupo e cria lacunas. Aponte para a <strong>documentação da biblioteca</strong>: M1L4 existe para ensinar que ler documentação e adaptar exemplos <em>é</em> a habilidade profissional. “Ache um comando na documentação que ninguém usou e acrescente” é melhor do que “comece a aula seis”.'},
      {q: 'Um aluno diz que o projeto é chato ou fácil demais.', a: 'Dê a versão aberta. Todo projeto do curso tem um enquadramento real — senhas, separação de lixo, dependência de tecnologia, uso de energia, segurança no trânsito, mudança climática — então “faça resolver o seu problema para o seu público” está sempre disponível. Autonomia reengaja quem termina rápido muito melhor do que mais exercícios.'},
      {q: 'Um aluno domina a discussão e responde tudo.', a: 'Use as estruturas que já estão nos planos: o jogo da “bola” em M1L3, em que quem fala escolhe o próximo; o jogo do especialista “todos contra um” em M6L1; e a regra de que o mesmo aluno não responde duas vezes seguidas no jogo da velha de M5L4. Deixe o formato distribuir a fala para você não precisar fazer isso.'}
    ]
  },
  {
    cat: '🐢 Quando um aluno está ficando para trás',
    items: [
      {q: 'Um aluno está travado e ficando frustrado.', a: '<strong>Ache primeiro o único ponto que trava</strong> — normalmente é um erro de digitação, um interpretador não selecionado ou um intent faltando, não uma incompreensão da aula inteira. Leiam a mensagem de erro juntos, corrija aquilo e garanta uma vitória visível. Ter ritmo importa mais do que cobrir tudo.'},
      {q: 'Um aluno não acompanha o ritmo da construção.', a: '<strong>Reduza o escopo.</strong> Uma versão simples e pronta vale mais que uma ambiciosa e inacabada — as notas de M10L3 dizem exatamente isso sobre o projeto final. Faça-o acertar o essencial (o bot responde, a página carrega, o registro salva) e trate os extras como opcionais. Onde existir um projeto inicial (o Basic Bot da escola em M7L1, o ZIP e os branches em M4), entregue-o em vez de deixar a configuração consumir a aula.'},
      {q: 'O ambiente dele está quebrado e a aula vai começar.', a: 'Não deixe uma máquina sequestrar a turma. Comece com quem está pronto, peça ao assistente técnico que ajude os demais e entregue ao aluno travado uma alternativa que funcione — o Pipfile do repositório de solução (M7L1), o dataset compartilhado (M6L2) ou o CSV da aula anterior (M5L3). Conserte o ambiente durante a prática ou depois da aula.'},
      {q: 'Um aluno faltou à aula anterior e está perdido.', a: 'Use a etapa de revisão como ponte em vez de travar o grupo: um resumo de dois minutos só do que a aula de hoje exige, mais um link para o estado do projeto que ele perdeu (o branch, o ZIP, o notebook anterior). Deixe a recuperação como lição leve. A maioria dos módulos também abre com um quiz que serve de retomada.'},
      {q: 'Um aluno repete sempre o mesmo erro.', a: 'Não corrija apenas — <strong>dê nome ao padrão</strong> e entregue a frase de autoverificação: “<code>input()</code> me dá texto, então envolvo em <code>int()</code>”, “o token nunca sai da minha máquina”, “se o pip funcionou mas o import falhou, olhe o interpretador”. Depois deixe que <em>ele</em> encontre da próxima vez. O reflexo de depurar vale mais do que qualquer correção isolada.'},
      {q: 'Um aluno não fez a lição e ficou quieto.', a: 'Os planos são enfáticos: <strong>envolva mesmo assim e não seja negativo.</strong> Pergunte o que ele acha, não o que terminou. M1L3 até dá uma frase que salva a cara (“o cachorro comeu minha lição”) para ele passar a vez sem constrangimento e seguir na sala.'},
      {q: 'Um aluno está desanimado e quer desistir.', a: 'Comece com elogio específico ao esforço — “você achou esse bug sozinho, é exatamente o que programadores fazem” — e reduza o próximo passo até o sucesso ser garantido. As notas de metacognição de M2L1 dizem o mesmo: frustração é <em>informação válida</em> sobre a <em>estratégia</em> escolhida, não prova de que a pessoa não sabe programar. Diga isso em voz alta.'}
    ]
  }
],
modules: [
  {
    id:1, emoji:'🚀', color:'#3776AB',
    title:'Introdução e Visão Geral do Curso',
    desc:'O que é o Python Pro, os projetos que os alunos entregam, os métodos de ensino por trás dele, como é o sucesso e como funciona esta formação.',
    obj:'Entenda o quadro completo antes de ensinar qualquer parte: o que o curso Python Pro se propõe a fazer, seus dez módulos e quarenta aulas, os projetos e a faixa etária, os métodos de ensino em que se apoia, como são um tutor bem-sucedido e um aluno bem-sucedido, e como este programa de formação está estruturado.',
    prep:'~45 minutos. Só leitura — a parte prática começa no Módulo 2.',
    sections:[
      {t:'🐍 O que é este curso', cards:[
        {type:'text', h:'A trilha avançada de Python, construída sobre projetos reais', b:'O Python Pro é o <strong>curso avançado de Python</strong> da Kodland para <strong>jovens de 13 a 17 anos</strong> — o passo seguinte ao Python Basic. Os alunos não ficam sentados ouvindo teoria: desde a primeira aula constroem e publicam programas que funcionam. Ao longo do curso assumem três identidades profissionais, uma de cada vez — <strong>programador de automação</strong>, <strong>desenvolvedor web</strong> e <strong>programador de IA</strong> — para que no final consigam escolher uma direção dentro do desenvolvimento em Python.'},
        {type:'hi', h:'Dez módulos, quarenta aulas, 13 a 17 anos', b:'O curso tem <strong>10 módulos de 4 aulas cada — 40 aulas</strong>, para alunos de <strong>13 a 17 anos</strong>. Uma aula em grupo dura <strong>90 minutos</strong>; a mesma aula existe como plano <strong>individual de 50 minutos</strong>. Os módulos 1–2 constroem bots e o front-end, 3–4 constroem aplicações web com Flask e banco de dados, 5–6 são o bloco de IA, 7 integra IA aos projetos anteriores, 8–9 são prática de engenharia e tecnologia de voz, e 10 é um hackathon que leva ao projeto final.'},
        {type:'text', h:'Ferramentas reais, desde a primeira aula', b:'Os alunos saem do ambiente protegido do navegador quase imediatamente. Trabalham no <strong>VS Code</strong>, instalam bibliotecas com <strong>pip</strong> e <strong>pipenv</strong>, publicam no <strong>GitHub</strong>, registram aplicações no <strong>Discord Developer Portal</strong>, rodam notebooks no <strong>Google Colab</strong>, treinam modelos no <strong>Google Teachable Machine</strong> e fazem deploy no <strong>PythonAnywhere</strong>. É para a sua fluência nessa cadeia de ferramentas que esta formação existe.'},
        {type:'qa', h:'O que eles realmente entregam', items:[
          {k:'Bloco de automação', v:'Um dicionário de gírias, um gerador de senhas fortes e bots do Discord — um bot de memes que lê uma pasta e um bot que ajuda os usuários a reduzir o lixo.'},
          {k:'Bloco web', v:'Uma página sobre dependência de tecnologia, um site de curiosidades em Flask, uma calculadora de eficiência energética para casa inteligente, um gerador de memes, o “Diário do Programador” com banco de dados e login, e um site de portfólio publicado.'},
          {k:'Bloco de IA', v:'Scripts de troca de fundo de imagem, um coletor de notícias, um resumidor com PLN, um classificador de imagens treinado, uma entrada para a competição real-vs-IA e um detector de objetos para segurança no trânsito.'},
          {k:'Integração e ofício', v:'Um bot do Discord que roda o próprio modelo de visão, um tradutor de voz, um bot de previsão do tempo que fala e código limpo refatorado.'},
          {k:'Final', v:'Um projeto de conclusão escolhido por eles, feito em formato de hackathon, testado com checklist e apresentado.'}
        ]}
      ]},
      {t:'🧭 A filosofia de ensino', cards:[
        {type:'good', txt:'A regra que aparece em quase todo plano de aula: <strong>não escreva o código pelos alunos e não entregue as respostas.</strong> Faça perguntas que conduzam, deixe que pensem em voz alta, deixe que se ajudem. Seu trabalho é desbloquear, não resolver.'},
        {type:'text', h:'Todo módulo começa com um problema real', b:'Os projetos nunca são “faça um aplicativo”. São enquadrados como problemas que valem a pena resolver: <strong>ataques hacker</strong> (o gerador de senhas), <strong>poluição e lixo</strong> (o bot ecológico), <strong>dependência de tecnologia</strong> (as páginas web), a <strong>crise energética</strong> (a calculadora), <strong>segurança no trânsito</strong> (o detector), <strong>mudança climática</strong> (o hackathon). Abra com o problema, não com a sintaxe — o código vira um meio para um fim.'},
        {type:'text', h:'Experimentar e depois explicar', b:'Várias aulas entregam código de propósito <em>antes</em> da explicação e pedem que descubram o que ele faz — o bot do Discord em M1L3, o template Jinja em M3L2, os notebooks em M5. Resista a explicar cedo. Cinco minutos de “mude algo e rode de novo” geram perguntas melhores do que qualquer exposição.'},
        {type:'hi', h:'A reflexão é uma etapa, não algo secundário', b:'Toda aula termina com uma etapa de <strong>reflexão de 10 a 15 minutos</strong>: o que conseguimos, o que foi mais difícil, o que você melhoraria, mais a lição de casa. Ela está no cronograma porque é onde o aprendizado se consolida. O Módulo 15 desta formação cobre as oito técnicas de reflexão que o curso oferece, para você poder alterná-las.'},
        {type:'tip', txt:'Motivação faz parte do trabalho. O curso pede que você elogie o esforço de forma específica, compartilhe vídeos motivacionais no chat do grupo depois de aulas marcantes e celebre o fim de cada módulo conectando-o a uma carreira real. Pouquíssima gente termina um curso avançado — diga isso, e diga com sinceridade.'}
      ]},
      {t:'🎯 Como é o sucesso', cards:[
        {type:'twocol', left:{h:'✅ Um tutor bem-sucedido', items:['Tem fluência suficiente nas ferramentas para focar totalmente no aluno','Abre com o problema, não com a sintaxe','Nunca escreve o código do aluno por ele','Respeita os tempos e segue em frente quando uma etapa estoura','Lê os erros em voz alta em vez de corrigir em silêncio','Aplica as regras de token e segredos sem exceção','Ajusta o escopo para quem está à frente ou atrás do grupo']}, right:{h:'🌟 Um aluno bem-sucedido', items:['Entrega projetos que funcionam e os publica no GitHub','Consegue explicar o que o código faz, não apenas executá-lo','Procura respostas na documentação sem precisar ser mandado','Depura um problema simples com autonomia crescente','Pensa em para quem o projeto dele serve','Dá e recebe feedback construtivo sobre código','Apresenta um projeto final concluído do qual se orgulha']}},
        {type:'good', txt:'Sucesso <strong>não</strong> é “cobrimos todo o material”. É um aluno confiante, com um projeto pronto que ele entende e sobre o qual sabe falar. O curso diz isso claramente sobre o projeto final: incentive-os a terminar sem complicar demais e a deixar as melhorias para depois.'}
      ]},
      {t:'🗂️ Como esta formação está estruturada', cards:[
        {type:'text', h:'Os módulos, em ordem', b:'Esta formação tem <strong>16 módulos</strong> em três partes. <strong>Preparação (1–4):</strong> esta visão geral, as construções de Python que o curso usa mas nunca explica, como funciona uma aula e um laboratório prático de configuração. <strong>O curso em si (5–14):</strong> um módulo por módulo do curso, em ordem — o Módulo 5 da formação cobre o Módulo 1 do curso, e assim por diante — para você encontrar qualquer aula na hora. <strong>Condução e avaliação (15–16):</strong> o ofício de ensinar em profundidade e depois uma aula modelo para assistir. Cada módulo abre com um breve <strong>visão geral → por que importa → o que os alunos constroem → o que você precisa dominar 100%</strong> e depois entra em detalhe.'},
        {type:'hi', h:'A regra dos 70% e o teste final', b:'Você precisa percorrer os módulos <strong>em ordem</strong>. Cada um tem um teste curto, e é preciso <strong>70% ou mais para desbloquear o próximo módulo</strong> — não dá para pular. Quando todos os módulos estiverem concluídos, o <strong>Teste de Habilidade Digital (DST)</strong> é liberado. A ordem das perguntas e das alternativas é embaralhada a cada tentativa, então refazer um teste significa saber o conteúdo, e não lembrar posições.'},
        {type:'warn', txt:'Os testes só verificam se você <strong>leu e entendeu</strong> um módulo. Eles não conseguem verificar se você <em>consegue fazer</em> — e neste curso essas duas coisas não são a mesma. É para isso que serve o checklist <strong>✋ Antes de ensinar isto</strong> no topo de cada módulo: uma lista do que você precisa ter construído e executado pessoalmente. Marque com honestidade. Passar no teste do módulo de banco de dados sem nunca ter construído a aplicação do diário é exatamente a situação que desmorona na frente da turma.'},
        {type:'tip', txt:'Duas coisas estão sempre disponíveis no topo de qualquer tela: o <strong>❓ FAQ</strong> (um glossário, os erros que os alunos cometem, as regras de segurança, o que dizer quando você não sabe uma resposta e o que fazer quando um aluno está à frente ou atrás do grupo) e o <strong>botão de tema</strong>. Use o FAQ como referência rápida enquanto se prepara.'},
        {type:'text', h:'Quanto tempo isto leva, mais ou menos', b:'Cada módulo traz uma <strong>estimativa de preparação</strong> no topo, cobrindo a leitura mais a parte prática. No total, a formação leva por volta de <strong>30 a 40 horas</strong> se você fizer os checklists práticos direito, e a parte prática é a maior fatia. Os módulos mais pesados são o laboratório de configuração, Flask e bancos de dados. Depois que começar a dar aula, reserve cerca de <strong>1 a 2 horas de preparação por aula</strong>, mais para as aulas de LiveCoding e as de banco de dados do módulo 4, menos para as conduzidas por discussão.'}
      ]}
    ],
    quiz:[
      {q:'Como o curso Python Pro está estruturado?', opts:['10 módulos de 4 aulas cada — 40 aulas, 90 minutos como aula em grupo','4 módulos de 10 aulas cada, 45 minutos cada','Um único bloco contínuo de aulas, sem módulos','20 aulas de 60 minutos, todas individuais'], c:0, fb:'O Python Pro tem 10 módulos × 4 aulas = 40 aulas. As aulas em grupo duram 90 minutos; cada uma tem uma variante individual de 50 minutos.'},
      {q:'Quais três papéis profissionais o curso faz os alunos assumirem?', opts:['Programador de automação, desenvolvedor web e programador de IA','Game designer, animador e modelador 3D','Digitador, testador e gerente de projeto','Desenvolvedor front-end, engenheiro DevOps e analista de segurança'], c:0, fb:'M1L1 enquadra o curso inteiro em torno de três papéis — programador de automação, desenvolvedor web e programador de IA — para que os alunos possam escolher uma direção no final.'},
      {q:'Um aluno travou no gerador de senhas. O que o curso espera que você faça?', opts:['Fazer perguntas que conduzam e deixar que ele e os colegas raciocinem — não escreva o código por ele','Digitar a solução no editor dele para a turma não atrasar','Mandar o código pronto no chat','Pular a tarefa e ir para a próxima etapa'], c:0, fb:'“Não escreva o código pelos alunos e não dê as respostas” se repete pelos planos de aula. Você desbloqueia; eles resolvem.'},
      {q:'Por que cada projeto é apresentado com um problema real, como ataques hacker ou separação de lixo?', opts:['Para que o código vire um meio de resolver algo com que os alunos se importam, em vez de um exercício','Porque a plataforma exige um tema para toda tarefa','Para preencher tempo antes da etapa prática','Porque são esses problemas que o teste avalia'], c:0, fb:'Todo módulo abre com um problema genuíno — senhas, poluição, dependência de tecnologia, energia, segurança no trânsito, clima — para que construam algo que lhes importa.'},
      {q:'Onde fica a etapa de reflexão numa aula do Python Pro?', opts:['É uma etapa de 10 a 15 minutos prevista no cronograma, ao final de cada aula','Acontece apenas no fim de cada módulo','É opcional e costuma ser pulada','Substitui a etapa prática quando o tempo aperta'], c:0, fb:'Toda aula termina com uma etapa programada de reflexão e lição de casa — é onde o aprendizado se consolida, não um extra opcional.'},
      {q:'Como um candidato a tutor chega ao Teste de Habilidade Digital nesta formação?', opts:['Concluindo todos os módulos em ordem, com 70%+ em cada teste — o DST só abre então','Clicando num botão “pular para o DST” disponível a todos','Passando no primeiro módulo','O DST fica aberto desde o começo'], c:0, fb:'Os módulos são sequenciais e cada um exige 70% para liberar o próximo. O DST só abre quando todos estiverem concluídos.'},
      {q:'O que o curso define como sucesso para um aluno?', opts:['Um aluno confiante, com um projeto pronto que ele entende e consegue apresentar','Um aluno que cumpriu todas as tarefas, independentemente do que funcionou','O aluno que programa mais rápido do grupo','O aluno que memorizou mais comandos de bibliotecas'], c:0, fb:'Um projeto concluído, compreendido e apresentável vale mais que um ambicioso e inacabado — é exatamente o que dizem as notas do projeto final.'}
    ]
  },
  {
    id:2, emoji:'🐍', color:'#4A9BD8',
    title:'O Python que Você Precisa Antes',
    desc:'O Python que aparece o tempo todo no curso mas nunca é explicado por ele: decoradores, async/await, classes e self, métodos dunder, lambda, type hints e *args — mais uma versão em linguagem simples de cada um para os alunos.',
    obj:'Feche a distância entre “sei o básico de Python” e “consigo explicar cada linha do código do curso”. Todas as construções aqui aparecem nas aulas que você vai dar, e o currículo não para para explicar nenhuma delas. Você precisa de duas coisas para cada uma: entendimento sólido o bastante para não estar blefando, e uma frase que dê para dizer a alguém de 14 anos.',
    prep:'~2 a 3 horas. Digite cada exemplo você mesmo, em vez de apenas ler.',
    practical:{
      intro:'Este módulo é o único em que ler realmente não basta — essas construções só assentam depois que você as executa. Antes do teste, passe por todas elas num arquivo de rascunho:',
      items:[
        'Escreveu um decorador do zero e viu ele envolver uma função',
        'Escreveu e executou uma função <code>async def</code> com <code>await asyncio.sleep(1)</code> e entendeu por que o loop importa',
        'Definiu uma classe com <code>__init__</code> e <code>self</code>, criou dois objetos a partir dela e deu valores diferentes a cada um',
        'Fez uma classe herdar de outra e chamou o método da classe mãe',
        'Adicionou um <code>__repr__</code> e viu o que muda quando você imprime o objeto',
        'Reescreveu um pequeno laço <code>for</code> como list comprehension, e uma função de duas linhas como <code>lambda</code>',
        'Executou uma função que recebe <code>*args</code> e imprimiu o que <code>args</code> realmente é'
      ]
    },
    sections:[
      {t:'🧭 Por que este módulo existe', cards:[
        {type:'brief',
          overview:'Sete construções de Python que aparecem constantemente no código do curso e nunca são explicadas por ele: o <strong>decorador</strong> (<code>@bot.command()</code>, <code>@app.route()</code>), <strong>async/await</strong>, <strong>classes</strong> com <code>self</code> e herança, <strong>métodos dunder</strong>, <strong>lambda</strong>, <strong>type hints</strong> e <strong>*args</strong>.',
          why:'Toda aula de Discord usa decoradores e <code>async</code>. Toda aula de Flask usa decoradores. O módulo de banco de dados define classes que herdam. Um aluno vai perguntar “para que serve esse <code>@</code>?” na aula M1L3 — a terceira aula do curso — e “não sei” é uma resposta que você só pode dar uma vez antes de o grupo parar de te perguntar as coisas.',
          learn:'Nada diretamente — isso nunca é ensinado formalmente aos alunos. O currículo adia abertamente: “Toda biblioteca é feita de classes. Vamos falar sobre o que são e por que precisamos delas em outras aulas.” Na prática, <em>você</em> é a explicação.',
          confident:'O que um decorador faz com a função abaixo dele; por que o código de bot precisa de <code>async</code>/<code>await</code>; a que <code>self</code> se refere; o que significam os parênteses em <code>class Card(db.Model)</code>; e uma frase para alunos sobre cada um.'
        },
        {type:'good', txt:'Você não precisa dominar isso em nível profissional. Precisa não estar blefando. O critério é: você consegue explicar de forma simples, consegue responder a uma pergunta de acompanhamento e sabe onde fica o limite honesto do seu conhecimento.'}
      ]},
      {t:'🎀 Decoradores — o símbolo @', cards:[
        {type:'text', h:'O que é de fato', b:'Um <strong>decorador</strong> é uma função que recebe outra função, embrulha um comportamento extra em volta dela e a devolve. A linha com <code>@</code> é um atalho: escrever <code>@meu_decorador</code> acima de <code>def saudar()</code> significa “pegue <code>saudar</code>, passe por <code>meu_decorador</code> e deixe o resultado ser o que <code>saudar</code> significa agora”.'},
        {type:'code', lbl:'um decorador que você mesmo escreve em dez linhas', code:`<span class="ck">def</span> <span class="cf">gritar</span>(func):             <span class="cc"># recebe uma função...</span>
    <span class="ck">def</span> <span class="cf">wrapper</span>():
        resultado = <span class="cf">func</span>()       <span class="cc"># ...roda a original...</span>
        <span class="ck">return</span> resultado.<span class="cf">upper</span>() + <span class="cs">"!!!"</span>  <span class="cc"># ...e acrescenta algo</span>
    <span class="ck">return</span> wrapper            <span class="cc"># ...e devolve a nova versão</span>

<span class="cd">@gritar</span>
<span class="ck">def</span> <span class="cf">saudar</span>():
    <span class="ck">return</span> <span class="cs">"olá"</span>

<span class="cf">print</span>(<span class="cf">saudar</span>())              <span class="cc"># OLÁ!!!</span>

<span class="cc"># @gritar acima de saudar() é exatamente o mesmo que escrever:</span>
<span class="cc">#   saudar = gritar(saudar)</span>`},
        {type:'text', h:'O que isso significa para o código do curso', b:'No curso você nunca escreve um decorador — apenas <em>usa</em> os que as bibliotecas oferecem. <code>@bot.command()</code> significa “discord.py, registre a função abaixo como um comando que os usuários podem digitar”. <code>@app.route("/")</code> significa “Flask, rode a função abaixo quando alguém visitar este endereço”. Nos dois casos, o decorador é como <strong>a sua função é entregue à biblioteca</strong>, para que ela possa chamá-la depois, na hora certa. Você nunca chama essas funções — é exatamente esse o ponto, e é a parte que os alunos acham estranha.'},
        {type:'hi', h:'A frase para dizer ao aluno', b:'“A linha com <code>@</code> é uma etiqueta que você cola numa função para a biblioteca saber para que ela serve. <code>@app.route("/")</code> é uma etiqueta dizendo ‘rode esta aqui quando alguém abrir a página inicial’. Você nunca chama ela — o Flask chama por você quando alguém entra no site.” Para alunos mais velhos ou mais rápidos, dá para acrescentar: é uma função embrulhando outra função.'},
        {type:'warn', txt:'Uma diferença que vale conhecer para você não parecer inconsistente: <code>@bot.event</code> não tem parênteses, <code>@bot.command()</code> tem. Os dois estão corretos como aparecem no código do curso. O com parênteses é uma <em>fábrica</em> de decoradores — pode receber opções como <code>@bot.command(name="pw")</code>, então precisa ser chamado primeiro para produzir o decorador de verdade. Se um aluno perguntar, “aquele ali aceita configurações, por isso precisa dos próprios parênteses” é uma resposta verdadeira e suficiente.'}
      ]},
      {t:'⏳ async e await', cards:[
        {type:'text', h:'O problema que isso resolve', b:'Um bot do Discord passa quase todo o tempo <strong>esperando</strong> — por uma mensagem, pela confirmação de envio do Discord, pela resposta de uma API. A espera comum em Python bloqueia tudo: enquanto uma linha espera, nada mais acontece, então o bot ficaria surdo enquanto responde a uma única mensagem. O <code>async</code> permite que uma função pause num ponto de espera e deixe outras coisas rodarem enquanto isso.'},
        {type:'qa', h:'As três palavras, em termos simples', items:[
          {k:'async def', v:'Declara uma função que <em>pode pausar</em>. Chamá-la não a executa — produz algo que o event loop vai rodar.'},
          {k:'await', v:'“Pause aqui até isto terminar, e deixe outras coisas acontecerem enquanto esperamos.” Só pode ser usado dentro de um <code>async def</code>.'},
          {k:'O event loop', v:'O gerente que mantém todas as funções pausadas andando. No curso, o discord.py o inicia por você dentro de <code>bot.run(...)</code> — por isso nada precisa ser configurado.'}
        ]},
        {type:'code', lbl:'por que todo comando de bot do curso é assim', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):                 <span class="cc"># pode pausar</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Oi!"</span>)             <span class="cc"># pausa até o Discord confirmar</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Ainda estou aqui!"</span>)  <span class="cc"># e então segue</span>

<span class="cc"># Esqueça o await e nada é enviado — você recebe um aviso sobre uma</span>
<span class="cc"># "coroutine was never awaited". É o bug de async nº 1 dos alunos.</span>`},
        {type:'warn', txt:'A falha que os alunos vão de fato produzir: escrever <code>ctx.send("Oi")</code> sem <code>await</code>. Nenhuma mensagem aparece e o console menciona uma coroutine que nunca foi aguardada. Aprenda a reconhecer essa mensagem — ela significa “você criou a tarefa mas nunca deixou ela rodar”. Note também que as funções de fala e de API do curso <em>não</em> são async, então um comando de bot mistura chamadas com await (Discord) e chamadas comuns (<code>speak()</code>, <code>requests.get()</code>).'},
        {type:'hi', h:'A frase para dizer ao aluno', b:'“<code>async</code> quer dizer que esta função pode esperar sem congelar o bot inteiro, e <code>await</code> marca o ponto onde ela espera. Pensa num garçom que anota o pedido de outra mesa enquanto a cozinha prepara o prato — em vez de ficar parado até a comida ficar pronta.”'},
        {type:'good', txt:'Este é o limite honesto do que você precisa. Você <strong>não</strong> precisa entender coroutines, o funcionamento interno do event loop ou <code>asyncio.gather</code>. Se um aluno for além de “ele espera sem congelar”, essa é uma pergunta genuinamente avançada — diga isso, diga que é uma ótima pergunta e pesquisem juntos. Isso modela exatamente o hábito de documentação de M1L4, em vez de te enfraquecer.'}
      ]},
      {t:'🏗️ Classes, self e herança', cards:[
        {type:'text', h:'A parte que o currículo te dá', b:'O curso diz: em Python tudo é objeto, e classes são os <strong>moldes</strong> a partir dos quais os objetos são feitos — mais a excelente observação de que <strong>o Flask é uma classe</strong> que eles vêm usando desde o começo. Esse enquadramento está certo, e é onde a aula M4L1 para. O que vem a seguir é o que você precisa além disso.'},
        {type:'code', lbl:'uma classe, um objeto e o que é self', code:`<span class="ck">class</span> <span class="ct2">Cachorro</span>:
    <span class="ck">def</span> <span class="cf">__init__</span>(self, nome):   <span class="cc"># roda quando você cria um</span>
        self.nome = nome         <span class="cc"># guarda NESTE objeto</span>

    <span class="ck">def</span> <span class="cf">falar</span>(self):
        <span class="ck">return</span> <span class="cs">f"{self.nome} diz au au"</span>

rex = <span class="ct2">Cachorro</span>(<span class="cs">"Rex"</span>)           <span class="cc"># dois objetos...</span>
bela = <span class="ct2">Cachorro</span>(<span class="cs">"Bela"</span>)         <span class="cc"># ...a partir de um molde</span>

<span class="cf">print</span>(rex.<span class="cf">falar</span>())            <span class="cc"># Rex diz au au</span>
<span class="cf">print</span>(bela.<span class="cf">falar</span>())           <span class="cc"># Bela diz au au</span>`},
        {type:'text', h:'self, numa ideia só', b:'<code>self</code> é <strong>“o objeto específico em que este método foi chamado”</strong>. Um molde, muitos objetos, cada um com seus próprios dados — <code>self</code> é como um método sabe com qual deles está trabalhando. É o primeiro parâmetro de todo método e o Python o preenche por você, por isso você escreve <code>rex.falar()</code> com nada nos parênteses, mas <code>def falar(self)</code> na classe.'},
        {type:'text', h:'Herança — os parênteses em class Card(db.Model)', b:'Escrever <code>class Card(db.Model)</code> significa “<strong>Card é um tipo de db.Model e ganha tudo o que db.Model sabe fazer, de graça</strong>”. É por isso que <code>Card</code> de repente tem <code>.query</code>, e por isso o SQLAlchemy sabe transformá-lo numa tabela de banco de dados — nada disso é código que alguém escreveu na aula. O mesmo padrão em toda parte: <code>class User(db.Model)</code> em M4L2 herda as mesmas capacidades.'},
        {type:'hi', h:'As frases para dizer ao aluno', b:'Para classes: “Uma classe é uma forminha de biscoito e os objetos são os biscoitos — uma forma, muitos biscoitos, cada um com sua decoração.” Para <code>self</code>: “<code>self</code> quer dizer <em>este aqui em específico</em> — é como a receita sabe de qual biscoito está falando.” Para herança: “Os parênteses dizem ‘isto é um tipo daquilo, e herda tudo o que aquilo sabe fazer’ — como um poodle é um tipo de cachorro e já sabe latir sem precisar aprender.”'},
        {type:'tip', txt:'Você não vai dar uma aula formal de orientação a objetos — o currículo mantém classes de propósito leves e práticas. Seu trabalho é mais estreito: quando um aluno perguntar por que <code>class Card(db.Model)</code> tem algo dentro dos parênteses, ou o que é <code>self</code>, você tem uma resposta de verdade. São essas duas perguntas que realmente aparecem.'}
      ]},
      {t:'✨ Métodos dunder, lambda, type hints e *args', cards:[
        {type:'qa', h:'Métodos dunder (“duplo underscore”)', items:[
          {k:'O que são', v:'Métodos com dois underscores de cada lado. O Python os chama <em>por você</em> em momentos específicos, em vez de você chamá-los pelo nome.'},
          {k:'__init__', v:'Roda quando um objeto é criado. “Prepare este aqui.”'},
          {k:'__repr__', v:'Decide como o objeto aparece quando é impresso. É só isso que <code>return f\'&lt;Card {self.id}&gt;\'</code> faz em M4L1 — deixa a saída de depuração legível em vez de mostrar um endereço de memória.'},
          {k:'__name__', v:'Não é um método — é uma variável com o nome do arquivo atual, ou a string <code>"__main__"</code> se for o arquivo que você executou. <code>Flask(__name__)</code> é o Flask perguntando “onde estou, para achar sua pasta de templates?”.'},
          {k:'if __name__ == "__main__":', v:'“Só faça isto se este arquivo foi executado diretamente, e não importado por outro.” É por isso que importar <code>bot_logic.py</code> em M1L3 não inicia nada sem querer.'}
        ]},
        {type:'code', lbl:'lambda, type hints e *args — os três menores', code:`<span class="cc"># lambda: uma função minúscula e sem nome, escrita ali mesmo</span>
<span class="ck">lambda</span> x: x[<span class="cn">1</span>]        <span class="cc"># igual a: def f(x): return x[1]</span>

<span class="cc"># Em M5L3 ela diz ao sorted() por QUAL parte ordenar — o item 1, a nota:</span>
<span class="cc">#   sorted(scores.items(), key=lambda x: x[1], reverse=True)</span>

<span class="cc"># type hints: anotações para humanos. O Python NÃO as faz valer.</span>
<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:   <span class="cc"># recebe texto, devolve texto</span>
    <span class="ck">return</span> <span class="cs">"ensolarado"</span>

<span class="cc"># *args: "quantos argumentos posicionais você quiser", reunidos numa tupla</span>
<span class="ck">def</span> <span class="cf">total</span>(*precos):
    <span class="cf">print</span>(precos)          <span class="cc"># (100, 200, 300) — é só uma tupla</span>
    <span class="ck">return</span> <span class="cf">sum</span>(precos)

<span class="cf">total</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>)        <span class="cc"># funciona com qualquer quantidade</span>`},
        {type:'hi', h:'As frases para dizer ao aluno', b:'<strong>lambda:</strong> “Uma mini função descartável que você escreve numa linha quando não vale a pena dar um nome a ela.” <strong>Type hints:</strong> “Anotações dizendo o que entra e o que sai. O Python não confere — são para quem lê o código, incluindo você mesmo no mês que vem.” <strong>*args:</strong> “O asterisco significa ‘quantos você quiser’ — eles chegam como uma lista que dá para somar.” <strong>__repr__:</strong> “Decide o que aparece quando você imprime o objeto, para você ver algo útil em vez de algo sem sentido.”'},
        {type:'good', txt:'Vale um pouco de entusiasmo com type hints quando chegar a aula de código limpo. São o único item desta lista que existe puramente para ser gentil com quem lê o código depois — que é exatamente o argumento que aquela aula inteira defende.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno aponta para @app.route("/") e pergunta o que o @ faz. Qual é sua resposta?', opts:['Entrega a função abaixo ao Flask como uma tarefa etiquetada, para o Flask executá-la quando alguém visitar aquele endereço — você nunca a chama','Marca a função como privada para os alunos não a alterarem','É um comentário que lembra a qual página a função pertence','Importa a rota da biblioteca Flask'], c:0, fb:'Um decorador pega a função abaixo dele e a entrega à biblioteca com comportamento extra. Você nunca chama essas funções — a biblioteca chama quando chega a hora.'},
      {q:'Escrever @gritar acima de def saudar() equivale a qual linha de Python comum?', opts:['saudar = gritar(saudar)','gritar = saudar()','saudar(gritar)','import gritar from saudar'], c:0, fb:'É exatamente para isso que a sintaxe do @ é um atalho: passe a função pelo decorador e deixe o resultado virar o novo significado do nome.'},
      {q:'Por que todo comando de Discord do curso é escrito como async def?', opts:['Porque o bot passa a maior parte do tempo esperando, e async permite que ele pause num ponto de espera em vez de congelar todo o resto','Porque comandos do Discord precisam rodar mais rápido que funções normais','Porque async é obrigatório para qualquer função que receba argumentos','Porque faz o bot atender mais servidores ao mesmo tempo'], c:0, fb:'Um bot está quase sempre esperando — por mensagens, confirmações, APIs. O async permite pausar e deixar outro trabalho continuar enquanto isso.'},
      {q:'Um aluno escreve ctx.send("Oi") sem await e nada aparece. O que aconteceu?', opts:['Ele criou a tarefa mas nunca deixou ela rodar — o console vai mencionar uma coroutine que nunca foi aguardada','A mensagem foi para o canal errado','O token do bot expirou','send() exige a classe Client em vez de Bot'], c:0, fb:'Esse é o bug de async mais comum entre os alunos. Reconhecer a mensagem “coroutine was never awaited” é a forma mais rápida de diagnosticar.'},
      {q:'A que self se refere dentro de um método de classe?', opts:['Ao objeto específico em que o método foi chamado — é como o método sabe de qual objeto usar os dados','À classe em si, e não a qualquer objeto criado a partir dela','Ao arquivo em que a classe está escrita','À classe mãe da qual a classe herda'], c:0, fb:'Um molde pode produzir muitos objetos, cada um com seus dados. self é como o método sabe com qual está trabalhando, e o Python o preenche automaticamente.'},
      {q:'O que significam os parênteses em class Card(db.Model)?', opts:['Card é um tipo de db.Model e herda tudo o que ele sabe fazer — por isso de repente tem .query e pode virar uma tabela','db.Model é passado como o primeiro dado','A classe só funciona enquanto db.Model estiver importado','Renomeia a classe para db.Model internamente'], c:0, fb:'Herança. Nada da máquina de consultas ou de mapeamento de tabela é escrito na aula — Card recebe tudo de db.Model de graça.'},
      {q:'Para que serve __repr__?', opts:['Decide como o objeto aparece quando é impresso, deixando a saída legível em vez de um endereço de memória','Roda quando o objeto é criado e prepara seus dados','Remove o objeto do banco de dados','Devolve a posição do objeto na tabela'], c:0, fb:'__init__ prepara um objeto; __repr__ decide como ele aparece impresso. Em M4L1 é o que faz aparecer <Card 3> em vez de algo sem sentido.'},
      {q:'Em sorted(scores.items(), key=lambda x: x[1], reverse=True), o que a lambda faz?', opts:['Age como uma função minúscula e sem nome dizendo ao sorted() para ordenar pelo item 1 — a nota','Inverte cada par antes de ordenar','Remove as entradas com nota zero','Converte o dicionário em lista'], c:0, fb:'Uma lambda é uma função de uma linha sem nome. Aqui ela diz ao sorted() qual parte de cada par comparar — o elemento 1, a nota da frase.'},
      {q:'O que type hints como (city: str) -> str realmente fazem em tempo de execução?', opts:['Nada — o Python não as faz valer; elas documentam o que entra e o que sai para quem lê o código','Convertem o argumento em texto automaticamente','Levantam um erro se o tipo errado for passado','Fazem a função rodar mais rápido'], c:0, fb:'São documentação para humanos. O Python não verifica, e vale dizer isso claramente para os alunos não confiarem nelas como validação.'},
      {q:'Um aluno perspicaz vai muito além de “async espera sem congelar” e pergunta como o event loop agenda coroutines. Qual é a atitude certa?', opts:['Dizer que é uma pergunta genuinamente avançada, que você precisaria pesquisar, e pesquisar junto com ele','Dar um palpite confiante para o grupo continuar confiando em você','Dizer que está fora do escopo do curso e seguir em frente','Redirecioná-lo para uma tarefa adicional em vez de responder'], c:0, fb:'Este é o limite honesto do que você precisa, e pesquisar junto modela exatamente o hábito de documentação que M1L4 existe para ensinar. Adivinhar é a única opção que realmente custa credibilidade.'}
    ]
  },
  {
    id:3, emoji:'🗺️', color:'#2FA37C',
    title:'Como Funciona uma Aula do Python Pro',
    desc:'A estrutura que toda aula segue, os cinco métodos de ensino que os planos supõem que você conhece pelo nome e a disciplina de tempo que decide se a aula funciona.',
    obj:'Aprenda a mecânica de uma aula antes de aprender dez módulos de conteúdo. Todo plano de aula nomeia um método no topo e supõe que você sabe o que ele significa — este módulo garante isso, para que “esta aula usa o método Usar–Modificar–Criar” seja uma instrução, e não um enigma.',
    prep:'~1 hora.',
    practical:{
      intro:'Antes do teste, oriente-se nos materiais reais:',
      items:[
        'Leu um plano de aula completo do PDF do currículo do início ao fim, incluindo a tabela de etapas',
        'Identificou nesse plano: o briefing, o problema, os objetivos, a teoria, a prática e a reflexão',
        'Encontrou a nota no topo do plano que nomeia o método de ensino usado',
        'Descobriu o que a versão individual de 50 minutos dessa aula teria de cortar'
      ]
    },
    sections:[
      {t:'🧭 Por que isto vem antes do conteúdo', cards:[
        {type:'brief',
          overview:'Cada uma das 40 aulas compartilha uma estrutura — <strong>briefing → checagem da lição → o problema → os objetivos → teoria → prática → reflexão</strong> — e se apoia em cinco métodos nomeados: <strong>EduScrum</strong>, <strong>LiveCoding</strong>, <strong>Usar–Modificar–Criar</strong>, <strong>metacognição</strong> e <strong>gamificação</strong>.',
          why:'Os métodos começam a ser usados na <em>segunda aula do curso</em>. Se você encontrar “esta sessão foi desenhada em torno do sistema Scrum” sem saber o que isso significa, vai conduzir a aula como uma aula comum e a estrutura de que ela depende desaparece silenciosamente.',
          learn:'Nada diretamente — mas os alunos sentem tudo. O ritmo de sprint, os erros propositais, os cinco minutos de experimentação antes da explicação: é isso que faz o curso parecer diferente da escola.',
          confident:'A estrutura de sete partes; o que cada um dos cinco nomes de método significa na prática; e o que fazer quando você atrasa em relação ao cronograma.'
        }
      ]},
      {t:'🕐 A estrutura', cards:[
        {type:'text', h:'As sete partes, em ordem', b:'<strong>1. Briefing e boas-vindas</strong> — confira microfones e câmeras, faça a chamada dentro de uma conversa, e não como lista. <strong>2. Checagem da lição</strong> — todos contribuem, inclusive quem não fez. <strong>3. O problema</strong> — o gancho do mundo real. <strong>4. Os objetivos</strong> — o que a aula de hoje produz. <strong>5. Teoria</strong> — sempre curta. <strong>6. Prática</strong> — o corpo da aula. <strong>7. Reflexão e lição de casa</strong> — 10 a 15 minutos, previstos no cronograma.'},
        {type:'text', h:'Leia a tabela de etapas antes de qualquer coisa', b:'Todo plano de aula no PDF abre com uma tabela que dá a cada etapa uma <strong>duração e um horário de início</strong>, além da variante individual de 50 minutos. Essa tabela é a espinha da aula. Leia-a e saiba onde estão suas duas âncoras inegociáveis: a prática precisa receber seu tempo e a reflexão não pode ser sacrificada.'},
        {type:'warn', txt:'A forma mais comum de uma aula do Python Pro dar errado é uma <strong>etapa inicial estourar o tempo</strong>. Os planos alertam sobre isso repetidamente — não deixe a teoria se arrastar, não ultrapasse o tempo na configuração do ambiente, não prolongue a discussão. Observe isso em você mesmo: a etapa de teoria dá sensação de segurança para ensinar, e é exatamente por isso que ela se expande.'},
        {type:'good', txt:'Use cronômetros visíveis, sempre. Os planos pedem isso em apresentações de um minuto, brainstorms de cinco minutos, caças ao código de dois minutos, rodadas de treino de sete minutos. Um cronômetro na tela faz a disciplina por você, e assim você continua sendo quem ajuda, e não quem apressa.'}
      ]},
      {t:'🎓 Os cinco métodos, pelo nome', cards:[
        {type:'qa', h:'O que cada nome significa quando você o vê no topo de um plano', items:[
          {k:'Scrum / EduScrum', v:'A aula é dividida em <strong>sprints</strong> com limites rígidos de tempo. Cada um abre com uma discussão curta e fecha com duas perguntas fixas: “alcançamos mesmo o resultado?” e “como isso nos aproxima de resolver o problema principal?”. Versões mais completas acrescentam uma retrospectiva. <em>Usado pela primeira vez na aula M1L2 — a segunda aula.</em>'},
          {k:'LiveCoding', v:'Você constrói o código <strong>junto com os alunos</strong>, compartilhando a tela, narrando decisões e errando de propósito para que eles peguem. <em>Usado nas aulas de banco de dados.</em>'},
          {k:'Usar–Modificar–Criar', v:'Os alunos primeiro <strong>usam</strong> código que funciona, depois o <strong>modificam</strong> enquanto você explica, e só então <strong>criam</strong> o deles. Resista a explicar cedo. <em>Usado no primeiro bot do Discord e no modelo Keras.</em>'},
          {k:'Metacognição', v:'Cinco paradas programadas em que os alunos pensam sobre <em>como</em> estão aprendendo, não sobre o quê. <em>Usada na aula M2L1.</em>'},
          {k:'Gamificação', v:'Teoria entregue como jogo em vez de exposição — times de quiz, jogos de especialista, caças ao código, competições de acurácia. Não é enfeite; <em>é</em> o método de entrega.'}
        ]},
        {type:'text', h:'Quando você atrasa', b:'A instrução é explícita e vale internalizar desde já: numa aula de EduScrum, se você está atrasado, <strong>vá para a retrospectiva mesmo assim</strong> e discuta o que deu errado. Uma aula completa com tarefas inacabadas vale mais que uma aula incompleta. A mesma lógica vale em todo lugar: proteja a estrutura, sacrifique o escopo.'},
        {type:'tip', txt:'Quando um plano nomeia um método, ele está dizendo que a aula não funciona de outro jeito. Uma aula de Usar–Modificar–Criar conduzida como exposição, ou uma de EduScrum sem controle de tempo, produz uma etapa estourada e um grupo desengajado. Leia a nota no topo do plano primeiro, sempre.'}
      ]},
      {t:'🧰 As ferramentas e as duas regras de ouro', cards:[
        {type:'qa', h:'Com o que você conduz uma aula', items:[
          {k:'Zoom / Classroom', v:'A aula em si, mais as salas simultâneas, as ferramentas de anotação para LiveCoding e o quadro compartilhado.'},
          {k:'A plataforma', v:'Tarefas, teoria, exemplos de código, chats, notas. Quase toda etapa diz “vá para a tarefa chamada…”.'},
          {k:'Backoffice (BO)', v:'Verificar se as tarefas foram realmente enviadas; o link do chat do grupo.'},
          {k:'Chat do grupo', v:'Suporte entre as aulas, links de repositório, memes.'},
          {k:'Ferramentas de quiz e quadros', v:'Wayground / Quizizz, Tally e Miro ou equivalente para brainstorms.'},
          {k:'Assistente técnico (TS)', v:'Seu segundo par de mãos para instalações e alunos travados. Use-o.'}
        ]},
        {type:'good', txt:'<strong>Regra um: nunca escreva o código de um aluno.</strong> Faça perguntas que conduzam, deixe que pensem em voz alta, deixe que se ajudem. Aparece em quase todo plano e é o comportamento que mais distingue um bom tutor aqui.'},
        {type:'good', txt:'<strong>Regra dois: teoria primeiro, código depois.</strong> Diga o que uma linha faz e então digitem juntos. Iniciantes jogados direto dentro de um script se perdem — o conceito precisa assentar antes da sintaxe.'},
        {type:'tip', txt:'O Módulo 15 cobre o resto do ofício de conduzir aulas — diferenciação, avaliação, gestão de sala, as técnicas de reflexão e o que dizer quando você não sabe uma resposta. Volte a ele depois de dominar os módulos de conteúdo; você vai aproveitar mais.'}
      ]}
    ],
    quiz:[
      {q:'Quais são as sete partes de uma aula do Python Pro, em ordem?', opts:['Briefing → checagem da lição → o problema → os objetivos → teoria → prática → reflexão e lição de casa','Teoria → prática → teste → reflexão → lição → objetivos → briefing','Objetivos → teoria → checagem da lição → prática → briefing → reflexão → teste','Briefing → teoria → teste → prática → lição → objetivos → reflexão'], c:0, fb:'Quase toda aula do curso segue essa estrutura, e a tabela de etapas do plano dá a cada parte uma duração e um horário de início.'},
      {q:'Um plano de aula abre com “esta sessão foi desenhada em torno do sistema Scrum”. O que isso te diz?', opts:['A aula é dividida em sprints com tempo limitado, cada um abrindo com uma discussão e fechando com as duas perguntas fixas','Que você deve mencionar Scrum durante a etapa de teoria','Que os alunos serão avaliados em equipe, e não individualmente','Que a aula não tem etapa prática'], c:0, fb:'É uma instrução sobre estrutura, não sobre tema. Conduza como uma aula comum e o ritmo de sprint de que o plano depende desaparece.'},
      {q:'Numa aula de Usar–Modificar–Criar, ao que você precisa resistir?', opts:['A explicar o código antes de os alunos o terem rodado e experimentado por conta própria','A deixar que alterem o código de exemplo','A dar código que funcione a eles','A permitir que trabalhem em duplas'], c:0, fb:'Usar e modificar vêm primeiro, nessa ordem. Explicar cedo elimina a experimentação que gera as boas perguntas.'},
      {q:'Você está atrasado numa aula de EduScrum com tarefas inacabadas. O que faz?', opts:['Vai para a retrospectiva mesmo assim e discute o que deu errado — proteja a estrutura, sacrifique o escopo','Estende o sprint até as tarefas terminarem','Pula a retrospectiva e passa o resto como lição de casa','Entrega o código da solução para eles se atualizarem'], c:0, fb:'Uma aula completa com tarefas inacabadas vale mais que uma aula incompleta. Os planos dizem isso diretamente.'},
      {q:'Qual etapa tem mais chance de estourar o tempo, e por que isso é perigoso?', opts:['A teoria — dá sensação de segurança para ensinar, então se expande e consome o tempo da prática','A reflexão — os alunos gostam e continuam falando','O briefing — a chamada demora mais que o previsto','A prática — os alunos sempre precisam de mais tempo'], c:0, fb:'Os planos alertam repetidamente para não deixar a teoria se arrastar. Prática e reflexão são as duas coisas que precisam manter seu tempo.'},
      {q:'Quais são as duas regras de ouro que aparecem em quase todo plano de aula?', opts:['Nunca escreva o código de um aluno e explique a teoria antes de escrever o código','Sempre termine todas as tarefas e nunca deixe um aluno ficar para trás','Mantenha a câmera ligada e sempre comece com um quiz','Siga o plano à risca e nunca improvise'], c:0, fb:'“Não escreva o código pelos alunos” e “explique a teoria primeiro, depois escrevam o código juntos” são as duas instruções mais repetidas do currículo.'},
      {q:'Por que este módulo vem antes dos dez módulos de conteúdo?', opts:['Porque os métodos de ensino começam a ser usados na segunda aula do curso, então você precisa do vocabulário antes de encontrá-los','Porque é o módulo mais fácil e dá confiança','Porque a plataforma exige que a metodologia seja concluída primeiro','Porque os módulos de conteúdo não podem ser entendidos sem ele'], c:0, fb:'Os métodos aparecem a partir da aula M1L2. Encontrar “desenhada em torno do sistema Scrum” sem saber o que significa é exatamente o problema que este módulo elimina.'}
    ]
  },
  {
    id:4, emoji:'🧰', color:'#E8663B',
    title:'Seu Laboratório de Configuração e as Ferramentas',
    desc:'Configure tudo o que o curso exige na sua própria máquina — interpretador, VS Code, pipenv, Git, o Discord Developer Portal, Colab, Teachable Machine — mais um tour pela plataforma e pelas apresentações.',
    obj:'Faça, na sua própria máquina, tudo o que você vai pedir aos alunos depois. Você não consegue resolver o problema de uma instalação que nunca fez, nem conduzir a etapa do Developer Portal sem nunca ter clicado nela. Este módulo é inteiramente prático: não há nada aqui para aprender lendo.',
    prep:'~3 a 4 horas, divididas em algumas sessões. Faça na máquina em que você vai dar aula.',
    practical:{
      intro:'Este módulo É o checklist. Não o marque como concluído até que cada item seja verdade de fato — tudo o que vem depois pressupõe isso:',
      items:[
        'Instalou o interpretador Python e confirmou que <code>python --version</code> funciona num terminal novo',
        'Instalou o VS Code e a extensão Python, e usou <em>Python: Select Interpreter</em> ao menos uma vez',
        'Criou uma pasta de projeto e um arquivo <code>.py</code>, e o executou pelo terminal do VS Code',
        'Instalou uma biblioteca com <code>pip install</code>, depois criou um ambiente <strong>pipenv</strong> e instalou uma dentro dele',
        'Provocou de propósito um <code>ModuleNotFoundError</code> instalando fora do ambiente — e corrigiu',
        'Instalou o Git, rodou <code>git config --global user.name</code> e <code>user.email</code>, e publicou um repositório <strong>de dentro do VS Code</strong>',
        'Criou e mesclou um branch, e viu a saída do fast-forward merge',
        'Registrou uma aplicação e um bot no Discord, ativou o <strong>Message Content Intent</strong>, convidou o bot para o seu servidor e o fez responder',
        'Criou um notebook no Colab, rodou uma célula de código e uma de markdown, subiu um arquivo e viu o reinício da sessão apagá-lo',
        'Treinou um classificador no Teachable Machine, exportou o modelo e o descompactou no Colab',
        'Abriu a plataforma como tutor E visualizou uma aula do jeito que o aluno vê',
        'Abriu ao menos três apresentações de aula em modo de exibição'
      ]
    },
    sections:[
      {t:'🧭 Por que este módulo é só prática', cards:[
        {type:'brief',
          overview:'Um laboratório prático cobrindo toda a cadeia de ferramentas: <strong>interpretador e VS Code</strong>, <strong>pip e pipenv</strong>, <strong>Git e GitHub</strong>, o <strong>Discord Developer Portal</strong>, o <strong>Google Colab</strong>, o <strong>Teachable Machine</strong> e a <strong>plataforma com as apresentações</strong>.',
          why:'A aula M1L2 do curso faz você instalar um interpretador e uma IDE para uma turma inteira de jovens de 13 a 17 anos, em sistemas operacionais diferentes, em quinze minutos. Cada módulo seguinte acrescenta uma ferramenta. A didática disso está em outro lugar; o que nenhuma quantidade de leitura dá é ter feito isso você mesmo uma vez, com calma, antes de importar.',
          learn:'Os alunos também fazem tudo isto — este laboratório é de propósito a jornada do aluno, feita primeiro e no seu próprio ritmo.',
          confident:'Cada item do checklist acima, feito na sua máquina, com os modos de falha vistos ao menos uma vez.'
        },
        {type:'good', txt:'A melhor coisa que você pode fazer neste laboratório é <strong>anotar tudo o que der errado com você</strong>. Seus próprios tropeços são a previsão mais precisa possível do que os alunos vão enfrentar, e as anotações viram seu complemento pessoal ao FAQ.'}
      ]},
      {t:'💻 Interpretador, VS Code e a armadilha do interpretador', cards:[
        {type:'text', h:'Faça nesta ordem', b:'Instale o <strong>interpretador Python</strong> (no Windows, marque <em>Add Python to PATH</em> — pular isso é a causa número um de “pip is not recognised”). Instale o <strong>VS Code</strong>. Instale a <strong>extensão Python</strong> pelo painel de extensões. Depois use <code>Shift+Ctrl+P</code> / <code>Cmd+Shift+P</code> → <em>Python: Select Interpreter</em>. Crie uma pasta, crie um arquivo <code>.py</code>, escreva <code>print("Hello, world!")</code> e execute.'},
        {type:'warn', txt:'Quebre de propósito uma vez, agora, no particular. Instale uma biblioteca com o interpretador errado selecionado e veja o <code>ModuleNotFoundError</code> aparecer mesmo com o pip tendo claramente funcionado. Esse erro vai surgir numa aula de verdade, e tê-lo provocado de propósito é a diferença entre diagnosticar em dez segundos e perder vinte minutos.'},
        {type:'text', h:'Windows e Mac diferem, e metade da sua turma usa cada um', b:'Mantenha os dois conjuntos na cabeça: o atalho da paleta (<code>Shift+Ctrl+P</code> vs <code>Cmd+Shift+P</code>), <code>python</code> vs <code>python3</code> e como o terminal é aberto. Quando um comando diferir, diga os dois em voz alta em vez de supor — “Ctrl+Shift+P, ou Cmd+Shift+P no Mac” custa dois segundos e salva um aluno confuso.'},
        {type:'image', src:'assets/media/images/setup-interpreter.jpg', alt:'VS Code com a paleta Select Interpreter aberta, listando vários ambientes virtuais, com o correspondente ao projeto aberto destacado.', cap:'Selecionar o interpretador — a solução para a maioria dos problemas de “instalou mas não importa”. Repare em quantos ambientes aparecem: o certo é o que tem o nome do projeto aberto (aqui TUR_Calculator-main, correspondendo à pasta TUR_CALCULATOR-MAIN no Explorer). Escolher qualquer outro é exatamente como o ModuleNotFoundError acontece.'},
        {type:'tip', txt:'Já que você está aqui, escreva a <strong>folha de configuração para os alunos</strong> que você vai colar no chat do grupo antes da primeira aula: links de download, a caixinha do PATH e como é “pronto”. O currículo passa os instaladores como lição de casa justamente para não perder tempo de aula — uma folha clara é o que faz essa lição ser realmente feita.'}
      ]},
      {t:'📦 pip, pipenv e ambientes virtuais', cards:[
        {type:'text', h:'O que fazer de fato', b:'Instale uma biblioteca globalmente com <code>pip install requests</code>. Depois crie um projeto com ambiente <strong>pipenv</strong> e instale dentro dele com <code>pipenv install requests</code>. Note a diferença: para onde os arquivos vão e o que acontece quando você seleciona o interpretador errado em seguida. A aula M3L1 faz os alunos passarem por isso com o Flask, e a M7L1 repete com bibliotecas grandes de IA.'},
        {type:'warn', txt:'A armadilha que pega alunos e tutores igualmente: dentro de um projeto pipenv é preciso usar <code>pipenv install &lt;biblioteca&gt;</code>. O <code>pip install</code> puro coloca a biblioteca num lugar que o projeto não enxerga, e o <code>ModuleNotFoundError</code> resultante é idêntico a uma instalação quebrada. Se você já fez isso uma vez, reconhece na hora.'},
        {type:'text', h:'Pratique a fixação de versão da IA agora, não na aula', b:'O módulo M7 do curso é o mais frágil. Antecipe-se: crie um ambiente, instale o TensorFlow e deixe os comandos de correção à mão — <code>pipenv uninstall tensorflow</code> e depois <code>pipenv install tensorflow==2.15</code>. Saiba que o equivalente no Colab é <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> com <code>import tf_keras</code>. São comandos prontos para colar, não algo para raciocinar ao vivo.'},
        {type:'tip', txt:'Uma instalação grande pode demorar muito num notebook escolar. Tenha uma alternativa pronta — o Pipfile do repositório de solução — e saiba que usá-lo é a decisão certa, não um comprometimento. A aula é sobre IA, não sobre esperar um download.'}
      ]},
      {t:'🐙 Git, GitHub e branches', cards:[
        {type:'text', h:'A sequência completa para fazer você mesmo', b:'Crie a conta no GitHub. Crie um repositório público vazio e suba um arquivo <strong>pelo site</strong> — o jeito desajeitado que os alunos encontram primeiro em M1L2. Depois instale o <strong>aplicativo git</strong>, escolhendo o VS Code como editor durante a instalação. Rode <code>git config --global user.name</code> e <code>user.email</code>. Faça login no GitHub de dentro do VS Code — <em>uma vez</em> — e publique um repositório <strong>pelo editor</strong>, do jeito que M2L3 ensina. Por fim, faça um commit de alteração e olhe o histórico do arquivo.'},
        {type:'text', h:'Depois branches, porque M8L2 exige um print de cada aluno', b:'Crie um branch, faça uma alteração nele, volte e mescle. Veja a saída do fast-forward. Você vai pedir exatamente isso a cada aluno, então tê-lo feito mais de uma vez importa — mesclar é o tipo de coisa que parece tranquila até você fazer na frente das pessoas.'},
        {type:'good', txt:'Já que está aqui, pratique dizer o que vai repetir o curso inteiro: tudo o que vai para o Git <strong>fica</strong> lá. Apague um arquivo, faça o commit e depois encontre-o no histórico. Ver isso você mesmo é o que te torna convincente quando explicar por que um token vazado precisa ser regenerado, e não apagado.'}
      ]},
      {t:'🤖 O Discord Developer Portal', cards:[
        {type:'text', h:'Clique por tudo uma vez', b:'Crie seu próprio servidor no Discord. Vá ao Developer Portal, crie uma <strong>aplicação</strong>, adicione um <strong>bot</strong> e — a etapa que silenciosamente quebra tudo — ative o <strong>Message Content Intent</strong> na página Bot. Copie o token. Convide o bot para o seu servidor com as permissões certas. Depois rode o exemplo da classe Client do curso com o seu token colado apenas localmente e faça o bot responder. Em seguida reescreva o mesmo bot usando a classe <code>Bot</code>.'},
        {type:'warn', txt:'Duas coisas para gravar antes da aula. Primeira: o intent precisa estar ativo <strong>tanto</strong> no código (<code>intents.message_content = True</code>) <strong>quanto</strong> no portal — só um dos dois deixa você com um bot que conecta e ignora tudo. Segunda: o layout do portal muda. Clique por ele de novo pouco antes de dar M1L3, em vez de confiar na sua memória de meses atrás.'},
        {type:'image', src:'assets/media/images/setup-discord-intents.jpg', alt:'Página Bot do Discord Developer Portal mostrando a seção Privileged Gateway Intents com Presence, Server Members e Message Content, todos desligados.', cap:'A página Bot (menu lateral → <strong>Bot</strong>). Role até <strong>Privileged Gateway Intents</strong> e ative o <strong>Message Content Intent</strong> — a terceira chave. Todos os três vêm DESLIGADOS por padrão, exatamente como aparece aqui, e é por isso que um bot recém-criado conecta e ignora todas as mensagens. Portal capturado com a interface em turco; os nomes dos intents ficam em inglês em qualquer idioma.'},
        {type:'warn', txt:'Leia o print com atenção: os três intents estão <strong>desligados</strong>. Esse é o estado padrão, e o <strong>Message Content Intent</strong> é o que você precisa ativar — a chave de baixo, parcialmente cortada nesta captura. Ativá-lo no portal é só metade do trabalho: <code>intents.message_content = True</code> também precisa estar no código. Se faltar qualquer um dos dois, o bot aparece online e não ouve nada.'},
        {type:'good', txt:'Pratique a disciplina do token em você mesmo agora. Coloque o token no código localmente e, antes de mostrar qualquer coisa a alguém, troque-o por <code>YOUR_BOT_TOKEN</code>. Crie o hábito enquanto o risco é só seu — e confira sua própria tela antes de compartilhá-la.'}
      ]},
      {t:'🔬 Colab e Teachable Machine', cards:[
        {type:'text', h:'Colab', b:'Crie um notebook no seu Drive. Rode duas ou três <strong>células de código</strong> e uma de <strong>markdown</strong>. Suba uma imagem para a sessão. Depois reinicie a sessão de propósito e veja o arquivo desaparecer — porque você vai explicar isso a uma turma confusa. Aprenda que <code>!</code> executa um comando do sistema operacional e que <strong>toda célula precisa ser executada, em ordem</strong>. Por fim, pratique montar o Google Drive, que é a solução para projetos mais longos.'},
        {type:'text', h:'Teachable Machine, do início ao fim', b:'Treine um classificador de imagens pequeno com duas classes. Teste com uma imagem que ele nunca viu. Salve o projeto. Depois <strong>exporte o modelo</strong>, veja o que sai do zip (o modelo <code>.h5</code> e o <code>labels.txt</code>), suba para o Colab, descompacte com <code>!unzip</code> e carregue com <code>tf_keras</code>. Essa cadeia inteira são os módulos M5L4 → M6L1 → M7L2 do curso, e é onde os erros de versão aparecem.'},
        {type:'image', src:'assets/media/images/setup-gtm.jpg', alt:'Google Teachable Machine com duas classes nomeadas de imagens de pássaros, um modelo treinado e o botão Export Model destacado.', cap:'Teachable Machine, montado para o próprio projeto de pássaros do curso — duas classes chamadas <em>Güvercin</em> (pombo) e <em>Serçe</em> (pardal), com 6 e 7 imagens de amostra. Renomeie cada classe clicando no ícone de lápis; adicione imagens com <strong>Upload</strong>. Quando aparecer <strong>Model Trained</strong>, o <strong>Export Model</strong> (canto superior direito) produz o arquivo que você carrega na aula M6L1. O <strong>Advanced</strong>, abaixo de Training, é onde ficam as épocas e a taxa de aprendizado.'},
        {type:'tip', txt:'Repare nas quantidades de amostras do print — 6 e 7 imagens por classe. É de propósito um dataset <em>pequeno</em>, e é mais ou menos o que os alunos vão produzir na aula. Treine um desse tamanho você mesmo e teste com um pássaro inédito: ver um dataset magro ter desempenho ruim é a forma mais rápida de entender por que “adicione mais dados, e mais variados” é a resposta para quase toda reclamação de acurácia.'},
        {type:'tip', txt:'Treine também um modelo propositalmente ruim — duas classes com quatro imagens borradas cada — e veja-o errar com total confiança. Isso te dá uma demonstração ao vivo da ideia mais importante do bloco de IA: o modelo só conhece o que lhe foi mostrado, e corrigi-lo significa corrigir o dataset, não o código.'}
      ]},
      {t:'🖥️ A plataforma e as apresentações', cards:[
        {type:'text', h:'Veja pelos dois lados', b:'Como quase toda etapa de toda aula diz “vá para a tarefa chamada…”, é na plataforma que o curso realmente vive. Consiga acesso e observe: como uma <strong>página de tarefa</strong> aparece para o aluno, onde ficam a <strong>teoria e os exemplos de código</strong> que os planos citam, o <strong>chat</strong> anexado a cada tarefa, o que o botão <strong>Submit</strong> faz e como você <strong>lança notas</strong>. Depois abra o <strong>Backoffice</strong> e encontre onde os envios são verificados e onde fica o link do chat do grupo.'},
        {type:'warn', txt:'Os planos citam o tempo todo “Slide 4”, “Slide 6 (este slide é animado)”. Se você não abriu as apresentações, não vai saber se um slide já cobre um conceito ou se é você que precisa explicá-lo — e vai acabar duplicando ou pulando. Abra as apresentações da próxima aula sempre que se preparar, e lembre de apresentar em <strong>modo de exibição</strong>, como os planos especificam.'},
        {type:'image', src:'assets/media/images/setup-platform.jpg', alt:'Página do curso Python Pro na plataforma Kodland, mostrando a barra de título do curso, as abas de tarefas em aula e lição de casa, e os cartões dos módulos.', cap:'A página do curso na plataforma. No menu lateral: <em>Kurslarım</em> = Meus cursos. As abas são <em>Ders İçi Görevler</em> = tarefas em aula, <em>Ödevler</em> = lição de casa (com a contagem de itens esperando por você) e <em>Lider Tablosu</em> = ranking. Abaixo ficam os cartões dos módulos — <em>Modül 1, 2, 3…</em> — e cada um abre a lista de aulas para onde apontam todas as instruções “vá para a tarefa chamada…”.'},
        {type:'good', txt:'Leia a barra de título do curso nesse print, porque é o resumo mais claro do que você vai ensinar: <strong>[1619] Python Pro [13-17] [90 min] [40 L] [Turkey]</strong> — código do curso 1619, idade <strong>13 a 17</strong>, aulas de noventa minutos, quarenta delas. O selo em <em>Ödevler</em> são as lições esperando correção; é esse número que cresce silenciosamente se você deixar a correção acumular.'},
        {type:'text', h:'Os materiais que cada aula te dá', b:'Todo plano tem uma seção <strong>Materiais</strong> listando o que existe para aquela aula — a apresentação, quizzes, vídeos, links de documentação, repositórios iniciais, ZIPs e ferramentas de avaliação. Leia antes de preparar qualquer coisa do zero. Várias coisas que você poderia achar que precisa construir já estão prontas, incluindo o <code>diary(complete).zip</code> do módulo de banco de dados e o repositório de solução das aulas do bot com IA.'},
        {type:'good', txt:'Assim que tiver acesso, faça um ensaio: escolha uma aula, abra o plano, a apresentação e as tarefas da plataforma lado a lado e percorra tudo como se estivesse ensinando. Esse único ensaio vai te dizer mais sobre o seu preparo do que qualquer teste desta formação.'}
      ]}
    ],
    quiz:[
      {q:'No Windows, o que causa “pip is not recognised” e qual é a correção mais rápida?', opts:['O Python foi instalado sem marcar “Add Python to PATH” — reinstalar com a caixa marcada é mais rápido que depurar ao vivo','Falta a extensão Python no VS Code — instale-a','O pip precisa ser instalado à parte, com outro instalador','O terminal foi aberto antes de o Python terminar de instalar — reabra'], c:0, fb:'É um problema de PATH vindo do instalador. Numa aula ao vivo, reinstalar com a caixa marcada é melhor que investigar enquanto oito alunos esperam.'},
      {q:'Você está dentro de um projeto pipenv. Um aluno roda pip install flask e depois recebe ModuleNotFoundError. Por quê?', opts:['Dentro de um ambiente pipenv é preciso usar pipenv install — o pip puro colocou a biblioteca onde o projeto não enxerga','O Flask não pode ser instalado com pip','Eles precisavam reiniciar o VS Code para a instalação valer','Faltava um requirements.txt no projeto'], c:0, fb:'Essa armadilha pega tutores tanto quanto alunos, e o erro parece idêntico a uma instalação quebrada. Tê-la provocado você mesmo transforma isso num diagnóstico de dez segundos.'},
      {q:'Um bot conecta e aparece online, mas ignora todas as mensagens. Quais duas coisas precisam ser verdade ao mesmo tempo?', opts:['intents.message_content = True no código E o Message Content Intent ativado na página Bot do Developer Portal','O bot precisa ter permissões de administrador E ser o dono do servidor','O token precisa ser regenerado E o bot reconvidado','A classe Bot precisa ser usada E o prefixo definido como $'], c:0, fb:'Ler o conteúdo das mensagens é um privilégio que precisa ser concedido nos dois lugares. Só um deles deixa um bot que conecta e não ouve nada.'},
      {q:'Por que este módulo manda reiniciar uma sessão do Colab de propósito antes de você dar aula com ele?', opts:['Para você já ter visto arquivos enviados desaparecerem e conseguir explicar com calma quando acontecer com a turma inteira','Para limpar a memória antes de treinar um modelo','Porque o Colab exige um reinício após o primeiro upload','Para conferir se seu Google Drive tem espaço'], c:0, fb:'Sessões do Colab são temporárias e isso confunde todas as turmas. Ter visto acontecer faz você explicar em vez de improvisar.'},
      {q:'O que você deve fazer com as anotações sobre o que deu errado durante este laboratório?', opts:['Guardar — seus próprios tropeços são a melhor previsão do que os alunos vão enfrentar, e elas ampliam o FAQ','Descartar assim que tudo funcionar','Enviar à equipe da plataforma como relatórios de bug','Usá-las para decidir quais aulas pular'], c:0, fb:'Você está fazendo a jornada do aluno primeiro. Onde você tropeçou é onde eles vão tropeçar, e suas anotações viram um complemento pessoal ao FAQ.'},
      {q:'Por que abrir as apresentações ao preparar cada aula?', opts:['Porque os planos citam slides específicos, e sem vê-los você acaba duplicando o que um slide cobre ou pulando o que ele não cobre','Porque os slides contêm as respostas do teste','Porque os alunos não veem os slides a menos que você os abra','Porque as apresentações listam os prazos das lições'], c:0, fb:'Os planos dizem coisas como “Slide 6 (este slide é animado)”. Não saber o que está nele significa adivinhar o que ainda precisa ser explicado.'},
      {q:'Onde você deve olhar antes de construir qualquer material próprio para uma aula?', opts:['Na seção Materiais daquele plano de aula — apresentações, quizzes, vídeos, repositórios iniciais, ZIPs e ferramentas de avaliação já costumam estar prontos','No FAQ desta formação','Na tela de notas da plataforma','Na lição de casa da aula anterior'], c:0, fb:'Várias coisas que você poderia achar que precisa construir já existem, incluindo o ZIP completo do diário e o repositório de solução do bot com IA.'},
      {q:'Qual é o melhor ensaio para sua primeira aula, uma vez que você tenha acesso à plataforma?', opts:['Escolher uma aula e percorrer o plano, a apresentação e as tarefas da plataforma lado a lado, como se estivesse ensinando','Reler o módulo de metodologia desta formação','Memorizar os tempos de etapa das quarenta aulas','Construir todos os projetos do curso primeiro'], c:0, fb:'Um ensaio com os materiais reais abertos juntos diz mais sobre o seu preparo do que qualquer teste daqui.'}
    ]
  },
  {
    id:5, emoji:'🛠️', color:'#F5B93B',
    title:'M1 — VS Code, Git e Bots do Discord',
    desc:'Módulo 1 do curso: revisão de Python, GitHub, o interpretador e o VS Code, pip e Discord.py, funções e as classes Client e Bot.',
    obj:'Ensine as quatro aulas que transformam um egresso do Python Basic em alguém que trabalha como desenvolvedor: revisar sintaxe, registrar e usar o GitHub, instalar uma IDE e um interpretador de verdade, instalar bibliotecas com pip, construir um bot do Discord, extrair a lógica para funções e ler a documentação da biblioteca para estendê-la.',
    prep:'~4 a 5 horas. A maior parte é construir o bot; não pule isso.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 1 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Escreveu o aplicativo de dicionário de gírias com um dicionário de verdade e busca com <code>.keys()</code>',
        'Escreveu o gerador de senhas com <code>random.choice</code> dentro de um laço',
        'Extraiu esse gerador para <code>bot_logic.py</code> como função e o importou em <code>main.py</code>',
        'Registrou um bot, ativou o Message Content Intent e fez um bot da classe <strong>Client</strong> responder no seu próprio servidor',
        'Reescreveu o mesmo bot usando a classe <strong>Bot</strong>, com <code>@bot.command()</code> e um prefixo',
        'Subiu um projeto ao GitHub, alterou, subiu de novo e viu o histórico do arquivo',
        'Rodou de propósito um bot com o token removido, para saber como essa falha aparece'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> revisão + GitHub + o app de dicionário de gírias; <strong>L2</strong> o interpretador e o VS Code + um gerador de senhas; <strong>L3</strong> pip, o Discord Developer Portal, o primeiro bot e funções; <strong>L4</strong> documentação de biblioteca, a classe <code>Bot</code>, histórico do repositório e teste entre colegas.',
          why:'Este módulo tira os alunos da plataforma e os coloca num fluxo de trabalho profissional. Se o GitHub, o interpretador ou o token nunca funcionam direito, tudo o que vem depois no curso trava.',
          learn:'Os alunos revisam <code>input</code>/<code>print</code>, listas, laços, dicionários e <code>random</code>; criam contas e repositórios no GitHub; instalam e configuram o VS Code; instalam <code>discord.py</code> com pip; registram um bot e usam um token com segurança; e empacotam a própria lógica numa função importada.',
          confident:'A distinção entre interpretador e IDE; selecionar o interpretador certo no VS Code; <code>pip install</code>; as três coisas que um bot do Discord precisa (servidor, bot registrado, token); <code>intents.message_content</code>; e a diferença entre <code>Client</code> e <code>Bot</code>.'
        }
      ]},
      {t:'📚 L1 — Revisão, GitHub e o dicionário de gírias', cards:[
        {type:'text', h:'O que acontece na aula', b:'Apresentação (um jogo de nome + adjetivo com a mesma letra), regras do grupo criadas <em>pelos próprios alunos</em>, um quiz de revisão sincronizado e então a tarefa principal: um programa que imprime um fato aleatório sobre você a partir de uma lista. Depois GitHub — teoria, cadastro e criação do primeiro repositório público vazio. Em seguida o projeto de verdade: um app de dicionário que explica gírias para parentes mais velhos. Por fim, sobem o código e exploram os repositórios uns dos outros.'},
        {type:'text', h:'O Python que você está revisando', b:'De propósito estreito: <code>input</code>/<code>print</code>, <strong>listas</strong>, <strong>laços</strong>, a biblioteca <strong>random</strong> e — para o projeto principal — <strong>dicionários</strong>. Relembre que uma entrada tem uma <strong>chave e um valor</strong>, e que <code>.keys()</code> devolve todas as chaves. Pergunte em que direção vai a busca: procuramos a chave pelo valor, ou o valor pela chave?'},
        {type:'code', lbl:'o dicionário de gírias — o formato a que os alunos chegam', code:`meme_dict = {
    <span class="cs">"CRINGE"</span>: <span class="cs">"Algo extremamente estranho ou constrangedor"</span>,
    <span class="cs">"LOL"</span>: <span class="cs">"Resposta comum a algo engraçado"</span>,
    <span class="cs">"ROFL"</span>: <span class="cs">"Reação a algo muito engraçado, parecido com LOL"</span>
}

word = <span class="cf">input</span>(<span class="cs">"Digite uma gíria que você não entende (TUDO EM MAIÚSCULAS!): "</span>)

<span class="ck">if</span> word <span class="ck">in</span> meme_dict.<span class="cf">keys</span>():
    <span class="cf">print</span>(meme_dict[word])
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Ainda não temos essa palavra... mas estamos trabalhando nisso!"</span>)`},
        {type:'hi', h:'Por que explorar os repositórios importa', b:'Depois de subir o código, os alunos postam os links dos repositórios no chat do grupo e saem à caça da palavra mais engraçada que um colega adicionou. É esse o objetivo inteiro da etapa: mostra a eles, na prática, que o <strong>Git torna o código dos outros instantaneamente acessível</strong>. Faça você mesmo o exemplo — abra alguns repositórios e comente em voz alta o que cada aluno fez bem.'},
        {type:'tip', txt:'Prepare a próxima aula no fim desta. A lição de casa pede que explorem um projeto no GitHub e tragam 2 ou 3 perguntas sobre ele; peça também que <strong>baixem em casa os instaladores do Python e do VS Code</strong> e deixem um e-mail pronto. Downloads durante a segunda aula vão comer seu tempo de prática.'}
      ]},
      {t:'💻 L2 — O interpretador, o VS Code e o gerador de senhas', cards:[
        {type:'text', h:'O problema que dá o enquadramento', b:'Ataques hacker. Discuta como dados pessoais são roubados e o que protege — não clicar em links suspeitos, não digitar dados pessoais em sites desconhecidos e <strong>usar senhas fortes</strong>. Esse último vira o projeto: um programa de código aberto que gera senhas fortes.'},
        {type:'qa', h:'Os dois conceitos que precisam assentar', items:[
          {k:'Interpretador', v:'O computador só entende código de máquina — zeros e uns. Escrever isso à mão é inviável, então escrevemos em Python e o interpretador traduz para o código de máquina que o processador executa.'},
          {k:'IDE', v:'Integrated Development Environment: um programa que ajuda a escrever código — autocompletar, dicas de sintaxe, verificação de erros, testes, compartilhamento. Este curso usa o VS Code; o PyCharm é outra boa opção. IDEs não são exclusivas do Python.'}
        ]},
        {type:'text', h:'A sequência de configuração', b:'Instale o interpretador, instale o VS Code, instale a <strong>extensão Python</strong> e então selecione o interpretador com <code>Shift+Ctrl+P</code>. Enfatize duas coisas: a configuração acontece <strong>uma vez</strong>, logo depois da instalação; e a <strong>extensão do arquivo importa</strong> — um arquivo Python precisa terminar em <code>.py</code> para rodar. Depois crie uma pasta de projeto (sempre uma pasta por projeto), um arquivo <code>.py</code> e rode <code>print("Hello, world!")</code>.'},
        {type:'code', lbl:'o gerador de senhas', code:`<span class="ck">import</span> random

elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"</span>

pass_length = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Digite o tamanho da senha: "</span>))
password = <span class="cs">""</span>

<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
    password += random.<span class="cf">choice</span>(elements)

<span class="cf">print</span>(password)`},
        {type:'hi', h:'Esta aula tem o formato de um sprint de Scrum', b:'Cada etapa é um <strong>sprint</strong>: uma discussão curta no início, um limite rígido de tempo e depois um fechamento com duas perguntas fixas — “<em>alcançamos mesmo o resultado?</em>” e “<em>como isso nos aproxima de resolver o problema principal?</em>”. Diga os limites de tempo em voz alta. É o primeiro contato deles com um ritmo que volta ao longo do curso e é ensinado formalmente no Módulo 8.'},
        {type:'tip', txt:'A etapa de upload é desajeitada de propósito: peça que descubram sozinhos como colocar o código no repositório vazio, discutindo em voz alta, antes de você mostrar o botão de upload do GitHub. Depois diga que essa é só uma das opções — e nem a mais conveniente. Isso prepara a integração do Git no VS Code em M2L3.'}
      ]},
      {t:'🤖 L3 — pip, o bot do Discord e funções', cards:[
        {type:'text', h:'Usar–Modificar–Criar', b:'Esta aula roda no <strong>método UMC</strong>, e você precisa fazer os dois primeiros passos em ordem: os alunos <strong>usam</strong> um bot completo (rodam, veem funcionar) e depois o <strong>modificam</strong> enquanto você explica o que cada mudança faz. Dê cinco minutos para experimentarem livremente com o código de exemplo e responda perguntas sem entregar nada.'},
        {type:'qa', h:'pip e as três coisas que um bot precisa', items:[
          {k:'pip', v:'“Pip Installs Packages” — o gerenciador de pacotes do Python. <code>pip install discord</code> no terminal e a biblioteca está lá. Uma das maiores vantagens do Python é existir uma biblioteca para quase tudo.'},
          {k:'1. Um servidor', v:'O bot precisa de um espaço para viver. Cada aluno cria o próprio servidor no Discord.'},
          {k:'2. Um bot registrado', v:'Registrado no Discord Developer Portal, para o Discord saber que é um bot e as permissões poderem ser configuradas.'},
          {k:'3. Um token', v:'A chave que permite ao programa rodar aquele bot específico. Quem tem o token controla o bot por completo.'}
        ]},
        {type:'warn', txt:'Diga isto no momento em que os tokens aparecerem, e toda vez que um projeto for publicado: <strong>se alguém pegar seu token, o bot é dele.</strong> Nunca faça commit dele, nunca poste no chat, nunca deixe visível numa tela compartilhada. No código compartilhado escrevemos o marcador <code>bot.run("YOUR_BOT_TOKEN")</code>. Se um token vazar, regenere-o no Developer Portal — apagar o arquivo não basta, porque o Git guarda o histórico.'},
        {type:'code', lbl:'a lógica do bot em arquivo próprio — bot_logic.py', code:`<span class="ck">import</span> random

<span class="ck">def</span> <span class="cf">gen_pass</span>(pass_length):
    elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;"</span>
    password = <span class="cs">""</span>
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
        password += random.<span class="cf">choice</span>(elements)
    <span class="ck">return</span> password`},
        {type:'code', lbl:'o bot que a importa — main.py (classe Client)', code:`<span class="ck">import</span> discord
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

<span class="cc"># intents guarda os privilégios do bot</span>
intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>   <span class="cc"># libera a leitura do texto das mensagens</span>

client = discord.<span class="ct2">Client</span>(intents=intents)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'Conectamos como {client.user}'</span>)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_message</span>(message):
    <span class="ck">if</span> message.author == client.user:   <span class="cc"># impede o bot de responder a si mesmo</span>
        <span class="ck">return</span>
    <span class="ck">if</span> message.content.<span class="cf">startswith</span>(<span class="cs">'$hello'</span>):
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Oi!"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Sua senha "</span> + <span class="cf">gen_pass</span>(<span class="cn">10</span>))

client.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'Funções, ensinadas a partir do código à frente deles', b:'Uma função é código que você escreve uma vez e reutiliza. Aponte para os dois <code>def</code> que já estão no bot e pergunte: como se chamam? O que uma função tem além do nome e do corpo? Que outras funções eles já conhecem (<code>print</code>, <code>input</code>, <code>len</code>)? Depois torne concreto — os dados <strong>entram</strong> pelos argumentos entre parênteses e os dados processados <strong>saem</strong> pelo <code>return</code>. A tarefa é transformar o programa anterior deles numa função, colocá-la num arquivo próprio e importá-la.'},
        {type:'tip', txt:'Boa pergunta diagnóstica para a fase de experimentação: “o que acontece se você remover <code>if message.author == client.user: return</code>?” O bot passa a responder a si mesmo para sempre. Deixe que descubram o laço infinito em vez de avisar.'}
      ]},
      {t:'📖 L4 — Documentação, a classe Bot e teste entre colegas', cards:[
        {type:'text', h:'O verdadeiro objetivo desta aula', b:'Não é um recurso — é um <strong>hábito</strong>. Os alunos precisam sair acreditando que consultar a documentação é o que programadores de verdade fazem. Ninguém sabe uma biblioteca de cor; a habilidade é achar um exemplo e adaptá-lo. Diga isso explicitamente e trate erros como parte comum do processo, e não como algo constrangedor.'},
        {type:'twocol', left:{h:'Client', items:['Reage a <strong>eventos</strong> — <code>@client.event</code>','Lê a <strong>mensagem inteira</strong>, então passar um valor exige dividir o texto você mesmo','Use para agir sobre a API como um usuário']}, right:{h:'Bot', items:['Reage a <strong>comandos que você define</strong> — <code>@bot.command()</code>','Aceita diretamente os argumentos que o usuário digita','Use para automatizar ações específicas']}},
        {type:'code', lbl:'o mesmo bot reescrito com a classe Bot', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>

<span class="cc"># command_prefix é o identificador que marca um comando</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'Conectamos como {bot.user}'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f'Oi! Eu sou um bot: {bot.user}!'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">pasw</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">gen_pass</span>(<span class="cn">10</span>))

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'<strong>Nunca use <code>Bot</code> e <code>Client</code> no mesmo programa.</strong> Alunos que copiam trechos de dois tutoriais diferentes vão fazer exatamente isso e obter falhas confusas. É uma das “5 diferenças” que eles precisam encontrar entre as duas versões do código.'},
        {type:'text', h:'Histórico do Git e teste entre colegas', b:'Os alunos <strong>atualizam</strong> o repositório que já existe em vez de criar um novo, e depois olham o histórico do arquivo — e você conta a verdade: <strong>tudo o que vai para o Git fica lá.</strong> Mostre também o painel de atividade do perfil. Em seguida formam duplas em salas simultâneas, rodam o bot de um colega e dão três ideias de melhoria um ao outro, que vão para o chat da tarefa como um backlog. A lição de casa é implementar uma delas.'},
        {type:'tip', txt:'Antes do teste entre colegas, pergunte como se faria para rodar o bot de outra pessoa. A resposta é uma receita de quatro passos: abrir o repositório dela, copiar o código para o seu projeto, colar o <strong>seu próprio</strong> token e executar. O último passo é o que eles esquecem — e é um bom momento para repetir por que o token é só deles.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno pergunta qual a diferença entre o interpretador Python e uma IDE. Qual é a resposta correta?', opts:['O interpretador traduz o Python para código de máquina que o processador executa; a IDE é o programa que ajuda você a escrever o código','São dois nomes para a mesma coisa','O interpretador escreve o código e a IDE apenas o executa','O interpretador é para iniciantes e a IDE para profissionais'], c:0, fb:'O interpretador converte Python legível em código de máquina. A IDE — aqui o VS Code — é o editor com autocompletar, dicas e verificação de erros.'},
      {q:'Quais são as três coisas que um bot do Discord precisa antes de qualquer código funcionar?', opts:['Um servidor do Discord, um bot registrado no Developer Portal e um token','Uma assinatura paga do Discord, um servidor e um e-mail','Um repositório no GitHub, um site e um domínio','Um servidor do Discord, uma webcam e um microfone'], c:0, fb:'M1L3 apresenta como três requisitos: o servidor dá espaço ao bot, o registro faz o Discord reconhecê-lo como bot para configurar permissões, e o token permite ao seu programa executá-lo.'},
      {q:'Um aluno quer subir seu bot funcionando para um repositório público no GitHub. O que precisa acontecer antes?', opts:['O token real precisa sair e ser substituído por um marcador — e se já foi enviado alguma vez, precisa ser regenerado no Developer Portal','Nada — o repositório pode ser público porque o código é dele','O repositório precisa ser renomeado para algo que pareça privado','Ele deve apagar a linha do token depois de subir'], c:0, fb:'Um token é uma senha: quem o tiver controla o bot. Apagar depois não resolve, porque o Git guarda o histórico — a única solução para um token vazado é regenerá-lo.'},
      {q:'Qual a diferença entre as classes Client e Bot no discord.py?', opts:['Client responde a eventos; Bot responde a comandos que você define com um prefixo — e as duas não devem ser usadas no mesmo programa','Client é para texto e Bot para imagens','Bot é a versão antiga do Client','Client é mais rápido porque lê menos mensagens'], c:0, fb:'Client reage a eventos via @client.event; Bot reage a comandos definidos via @bot.command() e aceita argumentos digitados. Misturar as duas num programa quebra tudo.'},
      {q:'O bot de um aluno está online mas ignora todas as mensagens. Qual é a primeira coisa a verificar?', opts:['Se intents.message_content = True está no código e se o Message Content Intent está ativado no Developer Portal','Se a conexão de internet está estável','Se o servidor tem membros suficientes','Se usaram a classe Client em vez de Bot'], c:0, fb:'Ler o texto das mensagens é um privilégio. Precisa estar ativado no código e no portal — se faltar um, o bot não enxerga nada.'},
      {q:'Por que o curso faz os alunos transformarem o gerador de senhas numa função em arquivo separado?', opts:['Para mostrar que a lógica escrita uma vez pode ser importada e reutilizada — dados entram por argumentos e saem pelo return','Porque o Discord exige que todo bot tenha dois arquivos','Para o arquivo ficar menor e subir mais rápido','Porque funções rodam mais rápido que código solto'], c:0, fb:'M1L3 usa o programa anterior dos próprios alunos para ensinar funções de forma concreta: argumentos entram, return sai, importado no main.py — “como programadores de verdade”.'},
      {q:'Qual é o objetivo principal de M1L4, a aula de documentação?', opts:['Criar o hábito de achar e adaptar exemplos da documentação, porque nenhum programador sabe uma biblioteca de cor','Memorizar a lista completa de comandos do discord.py','Terminar o bot para não precisar de mais mudanças','Ensinar os alunos a evitar bibliotecas e escrever tudo do zero'], c:0, fb:'A nota da aula é explícita: os alunos precisam aprender que podem e devem procurar exemplos de código na documentação da biblioteca. Programar é exploração e aprendizado constante.'},
      {q:'Os alunos não baixaram os instaladores do Python e do VS Code em casa. O que o curso manda fazer?', opts:['Iniciar o download agora, mas seguir a aula com quem está pronto em vez de travar a turma inteira','Cancelar a etapa prática e usar o tempo para teoria','Esperar todo mundo terminar de baixar antes de começar','Mandá-los instalar em casa e continuar na semana seguinte'], c:0, fb:'Os instaladores são lição de casa justamente para evitar isso. Se alguns não fizeram, inicie os downloads e siga — o assistente técnico pode ajudá-los a se atualizar.'}
    ]
  },
  {
    id:6, emoji:'🎨', color:'#E8663B',
    title:'M2 — Arquivos, HTML, CSS e UI/UX',
    desc:'Módulo 2 do curso: ler arquivos e pastas com os, o bot de memes, APIs, o projeto do eco-bot, público-alvo, HTML, CSS, UI/UX e Git dentro do VS Code.',
    obj:'Ensine os alunos a trabalhar com arquivos e dados externos, a construir um projeto para um público escolhido e a criar suas primeiras páginas web. Você deve saber explicar modos de acesso a arquivos e <code>os.listdir</code>, montar uma requisição a uma API, conduzir a discussão de público-alvo, ensinar as tags de HTML e as regras de CSS essenciais, criticar uma página do ponto de vista de UI/UX e conectar o GitHub ao VS Code.',
    prep:'~4 horas. O HTML/CSS é rápido; o bot e a API não são.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 2 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Escreveu um bot que envia uma imagem específica com <code>discord.File</code> e o modo <code>\'rb\'</code>',
        'Refinou-o para escolher um arquivo aleatório com <code>os.listdir</code> — e errou o caminho pelo menos uma vez',
        'Chamou uma API pública com <code>requests</code> e extraiu um campo da resposta <code>.json()</code>',
        'Construiu uma pequena página HTML com as tags do curso e vinculou um <code>style.css</code> a ela',
        'Adicionou uma animação com <code>@keyframes</code> e uma variante <code>:hover</code>',
        'Incorporou um widget de terceiros com <code>&lt;iframe&gt;</code>',
        'Publicou a página no GitHub de dentro do VS Code',
        'Olhou um site propositalmente ruim e anotou você mesmo os problemas de UX e de UI'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> arquivos, pastas e o bot de memes (mais APIs e um teste somativo); <strong>L2</strong> um eco-bot do zero com um público-alvo escolhido; <strong>L3</strong> front-end e back-end, HTML, CSS e Git dentro do VS Code; <strong>L4</strong> princípios de UI/UX, animação em CSS e widgets incorporados.',
          why:'É aqui que os alunos param de consumir dados que eles mesmos digitaram e passam a lê-los do disco e da internet — e onde começa a metade web do curso. Também apresenta a ideia de que um projeto é feito <em>para alguém</em>.',
          learn:'Os alunos leem arquivos com <code>with open(...)</code>, listam uma pasta com <code>os.listdir</code>, enviam imagens por um bot, chamam uma API pública com <code>requests</code>, constroem um bot para um público que escolheram, criam uma página HTML estilizada sobre dependência tecnológica, animam-na com <code>@keyframes</code>, incorporam um widget com <code>&lt;iframe&gt;</code> e publicam a partir do VS Code.',
          confident:'<code>with open()</code> e os modos de acesso a arquivos; <code>os.listdir()</code> com <code>random.choice</code>; <code>discord.File</code>; o que uma API devolve e como <code>requests</code>/<code>.json()</code> lidam com isso; as tags de HTML essenciais; como vincular uma folha de estilos; e <code>git config</code> mais a publicação de um repositório pelo VS Code.'
        }
      ]},
      {t:'📁 L1 — Arquivos, o bot de memes e APIs', cards:[
        {type:'text', h:'O que ensinar sobre arquivos', b:'Duas coisas que os alunos erram na hora: o <strong>nome e a extensão do arquivo</strong> precisam ser exatos, e o arquivo precisa estar <strong>na pasta do programa</strong> (ou eles precisam escrever o caminho completo). Dê atenção real à palavra-chave <code>with</code> e aos <strong>modos de acesso</strong> — <code>\'rb\'</code>, que lê uma imagem como bytes, é o que o bot precisa. Diga a eles que podem voltar a essa tarefa e reler o código quando quiserem.'},
        {type:'code', lbl:'o bot de memes — uma imagem e depois uma aleatória da pasta', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">import</span> os, random

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">mem</span>(ctx):
    <span class="cc"># os.listdir devolve todos os nomes de arquivo da pasta</span>
    img_name = random.<span class="cf">choice</span>(os.<span class="cf">listdir</span>(<span class="cs">'images'</span>))
    <span class="ck">with</span> <span class="cf">open</span>(<span class="cs">f'images/{img_name}'</span>, <span class="cs">'rb'</span>) <span class="ck">as</span> f:
        picture = discord.<span class="ct2">File</span>(f)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(file=picture)

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'A ordem de construção importa', b:'Faça em duas etapas, não em uma. Primeiro um bot que envia <strong>um meme específico</strong> ao receber <code>$mem</code> — o encanamento funciona. Só então refine para escolher um arquivo <strong>aleatório</strong> da pasta, que é onde o <code>os</code> ganha seu lugar. Plano de desenvolvimento da segunda etapa: uma variável com os nomes dos arquivos, uma variável escolhendo um ao acaso, e então o envio.'},
        {type:'hi', h:'APIs, como tarefa adicional', b:'Para os alunos mais rápidos: uma <strong>API</strong> é um conjunto de funções e dados prontos que outro serviço expõe. Em vez de montar seu próprio banco de fotos de patos, você chama a API de patos. Em Python isso significa a biblioteca <code>requests</code> — envia uma requisição HTTP, recebe uma resposta JSON e extrai dela o campo de que precisa. Algumas APIs exigem uma chave de acesso gratuita; a documentação diz quais requisições existem e o que devolvem.'},
        {type:'code', lbl:'chamando uma API pública a partir do bot (sem chave)', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_duck_image_url</span>():
    url = <span class="cs">'https://random-d.uk/api/random'</span>
    res = requests.<span class="cf">get</span>(url)
    data = res.<span class="cf">json</span>()          <span class="cc"># transforma a resposta JSON num dicionário</span>
    <span class="ck">return</span> data[<span class="cs">'url'</span>]

<span class="cd">@bot.command</span>(<span class="cs">'duck'</span>)
<span class="ck">async def</span> <span class="cf">duck</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_duck_image_url</span>())`},
        {type:'text', h:'O trilho da metacognição', b:'Esta aula carrega um segundo fio que atravessa os 90 minutos: cinco “estações” programadas em que você para e faz os alunos pensarem sobre <em>como</em> estão aprendendo. Estação 1 — enuncie os objetivos com clareza. Estação 2 — autoquestionamento: como o que você já sabia ajudou a entender isto? Estação 3 — que ferramentas e estratégias você usou? Estação 4 — avalie essas estratégias. Estação 5 — reflexão final: essas estratégias vão te ajudar fora deste curso? Leia o material do tutor antes de conduzir.'},
        {type:'good', txt:'Se um aluno se frustrou durante a aula, o enquadramento metacognitivo te dá algo realmente útil a dizer: aquela reação é <strong>válida</strong>, e é uma informação sobre a <em>estratégia</em> escolhida, não sobre a capacidade dele. Parabenize-o por ter percebido — perceber é a habilidade.'},
        {type:'tip', txt:'Há um <strong>teste somativo</strong> nesta aula (15 minutos). Apresente-o como revisão, e não como prova de alto risco, e conduza de forma interativa. Há também uma tarefa criativa: fazer um meme sobre programar bots do Discord, cinco minutos, cronômetro ligado. Guarde os memes — dá para usá-los como aquecimento por semanas.'}
      ]},
      {t:'♻️ L2 — O eco-bot, do zero, para um público', cards:[
        {type:'text', h:'O que há de diferente nesta aula', b:'Não há passo a passo. Os alunos constroem um <strong>bot completo de autoria própria</strong> em 40 minutos, usando tudo do Módulo 1 e da L1. Seu papel deixa de ser explicar e passa a ser fazer perguntas condutoras e dar dicas. Mesmo cada um construindo o seu, incentive que se ajudem.'},
        {type:'text', h:'Público-alvo — o conceito que muda o projeto', b:'Público-alvo é o grupo de pessoas para quem você está construindo; conhecer os problemas delas é o que torna um produto útil. A aula oferece três públicos para um bot de redução de lixo — <strong>adolescentes</strong> que querem reduzir o lixo doméstico mas não sabem por onde começar, <strong>adultos</strong> na mesma situação e <strong>pessoas já interessadas</strong> em práticas ecológicas que querem ir além. Cada um implica um recurso diferente: dicas personalizadas, um guia passo a passo ou uma seção de notícias e artigos. Os alunos escolhem um e fixam publicamente no chat.'},
        {type:'qa', h:'Ideias de bot para oferecer se travarem', items:[
          {k:'Bot de artesanato com plástico', v:'Ideias para reaproveitar plástico doméstico.'},
          {k:'Bot de separação', v:'Diz em qual lixeira vai cada item e o que precisa ser reciclado.'},
          {k:'Bot de decomposição', v:'Informa quanto tempo um item doméstico leva para se decompor.'}
        ]},
        {type:'warn', txt:'A etapa de upload para o GitHub nesta aula é <strong>avaliada</strong> — o link no chat da tarefa é como você avalia o projeto, então um link faltando significa um aluno sem nota. Lembre de novo, em voz alta, que o token não sobe junto com o código. Projetos aqui valem até 50 pontos pela ferramenta de avaliação.'},
        {type:'hi', h:'Fim do Tópico 1 — a etapa de carreira', b:'Esta aula fecha o arco do Módulo 1 do curso com uma etapa de cinco minutos que não é enrolação: comemore que eles terminaram um tópico que pouca gente termina e conecte as habilidades ao trabalho real. Partes do YouTube, do Facebook, do Instagram, da Netflix, de produtos do Google, do Spotify e de projetos da NASA são feitas com Python, que está há anos entre as linguagens mais procuradas. Pergunte se eles imaginavam construir programas que facilitam a vida das pessoas.'}
      ]},
      {t:'🌐 L3 — Front-end, HTML, CSS e Git no VS Code', cards:[
        {type:'text', h:'O enquadramento e o arco de dez aulas', b:'Anuncie: pelas <strong>próximas dez aulas</strong> eles vão construir sites, e vão terminar com cinco páginas web diferentes no portfólio do GitHub. O desenvolvimento web se divide em <strong>front-end</strong> (o que o usuário vê) e <strong>back-end</strong> (a lógica que faz funcionar). Front-end costuma ser HTML + CSS + JavaScript; back-end pode ser PHP, Java, Ruby ou <strong>Python</strong> — e o framework web de Python neste curso é o <strong>Flask</strong>, que chega no próximo módulo.'},
        {type:'qa', h:'A distinção que precisa ficar clara', items:[
          {k:'HTML', v:'Cria o <strong>conteúdo e a estrutura</strong> — texto, imagens, links. Não é uma linguagem de programação.'},
          {k:'CSS', v:'Controla a <strong>aparência</strong> — cores, fontes, layout. Também não é uma linguagem de programação.'},
          {k:'Por que importa para o Python', v:'HTML e CSS viram <em>templates</em> que o Flask preenche com dados. Conhecê-los é o que permite a um desenvolvedor Python entregar uma página com cara de acabada.'}
        ]},
        {type:'code', lbl:'a página que os alunos constroem — index.html', code:`<span class="ck">&lt;!DOCTYPE html&gt;</span>
<span class="ct2">&lt;html&gt;</span>
    <span class="ct2">&lt;head&gt;</span>
        <span class="ct2">&lt;title&gt;</span>Informação útil!<span class="ct2">&lt;/title&gt;</span>
        <span class="ct2">&lt;link</span> <span class="cf">rel</span>=<span class="cs">"stylesheet"</span> <span class="cf">href</span>=<span class="cs">"style.css"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;/head&gt;</span>
    <span class="ct2">&lt;body&gt;</span>
        <span class="ct2">&lt;h1&gt;</span>Dependência de redes sociais<span class="ct2">&lt;/h1&gt;</span>
        <span class="ct2">&lt;p&gt;</span>As redes sociais reduzem o tempo que passamos no mundo real.<span class="ct2">&lt;/p&gt;</span>
        <span class="ct2">&lt;img</span> <span class="cf">src</span>=<span class="cs">"phone.gif"</span> <span class="cf">alt</span>=<span class="cs">"Imagem 1"</span><span class="ct2">&gt;</span>
        <span class="ct2">&lt;h2&gt;</span>Como podemos resistir?<span class="ct2">&lt;/h2&gt;</span>
        <span class="ct2">&lt;ul&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Definir limites de tempo nos nossos aparelhos.<span class="ct2">&lt;/li&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Reservar tempo sem tecnologia para descansar.<span class="ct2">&lt;/li&gt;</span>
        <span class="ct2">&lt;/ul&gt;</span>
    <span class="ct2">&lt;/body&gt;</span>
<span class="ct2">&lt;/html&gt;</span>`},
        {type:'code', lbl:'style.css — e a única mudança que você pede a eles', code:`body {
    font-family: Arial, Verdana, sans-serif;  <span class="cc">/* família da fonte */</span>
    font-size: 11pt;                          <span class="cc">/* tamanho do texto principal */</span>
    background-color: #f0f0f0;                <span class="cc">/* fundo da página */</span>
    color: #333;                              <span class="cc">/* cor do texto */</span>
}

h1 {
    color: #00a800;                           <span class="cc">/* cor do título */</span>
    font-size: 24pt;
    font-family: Georgia, Times, serif;
}`},
        {type:'text', h:'O Git é o programa, o GitHub é o site', b:'Explique que o <strong>GitHub é um site</strong> e o <strong>git é um programa separado</strong> na sua máquina que torna o fluxo de trabalho muito mais fácil. A etapa importante da instalação é <strong>escolher o VS Code</strong> como editor; o resto pode ficar no padrão. Depois faça login no GitHub de dentro do VS Code — <em>uma vez</em> — e publique a página como um novo repositório público direto do editor.'},
        {type:'warn', txt:'Se o git se recusar a funcionar, a solução quase sempre é identidade. Execute com os dados do próprio aluno: <code>git config --global user.email "voce@exemplo.com"</code> e <code>git config --global user.name "Seu Nome"</code>. Demonstre a instalação inteira primeiro; se um aluno não conseguir acompanhar, peça que termine em casa pela gravação da aula em vez de travar a turma.'},
        {type:'tip', txt:'Mantenha o HTML e o CSS rasos de propósito. A nota da aula é explícita: os alunos precisam apenas do básico essencial, sem aprofundamento. Quatro tags e algumas regras de CSS é o alvo — a profundidade vem depois, pelos projetos.'}
      ]},
      {t:'✨ L4 — UI/UX, animação e widgets', cards:[
        {type:'text', h:'Ensine UI/UX por crítica, não por exposição', b:'Não transforme isto num monólogo. Abra um site real propositalmente ruim — o curso usa o site da Yale School of Art — e faça com que os <em>alunos</em> apontem o que está errado, dando vez a todos. Depois organize as respostas deles nos dois grupos.'},
        {type:'twocol', left:{h:'❌ Problemas de UX (experiência)', items:['<strong>Navegação complexa</strong> — menus sobrecarregados e pouco intuitivos','<strong>Sem hierarquia de informação</strong> — paredes de texto sem estrutura','<strong>Acessibilidade ruim</strong> — fontes minúsculas, baixo contraste','<strong>Elementos que distraem</strong> — animação e cor puxando a atenção para longe do conteúdo']}, right:{h:'❌ Problemas de UI (interface)', items:['<strong>Estilo inconsistente</strong> — sem design unificado, caos visual','<strong>Interface imprevisível</strong> — coisas que parecem links mas não são','<strong>Sem responsividade</strong> — inutilizável no celular']}},
        {type:'code', lbl:'animação em CSS com @keyframes — e a variante :hover', code:`<span class="cd">@keyframes</span> color-change {
    0%   { color: blue; }
    50%  { color: red; }
    100% { color: blue; }
}

h1 {
    animation: color-change 3s infinite;
}

<span class="cc">/* adicione :hover e a animação só roda sob o cursor */</span>
h1:hover {
    animation: color-change 3s infinite;
}`},
        {type:'text', h:'Widgets com &lt;iframe&gt;', b:'Um <strong>widget</strong> é o aplicativo de outra pessoa incorporado na sua página, usando a tag <code>&lt;iframe&gt;</code>. O exemplo da aula combina bem com o tema: incorporar uma <strong>previsão do tempo</strong> para incentivar quem lê uma página sobre dependência tecnológica a sair de casa. Sites de widgets deixam você configurar a aparência e copiar o código <code>&lt;iframe&gt;</code> pronto.'},
        {type:'good', txt:'Repare como as duas metades desta aula se conectam: você acabou de ensinar que animação pode ser um <em>problema</em> de UX e em seguida ensina a animar. Deixe a tensão explícita — “agora que você sabe fazer isso, quando deveria fazer?”. A crítica que eles fizeram ao site ruim vira o padrão que aplicam a si mesmos.'},
        {type:'tip', txt:'Encerre com o quiz de revisão e termine nas duas perguntas de reflexão que o plano sugere: qual princípio de UX você acha mais importante, e qual você vai realmente usar nos seus próprios aplicativos? A lição de casa é uma tarefa de “limpar o projeto”, que prepara as estruturas de pasta mais complexas de que o Flask precisa no próximo módulo.'}
      ]}
    ],
    quiz:[
      {q:'Por que o bot de memes abre o arquivo de imagem no modo \'rb\'?', opts:['Uma imagem é dado binário, então precisa ser lida como bytes e não como texto','Porque \'rb\' significa “random bytes”, o que escolhe a imagem','Porque o Discord só aceita arquivos abertos em modo de leitura','É arbitrário — qualquer modo funciona'], c:0, fb:'Os modos de acesso importam: \'rb\' lê o arquivo como bytes crus, que é o que o discord.File precisa para uma imagem.'},
      {q:'O que os.listdir(\'images\') devolve, e por que o bot de memes precisa disso?', opts:['Todos os nomes de arquivo da pasta, para que random.choice escolha um em vez de sempre enviar a mesma imagem','O tamanho da pasta em bytes','Uma lista de arquivos já abertos prontos para enviar','As permissões da pasta, que o Discord verifica'], c:0, fb:'O bot é construído em duas etapas: primeiro enviando uma imagem fixa, depois usando os.listdir com random.choice para escolher qualquer arquivo da pasta.'},
      {q:'Um aluno quer que o bot envie fotos aleatórias de patos. Qual é a abordagem profissional que o curso ensina?', opts:['Chamar uma API pública com a biblioteca requests e ler a URL da resposta JSON','Baixar algumas centenas de fotos de patos para a pasta images','Pedir que cada usuário envie antes uma foto de pato','Gerar os patos com um modelo de imagem'], c:0, fb:'É esse o ponto da tarefa de API: em vez de montar seu próprio banco de dados, você usa uma API que já fornece os dados — o requests envia a chamada HTTP e o .json() interpreta a resposta.'},
      {q:'O que é público-alvo, e por que a aula do eco-bot faz os alunos escolherem um?', opts:['É o grupo específico para quem o produto é feito — conhecer os problemas dele é o que torna o bot realmente útil, e isso muda quais recursos são construídos','É um número mínimo de usuários que o bot precisa alcançar','É o conjunto de servidores do Discord em que o bot pode entrar','São os colegas de turma que vão testar o bot'], c:0, fb:'A aula oferece três públicos para o mesmo bot, cada um implicando um recurso diferente — dicas personalizadas, um guia passo a passo ou uma seção de notícias.'},
      {q:'Qual afirmação sobre HTML, CSS e Python está correta?', opts:['HTML estrutura o conteúdo e o CSS o estiliza — nenhum dos dois é linguagem de programação, e ambos viram templates que o Flask preenche com dados','Os três são linguagens de programação usadas no front-end','O CSS é o back-end e o HTML é o front-end','HTML é uma biblioteca de Python'], c:0, fb:'HTML cria o conteúdo, o CSS controla a aparência, e conhecer os dois é o que permite a um aplicativo Flask entregar uma página com cara de acabada.'},
      {q:'O commit de um aluno falha com uma mensagem sobre identidade. O que você executa?', opts:['git config --global user.email e git config --global user.name, com os dados dele','git init --force','pip install git','git reset --hard'], c:0, fb:'As notas de M2L3 dão exatamente esses dois comandos como solução quando o git ainda não foi configurado naquela máquina.'},
      {q:'Você está ensinando UI/UX. O que a aula diz para NÃO fazer?', opts:['Transformar isso numa exposição unilateral — os alunos é que devem identificar os problemas num site ruim de verdade','Mostrar um site real, porque pode ser ofensivo','Mencionar acessibilidade, que está além da faixa etária','Deixar que os alunos discordem entre si'], c:0, fb:'A nota de pontos importantes é explícita: não faça disso uma palestra, promova uma discussão e, se possível, dê a chance de falar a todos os alunos.'},
      {q:'O que muda ao adicionar :hover ao seletor de uma animação em CSS?', opts:['A animação só roda enquanto o mouse está sobre o elemento','A animação roda duas vezes mais rápido','A animação passa a repetir para sempre em vez de rodar uma vez','Desativa a animação no celular'], c:0, fb:'A aula faz os alunos adicionarem :hover justamente para verem que a animação passa a tocar apenas quando o cursor está sobre o elemento.'},
      {q:'O que é um widget no contexto desta aula, e como se incorpora um?', opts:['É o aplicativo de outra pessoa exibido dentro da sua página, incorporado com a tag &lt;iframe&gt;','É uma animação em CSS que reage ao usuário','É uma função Python que devolve HTML','É um recurso do GitHub para compartilhar páginas'], c:0, fb:'Widgets são aplicativos de terceiros incorporados via <iframe> — a aula incorpora uma previsão do tempo na página sobre dependência tecnológica.'}
    ]
  },
  {
    id:7, emoji:'🌐', color:'#2FA37C',
    title:'M3 — Flask e Templates Jinja',
    desc:'Módulo 3 do curso: ambientes virtuais, instalação do Flask, rotas e f-strings, templates e variáveis do Jinja, branches de repositório, formulários HTML e elementos interativos.',
    obj:'Ensine os alunos a construir uma aplicação web de verdade em Python. Você deve saber explicar por que existe um ambiente virtual, instalar o Flask nele, destrinchar o exemplo da documentação, ensinar rotas e <code>url_for</code>, explicar o que faz um motor de templates, ligar um formulário HTML a uma rota do Flask e conduzir uma aula de EduScrum dentro do tempo.',
    prep:'~5 a 6 horas. É o primeiro módulo que você não consegue ensinar só lendo.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 3 do curso, você precisa ter CONSTRUÍDO PESSOALMENTE UMA APLICAÇÃO FLASK FUNCIONANDO. Especificamente:',
      items:[
        'Criou um ambiente com pipenv e instalou o Flask dentro dele',
        'Escreveu um app de uma rota devolvendo HTML, com <code>app.run(debug=True)</code>, e abriu no navegador',
        'Adicionou uma segunda rota com URL própria e ligou as duas páginas',
        'Saiu de devolver strings para <code>render_template</code> com uma pasta <code>templates/</code> de verdade',
        'Passou uma variável para um template e a exibiu com <code>{{ }}</code> do Jinja',
        'Construiu um <code>&lt;form&gt;</code> HTML, leu com <code>request.form</code> e mostrou o resultado em outra página',
        'Quebrou de propósito definindo <code>id</code> sem <code>name</code> e viu o KeyError',
        'Usou <code>url_for()</code> num link e um <code>&lt;select&gt;</code> cujo valor chega ao Python',
        'Baixou um projeto de uma branch do repositório'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> ambientes virtuais, instalação do Flask, a primeira rota e f-strings, mais uma segunda página com URL própria; <strong>L2</strong> Jinja, <code>render_template</code> e variáveis de template, construindo uma calculadora de energia para casa inteligente; <strong>L3</strong> uma aula de EduScrum sobre branches de repositório, <code>url_for</code> e formulários HTML; <strong>L4</strong> elementos interativos e um gerador de memes que altera a página dinamicamente.',
          why:'É o módulo em que o Python passa a servir páginas web. Tudo nos Módulos 4 e 7 do curso se apoia diretamente nele, então uma noção frágil de rotas ou templates trava o resto da trilha web.',
          learn:'Os alunos isolam um projeto com um ambiente virtual, instalam o Flask com <code>pipenv</code>, escrevem rotas, devolvem conteúdo dinâmico com f-strings, renderizam páginas HTML inteiras pelo Jinja, passam variáveis para templates, baixam um projeto de uma branch, constroem um formulário e leem seus dados, e controlam uma página a partir de valores de <code>&lt;select&gt;</code> e <code>&lt;input&gt;</code>.',
          confident:'Por que um ambiente virtual evita conflitos de dependência; <code>pipenv install flask</code>; <code>@app.route</code> e <code>app.run(debug=True)</code>; a diferença entre devolver uma string e <code>render_template</code>; <code>{{ }}</code> do Jinja; <code>url_for()</code>; e <code>request.form</code> com <code>methods=[\'GET\',\'POST\']</code>.'
        }
      ]},
      {t:'🧪 L1 — Ambientes virtuais, Flask e rotas', cards:[
        {type:'text', h:'O que é um ambiente virtual, em palavras simples', b:'Uma ferramenta que <strong>isola um projeto e suas dependências</strong> de todos os outros projetos. Isso evita conflitos de versão entre bibliotecas, facilita levar o projeto para outra máquina e faz com que os pacotes instalados para este projeto não contaminem o resto. Uma vez dentro de um ambiente criado com <code>pipenv</code>, as bibliotecas precisam ser instaladas nele: <code>pipenv install flask</code>, e não <code>pip install</code> puro.'},
        {type:'warn', txt:'Não estoure o tempo desta etapa — o tema importante vem depois dela. Se um aluno não conseguir fazer o ambiente funcionar, <strong>encoraje-o e siga em frente</strong>: diga explicitamente que isso não vai impedi-lo de fazer o trabalho de hoje e que dá para tentar de novo mais tarde. Perder vinte minutos aqui custa a etapa das rotas.'},
        {type:'text', h:'Leiam a documentação; não dite o código', b:'Envie o link da documentação do Flask e peça que <strong>encontrem sozinhos o exemplo de página básica</strong> (mostre onde fica o primeiro exemplo se eles se perderem). Depois explique como rodar e testar, e destrinchem o código juntos. É o hábito de documentação de M1L4 sendo usado de verdade, um módulo depois.'},
        {type:'code', lbl:'a primeira aplicação Flask — uma rota, conteúdo dinâmico, f-strings', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask
<span class="ck">import</span> random

app = <span class="ct2">Flask</span>(__name__)

facts_list = [
    <span class="cs">"Mais de 50% das pessoas de 18 a 34 anos se consideram dependentes do celular."</span>,
    <span class="cs">"As redes sociais têm pontos positivos e negativos — devemos estar atentos aos dois."</span>
]

<span class="cd">@app.route</span>(<span class="cs">"/"</span>)
<span class="ck">def</span> <span class="cf">facts</span>():
    <span class="cc"># uma f-string avalia o que estiver dentro das chaves</span>
    <span class="ck">return</span> <span class="cs">f'&lt;p&gt;{random.choice(facts_list)}&lt;/p&gt;'</span>

app.<span class="cf">run</span>(debug=<span class="ck">True</span>)`},
        {type:'text', h:'Depois esconda a página atrás de uma URL própria', b:'Uma <strong>URL</strong> é o endereço de uma página: você digita, o navegador pede ao servidor e o servidor devolve a página daquele endereço. A tarefa é tirar o fato aleatório da página inicial e levá-lo para <code>/random_fact</code>, dar uma mensagem de boas-vindas à página inicial e ligar as duas com <code>&lt;a href="/random_fact"&gt;Ver um fato aleatório!&lt;/a&gt;</code>. Duas rotas, duas funções — é esse o modelo mental de que os alunos precisam antes do Jinja.'},
        {type:'tip', txt:'Sugira que um aluno vire o tutor durante a etapa de instalação do Flask e mostre a própria tela. É mais rápido do que você narrando, e é uma das jogadas de diferenciação que este curso usa o tempo todo com alunos fortes.'}
      ]},
      {t:'🧩 L2 — Templates Jinja e a calculadora de energia', cards:[
        {type:'text', h:'O problema: a crise energética', b:'Abra com casas inteligentes — são boas ou ruins, e que tipo de moradia mais prejudica o meio ambiente? Uma <strong>crise energética</strong> é quando a demanda por recursos energéticos supera significativamente a oferta. A maior parte da energia ainda vem de fontes não renováveis, e gerá-la e transportá-la polui o ar, a água e o solo. O projeto é uma calculadora que estima a eficiência energética de uma casa inteligente.'},
        {type:'qa', h:'As três coisas que o Jinja te dá', items:[
          {k:'Templates', v:'Páginas HTML prontas que você pode alterar e personalizar dinamicamente.'},
          {k:'Páginas inteiras, não tags', v:'Os alunos já sabem devolver tags HTML isoladas pelo Flask. Importe <code>render_template</code> e passe a devolver uma página inteira.'},
          {k:'Variáveis no HTML', v:'O verdadeiro prêmio — embutir valores de Python na página com <code>{{ }}</code> e alterá-los em tempo real.'}
        ]},
        {type:'code', lbl:'de devolver uma string para renderizar uma página', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask, render_template

<span class="cd">@app.route</span>(<span class="cs">'/'</span>)
<span class="ck">def</span> <span class="cf">index</span>():
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>)`},
        {type:'code', lbl:'variáveis Jinja dentro do template', code:`<span class="cc">&lt;!-- size e lights são valores passados a partir do Python --&gt;</span>
<span class="ct2">&lt;li</span> <span class="cf">class</span>=<span class="cs">"list__item"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ size + "/7" }}"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;img</span> <span class="cf">class</span>=<span class="cs">"item__img"</span> <span class="cf">src</span>=<span class="cs">"../static/img/light.svg"</span> <span class="cf">alt</span>=<span class="cs">"light"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;span&gt;</span>4 a 6 lâmpadas<span class="ct2">&lt;/span&gt;</span>
  <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/li&gt;</span>`},
        {type:'text', h:'Como a aula é conduzida', b:'Instale o Jinja2, baixe o projeto do repositório e então <strong>divida os alunos em duplas em salas simultâneas</strong>. A tarefa é analisar o template e conectar front-end e back-end — mais precisamente, descobrir qual trecho de código responde por qual página. Um aluno que não queira formar dupla pode estudar sozinho. Depois todos passam pelas tarefas do template, e a aula termina com uma tarefa criativa: inventar o próprio cartão de eco-construção, com descrição, coeficiente e imagem próprios.'},
        {type:'tip', txt:'Peça aos alunos mais fortes que olhem a documentação do Jinja com mais atenção como tarefa adicional, em vez de correrem à frente no projeto. Isso os mantém dentro do tema do dia e reforça o hábito da documentação.'}
      ]},
      {t:'🌿 L3 — Branches, url_for e formulários (EduScrum)', cards:[
        {type:'hi', h:'Esta é uma aula de EduScrum — a habilidade é o tempo', b:'A aula é montada como <strong>dois sprints com retrospectivas</strong>. Diga em voz alta o limite de tempo de cada sprint. A nota da aula é direta sobre o modo de falha: se você estiver atrasado, <strong>vá para a retrospectiva mesmo assim</strong> e discuta o que deu errado. Terminar todas as tarefas importa menos do que o grupo vivenciar um ciclo completo de sprint.'},
        {type:'qa', h:'As perguntas da retrospectiva', items:[
          {k:'1', v:'O que vocês realizaram? Deu tempo para tudo?'},
          {k:'2', v:'Qual etapa foi a mais difícil?'},
          {k:'3', v:'Como vocês melhorariam este sprint?'}
        ]},
        {type:'text', h:'Branches de repositório — a metáfora que funciona', b:'Uma <strong>branch</strong> é como uma cópia do repositório feita para uma tarefa específica. Pergunte: seu projeto está sendo usado por pessoas todos os dias e você precisa mudar algo — você pausa o projeto inteiro enquanto desenvolve? Claro que não. Você cria uma branch, desenvolve e testa nela, e a integra ao projeto principal quando tiver certeza de que funciona. Nesta aula o objetivo prático é simplesmente achar a branch certa e baixar dela os arquivos do projeto.'},
        {type:'text', h:'url_for e formulários', b:'Explique o <code>url_for()</code> — ele monta uma URL a partir do <em>nome da função de visualização</em> em vez de um caminho fixo, então os links não quebram quando as rotas mudam. Depois os formulários: mostre aos alunos o formulário que eles mesmos preencheram ao se inscrever na Kodland, para que <code>&lt;form&gt;</code> e <code>&lt;input&gt;</code> cheguem como algo familiar, e não abstrato.'},
        {type:'code', lbl:'o link, o campo e a rota que os recebe', code:`<span class="cc">&lt;!-- um link montado a partir do nome da função de visualização --&gt;</span>
<span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ url_for('form') }}"</span> <span class="cf">class</span>=<span class="cs">"main__link"</span><span class="ct2">&gt;</span>Preencha o formulário<span class="ct2">&lt;/a&gt;</span>

<span class="cc">&lt;!-- um campo que coleta um e-mail --&gt;</span>
<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"email"</span><span class="ct2">&gt;</span>E-mail<span class="ct2">&lt;/label&gt;</span>
<span class="ct2">&lt;input</span> <span class="cf">type</span>=<span class="cs">"email"</span> <span class="cf">name</span>=<span class="cs">"email"</span> <span class="cf">id</span>=<span class="cs">"email"</span> <span class="cf">required</span><span class="ct2">&gt;</span>`},
        {type:'code', lbl:'lendo o formulário do lado do Python', code:`<span class="cd">@app.route</span>(<span class="cs">'/submit'</span>, methods=[<span class="cs">'GET'</span>, <span class="cs">'POST'</span>])
<span class="ck">def</span> <span class="cf">submit_form</span>():
    name    = request.form[<span class="cs">'name'</span>]      <span class="cc"># a chave é o name="" do campo</span>
    email   = request.form[<span class="cs">'email'</span>]
    address = request.form[<span class="cs">'address'</span>]
    date    = request.form[<span class="cs">'date'</span>]

    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'form_result.html'</span>,
                           name=name, email=email,
                           address=address, date=date)`},
        {type:'warn', txt:'O bug mais comum em formulários: <code>request.form[\'email\']</code> lê o atributo <strong><code>name</code></strong> do campo, não o <code>id</code>. Os alunos definem <code>id</code> e esquecem o <code>name</code>, e aí vem um KeyError. Diga isso uma vez no início e você economiza cinco interrupções.'},
        {type:'tip', txt:'A lição de casa estende o formulário para também salvar as informações enviadas num arquivo <code>.txt</code> — o que revisa discretamente a manipulação de arquivos do Módulo 2 do curso e antecipa por que um banco de dados é uma ideia melhor. É essa toda a preparação para o próximo módulo.'}
      ]},
      {t:'🎭 L4 — Elementos interativos e o gerador de memes', cards:[
        {type:'text', h:'O que se constrói', b:'Um <strong>gerador de memes</strong>: o usuário escolhe um template num <code>&lt;select&gt;</code>, digita a legenda nos campos e a página se atualiza com o meme pronto. Os alunos baixam o projeto do repositório, caçam os elementos dentro dele, adicionam os próprios memes ao <code>&lt;select&gt;</code> e então escrevem o back-end que recebe o texto e o coloca no template — inclusive usando uma variável Jinja dentro do CSS para estilizar a legenda.'},
        {type:'qa', h:'As tags que esta aula apresenta', items:[
          {k:'&lt;select&gt;', v:'Uma lista suspensa — o contêiner.'},
          {k:'&lt;option&gt;', v:'Uma escolha dentro da lista suspensa.'},
          {k:'O padrão', v:'Ler o valor escolhido do lado do Python exatamente como qualquer outro campo de formulário e então passá-lo ao template.'}
        ]},
        {type:'hi', h:'O minijogo “ache se conseguir!”', b:'Antes de qualquer código: relembre rapidamente a aparência de cada elemento e então dê <strong>dois minutos</strong> para que encontrem todos eles no projeto sozinhos. Pergunte depois quantos acharam. Isso transforma ler uma base de código desconhecida — uma habilidade genuinamente difícil — num jogo com cronômetro, e faz com que cheguem orientados antes de começar a editar.'},
        {type:'good', txt:'Termine com a competição de melhor meme: os alunos usam a ferramenta que acabaram de construir para gerar memes, mandam a captura no chat do grupo e votam. O vencedor ganha o direito de postar um meme por semana no chat. Custa dez minutos e faz o projeto parecer entregue — que é exatamente a sensação que o curso está engenheirando.'},
        {type:'tip', txt:'Fique de olho no que os alunos escolhem enquanto caçam memes. O plano pede que você acompanhe a seleção e ajude na busca — em parte para manter o ritmo, em parte porque você é responsável pelo que acaba num projeto compartilhado de sala.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno pergunta por que precisa de um ambiente virtual. Qual é a resposta correta?', opts:['Ele isola o projeto e suas dependências, evitando conflitos de versão e facilitando levar o projeto para outra máquina','Faz o Python rodar mais rápido','É exigido pelo Flask e não tem outra finalidade','Esconde o código dos outros usuários do computador'], c:0, fb:'Um ambiente virtual isola as dependências de um projeto, evita conflitos entre versões de bibliotecas e mantém os pacotes instalados por projeto.'},
      {q:'Dentro de um projeto gerenciado por pipenv, como um aluno instala o Flask?', opts:['pipenv install flask — assim ele vai para o ambiente daquele projeto','pip install flask, que sempre funciona da mesma forma','Baixando o Flask do site e copiando a pasta para dentro','O Flask já vem no Python e não precisa de instalação'], c:0, fb:'Instalar bibliotecas funciona igual em geral, mas dentro de um ambiente pipenv você precisa instalar naquele ambiente: pipenv install flask.'},
      {q:'Qual a diferença entre devolver uma f-string com HTML e usar render_template?', opts:['A f-string devolve um pedaço pequeno de HTML a partir da função; o render_template devolve uma página HTML inteira vinda da pasta templates','render_template é a forma antiga de fazer a mesma coisa','Uma f-string pode conter variáveis e o render_template não','render_template só funciona para a página inicial'], c:0, fb:'É exatamente o passo de M3L1 para M3L2: o Flask pode devolver tags diretamente, mas o render_template do Jinja devolve páginas inteiras — e permite injetar variáveis nelas.'},
      {q:'Por que o curso ensina url_for() em vez de hrefs fixos?', opts:['Ele monta a URL a partir do nome da função de visualização, então os links continuam funcionando se o caminho da rota mudar','É mais curto de digitar','Ele criptografa a URL','É obrigatório para qualquer link dentro de um formulário'], c:0, fb:'O url_for() referencia a função, e não o caminho, e é por isso que os links da calculadora usam {{ url_for(\'form\') }}.'},
      {q:'O formulário de um aluno envia, mas o Flask levanta um KeyError em request.form[\'email\']. Qual é a causa mais provável?', opts:['O campo tem id mas não tem o atributo name correspondente — o request.form lê o name','Ele esqueceu de importar o Flask','Falta debug=True na rota','O formulário precisa de um banco de dados antes de poder ser lido'], c:0, fb:'O request.form é indexado pelo atributo name do campo. Definir só o id é o erro clássico de iniciante aqui.'},
      {q:'Como você explicaria uma branch de repositório a um aluno?', opts:['Uma cópia do projeto feita para uma tarefa específica, desenvolvida e testada à parte, e integrada ao projeto principal quando funciona','Um backup feito automaticamente todos os dias','Uma segunda conta do GitHub para o mesmo projeto','Uma pasta dentro do repositório para versões antigas'], c:0, fb:'O enquadramento da aula: não dá para pausar um projeto em uso para alterá-lo, então você cria uma branch, testa e integra quando tiver certeza.'},
      {q:'Você está vinte minutos dentro de uma aula de EduScrum e claramente atrasado. O que o curso manda fazer?', opts:['Ir para a retrospectiva mesmo assim e discutir o que deu errado — o ciclo do sprint importa mais que terminar todas as tarefas','Pular a retrospectiva e continuar programando até terminar as tarefas','Estender a aula além do horário','Entregar o código da solução para que se atualizem'], c:0, fb:'A nota de EduScrum é explícita: a gestão rígida do tempo é o ponto. Se atrasar, vá para a retrospectiva e discuta isso.'},
      {q:'Um aluno não consegue fazer o ambiente virtual funcionar e a etapa do Flask vai começar. Qual é a atitude certa?', opts:['Tranquilizá-lo dizendo que isso não bloqueia o trabalho de hoje, seguir com a aula e ajudá-lo a tentar de novo depois','Parar a aula até funcionar para todos','Dizer para ele pular o módulo','Fazê-lo trabalhar sem Python pelo resto do curso'], c:0, fb:'A nota da aula diz exatamente isso: não ultrapasse o tempo previsto, encoraje o aluno e diga que isso não vai impedi-lo de fazer o trabalho de hoje.'},
      {q:'Qual é o propósito do minijogo “ache se conseguir!” na aula do gerador de memes?', opts:['Orientar os alunos numa base de código desconhecida — uma habilidade real — antes que comecem a editá-la','Testar se decoraram a lista de tags HTML','Preencher o tempo enquanto o projeto baixa','Decidir quem apresenta no final'], c:0, fb:'Dois minutos para localizarem os elementos sozinhos transformam a leitura de código desconhecido num jogo, e fazem com que saibam se situar antes de mexer.'}
    ]
  },
  {
    id:8, emoji:'🗄️', color:'#7C5CFC',
    title:'M4 — Bancos de Dados, Autenticação e Deploy',
    desc:'Módulo 4 do curso: LiveCoding, bancos de dados com SQLAlchemy, classes, conectar o banco ao HTML, cadastro e login de usuários, deploy no PythonAnywhere e o site de portfólio.',
    obj:'Ensine os alunos a armazenar e recuperar dados reais e a colocar um site na internet. Você deve saber conduzir uma aula de LiveCoding corretamente, definir uma classe de modelo, explicar classes usando o próprio Flask, montar cadastro e login com sessões, fazer o deploy no PythonAnywhere incluindo o arquivo WSGI e tratar com honestidade a ressalva sobre armazenamento de senhas.',
    prep:'~6 a 7 horas. O módulo mais pesado do treinamento. Reserve duas sessões.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 4 do curso, você precisa ter CONSTRUÍDO PESSOALMENTE O APP DE DIÁRIO DE PONTA A PONTA — espera-se que você faça LiveCoding disto na frente dos alunos, o que é impossível só lendo. Especificamente:',
      items:[
        'Instalou o <code>flask_sqlalchemy</code> e definiu uma classe de modelo com campos <code>db.Column</code> e uma <code>primary_key</code>',
        'Criou o arquivo <code>.db</code> e salvou um registro com <code>db.session.add()</code> e depois <code>commit()</code>',
        'Omitiu o <code>commit()</code> de propósito e confirmou que nada é salvo e nenhum erro aparece',
        'Leu registros de volta com <code>.query.all()</code>, <code>.order_by()</code> e <code>.get(id)</code> e os exibiu num template',
        'Adicionou uma segunda tabela <code>User</code>, esbarrou no erro “no such table” e corrigiu apagando e recriando o <code>.db</code>',
        'Construiu cadastro e login, com <code>session</code> e <code>secret_key</code>, e filtrou entradas com <code>filter_by()</code>',
        'Fez o deploy de um app funcionando no <strong>PythonAnywhere</strong>, inclusive editando o arquivo WSGI, e abriu no celular',
        'Quebrou o deploy de propósito e achou a causa no log de erros',
        'Treinou em voz alta a ressalva de uma frase sobre hash de senhas'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> bancos de dados e o “Diário do Programador”, ensinado por LiveCoding, mais classes; <strong>L2</strong> uma tabela de usuários, cadastro e login com sessões; <strong>L3</strong> uma aula de EduScrum fazendo deploy no <strong>PythonAnywhere</strong>; <strong>L4</strong> três sprints construindo e publicando um site de portfólio, e então o marco de metade do curso.',
          why:'Um site que esquece tudo assim que você fecha não é uma aplicação. É neste módulo que os projetos dos alunos ganham memória e um endereço público — e é o ponto alto técnico da trilha web.',
          learn:'Os alunos criam um banco SQLite pelo <code>flask_sqlalchemy</code>, definem tabelas como classes, salvam e consultam registros, constroem cadastro e login, mantêm o usuário logado na <code>session</code>, publicam um app funcionando numa URL real e entregam um site de portfólio com lista dinâmica de projetos e formulário de feedback.',
          confident:'O método LiveCoding; a definição de campos com <code>db.Column</code> e <code>primary_key</code>; <code>db.session.add()</code> / <code>commit()</code>; <code>Card.query.all()</code> / <code>get(id)</code> / <code>filter_by()</code>; <code>session</code> mais <code>secret_key</code>; a etapa do WSGI no PythonAnywhere; e a ressalva honesta sobre senhas em texto puro.'
        }
      ]},
      {t:'🎥 L1 — LiveCoding, bancos de dados e classes', cards:[
        {type:'hi', h:'LiveCoding — o método sobre o qual esta aula é construída', b:'LiveCoding significa que o tutor <strong>constrói o código gradualmente junto com os alunos</strong>, compartilhando a tela. O objetivo não é o resultado final — é que os alunos vejam programar como um processo contínuo cheio de pequenas decisões, e não como algo que chega pronto.'},
        {type:'qa', h:'Como fazer LiveCoding bem', items:[
          {k:'Narre', v:'Fale enquanto programa; explique a lógica por trás de cada ação.'},
          {k:'Pergunte', v:'Mantenha os alunos engajados com perguntas em vez de um monólogo.'},
          {k:'Erre', v:'Erros fazem parte — cometa alguns <em>de propósito</em> e peça que os alunos os encontrem.'},
          {k:'Desacelere', v:'Não corra. Faça pausas para que os alunos acompanhem.'},
          {k:'Desenhe', v:'Use as ferramentas de anotação do Zoom para visualizar a lógica.'},
          {k:'Seja legível', v:'Fonte grande e clara, e escreva em blocos de código para que a estrutura fique visível e fácil de explicar.'}
        ]},
        {type:'text', h:'O projeto e seu gancho', b:'O <strong>Diário do Programador</strong> — uma aplicação web com um banco de dados de verdade por trás. O enquadramento é privacidade: tudo o que fazemos vive online, então dá para confiar que seus dados estão seguros? Hoje eles aprendem a construir um serviço genuinamente confidencial, porque <em>eles</em> é que guardam os dados. Um <strong>banco de dados</strong> é uma coleção organizada de dados que permite armazenar, gerenciar e recuperar informação.'},
        {type:'code', lbl:'a tabela, definida como uma classe', code:`<span class="ck">class</span> <span class="ct2">Card</span>(db.<span class="ct2">Model</span>):
    <span class="cc"># cada campo vira uma coluna</span>
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>)
    title    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    subtitle = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">300</span>), nullable=<span class="ck">False</span>)
    text     = db.<span class="ct2">Column</span>(db.<span class="ct2">Text</span>, nullable=<span class="ck">False</span>)

    <span class="ck">def</span> <span class="cf">__repr__</span>(self):
        <span class="ck">return</span> <span class="cs">f'&lt;Card {self.id}&gt;'</span>`},
        {type:'text', h:'Classes, ensinadas depois — de propósito', b:'Repare na ordem da aula: os alunos <strong>constroem a tabela primeiro</strong> e só então você explica classes. Isso é intencional, porque a essa altura eles têm uma pergunta real — “por que escrevemos <code>class</code>?”. Em Python tudo é objeto, e classes são as plantas a partir das quais os objetos são feitos. O exemplo matador está bem na frente deles: <strong>o Flask é uma classe</strong>, com métodos e funções próprios que eles vêm usando o módulo inteiro.'},
        {type:'code', lbl:'salvando e lendo registros', code:`<span class="cc"># salva uma nova entrada</span>
card = <span class="ct2">Card</span>(title=title, subtitle=subtitle, text=text)
db.session.<span class="cf">add</span>(card)
db.session.<span class="cf">commit</span>()

<span class="cc"># todas as entradas, em ordem de id, para a página inicial</span>
cards = <span class="ct2">Card</span>.query.<span class="cf">order_by</span>(<span class="ct2">Card</span>.id).<span class="cf">all</span>()
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>, cards=cards)

<span class="cc"># uma entrada específica, pelo seu id</span>
card = <span class="ct2">Card</span>.query.<span class="cf">get</span>(id)
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'card.html'</span>, card=card)`},
        {type:'warn', txt:'<code>add()</code> sem <code>commit()</code> é o bug desta aula: nada é salvo e não há erro nenhum para te avisar. Faça os alunos dizerem o par em voz alta — “add e depois commit” — do mesmo jeito que diziam “o primeiro item é o item zero” no Python Basic.'}
      ]},
      {t:'🔑 L2 — Usuários, cadastro e login', cards:[
        {type:'text', h:'O que a aula constrói', b:'Baixe o projeto atualizado da <strong>branch</strong> dele, acrescente uma segunda tabela para usuários, adicione campos de login e senha ao <code>login.html</code>, salve um usuário cadastrado e então confira um login enviado contra o banco. Cada etapa consolida algo da L1 — esta aula é deliberadamente uma repetição das mesmas habilidades sobre conteúdo novo.'},
        {type:'code', lbl:'a tabela User', code:`<span class="ck">class</span> <span class="ct2">User</span>(db.<span class="ct2">Model</span>):
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>, autoincrement=<span class="ck">True</span>)
    email    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    password = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">30</span>), nullable=<span class="ck">False</span>)`},
        {type:'code', lbl:'a verificação de login — um laço sobre a tabela de usuários', code:`users_db = <span class="ct2">User</span>.query.<span class="cf">all</span>()

<span class="ck">for</span> user <span class="ck">in</span> users_db:
    <span class="ck">if</span> form_login == user.email <span class="ck">and</span> form_password == user.password:
        session[<span class="cs">'user_email'</span>] = user.email   <span class="cc"># lembra quem está logado</span>
        <span class="ck">return</span> <span class="cf">redirect</span>(<span class="cs">'/index'</span>)

<span class="cc"># nenhuma correspondência na tabela → mostra um erro</span>
error = <span class="cs">'Login ou senha incorretos'</span>
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'login.html'</span>, error=error)`},
        {type:'text', h:'A sessão é o que torna o diário pessoal', b:'Uma vez definido <code>session[\'user_email\']</code>, a rota inicial pode filtrar as entradas daquele usuário: <code>Card.query.filter_by(user_email=email).all()</code>. Isso exige que <code>app.secret_key</code> esteja definido e que a tabela <code>Card</code> tenha ganhado uma coluna <code>user_email</code>. Aponte a diferença entre <code>.all()</code> e <code>.filter_by(...).all()</code> — é a ideia inteira de “meus dados” numa linha.'},
        {type:'warn', txt:'Diga a ressalva de segurança em voz alta, em uma frase: <strong>aplicações reais nunca guardam a senha em si</strong> — guardam uma impressão digital embaralhada dela, chamada hash, para que nem o desenvolvedor consiga lê-la. Estamos pulando isso hoje para o laço de comparação continuar visível. Dez segundos de honestidade evitam um hábito genuinamente ruim, e alunos nesse nível vão encontrar hashing em breve.'},
        {type:'tip', txt:'A <code>secret_key</code> do código da aula é um marcador de um projeto didático. Diga aos alunos que num app publicado de verdade a chave secreta é secreta — não vai para o GitHub — pelo mesmo motivo que um token de bot não vai. Isso liga direto ao Módulo 1.'},
        {type:'warn', txt:'Adicionar a classe <code>User</code> faz o antigo arquivo <code>.db</code> não ter essa tabela. A solução ensinada aqui é direta: <strong>apagar o arquivo de banco antigo e criar um novo pelo terminal.</strong> Avise os alunos antes — isso apaga as entradas de diário que eles acabaram de fazer.'}
      ]},
      {t:'🚀 L3 — Deploy no PythonAnywhere (EduScrum)', cards:[
        {type:'text', h:'O que deploy significa para estes alunos', b:'Até agora o app deles só rodou na própria máquina. O <strong>PythonAnywhere</strong> coloca-o na internet com uma URL real. Apresente o painel, ajude todos a se cadastrarem e então conduza o deploy: enviar e descompactar os arquivos, instalar as bibliotecas, criar uma aplicação web apontando para <code>main.py</code>, substituir o código remoto pelo código local deles, editar o <strong>arquivo de configuração WSGI</strong> na página Web, adicionar o código de criação do banco e recarregar a aplicação.'},
        {type:'tip', txt:'O arquivo WSGI é a etapa que quebra deploys silenciosamente — os alunos pulam porque ele não faz parte do código do projeto deles. Diga o que ele é: o arquivo que o servidor lê para achar a sua aplicação. Peça que todos te mostrem a edição do WSGI antes de clicar em recarregar, e mantenha abertas as páginas de log de erro do servidor e da aplicação, porque é ali que mora o diagnóstico.'},
        {type:'text', h:'O segundo sprint: testes e público-alvo', b:'Depois do deploy, os alunos <strong>testam o app publicado e comparam com a versão local</strong> — um hábito genuinamente útil, porque “na minha máquina funciona” é o bug mais antigo do software. Depois a discussão de público-alvo volta, agora mirando o portfólio que eles constroem na próxima aula: qual é o objetivo do seu projeto e para quem ele é? Eles registram as respostas no diário que construíram.'},
        {type:'good', txt:'Este é um momento satisfatório de nomear em voz alta. Um aluno já pode mandar um link a um amigo ou a um responsável e vê-lo usar aquilo que ele construiu. Peça que façam isso — um público fora da sala é a motivação mais forte disponível para você.'}
      ]},
      {t:'💼 L4 — O site de portfólio e a marca da metade', cards:[
        {type:'text', h:'Três sprints, uma entrega', b:'<strong>Sprint 1 — materiais:</strong> baixar o template e usar o diário para registrar o que vão precisar, escolhendo paleta de cores, imagens e textos. <strong>Sprint 2 — desenvolvimento:</strong> colocar os materiais no site, construir uma vitrine dinâmica de projetos com Jinja e processar um formulário de feedback. <strong>Sprint 3 — testes e código aberto:</strong> testar e publicar num repositório público. Retrospectiva depois de cada um.'},
        {type:'hi', h:'Esta aula revisa a trilha web inteira', b:'Nada de novo é introduzido. O portfólio exige elementos dinâmicos de Jinja, criação e processamento de formulário, escolhas de cor e layout e uma publicação no Git — que é exatamente o objetivo. Se um aluno consegue construir isso sozinho, a metade web do curso pegou. Se não consegue, você agora sabe exatamente qual aula revisitar.'},
        {type:'text', h:'Fim do Tópico 2 — o marco dos 50%', b:'O Módulo 4 do curso fecha o tópico de Flask e o meio do Python Pro. Diga isso direito: eles estão a <strong>50% de um curso avançado</strong>, que pouquíssimas pessoas terminam. Depois conecte para a frente — pergunte o que gostariam de fazer com essas habilidades e deixe que respondam. A lição de casa avaliada é refinar o portfólio, valendo até 50 pontos pela ferramenta de avaliação.'},
        {type:'tip', txt:'O portfólio tem vida além do curso. Incentive os alunos a mantê-lo atualizado a cada projeto seguinte — o bot com IA do Módulo 7, o projeto de formatura do Módulo 10. Um site de portfólio que cresce vale mais para eles do que qualquer certificado.'}
      ]}
    ],
    quiz:[
      {q:'Qual é a ideia central do método LiveCoding usado em M4L1?', opts:['O tutor constrói o código gradualmente com os alunos, para que vejam programar como um processo de decisões e não como um resultado pronto','O tutor programa em silêncio e os alunos copiam a tela','Os alunos programam sozinhos enquanto o tutor observa','O tutor mostra o código pronto e o explica depois'], c:0, fb:'LiveCoding significa escrever o código junto, narrando as decisões, fazendo pausas e até cometendo erros de propósito para os alunos acharem.'},
      {q:'Um aluno escreveu Card(...) e db.session.add(card), mas nada aparece no banco. O que está faltando?', opts:['db.session.commit() — o add prepara a mudança, o commit a salva','Uma primary_key na tabela','Um render_template depois de salvar','Reiniciar o servidor Flask'], c:0, fb:'add() e depois commit() é o par. Sem o commit o registro nunca é gravado, e nenhum erro aparece para te avisar.'},
      {q:'Por que o curso ensina classes DEPOIS de os alunos já terem construído a tabela do banco?', opts:['Porque a essa altura eles têm uma pergunta real — “por que escrevemos class?” — e o próprio Flask é uma classe que eles vêm usando desde o começo','Porque classes são difíceis demais para introduzir no início de uma aula','Porque o SQLAlchemy exige essa ordem','Para ganhar tempo no plano de aula'], c:0, fb:'A tabela vem primeiro e então a teoria responde à pergunta que ela criou — e o exemplo mais forte é que o Flask é ele mesmo uma classe, com métodos próprios.'},
      {q:'O que faz o diário mostrar apenas as entradas do próprio usuário logado?', opts:['O e-mail do usuário é guardado na session no login, e a rota inicial usa Card.query.filter_by(user_email=email).all()','Cada usuário ganha um arquivo de banco próprio','A tabela Card é apagada entre logins','O Jinja filtra as entradas no template'], c:0, fb:'session[\'user_email\'] mais filter_by é o mecanismo inteiro — e ele exige app.secret_key definido para que as sessões funcionem.'},
      {q:'O projeto de M4L2 guarda senhas em texto puro. O que você deve dizer aos alunos?', opts:['Dizer em uma frase que aplicações reais guardam um hash em vez da senha, e que isso é uma simplificação deliberada para manter a lógica visível','Nada — só confundiria neste nível','Que texto puro está ok desde que o arquivo do banco seja local','Que eles nunca mais devem construir um formulário de login'], c:0, fb:'Uma ressalva breve e honesta custa dez segundos e evita um hábito genuinamente ruim. A simplificação é aceitável; deixá-la sem menção não é.'},
      {q:'Depois de adicionar a classe User, os alunos recebem “no such table”. Qual é a solução ensinada nesta aula?', opts:['Apagar o arquivo .db antigo e criar um novo pelo terminal — avisando antes que isso apaga as entradas existentes','Renomear a classe User para combinar com o arquivo','Reinstalar o flask_sqlalchemy','Adicionar nullable=True a todas as colunas'], c:0, fb:'O arquivo de banco antigo foi criado antes de a classe existir. M4L2 faz os alunos apagarem e recriarem — então avise sobre a perda de dados.'},
      {q:'Qual etapa do PythonAnywhere os alunos mais pulam, e para que ela serve?', opts:['Editar o arquivo de configuração WSGI — é o que o servidor lê para achar a sua aplicação','Escolher um nome de usuário — ele vira a URL','Instalar o Python — o PythonAnywhere precisa que ele seja enviado','Definir debug=True no servidor'], c:0, fb:'O arquivo WSGI não faz parte do código do projeto, então é esquecido. Sem ele os deploys falham silenciosamente, e é por isso que os logs de erro importam.'},
      {q:'Por que M4L3 faz os alunos testarem o app publicado contra a versão local?', opts:['Porque o comportamento pode diferir entre local e produção — “na minha máquina funciona” é um modo de falha real','Para verificar a velocidade da internet','Porque o PythonAnywhere exige um teste antes de publicar','Para comparar tempos de carregamento no relatório'], c:0, fb:'Comparar o app publicado com o local é um hábito genuíno de engenharia, e esta é a primeira vez no curso em que os alunos têm dois ambientes para comparar.'},
      {q:'Qual é o propósito do site de portfólio em M4L4?', opts:['Ele revisa a trilha web inteira — Jinja, formulários, layout e Git — para que você veja exatamente o que pegou e o que não pegou','Introduzir layout avançado em CSS','Substituir o projeto de formatura','Praticar deploy uma segunda vez'], c:0, fb:'Nada de novo é ensinado. O portfólio exige Jinja dinâmico, processamento de formulário, escolhas de design e publicação — um diagnóstico e uma entrega ao mesmo tempo.'}
    ]
  },
  {
    id:9, emoji:'📊', color:'#2BB3E8',
    title:'M5 — Dados, Scraping, PLN e Visão Computacional',
    desc:'Módulo 5 do curso: mitos sobre IA, Google Colab, imagens como pixels, rembg e OpenCV, scraping com BeautifulSoup e pandas, PLN com NLTK e treinar um classificador no Teachable Machine.',
    obj:'Ensine as bases de dados do bloco de IA. Você deve saber conduzir a atividade de pesquisa de mitos e fatos, usar o Google Colab com segurança, explicar imagens como dados de pixel, ensinar os limites legais e éticos do scraping, explicar o que é um pipeline e o papel do NLTK nele, e conduzir uma competição de treino no Teachable Machine.',
    prep:'~5 horas. Tudo no Colab; rode você mesmo todas as células.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 5 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Montou um notebook no Colab com células de código e de markdown, e enviou imagens para a sessão',
        'Removeu o fundo de uma imagem com <code>rembg</code> e compôs um novo fundo com OpenCV',
        'Escreveu texto sobre uma imagem com OpenCV',
        'Abriu as ferramentas de desenvolvedor do navegador e identificou a tag e a classe que contêm um trecho de conteúdo da página',
        'Fez scraping de uma página com <code>BeautifulSoup</code> e depois transformou isso num crawler sobre várias seções',
        'Montou um <code>DataFrame</code> do pandas e o salvou com <code>to_csv</code> — e guardou o arquivo',
        'Rodou o sumarizador do NLTK de ponta a ponta, incluindo <code>stopwords</code> e <code>FreqDist</code>',
        'Treinou um classificador no Teachable Machine e o testou com uma imagem que ele nunca tinha visto',
        'Treinou de propósito um modelo ruim e viu-o errar com toda a confiança'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> o que é IA (por pesquisa, não por exposição), Google Colab e substituir o fundo de uma imagem; <strong>L2</strong> scraping, parsing e crawling com <strong>BeautifulSoup</strong> e <strong>pandas</strong>; <strong>L3</strong> PLN com <strong>NLTK</strong>, list comprehensions e um sumarizador de textos; <strong>L4</strong> visão computacional, datasets e treinar um classificador no <strong>Google Teachable Machine</strong>.',
          why:'Tudo nos Módulos 6 e 7 do curso roda sobre isto. IA é dado antes de tudo — e um aluno que não entende o que é um dataset vai treinar um modelo inútil e culpar o código.',
          learn:'Os alunos pesquisam mitos sobre IA e defendem as respostas, montam notebooks no Colab, recortam um fundo com <code>rembg</code> e compõem outro com OpenCV, coletam centenas de notícias num CSV, escrevem uma função que resume um artigo e treinam e testam o próprio classificador de imagens.',
          confident:'Que a IA moderna é <em>fraca</em>; células do Colab e a sessão temporária; imagens como matrizes de pixels; scraping, parsing e crawling <strong>e as regras</strong>; <code>find</code>/<code>find_all</code> mais um DataFrame do pandas; tokenização e lematização; e por que a qualidade do dataset decide a qualidade do modelo.'
        }
      ]},
      {t:'🔬 L1 — Mitos sobre IA, Colab e fundos de imagem', cards:[
        {type:'text', h:'Ensine a teoria como uma investigação', b:'Não exponha. Divida os alunos em salas simultâneas de duas a quatro pessoas e dê <strong>dez minutos</strong> com um conjunto de afirmações sobre IA. A tarefa não é apenas dizer quais são mitos, mas <strong>justificar a resposta com evidência</strong>. Qualquer fonte vale — o ideal é que usem buscadores por conta própria. Se um grupo não se organizar sozinho, atribua uma pessoa por afirmação.'},
        {type:'qa', h:'Os mitos e fatos, com as respostas', items:[
          {k:'“A IA pode substituir humanos em todas as profissões.”', v:'<strong>Mito.</strong> A IA pode substituir humanos em muitas áreas, mas não inteiramente — falta a ela empatia, pensamento criativo e intuição.'},
          {k:'“A IA moderna é inteligência forte.”', v:'<strong>Mito.</strong> Há três níveis — fraca, forte e superinteligência — e a IA de hoje é classificada como <strong>fraca</strong>, porque não consegue pensar nem ter consciência de si.'},
          {k:'“A IA não consegue explicar suas decisões.”', v:'<strong>Verdade, por enquanto.</strong> IA explicável é uma área ativa de pesquisa, mas os modelos atuais decidem em grande parte em modo “caixa-preta”.'},
          {k:'“É preciso dados, um algoritmo e recursos computacionais.”', v:'<strong>Verdade.</strong> Dados para aprender, um algoritmo para treinar e uma máquina potente o bastante — em geral recursos de nuvem para treinar do zero.'}
        ]},
        {type:'text', h:'Google Colab, em dez minutos', b:'Os alunos entram com uma conta Google, criam um notebook <code>.ipynb</code> no Drive e rodam <strong>duas ou três células de código e uma de markdown</strong>. Garanta que todos consigam criar uma célula e executá-la — esse é o critério de sucesso inteiro. Depois mostre como enviar imagens para a sessão atual e, no fim da aula, como <strong>compartilhar</strong> um notebook com permissão de visualizar ou editar.'},
        {type:'warn', txt:'O que vai pegar toda turma: <strong>as sessões do Colab são temporárias.</strong> Arquivos enviados somem quando a sessão reinicia, e <em>todas as células precisam ser executadas, na ordem,</em> para que as seguintes funcionem. Diga isso no início e conte que vai precisar repetir. Para turmas mais fortes, mostre como montar o Google Drive.'},
        {type:'text', h:'Imagens são números', b:'Antes de qualquer biblioteca, explique como uma imagem é armazenada: uma grade de <strong>pixels</strong>, cada um guardando valores de cor. É esse enquadramento que faz o resto do módulo fazer sentido — preencher um fundo é aritmética sobre esses valores, e um classificador é uma função sobre eles. A boa pergunta diagnóstica que a aula usa: quantos pixels há numa imagem 6×6, e de que cor é uma imagem cujos valores de pixel estão todos em 500?'},
        {type:'code', lbl:'recortando o fundo com rembg', code:`<span class="cc"># no Colab, ! executa um comando do sistema operacional</span>
<span class="cc"># !pip install rembg</span>
<span class="cc"># !pip install onnxruntime   ← o rembg também precisa disto</span>

<span class="ck">from</span> rembg <span class="ck">import</span> remove

input_path  = <span class="cs">'photo.png'</span>      <span class="cc"># precisa ser o caminho real da imagem</span>
output_path = <span class="cs">'output.png'</span>

<span class="ck">with</span> <span class="cf">open</span>(input_path, <span class="cs">'rb'</span>) <span class="ck">as</span> i:
    <span class="ck">with</span> <span class="cf">open</span>(output_path, <span class="cs">'wb'</span>) <span class="ck">as</span> o:
        o.<span class="cf">write</span>(<span class="cf">remove</span>(i.<span class="cf">read</span>()))`},
        {type:'code', lbl:'compondo o novo fundo com OpenCV', code:`<span class="ck">import</span> cv2

image  = cv2.<span class="cf">imread</span>(<span class="cs">'output.png'</span>, cv2.IMREAD_UNCHANGED)
back   = cv2.<span class="cf">imread</span>(<span class="cs">'/content/background.jpg'</span>)

result = <span class="cf">change_back</span>(back, image)   <span class="cc"># a função que os alunos analisam</span>
cv2.<span class="cf">imwrite</span>(<span class="cs">"result.png"</span>, result)`},
        {type:'tip', txt:'Faça os alunos acharem o trecho de remoção de fundo <strong>na própria documentação do rembg</strong> em vez de entregá-lo, e então destaque a única linha que sempre erram: o caminho real da imagem deles. A lição de casa estende isso com texto via OpenCV para que a imagem vire um meme — vale até 20 pontos, avaliado pelo encaixe sensato da legenda na imagem.'}
      ]},
      {t:'🕸️ L2 — Scraping, parsing e crawling', cards:[
        {type:'text', h:'Por que coletamos dados', b:'Abra pelo valor do dado. A internet está cheia de datasets, mas a maioria é vaga ou incompleta, e bons dados de treino são raros e caros. Então, para treinar a nossa própria IA, <strong>temos de preparar os dados nós mesmos</strong> — que é o que esta aula faz, terminando com 600 entradas de notícias num único arquivo.'},
        {type:'qa', h:'Os três termos, distinguidos', items:[
          {k:'Crawling', v:'Varrer automaticamente muitos sites, indo de página em página, reunindo tudo o que é relevante. O mais amplo dos três, e acontece <strong>primeiro</strong>.'},
          {k:'Scraping', v:'Extrair automaticamente informação de uma página web — texto, imagens, preços — lendo o HTML dela.'},
          {k:'Parsing', v:'Analisar a estrutura dos dados para extrair informações específicas: examinar elementos HTML, usar seletores CSS ou XPath para pegar exatamente o que se quer.'}
        ]},
        {type:'warn', txt:'Ensine os limites como parte da habilidade, e não como aviso legal. <strong>Direito autoral</strong> — não use nem redistribua dados protegidos sem permissão. <strong>Termos de uso e políticas de privacidade</strong> — os sites especificam como seus dados podem ser acessados. <strong>robots.txt</strong> — mostra quais partes de um site podem ser rastreadas; verifique e respeite. <strong>Leis de concorrência desleal</strong> em algumas jurisdições. <strong>Legislação de dados pessoais</strong> — nomes, e-mails e telefones estão sob normas como a <strong>LGPD</strong> no Brasil e o GDPR na Europa. Abra o robots.txt do site de prática com a turma e leiam quais seções estão fora de alcance.'},
        {type:'text', h:'Como funciona a parte prática', b:'Mostre as ferramentas de desenvolvedor do navegador — <code>Shift+Ctrl+I</code> no Windows, <code>Option+Cmd+I</code> no Mac — e proponha o enigma: qual tag contém o título da notícia, e a que classe ela pertence? Essa é a habilidade de verdade. Depois eles estendem o notebook de demonstração para coletar não só títulos e links, mas também datas de publicação e contagens de visualização, achando essas tags sozinhos.'},
        {type:'code', lbl:'de uma página a um crawler sobre cinco seções', code:`dict_news = {<span class="cs">"news"</span>: [], <span class="cs">"links"</span>: [], <span class="cs">"views"</span>: [], <span class="cs">"comments"</span>: []}

url   = <span class="cs">'https://www.thescientificteen.org/'</span>
pages = [<span class="cs">"technology"</span>, <span class="cs">"medicine"</span>, <span class="cs">"chemistry"</span>, <span class="cs">"physics"</span>]

<span class="ck">for</span> section <span class="ck">in</span> pages:
    response = requests.<span class="cf">get</span>(url + section + <span class="cs">"/"</span>)
    bs = <span class="ct2">BeautifulSoup</span>(response.text, <span class="cs">"lxml"</span>)
    <span class="ck">for</span> post <span class="ck">in</span> bs.<span class="cf">find_all</span>(<span class="cs">'div'</span>, <span class="cs">'post-list-item-wrapper'</span>):
        dict_news[<span class="cs">"news"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'p'</span>).text)
        dict_news[<span class="cs">"links"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'a'</span>).<span class="cf">get</span>(<span class="cs">'href'</span>))

<span class="cc"># um DataFrame é uma tabela; to_csv o salva para a próxima aula</span>
df_news = pd.<span class="ct2">DataFrame</span>(dict_news)
df_news.<span class="cf">to_csv</span>(<span class="cs">"./saved_data.csv"</span>, index=<span class="ck">False</span>)`},
        {type:'hi', h:'O momento que vale uma pausa', b:'Um laço transforma um scraper de uma página num crawler sobre cinco seções e 600 artigos em menos de um minuto. Diga isso em voz alta — é a primeira vez no curso em que uma pequena quantidade de código faz um volume de trabalho que nenhum humano tentaria à mão. É essa sensação que faz o bloco de IA começar aqui.'},
        {type:'tip', txt:'Garanta que todos salvem o CSV e guarde uma cópia sua: a <strong>próxima aula depende dele</strong>, e o plano manda compartilhá-lo no chat para quem tiver perdido o seu. A lição de casa é análise com pandas sobre um CSV fornecido — <code>.min()</code>, <code>.max()</code>, filtros, <code>.sum()</code> — o que também os prepara para a próxima aula.'}
      ]},
      {t:'📝 L3 — PLN, pipelines e o sumarizador', cards:[
        {type:'text', h:'List comprehensions primeiro, como recurso do Python', b:'Um aquecimento curto: em Python é comum comprimir várias linhas em uma. Dê aos alunos as duas versões do mesmo código e faça com que <em>eles</em> expliquem a diferença — a comprehension <code>[word.lower() for word in words if word.isalpha()]</code> contra o laço <code>for</code> clássico com <code>append()</code>. Seja honesto sobre o trade-off: a comprehension é compacta e elegante, o laço é mais legível e dá controle mais fino. A escolha depende da situação.'},
        {type:'text', h:'O que é um pipeline', b:'Uma sequência de etapas de processamento em que a saída de cada uma alimenta a seguinte. Percorra o algoritmo de sumarização como discussão antes de qualquer código: dividir em frases → dividir em palavras → remover <strong>stop words</strong> → reduzir cada palavra à forma base → contar frequências → pontuar cada frase pela frequência de suas palavras → manter as melhores frases → remontá-las na ordem original.'},
        {type:'code', lbl:'o sumarizador, como função reutilizável', code:`<span class="ck">def</span> <span class="cf">summarization</span>(text, sent_number=<span class="cn">3</span>):
    sentences  = <span class="cf">sent_tokenize</span>(text, language=<span class="cs">'english'</span>)
    stop_words = <span class="cf">set</span>(stopwords.<span class="cf">words</span>(<span class="cs">'english'</span>))

    words = <span class="cf">word_tokenize</span>(text)
    words = [w.<span class="cf">lower</span>() <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w.<span class="cf">isalpha</span>()]
    words = [w <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w <span class="ck">not</span> <span class="ck">in</span> stop_words]

    freq_dist = <span class="ct2">FreqDist</span>(words)          <span class="cc"># com que frequência cada palavra aparece</span>

    sentence_scores = {}
    <span class="ck">for</span> i, sentence <span class="ck">in</span> <span class="cf">enumerate</span>(sentences):
        sentence_words = <span class="cf">word_tokenize</span>(sentence.<span class="cf">lower</span>())
        sentence_scores[i] = <span class="cf">sum</span>([freq_dist[w] <span class="ck">for</span> w <span class="ck">in</span> sentence_words
                                  <span class="ck">if</span> w <span class="ck">in</span> freq_dist])

    <span class="cc"># as frases com melhor pontuação, recolocadas na ordem de leitura</span>
    best = <span class="cf">sorted</span>(sentence_scores.<span class="cf">items</span>(), key=<span class="ck">lambda</span> x: x[<span class="cn">1</span>], reverse=<span class="ck">True</span>)
    best = <span class="cf">sorted</span>(best[:sent_number])

    <span class="ck">return</span> <span class="cs">' '</span>.<span class="cf">join</span>([sentences[i] <span class="ck">for</span> i, _ <span class="ck">in</span> best])`},
        {type:'hi', h:'Conduza a exploração do NLTK como uma corrida', b:'Em vez de listar as funções, coloque os alunos em salas simultâneas de dois ou três com o notebook de exemplo e dê <strong>cinco minutos para acharem quantas funções do NLTK conseguirem</strong>, ajudando uns aos outros. Depois reúna todos e junte os achados. As funções são aprendidas; a escuta passiva não acontece.'},
        {type:'text', h:'E então isso escala', b:'O motivo de empacotar o algoritmo numa função é o que vem em seguida: eles percorrem os links coletados na L2 e resumem <strong>dez artigos reais</strong>. Os dados coletados por eles, a função escrita por eles, rodando sozinha — é o pipeline completo, e vale nomear isso assim.'},
        {type:'tip', txt:'A distinção que os alunos confundem é <strong>tokenização e lematização</strong>. A tokenização divide o texto em pedaços (frases ou palavras). A lematização reduz uma palavra à forma base, para que “correndo” e “correu” contem como uma só. As duas estão no pipeline, fazendo trabalhos diferentes — é uma das perguntas de revisão do fechamento.'}
      ]},
      {t:'👁️ L4 — Visão computacional e o classificador', cards:[
        {type:'text', h:'O problema, e por que ele é bom', b:'Alimentar pássaros: espécies diferentes precisam de alimentos diferentes — pão faz mal a patos, grãos fazem bem a pardais. Então um app que identifica uma ave e diz o que dar a ela tem um público genuinamente amplo. Concreto, inofensivo, e precisa exatamente de uma capacidade de IA: <strong>classificação</strong>.'},
        {type:'hi', h:'Teoria como jogo — jogo da velha', b:'Divida num time X e num time O. Você faz uma pergunta; qualquer fonte vale — plataforma, internet, anotações; o <strong>mesmo aluno não pode responder duas vezes seguidas</strong>; uma resposta certa ganha uma casa. Se a resposta estiver errada, passa para os outros alunos. Corrija respostas erradas explicitamente, porque a turma inteira precisa ouvir a certa.'},
        {type:'qa', h:'As perguntas e as respostas', items:[
          {k:'O que é visão computacional?', v:'Um ramo da IA em que um computador é treinado para distinguir objetos numa imagem.'},
          {k:'O que é classificação?', v:'Separar objetos em classes — gatos/cães/esquilos, memes engraçados/memes constrangedores.'},
          {k:'O que pode ser o modelo?', v:'Uma rede neural.'},
          {k:'O que mais é preciso além do modelo?', v:'Um dataset.'},
          {k:'O que se mostra à rede durante o treino?', v:'Uma imagem <em>e a classe dela</em>.'},
          {k:'A qualidade do dataset importa?', v:'Sim — ela decide a qualidade do modelo. Melhore-a acrescentando mais dados e mais variados.'}
        ]},
        {type:'text', h:'Montando o dataset direito', b:'Os alunos exploram o dataset fornecido — que classes existem, quantas imagens de treino por classe — depois o baixam e acrescentam duas ou três imagens próprias por classe. Enfatize que a <strong>qualidade dos objetos na amostra de treino importa</strong>. Em seguida cada aluno procura <strong>uma imagem de teste</strong>, e aqui está a regra que precisa pegar: a imagem de teste tem de ser uma que o modelo <strong>nunca viu</strong>. Caso contrário o modelo está apenas colando.'},
        {type:'text', h:'O treino e a competição', b:'Mostre a configuração do Teachable Machine, treine o classificador, envie uma imagem de teste e leia a resposta. Depois deixe que explorem os <strong>parâmetros de treino</strong> — e garanta que saibam <strong>salvar o projeto</strong>, porque o Módulo 6 precisa do modelo exportado. Por fim, uma competição de verdade: sete minutos para deixar o modelo o mais preciso possível, por qualquer meio. Você envia uma imagem; o modelo mais preciso vence, e o vencedor explica como treinou.'},
        {type:'good', txt:'A explicação do vencedor é o minuto mais valioso da aula. Ele quase sempre vai dizer “eu adicionei mais imagens” ou “eu adicionei mais variedade” — que é a ideia inteira da aula, alcançada por experimento e não por afirmação. Deixe que ele ensine.'},
        {type:'tip', txt:'A lição de casa acrescenta outra classe ao modelo — uma espécie de ave que vive perto do aluno — o que discretamente prepara o modelo que eles vão importar no código do próximo módulo. Jogos e competições aqui existem para apresentar teoria num formato incomum e manter o engajamento alto; não os trate como enrolação opcional.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno diz “a IA de hoje é inteligência forte — ela consegue pensar”. Como você corrige, segundo o material do curso?', opts:['A IA moderna é classificada como fraca: não consegue pensar nem ter consciência de si. IA forte e superinteligência são os outros dois níveis','Ele está certo — os modelos atuais raciocinam como humanos','Os três níveis são estreita, ampla e geral, e a IA é ampla','A IA não tem níveis; essa classificação é um mito'], c:0, fb:'A atividade de mitos em M5L1 traz exatamente essa afirmação como mito: cientistas da computação classificam a IA contemporânea como fraca porque lhe faltam pensamento e autoconsciência.'},
      {q:'Os alunos voltam ao Colab e o modelo e as imagens sumiram. Por quê?', opts:['As sessões do Colab são temporárias — arquivos enviados somem quando a sessão reinicia, e todas as células precisam ser reexecutadas na ordem','O Colab apaga arquivos que violam seus termos','Eles esqueceram de salvar o notebook como .py','O Google Drive deles estava cheio'], c:0, fb:'Isso pega toda turma. Avise de antemão; para grupos mais fortes, monte o Google Drive para que os arquivos persistam.'},
      {q:'Qual é a relação correta entre crawling, scraping e parsing?', opts:['O crawling vem primeiro e é o mais amplo — varrer muitos sites; o scraping extrai informação de uma página; o parsing analisa a estrutura para retirar dados específicos','O parsing vem primeiro, depois o crawling, depois o scraping','São três nomes para a mesma operação','Scraping é legal, crawling e parsing não são'], c:0, fb:'M5L2 coloca o crawling primeiro e como o mais amplo, com scraping e parsing como as etapas de extração feitas sobre as páginas coletadas.'},
      {q:'Antes de fazer scraping de um site com os alunos, qual arquivo você verifica, e por quê?', opts:['robots.txt — ele especifica quais partes do site podem ser rastreadas e indexadas, e essas restrições precisam ser respeitadas','index.html — para ver a estrutura da página','sitemap.css — para achar as classes de estilo','license.txt — para conferir o titular do direito autoral'], c:0, fb:'O robots.txt é uma das cinco regras ensinadas nesta aula, junto com direito autoral, termos de uso e política de privacidade, concorrência desleal e legislação de dados pessoais como a LGPD e o GDPR.'},
      {q:'O que de fato transforma o scraper de uma página num crawler que coleta 600 artigos?', opts:['Um laço sobre uma lista de nomes de seção, requisitando cada uma por vez','Uma segunda instância do BeautifulSoup','Salvar em CSV em vez de imprimir','Trocar find por find_all'], c:0, fb:'Um laço sobre a lista de seções é a mudança inteira — e é isso que torna a escala tão impressionante para os alunos.'},
      {q:'Qual a diferença entre tokenização e lematização?', opts:['A tokenização divide o texto em frases ou palavras; a lematização reduz uma palavra à forma base para que as variantes contem como uma só','São a mesma etapa com dois nomes','A tokenização remove stop words; a lematização conta frequências','A lematização divide o texto; a tokenização o normaliza'], c:0, fb:'As duas são etapas do pipeline de sumarização com trabalhos diferentes — e distingui-las é uma das perguntas de revisão do fechamento da aula.'},
      {q:'Como o sumarizador decide quais frases manter?', opts:['Ele pontua cada frase pela frequência das palavras que ela contém, mantém as de maior pontuação e as recoloca na ordem original','Ele mantém as três primeiras frases do artigo','Ele escolhe as frases mais longas','Ele pede a um modelo de linguagem que reescreva o texto'], c:0, fb:'A distribuição de frequência sobre palavras limpas e lematizadas dá uma pontuação a cada frase; as melhores são reordenadas na ordem de leitura para que o resumo flua.'},
      {q:'Um aluno quer testar o classificador com uma das próprias imagens de treino. O que você diz?', opts:['A imagem de teste precisa ser uma que o modelo nunca viu — caso contrário você não está testando, está deixando ele colar','Tudo bem, já que as classes são as mesmas','Só se ele usar pelo menos três imagens','Não faz diferença para modelos do Teachable Machine'], c:0, fb:'A amostra de teste precisa conter imagens novas. A aula formula exatamente assim — não queremos que nossos modelos colem.'},
      {q:'O classificador de um aluno está indo mal. Onde ele deve olhar primeiro?', opts:['No dataset — mais imagens e mais variedade é o que melhora o modelo','No código que carrega a imagem','Nos parâmetros de treino, que são a única alavanca real','No navegador em que treinou'], c:0, fb:'A qualidade do dataset determina a qualidade do modelo. É a resposta a que as perguntas do jogo da velha levam, e a que o vencedor da competição quase sempre dá.'},
      {q:'Por que a aula M5L4 usa jogo da velha e uma competição de treino em vez de uma apresentação?', opts:['Para apresentar a teoria num formato incomum e manter os alunos ativamente engajados — os jogos são o método de entrega, não enrolação','Porque a teoria é rasa demais para preencher o tempo','Para decidir quais alunos seguem para o Módulo 6','Porque a plataforma exige um jogo por aula'], c:0, fb:'A própria nota da aula diz que o objetivo dos jogos e da competição é apresentar a teoria de forma incomum e engajar os alunos no processo educacional.'}
    ]
  },
  {
    id:10, emoji:'🧠', color:'#EC4899',
    title:'M6 — Redes Neurais e Detecção de Objetos',
    desc:'Módulo 6 do curso: exportar um modelo para o código com Keras, gerar imagens e a competição IA contra real, cartas comerciais, detecção e segmentação com ImageAI/YOLO e construir uma solução escolhida pelo próprio aluno.',
    obj:'Ensine os alunos a rodar um modelo treinado a partir do Python e a distinguir as três tarefas de visão computacional. Você deve saber importar um modelo do Teachable Machine no Colab, resolver o conflito de versões, conduzir a competição de geração de imagens com responsabilidade, explicar classificação, detecção e segmentação, usar o ImageAI e conduzir um brainstorm que produza uma ideia construível.',
    prep:'~5 horas. Espere brigar com versões de biblioteca; é esse o ponto.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 6 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Exportou um modelo do Teachable Machine, descompactou no Colab e carregou com <code>tf_keras</code>',
        'Esbarrou no erro de versão do <code>DepthwiseConv2D</code> e corrigiu com as versões fixadas',
        'Escreveu uma função que recebe uma imagem e devolve um nome de classe e uma confiança',
        'Confirmou que o modelo força uma imagem sem relação para dentro de uma das classes conhecidas',
        'Gerou imagens com prompts e montou um dataset de duas classes com imagens geradas e reais',
        'Rodou detecção com <code>ImageAI</code>/YOLOv3 e filtrou os resultados pelo nome do objeto',
        'Comparou a detecção numa foto poluída e numa foto limpa, para ver por que o fundo importa',
        'Construiu um pequeno script próprio de ponta a ponta que usa um modelo para resolver um problema inventado'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> exportar o modelo treinado e rodá-lo pelo código com <strong>Keras</strong>; <strong>L2</strong> uma competição em equipes treinando um modelo para distinguir fotos reais de imagens geradas por IA; <strong>L3</strong> estrutura de carta comercial, <strong>detecção e segmentação</strong> com ImageAI/YOLO e um brainstorm; <strong>L4</strong> uma aula de EduScrum em que os alunos constroem a própria solução para um problema que escolheram.',
          why:'Um modelo que só vive numa aba do navegador não é software. É aqui que a IA dos alunos vira programa — e onde eles encontram a diferença entre uma demonstração e uma capacidade que dá para entregar.',
          learn:'Os alunos exportam um modelo <code>.h5</code>, carregam com <code>tf_keras</code>, escrevem uma função que devolve classe e confiança, geram imagens com prompts, montam um dataset compartilhado, detectam usuários da via numa foto com YOLO e constroem um script que automatiza um problema cotidiano escolhido por eles.',
          confident:'Exportar e descompactar o modelo; as versões fixadas das bibliotecas e o erro do <code>DepthwiseConv2D</code>; que um modelo só reconhece as classes que lhe foram mostradas; classificação, detecção e segmentação; engenharia de prompt; e as regras do brainstorm.'
        }
      ]},
      {t:'⚙️ L1 — Rodando o modelo pelo código (Keras)', cards:[
        {type:'text', h:'Usar–Modificar–Criar de novo', b:'Esta aula roda no <strong>UMC</strong>: os alunos primeiro <em>usam</em> o código que o Teachable Machine entrega e conferem que funciona, e só então implementam a própria lógica em cima dele. Mostre como exportar o modelo, adicionar o projeto baixado à sessão do Colab e descompactar com <code>!unzip ./converted_keras.zip</code>. Para uma turma forte, conecte o Google Drive em vez disso.'},
        {type:'code', lbl:'as versões fixadas e os imports que realmente funcionam', code:`<span class="cc"># fixe as versões — não depure isso ao vivo, apenas cole</span>
<span class="cc"># !pip install -q tf-keras==2.19.0 h5py==3.11.0</span>

<span class="ck">import</span> tf_keras <span class="ck">as</span> keras       <span class="cc"># versão do Keras compatível com modelos .h5</span>
<span class="ck">from</span> tf_keras.models <span class="ck">import</span> load_model
<span class="ck">from</span> PIL <span class="ck">import</span> Image, ImageOps  <span class="cc"># Pillow, instalado no lugar do PIL</span>
<span class="ck">import</span> numpy <span class="ck">as</span> np

<span class="cc"># clique com o botão direito no modelo no Colab → Copiar caminho, e cole aqui</span>
model = <span class="cf">load_model</span>(<span class="cs">"PATH_TO_MODEL"</span>, compile=<span class="ck">False</span>)`},
        {type:'text', h:'O que dizer sobre o Keras', b:'O Keras faz parte do <strong>TensorFlow</strong>; nas versões modernas está disponível como <code>tf.keras</code>. Como o modelo exportado é salvo no formato <code>.h5</code>, o curso usa o <code>tf-keras</code>, a versão compatível com <code>.h5</code> — de resto é a mesma biblioteca. Deixe claro que o punhado de funções que eles usam é uma parte <em>minúscula</em> de uma biblioteca enorme.'},
        {type:'hi', h:'O jogo “todos contra um”', b:'Depois de cinco minutos explorando o código, um aluno vira o <strong>especialista</strong> e responde às perguntas de todos os outros. As perguntas podem ser simples ou difíceis, e tudo bem se quem pergunta também não souber a resposta. Se o especialista empacar, você responde. O especialista vence se responder a tudo; caso contrário a vitória vai para quem fez mais perguntas sem resposta. O propósito real está no plano: isso <strong>ajuda os alunos a superar o medo de formular uma pergunta</strong>. Reforce que não existe pergunta boba.'},
        {type:'warn', txt:'Destaque isto depois do jogo: o modelo <strong>só</strong> consegue distinguir as classes com que foi treinado. Mostre outra coisa a ele e ainda assim vai forçar a entrada, com toda a confiança, para dentro de uma das classes conhecidas. É o mal-entendido mais comum que os alunos têm sobre IA, e aqui eles podem ver acontecer.'},
        {type:'text', h:'E então eles constroem o recurso de verdade', b:'A tarefa: implementar um botão de envio de imagem, usar o código exportado para escrever uma função <code>detect_bird</code> que recebe a imagem, o caminho do modelo e o caminho dos rótulos e devolve o nome da ave e a probabilidade, e fazer o script responder a um envio sugerindo um alimento adequado. A aula fecha com um quiz.'}
      ]},
      {t:'🎨 L2 — Gerado contra real: a competição de IA', cards:[
        {type:'text', h:'O problema, enquadrado com honestidade', b:'Modelos generativos escrevem textos, desenham imagens realistas e fazem animações — e o mesmo poder está disponível para golpistas. Os dois riscos que a aula nomeia: imagens geradas podem carregar <strong>conteúdo negativo ou discriminatório</strong> e podem <strong>parecer fotografias reais</strong>, o que espalha desinformação. Pergunte o que os alunos acham e que problemas preveem. A tarefa nasce da discussão: treinar um modelo para distinguir imagens reais de geradas.'},
        {type:'warn', txt:'Mantenha os prompts em animais, objetos e personagens inventados — <strong>nunca pessoas reais e identificáveis</strong>. A tarefa do próprio curso é deliberadamente sobre gatos. Prepare as pastas do Google Drive de cada equipe <em>antes</em> da aula e, se o gerador pedir pagamento em imagens de alta qualidade, reduza o parâmetro de qualidade em vez de pagar.'},
        {type:'qa', h:'As regras da competição', items:[
          {k:'Estrutura', v:'Três etapas — 30 minutos de preparação de dados, 20 minutos de treino do modelo, 10 minutos de teste.'},
          {k:'Equipes', v:'Você é quem monta, de 3 a 4 alunos cada; os alunos não escolhem. Cada equipe se dá um nome e escolhe um capitão.'},
          {k:'Dados compartilhados, modelos individuais', v:'Todos na equipe usam o mesmo dataset, mas cada aluno treina o próprio modelo.'},
          {k:'Como se vence', v:'Não é o melhor modelo isolado — é a <strong>equipe com a maior acurácia média</strong>. É isso que torna racional ajudar um colega.'}
        ]},
        {type:'text', h:'Engenharia de prompt, em uma frase', b:'Uma consulta a um modelo generativo é um <strong>prompt</strong>, e engenharia de prompt é o ofício de escrever bons prompts: um bom prompt deixa sua intenção clara para o modelo, então você recebe uma resposta mais precisa ou um conteúdo melhor. As equipes geram de 8 a 20 imagens para a classe “gerada”, depois baixam fotos reais para uma pasta “real” separada e enviam as duas para a pasta compartilhada da equipe.'},
        {type:'good', txt:'A regra da “maior média da equipe” é o detalhe mais bem desenhado desta aula. Ela elimina o incentivo de guardar uma boa técnica para si e o substitui pelo incentivo de ensiná-la. Se você não mudar mais nada na forma de conduzir essa competição, mantenha essa regra.'},
        {type:'tip', txt:'Diferencie na etapa de login: enquanto você ajuda os alunos que não conseguem entrar, dê a tarefa adicional aos mais rápidos. A lição de casa é escrever um script que use o modelo deles para um propósito que <em>eles</em> inventem — avaliado por responder às duas classes, rodar sem erros e ter um propósito claro.'}
      ]},
      {t:'🔍 L3 — Detecção, segmentação e a carta', cards:[
        {type:'text', h:'O enquadramento gamificado', b:'A aula abre com uma <strong>carta comercial</strong> encomendando um app de segurança viária. Se seus alunos entrarem no jogo, trate como um e-mail de cliente de verdade; se estiverem envergonhados demais, use apenas para destrinchar a estrutura. De qualquer forma, faça com que leiam e identifiquem os blocos lógicos.'},
        {type:'qa', h:'Os seis blocos de uma carta comercial', items:[
          {k:'1. Assunto', v:'Um enunciado breve e preciso do propósito da carta.'},
          {k:'2. Saudação / introdução', v:'Uma saudação cordial, mais uma breve apresentação — ou uma referência à correspondência anterior.'},
          {k:'3. Corpo principal', v:'A mensagem, a informação ou a proposta: argumentos, detalhes, combinados.'},
          {k:'4. Encerramento', v:'Uma conclusão cordial — agradecimento pela atenção, informações adicionais ou os próximos passos.'},
          {k:'5. Despedida', v:'“Atenciosamente” ou “Cordialmente”, mais o nome e o cargo de quem envia.'},
          {k:'6. Anexos', v:'Uma lista dos documentos ou materiais anexados.'}
        ]},
        {type:'text', h:'As três tarefas de visão computacional', b:'Este é o núcleo conceitual do módulo. <strong>Classificação</strong> — a que classe pertence a <em>imagem inteira</em>? <strong>Detecção</strong> — encontrar e localizar objetos, marcando cada um com uma caixa, mesmo vários de uma vez. <strong>Segmentação</strong> — dividir a imagem em regiões, descobrindo <em>quais pixels</em> pertencem a qual objeto. O exemplo da aula: uma foto de uma pessoa numa floresta. A detecção coloca a pessoa numa caixa; a segmentação divide a imagem em pixels-de-pessoa e pixels-de-floresta.'},
        {type:'code', lbl:'detecção com ImageAI e YOLOv3', code:`<span class="ck">def</span> <span class="cf">detect_objects_on_road</span>(input_image, output_image, model_path):
    detector = <span class="ct2">ObjectDetection</span>()
    detector.<span class="cf">setModelTypeAsYOLOv3</span>()
    detector.<span class="cf">setModelPath</span>(model_path)
    detector.<span class="cf">loadModel</span>()

    <span class="ck">return</span> detector.<span class="cf">detectObjectsFromImage</span>(
        input_image=input_image,
        output_image_path=output_image,
        minimum_percentage_probability=<span class="cn">30</span>   <span class="cc"># limiar de confiança</span>
    )

<span class="ck">def</span> <span class="cf">analyze_objects</span>(detections):
    road = [<span class="cs">"car"</span>, <span class="cs">"motorbike"</span>, <span class="cs">"bicycle"</span>, <span class="cs">"person"</span>,
            <span class="cs">"bus"</span>, <span class="cs">"train"</span>, <span class="cs">"truck"</span>, <span class="cs">"traffic_light"</span>, <span class="cs">"stop_sign"</span>]
    <span class="ck">return</span> [d <span class="ck">for</span> d <span class="ck">in</span> detections <span class="ck">if</span> d[<span class="cs">"name"</span>] <span class="ck">in</span> road]`},
        {type:'hi', h:'Julgue a ferramenta, não só a saída', b:'Avalie a qualidade da detecção com a turma e pergunte quais imagens funcionariam melhor. A conclusão importa: o YOLO funciona melhor quando os objetos <strong>se destacam do fundo</strong>. Depois generalize — ao assumir um trabalho de detecção, você precisa pensar em que tipo de entrada realmente vai receber. Escolher a ferramenta para os dados que você tem é julgamento profissional, e é aqui que os alunos o encontram pela primeira vez.'},
        {type:'text', h:'O brainstorm — e suas regras', b:'Desenvolvedores têm as próprias startups, muitas vezes chamadas de <strong>pet projects</strong>. Duas orientações: construa algo que resolva um problema <em>seu</em> do dia a dia, para que seja útil mesmo que nunca venda; e faça algo útil para um público específico. Depois faça um brainstorm de verdade num quadro compartilhado: todos listam problemas cotidianos, um adesivo por problema, <strong>sem crítica ou avaliação nesta etapa</strong>, quantidade acima de qualidade, cronômetro de cinco minutos. Só depois vocês agrupam pelo grau de dificuldade de construção. Cada aluno escolhe um para construir na próxima aula e descreve o público-alvo dele.'},
        {type:'tip', txt:'Conduza a parte de código como live coding — uma pessoa escreve, as outras acompanham. Se você tiver um aluno forte, entregue o teclado a ele. A tarefa adicional estende o detector recortando cada usuário da via detectado com OpenCV.'}
      ]},
      {t:'🛠️ L4 — Construindo a própria solução (EduScrum)', cards:[
        {type:'text', h:'Três sprints, a ideia deles', b:'<strong>Sprint 1 — preparação:</strong> montar o notebook, preparar os dados, treinar o modelo ou instanciar os objetos de biblioteca de que precisarem. <strong>Sprint 2 — desenvolvimento:</strong> implementar a lógica de inferência e documentar o notebook com comentários e blocos de texto. <strong>Sprint 3 — testes:</strong> testar e listar os bugs e as ideias de melhoria no chat da plataforma. Retrospectiva depois de cada sprint.'},
        {type:'qa', h:'As perguntas de retrospectiva desta aula', items:[
          {k:'1', v:'O que conseguimos? Deu tempo de fazer tudo o que vocês queriam?'},
          {k:'2', v:'Qual parte do script foi a mais difícil?'},
          {k:'3', v:'O que vocês precisam fazer para melhorar aquilo em que estavam trabalhando?'}
        ]},
        {type:'text', h:'Seu trabalho durante o sprint 1', b:'Garanta que cada aluno <strong>entenda de qual tecnologia precisa e o que tem de fazer para usá-la</strong> antes de o desenvolvimento começar. É a primeira vez que eles escolheram o problema sozinhos, então o risco não é a capacidade de programar — é escolher algo sem nenhum caminho de entrada. Pegue isso no sprint 1, e não no sprint 2.'},
        {type:'tip', txt:'Se os alunos travarem durante o desenvolvimento, junte-os em salas simultâneas ou acompanhe cada um individualmente. Documentar o notebook com comentários e blocos de texto não é enfeite — é o hábito sobre o qual a aula de código limpo do Módulo 9 do curso vai se apoiar.'},
        {type:'text', h:'Fim do Tópico 3 — a pessoa cientista de dados', b:'Feche o tópico de IA conectando-o a uma carreira, e pergunte o que eles sabem antes de contar. O enquadramento que o curso oferece: uma pessoa cientista de dados é uma detetive da informação no mundo digital — coleta os dados, limpa-os para que fiquem corretos e então usa ferramentas especializadas para achar padrões e respostas. Depois pergunte quem se sente atraído por isso e se combina com os outros interesses deles.'}
      ]}
    ],
    quiz:[
      {q:'O modelo exportado de um aluno lança “Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”. O que está acontecendo?', opts:['Um conflito de versões de biblioteca — o curso fixa tf-keras==2.19.0 e h5py==3.11.0 no Colab, ou tensorflow==2.15 num projeto pipenv','O arquivo do modelo está corrompido e precisa ser retreinado','A imagem está no tamanho errado','O Colab ficou sem memória'], c:0, fb:'É uma questão de compatibilidade de versões. Tenha os comandos de instalação fixados prontos para colar, em vez de depurar versões na frente da turma.'},
      {q:'Por que o curso usa tf-keras em vez do keras puro para esses modelos?', opts:['O modelo exportado é salvo no formato .h5, e o tf-keras é a versão compatível com .h5 — de resto é a mesma biblioteca','O tf-keras é mais rápido no Colab','O Keras puro não consegue classificar imagens','O tf-keras é a única versão gratuita'], c:0, fb:'O Keras faz parte do TensorFlow e está disponível como tf.keras; como o modelo do Teachable Machine é .h5, o curso usa o tf-keras compatível.'},
      {q:'Um aluno mostra ao classificador de aves uma foto de um carro e ele responde “pardal” com toda a confiança. Qual é a explicação?', opts:['O modelo só conhece as classes com que foi treinado, então força qualquer entrada para dentro de uma delas','O modelo está quebrado e precisa ser retreinado','A resolução da imagem o confundiu','Era preciso usar ImageAI em vez de Keras'], c:0, fb:'M6L1 destaca exatamente isso depois do jogo de perguntas: o modelo nunca viu nenhum outro objeto, então só procura o que conhece.'},
      {q:'Qual é o propósito real do jogo do especialista “todos contra um”?', opts:['Ajudar os alunos a superar o medo de formular uma pergunta — tudo bem não saber a resposta da própria pergunta','Identificar o aluno mais forte do grupo','Testar quem leu a documentação','Preencher o tempo enquanto os modelos treinam'], c:0, fb:'A nota da aula diz diretamente: o jogo ajuda os alunos a superar o medo de formular uma pergunta, e não existe pergunta boba.'},
      {q:'Na competição de IA contra real, quem vence?', opts:['A equipe com a maior acurácia média dos modelos — e não a pessoa com o melhor modelo isolado','O aluno cujo modelo for mais preciso','A equipe que terminar o treino primeiro','A equipe que gerar mais imagens'], c:0, fb:'A regra é deliberada: premiar a média da equipe torna ajudar os colegas algo racional, e não opcional.'},
      {q:'O que você deve dizer aos alunos sobre as imagens que eles geram para o dataset?', opts:['Ficar em animais, objetos e personagens inventados — nunca pessoas reais e identificáveis, porque falsificações realistas espalham desinformação','Qualquer tema serve, desde que as imagens fiquem na pasta da equipe','Gerar só imagens de celebridades, já que há mais referências','O tema da geração não afeta o modelo, então não importa'], c:0, fb:'A aula é construída exatamente sobre esse risco: imagens geradas parecidas com reais levam a desinformação e podem carregar conteúdo discriminatório.'},
      {q:'Qual a diferença entre detecção e segmentação?', opts:['A detecção encontra e enquadra a localização dos objetos; a segmentação descobre quais pixels individuais pertencem a qual objeto ou região','A detecção é para fotos e a segmentação para vídeo','A segmentação acha um objeto, a detecção acha muitos','São a mesma tarefa com bibliotecas diferentes'], c:0, fb:'A classificação rotula a imagem inteira, a detecção localiza e enquadra objetos, e a segmentação divide a imagem em regiões de pixels por objeto.'},
      {q:'Depois de testar o YOLO em várias imagens, a que conclusão os alunos devem chegar?', opts:['Ele funciona melhor quando os objetos se destacam do fundo — então você precisa considerar que entrada seu app vai realmente receber','Ele funciona igualmente bem em qualquer imagem','Ele só detecta veículos','A acurácia depende apenas do limiar de confiança'], c:0, fb:'A aula pede que você discuta quais imagens funcionam melhor e então generalize: escolher a ferramenta adequada à sua entrada real é julgamento profissional.'},
      {q:'Durante a etapa de brainstorm, qual regra você precisa fazer valer?', opts:['Nenhuma crítica ou avaliação de ideias enquanto elas estão sendo geradas — quantidade primeiro, triagem depois','Só ideias realistas e construíveis podem ser anotadas','Cada aluno pode sugerir apenas uma ideia','As ideias precisam ser aprovadas pelo tutor antes de serem adicionadas'], c:0, fb:'A nota de pontos importantes diz para não deixar os alunos avaliarem ideias durante a geração; até as mais absurdas são anotadas, e o agrupamento por viabilidade vem depois.'},
      {q:'O que você precisa verificar durante o Sprint 1 de M6L4, antes de o desenvolvimento começar?', opts:['Que cada aluno entenda de qual tecnologia precisa e o que tem de fazer para usá-la','Que cada aluno tenha terminado de treinar o modelo','Que o notebook esteja totalmente comentado','Que todos tenham escolhido o mesmo problema'], c:0, fb:'É a primeira vez que os alunos escolheram o problema sozinhos, então o risco real é escolher algo sem caminho de entrada. A nota do sprint 1 pede exatamente essa verificação.'}
    ]
  },
  {
    id:11, emoji:'🔌', color:'#F59E0B',
    title:'M7 — Integrando IA aos Projetos Deles',
    desc:'Módulo 7 do curso: preparar a IDE para trabalhar com IA, um bot do Discord que roda o próprio modelo de visão, publicar pelo VS Code, transcrição e tradução de fala, e entrada por voz no app Flask.',
    obj:'Ensine os alunos a combinar tudo o que construíram. Você deve saber preparar um ambiente virtual para bibliotecas de IA e resolver o conflito de versões, fazer um bot aceitar imagens anexadas e rodar inferência, publicar um projeto de dentro do VS Code, e programar ao vivo um script de reconhecimento de fala e um botão de entrada por voz.',
    prep:'~5 a 6 horas. O módulo mais frágil — ensaie duas vezes.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 7 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Montou um ambiente virtual com as bibliotecas de IA instaladas e o interpretador certo selecionado',
        'Fez um bot aceitar uma imagem anexada e salvá-la com <code>attachment.save()</code>',
        'Ligou o seu próprio modelo exportado a esse bot para que ele responda com uma previsão',
        'Publicou o projeto inteiro pelo VS Code — depois de remover o token',
        'Escreveu um README bom o bastante para tirar 30 pelos critérios do próprio curso',
        'Gravou e transcreveu fala com <code>sounddevice</code> e <code>speech_recognition</code>',
        'Esbarrou na falha do microfone ocupado e confirmou que silenciar o Zoom resolve',
        'Adicionou tradução ao script de transcrição',
        'Adicionou uma rota funcional de entrada por voz ao seu app Flask, dentro de <code>try</code>/<code>except</code>'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> preparar a IDE e o ambiente, fazer um bot aceitar envio de imagens e um brainstorm de startup; <strong>L2</strong> carregar o modelo no projeto e implementar a <strong>inferência</strong>, e então publicar pelo VS Code; <strong>L3</strong> transcrição e tradução de fala com <code>speech_recognition</code>; <strong>L4</strong> acrescentar entrada por voz ao site Flask deles, com <code>try</code>/<code>except</code>.',
          why:'Este é o módulo da recompensa. Tudo dos Módulos 1 a 6 converge: o bot deles, o site deles, o modelo treinado deles, o ambiente virtual deles. Também é o módulo tecnicamente mais frágil do curso, então preparação importa aqui mais do que em qualquer outro lugar.',
          learn:'Os alunos montam um ambiente virtual com bibliotecas de IA, aceitam e salvam um anexo do Discord, rodam o próprio modelo sobre uma imagem enviada e respondem com o resultado, publicam um projeto no GitHub pelo editor, gravam e transcrevem fala, traduzem a transcrição e acrescentam um botão funcional de entrada por voz ao site de diário.',
          confident:'Montar o ambiente e selecionar o interpretador; a correção com <code>tensorflow==2.15</code>; <code>ctx.message.attachments</code> e <code>attachment.save()</code>; o que significa inferência; publicar pela interface Git do VS Code; a pegadinha do microfone no Zoom; e <code>try</code>/<code>except</code> em volta de tudo que toca hardware ou rede.'
        }
      ]},
      {t:'🔧 L1 — Preparando o ambiente e o bot', cards:[
        {type:'warn', txt:'Esta aula é <strong>técnica e frágil</strong> — prepare os alunos com antecedência. Peça que abram os projetos antigos de bot do Discord <em>antes</em> da aula, revejam como funcionam e os deixem abertos, porque vão trabalhar neles o tempo todo. Um aluno que chega sem o projeto te custa a primeira etapa inteira.'},
        {type:'text', h:'A etapa do ambiente', b:'Relembre como criar um <strong>ambiente virtual</strong> — aqui isso não é negociável, porque as bibliotecas de IA são grandes e sensíveis a versão. Compartilhe sua tela ou passe a condução a um aluno forte. Depois instale no ambiente todas as bibliotecas de que o projeto precisa.'},
        {type:'code', lbl:'a correção do conflito de versões — deixe isto pronto para colar', code:`<span class="cc"># Se você vir:</span>
<span class="cc">#   Exception encountered: Unrecognized keyword arguments</span>
<span class="cc">#   passed to DepthwiseConv2D: {'groups': 1}</span>
<span class="cc"># é problema de compatibilidade de versão, não do seu código.</span>

pipenv uninstall tensorflow
pipenv install tensorflow==2.15   <span class="cc"># compatível com Python 3.11</span>`},
        {type:'tip', txt:'Dois planos B que salvam a aula. Se a instalação se arrastar ou falhar, use o <strong>Pipfile do repositório de solução</strong> para montar o ambiente num passo só. Se um aluno nunca salvou o bot antigo, dê a ele o <strong>Basic Bot</strong> da escola. Nenhum dos dois é trapaça — é recusar deixar a configuração consumir uma aula prática.'},
        {type:'code', lbl:'um comando de bot que aceita e salva uma imagem', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Imagem salva em ./{attachment.filename}"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Você esqueceu de enviar a imagem :("</span>)`},
        {type:'text', h:'O brainstorm e a checagem de mercado', b:'Uma atividade em três passos, com partes puláveis se o tempo estiver curto. <strong>1. Brainstorm</strong> — os alunos geram ideias de um bot do Discord tipo startup que use classificação de imagens, sem avaliação durante a geração; você registra todas as ideias num lugar visível a todos. Depois de quatro minutos, formem equipes de 2 a 3 e atribua a cada uma a ideia mais viável. <strong>2. Análise de mercado</strong> — oito minutos para procurar soluções parecidas já existentes e listar vantagens e desvantagens da ideia atribuída, escrevendo os achados no chat da tarefa. <strong>3. Apresentação</strong> — cada equipe compartilha o que encontrou.'},
        {type:'good', txt:'A etapa de análise de mercado é discretamente a coisa mais adulta do curso. A maioria dos alunos nunca verificou se a ideia deles já existe — e descobrir que existe, e que tem falhas, motiva mais do que desanima. Enquadre como reconhecimento de terreno, não como julgamento.'}
      ]},
      {t:'🧩 L2 — Inferência no bot e publicação pelo VS Code', cards:[
        {type:'text', h:'O que significa inferência', b:'Entregue a palavra direito: <strong>inferência</strong> é usar um modelo já treinado para fazer uma previsão sobre uma entrada nova. O treino acabou; isto é o modelo fazendo o trabalho dele. A tarefa é acrescentar o modelo e o arquivo <code>labels.txt</code> ao projeto, descobrir quais arquivos são necessários e por quê, e então fazer o bot responder a uma imagem enviada com a saída do modelo.'},
        {type:'code', lbl:'o bot rodando o próprio modelo sobre um envio', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_class</span>(
                model_path=<span class="cs">"./keras_model.h5"</span>,
                labels_path=<span class="cs">"labels.txt"</span>,
                image_path=<span class="cs">f"./{attachment.filename}"</span>))
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Você esqueceu de enviar a imagem :("</span>)`},
        {type:'tip', txt:'Em vez de dizer de quais arquivos o projeto precisa, <strong>pergunte</strong> — e se acertarem, peça que deem uma mini masterclass para os colegas. É o padrão de diferenciação que este curso usa em todo lugar, e é genuinamente mais rápido do que explicar. Aponte os próprios scripts de M6L4 como dica para a lógica de inferência.'},
        {type:'text', h:'Publicando pelo editor', b:'Os alunos sobem o projeto ao GitHub pela <strong>interface do VS Code</strong> e não pela página web — fechando o arco que começou em M1L2 com o upload desajeitado pelo site e continuou em M2L3 quando conectaram a conta. Discuta por que publicar importa: é o portfólio deles, e é como qualquer outra pessoa pode rodar o trabalho deles.'},
        {type:'qa', h:'Os critérios do README — vale mostrar aos alunos', items:[
          {k:'20 pontos', v:'Uma descrição do bot no README, mas em texto sem estrutura.'},
          {k:'30 pontos', v:'Uma descrição estruturada com emojis — clara e agradável de ler.'},
          {k:'+5 de bônus', v:'Uma imagem ou um GIF do bot funcionando.'},
          {k:'+10 de bônus', v:'Um arquivo de licença.'}
        ]},
        {type:'warn', txt:'A checagem do token, de novo e para valer: este projeto agora contém um token de bot <em>e</em> um modelo treinado. Antes de qualquer push, o token sai. Um repositório público com um token ativo é o pior desfecho que este curso pode produzir — e esta é a aula em que isso é mais provável, porque os alunos estão focados na parte de IA.'}
      ]},
      {t:'🎙️ L3 — Transcrição e tradução de fala', cards:[
        {type:'text', h:'Comece pelo que eles já usam', b:'Cinco minutos de discussão antes de qualquer código: onde eles já encontraram transcrição? Google Tradutor, entrada de voz em mensageiros, legendas do YouTube, legendas automáticas do TikTok e do Instagram. <strong>Transcrição</strong> é converter fala em texto — eles devem conseguir explicar isso com as próprias palavras, em nível de usuário, antes de construir.'},
        {type:'code', lbl:'gravar e depois transcrever — construído por live coding', code:`<span class="ck">import</span> sounddevice <span class="ck">as</span> sd
<span class="ck">import</span> scipy.io.wavfile <span class="ck">as</span> wav
<span class="ck">import</span> speech_recognition <span class="ck">as</span> sr

duration    = <span class="cn">5</span>        <span class="cc"># segundos de gravação</span>
sample_rate = <span class="cn">44100</span>

<span class="cf">print</span>(<span class="cs">"Fale agora..."</span>)
recording = sd.<span class="cf">rec</span>(<span class="cf">int</span>(duration * sample_rate),
                   samplerate=sample_rate, channels=<span class="cn">1</span>, dtype=<span class="cs">"int16"</span>)
sd.<span class="cf">wait</span>()
wav.<span class="cf">write</span>(<span class="cs">"output.wav"</span>, sample_rate, recording)

<span class="cf">print</span>(<span class="cs">"Gravação concluída, reconhecendo..."</span>)
recognizer = sr.<span class="ct2">Recognizer</span>()
<span class="ck">with</span> sr.<span class="ct2">AudioFile</span>(<span class="cs">"output.wav"</span>) <span class="ck">as</span> source:
    audio = recognizer.<span class="cf">record</span>(source)

<span class="ck">try</span>:
    text = recognizer.<span class="cf">recognize_google</span>(audio, language=<span class="cs">"pt-BR"</span>)
    <span class="cf">print</span>(<span class="cs">"Você disse:"</span>, text)
<span class="ck">except</span> sr.<span class="ct2">UnknownValueError</span>:
    <span class="cf">print</span>(<span class="cs">"Não foi possível reconhecer a fala."</span>)
<span class="ck">except</span> sr.<span class="ct2">RequestError</span> <span class="ck">as</span> e:
    <span class="cf">print</span>(<span class="cs">f"Erro do serviço: {e}"</span>)`},
        {type:'warn', txt:'A coisa mais útil deste plano de aula: <strong>se o script der erro, silencie seu microfone no Zoom e rode de novo.</strong> O Zoom segura o microfone e o script não consegue abri-lo. Diga isso aos alunos antes da primeira execução, e não depois de vinte minutos depurando.'},
        {type:'text', h:'Depois acrescente a tradução', b:'Segunda metade: estenda o script para que o texto transcrito seja traduzido para outro idioma com a classe <code>Translator</code>, e deixe o usuário escolher o código do idioma de destino. As duas metades são feitas por <strong>live coding</strong> — vocês constroem juntos — e o critério de sucesso é declarado sem rodeios: ao fim da etapa, <strong>todo aluno tem código funcionando</strong>.'},
        {type:'hi', h:'Não pule a atividade de intervalo', b:'Entre as duas metades práticas há um jogo de dez minutos: você diz uma cor ou uma letra e os alunos têm sessenta segundos para achar e mostrar um objeto correspondente. O plano diz explicitamente para <strong>não pular isso</strong> — os alunos precisam recuperar o foco antes da segunda prática, e esta aula tem sessenta minutos seguidos de prática. Participe você também.'}
      ]},
      {t:'🗣️ L4 — Entrada por voz no app Flask', cards:[
        {type:'text', h:'O objetivo, e a liberdade que você tem', b:'Acrescentar um <strong>botão de entrada por voz</strong> que aparece quando o usuário cria um novo cartão de entrada do diário. O manual da aula é explícito ao dizer que a implementação dele é uma opção simples — e não a mais eficaz — entre várias. Você tem liberdade para implementar de outro jeito conforme o nível dos seus alunos. Diga isso a turmas fortes; elas vão achar algo melhor.'},
        {type:'text', h:'Comece por perguntas, não por código', b:'Peça que relembrem do que é feita uma página web e em qual página o botão deve ficar. Mostre o template e faça com que achem a classe já definida para botões. Depois o ponto sutil: o <code>&lt;button&gt;</code> dentro de um formulário <strong>envia o formulário</strong>, e não é isso que queremos — queremos que rode a nossa função. É por isso que o exemplo usa um link estilizado.'},
        {type:'code', lbl:'a rota, dentro de try/except', code:`<span class="ck">from</span> speech <span class="ck">import</span> speech

<span class="cd">@app.route</span>(<span class="cs">'/voice'</span>)
<span class="ck">def</span> <span class="cf">voices</span>():
    <span class="ck">try</span>:
        text = <span class="cf">speech</span>()
    <span class="ck">except</span>:
        text = <span class="cs">"Algo deu errado..."</span>
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'create_card.html'</span>, text=text)`},
        {type:'code', lbl:'o template recebe isso como variável Jinja', code:`<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"text"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;textarea</span> <span class="cf">class</span>=<span class="cs">"form__text"</span> <span class="cf">name</span>=<span class="cs">"text"</span> <span class="cf">id</span>=<span class="cs">"text"</span> <span class="cf">required</span><span class="ct2">&gt;</span>{{ text }}<span class="ct2">&lt;/textarea&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">class</span>=<span class="cs">"help_button"</span> <span class="cf">href</span>=<span class="cs">"./voice"</span><span class="ct2">&gt;</span> Gravar <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/label&gt;</span>`},
        {type:'hi', h:'try / except, ensinado por necessidade', b:'O motivo de <code>try</code>/<code>except</code> chegar aqui e não antes é que os alunos acabaram de escrever código que <em>de fato falha às vezes</em> — um microfone pode estar ocupado, uma chamada de rede pode não responder. Esse é o argumento honesto para tratamento de exceções: o <code>try</code> guarda o código que pode falhar, o <code>except</code> guarda o que fazer quando falha, para que a página inteira não quebre. Apresente como solução de um problema que eles já viveram.'},
        {type:'text', h:'Fim do Tópico 4 — a pessoa especialista em IA', b:'Feche o tópico de IA aplicada: comemore a conclusão, mostre o que essas habilidades destravam e fale das vantagens de ser especialista em IA hoje. Pergunte se esse poderia ser o trabalho dos sonhos deles e se conseguem pensar em vantagens que você não mencionou. A tarefa adicional é bem aberta — encontre uma biblioteca que te interesse e use-a para melhorar seu projeto como quiser.'},
        {type:'tip', txt:'Se o tempo estiver curto, faça a tarefa criativa como live coding em vez de cortá-la. E anote a pegadinha de CSS do plano: ao copiar os estilos do botão, ele pode acabar por cima do formulário — <code>display: inline-block;</code> resolve.'}
      ]}
    ],
    quiz:[
      {q:'O que significa “inferência” em M7L2?', opts:['Usar um modelo já treinado para fazer uma previsão sobre uma entrada nova','Treinar um modelo com um dataset novo','Adivinhar quais classes um dataset deveria conter','Converter um modelo num arquivo menor'], c:0, fb:'O treino terminou; a inferência é o modelo fazendo o trabalho dele sobre dados novos — aqui, uma imagem que um usuário do Discord enviou.'},
      {q:'O projeto de bot com IA de um aluno lança o erro “groups” do DepthwiseConv2D durante a configuração. Qual é a correção preparada?', opts:['pipenv uninstall tensorflow e depois pipenv install tensorflow==2.15 (compatível com Python 3.11)','Retreinar o modelo no Teachable Machine','Trocar a classe Bot pela classe Client','Reinstalar o Python'], c:0, fb:'É um problema de compatibilidade de versão. Deixe esse par de comandos pronto para colar em vez de depurar versões ao vivo.'},
      {q:'O que você deve pedir aos alunos ANTES de a aula M7L1 começar?', opts:['Abrir os projetos antigos de bot do Discord, rever como funcionam e deixá-los abertos — eles constroem sobre isso a aula inteira','Retreinar o modelo de visão do zero','Apagar os ambientes virtuais','Escrever um README para o projeto'], c:0, fb:'A nota da aula a marca como técnica e pede que você prepare os alunos com antecedência, com os projetos antigos de bot abertos.'},
      {q:'Um aluno nunca salvou o bot do Módulo 1. Qual é a resposta certa?', opts:['Dar a ele o Basic Bot da escola para que a configuração não consuma a aula prática','Fazê-lo reconstruir o bot do zero enquanto a turma espera','Colocá-lo em dupla e deixá-lo apenas assistindo','Ignorá-lo e marcar a aula como incompleta'], c:0, fb:'O plano fornece um Basic Bot exatamente para isso, assim como fornece o Pipfile do repositório de solução quando a montagem do ambiente se arrasta.'},
      {q:'Qual recurso do discord.py permite ao bot receber uma imagem do usuário?', opts:['ctx.message.attachments, e depois attachment.save() para gravar em disco','discord.File, que lê envios','request.form, como num formulário web','O evento on_upload da classe Client'], c:0, fb:'O comando verifica ctx.message.attachments, percorre os anexos e salva cada um — e o caminho salvo é o que vai para o modelo.'},
      {q:'Qual é o momento de maior risco de segurança neste módulo?', opts:['Publicar o projeto no GitHub com o token real do bot ainda no código','Enviar o arquivo do modelo treinado','Instalar o tensorflow pela internet','Deixar o bot salvar imagens enviadas por usuários'], c:0, fb:'Os alunos estão focados na parte de IA, e o projeto agora contém um token ativo. Verifique antes de cada push — um repositório público com token funcionando é o pior desfecho possível.'},
      {q:'O script de reconhecimento de fala dá erro assim que roda durante a sua aula. O que você verifica primeiro?', opts:['Se o seu microfone no Zoom está aberto — o Zoom segura o microfone, então silencie e rode de novo','Se o speech_recognition está instalado','Se o código do idioma está correto','Se o arquivo .wav já existe'], c:0, fb:'O plano de aula sinaliza isso explicitamente como ponto importante: silencie o microfone no Zoom e reinicie o script.'},
      {q:'Por que try/except chega em M7L4 e não antes no curso?', opts:['Porque os alunos acabaram de escrever código que de fato falha às vezes — microfone ocupado, chamada de rede sem resposta — então o tratamento de exceções resolve um problema que eles viveram','Porque o Flask exige isso em toda rota','Porque é avançado demais antes deste ponto','Porque o Jinja não consegue renderizar erros'], c:0, fb:'A função de fala às vezes produz um erro, que é justamente a motivação honesta para try/except: capturar a falha para que a página não quebre.'},
      {q:'Por que o exemplo de M7L4 usa um link estilizado em vez de um <button> dentro do formulário?', opts:['Um <button> dentro de um formulário envia o formulário, o que não é o que queremos — queremos que rode a nossa função','Links são mais rápidos que botões','Botões não podem ser estilizados com CSS','O Flask não consegue receber cliques em botão'], c:0, fb:'A aula pede que você discuta exatamente isso: a tag button num formulário é responsável por enviar dados, então o disparo de voz é implementado de outra forma.'},
      {q:'Para que existe o jogo de dez minutos de “achar um objeto” entre as duas metades práticas de M7L3?', opts:['Para recuperar o foco dos alunos antes da segunda prática — o plano diz explicitamente para não pular','Para avaliar o vocabulário deles','Para preencher o tempo se o código terminar cedo','Para escolher quem apresenta o programa'], c:0, fb:'M7L3 tem sessenta minutos seguidos de prática. O intervalo está no cronograma de propósito, e o plano pede que você não pule — e que participe também.'}
    ]
  },
  {
    id:12, emoji:'🤝', color:'#14B8A6',
    title:'M8 — Agile, Branches no Git e Code Review',
    desc:'Módulo 8 do curso: valores do Agile e papéis do Scrum, criar e integrar branches no Git, os princípios e o checklist de code review, e programação colaborativa com o Live Share.',
    obj:'Ensine o ofício de engenharia que torna o trabalho em equipe possível. Você deve saber explicar Agile e Scrum com analogias do dia a dia, definir os três papéis do Scrum com precisão, conduzir um exercício de planejamento de sprint, ensinar branches e merges, construir um checklist de code review com os alunos e preparar um ambiente colaborativo antes da aula.',
    prep:'~3 a 4 horas. Menos construção, mais prática de Git.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 8 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Explicou Agile e Scrum em voz alta, com suas próprias palavras, usando as analogias do dia a dia',
        'Escreveu um plano de sprint para um recurso pequeno, dividido em tarefas com responsáveis',
        'Criou uma branch, fez commits nela, integrou-a e leu a saída do merge',
        'Criou de propósito um <strong>conflito</strong> de merge e o resolveu — para que não te surpreenda ao vivo',
        'Revisou o código de exemplo com bugs do curso e achou você mesmo os quatro problemas plantados',
        'Escreveu um checklist próprio de code review antes de compará-lo ao do curso',
        'Instalou a extensão <strong>Live Share</strong> e rodou uma sessão com um segundo aparelho ou com um colega',
        'Refatorou o código quebrado da tarefa colaborativa até funcionar'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> Agile e Scrum, os três papéis e o planejamento de um sprint real; <strong>L2</strong> branches no Git — criar, gerenciar e integrar; <strong>L3</strong> code review, seus princípios, um checklist compartilhado e a revisão dos projetos uns dos outros; <strong>L4</strong> ambientes de desenvolvimento colaborativo (VS Code Live Share) mais o jogo do módulo.',
          why:'Os alunos vêm usando sprints e retrospectivas desde o Módulo 1 sem que ninguém tenha dito o que são. Este módulo nomeia as práticas e acrescenta as duas habilidades que tornam possível trabalhar com outras pessoas: criar branches e revisar código.',
          learn:'Os alunos explicam os valores do Agile com as próprias palavras, pesquisam e apresentam um papel do Scrum, planejam um sprint para um recurso real, criam e integram branches, montam e aplicam um checklist de code review, dão feedback construtivo e programam simultaneamente num editor compartilhado.',
          confident:'Agile como filosofia e Scrum como prática concreta; o que o Scrum Master, o Product Owner e o Time de Desenvolvimento de fato fazem; <code>git merge</code> e como é um merge bem-sucedido; os cinco princípios de uma revisão eficaz; e ter o Live Share configurado <em>antes</em> da aula.'
        }
      ]},
      {t:'🏃 L1 — Agile, Scrum e planejamento de sprint', cards:[
        {type:'text', h:'Ensine os valores por analogias do cotidiano', b:'Pare nos valores do Agile e peça aos alunos que expliquem cada um com as próprias palavras e um exemplo da vida diária. O curso fornece quatro analogias que funcionam bem com adolescentes, e usá-las é melhor do que definir os termos.'},
        {type:'qa', h:'Os quatro valores do Agile, como o curso os enquadra', items:[
          {k:'Indivíduos e interações acima de processos e ferramentas', v:'Planejar um jantar em família: em vez de uma escala rígida de cozinha, vocês conversam sobre preferências, decidem quem faz o quê e ajudam quem travar.'},
          {k:'Software funcionando acima de documentação abrangente', v:'Arrumar o quarto: em vez de planejar onde cada coisa vai, você começa a tirar as coisas do lugar. O quarto limpo é a meta; o caminho pode mudar.'},
          {k:'Colaboração com o cliente acima de negociação de contratos', v:'Você combinou de encontrar amigos e um deles tem aula. Em vez de insistir no horário original, vocês acham um que funcione.'},
          {k:'Responder a mudanças acima de seguir um plano', v:'Você planejou correr de manhã e está chovendo, então faz ioga em casa em vez de cancelar.'}
        ]},
        {type:'hi', h:'Agile e Scrum, numa imagem', b:'É a distinção que os alunos mais embaralham. <strong>Agile é a filosofia</strong> — como uma família combina viver em harmonia: respeito, flexibilidade, cooperação. <strong>Scrum são as regras concretas</strong> para colocar isso em prática: quem cozinha, quem põe a mesa, quem limpa — os papéis, as tarefas, as reuniões que fazem funcionar. O Agile é a ideia; o Scrum é um jeito de dar vida a ela.'},
        {type:'text', h:'Os papéis, pesquisados pelos alunos', b:'Divida o grupo em três equipes — <strong>Scrum Master</strong>, <strong>Product Owner</strong>, <strong>Time de Desenvolvimento</strong> — e dê dez minutos com as fontes que quiserem para pesquisar o papel no contexto de um projeto de aplicativo móvel. Cada equipe faz então uma miniapresentação de cinco minutos. Seu trabalho é responder a dúvidas organizacionais e técnicas e construir um clima positivo. Depois, pergunte quem <em>gostaria</em> de ser Scrum Master ou Product Owner, e por quê.'},
        {type:'twocol', left:{h:'Scrum Master', items:['Remove obstáculos para que o time consiga trabalhar','Explica Agile e Scrum, principalmente a quem chega','Conduz dailys, planejamentos e retrospectivas — e as mantém produtivas','Garante que as pessoas se sintam seguras para expressar ideias, e traz os mais quietos para a conversa','<strong>Não dirige</strong> — cria as condições para o sucesso']}, right:{h:'Product Owner', items:['Reúne requisitos de clientes, gestores e usuários','Monta a lista de tarefas e a ordena por prioridade','Escreve as tarefas como histórias de usuário que o time entende','Define quando uma tarefa conta como concluída','Ajuda o time a quebrar tarefas e avaliar a complexidade']}},
        {type:'text', h:'Depois planeje um sprint de verdade', b:'O grupo inteiro atua como um único time de desenvolvimento. Faça um brainstorm de “o que vocês construiriam se pudessem construir qualquer coisa?”, então <strong>você assume o papel de Product Owner</strong> e os ajuda a planejar um sprint. Não planeje o projeto inteiro — pegue uma parte dele, como um formulário de cadastro ou um menu. O tempo sugerido: 5 minutos de brainstorm, 5 minutos com o Product Owner, 15 minutos de planejamento, 5 minutos de apresentação e feedback.'},
        {type:'tip', txt:'O exemplo trabalhado no plano — um formulário de cadastro dividido em frontend, backend, infraestrutura, testes e documentação ao longo de duas semanas — é muito mais detalhado do que o que seus alunos vão produzir. Use-o como sua referência para provocar (“quem testa? quem documenta?”), e não como padrão a cobrar deles.'}
      ]},
      {t:'🌳 L2 — Branches no Git', cards:[
        {type:'text', h:'Duas analogias, ambas boas de ter à mão', b:'<strong>Caderno de anotações da turma:</strong> a turma inteira trabalha num único conjunto grande de anotações, e cada aluno escreve a sua parte numa folha separada — uma branch — para que ninguém estrague o documento principal. Quando todas as seções ficam prontas, elas são combinadas num arquivo só: um <strong>merge</strong>. Um erro pode ser corrigido na folha individual sem tocar no documento inteiro. <strong>Uma produção de cinema:</strong> a branch principal é o roteiro final, contendo apenas material aprovado; uma branch de recurso é uma cena separada em que ideias novas são testadas sem afetar o roteiro; o merge é a montagem que junta as cenas.'},
        {type:'text', h:'Como a prática funciona', b:'Faça a tarefa na sua máquina e peça que os alunos acompanhem <strong>passo a passo</strong>, conferindo se todos seguem o ritmo. O critério de sucesso é concreto: cada aluno envia uma captura do terminal mostrando o resultado de <code>git merge feature/add-greeting</code>. Garanta que <em>todo</em> aluno conclua — é uma habilidade que, se não pegar, bloqueia silenciosamente o trabalho em equipe mais adiante.'},
        {type:'code', lbl:'como é um merge fast-forward bem-sucedido', code:`Updating 319de95..8de4c42
Fast-forward
 main.py | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)`},
        {type:'hi', h:'Abra com o quiz e leia as respostas em voz alta', b:'A aula começa com um quiz de dez minutos sobre o material de Agile e Scrum da aula anterior, e o plano manda revisar <strong>todas</strong> as respostas corretas depois, com a explicação. Vale fazer isso direito — o Product Owner é dono do backlog, um sprint é um período fixo de uma a quatro semanas, criar o backlog <em>não</em> é trabalho do Scrum Master, a retrospectiva é onde o time planeja melhorias, e adaptação rápida a mudanças é o princípio do Agile.'},
        {type:'tip', txt:'A lição de casa daqui tem uma segunda parte: uma “<strong>Tarefa Secreta</strong>” que você <em>não</em> deve comentar — apenas lembre os alunos de que vão precisar dela na quarta aula deste módulo. Não estrague a surpresa, e não esqueça dela também.'}
      ]},
      {t:'🔎 L3 — Code review', cards:[
        {type:'text', h:'Por que a revisão existe', b:'Conduza uma discussão em grupo em vez de apresentar. Os cinco objetivos a que os alunos devem chegar: <strong>detectar erros</strong>, para que bugs não cheguem aos usuários; <strong>manter padrões</strong> de estilo de código; <strong>elevar as habilidades do time</strong> compartilhando conhecimento; <strong>melhorar a legibilidade</strong> para que o código seja compreensível ao time inteiro, e não só a quem o escreveu; e <strong>aumentar a responsabilidade compartilhada</strong>, tornando a base de código um esforço coletivo em vez de um conjunto de esforços individuais.'},
        {type:'qa', h:'Os cinco princípios de uma revisão eficaz', items:[
          {k:'Seja respeitoso', v:'Feedback construtivo, sem culpabilizar.'},
          {k:'Foque no problema, não na pessoa', v:'Discuta o código, não quem o escreveu.'},
          {k:'Seja específico', v:'Dê exemplos concretos de melhorias.'},
          {k:'Equilibre crítica e elogio', v:'Reconheça explicitamente o código bem escrito.'},
          {k:'Dê recomendações claras', v:'Deixe suas sugestões o mais inequívocas possível.'}
        ]},
        {type:'text', h:'Monte o checklist com eles e então use', b:'Dez minutos em equipes de dois ou três, pesquisando e rascunhando um checklist, e então juntem tudo num <strong>checklist final único que o grupo inteiro vai usar</strong> — e mandem no chat do grupo, porque ele é necessário para a próxima tarefa e para a lição de casa. As categorias a que os rascunhos devem convergir: clareza do código, correção, simplicidade, aderência ao estilo, verificação da lógica e saída correta.'},
        {type:'code', lbl:'o código de prática — quatro problemas plantados', code:`<span class="ck">import</span> random

<span class="cf">print</span>(<span class="cs">"Bem-vindo ao jogo 'Adivinhe o Número'!"</span>)
secret = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">100</span>)
attempt = <span class="cn">0</span>

<span class="ck">while</span> <span class="ck">True</span>:
    user_guess = <span class="cf">input</span>(<span class="cs">"Digite seu número: "</span>)
    attempt += <span class="cn">1</span>
    <span class="ck">if</span> user_gess == secret:              <span class="cc"># 1. erro de digitação: user_gess</span>
        <span class="cf">print</span>(<span class="cs">"Parabéns!"</span>)              <span class="cc"># 2. input() é string —</span>
        <span class="ck">break</span>                            <span class="cc">#    nunca convertida com int()</span>
    <span class="ck">elif</span> user_guess &gt; secret:            <span class="cc"># 3. nenhum comentário no código</span>
        <span class="cf">print</span>(<span class="cs">"Seu número é maior."</span>)     <span class="cc"># 4. sem validação de entrada —</span>
    <span class="ck">elif</span> user_guess &lt; secret:            <span class="cc">#    texto digitado derruba tudo</span>
        <span class="cf">print</span>(<span class="cs">"Seu número é menor."</span>)`},
        {type:'text', h:'A revisão entre colegas em si', b:'Os alunos trocam projetos — e se nem todos tiverem um pronto, tudo bem: vários alunos podem revisar o mesmo projeto, ou você recorre ao código de exemplo acima. Quinze minutos para revisar, enviando o código e os comentários no chat da tarefa. Depois eles apresentam o que revisaram e vocês discutem juntos o feedback e os problemas encontrados.'},
        {type:'good', txt:'Repita a regra do feedback construtivo logo antes de começarem, e não apenas durante a teoria. Revisar o código de um colega é socialmente arriscado para um adolescente, e a diferença entre “isto está errado” e “eu renomearia isto para ficar mais claro” é a diferença inteira entre uma aula que funciona e uma que machuca o grupo.'},
        {type:'tip', txt:'A lição de casa depende da aula anterior: os alunos precisavam preparar um projeto próprio para entregar a um colega. Lembre-os no fim da L2, ou metade da turma chega sem nada para revisar.'}
      ]},
      {t:'👥 L4 — Desenvolvimento colaborativo e o jogo do módulo', cards:[
        {type:'warn', txt:'<strong>A etapa 0 acontece antes de a aula começar.</strong> Instale a extensão <strong>Live Share</strong> no VS Code, crie uma pasta com um <code>main.py</code> contendo um trecho simples e esteja pronto. Depois, na aula: clique em Live Share, faça login, compartilhe o link, aceite o pedido de conexão de cada aluno e <strong>conceda permissão de edição</strong>. Se tentar fazer isso do zero na frente da turma, você perde a aula.'},
        {type:'text', h:'O que enfatizar sobre o ambiente', b:'Não importa qual ferramenta específica eles usem — o ponto é entender <strong>como se trabalha quando várias pessoas compartilham uma base de código</strong>. Peça que cada aluno imprima o próprio nome no terminal como teste de conexão, e depois não desconecte ninguém ao passar para a próxima tarefa: o trabalho continua naquele ambiente.'},
        {type:'text', h:'A tarefa colaborativa', b:'Carregue um código propositalmente quebrado no ambiente compartilhado e ajude os alunos a <strong>dividir as correções entre si</strong>. Diga que não precisam terminar tudo, mas devem melhorar o quanto conseguirem. Vinte minutos e então parem para trocar impressões. Os problemas plantados são um bom passeio pelo curso: uma função que calcula mas nunca faz <code>return</code>, entrada sem validação, ausência de tratamento de exceções em volta de <code>int(input(...))</code>, uma variável que por consequência recebe <code>None</code> e um nome de jogador coletado e nunca usado.'},
        {type:'code', lbl:'o formato da versão refatorada a que eles chegam', code:`<span class="ck">import</span> random

<span class="cc"># Cumprimenta o jogador e valida o nome digitado</span>
<span class="ck">def</span> <span class="cf">greet_player</span>():
    <span class="ck">while</span> <span class="ck">True</span>:
        name = <span class="cf">input</span>(<span class="cs">"Qual é o seu nome? (1 a 15 caracteres): "</span>).<span class="cf">strip</span>()
        <span class="ck">if</span> <span class="cn">1</span> &lt;= <span class="cf">len</span>(name) &lt;= <span class="cn">15</span>:
            <span class="ck">return</span> name                       <span class="cc"># a correção: de fato devolver</span>
        <span class="cf">print</span>(<span class="cs">"O nome precisa ter de 1 a 15 caracteres. Tente de novo."</span>)

<span class="ck">def</span> <span class="cf">generate_random</span>(low, high):
    <span class="ck">return</span> random.<span class="cf">randint</span>(low, high)      <span class="cc"># a correção: devolver, não só chamar</span>

<span class="ck">if</span> __name__ == <span class="cs">"__main__"</span>:
    <span class="cf">main</span>()`},
        {type:'hi', h:'O jogo do módulo — “O App dos Sonhos”', b:'Quinze minutos de preparação em duas equipes, depois cinco minutos para cada uma apresentar. Escolher uma ideia, formar a equipe, planejar um sprint. <strong>Não há vencedores nesta tarefa</strong>, e o plano diz isso — resultados concretos são secundários diante de trabalhar em equipe, reforçar o módulo e se divertir. Se ninguém fez a “Tarefa Secreta”, anime-os e peça que inventem uma ideia na hora; a ideia pode ser qualquer coisa, até irrealista. Se travarem, sugira planejar um app parecido com algum que usam todo dia.'},
        {type:'tip', txt:'Cumpra os tempos com rigor aqui: 5 minutos explicando e formando equipes, 15 minutos trabalhando, 5 + 5 minutos apresentando. Esta aula tem quatro etapas distintas e nenhuma folga.'}
      ]}
    ],
    quiz:[
      {q:'Como você explica a diferença entre Agile e Scrum?', opts:['O Agile é a filosofia — respeito, flexibilidade, cooperação; o Scrum é o conjunto concreto de papéis, tarefas e reuniões que a coloca em prática','O Scrum é a filosofia e o Agile é o conjunto de ferramentas','São metodologias concorrentes e um time escolhe uma','O Agile é para software e o Scrum para hardware'], c:0, fb:'A analogia da família usada no curso: o Agile é como uma família combina viver em harmonia; o Scrum é quem cozinha, quem põe a mesa e quem limpa.'},
      {q:'Qual destas NÃO é responsabilidade do Scrum Master?', opts:['Criar e priorizar o backlog do produto','Remover obstáculos que travam o time','Conduzir dailys, planejamentos e retrospectivas','Garantir que os integrantes mais quietos sejam ouvidos'], c:0, fb:'O backlog é do Product Owner. O Scrum Master garante que o time trabalhe com eficácia e remove obstáculos — é uma das respostas do quiz de M8L2.'},
      {q:'O que é um sprint, e quanto tempo costuma durar?', opts:['Um período fixo de tempo destinado a concluir tarefas do backlog — em geral de uma a quatro semanas','Uma reunião em que o time revisa o trabalho concluído','A última semana antes de um lançamento','Um único dia de trabalho de programação concentrada'], c:0, fb:'Um sprint é um período de duração fixa em que o time se concentra em concluir tarefas do backlog — normalmente de uma a quatro semanas.'},
      {q:'Um aluno pergunta por que existem branches. Qual explicação o curso usa?', opts:['Cada pessoa trabalha numa folha separada para que o documento principal fique intacto, e depois as folhas são combinadas — um merge — e erros podem ser corrigidos sem tocar no projeto inteiro','Branches guardam versões antigas do projeto como backup','Branches permitem que duas pessoas usem uma conta do GitHub','Branches são obrigatórias antes de qualquer push ao GitHub'], c:0, fb:'A analogia das anotações compartilhadas da turma, com a da produção de cinema como alternativa: a branch principal é o roteiro final, uma branch de recurso é uma cena em teste, o merge é a montagem.'},
      {q:'Qual é o critério concreto de sucesso da prática de M8L2?', opts:['Cada aluno envia uma captura do terminal mostrando um git merge feature/add-greeting bem-sucedido','Cada aluno cria uma branch com o próprio nome','O tutor integra as branches de todos os alunos','Cada aluno explica o merge com as próprias palavras'], c:0, fb:'O plano pede a captura do terminal com o resultado do merge e diz para garantir que todos os alunos concluam a tarefa.'},
      {q:'Qual destes é um dos cinco princípios de uma revisão de código eficaz?', opts:['Focar no problema, não na pessoa — discutir o código, não quem o escreveu','Apontar todos os problemas, por menores que sejam, antes de qualquer elogio','Deixar o tutor revisar todo o código para que o feedback seja consistente','Só revisar código que já roda sem erros'], c:0, fb:'Os cinco princípios são: ser respeitoso, focar no problema e não na pessoa, ser específico, equilibrar crítica e elogio, e dar recomendações claras.'},
      {q:'Dois dos bugs plantados no exercício de code review são uma variável escrita errado e uma conversão faltando. Qual é a segunda?', opts:['input() devolve uma string, então ela nunca é convertida com int() e não pode ser comparada ao número secreto','random.randint é chamado com o intervalo errado','O laço while não tem condição de parada','Os prints estão sem os parênteses'], c:0, fb:'user_guess continua sendo string, tornando impossível a comparação com secret — o mesmo bug que os alunos encontram naturalmente ao longo do curso.'},
      {q:'Nem todos os alunos têm um projeto pronto para a revisão entre colegas. O que você faz?', opts:['Deixa vários alunos revisarem o mesmo projeto, ou recorre ao código de exemplo fornecido — está explicitamente ok','Cancela a etapa de revisão','Faz os alunos revisarem o próprio código','Adia a aula'], c:0, fb:'O plano diz isso diretamente: tudo bem, vários alunos podem revisar o mesmo projeto, e existe código de exemplo para revisão se ninguém entregar um.'},
      {q:'O que você precisa fazer ANTES de a aula M8L4 começar?', opts:['Instalar a extensão Live Share, criar a pasta do projeto com main.py e estar pronto para compartilhar — a etapa 0 é trabalho pré-aula','Enviar o código quebrado para os alunos lerem','Dividir a turma em equipes','Preparar o link do quiz'], c:0, fb:'A etapa 0 é explicitamente marcada como preparação a fazer do seu lado antes da aula. Fazer isso do zero na frente da turma te custa a aula.'},
      {q:'Quem vence o jogo “O App dos Sonhos” no fim de M8L4?', opts:['Ninguém — o plano afirma que não há vencedores; trabalho em equipe, reforço do conteúdo e diversão são os objetivos','A equipe com a ideia mais viável','A equipe que terminar o planejamento primeiro','A equipe cuja apresentação for mais bem recebida'], c:0, fb:'“Não há vencedores nesta tarefa.” Resultados concretos são secundários diante de trabalhar em equipe, reforçar o material do módulo e aproveitar o jogo.'}
    ]
  },
  {
    id:13, emoji:'🗣️', color:'#8B5CF6',
    title:'M9 — Síntese de Fala, APIs e Código Limpo',
    desc:'Módulo 9 do curso: síntese de fala com pyttsx3, um bot falante de previsão do tempo sobre uma API sem chave, um bot de curiosidades feito com autonomia, e código limpo com refatoração e flake8.',
    obj:'Ensine os alunos a fazer programas falarem e a deixar o código legível. Você deve saber distinguir as três tecnologias de voz, configurar o pyttsx3, programar ao vivo um bot em três etapas verificáveis, conduzir uma construção autônoma com liberdade real e liderar uma sessão de refatoração incluindo um linter.',
    prep:'~4 horas. Genuinamente divertido; ainda assim, construa.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 9 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Instalou o <code>pyttsx3</code> e fez a sua máquina falar, ajustando velocidade, volume e voz',
        'Confirmou quais índices de voz de fato existem no seu sistema operacional',
        'Chamou o <code>wttr.in</code> e recebeu uma previsão formatada de volta',
        'Construiu o bot falante de previsão do tempo nas três etapas que a aula usa',
        'Confirmou que a fala sai da máquina que roda o bot, e não do Discord',
        'Construiu sozinho um segundo bot falante a partir de outra API, para cronometrar a si mesmo',
        'Refatorou você mesmo os exemplos bagunçados de imposto e de pontos de casa antes de ler as soluções',
        'Instalou o <code>flake8</code>, rodou no próprio código e corrigiu o que ele apontou',
        'Achou no seu código um problema que o flake8 não conseguiu pegar'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Quatro aulas: <strong>L1</strong> síntese de fala e um programa de texto para fala com <strong>pyttsx3</strong>; <strong>L2</strong> um bot do Discord que busca a previsão do tempo numa API e a lê em voz alta; <strong>L3</strong> uma construção autônoma — um bot que fala curiosidades aleatórias — mais o futuro da tecnologia de voz; <strong>L4</strong> código limpo, refatoração e <strong>flake8</strong>.',
          why:'Duas recompensas bem diferentes. A voz faz os projetos parecerem acabados e genuinamente dignos de portfólio, e código limpo é a diferença entre um projeto que outra pessoa consegue assumir e um que ninguém consegue. A L4 também é a aula mais útil profissionalmente do curso inteiro.',
          learn:'Os alunos distinguem controle por voz, reconhecimento e síntese; instalam e configuram uma biblioteca de síntese; constroem um bot falante de previsão do tempo sobre uma API sem chave; constroem sozinhos um segundo bot falante; e refatoram código bagunçado contra critérios de código limpo, verificando com um linter.',
          confident:'As três tecnologias de voz e seus casos de uso; as três etapas de como a síntese funciona; o <code>rate</code>, <code>volume</code>, <code>voice</code>, <code>say</code> e <code>runAndWait</code> do <code>pyttsx3</code>, e que ele funciona <strong>offline</strong>; que o <code>wttr.in</code> não precisa de chave de API; e o checklist de código limpo mais o <code>flake8</code>.'
        }
      ]},
      {t:'🔊 L1 — Síntese de fala', cards:[
        {type:'qa', h:'As três tecnologias, distinguidas', items:[
          {k:'Controle por voz', v:'Usar a voz para comandar aparelhos ou aplicativos. Luzes e termostatos de casa inteligente, “ligar para a mãe”, iniciar música ou GPS no carro.'},
          {k:'Reconhecimento de fala', v:'Converter fala em texto ou comandos. Ditado de voz para texto, aplicativos tradutores, legendas ao vivo em reuniões por vídeo.'},
          {k:'Síntese de fala', v:'Converter texto em fala para que o computador “fale”. Navegação (“em 300 metros, vire à esquerda”), leitores de livros digitais lendo em voz alta, notificações faladas.'}
        ]},
        {type:'text', h:'As três juntas', b:'Os melhores exemplos usam as três, e os alunos já as têm em mãos. Um <strong>assistente de voz</strong>: o reconhecimento te entende, a síntese responde, o controle por voz executa o comando. Um <strong>sistema de navegação de carro</strong>: você dita o endereço, ele fala a rota, você a altera por voz. <strong>Software assistivo</strong>: entende a pessoa, lê em voz alta um texto que ela não consegue ler e pode ser comandado por voz.'},
        {type:'text', h:'Como a síntese funciona de fato — três etapas', b:'<strong>1. Análise do texto</strong> — o computador descobre como o texto deve ser lido: um ponto final significa uma pausa, um ponto de interrogação muda a entonação. <strong>2. Conversão de texto em som</strong> — as palavras viram sons, usando um banco com todos os sons do idioma. <strong>3. Geração da fala</strong> — os sons são combinados em palavras e frases, buscando algo fluido e natural.'},
        {type:'code', lbl:'pyttsx3 — essencialmente a biblioteca inteira', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

engine.<span class="cf">setProperty</span>(<span class="cs">'rate'</span>, <span class="cn">150</span>)      <span class="cc"># velocidade da fala</span>
engine.<span class="cf">setProperty</span>(<span class="cs">'volume'</span>, <span class="cn">0.9</span>)    <span class="cc"># volume</span>

voices = engine.<span class="cf">getProperty</span>(<span class="cs">'voices'</span>)
engine.<span class="cf">setProperty</span>(<span class="cs">'voice'</span>, voices[<span class="cn">0</span>].id)   <span class="cc"># a escolha de voz depende do sistema</span>

engine.<span class="cf">say</span>(<span class="cs">"Olá"</span>)
engine.<span class="cf">runAndWait</span>()                     <span class="cc"># de fato executa a síntese</span>`},
        {type:'text', h:'A etapa de trabalho autônomo', b:'Esta é uma etapa genuinamente autônoma de 40 minutos: 25 minutos para estudar a documentação e construir um programa que vocaliza texto e experimentar as configurações, e depois 15 minutos de apresentação. Seu papel é responder a dúvidas organizacionais e técnicas — nada além disso. Se um aluno travar, peça que compartilhe a tela e ajude individualmente. <strong>A prioridade é que todo aluno termine com um programa de fala funcionando</strong>, e você elogia cada apresentação.'},
        {type:'tip', txt:'Faça a eles uma pergunta genuinamente boa no fim: como nossas vidas mudariam sem síntese de fala? Os alunos tendem a ver isso como conveniência até pensarem em alguém que não consegue ler a tela — e aí a tecnologia deixa de ser um brinquedo.'}
      ]},
      {t:'🌤️ L2 — O bot falante de previsão do tempo', cards:[
        {type:'text', h:'Por que esta aula é fácil de conduzir bem', b:'A API não precisa de <strong>conta nem de chave</strong>. O <code>wttr.in</code> devolve a previsão do tempo por uma requisição HTTP simples, o que significa nenhuma etapa de cadastro, nenhuma chave para vazar e nenhum aluno travado num formulário. Escolha essa batalha de propósito — a aula é sobre combinar três coisas que eles já conhecem, e não sobre autenticação de API.'},
        {type:'hi', h:'Programe ao vivo em três etapas verificáveis', b:'O plano divide a construção em três e pede que você confirme que todos os alunos estão em dia depois de <em>cada</em> uma. <strong>Etapa 1</strong> — um bot básico com um comando <code>!start</code> que responde. <strong>Etapa 2</strong> — acrescentar a chamada à API para que <code>!weather São Paulo</code> devolva a previsão como texto. <strong>Etapa 3</strong> — acrescentar a síntese para que o bot também leia em voz alta. Antes de escrever qualquer código, tire alguns minutos para conferir que todos estão com o token do bot à mão.'},
        {type:'code', lbl:'etapa 2 — a função de previsão do tempo', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:
    <span class="cc"># %C é a descrição, %t a temperatura</span>
    base_url = <span class="cs">f"https://wttr.in/{city}?format=%C+%t"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        <span class="ck">return</span> response.text.<span class="cf">strip</span>()
    <span class="ck">return</span> <span class="cs">"Não foi possível obter os dados do tempo. Tente novamente mais tarde."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Tempo em {city}: {weather_info}"</span>)`},
        {type:'code', lbl:'etapa 3 — uma função transforma isso num bot falante', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

<span class="ck">def</span> <span class="cf">speak</span>(text: <span class="ct2">str</span>):
    <span class="cs">"""Vocaliza o texto informado usando pyttsx3."""</span>
    engine.<span class="cf">say</span>(text)
    engine.<span class="cf">runAndWait</span>()

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Tempo em {city}: {weather_info}"</span>)
    <span class="cf">speak</span>(weather_info)   <span class="cc"># fala na máquina que roda o bot</span>

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'Um ponto conceitual em que os alunos vão tropeçar: a fala sai do <strong>computador que roda o bot</strong>, e não do Discord. O bot deles não fala com o servidor inteiro — fala com eles. Diga isso antes de testarem, ou você vai ouvir a mesma pergunta confusa cinco vezes. Também é uma forma natural de introduzir a ideia de que código roda em algum lugar específico.'},
        {type:'text', h:'Dez bots que vale ter no bolso', b:'A aula lista exemplos que os alunos podem adaptar para a lição de casa e para o projeto de formatura: previsão do tempo, tradutor, assistente de estudos, âncora de notícias, meditação, treino físico, ajudante de jogo, casa inteligente, reservas e guia turístico. Leia alguns em voz alta durante a teoria — isso transforma “acrescente fala a um bot” de exercício em cardápio de coisas que eles talvez queiram de verdade.'},
        {type:'tip', txt:'Envie o código final comentado aos alunos <strong>depois</strong> da aula, já que a lição de casa é melhorar o bot. A versão completa da terceira etapa no plano tem cada linha explicada — use como sua própria referência durante o live coding, e note que as respostas do quiz de M9L2 funcionam como uma revisão compacta da API do pyttsx3.'}
      ]},
      {t:'🎲 L3 — A construção autônoma e o futuro da voz', cards:[
        {type:'text', h:'Autonomia de verdade, com rede de segurança', b:'A estrutura: 5 minutos explicando e criando um clima positivo, <strong>20 minutos construindo um bot que busca curiosidades aleatórias numa API e as fala</strong>, e então 15 minutos em que um aluno compartilha a tela e explica o próprio código linha a linha. Qualquer fonte é permitida. Ajude com problemas técnicos e organizacionais, mas <strong>deixe que implementem sozinhos</strong> — isto é um ensaio para a maratona que começa no próximo módulo.'},
        {type:'code', lbl:'o padrão a que eles devem chegar sozinhos', code:`<span class="ck">def</span> <span class="cf">get_fact</span>() -&gt; <span class="ct2">str</span>:
    <span class="cs">"""Busca uma curiosidade aleatória na API."""</span>
    base_url = <span class="cs">"https://uselessfacts.jsph.pl/random.json?language=en"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        data = response.<span class="cf">json</span>()
        <span class="ck">return</span> data.<span class="cf">get</span>(<span class="cs">"text"</span>, <span class="cs">"Não foi possível obter a curiosidade."</span>)
    <span class="ck">return</span> <span class="cs">"Não foi possível obter os dados. Tente novamente mais tarde."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">fact</span>(ctx):
    random_fact = <span class="cf">get_fact</span>()
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Olha só uma curiosidade: {random_fact}"</span>)
    <span class="cf">speak</span>(random_fact)`},
        {type:'hi', h:'A explicação linha a linha é a avaliação', b:'Quinze minutos com um aluno narrando o próprio código é uma verificação de compreensão melhor do que qualquer quiz. Escolha alguém que construiu por conta própria, e não quem terminou mais rápido, e use <code>data.get("text", "…")</code> como provocação: por que um valor padrão em vez de <code>data["text"]</code>? Porque a API pode não devolver aquele campo — que é o mesmo instinto defensivo do <code>try</code>/<code>except</code>.'},
        {type:'text', h:'Feche pela discussão, não pelo código', b:'Quinze minutos sobre integrar síntese de fala com IA, com tradução para outros idiomas, e para onde a tecnologia de voz está indo. Peça a opinião de cada aluno. O objetivo declarado é que os alunos entendam a importância deste módulo <em>e</em> percebam que exploraram apenas uma pequena parte do que a tecnologia de voz pode fazer — deixe-os com a sensação de que há mais, e não de que o assunto se encerrou.'},
        {type:'tip', txt:'A aula abre com um teste no Tally em que os alunos veem as respostas corretas e os comentários ao terminar. Diga isso de antemão — muda o teste de algo a sobreviver para algo com que aprender. E lembre-os no fim de preparar um projeto para o code review da próxima aula.'}
      ]},
      {t:'🧼 L4 — Código limpo, refatoração e flake8', cards:[
        {type:'text', h:'O que é código limpo, e a definição a dar', b:'Código <strong>fácil de ler, entender e manter</strong> — escrito visando qualidade e estrutura, e não velocidade ou esforço mínimo. Passe dez minutos discutindo as perguntas do slide antes de qualquer código; alunos que acabaram de passar um módulo revisando o trabalho uns dos outros têm opiniões que vale ouvir.'},
        {type:'qa', h:'Por que importa — as razões a que os alunos devem chegar', items:[
          {k:'Manutenção', v:'Código limpo é compreensível mesmo quando não foi você quem escreveu — vital quando um projeto cresce e outras pessoas trabalham nele.'},
          {k:'Menos erros', v:'Código bem estruturado esconde menos bugs, então sobra menos tempo em depuração.'},
          {k:'Testes mais fáceis', v:'Código dividido em partes pequenas é fácil de cobrir com testes.'},
          {k:'Flexibilidade', v:'Código claro é mais fácil de estender quando os requisitos mudam.'},
          {k:'Produtividade do time', v:'Todo mundo consegue entender a lógica independentemente de quem escreveu.'},
          {k:'Refatoração mais fácil', v:'Melhorar o código dói muito menos quando a estrutura já era lógica.'},
          {k:'Integração de quem chega', v:'Pessoas novas entram mais rápido num projeto limpo.'}
        ]},
        {type:'text', h:'A prática — ache os problemas e depois automatize a checagem', b:'Mostre o código bagunçado e dê aos alunos <strong>cinco minutos para acharem problemas sozinhos</strong>, e depois cinco minutos revezando o compartilhamento dos achados e das correções. Só então apresente o <code>flake8</code> — dez minutos instalando e rodando — e cinco minutos corrigindo o que ele apontar. Essa ordem importa: eles precisam exercer o próprio julgamento antes de a ferramenta fazer isso por eles, ou vão aprender a terceirizar o pensamento.'},
        {type:'twocol', left:{h:'Os problemas do exemplo', items:['<code>taxrate</code> é uma constante mas não está em <code>MAIÚSCULAS</code>','<code>Tax</code> — nome de função começando com maiúscula','Funções inteiras escritas numa linha só','Sem espaços entre parâmetros ou em volta do <code>+</code>','A nomenclatura ignora o <code>snake_case</code>','Sem anotações de tipo','Sem docstrings','Cálculos de imposto repetidos em vez de extraídos','Sem validação de entrada','Cálculos e saída no console misturados']}, right:{h:'O que a refatoração faz', items:['<code>TAX_RATE = 0.2</code> como constante nomeada','<code>calculate_tax()</code> em <code>snake_case</code>','Uma instrução por linha, com indentação correta','Espaçamento conforme a PEP 8 em todo o código','Nomenclatura consistente em <code>snake_case</code>','Anotações <code>(price: float) -&gt; float</code>','Uma docstring em cada função','Lógica repetida extraída para funções','Valores validados antes do uso','Cálculo separado da impressão']}},
        {type:'code', lbl:'a versão refatorada', code:`<span class="cc"># Define a alíquota do imposto como constante nomeada</span>
TAX_RATE = <span class="cn">0.2</span>

<span class="ck">def</span> <span class="cf">calculate_tax</span>(price: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Calcula o imposto sobre um valor informado."""</span>
    <span class="ck">return</span> price * TAX_RATE

<span class="ck">def</span> <span class="cf">calculate_total_price</span>(*prices: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Soma os preços informados."""</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

total_price = <span class="cf">calculate_total_price</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>, <span class="cn">400</span>)
tax         = <span class="cf">calculate_tax</span>(total_price)
final_price = total_price + tax

<span class="cf">print</span>(<span class="cs">"Preço final:"</span>, final_price)`},
        {type:'good', txt:'Aponte o que um linter consegue e o que não consegue fazer. O <code>flake8</code> pega espaçamento, estilo de nomes e código não usado — problemas reais, mas rasos. Ele nunca vai te dizer que o mesmo cálculo aparece três vezes, que uma função faz dois trabalhos sem relação ou que um nome é tecnicamente válido mas sem sentido. Esse julgamento é deles, e dizer isso é o que impede que “o linter está feliz” vire sinônimo de “o código está bom”.'},
        {type:'text', h:'A refatoração autônoma', b:'Vinte minutos no segundo exercício, trabalhando sozinhos — você pode ajudar com questões técnicas, mas deixe o pensamento com eles. Depois eles explicam o que corrigiram. As melhorias a procurar: constantes para os valores de pontos, argumentos nomeados para dar flexibilidade, docstrings, uma única função de saída reutilizável em vez de <code>print</code> repetidos, e uma estrutura geral melhor.'},
        {type:'tip', txt:'Esta é a aula para conectar de volta a M6L4, em que os alunos foram orientados a comentar e estruturar os notebooks, e para a frente ao projeto de formatura, que um colega vai ter de ler e testar. Código limpo deixa de ser virtude abstrata no instante em que outra pessoa precisa rodar o seu projeto.'}
      ]}
    ],
    quiz:[
      {q:'Qual a diferença entre reconhecimento de fala e síntese de fala?', opts:['O reconhecimento converte fala em texto ou comandos; a síntese converte texto em fala para que o computador “fale”','O reconhecimento é offline e a síntese é online','São a mesma coisa descrita da perspectiva do usuário e da pessoa desenvolvedora','O reconhecimento trabalha com palavras e a síntese com frases inteiras'], c:0, fb:'As três tecnologias são controle por voz (comandar pela voz), reconhecimento (fala → texto) e síntese (texto → fala). Um assistente de voz usa as três.'},
      {q:'Quais são as três etapas de funcionamento da síntese de fala?', opts:['Análise do texto para pausas e entonação, conversão das palavras em sons a partir de um banco de sons, e então combinação dos sons em fala fluida','Gravação, compressão, reprodução','Tokenização, lematização, geração','Validação da entrada, tradução, saída'], c:0, fb:'M9L1 divide em análise do texto, conversão de texto em som usando um banco com os sons do idioma, e geração da fala buscando uma voz natural.'},
      {q:'Por que o pyttsx3 é descrito como uma solução offline?', opts:['Ele gera a fala localmente no dispositivo, sem exigir conexão com a internet','Ele guarda os arquivos de áudio em cache depois da primeira execução','Ele só funciona com arquivos de texto salvos localmente','Ele usa o pacote de vozes baixado do sistema uma vez por sessão'], c:0, fb:'O pyttsx3 gera a fala no próprio dispositivo — é uma das respostas do quiz de M9L2 e uma vantagem prática real sobre síntese via API.'},
      {q:'Por que o curso usa o wttr.in para o bot de previsão do tempo?', opts:['Ele devolve a previsão por uma requisição HTTP simples, sem conta e sem chave de API, então ninguém trava num cadastro e não há chave para vazar','É o serviço de meteorologia mais preciso disponível','É o único serviço que devolve texto puro','Ele também fornece síntese de fala além da previsão'], c:0, fb:'Sem conta e sem chave de API, a aula continua focada em combinar bots, APIs e síntese em vez de autenticação.'},
      {q:'Um aluno roda o bot falante de previsão e pergunta por que ninguém mais no servidor do Discord consegue ouvir. Qual é a resposta?', opts:['A fala é gerada no computador que roda o bot, e não enviada pelo Discord — o bot fala com quem o está executando','As permissões de voz não estão ativadas para o bot','Ele precisa entrar num canal de voz primeiro','O pyttsx3 precisa de internet para transmitir'], c:0, fb:'É um ponto genuinamente confuso que vale antecipar, e uma forma natural de introduzir a ideia de que código roda em algum lugar específico.'},
      {q:'Como a construção de M9L2 se mantém gerenciável numa aula de live coding?', opts:['Ela é dividida em três etapas — bot básico, depois a chamada à API, depois a síntese — com uma verificação de que todos os alunos estão em dia após cada uma','O tutor escreve enquanto os alunos assistem e copiam no fim','Cada aluno constrói uma etapa e depois elas são combinadas','O código pronto é entregue no início e explicado'], c:0, fb:'Três etapas com um ponto de verificação depois de cada uma, mais alguns minutos no início confirmando que todos estão com o token do bot pronto.'},
      {q:'Em M9L3, o que a etapa de apresentação de 15 minutos está de fato avaliando?', opts:['Compreensão — um aluno narra o próprio código linha a linha, o que revela muito mais do que um quiz','Habilidades de apresentação para a maratona','Se o bot está sem erros','Velocidade de implementação'], c:0, fb:'Um aluno explicando o próprio código linha a linha é a verificação real. Escolha alguém que construiu por conta própria, e não quem terminou mais rápido.'},
      {q:'Por que a aula de código limpo faz os alunos acharem os problemas ANTES de apresentar o flake8?', opts:['Para que exerçam o próprio julgamento primeiro — caso contrário aprendem a terceirizar o pensamento para a ferramenta','Porque o flake8 leva dez minutos para instalar','Porque o flake8 acha problemas diferentes dos que humanos acham','Para que o tutor avalie as respostas antes de a ferramenta corrigir'], c:0, fb:'A ordem é deliberada: cinco minutos achando problemas, cinco compartilhando, e então a ferramenta. Julgamento primeiro, automação depois.'},
      {q:'Qual problema do exemplo bagunçado o flake8 NÃO pegaria?', opts:['Que o mesmo cálculo de imposto se repete várias vezes e deveria ser extraído para uma função','Falta de espaços em volta do operador +','Um nome de função começando com letra maiúscula','Uma constante que não está em maiúsculas'], c:0, fb:'Um linter pega espaçamento, estilo de nomes e código não usado. Lógica duplicada, uma função com dois trabalhos ou um nome válido mas sem sentido exigem julgamento humano.'},
      {q:'Qual destas é uma melhoria de código limpo que a refatoração de M9L4 faz?', opts:['Acrescentar docstrings e anotações de tipo, e separar o cálculo da saída no console','Juntar funções em linhas únicas para reduzir o tamanho do arquivo','Remover todos os comentários para que o código fale por si','Renomear variáveis para letras isoladas por brevidade'], c:0, fb:'A refatoração introduz uma constante nomeada, nomenclatura em snake_case, uma instrução por linha, docstrings, anotações de tipo, funções extraídas, validação e a separação entre cálculo e saída.'}
    ]
  },
  {
    id:14, emoji:'🎓', color:'#EF4444',
    title:'M10 — A Maratona e o Projeto de Formatura',
    desc:'Módulo 10 do curso: o briefing sobre mudança climática, brainstorm e escolha do tipo de projeto, habilidades de apresentação, documentação de testes e checklists, testes entre colegas e preparação para a formatura.',
    obj:'Conduza o encerramento. Você deve saber montar uma maratona de programação, conduzir um brainstorm que termine numa ideia assumida, ajudar os alunos a escolher um tipo de projeto compatível com as habilidades deles, ensinar checklists de apresentação e de testes, conduzir uma rodada de testes entre colegas com feedback construtivo e deixar todo aluno pronto para se formar com algo terminado.',
    prep:'~2 a 3 horas, mais o tempo contínuo de acompanhamento depois que os projetos começam.',
    practical:{
      intro:'Antes de dar qualquer aula do Módulo 10 do curso, você precisa ter feito pessoalmente:',
      items:[
        'Conduziu um brainstorm até uma decisão assumida — mesmo sozinho, no papel, para sentir o formato',
        'Escolheu um tipo de projeto para uma ideia e escreveu por que aquele tipo se encaixa',
        'Preparou um pitch de um minuto de um projeto usando as oito regras de apresentação, e cronometrou',
        'Escreveu um checklist de testes usando os cinco passos e testou um projeto seu contra ele',
        'Clonou um projeto que não escreveu, montou o ambiente dele e o colocou para rodar',
        'Escreveu um feedback em três partes — pontos positivos, erros e recomendações — sobre o código de outra pessoa',
        'Releu suas construções dos Módulos 5 a 13, porque os alunos vão perguntar sobre qualquer uma delas'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'Três aulas antes da formatura: <strong>L1</strong> o briefing sobre mudança climática, o brainstorm, a escolha do tipo de projeto e a apresentação dos próximos passos; <strong>L2</strong> habilidades de apresentação, respostas às perguntas que os alunos prepararam, construção do recurso principal e criação de um checklist de testes; <strong>L3</strong> correção dos principais problemas, testes entre colegas contra o checklist, o Cartão de Criatividade e a preparação para a formatura.',
          why:'Tudo no curso existe para tornar isto possível. É também onde o perfil de risco muda: o perigo já não é os alunos não saberem programar, e sim escolherem algo que não conseguem terminar.',
          learn:'Os alunos pesquisam um problema real, geram e assumem uma ideia, escolhem que tipo de projeto se encaixa nela, criam um repositório público, apresentam em um minuto, constroem o recurso central, escrevem um checklist de testes, testam o projeto de um colega contra ele, dão e recebem feedback e preparam uma apresentação.',
          confident:'Conduzir um brainstorm até uma decisão assumida; ajudar os alunos a casar ideia com tipo de projeto; as oito regras de apresentação; o que é documentação de testes e os cinco passos de um checklist; e manter o escopo pequeno o bastante para terminar.'
        }
      ]},
      {t:'🌍 L1 — O briefing, o brainstorm e a decisão', cards:[
        {type:'text', h:'O problema: mudança climática, pesquisada e não exposta', b:'Dê aos alunos cinco minutos para pesquisarem eles mesmos artigos da ONU e acharem respostas a quatro perguntas: <strong>o que é mudança climática</strong>, <strong>quão séria ela é e se nos diz respeito</strong>, <strong>o que a provoca</strong> e <strong>como podemos desacelerá-la</strong>. Você pode dividir as responsabilidades — um aluno por pergunta — e depois juntar os achados. Em seguida explique o que é uma maratona de programação e o que os espera no módulo.'},
        {type:'text', h:'O brainstorm, com uma decisão real no fim', b:'Primeiro, cada pessoa cria um <strong>novo repositório público no GitHub</strong> para o projeto. Depois, cinco minutos num quadro compartilhado gerando respostas a uma pergunta: como podemos resolver o problema da mudança climática? Regras como antes — <strong>sem avaliação durante a geração</strong>, anotem até as absurdas. Note a sutileza do plano: eles geram <em>soluções para problemas</em>, e não ideias de projeto — a tecnologia vem depois. Depois avaliem: quais ideias poderiam ser ajustadas e melhoradas? Por fim, cada aluno escolhe uma e <strong>a escreve no README do próprio repositório</strong>.'},
        {type:'good', txt:'Fazê-los assumir a ideia no README em vez de no chat é um detalhe pequeno e excelente. É público, é permanente, e faz a próxima aula começar com todo mundo tendo uma ideia declarada, e não uma intenção vaga. Não deixe essa etapa escorregar.'},
        {type:'text', h:'Escolhendo o tipo de projeto', b:'Agora a decisão tecnológica. Pergunte: o curso está terminando — que tipos de projeto aprendemos a construir? Relembre-os das aulas em que estão as respostas, se precisarem. Depois peça que escolham o tipo que vão usar para realizar a ideia <strong>e expliquem por quê</strong>, registrando isso também no README. Justificar a escolha é o ponto — casar uma solução com as ferramentas que você realmente tem é exatamente o julgamento que M6L3 introduziu.'},
        {type:'qa', h:'O cardápio que eles devem conseguir lembrar', items:[
          {k:'Um bot do Discord', v:'Comandos, arquivos, APIs — opcionalmente com o próprio modelo de visão.'},
          {k:'Um site em Flask', v:'Templates, formulários, banco de dados, login, publicado numa URL real.'},
          {k:'Um script ou notebook no Colab', v:'Processamento de imagem, scraping, PLN, detecção.'},
          {k:'Um projeto com voz', v:'Transcrição, tradução ou síntese acrescentadas a qualquer um dos anteriores.'}
        ]},
        {type:'warn', txt:'A etapa final desta aula apresenta os outros cursos da Kodland e inclui um quiz cujos resultados vão para o time comercial, ficam registrados por aluno e são compartilhados com as famílias. Seja direto sobre o que é isso: conduza com cordialidade e honestidade, não comente respostas individuais enquanto os alunos respondem, e não force a venda. Sua credibilidade com o grupo vale mais do que um lead.'},
        {type:'tip', txt:'Depois da aula, <strong>reúna todas as ideias num lugar só e envie ao grupo</strong> — capturas de tela ou uma lista de links — para que os alunos vejam e discutam os planos uns dos outros. A lição de casa é preparar um template de projeto com as bibliotecas instaladas <em>e</em> uma lista escrita de dúvidas de implementação, que é o que faz a próxima aula funcionar.'}
      ]},
      {t:'🎤 L2 — Apresentar, construir e o checklist', cards:[
        {type:'warn', txt:'Duas coisas a fazer <strong>antes</strong> desta aula: reunir todas as perguntas que os alunos escreveram na lição de casa numa lista única e visível (um documento, um slide, um quadro) e decidir os grupos das salas simultâneas com antecedência — agrupando alunos por perguntas parecidas ou tipos de projeto parecidos. Improvisar isso na aula desperdiça a etapa.'},
        {type:'qa', h:'As categorias da maratona', items:[
          {k:'🎤', v:'A melhor apresentação'},
          {k:'🧩', v:'A solução técnica mais complexa'},
          {k:'✨', v:'O projeto com a melhor aparência no Git'},
          {k:'🎯', v:'A solução mais aplicável'}
        ]},
        {type:'text', h:'Diga a ressalva que vem junto', b:'As categorias deixam os alunos mirarem num objetivo que combina com os pontos fortes deles — mas diga o que o plano diz em seguida: isso <strong>não</strong> significa se especializar numa única direção. Um projeto realmente bom é bom em todos os aspectos. As categorias são motivação, e não permissão para negligenciar três quartos do trabalho.'},
        {type:'text', h:'As oito regras de apresentação', b:'Peça que os alunos leiam as regras e digam quais estão vendo pela primeira vez, e então apliquem na hora: <strong>um minuto</strong> cada para apresentar a ideia e os resultados da lição de casa, com cronômetro na tela. Se achar que vão travar, <strong>vá você primeiro</strong> — faça um pitch de um minuto de um projeto seu e destaque os pontos principais.'},
        {type:'twocol', left:{h:'Regras 1 a 4', items:['<strong>Prepare-se</strong> — tenha materiais e dados abertos e prontos','<strong>Defina o objetivo</strong> — saiba que mensagem e que resultado você quer','<strong>Estruture</strong> — introdução, corpo principal, conclusão','<strong>Use linguagem simples</strong> — e explique qualquer termo que precisar usar']}, right:{h:'Regras 5 a 8', items:['<strong>Pratique</strong> — na frente do espelho ou de um amigo, para estilo e confiança','<strong>Envolva</strong> — converse com a plateia, faça perguntas a ela','<strong>Controle o tempo</strong> — não corra, não se arraste','<strong>Prepare-se para perguntas</strong> — antecipe-as; isso demonstra competência']}},
        {type:'text', h:'As etapas de desenvolvimento', b:'Os alunos vão para salas simultâneas agrupadas por pergunta ou tipo de projeto e começam a construir a lógica, trocando ideias e buscando soluções juntos. <strong>Você circula entre as salas respondendo às perguntas da lista</strong>, marcando cada uma como resolvida para poder mostrar a lista concluída depois. Então todos voltam à sala principal para continuar, com perguntas gerais incentivadas para que os alunos se ajudem.'},
        {type:'text', h:'Documentação de testes e o checklist', b:'<strong>Documentação de testes</strong> é o conjunto de documentos e instruções usados para planejar e executar os testes: como verificar que o software funciona e como encontrar e eliminar erros. Existe para garantir qualidade, documentar os problemas encontrados, simplificar a comunicação sobre o que precisa ser testado e poder ser reexecutada após mudanças futuras. Depois montem <strong>um checklist universal para o grupo inteiro</strong>, usando as rubricas de avaliação das aulas anteriores como referência — e envie a versão final aos alunos.'},
        {type:'qa', h:'Os cinco passos para montar um checklist', items:[
          {k:'1. Identificar os objetivos', v:'O que você quer de fato testar — funcionalidade, interface, desempenho, segurança?'},
          {k:'2. Dividir em categorias', v:'Seções como “Funcionalidade”, “Interface”, “Segurança”.'},
          {k:'3. Descrever os resultados esperados', v:'Para cada categoria, o que você deve ver? Descreva o comportamento esperado.'},
          {k:'4. Acrescentar tarefas por categoria', v:'Itens concretos — por exemplo, em Funcionalidade, “verificar que o cadastro de usuário funciona”.'},
          {k:'5. Definir prioridades', v:'Quais tarefas importam mais e devem ser testadas primeiro.'}
        ]}
      ]},
      {t:'🏁 L3 — Testes entre colegas, feedback e preparação da formatura', cards:[
        {type:'warn', txt:'<strong>Verifique o estado do projeto de cada aluno antes desta aula.</strong> A ordem das etapas depende disso: se os projetos estiverem realmente funcionando, faça primeiro a etapa de testes entre colegas; se não estiverem, ajude os alunos a terminá-los e teste depois. Prepare também a ordem das apresentações com antecedência, para manter a etapa fluindo.'},
        {type:'text', h:'A abertura honesta', b:'Cada aluno usa <strong>um minuto para descrever o principal problema do próprio projeto</strong> — não os recursos, o problema. Cronômetro ligado, ordem combinada antes. Isso cria um clima em que estar travado é normal e dizível, que é exatamente o que você precisa na última semana antes da formatura.'},
        {type:'text', h:'Testes entre colegas, bem estruturados', b:'Atribua a cada aluno o projeto de um colega. Eles <strong>clonam</strong>, garantem que têm acesso a tudo de que precisam, montam o ambiente a partir do Pipfile e percorrem o <strong>checklist compartilhado</strong>, registrando os resultados. Envie o checklist de novo, caso alguém tenha perdido. Depois preparam o feedback em três partes: os <strong>pontos positivos</strong>, os <strong>erros descobertos</strong> e as <strong>recomendações de correção</strong>. O feedback é trocado no chat geral para que você possa moderar.'},
        {type:'good', txt:'Diga o enquadramento em voz alta antes de começarem: <strong>isto não faz parte de nenhuma avaliação — é ajudar uns aos outros.</strong> O feedback precisa ser construtivo e correto, sem comentários negativos ou ofensivos. Se um aluno tiver dificuldade de formular algo, ajude a achar as palavras. Errar nisso na última semana é pior do que não fazer.'},
        {type:'hi', h:'A coisa mais importante que você diz no módulo inteiro', b:'Depois do feedback, alguns alunos vão querer reconstruir tudo antes da formatura. Corte isso na raiz, nas próprias palavras do plano: <strong>conclua o projeto de formatura sem complicar demais.</strong> Foque no que dá para terminar no tempo disponível e guarde as melhorias para depois. Um projeto simples e terminado, apresentado com confiança, ganha de um ambicioso pela metade todas as vezes — e este é o momento em que os alunos mais precisam ouvir isso.'},
        {type:'text', h:'O Cartão de Criatividade', b:'Um formulário que cada aluno preenche durante as aulas, cobrindo a <strong>descrição do projeto final</strong>, sua <strong>originalidade</strong>, os <strong>obstáculos</strong> encontrados e o <strong>progresso</strong>. Garanta que todos preencham o seu: ajuda na aula de apresentação e é como você acompanha onde cada projeto realmente está.'},
        {type:'tip', txt:'A lição de casa é preparar a apresentação — Google Apresentações ou o README do projeto. Sinalize também as instruções de preparação da formatura: os alunos precisam baixar e instalar um plano de fundo festivo, e as instruções listam o que mais ter pronto. Cobre isso, porque um aluno que chega despreparado à formatura lembra disso, e não do projeto que construiu.'}
      ]}
    ],
    quiz:[
      {q:'No brainstorm de M10L1, o que exatamente os alunos estão gerando?', opts:['Soluções para o problema da mudança climática — o tipo de projeto e a tecnologia são escolhidos depois','Ideias de projeto com a tecnologia já decidida','Uma lista de bibliotecas que querem usar','Nomes para os repositórios'], c:0, fb:'A nota é específica: não se deve gerar ideias de projeto, e sim soluções para problemas. Casar uma tecnologia com a solução é a etapa seguinte.'},
      {q:'Onde os alunos registram a ideia com que se comprometem?', opts:['No README do novo repositório público do GitHub que criam — público e permanente','No chat do grupo no WhatsApp','Nas anotações do tutor','Apenas no quadro compartilhado do brainstorm'], c:0, fb:'Tanto a ideia escolhida quanto, depois, o tipo de projeto vão para o README do repositório — assim a próxima aula começa com todo mundo tendo um plano declarado.'},
      {q:'Por que o curso faz os alunos explicarem POR QUE escolheram determinado tipo de projeto?', opts:['Porque casar uma solução com as ferramentas que você de fato tem é o julgamento profissional que o curso vem construindo desde M6L3','Porque o tutor precisa disso para dar nota','Porque a plataforma exige uma justificativa escrita','Para decidir as categorias da maratona'], c:0, fb:'Escolher uma ferramenta que sirva ao problema e à sua própria capacidade é julgamento de engenharia real — apresentado pela primeira vez ao avaliar se o YOLO servia à entrada.'},
      {q:'Que ressalva acompanha as quatro categorias da maratona?', opts:['Elas deixam os alunos mirarem nos próprios pontos fortes, mas um projeto realmente bom é bom em todos os aspectos — não é desculpa para se especializar','Só uma categoria pode ser disputada por aluno','As categorias são decididas por voto dos alunos','Vencer uma categoria substitui a apresentação de formatura'], c:0, fb:'O plano diz isso logo depois de listá-las: isso não significa que você deva se especializar em apenas uma direção.'},
      {q:'O que você precisa preparar ANTES de conduzir M10L2?', opts:['Uma lista única e visível de todas as perguntas que os alunos escreveram na lição de casa, mais os grupos das salas definidos com antecedência','O checklist finalizado para o grupo inteiro','Uma demonstração de cada tipo de projeto','Os slides da formatura'], c:0, fb:'A nota pede que você organize as perguntas numa lista que possa mostrar ao grupo e defina os agrupamentos com antecedência — por perguntas parecidas ou projetos parecidos.'},
      {q:'O que é documentação de testes, conforme o curso a define?', opts:['O conjunto de documentos e instruções usados para planejar e executar os testes — como verificar que o software funciona e como achar e eliminar erros','Um registro de todos os bugs que um projeto já teve','O README do projeto','A rubrica de avaliação do tutor'], c:0, fb:'Ela existe para garantir qualidade, documentar os problemas descobertos, simplificar a comunicação sobre o que precisa de teste e poder ser reexecutada após mudanças.'},
      {q:'Um aluno leu o feedback do colega e agora quer reconstruir o projeto inteiro antes da formatura. O que você diz a ele?', opts:['Conclua sem complicar demais — foque no que dá para terminar no tempo disponível e guarde as melhorias para depois','Reconstrua, já que o feedback apontou problemas reais','Apresente a versão atual e diga que está inacabada','Troque totalmente para um tipo de projeto mais simples'], c:0, fb:'É o conselho explícito nas dicas de M10L3: terminar sem complicar demais, focar no que cabe no tempo e guardar melhorias para depois.'},
      {q:'Como o feedback entre colegas deve ser enquadrado antes de os alunos começarem?', opts:['Como ajudar uns aos outros, e não como parte de qualquer avaliação — construtivo e correto, sem comentários negativos ou ofensivos','Como exercício avaliado, para que os alunos levem a sério','Como uma competição para achar mais bugs','Como anônimo, para que os alunos possam ser diretos'], c:0, fb:'O plano é enfático: o feedback precisa ser construtivo e correto, e é importante dizer que isto não faz parte da avaliação, e sim é um meio de ajudar uns aos outros.'},
      {q:'O que é o Cartão de Criatividade, e por que importa?', opts:['Um formulário com a descrição do projeto, sua originalidade, obstáculos e progresso — ajuda os alunos na apresentação e mostra a você onde cada projeto está','Um certificado entregue na formatura','Um cartão com sugestões para alunos sem ideia','O formulário de feedback dos testes entre colegas'], c:0, fb:'Garanta que todos preencham: apoia o aluno na aula de apresentação e permite que você acompanhe o progresso real de cada projeto.'},
      {q:'Como você deve conduzir a etapa de M10L1 que apresenta os outros cursos da Kodland?', opts:['Com cordialidade e honestidade, sem forçar a venda, e sem comentar respostas individuais do quiz enquanto os alunos respondem','Pular, já que não é conteúdo técnico','Enfatizar que os alunos precisam continuar em outro curso','Deixar que completem como lição de casa'], c:0, fb:'O plano pede que você não comente cada pergunta, para que os alunos respondam sem influência externa. Conduzir com honestidade protege sua credibilidade com o grupo.'}
    ]
  },
  {
    id:15, emoji:'📋', color:'#6366F1',
    title:'O Ofício de Conduzir Aulas',
    desc:'As habilidades mais profundas de condução: aplicar bem os cinco métodos, diferenciação, responder ao que você não sabe, gestão de sala, avaliar trabalho pela metade, adaptar para aulas individuais de 50 minutos e as oito técnicas de reflexão.',
    obj:'Domine a condução, não o conteúdo. O Módulo 3 te deu o esqueleto da aula e os nomes dos métodos; este módulo te faz bom neles. Ao final você deve saber diferenciar na hora, lidar com uma pergunta além do seu conhecimento sem perder o grupo, avaliar código que funciona pela metade com justiça, reduzir uma aula de 90 minutos para 50 e fechar toda aula com uma reflexão que consolida o aprendizado.',
    prep:'~3 horas. Melhor ler depois de ter passado pelos módulos de conteúdo.',
    practical:{
      intro:'Antes do teste, ensaie o que é difícil fazer sem preparo:',
      items:[
        'Disse em voz alta o roteiro do “não sei, vamos descobrir” até soar natural, e não como desculpa',
        'Pegou um plano de aula de 90 minutos e escreveu a versão individual de 50 minutos dele',
        'Avaliou um trecho de código que funciona pela metade contra os critérios do curso e justificou a nota',
        'Escolheu três técnicas de reflexão que você consegue conduzir sem preparo nenhum',
        'Escreveu sua própria lista de tarefas adicionais para quem termina rápido, por módulo'
      ]
    },
    sections:[
      {t:'🧭 Visão geral e objetivos', cards:[
        {type:'brief',
          overview:'O ofício de condução que se apoia sobre o esqueleto da aula: aplicar <em>bem</em> os cinco métodos, diferenciação, <strong>responder a perguntas além do seu conhecimento</strong>, gestão de sala, <strong>avaliar trabalho parcial</strong>, adaptar uma aula de 90 minutos ao formato <strong>individual de 50 minutos</strong> e as oito técnicas de reflexão.',
          why:'Conhecimento de conteúdo é necessário, mas não suficiente. Um tutor que domina Flask perfeitamente e conduz mal a aula perde o grupo; um tutor que sabe lidar com a sala se recupera de qualquer coisa — inclusive de não saber uma resposta.',
          learn:'Nada de novo para os alunos — este módulo é sobre <em>você</em>. É a camada que decide se os outros quinze módulos vão pegar.',
          confident:'Conduzir LiveCoding e UMC corretamente; os movimentos de diferenciação nas duas direções; um roteiro para o “não sei”; como avaliar código que funciona pela metade; o que cortar numa aula individual; e três técnicas de reflexão que você consegue conduzir sem preparo.'
        },
        {type:'tip', txt:'O Módulo 3 cobriu o esqueleto da aula e o que significam os cinco nomes de método. Este módulo pressupõe isso e vai mais fundo. Se “EduScrum”, “LiveCoding” ou “Usar–Modificar–Criar” ainda estiver nebuloso, volte antes ao Módulo 3 — o resto daqui vai pegar melhor.'}
      ]},
      {t:'🙋 Quando você não sabe a resposta', cards:[
        {type:'text', h:'Isso vai acontecer, e mais cedo do que você espera', b:'O Python Pro é um curso avançado e alguns desses alunos são afiados. Alguém vai perguntar o que é de fato um hash, ou como a rede neural decide, ou por que o <code>Client</code> existe se o <code>Bot</code> é melhor. Se você chegou a este trabalho vindo de fora da área de desenvolvimento, vai ser perguntado sobre algo que não consegue responder nas primeiras aulas. Isso é <strong>normal e sobrevivível</strong> — o que importa é ter decidido de antemão como você vai lidar.'},
        {type:'qa', h:'Os três movimentos, e quando usar cada um', items:[
          {k:'Pesquisar junto — o padrão', v:'“Ótima pergunta, não tenho certeza. Vamos descobrir — onde a gente procuraria?” E então faça isso de verdade, compartilhando sua tela. É a opção mais forte porque <em>é</em> a aula M1L4: ninguém sabe uma biblioteca de cor, e achar a resposta é a habilidade profissional. Você não está encobrindo uma lacuna; está demonstrando exatamente o que deveria ensinar.'},
          {k:'Guardar e retomar', v:'Quando você está no meio de um sprint e o tempo está curto: “Essa pergunta é muito boa e eu quero dar uma resposta decente — deixa eu voltar nela no chat do grupo hoje à noite.” <strong>E então faça mesmo.</strong> Uma pergunta retomada constrói mais confiança do que uma resposta instantânea; uma esquecida custa mais do que admitir a ignorância teria custado.'},
          {k:'Nomear o limite com honestidade', v:'Quando a pergunta está genuinamente além do curso: “Isso vai além de onde este curso chega, e sinceramente além do que eu conheço bem. A versão curta de que tenho certeza é…” e então dê o que você sabe. Alunos respeitam um limite claro muito mais do que uma resposta vaga.'}
        ]},
        {type:'warn', txt:'O único movimento que de fato te custa a sala é <strong>chutar com confiança</strong>. Os alunos testam respostas — eles vão colar aquilo num buscador durante a aula. Estar errado soando seguro é o que encerra sua credibilidade; dizer “não sei” nunca encerra. Diga isso em voz alta algumas vezes antes da primeira aula, até parar de soar como confissão.'},
        {type:'good', txt:'Reenquadre: um tutor que diz “não sei, vamos descobrir” na frente de adolescentes está modelando exatamente o comportamento que o curso quer deles. O jogo “todos contra um” de M6L1 existe justamente para ajudar os alunos a superar o medo de perguntar. Não dá para ensinar isso fingindo onisciência.'},
        {type:'tip', txt:'Faça também o trabalho chato de prevenção: leia direito o plano e os materiais da próxima aula e anote os dois ou três pontos em que se sente inseguro. A maioria das perguntas sem resposta é previsível a partir do conteúdo — decoradores em M1L3, <code>async</code> em toda aula de bot, hashing em M4L2, como o modelo de fato aprende em M5L4. O Módulo 2 do treinamento cobre os três primeiros.'}
      ]},
      {t:'🧑‍🤝‍🧑 Gestão de sala com adolescentes online', cards:[
        {type:'qa', h:'As situações que você vai encontrar de verdade', items:[
          {k:'Um aluno não liga a câmera', v:'Os planos pedem que você verifique se câmeras e microfones funcionam, e isso é sobre participação, não vigilância. Não faça disso um confronto na frente do grupo — pergunte uma vez, de forma pública e leve; se continuar, pergunte em particular se algo está errado. Engajamento no chat e nas tarefas importa mais do que um rosto visível.'},
          {k:'Um aluno domina tudo', v:'Use as estruturas em vez da sua autoridade: o jogo da “bola”, em que quem fala escolhe quem fala em seguida, a regra de que o mesmo aluno não responde duas vezes seguidas, e pedir a opinião de um aluno mais quieto pelo nome. Deixe o formato fazer o limite.'},
          {k:'Um aluno atrapalha ou está disperso', v:'Dê a ele um trabalho. Neste curso isso é fácil — peça que conduza uma instalação, compartilhe a tela ou explique a solução dele. Atrapalhar costuma ser sinal de estar subocupado, e o curso é cheio de papéis legítimos para distribuir.'},
          {k:'Uma sala simultânea não está funcionando', v:'Entre nela. Os planos já preveem que você circule entre as salas. Se uma dupla travou, reafirme o objetivo concreto e o tempo restante — tarefas vagas travam duplas mais rápido do que dificuldade.'},
          {k:'Ninguém responde à sua pergunta', v:'Quase sempre a pergunta foi grande demais. Encolha: em vez de “como resolveríamos isso?”, “que tipo esta variável deveria ter?”. Os planos modelam isso o tempo todo com provocações estreitas e respondíveis.'},
          {k:'Um aluno fica em silêncio a aula inteira', v:'Anote e aja na aula seguinte — a checagem da lição é sua leitura de quem está se desengajando. Pergunte algo que você sabe que ele consegue responder, para que a primeira coisa que ele diga seja um acerto.'}
        ]},
        {type:'good', txt:'O curso te dá uma quantidade incomum de boa vontade para trabalhar: os alunos estão construindo coisas que escolheram, para problemas que escolheram, e publicando. Apoie-se nisso quando o engajamento cair. “Para quem é isso?” e “o que deixaria o seu diferente?” reengajam um adolescente muito melhor do que “prestem atenção, por favor”.'},
        {type:'warn', txt:'Duas coisas a não fazer, ambas explícitas nos planos: não seja negativo com quem não fez a lição de casa, e não exponha ninguém por falta de equipamento ou por uma máquina lenta. As duas costumam ser sobre circunstâncias em casa, e não sobre esforço.'}
      ]},
      {t:'🎓 Os cinco métodos, bem-feitos', cards:[
        {type:'text', h:'1. Scrum e EduScrum', b:'Usado a partir de M1L2 e ensinado explicitamente no Módulo 8 do curso. A aula é dividida em <strong>sprints</strong> com limites rígidos de tempo, cada um abrindo com uma discussão curta e fechando com um balanço. As duas perguntas do balanço são fixas: <strong>“alcançamos mesmo o resultado?”</strong> e <strong>“como isso nos aproxima de resolver o problema principal?”</strong>. Aulas de EduScrum mais completas acrescentam uma retrospectiva com três perguntas: o que vocês realizaram e deu tempo para tudo; qual etapa foi a mais difícil; como vocês melhorariam este sprint.'},
        {type:'text', h:'2. LiveCoding', b:'O tutor constrói o código <strong>gradualmente, junto com os alunos</strong>, compartilhando a tela — para que vejam programar como uma corrente de pequenas decisões, e não como um artefato pronto. Fale enquanto programa, faça perguntas para manter o engajamento, explique a lógica de cada movimento, <strong>cometa erros de propósito e peça que os encontrem</strong>, não corra, faça pausas para que acompanhem, use as ferramentas de desenho do Zoom para visualizar a lógica, use fonte grande e clara, e escreva em blocos de código para que a estrutura fique visível.'},
        {type:'text', h:'3. Usar–Modificar–Criar', b:'Usado em M1L3 e M6L1. Os alunos primeiro <strong>usam</strong> código funcionando — rodam, veem funcionar, experimentam livremente — depois o <strong>modificam</strong> enquanto você explica o que cada mudança faz, e só então <strong>criam</strong> a própria versão. Faça os dois primeiros passos na ordem e resista a explicar cedo: cinco minutos de “muda algo e roda de novo” produzem perguntas melhores do que qualquer exposição.'},
        {type:'text', h:'4. Metacognição', b:'Apresentada em M2L1 como o “trilho da metacognição” — cinco paradas programadas ao longo da aula: enunciar os objetivos; autoquestionar como o conhecimento prévio ajudou; identificar as ferramentas e estratégias usadas; avaliar se essas estratégias funcionaram; e refletir se elas se transferem para fora do curso. Leia o material do tutor antes de conduzir. O movimento mais útil que ela te dá: a frustração de um aluno é <strong>informação válida sobre a estratégia que ele escolheu</strong>, e não evidência sobre a capacidade dele.'},
        {type:'text', h:'5. Gamificação', b:'Não é enfeite — é o mecanismo de entrega de uma teoria que de outra forma seria palestra. O repertório do curso: times de quiz no <strong>jogo da velha</strong> (M5L4), <strong>“todos contra um”</strong> com um aluno especialista (M6L1), o jogo da <strong>“bola”</strong> em que quem fala escolhe quem fala em seguida (M1L3), as caças ao código de dois minutos <strong>“ache se conseguir”</strong> (M3L4), <strong>competições de acurácia</strong> (M5L4, M6L2) e o <strong>concurso de melhor meme</strong> (M3L4). Vários também distribuem o tempo de fala automaticamente — a regra de que o mesmo aluno não responde duas vezes seguidas faz mais pela participação do que perguntar diretamente aos mais quietos.'},
        {type:'tip', txt:'Quando a nota de uma aula nomeia um método, ela está dizendo que a aula não funciona de outro jeito. Uma aula de UMC entregue como palestra, ou uma de EduScrum sem controle de tempo, produz uma etapa estourada e um grupo desengajado. Leia a nota no topo do plano antes de qualquer coisa.'}
      ]},
      {t:'⚖️ Diferenciação', cards:[
        {type:'twocol', left:{h:'🚀 Para quem está adiantado', items:['Use as <strong>tarefas adicionais</strong> já previstas (⭐️ / “Adic.”) — existem em quase toda aula','Peça que <strong>compartilhem a tela e conduzam</strong> uma instalação ou uma etapa de live coding','Peça que deem uma <strong>mini masterclass</strong> para os colegas','Aponte-os para a <strong>documentação</strong> em uma tarefa mais funda dentro do tema de hoje','Dê a versão aberta “faça do seu jeito” do projeto']}, right:{h:'🐢 Para quem está atrasado', items:['<strong>Reduza o escopo</strong> — uma versão simples terminada ganha de uma ambiciosa inacabada','Entregue um <strong>ponto de partida</strong>: o Basic Bot, a branch do repositório, o Pipfile da solução, o CSV compartilhado','Deixe o <strong>assistente técnico</strong> ajudar enquanto você mantém a turma andando','<strong>Coloque em dupla</strong> numa sala simultânea, ou acompanhe individualmente','Corrija <em>o único</em> problema que trava e garanta uma vitória visível']}},
        {type:'warn', txt:'Nunca deixe uma máquina quebrada manter a turma refém. Os planos dizem isso em vários pontos: comece com os alunos que estão prontos, leve ajuda a quem travou e use o plano B preparado. Um problema de instalação não vale vinte minutos do tempo de nove alunos.'},
        {type:'good', txt:'O melhor movimento de diferenciação do curso é transformar um aluno rápido em professor. Aprofunda a compreensão dele, te compra tempo com quem travou e não custa nada. Elogie o <em>explicar</em>, não o terminar — é isso que torna aquilo uma recompensa, e não uma tarefa extra.'}
      ]},
      {t:'📊 Avaliação e a plataforma', cards:[
        {type:'text', h:'Como o trabalho é avaliado', b:'As tarefas são <strong>corrigidas automaticamente</strong> pela plataforma ou <strong>manualmente por você</strong>. As manuais vêm com critérios e pontuações — por exemplo, funções escritas e código funcionando valem 30 pontos, com a tarefa adicional 35, código que não funciona 0; os projetos de módulo valem até <strong>50 pontos</strong> e têm uma ferramenta de avaliação dedicada; um README vale 20 sem estrutura, 30 estruturado com emojis, +5 por imagem ou GIF, +10 por arquivo de licença. Use as ferramentas onde elas existem e lance as notas na plataforma.'},
        {type:'qa', h:'Os detalhes operacionais que pegam tutores novos', items:[
          {k:'O botão Enviar', v:'O trabalho só conta depois de enviado. Diga “confiram se enviaram a atividade de aula” ao fim de toda aula, e verifique no Backoffice.'},
          {k:'Links no chat', v:'Várias tarefas avaliadas são corrigidas a partir de um link do GitHub postado no chat da tarefa. Sem link, aluno sem nota — cobre isso durante a aula.'},
          {k:'Prazos', v:'Combine os prazos da lição de casa com os alunos e deixe tempo suficiente para avaliar direito.'},
          {k:'Presença', v:'Registre conversando com os alunos, e não como chamada formal.'},
          {k:'O chat do grupo', v:'A lição de casa pode ser discutida ali entre as aulas — lembre os alunos, para que não esperem uma semana travados.'}
        ]},
        {type:'text', h:'A etapa de carreira no fim de módulo', b:'Os Módulos 1, 2, 3 e 4 do curso terminam com uma etapa curta que conecta o trabalho a uma carreira: comemore terminar um tópico que pouca gente termina, mostre as habilidades destravadas e conecte a caminhos profissionais — a presença do Python em grandes produtos, no bloco de automação; a pessoa cientista de dados como “detetive da informação”, no bloco de IA; e as vantagens de ser especialista em IA, no bloco aplicado. Pergunte o que os alunos sabem antes de contar, e pergunte o que gostariam de fazer com essas habilidades.'},
        {type:'warn', txt:'Uma etapa em M10L1 apresenta os outros cursos da Kodland e coleta resultados de quiz que vão para o time comercial e para as famílias. Conduza com cordialidade e honestidade, não comente respostas enquanto os alunos respondem, e não force a venda. Sua credibilidade com o grupo vale mais que um lead.'}
      ]},
      {t:'💭 As oito técnicas de reflexão', cards:[
        {type:'text', h:'Alterne entre elas — essa é a instrução', b:'Os planos das aulas mais avançadas trazem oito técnicas e recomendam usar <strong>uma diferente a cada aula</strong>. Mantê-las em rodízio é o que impede que os dez minutos finais virem um ritual que os alunos apenas atravessam. Tenha três ou quatro que você consiga conduzir sem preparo.'},
        {type:'qa', h:'As oito', items:[
          {k:'1. Completar a frase', v:'“Hoje eu aprendi que…”, “A parte de que mais gostei na aula foi…”'},
          {k:'2. O quadro das descobertas', v:'Abra um quadro no Zoom e peça que cada um escreva uma coisa nova — um fato, um truque, um termo, uma ideia que vale lembrar.'},
          {k:'3. Em um meme', v:'Cada pessoa posta um meme ou imagem descrevendo a impressão que teve da aula.'},
          {k:'4. Perguntas-relâmpago', v:'Respostas rápidas de uma frase: o mais marcante, a tarefa mais interessante ou desafiadora, algo aproveitável fora da aula.'},
          {k:'5. Algo te surpreendeu?', v:'Cada um, na sua vez, nomeia o que o surpreendeu ou impressionou.'},
          {k:'6. Uma pequena vitória', v:'Cada pessoa compartilha uma conquista — mesmo “escrevi código sem erros” ou “ajudei um colega”.'},
          {k:'7. Ensine um amigo', v:'Vinte segundos cada explicando o que ensinariam a um amigo que faltou. Excelente para consolidar e para dar confiança.'},
          {k:'8. Uma dica secreta', v:'Cada pessoa compartilha um conselho para outros aprendizes — “confira seu código a cada passo”, “não tenha medo de testar código novo”.'}
        ]},
        {type:'good', txt:'“Ensine um amigo” é a mais diagnóstica das oito. Um aluno que consegue explicar a aula de hoje em vinte segundos entendeu; um que não consegue, não entendeu — e você descobre isso nos últimos cinco minutos da aula, e não no teste da semana que vem.'},
        {type:'text', h:'E feche sempre do mesmo jeito', b:'Despeça-se direito, diga que espera todo mundo na próxima aula e lembre que dá para discutir a lição de casa no chat do grupo <strong>sem esperar a aula seguinte</strong>. Isso aparece no fim de todos os quarenta planos de aula. Leva quinze segundos, e é a diferença entre uma turma e um grupo.'}
      ]},
      {t:'✍️ Avaliar código que funciona pela metade', cards:[
        {type:'text', h:'O problema que os critérios não resolvem', b:'O curso te dá pontuações — 30 para funções que funcionam, 35 com a tarefa adicional, <strong>0 se o código não funciona</strong>, até 50 para um projeto de módulo, e a escala de README de 20/30/+5/+10. O que ele não te diz é o que fazer no caso mais comum: o raciocínio está certo, a estrutura está certa, e ele quebra na linha 14.'},
        {type:'qa', h:'Uma forma defensável de decidir', items:[
          {k:'Separe compreensão de execução', v:'Faça a si mesmo duas perguntas: a pessoa entendeu o que era preciso, e o código roda? Um aluno que desenhou a solução certa e esbarrou num erro de digitação está numa posição completamente diferente de quem colou algo que não sabe explicar.'},
          {k:'Onde estiver escrito 0 estrito, cumpra — mas diga por quê', v:'Alguns critérios são explícitos ao dizer que código que não funciona vale 0. Aplique, e então dê o retorno que torna aquilo útil: exatamente qual linha e o que mudar. Um 0 com uma correção precisa é um ato de ensino; um 0 sem comentário é só um número.'},
          {k:'Reconheça a tentativa visível', v:'Onde os critérios te dão margem — nota de projeto, tarefas adicionais, qualidade do README — credite o esforço real que ficou aquém. Comentários, estrutura, um histórico de commits sensato, um README que explica a intenção.'},
          {k:'Nunca avalie por velocidade', v:'Nada no curso premia terminar primeiro. Um projeto simples e completo vale explicitamente mais do que um ambicioso inacabado.'},
          {k:'Deixe sempre um caminho até os pontos', v:'Diga o que faria a nota subir. Toda tarefa manual pode, em espírito, ser reenviada, porque o curso inteiro é iterativo — a próxima aula constrói sobre o mesmo projeto.'}
        ]},
        {type:'good', txt:'Um hábito útil: escreva o retorno primeiro e o número depois. Se você não consegue explicar o número em duas frases que ajudariam o aluno a melhorar, provavelmente é o número errado.'},
        {type:'tip', txt:'Use as <strong>ferramentas de avaliação</strong> onde o curso as fornece (o projeto de bot do módulo 1 e o portfólio do módulo 4 têm uma cada) — elas existem para que a correção seja consistente entre tutores, e não só conveniente para você. E lembre da armadilha prática: várias tarefas avaliadas são corrigidas a partir de um <strong>link do GitHub no chat da tarefa</strong>. Sem link, sem avaliação — cobre isso durante a aula, em voz alta, mais de uma vez.'}
      ]},
      {t:'👤 A aula individual de 50 minutos', cards:[
        {type:'text', h:'Toda aula tem uma, e não é “a mesma coisa mais rápido”', b:'Cada plano do currículo carrega uma <strong>variante individual de 50 minutos</strong> com tabela de etapas própria. A tentação é rodar a aula em grupo acelerada. Não faça — você perde 40 minutos, e boa parte do que você apressaria é exatamente o que um aluno sozinho não consegue fazer de jeito nenhum.'},
        {type:'twocol', left:{h:'O que precisa sair', items:['<strong>Salas simultâneas</strong> — não há com quem formar dupla','<strong>Competições em equipe</strong> — a regra da média de equipe de M6L2 deixa de significar algo','<strong>Revisão e testes entre colegas</strong> — <em>você</em> vira quem revisa','<strong>Apresentações ao grupo</strong> — viram uma conversa com você','<strong>Jogos que exigem times</strong> — jogo da velha em times, o jogo da “bola”','A maior parte das etapas de troca de ideias e votação']}, right:{h:'O que você ganha, e deve usar', items:['<strong>Ritmo realmente ajustado</strong> — sem esperar o mais lento ou o mais rápido','<strong>Diálogo contínuo</strong> — dá para perguntar “por quê?” a cada passo','<strong>Depuração mais funda</strong> — ler cada erro junto, com calma','<strong>Foco no projeto dele</strong> — o enquadramento real pode ser escolhido sob medida','Mais tempo nas tarefas adicionais','Retorno imediato e específico em vez de correção acumulada']}},
        {type:'qa', h:'Como converter as etapas colaborativas', items:[
          {k:'Análise em dupla → pensar em voz alta', v:'Onde os alunos analisariam código em duplas, peça que narrem o raciocínio para você. O jogo “todos contra um” de M6L1 já tem uma variante individual no plano: você e o aluno se revezam fazendo perguntas um ao outro, sem vencedor.'},
          {k:'Revisão entre colegas → sua revisão, o checklist dele', v:'Ele revisa o <em>seu</em> código propositalmente falho contra o checklist. Ensina a mesma habilidade e é, provavelmente, mais difícil.'},
          {k:'Competição em equipe → contra uma meta', v:'Em vez de vencer outra equipe, bater um alvo: “você consegue passar o modelo de 90% nesta imagem de teste?”'},
          {k:'Brainstorm em grupo → provocação estruturada', v:'Um brainstorm solitário morre rápido. Dê categorias e um cronômetro, e contribua com ideias também — a regra de não criticar continua valendo para os dois.'},
          {k:'Apresentação → uma plateia real', v:'Peça que apresente formalmente a você, cronometrado, aplicando as oito regras de apresentação. Depois sugira que mostre a alguém da família ou a um amigo, para que haja uma plateia de verdade.'}
        ]},
        {type:'tip', txt:'Uma coisa fica <em>mais difícil</em> sozinho: motivação numa construção longa. Em grupo, a inércia é social. Um a um, ela fica inteiramente com você, então quebre o trabalho em vitórias visíveis e nomeie cada uma quando chegar.'}
      ]},
      {t:'🧰 O hábito que evita a maioria das aulas ruins', cards:[
        {type:'text', h:'Prepare a próxima aula no fim desta', b:'Instaladores como lição de casa antes de M1L2. E-mails prontos antes das aulas de cadastro. Um projeto preparado antes do code review. Projetos antigos de bot abertos antes de M7L1. Live Share instalado antes de M8L4. O CSV guardado antes de M5L3. Perguntas escritas antes de M10L2. Quase toda aula que dá errado dá errado por causa de algo que deveria ter acontecido uma semana antes.'},
        {type:'good', txt:'Monte um ritual de duas linhas para o fim da aula: confirme que todos apertaram <strong>Enviar</strong> e diga a única coisa que precisam trazer ou instalar da próxima vez. Quinze segundos, e isso remove a maior parte do caos dos dez primeiros minutos da sua próxima aula.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno te pergunta algo que você genuinamente não sabe. Qual é o movimento padrão?', opts:['Dizer que não tem certeza e pesquisar junto na tela — é o hábito de documentação de M1L4 demonstrado ao vivo','Dar seu melhor chute com confiança para que o grupo continue confiando em você','Dizer que está além do escopo do curso','Seguir rápido e torcer para que esqueçam'], c:0, fb:'Pesquisar junto é a opção mais forte porque É a habilidade que o curso ensina: ninguém sabe uma biblioteca de cor. Você não está encobrindo uma lacuna, está modelando o método.'},
      {q:'Qual resposta a uma pergunta que você não sabe de fato danifica sua credibilidade?', opts:['Chutar com confiança — os alunos testam respostas, e estar errado soando seguro é o que encerra a confiança deles','Dizer “não sei”','Guardar a pergunta e respondê-la no chat do grupo à noite','Nomear com honestidade onde fica o limite do seu conhecimento'], c:0, fb:'Admitir incerteza nunca te custa a sala. Uma resposta errada dita com segurança, conferida por um aluno no meio da aula, custa.'},
      {q:'Você guarda uma pergunta para responder depois no chat do grupo. O que decide se isso ajuda ou atrapalha?', opts:['Se você de fato retoma — uma pergunta retomada constrói mais confiança que uma resposta instantânea, e uma esquecida custa mais que admitir ignorância','A rapidez da sua resposta','Se você responde em particular ou publicamente','Se o aluno perguntou na frente dos outros'], c:0, fb:'Guardar só é um movimento legítimo se a retomada acontecer. Caso contrário, você simplesmente fugiu da pergunta, e os alunos percebem.'},
      {q:'Qual destes é parte central do método LiveCoding?', opts:['Cometer erros de propósito e pedir que os alunos os encontrem','Escrever o código em silêncio para que os alunos se concentrem','Mostrar o código pronto primeiro e depois explicá-lo','Fazer os alunos programarem enquanto você assiste sem falar'], c:0, fb:'LiveCoding significa narrar suas decisões, fazer perguntas, pausar, desenhar para visualizar a lógica — e errar de propósito para que os alunos treinem identificar erros.'},
      {q:'Um aluno está respondendo a todas as perguntas e o resto ficou quieto. Qual é a solução coerente com o curso?', opts:['Usar as estruturas já previstas — o jogo da “bola”, a regra de não responder duas vezes seguidas — e deixar o formato limitar','Pedir em particular que ele participe menos','Parar de fazer perguntas abertas ao grupo','Movê-lo para uma sala simultânea separada'], c:0, fb:'Vários jogos do curso distribuem o tempo de fala automaticamente. Deixar o formato fazer o limite evita que aquilo vire algo pessoal.'},
      {q:'Um aluno está atrapalhando e disperso. O que costuma funcionar neste curso?', opts:['Dar a ele um trabalho — conduzir uma instalação, compartilhar a tela, explicar a solução; atrapalhar costuma ser sinal de subocupação','Silenciá-lo pelo resto da etapa','Ir direto para a etapa de reflexão','Passar lição de casa extra para ele'], c:0, fb:'O curso é cheio de papéis legítimos para distribuir, e um aluno capaz e entediado é a causa mais comum de dispersão aqui.'},
      {q:'Você faz uma pergunta ao grupo e ninguém responde. Qual é a causa mais provável?', opts:['A pergunta foi grande demais — encolha para algo estreito e respondível, como “que tipo esta variável deveria ter?”','O grupo está desengajado e precisa de um intervalo','Eles não fizeram a lição de casa','O material é avançado demais para eles'], c:0, fb:'Os planos de aula modelam provocações estreitas e respondíveis o tempo todo. Silêncio costuma ser sintoma do tamanho da pergunta, e não de má vontade.'},
      {q:'O código de um aluno mostra o raciocínio e a estrutura certos, mas quebra. Como avaliar?', opts:['Aplique os critérios — inclusive o 0 estrito onde isso estiver escrito — mas sempre dê a linha exata e a correção, para que a nota ensine algo','Dê nota máxima, já que o raciocínio estava correto','Dê zero sem comentário, já que o código não roda','Faça média com a tarefa anterior dele'], c:0, fb:'Onde código que não funciona vale 0, cumpra — mas um 0 com uma correção precisa é um ato de ensino, enquanto um 0 sem comentário é só um número.'},
      {q:'Qual é um bom hábito ao avaliar tarefas manualmente?', opts:['Escrever o retorno primeiro e o número depois — se você não consegue justificar o número em duas frases úteis, provavelmente ele está errado','Corrigir primeiro as entregas mais rápidas, enquanto você tem energia','Avaliar tudo em relação ao aluno mais forte do grupo','Dar a mesma nota a todos que entregaram, para ser justo'], c:0, fb:'Retorno primeiro mantém o número defensável e útil. Nada no curso premia velocidade, e avaliar na curva não faz parte de nenhum critério.'},
      {q:'Ao conduzir uma aula individual de 50 minutos, o que você NÃO deve fazer?', opts:['Rodar a aula em grupo de 90 minutos acelerada — você perde 40 minutos e a maior parte do que apressaria precisa de grupo de qualquer forma','Converter a revisão entre colegas numa revisão do seu próprio código falho','Substituir a competição em equipe por uma meta de referência','Passar mais tempo nas tarefas adicionais'], c:0, fb:'Salas simultâneas, competições em equipe, revisão entre colegas e apresentações ao grupo não acontecem com um aluno. Cada uma precisa ser convertida, e não comprimida.'},
      {q:'Numa aula individual, como preservar a habilidade de revisão de código entre colegas?', opts:['Peça que o aluno revise o SEU código propositalmente falho contra o checklist — mesma habilidade, provavelmente mais difícil','Pule, já que exige dois alunos','Peça que ele revise o próprio código de uma aula anterior','Peça que revise o código de um colega como lição de casa'], c:0, fb:'A habilidade é aplicar um checklist e dar feedback construtivo. Seu código falho fornece o objeto, e você pode plantar exatamente os problemas que quer que sejam achados.'},
      {q:'O que fica mais difícil, e não mais fácil, numa aula um a um?', opts:['Motivação numa construção longa — a inércia é social num grupo, então você precisa quebrar o trabalho em vitórias visíveis e nomear cada uma','Depuração, porque não há com quem comparar','Cumprir os tempos','Explicar a teoria com clareza'], c:0, fb:'Ajuste de ritmo e diálogo melhoram no um a um. Sustentar a inércia ao longo de uma construção longa é o que recai inteiramente sobre você.'},
      {q:'Um aluno está visivelmente frustrado durante a aula de metacognição. O que o curso manda dizer?', opts:['Que a reação é válida, e é informação sobre a estratégia que ele escolheu — não evidência sobre a capacidade dele','Que ele deve fazer uma pausa e voltar depois','Que frustração significa que a aula está avançada demais para ele','Nada — siga em frente para não chamar atenção'], c:0, fb:'A nota de M2L1 enquadra a frustração como retorno útil sobre a estratégia usada, e pede que você parabenize o aluno por ter percebido, porque perceber é a habilidade.'},
      {q:'Qual é o melhor movimento de diferenciação para um aluno que sempre termina cedo?', opts:['Dar a tarefa adicional já prevista, ou pedir que conduza uma etapa ou dê uma mini masterclass — e elogiar o explicar','Adiantá-lo para o material da próxima aula','Deixá-lo ajudar você a corrigir o trabalho dos outros','Reduzir o número de tarefas para o resto da turma'], c:0, fb:'Tarefas adicionais existem em quase toda aula, e fazer alunos fortes conduzirem instalações ou explicarem soluções é um padrão usado ao longo de todo o curso.'},
      {q:'O ambiente de um aluno está quebrado e a etapa prática vai começar. O que você faz?', opts:['Começa com os alunos que estão prontos, coloca o assistente técnico no problema e entrega ao aluno travado um plano B preparado','Pausa a aula até o ambiente de todos funcionar','Faz esse aluno assistir a um colega pela aula inteira','Adia a aula para a semana seguinte'], c:0, fb:'Os planos fornecem planos B — o Basic Bot, o Pipfile da solução, o dataset compartilhado, o CSV da aula anterior — justamente para que uma máquina não segure a turma refém.'},
      {q:'Por que o curso fornece oito técnicas de reflexão em vez de uma?', opts:['Porque a ideia é alternar entre elas, para que os dez minutos finais continuem vivos em vez de virar ritual','Para que os tutores escolham a preferida e a reutilizem','Porque faixas etárias diferentes exigem técnicas diferentes','Porque a plataforma sorteia uma automaticamente'], c:0, fb:'Os planos das aulas mais avançadas recomendam mudar o método a cada aula — é isso que impede a reflexão de virar algo que os alunos apenas atravessam.'},
      {q:'Qual técnica de reflexão melhor revela se um aluno de fato entendeu a aula?', opts:['“Ensine um amigo” — vinte segundos explicando o que ensinariam a alguém que faltou','“Em um meme” — a impressão que tiveram da aula','“Uma pequena vitória” — uma conquista da sessão','“Completar a frase” — “hoje eu aprendi que…”'], c:0, fb:'Explicar um conceito em voz alta em vinte segundos é uma verificação real de compreensão, e ao mesmo tempo consolida o conhecimento e constrói confiança.'},
      {q:'Um projeto de módulo avaliado está sem o link do GitHub no chat da tarefa. Por que isso importa?', opts:['Esse link é como o projeto é avaliado — sem link, aluno sem nota, então cobre durante a aula','A plataforma desconta pontos automaticamente por link faltando','O aluno não consegue avançar para o próximo módulo sem ele','Isso impede que os colegas façam a revisão'], c:0, fb:'Várias tarefas avaliadas são corrigidas a partir do link postado no chat da tarefa. Os planos mandam lembrar os alunos, em voz alta, mais de uma vez.'},
      {q:'Que hábito único evita a maioria das aulas ruins?', opts:['Preparar a próxima aula no fim desta — instaladores, e-mails, projetos abertos, extensões instaladas','Ler o plano de aula inteiro em voz alta no início','Preparar teoria extra caso a prática termine cedo','Manter um notebook reserva disponível'], c:0, fb:'Instaladores antes de M1L2, e-mails antes das aulas de cadastro, um projeto pronto antes do code review, Live Share antes de M8L4 — a maioria das aulas ruins foi perdida uma semana antes.'}
    ]
  },
  {
    id:16, emoji:'🎬', color:'#0EA5E9',
    lesson:true,
    title:'Aula Modelo — Assista e Analise',
    desc:'Uma aula real do Python Pro gravada para assistir, com um guia sobre o que esta pessoa faz bem, o que falta nela e por que perceber a diferença é o ponto.',
    prep:'~2 horas: assista uma vez, depois assista de novo com o guia e um caderno.',
    practical:{
      intro:'Antes de marcar como concluído — e destravar o DST:',
      items:[
        'Assistiu à aula modelo uma vez do início ao fim, e depois de novo acompanhando o guia de observação',
        'Anotou, palavra por palavra, as frases que a pessoa usa quando um aluno quer a resposta pronta',
        'Listou as seis qualidades de condução abaixo e anotou o momento em que cada uma acontece',
        'Encontrou as duas etapas que <strong>faltam</strong> nesta aula e escreveu as frases que você teria dito no lugar',
        'Abriu o plano da aula M1L2 ao lado do vídeo e o comparou com a tabela de etapas',
        'Conferiu as suas próprias listas <strong>✋ Antes de ensinar isto</strong> em todos os módulos e fechou tudo o que tinha pulado'
      ]
    },
    obj:'Ver tudo do Módulo 15 executado numa aula real — e ver o que acontece quando duas etapas obrigatórias são espremidas para fora. Assista a uma sessão completa do Python Pro, identifique os comportamentos de condução que vale copiar, encontre as duas lacunas e descubra o que você teria feito diferente.',
    completeH:'Pronto para ser avaliado',
    completeBody:'Depois de assistir à aula modelo e percorrer o guia de observação, marque este módulo como concluído. Isso destrava o <strong>Teste de Habilidades Digitais</strong> — a avaliação prática final para pessoas candidatas a tutor do Python Pro.',
    completeBtn:'Marcar aula modelo como assistida →',
    sections:[
      {t:'🎥 A gravação', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/H3ctpvdhzT0', cap:'Uma aula completa do Python Pro, conduzida por uma pessoa experiente. Se o player não carregar, abra diretamente em <a href="https://youtu.be/H3ctpvdhzT0" target="_blank" rel="noopener noreferrer">youtu.be/H3ctpvdhzT0</a>.'},
        {type:'text', h:'Que aula é esta', b:'A julgar pelo conteúdo — o interpretador Python, a configuração do VS Code, criar uma pasta e rodar um primeiro script, e a lição de casa sobre encontrar bots do Discord — esta é a <strong>aula M1L2 do curso</strong>, a segunda aula do curso inteiro. Abra aquele plano ao lado do vídeo. É um <strong>grupo pequeno, de dois alunos</strong>, então a dinâmica fica em algum lugar entre o formato em grupo de 90 minutos e o individual de 50.'},
        {type:'text', h:'Como assistir', b:'Assista uma vez do início ao fim, como um aluno assistiria. Depois assista de novo com o guia abaixo e um caderno, pausando para anotar o que a pessoa <em>faz</em>, e não o que ela diz. Condução é um conjunto de comportamentos concretos — onde ela pausa, quando entrega a tela, como formula uma correção — e isso só fica visível na segunda vez.'},
        {type:'warn', txt:'Esta é uma <strong>aula real, não uma demonstração encenada.</strong> A maior parte dela é muito boa e vale copiar de perto. Também faltam nela duas etapas obrigatórias. Os dois fatos são úteis para você, e o segundo é provavelmente mais útil que o primeiro — e é por isso que a gravação não foi editada para esconder aquilo.'}
      ]},
      {t:'✅ O que esta pessoa faz bem — copie isto', cards:[
        {type:'qa', h:'Seis comportamentos concretos, e o que faz cada um funcionar', items:[
          {k:'Abre pela pessoa, não pelo material', v:'Cumprimenta os alunos e pergunta como foi a semana e o que andaram fazendo. É o briefing bem-feito — a chamada acontece dentro de uma conversa, e não como lista.'},
          {k:'Confere a lição perguntando sobre o trabalho em si', v:'Pergunta sobre a pesquisa e o projeto da aula anterior, e sobre a tarefa de leitura de código — e os alunos de fato respondem. A checagem da lição é uma discussão genuína, que também é a sua melhor leitura precoce de quem está se afastando.'},
          {k:'Demonstra primeiro e depois entrega', v:'Configura o VS Code e roda um script Python <em>antes</em> de os alunos fazerem. Numa aula pesada de configuração essa é a escolha certa: veja eu fazer, agora você.'},
          {k:'Quebra as instruções em passos', v:'Crie uma pasta, abra no terminal, digite este comando. Aulas de configuração desmoronam quando as instruções chegam como um parágrafo; funcionam quando chegam como sequência numerada com um ponto de verificação a cada passo.'},
          {k:'Usa os nomes dos dois alunos, repetidamente', v:'Trata pelo nome durante as interações de aprendizagem — não só para a chamada. Com dois alunos isso é fácil; com oito é uma disciplina deliberada, e é o jeito mais barato de manter todo mundo presente.'},
          {k:'Pede que os alunos expliquem, em vez de explicar', v:'Pergunta a eles o que <em>é</em> um interpretador, e eles respondem com as próprias palavras. É a regra do “não dê a resposta” aplicada à teoria, e é o comportamento a roubar acima de todos os outros aqui.'}
        ]},
        {type:'good', txt:'Repare também em como é o retorno: a pessoa percorre o código dos alunos junto com eles, ajudando-os a encontrar e corrigir os próprios erros em vez de consertar por eles. É o hábito de depuração de M1L4 sendo modelado duas aulas antes de ser formalmente ensinado.'},
        {type:'text', h:'E a lição de casa é entregue direito', b:'A tarefa — achar bots do Discord e trazer na próxima aula — é <strong>explicada</strong>, e não apenas anunciada, e é ligada ao que a próxima aula vai fazer com aquilo. Essa ligação para a frente é o que faz a lição de casa parecer parte de algo em vez de um apêndice, e está em todos os planos de aula exatamente por isso.'}
      ]},
      {t:'🕳️ As duas etapas que faltam', cards:[
        {type:'text', h:'O que não está ali', b:'Duas das sete partes do esqueleto da aula não aparecem: <strong>nenhum objetivo claro é enunciado</strong> no começo ou perto dele, e <strong>nenhuma retomada ou revisão fecha a aula</strong>. As duas são etapas obrigatórias em cada um dos 40 planos de aula, e o plano de M1L2 tem ambas — um slide de objetivos listando o que o dia produz e uma etapa de reflexão com perguntas de revisão.'},
        {type:'twocol', left:{h:'Por que a etapa de objetivos importa', items:['Alunos que sabem o destino toleram um meio difícil — e esta aula tem um meio difícil','Trabalho de configuração parece burocracia até ser ligado a um propósito','O próprio slide de objetivos do plano de M1L2 nomeia quatro resultados, incluindo o gerador de senhas fortes','Sem ele, “por que estamos digitando comandos num terminal?” fica sem resposta']}, right:{h:'Por que a retomada importa', items:['A reflexão é onde a aula se consolida — está no cronograma, não é opcional','É sua última chance de pegar um aluno que concordou com a cabeça sem entender','As perguntas de revisão puxam de propósito o aluno mais quieto','Uma aula que para em vez de fechar não deixa nada sobre o que construir na semana seguinte']}},
        {type:'good', txt:'Seja justo sobre por que isso acontece: quase sempre é <strong>tempo</strong>. Aulas de configuração estouram — instalações falham, máquinas diferem, um aluno fica para trás — e as etapas das duas pontas são as que são espremidas. É exatamente o modo de falha sobre o qual o Módulo 3 alerta, e ver isso acontecer com uma pessoa competente deveria te dizer que também vai acontecer com você, a menos que você proteja ativamente essas etapas.'},
        {type:'tip', txt:'Sua tarefa: escreva as duas coisas que faltam. Uma <strong>abertura de 30 segundos</strong> dizendo o que esta aula produz e um <strong>fechamento de 2 minutos</strong> com três perguntas de revisão e a lição de casa. Escreva por extenso, com as suas palavras. Esses dois roteiros curtos são a coisa mais portátil que você vai levar deste módulo — funcionam em todas as aulas do curso e você pode reaproveitá-los quase sem mudança.'}
      ]},
      {t:'🔍 Sua tarefa de observação', cards:[
        {type:'qa', h:'Etapa por etapa, enquanto assiste', items:[
          {k:'Briefing', v:'Como a presença é registrada — como chamada ou dentro de uma conversa? Em quanto tempo a aula chega a um motivo para existir?'},
          {k:'Checagem da lição', v:'Como o trabalho da aula anterior é puxado? O que acontece com um aluno que tem menos a mostrar?'},
          {k:'Objetivos', v:'<strong>Faltando aqui.</strong> Anote o ponto em que deveriam ter entrado, e o que você teria dito.'},
          {k:'Teoria', v:'Quão curta ela é? Observe especificamente a pergunta sobre o interpretador — a pessoa pergunta em vez de contar. Cronometre quanto tempo a teoria de fato dura.'},
          {k:'Prática', v:'Conte quantas vezes a resposta é pedida à pessoa e ela não a entrega. Anote o que ela diz no lugar.'},
          {k:'Reflexão', v:'<strong>Faltando aqui.</strong> A lição de casa é bem explicada, mas não há retomada. Anote onde ela deveria ter entrado.'}
        ]},
        {type:'twocol', left:{h:'Comportamentos de condução a anotar', items:['Quando a tela é entregue e quando é retomada','Como um erro no código de um aluno é diagnosticado em voz alta','Quais perguntas são respondidas com outra pergunta','Como o ritmo é conferido sem expor ninguém','Como a próxima aula é preparada no fim','Com que frequência cada aluno é chamado pelo nome']}, right:{h:'Momentos que sempre dão errado', items:['O ambiente ou a instalação de alguém falha','Um aluno termina muito à frente do outro','Um aluno fica em silêncio por um bom tempo','A etapa de configuração começa a estourar o tempo','Um código que funcionava um minuto antes dá erro ao vivo','Um caminho ou nome de arquivo está sutilmente errado']}},
        {type:'good', txt:'A coisa mais útil que você pode tirar desta gravação é a <strong>forma de falar</strong> da pessoa nos momentos em que um aluno quer a resposta. Anote essas frases palavra por palavra. Ter duas ou três maneiras prontas de dizer “o que o erro está dizendo?” vale mais na sua primeira aula do que qualquer quantidade de teoria sobre não dar respostas.'},
        {type:'tip', txt:'Por fim, abra o plano de M1L2 ao lado do vídeo e compare com a tabela de etapas. Quais etapas se estenderam? Quais foram comprimidas? Ver onde uma aula real diverge do plano é como você aprende quais partes de um plano são estruturais e quais cedem — e esta comparação em particular diz muito, porque você já sabe como ela termina.'}
      ]}
    ]
  },
/* NEXT-PT-MODULE */
]
};

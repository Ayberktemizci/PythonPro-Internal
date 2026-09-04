/* ============================================================================
   Kodland Python Pro Tutor Training — CONTENUTI (italiano)
   Traduzione di content-en.js. NON modificare le chiavi, la struttura, i tag
   HTML, le classi CSS o il codice Python — dentro i blocchi di codice traduci
   SOLO i commenti che iniziano con #.

   REGOLA DI SICUREZZA per chiunque modifichi questo file: non incollare mai qui
   un token reale di un bot Discord, una chiave API, un cookie di sessione o una
   password della piattaforma. Usa i segnaposto letterali "YOUR_BOT_TOKEN" /
   "YOUR_API_KEY" esattamente come fanno i materiali del corso.
   ============================================================================ */
window.CONTENT = {
code: 'it',
htmlLang: 'it',
title: 'Formazione Tutor Python Pro — Kodland',
ui: {
  logoSub: 'Formazione Python Pro',
  heroEyebrow: '🐍 Programma di formazione per tutor',
  heroTitle: 'Preparati a insegnare<br><span class="h-pill">Python Pro</span><br>a ragazzi dai 13 ai 17 anni',
  heroSub: 'Affronta tutti i moduli in ordine e supera il test di ciascuno per completare la tua preparazione da tutor. Serve almeno il 70% nel test di un modulo per sbloccare il successivo: non si può saltare avanti, e il Test di Competenze Digitali si apre solo quando tutti i moduli sono completati.',
  progLabel: 'moduli completati',
  modulesLabel: 'I tuoi moduli',
  allDone: '🏆 Tutto completato!',
  completeWord: 'completato',
  backModules: '← Moduli',
  exitQuiz: '← Esci dal test',
  backDashboard: '← Pannello',
  faqNav: '❓ Domande frequenti',
  changeRegion: '🌐 Lingua',
  moduleWord: 'Modulo',
  ofWord: 'di',
  objectiveWord: 'Obiettivo',
  badgePassed: '✓ Superato',
  badgeLocked: '🔒 Bloccato',
  badgeStart: 'Inizia →',
  badgeWatched: '✓ Guardata',
  badgeWatch: '▶ Guarda',
  tagCompleted: 'Completato',
  tagExampleLesson: 'Lezione modello',
  completeModuleWord: 'Completa il modulo',
  completeAllFirst: 'Completa prima tutti i moduli',
  scoreWord: 'Punteggio',
  questionsWord: 'domande',
  takeQuiz: '📝 Fai il test del modulo →',
  retakeQuiz: '🔄 Ripeti il test',
  markComplete: 'Segna come completato',
  doneCompleted: '✓ Completato',
  moduleComplete: 'Modulo completato',
  questionWord: 'Domanda',
  correctPrefix: '✅ Esatto! ',
  notQuitePrefix: '❌ Non proprio. ',
  seeResults: 'Vedi i risultati →',
  nextBtn: 'Avanti →',
  modulePassed: 'Modulo superato!',
  keepReviewing: 'Continua a ripassare',
  scoreLine: 'Hai risposto correttamente a {s} domande su {t}.',
  passMsg: ' Modulo successivo sbloccato!',
  failMsg: ' Serve il 70% per superarlo. Ripassa il modulo e riprova!',
  reviewModuleWord: '📖 Ripassa il modulo',
  startModuleWord: 'Inizia il modulo',
  watchModuleWord: '▶ Guarda il modulo',
  viewCertificate: '🏆 Vedi il certificato',
  trainingComplete: 'Formazione completata!',
  completeSub: 'Hai affrontato tutti i moduli: complimenti! Sei pronto per il Test di Competenze Digitali.',
  certLabel: 'Attestato di completamento',
  certTitle: 'Formazione Tutor Python Pro',
  certLine: 'Kodland · Tutti i {n} moduli · Punteggio medio dei test: {avg}%',
  takeDST: '🎯 Fai il Test di Competenze Digitali →',
  backDashboard2: '← Torna al pannello',
  dstCardStage: 'Fase finale',
  dstCardTitle: 'Test di Competenze Digitali',
  dstCardDesc: 'La valutazione pratica finale: si sblocca solo dopo aver completato ogni modulo.',
  dstReady: 'Pronto',
  dstCardTag: 'Valutazione pratica',
  devSkipDST: '🔓 Dev: vai direttamente al DST →',
  prepWord: 'preparazione',
  practicalTitle: 'Prima di insegnare questo',
  practicalNote: 'Questa è un’autodichiarazione: da qui nessuno può verificarla. Spunta le voci onestamente, perché il test del modulo può solo confermare che hai letto, non che sai farlo.',
  practicalWarn: 'Hai ancora {n} voci pratiche non spuntate in «Prima di insegnare questo».\n\nIl test verifica solo che tu abbia letto il modulo: non può verificare che tu sappia davvero costruire tutto questo. Saltare la parte pratica è esattamente il modo in cui una lezione crolla davanti alla classe.\n\nFare comunque il test?',
  // etichette del blocco brief
  briefOverview: 'Quadro generale',
  briefWhy: 'Perché è importante',
  briefLearn: 'Cosa costruiscono e applicano gli studenti',
  briefConfident: 'Devi padroneggiare al 100%',
  // segnaposto
  imgPhTitle: 'Spazio per immagine',
  videoPhTitle: 'Spazio per video',
  videoPhBody: 'Qui verrà aggiunta una registrazione.',
  videoFallback: 'Il tuo browser non riesce a riprodurre questo video. Puoi scaricarlo dalla cartella assets/media/videos.',
  // Domande frequenti
  faqTitle: 'Domande frequenti e risoluzione dei problemi',
  faqSub: 'Risposte rapide per le situazioni che affronterai davvero in una lezione di Python Pro: gli errori che gli studenti incontrano in ogni modulo, le regole di sicurezza da non aggirare mai e cosa fare quando qualcuno è avanti o indietro rispetto al gruppo. Sempre disponibili, da qualsiasi schermata.'
},
dst: {
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🎯 Fase finale</div>
      <h1 class="dst-h1">Prova per i candidati tutor di Python Pro</h1>
      <p class="dst-sub">L’obiettivo principale di questo corso è che gli studenti costruiscano ottimi progetti in più ambiti — automazione con chatbot, sviluppo web e intelligenza artificiale — usando le varie librerie di Python. Questa prova è il punto in cui dimostri di avere conoscenze avanzate di Python e di saper aiutare gli studenti mentre scrivono quei progetti.</p>
    </div>

    <div class="dst-block">
      <div class="sch">🧩 La prova pratica</div>
      <div class="card">
        <p>Usando <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a> e le tue competenze sui database, costruisci un <strong>sito di quiz rivolto agli adolescenti</strong> che sia coinvolgente e dinamico.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">✅ Criteri del progetto</div>
      <div class="card"><ul class="dst-check">
        <li>Il sito deve avere un quiz che copra <strong>tutti</strong> gli argomenti proposti.</li>
        <li>Il quiz deve essere composto da <strong>almeno 5</strong> domande.</li>
        <li>Deve essere usato un <strong>database relazionale</strong>. (Puoi servirti di <a href="https://flask-sqlalchemy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Flask-SQLAlchemy</a>.)</li>
        <li>Il sito deve essere pubblicato su <a href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">PythonAnywhere</a>.</li>
        <li>Il sito deve avere una pagina separata in cui è in grado di <strong>riconoscere o classificare un’immagine caricata dall’utente</strong>.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">📚 Argomenti del quiz</div>
      <div class="card"><ul class="dst-check">
        <li>Automazione di chatbot con Python (<a href="https://discordpy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Discord.py</a>)</li>
        <li>Sviluppo web con Python (<a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a>)</li>
        <li>Sviluppo di intelligenza artificiale con Python</li>
        <li>Visione artificiale (<a href="https://www.tensorflow.org/api_docs/python/tf" target="_blank" rel="noopener noreferrer">TensorFlow</a>, <a href="https://imageai.readthedocs.io/en/latest/detection/index.html" target="_blank" rel="noopener noreferrer">ImageAI</a>)</li>
        <li>Elaborazione del linguaggio naturale (<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" rel="noopener noreferrer">BeautifulSoup</a>, <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">NLTK</a>)</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">⚠️ Aspetti a cui prestare attenzione</div>
      <div class="card"><ul class="dst-check">
        <li>Quando l’utente invia il quiz, <strong>deve essere mostrato il punteggio ottenuto</strong>. L’utente può rifare il quiz e devono essere visualizzati sia il suo <strong>risultato più recente</strong> sia il suo <strong>punteggio più alto</strong>.</li>
        <li>Nell’<strong>angolo in alto a destra dello schermo</strong> devono comparire il punteggio più alto raggiunto finora da tutti gli utenti e il punteggio più alto dell’utente corrente.</li>
        <li>Il <strong>piè di pagina di ogni pagina</strong> del sito deve contenere informazioni sull’autore.</li>
        <li>I risultati del riconoscimento delle immagini devono essere <strong>mostrati a schermo</strong> (per esempio: nome della classe + livello di confidenza) e <strong>salvati nel database</strong>. Come modello puoi usare uno che hai addestrato in Teachable Machine oppure il modello Tiny YOLO di ImageAI.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">🖼️ Un sito di esempio</div>
      <p class="dst-note">L’implementazione di riferimento mostra una pagina di quiz con <em>Il tuo nome</em>, domande numerate e risposte a scelta multipla, con <strong>Personal High Score</strong> e <strong>Overall High Score</strong> in alto a destra, e una pagina dei risultati che mostra <em>Il tuo punteggio</em>, <em>Punteggio personale più alto</em>, <em>Punteggio più alto assoluto</em>, un pulsante <strong>Try Again</strong> e il credito dell’autore nel piè di pagina.</p>
      <div class="dl-row">
        <a class="dl-btn" href="https://github.com/GitKodland/HardSkillsTest" target="_blank" rel="noopener noreferrer">
          <span class="dl-ico">📦</span><span class="dl-tx"><b>Il template</b><small>github.com/GitKodland/HardSkillsTest</small></span>
        </a>
      </div>
      <p class="dst-note" style="margin-top:12px">Puoi usare questo template oppure crearne uno completamente nuovo da solo.</p>
    </div>

    <div class="dst-block">
      <div class="sch">📝 Nota</div>
      <div class="card hi">
        <h4>Questa prova misura le tue competenze di back-end</h4>
        <p>Per questo motivo non serve curare in modo particolare il design.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">‼️ Importante</div>
      <div class="card">
        <p><strong>Assicurati di aver testato completamente il progetto prima di consegnarlo.</strong> Tutti i criteri devono essere soddisfatti, ogni elemento richiesto deve essere presente nelle pagine e il progetto deve funzionare senza errori.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">🚀 Come consegnare</div>
      <div class="card"><ol class="dst-steps">
        <li>Carica il progetto completato su <strong>GitHub</strong> e imposta l’accesso su <strong>pubblico</strong>.</li>
        <li>Pubblicalo su <strong>PythonAnywhere</strong>.</li>
        <li>Fai la prova di competenze e aggiungi il link al tuo progetto come risposta all’<strong>ultima domanda</strong> della prova.</li>
      </ol></div>
    </div>

    <div class="dst-block">
      <div class="sch">🔗 Prova di competenze</div>
      <div class="form-ph">
        <div class="form-ph-ico">📝</div>
        <strong>Link al modulo di consegna in arrivo</strong>
        <p>Il modulo di consegna in italiano non è ancora collegato qui. Lo aggiungerà il team di formazione: ricontrolla prima di consegnare.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="card">
        <p style="text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:18px;color:var(--text);margin:0">In bocca al lupo! 🍀</p>
      </div>
    </div>

    <hr class="divider">

    <div class="dst-block">
      <div class="sch">📎 Dalla tua formazione — non fa parte della consegna qui sopra</div>
      <div class="card hi">
        <h4>Dove è stato spiegato ciascun requisito</h4>
        <p>Ogni competenza richiesta da questa prova è trattata in un modulo che hai già completato. Se qualcosa ti sembra traballante, torna lì invece di ripartire da zero:</p>
        <ul>
          <li><strong>Flask, rotte, template e moduli</strong> → Modulo 7 (M3 del corso)</li>
          <li><strong>Database relazionale con Flask-SQLAlchemy e punteggi per utente</strong> → Modulo 8 (M4 del corso)</li>
          <li><strong>Pubblicazione su PythonAnywhere, incluso il passaggio del file WSGI</strong> → Modulo 8 (M4L3 del corso)</li>
          <li><strong>Addestrare un modello in Teachable Machine</strong> → Modulo 9 (M5L4 del corso)</li>
          <li><strong>Eseguire quel modello dal codice e riconoscimento con ImageAI / Tiny YOLO</strong> → Modulo 10 (M6 del corso)</li>
          <li><strong>Discord.py, BeautifulSoup e NLTK</strong> — argomenti del quiz → Moduli 5 e 9</li>
        </ul>
      </div>
      <div class="callout cw"><span class="ci">⚠️</span><span>Prima di rendere pubblico il repository: il tuo progetto potrebbe contenere il token di un bot, una chiave API o la <code>secret_key</code> di Flask. Nessuno di questi ha posto in un repository pubblico, e cancellarli dopo non serve perché Git conserva la cronologia. Controlla prima di fare push: è la stessa regola che farai rispettare ai tuoi studenti.</span></div>
    </div>
  </div>`
},
faq: [
  {
    cat: '📖 Glossario — le parole che usa il corso',
    items: [
      {q: 'Parole di Python e del codice', a: '<strong>Interprete</strong>: il programma che traduce il tuo Python in codice macchina. <strong>IDE</strong>: l’editor che ti aiuta a scrivere codice (qui VS Code). <strong>Libreria / modulo / pacchetto</strong>: codice scritto da qualcun altro che tu importi. <strong>pip</strong>: lo strumento che installa le librerie. <strong>Ambiente virtuale</strong>: un insieme isolato di librerie che appartiene a un solo progetto. <strong>Dipendenza</strong>: una libreria di cui il tuo progetto ha bisogno per funzionare. <strong>Framework</strong>: una libreria grande che dà struttura al progetto (Flask). <strong>Decoratore</strong>: la riga con <code>@</code> che consegna la tua funzione a una libreria. <strong>async / await</strong>: permettono a una funzione di mettersi in pausa mentre aspetta senza bloccare tutto il resto. <strong>Classe</strong>: lo stampo da cui nascono gli oggetti. <strong>Oggetto / istanza</strong>: una cosa creata da quello stampo. <strong>Ereditarietà</strong>: una classe che riceve le capacità di un’altra. <strong>Metodo</strong>: una funzione che appartiene a una classe. <strong>Argomento / parametro</strong>: i valori che una funzione riceve. <strong>Return</strong>: il valore che restituisce. <strong>Eccezione</strong>: un errore sollevato da Python; <code>try</code>/<code>except</code> lo intercetta. <strong>Refactoring</strong>: migliorare il codice senza cambiare quello che fa. <strong>Linter</strong>: uno strumento che segnala problemi di stile (<code>flake8</code>).'},
      {q: 'Parole del web e di Flask', a: '<strong>Front-end</strong>: quello che vede l’utente (HTML, CSS, JavaScript). <strong>Back-end</strong>: la logica che ci sta dietro (qui Python/Flask). <strong>HTML</strong>: contenuto e struttura della pagina. <strong>CSS</strong>: aspetto. <strong>Tag</strong>: un elemento HTML come <code>&lt;p&gt;</code>. <strong>URL</strong>: l’indirizzo di una pagina. <strong>Rotta</strong>: il codice che viene eseguito per un dato URL. <strong>Template</strong>: una pagina HTML che Flask riempie con i dati. <strong>Jinja</strong>: il motore di template che fa quel riempimento, usando <code>{{ }}</code>. <strong>Modulo (form)</strong>: i campi che l’utente compila e invia. <strong>GET / POST</strong>: chiedere una pagina contro inviarle dei dati. <strong>Sessione</strong>: il modo in cui il server ricorda chi ha fatto l’accesso. <strong>Widget / iframe</strong>: l’applicazione di qualcun altro incorporata nella tua pagina. <strong>Deploy</strong>: mettere la tua applicazione su internet. <strong>PythonAnywhere</strong>: il servizio di hosting usato dal corso. <strong>File WSGI</strong>: il file che il server legge per trovare la tua applicazione. <strong>UI / UX</strong>: com’è fatta contro com’è usarla.'},
      {q: 'Parole di dati e IA', a: '<strong>API</strong>: un servizio a cui puoi chiedere dati dal codice. <strong>JSON</strong>: il formato testuale in cui di solito rispondono le API. <strong>Richiesta</strong>: chiedere qualcosa a un server. <strong>Scraping</strong>: estrarre informazioni da una pagina. <strong>Parsing</strong>: analizzare la struttura per tirare fuori dati specifici. <strong>Crawling</strong>: attraversare molte pagine raccogliendo dati. <strong>robots.txt</strong>: un file che indica quali parti di un sito possono essere esplorate. <strong>DataFrame</strong>: una tabella in pandas. <strong>CSV</strong>: un foglio di calcolo salvato come testo semplice. <strong>Dataset</strong>: i dati da cui impara un modello. <strong>Campione di addestramento / di test</strong>: dati per insegnare contro dati per verificare (quelli di test devono essere mai visti). <strong>Modello</strong>: la cosa addestrata che fa previsioni. <strong>Rete neurale</strong>: il tipo di modello usato qui. <strong>Classificazione</strong>: etichettare un’immagine intera. <strong>Rilevamento</strong>: localizzare oggetti al suo interno. <strong>Segmentazione</strong>: decidere quali pixel appartengono a cosa. <strong>Inferenza</strong>: usare un modello addestrato su un input nuovo. <strong>Iperparametro</strong>: un’impostazione di addestramento che scegli tu, come le epoche. <strong>Epoca</strong>: un passaggio completo sui dati di addestramento. <strong>Prompt</strong>: l’istruzione che dai a un modello generativo. <strong>NLP</strong>: elaborazione del linguaggio naturale. <strong>Tokenizzazione</strong>: dividere il testo in pezzi. <strong>Lemmatizzazione</strong>: ridurre una parola alla sua forma base. <strong>Stop words</strong>: parole comuni rimosse prima dell’analisi. <strong>Pipeline</strong>: una sequenza di passaggi di elaborazione. <strong>Colab</strong>: l’ambiente di notebook nel browser di Google. <strong>Notebook / cella</strong>: il formato del file e i suoi blocchi eseguibili.'},
      {q: 'Parole di Git e lavoro di squadra', a: '<strong>Git</strong>: il programma di controllo versione sulla tua macchina. <strong>GitHub</strong>: il sito che ospita i repository. <strong>Repository (repo)</strong>: una cartella di progetto tracciata da Git. <strong>Commit</strong>: una modifica salvata con un messaggio. <strong>Push / pull</strong>: mandare le modifiche su / portarle giù. <strong>Clonare</strong>: scaricare un repository. <strong>Branch</strong>: una copia parallela per un singolo compito. <strong>Merge</strong>: reincorporare un branch. <strong>Conflitto</strong>: quando due modifiche toccano le stesse righe. <strong>README</strong>: il file che descrive il progetto. <strong>Open source</strong>: codice pubblicato perché chiunque possa leggerlo. <strong>Token</strong>: una chiave segreta che autentica il tuo programma; trattalo come una password. <strong>Intents</strong>: i permessi che un bot Discord richiede. <strong>Agile</strong>: la filosofia dello sviluppo flessibile e collaborativo. <strong>Scrum</strong>: un modo concreto di praticarla. <strong>Sprint</strong>: un periodo fisso per un insieme di attività. <strong>Backlog</strong>: l’elenco di attività ordinato per priorità. <strong>Retrospettiva</strong>: la revisione dopo uno sprint. <strong>Code review</strong>: leggere il codice di qualcuno e suggerire miglioramenti. <strong>Live Share</strong>: l’estensione di VS Code per modificare insieme.'},
      {q: 'Parole di Kodland', a: '<strong>La piattaforma</strong>: dove vivono compiti, teoria e valutazioni. <strong>Backoffice (BO)</strong>: dove verifichi le consegne e trovi i link alle chat di gruppo. <strong>TS</strong>: assistente tecnico, il tuo secondo paio di mani. <strong>DST</strong>: Test di Competenze Digitali, la valutazione pratica finale. <strong>EduScrum</strong>: l’adattamento di Scrum alla classe usato dal corso. <strong>LiveCoding</strong>: costruire il codice insieme sullo schermo. <strong>UMC</strong>: Usa–Modifica–Crea. <strong>Metacognizione</strong>: riflettere su come si impara. <strong>Scheda della Creatività</strong>: il modulo che segue il progetto finale di uno studente. <strong>Test sommativo</strong>: il test di ripasso dentro una lezione.'}
    ]
  },
  {
    cat: '🔐 Regole di sicurezza da non aggirare mai',
    items: [
      {q: 'Uno studente chiede: «posso caricare il token del mio bot su GitHub?»', a: 'La risposta è sempre <strong>no</strong>. Il token di un bot Discord è una password: chi ce l’ha controlla completamente il bot e può usarlo per fare spam o attaccare server. Il corso lo segnala esplicitamente in M1L3. Nel codice condiviso scriviamo il segnaposto letterale <code>bot.run("YOUR_BOT_TOKEN")</code> e incolliamo il token vero solo in locale. Ripeti la regola ad alta voce ogni singola volta che si carica un progetto.'},
      {q: 'Uno studente ha già caricato il token (o lo ha incollato nella chat di gruppo). E adesso?', a: 'Consideralo compromesso, perché lo è. Fagli aprire il Discord Developer Portal → Bot → <strong>Reset Token</strong>, poi incollare quello nuovo solo in locale. Ricordagli che <strong>cancellare il file non serve</strong>: Git conserva la cronologia per sempre, che è esattamente il punto insegnato in M1L4. Rigenerarlo è l’unica soluzione.'},
      {q: 'È sicuro condividere lo schermo mentre il mio token è visibile?', a: 'No, e questo coglie i tutor, non solo gli studenti. Prima di condividere lo schermo o registrare una lezione, sostituisci il token con il segnaposto oppure tienilo in un file separato che non apri mai in video. Lo stesso vale per le password della piattaforma e per le schede del Backoffice.'},
      {q: 'Il progetto «Diario del Programmatore» salva le password in chiaro. Devo dirlo?', a: '<strong>Sì.</strong> Il codice di M4L2 salva <code>password</code> direttamente nella tabella <code>User</code> perché i principianti vedano funzionare il ciclo di confronto. È una semplificazione didattica, non un modello da seguire. Di’ una frase: «Le app vere non salvano mai la password in sé, salvano un’impronta cifrata chiamata hash. Oggi lo saltiamo per tenere visibile la logica». Costa dieci secondi ed evita un’abitudine davvero pessima.'},
      {q: 'Cosa non devono mai mettere gli studenti in un progetto che pubblicano?', a: 'Token e chiavi API, indirizzi email e password reali propri o altrui, il proprio indirizzo di casa o la scuola, e foto di altre persone senza permesso. Repository pubblico significa pubblico per sempre. Se un progetto ha bisogno di un modulo di accesso, usate dati di prova palesemente finti.'},
      {q: 'Lo scraping è consentito? Cosa dico agli studenti?', a: 'Insegna i limiti di M5L2 come parte della competenza, non come nota a piè di pagina: controlla <strong>robots.txt</strong>, rispetta <strong>termini d’uso e informativa sulla privacy</strong> del sito, non ridistribuire contenuti protetti da <strong>copyright</strong> e non raccogliere <strong>dati personali</strong> (GDPR). Facciamo scraping del sito di notizie di esercitazione proprio perché è sicuro farlo.'},
      {q: 'Uno studente vuole generare immagini di una persona reale, o spacciare immagini IA per vere.', a: 'È esattamente il rischio attorno a cui è costruita M6L2. Le immagini generate che imitano foto reali diffondono disinformazione, e i contenuti generati possono essere discriminatori. Tieni i prompt su animali, oggetti e personaggi inventati — mai persone reali e riconoscibili — e rendi la discussione «come riconosceresti un falso?» parte della lezione invece di un avvertimento appiccicato alla fine.'}
    ]
  },
  {
    cat: '🐞 Errori che compaiono in ogni classe',
    items: [
      {q: '«ModuleNotFoundError» subito dopo un pip install andato a buon fine.', a: 'Quasi sempre è un <strong>interprete sbagliato</strong>: la libreria è finita in un Python e VS Code ne sta eseguendo un altro. Si risolve con <code>Ctrl+Shift+P</code> (<code>Cmd+Shift+P</code> su Mac) → <em>Python: Select Interpreter</em> → scegli l’ambiente del progetto. Dentro un progetto pipenv il comando di installazione deve essere <code>pipenv install &lt;libreria&gt;</code>, non <code>pip install</code> da solo.'},
      {q: '«pip is not recognised» / nessun terminale in VS Code.', a: 'Aprine uno da <strong>Terminal → New Terminal</strong>. Se non trova proprio <code>pip</code>, l’interprete Python non è stato aggiunto al PATH durante l’installazione: reinstallare con la casella «Add Python to PATH» spuntata è più rapido che diagnosticarlo dal vivo. M1L2 lo affronta; non lasciare che l’installazione di uno studente blocchi tutta la classe.'},
      {q: 'Il bot risulta online ma ignora ogni messaggio.', a: 'Due cause, in quest’ordine. (1) Manca <code>intents.message_content = True</code> nel codice. (2) L’interruttore corrispondente <strong>Message Content Intent</strong> è spento nella pagina Bot del Discord Developer Portal. Devono consentirlo sia il codice sia il portale.'},
      {q: 'Comandi come $hello non fanno nulla, anche se il bot risponde ai messaggi normali.', a: 'Stanno mescolando le due classi. <code>Client</code> reagisce agli <em>eventi</em> (<code>@client.event</code>); <code>Bot</code> reagisce ai <em>comandi</em> (<code>@bot.command()</code>). M1L4 è costruita su questo confronto. Non si possono usare entrambe in un solo programma, e il messaggio deve iniziare esattamente con il <code>command_prefix</code> impostato.'},
      {q: '«FileNotFoundError» quando il bot dei meme prova a inviare un’immagine.', a: 'È un problema di percorso, non di codice. La cartella delle immagini deve stare dentro la cartella del progetto, nome ed estensione del file devono coincidere esattamente (maiuscole comprese) e <code>os.listdir(\'images\')</code> è relativo al punto da cui viene eseguito lo script. Falli stampare il percorso prima di aprirlo.'},
      {q: '«TypeError: \'&gt;\' not supported between instances of \'str\' and \'int\'»', a: '<code>input()</code> restituisce sempre una <strong>stringa</strong>. Serve <code>int(input(...))</code>. È lo stesso bug nascosto nell’esercizio di code review di M8L3, quindi quando compare spontaneamente dagli un nome: così lo riconosceranno da soli nella lezione di revisione.'},
      {q: 'La pagina Flask non cambia per quante modifiche facciano.', a: 'Controlla tre cose: <code>app.run(debug=True)</code> perché il server si ricarichi, un aggiornamento forzato del browser (Ctrl/Cmd+Shift+R) per scavalcare la cache, e che il file sia stato salvato. Verifica anche che stiano modificando il template che Flask sta davvero mostrando.'},
      {q: '«jinja2.exceptions.TemplateNotFound»', a: 'Flask cerca solo in una cartella chiamata esattamente <code>templates</code> (e <code>static</code> per CSS e immagini), posizionata accanto al file <code>.py</code> principale. Un errore di battitura o una cartella annidata rompono tutto. Fatti mostrare l’albero dei file, non il testo dell’errore.'},
      {q: '«sqlite3.OperationalError: no such table»', a: 'Il file <code>.db</code> è stato creato prima che la classe esistesse, oppure una colonna è stata aggiunta dopo. In questo corso la soluzione insegnata in M4L2 è netta e va benissimo per i principianti: cancellare il vecchio file <code>.db</code> e ricrearlo dal terminale. Avvisali prima che questo cancella le loro voci.'},
      {q: 'Colab ha dimenticato il loro modello / immagini / file.', a: 'Le sessioni di Colab sono temporanee: tutto ciò che viene caricato nella sessione sparisce al riavvio, e tutte le celle vanno rieseguite in ordine. Per una sessione più lunga mostra come montare Google Drive (M6L1 lo suggerisce per i gruppi più forti). Ricorda loro di tenere una copia del notebook sul proprio Drive.'},
      {q: '«Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}»', a: 'È un conflitto di versioni con il modello esportato da Teachable Machine. In un progetto pipenv: <code>pipenv uninstall tensorflow</code> e poi <code>pipenv install tensorflow==2.15</code> (funziona con Python 3.11). In Colab il corso fissa <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> e importa <code>tf_keras</code>. Tieni i comandi pronti da incollare: non risolvere versioni in diretta.'},
      {q: 'pyttsx3 non dice nulla, oppure speech_recognition dà errore a metà lezione.', a: 'Controlla il dispositivo di uscita e, soprattutto, <strong>silenzia il tuo microfono su Zoom e riesegui</strong>: M7L3 lo segnala esplicitamente, perché Zoom tiene occupato il microfono. Su alcuni sistemi l’indice di voce <code>voices[0].id</code> non esiste; fagli provare <code>voices[1]</code>.'},
      {q: 'Git si rifiuta di fare commit e parla di identità.', a: 'Esegui una volta per macchina, con i dati dello studente: <code>git config --global user.email "tu@esempio.it"</code> e <code>git config --global user.name "Il Tuo Nome"</code>. È nelle note di M2L3.'},
      {q: 'Il modello di uno studente sbaglia tutto con grande sicurezza.', a: 'È previsto, ed è un’occasione didattica. Il classificatore conosce solo le classi che gli sono state mostrate e forzerà qualsiasi input dentro una di esse (M6L1). Sistema il <strong>dataset</strong>, non il codice: più immagini, più varietà e un’immagine di prova che il modello non ha mai visto.'}
    ]
  },
  {
    cat: '🙋 Momenti difficili — cosa dire davvero',
    items: [
      {q: 'Uno studente chiede qualcosa che davvero non so.', a: 'Per impostazione predefinita: <strong>«Bella domanda, non ne sono sicuro — scopriamolo. Dove andremmo a guardare?»</strong> e poi fallo davvero sullo schermo. È la lezione M1L4 che accade dal vivo: nessuno conosce a memoria una libreria, e trovare la risposta <em>è</em> la competenza professionale. Se sei a metà di uno sprint e il tempo stringe, mettila da parte: «Voglio darti una risposta come si deve, ti scrivo stasera nella chat di gruppo». E poi fallo, senza eccezioni. L’unica risposta che ti danneggia è un’ipotesi detta con sicurezza, perché gli studenti la verificano durante la lezione.'},
      {q: 'Come dico «non lo so» senza perdere autorevolezza?', a: 'Dillo in breve e passa subito all’azione: la frase che funziona è «non lo so, scopriamolo», non «scusate, non sono molto bravo in questo». Qui la tua autorevolezza viene dal condurre bene la lezione e dal sapere dove cercare, non dall’onniscienza. Ripeti la frase ad alta voce qualche volta prima della tua prima lezione, così suonerà naturale e non come una scusa.'},
      {q: 'Uno studente ne sa chiaramente più di me su qualcosa.', a: 'Sfruttalo. Il corso ti chiede esplicitamente di passare lo schermo agli studenti più forti perché guidino un’installazione, spieghino una soluzione o tengano una mini lezione. Dillo apertamente — «su questo mi batti, vieni a mostrarcelo» — e loda la <em>spiegazione</em>. Un tutor che sa farlo appare sicuro, non debole. Quello che resta tuo è la lezione: il ritmo, la struttura e assicurarti che gli altri stiano al passo.'},
      {q: 'Il mio codice si rompe mentre faccio LiveCoding davanti a tutti.', a: 'È un regalo, e il metodo è fatto apposta: LiveCoding raccomanda esplicitamente di sbagliare <em>di proposito</em>. Di’ «bene, leggiamo cosa ci sta dicendo» e fai il debug ad alta voce. Gli studenti imparano di più guardandoti diagnosticare con calma un errore vero che guardando una digitazione impeccabile, e questo rende gli errori una cosa normale invece che imbarazzante.'},
      {q: 'Sto finendo il tempo e la fase non è completata.', a: 'Proteggi la forma, sacrifica la portata. Passa comunque alla retrospettiva o alla riflessione, e di’ chiaramente cosa non sei riuscito a coprire e quando lo riprenderai. Non tagliare mai la fase di riflessione per finire un compito: è lì che la lezione si consolida, e un compito non finito è un esito normale di uno sprint.'},
      {q: 'Uno studente dice che il progetto è inutile o noioso.', a: 'Vai alla domanda sul pubblico invece di difendere il compito: «chi lo userebbe davvero, e cosa renderebbe diverso il tuo?». Ogni progetto del corso ha una cornice reale e una versione aperta, quindi «fallo risolvere il tuo problema per le tue persone» è sempre disponibile. L’autonomia riaggancia un adolescente annoiato molto più in fretta di una giustificazione.'},
      {q: 'Uno studente non ha fatto i compiti e si è chiuso.', a: 'I piani sono categorici: coinvolgilo comunque e non essere negativo. Chiedigli cosa <em>pensa</em>, non cosa ha finito. M1L3 gli offre persino una via d’uscita dignitosa — «il cane mi ha mangiato i compiti» — così può passare il turno senza vergogna e restare nella conversazione.'},
      {q: 'Nessuno risponde quando faccio una domanda al gruppo.', a: 'Quasi certamente la domanda era troppo grande. Riducila finché non si risponde in poche parole: non «come lo risolveremmo?», ma «di che tipo deve essere questa variabile?». I piani di lezione modellano continuamente domande strette. Il silenzio di solito riguarda la dimensione della domanda, non la mancanza di volontà.'}
    ]
  },
  {
    cat: '🚀 Quando uno studente è avanti rispetto alla classe',
    items: [
      {q: 'Uno studente finisce il compito principale in dieci minuti.', a: 'Ogni lezione di questo corso porta con sé <strong>compiti aggiuntivi</strong> (contrassegnati con ⭐️ o «Agg.») proprio per questo. Usali prima di inventarti qualcosa: i compiti sulle API in M2L1, i comandi magici in M5L1, l’estensione con il ritaglio in OpenCV in M6L3. Approfondiscono il concetto di oggi invece di correre avanti rispetto al gruppo.'},
      {q: 'Come tengo impegnato uno studente veloce senza abbandonare gli altri?', a: 'Dagli un ruolo. Il corso suggerisce ripetutamente di far <strong>condividere lo schermo a uno studente forte perché guidi l’installazione o il live coding</strong> (M3L1, M6L3, M7L1). Spiegare una soluzione la consolida, lo tiene occupato in modo sensato e ti compra tempo con chi è bloccato. Loda la spiegazione, non il fatto di aver finito.'},
      {q: 'Devo lasciare che uno studente avanzato salti al materiale della lezione successiva?', a: 'Meglio profondità che velocità: disallinea il gruppo e crea buchi. Indirizzalo alla <strong>documentazione della libreria</strong>: M1L4 esiste per insegnare che leggere la documentazione e adattare gli esempi <em>è</em> la competenza professionale. «Trova nella documentazione un comando che nessun altro ha usato e aggiungilo» batte «inizia la lezione sei».'},
      {q: 'Uno studente dice che il progetto è noioso o troppo facile.', a: 'Passagli la versione aperta. Ogni progetto di questo corso ha una cornice reale — password, differenziata, dipendenza dalla tecnologia, consumi energetici, sicurezza stradale, cambiamento climatico — quindi «fallo risolvere il tuo problema per il tuo pubblico» è sempre disponibile. L’autonomia riaggancia chi finisce presto molto meglio di altri esercizi.'},
      {q: 'Uno studente domina la discussione e risponde a tutto.', a: 'Usa le strutture già presenti nei piani: il gioco della «palla» in M1L3 dove chi parla sceglie il successivo, il gioco dell’esperto «tutti contro uno» in M6L1 e la regola per cui lo stesso studente non può rispondere due volte di fila nel tris di M5L4. Lascia che sia il formato a distribuire la parola, così non devi farlo tu.'}
    ]
  },
  {
    cat: '🐢 Quando uno studente resta indietro',
    items: [
      {q: 'Uno studente è bloccato e si sta innervosendo.', a: '<strong>Trova prima l’unico problema che blocca</strong>: di solito è un singolo errore di battitura, un interprete non selezionato o un intent mancante, non un fraintendimento dell’intera lezione. Leggete insieme il messaggio d’errore, sistemate quella singola cosa e procuragli una vittoria visibile. La spinta conta più che coprire tutto.'},
      {q: 'Uno studente non riesce a stare al passo con il ritmo della costruzione.', a: '<strong>Riduci la portata.</strong> Una versione semplice finita batte una ambiziosa incompiuta: le note di M10L3 dicono esattamente questo sul progetto finale. Fagli inchiodare l’essenziale (il bot risponde, la pagina si carica, la voce si salva) e tratta gli extra come facoltativi. Dove esiste un progetto di partenza (il Basic Bot della scuola in M7L1, lo ZIP e i branch del repository in M4), daglielo invece di lasciare che la configurazione si mangi la lezione.'},
      {q: 'Il suo ambiente è rotto e la lezione sta iniziando.', a: 'Non lasciare che una macchina tenga in ostaggio la classe. Parti con chi è pronto, chiedi all’assistente tecnico di aiutare gli altri e dai a chi è bloccato un’alternativa funzionante: il Pipfile del repository con la soluzione (M7L1), il dataset condiviso (M6L2) o il CSV della lezione precedente (M5L3). L’ambiente lo sistemi durante la pratica o dopo la lezione.'},
      {q: 'Uno studente ha saltato la lezione precedente ed è perso.', a: 'Fai da ponte con la fase di ripasso invece di frenare il gruppo: un riassunto di due minuti di solo ciò che serve oggi, più un link allo stato del progetto che si è perso (il branch del repository, lo ZIP, il notebook precedente). Recuperare il resto diventa un compito leggero. La maggior parte dei moduli inizia anche con un quiz che puoi usare come ripasso.'},
      {q: 'Uno studente continua a fare lo stesso errore.', a: 'Non limitarti a sistemarlo: <strong>dai un nome allo schema</strong> e forniscigli la frase per auto-verificarsi: «<code>input()</code> mi dà testo, quindi lo avvolgo in <code>int()</code>», «il token non lascia mai la mia macchina», «se pip ha funzionato ma l’import no, controlla l’interprete». E la prossima volta lascia che sia <em>lui</em> a trovarlo. Il riflesso del debug vale più di qualsiasi singola correzione.'},
      {q: 'Uno studente non ha fatto i compiti e si è chiuso.', a: 'I piani di lezione sono categorici su questo: <strong>coinvolgilo comunque e non essere negativo.</strong> Chiedigli cosa pensa, non cosa ha finito. M1L3 gli offre persino una via d’uscita dignitosa («il cane mi ha mangiato i compiti») così può passare il turno senza vergogna e restare comunque nella stanza.'},
      {q: 'Uno studente è scoraggiato e vuole mollare.', a: 'Parti da un elogio concreto dell’impegno — «quel bug l’hai trovato da solo, ed è esattamente ciò che fanno i programmatori» — e riduci il passo successivo finché il successo non è garantito. Le note di metacognizione di M2L1 dicono la stessa cosa: una reazione di frustrazione è <em>informazione valida</em> sulla strategia scelta, non la prova che non sa programmare. Dillo ad alta voce.'}
    ]
  }
],
modules: [
  {
    id:1, emoji:'🚀', color:'#3776AB',
    title:'Introduzione e panoramica del corso',
    desc:'Cos’è Python Pro, i progetti che gli studenti realizzano, i metodi didattici che ci stanno dietro, come si riconosce il successo e come funziona questa formazione.',
    obj:'Vedere il quadro completo prima di insegnare qualsiasi cosa: cosa si propone il corso Python Pro, i suoi dieci moduli e quaranta lezioni, i progetti e la fascia d’età, i metodi didattici su cui è costruito, come sono fatti un buon tutor e un buon studente, e come è organizzato questo programma di formazione.',
    prep:'~45 minuti. Solo lettura: la parte pratica inizia dal Modulo 2.',
    sections:[
      {t:'🐍 Cos’è questo corso', cards:[
        {type:'text', h:'Il percorso Python avanzato, costruito attorno a progetti veri', b:'Python Pro è il <strong>corso avanzato di Python</strong> di Kodland per ragazzi dai <strong>13 ai 17 anni</strong>: il passo successivo a Python Basic. Gli studenti non stanno seduti ad ascoltare teoria: già dalla prima lezione costruiscono e pubblicano programmi funzionanti. Nel corso assumono a turno tre identità professionali — <strong>programmatore di automazione</strong>, <strong>sviluppatore web</strong> e <strong>programmatore di IA</strong> — così che alla fine possano scegliere da soli una direzione nello sviluppo in Python.'},
        {type:'hi', h:'Dieci moduli, quaranta lezioni, dai 13 ai 17 anni', b:'Il corso è fatto di <strong>10 moduli da 4 lezioni ciascuno: 40 lezioni</strong>, per studenti dai <strong>13 ai 17 anni</strong>. Una lezione di gruppo dura <strong>90 minuti</strong>; la stessa lezione esiste come piano <strong>individuale da 50 minuti</strong>. I moduli 1–2 costruiscono bot e front-end, il 3 e il 4 applicazioni web con Flask e database, il 5 e il 6 sono il blocco di IA, il 7 integra l’IA nei progetti precedenti, l’8 e il 9 sono mestiere ingegneristico e tecnologia vocale, e il 10 è un hackathon che porta al progetto finale.'},
        {type:'text', h:'Strumenti veri, dalla prima lezione', b:'Gli studenti escono quasi subito dall’ambiente protetto del browser. Lavorano in <strong>VS Code</strong>, installano librerie con <strong>pip</strong> e <strong>pipenv</strong>, pubblicano su <strong>GitHub</strong>, registrano applicazioni sul <strong>Discord Developer Portal</strong>, eseguono notebook in <strong>Google Colab</strong>, addestrano modelli con <strong>Google Teachable Machine</strong> e fanno il deploy su <strong>PythonAnywhere</strong>. La tua padronanza di questa catena di strumenti è lo scopo di questa formazione.'},
        {type:'qa', h:'Cosa realizzano davvero', items:[
          {k:'Blocco automazione', v:'Un dizionario di slang, un generatore di password sicure e bot Discord: un bot dei meme che legge una cartella e un bot che aiuta a ridurre i rifiuti.'},
          {k:'Blocco web', v:'Una pagina sulla dipendenza dalla tecnologia, un sito di curiosità in Flask, un calcolatore energetico per la casa intelligente, un generatore di meme, il «Diario del Programmatore» con database e login, e un sito portfolio pubblicato.'},
          {k:'Blocco IA', v:'Script per sostituire lo sfondo delle immagini, uno scraper di notizie, un riassuntore NLP, un classificatore di immagini addestrato, una partecipazione alla gara «foto vera contro immagine IA» e un rilevatore di oggetti per la sicurezza stradale.'},
          {k:'Integrazione e mestiere', v:'Un bot Discord che esegue il loro modello di visione, un traduttore vocale, un bot meteo parlante e codice ripulito con il refactoring.'},
          {k:'Finale', v:'Un progetto finale scelto da loro, costruito in stile hackathon, testato con una lista di controllo e presentato.'}
        ]}
      ]},
      {t:'🧭 La filosofia didattica', cards:[
        {type:'good', txt:'La regola che compare in quasi ogni piano di lezione: <strong>non scrivere il codice al posto degli studenti e non passare loro le risposte.</strong> Fai domande che guidino, lasciali ragionare ad alta voce, lasciali aiutare fra loro. Il tuo compito è sbloccare, non risolvere.'},
        {type:'text', h:'Ogni modulo parte da un problema reale', b:'I progetti non sono mai «fai un’app». Sono presentati come problemi che vale la pena risolvere: <strong>attacchi informatici</strong> (il generatore di password), <strong>inquinamento e rifiuti</strong> (l’eco-bot), <strong>dipendenza dalla tecnologia</strong> (le pagine web), la <strong>crisi energetica</strong> (il calcolatore), la <strong>sicurezza stradale</strong> (il rilevatore), il <strong>cambiamento climatico</strong> (l’hackathon). Parti dal problema, non dalla sintassi: il codice diventa un mezzo per arrivare a qualcosa.'},
        {type:'text', h:'Prima sperimentare, poi spiegare', b:'Diverse lezioni danno agli studenti il codice <em>prima</em> della spiegazione, di proposito, e chiedono loro di capire cosa fa: il bot Discord in M1L3, il template Jinja in M3L2, i notebook in M5. Resisti alla tentazione di spiegare presto. Cinque minuti di «cambia qualcosa e rilancia» producono domande migliori di qualsiasi spiegazione frontale.'},
        {type:'hi', h:'La riflessione è una fase, non un’aggiunta', b:'Assolutamente ogni lezione finisce con una fase di <strong>riflessione da 10–15 minuti</strong>: cosa abbiamo ottenuto, cosa è stato più difficile, cosa miglioreresti, più i compiti. È a calendario perché è lì che l’apprendimento si consolida. Il Modulo 15 di questa formazione presenta le otto tecniche di riflessione fornite dal corso, così puoi alternarle.'},
        {type:'tip', txt:'Motivare fa parte del lavoro. Il corso ti chiede di lodare l’impegno concreto, di condividere video motivazionali nella chat di gruppo dopo le lezioni che segnano una tappa e di festeggiare la fine di ogni modulo collegandola a una carriera vera. Pochissime persone finiscono un corso avanzato: dillo, e dillo sul serio.'}
      ]},
      {t:'🎯 Come si riconosce il successo', cards:[
        {type:'twocol', left:{h:'✅ Un buon tutor', items:['Ha abbastanza padronanza degli strumenti da concentrarsi del tutto sugli studenti','Parte dal problema, non dalla sintassi','Non scrive mai il codice al posto dello studente','Rispetta i tempi e va avanti quando una fase sfora','Legge gli errori ad alta voce invece di sistemarli in silenzio','Fa rispettare le regole su token e segreti senza eccezioni','Adatta la portata per chi è avanti o indietro rispetto al gruppo']}, right:{h:'🌟 Un buon studente', items:['Realizza progetti funzionanti e li pubblica su GitHub','Sa spiegare cosa fa il suo codice, non solo eseguirlo','Cerca risposte nella documentazione senza che glielo si dica','Fa il debug di un problema semplice con crescente autonomia','Pensa a chi è destinato il suo progetto','Dà e riceve commenti costruttivi sul codice','Presenta un progetto finale terminato di cui è orgoglioso']}},
        {type:'good', txt:'Il successo <strong>non</strong> è «abbiamo coperto tutto il programma». È uno studente sicuro con un progetto finito che capisce e di cui sa parlare. Il corso lo dice chiaramente a proposito del progetto finale: incoraggialo a finire senza complicare troppo e a rimandare i miglioramenti.'}
      ]},
      {t:'🗂️ Com’è organizzata questa formazione', cards:[
        {type:'text', h:'I moduli, in ordine', b:'Questa formazione ha <strong>16 moduli</strong> in tre parti. <strong>Preparazione (1–4):</strong> questa panoramica, i costrutti Python che il corso usa ma non spiega mai, come funziona una lezione e un laboratorio pratico di configurazione. <strong>Il corso vero e proprio (5–14):</strong> un modulo per ogni modulo del corso, in ordine — il Modulo 5 della formazione copre il Modulo 1 del corso, e così via — così trovi qualsiasi lezione all’istante. <strong>Conduzione e valutazione (15–16):</strong> il mestiere dell’insegnare più a fondo, poi una lezione modello da guardare. Ogni modulo si apre con un breve <strong>quadro generale → perché è importante → cosa costruiscono gli studenti → cosa devi padroneggiare al 100%</strong> e poi entra nel dettaglio.'},
        {type:'hi', h:'La regola del 70% e la prova finale', b:'I moduli vanno affrontati <strong>in ordine</strong>. Ognuno ha un test breve e serve almeno il <strong>70% per sbloccare il modulo successivo</strong>: non si salta avanti. Quando tutti i moduli sono completati si sblocca il <strong>Test di Competenze Digitali (DST)</strong>. L’ordine delle domande e quello delle risposte vengono mescolati a ogni tentativo, quindi ripetere un test significa conoscere il materiale, non ricordare le posizioni.'},
        {type:'warn', txt:'I test verificano soltanto che tu abbia <strong>letto e capito</strong> un modulo. Non possono verificare che tu sappia <em>farlo</em>, e in questo corso non sono la stessa cosa. Per questo all’inizio di ogni modulo c’è la lista <strong>✋ Prima di insegnare questo</strong>: le cose che devi aver costruito ed eseguito di persona. Spuntale onestamente. Superare il test del modulo sui database senza aver mai costruito l’app con il database è esattamente la situazione che crolla davanti a una classe.'},
        {type:'tip', txt:'Due cose sono sempre raggiungibili dalla parte alta di qualsiasi schermata: le <strong>❓ domande frequenti</strong> (un glossario, gli errori che incontrano gli studenti, le regole di sicurezza, cosa dire quando non conosci una risposta e cosa fare quando qualcuno è avanti o indietro rispetto al gruppo) e il <strong>cambio di tema</strong>. Usa le domande frequenti come riferimento rapido mentre prepari.'},
        {type:'text', h:'Più o meno quanto tempo richiede', b:'Ogni modulo riporta in alto una <strong>stima di preparazione</strong> che comprende la lettura più la parte pratica. In totale la formazione richiede circa <strong>30–40 ore</strong> se fai per bene le liste pratiche, e la pratica ne costituisce la maggior parte. I moduli più impegnativi sono il laboratorio di configurazione, Flask e i database. Una volta che inizi a insegnare, calcola circa <strong>1–2 ore di preparazione per lezione</strong>, di più per le lezioni di LiveCoding e per quelle sui database del modulo 4, di meno per quelle basate sulla discussione.'}
      ]}
    ],
    quiz:[
      {q:'Com’è strutturato il corso Python Pro?', opts:['10 moduli da 4 lezioni ciascuno — 40 lezioni, 90 minuti in formato di gruppo','4 moduli da 10 lezioni ciascuno, da 45 minuti','Un unico blocco continuo di lezioni senza moduli','20 lezioni da 60 minuti, tutte individuali'], c:0, fb:'Python Pro è 10 moduli × 4 lezioni = 40 lezioni. Le lezioni di gruppo durano 90 minuti; ognuna ha una variante individuale da 50 minuti.'},
      {q:'Quali tre ruoli professionali fa assumere il corso agli studenti?', opts:['Programmatore di automazione, sviluppatore web e programmatore di IA','Game designer, animatore e modellatore 3D','Addetto ai dati, tester e project manager','Sviluppatore front-end, ingegnere DevOps e analista di sicurezza'], c:0, fb:'M1L1 imposta tutto il corso attorno a tre ruoli — programmatore di automazione, sviluppatore web e programmatore di IA — così alla fine gli studenti possono scegliere una direzione.'},
      {q:'Uno studente è bloccato sul generatore di password. Cosa si aspetta il corso da te?', opts:['Fare domande che guidino e lasciare che lui e i compagni ci arrivino ragionando — non scrivergli il codice','Scrivere la soluzione nel suo editor così la classe non perde tempo','Mandargli il codice finito in chat','Saltare l’esercizio e passare alla fase successiva'], c:0, fb:'«Non scrivere il codice al posto degli studenti e non dare loro le risposte» è ripetuto in tutti i piani di lezione. Tu sblocchi; loro risolvono.'},
      {q:'Perché ogni progetto viene introdotto con un problema reale come gli attacchi informatici o la raccolta differenziata?', opts:['Perché il codice diventi un mezzo per risolvere qualcosa a cui gli studenti tengono, invece di un esercizio','Perché la piattaforma richiede un tema per ogni compito','Per riempire il tempo prima della fase pratica','Perché i problemi sono ciò che il test valuta'], c:0, fb:'Ogni modulo si apre con un problema autentico — password, inquinamento, dipendenza dalla tecnologia, energia, sicurezza stradale, clima — così costruiscono qualcosa che conta per loro.'},
      {q:'Dove si colloca la fase di riflessione in una lezione di Python Pro?', opts:['È una fase da 10–15 minuti, prevista a calendario, alla fine di ogni singola lezione','Avviene solo alla fine di ogni modulo','È facoltativa e di solito si salta','Sostituisce la fase pratica quando manca il tempo'], c:0, fb:'Ogni lezione finisce con una fase programmata di riflessione e compiti: è lì che l’apprendimento si consolida, non è un extra opzionale.'},
      {q:'Come arriva al Test di Competenze Digitali chi si candida come tutor in questa formazione?', opts:['Completando tutti i moduli in ordine con almeno il 70% in ciascun test — il DST si sblocca solo allora','Cliccando un pulsante «vai al DST» disponibile a tutti','Superando il primo modulo','Il DST è aperto fin dall’inizio'], c:0, fb:'I moduli sono sequenziali e ognuno richiede il 70% per sbloccare il successivo. Il DST si apre solo quando tutti i moduli sono completati.'},
      {q:'Cosa definisce il corso come successo per uno studente?', opts:['Uno studente sicuro, con un progetto finito che capisce e sa presentare','Uno studente che ha svolto tutti i compiti a prescindere da cosa funzionava','Chi programma più velocemente nel gruppo','Chi ha memorizzato più comandi delle librerie'], c:0, fb:'Un progetto finito, capito e presentabile batte uno ambizioso incompiuto: le note sul progetto finale dicono esattamente questo.'}
    ]
  },
  {
    id:2, emoji:'🐍', color:'#4A9BD8',
    title:'Il Python che ti serve prima',
    desc:'Il Python che compare in tutto il corso ma non viene mai spiegato: decoratori, async/await, classi e self, metodi dunder, lambda, annotazioni di tipo e *args — più una versione in parole semplici di ciascuno per gli studenti.',
    obj:'Colmare la distanza fra «conosco le basi di Python» e «so spiegare ogni riga del codice del corso». Ognuno di questi costrutti compare nelle lezioni che terrai, e il programma non si ferma mai a spiegarli. Per ciascuno ti servono due cose: una comprensione abbastanza solida da non bluffare e una frase da dire a un quattordicenne.',
    prep:'~2–3 ore. Digita ogni esempio invece di leggerlo.',
    practical:{
      intro:'Questo modulo è l’unico punto in cui leggere davvero non basta: questi costrutti scattano solo dopo averli eseguiti. Prima del test, prova tutto in un file di prova:',
      items:[
        'Scritto un decoratore da zero e visto come avvolge una funzione',
        'Scritto ed eseguito una funzione <code>async def</code> con <code>await asyncio.sleep(1)</code> e capito perché conta il loop',
        'Definito una classe con <code>__init__</code> e <code>self</code>, creato due oggetti e dato loro valori diversi',
        'Fatto ereditare una classe da un’altra e chiamato il metodo della classe madre',
        'Aggiunto un <code>__repr__</code> e visto cosa cambia stampando l’oggetto',
        'Riscritto un piccolo ciclo <code>for</code> come comprensione di lista e una funzione di due righe come <code>lambda</code>',
        'Eseguito una funzione che riceve <code>*args</code> e stampato cos’è davvero <code>args</code>'
      ]
    },
    sections:[
      {t:'🧭 Perché esiste questo modulo', cards:[
        {type:'brief',
          overview:'Sette costrutti Python che compaiono di continuo nel codice del corso e che il corso non spiega mai: il <strong>decoratore</strong> (<code>@bot.command()</code>, <code>@app.route()</code>), <strong>async/await</strong>, le <strong>classi</strong> con <code>self</code> ed ereditarietà, i <strong>metodi dunder</strong>, <strong>lambda</strong>, le <strong>annotazioni di tipo</strong> e <strong>*args</strong>.',
          why:'Ogni lezione su Discord usa decoratori e <code>async</code>. Ogni lezione su Flask usa decoratori. Il modulo sui database definisce classi che ereditano. Qualcuno chiederà «a cosa serve la <code>@</code>?» alla lezione M1L3 del corso — la terza lezione — e «non lo so» è una risposta che puoi dare una volta sola prima che il gruppo smetta di chiederti qualsiasi cosa.',
          learn:'Niente direttamente: agli studenti tutto questo non viene mai insegnato formalmente. Il programma lo rimanda apertamente: «Ogni libreria è fatta di classi. Parleremo di cosa sono e perché ci servono in altre lezioni». In pratica, la spiegazione sei <em>tu</em>.',
          confident:'Cosa fa un decoratore alla funzione che sta sotto; perché il codice di un bot ha bisogno di <code>async</code>/<code>await</code>; a cosa si riferisce <code>self</code>; cosa significano le parentesi in <code>class Card(db.Model)</code>; e una versione di una frase, per gli studenti, di ciascuno.'
        },
        {type:'good', txt:'Non serve padroneggiare tutto questo a livello professionale. Serve non bluffare. L’asticella è questa: sai spiegarlo in modo semplice, sai rispondere a una domanda di approfondimento e sai dov’è il confine onesto delle tue conoscenze.'}
      ]},
      {t:'🎀 I decoratori — il simbolo @', cards:[
        {type:'text', h:'Cos’è davvero', b:'Un <strong>decoratore</strong> è una funzione che prende un’altra funzione, le avvolge attorno un comportamento in più e la restituisce. La riga con <code>@</code> è un’abbreviazione: scrivere <code>@mio_decoratore</code> sopra <code>def saluta()</code> significa «prendi <code>saluta</code>, passala attraverso <code>mio_decoratore</code> e fai in modo che il risultato diventi il nuovo significato di <code>saluta</code>».'},
        {type:'code', lbl:'un decoratore che puoi scrivere tu in dieci righe', code:`<span class="ck">def</span> <span class="cf">shout</span>(func):              <span class="cc"># prende una funzione...</span>
    <span class="ck">def</span> <span class="cf">wrapper</span>():
        result = <span class="cf">func</span>()          <span class="cc"># ...esegue l'originale...</span>
        <span class="ck">return</span> result.<span class="cf">upper</span>() + <span class="cs">"!!!"</span>   <span class="cc"># ...e ci aggiunge qualcosa</span>
    <span class="ck">return</span> wrapper             <span class="cc"># ...poi restituisce la nuova versione</span>

<span class="cd">@shout</span>
<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="ck">return</span> <span class="cs">"ciao"</span>

<span class="cf">print</span>(<span class="cf">greet</span>())               <span class="cc"># CIAO!!!</span>

<span class="cc"># @shout sopra greet() è esattamente uguale a scrivere:</span>
<span class="cc">#   greet = shout(greet)</span>`},
        {type:'text', h:'Cosa significa per il codice del corso', b:'Nel corso non si scrive mai un decoratore: si <em>usano</em> solo quelli forniti dalle librerie. <code>@bot.command()</code> significa «discord.py, registra la funzione qui sotto come comando che gli utenti possono digitare». <code>@app.route("/")</code> significa «Flask, esegui la funzione qui sotto quando qualcuno visita questo indirizzo». In entrambi i casi il decoratore è il modo in cui <strong>la tua funzione viene consegnata alla libreria</strong>, perché la richiami lei quando arriva il momento. Queste funzioni non le chiami mai tu: è tutto il senso della cosa, ed è la parte che agli studenti sembra strana.'},
        {type:'hi', h:'La frase per gli studenti', b:'«La riga con la <code>@</code> è un’etichetta che attacchi a una funzione perché la libreria sappia <em>a cosa serve</em>. <code>@app.route("/")</code> è un’etichetta che dice “esegui questa quando qualcuno apre la home page”. Non la chiami tu: la chiama Flask per te quando arriva un visitatore.» Ai più grandi o più svegli puoi aggiungere: è una funzione che ne avvolge un’altra.'},
        {type:'warn', txt:'Una differenza da conoscere per non sembrare incoerente: <code>@bot.event</code> non ha parentesi, <code>@bot.command()</code> sì. Entrambe sono corrette così come stanno nel codice del corso. Quella con le parentesi è una <em>fabbrica</em> di decoratori: può ricevere opzioni come <code>@bot.command(name="pw")</code>, quindi va chiamata prima per produrre il decoratore vero. Se qualcuno chiede, «quella può ricevere impostazioni, quindi ha bisogno delle sue parentesi» è una risposta vera e sufficiente.'}
      ]},
      {t:'⏳ async e await', cards:[
        {type:'text', h:'Il problema che risolvono', b:'Un bot Discord passa quasi tutto il tempo ad <strong>aspettare</strong>: un messaggio, la conferma di invio da Discord, la risposta di un’API. L’attesa normale in Python blocca tutto: mentre una riga aspetta non può succedere nient’altro, quindi il bot sarebbe sordo mentre risponde a un singolo messaggio. <code>async</code> permette a una funzione di mettersi in pausa in un punto di attesa e lasciare che nel frattempo proceda altro lavoro.'},
        {type:'qa', h:'Le tre parole, in termini semplici', items:[
          {k:'async def', v:'Dichiara una funzione <em>autorizzata a mettersi in pausa</em>. Chiamarla non la esegue: produce qualcosa che verrà eseguito dal loop degli eventi.'},
          {k:'await', v:'«Fermati qui finché questa cosa non finisce, e lascia che intanto accadano altre cose». Si può usare solo dentro un <code>async def</code>.'},
          {k:'Il loop degli eventi', v:'Il gestore che tiene in movimento tutte le funzioni in pausa. Nel corso discord.py lo avvia per te dentro <code>bot.run(...)</code>, ed è per questo che non serve configurare nulla.'}
        ]},
        {type:'code', lbl:'perché ogni comando di bot del corso è fatto così', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):                <span class="cc"># può mettersi in pausa</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Hi!"</span>)            <span class="cc"># pausa finché Discord conferma</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Still here!"</span>)    <span class="cc"># poi prosegue</span>

<span class="cc"># Dimentica await e non viene inviato nulla: compare un avviso su una</span>
<span class="cc"># "coroutine was never awaited". È l'errore async numero 1 degli studenti.</span>`},
        {type:'warn', txt:'L’errore che gli studenti produrranno davvero: scrivere <code>ctx.send("Hi")</code> senza <code>await</code>. Non compare nessun messaggio e la console parla di una coroutine mai attesa. Impara a riconoscere quel messaggio: significa «hai creato il lavoro ma non l’hai mai fatto partire». Nota anche che le funzioni vocali e le chiamate API del corso <em>non</em> sono async, quindi un comando di bot mescola chiamate con await (Discord) e chiamate normali (<code>speak()</code>, <code>requests.get()</code>).'},
        {type:'hi', h:'La frase per gli studenti', b:'«<code>async</code> significa che questa funzione può aspettare senza congelare tutto il bot, e <code>await</code> segna il punto in cui aspetta. Pensa a un cameriere che prende l’ordine di un altro tavolo mentre la cucina prepara, invece di restare fermo finché il piatto non è pronto.»'},
        {type:'good', txt:'Questo è il confine onesto di ciò che ti serve. <strong>Non</strong> devi capire le coroutine, il funzionamento interno del loop degli eventi o <code>asyncio.gather</code>. Se qualcuno va oltre «aspetta senza congelare», è una domanda davvero avanzata: dillo, di’ che è un’ottima domanda e cercatela insieme. Così mostri l’abitudine alla documentazione di M1L4 invece di indebolirti.'}
      ]},
      {t:'🏗️ Classi, self ed ereditarietà', cards:[
        {type:'text', h:'La parte che ti dà il programma', b:'Il corso dice: in Python tutto è un oggetto e le classi sono gli <strong>stampi</strong> da cui nascono gli oggetti — più l’ottima osservazione che <strong>Flask è una classe</strong> che gli studenti usano da sempre. È un’impostazione corretta ed è dove si ferma la lezione M4L1 del corso. Quello che segue è ciò che ti serve oltre.'},
        {type:'code', lbl:'una classe, un oggetto e cos’è self', code:`<span class="ck">class</span> <span class="ct2">Dog</span>:
    <span class="ck">def</span> <span class="cf">__init__</span>(self, name):    <span class="cc"># viene eseguito quando ne crei uno</span>
        self.name = name         <span class="cc"># salvalo SU QUESTO oggetto</span>

    <span class="ck">def</span> <span class="cf">speak</span>(self):
        <span class="ck">return</span> <span class="cs">f"{self.name} says woof"</span>

rex = <span class="ct2">Dog</span>(<span class="cs">"Rex"</span>)               <span class="cc"># due oggetti...</span>
bella = <span class="ct2">Dog</span>(<span class="cs">"Bella"</span>)            <span class="cc"># ...da un solo stampo</span>

<span class="cf">print</span>(rex.<span class="cf">speak</span>())             <span class="cc"># Rex says woof</span>
<span class="cf">print</span>(bella.<span class="cf">speak</span>())           <span class="cc"># Bella says woof</span>`},
        {type:'text', h:'self, in un’idea sola', b:'<code>self</code> è <strong>«l’oggetto specifico su cui è stato chiamato questo metodo»</strong>. Uno stampo, molti oggetti, ciascuno con i propri dati: <code>self</code> è il modo in cui un metodo sa con quale sta lavorando. È il primo parametro di ogni metodo e Python lo riempie per te, ed è per questo che scrivi <code>rex.speak()</code> con le parentesi vuote ma <code>def speak(self)</code> nella classe.'},
        {type:'text', h:'Ereditarietà — le parentesi in class Card(db.Model)', b:'Scrivere <code>class Card(db.Model)</code> significa «<strong>Card è un tipo di db.Model e riceve gratis tutto quello che db.Model sa fare</strong>». È per questo che <code>Card</code> ha improvvisamente <code>.query</code>, ed è per questo che SQLAlchemy sa trasformarla in una tabella del database: niente di tutto ciò è codice scritto durante la lezione. Stesso schema ovunque: <code>class User(db.Model)</code> in M4L2 eredita le stesse capacità.'},
        {type:'hi', h:'Le frasi per gli studenti', b:'Per le classi: «Una classe è una formina per i biscotti e gli oggetti sono i biscotti: una forma sola, tanti biscotti, ognuno con la sua decorazione.» Per <code>self</code>: «<code>self</code> vuol dire <em>proprio questo qui</em>: è così che la ricetta sa di quale biscotto sta parlando.» Per l’ereditarietà: «Le parentesi vogliono dire “questo è un tipo di quello e ne eredita tutto quello che sa fare”, come un barboncino che è un tipo di cane e sa già abbaiare senza doverlo imparare.»'},
        {type:'tip', txt:'Non terrai una lezione formale di programmazione a oggetti: il programma tiene di proposito le classi leggere e pratiche. Il tuo compito è più ristretto: quando qualcuno chiede perché <code>class Card(db.Model)</code> ha qualcosa fra parentesi, o cos’è <code>self</code>, tu hai una risposta vera. Sono esattamente queste le due domande che arrivano.'}
      ]},
      {t:'✨ Metodi dunder, lambda, annotazioni di tipo e *args', cards:[
        {type:'qa', h:'Metodi dunder («doppio trattino basso»)', items:[
          {k:'Cosa sono', v:'Metodi con due trattini bassi per lato. Python li chiama <em>lui</em> per te in momenti precisi, invece di essere tu a chiamarli per nome.'},
          {k:'__init__', v:'Viene eseguito quando un oggetto viene creato. «Prepara questo».'},
          {k:'__repr__', v:'Decide che aspetto ha l’oggetto quando lo stampi. È tutto ciò che fa <code>return f\'&lt;Card {self.id}&gt;\'</code> in M4L1: rende leggibile l’output di debug invece di mostrare un indirizzo di memoria.'},
          {k:'__name__', v:'Non è un metodo ma una variabile con il nome del file corrente, oppure la stringa <code>"__main__"</code> se è il file che hai eseguito. <code>Flask(__name__)</code> è Flask che chiede «dove mi trovo, così trovo la tua cartella templates?».'},
          {k:'if __name__ == "__main__":', v:'«Fai questo solo se il file è stato eseguito direttamente, non se è stato importato da un altro file». È per questo che importare <code>bot_logic.py</code> in M1L3 non avvia nulla per sbaglio.'}
        ]},
        {type:'code', lbl:'lambda, annotazioni di tipo e *args — i tre più piccoli', code:`<span class="cc"># lambda: una funzioncina senza nome, scritta sulla stessa riga</span>
<span class="ck">lambda</span> x: x[<span class="cn">1</span>]        <span class="cc"># uguale a: def f(x): return x[1]</span>

<span class="cc"># In M5L3 dice a sorted() SU QUALE parte ordinare: l'elemento 1, il punteggio</span>
<span class="cc">#   sorted(scores.items(), key=lambda x: x[1], reverse=True)</span>

<span class="cc"># annotazioni di tipo: note per gli umani. Python NON le fa rispettare.</span>
<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:   <span class="cc"># prende una stringa, restituisce una stringa</span>
    <span class="ck">return</span> <span class="cs">"sunny"</span>

<span class="cc"># *args: "quanti argomenti posizionali vuoi", raccolti in una tupla</span>
<span class="ck">def</span> <span class="cf">total</span>(*prices):
    <span class="cf">print</span>(prices)          <span class="cc"># (100, 200, 300) — è solo una tupla</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

<span class="cf">total</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>)        <span class="cc"># funziona con qualsiasi quantità</span>`},
        {type:'hi', h:'Le frasi per gli studenti', b:'<strong>lambda:</strong> «Una mini funzione usa e getta che scrivi su una riga quando non vale la pena darle un nome.» <strong>Annotazioni di tipo:</strong> «Note che dicono cosa entra e cosa esce. Python non le controlla: servono a chi legge il codice, te compreso fra un mese.» <strong>*args:</strong> «L’asterisco vuol dire “quanti ne vuoi”: arrivano come una lista che puoi sommare.» <strong>__repr__:</strong> «Decide cosa si vede quando stampi l’oggetto, così vedi qualcosa di utile invece di caratteri incomprensibili.»'},
        {type:'good', txt:'Le annotazioni di tipo meritano un po’ di entusiasmo quando arrivi alla lezione sul codice pulito. Sono l’unica voce di questa lista che riguarda puramente il essere gentili con chi legge dopo, che è esattamente l’argomento su cui si regge quella lezione.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente indica @app.route("/") e chiede cosa fa la chiocciola. Qual è la tua risposta?', opts:['Consegna la funzione sottostante a Flask come compito etichettato, così Flask la esegue quando qualcuno visita quell’indirizzo — tu non la chiami mai','Segna la funzione come privata così gli studenti non possono modificarla','È un commento che ricorda a quale pagina serve la funzione','Importa la rotta dalla libreria Flask'], c:0, fb:'Un decoratore prende la funzione sotto di sé e la consegna alla libreria con un comportamento in più. Queste funzioni non le chiami mai tu: le chiama la libreria quando arriva il momento.'},
      {q:'Scrivere @shout sopra def greet() equivale a quale riga di Python normale?', opts:['greet = shout(greet)','shout = greet()','greet(shout)','import shout from greet'], c:0, fb:'È esattamente ciò che la sintassi con la chiocciola abbrevia: passare la funzione attraverso il decoratore e far diventare il risultato il nuovo significato del nome.'},
      {q:'Perché ogni comando Discord del corso è scritto come async def?', opts:['Perché il bot passa quasi tutto il tempo ad aspettare, e async gli permette di mettersi in pausa in un punto di attesa invece di congelare tutto il resto','Perché i comandi Discord devono essere più veloci delle funzioni normali','Perché async è obbligatorio per ogni funzione con argomenti','Perché così il bot gestisce più server contemporaneamente'], c:0, fb:'Un bot è quasi sempre in attesa: di messaggi, di conferme, di API. async permette a una funzione di fermarsi e lasciare che altro lavoro prosegua mentre aspetta.'},
      {q:'Uno studente scrive ctx.send("Hi") senza await e non compare nulla. Cos’è successo?', opts:['Ha creato il lavoro ma non l’ha mai fatto partire — la console parlerà di una coroutine mai attesa','Il messaggio è finito nel canale sbagliato','Il token del bot è scaduto','send() richiede la classe Client invece di Bot'], c:0, fb:'È in assoluto l’errore async più comune fra gli studenti. Riconoscere il messaggio «coroutine was never awaited» è il modo più rapido di diagnosticarlo.'},
      {q:'A cosa si riferisce self dentro il metodo di una classe?', opts:['All’oggetto specifico su cui è stato chiamato il metodo — è così che il metodo sa quali dati usare','Alla classe stessa, non a un oggetto creato da essa','Al file in cui è scritta la classe','Alla classe madre da cui eredita'], c:0, fb:'Uno stesso stampo può produrre molti oggetti, ognuno con i propri dati. self è come il metodo sa con quale sta lavorando, e Python lo riempie automaticamente.'},
      {q:'Cosa significano le parentesi in class Card(db.Model)?', opts:['Card è un tipo di db.Model ed eredita tutto ciò che sa fare — per questo ha improvvisamente .query e può diventare una tabella','db.Model viene passato come primo dato','La classe funziona solo finché db.Model è importato','Rinomina internamente la classe in db.Model'], c:0, fb:'Ereditarietà. Nessuna parte del meccanismo di query o di mappatura delle tabelle è scritta nella lezione: Card la riceve gratis da db.Model.'},
      {q:'A cosa serve __repr__?', opts:['Decide che aspetto ha l’oggetto quando lo stampi, così l’output di debug è leggibile invece di essere un indirizzo di memoria','Viene eseguito alla creazione dell’oggetto e ne prepara i dati','Rimuove l’oggetto dal database','Restituisce la posizione dell’oggetto nella tabella'], c:0, fb:'__init__ prepara un oggetto; __repr__ decide come appare quando lo stampi. In M4L1 è ciò che fa comparire <Card 3> invece di caratteri incomprensibili.'},
      {q:'In sorted(scores.items(), key=lambda x: x[1], reverse=True), cosa fa la lambda?', opts:['Fa da funzioncina senza nome che dice a sorted() di ordinare in base all’elemento 1, cioè il punteggio','Inverte ogni coppia prima di ordinare','Rimuove le voci con punteggio zero','Converte il dizionario in una lista'], c:0, fb:'Una lambda è una funzione senza nome su una riga. Qui dice a sorted() quale parte di ogni coppia confrontare: l’elemento 1, il punteggio della frase.'},
      {q:'Cosa fanno davvero a runtime le annotazioni di tipo come (city: str) -> str?', opts:['Niente — Python non le fa rispettare; documentano cosa entra e cosa esce per chi legge il codice','Convertono automaticamente l’argomento in stringa','Sollevano un errore se viene passato il tipo sbagliato','Rendono la funzione più veloce'], c:0, fb:'Sono documentazione per le persone. Vale la pena dirlo chiaramente, così nessuno ci si affida come se fossero una validazione.'},
      {q:'Uno studente sveglio va ben oltre «async vuol dire che aspetta senza congelare» e chiede come il loop degli eventi pianifica le coroutine. Qual è la mossa giusta?', opts:['Dire che è una domanda davvero avanzata, che dovresti verificarla, e cercarla insieme a lui','Dare un’ipotesi con sicurezza così il gruppo continua a fidarsi','Dirgli che è fuori dal corso e andare avanti','Reindirizzarlo a un compito aggiuntivo invece di rispondere'], c:0, fb:'Questo è il confine onesto di ciò che ti serve, e cercarla insieme mostra esattamente l’abitudine alla documentazione che M1L4 vuole insegnare. Tirare a indovinare è l’unica opzione che ti costa davvero credibilità.'}
    ]
  },
  {
    id:3, emoji:'🗺️', color:'#2FA37C',
    title:'Come funziona una lezione di Python Pro',
    desc:'La forma che segue ogni lezione, i cinque metodi didattici che i piani danno per conosciuti e la disciplina sui tempi che decide se una lezione riesce.',
    obj:'Imparare la meccanica di una lezione prima di imparare dieci moduli di contenuti. Ogni piano di lezione nomina un metodo in cima e dà per scontato che tu sappia cosa significa: questo modulo fa in modo che sia vero, così «questa lezione usa il metodo Usa–Modifica–Crea» diventa un’istruzione e non un enigma.',
    prep:'~1 ora.',
    practical:{
      intro:'Prima del test, orientati nei materiali veri:',
      items:[
        'Letto un piano di lezione completo dal PDF del programma dall’inizio alla fine, tabella delle fasi compresa',
        'Individuato in quel piano: il briefing, il problema, gli obiettivi, la teoria, la pratica e la riflessione',
        'Trovato la nota in cima al piano che nomina il metodo didattico usato',
        'Capito cosa dovrebbe lasciare fuori la versione individuale da 50 minuti di quella lezione'
      ]
    },
    sections:[
      {t:'🧭 Perché questo viene prima dei contenuti', cards:[
        {type:'brief',
          overview:'Ognuna delle 40 lezioni condivide uno scheletro — <strong>briefing → controllo dei compiti → il problema → gli obiettivi → teoria → pratica → riflessione</strong> — e si appoggia a cinque metodi con un nome preciso: <strong>EduScrum</strong>, <strong>LiveCoding</strong>, <strong>Usa–Modifica–Crea</strong>, <strong>metacognizione</strong> e <strong>gamificazione</strong>.',
          why:'I metodi iniziano a essere usati alla <em>seconda lezione del corso</em>. Se incontri «questa sessione è progettata attorno al sistema Scrum» senza sapere cosa significhi, condurrai la lezione come una qualsiasi e la struttura su cui si regge sparirà in silenzio.',
          learn:'Niente direttamente, ma gli studenti sentono tutto. Il ritmo degli sprint, gli errori voluti, i cinque minuti di sperimentazione prima della spiegazione: è questo che rende il corso diverso dalla scuola.',
          confident:'Lo scheletro in sette parti; cosa significa in pratica ciascuno dei cinque nomi dei metodi; e cosa fare quando sei in ritardo sui tempi.'
        }
      ]},
      {t:'🕐 Lo scheletro', cards:[
        {type:'text', h:'Le sette parti, in ordine', b:'<strong>1. Briefing e saluti</strong> — controlla microfoni e telecamere, fai l’appello dentro una conversazione invece che come elenco. <strong>2. Controllo dei compiti</strong> — partecipano tutti, anche chi non li ha fatti. <strong>3. Il problema</strong> — l’aggancio con il mondo reale. <strong>4. Gli obiettivi</strong> — cosa produce la lezione di oggi. <strong>5. Teoria</strong> — sempre breve. <strong>6. Pratica</strong> — il corpo della lezione. <strong>7. Riflessione e compiti</strong> — da 10 a 15 minuti, previsti a calendario.'},
        {type:'text', h:'Leggi la tabella delle fasi prima di ogni altra cosa', b:'Ogni piano di lezione nel PDF si apre con una tabella che dà a ciascuna fase una <strong>durata e un’ora di inizio</strong>, più la variante individuale da 50 minuti. Quella tabella è la spina dorsale della lezione. Leggila e sappi dove sono le tue due ancore non negoziabili: la pratica deve avere il suo tempo e la riflessione non si può sacrificare.'},
        {type:'warn', txt:'Il modo più comune in cui una lezione di Python Pro fallisce è una <strong>fase iniziale che sfora</strong>. I piani lo segnalano di continuo: non lasciare che la teoria si trascini, non superare il tempo previsto per la configurazione dell’ambiente, non prolungare la discussione. Tienilo d’occhio su te stesso: la fase di teoria dà sicurezza mentre la insegni, ed è esattamente per questo che si dilata.'},
        {type:'good', txt:'Usa timer visibili, sempre. I piani li richiedono per presentazioni da un minuto, brainstorming da cinque, cacce al codice da due, turni di addestramento da sette. Un timer sullo schermo fa la disciplina al posto tuo, così tu resti la persona che aiuta e non quella che mette fretta.'}
      ]},
      {t:'🎓 I cinque metodi, per nome', cards:[
        {type:'qa', h:'Cosa significa ogni nome quando lo vedi in cima a un piano', items:[
          {k:'Scrum / EduScrum', v:'La lezione è divisa in <strong>sprint</strong> con limiti di tempo rigidi. Ognuno si apre con una discussione breve e si chiude con due domande fisse: «abbiamo davvero raggiunto il risultato?» e «come ci avvicina alla soluzione del problema principale?». Le versioni più complete aggiungono una retrospettiva. <em>Usato per la prima volta nella lezione M1L2 del corso, la seconda lezione.</em>'},
          {k:'LiveCoding', v:'Costruisci il codice <strong>insieme agli studenti</strong>, condividendo lo schermo, raccontando le decisioni e sbagliando di proposito perché lo notino. <em>Usato nelle lezioni sui database.</em>'},
          {k:'Usa–Modifica–Crea', v:'Gli studenti prima <strong>usano</strong> codice funzionante, poi lo <strong>modificano</strong> mentre tu spieghi, e solo dopo <strong>creano</strong> il proprio. Resisti alla tentazione di spiegare presto. <em>Usato per il primo bot Discord e per il modello Keras.</em>'},
          {k:'Metacognizione', v:'Cinque soste programmate in cui gli studenti riflettono su <em>come</em> stanno imparando, non su cosa. <em>Usata nella lezione M2L1 del corso.</em>'},
          {k:'Gamificazione', v:'Teoria presentata come gioco invece che come spiegazione frontale: squadre da quiz, giochi dell’esperto, cacce al codice, gare di accuratezza. Non è riempitivo: <em>è</em> il metodo con cui si trasmette.'}
        ]},
        {type:'text', h:'Quando sei in ritardo', b:'L’istruzione è esplicita e vale la pena farla propria fin d’ora: in una lezione EduScrum, se sei in ritardo, <strong>passa comunque alla retrospettiva</strong> e discutete cosa è andato storto. Una lezione completa con compiti non finiti vale più di una lezione incompleta. La stessa logica vale ovunque: proteggi la forma, sacrifica la portata.'},
        {type:'tip', txt:'Quando un piano nomina un metodo, ti sta dicendo che la lezione non funziona in altro modo. Una lezione Usa–Modifica–Crea condotta come spiegazione frontale, o una lezione EduScrum senza controllo dei tempi, produce una fase che sfora e un gruppo disimpegnato. Leggi prima la nota in cima al piano, sempre.'}
      ]},
      {t:'🧰 Gli strumenti e le due regole d’oro', cards:[
        {type:'qa', h:'Con cosa conduci una lezione', items:[
          {k:'Zoom / Classroom', v:'La lezione vera e propria, più le stanze separate, gli strumenti di annotazione per il LiveCoding e la lavagna condivisa.'},
          {k:'La piattaforma', v:'Compiti, teoria, esempi di codice, chat, valutazioni. Quasi ogni fase dice «vai al compito chiamato…».'},
          {k:'Backoffice (BO)', v:'Verificare che i compiti siano stati davvero inviati; il link alla chat di gruppo.'},
          {k:'Chat di gruppo', v:'Supporto fra una lezione e l’altra, link ai repository, meme.'},
          {k:'Strumenti per quiz e lavagne', v:'Wayground / Quizizz, Tally e Miro o equivalenti per i brainstorming.'},
          {k:'Assistente tecnico (TS)', v:'Il tuo secondo paio di mani per le installazioni e gli studenti bloccati. Usalo.'}
        ]},
        {type:'good', txt:'<strong>Regola uno: non scrivere mai il codice di uno studente.</strong> Fai domande che guidino, lasciali ragionare ad alta voce, lasciali aiutarsi a vicenda. Compare in quasi ogni piano ed è il comportamento che qui distingue di più un buon tutor.'},
        {type:'good', txt:'<strong>Regola due: prima la teoria, poi il codice.</strong> Di’ cosa fa una riga e poi scrivetela insieme. I principianti buttati direttamente dentro uno script si perdono: il concetto deve assestarsi prima della sintassi.'},
        {type:'tip', txt:'Il Modulo 15 copre il resto del mestiere di condurre le lezioni: differenziazione, valutazione, gestione della classe, le tecniche di riflessione e cosa dire quando non conosci una risposta. Torna lì quando avrai assimilato i moduli sui contenuti: ne ricaverai di più.'}
      ]}
    ],
    quiz:[
      {q:'Quali sono le sette parti di una lezione di Python Pro, in ordine?', opts:['Briefing → controllo dei compiti → il problema → gli obiettivi → teoria → pratica → riflessione e compiti','Teoria → pratica → test → riflessione → compiti → obiettivi → briefing','Obiettivi → teoria → controllo dei compiti → pratica → briefing → riflessione → test','Briefing → teoria → test → pratica → compiti → obiettivi → riflessione'], c:0, fb:'Quasi ogni lezione del corso segue questo scheletro, e la tabella delle fasi del piano dà a ciascuna parte una durata e un’ora di inizio.'},
      {q:'Un piano di lezione si apre con «questa sessione è progettata attorno al sistema Scrum». Cosa ti dice?', opts:['La lezione è divisa in sprint a tempo, ciascuno aperto da una discussione e chiuso dalle due domande fisse di bilancio','Che devi nominare Scrum durante la fase di teoria','Che gli studenti saranno valutati in squadra e non singolarmente','Che la lezione non ha una fase pratica'], c:0, fb:'È un’istruzione sulla struttura, non sull’argomento. Conducila come una lezione qualsiasi e il ritmo degli sprint su cui il piano si regge sparisce.'},
      {q:'In una lezione Usa–Modifica–Crea, a cosa devi resistere?', opts:['A spiegare il codice prima che gli studenti lo abbiano eseguito e ci abbiano sperimentato da soli','A lasciare che modifichino il codice di esempio','A dare loro del codice funzionante','A permettere che lavorino in coppia'], c:0, fb:'Usare e modificare vengono prima, in quell’ordine. Spiegare presto elimina la sperimentazione da cui nascono le buone domande.'},
      {q:'Sei in ritardo in una lezione EduScrum con compiti non finiti. Cosa fai?', opts:['Passi comunque alla retrospettiva e discutete cosa è andato storto — proteggi la forma, sacrifica la portata','Prolunghi lo sprint finché i compiti non sono finiti','Salti la retrospettiva e assegni il resto come compito a casa','Dai il codice della soluzione per far recuperare tutti'], c:0, fb:'Una lezione completa con compiti non finiti vale più di una lezione incompleta. I piani lo dicono in modo diretto.'},
      {q:'Quale fase rischia di più di sforare e perché è pericoloso?', opts:['La teoria — dà sicurezza mentre la insegni, quindi si dilata e mangia il tempo della pratica','La riflessione — piace agli studenti e continuano a parlare','Il briefing — l’appello richiede più tempo del previsto','La pratica — gli studenti hanno sempre bisogno di più tempo'], c:0, fb:'I piani avvertono di continuo di non lasciare che la teoria si trascini. Pratica e riflessione sono le due cose che devono mantenere il loro tempo.'},
      {q:'Quali sono le due regole d’oro che compaiono in quasi ogni piano di lezione?', opts:['Non scrivere mai il codice di uno studente e spiegare la teoria prima di scrivere il codice','Finire sempre tutti i compiti e non lasciare indietro nessuno','Tenere la telecamera accesa e iniziare sempre con un quiz','Seguire il piano alla lettera e non improvvisare mai'], c:0, fb:'«Non scrivere il codice al posto degli studenti» e «spiega prima la teoria, poi scrivete il codice insieme» sono le due istruzioni più ripetute del programma.'},
      {q:'Perché questo modulo viene prima dei dieci moduli sui contenuti?', opts:['Perché i metodi didattici iniziano a essere usati alla seconda lezione del corso, quindi ti serve il vocabolario prima di incontrarli','Perché è il modulo più facile e dà sicurezza','Perché la piattaforma richiede di completare prima la metodologia','Perché i moduli sui contenuti non si capiscono senza'], c:0, fb:'I metodi compaiono dalla lezione M1L2 in poi. Incontrare «progettata attorno al sistema Scrum» senza sapere cosa significhi è esattamente il problema che questo modulo elimina.'}
    ]
  },
  {
    id:4, emoji:'🧰', color:'#E8663B',
    title:'Il tuo laboratorio di configurazione e gli strumenti',
    desc:'Prepara sulla tua macchina tutto ciò che serve al corso — interprete, VS Code, pipenv, Git, il Discord Developer Portal, Colab, Teachable Machine — più un giro sulla piattaforma e sulle presentazioni.',
    obj:'Fare, sulla tua macchina, tutto ciò che poi chiederai agli studenti. Non puoi risolvere i problemi di un’installazione che non hai mai fatto, e non puoi condurre la fase del Developer Portal senza esserci mai passato. Questo modulo è interamente pratico: qui non c’è nulla da imparare leggendo.',
    prep:'~3–4 ore, distribuite su più sessioni. Fallo sulla macchina da cui insegnerai.',
    practical:{
      intro:'Questo modulo È la lista di controllo. Non segnarlo come completato finché ogni voce non è davvero vera: tutto il resto lo dà per scontato.',
      items:[
        'Installato l’interprete Python e verificato che <code>python --version</code> funzioni in un terminale nuovo',
        'Installato VS Code e l’estensione Python, e usato <em>Python: Select Interpreter</em> almeno una volta',
        'Creato una cartella di progetto e un file <code>.py</code>, ed eseguito il file dal terminale di VS Code',
        'Installato una libreria con <code>pip install</code>, poi creato un ambiente <strong>pipenv</strong> e installato una libreria lì dentro',
        'Provocato di proposito un <code>ModuleNotFoundError</code> installando fuori dall’ambiente — e risolto',
        'Installato Git, eseguito <code>git config --global user.name</code> e <code>user.email</code> e pubblicato un repository <strong>da dentro VS Code</strong>',
        'Creato e unito un branch, e visto l’output del merge fast-forward',
        'Registrato un’applicazione e un bot Discord, attivato il <strong>Message Content Intent</strong>, invitato il bot sul proprio server e ottenuto una risposta',
        'Creato un notebook Colab, eseguito una cella di codice e una markdown, caricato un file e visto il riavvio della sessione cancellarlo',
        'Addestrato un classificatore in Teachable Machine, esportato il modello e scompattato in Colab',
        'Aperto la piattaforma come tutor E guardato una lezione come la vede uno studente',
        'Aperto almeno tre presentazioni delle lezioni in modalità presentazione'
      ]
    },
    sections:[
      {t:'🧭 Perché questo modulo è tutto pratica', cards:[
        {type:'brief',
          overview:'Un laboratorio pratico su tutta la catena di strumenti: <strong>interprete e VS Code</strong>, <strong>pip e pipenv</strong>, <strong>Git e GitHub</strong>, il <strong>Discord Developer Portal</strong>, <strong>Google Colab</strong>, <strong>Teachable Machine</strong> e la <strong>piattaforma con le presentazioni</strong>.',
          why:'La lezione M1L2 del corso ti fa installare un interprete e un IDE a un’intera classe di ragazzi dai 13 ai 17 anni su sistemi operativi diversi, in quindici minuti. Ogni modulo successivo aggiunge uno strumento. La didattica è trattata altrove; ciò che nessuna quantità di lettura ti dà è averlo fatto tu una volta, con calma, prima che conti.',
          learn:'Anche gli studenti fanno tutto questo: questo laboratorio è di proposito il percorso dello studente, affrontato prima e al tuo ritmo.',
          confident:'Ogni voce della lista qui sopra, fatta sulla tua macchina, avendo visto almeno una volta come fallisce.'
        },
        {type:'good', txt:'La cosa migliore che puoi fare mentre affronti questo laboratorio è <strong>annotare tutto ciò che ti è andato storto</strong>. I tuoi inciampi sono la previsione più accurata possibile di ciò che incontreranno gli studenti, e gli appunti diventano il tuo complemento personale alle domande frequenti.'}
      ]},
      {t:'💻 Interprete, VS Code e la trappola dell’interprete', cards:[
        {type:'text', h:'Fallo in questo ordine', b:'Installa l’<strong>interprete Python</strong> (su Windows spunta <em>Add Python to PATH</em>: saltarlo è in assoluto la causa più comune di «pip is not recognised»). Installa <strong>VS Code</strong>. Installa l’<strong>estensione Python</strong> dal pannello delle estensioni. Poi usa <code>Ctrl+Shift+P</code> / <code>Cmd+Shift+P</code> → <em>Python: Select Interpreter</em>. Crea una cartella, crea un file <code>.py</code>, scrivi <code>print("Hello, world!")</code> ed eseguilo.'},
        {type:'warn', txt:'Rompilo di proposito una volta, adesso, in privato. Installa una libreria con l’interprete sbagliato selezionato e guarda comparire <code>ModuleNotFoundError</code> anche se pip ha chiaramente funzionato. Quell’errore uscirà in una lezione vera, e averlo provocato apposta è la differenza fra diagnosticarlo in dieci secondi e perderci venti minuti.'},
        {type:'text', h:'Windows e Mac sono diversi, e metà della classe userà l’uno e metà l’altro', b:'Tieni a mente entrambe le versioni: la scorciatoia per la palette (<code>Ctrl+Shift+P</code> contro <code>Cmd+Shift+P</code>), <code>python</code> contro <code>python3</code> e come si apre il terminale. Dove un comando cambia, dilli entrambi ad alta voce invece di dare per scontato: «Ctrl+Shift+P, o Cmd+Shift+P su Mac» costa due secondi e salva uno studente confuso.'},
        {type:'image', src:'assets/media/images/setup-interpreter.jpg', alt:'VS Code con la palette Select Interpreter aperta, che elenca molti ambienti virtuali, con evidenziato quello corrispondente al progetto aperto.', cap:'Selezionare l’interprete: la soluzione alla maggior parte dei problemi del tipo «l’ho installato ma non lo importa». Guarda quanti ambienti compaiono: quello da scegliere è quello il cui nome corrisponde al progetto aperto (qui TUR_Calculator-main, che corrisponde alla cartella TUR_CALCULATOR-MAIN nell’explorer). Sceglierne un altro è esattamente il modo in cui nasce ModuleNotFoundError.'},
        {type:'tip', txt:'Già che ci sei, scrivi la <strong>guida di configurazione per gli studenti</strong> che incollerai nella chat di gruppo prima della prima lezione: link per il download, la casella del PATH e com’è fatto un «fatto». Il programma assegna gli installer come compito proprio per non perdere tempo di lezione, e una guida chiara è ciò che rende quel compito effettivamente svolto.'}
      ]},
      {t:'📦 pip, pipenv e gli ambienti virtuali', cards:[
        {type:'text', h:'Cosa fare concretamente', b:'Installa una libreria a livello globale con <code>pip install requests</code>. Poi crea un progetto con un ambiente <strong>pipenv</strong> e installa lì dentro con <code>pipenv install requests</code>. Nota la differenza: dove finiscono i file e cosa succede se poi selezioni l’interprete sbagliato. La lezione M3L1 del corso lo fa fare agli studenti con Flask, e M7L1 lo ripete con le grandi librerie di IA.'},
        {type:'warn', txt:'La trappola che coglie studenti e tutor allo stesso modo: dentro un progetto pipenv devi usare <code>pipenv install &lt;libreria&gt;</code>. Un <code>pip install</code> normale la mette dove il progetto non la vede, e il <code>ModuleNotFoundError</code> che ne esce sembra identico a un’installazione rotta. Se l’hai fatto tu una volta, lo riconosci all’istante.'},
        {type:'text', h:'Esercitati ora sul fissaggio delle versioni per l’IA, non durante la lezione', b:'Il modulo M7 del corso è il più fragile di tutti. Anticipalo: crea un ambiente, installa TensorFlow e tieni pronti i comandi di riparazione — <code>pipenv uninstall tensorflow</code> e poi <code>pipenv install tensorflow==2.15</code>. Sappi che l’equivalente in Colab è <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> con <code>import tf_keras</code>. Sono comandi da incollare, non cose da ragionare in diretta.'},
        {type:'tip', txt:'Un’installazione grossa può richiedere molto tempo su un portatile scolastico. Tieni pronta un’alternativa — il Pipfile del repository con la soluzione — e sappi che usarla è la scelta giusta, non un compromesso. La lezione parla di IA, non di aspettare un download.'}
      ]},
      {t:'🐙 Git, GitHub e i branch', cards:[
        {type:'text', h:'La sequenza completa da fare tu', b:'Crea l’account GitHub. Crea un repository pubblico vuoto e carica un file <strong>tramite il sito</strong>: il modo goffo che gli studenti incontrano per primo in M1L2. Poi installa l’<strong>applicazione git</strong>, scegliendo VS Code come editor durante l’installazione. Esegui <code>git config --global user.name</code> e <code>user.email</code>. Accedi a GitHub da dentro VS Code e pubblica un repository <strong>dall’editor</strong>, come insegna M2L3. Infine fai il commit di una modifica e guarda la cronologia del file.'},
        {type:'text', h:'Poi i branch, perché M8L2 richiede uno screenshot da ogni studente', b:'Crea un branch, fai una modifica su di esso, torna indietro e uniscilo. Guarda l’output fast-forward. Chiederai esattamente questo a ogni studente, quindi averlo fatto più di una volta conta: il merge è una di quelle cose che sembrano semplici finché non le fai davanti alle persone.'},
        {type:'good', txt:'Già che ci sei, esercitati a dire la frase che ripeterai per tutto il corso: tutto ciò che finisce in Git <strong>ci resta</strong>. Cancella un file, fai il commit, poi ritrovalo nella cronologia. Vederlo con i tuoi occhi è ciò che ti rende convincente quando spieghi perché un token trapelato va rigenerato e non cancellato.'}
      ]},
      {t:'🤖 Il Discord Developer Portal', cards:[
        {type:'text', h:'Percorrilo tutto una volta', b:'Crea il tuo server Discord. Vai sul Developer Portal, crea un’<strong>applicazione</strong>, aggiungi un <strong>bot</strong> e — il passaggio che rompe tutto in silenzio — attiva il <strong>Message Content Intent</strong> nella pagina Bot. Copia il token. Invita il bot sul tuo server con i permessi giusti. Poi esegui l’esempio con la classe Client del corso con il tuo token incollato in locale e fallo rispondere. Infine riscrivilo usando la classe <code>Bot</code>.'},
        {type:'warn', txt:'Due cose da avere impresse prima della lezione. Primo: l’intent va attivato <strong>sia</strong> nel codice (<code>intents.message_content = True</code>) <strong>sia</strong> nel portale — uno solo dei due ti lascia con un bot che si collega e ignora tutto. Secondo: il layout del portale cambia. Ripercorrilo poco prima di insegnare M1L3 invece di fidarti del ricordo di mesi prima.'},
        {type:'image', src:'assets/media/images/setup-discord-intents.jpg', alt:'La pagina Bot del Discord Developer Portal con la sezione Privileged Gateway Intents e gli intent Presence, Server Members e Message Content, tutti disattivati.', cap:'La pagina Bot (menu a sinistra → <strong>Bot</strong>). Scorri fino a <strong>Privileged Gateway Intents</strong> e attiva <strong>Message Content Intent</strong>: il terzo interruttore. Tutti e tre sono DISATTIVATI per impostazione predefinita, esattamente come si vede qui, ed è per questo che un bot appena creato si collega e poi ignora ogni messaggio. Portale catturato con l’interfaccia in turco; i nomi degli intent restano in inglese in ogni lingua.'},
        {type:'warn', txt:'Leggi bene lo screenshot: tutti e tre gli intent sono <strong>spenti</strong>. È lo stato predefinito, e <strong>Message Content Intent</strong> è quello che devi accendere: l’interruttore in basso, in parte tagliato nell’immagine. Attivarlo nel portale è solo metà del lavoro: <code>intents.message_content = True</code> deve stare anche nel codice. Se manca uno dei due, il bot risulta online e non sente nulla.'},
        {type:'good', txt:'Esercitati subito sulla disciplina del token, su te stesso. Metti il token nel codice in locale e, prima di mostrare qualcosa a chiunque, sostituiscilo con <code>YOUR_BOT_TOKEN</code>. Prendi l’abitudine mentre in gioco c’è solo il tuo, e controlla il tuo schermo prima di condividerlo.'}
      ]},
      {t:'🔬 Colab e Teachable Machine', cards:[
        {type:'text', h:'Colab', b:'Crea un notebook sul tuo Drive. Esegui due o tre <strong>celle di codice</strong> e una <strong>markdown</strong>. Carica un’immagine nella sessione. Poi riavvia di proposito la sessione e guarda il file sparire, perché dovrai spiegarlo a una classe disorientata. Impara che <code>!</code> esegue un comando del sistema operativo e che <strong>tutte le celle vanno eseguite, in ordine</strong>. Infine esercitati a montare Google Drive, che è la soluzione per i progetti più lunghi.'},
        {type:'text', h:'Teachable Machine, dall’inizio alla fine', b:'Addestra un piccolo classificatore di immagini con due classi. Provalo con un’immagine che non ha mai visto. Salva il progetto. Poi <strong>esporta il modello</strong>, guarda cosa esce davvero dallo zip (il modello <code>.h5</code> e <code>labels.txt</code>), caricalo in Colab, scompattalo con <code>!unzip</code> e caricalo con <code>tf_keras</code>. Tutta questa catena sono i moduli M5L4 → M6L1 → M7L2 del corso, ed è la parte in cui compaiono gli errori di versione.'},
        {type:'image', src:'assets/media/images/setup-gtm.jpg', alt:'Google Teachable Machine con due classi di immagini di uccelli, un modello addestrato e il pulsante Export Model evidenziato.', cap:'Teachable Machine, preparato per il progetto sugli uccelli del corso: due classi chiamate <em>Güvercin</em> (piccione) e <em>Serçe</em> (passero), con 6 e 7 immagini di esempio. Rinomina ogni classe con l’icona della matita; aggiungi immagini con <strong>Upload</strong>. Quando compare <strong>Model Trained</strong>, <strong>Export Model</strong> (in alto a destra) produce il file che carichi nella lezione M6L1 del corso. In <strong>Advanced</strong>, dentro Training, ci sono le epoche e il tasso di apprendimento.'},
        {type:'tip', txt:'Guarda il numero di campioni nello screenshot: 6 e 7 immagini per classe. È di proposito un dataset <em>piccolo</em>, ed è più o meno quello che produrranno gli studenti a lezione. Addestrane uno di queste dimensioni e provalo su un uccello mai visto: vedere un dataset scarno rendere male è il modo più rapido di capire perché «aggiungi più dati e più vari» è la risposta a quasi ogni lamentela sull’accuratezza.'},
        {type:'tip', txt:'Addestra anche un modello volutamente pessimo — due classi con quattro immagini sfocate ciascuna — e guardalo sbagliare con grande sicurezza. Ti dà una dimostrazione dal vivo dell’idea più importante del blocco sull’IA: il modello conosce solo ciò che gli è stato mostrato, e sistemarlo significa sistemare il dataset, non il codice.'}
      ]},
      {t:'🖥️ La piattaforma e le presentazioni', cards:[
        {type:'text', h:'Guardala da entrambi i lati', b:'Quasi ogni fase di ogni lezione dice «vai al compito chiamato…», quindi la piattaforma è dove il corso vive davvero. Ottieni l’accesso e guarda: com’è fatta una <strong>pagina di compito</strong> per uno studente, dove sono mostrati la <strong>teoria e gli esempi di codice</strong> a cui rimandano i piani, la <strong>chat</strong> collegata a ogni compito, cosa fa il pulsante <strong>Invia</strong> e come si <strong>inseriscono le valutazioni</strong>. Poi apri il <strong>Backoffice</strong> e trova dove si verificano le consegne e dove sta il link alla chat di gruppo.'},
        {type:'warn', txt:'I piani citano di continuo «Slide 4», «Slide 6 (questa slide è animata)». Se non hai aperto le presentazioni non saprai se una slide copre già un concetto o se devi spiegarlo tu, e finirai per duplicare o saltare. Apri le presentazioni della lezione successiva ogni volta che prepari, e ricordati di presentare in <strong>modalità presentazione</strong>, come indicano i piani.'},
        {type:'image', src:'assets/media/images/setup-platform.jpg', alt:'La pagina del corso Python Pro sulla piattaforma Kodland, con la barra del titolo, le schede dei compiti in classe e a casa e le schede dei moduli.', cap:'La pagina del corso sulla piattaforma. Menu a sinistra: <em>Kurslarım</em> = I miei corsi. Le schede sono <em>Ders İçi Görevler</em> = compiti in classe, <em>Ödevler</em> = compiti a casa (con il numero di elementi in attesa), <em>Lider Tablosu</em> = classifica. Sotto ci sono le schede dei moduli — <em>Modül 1, 2, 3…</em> — e ognuna apre l’elenco delle lezioni a cui puntano tutte le istruzioni «vai al compito chiamato…».'},
        {type:'good', txt:'Leggi la barra del titolo del corso in quello screenshot, perché è il riassunto più chiaro di ciò che insegnerai: <strong>[1619] Python Pro [13-17] [90 min] [40 L] [Turkey]</strong> — codice corso 1619, età <strong>13–17</strong>, lezioni da novanta minuti, quaranta in tutto. Il numero su <em>Ödevler</em> sono i compiti in attesa di correzione: è quello che cresce in silenzio se rimandi le correzioni.'},
        {type:'text', h:'I materiali che ogni lezione ti dà', b:'Ogni piano ha una sezione <strong>Materiali</strong> che elenca ciò che esiste per quella lezione: la presentazione, i quiz, i video, i link alla documentazione, i repository di partenza, gli ZIP e gli strumenti di valutazione. Leggila prima di costruire qualcosa da zero. Diverse cose che potresti dare per scontato di dover creare sono già fornite, incluso il <code>diary(complete).zip</code> per il modulo sui database e il repository con la soluzione per le lezioni sul bot con IA.'},
        {type:'good', txt:'Quando avrai l’accesso, fai una prova generale: scegli una lezione, apri affiancati il suo piano, la sua presentazione e i suoi compiti sulla piattaforma e percorrila come se la stessi insegnando. Quella singola prova ti dirà sulla tua preparazione più di qualsiasi test di questa formazione.'}
      ]}
    ],
    quiz:[
      {q:'Su Windows, cosa provoca «pip is not recognised» e qual è la soluzione più rapida?', opts:['Python è stato installato senza spuntare «Add Python to PATH» — reinstallare con la casella spuntata è più rapido che diagnosticarlo in diretta','Manca l’estensione Python in VS Code — installala','pip va installato a parte con un secondo installer','Il terminale è stato aperto prima che Python finisse di installarsi'], c:0, fb:'È un problema di PATH dell’installer. In una lezione dal vivo, reinstallare con la casella spuntata batte il cercare la causa mentre otto studenti aspettano.'},
      {q:'Sei dentro un progetto pipenv. Uno studente esegue pip install flask e poi ottiene ModuleNotFoundError. Perché?', opts:['Dentro un ambiente pipenv bisogna usare pipenv install — il pip normale l’ha messa dove il progetto non la vede','Flask non si può installare con pip','Bisognava riavviare VS Code perché l’installazione venisse registrata','Al progetto mancava un requirements.txt'], c:0, fb:'È la trappola che coglie anche i tutor, e l’errore sembra identico a un’installazione rotta. Averla provocata una volta la rende una diagnosi da dieci secondi.'},
      {q:'Un bot si collega e risulta online ma ignora ogni messaggio. Quali due cose devono essere entrambe vere?', opts:['intents.message_content = True nel codice E il Message Content Intent attivo nella pagina Bot del Developer Portal','Il bot deve avere permessi di amministratore E essere il proprietario del server','Il token va rigenerato E il bot va reinvitato','Va usata la classe Bot E il prefisso impostato su $'], c:0, fb:'Leggere il testo dei messaggi è un privilegio da concedere in entrambi i punti. Uno solo dei due lascia un bot che si collega e non sente nulla.'},
      {q:'Perché questo modulo ti dice di riavviare di proposito una sessione Colab prima di insegnarci?', opts:['Per aver visto sparire i file caricati e poterlo spiegare con calma quando succede a un’intera classe','Per liberare memoria prima di addestrare un modello','Perché Colab richiede un riavvio dopo il primo caricamento','Per verificare che il tuo Google Drive abbia spazio'], c:0, fb:'Le sessioni di Colab sono temporanee e questo disorienta ogni classe. Averlo visto accadere significa spiegare invece di improvvisare.'},
      {q:'Cosa dovresti fare con gli appunti su ciò che è andato storto durante questo laboratorio?', opts:['Tenerli — i tuoi inciampi sono la miglior previsione disponibile di ciò che incontreranno gli studenti, ed estendono le domande frequenti','Buttarli una volta che tutto funziona','Mandarli al team della piattaforma come segnalazioni di bug','Usarli per decidere quali lezioni saltare'], c:0, fb:'Stai facendo per primo il percorso dello studente. Dove sei inciampato tu inciamperanno loro, e i tuoi appunti diventano un complemento personale alle domande frequenti.'},
      {q:'Perché devi aprire le presentazioni mentre prepari ogni lezione?', opts:['Perché i piani citano slide precise e, senza vederle, o duplichi ciò che una slide copre o salti qualcosa che non copre','Perché le slide contengono le risposte del test','Perché gli studenti non vedono le slide se non le apri prima tu','Perché le presentazioni elencano le scadenze dei compiti'], c:0, fb:'I piani dicono cose come «Slide 6 (questa slide è animata)». Non sapere cosa c’è sopra significa tirare a indovinare su cosa resta da spiegare.'},
      {q:'Dove dovresti guardare prima di costruire materiale didattico tuo per una lezione?', opts:['Nella sezione Materiali di quel piano di lezione — presentazioni, quiz, video, repository di partenza, ZIP e strumenti di valutazione spesso ci sono già','Nelle domande frequenti di questa formazione','Nella vista delle valutazioni della piattaforma','Nei compiti della lezione precedente'], c:0, fb:'Diverse cose che potresti dare per scontato di dover creare esistono già, incluso lo ZIP completo del diario e il repository con la soluzione del bot con IA.'},
      {q:'Qual è la prova generale migliore per la tua prima lezione, una volta ottenuto l’accesso alla piattaforma?', opts:['Scegliere una lezione e percorrere affiancati il suo piano, la sua presentazione e i suoi compiti sulla piattaforma come se la stessi insegnando','Rileggere il modulo di metodologia di questa formazione','Memorizzare i tempi delle fasi di tutte e quaranta le lezioni','Costruire prima tutti i progetti del corso'], c:0, fb:'Una prova con i materiali veri aperti insieme ti dice sulla tua preparazione più di qualunque test qui dentro.'}
    ]
  },
  {
    id:5, emoji:'🛠️', color:'#F5B93B',
    title:'M1 — VS Code, Git e bot Discord',
    desc:'Modulo 1 del corso: ripasso di Python, GitHub, l’interprete e VS Code, pip e Discord.py, funzioni e le classi Client e Bot.',
    obj:'Insegnare le quattro lezioni che trasformano chi arriva da Python Basic in qualcuno che lavora come uno sviluppatore: ripassare la sintassi, registrarsi e usare GitHub, installare un IDE e un interprete veri, installare librerie con pip, costruire un bot Discord, estrarre la logica in funzioni e leggere la documentazione della libreria per ampliarlo.',
    prep:'~4–5 ore. La maggior parte serve a costruire il bot: non saltarla.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 1 del corso, devi aver fatto di persona:',
      items:[
        'Scritto l’app dizionario dello slang con un vero dizionario e ricerca tramite <code>.keys()</code>',
        'Scritto il generatore di password con <code>random.choice</code> dentro un ciclo',
        'Estratto quel generatore in <code>bot_logic.py</code> come funzione e importato in <code>main.py</code>',
        'Registrato un bot, attivato il Message Content Intent e fatto rispondere un bot della classe <strong>Client</strong> sul proprio server',
        'Riscritto lo stesso bot usando la classe <strong>Bot</strong>, con <code>@bot.command()</code> e un prefisso',
        'Caricato un progetto su GitHub, modificato, ricaricato e guardato la cronologia del file',
        'Eseguito di proposito un bot con il token rimosso, per sapere che aspetto ha quel guasto'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> ripasso + GitHub + l’app del dizionario dello slang; <strong>L2</strong> l’interprete e VS Code + un generatore di password; <strong>L3</strong> pip, il Discord Developer Portal, il primo bot e le funzioni; <strong>L4</strong> documentazione della libreria, la classe <code>Bot</code>, la cronologia del repository e i test fra pari.',
          why:'Questo modulo porta gli studenti fuori dalla piattaforma dentro un flusso di lavoro professionale. Se GitHub, l’interprete o il token non funzionano mai bene, tutto ciò che viene dopo nel corso si inceppa.',
          learn:'Gli studenti ripassano <code>input</code>/<code>print</code>, liste, cicli, dizionari e <code>random</code>; creano account e repository su GitHub; installano e configurano VS Code; installano <code>discord.py</code> con pip; registrano un bot e usano un token in sicurezza; e impacchettano la propria logica in una funzione importata.',
          confident:'La differenza fra interprete e IDE; selezionare l’interprete giusto in VS Code; <code>pip install</code>; le tre cose che servono a un bot Discord (server, bot registrato, token); <code>intents.message_content</code>; e la differenza fra <code>Client</code> e <code>Bot</code>.'
        }
      ]},
      {t:'📚 L1 — Ripasso, GitHub e il dizionario dello slang', cards:[
        {type:'text', h:'Cosa succede nella lezione', b:'Presentazioni (un gioco nome + aggettivo con la stessa lettera), regole del gruppo create <em>dagli studenti stessi</em>, un quiz di ripasso sincronizzato e poi il compito principale: un programma che stampa un fatto casuale su di te da una lista. Poi GitHub — teoria, iscrizione e creazione del primo repository pubblico vuoto. Quindi il progetto vero: un’app dizionario che spiega lo slang ai parenti più grandi. Alla fine caricano il codice ed esplorano i repository degli altri.'},
        {type:'text', h:'Il Python che stai ripassando', b:'Volutamente ristretto: <code>input</code>/<code>print</code>, <strong>liste</strong>, <strong>cicli</strong>, la libreria <strong>random</strong> e — per il progetto principale — i <strong>dizionari</strong>. Ricorda che una voce ha una <strong>chiave e un valore</strong> e che <code>.keys()</code> restituisce tutte le chiavi. Chiedi in che direzione va la ricerca: cerchiamo la chiave dal valore o il valore dalla chiave?'},
        {type:'code', lbl:'il dizionario dello slang — il formato a cui arrivano gli studenti', code:`meme_dict = {
    <span class="cs">"CRINGE"</span>: <span class="cs">"Qualcosa di estremamente strano o imbarazzante"</span>,
    <span class="cs">"LOL"</span>: <span class="cs">"Risposta comune a qualcosa di divertente"</span>,
    <span class="cs">"ROFL"</span>: <span class="cs">"Reazione a qualcosa di molto divertente, simile a LOL"</span>
}

word = <span class="cf">input</span>(<span class="cs">"Scrivi una parola dello slang che non capisci (TUTTO MAIUSCOLO!): "</span>)

<span class="ck">if</span> word <span class="ck">in</span> meme_dict.<span class="cf">keys</span>():
    <span class="cf">print</span>(meme_dict[word])
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Questa parola non ce l'abbiamo ancora... ma ci stiamo lavorando!"</span>)`},
        {type:'hi', h:'Perché esplorare i repository conta', b:'Dopo aver caricato il codice, gli studenti pubblicano i link dei repository nella chat di gruppo e vanno a caccia della parola più divertente aggiunta da un compagno. È tutto qui l’obiettivo della fase: mostra loro concretamente che <strong>Git rende il codice altrui immediatamente accessibile</strong>. Fallo anche tu: apri qualche repository e commenta ad alta voce cosa ha fatto bene ciascuno.'},
        {type:'tip', txt:'Prepara la lezione successiva alla fine di questa. I compiti chiedono di esplorare un progetto su GitHub e portare 2 o 3 domande al riguardo; chiedi anche di <strong>scaricare a casa gli installer di Python e VS Code</strong> e di avere un indirizzo email pronto. I download durante la seconda lezione si mangeranno il tuo tempo di pratica.'}
      ]},
      {t:'💻 L2 — L’interprete, VS Code e il generatore di password', cards:[
        {type:'text', h:'Il problema che dà la cornice', b:'Gli attacchi informatici. Discutete di come vengono rubati i dati personali e di cosa protegge: non cliccare link sospetti, non inserire dati personali su siti sconosciuti e <strong>usare password sicure</strong>. Quest’ultimo punto diventa il progetto: un programma open source che genera password sicure.'},
        {type:'qa', h:'I due concetti che devono assestarsi', items:[
          {k:'Interprete', v:'Il computer capisce solo codice macchina: zeri e uno. Scriverlo a mano è impraticabile, quindi scriviamo in Python e l’interprete lo traduce nel codice macchina che il processore esegue.'},
          {k:'IDE', v:'Integrated Development Environment: un programma che aiuta a scrivere codice — completamento automatico, suggerimenti di sintassi, controllo degli errori, test, condivisione. Questo corso usa VS Code; PyCharm è un’altra buona opzione. Gli IDE non sono esclusivi di Python.'}
        ]},
        {type:'text', h:'La sequenza di configurazione', b:'Installa l’interprete, installa VS Code, installa l’<strong>estensione Python</strong> e poi seleziona l’interprete con <code>Ctrl+Shift+P</code>. Sottolinea due cose: la configurazione si fa <strong>una volta sola</strong>, subito dopo l’installazione; e <strong>l’estensione del file conta</strong>: un file Python deve finire in <code>.py</code> per essere eseguito. Poi crea una cartella di progetto (sempre una cartella per progetto), un file <code>.py</code> ed esegui <code>print("Hello, world!")</code>.'},
        {type:'code', lbl:'il generatore di password', code:`<span class="ck">import</span> random

elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"</span>

pass_length = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Inserisci la lunghezza della password: "</span>))
password = <span class="cs">""</span>

<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
    password += random.<span class="cf">choice</span>(elements)

<span class="cf">print</span>(password)`},
        {type:'hi', h:'Questa lezione ha la forma di uno sprint Scrum', b:'Ogni fase è uno <strong>sprint</strong>: una discussione breve all’inizio, un limite di tempo rigido e poi una chiusura con due domande fisse — «<em>abbiamo davvero raggiunto il risultato?</em>» e «<em>come ci avvicina alla soluzione del problema principale?</em>». Di’ i limiti di tempo ad alta voce. È il loro primo contatto con un ritmo che torna per tutto il corso e viene insegnato formalmente nel Modulo 8.'},
        {type:'tip', txt:'La fase di caricamento è goffa di proposito: chiedi loro di capire da soli come portare il codice nel repository vuoto, discutendone ad alta voce, prima di mostrare il pulsante di upload di GitHub. Poi di’ che è solo una delle opzioni, e nemmeno la più comoda. Questo prepara l’integrazione di Git in VS Code di M2L3.'}
      ]},
      {t:'🤖 L3 — pip, il bot Discord e le funzioni', cards:[
        {type:'text', h:'Usa–Modifica–Crea', b:'Questa lezione funziona con il <strong>metodo UMC</strong>, e devi fare i primi due passaggi in ordine: gli studenti <strong>usano</strong> un bot completo (lo eseguono, lo vedono funzionare) e poi lo <strong>modificano</strong> mentre tu spieghi cosa fa ogni cambiamento. Dai cinque minuti per sperimentare liberamente con il codice di esempio e rispondi alle domande senza regalare nulla.'},
        {type:'qa', h:'pip e le tre cose che servono a un bot', items:[
          {k:'pip', v:'«Pip Installs Packages»: il gestore di pacchetti di Python. <code>pip install discord</code> nel terminale e la libreria è lì. Uno dei maggiori vantaggi di Python è che esiste una libreria per quasi tutto.'},
          {k:'1. Un server', v:'Il bot ha bisogno di uno spazio in cui vivere. Ogni studente crea il proprio server Discord.'},
          {k:'2. Un bot registrato', v:'Registrato sul Discord Developer Portal, così Discord sa che è un bot e i permessi si possono configurare.'},
          {k:'3. Un token', v:'La chiave che permette al programma di eseguire quel bot specifico. Chi ha il token controlla completamente il bot.'}
        ]},
        {type:'warn', txt:'Di’ questo nel momento in cui compaiono i token, e ogni volta che si pubblica un progetto: <strong>se qualcuno ottiene il tuo token, il bot è suo.</strong> Non farne mai il commit, non incollarlo mai in chat, non lasciarlo mai visibile su uno schermo condiviso. Nel codice condiviso scriviamo il segnaposto <code>bot.run("YOUR_BOT_TOKEN")</code>. Se un token trapela, rigeneralo sul Developer Portal: cancellare il file non basta, perché Git conserva la cronologia.'},
        {type:'code', lbl:'la logica del bot in un file a parte — bot_logic.py', code:`<span class="ck">import</span> random

<span class="ck">def</span> <span class="cf">gen_pass</span>(pass_length):
    elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;"</span>
    password = <span class="cs">""</span>
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
        password += random.<span class="cf">choice</span>(elements)
    <span class="ck">return</span> password`},
        {type:'code', lbl:'il bot che la importa — main.py (classe Client)', code:`<span class="ck">import</span> discord
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

<span class="cc"># intents contiene i privilegi del bot</span>
intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>   <span class="cc"># consente di leggere il testo dei messaggi</span>

client = discord.<span class="ct2">Client</span>(intents=intents)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'Collegati come {client.user}'</span>)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_message</span>(message):
    <span class="ck">if</span> message.author == client.user:   <span class="cc"># impedisce al bot di rispondere a se stesso</span>
        <span class="ck">return</span>
    <span class="ck">if</span> message.content.<span class="cf">startswith</span>(<span class="cs">'$hello'</span>):
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Ciao!"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"La tua password "</span> + <span class="cf">gen_pass</span>(<span class="cn">10</span>))

client.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'Le funzioni, insegnate a partire dal codice che hanno davanti', b:'Una funzione è codice che scrivi una volta e riusi. Indica i due <code>def</code> già presenti nel bot e chiedi: come si chiamano? Cosa ha una funzione oltre al nome e al corpo? Quali altre funzioni conoscono già (<code>print</code>, <code>input</code>, <code>len</code>)? Poi rendilo concreto: i dati <strong>entrano</strong> dagli argomenti fra parentesi e i dati elaborati <strong>escono</strong> dal <code>return</code>. Il compito è trasformare il loro programma precedente in una funzione, metterla in un file a parte e importarla.'},
        {type:'tip', txt:'Buona domanda diagnostica per la fase di sperimentazione: «cosa succede se togli <code>if message.author == client.user: return</code>?». Il bot inizia a rispondere a se stesso all’infinito. Lascia che scoprano il ciclo infinito invece di avvisarli.'}
      ]},
      {t:'📖 L4 — Documentazione, la classe Bot e i test fra pari', cards:[
        {type:'text', h:'Il vero obiettivo di questa lezione', b:'Non è una funzionalità: è un’<strong>abitudine</strong>. Gli studenti devono uscire convinti che consultare la documentazione è ciò che fanno i veri programmatori. Nessuno conosce una libreria a memoria; la competenza è trovare un esempio e adattarlo. Dillo esplicitamente e tratta gli errori come parte normale del processo, non come qualcosa di imbarazzante.'},
        {type:'twocol', left:{h:'Client', items:['Reagisce agli <strong>eventi</strong> — <code>@client.event</code>','Legge l’<strong>intero messaggio</strong>, quindi passare un valore richiede di dividere il testo da soli','Usalo per agire sull’API come un utente']}, right:{h:'Bot', items:['Reagisce ai <strong>comandi che definisci tu</strong> — <code>@bot.command()</code>','Accetta direttamente gli argomenti digitati dall’utente','Usalo per automatizzare azioni specifiche']}},
        {type:'code', lbl:'lo stesso bot riscritto con la classe Bot', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>

<span class="cc"># command_prefix è il carattere che identifica un comando</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'Collegati come {bot.user}'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f'Ciao! Sono un bot: {bot.user}!'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">pasw</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">gen_pass</span>(<span class="cn">10</span>))

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'<strong>Non usare mai <code>Bot</code> e <code>Client</code> nello stesso programma.</strong> Gli studenti che copiano pezzi da due tutorial diversi faranno esattamente questo e otterranno errori confusi. È una delle «5 differenze» che devono trovare fra le due versioni del codice.'},
        {type:'text', h:'Cronologia di Git e test fra pari', b:'Gli studenti <strong>aggiornano</strong> il repository che già esiste invece di crearne uno nuovo, poi guardano la cronologia del file — e tu dici la verità: <strong>tutto ciò che finisce in Git ci resta.</strong> Mostra anche il pannello attività del profilo. Poi si mettono in coppia nelle stanze separate, eseguono il bot di un compagno e si danno a vicenda tre idee di miglioramento, che finiscono nella chat del compito come lista di lavori. Il compito a casa è realizzarne una.'},
        {type:'tip', txt:'Prima dei test fra pari, chiedi come si farebbe a eseguire il bot di un altro. La risposta è una ricetta in quattro passi: apri il suo repository, copia il codice nel tuo progetto, incolla il <strong>tuo</strong> token ed esegui. L’ultimo passo è quello che dimenticano, ed è un buon momento per ripetere perché il token è solo loro.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente chiede qual è la differenza fra l’interprete Python e un IDE. Qual è la risposta corretta?', opts:['L’interprete traduce Python in codice macchina che il processore esegue; l’IDE è il programma che ti aiuta a scrivere il codice','Sono due nomi per la stessa cosa','L’interprete scrive il codice e l’IDE si limita a eseguirlo','L’interprete è per principianti e l’IDE per professionisti'], c:0, fb:'L’interprete converte il Python leggibile in codice macchina. L’IDE — qui VS Code — è l’editor con completamento, suggerimenti e controllo degli errori.'},
      {q:'Quali sono le tre cose che servono a un bot Discord prima che qualsiasi codice funzioni?', opts:['Un server Discord, un bot registrato sul Developer Portal e un token','Un abbonamento a pagamento a Discord, un server e un’email','Un repository GitHub, un sito e un dominio','Un server Discord, una webcam e un microfono'], c:0, fb:'M1L3 le presenta come tre requisiti: il server dà spazio al bot, la registrazione fa sì che Discord lo riconosca come bot per configurare i permessi, e il token permette al tuo programma di eseguirlo.'},
      {q:'Uno studente vuole caricare il suo bot funzionante in un repository pubblico su GitHub. Cosa deve succedere prima?', opts:['Il token vero deve sparire ed essere sostituito da un segnaposto — e se è già stato caricato una volta, va rigenerato sul Developer Portal','Niente — il repository può essere pubblico perché il codice è suo','Il repository va rinominato con qualcosa che sembri privato','Deve cancellare la riga del token dopo il caricamento'], c:0, fb:'Un token è una password: chi ce l’ha controlla il bot. Cancellarlo dopo non serve, perché Git conserva la cronologia: l’unica soluzione per un token trapelato è rigenerarlo.'},
      {q:'Qual è la differenza fra le classi Client e Bot in discord.py?', opts:['Client reagisce agli eventi; Bot reagisce ai comandi che definisci tu con un prefisso — e non vanno usate entrambe nello stesso programma','Client è per il testo e Bot per le immagini','Bot è la vecchia versione di Client','Client è più veloce perché legge meno messaggi'], c:0, fb:'Client reagisce agli eventi tramite @client.event; Bot reagisce ai comandi definiti con @bot.command() e accetta argomenti digitati. Mescolarle in un programma rompe tutto.'},
      {q:'Il bot di uno studente è online ma ignora tutti i messaggi. Qual è la prima cosa da controllare?', opts:['Se intents.message_content = True è nel codice e se il Message Content Intent è attivo sul Developer Portal','Se la connessione a internet è stabile','Se il server ha abbastanza membri','Se hanno usato la classe Client invece di Bot'], c:0, fb:'Leggere il testo dei messaggi è un privilegio. Deve essere attivo nel codice e nel portale: se ne manca uno, il bot non vede nulla.'},
      {q:'Perché il corso fa trasformare agli studenti il generatore di password in una funzione in un file separato?', opts:['Per mostrare che la logica scritta una volta può essere importata e riusata — i dati entrano dagli argomenti ed escono dal return','Perché Discord richiede che ogni bot abbia due file','Perché il file sia più piccolo e si carichi più in fretta','Perché le funzioni girano più velocemente del codice sciolto'], c:0, fb:'M1L3 usa il programma precedente degli studenti stessi per insegnare le funzioni in modo concreto: entrano argomenti, esce un return, importato in main.py, «come i veri programmatori».'},
      {q:'Qual è l’obiettivo principale di M1L4, la lezione sulla documentazione?', opts:['Creare l’abitudine di trovare e adattare esempi dalla documentazione, perché nessun programmatore conosce una libreria a memoria','Memorizzare l’elenco completo dei comandi di discord.py','Finire il bot così da non doverlo più modificare','Insegnare agli studenti a evitare le librerie e scrivere tutto da zero'], c:0, fb:'La nota della lezione è esplicita: gli studenti devono imparare che possono e devono cercare esempi di codice nella documentazione della libreria. Programmare è esplorazione e apprendimento continui.'},
      {q:'Gli studenti non hanno scaricato a casa gli installer di Python e VS Code. Cosa prescrive il corso?', opts:['Avviare subito il download ma proseguire la lezione con chi è pronto, invece di bloccare tutta la classe','Annullare la fase pratica e usare il tempo per la teoria','Aspettare che tutti finiscano di scaricare prima di iniziare','Farli installare a casa e continuare la settimana successiva'], c:0, fb:'Gli installer sono compito a casa proprio per evitare questo. Se qualcuno non l’ha fatto, avvia i download e vai avanti: l’assistente tecnico può aiutarli a rimettersi in pari.'}
    ]
  },
  {
    id:6, emoji:'🎨', color:'#E8663B',
    title:'M2 — File, HTML, CSS e UI/UX',
    desc:'Modulo 2 del corso: leggere file e cartelle con os, il bot dei meme, le API, il progetto dell’eco-bot, il pubblico di riferimento, HTML, CSS, UI/UX e Git dentro VS Code.',
    obj:'Insegnare agli studenti a lavorare con file e dati esterni, a costruire un progetto per un pubblico scelto e a creare le loro prime pagine web. Devi saper spiegare le modalità di accesso ai file e <code>os.listdir</code>, costruire una richiesta a un’API, condurre la discussione sul pubblico di riferimento, insegnare i tag HTML e le regole CSS essenziali, criticare una pagina dal punto di vista UI/UX e collegare GitHub a VS Code.',
    prep:'~4 ore. HTML e CSS vanno veloci; il bot e l’API no.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 2 del corso, devi aver fatto di persona:',
      items:[
        'Scritto un bot che invia un’immagine specifica con <code>discord.File</code> e la modalità <code>\'rb\'</code>',
        'Perfezionato il bot perché scelga un file a caso con <code>os.listdir</code> — e sbagliato il percorso almeno una volta',
        'Chiamato un’API pubblica con <code>requests</code> ed estratto un campo dalla risposta <code>.json()</code>',
        'Costruito una piccola pagina HTML con i tag del corso e collegato uno <code>style.css</code>',
        'Aggiunto un’animazione con <code>@keyframes</code> e una variante <code>:hover</code>',
        'Incorporato un widget di terze parti con <code>&lt;iframe&gt;</code>',
        'Pubblicato la pagina su GitHub da dentro VS Code',
        'Guardato un sito volutamente pessimo e annotato da solo i suoi problemi di UX e di UI'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> file, cartelle e il bot dei meme (più le API e un test sommativo); <strong>L2</strong> un eco-bot da zero con un pubblico di riferimento scelto; <strong>L3</strong> front-end e back-end, HTML, CSS e Git dentro VS Code; <strong>L4</strong> principi di UI/UX, animazioni CSS e widget incorporati.',
          why:'È qui che gli studenti smettono di consumare dati scritti da loro stessi e iniziano a leggerli dal disco e da internet, ed è qui che parte la metà web del corso. Introduce anche l’idea che un progetto sia <em>per qualcuno</em>.',
          learn:'Gli studenti leggono file con <code>with open(...)</code>, elencano una cartella con <code>os.listdir</code>, inviano immagini con un bot, chiamano un’API pubblica con <code>requests</code>, costruiscono un bot per un pubblico scelto, creano una pagina HTML con stile sulla dipendenza dalla tecnologia, la animano con <code>@keyframes</code>, incorporano un widget con <code>&lt;iframe&gt;</code> e pubblicano da VS Code.',
          confident:'<code>with open()</code> e le modalità di accesso ai file; <code>os.listdir()</code> con <code>random.choice</code>; <code>discord.File</code>; cosa restituisce un’API e come la gestiscono <code>requests</code>/<code>.json()</code>; i tag HTML essenziali; come collegare un foglio di stile; e <code>git config</code> più la pubblicazione di un repository da VS Code.'
        }
      ]},
      {t:'📁 L1 — File, il bot dei meme e le API', cards:[
        {type:'text', h:'Cosa insegnare sui file', b:'Due cose che gli studenti sbagliano subito: il <strong>nome e l’estensione del file</strong> devono essere esatti, e il file deve stare <strong>nella cartella del programma</strong> (oppure va scritto il percorso completo). Dedica attenzione vera alla parola chiave <code>with</code> e alle <strong>modalità di accesso</strong>: <code>\'rb\'</code>, che legge un’immagine come byte, è ciò che serve al bot. Di’ loro che possono sempre tornare su questo compito e rileggere il codice.'},
        {type:'code', lbl:'il bot dei meme — un’immagine e poi una a caso dalla cartella', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">import</span> os, random

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">mem</span>(ctx):
    <span class="cc"># os.listdir ci dà tutti i nomi dei file nella cartella</span>
    img_name = random.<span class="cf">choice</span>(os.<span class="cf">listdir</span>(<span class="cs">'images'</span>))
    <span class="ck">with</span> <span class="cf">open</span>(<span class="cs">f'images/{img_name}'</span>, <span class="cs">'rb'</span>) <span class="ck">as</span> f:
        picture = discord.<span class="ct2">File</span>(f)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(file=picture)

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'L’ordine di costruzione conta', b:'Fallo in due passaggi, non in uno. Prima un bot che invia <strong>un meme specifico</strong> quando riceve <code>$mem</code>: l’impianto funziona. Solo dopo perfezionalo perché scelga un file <strong>a caso</strong> dalla cartella, ed è lì che <code>os</code> si guadagna il suo posto. Piano di sviluppo del secondo passaggio: una variabile con i nomi dei file, una variabile che ne sceglie uno a caso, e poi l’invio.'},
        {type:'hi', h:'Le API, come compito aggiuntivo', b:'Per chi va più veloce: un’<strong>API</strong> è un insieme di funzioni e dati già pronti esposti da un altro servizio. Invece di costruire il tuo database di foto di papere, chiami l’API delle papere. In Python questo significa la libreria <code>requests</code>: mandi una richiesta HTTP, ricevi una risposta JSON e ne estrai il campo che ti serve. Alcune API chiedono una chiave di accesso gratuita; la documentazione dice quali richieste esistono e cosa restituiscono.'},
        {type:'code', lbl:'chiamare un’API pubblica dal bot (senza chiave)', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_duck_image_url</span>():
    url = <span class="cs">'https://random-d.uk/api/random'</span>
    res = requests.<span class="cf">get</span>(url)
    data = res.<span class="cf">json</span>()          <span class="cc"># trasforma la risposta JSON in un dizionario</span>
    <span class="ck">return</span> data[<span class="cs">'url'</span>]

<span class="cd">@bot.command</span>(<span class="cs">'duck'</span>)
<span class="ck">async def</span> <span class="cf">duck</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_duck_image_url</span>())`},
        {type:'text', h:'Il treno della metacognizione', b:'Questa lezione porta un secondo filo che attraversa tutti i 90 minuti: cinque «stazioni» programmate in cui ti fermi e fai riflettere gli studenti su <em>come</em> stanno imparando. Stazione 1: enuncia chiaramente gli obiettivi. Stazione 2: auto-domande, in che modo ciò che sapevi già ti ha aiutato a capire questo? Stazione 3: quali strumenti e strategie hai usato? Stazione 4: valuta quelle strategie. Stazione 5: riflessione finale, ti serviranno queste strategie fuori da questo corso? Leggi il quaderno del tutor prima di condurla.'},
        {type:'good', txt:'Se qualcuno si è innervosito durante la lezione, il quadro metacognitivo ti dà qualcosa di davvero utile da dire: quella reazione è <strong>legittima</strong> ed è un’informazione sulla <em>strategia</em> che ha scelto, non sulle sue capacità. Fagli i complimenti per essersene accorto: accorgersene è la competenza.'},
        {type:'tip', txt:'In questa lezione c’è un <strong>test sommativo</strong> (15 minuti). Presentalo come ripasso e non come esame decisivo, e conducilo in modo interattivo. C’è anche un compito creativo: fare un meme sul programmare bot Discord, cinque minuti, timer acceso. Conserva i meme: puoi usarli come riscaldamento per settimane.'}
      ]},
      {t:'♻️ L2 — L’eco-bot, da zero, per un pubblico', cards:[
        {type:'text', h:'Cosa rende diversa questa lezione', b:'Non c’è nessuna guida passo passo. Gli studenti costruiscono un <strong>bot completo di loro progettazione</strong> in 40 minuti, usando tutto quello che viene dal Modulo 1 e da L1. Il tuo ruolo passa dallo spiegare al fare domande che guidino e dare indizi. Anche se ognuno costruisce il proprio, incoraggiali ad aiutarsi.'},
        {type:'text', h:'Il pubblico di riferimento — il concetto che cambia il progetto', b:'Il pubblico di riferimento è il gruppo di persone per cui costruisci; conoscerne i problemi è ciò che rende utile un prodotto. La lezione propone tre pubblici per un bot che riduce i rifiuti: <strong>adolescenti</strong> che vogliono ridurre i rifiuti domestici ma non sanno da dove iniziare, <strong>adulti</strong> nella stessa situazione, e <strong>persone già interessate</strong> alle pratiche ecologiche che vogliono spingersi oltre. Ognuno implica una funzionalità diversa: consigli personalizzati, una guida passo passo o una sezione di notizie e articoli. Ogni studente ne sceglie uno e lo dichiara pubblicamente in chat.'},
        {type:'qa', h:'Idee di bot da proporre se si bloccano', items:[
          {k:'Bot per il riuso della plastica', v:'Idee per riutilizzare la plastica di casa.'},
          {k:'Bot per la differenziata', v:'Dice in quale bidone va un oggetto e cosa va riciclato.'},
          {k:'Bot della decomposizione', v:'Indica quanto tempo impiega a decomporsi un dato oggetto domestico.'}
        ]},
        {type:'warn', txt:'La fase di caricamento su GitHub di questa lezione è <strong>valutata</strong>: il link nella chat del compito è il modo in cui valuti il progetto, quindi un link mancante significa uno studente non valutato. Ricorda di nuovo, ad alta voce, che il token non sale insieme al codice. I progetti qui valgono fino a 50 punti tramite lo strumento di valutazione.'},
        {type:'hi', h:'Fine del Tema 1 — la fase sulla carriera', b:'Questa lezione chiude l’arco del Modulo 1 del corso con una fase da cinque minuti che non è riempitivo: festeggia il fatto che hanno finito un tema che pochissimi finiscono e collega le competenze al lavoro vero. Parti di YouTube, Facebook, Instagram, Netflix, dei prodotti Google, Spotify e di progetti della NASA sono fatte in Python, che da anni è fra i linguaggi più richiesti. Chiedi loro se si immaginavano a costruire programmi che semplificano la vita alle persone.'}
      ]},
      {t:'🌐 L3 — Front-end, HTML, CSS e Git in VS Code', cards:[
        {type:'text', h:'La cornice e l’arco di dieci lezioni', b:'Annuncialo: nelle <strong>prossime dieci lezioni</strong> costruiranno siti, e finiranno con cinque pagine web diverse nel loro portfolio su GitHub. Lo sviluppo web si divide in <strong>front-end</strong> (quello che vede l’utente) e <strong>back-end</strong> (la logica che lo fa funzionare). Il front-end di solito è HTML + CSS + JavaScript; il back-end può essere PHP, Java, Ruby o <strong>Python</strong>, e il framework web di Python in questo corso è <strong>Flask</strong>, che arriva nel modulo successivo.'},
        {type:'qa', h:'La distinzione da rendere chiara', items:[
          {k:'HTML', v:'Crea <strong>contenuto e struttura</strong>: testo, immagini, link. Non è un linguaggio di programmazione.'},
          {k:'CSS', v:'Controlla l’<strong>aspetto</strong>: colori, caratteri, disposizione. Nemmeno questo è un linguaggio di programmazione.'},
          {k:'Perché conta per Python', v:'HTML e CSS diventano i <em>template</em> che Flask riempie con i dati. Conoscerli è ciò che permette a chi programma in Python di consegnare una pagina dall’aspetto finito.'}
        ]},
        {type:'code', lbl:'la pagina che costruiscono gli studenti — index.html', code:`<span class="ck">&lt;!DOCTYPE html&gt;</span>
<span class="ct2">&lt;html&gt;</span>
    <span class="ct2">&lt;head&gt;</span>
        <span class="ct2">&lt;title&gt;</span>Informazioni utili!<span class="ct2">&lt;/title&gt;</span>
        <span class="ct2">&lt;link</span> <span class="cf">rel</span>=<span class="cs">"stylesheet"</span> <span class="cf">href</span>=<span class="cs">"style.css"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;/head&gt;</span>
    <span class="ct2">&lt;body&gt;</span>
        <span class="ct2">&lt;h1&gt;</span>Dipendenza dai social<span class="ct2">&lt;/h1&gt;</span>
        <span class="ct2">&lt;p&gt;</span>I social riducono il tempo che passiamo nel mondo reale.<span class="ct2">&lt;/p&gt;</span>
        <span class="ct2">&lt;img</span> <span class="cf">src</span>=<span class="cs">"phone.gif"</span> <span class="cf">alt</span>=<span class="cs">"Immagine 1"</span><span class="ct2">&gt;</span>
        <span class="ct2">&lt;h2&gt;</span>Come possiamo resistere?<span class="ct2">&lt;/h2&gt;</span>
        <span class="ct2">&lt;ul&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Mettere dei limiti al tempo passato con i dispositivi.<span class="ct2">&lt;/li&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Riservare del tempo senza tecnologia per staccare.<span class="ct2">&lt;/li&gt;</span>
        <span class="ct2">&lt;/ul&gt;</span>
    <span class="ct2">&lt;/body&gt;</span>
<span class="ct2">&lt;/html&gt;</span>`},
        {type:'code', lbl:'style.css — e l’unica modifica che chiedi loro', code:`body {
    font-family: Arial, Verdana, sans-serif;  <span class="cc">/* famiglia di caratteri */</span>
    font-size: 11pt;                          <span class="cc">/* dimensione del testo principale */</span>
    background-color: #f0f0f0;                <span class="cc">/* sfondo della pagina */</span>
    color: #333;                              <span class="cc">/* colore del testo */</span>
}

h1 {
    color: #00a800;                           <span class="cc">/* colore del titolo */</span>
    font-size: 24pt;
    font-family: Georgia, Times, serif;
}`},
        {type:'text', h:'Git è il programma, GitHub è il sito', b:'Spiega che <strong>GitHub è un sito web</strong> e che <strong>git è un programma separato</strong> sulla tua macchina che rende il flusso di lavoro molto più semplice. Il passaggio importante dell’installazione è <strong>scegliere VS Code</strong> come editor; il resto può restare com’è. Poi accedi a GitHub da dentro VS Code — <em>una volta</em> — e pubblica la pagina come nuovo repository pubblico direttamente dall’editor.'},
        {type:'warn', txt:'Se git si rifiuta di funzionare, la soluzione è quasi sempre l’identità. Eseguila con i dati dello studente stesso: <code>git config --global user.email "tu@esempio.it"</code> e <code>git config --global user.name "Il Tuo Nome"</code>. Mostra prima l’installazione completa; se qualcuno non riesce a stare al passo, fagliela finire a casa con la registrazione della lezione invece di frenare il gruppo.'},
        {type:'tip', txt:'Tieni HTML e CSS volutamente in superficie. La nota della lezione è esplicita: agli studenti serve solo l’essenziale di base, senza approfondire. Quattro tag e un paio di regole CSS sono l’obiettivo; la profondità arriva dopo, con i progetti.'}
      ]},
      {t:'✨ L4 — UI/UX, animazioni e widget', cards:[
        {type:'text', h:'Insegna UI/UX con la critica, non con la spiegazione frontale', b:'Non trasformarlo in un monologo. Apri un sito reale volutamente pessimo — il corso usa quello della Yale School of Art — e fai dire agli <em>studenti</em> cosa non va, dando la parola a tutti. Poi organizza le loro risposte nei due gruppi.'},
        {type:'twocol', left:{h:'❌ Problemi di UX (esperienza)', items:['<strong>Navigazione complessa</strong>: menu sovraccarichi e poco intuitivi','<strong>Nessuna gerarchia delle informazioni</strong>: muri di testo senza struttura','<strong>Scarsa accessibilità</strong>: caratteri minuscoli, poco contrasto','<strong>Elementi che distraggono</strong>: animazioni e colori che allontanano dal contenuto']}, right:{h:'❌ Problemi di UI (interfaccia)', items:['<strong>Stile incoerente</strong>: nessun design unificato, caos visivo','<strong>Interfaccia imprevedibile</strong>: cose che sembrano link e non lo sono','<strong>Nessuna adattabilità</strong>: inutilizzabile su telefono']}},
        {type:'code', lbl:'animazione CSS con @keyframes — e la variante :hover', code:`<span class="cd">@keyframes</span> color-change {
    0%   { color: blue; }
    50%  { color: red; }
    100% { color: blue; }
}

h1 {
    animation: color-change 3s infinite;
}

<span class="cc">/* aggiungi :hover e si anima solo sotto il cursore */</span>
h1:hover {
    animation: color-change 3s infinite;
}`},
        {type:'text', h:'Widget con &lt;iframe&gt;', b:'Un <strong>widget</strong> è l’applicazione di qualcun altro incorporata nella tua pagina, usando il tag <code>&lt;iframe&gt;</code>. L’esempio della lezione si sposa bene con il tema: incorporare le <strong>previsioni del tempo</strong> per incoraggiare chi legge una pagina sulla dipendenza dalla tecnologia a uscire di casa. I siti di widget ti fanno configurare l’aspetto e copiare il codice <code>&lt;iframe&gt;</code> già pronto.'},
        {type:'good', txt:'Nota come si collegano le due metà di questa lezione: hai appena insegnato che le animazioni possono essere un <em>problema</em> di UX e subito dopo insegni ad animare. Rendi esplicita quella tensione: «ora che sai farlo, quando dovresti?». La loro stessa critica al sito pessimo diventa l’asticella che si danno da soli.'},
        {type:'tip', txt:'Chiudi con il quiz di ripasso e termina con le due domande di riflessione suggerite dal piano: quale principio di UX ti sembra più importante e quale userai davvero nelle tue applicazioni? Il compito a casa è un esercizio di «riordina il progetto», che prepara le strutture di cartelle più complesse richieste da Flask nel modulo successivo.'}
      ]}
    ],
    quiz:[
      {q:'Perché il bot dei meme apre il file immagine in modalità \'rb\'?', opts:['Un’immagine è un dato binario, quindi va letta come byte e non come testo','Perché \'rb\' significa «random bytes», che è ciò che sceglie l’immagine','Perché Discord accetta solo file aperti in modalità lettura','È arbitrario: qualsiasi modalità funziona'], c:0, fb:'Le modalità di accesso contano: \'rb\' legge il file come byte grezzi, che è ciò di cui discord.File ha bisogno per un’immagine.'},
      {q:'Cosa restituisce os.listdir(\'images\') e perché serve al bot dei meme?', opts:['Tutti i nomi dei file nella cartella, così random.choice può sceglierne uno invece di inviare sempre la stessa immagine','La dimensione della cartella in byte','Un elenco di file già aperti pronti da inviare','I permessi della cartella, che Discord controlla'], c:0, fb:'Il bot si costruisce in due passaggi: prima inviando un’immagine fissa e poi usando os.listdir con random.choice per scegliere un file qualsiasi dalla cartella.'},
      {q:'Uno studente vuole che il suo bot invii foto casuali di papere. Qual è l’approccio professionale insegnato dal corso?', opts:['Chiamare un’API pubblica con la libreria requests e leggere l’URL dalla risposta JSON','Scaricare qualche centinaio di foto di papere nella cartella images','Chiedere a ogni utente di caricare prima una foto di papera','Generare le papere con un modello di immagini'], c:0, fb:'È il senso del compito sulle API: invece di costruire il tuo database, usi un’API che i dati li fornisce già; requests manda la chiamata HTTP e .json() interpreta la risposta.'},
      {q:'Cos’è il pubblico di riferimento e perché la lezione dell’eco-bot ne fa scegliere uno agli studenti?', opts:['È il gruppo preciso a cui è destinato il prodotto — conoscerne i problemi è ciò che rende il bot davvero utile e cambia quali funzionalità si costruiscono','Un numero minimo di utenti che il bot deve raggiungere','L’insieme dei server Discord in cui il bot può entrare','I compagni di classe che testeranno il bot'], c:0, fb:'La lezione propone tre pubblici per lo stesso bot, ognuno dei quali implica una funzionalità diversa: consigli personalizzati, una guida passo passo o una sezione di notizie.'},
      {q:'Quale di queste affermazioni su HTML, CSS e Python è corretta?', opts:['HTML struttura il contenuto e CSS gli dà stile — nessuno dei due è un linguaggio di programmazione, ed entrambi diventano template che Flask riempie con i dati','Tutti e tre sono linguaggi di programmazione usati nel front-end','CSS è il back-end e HTML il front-end','HTML è una libreria di Python'], c:0, fb:'HTML crea il contenuto, CSS controlla l’aspetto, e conoscerli entrambi è ciò che permette a un’applicazione Flask di consegnare una pagina dall’aspetto finito.'},
      {q:'Il commit di uno studente fallisce con un messaggio sull’identità. Cosa esegui?', opts:['git config --global user.email e git config --global user.name, con i suoi dati','git init --force','pip install git','git reset --hard'], c:0, fb:'Le note di M2L3 danno esattamente questi due comandi come soluzione quando git non è ancora configurato su quella macchina.'},
      {q:'Stai insegnando UI/UX. Cosa dice la lezione di NON fare?', opts:['Trasformarlo in una spiegazione frontale a senso unico — devono essere gli studenti a individuare i problemi su un sito pessimo vero','Mostrare un sito reale, perché potrebbe risultare offensivo','Parlare di accessibilità, che è fuori portata per questa fascia d’età','Lasciare che gli studenti siano in disaccordo fra loro'], c:0, fb:'La nota sui punti importanti è esplicita: non trasformarlo in una lezione frontale, stimola una discussione e possibilmente dai la parola a tutti.'},
      {q:'Cosa cambia aggiungendo :hover al selettore di un’animazione CSS?', opts:['L’animazione parte solo mentre il mouse è sopra l’elemento','L’animazione va al doppio della velocità','L’animazione si ripete all’infinito invece che una volta sola','Disattiva l’animazione su telefono'], c:0, fb:'La lezione fa aggiungere :hover proprio per far vedere che l’animazione parte solo quando il cursore è sopra l’elemento.'},
      {q:'Cos’è un widget nel contesto di questa lezione e come si incorpora?', opts:['L’applicazione di qualcun altro mostrata dentro la tua pagina, incorporata con il tag &lt;iframe&gt;','Un’animazione CSS che reagisce all’utente','Una funzione Python che restituisce HTML','Una funzionalità di GitHub per condividere pagine'], c:0, fb:'I widget sono applicazioni di terze parti incorporate tramite <iframe>; la lezione incorpora le previsioni del tempo nella pagina sulla dipendenza dalla tecnologia.'}
    ]
  },
  {
    id:7, emoji:'🌐', color:'#2FA37C',
    title:'M3 — Flask e i template Jinja',
    desc:'Modulo 3 del corso: ambienti virtuali, installare Flask, rotte e f-string, template e variabili Jinja, branch del repository, moduli HTML ed elementi interattivi.',
    obj:'Insegnare agli studenti a costruire una vera applicazione web in Python. Devi saper spiegare perché esiste un ambiente virtuale, installarci Flask dentro, smontare l’esempio della documentazione, insegnare rotte e <code>url_for</code>, spiegare cosa fa un motore di template, collegare un modulo HTML a una rotta Flask e condurre una lezione EduScrum nei tempi.',
    prep:'~5–6 ore. È il primo modulo che non puoi insegnare solo leggendo.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 3 del corso, devi aver COSTRUITO PERSONALMENTE UN’APPLICAZIONE FLASK FUNZIONANTE. Nello specifico:',
      items:[
        'Creato un ambiente con pipenv e installato Flask al suo interno',
        'Scritto un’app con una sola rotta che restituisce HTML, con <code>app.run(debug=True)</code>, e aperta in un browser',
        'Aggiunto una seconda rotta con il suo URL e collegato le due pagine fra loro',
        'Passato dal restituire stringhe a <code>render_template</code> con una vera cartella <code>templates/</code>',
        'Passato una variabile a un template e mostrata con <code>{{ }}</code> di Jinja',
        'Costruito un <code>&lt;form&gt;</code> HTML, letto con <code>request.form</code> e mostrato il risultato in un’altra pagina',
        'Rotto tutto di proposito mettendo <code>id</code> senza <code>name</code>, e visto il KeyError',
        'Usato <code>url_for()</code> in un link, e un <code>&lt;select&gt;</code> il cui valore arriva a Python',
        'Scaricato un progetto da un branch del repository'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> ambienti virtuali, installare Flask, la prima rotta e le f-string, più una seconda pagina con il suo URL; <strong>L2</strong> Jinja, <code>render_template</code> e le variabili nei template, costruendo un calcolatore energetico per la casa intelligente; <strong>L3</strong> una lezione EduScrum su branch del repository, <code>url_for</code> e moduli HTML; <strong>L4</strong> elementi interattivi e un generatore di meme che cambia la pagina dinamicamente.',
          why:'È il modulo in cui Python inizia a servire pagine web. Tutto ciò che c’è nei moduli 4 e 7 del corso si appoggia direttamente qui, quindi un’idea traballante di rotte o template blocca il resto del percorso web.',
          learn:'Gli studenti isolano un progetto con un ambiente virtuale, installano Flask con <code>pipenv</code>, scrivono rotte, restituiscono contenuti dinamici con le f-string, mostrano pagine HTML complete con Jinja, passano variabili ai template, scaricano un progetto da un branch, costruiscono un modulo e ne leggono i dati, e controllano una pagina a partire dai valori di <code>&lt;select&gt;</code> e <code>&lt;input&gt;</code>.',
          confident:'Perché un ambiente virtuale evita i conflitti fra dipendenze; <code>pipenv install flask</code>; <code>@app.route</code> e <code>app.run(debug=True)</code>; la differenza fra restituire una stringa e <code>render_template</code>; <code>{{ }}</code> di Jinja; <code>url_for()</code>; e <code>request.form</code> con <code>methods=[\'GET\',\'POST\']</code>.'
        }
      ]},
      {t:'🧪 L1 — Ambienti virtuali, Flask e rotte', cards:[
        {type:'text', h:'Cos’è un ambiente virtuale, in parole semplici', b:'Uno strumento che <strong>isola un progetto e le sue dipendenze</strong> da tutti gli altri progetti. Questo evita conflitti di versione fra librerie, rende più facile spostare il progetto su un’altra macchina e fa sì che i pacchetti installati per questo progetto non contaminino il resto. Una volta dentro un ambiente creato con <code>pipenv</code>, le librerie vanno installate lì: <code>pipenv install flask</code>, non un <code>pip install</code> qualsiasi.'},
        {type:'warn', txt:'Non sforare i tempi in questa fase: l’argomento importante viene dopo. Se qualcuno non riesce a far funzionare l’ambiente, <strong>incoraggialo e vai avanti</strong>: digli esplicitamente che questo non gli impedirà di fare il lavoro di oggi e che potrà riprovare più tardi. Perdere venti minuti qui ti costa la fase sulle rotte.'},
        {type:'text', h:'Falli leggere la documentazione, non dettare il codice', b:'Manda il link alla documentazione di Flask e chiedi loro di <strong>trovare da soli l’esempio di pagina base</strong> (mostra dov’è il primo esempio se si perdono). Poi spiega come eseguirlo e testarlo, e smontate il codice insieme. È l’abitudine alla documentazione di M1L4 usata sul serio, un modulo più tardi.'},
        {type:'code', lbl:'la prima applicazione Flask — una rotta, contenuto dinamico, f-string', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask
<span class="ck">import</span> random

app = <span class="ct2">Flask</span>(__name__)

facts_list = [
    <span class="cs">"Oltre il 50% delle persone fra i 18 e i 34 anni si considera dipendente dal telefono."</span>,
    <span class="cs">"I social hanno lati positivi e negativi: conviene essere consapevoli di entrambi."</span>
]

<span class="cd">@app.route</span>(<span class="cs">"/"</span>)
<span class="ck">def</span> <span class="cf">facts</span>():
    <span class="cc"># una f-string valuta ciò che sta dentro le parentesi graffe</span>
    <span class="ck">return</span> <span class="cs">f'&lt;p&gt;{random.choice(facts_list)}&lt;/p&gt;'</span>

app.<span class="cf">run</span>(debug=<span class="ck">True</span>)`},
        {type:'text', h:'E poi nascondi la pagina dietro il suo URL', b:'Un <strong>URL</strong> è l’indirizzo di una pagina: lo scrivi, il browser la chiede al server e il server restituisce la pagina di quell’indirizzo. Il compito è spostare il fatto casuale dalla home page a <code>/random_fact</code>, dare alla home un messaggio di benvenuto e collegare le due con <code>&lt;a href="/random_fact"&gt;Vedi un fatto a caso!&lt;/a&gt;</code>. Due rotte, due funzioni: è il modello mentale che serve loro prima di Jinja.'},
        {type:'tip', txt:'Proponi che uno studente faccia da tutor durante la fase di installazione di Flask e mostri il suo schermo. È più rapido che raccontarlo tu, ed è una delle mosse di differenziazione che questo corso usa di continuo con gli studenti più forti.'}
      ]},
      {t:'🧩 L2 — Template Jinja e il calcolatore energetico', cards:[
        {type:'text', h:'Il problema: la crisi energetica', b:'Apri con le case intelligenti: sono un bene o un male, e che tipo di abitazione danneggia di più l’ambiente? Una <strong>crisi energetica</strong> è quando la domanda di risorse energetiche supera nettamente l’offerta. La maggior parte dell’energia arriva ancora da fonti non rinnovabili, e produrla e trasportarla inquina aria, acqua e suolo. Il progetto è un calcolatore che stima l’efficienza energetica di una casa intelligente.'},
        {type:'qa', h:'Le tre cose che ti dà Jinja', items:[
          {k:'Template', v:'Pagine HTML già pronte che puoi cambiare e personalizzare dinamicamente.'},
          {k:'Pagine intere, non tag', v:'Gli studenti sanno già restituire singoli tag HTML da Flask. Importa <code>render_template</code> e potrai restituire una pagina completa.'},
          {k:'Variabili nell’HTML', v:'Il vero premio: inserire valori di Python nella pagina con <code>{{ }}</code> e cambiarli al volo.'}
        ]},
        {type:'code', lbl:'dal restituire una stringa al mostrare una pagina', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask, render_template

<span class="cd">@app.route</span>(<span class="cs">'/'</span>)
<span class="ck">def</span> <span class="cf">index</span>():
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>)`},
        {type:'code', lbl:'variabili Jinja dentro il template', code:`<span class="cc">&lt;!-- size e lights sono valori che arrivano da Python --&gt;</span>
<span class="ct2">&lt;li</span> <span class="cf">class</span>=<span class="cs">"list__item"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ size + "/7" }}"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;img</span> <span class="cf">class</span>=<span class="cs">"item__img"</span> <span class="cf">src</span>=<span class="cs">"../static/img/light.svg"</span> <span class="cf">alt</span>=<span class="cs">"light"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;span&gt;</span>4-6 lampadine<span class="ct2">&lt;/span&gt;</span>
  <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/li&gt;</span>`},
        {type:'text', h:'Come si conduce la lezione', b:'Installa Jinja2, scarica il progetto dal repository e poi <strong>dividi gli studenti in coppie nelle stanze separate</strong>. Il loro compito è analizzare il template e collegare front-end e back-end; nello specifico, capire quale pezzo di codice è responsabile di quale pagina. Chi non vuole lavorare in coppia può studiarlo da solo. Poi tutti affrontano i compiti sul template, e la lezione finisce con un compito creativo: inventare la propria scheda di edilizia ecologica, con descrizione, coefficiente e immagine.'},
        {type:'tip', txt:'Chiedi agli studenti più forti di guardare più a fondo la documentazione di Jinja come compito aggiuntivo, invece di correre avanti nel progetto. Li tiene dentro l’argomento del giorno e rafforza l’abitudine alla documentazione.'}
      ]},
      {t:'🌿 L3 — Branch, url_for e moduli (EduScrum)', cards:[
        {type:'hi', h:'Questa è una lezione EduScrum — la competenza è il tempo', b:'La lezione è costruita come <strong>due sprint con retrospettive</strong>. Di’ ad alta voce il limite di tempo di ogni sprint. La nota della lezione è netta sul modo in cui può fallire: se sei in ritardo, <strong>passa comunque alla retrospettiva</strong> e discutete cosa è andato storto. Finire tutti i compiti conta meno del fatto che il gruppo viva un ciclo di sprint completo.'},
        {type:'qa', h:'Le domande della retrospettiva', items:[
          {k:'1', v:'Cosa avete ottenuto? Avete fatto in tempo a fare tutto?'},
          {k:'2', v:'Quale fase è stata la più difficile?'},
          {k:'3', v:'Come migliorereste questo sprint?'}
        ]},
        {type:'text', h:'I branch del repository — la metafora che funziona', b:'Un <strong>branch</strong> è come una copia del repository fatta per un compito preciso. Chiedi loro: il tuo progetto lo usano persone ogni giorno e devi cambiare qualcosa — fermi tutto il progetto mentre lavori? Ovviamente no. Crei un branch, ci sviluppi e ci testi sopra, e lo unisci al progetto principale quando sei sicuro che funzioni. In questa lezione l’obiettivo pratico è semplicemente trovare il branch giusto e scaricarne i file del progetto.'},
        {type:'text', h:'url_for e i moduli', b:'Spiega <code>url_for()</code>: costruisce un URL a partire dal <em>nome della funzione di vista</em> invece che da un percorso fisso, quindi i link non si rompono quando le rotte cambiano. Poi i moduli: mostra loro il modulo che hanno compilato quando si sono iscritti a Kodland, così <code>&lt;form&gt;</code> e <code>&lt;input&gt;</code> arrivano come qualcosa di familiare e non di astratto.'},
        {type:'code', lbl:'il link, il campo e la rotta che li riceve', code:`<span class="cc">&lt;!-- un link costruito dal nome della funzione di vista --&gt;</span>
<span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ url_for('form') }}"</span> <span class="cf">class</span>=<span class="cs">"main__link"</span><span class="ct2">&gt;</span>Compila il modulo<span class="ct2">&lt;/a&gt;</span>

<span class="cc">&lt;!-- un campo che raccoglie un indirizzo email --&gt;</span>
<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"email"</span><span class="ct2">&gt;</span>Email<span class="ct2">&lt;/label&gt;</span>
<span class="ct2">&lt;input</span> <span class="cf">type</span>=<span class="cs">"email"</span> <span class="cf">name</span>=<span class="cs">"email"</span> <span class="cf">id</span>=<span class="cs">"email"</span> <span class="cf">required</span><span class="ct2">&gt;</span>`},
        {type:'code', lbl:'leggere il modulo dal lato Python', code:`<span class="cd">@app.route</span>(<span class="cs">'/submit'</span>, methods=[<span class="cs">'GET'</span>, <span class="cs">'POST'</span>])
<span class="ck">def</span> <span class="cf">submit_form</span>():
    name    = request.form[<span class="cs">'name'</span>]      <span class="cc"># la chiave è il name="" del campo</span>
    email   = request.form[<span class="cs">'email'</span>]
    address = request.form[<span class="cs">'address'</span>]
    date    = request.form[<span class="cs">'date'</span>]

    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'form_result.html'</span>,
                           name=name, email=email,
                           address=address, date=date)`},
        {type:'warn', txt:'L’errore più comune con i moduli: <code>request.form[\'email\']</code> legge l’attributo <strong><code>name</code></strong> del campo, non il suo <code>id</code>. Gli studenti mettono <code>id</code> e dimenticano <code>name</code>, e ottengono un KeyError. Dillo una volta all’inizio e ti risparmi cinque interruzioni.'},
        {type:'tip', txt:'Il compito a casa amplia il modulo perché salvi anche le informazioni inviate in un file <code>.txt</code>, il che ripassa di nascosto la gestione dei file del Modulo 2 del corso e anticipa perché un database sia un’idea migliore. È tutta la preparazione al modulo successivo.'}
      ]},
      {t:'🎭 L4 — Elementi interattivi e il generatore di meme', cards:[
        {type:'text', h:'Cosa si costruisce', b:'Un <strong>generatore di meme</strong>: l’utente sceglie un template da un <code>&lt;select&gt;</code>, scrive il proprio testo nei campi e la pagina si aggiorna con il meme finito. Gli studenti scaricano il progetto dal repository, vanno a caccia degli elementi al suo interno, aggiungono i propri meme al <code>&lt;select&gt;</code> e poi scrivono il back-end che riceve il testo e lo inserisce nel template, incluso l’uso di una variabile Jinja dentro il CSS per dare stile alla scritta.'},
        {type:'qa', h:'I tag che questa lezione introduce', items:[
          {k:'&lt;select&gt;', v:'Un elenco a discesa: il contenitore.'},
          {k:'&lt;option&gt;', v:'Una singola voce dentro l’elenco a discesa.'},
          {k:'Lo schema', v:'Leggere il valore scelto dal lato Python esattamente come qualsiasi altro campo di un modulo e poi passarlo al template.'}
        ]},
        {type:'hi', h:'Il minigioco «trovalo se ci riesci!»', b:'Prima di scrivere qualsiasi codice: ricorda brevemente che aspetto ha ogni elemento e poi dai <strong>due minuti</strong> per trovarli tutti da soli nel progetto. Chiedi dopo quanti ne hanno trovati. Trasforma il leggere una base di codice sconosciuta — una competenza davvero difficile — in un gioco a tempo, e li fa arrivare orientati prima di iniziare a modificare.'},
        {type:'good', txt:'Chiudi con la gara del meme migliore: gli studenti usano lo strumento appena costruito per generare meme, li incollano come screenshot nella chat di gruppo e votano. Chi vince si guadagna il diritto di pubblicare un meme a settimana in chat. Costa dieci minuti e fa sembrare il progetto consegnato davvero, che è esattamente la sensazione che il corso sta progettando.'},
        {type:'tip', txt:'Tieni d’occhio cosa scelgono durante la caccia ai meme. Il piano ti chiede di supervisionare la loro selezione e aiutare nella ricerca, in parte per mantenere il ritmo e in parte perché sei responsabile di ciò che finisce in un progetto condiviso di classe.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente chiede a cosa gli serva un ambiente virtuale. Qual è la risposta corretta?', opts:['Isola il progetto e le sue dipendenze, evitando conflitti di versione e rendendo più facile spostare il progetto su un’altra macchina','Fa girare Python più velocemente','Lo richiede Flask e non ha altro scopo','Nasconde il codice ad altri utenti del computer'], c:0, fb:'Un ambiente virtuale isola le dipendenze di un progetto, evita conflitti fra versioni di librerie e tiene i pacchetti installati per progetto.'},
      {q:'Dentro un progetto gestito con pipenv, come installa Flask uno studente?', opts:['pipenv install flask — così finisce nell’ambiente di quel progetto','pip install flask, che funziona sempre allo stesso modo','Scaricando Flask dal sito e copiando la cartella dentro','Flask è incluso in Python e non va installato'], c:0, fb:'Installare librerie funziona allo stesso modo in generale, ma dentro un ambiente pipenv bisogna installare in quell’ambiente: pipenv install flask.'},
      {q:'Qual è la differenza fra restituire una f-string con dell’HTML e usare render_template?', opts:['Una f-string restituisce un piccolo pezzo di HTML dalla funzione; render_template restituisce un’intera pagina HTML dalla cartella templates','render_template è il vecchio modo di fare la stessa cosa','Una f-string può contenere variabili e render_template no','render_template funziona solo per la home page'], c:0, fb:'È esattamente il passaggio da M3L1 a M3L2: Flask può restituire tag direttamente, ma render_template di Jinja restituisce pagine intere e permette di inserirci variabili.'},
      {q:'Perché il corso insegna url_for() invece degli href scritti a mano?', opts:['Costruisce l’URL dal nome della funzione di vista, quindi i link continuano a funzionare se la rotta cambia','È più corto da scrivere','Cifra l’URL','È obbligatorio per qualsiasi link dentro un modulo'], c:0, fb:'url_for() fa riferimento alla funzione e non al percorso, ed è per questo che i link del calcolatore usano {{ url_for(\'form\') }}.'},
      {q:'Il modulo di uno studente viene inviato ma Flask solleva un KeyError su request.form[\'email\']. Qual è la causa più probabile?', opts:['Il campo ha un id ma non un attributo name corrispondente — request.form legge il name','Ha dimenticato di importare Flask','Alla rotta manca debug=True','Il modulo ha bisogno di un database prima di poter essere letto'], c:0, fb:'request.form si indicizza tramite l’attributo name del campo. Mettere solo l’id è l’errore classico di chi inizia.'},
      {q:'Come spiegheresti un branch del repository a uno studente?', opts:['Una copia del progetto fatta per un compito preciso, sviluppata e testata a parte e unita al progetto principale quando funziona','Una copia di sicurezza creata automaticamente ogni giorno','Un secondo account GitHub per lo stesso progetto','Una cartella dentro il repository per le versioni vecchie'], c:0, fb:'L’impostazione della lezione: non puoi fermare un progetto in uso per modificarlo, quindi crei un branch, testi e unisci quando sei sicuro.'},
      {q:'Sei a venti minuti da una lezione EduScrum e sei chiaramente in ritardo. Cosa prescrive il corso?', opts:['Passare comunque alla retrospettiva e discutere cosa è andato storto — il ciclo dello sprint conta più che finire tutti i compiti','Saltare la retrospettiva e continuare a programmare fino a finire i compiti','Prolungare la lezione oltre l’orario','Dare il codice della soluzione per far recuperare tutti'], c:0, fb:'La nota su EduScrum è esplicita: la gestione rigorosa del tempo è l’obiettivo. Se sei in ritardo, passa alla retrospettiva e discutetene.'},
      {q:'Uno studente non riesce a far funzionare l’ambiente virtuale e la fase su Flask sta per iniziare. Qual è la mossa giusta?', opts:['Rassicurarlo che questo non blocca il lavoro di oggi, proseguire la lezione e aiutarlo a riprovare più tardi','Fermare la lezione finché non funziona per tutti','Dirgli di saltare il modulo','Fargli lavorare senza Python per il resto del corso'], c:0, fb:'La nota della lezione dice esattamente questo: non sforare il tempo previsto, incoraggia lo studente e digli che non gli impedirà di fare il lavoro di oggi.'},
      {q:'Qual è lo scopo del minigioco «trovalo se ci riesci!» nella lezione sul generatore di meme?', opts:['Far orientare gli studenti in una base di codice sconosciuta — una competenza vera — prima che inizino a modificarla','Verificare se hanno memorizzato l’elenco dei tag HTML','Riempire il tempo mentre il progetto si scarica','Decidere chi presenta alla fine'], c:0, fb:'Due minuti per localizzare gli elementi da soli trasformano la lettura di codice sconosciuto in un gioco, e fanno sì che sappiano muoversi prima di toccare qualcosa.'}
    ]
  },
  {
    id:8, emoji:'🗄️', color:'#7C5CFC',
    title:'M4 — Database, autenticazione e deploy',
    desc:'Modulo 4 del corso: LiveCoding, database con SQLAlchemy, classi, collegare il database all’HTML, registrazione e accesso, deploy su PythonAnywhere e il sito portfolio.',
    obj:'Insegnare agli studenti a salvare e recuperare dati veri e a mettere un sito su internet. Devi saper condurre bene una lezione di LiveCoding, definire una classe modello, spiegare le classi usando Flask stesso, mettere insieme registrazione e accesso con le sessioni, fare il deploy su PythonAnywhere compreso il file WSGI, e affrontare con onestà l’avvertimento sul salvataggio delle password.',
    prep:'~6–7 ore. Il modulo più impegnativo della formazione. Mettici due sessioni.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 4 del corso devi aver COSTRUITO PERSONALMENTE L’APP DEL DIARIO DALL’INIZIO ALLA FINE — ci si aspetta che tu faccia LiveCoding di questo davanti agli studenti, e questo non si può fare solo leggendo. Nello specifico:',
      items:[
        'Installato <code>flask_sqlalchemy</code> e definito una classe modello con campi <code>db.Column</code> e una <code>primary_key</code>',
        'Creato il file <code>.db</code> e salvato un record con <code>db.session.add()</code> e poi <code>commit()</code>',
        'Omesso il <code>commit()</code> di proposito e verificato che non salva nulla e non compare alcun errore',
        'Letto record con <code>.query.all()</code>, <code>.order_by()</code> e <code>.get(id)</code>, e mostrati in un template',
        'Aggiunto una seconda tabella <code>User</code>, incontrato l’errore «no such table» e risolto cancellando e ricreando il <code>.db</code>',
        'Costruito registrazione e accesso, con <code>session</code> e <code>secret_key</code>, e filtrato le voci con <code>filter_by()</code>',
        'Fatto il deploy di un’app funzionante su <strong>PythonAnywhere</strong>, inclusa la modifica del file WSGI, e aperta sul telefono',
        'Rotto il deploy di proposito e trovato la causa nel registro degli errori',
        'Provato ad alta voce l’avvertimento di una frase sull’hash delle password'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> database e il «Diario del Programmatore», con LiveCoding, più le classi; <strong>L2</strong> una tabella utenti, registrazione e accesso con le sessioni; <strong>L3</strong> una lezione EduScrum con deploy su <strong>PythonAnywhere</strong>; <strong>L4</strong> tre sprint per costruire e pubblicare un sito portfolio, poi il traguardo di metà corso.',
          why:'Un sito che dimentica tutto appena lo chiudi non è un’applicazione. In questo modulo i progetti degli studenti acquistano memoria e un indirizzo pubblico, ed è il picco tecnico del percorso web.',
          learn:'Gli studenti creano un database SQLite con <code>flask_sqlalchemy</code>, definiscono tabelle come classi, salvano e interrogano record, costruiscono registrazione e accesso, mantengono l’utente collegato nella <code>session</code>, fanno il deploy di un’app funzionante su un URL vero e consegnano un sito portfolio con un elenco dinamico di progetti e un modulo di contatto.',
          confident:'Il metodo LiveCoding; la definizione dei campi con <code>db.Column</code> e <code>primary_key</code>; <code>db.session.add()</code> / <code>commit()</code>; <code>Card.query.all()</code> / <code>get(id)</code> / <code>filter_by()</code>; <code>session</code> più <code>secret_key</code>; il passaggio del WSGI su PythonAnywhere; e l’avvertimento onesto sulle password in chiaro.'
        }
      ]},
      {t:'🎥 L1 — LiveCoding, database e classi', cards:[
        {type:'hi', h:'LiveCoding — il metodo su cui poggia questa lezione', b:'LiveCoding significa che il tutor <strong>costruisce il codice gradualmente insieme agli studenti</strong>, condividendo lo schermo. La cosa importante non è il risultato finito, ma che gli studenti vedano il programmare come un processo continuo fatto di piccole decisioni, e non come qualcosa che arriva già pronto.'},
        {type:'qa', h:'Come si fa bene il LiveCoding', items:[
          {k:'Racconta', v:'Parla mentre programmi; spiega la logica di ogni azione.'},
          {k:'Chiedi', v:'Tieni gli studenti agganciati con domande invece che con un monologo.'},
          {k:'Sbaglia', v:'Gli errori vanno bene: falli <em>di proposito</em> e chiedi loro di trovarli.'},
          {k:'Vai piano', v:'Non correre. Fai pause perché possano raggiungerti.'},
          {k:'Disegna', v:'Usa gli strumenti di annotazione di Zoom per visualizzare la logica.'},
          {k:'Fatti leggere', v:'Caratteri grandi e chiari, e scrivi in blocchi di codice così la struttura si vede e si spiega facilmente.'}
        ]},
        {type:'text', h:'Il progetto e il suo aggancio', b:'Il <strong>Diario del Programmatore</strong>: un’applicazione web con un vero database dietro. La cornice è la privacy: tutto ciò che facciamo vive online, puoi davvero fidarti che i tuoi dati siano al sicuro? Oggi imparano a costruire un servizio genuinamente riservato, perché sono <em>loro</em> a conservare i dati. Un <strong>database</strong> è una raccolta organizzata di dati che permette di conservare, gestire e recuperare informazioni.'},
        {type:'code', lbl:'la tabella, definita come una classe', code:`<span class="ck">class</span> <span class="ct2">Card</span>(db.<span class="ct2">Model</span>):
    <span class="cc"># ogni campo diventa una colonna</span>
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>)
    title    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    subtitle = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">300</span>), nullable=<span class="ck">False</span>)
    text     = db.<span class="ct2">Column</span>(db.<span class="ct2">Text</span>, nullable=<span class="ck">False</span>)

    <span class="ck">def</span> <span class="cf">__repr__</span>(self):
        <span class="ck">return</span> <span class="cs">f'&lt;Card {self.id}&gt;'</span>`},
        {type:'text', h:'Le classi, insegnate dopo — di proposito', b:'Nota l’ordine della lezione: gli studenti <strong>costruiscono prima la tabella</strong> e solo dopo spieghi le classi. È voluto, perché a quel punto hanno una domanda vera: «perché abbiamo scritto <code>class</code>?». In Python tutto è un oggetto, e le classi sono gli stampi da cui nascono gli oggetti. L’esempio decisivo ce l’hanno davanti: <strong>Flask è una classe</strong>, con i suoi metodi e le sue funzioni, che usano da tutto il modulo.'},
        {type:'code', lbl:'salvare e leggere i record', code:`<span class="cc"># salva una nuova voce</span>
card = <span class="ct2">Card</span>(title=title, subtitle=subtitle, text=text)
db.session.<span class="cf">add</span>(card)
db.session.<span class="cf">commit</span>()

<span class="cc"># tutte le voci, in ordine di id, per la home page</span>
cards = <span class="ct2">Card</span>.query.<span class="cf">order_by</span>(<span class="ct2">Card</span>.id).<span class="cf">all</span>()
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>, cards=cards)

<span class="cc"># una voce specifica, tramite il suo id</span>
card = <span class="ct2">Card</span>.query.<span class="cf">get</span>(id)
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'card.html'</span>, card=card)`},
        {type:'warn', txt:'<code>add()</code> senza <code>commit()</code> è l’errore di questa lezione: non salva nulla e non c’è alcun errore ad avvisarti. Falli dire ad alta voce come coppia — «add e poi commit» — proprio come dicevano «il primo elemento è l’elemento zero» in Python Basic.'}
      ]},
      {t:'🔑 L2 — Utenti, registrazione e accesso', cards:[
        {type:'text', h:'Cosa costruisce la lezione', b:'Scarica il progetto aggiornato dal suo <strong>branch</strong>, aggiunge una seconda tabella per gli utenti, aggiunge i campi di utente e password a <code>login.html</code>, salva chi si registra e poi verifica un accesso confrontandolo con il database. Ogni passaggio consolida qualcosa di L1: questa lezione è di proposito una ripetizione delle stesse competenze su contenuti nuovi.'},
        {type:'code', lbl:'la tabella User', code:`<span class="ck">class</span> <span class="ct2">User</span>(db.<span class="ct2">Model</span>):
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>, autoincrement=<span class="ck">True</span>)
    email    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    password = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">30</span>), nullable=<span class="ck">False</span>)`},
        {type:'code', lbl:'la verifica dell’accesso — un ciclo sulla tabella', code:`users_db = <span class="ct2">User</span>.query.<span class="cf">all</span>()

<span class="ck">for</span> user <span class="ck">in</span> users_db:
    <span class="ck">if</span> form_login == user.email <span class="ck">and</span> form_password == user.password:
        session[<span class="cs">'user_email'</span>] = user.email   <span class="cc"># ricorda chi ha fatto l'accesso</span>
        <span class="ck">return</span> <span class="cf">redirect</span>(<span class="cs">'/index'</span>)

<span class="cc"># nessuna corrispondenza nella tabella → mostra un errore</span>
error = <span class="cs">'Nome utente o password non corretti'</span>
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'login.html'</span>, error=error)`},
        {type:'text', h:'È la sessione a rendere personale il diario', b:'Una volta impostato <code>session[\'user_email\']</code>, la rotta iniziale può filtrare le voci di quella persona: <code>Card.query.filter_by(user_email=email).all()</code>. Questo richiede che <code>app.secret_key</code> sia definita e che la tabella <code>Card</code> abbia acquisito una colonna <code>user_email</code>. Fai notare la differenza fra <code>.all()</code> e <code>.filter_by(...).all()</code>: è tutta l’idea di «i miei dati» in una riga.'},
        {type:'warn', txt:'Di’ ad alta voce l’avvertimento sulla sicurezza, in una frase: <strong>le applicazioni vere non salvano mai la password in sé</strong>, salvano un’impronta cifrata chiamata hash, così nemmeno chi sviluppa può leggerla. Oggi lo saltiamo per tenere visibile il ciclo di confronto. Dieci secondi di onestà evitano un’abitudine davvero pessima, e chi è a questo livello incontrerà presto l’hashing.'},
        {type:'tip', txt:'La <code>secret_key</code> nel codice della lezione è un segnaposto di un progetto didattico. Di’ loro che in un’app vera pubblicata la chiave segreta è segreta — non finisce su GitHub — per lo stesso motivo del token di un bot. Questo si collega direttamente al Modulo 1.'},
        {type:'warn', txt:'Aggiungere la classe <code>User</code> fa sì che il vecchio file <code>.db</code> non abbia quella tabella. La soluzione insegnata qui è diretta: <strong>cancellare il vecchio file del database e crearne uno nuovo dal terminale.</strong> Avvisali prima: questo cancella le voci di diario che hanno appena scritto.'}
      ]},
      {t:'🚀 L3 — Deploy su PythonAnywhere (EduScrum)', cards:[
        {type:'text', h:'Cosa significa fare il deploy per questi studenti', b:'Finora la loro app ha funzionato solo sulla propria macchina. <strong>PythonAnywhere</strong> la mette su internet con un URL vero. Presenta il pannello, aiuta tutti a registrarsi e poi percorri il deploy: caricare e scompattare i file, installare le librerie, creare un’applicazione web che punta a <code>main.py</code>, sostituire il codice remoto con il proprio, modificare il <strong>file di configurazione WSGI</strong> nella pagina Web, aggiungere il codice che crea il database e ricaricare l’applicazione.'},
        {type:'tip', txt:'Il file WSGI è il passaggio che rompe i deploy in silenzio: gli studenti lo saltano perché non fa parte del codice del loro progetto. Di’ cos’è: il file che il server legge per trovare la tua applicazione. Fatti mostrare da tutti la loro modifica del WSGI prima che premano ricarica, e tieni aperte le pagine dei registri di errore del server e dell’applicazione, perché è lì che sta la diagnosi.'},
        {type:'text', h:'Il secondo sprint: test e pubblico di riferimento', b:'Dopo il deploy, gli studenti <strong>testano l’app pubblicata e la confrontano con la versione locale</strong>, un’abitudine davvero utile, perché «sulla mia macchina funziona» è il guasto più antico del software. Poi torna la discussione sul pubblico di riferimento, ora orientata al portfolio che costruiranno nella lezione successiva: qual è l’obiettivo del tuo progetto e per chi è? Scrivono le risposte nel diario che hanno costruito.'},
        {type:'good', txt:'È un momento soddisfacente che vale la pena nominare ad alta voce. Chiunque può ormai mandare un link a un amico o alla famiglia e vederli usare quello che ha costruito. Chiedi loro di farlo: un pubblico fuori dall’aula è la motivazione più forte di cui disponi.'}
      ]},
      {t:'💼 L4 — Il sito portfolio e il traguardo di metà corso', cards:[
        {type:'text', h:'Tre sprint, una consegna', b:'<strong>Sprint 1 — materiali:</strong> scaricare il template e usare il diario per annotare cosa serve, scegliendo palette di colori, immagini e testi. <strong>Sprint 2 — sviluppo:</strong> inserire i materiali nel sito, costruire una vetrina dinamica dei progetti con Jinja e gestire un modulo di contatto. <strong>Sprint 3 — test e open source:</strong> testarlo e pubblicarlo in un repository pubblico. Retrospettiva dopo ciascuno.'},
        {type:'hi', h:'Questa lezione ripassa tutto il percorso web', b:'Non si introduce niente di nuovo. Il portfolio richiede elementi dinamici di Jinja, creazione e gestione di moduli, decisioni su colori e disposizione e una pubblicazione con Git, che è esattamente l’obiettivo. Se qualcuno riesce a costruirlo senza aiuto, la metà web del corso è entrata. Se non ci riesce, ora sai esattamente a quale lezione tornare.'},
        {type:'text', h:'Fine del Tema 2 — il traguardo del 50%', b:'Il Modulo 4 del corso chiude il tema Flask e la metà di Python Pro. Dillo come si deve: sono al <strong>50% di un corso avanzato</strong>, cosa che pochissimi portano a termine. Poi collega in avanti: chiedi cosa vorrebbero fare con queste competenze e lasciali rispondere. Il compito valutato è rifinire il portfolio, e vale fino a 50 punti tramite lo strumento di valutazione.'},
        {type:'tip', txt:'Il portfolio ha una vita oltre il corso. Incoraggiali a tenerlo aggiornato con ogni progetto successivo: il bot con IA del Modulo 7, il progetto finale del Modulo 10. Un sito portfolio che cresce vale per loro più di qualsiasi attestato.'}
      ]}
    ],
    quiz:[
      {q:'Qual è l’idea centrale del metodo LiveCoding usato in M4L1?', opts:['Il tutor costruisce il codice gradualmente con gli studenti perché vedano il programmare come un processo di decisioni, non come un risultato finito','Il tutor programma in silenzio e gli studenti copiano dallo schermo','Gli studenti programmano da soli mentre il tutor osserva','Il tutor mostra il codice finito e lo spiega dopo'], c:0, fb:'LiveCoding significa scrivere il codice insieme, raccontando le decisioni, facendo pause e persino sbagliando di proposito perché li trovino loro.'},
      {q:'Uno studente ha scritto Card(...) e db.session.add(card) ma nel database non compare nulla. Cosa manca?', opts:['db.session.commit() — add prepara la modifica, commit la salva','Una primary_key nella tabella','Un render_template dopo il salvataggio','Riavviare il server Flask'], c:0, fb:'add() e poi commit() sono una coppia. Senza il commit il record non viene mai scritto, e non compare alcun errore ad avvisarti.'},
      {q:'Perché il corso insegna le classi DOPO che gli studenti hanno costruito la tabella del database?', opts:['Perché a quel punto hanno una domanda vera — «perché abbiamo scritto class?» — e Flask stesso è una classe che usano dall’inizio','Perché le classi sono troppo difficili da introdurre a inizio lezione','Perché SQLAlchemy lo richiede in quell’ordine','Per risparmiare tempo nel piano di lezione'], c:0, fb:'Prima la tabella e poi la teoria che risponde alla domanda che ha creato, e l’esempio più forte è che Flask è a sua volta una classe con i suoi metodi.'},
      {q:'Cosa fa sì che il diario mostri solo le voci della persona che ha fatto l’accesso?', opts:['La sua email viene salvata in session al momento dell’accesso, e la rotta iniziale usa Card.query.filter_by(user_email=email).all()','Ogni utente ha un proprio file di database','La tabella Card viene cancellata fra un accesso e l’altro','Jinja filtra le voci nel template'], c:0, fb:'session[\'user_email\'] più filter_by è tutto il meccanismo, e richiede che app.secret_key sia impostata perché le sessioni funzionino.'},
      {q:'Il progetto di M4L2 salva le password in chiaro. Cosa dovresti dire agli studenti?', opts:['Dire in una frase che le app vere salvano un hash invece della password, e che questa è una semplificazione voluta per tenere visibile la logica','Niente — a questo livello li confonderebbe','Che il testo in chiaro va bene finché il file del database è locale','Che non devono più costruire un modulo di accesso'], c:0, fb:'Un avvertimento breve e onesto costa dieci secondi ed evita un’abitudine davvero pessima. La semplificazione va bene; non menzionarla no.'},
      {q:'Dopo aver aggiunto la classe User, gli studenti ottengono «no such table». Qual è la soluzione insegnata da questa lezione?', opts:['Cancellare il vecchio file .db e crearne uno nuovo dal terminale, avvisando prima che questo cancella le voci esistenti','Rinominare la classe User perché corrisponda al file','Reinstallare flask_sqlalchemy','Aggiungere nullable=True a ogni colonna'], c:0, fb:'Il vecchio file di database è stato creato prima che la classe esistesse. M4L2 fa cancellare e ricreare, quindi avvisa della perdita di dati.'},
      {q:'Quale passaggio di PythonAnywhere saltano più spesso gli studenti e a cosa serve?', opts:['Modificare il file di configurazione WSGI — è ciò che il server legge per trovare la tua applicazione','Scegliere un nome utente — diventa l’URL','Installare Python — PythonAnywhere richiede che venga caricato','Impostare debug=True sul server'], c:0, fb:'Il file WSGI non fa parte del codice del loro progetto, quindi viene dimenticato. Senza, i deploy falliscono in silenzio, ed è per questo che contano i registri degli errori.'},
      {q:'Perché M4L3 fa testare agli studenti l’app pubblicata rispetto alla versione locale?', opts:['Perché il comportamento può differire fra locale e produzione — «sulla mia macchina funziona» è un guasto reale','Per verificare la velocità della connessione','Perché PythonAnywhere richiede un test prima della pubblicazione','Per confrontare i tempi di caricamento nel rapporto'], c:0, fb:'Confrontare l’app pubblicata con quella locale è un’abitudine ingegneristica autentica, ed è la prima volta nel corso che gli studenti hanno due ambienti da confrontare.'},
      {q:'Qual è lo scopo del sito portfolio in M4L4?', opts:['Ripassa tutto il percorso web — Jinja, moduli, disposizione e Git — così vedi esattamente cosa è entrato e cosa no','Introdurre disposizioni avanzate in CSS','Sostituire il progetto finale','Esercitarsi sul deploy una seconda volta'], c:0, fb:'Non si insegna nulla di nuovo. Il portfolio richiede Jinja dinamico, gestione di moduli, decisioni di design e pubblicazione: diagnosi e consegna insieme.'}
    ]
  },
  {
    id:9, emoji:'📊', color:'#2BB3E8',
    title:'M5 — Dati, scraping, NLP e visione artificiale',
    desc:'Modulo 5 del corso: miti sull’IA, Google Colab, le immagini come pixel, rembg e OpenCV, scraping con BeautifulSoup e pandas, NLP con NLTK e addestrare un classificatore in Teachable Machine.',
    obj:'Insegnare le fondamenta sui dati del blocco IA. Devi saper condurre l’attività di ricerca sui miti, muoverti con disinvoltura in Google Colab, spiegare le immagini come dati di pixel, insegnare i limiti legali ed etici dello scraping, spiegare cos’è una pipeline e il ruolo di NLTK al suo interno, e condurre una gara di addestramento in Teachable Machine.',
    prep:'~5 ore. Tutto in Colab: esegui tu stesso ogni cella.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 5 del corso, devi aver fatto di persona:',
      items:[
        'Preparato un notebook Colab con celle di codice e markdown, e caricato immagini nella sessione',
        'Rimosso lo sfondo di un’immagine con <code>rembg</code> e composto uno sfondo nuovo con OpenCV',
        'Scritto del testo su un’immagine con OpenCV',
        'Aperto gli strumenti per sviluppatori del browser e individuato il tag e la classe che contengono un pezzo di contenuto della pagina',
        'Fatto scraping di una pagina con <code>BeautifulSoup</code> e poi trasformato il tutto in un crawler su più sezioni',
        'Costruito un <code>DataFrame</code> di pandas e salvato con <code>to_csv</code> — e conservato il file',
        'Eseguito il riassuntore NLTK dall’inizio alla fine, comprese <code>stopwords</code> e <code>FreqDist</code>',
        'Addestrato un classificatore in Teachable Machine e provato con un’immagine mai vista prima',
        'Addestrato di proposito un modello scadente e visto come sbaglia con grande sicurezza'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> cos’è l’IA (per ricerca, non per spiegazione frontale), Google Colab e sostituire lo sfondo di un’immagine; <strong>L2</strong> scraping, parsing e crawling con <strong>BeautifulSoup</strong> e <strong>pandas</strong>; <strong>L3</strong> NLP con <strong>NLTK</strong>, comprensioni di lista e un riassuntore di testi; <strong>L4</strong> visione artificiale, dataset e addestrare un classificatore in <strong>Google Teachable Machine</strong>.',
          why:'Tutto ciò che c’è nei moduli 6 e 7 del corso poggia su questo. L’IA è prima di tutto dati, e chi non capisce cos’è un dataset addestrerà un modello inutile e darà la colpa al codice.',
          learn:'Gli studenti indagano i miti sull’IA e difendono le proprie risposte, preparano notebook Colab, ritagliano uno sfondo con <code>rembg</code> e ne compongono un altro con OpenCV, raccolgono centinaia di notizie in un CSV, scrivono una funzione che riassume un articolo e addestrano e testano il proprio classificatore di immagini.',
          confident:'Che l’IA moderna è <em>debole</em>; le celle di Colab e la sessione temporanea; le immagini come matrici di pixel; scraping, parsing e crawling <strong>e le regole</strong>; <code>find</code>/<code>find_all</code> più un DataFrame di pandas; tokenizzazione contro lemmatizzazione; e perché la qualità del dataset decide la qualità del modello.'
        }
      ]},
      {t:'🔬 L1 — Miti sull’IA, Colab e sfondi delle immagini', cards:[
        {type:'text', h:'Insegna la teoria come un’indagine', b:'Non fare una lezione frontale. Dividi gli studenti in stanze separate da due a quattro persone e dai loro <strong>dieci minuti</strong> con una serie di affermazioni sull’IA. Il loro compito non è solo dire quali sono miti, ma <strong>giustificare la risposta con delle prove</strong>. Va bene qualsiasi fonte; l’ideale è che usino i motori di ricerca da soli. Se un gruppo non si organizza, assegna una persona per ogni affermazione.'},
        {type:'qa', h:'I miti e i fatti, con le risposte', items:[
          {k:'«L’IA può sostituire le persone in tutte le professioni».', v:'<strong>Mito.</strong> L’IA può sostituire le persone in molti campi, ma non del tutto: le mancano empatia, pensiero creativo e intuito.'},
          {k:'«L’IA moderna è intelligenza forte».', v:'<strong>Mito.</strong> Ci sono tre livelli — debole, forte e superintelligenza — e l’IA di oggi è classificata come <strong>debole</strong>, perché non può pensare né essere consapevole di sé.'},
          {k:'«L’IA non sa spiegare le sue decisioni».', v:'<strong>Vero, per ora.</strong> L’IA spiegabile è un’area di ricerca attiva, ma i modelli attuali decidono per lo più in modalità «scatola nera».'},
          {k:'«Servono dati, un algoritmo e risorse di calcolo».', v:'<strong>Vero.</strong> Dati da cui imparare, un algoritmo con cui addestrare e una macchina abbastanza potente, di solito risorse in cloud per addestrare da zero.'}
        ]},
        {type:'text', h:'Google Colab, in dieci minuti', b:'Gli studenti accedono con un account Google, creano un notebook <code>.ipynb</code> sul proprio Drive ed eseguono <strong>due o tre celle di codice e una markdown</strong>. Assicurati che tutti sappiano creare una cella ed eseguirla: è tutto il criterio di successo. Poi insegna a caricare immagini nella sessione corrente e, a fine lezione, a <strong>condividere</strong> un notebook con permesso di lettura o modifica.'},
        {type:'warn', txt:'Ciò che coglierà ogni classe: <strong>le sessioni di Colab sono temporanee.</strong> I file caricati spariscono al riavvio della sessione, e <em>tutte le celle vanno eseguite, in ordine,</em> perché quelle successive funzionino. Dillo all’inizio e mettili in conto di doverlo ripetere. Per i gruppi più forti, mostra come montare Google Drive.'},
        {type:'text', h:'Le immagini sono numeri', b:'Prima di toccare qualsiasi libreria, spiega come viene salvata un’immagine: una griglia di <strong>pixel</strong>, ognuno con i suoi valori di colore. Questa impostazione è ciò che dà senso al resto del modulo: riempire uno sfondo è aritmetica su quei valori, e un classificatore è una funzione su di essi. La buona domanda diagnostica usata dalla lezione: quanti pixel ci sono in un’immagine 6×6, e di che colore è un’immagine i cui valori di pixel sono tutti a 500?'},
        {type:'code', lbl:'ritagliare lo sfondo con rembg', code:`<span class="cc"># in Colab, ! esegue un comando del sistema operativo</span>
<span class="cc"># !pip install rembg</span>
<span class="cc"># !pip install onnxruntime   ← rembg ha bisogno anche di questo</span>

<span class="ck">from</span> rembg <span class="ck">import</span> remove

input_path  = <span class="cs">'photo.png'</span>      <span class="cc"># deve essere il percorso vero dell'immagine</span>
output_path = <span class="cs">'output.png'</span>

<span class="ck">with</span> <span class="cf">open</span>(input_path, <span class="cs">'rb'</span>) <span class="ck">as</span> i:
    <span class="ck">with</span> <span class="cf">open</span>(output_path, <span class="cs">'wb'</span>) <span class="ck">as</span> o:
        o.<span class="cf">write</span>(<span class="cf">remove</span>(i.<span class="cf">read</span>()))`},
        {type:'code', lbl:'comporre il nuovo sfondo con OpenCV', code:`<span class="ck">import</span> cv2

image  = cv2.<span class="cf">imread</span>(<span class="cs">'output.png'</span>, cv2.IMREAD_UNCHANGED)
back   = cv2.<span class="cf">imread</span>(<span class="cs">'/content/background.jpg'</span>)

result = <span class="cf">change_back</span>(back, image)   <span class="cc"># la funzione che analizzano gli studenti</span>
cv2.<span class="cf">imwrite</span>(<span class="cs">"result.png"</span>, result)`},
        {type:'tip', txt:'Fai trovare loro il frammento che rimuove lo sfondo <strong>nella documentazione di rembg</strong> invece di darglielo, e poi insisti sull’unica riga che sbagliano sempre: il percorso vero della propria immagine. Il compito a casa lo amplia con il testo di OpenCV così l’immagine diventa un meme; vale fino a 20 punti, valutando se la scritta è ben posizionata sull’immagine.'}
      ]},
      {t:'🕸️ L2 — Scraping, parsing e crawling', cards:[
        {type:'text', h:'Perché raccogliamo dati', b:'Apri con il valore dei dati. Internet è pieno di dataset, ma la maggior parte è vaga o incompleta, e i buoni dati di addestramento sono rari e costosi. Quindi per addestrare la nostra IA <strong>dobbiamo preparare i dati noi</strong>, ed è ciò che fa questa lezione, finendo con 600 voci di notizie in un solo file.'},
        {type:'qa', h:'I tre termini, distinti', items:[
          {k:'Crawling', v:'Percorrere automaticamente molti siti, andando di pagina in pagina e raccogliendo tutto ciò che è rilevante. Il più ampio dei tre, e avviene <strong>per primo</strong>.'},
          {k:'Scraping', v:'Estrarre automaticamente informazioni da una pagina web — testo, immagini, prezzi — leggendone l’HTML.'},
          {k:'Parsing', v:'Analizzare la struttura dei dati per tirarne fuori informazioni precise: esaminare gli elementi HTML, usare selettori CSS o XPath per estrarre esattamente ciò che vuoi.'}
        ]},
        {type:'warn', txt:'Insegna i limiti come parte della competenza, non come nota legale. <strong>Diritto d’autore</strong>: non usare né ridistribuire dati protetti senza permesso. <strong>Termini d’uso e informativa sulla privacy</strong>: i siti specificano come si può accedere ai loro dati. <strong>robots.txt</strong>: indica quali parti di un sito si possono esplorare; controllalo e rispettalo. <strong>Norme sulla concorrenza sleale</strong> in alcune giurisdizioni. <strong>Normativa sui dati personali</strong>: nomi, email e numeri di telefono ricadono sotto regole come il <strong>GDPR</strong>. Apri il robots.txt del sito di esercitazione con la classe e leggete insieme quali sezioni sono escluse.'},
        {type:'text', h:'Come funziona la parte pratica', b:'Mostra gli strumenti per sviluppatori del browser — <code>Shift+Ctrl+I</code> su Windows, <code>Option+Cmd+I</code> su Mac — e poni l’enigma: quale tag contiene il titolo della notizia e a quale classe appartiene? È questa la competenza vera. Poi ampliano il notebook dimostrativo per raccogliere non solo titoli e link ma anche date di pubblicazione e numero di visualizzazioni, trovando quei tag da soli.'},
        {type:'code', lbl:'da una pagina a un crawler su cinque sezioni', code:`dict_news = {<span class="cs">"news"</span>: [], <span class="cs">"links"</span>: [], <span class="cs">"views"</span>: [], <span class="cs">"comments"</span>: []}

url   = <span class="cs">'https://www.thescientificteen.org/'</span>
pages = [<span class="cs">"technology"</span>, <span class="cs">"medicine"</span>, <span class="cs">"chemistry"</span>, <span class="cs">"physics"</span>]

<span class="ck">for</span> section <span class="ck">in</span> pages:
    response = requests.<span class="cf">get</span>(url + section + <span class="cs">"/"</span>)
    bs = <span class="ct2">BeautifulSoup</span>(response.text, <span class="cs">"lxml"</span>)
    <span class="ck">for</span> post <span class="ck">in</span> bs.<span class="cf">find_all</span>(<span class="cs">'div'</span>, <span class="cs">'post-list-item-wrapper'</span>):
        dict_news[<span class="cs">"news"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'p'</span>).text)
        dict_news[<span class="cs">"links"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'a'</span>).<span class="cf">get</span>(<span class="cs">'href'</span>))

<span class="cc"># un DataFrame è una tabella; to_csv la salva per la lezione successiva</span>
df_news = pd.<span class="ct2">DataFrame</span>(dict_news)
df_news.<span class="cf">to_csv</span>(<span class="cs">"./saved_data.csv"</span>, index=<span class="ck">False</span>)`},
        {type:'hi', h:'Il momento in cui vale la pena fermarsi', b:'Un ciclo trasforma uno scraper di una pagina in un crawler su cinque sezioni e 600 articoli in meno di un minuto. Dillo ad alta voce: è la prima volta nel corso che una piccola quantità di codice fa una mole di lavoro che nessuna persona proverebbe a mano. Quella sensazione è il motivo per cui il blocco IA inizia qui.'},
        {type:'tip', txt:'Assicurati che tutti salvino il CSV, e conservane una copia anche tu: la <strong>lezione successiva dipende da quello</strong>, e il piano ti dice di condividerlo in chat per chi lo avesse perso. Il compito a casa è un’analisi con pandas su un CSV fornito — <code>.min()</code>, <code>.max()</code>, filtri, <code>.sum()</code> — che li prepara anch’essa alla lezione successiva.'}
      ]},
      {t:'📝 L3 — NLP, pipeline e il riassuntore', cards:[
        {type:'text', h:'Prima le comprensioni di lista, come strumento di Python', b:'Un breve riscaldamento: in Python è comune comprimere più righe in una. Dai loro le due versioni dello stesso codice e fai spiegare a <em>loro</em> la differenza: la comprensione <code>[word.lower() for word in words if word.isalpha()]</code> contro il classico ciclo <code>for</code> con <code>append()</code>. Sii onesto sul compromesso: la comprensione è compatta ed elegante, il ciclo è più leggibile e dà un controllo più fine. Quale scegliere dipende dalla situazione.'},
        {type:'text', h:'Cos’è una pipeline', b:'Una sequenza di passaggi di elaborazione in cui l’uscita di ciascuno alimenta il successivo. Percorri l’algoritmo di riassunto come discussione prima di scrivere codice: dividere in frasi → dividere in parole → togliere le <strong>stop words</strong> → ridurre ogni parola alla forma base → contare le frequenze → dare un punteggio a ogni frase in base alla frequenza delle sue parole → tenere le migliori → rimetterle insieme nel loro ordine originale.'},
        {type:'code', lbl:'il riassuntore, come funzione riutilizzabile', code:`<span class="ck">def</span> <span class="cf">summarization</span>(text, sent_number=<span class="cn">3</span>):
    sentences  = <span class="cf">sent_tokenize</span>(text, language=<span class="cs">'english'</span>)
    stop_words = <span class="cf">set</span>(stopwords.<span class="cf">words</span>(<span class="cs">'english'</span>))

    words = <span class="cf">word_tokenize</span>(text)
    words = [w.<span class="cf">lower</span>() <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w.<span class="cf">isalpha</span>()]
    words = [w <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w <span class="ck">not</span> <span class="ck">in</span> stop_words]

    freq_dist = <span class="ct2">FreqDist</span>(words)          <span class="cc"># quanto spesso compare ogni parola</span>

    sentence_scores = {}
    <span class="ck">for</span> i, sentence <span class="ck">in</span> <span class="cf">enumerate</span>(sentences):
        sentence_words = <span class="cf">word_tokenize</span>(sentence.<span class="cf">lower</span>())
        sentence_scores[i] = <span class="cf">sum</span>([freq_dist[w] <span class="ck">for</span> w <span class="ck">in</span> sentence_words
                                  <span class="ck">if</span> w <span class="ck">in</span> freq_dist])

    <span class="cc"># le frasi con il punteggio più alto, rimesse nell'ordine di lettura</span>
    best = <span class="cf">sorted</span>(sentence_scores.<span class="cf">items</span>(), key=<span class="ck">lambda</span> x: x[<span class="cn">1</span>], reverse=<span class="ck">True</span>)
    best = <span class="cf">sorted</span>(best[:sent_number])

    <span class="ck">return</span> <span class="cs">' '</span>.<span class="cf">join</span>([sentences[i] <span class="ck">for</span> i, _ <span class="ck">in</span> best])`},
        {type:'hi', h:'Conduci l’esplorazione di NLTK come una gara', b:'Invece di elencare le funzioni, manda gli studenti in stanze separate da due o tre con il notebook di esempio e dai <strong>cinque minuti per trovare tutte le funzioni NLTK che riescono</strong>, aiutandosi fra loro. Poi riuniteli e mettete in comune ciò che hanno trovato. Le funzioni si imparano; l’ascolto passivo non avviene.'},
        {type:'text', h:'E poi si passa alla scala', b:'Il senso di avvolgere l’algoritmo in una funzione è ciò che viene dopo: percorrono i link raccolti in L2 e riassumono <strong>dieci articoli veri</strong>. I loro dati raccolti, la loro funzione, che gira da sola: è la pipeline completa, e vale la pena chiamarla così.'},
        {type:'tip', txt:'La distinzione che gli studenti confondono è <strong>tokenizzazione contro lemmatizzazione</strong>. La tokenizzazione spezza il testo in pezzi (frasi o parole). La lemmatizzazione riduce una parola alla forma base, così «corre» e «correva» contano come una sola. Sono entrambe nella pipeline con compiti diversi, ed è una delle domande di ripasso della chiusura.'}
      ]},
      {t:'👁️ L4 — Visione artificiale e il classificatore', cards:[
        {type:'text', h:'Il problema, e perché è buono', b:'Dare da mangiare agli uccelli: ogni specie ha bisogno di cibo diverso — il pane fa male alle anatre, i semi vanno bene per i passeri. Quindi un’app che riconosce un uccello e dice cosa dargli ha un pubblico davvero ampio. Concreto, innocuo, e richiede esattamente una capacità di IA: la <strong>classificazione</strong>.'},
        {type:'hi', h:'Teoria come gioco — tris', b:'Dividi in squadra X e squadra O. Tu fai una domanda; va bene qualsiasi fonte — piattaforma, internet, appunti; lo <strong>stesso studente non può rispondere due volte di fila</strong>; una risposta corretta conquista una casella. Se la risposta è sbagliata, passa agli altri. Correggi esplicitamente le risposte errate, perché tutta la classe deve sentire quella giusta.'},
        {type:'qa', h:'Le domande e le risposte', items:[
          {k:'Cos’è la visione artificiale?', v:'Un ramo dell’IA in cui si addestra un computer a distinguere oggetti in un’immagine.'},
          {k:'Cos’è la classificazione?', v:'Ordinare oggetti in classi: gatti/cani/scoiattoli, meme divertenti/meme imbarazzanti.'},
          {k:'Cosa può essere il modello?', v:'Una rete neurale.'},
          {k:'Cosa serve oltre al modello?', v:'Un dataset.'},
          {k:'Cosa mostri alla rete durante l’addestramento?', v:'Un’immagine <em>e la sua classe</em>.'},
          {k:'La qualità del dataset conta?', v:'Sì: decide la qualità del modello. Si migliora aggiungendo dati più numerosi e più vari.'}
        ]},
        {type:'text', h:'Preparare bene il dataset', b:'Gli studenti esplorano il dataset fornito — quali classi ci sono, quante immagini di addestramento per classe — poi lo scaricano e aggiungono due o tre immagini proprie per classe. Sottolinea che <strong>la qualità degli oggetti nel campione di addestramento conta</strong>. Poi ciascuno cerca <strong>un’immagine di prova</strong>, ed ecco la regola che deve entrare: l’immagine di prova dev’essere una che il modello <strong>non ha mai visto</strong>. Altrimenti il modello sta solo copiando.'},
        {type:'text', h:'L’addestramento e la gara', b:'Mostra la configurazione di Teachable Machine, addestra il classificatore, carica un’immagine di prova e leggi la risposta. Poi lasciali esplorare i <strong>parametri di addestramento</strong> e assicurati che sappiano <strong>salvare il progetto</strong>, perché il Modulo 6 ha bisogno del modello esportato. Infine una gara vera: sette minuti per rendere il proprio modello il più accurato possibile, con qualsiasi mezzo. Tu mandi un’immagine; vince il modello più accurato, e chi vince spiega come lo ha addestrato.'},
        {type:'good', txt:'La spiegazione di chi vince è il minuto più prezioso della lezione. Quasi sempre dirà «ho aggiunto più immagini» o «ho aggiunto più varietà», che è tutta l’idea della lezione, raggiunta per esperimento e non per affermazione. Lascia che sia quella persona a insegnarla.'},
        {type:'tip', txt:'Il compito a casa aggiunge un’altra classe al modello — una specie di uccello che vive vicino allo studente — il che prepara di nascosto il modello che importeranno nel codice nel modulo successivo. I giochi e le gare esistono qui per presentare la teoria in un formato insolito e tenere alto il coinvolgimento; non trattarli come riempitivo opzionale.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente dice «l’IA di oggi è intelligenza forte, sa pensare». Come lo correggi, secondo il materiale del corso?', opts:['L’IA moderna è classificata come debole: non sa pensare né essere consapevole di sé. IA forte e superintelligenza sono gli altri due livelli','Ha ragione: i modelli attuali ragionano come le persone','I tre livelli sono ristretta, ampia e generale, e l’IA è ampia','L’IA non ha livelli; quella classificazione è un mito'], c:0, fb:'L’attività sui miti di M5L1 contiene esattamente quell’affermazione come mito: l’informatica classifica l’IA contemporanea come debole perché le mancano pensiero e autoconsapevolezza.'},
      {q:'Gli studenti tornano su Colab e il loro modello e le immagini sono spariti. Perché?', opts:['Le sessioni di Colab sono temporanee — i file caricati spariscono al riavvio della sessione, e tutte le celle vanno rieseguite in ordine','Colab cancella i file che violano le sue condizioni','Hanno dimenticato di salvare il notebook come .py','Il loro Google Drive era pieno'], c:0, fb:'Questo coglie ogni classe. Avvisali in anticipo; per i più forti, monta Google Drive così i file restano.'},
      {q:'Qual è la relazione corretta fra crawling, scraping e parsing?', opts:['Il crawling viene per primo ed è il più ampio — percorrere molti siti; lo scraping estrae informazioni da una pagina; il parsing analizza la struttura per tirare fuori dati precisi','Prima il parsing, poi il crawling, poi lo scraping','Sono tre nomi per la stessa operazione','Lo scraping è legale mentre crawling e parsing non lo sono'], c:0, fb:'M5L2 mette il crawling per primo e come più ampio, con scraping e parsing come passaggi di estrazione sulle pagine raccolte.'},
      {q:'Prima di fare scraping di un sito con gli studenti, quale file controlli e perché?', opts:['robots.txt — specifica quali parti del sito si possono esplorare e indicizzare, e quelle restrizioni vanno rispettate','index.html — per vedere la struttura della pagina','sitemap.css — per trovare le classi di stile','license.txt — per controllare chi detiene i diritti'], c:0, fb:'robots.txt è una delle cinque regole insegnate in questa lezione, insieme a diritto d’autore, termini d’uso e privacy, concorrenza sleale e normativa sui dati personali come il GDPR.'},
      {q:'Cosa trasforma davvero lo scraper di una pagina in un crawler che raccoglie 600 articoli?', opts:['Un ciclo su una lista di nomi di sezione, che le richiede una a una','Una seconda istanza di BeautifulSoup','Salvare in CSV invece di stampare','Cambiare find con find_all'], c:0, fb:'Un ciclo sulla lista delle sezioni è tutta la modifica, ed è ciò che rende la scala così sorprendente per gli studenti.'},
      {q:'Qual è la differenza fra tokenizzazione e lemmatizzazione?', opts:['La tokenizzazione spezza il testo in frasi o parole; la lemmatizzazione riduce una parola alla forma base così le varianti contano come una sola','Sono lo stesso passaggio con due nomi','La tokenizzazione toglie le stop words; la lemmatizzazione conta le frequenze','La lemmatizzazione spezza il testo; la tokenizzazione lo normalizza'], c:0, fb:'Sono entrambi passaggi della pipeline di riassunto con compiti diversi, e distinguerli è una delle domande di ripasso della chiusura della lezione.'},
      {q:'Come decide il riassuntore quali frasi tenere?', opts:['Dà un punteggio a ogni frase in base alla frequenza delle parole che contiene, tiene quelle con il punteggio più alto e le rimette nell’ordine originale','Tiene le prime tre frasi dell’articolo','Sceglie le frasi più lunghe','Chiede a un modello linguistico di riscrivere il testo'], c:0, fb:'La distribuzione delle frequenze su parole pulite e lemmatizzate dà un punteggio a ogni frase; le migliori vengono rimesse in ordine di lettura perché il riassunto scorra.'},
      {q:'Uno studente vuole provare il classificatore con una delle sue immagini di addestramento. Cosa gli dici?', opts:['L’immagine di prova dev’essere una che il modello non ha mai visto — altrimenti non lo stai testando, gli stai permettendo di copiare','Va bene, visto che le classi sono le stesse','Solo se usa almeno tre immagini','Con i modelli di Teachable Machine non fa differenza'], c:0, fb:'Il campione di prova deve contenere immagini nuove. La lezione lo dice esattamente così: non vogliamo che i nostri modelli copino.'},
      {q:'Il classificatore di uno studente funziona male. Dove dovrebbe guardare per primo?', opts:['Nel dataset — più immagini e più varietà è ciò che migliora il modello','Nel codice che carica l’immagine','Nei parametri di addestramento, l’unica leva vera','Nel browser in cui ha addestrato'], c:0, fb:'La qualità del dataset determina la qualità del modello. È la risposta a cui portano le domande del tris, ed è quella che dà quasi sempre chi vince la gara.'},
      {q:'Perché la lezione M5L4 usa il tris e una gara di addestramento invece di una presentazione?', opts:['Per presentare la teoria in un formato insolito e tenere gli studenti attivamente coinvolti — i giochi sono il metodo con cui si trasmette, non riempitivo','Perché la teoria è troppo scarsa per riempire il tempo','Per decidere quali studenti passano al Modulo 6','Perché la piattaforma richiede un gioco per lezione'], c:0, fb:'La nota della lezione stessa dice che lo scopo dei giochi e della gara è presentare la teoria in modo insolito e coinvolgere gli studenti nel processo educativo.'}
    ]
  },
  {
    id:10, emoji:'🧠', color:'#EC4899',
    title:'M6 — Reti neurali e rilevamento di oggetti',
    desc:'Modulo 6 del corso: esportare un modello nel codice con Keras, generare immagini e la gara IA contro realtà, lettere commerciali, rilevamento e segmentazione con ImageAI/YOLO, e costruire una soluzione scelta da loro.',
    obj:'Insegnare agli studenti a eseguire un modello addestrato da Python e a distinguere i tre compiti della visione artificiale. Devi saper importare un modello di Teachable Machine in Colab, risolvere il conflitto di versioni, condurre con responsabilità la gara di generazione di immagini, spiegare classificazione, rilevamento e segmentazione, usare ImageAI e condurre un brainstorming che finisca in un’idea costruibile.',
    prep:'~5 ore. Metti in conto di scontrarti con le versioni delle librerie: è proprio quello il punto.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 6 del corso, devi aver fatto di persona:',
      items:[
        'Esportato un modello da Teachable Machine, scompattato in Colab e caricato con <code>tf_keras</code>',
        'Incontrato l’errore di versione di <code>DepthwiseConv2D</code> e risolto con le versioni fissate',
        'Scritto una funzione che riceve un’immagine e restituisce un nome di classe e una confidenza',
        'Verificato che il modello forza un’immagine non correlata dentro una delle sue classi note',
        'Generato immagini con dei prompt e messo insieme un dataset di due classi con immagini generate e reali',
        'Eseguito un rilevamento con <code>ImageAI</code>/YOLOv3 e filtrato i risultati per nome dell’oggetto',
        'Confrontato il rilevamento su una foto affollata e su una pulita, per vedere perché lo sfondo conta',
        'Costruito un piccolo script tuo dall’inizio alla fine che usa un modello per risolvere un problema inventato'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> esportare il modello addestrato ed eseguirlo dal codice con <strong>Keras</strong>; <strong>L2</strong> una gara a squadre per addestrare un modello che distingua foto vere da immagini generate dall’IA; <strong>L3</strong> struttura di una lettera commerciale, <strong>rilevamento e segmentazione</strong> con ImageAI/YOLO e un brainstorming; <strong>L4</strong> una lezione EduScrum in cui gli studenti costruiscono la propria soluzione a un problema che hanno scelto.',
          why:'Un modello che vive solo in una scheda del browser non è software. Qui l’IA degli studenti diventa un programma, ed è qui che incontrano la differenza fra una dimostrazione e una capacità consegnabile.',
          learn:'Gli studenti esportano un modello <code>.h5</code>, lo caricano con <code>tf_keras</code>, scrivono una funzione che restituisce classe e confidenza, generano immagini con dei prompt, mettono insieme un dataset condiviso, rilevano gli utenti della strada in una foto con YOLO e costruiscono uno script che automatizza un problema quotidiano scelto da loro.',
          confident:'Esportare e scompattare il modello; le versioni fissate delle librerie e l’errore <code>DepthwiseConv2D</code>; che un modello riconosce solo le classi che gli sono state mostrate; classificazione, rilevamento e segmentazione; l’ingegneria dei prompt; e le regole del brainstorming.'
        }
      ]},
      {t:'⚙️ L1 — Eseguire il modello dal codice (Keras)', cards:[
        {type:'text', h:'Di nuovo Usa–Modifica–Crea', b:'Questa lezione funziona con <strong>UMC</strong>: gli studenti prima <em>usano</em> il codice che Teachable Machine fornisce e verificano che funzioni, poi implementano la propria logica sopra. Mostra come esportare il modello, aggiungere il progetto scaricato alla sessione di Colab e scompattarlo con <code>!unzip ./converted_keras.zip</code>. Per un gruppo forte, collega invece Google Drive.'},
        {type:'code', lbl:'le versioni fissate e gli import che funzionano davvero', code:`<span class="cc"># fissa le versioni — non risolvere questo in diretta, incolla e basta</span>
<span class="cc"># !pip install -q tf-keras==2.19.0 h5py==3.11.0</span>

<span class="ck">import</span> tf_keras <span class="ck">as</span> keras       <span class="cc"># versione di Keras compatibile con i modelli .h5</span>
<span class="ck">from</span> tf_keras.models <span class="ck">import</span> load_model
<span class="ck">from</span> PIL <span class="ck">import</span> Image, ImageOps  <span class="cc"># Pillow, installato al posto di PIL</span>
<span class="ck">import</span> numpy <span class="ck">as</span> np

<span class="cc"># clic destro sul modello in Colab → Copia percorso, e incollalo qui</span>
model = <span class="cf">load_model</span>(<span class="cs">"PATH_TO_MODEL"</span>, compile=<span class="ck">False</span>)`},
        {type:'text', h:'Cosa dire su Keras', b:'Keras fa parte di <strong>TensorFlow</strong>; nelle versioni moderne è disponibile come <code>tf.keras</code>. Poiché il modello esportato è salvato in formato <code>.h5</code>, il corso usa <code>tf-keras</code>, la versione compatibile con <code>.h5</code>; per il resto è la stessa libreria. Chiarisci che la manciata di funzioni che stanno usando è una parte <em>minuscola</em> di una libreria enorme.'},
        {type:'hi', h:'Il gioco «tutti contro uno»', b:'Dopo cinque minuti di esplorazione del codice, uno studente diventa l’<strong>esperto</strong> e risponde alle domande di tutti gli altri. Le domande possono essere facili o difficili, e va bene se chi domanda non conosce a sua volta la risposta. Se l’esperto si blocca, rispondi tu. L’esperto vince se risponde a tutto; altrimenti vince chi ha fatto più domande rimaste senza risposta. Lo scopo vero sta nel piano: <strong>aiuta gli studenti a superare la paura di fare una domanda</strong>. Insisti sul fatto che non esistono domande stupide.'},
        {type:'warn', txt:'Sottolinea questo dopo il gioco: il modello può distinguere <strong>solo</strong> le classi su cui è stato addestrato. Mostragli altro e continuerà a infilare l’input, con grande sicurezza, in una delle sue classi note. È il malinteso più comune degli studenti sull’IA, e qui possono vederlo accadere.'},
        {type:'text', h:'E poi costruiscono la funzionalità vera', b:'Il compito: implementare un pulsante per caricare immagini, usare il codice esportato per scrivere una funzione <code>detect_bird</code> che riceva l’immagine, il percorso del modello e quello delle etichette e restituisca il nome dell’uccello e la probabilità, e fare in modo che lo script risponda a un caricamento suggerendo un cibo adatto. La lezione si chiude con un test.'}
      ]},
      {t:'🎨 L2 — Generato contro reale: la gara sull’IA', cards:[
        {type:'text', h:'Il problema, posto con onestà', b:'I modelli generativi scrivono testi, disegnano immagini realistiche e creano animazioni, e lo stesso potere è a disposizione di chi truffa. I due rischi nominati dalla lezione: le immagini generate possono contenere <strong>contenuti negativi o discriminatori</strong> e possono <strong>somigliare a fotografie reali</strong>, il che diffonde disinformazione. Chiedi agli studenti cosa ne pensano e quali problemi prevedono. Il compito nasce dalla discussione: addestrare un modello che distingua immagini reali da immagini generate.'},
        {type:'warn', txt:'Tieni i prompt su animali, oggetti e personaggi inventati: <strong>mai persone reali e riconoscibili</strong>. Il compito del corso stesso riguarda di proposito i gatti. Prepara le cartelle Google Drive di ogni squadra <em>prima</em> della lezione e, se il generatore chiede un pagamento per immagini di alta qualità, abbassa il parametro di qualità invece di pagare.'},
        {type:'qa', h:'Le regole della gara', items:[
          {k:'Struttura', v:'Tre fasi: 30 minuti di preparazione dei dati, 20 minuti di addestramento del modello, 10 minuti di test.'},
          {k:'Squadre', v:'Le formi tu, da 3 o 4 persone; gli studenti non scelgono. Ogni squadra si dà un nome e sceglie un capitano.'},
          {k:'Dati condivisi, modelli individuali', v:'Tutta la squadra usa lo stesso dataset, ma ognuno addestra il proprio modello.'},
          {k:'Come si vince', v:'Non con il singolo modello migliore, ma con la <strong>squadra dalla media di accuratezza più alta</strong>. È questo che rende razionale aiutare i compagni.'}
        ]},
        {type:'text', h:'Ingegneria dei prompt, in una frase', b:'Una richiesta a un modello generativo è un <strong>prompt</strong>, e l’ingegneria dei prompt è il mestiere di scriverne di buoni: un buon prompt rende chiara la tua intenzione al modello, quindi ottieni una risposta più precisa o un contenuto migliore. Le squadre generano da 8 a 20 immagini per la classe «generata», poi scaricano foto reali in una cartella «reale» separata e caricano entrambe nella cartella condivisa della squadra.'},
        {type:'good', txt:'La regola della «media più alta della squadra» è il dettaglio meglio progettato di questa lezione. Elimina l’incentivo a tenersi per sé una buona tecnica e lo sostituisce con l’incentivo a insegnarla. Se non cambi nient’altro di come conduci questa gara, tieni quella regola.'},
        {type:'tip', txt:'Differenzia nella fase di accesso: mentre aiuti chi non riesce a entrare, dai il compito aggiuntivo a chi va più veloce. Il compito a casa è scrivere uno script che usi il proprio modello per uno scopo inventato da <em>loro</em>, valutato in base a se risponde a entrambe le classi, se gira senza errori e se ha uno scopo chiaro.'}
      ]},
      {t:'🔍 L3 — Rilevamento, segmentazione e la lettera', cards:[
        {type:'text', h:'La cornice ludica', b:'La lezione si apre con una <strong>lettera commerciale</strong> che commissiona un’app per la sicurezza stradale. Se i tuoi studenti stanno al gioco, trattala come una vera email di un cliente; se sono troppo imbarazzati, usala solo per smontarne la struttura. In ogni caso falla leggere e fai individuare i suoi blocchi logici.'},
        {type:'qa', h:'I sei blocchi di una lettera commerciale', items:[
          {k:'1. Oggetto', v:'Una formulazione breve e precisa dello scopo della lettera.'},
          {k:'2. Saluto / introduzione', v:'Un saluto cortese più una breve presentazione, oppure un riferimento alla corrispondenza precedente.'},
          {k:'3. Corpo principale', v:'Il messaggio, l’informazione o la proposta: argomenti, dettagli, accordi.'},
          {k:'4. Chiusura', v:'Una conclusione cortese: ringraziamento per l’attenzione, informazioni aggiuntive o i passi successivi.'},
          {k:'5. Congedo', v:'«Cordiali saluti» o «Distinti saluti», più nome e ruolo di chi firma.'},
          {k:'6. Allegati', v:'Un elenco dei documenti o dei materiali allegati.'}
        ]},
        {type:'text', h:'I tre compiti della visione artificiale', b:'È il nucleo concettuale del modulo. <strong>Classificazione</strong>: a quale classe appartiene l’<em>intera immagine</em>? <strong>Rilevamento</strong>: trovare e localizzare oggetti, segnando ciascuno con un riquadro, anche più di uno alla volta. <strong>Segmentazione</strong>: dividere l’immagine in regioni, capendo <em>quali pixel</em> appartengono a quale oggetto. L’esempio della lezione: la foto di una persona in un bosco. Il rilevamento inquadra la persona; la segmentazione divide l’immagine in pixel-della-persona e pixel-del-bosco.'},
        {type:'code', lbl:'rilevamento con ImageAI e YOLOv3', code:`<span class="ck">def</span> <span class="cf">detect_objects_on_road</span>(input_image, output_image, model_path):
    detector = <span class="ct2">ObjectDetection</span>()
    detector.<span class="cf">setModelTypeAsYOLOv3</span>()
    detector.<span class="cf">setModelPath</span>(model_path)
    detector.<span class="cf">loadModel</span>()

    <span class="ck">return</span> detector.<span class="cf">detectObjectsFromImage</span>(
        input_image=input_image,
        output_image_path=output_image,
        minimum_percentage_probability=<span class="cn">30</span>   <span class="cc"># soglia di confidenza</span>
    )

<span class="ck">def</span> <span class="cf">analyze_objects</span>(detections):
    road = [<span class="cs">"car"</span>, <span class="cs">"motorbike"</span>, <span class="cs">"bicycle"</span>, <span class="cs">"person"</span>,
            <span class="cs">"bus"</span>, <span class="cs">"train"</span>, <span class="cs">"truck"</span>, <span class="cs">"traffic_light"</span>, <span class="cs">"stop_sign"</span>]
    <span class="ck">return</span> [d <span class="ck">for</span> d <span class="ck">in</span> detections <span class="ck">if</span> d[<span class="cs">"name"</span>] <span class="ck">in</span> road]`},
        {type:'hi', h:'Giudica lo strumento, non solo il risultato', b:'Valuta con la classe la qualità del rilevamento e chiedi quali immagini funzionerebbero meglio. La conclusione conta: YOLO funziona meglio quando gli oggetti <strong>si staccano dallo sfondo</strong>. Poi generalizza: quando accetti una commessa di rilevamento, devi pensare a che tipo di input riceverai davvero. Scegliere uno strumento adatto ai dati che hai è giudizio professionale, ed è qui che gli studenti lo incontrano per la prima volta.'},
        {type:'text', h:'Il brainstorming — e le sue regole', b:'Chi sviluppa ha le proprie iniziative, spesso chiamate <strong>pet project</strong>. Due indicazioni: costruisci qualcosa che risolva un problema <em>tuo</em> quotidiano, così è utile anche se non si vende mai; e rendilo utile per un pubblico preciso. Poi fate un brainstorming come si deve su una lavagna condivisa: tutti elencano problemi quotidiani, un post-it per problema, <strong>nessuna critica né valutazione in questa fase</strong>, quantità prima della qualità, timer di cinque minuti. Solo dopo si raggruppano in base a quanto sarebbero difficili da costruire. Ciascuno ne sceglie uno da costruire nella lezione successiva e descrive il suo pubblico di riferimento.'},
        {type:'tip', txt:'Fai la parte di codice come live coding: una persona scrive e le altre seguono. Se hai uno studente forte, dagli la tastiera. Il compito aggiuntivo amplia il rilevatore ritagliando con OpenCV ogni utente della strada individuato.'}
      ]},
      {t:'🛠️ L4 — Costruire la propria soluzione (EduScrum)', cards:[
        {type:'text', h:'Tre sprint, la loro idea', b:'<strong>Sprint 1 — preparazione:</strong> preparare il notebook, preparare i dati, addestrare il modello o istanziare gli oggetti di libreria che servono. <strong>Sprint 2 — sviluppo:</strong> implementare la logica di inferenza e documentare il notebook con commenti e blocchi di testo. <strong>Sprint 3 — test:</strong> testarlo ed elencare i problemi e le idee di miglioramento nella chat della piattaforma. Retrospettiva dopo ogni sprint.'},
        {type:'qa', h:'Le domande di retrospettiva di questa lezione', items:[
          {k:'1', v:'Cosa abbiamo ottenuto? Avete fatto in tempo a fare tutto quello che volevate?'},
          {k:'2', v:'Quale parte dello script è stata la più difficile?'},
          {k:'3', v:'Cosa vi serve per migliorare ciò su cui stavate lavorando?'}
        ]},
        {type:'text', h:'Il tuo lavoro durante lo sprint 1', b:'Assicurati che ciascuno <strong>capisca di quale tecnologia ha bisogno e cosa deve fare per usarla</strong> prima che inizi lo sviluppo. È la prima volta che scelgono il problema da soli, quindi il rischio non è la capacità di programmare: è scegliere qualcosa senza alcuna via d’ingresso. Individualo nello sprint 1, non nello sprint 2.'},
        {type:'tip', txt:'Se si bloccano durante lo sviluppo, mettili insieme nelle stanze separate o affiancali singolarmente. Documentare il notebook con commenti e blocchi di testo non è un ornamento: è l’abitudine su cui poggerà la lezione sul codice pulito del Modulo 9 del corso.'},
        {type:'text', h:'Fine del Tema 3 — la scienza dei dati', b:'Chiudi il tema IA collegandolo a una carriera, e chiedi cosa sanno prima di raccontarglielo. L’impostazione proposta dal corso: chi lavora con la scienza dei dati è un detective dell’informazione nel mondo digitale: raccoglie i dati, li ripulisce perché siano corretti e poi usa strumenti specializzati per trovare schemi e risposte. Poi chiedi a chi attira quell’idea e se si sposa con i loro altri interessi.'}
      ]}
    ],
    quiz:[
      {q:'Il modello esportato di uno studente solleva «Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}». Cosa sta succedendo?', opts:['Un conflitto di versioni fra librerie — il corso fissa tf-keras==2.19.0 e h5py==3.11.0 in Colab, oppure tensorflow==2.15 in un progetto pipenv','Il file del modello è danneggiato e va riaddestrato','L’immagine ha le dimensioni sbagliate','Colab ha esaurito la memoria'], c:0, fb:'È un problema di compatibilità fra versioni. Tieni i comandi di installazione fissati pronti da incollare invece di risolvere versioni davanti alla classe.'},
      {q:'Perché il corso usa tf-keras invece del semplice keras per questi modelli?', opts:['Il modello esportato è salvato in formato .h5, e tf-keras è la versione compatibile con .h5 — per il resto è la stessa libreria','tf-keras è più veloce su Colab','Keras normale non sa classificare immagini','tf-keras è l’unica versione gratuita'], c:0, fb:'Keras fa parte di TensorFlow ed è disponibile come tf.keras; poiché il modello di Teachable Machine è .h5, il corso usa il tf-keras compatibile.'},
      {q:'Uno studente mostra al suo classificatore di uccelli la foto di un’automobile e ottiene «passero» con grande sicurezza. Qual è la spiegazione?', opts:['Il modello conosce solo le classi su cui è stato addestrato, quindi infila qualsiasi input dentro una di esse','Il modello è rotto e va riaddestrato','La risoluzione dell’immagine lo ha confuso','Serviva ImageAI invece di Keras'], c:0, fb:'M6L1 sottolinea esattamente questo dopo il gioco delle domande: il modello non ha mai visto nessun altro oggetto, quindi cerca solo ciò che conosce.'},
      {q:'Qual è lo scopo vero del gioco dell’esperto «tutti contro uno»?', opts:['Aiutare gli studenti a superare la paura di fare una domanda — va bene non conoscere la risposta alla propria domanda','Individuare la persona più forte del gruppo','Verificare chi ha letto la documentazione','Riempire il tempo mentre i modelli si addestrano'], c:0, fb:'La nota della lezione lo dice direttamente: il gioco aiuta gli studenti a superare la paura di fare una domanda, e le domande stupide non esistono.'},
      {q:'Nella gara IA contro realtà, chi vince?', opts:['La squadra con la media di accuratezza più alta fra i suoi modelli — non la persona con il singolo modello migliore','Lo studente il cui modello è più accurato','La squadra che finisce prima di addestrare','La squadra che genera più immagini'], c:0, fb:'La regola è voluta: premiare la media della squadra rende razionale, e non facoltativo, aiutare i compagni.'},
      {q:'Cosa dovresti dire agli studenti sulle immagini che generano per il dataset?', opts:['Di restare su animali, oggetti e personaggi inventati — mai persone reali e riconoscibili, perché i falsi realistici diffondono disinformazione','Va bene qualsiasi soggetto purché le immagini restino nella cartella della squadra','Di generare solo immagini di celebrità, visto che ci sono più riferimenti','Il soggetto della generazione non influisce sul modello, quindi non ha importanza'], c:0, fb:'La lezione è costruita esattamente su quel rischio: le immagini generate che somigliano a foto reali portano a disinformazione e possono contenere contenuti discriminatori.'},
      {q:'Qual è la differenza fra rilevamento e segmentazione?', opts:['Il rilevamento trova e inquadra la posizione degli oggetti; la segmentazione stabilisce quali pixel specifici appartengono a quale oggetto o regione','Il rilevamento è per le foto e la segmentazione per i video','La segmentazione trova un oggetto e il rilevamento molti','Sono lo stesso compito con librerie diverse'], c:0, fb:'La classificazione etichetta l’intera immagine, il rilevamento localizza e inquadra gli oggetti, e la segmentazione divide l’immagine in regioni di pixel per oggetto.'},
      {q:'Dopo aver provato YOLO su diverse immagini, a quale conclusione dovrebbero arrivare gli studenti?', opts:['Funziona meglio quando gli oggetti si staccano dallo sfondo — quindi bisogna pensare a quale input riceverà davvero la tua applicazione','Funziona ugualmente bene su qualsiasi immagine','Rileva solo veicoli','L’accuratezza dipende solo dalla soglia di confidenza'], c:0, fb:'La lezione ti chiede di discutere quali immagini funzionano meglio e poi di generalizzare: scegliere uno strumento adatto al tuo input reale è giudizio professionale.'},
      {q:'Durante la fase di brainstorming, quale regola devi far rispettare?', opts:['Nessuna critica né valutazione delle idee mentre si generano — prima la quantità, la selezione dopo','Si possono annotare solo idee realistiche e costruibili','Ogni studente può proporre una sola idea','Le idee devono essere approvate dal tutor prima di essere aggiunte'], c:0, fb:'La nota sui punti importanti dice di non lasciare che valutino le idee durante la generazione; anche le più assurde si annotano, e il raggruppamento per fattibilità viene dopo.'},
      {q:'Cosa devi verificare durante lo Sprint 1 di M6L4, prima che inizi lo sviluppo?', opts:['Che ciascuno capisca di quale tecnologia ha bisogno e cosa deve fare per usarla','Che ciascuno abbia finito di addestrare il proprio modello','Che il notebook sia completamente commentato','Che tutti abbiano scelto lo stesso problema'], c:0, fb:'È la prima volta che gli studenti scelgono il problema da soli, quindi il rischio vero è scegliere qualcosa senza via d’ingresso. La nota dello sprint 1 chiede esattamente questa verifica.'}
    ]
  },
  {
    id:11, emoji:'🔌', color:'#F59E0B',
    title:'M7 — Integrare l’IA nei loro progetti',
    desc:'Modulo 7 del corso: preparare l’IDE per lavorare con l’IA, un bot Discord che esegue il loro modello di visione, pubblicare da VS Code, trascrizione e traduzione vocale e input vocale nell’app Flask.',
    obj:'Insegnare agli studenti a combinare tutto ciò che hanno costruito. Devi saper preparare un ambiente virtuale per le librerie di IA e risolvere il conflitto di versioni, far sì che un bot accetti immagini allegate ed esegua l’inferenza, pubblicare un progetto da dentro VS Code e scrivere dal vivo uno script di riconoscimento vocale e un pulsante di input vocale.',
    prep:'~5–6 ore. Il modulo più fragile: provalo due volte.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 7 del corso, devi aver fatto di persona:',
      items:[
        'Preparato un ambiente virtuale con le librerie di IA installate e l’interprete giusto selezionato',
        'Fatto in modo che un bot accettasse un’immagine allegata e la salvasse con <code>attachment.save()</code>',
        'Collegato il tuo modello esportato a quel bot perché risponda con una previsione',
        'Pubblicato l’intero progetto da VS Code — dopo aver tolto il token',
        'Scritto un README abbastanza buono da prendere 30 secondo i criteri del corso stesso',
        'Registrato e trascritto la voce con <code>sounddevice</code> e <code>speech_recognition</code>',
        'Incontrato il guasto del microfono occupato e verificato che silenziare Zoom lo risolve',
        'Aggiunto la traduzione allo script di trascrizione',
        'Aggiunto una rotta funzionante di input vocale alla tua app Flask, avvolta in <code>try</code>/<code>except</code>'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> preparare IDE e ambiente, far accettare immagini a un bot e un brainstorming da startup; <strong>L2</strong> caricare il modello nel progetto e implementare l’<strong>inferenza</strong>, poi pubblicare da VS Code; <strong>L3</strong> trascrizione e traduzione vocale con <code>speech_recognition</code>; <strong>L4</strong> aggiungere l’input vocale al loro sito Flask, con <code>try</code>/<code>except</code>.',
          why:'È il modulo della ricompensa. Tutto ciò che viene dai moduli 1–6 converge: il loro bot, il loro sito, il loro modello addestrato, il loro ambiente virtuale. È anche il modulo tecnicamente più fragile del corso, quindi qui la preparazione conta più che altrove.',
          learn:'Gli studenti preparano un ambiente virtuale con librerie di IA, accettano e salvano un allegato di Discord, eseguono il proprio modello su un’immagine caricata e rispondono con il risultato, pubblicano un progetto su GitHub dall’editor, registrano e trascrivono la voce, traducono la trascrizione e aggiungono un pulsante funzionante di input vocale al loro sito del diario.',
          confident:'Preparare l’ambiente e selezionare l’interprete; la soluzione con <code>tensorflow==2.15</code>; <code>ctx.message.attachments</code> e <code>attachment.save()</code>; cosa significa inferenza; pubblicare dall’interfaccia Git di VS Code; il trucco del microfono di Zoom; e <code>try</code>/<code>except</code> attorno a tutto ciò che tocca hardware o rete.'
        }
      ]},
      {t:'🔧 L1 — Preparare l’ambiente e il bot', cards:[
        {type:'warn', txt:'Questa lezione è <strong>tecnica e fragile</strong>: prepara gli studenti in anticipo. Chiedi loro di aprire i vecchi progetti dei bot Discord <em>prima</em> della lezione, di ripassare come funzionano e di lasciarli aperti, perché ci lavoreranno per tutto il tempo. Chi arriva senza il proprio progetto ti costa l’intera prima fase.'},
        {type:'text', h:'La fase dell’ambiente', b:'Ricorda loro come si crea un <strong>ambiente virtuale</strong>: qui non è negoziabile, perché le librerie di IA sono grandi e sensibili alle versioni. Condividi lo schermo o passalo a uno studente forte perché guidi. Poi installa nell’ambiente tutte le librerie che servono al progetto.'},
        {type:'code', lbl:'la soluzione al conflitto di versioni — tienila pronta da incollare', code:`<span class="cc"># Se vedi:</span>
<span class="cc">#   Exception encountered: Unrecognized keyword arguments</span>
<span class="cc">#   passed to DepthwiseConv2D: {'groups': 1}</span>
<span class="cc"># è un problema di compatibilità fra versioni, non del tuo codice.</span>

pipenv uninstall tensorflow
pipenv install tensorflow==2.15   <span class="cc"># compatibile con Python 3.11</span>`},
        {type:'tip', txt:'Due piani di riserva che salvano la lezione. Se l’installazione va per le lunghe o fallisce, usa il <strong>Pipfile del repository con la soluzione</strong> per preparare l’ambiente in un colpo solo. Se qualcuno non ha mai salvato il vecchio bot, dagli il <strong>Basic Bot</strong> della scuola. Nessuna delle due è barare: è rifiutarsi di far mangiare una lezione pratica alla configurazione.'},
        {type:'code', lbl:'un comando del bot che accetta e salva un’immagine', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Immagine salvata in ./{attachment.filename}"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Ti sei dimenticato di caricare l'immagine :("</span>)`},
        {type:'text', h:'Il brainstorming e l’analisi di mercato', b:'Un’attività in tre passaggi, con parti che puoi saltare se il tempo stringe. <strong>1. Brainstorming:</strong> gli studenti generano idee per un bot Discord in stile startup che usi la classificazione di immagini, senza valutazioni durante la generazione; tu annoti tutte le idee in un punto visibile a tutti. Dopo quattro minuti formate squadre da 2 o 3 e assegna a ciascuna l’idea più fattibile. <strong>2. Analisi di mercato:</strong> otto minuti per cercare soluzioni simili già esistenti ed elencare vantaggi e svantaggi dell’idea assegnata, scrivendo i risultati nella chat del compito. <strong>3. Presentazione:</strong> ogni squadra condivide ciò che ha trovato.'},
        {type:'good', txt:'La fase di analisi di mercato è, senza clamore, la cosa più adulta del corso. Quasi nessuno ha mai verificato se la propria idea esiste già, e scoprire che esiste e che per giunta ha dei difetti motiva più di quanto scoraggi. Presentala come una ricognizione, non come un giudizio.'}
      ]},
      {t:'🧩 L2 — Inferenza nel bot e pubblicazione da VS Code', cards:[
        {type:'text', h:'Cosa significa inferenza', b:'Dai loro la parola come si deve: l’<strong>inferenza</strong> è usare un modello già addestrato per fare una previsione su un input nuovo. L’addestramento è finito; questo è il modello che fa il suo lavoro. Il loro compito è aggiungere il modello e il file <code>labels.txt</code> al progetto, capire quali file servono e perché, e poi far sì che il bot risponda a un’immagine caricata con l’output del modello.'},
        {type:'code', lbl:'il bot che esegue il proprio modello su un caricamento', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_class</span>(
                model_path=<span class="cs">"./keras_model.h5"</span>,
                labels_path=<span class="cs">"labels.txt"</span>,
                image_path=<span class="cs">f"./{attachment.filename}"</span>))
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Ti sei dimenticato di caricare l'immagine :("</span>)`},
        {type:'tip', txt:'Invece di dire loro quali file servono al progetto, <strong>chiediglielo</strong>, e se indovinano, chiedi di tenere una mini lezione ai compagni. È lo schema di differenziazione che questo corso usa ovunque, ed è davvero più rapido che spiegare. Indirizzali ai loro script di M6L4 come indizio per la logica di inferenza.'},
        {type:'text', h:'Pubblicare dall’editor', b:'Gli studenti caricano il progetto su GitHub usando l’<strong>interfaccia di VS Code</strong> invece del sito, chiudendo l’arco iniziato in M1L2 con il caricamento goffo dal browser e proseguito in M2L3 quando hanno collegato l’account. Discutete perché pubblicare conta: è il loro portfolio ed è il modo in cui chiunque altro può eseguire il loro lavoro.'},
        {type:'qa', h:'I criteri del README — vale la pena mostrarglieli', items:[
          {k:'20 punti', v:'Una descrizione del bot nel README, ma testo senza struttura.'},
          {k:'30 punti', v:'Una descrizione strutturata con emoji: chiara e piacevole da leggere.'},
          {k:'+5 bonus', v:'Un’immagine o una GIF del bot in funzione.'},
          {k:'+10 bonus', v:'Un file di licenza.'}
        ]},
        {type:'warn', txt:'Il controllo del token, di nuovo e sul serio: questo progetto contiene ora un token del bot <em>e</em> un modello addestrato. Prima di pubblicare qualsiasi cosa, il token esce. Un repository pubblico con un token attivo è l’esito peggiore che questo corso possa produrre, ed è questa la lezione in cui è più probabile, perché gli studenti sono concentrati sulla parte di IA.'}
      ]},
      {t:'🎙️ L3 — Trascrizione e traduzione vocale', cards:[
        {type:'text', h:'Parti da ciò che già usano', b:'Cinque minuti di discussione prima di qualsiasi codice: dove hanno incontrato la trascrizione? Google Traduttore, l’input vocale nelle app di messaggistica, i sottotitoli di YouTube, i sottotitoli automatici di TikTok e Instagram. La <strong>trascrizione</strong> è convertire la voce in testo: devono saperlo spiegare con parole loro, a livello di utente, prima di costruirlo.'},
        {type:'code', lbl:'registrare e poi trascrivere — costruito con il live coding', code:`<span class="ck">import</span> sounddevice <span class="ck">as</span> sd
<span class="ck">import</span> scipy.io.wavfile <span class="ck">as</span> wav
<span class="ck">import</span> speech_recognition <span class="ck">as</span> sr

duration    = <span class="cn">5</span>        <span class="cc"># secondi di registrazione</span>
sample_rate = <span class="cn">44100</span>

<span class="cf">print</span>(<span class="cs">"Parla ora..."</span>)
recording = sd.<span class="cf">rec</span>(<span class="cf">int</span>(duration * sample_rate),
                   samplerate=sample_rate, channels=<span class="cn">1</span>, dtype=<span class="cs">"int16"</span>)
sd.<span class="cf">wait</span>()
wav.<span class="cf">write</span>(<span class="cs">"output.wav"</span>, sample_rate, recording)

<span class="cf">print</span>(<span class="cs">"Registrazione completata, riconoscimento in corso..."</span>)
recognizer = sr.<span class="ct2">Recognizer</span>()
<span class="ck">with</span> sr.<span class="ct2">AudioFile</span>(<span class="cs">"output.wav"</span>) <span class="ck">as</span> source:
    audio = recognizer.<span class="cf">record</span>(source)

<span class="ck">try</span>:
    text = recognizer.<span class="cf">recognize_google</span>(audio, language=<span class="cs">"it-IT"</span>)
    <span class="cf">print</span>(<span class="cs">"Hai detto:"</span>, text)
<span class="ck">except</span> sr.<span class="ct2">UnknownValueError</span>:
    <span class="cf">print</span>(<span class="cs">"Non è stato possibile riconoscere il parlato."</span>)
<span class="ck">except</span> sr.<span class="ct2">RequestError</span> <span class="ck">as</span> e:
    <span class="cf">print</span>(<span class="cs">f"Errore del servizio: {e}"</span>)`},
        {type:'warn', txt:'La cosa più utile di tutto questo piano di lezione: <strong>se lo script dà errore, silenzia il tuo microfono su Zoom e riesegui.</strong> Zoom tiene occupato il microfono e lo script non riesce ad aprirlo. Dillo agli studenti prima della prima esecuzione, non dopo venti minuti di ricerche.'},
        {type:'text', h:'E poi aggiungi la traduzione', b:'Seconda metà: amplia lo script perché il testo trascritto venga tradotto in un’altra lingua con la classe <code>Translator</code>, e lascia che l’utente scelga il codice della lingua di destinazione. Entrambe le metà si fanno con il <strong>live coding</strong> — lo costruite insieme — e il criterio di successo è detto senza giri di parole: alla fine della fase, <strong>tutti gli studenti hanno del codice che funziona</strong>.'},
        {type:'hi', h:'Non saltare l’attività di pausa', b:'Fra le due metà pratiche c’è un gioco di dieci minuti: tu dici un colore o una lettera e loro hanno sessanta secondi per trovare e mostrare un oggetto che corrisponda. Il piano dice esplicitamente di <strong>non saltarlo</strong>: hanno bisogno di ritrovare la concentrazione prima della seconda pratica, e questa lezione ha sessanta minuti di pratica di fila. Partecipa anche tu.'}
      ]},
      {t:'🗣️ L4 — Input vocale nell’app Flask', cards:[
        {type:'text', h:'L’obiettivo e la libertà che hai', b:'Aggiungere un <strong>pulsante di input vocale</strong> che compare quando l’utente crea una nuova scheda del diario. Il manuale della lezione dice esplicitamente che la sua implementazione è un’opzione semplice — e non la più efficace — fra molte. Sei libero di implementarlo diversamente in base al livello dei tuoi studenti. Dillo ai gruppi forti: troveranno qualcosa di meglio.'},
        {type:'text', h:'Parti dalle domande, non dal codice', b:'Chiedi loro di ricordare di cosa è fatta una pagina web e su quale pagina debba stare il pulsante. Mostra il template e fai trovare la classe già definita per i pulsanti. Poi il punto sottile: il <code>&lt;button&gt;</code> dentro un modulo <strong>invia il modulo</strong>, e non è ciò che vogliamo: vogliamo che venga eseguita la nostra funzione. Per questo l’esempio usa un link con uno stile.'},
        {type:'code', lbl:'la rotta, avvolta in try/except', code:`<span class="ck">from</span> speech <span class="ck">import</span> speech

<span class="cd">@app.route</span>(<span class="cs">'/voice'</span>)
<span class="ck">def</span> <span class="cf">voices</span>():
    <span class="ck">try</span>:
        text = <span class="cf">speech</span>()
    <span class="ck">except</span>:
        text = <span class="cs">"Qualcosa è andato storto..."</span>
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'create_card.html'</span>, text=text)`},
        {type:'code', lbl:'il template lo riceve come variabile Jinja', code:`<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"text"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;textarea</span> <span class="cf">class</span>=<span class="cs">"form__text"</span> <span class="cf">name</span>=<span class="cs">"text"</span> <span class="cf">id</span>=<span class="cs">"text"</span> <span class="cf">required</span><span class="ct2">&gt;</span>{{ text }}<span class="ct2">&lt;/textarea&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">class</span>=<span class="cs">"help_button"</span> <span class="cf">href</span>=<span class="cs">"./voice"</span><span class="ct2">&gt;</span> Registra <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/label&gt;</span>`},
        {type:'hi', h:'try / except, insegnato per necessità', b:'Il motivo per cui <code>try</code>/<code>except</code> arriva qui e non prima è che gli studenti hanno appena scritto codice che <em>davvero a volte fallisce</em>: un microfono può essere occupato, una chiamata di rete può non rispondere. È l’argomento onesto per la gestione delle eccezioni: il <code>try</code> contiene il codice che può fallire, l’<code>except</code> contiene cosa fare quando fallisce, così l’intera pagina non si rompe. Presentalo come la soluzione a un problema che hanno già vissuto.'},
        {type:'text', h:'Fine del Tema 4 — la specializzazione in IA', b:'Chiudi il tema dell’IA applicata: festeggia il completamento, mostra cosa sbloccano queste competenze e parla dei vantaggi di specializzarsi in IA oggi. Chiedi se potrebbe essere il lavoro dei loro sogni e se vengono in mente vantaggi che tu non hai citato. Il compito aggiuntivo è piacevolmente aperto: trova una libreria che ti interessa e usala per migliorare il tuo progetto come vuoi.'},
        {type:'tip', txt:'Se il tempo stringe, fai il compito creativo come live coding invece di toglierlo. E annota il dettaglio CSS del piano: copiando gli stili del pulsante, questo può finire sopra il modulo; <code>display: inline-block;</code> lo sistema.'}
      ]}
    ],
    quiz:[
      {q:'Cosa significa «inferenza» in M7L2?', opts:['Usare un modello già addestrato per fare una previsione su un input nuovo','Addestrare un modello su un nuovo dataset','Indovinare quali classi dovrebbe contenere un dataset','Convertire un modello in un file più piccolo'], c:0, fb:'L’addestramento è finito; l’inferenza è il modello che fa il suo lavoro su dati nuovi, qui un’immagine caricata da qualcuno su Discord.'},
      {q:'Il progetto del bot con IA di uno studente solleva l’errore «groups» di DepthwiseConv2D durante la configurazione. Qual è la soluzione già pronta?', opts:['pipenv uninstall tensorflow e poi pipenv install tensorflow==2.15 (compatibile con Python 3.11)','Riaddestrare il modello in Teachable Machine','Sostituire la classe Bot con la classe Client','Reinstallare Python'], c:0, fb:'È un problema di compatibilità fra versioni. Tieni quella coppia di comandi pronta da incollare invece di risolvere versioni dal vivo.'},
      {q:'Cosa devi chiedere agli studenti PRIMA che inizi la lezione M7L1?', opts:['Di aprire i vecchi progetti dei bot Discord, ripassare come funzionano e lasciarli aperti — ci costruiscono sopra per tutta la lezione','Di riaddestrare da zero il loro modello di visione','Di cancellare i loro ambienti virtuali','Di scrivere un README per il progetto'], c:0, fb:'La nota della lezione la segnala come tecnica e ti chiede di preparare gli studenti in anticipo, con i vecchi progetti dei bot aperti.'},
      {q:'Uno studente non ha mai salvato il suo bot del Modulo 1. Qual è la risposta giusta?', opts:['Dargli il Basic Bot della scuola così la configurazione non si mangia la lezione pratica','Fargli ricostruire il bot da zero mentre la classe aspetta','Metterlo in coppia con qualcuno e lasciarlo solo guardare','Ignorarlo e segnare la lezione come incompleta'], c:0, fb:'Il piano fornisce un Basic Bot esattamente per questo, così come fornisce il Pipfile del repository con la soluzione quando la configurazione dell’ambiente va per le lunghe.'},
      {q:'Quale funzione di discord.py permette al bot di ricevere un’immagine dall’utente?', opts:['ctx.message.attachments, e poi attachment.save() per scriverla su disco','discord.File, che legge i caricamenti','request.form, come in un modulo web','L’evento on_upload della classe Client'], c:0, fb:'Il comando controlla ctx.message.attachments, cicla sugli allegati e ne salva ciascuno; poi il percorso salvato è ciò che viene passato al modello.'},
      {q:'Qual è il momento di maggior rischio per la sicurezza in questo modulo?', opts:['Pubblicare il progetto su GitHub con il token vero del bot ancora nel codice','Caricare il file del modello addestrato','Installare tensorflow da internet','Lasciare che il bot salvi immagini caricate da altri'], c:0, fb:'Gli studenti sono concentrati sulla parte di IA, e il progetto contiene ora un token attivo. Controlla prima di ogni pubblicazione: un repository pubblico con un token funzionante è l’esito peggiore possibile.'},
      {q:'Lo script di riconoscimento vocale fallisce appena parte durante la tua lezione. Cosa controlli per primo?', opts:['Se il tuo microfono di Zoom è attivo — Zoom tiene occupato il microfono, quindi silenzialo e riesegui','Se speech_recognition è installato','Se il codice della lingua è corretto','Se il file .wav esiste già'], c:0, fb:'Il piano di lezione lo segnala esplicitamente come punto importante: silenzia il microfono su Zoom e riavvia lo script.'},
      {q:'Perché try/except arriva in M7L4 e non prima nel corso?', opts:['Perché gli studenti hanno appena scritto codice che davvero a volte fallisce — un microfono occupato, una chiamata di rete senza risposta — quindi la gestione delle eccezioni risolve un problema che hanno vissuto','Perché Flask lo richiede in ogni rotta','Perché prima di questo punto è troppo avanzato','Perché Jinja non sa mostrare gli errori'], c:0, fb:'La funzione vocale a volte produce un errore, che è esattamente la motivazione onesta per try/except: intercettare il guasto perché la pagina non si rompa.'},
      {q:'Perché l’esempio di M7L4 usa un link con uno stile invece di un <button> dentro il modulo?', opts:['Un <button> dentro un modulo invia il modulo, e non è ciò che vogliamo: vogliamo che venga eseguita la nostra funzione','I link sono più veloci dei pulsanti','I pulsanti non si possono personalizzare con il CSS','Flask non può ricevere il clic di un pulsante'], c:0, fb:'La lezione ti chiede di discutere proprio questo: il tag button dentro un modulo si occupa di inviare i dati, quindi l’attivazione vocale si implementa in un altro modo.'},
      {q:'A cosa serve il gioco di dieci minuti «trova un oggetto» fra le due metà pratiche di M7L3?', opts:['A far ritrovare la concentrazione agli studenti prima della seconda pratica — il piano dice esplicitamente di non saltarlo','A valutare il loro vocabolario','A riempire il tempo se il codice finisce prima','A scegliere chi presenta il proprio programma'], c:0, fb:'M7L3 ha sessanta minuti di pratica di fila. La pausa è a calendario di proposito e il piano ti chiede di non saltarla, e di parteciparvi anche tu.'}
    ]
  },
  {
    id:12, emoji:'🤝', color:'#14B8A6',
    title:'M8 — Agile, branch Git e code review',
    desc:'Modulo 8 del corso: valori Agile e ruoli Scrum, creare e unire branch Git, i principi e la lista di controllo della code review, e programmazione collaborativa con Live Share.',
    obj:'Insegnare il mestiere ingegneristico che rende possibile il lavoro di squadra. Devi saper spiegare Agile e Scrum con analogie quotidiane, definire con precisione i tre ruoli Scrum, condurre un esercizio di pianificazione dello sprint, insegnare branch e merge, costruire una lista di controllo per la revisione insieme agli studenti e preparare un ambiente collaborativo prima della lezione.',
    prep:'~3–4 ore. Meno costruzione, più pratica con Git.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 8 del corso, devi aver fatto di persona:',
      items:[
        'Spiegato Agile e Scrum ad alta voce, con parole tue, usando le analogie quotidiane',
        'Scritto un piano di sprint per una piccola funzionalità, diviso in attività con dei responsabili',
        'Creato un branch, fatto dei commit, unito e letto l’output del merge',
        'Provocato di proposito un <strong>conflitto</strong> di merge e risolto, così da non essere colto di sorpresa dal vivo',
        'Rivisto il codice di esempio con i bug del corso e trovato da solo i quattro problemi inseriti',
        'Scritto la tua lista di controllo per la revisione prima di confrontarla con quella del corso',
        'Installato l’estensione <strong>Live Share</strong> e provato una sessione con un secondo dispositivo o con un collega',
        'Rifattorizzato il codice rotto dell’esercizio collaborativo finché non ha funzionato'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> Agile e Scrum, i tre ruoli e la pianificazione di uno sprint vero; <strong>L2</strong> branch Git: creare, gestire e unire; <strong>L3</strong> code review, i suoi principi, una lista di controllo condivisa e la revisione dei progetti altrui; <strong>L4</strong> ambienti di sviluppo collaborativo (VS Code Live Share) più il gioco del modulo.',
          why:'Gli studenti usano sprint e retrospettive dal Modulo 1 senza che nessuno abbia mai detto loro cosa siano. Questo modulo dà un nome a quelle pratiche e aggiunge le due competenze che rendono possibile lavorare con altri: creare branch e fare revisioni.',
          learn:'Gli studenti spiegano i valori Agile con parole loro, ricercano e presentano un ruolo Scrum, pianificano uno sprint per una funzionalità vera, creano e uniscono branch, costruiscono e applicano una lista di controllo per la revisione, danno commenti costruttivi e programmano insieme in un unico editor condiviso.',
          confident:'Agile come filosofia contro Scrum come pratica concreta; cosa fanno davvero Scrum Master, Product Owner e team di sviluppo; <code>git merge</code> e che aspetto ha un merge riuscito; i cinque principi di una revisione efficace; e avere Live Share configurato <em>prima</em> della lezione.'
        }
      ]},
      {t:'🏃 L1 — Agile, Scrum e pianificazione dello sprint', cards:[
        {type:'text', h:'Insegna i valori con analogie quotidiane', b:'Fermati sui valori Agile e chiedi agli studenti di spiegare ciascuno con parole loro e un esempio di vita quotidiana. Il corso fornisce quattro analogie che funzionano bene con gli adolescenti, e usarle è meglio che definire i termini.'},
        {type:'qa', h:'I quattro valori Agile, come li presenta il corso', items:[
          {k:'Individui e interazioni più che processi e strumenti', v:'Organizzare una cena di famiglia: invece di un turno di cucina rigido, parlate delle preferenze, decidete chi fa cosa e aiutate chi si blocca.'},
          {k:'Software funzionante più che documentazione esaustiva', v:'Riordinare la tua stanza: invece di pianificare dove va ogni cosa, inizi a fare spazio. La stanza pulita è l’obiettivo; il percorso può cambiare.'},
          {k:'Collaborazione con il cliente più che negoziazione dei contratti', v:'Avevi un appuntamento con gli amici e a uno spunta una lezione. Invece di insistere sull’orario originale, ne trovate uno che funziona.'},
          {k:'Rispondere al cambiamento più che seguire un piano', v:'Avevi programmato una corsa al mattino e piove, quindi fai yoga in casa invece di annullare.'}
        ]},
        {type:'hi', h:'Agile e Scrum, in un’immagine', b:'È la distinzione che si confonde di più. <strong>Agile è la filosofia</strong>: come una famiglia si accorda per convivere in armonia — rispetto, flessibilità, cooperazione. <strong>Scrum sono le regole concrete</strong> per metterla in pratica: chi cucina, chi apparecchia, chi sparecchia; i ruoli, i compiti, gli incontri che la fanno funzionare. Agile è l’idea; Scrum è un modo di darle vita.'},
        {type:'text', h:'I ruoli, ricercati dagli studenti', b:'Dividi il gruppo in tre squadre — <strong>Scrum Master</strong>, <strong>Product Owner</strong>, <strong>team di sviluppo</strong> — e dai dieci minuti con le fonti che vogliono per ricercare il proprio ruolo nel contesto di un progetto di app mobile. Poi ogni squadra fa una mini presentazione di cinque minuti. Il tuo compito è rispondere a dubbi organizzativi e tecnici e costruire un buon clima. Alla fine chiedi a chi <em>piacerebbe</em> essere Scrum Master o Product Owner, e perché.'},
        {type:'twocol', left:{h:'Scrum Master', items:['Rimuove gli ostacoli perché il team possa lavorare','Spiega Agile e Scrum, soprattutto a chi è appena arrivato','Conduce le riunioni quotidiane, la pianificazione e le retrospettive, e le tiene produttive','Fa sì che le persone si sentano sicure nell’esprimere idee, e porta nella conversazione chi è più silenzioso','<strong>Non comanda</strong>: crea le condizioni per il successo']}, right:{h:'Product Owner', items:['Raccoglie i requisiti da clienti, responsabili e utenti','Costruisce l’elenco delle attività e lo ordina per priorità','Scrive le attività come storie utente comprensibili al team','Definisce quando un’attività si può considerare finita','Aiuta il team a scomporre le attività e a valutarne la complessità']}},
        {type:'text', h:'E poi pianificate uno sprint vero', b:'Tutto il gruppo agisce come un unico team di sviluppo. Fate un brainstorming su «cosa costruireste se poteste costruire qualsiasi cosa?», e poi <strong>tu assumi il ruolo di Product Owner</strong> e li aiuti a pianificare uno sprint. Non pianificate l’intero progetto: prendete una parte, come un modulo di registrazione o un menu. Tempi suggeriti: 5 minuti di brainstorming, 5 minuti con il Product Owner, 15 minuti di pianificazione, 5 minuti di presentazione e commenti.'},
        {type:'tip', txt:'L’esempio sviluppato nel piano — un modulo di registrazione diviso fra frontend, backend, infrastruttura, test e documentazione su due settimane — è molto più dettagliato di ciò che produrranno i tuoi studenti. Usalo come riferimento tuo per stimolarli («chi lo testa? chi lo documenta?»), non come asticella da pretendere.'}
      ]},
      {t:'🌳 L2 — I branch di Git', cards:[
        {type:'text', h:'Due analogie, entrambe da tenere a portata', b:'<strong>Gli appunti condivisi della classe:</strong> tutta la classe lavora su un unico grande set di appunti, e ciascuno scrive la propria parte su un foglio a parte — un branch — così nessuno rovina il documento principale. Quando tutte le sezioni sono pronte, si uniscono in un unico file: un <strong>merge</strong>. Un errore si corregge sul singolo foglio senza toccare l’intero documento. <strong>Le riprese di un film:</strong> il branch principale è la sceneggiatura definitiva, che contiene solo materiale approvato; un branch di funzionalità è una scena a parte in cui si provano idee nuove senza toccare la sceneggiatura; il merge è il montaggio che unisce le scene.'},
        {type:'text', h:'Come si svolge la parte pratica', b:'Fai l’esercizio sulla tua macchina e fai seguire gli studenti <strong>passo per passo</strong>, verificando che tutti stiano al ritmo. Il criterio di successo è concreto: ciascuno invia uno screenshot del terminale con il risultato di <code>git merge feature/add-greeting</code>. Assicurati che lo completino <em>tutti</em>: è una competenza che, se non entra, blocca in silenzio il lavoro di squadra più avanti.'},
        {type:'code', lbl:'che aspetto ha un merge fast-forward riuscito', code:`Updating 319de95..8de4c42
Fast-forward
 main.py | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)`},
        {type:'hi', h:'Apri con il test e leggi le risposte ad alta voce', b:'La lezione inizia con un test di dieci minuti sul materiale Agile e Scrum della lezione precedente, e il piano ti dice di ripassare poi <strong>tutte</strong> le risposte corrette con la loro spiegazione. Vale la pena farlo bene: il Product Owner possiede il backlog, uno sprint è un periodo fisso da una a quattro settimane, creare il backlog <em>non</em> è compito dello Scrum Master, la retrospettiva è dove il team pianifica i miglioramenti, e l’adattamento rapido al cambiamento è il principio Agile.'},
        {type:'tip', txt:'I compiti a casa qui hanno una seconda parte: un «<strong>compito segreto</strong>» che <em>non</em> devi commentare; ricorda solo agli studenti che servirà nella quarta lezione di questo modulo. Non rovinare la sorpresa, e non dimenticartene nemmeno tu.'}
      ]},
      {t:'🔎 L3 — Code review', cards:[
        {type:'text', h:'Perché esiste la revisione', b:'Conduci una discussione di gruppo invece di una spiegazione frontale. I cinque obiettivi a cui devono arrivare gli studenti: <strong>individuare errori</strong>, perché i bug non arrivino agli utenti; <strong>mantenere gli standard</strong> di stile del codice; <strong>migliorare le competenze del team</strong> condividendo conoscenza; <strong>migliorare la leggibilità</strong>, perché il codice sia comprensibile a tutto il team e non solo a chi l’ha scritto; e <strong>aumentare la responsabilità condivisa</strong>, trasformando la base di codice in uno sforzo collettivo e non in un insieme di sforzi individuali.'},
        {type:'qa', h:'I cinque principi di una revisione efficace', items:[
          {k:'Sii rispettoso', v:'Commenti costruttivi, senza colpevolizzare.'},
          {k:'Concentrati sul problema, non sulla persona', v:'Parla del codice, non di chi l’ha scritto.'},
          {k:'Sii concreto', v:'Dai esempi specifici di miglioramento.'},
          {k:'Bilancia critica ed elogio', v:'Riconosci esplicitamente il codice scritto bene.'},
          {k:'Dai raccomandazioni chiare', v:'Rendi i tuoi suggerimenti il più inequivocabili possibile.'}
        ]},
        {type:'text', h:'Costruite la lista insieme e poi usatela', b:'Dieci minuti in squadre da due o tre a ricercare e abbozzare una lista di controllo, e poi mettete tutto in comune in <strong>un’unica lista finale che userà tutto il gruppo</strong>, e mandala nella chat di gruppo, perché serve per l’esercizio successivo e per i compiti. Le categorie a cui devono convergere le bozze: chiarezza del codice, correttezza, semplicità, rispetto dello stile, verifica della logica e output corretto.'},
        {type:'code', lbl:'il codice di esercitazione — quattro problemi inseriti', code:`<span class="ck">import</span> random

<span class="cf">print</span>(<span class="cs">"Benvenuto nel gioco 'Indovina il numero'!"</span>)
secret = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">100</span>)
attempt = <span class="cn">0</span>

<span class="ck">while</span> <span class="ck">True</span>:
    user_guess = <span class="cf">input</span>(<span class="cs">"Scrivi il tuo numero: "</span>)
    attempt += <span class="cn">1</span>
    <span class="ck">if</span> user_gess == secret:              <span class="cc"># 1. refuso: user_gess</span>
        <span class="cf">print</span>(<span class="cs">"Complimenti!"</span>)            <span class="cc"># 2. input() è una stringa —</span>
        <span class="ck">break</span>                            <span class="cc">#    non viene mai convertita con int()</span>
    <span class="ck">elif</span> user_guess &gt; secret:            <span class="cc"># 3. nessun commento da nessuna parte</span>
        <span class="cf">print</span>(<span class="cs">"Il tuo numero è più grande."</span>)  <span class="cc"># 4. nessuna validazione dell'input —</span>
    <span class="ck">elif</span> user_guess &lt; secret:            <span class="cc">#    scrivere del testo lo fa crollare</span>
        <span class="cf">print</span>(<span class="cs">"Il tuo numero è più piccolo."</span>)`},
        {type:'text', h:'La revisione fra pari vera e propria', b:'Gli studenti si scambiano i progetti, e se non tutti ne hanno uno pronto non è un problema: più persone possono revisionare lo stesso progetto, oppure ricorri al codice di esempio qui sopra. Quindici minuti per revisionare, consegnando il codice e i propri commenti nella chat del compito. Poi presentano ciò che hanno revisionato e discutete insieme i commenti e i problemi trovati.'},
        {type:'good', txt:'Ripeti la regola dei commenti costruttivi subito prima che inizino, non solo durante la teoria. Revisionare il codice di un compagno è socialmente rischioso per un adolescente, e la differenza fra «questo è sbagliato» e «io rinominerei questo per renderlo più chiaro» è tutta la differenza fra una lezione che funziona e una che danneggia il gruppo.'},
        {type:'tip', txt:'I compiti dipendono dalla lezione precedente: gli studenti dovevano preparare un proprio progetto da dare a un compagno. Ricordaglielo alla fine di L2, o metà classe arriverà senza nulla da revisionare.'}
      ]},
      {t:'👥 L4 — Sviluppo collaborativo e il gioco del modulo', cards:[
        {type:'warn', txt:'<strong>La fase 0 avviene prima che inizi la lezione.</strong> Installa l’estensione <strong>Live Share</strong> in VS Code, crea una cartella con un <code>main.py</code> contenente un frammento semplice e tieni tutto pronto. Poi in aula: clicca su Live Share, accedi, condividi il link, accetta la richiesta di connessione di ogni studente e <strong>concedi i permessi di modifica</strong>. Se provi a farlo a freddo davanti alla classe, perderai la lezione.'},
        {type:'text', h:'Cosa sottolineare sull’ambiente', b:'Non importa quale strumento specifico usino: ciò che conta è capire <strong>come si lavora quando più persone condividono una base di codice</strong>. Fai stampare a ciascuno il proprio nome nel terminale come prova della connessione, e poi non disconnettere nessuno passando all’esercizio successivo: il lavoro continua in quell’ambiente.'},
        {type:'text', h:'L’esercizio collaborativo', b:'Carica del codice volutamente rotto nell’ambiente condiviso e aiutali a <strong>dividersi le correzioni</strong>. Di’ loro che non devono finire tutto, ma che devono migliorarlo quanto riescono. Venti minuti e poi fermatevi per condividere le impressioni. I problemi inseriti sono un bel ripasso del corso: una funzione che calcola ma non fa mai <code>return</code>, input non validato, assenza di gestione delle eccezioni attorno a <code>int(input(...))</code>, una variabile che per questo riceve <code>None</code>, e un nome del giocatore che viene raccolto e mai usato.'},
        {type:'code', lbl:'la forma della versione rifattorizzata a cui arrivano', code:`<span class="ck">import</span> random

<span class="cc"># Saluta il giocatore e valida il nome inserito</span>
<span class="ck">def</span> <span class="cf">greet_player</span>():
    <span class="ck">while</span> <span class="ck">True</span>:
        name = <span class="cf">input</span>(<span class="cs">"Come ti chiami? (1-15 caratteri): "</span>).<span class="cf">strip</span>()
        <span class="ck">if</span> <span class="cn">1</span> &lt;= <span class="cf">len</span>(name) &lt;= <span class="cn">15</span>:
            <span class="ck">return</span> name                       <span class="cc"># la correzione: restituirlo davvero</span>
        <span class="cf">print</span>(<span class="cs">"Il nome deve avere da 1 a 15 caratteri. Riprova."</span>)

<span class="ck">def</span> <span class="cf">generate_random</span>(low, high):
    <span class="ck">return</span> random.<span class="cf">randint</span>(low, high)      <span class="cc"># la correzione: restituire, non solo chiamare</span>

<span class="ck">if</span> __name__ == <span class="cs">"__main__"</span>:
    <span class="cf">main</span>()`},
        {type:'hi', h:'Il gioco del modulo — «L’app dei tuoi sogni»', b:'Quindici minuti di preparazione in due squadre e poi cinque minuti ciascuna per presentare. Scegliere un’idea, formare la squadra, pianificare uno sprint. <strong>In questo esercizio non ci sono vincitori</strong>, e il piano lo dice: i risultati concreti sono secondari rispetto al lavorare in squadra, consolidare il modulo e divertirsi. Se nessuno ha fatto il «compito segreto», incoraggiali e falli inventare un’idea sul momento; l’idea può essere qualsiasi cosa, anche poco realistica. Se si bloccano, proponi di pianificare un’app simile a una che usano ogni giorno.'},
        {type:'tip', txt:'Qui rispetta i tempi con rigore: 5 minuti per spiegare e formare le squadre, 15 minuti di lavoro, 5 + 5 minuti di presentazione. Questa lezione ha quattro fasi distinte e nessun margine.'}
      ]}
    ],
    quiz:[
      {q:'Come spieghi la differenza fra Agile e Scrum?', opts:['Agile è la filosofia — rispetto, flessibilità, cooperazione; Scrum è l’insieme concreto di ruoli, attività e incontri che la mette in pratica','Scrum è la filosofia e Agile l’insieme di strumenti','Sono metodologie rivali e un team ne sceglie una','Agile è per il software e Scrum per l’hardware'], c:0, fb:'L’analogia familiare del corso: Agile è come una famiglia si accorda per convivere in armonia; Scrum è chi cucina, chi apparecchia e chi sparecchia.'},
      {q:'Quale di queste NON è una responsabilità dello Scrum Master?', opts:['Creare e dare priorità al backlog di prodotto','Rimuovere gli ostacoli che bloccano il team','Condurre le riunioni quotidiane, la pianificazione e le retrospettive','Assicurarsi che chi è più silenzioso venga ascoltato'], c:0, fb:'Il backlog è del Product Owner. Lo Scrum Master fa sì che il team lavori efficacemente e rimuove gli ostacoli: è una delle risposte del test di M8L2.'},
      {q:'Cos’è uno sprint e quanto dura di solito?', opts:['Un periodo di tempo fisso dedicato a completare attività del backlog — di norma da una a quattro settimane','Una riunione in cui il team esamina il lavoro finito','L’ultima settimana prima di un rilascio','Una singola giornata di programmazione intensiva'], c:0, fb:'Uno sprint è un periodo di durata fissa in cui il team si concentra sul completare attività del backlog, tipicamente da una a quattro settimane.'},
      {q:'Uno studente chiede perché esistano i branch. Quale spiegazione usa il corso?', opts:['Ognuno lavora su un foglio a parte così il documento principale resta intatto, poi i fogli si uniscono — un merge — e gli errori si correggono senza toccare l’intero progetto','I branch conservano vecchie versioni del progetto come copia di sicurezza','I branch permettono a due persone di condividere un account GitHub','I branch sono obbligatori prima di poter caricare qualsiasi cosa su GitHub'], c:0, fb:'L’analogia degli appunti condivisi della classe, con quella delle riprese di un film come alternativa: il branch principale è la sceneggiatura definitiva, un branch di funzionalità è una scena da provare, e il merge è il montaggio.'},
      {q:'Qual è il criterio di successo concreto della parte pratica di M8L2?', opts:['Ogni studente invia uno screenshot del terminale con un git merge feature/add-greeting riuscito','Ogni studente crea un branch con il proprio nome','Il tutor unisce i branch di tutti gli studenti','Ogni studente spiega il merge con parole sue'], c:0, fb:'Il piano chiede lo screenshot del terminale con il risultato del merge, e dice di assicurarsi che l’esercizio lo completino tutti.'},
      {q:'Quale di questi è uno dei cinque principi di una code review efficace?', opts:['Concentrati sul problema, non sulla persona — parla del codice, non di chi l’ha scritto','Segnala ogni problema, per quanto piccolo, prima di lodare qualsiasi cosa','Fai revisionare tutto il codice al tutor perché i commenti siano coerenti','Revisiona solo codice che già gira senza errori'], c:0, fb:'I cinque principi sono: essere rispettosi, concentrarsi sul problema e non sulla persona, essere concreti, bilanciare critica ed elogio, e dare raccomandazioni chiare.'},
      {q:'Due dei bug inseriti nell’esercizio di revisione sono una variabile scritta male e una conversione mancante. Qual è la seconda?', opts:['input() restituisce una stringa, quindi non viene mai convertita con int() e non si può confrontare con il numero segreto','random.randint viene chiamata con l’intervallo sbagliato','Il ciclo while non ha una condizione di uscita','Ai print mancano le parentesi'], c:0, fb:'user_guess resta una stringa, il che rende impossibile il confronto con secret: lo stesso bug che gli studenti incontrano naturalmente durante il corso.'},
      {q:'Non tutti gli studenti hanno un progetto pronto per la revisione fra pari. Cosa fai?', opts:['Lasci che più persone revisionino lo stesso progetto, oppure ricorri al codice di esempio fornito — è esplicitamente consentito','Annulli la fase di revisione','Fai revisionare a ciascuno il proprio codice','Rimandi la lezione'], c:0, fb:'Il piano lo dice direttamente: non è un problema, più persone possono revisionare lo stesso progetto, e c’è del codice di esempio da revisionare se nessuno ne porta uno.'},
      {q:'Cosa devi fare PRIMA che inizi la lezione M8L4?', opts:['Installare l’estensione Live Share, creare la cartella di progetto con main.py ed essere pronto a condividere — la fase 0 è lavoro precedente alla lezione','Mandare agli studenti il codice rotto da leggere','Dividere la classe in squadre','Preparare il link del test'], c:0, fb:'La fase 0 è indicata esplicitamente come preparazione da fare prima della lezione. Farla a freddo davanti al gruppo ti costa la lezione.'},
      {q:'Chi vince il gioco «L’app dei tuoi sogni» alla fine di M8L4?', opts:['Nessuno — il piano afferma che non ci sono vincitori; lavoro di squadra, consolidamento e divertimento sono gli obiettivi','La squadra con l’idea più fattibile','La squadra che finisce prima di pianificare','La squadra la cui presentazione piace di più'], c:0, fb:'«In questo esercizio non ci sono vincitori.» I risultati concreti sono secondari rispetto al lavorare in squadra, consolidare il materiale del modulo e divertirsi.'}
    ]
  },
  {
    id:13, emoji:'🗣️', color:'#8B5CF6',
    title:'M9 — Sintesi vocale, API e codice pulito',
    desc:'Modulo 9 del corso: sintesi vocale con pyttsx3, un bot meteo che parla costruito su un’API senza chiave, un bot di curiosità costruito in autonomia, e codice pulito con refactoring e flake8.',
    obj:'Insegnare agli studenti a far parlare i loro programmi e a rendere leggibile il loro codice. Devi saper distinguere le tre tecnologie vocali, configurare pyttsx3, scrivere dal vivo un bot in tre fasi verificabili, condurre una costruzione autonoma con libertà vera e guidare una sessione di refactoring che includa un linter.',
    prep:'~4 ore. Genuinamente divertente; costruiscilo lo stesso.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 9 del corso, devi aver fatto di persona:',
      items:[
        'Installato <code>pyttsx3</code> e fatto parlare la tua macchina, regolando velocità, volume e voce',
        'Verificato quali indici di voce esistono davvero nel tuo sistema operativo',
        'Chiamato <code>wttr.in</code> e ricevuto una previsione formattata',
        'Costruito il bot meteo che parla nelle tre fasi usate dalla lezione',
        'Verificato che la voce esce dalla macchina che esegue il bot e non da Discord',
        'Costruito da solo un secondo bot che parla partendo da un’altra API, per cronometrarti',
        'Rifattorizzato tu stesso gli esempi disordinati delle tasse e dei punti casa prima di leggere le soluzioni',
        'Installato <code>flake8</code>, eseguito sul tuo codice e corretto ciò che ha segnalato',
        'Trovato nel tuo codice un problema che flake8 non poteva rilevare'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Quattro lezioni: <strong>L1</strong> sintesi vocale e un programma da testo a voce con <strong>pyttsx3</strong>; <strong>L2</strong> un bot Discord che interroga il meteo da un’API e lo legge ad alta voce; <strong>L3</strong> una costruzione autonoma — un bot che dice curiosità casuali — più il futuro delle tecnologie vocali; <strong>L4</strong> codice pulito, refactoring e <strong>flake8</strong>.',
          why:'Due ricompense molto diverse. La voce fa sembrare i loro progetti finiti e davvero degni di un portfolio, e il codice pulito è la differenza fra un progetto che qualcun altro può riprendere e uno che non può riprendere nessuno. L4 è inoltre la lezione professionalmente più utile di tutto il corso.',
          learn:'Gli studenti distinguono controllo vocale, riconoscimento e sintesi; installano e configurano una libreria di sintesi; costruiscono un bot meteo che parla su un’API senza chiave; costruiscono da soli un secondo bot parlante; e rifattorizzano codice disordinato secondo criteri di codice pulito, verificandolo con un linter.',
          confident:'Le tre tecnologie vocali e i loro usi; le tre fasi del funzionamento della sintesi; <code>rate</code>, <code>volume</code>, <code>voice</code>, <code>say</code> e <code>runAndWait</code> di <code>pyttsx3</code>, e il fatto che funziona <strong>offline</strong>; che <code>wttr.in</code> non richiede una chiave API; e la lista di controllo del codice pulito più <code>flake8</code>.'
        }
      ]},
      {t:'🔊 L1 — Sintesi vocale', cards:[
        {type:'qa', h:'Le tre tecnologie, distinte', items:[
          {k:'Controllo vocale', v:'Usare la voce per comandare dispositivi o applicazioni. Luci e termostati della casa intelligente, «chiama mamma», mettere la musica o il navigatore in auto.'},
          {k:'Riconoscimento vocale', v:'Convertire il parlato in testo o in comandi. Dettatura da voce a testo, app di traduzione, sottotitoli in diretta nelle videochiamate.'},
          {k:'Sintesi vocale', v:'Convertire il testo in parlato perché il computer «parli». Navigazione («fra 300 metri gira a sinistra»), lettori di libri digitali che leggono ad alta voce, notifiche parlate.'}
        ]},
        {type:'text', h:'Tutte e tre insieme', b:'Gli esempi migliori usano tutte e tre, e gli studenti li hanno già. Un <strong>assistente vocale</strong>: il riconoscimento ti capisce, la sintesi risponde, il controllo vocale esegue il comando. Un <strong>navigatore in auto</strong>: detti l’indirizzo, ti dice il percorso ad alta voce, lo cambi con la voce. <strong>Software di supporto</strong>: capisce la persona, le legge ad alta voce un testo che non riesce a leggere e si può comandare con la voce.'},
        {type:'text', h:'Come funziona davvero la sintesi — tre fasi', b:'<strong>1. Analisi del testo:</strong> il computer capisce come va letto il testo: un punto significa una pausa, un punto interrogativo cambia l’intonazione. <strong>2. Conversione da testo a suono:</strong> le parole diventano suoni, usando una base con tutti i suoni della lingua. <strong>3. Generazione del parlato:</strong> i suoni si combinano in parole e frasi, puntando a qualcosa di fluido e naturale.'},
        {type:'code', lbl:'pyttsx3 — in sostanza tutta la libreria', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

engine.<span class="cf">setProperty</span>(<span class="cs">'rate'</span>, <span class="cn">150</span>)      <span class="cc"># velocità del parlato</span>
engine.<span class="cf">setProperty</span>(<span class="cs">'volume'</span>, <span class="cn">0.9</span>)    <span class="cc"># volume</span>

voices = engine.<span class="cf">getProperty</span>(<span class="cs">'voices'</span>)
engine.<span class="cf">setProperty</span>(<span class="cs">'voice'</span>, voices[<span class="cn">0</span>].id)   <span class="cc"># la scelta della voce dipende dal sistema</span>

engine.<span class="cf">say</span>(<span class="cs">"Ciao"</span>)
engine.<span class="cf">runAndWait</span>()                     <span class="cc"># esegue davvero la sintesi</span>`},
        {type:'text', h:'La fase di lavoro autonomo', b:'È una fase davvero autonoma da 40 minuti: 25 minuti per studiare la documentazione e costruire un programma che pronuncia del testo e sperimentare con le impostazioni, poi 15 minuti di presentazione. Il tuo ruolo è rispondere a dubbi organizzativi e tecnici, nient’altro. Se qualcuno si blocca, fagli condividere lo schermo e aiutalo singolarmente. <strong>La priorità è che tutti gli studenti finiscano con un programma vocale funzionante</strong>, e loda ogni presentazione.'},
        {type:'tip', txt:'Alla fine fai loro una domanda davvero buona: come cambierebbe la nostra vita senza la sintesi vocale? Gli studenti tendono a vederla come una comodità finché non pensano a qualcuno che non riesce a leggere lo schermo, e a quel punto la tecnologia smette di essere un giocattolo.'}
      ]},
      {t:'🌤️ L2 — Il bot meteo che parla', cards:[
        {type:'text', h:'Perché questa lezione è facile da fare bene', b:'L’API non richiede <strong>né account né chiave</strong>. <code>wttr.in</code> restituisce il meteo con una semplice richiesta HTTP, il che significa nessuna fase di registrazione, nessuna chiave che possa trapelare e nessuno bloccato su un modulo. Scegli quella battaglia di proposito: la lezione parla di combinare tre cose che già conoscono, non di autenticazione delle API.'},
        {type:'hi', h:'Scrivilo dal vivo in tre fasi verificabili', b:'Il piano divide la costruzione in tre parti e ti chiede di confermare che tutti stiano al passo dopo <em>ciascuna</em>. <strong>Fase 1:</strong> un bot base con un comando <code>!start</code> che risponde. <strong>Fase 2:</strong> aggiungere la chiamata all’API perché <code>!weather Roma</code> restituisca la previsione come testo. <strong>Fase 3:</strong> aggiungere la sintesi perché il bot la legga anche ad alta voce. Prima di scrivere qualsiasi codice, dedica un paio di minuti a verificare che tutti abbiano a portata il token del bot.'},
        {type:'code', lbl:'fase 2 — la funzione meteo', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:
    <span class="cc"># %C è la descrizione, %t la temperatura</span>
    base_url = <span class="cs">f"https://wttr.in/{city}?format=%C+%t"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        <span class="ck">return</span> response.text.<span class="cf">strip</span>()
    <span class="ck">return</span> <span class="cs">"Non è stato possibile recuperare i dati meteo. Riprova più tardi."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Meteo a {city}: {weather_info}"</span>)`},
        {type:'code', lbl:'fase 3 — una funzione lo trasforma in un bot parlante', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

<span class="ck">def</span> <span class="cf">speak</span>(text: <span class="ct2">str</span>):
    <span class="cs">"""Pronuncia il testo indicato usando pyttsx3."""</span>
    engine.<span class="cf">say</span>(text)
    engine.<span class="cf">runAndWait</span>()

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Meteo a {city}: {weather_info}"</span>)
    <span class="cf">speak</span>(weather_info)   <span class="cc"># parla sulla macchina che esegue il bot</span>

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'Un punto concettuale su cui gli studenti inciamperanno: la voce esce dal <strong>computer che esegue il bot</strong>, non da Discord. Il loro bot non parla a tutto il server: parla a loro. Dillo prima che provino, o ti faranno cinque volte la stessa domanda perplessa. È anche un modo naturale di introdurre l’idea che il codice viene eseguito in un posto preciso.'},
        {type:'text', h:'Dieci bot che vale la pena tenere in tasca', b:'La lezione elenca esempi che gli studenti possono adattare per i compiti e per il progetto finale: meteo, traduttore, assistente allo studio, presentatore di notizie, meditazione, allenamento, aiutante per i videogiochi, casa intelligente, prenotazioni e guida turistica. Leggine qualcuno ad alta voce durante la teoria: trasforma «aggiungi la voce a un bot» da esercizio in un menu di cose che forse vogliono davvero.'},
        {type:'tip', txt:'Manda il codice finale commentato agli studenti <strong>dopo</strong> la lezione, dato che il compito è migliorare il bot. La versione completa della terza fase nel piano ha ogni riga spiegata: usala come riferimento tuo mentre scrivi dal vivo, e nota che le risposte del test di M9L2 funzionano come un ripasso compatto dell’API di pyttsx3.'}
      ]},
      {t:'🎲 L3 — La costruzione autonoma e il futuro della voce', cards:[
        {type:'text', h:'Autonomia vera, con una rete di sicurezza', b:'La struttura: 5 minuti per spiegare e creare un buon clima, <strong>20 minuti per costruire un bot che interroga curiosità casuali da un’API e le dice ad alta voce</strong>, e poi 15 minuti in cui una persona condivide lo schermo e spiega il proprio codice riga per riga. Va bene qualsiasi fonte. Aiuta con i problemi tecnici e organizzativi ma <strong>lascia che lo implementino da soli</strong>: è una prova generale dell’hackathon che inizia nel modulo successivo.'},
        {type:'code', lbl:'lo schema a cui dovrebbero arrivare da soli', code:`<span class="ck">def</span> <span class="cf">get_fact</span>() -&gt; <span class="ct2">str</span>:
    <span class="cs">"""Recupera una curiosità casuale dall'API."""</span>
    base_url = <span class="cs">"https://uselessfacts.jsph.pl/random.json?language=en"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        data = response.<span class="cf">json</span>()
        <span class="ck">return</span> data.<span class="cf">get</span>(<span class="cs">"text"</span>, <span class="cs">"Non è stato possibile recuperare la curiosità."</span>)
    <span class="ck">return</span> <span class="cs">"Non è stato possibile recuperare i dati. Riprova più tardi."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">fact</span>(ctx):
    random_fact = <span class="cf">get_fact</span>()
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Ecco una curiosità: {random_fact}"</span>)
    <span class="cf">speak</span>(random_fact)`},
        {type:'hi', h:'La spiegazione riga per riga è la valutazione', b:'Quindici minuti in cui qualcuno racconta il proprio codice sono una verifica della comprensione migliore di qualsiasi test. Scegli chi lo ha costruito da solo, non chi ha finito più in fretta, e usa <code>data.get("text", "…")</code> come stimolo: perché un valore predefinito invece di <code>data["text"]</code>? Perché l’API potrebbe non restituire quel campo, che è lo stesso istinto difensivo di <code>try</code>/<code>except</code>.'},
        {type:'text', h:'Chiudi con la discussione, non con il codice', b:'Quindici minuti sull’integrare la sintesi vocale con l’IA, con la traduzione in altre lingue e su dove sta andando la tecnologia vocale. Chiedi l’opinione di tutti. L’obiettivo dichiarato è che gli studenti capiscano l’importanza di questo modulo <em>e</em> si rendano conto di aver esplorato solo una piccola parte di ciò che la tecnologia vocale può fare: lasciali con la sensazione che ci sia altro, non che l’argomento sia chiuso.'},
        {type:'tip', txt:'La lezione si apre con un test su Tally in cui gli studenti vedono le risposte corrette e i commenti alla fine. Diglielo in anticipo: trasforma il test da qualcosa a cui sopravvivere in qualcosa da cui imparare. E ricorda loro alla fine di preparare un progetto per la code review della lezione successiva.'}
      ]},
      {t:'🧼 L4 — Codice pulito, refactoring e flake8', cards:[
        {type:'text', h:'Cos’è il codice pulito, e la definizione da dare', b:'Codice <strong>facile da leggere, capire e mantenere</strong>, scritto puntando a qualità e struttura e non a velocità o minimo sforzo. Dedica dieci minuti a discutere le domande della slide prima di toccare il codice: chi ha appena passato un modulo a revisionare il lavoro dei compagni ha opinioni che vale la pena ascoltare.'},
        {type:'qa', h:'Perché conta — le ragioni a cui devono arrivare gli studenti', items:[
          {k:'Manutenzione', v:'Il codice pulito si capisce anche se non l’hai scritto tu, cosa vitale quando un progetto cresce e ci lavorano più persone.'},
          {k:'Meno errori', v:'Il codice ben strutturato nasconde meno bug, quindi si perde meno tempo a fare debug.'},
          {k:'Test più semplici', v:'Il codice diviso in parti piccole è facile da coprire con dei test.'},
          {k:'Flessibilità', v:'Il codice chiaro è più facile da ampliare quando i requisiti cambiano.'},
          {k:'Produttività del team', v:'Tutti riescono a capire la logica, indipendentemente da chi l’ha scritta.'},
          {k:'Refactoring più facile', v:'Migliorare il codice fa molto meno male quando la struttura era già logica.'},
          {k:'Inserimento di nuove persone', v:'Chi arriva si integra prima in un progetto pulito.'}
        ]},
        {type:'text', h:'La pratica — trova i problemi e poi automatizza il controllo', b:'Mostra il codice disordinato e dai agli studenti <strong>cinque minuti per trovare i problemi da soli</strong>, poi cinque minuti a turno per condividere ciò che hanno trovato e le correzioni. Solo a quel punto presenta <code>flake8</code> — dieci minuti per installarlo ed eseguirlo — e cinque minuti per correggere ciò che segnala. Quell’ordine conta: devono usare il proprio giudizio prima che lo faccia lo strumento, altrimenti impareranno a delegare il pensiero.'},
        {type:'twocol', left:{h:'I problemi dell’esempio', items:['<code>taxrate</code> è una costante ma non è in <code>MAIUSCOLO</code>','<code>Tax</code>: nome di funzione che inizia con la maiuscola','Funzioni intere scritte su una sola riga','Nessuno spazio fra i parametri né attorno al <code>+</code>','La nomenclatura ignora lo <code>snake_case</code>','Nessuna annotazione di tipo','Nessuna docstring','Calcoli delle tasse ripetuti invece di estratti','Nessuna validazione dell’input','Calcoli e stampa a console mescolati']}, right:{h:'Cosa fa il refactoring', items:['<code>TAX_RATE = 0.2</code> come costante con un nome','<code>calculate_tax()</code> in <code>snake_case</code>','Un’istruzione per riga, con l’indentazione corretta','Spaziatura secondo PEP 8 in tutto il codice','Nomenclatura coerente in <code>snake_case</code>','Annotazioni <code>(price: float) -&gt; float</code>','Una docstring in ogni funzione','La logica ripetuta estratta in funzioni','I valori validati prima dell’uso','Il calcolo separato dalla stampa']}},
        {type:'code', lbl:'la versione rifattorizzata', code:`<span class="cc"># Definisce l'aliquota come costante con un nome</span>
TAX_RATE = <span class="cn">0.2</span>

<span class="ck">def</span> <span class="cf">calculate_tax</span>(price: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Calcola l'imposta su un dato importo."""</span>
    <span class="ck">return</span> price * TAX_RATE

<span class="ck">def</span> <span class="cf">calculate_total_price</span>(*prices: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Somma i prezzi indicati."""</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

total_price = <span class="cf">calculate_total_price</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>, <span class="cn">400</span>)
tax         = <span class="cf">calculate_tax</span>(total_price)
final_price = total_price + tax

<span class="cf">print</span>(<span class="cs">"Prezzo finale:"</span>, final_price)`},
        {type:'good', txt:'Fai notare cosa può e cosa non può fare un linter. <code>flake8</code> rileva spaziatura, stile dei nomi e codice inutilizzato: problemi veri, ma superficiali. Non ti dirà mai che lo stesso calcolo compare tre volte, che una funzione fa due lavori scollegati o che un nome è tecnicamente valido ma non significa niente. Quel giudizio è loro, e dirlo è ciò che impedisce a «il linter è contento» di diventare sinonimo di «il codice va bene».'},
        {type:'text', h:'Il refactoring autonomo', b:'Venti minuti con il secondo esercizio, lavorando da soli: puoi aiutare su questioni tecniche, ma lascia che pensino loro. Poi spiegano cosa hanno sistemato. I miglioramenti da cercare: costanti per i valori dei punti, argomenti con nome per guadagnare flessibilità, docstring, un’unica funzione di output riutilizzabile invece di <code>print</code> ripetuti, e una struttura complessiva migliore.'},
        {type:'tip', txt:'È questa la lezione in cui collegare all’indietro con M6L4, dove è stato chiesto loro di commentare e strutturare i notebook, e in avanti con il progetto finale, che un compagno dovrà leggere e testare. Il codice pulito smette di essere una virtù astratta nel momento in cui qualcun altro deve eseguire il tuo progetto.'}
      ]}
    ],
    quiz:[
      {q:'Qual è la differenza fra riconoscimento vocale e sintesi vocale?', opts:['Il riconoscimento converte il parlato in testo o comandi; la sintesi converte il testo in parlato perché il computer «parli»','Il riconoscimento funziona offline e la sintesi online','Sono la stessa cosa descritta dal punto di vista di chi usa e di chi sviluppa','Il riconoscimento lavora sulle parole e la sintesi su intere frasi'], c:0, fb:'Le tre tecnologie sono controllo vocale (comandare con la voce), riconoscimento (voce → testo) e sintesi (testo → voce). Un assistente vocale le usa tutte e tre.'},
      {q:'Quali sono le tre fasi del funzionamento della sintesi vocale?', opts:['Analisi del testo per pause e intonazione, conversione delle parole in suoni da una base di suoni, e poi combinazione dei suoni in parlato fluido','Registrazione, compressione, riproduzione','Tokenizzazione, lemmatizzazione, generazione','Validazione dell’input, traduzione, output'], c:0, fb:'M9L1 la divide in analisi del testo, conversione da testo a suono usando una base con i suoni della lingua, e generazione del parlato puntando a una voce naturale.'},
      {q:'Perché pyttsx3 viene descritta come una soluzione offline?', opts:['Genera la voce localmente sul dispositivo, senza bisogno di connessione a internet','Mette in cache i file audio dopo la prima esecuzione','Funziona solo con file di testo salvati in locale','Usa il pacchetto vocale del sistema scaricato una volta per sessione'], c:0, fb:'pyttsx3 genera la voce sul dispositivo stesso: è una delle risposte del test di M9L2 e un vantaggio pratico reale rispetto alla sintesi via API.'},
      {q:'Perché il corso usa wttr.in per il bot meteo?', opts:['Restituisce il meteo con una semplice richiesta HTTP, senza account né chiave API, quindi nessuno si blocca su una registrazione e non c’è nessuna chiave che possa trapelare','È il servizio meteo più preciso in circolazione','È l’unico servizio che restituisce testo semplice','Offre anche la sintesi vocale oltre al meteo'], c:0, fb:'Senza account e senza chiave API, la lezione resta concentrata sul combinare bot, API e sintesi invece che sull’autenticazione.'},
      {q:'Uno studente esegue il bot meteo parlante e chiede perché nessun altro sul server Discord lo senta. Qual è la risposta?', opts:['La voce viene generata sul computer che esegue il bot, non viene inviata tramite Discord — il bot parla a chi lo sta eseguendo','Non sono attivi i permessi vocali del bot','Deve prima entrare in un canale vocale','pyttsx3 ha bisogno di internet per trasmettere'], c:0, fb:'È un punto genuinamente confuso da anticipare, ed è un modo naturale di introdurre l’idea che il codice viene eseguito in un posto preciso.'},
      {q:'Come si tiene gestibile la costruzione di M9L2 in una lezione di live coding?', opts:['Si divide in tre fasi — bot base, poi la chiamata API, poi la sintesi — con una verifica dopo ciascuna che tutti stiano al passo','Il tutor la scrive mentre gli studenti guardano e copiano alla fine','Ogni studente costruisce una fase e poi si combinano','Si consegna il codice finito all’inizio e lo si spiega'], c:0, fb:'Tre fasi con un punto di controllo dopo ciascuna, più un paio di minuti iniziali per confermare che tutti abbiano pronto il token del bot.'},
      {q:'In M9L3, cosa valuta davvero la fase di presentazione di 15 minuti?', opts:['La comprensione — una persona racconta il proprio codice riga per riga, il che rivela molto più di un test','Le capacità di presentazione in vista dell’hackathon','Se il bot è privo di errori','La velocità di implementazione'], c:0, fb:'Qualcuno che spiega il proprio codice riga per riga è la verifica vera. Scegli chi lo ha costruito da solo, non chi ha finito più in fretta.'},
      {q:'Perché la lezione sul codice pulito fa trovare i problemi agli studenti PRIMA di presentare flake8?', opts:['Perché usino prima il proprio giudizio — altrimenti imparano a delegare il pensiero allo strumento','Perché flake8 impiega dieci minuti a installarsi','Perché flake8 trova problemi diversi da quelli che trovano le persone','Perché il tutor possa valutare le loro risposte prima che lo strumento corregga'], c:0, fb:'L’ordine è voluto: cinque minuti a cercare problemi, cinque a condividerli, e poi lo strumento. Prima il giudizio, poi l’automazione.'},
      {q:'Quale problema dell’esempio disordinato NON verrebbe rilevato da flake8?', opts:['Che lo stesso calcolo delle tasse si ripete più volte e andrebbe estratto in una funzione','Mancano gli spazi attorno all’operatore +','Un nome di funzione che inizia con la maiuscola','Una costante che non è in maiuscolo'], c:0, fb:'Un linter rileva spaziatura, stile dei nomi e codice inutilizzato. La logica duplicata, una funzione che fa due lavori o un nome valido ma privo di senso richiedono giudizio umano.'},
      {q:'Quale di questi è un miglioramento di codice pulito introdotto dal refactoring di M9L4?', opts:['Aggiungere docstring e annotazioni di tipo, e separare il calcolo dalla stampa a console','Unire le funzioni in righe singole per ridurre la dimensione del file','Togliere tutti i commenti così il codice parla da sé','Rinominare le variabili con una sola lettera per brevità'], c:0, fb:'Il refactoring introduce una costante con un nome, nomenclatura in snake_case, un’istruzione per riga, docstring, annotazioni di tipo, funzioni estratte, validazione e la separazione fra calcolo e output.'}
    ]
  },
  {
    id:14, emoji:'🎓', color:'#EF4444',
    title:'M10 — L’hackathon e il progetto finale',
    desc:'Modulo 10 del corso: la commessa sul cambiamento climatico, brainstorming e scelta del tipo di progetto, capacità di presentazione, documentazione dei test e liste di controllo, test fra pari e preparazione alla consegna finale.',
    obj:'Condurre il finale. Devi saper impostare un hackathon, condurre un brainstorming che si chiuda con un’idea assunta, aiutare gli studenti a scegliere un tipo di progetto adatto alle loro competenze, insegnare le liste di controllo per presentazione e test, condurre un giro di test fra pari con commenti costruttivi e portare tutti alla consegna finale con qualcosa di finito.',
    prep:'~2–3 ore, più il tempo continuo di affiancamento una volta partiti i progetti.',
    practical:{
      intro:'Prima di insegnare qualsiasi lezione del Modulo 10 del corso, devi aver fatto di persona:',
      items:[
        'Condotto un brainstorming fino a una decisione assunta — anche solo da solo, su carta, per sentirne la forma',
        'Scelto un tipo di progetto per un’idea e scritto perché quel tipo si adatta',
        'Preparato una presentazione di un minuto di un progetto usando le otto regole, e cronometrata',
        'Scritto una lista di controllo per i test usando i cinque passaggi e testato con essa un tuo progetto',
        'Clonato un progetto che non avevi scritto, preparato il suo ambiente e riuscito a eseguirlo',
        'Scritto un commento in tre parti — aspetti positivi, errori e raccomandazioni — sul codice di un’altra persona',
        'Riletto le tue costruzioni dei Moduli 5–13, perché gli studenti ti chiederanno di ciascuna di esse'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Tre lezioni prima della consegna finale: <strong>L1</strong> la commessa sul cambiamento climatico, il brainstorming, la scelta del tipo di progetto e la presentazione di ciò che verrà dopo; <strong>L2</strong> capacità di presentazione, risposte alle domande preparate dagli studenti, costruzione della funzionalità principale e creazione di una lista di controllo per i test; <strong>L3</strong> risolvere i problemi principali, test fra pari con la lista, la Scheda della Creatività e la preparazione alla consegna finale.',
          why:'Tutto il corso esiste per rendere possibile questo. È anche il punto in cui cambia il profilo di rischio: il pericolo non è più che gli studenti non sappiano programmare, ma che scelgano qualcosa che non riescono a finire.',
          learn:'Gli studenti indagano un problema reale, generano un’idea e ci si impegnano, scelgono quale tipo di progetto si adatti, creano un repository pubblico, presentano in un minuto, costruiscono la funzionalità centrale, scrivono una lista di controllo per i test, testano con essa il progetto di un compagno, danno e ricevono commenti e preparano una presentazione.',
          confident:'Condurre un brainstorming fino a una decisione assunta; aiutare ad abbinare idea e tipo di progetto; le otto regole di presentazione; cos’è la documentazione dei test e i cinque passaggi di una lista di controllo; e tenere la portata abbastanza piccola da poter finire.'
        }
      ]},
      {t:'🌍 L1 — La commessa, il brainstorming e la decisione', cards:[
        {type:'text', h:'Il problema: il cambiamento climatico, indagato e non spiegato', b:'Dai agli studenti cinque minuti per cercare da soli articoli dell’ONU e trovare le risposte a quattro domande: <strong>cos’è il cambiamento climatico</strong>, <strong>quanto è grave e se ci riguarda</strong>, <strong>cosa lo provoca</strong> e <strong>come possiamo rallentarlo</strong>. Puoi distribuire le responsabilità — una persona per domanda — e poi mettere in comune. Dopo spiega cos’è un hackathon e cosa li aspetta nel modulo.'},
        {type:'text', h:'Il brainstorming, con una decisione vera alla fine', b:'Per prima cosa, ciascuno crea un <strong>nuovo repository pubblico su GitHub</strong> per il proprio progetto. Poi cinque minuti su una lavagna condivisa a generare risposte a una domanda: come possiamo risolvere il problema del cambiamento climatico? Le regole di sempre: <strong>nessuna valutazione durante la generazione</strong>, annotate anche le idee assurde. Nota la sfumatura del piano: generano <em>soluzioni a problemi</em>, non idee di progetto; la tecnologia viene dopo. Poi valutate: quali idee si potrebbero rifinire e migliorare? Infine ciascuno ne sceglie una e la <strong>scrive nel README del proprio repository</strong>.'},
        {type:'good', txt:'Farli impegnare nel README e non in chat è un dettaglio piccolo ed eccellente. È pubblico, è permanente, e fa iniziare la lezione successiva con tutti che hanno un’idea dichiarata e non un’intenzione vaga. Non lasciarti sfuggire questa fase.'},
        {type:'text', h:'Scegliere il tipo di progetto', b:'Ora la decisione tecnologica. Chiedi: il corso sta finendo, che tipi di progetto abbiamo imparato a costruire? Ricorda loro in quali lezioni stanno le risposte, se serve. Poi falli scegliere il tipo che useranno per realizzare la loro idea <strong>e spiegare perché</strong>, annotandolo anch’esso nel README. Giustificare la scelta è l’obiettivo: abbinare una soluzione agli strumenti che hai davvero è esattamente il giudizio introdotto da M6L3.'},
        {type:'qa', h:'Il menu che dovrebbero saper richiamare', items:[
          {k:'Un bot Discord', v:'Comandi, file, API, facoltativamente con il proprio modello di visione.'},
          {k:'Un sito in Flask', v:'Template, moduli, database, accesso, pubblicato su un URL vero.'},
          {k:'Uno script o un notebook Colab', v:'Elaborazione di immagini, scraping, NLP, rilevamento.'},
          {k:'Un progetto con la voce', v:'Trascrizione, traduzione o sintesi aggiunte a uno qualsiasi dei precedenti.'}
        ]},
        {type:'warn', txt:'La fase finale di questa lezione presenta gli altri corsi Kodland e include un test i cui risultati vanno al team commerciale, vengono registrati per studente e condivisi con le famiglie. Sii chiaro su cosa sia: conducilo con cordialità e onestà, non commentare le singole risposte mentre rispondono e non forzare la vendita. La tua credibilità con il gruppo vale più di un contatto commerciale.'},
        {type:'tip', txt:'Dopo la lezione, <strong>raccogli tutte le idee in un unico posto e mandale al gruppo</strong> — screenshot o un elenco di link — così gli studenti vedono e commentano i piani degli altri. Il compito a casa è preparare un modello di progetto con le librerie installate <em>e</em> un elenco scritto di dubbi implementativi, ed è questo che fa funzionare la lezione successiva.'}
      ]},
      {t:'🎤 L2 — Presentare, costruire e la lista di controllo', cards:[
        {type:'warn', txt:'Due cose da fare <strong>prima</strong> di questa lezione: raccogliere tutte le domande che gli studenti hanno scritto nei compiti in un unico elenco visibile (un documento, una slide, una lavagna) e decidere in anticipo i gruppi delle stanze separate, raggruppando per domande simili o tipi di progetto simili. Improvvisarlo in aula spreca la fase.'},
        {type:'qa', h:'Le categorie dell’hackathon', items:[
          {k:'🎤', v:'La presentazione migliore'},
          {k:'🧩', v:'La soluzione tecnica più complessa'},
          {k:'✨', v:'Il progetto con l’aspetto migliore su Git'},
          {k:'🎯', v:'La soluzione più applicabile'}
        ]},
        {type:'text', h:'Di’ l’avvertimento che le accompagna', b:'Le categorie permettono agli studenti di puntare a un obiettivo che si sposa con i loro punti di forza, ma di’ loro ciò che il piano aggiunge subito dopo: questo <strong>non</strong> significa specializzarsi in una sola direzione. Un progetto davvero buono è buono sotto ogni aspetto. Le categorie sono motivazione, non permesso di trascurare tre quarti del lavoro.'},
        {type:'text', h:'Le otto regole di presentazione', b:'Fai leggere le regole e chiedi quali vedono per la prima volta, poi falle applicare subito: <strong>un minuto</strong> a testa per presentare la propria idea e i risultati dei compiti, con il timer sullo schermo. Se pensi che faranno fatica, <strong>inizia tu</strong>: fai una presentazione di un minuto di un tuo progetto e sottolineane i punti principali.'},
        {type:'twocol', left:{h:'Regole da 1 a 4', items:['<strong>Preparati</strong>: tieni materiali e dati aperti e pronti','<strong>Definisci l’obiettivo</strong>: sappi quale messaggio e quale risultato vuoi','<strong>Dalle una struttura</strong>: introduzione, corpo principale, conclusione','<strong>Usa un linguaggio semplice</strong>: e spiega ogni termine che sei costretto a usare']}, right:{h:'Regole da 5 a 8', items:['<strong>Esercitati</strong>: davanti allo specchio o a qualcuno, per stile e sicurezza','<strong>Coinvolgi</strong>: parla con il pubblico, fagli delle domande','<strong>Controlla il tempo</strong>: non correre e non dilungarti','<strong>Preparati alle domande</strong>: anticipale; dimostra competenza']}},
        {type:'text', h:'Le fasi di sviluppo', b:'Gli studenti passano nelle stanze separate raggruppati per domanda o per tipo di progetto e iniziano a costruire la logica, scambiandosi idee e cercando soluzioni insieme. <strong>Tu ti muovi fra le stanze rispondendo alle domande dell’elenco</strong>, segnando ciascuna come risolta per poter mostrare dopo l’elenco completato. Poi tutti tornano nella stanza principale per continuare, incoraggiando le domande generali così si aiutano a vicenda.'},
        {type:'text', h:'Documentazione dei test e la lista di controllo', b:'La <strong>documentazione dei test</strong> è l’insieme di documenti e istruzioni usati per pianificare ed eseguire i test: come verificare che il software funzioni e come trovare ed eliminare gli errori. Esiste per garantire la qualità, documentare i problemi trovati, semplificare la comunicazione su cosa va testato e poter essere rieseguita dopo modifiche future. Poi costruite <strong>un’unica lista di controllo universale per tutto il gruppo</strong>, usando come riferimento le griglie di valutazione delle lezioni precedenti, e manda agli studenti la versione finale.'},
        {type:'qa', h:'I cinque passaggi per costruire una lista di controllo', items:[
          {k:'1. Individuare gli obiettivi', v:'Cosa vuoi testare davvero: funzionalità, interfaccia, prestazioni, sicurezza?'},
          {k:'2. Dividere in categorie', v:'Sezioni come «Funzionalità», «Interfaccia», «Sicurezza».'},
          {k:'3. Descrivere i risultati attesi', v:'Per ogni categoria, cosa dovresti vedere? Descrivi il comportamento atteso.'},
          {k:'4. Aggiungere attività per categoria', v:'Voci concrete; per esempio, in Funzionalità, «verificare che la registrazione utente funzioni».'},
          {k:'5. Stabilire le priorità', v:'Quali attività contano di più e vanno testate per prime.'}
        ]}
      ]},
      {t:'🏁 L3 — Test fra pari, commenti e preparazione alla consegna', cards:[
        {type:'warn', txt:'<strong>Verifica lo stato del progetto di ogni studente prima di questa lezione.</strong> L’ordine delle fasi dipende da questo: se i progetti funzionano davvero, fai prima la fase dei test fra pari; altrimenti aiutali a finirli e testate dopo. Prepara anche in anticipo l’ordine delle presentazioni così la fase scorre.'},
        {type:'text', h:'L’apertura onesta', b:'Ciascuno dedica <strong>un minuto a descrivere il problema principale del proprio progetto</strong>: non le sue funzionalità, il suo problema. Timer acceso, ordine concordato in anticipo. Questo crea un clima in cui essere bloccati è normale e dicibile, che è esattamente ciò che ti serve nell’ultima settimana prima della consegna.'},
        {type:'text', h:'Test fra pari, ben strutturati', b:'Assegna a ciascuno il progetto di un compagno. Lo <strong>clonano</strong>, si assicurano di avere accesso a tutto ciò che serve, preparano l’ambiente dal Pipfile e percorrono la <strong>lista di controllo condivisa</strong>, annotando i risultati. Rimanda la lista nel caso qualcuno l’avesse persa. Poi preparano i commenti in tre parti: gli <strong>aspetti positivi</strong>, gli <strong>errori trovati</strong> e le <strong>raccomandazioni per correggerli</strong>. I commenti si scambiano nella chat generale così puoi moderarli.'},
        {type:'good', txt:'Di’ l’inquadramento ad alta voce prima che inizino: <strong>questo non fa parte di alcuna valutazione, è aiutarsi a vicenda.</strong> I commenti devono essere costruttivi e corretti, senza osservazioni negative od offensive. Se qualcuno fatica a formulare qualcosa, aiutalo a trovare le parole. Sbagliare questo nell’ultima settimana è peggio che non farlo affatto.'},
        {type:'hi', h:'La cosa più importante che dirai in tutto il modulo', b:'Dopo i commenti, ci sarà chi vorrà ricostruire tutto prima della consegna. Stroncalo subito, con le parole del piano stesso: <strong>completa il progetto finale senza complicarlo troppo.</strong> Concentrati su ciò che si può finire nel tempo disponibile e rimanda i miglioramenti. Un progetto semplice e finito, presentato con sicurezza, batte ogni volta uno ambizioso lasciato a metà, ed è questo il momento in cui hanno più bisogno di sentirselo dire.'},
        {type:'text', h:'La Scheda della Creatività', b:'Un modulo che ciascuno compila durante le lezioni, con la <strong>descrizione del progetto finale</strong>, la sua <strong>originalità</strong>, gli <strong>ostacoli</strong> incontrati e i <strong>progressi</strong>. Assicurati che lo completino tutti: li aiuta nella lezione di presentazione, ed è il modo in cui tu segui dove si trova davvero ogni progetto.'},
        {type:'tip', txt:'Il compito a casa è preparare la presentazione: Google Slides oppure il README del progetto. Segnala anche le istruzioni per la preparazione alla consegna finale: bisogna scaricare e impostare uno sfondo festivo, e le istruzioni dicono cos’altro va tenuto pronto. Insisti su questo, perché chi arriva impreparato alla consegna ricorda quello, e non il progetto che ha costruito.'}
      ]}
    ],
    quiz:[
      {q:'Nel brainstorming di M10L1, cosa stanno generando esattamente gli studenti?', opts:['Soluzioni al problema del cambiamento climatico — il tipo di progetto e la tecnologia si scelgono dopo','Idee di progetto con la tecnologia già decisa','Un elenco di librerie che vogliono usare','Nomi per i loro repository'], c:0, fb:'La nota è precisa: non bisogna generare idee di progetto, ma soluzioni a problemi. Abbinare una tecnologia alla soluzione è la fase successiva.'},
      {q:'Dove annotano gli studenti l’idea a cui si impegnano?', opts:['Nel README del nuovo repository pubblico GitHub che creano — pubblico e permanente','Nella chat di gruppo su WhatsApp','Negli appunti del tutor','Solo sulla lavagna condivisa del brainstorming'], c:0, fb:'Sia l’idea scelta sia, più tardi, il tipo di progetto finiscono nel README del repository, così la lezione successiva inizia con un piano dichiarato per ciascuno.'},
      {q:'Perché il corso fa spiegare agli studenti PERCHÉ hanno scelto un certo tipo di progetto?', opts:['Perché abbinare una soluzione agli strumenti che hai davvero è il giudizio professionale che il corso costruisce fin da M6L3','Perché il tutor ne ha bisogno per assegnare il voto','Perché la piattaforma richiede una giustificazione scritta','Per decidere le categorie dell’hackathon'], c:0, fb:'Scegliere uno strumento adatto al problema e alle proprie capacità è un vero giudizio ingegneristico, introdotto valutando se YOLO fosse adatto all’input.'},
      {q:'Quale avvertimento accompagna le quattro categorie dell’hackathon?', opts:['Permettono di puntare ai propri punti di forza, ma un progetto davvero buono è buono sotto ogni aspetto — non è una scusa per specializzarsi','Si può concorrere a una sola categoria per persona','Le categorie sono decise dal voto degli studenti','Vincere una categoria sostituisce la presentazione finale'], c:0, fb:'Il piano lo dice subito dopo averle elencate: questo non significa che tu debba specializzarti in una sola direzione.'},
      {q:'Cosa devi preparare PRIMA di insegnare M10L2?', opts:['Un unico elenco visibile di tutte le domande che gli studenti hanno scritto nei compiti, più i gruppi delle stanze decisi in anticipo','La lista di controllo finita per tutto il gruppo','Una dimostrazione di ogni tipo di progetto','Le slide della consegna finale'], c:0, fb:'La nota ti chiede di organizzare le domande in un elenco da mostrare al gruppo e di decidere i gruppi in anticipo, per domande o progetti simili.'},
      {q:'Cos’è la documentazione dei test, secondo la definizione del corso?', opts:['L’insieme di documenti e istruzioni usati per pianificare ed eseguire i test: come verificare che il software funzioni e come trovare ed eliminare gli errori','Un registro di tutti i bug che un progetto ha mai avuto','Il README del progetto','La griglia di valutazione del tutor'], c:0, fb:'Esiste per garantire la qualità, documentare i problemi trovati, semplificare la comunicazione su cosa va testato e poter essere rieseguita dopo le modifiche.'},
      {q:'Uno studente ha letto i commenti del compagno e ora vuole ricostruire tutto il progetto prima della consegna. Cosa gli dici?', opts:['Di completarlo senza complicarlo troppo — di concentrarsi su ciò che si può finire nel tempo disponibile e rimandare i miglioramenti','Di ricostruirlo, visto che i commenti hanno segnalato problemi veri','Di presentare la versione attuale dicendo che è incompleta','Di passare del tutto a un tipo di progetto più semplice'], c:0, fb:'È il consiglio esplicito dei suggerimenti di M10L3: finire senza complicare troppo, concentrarsi su ciò che sta nel tempo e lasciare i miglioramenti a dopo.'},
      {q:'Come vanno inquadrati i commenti fra pari prima che inizino?', opts:['Come aiuto reciproco, e non come parte di una valutazione — costruttivi e corretti, senza osservazioni negative od offensive','Come esercizio valutato, così lo prendono sul serio','Come una gara a chi trova più errori','Come anonimi, così possono essere diretti'], c:0, fb:'Il piano è categorico: i commenti devono essere costruttivi e corretti, ed è importante dire che questo non fa parte della valutazione ma è un modo di aiutarsi.'},
      {q:'Cos’è la Scheda della Creatività e perché conta?', opts:['Un modulo con la descrizione del progetto, la sua originalità, gli ostacoli e i progressi — aiuta gli studenti nella presentazione e mostra a te dove si trova ogni progetto','Un attestato consegnato alla fine','Una scheda con suggerimenti per chi non ha idee','Il modulo per i commenti dei test fra pari'], c:0, fb:'Assicurati che la completino tutti: sostiene gli studenti nella lezione di presentazione e ti permette di seguire i progressi reali di ogni progetto.'},
      {q:'Come dovresti condurre la fase di M10L1 che presenta gli altri corsi Kodland?', opts:['Con cordialità e onestà, senza forzare la vendita, e senza commentare le singole risposte mentre gli studenti rispondono','Saltarla, visto che non è contenuto tecnico','Insistere sul fatto che devono continuare con un altro corso','Assegnarla come compito a casa'], c:0, fb:'Il piano ti chiede di non commentare ogni domanda, così rispondono senza influenze esterne. Condurla con onestà protegge la tua credibilità con il gruppo.'}
    ]
  },
  {
    id:15, emoji:'📋', color:'#6366F1',
    title:'Il mestiere di condurre le lezioni',
    desc:'Le competenze di conduzione più profonde: applicare bene i cinque metodi, differenziazione, rispondere a ciò che non sai, gestione della classe, valutare lavoro fatto a metà, adattarsi alle lezioni individuali da 50 minuti e le otto tecniche di riflessione.',
    obj:'Padroneggiare la conduzione, non i contenuti. Il Modulo 3 ti ha dato lo scheletro di una lezione e i nomi dei metodi; questo modulo ti rende bravo a usarli. Alla fine dovresti saper differenziare al volo, gestire una domanda che va oltre le tue conoscenze senza perdere il gruppo, valutare con equità codice che funziona a metà, ridurre una lezione da 90 minuti a 50 e chiudere ogni lezione con una riflessione che consolidi ciò che è stato imparato.',
    prep:'~3 ore. Meglio leggerlo dopo aver affrontato i moduli sui contenuti.',
    practical:{
      intro:'Prima del test, prova ciò che è difficile fare a freddo:',
      items:[
        'Detto ad alta voce la formula del «non lo so, scopriamolo» finché non è suonata naturale e non come una scusa',
        'Preso un piano di lezione da 90 minuti e scritto la sua versione individuale da 50 minuti',
        'Valutato un frammento di codice che funziona a metà con i criteri del corso e motivato il voto',
        'Scelto tre tecniche di riflessione che sai condurre senza alcuna preparazione',
        'Scritto il tuo elenco di compiti aggiuntivi per chi finisce presto, modulo per modulo'
      ]
    },
    sections:[
      {t:'🧭 Quadro generale e obiettivi', cards:[
        {type:'brief',
          overview:'Il mestiere della conduzione che poggia sullo scheletro della lezione: applicare <em>bene</em> i cinque metodi, la differenziazione, <strong>rispondere a domande che vanno oltre le tue conoscenze</strong>, la gestione della classe, <strong>valutare il lavoro parziale</strong>, adattare una lezione da 90 minuti al formato <strong>individuale da 50 minuti</strong> e le otto tecniche di riflessione.',
          why:'Conoscere i contenuti è necessario ma non sufficiente. Chi padroneggia Flask alla perfezione e conduce male la lezione perde il gruppo; chi sa gestire la classe si riprende da qualsiasi cosa, incluso il non conoscere una risposta.',
          learn:'Niente di nuovo per gli studenti: questo modulo riguarda <em>te</em>. È lo strato che determina se gli altri quindici moduli attecchiscono.',
          confident:'Condurre correttamente LiveCoding e UMC; le mosse di differenziazione in entrambe le direzioni; una formula per il «non lo so»; come valutare codice che funziona a metà; cosa tagliare in una lezione individuale; e tre tecniche di riflessione che sai condurre a freddo.'
        },
        {type:'tip', txt:'Il Modulo 3 ha coperto lo scheletro della lezione e il significato dei cinque nomi dei metodi. Questo modulo lo dà per acquisito e va più a fondo. Se «EduScrum», «LiveCoding» o «Usa–Modifica–Crea» sono ancora sfocati, torna prima al Modulo 3: il resto attecchirà meglio.'}
      ]},
      {t:'🙋 Quando non conosci la risposta', cards:[
        {type:'text', h:'Succederà, e prima di quanto pensi', b:'Python Pro è un corso avanzato e alcuni di questi studenti sono molto svegli. Qualcuno chiederà cos’è davvero un hash, o come decide la rete neurale, o perché esista <code>Client</code> se <code>Bot</code> è migliore. Se arrivi a questo lavoro da fuori dello sviluppo, ti chiederanno qualcosa a cui non sai rispondere nelle prime lezioni. È <strong>normale e sopravvivibile</strong>: ciò che conta è aver deciso in anticipo come lo gestirai.'},
        {type:'qa', h:'Le tre mosse, e quando usarle', items:[
          {k:'Cercarlo insieme — l’opzione predefinita', v:'«Bella domanda, non sono sicuro. Scopriamolo, dove andremmo a guardare?» E poi fallo davvero, condividendo lo schermo. È l’opzione più potente perché <em>è</em> la lezione M1L4: nessuno conosce una libreria a memoria, e trovare la risposta è la competenza professionale. Non stai coprendo una lacuna, stai mostrando proprio ciò che dovresti insegnare.'},
          {k:'Metterla da parte e tornarci', v:'Quando sei a metà di uno sprint e il tempo stringe: «Quella domanda è ottima e voglio darti una risposta come si deve, ti scrivo stasera nella chat di gruppo». <strong>E poi fallo davvero.</strong> Una domanda ripresa genera più fiducia di una risposta immediata; una dimenticata costa più di quanto sarebbe costato ammettere di non saperlo.'},
          {k:'Nominare il limite con onestà', v:'Quando la domanda va davvero oltre il corso: «Questo va oltre dove arriva il corso e, sinceramente, oltre ciò che conosco bene. La versione breve di cui sono sicuro è…», e poi dai ciò che sai. Gli studenti rispettano un limite chiaro molto più di una risposta vaga.'}
        ]},
        {type:'warn', txt:'L’unica mossa che ti costa davvero l’aula è <strong>tirare a indovinare con sicurezza</strong>. Gli studenti verificano le risposte: le incolleranno in un motore di ricerca durante la lezione. Sbagliare con tono sicuro è ciò che distrugge la tua credibilità; dire «non lo so» non lo fa mai. Ripetilo ad alta voce qualche volta prima della tua prima lezione, finché non smette di suonare come una confessione.'},
        {type:'good', txt:'Ribaltalo: chi dice «non lo so, scopriamolo» davanti a degli adolescenti sta mostrando esattamente il comportamento che il corso vuole da loro. Il gioco «tutti contro uno» di M6L1 esiste per aiutarli a superare la paura di fare una domanda. Non puoi insegnare a superare quella paura fingendoti onnisciente.'},
        {type:'tip', txt:'Fai anche il lavoro noioso di prevenzione: leggi bene il piano e i materiali della lezione successiva e annota i due o tre punti in cui ti senti debole. La maggior parte delle domande senza risposta è prevedibile dai contenuti: i decoratori in M1L3, <code>async</code> in tutte le lezioni sui bot, l’hashing in M4L2, come impara davvero il modello in M5L4. Il Modulo 2 della formazione copre i primi tre.'}
      ]},
      {t:'🧑‍🤝‍🧑 Gestire una classe di adolescenti online', cards:[
        {type:'qa', h:'Le situazioni che incontrerai davvero', items:[
          {k:'Qualcuno non accende la telecamera', v:'I piani ti chiedono di verificare che telecamere e microfoni funzionino, e riguarda la partecipazione, non la sorveglianza. Non trasformarlo in uno scontro davanti al gruppo: chiedi una volta, in pubblico e con leggerezza; se continua, chiedi in privato se c’è qualcosa. Partecipare in chat e nei compiti conta più di un volto visibile.'},
          {k:'Una persona domina tutto', v:'Usa le strutture invece della tua autorità: il gioco della «palla», in cui chi parla sceglie la persona successiva, la regola per cui nessuno risponde due volte di fila, e chiedere per nome l’opinione a qualcuno di più silenzioso. Lascia che sia il formato a porre il limite.'},
          {k:'Qualcuno disturba o si è disconnesso', v:'Dagli un compito. In questo corso è facile: fagli guidare un’installazione, condividere lo schermo o spiegare la sua soluzione. Disturbare di solito è segno di poco impegno, e il corso è pieno di ruoli legittimi da distribuire.'},
          {k:'Una stanza separata non funziona', v:'Entraci. I piani prevedono già che ti muova fra le stanze. Se una coppia si è bloccata, ripeti l’obiettivo concreto e il tempo che resta: i compiti vaghi bloccano le coppie più in fretta della difficoltà.'},
          {k:'Nessuno risponde alla tua domanda', v:'Quasi sempre la domanda era troppo grande. Riducila: non «come lo risolveremmo?», ma «di che tipo deve essere questa variabile?». I piani di lezione modellano continuamente domande strette e a cui si può rispondere.'},
          {k:'Qualcuno resta in silenzio tutta la lezione', v:'Annotalo e agisci nella lezione successiva: il controllo dei compiti è la tua lettura di chi si sta disimpegnando. Chiedigli qualcosa che sai che sa rispondere, così la prima cosa che dice è un successo.'}
        ]},
        {type:'good', txt:'Il corso ti dà una quantità insolita di buona volontà con cui lavorare: gli studenti costruiscono cose che hanno scelto, per problemi che hanno scelto, e le pubblicano. Appoggiati a questo quando l’attenzione cala. «Per chi è questo?» e «cosa renderebbe diverso il tuo?» riagganciano un adolescente molto meglio di «attenzione, per favore».'},
        {type:'warn', txt:'Due cose da non fare, entrambe esplicite nei piani: non essere negativo con chi non ha fatto i compiti, e non additare nessuno perché non ha l’attrezzatura o ha una macchina lenta. Entrambe di solito riguardano le circostanze di casa e non l’impegno.'}
      ]},
      {t:'🎓 I cinque metodi, fatti bene', cards:[
        {type:'text', h:'1. Scrum ed EduScrum', b:'Usato dalla M1L2 in poi e insegnato esplicitamente nel Modulo 8 del corso. La lezione è divisa in <strong>sprint</strong> con limiti di tempo rigidi, ciascuno aperto da una discussione breve e chiuso da un bilancio. Le due domande del bilancio sono fisse: <strong>«abbiamo davvero raggiunto il risultato?»</strong> e <strong>«come ci avvicina alla soluzione del problema principale?»</strong>. Le lezioni EduScrum più complete aggiungono una retrospettiva con tre domande: cosa avete ottenuto e se è bastato il tempo; quale fase è stata la più difficile; come migliorereste questo sprint.'},
        {type:'text', h:'2. LiveCoding', b:'Il tutor costruisce il codice <strong>gradualmente, insieme agli studenti</strong>, condividendo lo schermo, perché vedano il programmare come un flusso di piccole decisioni e non come un oggetto finito. Parla mentre programmi, fai domande per tenere alta l’attenzione, spiega la logica di ogni mossa, <strong>sbaglia di proposito e chiedi di trovare gli errori</strong>, non correre, fai pause perché ti raggiungano, usa gli strumenti di disegno di Zoom per visualizzare la logica, usa caratteri grandi e chiari, e scrivi in blocchi di codice così la struttura si vede.'},
        {type:'text', h:'3. Usa–Modifica–Crea', b:'Usato in M1L3 e M6L1. Gli studenti prima <strong>usano</strong> codice funzionante — lo eseguono, lo vedono funzionare, sperimentano liberamente — poi lo <strong>modificano</strong> mentre tu spieghi cosa fa ogni cambiamento, e solo allora <strong>creano</strong> la propria versione. Fai i primi due passaggi in ordine e resisti alla tentazione di spiegare presto: cinque minuti di «cambia qualcosa e rilancia» producono domande migliori di qualsiasi spiegazione frontale.'},
        {type:'text', h:'4. Metacognizione', b:'Introdotta in M2L1 come il «treno della metacognizione»: cinque soste programmate lungo la lezione per enunciare gli obiettivi; chiedersi come abbia aiutato la conoscenza precedente; individuare strumenti e strategie usati; valutare se quelle strategie hanno funzionato; e riflettere se si trasferiscano fuori dal corso. Leggi il quaderno del tutor prima di condurla. La mossa più utile che ti dà: la frustrazione di qualcuno è <strong>informazione valida sulla strategia che ha scelto</strong>, non una prova sulle sue capacità.'},
        {type:'text', h:'5. Gamificazione', b:'Non è decorazione: è il meccanismo con cui si trasmette una teoria che altrimenti sarebbe una lezione frontale. Il repertorio del corso: squadre da quiz nel <strong>tris</strong> (M5L4), <strong>«tutti contro uno»</strong> con una persona esperta (M6L1), il gioco della <strong>«palla»</strong> in cui chi parla sceglie chi segue (M1L3), le cacce al codice da due minuti <strong>«trovalo se ci riesci»</strong> (M3L4), le <strong>gare di accuratezza</strong> (M5L4, M6L2) e la <strong>gara del meme migliore</strong> (M3L4). Diversi di questi distribuiscono anche automaticamente la parola: la regola per cui nessuno risponde due volte di fila fa per la partecipazione più che interpellare direttamente chi tace.'},
        {type:'tip', txt:'Quando la nota di una lezione nomina un metodo, ti sta dicendo che la lezione non funzionerà in altro modo. Una lezione UMC condotta come spiegazione frontale, o una lezione EduScrum senza controllo dei tempi, produce una fase che sfora e un gruppo disimpegnato. Leggi la nota in cima al piano prima di ogni altra cosa.'}
      ]},
      {t:'⚖️ Differenziazione', cards:[
        {type:'twocol', left:{h:'🚀 Per chi è avanti', items:['Usa i <strong>compiti aggiuntivi</strong> già previsti (⭐️ / «Agg.»): ci sono in quasi ogni lezione','Fagli <strong>condividere lo schermo e guidare</strong> un’installazione o una fase di live coding','Chiedigli una <strong>mini lezione</strong> per i compagni','Indirizzalo alla <strong>documentazione</strong> con un compito più profondo dentro il tema di oggi','Dagli la versione aperta «rendilo tuo» del progetto']}, right:{h:'🐢 Per chi è indietro', items:['<strong>Riduci la portata</strong>: una versione semplice finita batte una ambiziosa incompiuta','Dagli un <strong>punto di partenza</strong>: il Basic Bot, il branch del repository, il Pipfile della soluzione, il CSV condiviso','Lascia che l’<strong>assistente tecnico</strong> aiuti mentre tu tieni la lezione in moto','<strong>Mettilo in coppia</strong> in una stanza separata, o affiancalo singolarmente','Risolvi <em>l’unico</em> problema che blocca e procuragli una vittoria visibile']}},
        {type:'warn', txt:'Non lasciare mai che una macchina rotta tenga in ostaggio la classe. I piani lo dicono in più punti: parti con chi è pronto, porta aiuto a chi è bloccato e usa il piano di riserva già pronto. Un problema di installazione non vale venti minuti del tempo di nove persone.'},
        {type:'good', txt:'La migliore mossa di differenziazione del corso è trasformare chi è veloce in insegnante. Approfondisce la sua comprensione, ti compra tempo con chi è bloccato e non costa nulla. Loda lo <em>spiegare</em>, non il finire: è questo che lo rende una ricompensa e non un peso.'}
      ]},
      {t:'📊 Valutazione e piattaforma', cards:[
        {type:'text', h:'Come viene valutato il lavoro', b:'I compiti sono <strong>corretti automaticamente</strong> dalla piattaforma oppure <strong>a mano da te</strong>. Quelli manuali arrivano con criteri e punteggi: per esempio, funzioni scritte e codice funzionante valgono 30 punti, con il compito aggiuntivo 35, codice non funzionante 0; i progetti di modulo valgono fino a <strong>50 punti</strong> e hanno uno strumento di valutazione dedicato; un README vale 20 senza struttura, 30 se strutturato con emoji, +5 per un’immagine o una GIF, +10 per un file di licenza. Usa gli strumenti dove esistono e inserisci i voti sulla piattaforma.'},
        {type:'qa', h:'I dettagli operativi che colgono chi inizia', items:[
          {k:'Il pulsante Invia', v:'Il lavoro conta solo una volta inviato. Di’ «assicuratevi di aver inviato il compito della lezione» alla fine di ogni lezione, e verificalo nel Backoffice.'},
          {k:'Link in chat', v:'Diversi compiti valutati si valutano a partire da un link GitHub pubblicato nella chat del compito. Niente link, niente valutazione: insisti durante la lezione.'},
          {k:'Scadenze', v:'Concorda con gli studenti le scadenze dei compiti e lasciati tempo sufficiente per valutare bene.'},
          {k:'Presenze', v:'Registrale mentre parli con gli studenti, non come un appello formale.'},
          {k:'La chat di gruppo', v:'I compiti si possono discutere lì fra una lezione e l’altra; ricordaglielo così non aspettano una settimana da bloccati.'}
        ]},
        {type:'text', h:'La fase sulla carriera a fine modulo', b:'I moduli 1, 2, 3 e 4 del corso finiscono con una fase breve che collega il lavoro a una carriera: festeggia l’aver finito un tema che pochissimi finiscono, mostra le competenze sbloccate e collegale a percorsi professionali — la presenza di Python nei grandi prodotti per il blocco automazione, la scienza dei dati come «detective dell’informazione» per il blocco IA, e i vantaggi di specializzarsi in IA per il blocco applicato. Chiedi cosa sanno prima di raccontarglielo, e chiedi cosa vorrebbero fare con queste competenze.'},
        {type:'warn', txt:'Una fase di M10L1 presenta gli altri corsi Kodland e raccoglie i risultati di un test che vanno al team commerciale e alle famiglie. Conducila con cordialità e onestà, non commentare le risposte mentre rispondono e non forzare la vendita. La tua credibilità con il gruppo vale più di un contatto commerciale.'}
      ]},
      {t:'💭 Le otto tecniche di riflessione', cards:[
        {type:'text', h:'Alternale — è questa l’istruzione', b:'I piani delle lezioni più avanzate forniscono otto tecniche e raccomandano di usarne <strong>una diversa a ogni lezione</strong>. Tenerle in rotazione è ciò che impedisce agli ultimi dieci minuti di diventare un rituale che gli studenti si limitano a sopportare. Tienine tre o quattro che sai condurre senza preparazione.'},
        {type:'qa', h:'Le otto', items:[
          {k:'1. Completa la frase', v:'«Oggi ho imparato che…», «La cosa che mi è piaciuta di più della lezione è stata…»'},
          {k:'2. La lavagna delle scoperte', v:'Apri una lavagna di Zoom e fai scrivere a ciascuno una cosa nuova: un fatto, un trucco, un termine, un’idea che vale la pena ricordare.'},
          {k:'3. In un meme', v:'Ciascuno pubblica un meme o un’immagine che descriva la sua impressione della lezione.'},
          {k:'4. Domande lampo', v:'Risposte rapide di una frase: la cosa più memorabile, il compito più interessante o difficile, qualcosa di utile fuori dalla lezione.'},
          {k:'5. Ti ha sorpreso qualcosa?', v:'A turno, ciascuno dice cosa lo ha sorpreso o stupito.'},
          {k:'6. Una piccola vittoria', v:'Ciascuno condivide un risultato, anche solo «ho scritto codice senza errori» o «ho aiutato un compagno».'},
          {k:'7. Insegna a un amico', v:'Venti secondi a testa a spiegare cosa insegnerebbero a chi ha saltato la lezione. Ottima per consolidare e per la sicurezza.'},
          {k:'8. Un consiglio segreto', v:'Ciascuno condivide un consiglio per altre persone che imparano: «controlla il codice dopo ogni passaggio», «non aver paura di provare codice nuovo».'}
        ]},
        {type:'good', txt:'«Insegna a un amico» è la più diagnostica delle otto. Chi riesce a spiegare la lezione di oggi in venti secondi l’ha capita; chi non ci riesce non l’ha capita, e lo scopri negli ultimi cinque minuti della lezione e non al test della settimana dopo.'},
        {type:'text', h:'E chiudi sempre allo stesso modo', b:'Saluta come si deve, di’ che aspetti tutti alla lezione successiva e ricorda che possono discutere i compiti nella chat di gruppo <strong>senza aspettare la lezione successiva</strong>. Compare alla fine di tutti e quaranta i piani di lezione. Costa quindici secondi, ed è la differenza fra una classe e un gruppo.'}
      ]},
      {t:'✍️ Valutare codice che funziona a metà', cards:[
        {type:'text', h:'Il problema che i criteri non risolvono', b:'Il corso ti dà dei punteggi: 30 per funzioni che funzionano, 35 con il compito aggiuntivo, <strong>0 se il codice non funziona</strong>, fino a 50 per un progetto di modulo, e la scala del README 20/30/+5/+10. Ciò che non ti dice è cosa fare nel caso più comune: il ragionamento è corretto, la struttura è corretta, e si rompe alla riga 14.'},
        {type:'qa', h:'Un modo difendibile di decidere', items:[
          {k:'Separa comprensione ed esecuzione', v:'Fatti due domande: ha capito cosa serviva, e parte? Chi ha progettato la soluzione giusta e ha inciampato in un refuso è in una posizione completamente diversa da chi ha incollato qualcosa che non sa spiegare.'},
          {k:'Dove il criterio dice 0 secco, applicalo — ma di’ perché', v:'Alcuni criteri sono espliciti: codice non funzionante vale 0. Applicalo, e poi dai il commento che lo rende utile: esattamente quale riga e cosa cambiare. Uno 0 con una correzione precisa è un atto di insegnamento; uno 0 senza commento è solo un numero.'},
          {k:'Riconosci il tentativo visibile', v:'Dove i criteri ti lasciano margine — voti di progetto, compiti aggiuntivi, qualità del README — valorizza lo sforzo vero che non è arrivato in fondo. Commenti, struttura, una cronologia di commit sensata, un README che spiega l’intenzione.'},
          {k:'Non valutare mai la velocità', v:'Nulla nel corso premia il finire per primi. Un progetto semplice e completo vale esplicitamente più di uno ambizioso incompiuto.'},
          {k:'Lascia sempre una strada verso i punti', v:'Di’ cosa farebbe salire il voto. Ogni compito manuale è in spirito riconsegnabile, perché l’intero corso è iterativo: la lezione successiva costruisce sullo stesso progetto.'}
        ]},
        {type:'good', txt:'Un’abitudine utile: scrivi prima il commento e poi il numero. Se non riesci a spiegare il numero in due frasi che aiutino a migliorare, probabilmente è il numero sbagliato.'},
        {type:'tip', txt:'Usa gli <strong>strumenti di valutazione</strong> dove il corso li fornisce (il progetto del bot del modulo 1 e il portfolio del modulo 4 ne hanno uno ciascuno): esistono per rendere la valutazione coerente fra tutor, non solo per comodità tua. E ricorda la trappola pratica: diversi compiti valutati si valutano a partire da un <strong>link GitHub nella chat del compito</strong>. Niente link, niente valutazione: insisti durante la lezione, ad alta voce, più di una volta.'}
      ]},
      {t:'👤 La lezione individuale da 50 minuti', cards:[
        {type:'text', h:'Ogni lezione ne ha una, e non è «la stessa cosa ma più veloce»', b:'Ogni piano del programma porta con sé una <strong>variante individuale da 50 minuti</strong> con la sua tabella delle fasi. La tentazione è condurre la lezione di gruppo accelerata. Non farlo: perdi 40 minuti, e buona parte di ciò che comprimeresti è proprio ciò che una persona sola non può fare in alcun modo.'},
        {type:'twocol', left:{h:'Cosa deve uscire', items:['<strong>Stanze separate</strong>: non c’è nessuno con cui fare coppia','<strong>Gare a squadre</strong>: la regola della media di squadra di M6L2 non significa più nulla','<strong>Revisione e test fra pari</strong>: la revisione passa a <em>te</em>','<strong>Presentazioni al gruppo</strong>: diventano una conversazione con te','<strong>Giochi che richiedono squadre</strong>: il tris a squadre, il gioco della «palla»','La maggior parte delle fasi di messa in comune e di voto']}, right:{h:'Cosa guadagni, e dovresti usare', items:['<strong>Ritmo davvero calibrato</strong>: senza aspettare il più lento né il più veloce','<strong>Dialogo continuo</strong>: puoi chiedere «perché?» dopo ogni passaggio','<strong>Debug più profondo</strong>: leggere bene ogni errore insieme','<strong>Focus sul suo progetto</strong>: la cornice reale si può scegliere su misura','Più tempo per i compiti aggiuntivi','Commenti immediati e concreti invece di correzioni accumulate']}},
        {type:'qa', h:'Come convertire le fasi collaborative', items:[
          {k:'Analisi in coppia → pensare ad alta voce', v:'Dove analizzerebbero il codice in coppia, fagli raccontare a te il suo ragionamento. Il gioco «tutti contro uno» di M6L1 ha già una variante individuale nel piano: tu e la persona vi alternate a farvi domande, senza vincitore.'},
          {k:'Revisione fra pari → la tua revisione, la sua lista', v:'Fagli revisionare <em>il tuo</em> codice volutamente difettoso con la lista di controllo. Insegna la stessa competenza ed è probabilmente più difficile.'},
          {k:'Gara a squadre → contro un riferimento', v:'Invece di battere un’altra squadra, raggiungere un obiettivo: «riesci a portare il modello oltre il 90% con questa immagine di prova?»'},
          {k:'Brainstorming di gruppo → stimolo strutturato', v:'Un brainstorming in solitaria muore in fretta. Dai categorie e un timer, e proponi idee anche tu: la regola del non criticare vale comunque per entrambi.'},
          {k:'Presentazione → un pubblico vero', v:'Fatti presentare formalmente il progetto, cronometrato, applicando le otto regole di presentazione. Poi suggerisci di mostrarlo alla famiglia o a un amico, così il pubblico è reale.'}
        ]},
        {type:'tip', txt:'Una cosa diventa <em>più difficile</em> da soli: la motivazione durante una costruzione lunga. In gruppo la spinta è sociale. Uno a uno ricade interamente su di te, quindi dividi il lavoro in vittorie visibili e nomina ciascuna quando arriva.'}
      ]},
      {t:'🧰 L’abitudine che previene la maggior parte delle lezioni andate male', cards:[
        {type:'text', h:'Prepara la lezione successiva alla fine di questa', b:'Gli installer come compito prima di M1L2. Email pronte prima delle lezioni con registrazione. Un progetto preparato prima della code review. I vecchi progetti dei bot aperti prima di M7L1. Live Share installato prima di M8L4. Il CSV salvato prima di M5L3. Le domande scritte prima di M10L2. Quasi tutte le lezioni che vanno male vanno male per qualcosa che sarebbe dovuto succedere una settimana prima.'},
        {type:'good', txt:'Costruisciti un rituale di due righe per la fine della lezione: conferma che tutti abbiano premuto <strong>Invia</strong> e di’ l’unica cosa che devono portare o installare per la prossima volta. Quindici secondi, ed elimina la maggior parte del caos dei primi dieci minuti della tua lezione successiva.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente ti chiede qualcosa che davvero non sai. Qual è la mossa predefinita?', opts:['Dire che non sei sicuro e cercarlo insieme sullo schermo — è l’abitudine alla documentazione di M1L4 mostrata dal vivo','Dare la tua ipotesi migliore con sicurezza così il gruppo continua a fidarsi','Dirgli che è fuori dalla portata del corso','Passare oltre in fretta sperando che se ne dimentichino'], c:0, fb:'Cercarlo insieme è l’opzione più potente perché È la competenza che il corso insegna: nessuno conosce una libreria a memoria. Non stai coprendo una lacuna, stai mostrando il metodo.'},
      {q:'Quale risposta a una domanda che non conosci danneggia davvero la tua credibilità?', opts:['Tirare a indovinare con sicurezza — gli studenti verificano le risposte, e sbagliare con tono sicuro è ciò che distrugge la loro fiducia','Dire «non lo so»','Mettere da parte la domanda e rispondere quella sera nella chat di gruppo','Nominare con onestà dove finisce ciò che sai'], c:0, fb:'Ammettere l’incertezza non ti costa mai l’aula. Una risposta sicura e sbagliata, verificata da qualcuno a metà lezione, sì.'},
      {q:'Metti da parte una domanda per rispondere dopo nella chat di gruppo. Cosa determina se questo aiuta o danneggia?', opts:['Se ci torni davvero — una domanda ripresa genera più fiducia di una risposta immediata, e una dimenticata costa più che ammettere di non saperlo','Quanto in fretta rispondi','Se rispondi in privato o in pubblico','Se la domanda è stata fatta davanti agli altri'], c:0, fb:'Mettere da parte è una mossa legittima solo se il seguito arriva. Altrimenti hai semplicemente evitato la domanda, e gli studenti se ne accorgono.'},
      {q:'Quale di questi è un elemento centrale del metodo LiveCoding?', opts:['Sbagliare di proposito e chiedere agli studenti di trovare gli errori','Scrivere il codice in silenzio così possono concentrarsi','Mostrare prima il codice finito e spiegarlo dopo','Farli programmare mentre tu osservi senza parlare'], c:0, fb:'LiveCoding significa raccontare le proprie decisioni, fare domande, fare pause, disegnare per visualizzare la logica, e sbagliare di proposito perché si esercitino a individuare gli errori.'},
      {q:'Una persona risponde a tutte le domande e il resto è ammutolito. Qual è la soluzione coerente con il corso?', opts:['Usare le strutture già previste — il gioco della «palla», la regola del non rispondere due volte di fila — e lasciare che sia il formato a porre il limite','Chiederle in privato di partecipare meno','Smettere di fare domande aperte al gruppo','Spostarla in una stanza separata'], c:0, fb:'Diversi giochi del corso distribuiscono automaticamente la parola. Lasciare che sia il formato a porre il limite evita che diventi una cosa personale.'},
      {q:'Qualcuno disturba ed è disconnesso dal compito. Cosa funziona di solito in questo corso?', opts:['Dargli un compito: guidare un’installazione, condividere lo schermo, spiegare la sua soluzione; disturbare di solito è segno di poco impegno','Silenziarlo per il resto della fase','Passare direttamente alla fase di riflessione','Assegnargli compiti extra'], c:0, fb:'Il corso è pieno di ruoli legittimi da distribuire, e uno studente capace e annoiato è qui la causa più comune del disturbo.'},
      {q:'Fai una domanda al gruppo e nessuno risponde. Qual è la causa più probabile?', opts:['La domanda era troppo grande — riducila a qualcosa di stretto e a cui si possa rispondere, come «di che tipo deve essere questa variabile?»','Il gruppo è disimpegnato e ha bisogno di una pausa','Non hanno fatto i compiti','Il materiale è troppo avanzato per loro'], c:0, fb:'I piani di lezione modellano continuamente domande strette e a cui si può rispondere. Il silenzio di solito è un sintomo della dimensione della domanda, non di scarsa volontà.'},
      {q:'Il codice di uno studente mostra ragionamento e struttura corretti, ma si rompe. Come lo valuti?', opts:['Applica i criteri — incluso lo 0 secco dove è scritto così — ma dai sempre la riga esatta e la correzione, perché il voto insegni qualcosa','Voto massimo, visto che il ragionamento era corretto','Zero senza commento, visto che il codice non funziona','Fai la media con il compito precedente'], c:0, fb:'Dove il codice non funzionante vale 0, applicalo, ma uno 0 con una correzione precisa è un atto di insegnamento, mentre uno 0 senza commento è solo un numero.'},
      {q:'Qual è una buona abitudine nel valutare i compiti manuali?', opts:['Scrivere prima il commento e poi il numero — se non riesci a giustificare il numero in due frasi utili, probabilmente è sbagliato','Correggere prima le consegne più rapide, finché hai energia','Valutare tutto in rapporto alla persona più forte del gruppo','Dare lo stesso voto a tutti quelli che hanno consegnato, per equità'], c:0, fb:'Il commento per primo mantiene il numero difendibile e utile. Nulla nel corso premia la velocità, e valutare a curva non fa parte di alcun criterio.'},
      {q:'Conducendo una lezione individuale da 50 minuti, cosa NON dovresti fare?', opts:['Condurre la lezione di gruppo da 90 minuti accelerata — perdi 40 minuti e la maggior parte di ciò che comprimeresti richiede comunque un gruppo','Trasformare la revisione fra pari in una revisione del tuo codice difettoso','Sostituire la gara a squadre con un obiettivo di riferimento','Dedicare più tempo ai compiti aggiuntivi'], c:0, fb:'Stanze separate, gare a squadre, revisione fra pari e presentazioni al gruppo non possono avvenire con una persona sola. Ognuna va convertita, non compressa.'},
      {q:'In una lezione individuale, come conservi la competenza della revisione del codice fra pari?', opts:['Fagli revisionare IL TUO codice volutamente difettoso con la lista di controllo — stessa competenza, e probabilmente più difficile','Saltala, visto che servono due persone','Fagli revisionare il suo codice di una lezione precedente','Fagli revisionare il codice di un compagno come compito a casa'], c:0, fb:'La competenza è applicare una lista di controllo e dare commenti costruttivi. Il tuo codice difettoso fornisce l’oggetto, e puoi inserirci esattamente i problemi che vuoi fargli trovare.'},
      {q:'Cosa diventa più difficile, e non più facile, in una lezione uno a uno?', opts:['La motivazione durante una costruzione lunga — in gruppo la spinta è sociale, quindi devi dividere il lavoro in vittorie visibili e nominare ciascuna','Il debug, perché non c’è nessuno con cui confrontarsi','Rispettare i tempi','Spiegare la teoria con chiarezza'], c:0, fb:'La calibrazione del ritmo e il dialogo migliorano nell’uno a uno. Sostenere la spinta lungo una costruzione lunga è ciò che ricade interamente su di te.'},
      {q:'Qualcuno è visibilmente frustrato durante la lezione sulla metacognizione. Cosa ti fa dire il corso?', opts:['Che la reazione è valida ed è informazione sulla strategia che ha scelto, non una prova sulle sue capacità','Che si prenda una pausa e torni dopo','Che la frustrazione significa che la lezione è troppo avanzata per lui','Niente: andare avanti per non attirare l’attenzione'], c:0, fb:'La nota di M2L1 presenta la frustrazione come informazione utile sulla strategia usata, e ti chiede di fargli i complimenti per essersene accorto, perché accorgersene è la competenza.'},
      {q:'Qual è la migliore mossa di differenziazione per chi finisce sempre presto?', opts:['Dargli il compito aggiuntivo già previsto, o chiedergli di guidare una fase o fare una mini lezione — e lodare lo spiegare','Mandarlo avanti al materiale della lezione successiva','Lasciargli aiutare te a correggere il lavoro degli altri','Ridurre il numero di compiti per il resto della classe'], c:0, fb:'I compiti aggiuntivi ci sono in quasi ogni lezione, e far guidare installazioni o spiegare soluzioni agli studenti forti è uno schema usato per tutto il corso.'},
      {q:'L’ambiente di uno studente è rotto e la fase pratica sta iniziando. Cosa fai?', opts:['Parti con chi è pronto, metti l’assistente tecnico sul problema e dai a chi è bloccato un piano di riserva già pronto','Fermi la lezione finché l’ambiente non funziona per tutti','Gli fai passare l’intera lezione a guardare un compagno','Rimandi la lezione alla settimana successiva'], c:0, fb:'I piani forniscono piani di riserva — il Basic Bot, il Pipfile della soluzione, il dataset condiviso, il CSV della lezione precedente — proprio perché una macchina non tenga in ostaggio la classe.'},
      {q:'Perché il corso offre otto tecniche di riflessione invece di una?', opts:['Perché l’idea è alternarle, così gli ultimi dieci minuti restano vivi invece di diventare un rituale','Perché ogni tutor scelga la sua preferita e la riusi','Perché ogni fascia d’età ha bisogno di tecniche diverse','Perché la piattaforma ne assegna una a caso'], c:0, fb:'I piani delle lezioni più avanzate raccomandano di cambiare metodo a ogni lezione: è questo che evita che la riflessione diventi qualcosa che gli studenti si limitano a sopportare.'},
      {q:'Quale tecnica di riflessione rivela meglio se qualcuno ha davvero capito la lezione?', opts:['«Insegna a un amico»: venti secondi a spiegare cosa insegnerebbe a chi ha saltato la lezione','«In un meme»: la sua impressione della lezione','«Una piccola vittoria»: un risultato della sessione','«Completa la frase»: «oggi ho imparato che…»'], c:0, fb:'Spiegare un concetto ad alta voce in venti secondi è una verifica reale della comprensione, e insieme consolida la conoscenza e dà sicurezza.'},
      {q:'Un progetto di modulo valutato non ha il link GitHub nella chat del compito. Perché è importante?', opts:['Quel link è il modo in cui il progetto viene valutato — niente link, niente valutazione, quindi insisti durante la lezione','La piattaforma toglie punti automaticamente per un link mancante','Lo studente non può passare al modulo successivo senza','Impedisce ai compagni di fare la revisione'], c:0, fb:'Diversi compiti valutati si valutano a partire dal link pubblicato nella chat del compito. I piani ti dicono di ricordarlo, ad alta voce, più di una volta.'},
      {q:'Quale singola abitudine previene la maggior parte delle lezioni andate male?', opts:['Preparare la lezione successiva alla fine di questa: installer, email, progetti aperti, estensioni installate','Leggere ad alta voce l’intero piano di lezione all’inizio','Preparare teoria in più nel caso la pratica finisca prima','Tenere a disposizione un portatile di riserva'], c:0, fb:'Installer prima di M1L2, email prima delle lezioni con registrazione, un progetto pronto prima della code review, Live Share prima di M8L4: la maggior parte delle lezioni andate male si è persa una settimana prima.'}
    ]
  },
  {
    id:16, emoji:'🎬', color:'#0EA5E9',
    lesson:true,
    title:'Lezione modello — guarda e analizza',
    desc:'Una vera lezione di Python Pro registrata da guardare, con una guida a cosa fa bene questa persona, cosa manca e perché notare la differenza è il punto.',
    prep:'~2 ore: guardala una volta, poi di nuovo con la guida e un quaderno.',
    practical:{
      intro:'Prima di segnarlo come completato — e sbloccare il DST:',
      items:[
        'Guardato la lezione modello una volta dall’inizio alla fine, e poi di nuovo seguendo la guida all’osservazione',
        'Annotato, parola per parola, le frasi che questa persona usa quando qualcuno vuole la risposta pronta',
        'Elencato le sei qualità di conduzione qui sotto e annotato il momento in cui ciascuna avviene',
        'Trovato le due fasi che <strong>mancano</strong> in questa lezione e scritto le frasi che avresti detto tu al loro posto',
        'Aperto il piano della lezione M1L2 accanto al video e confrontato con la tabella delle fasi',
        'Ripassato le tue liste <strong>✋ Prima di insegnare questo</strong> in tutti i moduli e chiuso ciò che avevi saltato'
      ]
    },
    obj:'Vedere tutto ciò che c’è nel Modulo 15 messo in pratica in una lezione vera, e vedere cosa succede quando due fasi obbligatorie vengono schiacciate fuori. Guarda una sessione completa di Python Pro, individua i comportamenti di conduzione che vale la pena copiare, riconosci le due lacune e capisci cosa avresti fatto diversamente.',
    completeH:'Pronto per essere valutato',
    completeBody:'Dopo aver guardato la lezione modello e percorso la guida all’osservazione, segna questo modulo come completato. Questo sblocca il <strong>Test di Competenze Digitali</strong>, la valutazione pratica finale per chi si candida come tutor di Python Pro.',
    completeBtn:'Segna la lezione modello come guardata →',
    sections:[
      {t:'🎥 La registrazione', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/H3ctpvdhzT0', cap:'Una lezione completa di Python Pro, condotta da una persona esperta. Se il lettore non si carica, aprila direttamente su <a href="https://youtu.be/H3ctpvdhzT0" target="_blank" rel="noopener noreferrer">youtu.be/H3ctpvdhzT0</a>.'},
        {type:'text', h:'Di quale lezione si tratta', b:'A giudicare dal contenuto — l’interprete Python, la configurazione di VS Code, creare una cartella ed eseguire un primo script, e i compiti sul trovare bot Discord — questa è la <strong>lezione M1L2 del corso</strong>, la seconda lezione dell’intero corso. Apri quel piano accanto al video. È un <strong>gruppo piccolo, di due studenti</strong>, quindi la dinamica sta a metà fra il formato di gruppo da 90 minuti e quello individuale da 50.'},
        {type:'text', h:'Come guardarla', b:'Guardala una volta dall’inizio alla fine, come farebbe uno studente. Poi guardala di nuovo con la guida qui sotto e un quaderno, mettendo in pausa per annotare ciò che questa persona <em>fa</em>, non ciò che dice. Condurre è un insieme di comportamenti concreti — dove fa una pausa, quando cede lo schermo, come formula una correzione — e questo si vede solo alla seconda visione.'},
        {type:'warn', txt:'Questa è una <strong>lezione vera, non una dimostrazione preparata.</strong> La maggior parte è molto buona e vale la pena copiarla da vicino. Le mancano anche due fasi obbligatorie. Entrambi i fatti ti sono utili, e il secondo probabilmente più del primo, ed è per questo che la registrazione non è stata montata per nasconderlo.'}
      ]},
      {t:'✅ Cosa fa bene questa persona — copia questo', cards:[
        {type:'qa', h:'Sei comportamenti concreti, e cosa li rende efficaci', items:[
          {k:'Apre dalla persona, non dal materiale', v:'Saluta gli studenti e chiede della loro settimana e di cosa hanno fatto. È il briefing fatto bene: la presenza viene registrata dentro una conversazione e non come un appello.'},
          {k:'Controlla i compiti chiedendo del lavoro in sé', v:'Chiede della loro ricerca e del progetto della lezione precedente, e del compito di lettura del codice — e gli studenti rispondono davvero. Il controllo dei compiti è una discussione autentica, che è anche la tua migliore lettura precoce di chi sta scivolando via.'},
          {k:'Prima dimostra, poi cede', v:'Configura VS Code ed esegue uno script Python <em>prima</em> che lo facciano loro. Per una lezione carica di configurazione è la scelta giusta: guarda me, ora tu.'},
          {k:'Spezza le istruzioni in passaggi', v:'Crea una cartella, aprila nel terminale, digita questo comando. Le lezioni di configurazione crollano quando le istruzioni arrivano come un paragrafo; funzionano quando arrivano come una sequenza numerata con un punto di verifica dopo ciascun passaggio.'},
          {k:'Usa i nomi di entrambi gli studenti, ripetutamente', v:'Si rivolge a loro per nome durante le interazioni di apprendimento, non solo per l’appello. Con due persone è facile; con otto è una disciplina deliberata, ed è il modo più economico per tenere tutti presenti.'},
          {k:'Chiede di spiegare, invece di spiegare', v:'Chiede loro cos’<em>è</em> un interprete, e rispondono con parole loro. È la regola del «non dare la risposta» applicata alla teoria, ed è il comportamento da rubare più di ogni altro qui.'}
        ]},
        {type:'good', txt:'Nota anche com’è fatto il riscontro: questa persona percorre il codice degli studenti insieme a loro, aiutandoli a trovare e correggere i propri errori invece di sistemarlo al posto loro. È l’abitudine al debug di M1L4 mostrata due lezioni prima che venga insegnata formalmente.'},
        {type:'text', h:'E i compiti vengono affidati come si deve', b:'Il compito — trovare bot Discord e portarli alla lezione successiva — viene <strong>spiegato</strong>, non solo annunciato, ed è collegato a ciò che la lezione successiva ci farà. Quel collegamento in avanti è ciò che fa sembrare i compiti parte di qualcosa invece che un’aggiunta, ed è in ogni piano di lezione proprio per questo.'}
      ]},
      {t:'🕳️ Le due fasi che mancano', cards:[
        {type:'text', h:'Cosa non c’è', b:'Due delle sette parti dello scheletro della lezione non compaiono: <strong>non viene enunciato alcun obiettivo chiaro</strong> all’inizio o vicino all’inizio, e <strong>nessun riepilogo o ripasso chiude la lezione</strong>. Entrambe sono fasi obbligatorie in ognuno dei 40 piani di lezione, e il piano di M1L2 le ha entrambe: una slide degli obiettivi che elenca cosa produce la giornata e una fase di riflessione con domande di ripasso.'},
        {type:'twocol', left:{h:'Perché la fase degli obiettivi conta', items:['Chi conosce la meta tollera una parte centrale difficile, e questa lezione ha una parte centrale difficile','Il lavoro di configurazione sembra burocrazia finché non viene collegato a uno scopo','La slide degli obiettivi del piano di M1L2 nomina quattro risultati, incluso il generatore di password sicure','Senza, «perché stiamo digitando comandi in un terminale?» resta senza risposta']}, right:{h:'Perché il riepilogo conta', items:['La riflessione è dove la lezione si consolida: è a calendario, non è opzionale','È la tua ultima occasione per cogliere chi ha annuito senza capire','Le domande di ripasso tirano dentro di proposito chi è più silenzioso','Una lezione che si interrompe invece di chiudersi non lascia nulla su cui costruire la settimana dopo']}},
        {type:'good', txt:'Sii onesto sul perché accade: quasi sempre è il <strong>tempo</strong>. Le lezioni di configurazione sforano — le installazioni falliscono, le macchine sono diverse, qualcuno resta indietro — e le fasi alle due estremità sono quelle che vengono schiacciate. È esattamente il modo di fallire su cui avverte il Modulo 3, e vedere che succede a una persona competente dovrebbe dirti che succederà anche a te, a meno che tu non protegga attivamente quelle fasi.'},
        {type:'tip', txt:'Il tuo compito: scrivi le due cose che mancano. Un’<strong>apertura da 30 secondi</strong> che dica cosa produce questa lezione e una <strong>chiusura da 2 minuti</strong> con tre domande di ripasso e i compiti. Scrivile per intero, con parole tue. Quei due copioni brevi sono la cosa più trasportabile che porterai via da questo modulo: funzionano in ogni lezione del corso e puoi riusarli quasi immutati.'}
      ]},
      {t:'🔍 Il tuo compito di osservazione', cards:[
        {type:'qa', h:'Fase per fase, mentre guardi', items:[
          {k:'Briefing', v:'Come viene registrata la presenza: come un appello o dentro una conversazione? In quanto tempo la lezione arriva a un motivo per esistere?'},
          {k:'Controllo dei compiti', v:'Come viene tirato fuori il lavoro della lezione precedente? Cosa succede a chi ha meno da mostrare?'},
          {k:'Obiettivi', v:'<strong>Qui mancano.</strong> Annota il punto in cui sarebbero dovuti entrare, e cosa avresti detto tu.'},
          {k:'Teoria', v:'Quanto è breve? Osserva in particolare la domanda sull’interprete: questa persona chiede invece di raccontare. Cronometra quanto dura davvero la teoria.'},
          {k:'Pratica', v:'Conta quante volte le viene chiesta la risposta e non la dà. Annota cosa dice invece.'},
          {k:'Riflessione', v:'<strong>Qui manca.</strong> I compiti sono spiegati bene, ma non c’è un riepilogo. Annota dove sarebbe dovuto entrare.'}
        ]},
        {type:'twocol', left:{h:'Comportamenti di conduzione da annotare', items:['Quando lo schermo viene ceduto e quando viene ripreso','Come un errore nel codice di uno studente viene diagnosticato ad alta voce','Quali domande ricevono in risposta un’altra domanda','Come viene verificato il ritmo senza esporre nessuno','Come viene preparata la lezione successiva alla fine','Con quale frequenza ogni studente viene chiamato per nome']}, right:{h:'Momenti che vanno sempre storti', items:['L’ambiente o l’installazione di qualcuno non funziona','Una persona finisce molto prima dell’altra','Qualcuno resta in silenzio per un bel po’','La fase di configurazione inizia a sforare','Codice che funzionava un minuto prima dà errore dal vivo','Un percorso o un nome di file è sottilmente sbagliato']}},
        {type:'good', txt:'La cosa più utile che puoi portare via da questa registrazione è il <strong>modo di esprimersi</strong> di questa persona nei momenti in cui qualcuno vuole la risposta. Annota quelle frasi parola per parola. Avere due o tre modi già pronti per dire «cosa ti sta dicendo l’errore?» vale più nella tua prima lezione di qualsiasi quantità di teoria sul non dare risposte.'},
        {type:'tip', txt:'Infine, apri il piano di M1L2 accanto al video e confrontalo con la tabella delle fasi. Quali fasi si sono allungate? Quali sono state compresse? Vedere dove una lezione vera si discosta dal suo piano è il modo in cui impari quali parti di un piano sono portanti e quali cedono, e questo confronto in particolare dice molto, perché sai già come va a finire.'}
      ]}
    ]
  },
/* NEXT-IT-MODULE */
]
};

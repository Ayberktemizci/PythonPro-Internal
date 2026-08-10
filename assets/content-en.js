/* ============================================================================
   Kodland Python Pro Tutor Training — CONTENT (English, source of truth)
   To add another language later: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code / htmlLang / title accordingly.

   Card types available in a module's sections[].cards[]:
     text | hi | warn | tip | good | code | twocol | qa
     brief   → the standardized "overview → why → what → confident" opener
               {type:'brief', overview, why, learn, confident}
     image   → a placeholder for an annotated screenshot the team adds later
               {type:'image', note:'what to capture', cap:'caption (optional)'}
               {type:'image', src:'assets/media/images/x.png', alt, cap}
     video   → embedded video, OR a placeholder for a recording added later
               {type:'video', file:'assets/media/videos/x.mp4', cap:'…'}
               {type:'video', placeholder:true, note:'what to record', cap:'…'}

   SECURITY RULE for anyone editing this file: never paste a real Discord bot
   token, API key, session cookie, or platform password into this file. Use the
   literal placeholders "YOUR_BOT_TOKEN" / "YOUR_API_KEY" exactly as the course
   materials do.
   ============================================================================ */
window.CONTENT = {
code: 'en',
htmlLang: 'en',
title: 'Python Pro Tutor Training — Kodland',
ui: {
  logoSub: 'Python Pro Training',
  heroEyebrow: '🐍 Tutor Training Program',
  heroTitle: 'Prepare to teach<br><span class="h-pill">Python Pro</span><br>to 13–17 year olds',
  heroSub: 'Work through every module in order and pass its test to complete your tutor preparation. Score 70%+ on a module test to unlock the next one — there’s no skipping ahead, and the Digital Skill Test opens only once every module is done.',
  progLabel: 'modules done',
  modulesLabel: 'Your modules',
  allDone: '🏆 All done!',
  completeWord: 'complete',
  backModules: '← Modules',
  exitQuiz: '← Exit Test',
  backDashboard: '← Dashboard',
  faqNav: '❓ FAQ',
  changeRegion: '🌐 Language',
  moduleWord: 'Module',
  ofWord: 'of',
  objectiveWord: 'Objective',
  badgePassed: '✓ Passed',
  badgeLocked: '🔒 Locked',
  badgeStart: 'Start →',
  badgeWatched: '✓ Watched',
  badgeWatch: '▶ Watch',
  tagCompleted: 'Completed',
  tagExampleLesson: 'Model lesson',
  completeModuleWord: 'Complete module',
  completeAllFirst: 'Finish all modules first',
  scoreWord: 'Score',
  questionsWord: 'questions',
  takeQuiz: '📝 Take the Module Test →',
  retakeQuiz: '🔄 Retake Test',
  markComplete: 'Mark Complete',
  doneCompleted: '✓ Completed',
  moduleComplete: 'Module Complete',
  questionWord: 'Question',
  correctPrefix: '✅ Correct! ',
  notQuitePrefix: '❌ Not quite. ',
  seeResults: 'See Results →',
  nextBtn: 'Next →',
  modulePassed: 'Module Passed!',
  keepReviewing: 'Keep Reviewing',
  scoreLine: 'You got {s}/{t} correct.',
  passMsg: ' Next module unlocked!',
  failMsg: ' You need 70% to pass. Review the module and try again!',
  reviewModuleWord: '📖 Review Module',
  startModuleWord: 'Start Module',
  watchModuleWord: '▶ Watch Module',
  viewCertificate: '🏆 View Certificate',
  trainingComplete: 'Training Complete!',
  completeSub: 'You’ve worked through every module — congratulations! You’re ready for the Digital Skill Test.',
  certLabel: 'Certificate of Completion',
  certTitle: 'Python Pro Tutor Training',
  certLine: 'Kodland · All {n} modules · Average test score: {avg}%',
  takeDST: '🎯 Take the Digital Skill Test →',
  backDashboard2: '← Back to Dashboard',
  dstCardStage: 'Final Stage',
  dstCardTitle: 'Digital Skill Test',
  dstCardDesc: 'The final practical assessment — unlocks only after every module is complete.',
  dstReady: 'Ready',
  dstCardTag: 'Practical assessment',
  devSkipDST: '🔓 Dev: skip straight to the DST →',
  prepWord: 'prep',
  practicalTitle: 'Before you teach this',
  practicalNote: 'These are a self-declaration — nobody can check them from here. Tick them honestly: the module test can only confirm you have read this, not that you can do it.',
  practicalWarn: 'You still have {n} hands-on item(s) unticked in “Before you teach this”.\n\nThe test only checks that you have read the module — it cannot check that you can actually build this. Continuing without doing the practical work is how a lesson falls apart in front of a class.\n\nTake the test anyway?',
  // brief block labels
  briefOverview: 'Overview',
  briefWhy: 'Why it matters',
  briefLearn: 'What students build & apply',
  briefConfident: 'Be 100% confident with',
  // placeholders
  imgPhTitle: 'Image placeholder',
  videoPhTitle: 'Video placeholder',
  videoPhBody: 'A recording will be added here.',
  videoFallback: 'Your browser cannot play this video. You can download it from the assets/media/videos folder.',
  // FAQ
  faqTitle: 'Tutor FAQ & Troubleshooting',
  faqSub: 'Quick answers for the situations you will actually face in a Python Pro lesson — the errors students hit in every module, the security rules you must never bend, and what to do when a student is ahead of or behind the group. Always available, from any screen.'
},
dst: {
  /* The DST is intentionally EMPTY for now.
     When the assessment is authored you have two options:
       1) Static brief  → replace the html below (use .dst-block / .dst-check /
          .dst-steps / .dst-form-btn classes — they are already styled).
       2) Question set  → add a `quiz` array here in exactly the same shape as a
          module quiz: [{q, opts:[...], c:<index>, fb}]. app.js will then render
          it as a test with BOTH the question order and every question's answer
          order shuffled on each attempt. */
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🎯 Final Stage</div>
      <h1 class="dst-h1">Test for Python Pro Tutor Candidates</h1>
      <p class="dst-sub">The main goal of this course is for students to build great projects across several fields — chatbot automation, web development and artificial intelligence — using Python’s various libraries. This task is where you show that you have advanced Python knowledge and can help students while they write those projects.</p>
    </div>

    <div class="dst-block">
      <div class="sch">🧩 The practical task</div>
      <div class="card">
        <p>Using <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a> and database skills, build an engaging, dynamic <strong>quiz website aimed at teenagers</strong>.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">✅ Project criteria</div>
      <div class="card"><ul class="dst-check">
        <li>The website must have a quiz covering <strong>all</strong> of the suggested topics.</li>
        <li>The quiz must consist of <strong>at least 5</strong> questions.</li>
        <li>A <strong>relational database</strong> must be used. (You can make use of <a href="https://flask-sqlalchemy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Flask-SQLAlchemy</a>.)</li>
        <li>The website must be published on <a href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">PythonAnywhere</a>.</li>
        <li>The website must have a separate page where it can <strong>detect or classify an image the user uploads</strong>.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">📚 Quiz topics</div>
      <div class="card"><ul class="dst-check">
        <li>Chatbot automation with Python (<a href="https://discordpy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Discord.py</a>)</li>
        <li>Web development with Python (<a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a>)</li>
        <li>Artificial intelligence development with Python</li>
        <li>Computer Vision (<a href="https://www.tensorflow.org/api_docs/python/tf" target="_blank" rel="noopener noreferrer">TensorFlow</a>, <a href="https://imageai.readthedocs.io/en/latest/detection/index.html" target="_blank" rel="noopener noreferrer">ImageAI</a>)</li>
        <li>Natural Language Processing (<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" rel="noopener noreferrer">BeautifulSoup</a>, <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">NLTK</a>)</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">⚠️ Things to pay attention to</div>
      <div class="card"><ul class="dst-check">
        <li>When the user submits the quiz, <strong>the score they achieved must be shown</strong>. The user can retake the quiz, and both their <strong>most recent result</strong> and their <strong>highest score</strong> must be displayed.</li>
        <li>In the <strong>top right corner of the screen</strong>, the highest score achieved across all users so far and the current user’s own highest score must be shown.</li>
        <li>The <strong>footer of every page</strong> of the website must contain information about the author.</li>
        <li>Image detection results must be <strong>shown on screen</strong> (for example: class name + confidence score) and <strong>saved to the database</strong>. For the model you can use one you trained in Teachable Machine, or ImageAI’s Tiny YOLO model.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">🖼️ An example site</div>
      <p class="dst-note">The reference implementation shows a quiz page with <em>Your name</em>, numbered questions and multiple-choice answers, with <strong>Personal High Score</strong> and <strong>Overall High Score</strong> in the top right — and a results page showing <em>Your score</em>, <em>Personal high score</em>, <em>Overall high score</em>, a <strong>Try Again</strong> button, and the author credit in the footer.</p>
      <div class="dl-row">
        <a class="dl-btn" href="https://github.com/GitKodland/HardSkillsTest" target="_blank" rel="noopener noreferrer">
          <span class="dl-ico">📦</span><span class="dl-tx"><b>The template</b><small>github.com/GitKodland/HardSkillsTest</small></span>
        </a>
      </div>
      <p class="dst-note" style="margin-top:12px">You can use this template, or create a new one entirely yourself.</p>
    </div>

    <div class="dst-block">
      <div class="sch">📝 Note</div>
      <div class="card hi">
        <h4>This task measures your back-end skills</h4>
        <p>For that reason you do not need to take extra care over the design.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">‼️ Important</div>
      <div class="card">
        <p><strong>Make sure you have fully tested the project before submitting it.</strong> All the criteria must be met, every required element must be present on the pages, and the project must run without errors.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">🚀 How to submit</div>
      <div class="card"><ol class="dst-steps">
        <li>Upload the completed project to <strong>GitHub</strong> and set access to <strong>public</strong>.</li>
        <li>Publish it on <strong>PythonAnywhere</strong>.</li>
        <li>Take the skill test, and add the link to your project as the answer to the <strong>final question</strong> of the test.</li>
      </ol></div>
    </div>

    <div class="dst-block">
      <div class="sch">🔗 Skill test</div>
      <div class="form-ph">
        <div class="form-ph-ico">📝</div>
        <strong>Submission form link coming</strong>
        <p>The English submission form isn’t linked here yet. Your training team will add it — check back before you submit.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="card">
        <p style="text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:18px;color:var(--text);margin:0">Good luck! 🍀</p>
      </div>
    </div>

    <hr class="divider">

    <div class="dst-block">
      <div class="sch">📎 From your training — not part of the brief above</div>
      <div class="card hi">
        <h4>Where each requirement was taught</h4>
        <p>Every skill this task asks for is covered in a module you have already completed. If something feels shaky, go back to it rather than starting from scratch:</p>
        <ul>
          <li><strong>Flask, routes, templates and forms</strong> → Module 7 (course M3)</li>
          <li><strong>Relational database with Flask-SQLAlchemy, and scores per user</strong> → Module 8 (course M4)</li>
          <li><strong>Publishing on PythonAnywhere, including the WSGI step</strong> → Module 8 (course M4L3)</li>
          <li><strong>Training a model in Teachable Machine</strong> → Module 9 (course M5L4)</li>
          <li><strong>Running that model from code, and ImageAI / Tiny YOLO detection</strong> → Module 10 (course M6)</li>
          <li><strong>Discord.py, BeautifulSoup and NLTK</strong> — quiz subject matter → Modules 5 and 9</li>
        </ul>
      </div>
      <div class="callout cw"><span class="ci">⚠️</span><span>Before you make the repository public: your project may contain a bot token, an API key or a Flask <code>secret_key</code>. None of them belong in a public repository, and deleting them later does not help because Git keeps history. Check before you push — this is the same rule you will be enforcing with your own students.</span></div>
    </div>
  </div>`
},
faq: [
  {
    cat: '📖 Glossary — the words the course uses',
    items: [
      {q: 'Python & code words', a: '<strong>Interpreter</strong> — the program that translates your Python into machine code. <strong>IDE</strong> — the editor that helps you write code (VS Code here). <strong>Library / module / package</strong> — code someone else wrote that you import. <strong>pip</strong> — the tool that installs libraries. <strong>Virtual environment</strong> — an isolated set of libraries belonging to one project. <strong>Dependency</strong> — a library your project needs to run. <strong>Framework</strong> — a large library that gives your project its structure (Flask). <strong>Decorator</strong> — the <code>@</code> line that hands your function to a library. <strong>async / await</strong> — lets a function pause while waiting without freezing everything else. <strong>Class</strong> — a blueprint objects are made from. <strong>Object / instance</strong> — one thing made from that blueprint. <strong>Inheritance</strong> — one class getting another’s abilities. <strong>Method</strong> — a function belonging to a class. <strong>Argument / parameter</strong> — the values a function receives. <strong>Return</strong> — the value it hands back. <strong>Exception</strong> — an error Python raises; <code>try</code>/<code>except</code> catches it. <strong>Refactoring</strong> — improving code without changing what it does. <strong>Linter</strong> — a tool that flags style problems (<code>flake8</code>).'},
      {q: 'Web & Flask words', a: '<strong>Front-end</strong> — what the user sees (HTML, CSS, JavaScript). <strong>Back-end</strong> — the logic behind it (Python/Flask here). <strong>HTML</strong> — page content and structure. <strong>CSS</strong> — appearance. <strong>Tag</strong> — an HTML element like <code>&lt;p&gt;</code>. <strong>URL</strong> — a page’s address. <strong>Route</strong> — the code that runs for a given URL. <strong>Template</strong> — an HTML page Flask fills with data. <strong>Jinja</strong> — the template engine that does the filling, using <code>{{ }}</code>. <strong>Form</strong> — the input fields a user submits. <strong>GET / POST</strong> — asking for a page vs sending data to it. <strong>Session</strong> — how the server remembers who is logged in. <strong>Widget / iframe</strong> — someone else’s app embedded in your page. <strong>Deployment</strong> — putting your app on the internet. <strong>PythonAnywhere</strong> — the hosting service the course uses. <strong>WSGI file</strong> — the file the server reads to find your app. <strong>UI / UX</strong> — how it looks vs how it feels to use.'},
      {q: 'Data & AI words', a: '<strong>API</strong> — a service you can request data from in code. <strong>JSON</strong> — the text format APIs usually reply in. <strong>Request</strong> — asking a server for something. <strong>Scraping</strong> — extracting information from a page. <strong>Parsing</strong> — analysing structure to pull out specific data. <strong>Crawling</strong> — moving across many pages collecting data. <strong>robots.txt</strong> — a file saying which parts of a site may be crawled. <strong>DataFrame</strong> — a table in pandas. <strong>CSV</strong> — a plain-text spreadsheet file. <strong>Dataset</strong> — the data a model learns from. <strong>Training / test sample</strong> — data used to teach vs to check (the test data must be unseen). <strong>Model</strong> — the trained thing that makes predictions. <strong>Neural network</strong> — the kind of model used here. <strong>Classification</strong> — labelling a whole image. <strong>Detection</strong> — locating objects in it. <strong>Segmentation</strong> — deciding which pixels belong to what. <strong>Inference</strong> — using a trained model on new input. <strong>Hyperparameter</strong> — a training setting you choose, like epochs. <strong>Epoch</strong> — one full pass through the training data. <strong>Prompt</strong> — the instruction you give a generative model. <strong>NLP</strong> — natural language processing. <strong>Tokenization</strong> — splitting text into pieces. <strong>Lemmatization</strong> — reducing a word to its base form. <strong>Stop words</strong> — common words removed before analysis. <strong>Pipeline</strong> — a sequence of processing steps. <strong>Colab</strong> — Google’s browser notebook environment. <strong>Notebook / cell</strong> — the file format and its runnable blocks.'},
      {q: 'Git & teamwork words', a: '<strong>Git</strong> — the version-control program on your machine. <strong>GitHub</strong> — the website that hosts repositories. <strong>Repository (repo)</strong> — a project folder Git tracks. <strong>Commit</strong> — a saved change with a message. <strong>Push / pull</strong> — sending changes up / bringing them down. <strong>Clone</strong> — downloading a repository. <strong>Branch</strong> — a parallel copy for one task. <strong>Merge</strong> — combining a branch back in. <strong>Conflict</strong> — when two changes touch the same lines. <strong>README</strong> — the file describing the project. <strong>Open source</strong> — code published for anyone to read. <strong>Token</strong> — a secret key that authenticates your program; treat it as a password. <strong>Intents</strong> — the permissions a Discord bot requests. <strong>Agile</strong> — the philosophy of flexible, collaborative development. <strong>Scrum</strong> — a concrete way to practise it. <strong>Sprint</strong> — a fixed period for a set of tasks. <strong>Backlog</strong> — the prioritised task list. <strong>Retrospective</strong> — the review after a sprint. <strong>Code review</strong> — reading someone’s code and suggesting improvements. <strong>Live Share</strong> — the VS Code extension for editing together.'},
      {q: 'Kodland words', a: '<strong>The platform</strong> — where assignments, theory and grades live. <strong>Backoffice (BO)</strong> — where you verify submissions and find group links. <strong>TS</strong> — technical assistant, your second pair of hands. <strong>DST</strong> — Digital Skill Test, the final practical assessment. <strong>EduScrum</strong> — the course’s classroom adaptation of Scrum. <strong>LiveCoding</strong> — building code together on screen. <strong>UMC</strong> — Use–Modify–Create. <strong>Metacognition</strong> — thinking about how you learn. <strong>Creativity Card</strong> — the form tracking a student’s graduation project. <strong>Summative test</strong> — the revision test inside a lesson.'}
    ]
  },
  {
    cat: '🔐 Security rules you must never bend',
    items: [
      {q: 'A student asks “can I just push my bot token to GitHub?”', a: 'The answer is always <strong>no</strong>. A Discord bot token is a password: anyone who has it controls the bot completely and can use it to spam or attack servers. The course flags this explicitly in M1L3. In lesson code we write the literal placeholder <code>bot.run("YOUR_BOT_TOKEN")</code> and paste the real token only locally. Say the rule out loud every single time a project is uploaded.'},
      {q: 'A student already pushed their token (or pasted it in the group chat). Now what?', a: 'Treat it as leaked, because it is. Have them go to the Discord Developer Portal → Bot → <strong>Reset Token</strong>, then paste the new one locally only. Remind them that <strong>deleting the file does not help</strong> — Git keeps history forever, which is exactly the point you taught in M1L4. Regenerating is the only fix.'},
      {q: 'Is it safe to screen-share while my token is on screen?', a: 'No — and this catches tutors, not just students. Before you share your screen or record a lesson, replace your token with the placeholder, or keep it in a separate file you never open on camera. The same goes for platform passwords and Backoffice tabs.'},
      {q: 'The “Programmer’s Diary” project stores passwords as plain text. Should I mention that?', a: '<strong>Yes.</strong> The M4L2 code stores <code>password</code> straight into the <code>User</code> table so beginners can see the comparison loop working. That is a teaching simplification, not a pattern. Say one sentence: “Real apps never store the password itself — they store a scrambled fingerprint of it called a hash. We’re skipping that today so the logic stays visible.” It costs ten seconds and prevents a genuinely bad habit.'},
      {q: 'What should students never put into a project they publish?', a: 'Tokens and API keys, their own or anyone else’s real email addresses and passwords, their home address or school, and photos of other people without permission. Public repository means public forever. If a project needs a login form, use obviously fake test data.'},
      {q: 'Is web scraping allowed? What do I tell students?', a: 'Teach the limits from M5L2 as part of the skill, not as a footnote: check <strong>robots.txt</strong>, respect the site’s <strong>terms of use and privacy policy</strong>, don’t redistribute <strong>copyrighted</strong> content, and don’t collect <strong>personal data</strong> (GDPR). We scrape the practice news site precisely because it is safe to scrape.'},
      {q: 'A student wants to generate images of a real person, or pass AI images off as real.', a: 'This is the exact risk M6L2 is built around. Generated images that imitate real photos spread misinformation, and generated content can be discriminatory. Keep prompts to animals, objects and invented characters — never real, identifiable people — and make the “how would you spot a fake?” discussion part of the lesson rather than a warning tacked on the end.'}
    ]
  },
  {
    cat: '🐞 Errors students hit in every cohort',
    items: [
      {q: '“ModuleNotFoundError” right after they successfully ran pip install.', a: 'Almost always an <strong>interpreter mismatch</strong>: the library went into one Python, VS Code is running another. Fix with <code>Shift+Ctrl+P</code> (<code>Cmd+Shift+P</code> on Mac) → <em>Python: Select Interpreter</em> → pick the project’s environment. Inside a pipenv project the install command itself must be <code>pipenv install &lt;library&gt;</code>, not bare <code>pip install</code>.'},
      {q: '“pip is not recognised” / no terminal in VS Code.', a: 'Open one via <strong>Terminal → New Terminal</strong>. If <code>pip</code> itself isn’t found, the Python interpreter wasn’t added to PATH during installation — reinstalling with the “Add Python to PATH” box ticked is faster than debugging it live. M1L2 covers this; don’t let one student’s install block the whole class.'},
      {q: 'The bot shows as online but ignores every message.', a: 'Two causes, in this order. (1) <code>intents.message_content = True</code> is missing in the code. (2) The matching <strong>Message Content Intent</strong> toggle is off in the Discord Developer Portal → Bot page. The code and the portal both have to allow it.'},
      {q: 'Commands like $hello do nothing, even though the bot replies to plain messages.', a: 'They are mixing the two classes. <code>Client</code> reacts to <em>events</em> (<code>@client.event</code>); <code>Bot</code> reacts to <em>commands</em> (<code>@bot.command()</code>). M1L4 is built on this comparison. You cannot use both in one program, and the message must start with the exact <code>command_prefix</code> they set.'},
      {q: '“FileNotFoundError” when the meme bot tries to send an image.', a: 'A path problem, not a code problem. The image folder must sit inside the project folder, the filename and extension must match exactly (including case), and <code>os.listdir(\'images\')</code> is relative to where the script is run from. Have them print the path before opening it.'},
      {q: '“TypeError: \'&gt;\' not supported between instances of \'str\' and \'int\'”', a: '<code>input()</code> always returns a <strong>string</strong>. They need <code>int(input(...))</code>. This is the same bug hidden in the M8L3 code-review exercise, so when it appears naturally, name it — then they will spot it in the review lesson themselves.'},
      {q: 'The Flask page won’t change no matter what they edit.', a: 'Check three things: <code>app.run(debug=True)</code> so the server reloads, a hard refresh in the browser (Ctrl/Cmd+Shift+R) to beat the cache, and that they saved the file. Also confirm they are editing the template Flask is actually rendering.'},
      {q: '“jinja2.exceptions.TemplateNotFound”', a: 'Flask only looks in a folder called exactly <code>templates</code> (and <code>static</code> for CSS and images), sitting next to the main <code>.py</code> file. A typo or a nested folder breaks it. Have them show you the file tree rather than the error.'},
      {q: '“sqlite3.OperationalError: no such table”', a: 'The <code>.db</code> file was created before the class was added, or a column was added afterwards. In this course the fix taught in M4L2 is blunt and fine for beginners: delete the old <code>.db</code> file and create it again from the terminal. Warn them it wipes their entries first.'},
      {q: 'Colab has forgotten their model / images / files.', a: 'Colab sessions are temporary — anything uploaded to the session disappears when it restarts, and every cell must be re-run in order. For a longer session show them how to mount Google Drive (M6L1 suggests this for stronger groups). Remind them to keep a copy of the notebook on their own Drive.'},
      {q: '“Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”', a: 'A library-version clash with the exported Teachable Machine model. In a pipenv project: <code>pipenv uninstall tensorflow</code> then <code>pipenv install tensorflow==2.15</code> (works with Python 3.11). In Colab the course pins <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> and imports <code>tf_keras</code>. Have the pinned commands ready to paste — do not debug versions live.'},
      {q: 'pyttsx3 says nothing, or speech_recognition throws an error mid-lesson.', a: 'Check the output device and, importantly, <strong>mute your Zoom microphone and re-run</strong> — M7L3 flags this explicitly, because Zoom holds the mic. On some systems the voice index in <code>voices[0].id</code> doesn’t exist; have them try <code>voices[1]</code>.'},
      {q: 'Git refuses to commit and mentions an identity.', a: 'Run once per machine, with their own details: <code>git config --global user.email "you@example.com"</code> and <code>git config --global user.name "Your Name"</code>. It’s in the M2L3 notes.'},
      {q: 'A student’s model is confidently wrong about everything.', a: 'Expected, and a teaching moment. The classifier only knows the classes it was shown — it will force any input into one of them (M6L1). Fix the <strong>dataset</strong>, not the code: more images, more variety, and a test image the model has never seen.'}
    ]
  },
  {
    cat: '🙋 Hard moments — what to actually say',
    items: [
      {q: 'A student asks something I genuinely don’t know.', a: 'Default to <strong>“Great question, I’m not certain — let’s find out. Where would we look?”</strong> and then actually do it on screen. This is the M1L4 lesson happening live: nobody knows a library by heart, and finding the answer <em>is</em> the professional skill. If you are mid-sprint and time is tight, park it: “I want to give that a proper answer — I’ll come back to you in the group chat tonight.” Then follow up, without fail. The only response that damages you is a confident guess, because students will check it during the lesson.'},
      {q: 'How do I say “I don’t know” without losing authority?', a: 'Say it briefly and move straight to action — the sentence that works is “I don’t know, let’s find out,” not “sorry, I’m not very good at this.” Your authority here comes from running a good lesson and knowing where to look, not from omniscience. Practise the phrase out loud a few times before your first lesson so it comes out matter-of-fact rather than apologetic.'},
      {q: 'A student clearly knows more about something than I do.', a: 'Use it. The course explicitly asks you to hand strong students the screen to lead an install, explain a solution or run a mini master class. Say so openly — “you’re ahead of me on this one, come and show us” — and praise the <em>explaining</em>. A tutor who can do that reads as confident, not weak. What you still own is the lesson: the pace, the structure, and making sure everyone else keeps up.'},
      {q: 'My own code breaks while I’m LiveCoding in front of everyone.', a: 'This is a gift and the method is built for it — LiveCoding explicitly recommends making mistakes <em>on purpose</em>. Say “right, let’s read what it’s telling us” and debug it out loud. Students learn more from watching you calmly diagnose a real error than from watching flawless typing, and it normalises errors as ordinary rather than shameful.'},
      {q: 'I’m running out of time and the stage isn’t finished.', a: 'Protect the shape, sacrifice the scope. Move to the retrospective or the reflection anyway, and say plainly what you didn’t reach and when you’ll pick it up. Never cut the reflection stage to finish a task — the reflection is where the lesson consolidates, and an unfinished task is a normal sprint outcome.'},
      {q: 'A student says the project is pointless or boring.', a: 'Go to the audience question rather than defending the task: “who would actually use this, and what would make yours different?” Every project in the course has a real-world frame and an open-ended version, so “make it solve your problem for your people” is always available. Autonomy re-engages a bored teenager far faster than justification does.'},
      {q: 'A student didn’t do the homework and has gone quiet.', a: 'The plans are emphatic: involve them anyway, and don’t be negative. Ask what they <em>think</em> rather than what they finished. M1L3 even gives them a face-saving line — “the dog ate my homework” — so they can pass the turn without shame and stay in the room.'},
      {q: 'Nobody answers when I ask the group a question.', a: 'The question was almost certainly too big. Shrink it until it is answerable in a few words: not “how should we solve this?” but “what type does this variable need to be?” The lesson plans model narrow prompts constantly. Silence is usually about question size, not unwillingness.'}
    ]
  },
  {
    cat: '🚀 When a student is ahead of the rest of the class',
    items: [
      {q: 'A student finishes the main task in ten minutes.', a: 'Every lesson in this course ships <strong>additional assignments</strong> (marked ⭐️ or “Add.”) for exactly this. Use them before inventing anything: the API tasks in M2L1, the magic commands in M5L1, the crop-with-OpenCV extension in M6L3. They deepen today’s concept instead of racing ahead of the group.'},
      {q: 'How do I keep a fast student engaged without abandoning the others?', a: 'Give them a role. The course repeatedly suggests having a strong student <strong>share their screen and lead the installation or the live-coding</strong> (M3L1, M6L3, M7L1). Explaining a solution cements it, keeps them busy meaningfully, and buys you time with the students who are stuck. Praise the explaining, not the finishing.'},
      {q: 'Should I let an advanced student jump into the next lesson’s material?', a: 'Prefer depth over speed — it desynchronises the group and creates gaps. Point them at the <strong>library documentation</strong> instead: M1L4 exists to teach that reading docs and adapting examples <em>is</em> the professional skill. “Find one command in the docs nobody else has used and add it” beats “start lesson six.”'},
      {q: 'A student says the project is boring / too easy.', a: 'Hand them the open-ended version. Every project in this course has a real-world frame — passwords, waste sorting, technology addiction, energy use, road safety, climate change — so “make it solve your problem for your audience” is always available. Autonomy re-engages fast finishers far better than more drills.'},
      {q: 'One student dominates the discussion and answers everything.', a: 'Use the structures already in the lesson plans: the “ball” game in M1L3 where the current speaker picks the next, the “all versus one” expert game in M6L1, and the rule that the same student cannot answer twice in a row in the M5L4 tic-tac-toe game. Let the format spread the airtime so you don’t have to.'}
    ]
  },
  {
    cat: '🐢 When a student is falling behind',
    items: [
      {q: 'A student is stuck and getting frustrated.', a: '<strong>Find the one blocking issue first</strong> — it is usually a single typo, an unselected interpreter or a missing intent, not a misunderstanding of the whole lesson. Read the error message together, fix that one thing, and get them a visible win. Momentum matters more than covering everything.'},
      {q: 'A student can’t keep up with the pace of the build.', a: '<strong>Reduce their scope.</strong> A finished simple version beats an unfinished ambitious one — the M10L3 notes say exactly this about the graduation project. Have them nail the core (the bot replies, the page loads, the entry saves) and treat the extras as optional. Where a starter project exists (the school’s Basic Bot in M7L1, the ZIP and repository branches in M4), give it to them rather than letting setup eat the lesson.'},
      {q: 'Their environment is broken and the lesson is starting.', a: 'Do not let one machine hold the class hostage. Start the students who are ready, ask the technical assistant to help the rest, and hand the blocked student a working fallback — the solution repository’s Pipfile (M7L1), the shared dataset (M6L2), or the CSV from the previous lesson (M5L3). Then fix the environment during practice time or after the lesson.'},
      {q: 'A student missed the previous lesson and is lost.', a: 'Bridge with the revision stage rather than stalling the group: a two-minute recap of only what today needs, plus a link to the project state they missed (the repository branch, the ZIP, the previous notebook). Set catching up as light homework. Most modules also open with a quiz you can use as the recap.'},
      {q: 'A student keeps making the same mistake.', a: 'Don’t just fix it — <strong>name the pattern</strong> and give them the sentence to self-check: “<code>input()</code> gives me text, so wrap it in <code>int()</code>”, “the token never leaves my machine”, “if pip worked but the import failed, check the interpreter.” Then have <em>them</em> find it next time. The debugging reflex is worth more than any single fix.'},
      {q: 'A student didn’t do the homework and has gone quiet.', a: 'The lesson plans are emphatic about this: <strong>involve them anyway and don’t be negative.</strong> Ask what they think rather than what they finished. M1L3 even gives them a face-saving line (“the dog ate my homework”) so they can pass the turn without shame and still stay in the room.'},
      {q: 'A student is discouraged and wants to give up.', a: 'Lead with specific praise on effort — “you found that bug yourself, that’s exactly what programmers do” — and shrink the next step until success is guaranteed. The M2L1 metacognition notes make the same point: a frustrated reaction is <em>valid information</em> about the strategy they chose, not evidence they can’t code. Say that out loud.'}
    ]
  }
],
modules: [
  {
    id:1, emoji:'🚀', color:'#3776AB',
    title:'Introduction & Course Overview',
    desc:'What Python Pro is, the projects students ship, the teaching methods behind it, what success looks like, and how this training itself works.',
    obj:'Understand the whole picture before you teach any of it: what the Python Pro course sets out to do, its ten modules and forty lessons, the projects and the age group, the teaching methods it is built on, what a successful tutor and a successful student look like, and how this training program is structured.',
    prep:'~45 minutes. Reading only — the hands-on work starts in Module 2.',
    sections:[
      {t:'🐍 What this course is', cards:[
        {type:'text', h:'The advanced Python track, built around real projects', b:'Python Pro is Kodland’s <strong>advanced Python course</strong> for <strong>13–17 year olds</strong> — the step up from Python Basic. Students don’t sit through theory: from the first lesson they build and publish working programs. Across the course they take on three professional identities in turn — <strong>automation programmer</strong>, <strong>web developer</strong> and <strong>AI programmer</strong> — so that by the end they can choose a direction in Python development for themselves.'},
        {type:'hi', h:'Ten modules, forty lessons, ages 13–17', b:'The course is <strong>10 modules of 4 lessons each — 40 lessons</strong>, for students aged <strong>13 to 17</strong>. A group lesson runs <strong>90 minutes</strong>; the same lesson exists as a <strong>50-minute individual</strong> plan. Modules 1–2 build bots and the front-end, 3–4 build web apps with Flask and databases, 5–6 are the AI block, 7 integrates AI into the earlier projects, 8–9 are engineering craft and voice technology, and 10 is a hackathon leading to the graduation project.'},
        {type:'text', h:'Real tools, from lesson one', b:'Students leave the browser sandbox almost immediately. They work in <strong>VS Code</strong>, install libraries with <strong>pip</strong> and <strong>pipenv</strong>, publish to <strong>GitHub</strong>, register apps on the <strong>Discord Developer Portal</strong>, run notebooks in <strong>Google Colab</strong>, train models with <strong>Google Teachable Machine</strong>, and deploy to <strong>PythonAnywhere</strong>. Your own fluency with this toolchain is what this training is for.'},
        {type:'qa', h:'What they actually ship', items:[
          {k:'Automation block', v:'A slang dictionary, a strong-password generator, and Discord bots — a meme bot that reads a folder, and a bot that helps users cut waste.'},
          {k:'Web block', v:'A page about technology addiction, a Flask facts site, a smart-home energy calculator, a meme generator, the “Programmer’s Diary” with a database and login, and a deployed portfolio website.'},
          {k:'AI block', v:'Background-replacement image scripts, a news scraper, an NLP summariser, a trained image classifier, a real-vs-AI-image competition entry, and a road-safety object detector.'},
          {k:'Integration & craft', v:'A Discord bot that runs their own vision model, a voice translator, a talking weather bot, and refactored clean code.'},
          {k:'Finale', v:'A self-chosen graduation project, built hackathon-style, tested against a checklist and presented.'}
        ]}
      ]},
      {t:'🧭 The teaching philosophy', cards:[
        {type:'good', txt:'The rule that appears in nearly every lesson plan: <strong>don’t write the code for the students, and don’t hand them the answers.</strong> Ask leading questions, let them think aloud, let them help each other. Your job is to unblock, not to solve.'},
        {type:'text', h:'Every module starts with a real problem', b:'Projects are never “make an app.” They are framed as problems worth solving: <strong>hacker attacks</strong> (the password generator), <strong>pollution and waste</strong> (the eco bot), <strong>technology addiction</strong> (the web pages), the <strong>energy crisis</strong> (the calculator), <strong>road safety</strong> (the detector), <strong>climate change</strong> (the hackathon). Open with the problem, not the syntax — the code becomes a means to an end.'},
        {type:'text', h:'Experiment, then explain', b:'Several lessons deliberately give students code <em>before</em> the explanation and ask them to work out what it does — the Discord bot in M1L3, the Jinja template in M3L2, the notebooks in M5. Resist explaining early. Five minutes of “change something and run it again” produces better questions than any lecture.'},
        {type:'hi', h:'Reflection is a stage, not an afterthought', b:'Every single lesson ends with a <strong>10–15 minute reflection</strong> stage: what did we achieve, what was hardest, what would you improve, plus homework. It is timetabled because it is where the learning consolidates. Module 15 of this training covers the eight reflection techniques the course provides so you can rotate them.'},
        {type:'tip', txt:'Motivation is part of the job. The course asks you to praise specific effort, share motivational videos in the group chat after milestone lessons, and celebrate the end of each module by connecting it to a real career. Very few students finish an advanced course — say so, and mean it.'}
      ]},
      {t:'🎯 What success looks like', cards:[
        {type:'twocol', left:{h:'✅ A successful tutor', items:['Is fluent enough in the toolchain to focus fully on the student','Opens with the problem, not the syntax','Never writes the student’s code for them','Keeps timings and moves on when a stage overruns','Reads errors out loud instead of fixing silently','Enforces the token/secret rules without exception','Adapts scope for students ahead of or behind the group']}, right:{h:'🌟 A successful student', items:['Ships working projects and publishes them to GitHub','Can explain what their code does, not just run it','Finds answers in documentation without being told to','Debugs a simple problem with growing independence','Thinks about who their project is for','Gives and receives constructive code feedback','Presents a finished graduation project they’re proud of']}},
        {type:'good', txt:'Success is <strong>not</strong> “covered all the material.” It is a confident student with a finished project they understand and can talk about. The course says it plainly about the graduation project: encourage them to finish without overcomplicating, and save improvements for later.'}
      ]},
      {t:'🗂️ How this training is structured', cards:[
        {type:'text', h:'Modules, in order', b:'This training has <strong>16 modules</strong> in three parts. <strong>Getting ready (1–4):</strong> this overview, the Python constructs the course uses but never explains, how a lesson works, and a hands-on setup lab. <strong>The course itself (5–14):</strong> one module per course module, in order — training Module 5 covers course Module 1, and so on — so you can find any lesson instantly. <strong>Delivery and assessment (15–16):</strong> the deeper teaching craft, then a model lesson to watch. Each module opens with a short <strong>overview → why it matters → what students build → what you must be 100% confident with</strong>, then goes into detail.'},
        {type:'hi', h:'The 70% rule & the final test', b:'You must work through the modules <strong>in order</strong>. Each has a short test, and you need <strong>70%+ to unlock the next module</strong> — there’s no skipping ahead. Once every module is complete, the <strong>Digital Skill Test (DST)</strong> unlocks. Question order and answer order are shuffled on every attempt, so retaking a test means knowing the material rather than remembering positions.'},
        {type:'warn', txt:'The tests only check that you have <strong>read and understood</strong> a module. They cannot check that you can <em>do</em> it — and for this course those are not the same thing. That is what the <strong>✋ Before you teach this</strong> checklist at the top of each module is for: a list of things you must have personally built and run. Tick them honestly. Passing a test on the database module while never having built the database app is exactly the situation that falls apart in front of a class.'},
        {type:'tip', txt:'Two things are always available from the top of any screen: the <strong>❓ FAQ</strong> (a glossary, the errors students hit, the security rules, what to say when you don’t know an answer, and what to do when a student is ahead of or behind the group) and the <strong>theme toggle</strong>. Use the FAQ as a quick reference while you prepare.'},
        {type:'text', h:'Roughly how long this takes', b:'Each module carries a <strong>prep estimate</strong> at the top, covering the reading plus the hands-on work. In total the training is around <strong>30–40 hours</strong> if you do the practical checklists properly, and the practical work is the majority of it. The heaviest modules are the setup lab, Flask, and databases. Once you are teaching, budget roughly <strong>1–2 hours of prep per lesson</strong>, more for the LiveCoding lessons and the module-4 database lessons, less for the discussion-led ones.'}
      ]}
    ],
    quiz:[
      {q:'How is the Python Pro course structured?', opts:['10 modules of 4 lessons each — 40 lessons, 90 minutes as a group lesson','4 modules of 10 lessons each, 45 minutes each','A single continuous block of lessons with no modules','20 lessons of 60 minutes, all individual'], c:0, fb:'Python Pro is 10 modules × 4 lessons = 40 lessons. Group lessons run 90 minutes; each has a 50-minute individual-lesson variant.'},
      {q:'Which three professional roles does the course have students step into?', opts:['Automation programmer, web developer, and AI programmer','Game designer, animator, and 3D modeller','Data entry clerk, tester, and project manager','Front-end developer, DevOps engineer, and security analyst'], c:0, fb:'M1L1 frames the whole course around three roles — automation programmer, web developer and AI programmer — so students can choose a direction by the end.'},
      {q:'A student is stuck on the password generator. What does the course expect you to do?', opts:['Ask leading questions and let them and their peers reason it out — don’t write the code for them','Type the solution into their editor so the class stays on schedule','Send them the finished code in the chat','Skip the task and move on to the next stage'], c:0, fb:'“Don’t write the code for the students, and don’t give them the answers” is repeated throughout the lesson plans. You unblock; they solve.'},
      {q:'Why is each project introduced with a real-world problem such as hacker attacks or waste sorting?', opts:['So the code becomes a means to solving something students care about, rather than an exercise','Because the platform requires a theme for every assignment','To fill time before the practical stage','Because the problems are what the test assesses'], c:0, fb:'Every module opens with a genuine problem — passwords, pollution, technology addiction, energy, road safety, climate change — so students build something that matters to them.'},
      {q:'Where does the reflection stage sit in a Python Pro lesson?', opts:['It is a timetabled 10–15 minute stage at the end of every single lesson','It happens only at the end of each module','It is optional and usually skipped','It replaces the practical stage when time runs short'], c:0, fb:'Every lesson ends with a scheduled reflection and homework stage — it is where the learning consolidates, not an optional extra.'},
      {q:'How does a tutor candidate reach the Digital Skill Test in this training?', opts:['By completing every module in order, scoring 70%+ on each test — the DST unlocks only then','By clicking a “skip to DST” button available to everyone','By passing the first module','The DST is open from the start'], c:0, fb:'The modules are sequential and each needs 70% to unlock the next. The DST opens only once every module is complete.'},
      {q:'What does the course define as success for a student?', opts:['A confident student with a finished project they understand and can present','A student who covered every assignment regardless of what worked','The fastest coder in the group','A student who memorised the most library commands'], c:0, fb:'A finished, understood, presentable project beats an unfinished ambitious one — the graduation-project notes say exactly this.'}
    ]
  },
  {
    id:2, emoji:'🐍', color:'#4A9BD8',
    title:'Python You Need First',
    desc:'The Python that appears throughout the course but is never explained in it: decorators, async/await, classes and self, dunder methods, lambda, type hints and *args — plus a plain-language version of each for students.',
    obj:'Close the gap between “I know Python basics” and “I can explain every line of the course code.” Every construct here appears in the lessons you will teach, and the curriculum does not stop to explain any of it. You need two things for each: an understanding solid enough that you are not bluffing, and one sentence you can say to a 14-year-old.',
    prep:'~2–3 hours. Type every example yourself rather than reading it.',
    practical:{
      intro:'This module is the one place where reading is genuinely not enough — these constructs only click once you have run them. Before the test, work through all of these in a scratch file:',
      items:[
        'Written a decorator yourself, from scratch, and watched it wrap a function',
        'Written and run an <code>async def</code> function with <code>await asyncio.sleep(1)</code> and seen why the loop matters',
        'Defined a class with <code>__init__</code> and <code>self</code>, made two objects from it, and given them different values',
        'Made one class inherit from another and called the parent’s method',
        'Added a <code>__repr__</code> and seen what changes when you print the object',
        'Rewritten a small <code>for</code> loop as a list comprehension, and a two-line function as a <code>lambda</code>',
        'Run a function that takes <code>*args</code> and printed what <code>args</code> actually is'
      ]
    },
    sections:[
      {t:'🧭 Why this module exists', cards:[
        {type:'brief',
          overview:'Seven Python constructs that appear constantly in the course code and are never explained by it: the <strong>decorator</strong> (<code>@bot.command()</code>, <code>@app.route()</code>), <strong>async/await</strong>, <strong>classes</strong> with <code>self</code> and inheritance, <strong>dunder methods</strong>, <strong>lambda</strong>, <strong>type hints</strong> and <strong>*args</strong>.',
          why:'Every Discord lesson uses decorators and <code>async</code>. Every Flask lesson uses decorators. The database module defines classes that inherit. A student will ask “what’s the <code>@</code> for?” in course lesson M1L3 — the third lesson of the course — and “I don’t know” is an answer you only get to give once before the group stops asking you things.',
          learn:'Nothing directly — students are never taught these formally. The curriculum openly defers it: “Any library consists of classes. We’ll talk about what these are and why we need them in other lessons.” In practice, <em>you</em> are the explanation.',
          confident:'What a decorator does to the function beneath it; why bot code needs <code>async</code>/<code>await</code>; what <code>self</code> refers to; what the brackets in <code>class Card(db.Model)</code> mean; and a one-sentence student-facing version of each.'
        },
        {type:'good', txt:'You do not need to master these to a professional standard. You need to not be bluffing. The bar is: you can explain it simply, you can answer one follow-up question, and you know where the honest edge of your knowledge is.'}
      ]},
      {t:'🎀 Decorators — the @ symbol', cards:[
        {type:'text', h:'What it actually is', b:'A <strong>decorator</strong> is a function that takes another function, wraps extra behaviour around it, and hands it back. The <code>@</code> line is shorthand: writing <code>@my_decorator</code> above <code>def greet()</code> means “take <code>greet</code>, pass it through <code>my_decorator</code>, and let the result be what <code>greet</code> now means.”'},
        {type:'code', lbl:'a decorator you can write yourself in ten lines', code:`<span class="ck">def</span> <span class="cf">shout</span>(func):              <span class="cc"># takes a function...</span>
    <span class="ck">def</span> <span class="cf">wrapper</span>():
        result = <span class="cf">func</span>()          <span class="cc"># ...runs the original...</span>
        <span class="ck">return</span> result.<span class="cf">upper</span>() + <span class="cs">"!!!"</span>   <span class="cc"># ...and adds to it</span>
    <span class="ck">return</span> wrapper             <span class="cc"># ...then hands back the new version</span>

<span class="cd">@shout</span>
<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="ck">return</span> <span class="cs">"hello"</span>

<span class="cf">print</span>(<span class="cf">greet</span>())               <span class="cc"># HELLO!!!</span>

<span class="cc"># @shout above greet() is exactly the same as writing:</span>
<span class="cc">#   greet = shout(greet)</span>`},
        {type:'text', h:'What that means for the course code', b:'In the course you never write a decorator — you only <em>use</em> ones the libraries provide. <code>@bot.command()</code> means “discord.py, please register the function below as a command users can type.” <code>@app.route("/")</code> means “Flask, please run the function below when someone visits this address.” In both cases the decorator is how <strong>your function gets handed to the library</strong>, so the library can call it later when the moment arrives. You never call these functions yourself — that is the whole point, and it is the part students find strange.'},
        {type:'hi', h:'The student-facing sentence', b:'“The <code>@</code> line is a label you stick on a function so the library knows what the function is <em>for</em>. <code>@app.route("/")</code> is a label saying ‘run this one when someone opens the home page.’ You never call it yourself — Flask calls it for you when someone visits.” For older or sharper students you can add: it’s a function wrapping another function.'},
        {type:'warn', txt:'One difference worth knowing so you don’t look inconsistent: <code>@bot.event</code> has no brackets, <code>@bot.command()</code> does. Both are correct as written in the course code. The bracketed one is a decorator <em>factory</em> — it can take options like <code>@bot.command(name="pw")</code>, so it must be called first to produce the actual decorator. If a student asks, “that one can take settings, so it needs its own brackets” is a true and sufficient answer.'}
      ]},
      {t:'⏳ async and await', cards:[
        {type:'text', h:'The problem it solves', b:'A Discord bot spends nearly all its time <strong>waiting</strong> — for a message, for Discord to confirm a send, for an API to reply. Ordinary Python waiting blocks everything: while one line waits, nothing else can happen, so the bot would be deaf while replying to a single message. <code>async</code> lets a function pause at a waiting point and let other work run in the meantime.'},
        {type:'qa', h:'The three words, in plain terms', items:[
          {k:'async def', v:'Declares a function that is <em>allowed to pause</em>. Calling it does not run it — it produces something the event loop will run.'},
          {k:'await', v:'“Pause here until this finishes, and let other things happen while we wait.” You can only use it inside an <code>async def</code>.'},
          {k:'The event loop', v:'The manager that keeps all the paused functions moving. In the course, discord.py starts it for you inside <code>bot.run(...)</code> — which is why nothing needs setting up.'}
        ]},
        {type:'code', lbl:'why every bot command in the course looks like this', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):                <span class="cc"># may pause</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Hi!"</span>)            <span class="cc"># pause until Discord confirms</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Still here!"</span>)    <span class="cc"># then carry on</span>

<span class="cc"># Forget the await and nothing is sent — you get a warning about a</span>
<span class="cc"># "coroutine was never awaited". That is the #1 async bug students hit.</span>`},
        {type:'warn', txt:'The failure students will actually produce: writing <code>ctx.send("Hi")</code> without <code>await</code>. No message appears and the console mentions a coroutine never being awaited. Learn to recognise that message — it means “you created the job but never let it run.” Also note the course’s speech and API functions are <em>not</em> async, so a bot command mixes awaited calls (Discord) with plain ones (<code>speak()</code>, <code>requests.get()</code>).'},
        {type:'hi', h:'The student-facing sentence', b:'“<code>async</code> means this function is allowed to wait without freezing the whole bot, and <code>await</code> marks the spot where it waits. Think of a waiter taking another table’s order while the kitchen cooks — instead of standing still until the food is ready.”'},
        {type:'good', txt:'This is the honest edge of what you need. You do <strong>not</strong> need to understand coroutines, the event loop internals, or <code>asyncio.gather</code>. If a student pushes past “it waits without freezing,” that is a genuinely advanced question — say so, say it’s a great question, and look it up together. That models the M1L4 documentation habit rather than undermining you.'}
      ]},
      {t:'🏗️ Classes, self & inheritance', cards:[
        {type:'text', h:'The bit the curriculum gives you', b:'The course says: in Python everything is an object, and classes are the <strong>blueprints</strong> objects are made from — plus the excellent observation that <strong>Flask is a class</strong> they have been using all along. That framing is right, and it is where course lesson M4L1 stops. What follows is what you need beyond it.'},
        {type:'code', lbl:'a class, an object, and what self is', code:`<span class="ck">class</span> <span class="ct2">Dog</span>:
    <span class="ck">def</span> <span class="cf">__init__</span>(self, name):    <span class="cc"># runs when you make one</span>
        self.name = name         <span class="cc"># store it ON THIS object</span>

    <span class="ck">def</span> <span class="cf">speak</span>(self):
        <span class="ck">return</span> <span class="cs">f"{self.name} says woof"</span>

rex = <span class="ct2">Dog</span>(<span class="cs">"Rex"</span>)               <span class="cc"># two objects...</span>
bella = <span class="ct2">Dog</span>(<span class="cs">"Bella"</span>)            <span class="cc"># ...from one blueprint</span>

<span class="cf">print</span>(rex.<span class="cf">speak</span>())             <span class="cc"># Rex says woof</span>
<span class="cf">print</span>(bella.<span class="cf">speak</span>())           <span class="cc"># Bella says woof</span>`},
        {type:'text', h:'self, in one idea', b:'<code>self</code> is <strong>“the particular object this method was called on.”</strong> One blueprint, many objects, each with its own data — <code>self</code> is how a method knows which one it is working with. It is the first parameter of every method and Python fills it in for you, which is why you write <code>rex.speak()</code> with nothing in the brackets but <code>def speak(self)</code> in the class.'},
        {type:'text', h:'Inheritance — the brackets in class Card(db.Model)', b:'Writing <code>class Card(db.Model)</code> means “<strong>Card is a kind of db.Model and gets everything db.Model can do, for free</strong>.” That is why <code>Card</code> suddenly has <code>.query</code>, and why SQLAlchemy knows how to turn it into a database table — none of that is code anyone wrote in the lesson. Same pattern everywhere: <code>class User(db.Model)</code> in M4L2 inherits the same abilities.'},
        {type:'hi', h:'The student-facing sentences', b:'For classes: “A class is a cookie cutter and objects are the cookies — one shape, many cookies, each with its own decorations.” For <code>self</code>: “<code>self</code> means <em>this particular one</em> — it’s how the recipe knows which cookie it’s talking about.” For inheritance: “The brackets mean ‘this is a kind of that, and inherits everything it can do’ — like how a poodle is a kind of dog and can already bark without being taught.”'},
        {type:'tip', txt:'You will not teach a formal OOP lesson — the curriculum deliberately keeps classes light and practical. Your job is narrower: when a student asks why <code>class Card(db.Model)</code> has something in the brackets, or what <code>self</code> is, you have a real answer. Those two questions are the ones that actually get asked.'}
      ]},
      {t:'✨ Dunder methods, lambda, type hints & *args', cards:[
        {type:'qa', h:'Dunder (“double underscore”) methods', items:[
          {k:'What they are', v:'Methods with two underscores each side. Python calls them <em>for</em> you at particular moments, rather than you calling them by name.'},
          {k:'__init__', v:'Runs when an object is created. “Set this one up.”'},
          {k:'__repr__', v:'Decides what the object looks like when printed. That is all <code>return f\'&lt;Card {self.id}&gt;\'</code> in M4L1 does — it makes debugging output readable instead of showing a memory address.'},
          {k:'__name__', v:'Not a method — a variable holding the current file’s name, or the string <code>"__main__"</code> if it’s the file you ran. <code>Flask(__name__)</code> is Flask asking “where am I, so I can find your templates folder?”'},
          {k:'if __name__ == "__main__":', v:'“Only do this if this file was run directly, not imported by another file.” It’s why importing <code>bot_logic.py</code> in M1L3 doesn’t accidentally start anything.'}
        ]},
        {type:'code', lbl:'lambda, type hints and *args — the three smaller ones', code:`<span class="cc"># lambda: a tiny unnamed function, written inline</span>
<span class="ck">lambda</span> x: x[<span class="cn">1</span>]        <span class="cc"># same as: def f(x): return x[1]</span>

<span class="cc"># In M5L3 it tells sorted() WHICH part to sort by — item 1, the score:</span>
<span class="cc">#   sorted(scores.items(), key=lambda x: x[1], reverse=True)</span>

<span class="cc"># type hints: notes for humans. Python does NOT enforce them.</span>
<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:   <span class="cc"># takes a string, gives a string</span>
    <span class="ck">return</span> <span class="cs">"sunny"</span>

<span class="cc"># *args: "any number of positional arguments", collected into a tuple</span>
<span class="ck">def</span> <span class="cf">total</span>(*prices):
    <span class="cf">print</span>(prices)          <span class="cc"># (100, 200, 300) — it's just a tuple</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

<span class="cf">total</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>)        <span class="cc"># works with any count</span>`},
        {type:'hi', h:'The student-facing sentences', b:'<strong>lambda:</strong> “A throwaway mini-function you write on one line when it’s not worth giving it a name.” <strong>Type hints:</strong> “Notes saying what goes in and what comes out. Python doesn’t check them — they’re for whoever reads the code, including you next month.” <strong>*args:</strong> “The star means ‘as many as you like’ — they arrive as a list you can add up.” <strong>__repr__:</strong> “It decides what gets shown when you print the object, so you see something useful instead of gibberish.”'},
        {type:'good', txt:'Type hints are worth a little enthusiasm when you reach the clean-code lesson. They are the one item on this list that is purely about being kind to the next reader — which is precisely the argument that whole lesson makes.'}
      ]}
    ],
    quiz:[
      {q:'A student points at @app.route("/") and asks what the @ does. What is your answer?', opts:['It hands the function below to Flask as a labelled job, so Flask can run it when someone visits that address — you never call it yourself','It marks the function as private so students cannot change it','It is a comment that reminds you which page the function is for','It imports the route from the Flask library'], c:0, fb:'A decorator takes the function below it and gives it to the library with extra behaviour attached. You never call these functions yourself — the library calls them when the moment comes.'},
      {q:'Writing @shout above def greet() is equivalent to which line of ordinary Python?', opts:['greet = shout(greet)','shout = greet()','greet(shout)','import shout from greet'], c:0, fb:'That is precisely what the @ syntax is shorthand for: pass the function through the decorator and let the result become the new meaning of the name.'},
      {q:'Why is every Discord command in the course written as async def?', opts:['Because the bot spends most of its time waiting, and async lets it pause at a waiting point instead of freezing everything else','Because Discord commands must run faster than normal functions','Because async is required for any function that takes arguments','Because it makes the bot handle more servers at once'], c:0, fb:'A bot is almost always waiting — for messages, for confirmations, for APIs. async lets a function pause and let other work continue while it waits.'},
      {q:'A student writes ctx.send("Hi") with no await and nothing appears. What has happened?', opts:['They created the job but never let it run — the console will mention a coroutine that was never awaited','The message was sent to the wrong channel','Their bot token has expired','send() requires the Client class rather than Bot'], c:0, fb:'This is the single most common async bug students produce. Recognising the “coroutine was never awaited” message is the fastest way to diagnose it.'},
      {q:'What does self refer to inside a class method?', opts:['The particular object the method was called on — it is how the method knows which object’s data to use','The class itself, rather than any object made from it','The file the class is written in','The parent class the class inherits from'], c:0, fb:'One blueprint can produce many objects, each with its own data. self is how a method knows which one it is working with, and Python fills it in automatically.'},
      {q:'What do the brackets in class Card(db.Model) mean?', opts:['Card is a kind of db.Model and inherits everything it can do — which is why it suddenly has .query and can become a database table','db.Model is passed in as the first piece of data','The class only works while db.Model is imported','It renames the class to db.Model internally'], c:0, fb:'Inheritance. None of the query or table-mapping machinery is written in the lesson — Card gets it all from db.Model for free.'},
      {q:'What is __repr__ for?', opts:['It decides what the object looks like when printed, so debugging output is readable instead of a memory address','It runs when the object is created and sets up its data','It removes the object from the database','It returns the object’s position in the table'], c:0, fb:'__init__ sets an object up; __repr__ decides how it appears when printed. In M4L1 it is what makes <Card 3> show instead of gibberish.'},
      {q:'In sorted(scores.items(), key=lambda x: x[1], reverse=True), what is the lambda doing?', opts:['Acting as a tiny unnamed function telling sorted() to sort by item 1 — the score','Reversing each pair before sorting','Removing entries whose score is zero','Converting the dictionary into a list'], c:0, fb:'A lambda is a one-line unnamed function. Here it tells sorted() which part of each pair to compare — element 1, the sentence score.'},
      {q:'What do type hints like (city: str) -> str actually do at runtime?', opts:['Nothing — Python does not enforce them; they document what goes in and comes out for whoever reads the code','They convert the argument to a string automatically','They raise an error if the wrong type is passed','They make the function run faster'], c:0, fb:'They are documentation for humans. Python does not check them, which is worth saying plainly so students do not rely on them for validation.'},
      {q:'A sharp student pushes well past “async means it waits without freezing” and asks how the event loop schedules coroutines. What is the right move?', opts:['Say it is a genuinely advanced question, that you would need to look it up, and look it up together','Give a confident guess so the group keeps trusting you','Tell them it is beyond the course and move on','Redirect them to an additional assignment instead of answering'], c:0, fb:'This is the honest edge of what you need, and looking it up together models exactly the documentation habit M1L4 is built to teach. Guessing is the one option that actually costs you credibility.'}
    ]
  },
  {
    id:3, emoji:'🗺️', color:'#2FA37C',
    title:'How a Python Pro Lesson Works',
    desc:'The shape every lesson follows, the five teaching methods the plans assume you know by name, and the timing discipline that decides whether a lesson lands.',
    obj:'Learn the mechanics of a lesson before you learn ten modules of content. Every lesson plan names a method at the top and assumes you know what it means — this module makes sure you do, so that “this lesson runs on the Use–Modify–Create method” is an instruction rather than a puzzle.',
    prep:'~1 hour.',
    practical:{
      intro:'Before the test, orient yourself in the real materials:',
      items:[
        'Read one full lesson plan from the curriculum PDF start to finish, including its stage table',
        'Identified in that plan: the briefing, the problem, the goals, the theory, the practice and the reflection',
        'Found the note at the top of the plan naming the teaching method it uses',
        'Worked out what the 50-minute individual version of that lesson would have to drop'
      ]
    },
    sections:[
      {t:'🧭 Why this comes before the content', cards:[
        {type:'brief',
          overview:'Every one of the 40 lessons shares a skeleton — <strong>briefing → homework check → the problem → the goals → theory → practice → reflection</strong> — and draws on five named methods: <strong>EduScrum</strong>, <strong>LiveCoding</strong>, <strong>Use–Modify–Create</strong>, <strong>metacognition</strong> and <strong>gamification</strong>.',
          why:'The methods start being used in the <em>second lesson of the course</em>. If you meet “this session is designed around the Scrum system” without knowing what that means, you will run the lesson as an ordinary one and the structure it depends on quietly disappears.',
          learn:'Nothing directly — but students feel all of it. The sprint rhythm, the deliberate mistakes, the five-minute experiment before the explanation: those are what make the course feel different from school.',
          confident:'The seven-part skeleton; what each of the five method names means in practice; and what to do when you fall behind schedule.'
        }
      ]},
      {t:'🕐 The skeleton', cards:[
        {type:'text', h:'The seven parts, in order', b:'<strong>1. Briefing and greetings</strong> — check microphones and cameras, take attendance inside a conversation rather than as a roll call. <strong>2. Homework check</strong> — everyone contributes, including those who didn’t do it. <strong>3. The problem</strong> — the real-world hook. <strong>4. The goals</strong> — what today produces. <strong>5. Theory</strong> — short, always. <strong>6. Practice</strong> — the bulk of the lesson. <strong>7. Reflection and homework</strong> — 10 to 15 minutes, timetabled.'},
        {type:'text', h:'Read the stage table before anything else', b:'Every lesson plan in the PDF opens with a table giving each stage a <strong>duration and a start time</strong>, plus a 50-minute individual variant. That table is the lesson’s spine. Read it, and know where your two immovable anchors are: practice must get its allocation, and reflection must not be sacrificed.'},
        {type:'warn', txt:'The most common way a Python Pro lesson fails is an <strong>early stage overrunning</strong>. The plans warn about it repeatedly — don’t let the theory drag, don’t exceed the time on environment setup, don’t prolong the discussion. Watch for it in yourself: the theory stage feels safe to teach, which is exactly why it expands.'},
        {type:'good', txt:'Use visible timers, constantly. The plans call for them on one-minute presentations, five-minute brainstorms, two-minute code hunts, seven-minute training rounds. A timer on screen does the disciplining, so you stay the person helping rather than the person hurrying everyone.'}
      ]},
      {t:'🎓 The five methods, named', cards:[
        {type:'qa', h:'What each name means when you see it at the top of a plan', items:[
          {k:'Scrum / EduScrum', v:'The lesson is split into <strong>sprints</strong> with strict time limits. Each opens with a short discussion and closes with two fixed questions: “did we really achieve the result?” and “how does this bring us closer to solving the main problem?” Fuller versions add a retrospective. <em>First used in course lesson M1L2 — the second lesson.</em>'},
          {k:'LiveCoding', v:'You build the code <strong>together with the students</strong>, sharing your screen, narrating decisions and making deliberate mistakes for them to catch. <em>Used for the database lessons.</em>'},
          {k:'Use–Modify–Create', v:'Students <strong>use</strong> working code first, then <strong>modify</strong> it while you explain, and only then <strong>create</strong> their own. Resist explaining early. <em>Used for the first Discord bot and the Keras model.</em>'},
          {k:'Metacognition', v:'Five scheduled stops where students think about <em>how</em> they are learning, not what. <em>Used in course lesson M2L1.</em>'},
          {k:'Gamification', v:'Theory delivered as a game rather than a lecture — quiz teams, expert games, code hunts, accuracy competitions. Not filler; it <em>is</em> the delivery method.'}
        ]},
        {type:'text', h:'When you fall behind', b:'The instruction is explicit and worth internalising now: in an EduScrum lesson, if you are behind, <strong>go to the retrospective anyway</strong> and discuss what went wrong. A complete lesson with unfinished tasks beats an incomplete lesson. The same logic applies everywhere — protect the shape, sacrifice the scope.'},
        {type:'tip', txt:'When a plan names a method, it is telling you the lesson will not work otherwise. A Use–Modify–Create lesson delivered as a lecture, or an EduScrum lesson run without timings, produces an overrunning stage and a disengaged group. Read the note at the top of the plan first, every time.'}
      ]},
      {t:'🧰 The tools and the two golden rules', cards:[
        {type:'qa', h:'What you run a lesson with', items:[
          {k:'Zoom / Classroom', v:'The lesson, plus breakout rooms, annotation tools for LiveCoding, and the shared whiteboard.'},
          {k:'The platform', v:'Assignments, theory, code examples, chats, grades. Nearly every stage says “move to the assignment named…”.'},
          {k:'Backoffice (BO)', v:'Verifying assignments were actually submitted; the group chat link.'},
          {k:'Group chat', v:'Between-lesson support, repository links, memes.'},
          {k:'Quiz tools & boards', v:'Wayground / Quizizz, Tally, and Miro or equivalent for brainstorms.'},
          {k:'Technical assistant (TS)', v:'Your second pair of hands for installs and blocked students. Use them.'}
        ]},
        {type:'good', txt:'<strong>Rule one: never write the code for a student.</strong> Ask leading questions, let them think aloud, let them help each other. It appears in nearly every plan and it is the single behaviour that most distinguishes a good tutor here.'},
        {type:'good', txt:'<strong>Rule two: theory first, then code.</strong> Say what a line does, then type it together. Beginners dropped straight into a script get lost — the concept has to land before the syntax.'},
        {type:'tip', txt:'Module 15 covers the rest of the delivery craft — differentiation, assessment, classroom management, the reflection techniques, and what to say when you don’t know an answer. Come back to it once you have the content modules under your belt; you’ll get more from it then.'}
      ]}
    ],
    quiz:[
      {q:'What are the seven parts of a Python Pro lesson, in order?', opts:['Briefing → homework check → the problem → the goals → theory → practice → reflection and homework','Theory → practice → test → reflection → homework → goals → briefing','Goals → theory → homework check → practice → briefing → reflection → test','Briefing → theory → test → practice → homework → goals → reflection'], c:0, fb:'Nearly every lesson in the course follows this skeleton, and the plan’s stage table gives each part a duration and a start time.'},
      {q:'A lesson plan opens with “this session is designed around the Scrum system.” What does that tell you?', opts:['The lesson is split into time-limited sprints, each opening with a discussion and closing with the two fixed debrief questions','You should mention Scrum during the theory stage','Students will be assessed as a team rather than individually','The lesson has no practice stage'], c:0, fb:'It is an instruction about structure, not a topic. Run it as an ordinary lesson and the sprint rhythm the plan depends on disappears.'},
      {q:'In a Use–Modify–Create lesson, what must you resist doing?', opts:['Explaining the code before students have run and experimented with it themselves','Letting students change the example code','Giving them working code at all','Allowing them to work in pairs'], c:0, fb:'Use and modify come first, in order. Explaining early removes the experimentation that produces the good questions.'},
      {q:'You are behind schedule in an EduScrum lesson with tasks unfinished. What do you do?', opts:['Go to the retrospective anyway and discuss what went wrong — protect the shape, sacrifice the scope','Extend the sprint until the tasks are finished','Skip the retrospective and set the rest as homework','Give students the solution code to catch up'], c:0, fb:'A complete lesson with unfinished tasks beats an incomplete lesson. The plans state this directly.'},
      {q:'Which stage is most likely to overrun, and why is that dangerous?', opts:['Theory — it feels safe to teach, so it expands, and it eats the practice time','Reflection — students enjoy it and keep talking','The briefing — attendance takes longer than planned','Practice — students always need more time'], c:0, fb:'The plans repeatedly warn not to let the theory drag. Practice and reflection are the two things that must keep their allocation.'},
      {q:'What are the two golden rules that appear across nearly every lesson plan?', opts:['Never write the code for a student, and explain the theory before writing the code','Always finish every task, and never let a student fall behind','Keep the camera on, and always start with a quiz','Follow the plan exactly, and never improvise'], c:0, fb:'“Don’t write the code for the students” and “explain the theory first, then write the code together” are the two most repeated instructions in the curriculum.'},
      {q:'Why is this module placed before the ten content modules?', opts:['Because the teaching methods start being used in the second lesson of the course, so you need the vocabulary before you meet it','Because it is the easiest module and builds confidence','Because the platform requires methodology to be completed first','Because content modules cannot be understood without it'], c:0, fb:'The methods appear from course lesson M1L2 onward. Meeting “designed around the Scrum system” without knowing what it means is exactly the problem this module removes.'}
    ]
  },
  {
    id:4, emoji:'🧰', color:'#E8663B',
    title:'Your Setup Lab & The Tools',
    desc:'Set up everything the course needs on your own machine — interpreter, VS Code, pipenv, Git, the Discord Developer Portal, Colab, Teachable Machine — plus a tour of the platform and the slide decks.',
    obj:'Do, on your own machine, everything you will later ask students to do. You cannot troubleshoot an install you have never performed, and you cannot run the Developer Portal stage having never clicked through it. This module is entirely hands-on: there is nothing here to learn by reading.',
    prep:'~3–4 hours, spread over a few sittings. Do it on the machine you will teach from.',
    practical:{
      intro:'This module IS the checklist. Do not mark it complete until every item is genuinely true — everything downstream assumes it:',
      items:[
        'Installed the Python interpreter and confirmed <code>python --version</code> works in a fresh terminal',
        'Installed VS Code, the Python extension, and used <em>Python: Select Interpreter</em> at least once',
        'Created a project folder and a <code>.py</code> file, and run it from VS Code’s terminal',
        'Installed a library with <code>pip install</code>, then created a <strong>pipenv</strong> environment and installed one into that instead',
        'Deliberately caused a <code>ModuleNotFoundError</code> by installing outside the environment — and fixed it',
        'Installed Git, run <code>git config --global user.name</code> and <code>user.email</code>, and published a repository <strong>from inside VS Code</strong>',
        'Created and merged a branch, and seen the fast-forward merge output',
        'Registered a Discord app and bot, enabled the <strong>Message Content Intent</strong>, invited it to your own server, and got it to reply',
        'Created a Colab notebook, run a code cell and a markdown cell, uploaded a file, and watched the session reset wipe it',
        'Trained a Teachable Machine classifier, exported the model, and unzipped it in Colab',
        'Opened the platform as a tutor AND viewed a lesson the way a student sees it',
        'Opened at least three lesson slide decks in slideshow mode'
      ]
    },
    sections:[
      {t:'🧭 Why this module is all doing', cards:[
        {type:'brief',
          overview:'A hands-on lab covering the whole toolchain: <strong>interpreter and VS Code</strong>, <strong>pip and pipenv</strong>, <strong>Git and GitHub</strong>, the <strong>Discord Developer Portal</strong>, <strong>Google Colab</strong>, <strong>Teachable Machine</strong>, and the <strong>platform and slide decks</strong>.',
          why:'Course lesson M1L2 has you installing an interpreter and an IDE for a whole class of 13–17 year olds on mixed operating systems, in fifteen minutes. Every later module adds a tool. The pedagogy for that is covered elsewhere; what no amount of reading gives you is having done it yourself once, calmly, before it matters.',
          learn:'Students do all of this too — this lab is deliberately the student journey, taken first and at your own pace.',
          confident:'Every item on the checklist above, done on your own machine, with the failure modes seen at least once.'
        },
        {type:'good', txt:'The best thing you can do while working through this lab is <strong>keep a note of everything that went wrong for you</strong>. Your own stumbles are the most accurate possible prediction of what your students will hit, and the notes become your personal supplement to the FAQ.'}
      ]},
      {t:'💻 Interpreter, VS Code & the interpreter trap', cards:[
        {type:'text', h:'Do it in this order', b:'Install the <strong>Python interpreter</strong> (on Windows, tick <em>Add Python to PATH</em> — skipping it is the single most common cause of “pip is not recognised”). Install <strong>VS Code</strong>. Install the <strong>Python extension</strong> from the Extensions panel. Then use <code>Shift+Ctrl+P</code> / <code>Cmd+Shift+P</code> → <em>Python: Select Interpreter</em>. Create a folder, create a <code>.py</code> file, write <code>print("Hello, world!")</code>, and run it.'},
        {type:'warn', txt:'Deliberately break it once, now, in private. Install a library with the wrong interpreter selected and watch <code>ModuleNotFoundError</code> appear even though pip clearly succeeded. That error will come up in a real lesson, and having caused it on purpose is the difference between diagnosing it in ten seconds and losing twenty minutes.'},
        {type:'text', h:'Windows and Mac differ, and half your class will be on each', b:'Keep both sets in your head: the palette shortcut (<code>Shift+Ctrl+P</code> vs <code>Cmd+Shift+P</code>), <code>python</code> vs <code>python3</code>, and how the terminal is opened. Where a command differs, say both out loud rather than assuming — “Ctrl+Shift+P, or Cmd+Shift+P on a Mac” costs two seconds and saves a confused student.'},
        {type:'image', src:'assets/media/images/setup-interpreter.jpg', alt:'VS Code with the Select Interpreter palette open, listing many virtual environments, with the one matching the open project highlighted.', cap:'Selecting the interpreter — the fix for most “it installed but won’t import” problems. Note how many environments are listed: the one to pick is the one whose name matches the open project (here TUR_Calculator-main, matching the TUR_CALCULATOR-MAIN folder in the Explorer). Picking any other is exactly how ModuleNotFoundError happens.'},
        {type:'tip', txt:'While you are here, write the <strong>student-facing setup sheet</strong> you will paste into the group chat before lesson one: download links, the PATH tick box, and what “done” looks like. The curriculum sets the installers as homework precisely so lesson time isn’t lost — a clear sheet is what makes that homework actually get done.'}
      ]},
      {t:'📦 pip, pipenv & virtual environments', cards:[
        {type:'text', h:'What to actually do', b:'Install a library globally with <code>pip install requests</code>. Then create a project with a <strong>pipenv</strong> environment and install into it with <code>pipenv install requests</code>. Notice the difference: where the files go, and what happens when you select the wrong interpreter afterwards. Course lesson M3L1 has students do this for Flask, and M7L1 does it again with large AI libraries.'},
        {type:'warn', txt:'The trap that catches students and tutors alike: inside a pipenv project you must use <code>pipenv install &lt;library&gt;</code>. Plain <code>pip install</code> puts it somewhere the project cannot see, and the resulting <code>ModuleNotFoundError</code> looks exactly like a broken install. If you have done this once yourself, you will recognise it instantly.'},
        {type:'text', h:'Practise the AI-library pin now, not in the lesson', b:'Course module M7 is the most fragile in the course. Get ahead of it: create an environment, install TensorFlow, and have the fix commands to hand — <code>pipenv uninstall tensorflow</code> then <code>pipenv install tensorflow==2.15</code>. Know that the Colab equivalent is <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> with <code>import tf_keras</code>. These are paste-ready commands, not things to reason about live.'},
        {type:'tip', txt:'A large install can take a long time on a school laptop. Have a fallback ready — the solution repository’s Pipfile — and know that using it is the right call, not a compromise. The lesson is about the AI, not about waiting for a download.'}
      ]},
      {t:'🐙 Git, GitHub & branches', cards:[
        {type:'text', h:'The full sequence to do yourself', b:'Create the GitHub account. Create an empty public repository and upload a file <strong>through the website</strong> — the clumsy way students meet first in M1L2. Then install the <strong>git application</strong>, choosing VS Code as the editor during setup. Run <code>git config --global user.name</code> and <code>user.email</code>. Sign in to GitHub from inside VS Code, and publish a repository <strong>from the editor</strong> — the way M2L3 teaches. Finally, commit a change and look at the file’s history.'},
        {type:'text', h:'Then branches, because M8L2 needs a screenshot from every student', b:'Create a branch, make a change on it, switch back, and merge it. Watch the fast-forward output. You will be asking every student to send you exactly this, so having done it more than once matters — merging is the kind of thing that feels fine until you do it in front of people.'},
        {type:'good', txt:'While you are here, practise saying the thing you will repeat all course: everything pushed to Git <strong>stays</strong> there. Delete a file, commit, then find it in the history. Seeing that yourself is what makes you convincing when you explain why a leaked token must be reset rather than deleted.'}
      ]},
      {t:'🤖 The Discord Developer Portal', cards:[
        {type:'text', h:'Click all the way through it once', b:'Create your own Discord server. Go to the Developer Portal, create an <strong>application</strong>, add a <strong>bot</strong>, and — the step that silently breaks everything — enable the <strong>Message Content Intent</strong> on the Bot page. Copy the token. Invite the bot to your server with the right permissions. Then run the course’s Client-class example with your token pasted in locally, and get it to reply. Then rewrite it using the <code>Bot</code> class.'},
        {type:'warn', txt:'Two things to have burned in before the lesson. First: the intent must be enabled in <strong>both</strong> the code (<code>intents.message_content = True</code>) and the portal — either one alone leaves you with a bot that connects and ignores everything. Second: the portal’s layout changes. Click through it again shortly before you teach M1L3 rather than trusting your memory from months earlier.'},
        {type:'image', src:'assets/media/images/setup-discord-intents.jpg', alt:'The Discord Developer Portal Bot page showing the Privileged Gateway Intents section with Presence, Server Members and Message Content intents, all switched off.', cap:'The Bot page (left nav → <strong>Bot</strong>). Scroll to <strong>Privileged Gateway Intents</strong> and switch on <strong>Message Content Intent</strong> — the third toggle. All three are OFF by default, exactly as shown here, which is why a freshly made bot connects and then ignores every message. Portal captured with the interface in Turkish; the intent names themselves are in English on every locale.'},
        {type:'warn', txt:'Read the screenshot carefully: all three intents are <strong>off</strong>. That is the default state, and <strong>Message Content Intent</strong> is the one you must turn on — the bottom toggle, partly cut off in this capture. Enabling it in the portal is only half the job: <code>intents.message_content = True</code> has to be in the code as well. Leave out either and the bot appears online and hears nothing.'},
        {type:'good', txt:'Practise the token discipline on yourself right now. Put your token in the code locally, then before you show anyone anything, replace it with <code>YOUR_BOT_TOKEN</code>. Get into the habit while the stakes are only yours — and check your own screen before you ever share it.'}
      ]},
      {t:'🔬 Colab & Teachable Machine', cards:[
        {type:'text', h:'Colab', b:'Create a notebook on your Drive. Run two or three <strong>code cells</strong> and one <strong>markdown cell</strong>. Upload an image into the session. Then deliberately restart the session and watch the file disappear — because you will be explaining that to a confused class. Learn that <code>!</code> runs an operating-system command, and that <strong>every cell must be run, in order</strong>. Finally, practise mounting Google Drive, which is the fix for longer projects.'},
        {type:'text', h:'Teachable Machine, end to end', b:'Train a small image classifier with two classes. Test it with an image it has never seen. Save the project. Then <strong>export the model</strong>, look at what actually comes out of the zip (the <code>.h5</code> model and <code>labels.txt</code>), upload it into Colab, unzip it with <code>!unzip</code>, and load it with <code>tf_keras</code>. That whole chain is course modules M5L4 → M6L1 → M7L2, and it is the part where version errors appear.'},
        {type:'image', src:'assets/media/images/setup-gtm.jpg', alt:'Google Teachable Machine with two named classes of bird images, a trained model, and the Export Model button highlighted.', cap:'Teachable Machine, set up for the course’s own bird project — two classes named <em>Güvercin</em> (pigeon) and <em>Serçe</em> (sparrow), with 6 and 7 sample images. Rename each class by clicking the pencil icon; add images with <strong>Upload</strong>. Once it says <strong>Model Trained</strong>, <strong>Export Model</strong> (top right) is what produces the file you load in course lesson M6L1. <strong>Advanced</strong> under Training is where the epochs and learning rate live.'},
        {type:'tip', txt:'Notice the sample counts in the screenshot — 6 and 7 images per class. That is deliberately a <em>small</em> dataset, and it is roughly what students will produce in the lesson. Train one this size yourself and test it on an unseen bird: watching a thin dataset perform poorly is the fastest way to understand why “add more, and more varied, data” is the answer to almost every accuracy complaint.'},
        {type:'tip', txt:'Train a deliberately bad model too — two classes with four blurry images each — and see it fail confidently. That gives you a live demonstration for the most important idea in the AI block: the model only knows what it was shown, and fixing it means fixing the dataset, not the code.'}
      ]},
      {t:'🖥️ The platform & the slide decks', cards:[
        {type:'text', h:'See it from both sides', b:'Nearly every stage of every lesson says “move to the assignment named…”, so the platform is where the course actually lives. Get access and look at: how an <strong>assignment page</strong> appears to a student, where the <strong>theory and code examples</strong> the plans refer to are shown, the <strong>chat</strong> attached to each assignment, what the <strong>Submit</strong> button does, and how you <strong>enter grades</strong>. Then open the <strong>Backoffice</strong> and find where submissions are verified and where the group chat link lives.'},
        {type:'warn', txt:'The plans constantly reference “Slide 4”, “Slide 6 (this slide is animated)”. If you have not opened the decks you will not know whether a slide already covers a concept or whether you are expected to explain it — and you will either duplicate or skip. Open the decks for the next lesson every time you prepare, and remember to present in <strong>slideshow mode</strong>, which the plans specify.'},
        {type:'image', src:'assets/media/images/setup-platform.jpg', alt:'The Kodland platform course page for Python Pro, showing the course title bar, the in-lesson tasks and homework tabs, and the module cards.', cap:'The platform’s course page. Left nav: <em>Kurslarım</em> = My Courses. The tabs are <em>Ders İçi Görevler</em> = in-lesson tasks, <em>Ödevler</em> = homework (with a count of items awaiting you), <em>Lider Tablosu</em> = leaderboard. Below are the module cards — <em>Modül 1, 2, 3…</em> — and each one opens the lesson list where every “move to the assignment named…” instruction points.'},
        {type:'good', txt:'Read the course title bar in that screenshot, because it is the clearest single summary of what you are teaching: <strong>[1619] Python Pro [13-17] [90 min] [40 L] [Turkey]</strong> — course code 1619, ages <strong>13–17</strong>, ninety-minute lessons, forty of them. The badge on <em>Ödevler</em> is homework waiting to be marked; that number is the one that quietly grows if you let marking slide.'},
        {type:'text', h:'The materials each lesson gives you', b:'Every plan has a <strong>Materials</strong> section listing what exists for that lesson — the presentation, quizzes, videos, documentation links, starter repositories, ZIPs and assessment tools. Read it before you prepare anything from scratch. Several things you might assume you have to build are already provided, including the <code>diary(complete).zip</code> for the database module and the solution repository for the AI-bot lessons.'},
        {type:'good', txt:'Once you have access, do one dry run: pick a lesson, open its plan, its deck and its platform assignments side by side, and walk through it as if teaching. That single rehearsal will tell you more about your readiness than any test in this training.'}
      ]}
    ],
    quiz:[
      {q:'On Windows, what causes “pip is not recognised”, and what is the fastest fix?', opts:['Python was installed without “Add Python to PATH” ticked — reinstalling with it ticked is faster than debugging live','The Python extension is missing from VS Code — install it','pip must be installed separately with a second installer','The terminal was opened before Python finished installing — reopen it'], c:0, fb:'It is a PATH problem from the installer. In a live lesson, reinstalling with the box ticked beats troubleshooting while eight students wait.'},
      {q:'You are inside a pipenv project. A student runs pip install flask and then gets ModuleNotFoundError. Why?', opts:['Inside a pipenv environment you must use pipenv install — plain pip put it somewhere the project cannot see','Flask cannot be installed with pip at all','They needed to restart VS Code for the install to register','The project was missing a requirements.txt'], c:0, fb:'This is the trap that catches tutors as well as students, and the error looks identical to a broken install. Having caused it yourself once makes it a ten-second diagnosis.'},
      {q:'A bot connects and shows as online but ignores every message. Which two things must both be true?', opts:['intents.message_content = True in the code, AND the Message Content Intent enabled on the Bot page of the Developer Portal','The bot must have administrator permissions, AND be the server owner','The token must be regenerated, AND the bot re-invited','The Bot class must be used, AND the prefix set to $'], c:0, fb:'Reading message text is a privilege that must be granted in both places. Either one alone leaves a bot that connects and hears nothing.'},
      {q:'Why does this module tell you to deliberately restart a Colab session before you ever teach with it?', opts:['So you have seen uploaded files disappear and can explain it calmly when it happens to a whole class','To clear memory before training a model','Because Colab requires a restart after the first upload','To check your Google Drive has enough space'], c:0, fb:'Colab sessions are temporary and this confuses every cohort. Having watched it happen means you explain rather than improvise.'},
      {q:'What should you do with the notes you make about things that went wrong during this lab?', opts:['Keep them — your own stumbles are the best available prediction of what students will hit, and they extend the FAQ','Discard them once everything works','Send them to the platform team as bug reports','Use them to decide which lessons to skip'], c:0, fb:'You are taking the student journey first. Where you tripped is where they will trip, and your notes become a personal supplement to the FAQ.'},
      {q:'Why must you open the slide decks while preparing each lesson?', opts:['Because the plans reference specific slides, and without seeing them you will either duplicate what a slide covers or skip something it does not','Because the slides contain the test answers','Because students cannot see the slides unless you open them first','Because the decks list the homework deadlines'], c:0, fb:'Plans say things like “Slide 6 (this slide is animated)”. Not knowing what is on it means guessing at what still needs explaining.'},
      {q:'Where should you look before building any teaching material of your own for a lesson?', opts:['The Materials section of that lesson plan — presentations, quizzes, videos, starter repositories, ZIPs and assessment tools are often already provided','The FAQ in this training','The platform’s grading view','The previous lesson’s homework'], c:0, fb:'Several things you might assume you must build already exist, including the complete diary ZIP and the AI-bot solution repository.'},
      {q:'What is the single best rehearsal for your first lesson, once you have platform access?', opts:['Pick one lesson and walk through its plan, its slide deck and its platform assignments side by side as if teaching it','Re-read this training’s methodology module','Memorise the stage timings for all forty lessons','Build every project in the course first'], c:0, fb:'A dry run with the real materials open together tells you more about your readiness than any test here can.'}
    ]
  },
  {
    id:5, emoji:'🛠️', color:'#F5B93B',
    title:'M1 — VS Code, Git & Discord Bots',
    desc:'Course Module 1: Python revision, GitHub, the interpreter and VS Code, pip and Discord.py, functions, and the Client vs Bot classes.',
    obj:'Teach the four lessons that turn a Python Basic graduate into someone working like a developer: revising syntax, registering and using GitHub, installing a real IDE and interpreter, installing libraries with pip, building a Discord bot, extracting logic into functions, and reading library documentation to extend it.',
    prep:'~4–5 hours. Most of it is building the bot; do not skip that.',
    practical:{
      intro:'Before you teach any of course Module 1 you must have personally:',
      items:[
        'Written the slang-dictionary app with a real dictionary and <code>.keys()</code> lookup',
        'Written the password generator with <code>random.choice</code> in a loop',
        'Extracted that generator into <code>bot_logic.py</code> as a function and imported it into <code>main.py</code>',
        'Registered a bot, enabled the Message Content Intent, and got a <strong>Client</strong>-class bot replying in your own server',
        'Rewritten the same bot using the <strong>Bot</strong> class with <code>@bot.command()</code> and a prefix',
        'Pushed a project to GitHub, changed it, pushed again, and viewed the file history',
        'Deliberately run a bot with the token removed, so you know what that failure looks like'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> revision + GitHub + a slang-dictionary app; <strong>L2</strong> the interpreter and VS Code + a password generator; <strong>L3</strong> pip, the Discord Developer Portal, a first bot, and functions; <strong>L4</strong> library documentation, the <code>Bot</code> class, repository history and peer testing.',
          why:'This module moves students out of the platform and into a professional workflow. If GitHub, the interpreter or the token never quite works, everything downstream in the course is blocked.',
          learn:'Students revise <code>input</code>/<code>print</code>, lists, loops, dictionaries and <code>random</code>; create GitHub accounts and repositories; install and configure VS Code; install <code>discord.py</code> with pip; register a bot and use a token safely; and package their own logic into an imported function.',
          confident:'The interpreter-vs-IDE distinction; selecting the right interpreter in VS Code; <code>pip install</code>; the three things a Discord bot needs (server, registered bot, token); <code>intents.message_content</code>; and the difference between <code>Client</code> and <code>Bot</code>.'
        }
      ]},
      {t:'📚 L1 — Revision, GitHub & the slang dictionary', cards:[
        {type:'text', h:'What happens in the lesson', b:'Acquaintance (a name + adjective game), group rules generated <em>by the students</em>, a synchronised revision quiz, then the primary task: a program that prints a random fact about yourself from a list. Then GitHub — theory, registration, and creating a first empty public repository. Then the real project: a dictionary app that explains modern slang to older relatives. Finally they upload the code and browse each other’s repositories.'},
        {type:'text', h:'The Python you are revising', b:'Deliberately narrow: <code>input</code>/<code>print</code>, <strong>lists</strong>, <strong>loops</strong>, the <strong>random</strong> library, and — for the main project — <strong>dictionaries</strong>. Recall that an entry is a <strong>key and a value</strong>, and that <code>.keys()</code> gives you all the keys. Ask which way round the lookup goes: do we search the key by its value, or the value by its key?'},
        {type:'code', lbl:'the slang dictionary — the shape students arrive at', code:`meme_dict = {
    <span class="cs">"CRINGE"</span>: <span class="cs">"Something exceptionally weird or embarrassing"</span>,
    <span class="cs">"LOL"</span>: <span class="cs">"A common response to something funny"</span>,
    <span class="cs">"ROFL"</span>: <span class="cs">"A reaction to something funny, similar to LOL"</span>
}

word = <span class="cf">input</span>(<span class="cs">"Type in a modern word you don't understand (CAPITALS!): "</span>)

<span class="ck">if</span> word <span class="ck">in</span> meme_dict.<span class="cf">keys</span>():
    <span class="cf">print</span>(meme_dict[word])
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"We don't have this word yet... But we're working on it!"</span>)`},
        {type:'hi', h:'Why the repository browsing matters', b:'After uploading, students post their repository links to the group chat and go hunting for the funniest word a classmate added. That is the whole point of the stage: it shows them, physically, that <strong>Git makes other people’s code instantly available to you</strong>. Model it yourself — open a few repositories and comment out loud on what each student did well.'},
        {type:'tip', txt:'Set up for next lesson at the end of this one. Homework asks students to research a GitHub project and bring 2–3 questions about it; also tell them to <strong>download the Python and VS Code installers at home</strong>, and to have an email ready. Downloads during lesson two will eat your practice time.'}
      ]},
      {t:'💻 L2 — The interpreter, VS Code & the password generator', cards:[
        {type:'text', h:'The problem that frames it', b:'Hacker attacks. Discuss how personal data gets stolen and what protects it — don’t open suspicious links, don’t enter personal information on unfamiliar sites, and <strong>use strong passwords</strong>. That last one becomes the project: an open-source program that generates strong passwords.'},
        {type:'qa', h:'The two concepts that must land', items:[
          {k:'Interpreter', v:'The computer only understands machine code — 0s and 1s. Writing that by hand is impractical, so we write in Python and the interpreter translates it into machine code the processor can run.'},
          {k:'IDE', v:'An Integrated Development Environment: a program that helps you write code — autocompletion, syntax hints, error checking, testing, sharing. This course uses VS Code; PyCharm is another good one. IDEs are not Python-specific.'}
        ]},
        {type:'text', h:'The configuration sequence', b:'Install the interpreter, install VS Code, install the <strong>Python extension</strong>, then select the interpreter with <code>Shift+Ctrl+P</code>. Emphasise two things: configuration happens <strong>once</strong>, right after installation; and the <strong>file extension matters</strong> — a Python file must end in <code>.py</code> to run. Then create a project folder (one folder per project, always), a <code>.py</code> file, and run <code>print("Hello, world!")</code>.'},
        {type:'code', lbl:'the password generator', code:`<span class="ck">import</span> random

elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"</span>

pass_length = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Enter pass length: "</span>))
password = <span class="cs">""</span>

<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
    password += random.<span class="cf">choice</span>(elements)

<span class="cf">print</span>(password)`},
        {type:'hi', h:'This lesson is shaped like a Scrum sprint', b:'Each stage is a <strong>sprint</strong>: a short discussion up front, a strict time limit, then a debrief asking two fixed questions — “<em>did we really achieve the result?</em>” and “<em>how does this bring us closer to solving the main problem?</em>” Tell students the time limits out loud. This is their first exposure to a rhythm that returns throughout the course and is taught properly in course Module 8.'},
        {type:'tip', txt:'The upload stage is deliberately awkward: ask students to work out how to get their code into the empty repository themselves, discussing aloud, before you show the GitHub web upload button. Then tell them it is only one option — and not the most convenient one. That sets up the VS Code Git integration in M2L3.'}
      ]},
      {t:'🤖 L3 — pip, the Discord bot & functions', cards:[
        {type:'text', h:'Use–Modify–Create', b:'This lesson runs on the <strong>UMC method</strong>, and you must do the first two steps in order: students <strong>use</strong> a complete bot (run it, see it work), then <strong>modify</strong> it while you explain what each change does. Give them five minutes to experiment freely on the example code and answer questions without giving anything away.'},
        {type:'qa', h:'pip and the three things a bot needs', items:[
          {k:'pip', v:'“Pip Installs Packages” — Python’s package manager. <code>pip install discord</code> in the terminal and the library is there. One of Python’s biggest advantages is that a library exists for almost anything.'},
          {k:'1. A server', v:'The bot needs a space to live in. Every student creates their own Discord server.'},
          {k:'2. A registered bot', v:'Registered on the Discord Developer Portal, so Discord knows it is a bot and permissions can be set.'},
          {k:'3. A token', v:'The key that lets the program run that specific bot. Whoever holds it controls the bot completely.'}
        ]},
        {type:'warn', txt:'Say this the moment tokens appear, and every time a project is uploaded: <strong>if someone gets your token, they own your bot.</strong> Never commit it, never post it in chat, never leave it visible on a shared screen. In shared code we write the placeholder <code>bot.run("YOUR_BOT_TOKEN")</code>. If a token does leak, reset it in the Developer Portal — deleting the file is not enough, because Git keeps history.'},
        {type:'code', lbl:'the bot logic in its own file — bot_logic.py', code:`<span class="ck">import</span> random

<span class="ck">def</span> <span class="cf">gen_pass</span>(pass_length):
    elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;"</span>
    password = <span class="cs">""</span>
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
        password += random.<span class="cf">choice</span>(elements)
    <span class="ck">return</span> password`},
        {type:'code', lbl:'the bot that imports it — main.py (Client class)', code:`<span class="ck">import</span> discord
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

<span class="cc"># intents stores the bot's privileges</span>
intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>   <span class="cc"># enable reading message text</span>

client = discord.<span class="ct2">Client</span>(intents=intents)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'We have logged in as {client.user}'</span>)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_message</span>(message):
    <span class="ck">if</span> message.author == client.user:   <span class="cc"># stop the bot replying to itself</span>
        <span class="ck">return</span>
    <span class="ck">if</span> message.content.<span class="cf">startswith</span>(<span class="cs">'$hello'</span>):
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Hi!"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Your password "</span> + <span class="cf">gen_pass</span>(<span class="cn">10</span>))

client.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'Functions, taught from the code in front of them', b:'A function is code you write once and reuse. Point at the two <code>def</code>s already in the bot and ask: what are they called? What does a function have besides a name and a body? Which other functions do you already know (<code>print</code>, <code>input</code>, <code>len</code>)? Then make it concrete — data goes <strong>in</strong> through the arguments in the parentheses, and processed data comes <strong>out</strong> through <code>return</code>. The task is to turn their earlier program into a function, put it in its own file, and import it.'},
        {type:'tip', txt:'Good diagnostic question for the experiment phase: “what happens if you remove <code>if message.author == client.user: return</code>?” The bot starts replying to itself forever. Let them discover the infinite loop rather than warning them.'}
      ]},
      {t:'📖 L4 — Documentation, the Bot class & peer testing', cards:[
        {type:'text', h:'The real goal of this lesson', b:'Not a feature — a <strong>habit</strong>. Students must leave believing that looking things up in the documentation is what programmers actually do. Nobody knows a library by heart; the skill is finding an example and adapting it. Say that explicitly, and treat errors as an ordinary part of the process rather than something to be embarrassed about.'},
        {type:'twocol', left:{h:'Client', items:['Reacts to <strong>events</strong> — <code>@client.event</code>','Reads the <strong>whole message</strong>, so passing a value means splitting the string yourself','Use it to act on the API like a user']}, right:{h:'Bot', items:['Reacts to <strong>commands you define</strong> — <code>@bot.command()</code>','Accepts arguments the user types, directly','Use it to automate specific actions']}},
        {type:'code', lbl:'the same bot rewritten with the Bot class', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>

<span class="cc"># command_prefix is the identifier that marks a command</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'We have logged in as {bot.user}'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f'Hi! I am a bot {bot.user}!'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">pasw</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">gen_pass</span>(<span class="cn">10</span>))

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'<strong>Never use <code>Bot</code> and <code>Client</code> in the same program.</strong> Students who copy snippets from two different tutorials will do exactly this and get confusing failures. It is one of the “5 differences” they are asked to find between the two code variants.'},
        {type:'text', h:'Git history & peer testing', b:'Students <strong>update</strong> their existing repository rather than making a new one, then look at the file’s history — and you tell them the truth: <strong>everything pushed to Git stays there.</strong> Show the profile activity tracker too. Then they pair up in breakout rooms, run a classmate’s bot, and give each other three improvement ideas which go into the assignment chat as a backlog. Homework is to implement one of them.'},
        {type:'tip', txt:'Before the peer testing, ask how you would even run someone else’s bot. The answer is a four-step recipe: open their repository, copy the code into your project, paste <strong>your own</strong> token, run it. That last step is the one they forget — and a good moment to re-state why the token is theirs alone.'}
      ]}
    ],
    quiz:[
      {q:'A student asks what the difference is between the Python interpreter and an IDE. What is the accurate answer?', opts:['The interpreter translates Python into machine code the processor can run; the IDE is the program that helps you write the code','They are two names for the same thing','The interpreter writes the code and the IDE runs it','The interpreter is for beginners and the IDE is for professionals'], c:0, fb:'The interpreter converts human-readable Python into machine code. The IDE — VS Code here — is the editor with autocompletion, hints and error checking.'},
      {q:'What are the three things a Discord bot needs before any code will work?', opts:['A Discord server, a registered bot in the Developer Portal, and a token','A paid Discord subscription, a server, and an email','A GitHub repository, a website, and a domain','A Discord server, a webcam, and a microphone'], c:0, fb:'M1L3 states it as three requirements: the server gives the bot a space, registration tells Discord it is a bot so permissions can be set, and the token lets your program run it.'},
      {q:'A student wants to push their working bot to a public GitHub repository. What must happen first?', opts:['The real token has to come out and be replaced with a placeholder — and if it was ever pushed, it must be reset in the Developer Portal','Nothing — the repository can be public because the code is theirs','The repository must be renamed to something private-sounding','They should delete the token line after pushing'], c:0, fb:'A token is a password: whoever has it controls the bot. Deleting it later does not help because Git keeps history — the only fix for a leaked token is resetting it.'},
      {q:'What is the difference between the Client and Bot classes in discord.py?', opts:['Client responds to events; Bot responds to commands you define with a prefix — and they must not be used together in one program','Client is for text and Bot is for images','Bot is the old version of Client','Client is faster because it reads fewer messages'], c:0, fb:'Client reacts to events via @client.event; Bot reacts to defined commands via @bot.command() and can take arguments the user types. Mixing them in one program breaks it.'},
      {q:'A student’s bot is online but ignores every message. What is the first thing to check?', opts:['That intents.message_content = True is in the code and the matching Message Content Intent is enabled in the Developer Portal','That their internet connection is stable','That the server has enough members','That they used the Client class rather than Bot'], c:0, fb:'Reading message text is a privilege. It has to be enabled in the code and in the portal — both, or the bot sees nothing.'},
      {q:'Why does the course have students turn their password generator into a function in a separate file?', opts:['To show that logic written once can be imported and reused — data goes in through arguments and out through return','Because Discord requires every bot to have two files','To make the file smaller so it uploads faster','Because functions run faster than plain code'], c:0, fb:'M1L3 uses their own earlier program to teach functions concretely: arguments in, return out, imported into main.py — “just like real programmers.”'},
      {q:'What is the main goal of M1L4, the documentation lesson?', opts:['To build the habit of finding and adapting examples from documentation, because no programmer knows a library by heart','To memorise the full list of discord.py commands','To finish the bot so it needs no further changes','To teach students to avoid libraries and write everything themselves'], c:0, fb:'The lesson note is explicit: students should learn that you can and should look up code examples in the library documentation. Programming is exploration and constant learning.'},
      {q:'Students didn’t download the Python and VS Code installers at home. What does the course tell you to do?', opts:['Start the download now, but keep teaching the students who are ready rather than blocking the whole class','Cancel the practical stage and use the time for theory','Wait for everyone to finish downloading before starting','Send them home to install and continue next week'], c:0, fb:'Installers are set as homework precisely to avoid this. If some students missed it, start their downloads and carry on — the technical assistant can help them catch up.'}
    ]
  },
  {
    id:6, emoji:'🎨', color:'#E8663B',
    title:'M2 — Files, HTML, CSS & UI/UX',
    desc:'Course Module 2: reading files and folders with os, the meme bot, APIs, the eco-bot revision project, target audience, HTML, CSS, UI/UX and Git inside VS Code.',
    obj:'Teach students to work with files and external data, to build a project for a chosen audience, and to make their first web pages. You should be able to explain file modes and os.listdir, wire an API request, run the target-audience discussion, teach the essential HTML tags and CSS rules, critique a page on UI/UX grounds, and connect GitHub to VS Code.',
    prep:'~4 hours. The HTML/CSS is quick; the bot and API work is not.',
    practical:{
      intro:'Before you teach any of course Module 2 you must have personally:',
      items:[
        'Written a bot that sends one specific image with <code>discord.File</code> and <code>\'rb\'</code> mode',
        'Refined it to pick a random file using <code>os.listdir</code> — and hit a path error at least once',
        'Called a public API with <code>requests</code> and pulled a field out of the <code>.json()</code> response',
        'Built a small HTML page using the course’s tags and linked a <code>style.css</code> to it',
        'Added a <code>@keyframes</code> animation and a <code>:hover</code> variant',
        'Embedded a third-party widget with <code>&lt;iframe&gt;</code>',
        'Published the page to GitHub from inside VS Code',
        'Looked at a deliberately bad website and written down its UX and UI problems yourself'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> files, folders and the meme bot (plus APIs and a summative test); <strong>L2</strong> a from-scratch eco bot with a chosen target audience; <strong>L3</strong> front-end vs back-end, HTML, CSS, and Git inside VS Code; <strong>L4</strong> UI/UX principles, CSS animation and embedded widgets.',
          why:'This is where students stop consuming data they typed in themselves and start reading it from disk and from the internet — and where the web half of the course begins. It also introduces the idea that a project is <em>for somebody</em>.',
          learn:'Students read files with <code>with open(...)</code>, list a folder with <code>os.listdir</code>, send images through a bot, call a public API with <code>requests</code>, build a bot for a target audience they chose, write a styled HTML page about technology addiction, animate it with <code>@keyframes</code>, embed a widget with <code>&lt;iframe&gt;</code>, and publish from VS Code.',
          confident:'<code>with open()</code> and file access modes; <code>os.listdir()</code> plus <code>random.choice</code>; <code>discord.File</code>; what an API returns and how <code>requests</code>/<code>.json()</code> handle it; the essential HTML tags; linking a stylesheet; and <code>git config</code> plus publishing a repository from VS Code.'
        }
      ]},
      {t:'📁 L1 — Files, the meme bot & APIs', cards:[
        {type:'text', h:'What to teach about files', b:'Two things students get wrong immediately: the <strong>file name and extension</strong> must be exact, and the file must sit <strong>in the program’s folder</strong> (or they must write the full path). Pay real attention to the <code>with</code> keyword and to <strong>access modes</strong> — <code>\'rb\'</code> for reading an image as bytes is what the bot needs. Tell them they can always come back to this assignment and re-read the code.'},
        {type:'code', lbl:'the meme bot — one image, then a random one from the folder', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">import</span> os, random

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">mem</span>(ctx):
    <span class="cc"># os.listdir gives us every file name in the folder</span>
    img_name = random.<span class="cf">choice</span>(os.<span class="cf">listdir</span>(<span class="cs">'images'</span>))
    <span class="ck">with</span> <span class="cf">open</span>(<span class="cs">f'images/{img_name}'</span>, <span class="cs">'rb'</span>) <span class="ck">as</span> f:
        picture = discord.<span class="ct2">File</span>(f)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(file=picture)

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'The build order matters', b:'Do it in two steps, not one. First a bot that sends <strong>one specific</strong> meme on <code>$mem</code> — the plumbing works. Only then refine it to pick a <strong>random</strong> file from the folder, which is where <code>os</code> earns its place. Development plan for the second step: a variable holding the file names, a variable picking one at random, then send it.'},
        {type:'hi', h:'APIs, as the additional assignment', b:'For faster students: an <strong>API</strong> is a set of ready-made functions and data another service exposes. Rather than building your own database of duck pictures, you call the duck API. In Python that means the <code>requests</code> library — send an HTTP request, get a JSON response back, pull the field you need out of it. Some APIs need a free access key; the documentation tells you which requests exist and what they return.'},
        {type:'code', lbl:'calling a public API from the bot (no key needed)', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_duck_image_url</span>():
    url = <span class="cs">'https://random-d.uk/api/random'</span>
    res = requests.<span class="cf">get</span>(url)
    data = res.<span class="cf">json</span>()          <span class="cc"># turn the JSON response into a dict</span>
    <span class="ck">return</span> data[<span class="cs">'url'</span>]

<span class="cd">@bot.command</span>(<span class="cs">'duck'</span>)
<span class="ck">async def</span> <span class="cf">duck</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_duck_image_url</span>())`},
        {type:'text', h:'The metacognition train', b:'This lesson carries a second thread running through the whole 90 minutes: five scheduled “stations” where you stop and make the students think about <em>how</em> they are learning. Station 1 — state the objectives clearly. Station 2 — self-questioning: how did what you already knew help you understand this? Station 3 — which tools and strategies did you use? Station 4 — evaluate those strategies. Station 5 — final reflection: will these strategies help you outside this course? Read the tutor booklet before you run it.'},
        {type:'good', txt:'If a student got frustrated during the lesson, the metacognition framing gives you something genuinely useful to say: that reaction is <strong>valid</strong>, and it is information about the <em>strategy</em> they chose, not about their ability. Congratulate them for noticing — that noticing is the skill.'},
        {type:'tip', txt:'There is a <strong>summative test</strong> in this lesson (15 minutes). Present it as revision, not as a high-stakes exam, and run it interactively. There is also a creative assignment: make a meme about programming Discord bots, five minutes, timer on. Keep the memes — you can use them as warm-ups for weeks.'}
      ]},
      {t:'♻️ L2 — The eco bot, from scratch, for an audience', cards:[
        {type:'text', h:'What is different about this lesson', b:'There is no walkthrough. Students build a <strong>complete bot of their own design</strong> in 40 minutes, using everything from Module 1 and L1. Your job shifts from explaining to asking leading questions and giving tips. Even though each student builds their own, push them to help one another.'},
        {type:'text', h:'Target audience — the concept that changes the project', b:'A target audience is the group of people you are building for; knowing their problems is what makes a product useful. The lesson gives three audiences for a waste-reduction bot — <strong>teenagers</strong> who want to cut household waste but don’t know where to start, <strong>adults</strong> in the same position, and <strong>people already interested</strong> in eco-friendly practice who want to go further. Each implies a different feature: personalised tips, a step-by-step guide, or a news-and-articles section. Students pick one and lock it in publicly in the chat.'},
        {type:'qa', h:'Bot ideas to offer if they stall', items:[
          {k:'Plastic crafts bot', v:'Ideas for reusing household plastic.'},
          {k:'Sorting bot', v:'Tells the user which bin an item goes in and what must be recycled.'},
          {k:'Decomposition bot', v:'Says how long a given household item takes to decompose.'}
        ]},
        {type:'warn', txt:'The GitHub upload stage in this lesson is <strong>graded</strong> — the assignment chat link is how you assess the project, so a missing link means an unassessed student. Remind them again, out loud, that the token does not go up with the code. Projects here are worth up to 50 points via the assessment tool.'},
        {type:'hi', h:'End of Topic 1 — the career stage', b:'This lesson closes course Module 1’s arc with a five-minute stage that is not filler: celebrate that they finished a topic very few people finish, then connect the skills to real work. Parts of YouTube, Facebook, Instagram, Netflix, Google products, Spotify and NASA projects are built with Python, and it has been among the most in-demand languages for years. Ask them whether they had imagined building programs that make people’s lives easier.'}
      ]},
      {t:'🌐 L3 — Front-end, HTML, CSS & Git in VS Code', cards:[
        {type:'text', h:'The framing and the ten-lesson arc', b:'Announce it: for the <strong>next ten lessons</strong> they are building websites, and they will end up with five different web pages in their GitHub portfolio. Web development splits into <strong>front-end</strong> (what the user sees) and <strong>back-end</strong> (the logic that makes it work). Front-end is usually HTML + CSS + JavaScript; back-end can be PHP, Java, Ruby or <strong>Python</strong> — and Python’s web framework in this course is <strong>Flask</strong>, which arrives next module.'},
        {type:'qa', h:'The distinction to nail down', items:[
          {k:'HTML', v:'Creates the <strong>content and structure</strong> — text, images, links. Not a programming language.'},
          {k:'CSS', v:'Controls the <strong>appearance</strong> — colours, fonts, layout. Also not a programming language.'},
          {k:'Why it matters for Python', v:'HTML and CSS become <em>templates</em> that Flask fills with data. Knowing them is what lets a Python developer ship a page that looks finished.'}
        ]},
        {type:'code', lbl:'the page students build — index.html', code:`<span class="ck">&lt;!DOCTYPE html&gt;</span>
<span class="ct2">&lt;html&gt;</span>
    <span class="ct2">&lt;head&gt;</span>
        <span class="ct2">&lt;title&gt;</span>Useful information!<span class="ct2">&lt;/title&gt;</span>
        <span class="ct2">&lt;link</span> <span class="cf">rel</span>=<span class="cs">"stylesheet"</span> <span class="cf">href</span>=<span class="cs">"style.css"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;/head&gt;</span>
    <span class="ct2">&lt;body&gt;</span>
        <span class="ct2">&lt;h1&gt;</span>Social network dependency<span class="ct2">&lt;/h1&gt;</span>
        <span class="ct2">&lt;p&gt;</span>Social media reduces the time we spend in the real world.<span class="ct2">&lt;/p&gt;</span>
        <span class="ct2">&lt;img</span> <span class="cf">src</span>=<span class="cs">"phone.gif"</span> <span class="cf">alt</span>=<span class="cs">"Image 1"</span><span class="ct2">&gt;</span>
        <span class="ct2">&lt;h2&gt;</span>How can we resist it?<span class="ct2">&lt;/h2&gt;</span>
        <span class="ct2">&lt;ul&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Set limits on time spent on our devices.<span class="ct2">&lt;/li&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Schedule technology-free time to unwind.<span class="ct2">&lt;/li&gt;</span>
        <span class="ct2">&lt;/ul&gt;</span>
    <span class="ct2">&lt;/body&gt;</span>
<span class="ct2">&lt;/html&gt;</span>`},
        {type:'code', lbl:'style.css — and the one change you ask them to make', code:`body {
    font-family: Arial, Verdana, sans-serif;  <span class="cc">/* font family */</span>
    font-size: 11pt;                          <span class="cc">/* main text size */</span>
    background-color: #f0f0f0;                <span class="cc">/* page background */</span>
    color: #333;                              <span class="cc">/* text colour */</span>
}

h1 {
    color: #00a800;                           <span class="cc">/* header colour */</span>
    font-size: 24pt;
    font-family: Georgia, Times, serif;
}`},
        {type:'text', h:'Git the application, not just the website', b:'Explain that <strong>GitHub is a website</strong> and <strong>git is a separate program</strong> on your machine that makes the workflow far easier. The important installation step is <strong>choosing VS Code</strong> as the editor; everything else can stay on defaults. Then log in to GitHub from inside VS Code — <em>once</em> — and publish the page as a new public repository directly from the editor.'},
        {type:'warn', txt:'If git refuses to work, the fix is almost always identity. Run with the student’s own details: <code>git config --global user.email "you@example.com"</code> and <code>git config --global user.name "Your Name"</code>. Demonstrate the whole install first; if a student can’t keep up, have them finish at home from the lesson recording rather than stalling the class.'},
        {type:'tip', txt:'Keep the HTML and CSS shallow on purpose. The lesson note is explicit: students need the essential basics only, no deep dive. Four tags and a couple of CSS rules is the target — the depth comes later, through the projects.'}
      ]},
      {t:'✨ L4 — UI/UX, animation & widgets', cards:[
        {type:'text', h:'Teach UI/UX by critique, not by lecture', b:'Do not turn this into a monologue. Open a deliberately bad real website — the course uses the Yale School of Art site — and have <em>students</em> name what is wrong, with everyone getting a turn. Then organise their answers into the two buckets.'},
        {type:'twocol', left:{h:'❌ UX problems (experience)', items:['<strong>Complex navigation</strong> — overloaded, unintuitive menus','<strong>No information hierarchy</strong> — walls of text with no structure','<strong>Poor accessibility</strong> — tiny fonts, low contrast','<strong>Distracting elements</strong> — animation and colour pulling attention off the content']}, right:{h:'❌ UI problems (interface)', items:['<strong>Inconsistent style</strong> — no unified design, visual chaos','<strong>Unpredictable interface</strong> — things that look like links but aren’t','<strong>No responsiveness</strong> — unusable on mobile']}},
        {type:'code', lbl:'CSS animation with @keyframes — and the :hover variant', code:`<span class="cd">@keyframes</span> color-change {
    0%   { color: blue; }
    50%  { color: red; }
    100% { color: blue; }
}

h1 {
    animation: color-change 3s infinite;
}

<span class="cc">/* add :hover and it only animates under the cursor */</span>
h1:hover {
    animation: color-change 3s infinite;
}`},
        {type:'text', h:'Widgets with &lt;iframe&gt;', b:'A <strong>widget</strong> is somebody else’s app embedded in your page, using the <code>&lt;iframe&gt;</code> tag. The lesson’s example fits the theme neatly: embed a <strong>weather forecast</strong> to nudge users of a technology-addiction page to go outside. Widget sites let you configure the appearance and copy ready-made <code>&lt;iframe&gt;</code> code.'},
        {type:'good', txt:'Notice how the two halves of this lesson connect: you just taught them that animation can be a UX <em>problem</em>, and then you teach them to animate. Make the tension explicit — “now that you can do this, when should you?” Their own critique of the bad site becomes the standard they hold themselves to.'},
        {type:'tip', txt:'Close with the revision quiz, and end on the two reflection questions the plan suggests: which UX principle do you think matters most, and which will you actually use in your own apps? Homework is a project-structure “clean the project” task, which sets up the more complex folder layouts Flask needs next module.'}
      ]}
    ],
    quiz:[
      {q:'Why does the meme bot open its image file in \'rb\' mode?', opts:['An image is binary data, so it has to be read as bytes rather than as text','Because \'rb\' means “random bytes”, which picks the image','Because Discord only accepts files opened in read mode','It is arbitrary — any mode works'], c:0, fb:'File access modes matter: \'rb\' reads the file as raw bytes, which is what discord.File needs for an image.'},
      {q:'What does os.listdir(\'images\') give you, and why does the meme bot need it?', opts:['Every file name in the folder, so random.choice can pick one instead of always sending the same image','The size of the folder in bytes','A list of open file handles ready to send','The folder’s permissions, which Discord checks'], c:0, fb:'The bot is built in two steps: first sending one fixed image, then using os.listdir plus random.choice to pick any file in the folder.'},
      {q:'A student wants their bot to send random duck pictures. What is the professional approach the course teaches?', opts:['Call a public API with the requests library and read the URL out of the JSON response','Download several hundred duck pictures into the images folder','Ask each user to upload a duck picture first','Generate the ducks with an image model'], c:0, fb:'That is the point of the API assignment: rather than building your own database, you use an API that already provides the data — requests sends the HTTP call and .json() parses the reply.'},
      {q:'What is a target audience, and why does the eco-bot lesson make students choose one?', opts:['The specific group the product is for — knowing their problems is what makes the bot genuinely useful, and it changes which features get built','A minimum number of users the bot must reach','The set of Discord servers the bot is allowed to join','The classmates who will test the bot'], c:0, fb:'The lesson gives three audiences for the same bot, each implying a different feature — personalised tips, a step-by-step guide, or a news section.'},
      {q:'Which statement about HTML, CSS and Python is correct?', opts:['HTML structures content and CSS styles it — neither is a programming language, and both become templates Flask fills with data','All three are programming languages used for the front-end','CSS is the back-end and HTML is the front-end','HTML is a Python library'], c:0, fb:'HTML creates content, CSS controls appearance, and knowing both is what lets a Flask app produce a page that looks finished.'},
      {q:'A student’s git commit fails with a message about identity. What do you run?', opts:['git config --global user.email and git config --global user.name, with their own details','git init --force','pip install git','git reset --hard'], c:0, fb:'The M2L3 notes give exactly these two commands as the fix when git isn’t yet configured on that machine.'},
      {q:'You are teaching UI/UX. What does the lesson tell you NOT to do?', opts:['Turn it into a one-sided lecture — students should identify the problems on a real bad website themselves','Show a real website, because it might be offensive','Mention accessibility, which is beyond the age group','Let students disagree with each other'], c:0, fb:'The important-points note is explicit: don’t make this a lecture, have a discussion, and ideally give every student a chance to speak.'},
      {q:'What does adding :hover to a CSS animation selector change?', opts:['The animation only runs while the mouse is over the element','The animation runs twice as fast','The animation loops forever instead of once','It disables the animation on mobile'], c:0, fb:'The lesson has students add :hover specifically to see that the animation then only plays when the cursor is over the element.'},
      {q:'What is a widget in the context of this lesson, and how is one embedded?', opts:['Somebody else’s app displayed inside your page, embedded with the &lt;iframe&gt; tag','A CSS animation that reacts to the user','A Python function that returns HTML','A GitHub feature for sharing pages'], c:0, fb:'Widgets are third-party apps embedded via <iframe> — the lesson embeds a weather forecast onto the technology-addiction page.'}
    ]
  },
  {
    id:7, emoji:'🌐', color:'#2FA37C',
    title:'M3 — Flask & Jinja Templates',
    desc:'Course Module 3: virtual environments, installing Flask, routes and f-strings, Jinja templates and variables, repository branches, HTML forms, and interactive elements.',
    obj:'Teach students to build a real Python web app. You should be able to explain why a virtual environment exists, install Flask into it, break down the documentation example, teach routes and url_for, explain what a template engine does, wire an HTML form to a Flask route, and run an EduScrum lesson to time.',
    prep:'~5–6 hours. This is the first module you cannot teach from reading alone.',
    practical:{
      intro:'Before you teach any of course Module 3 you must have personally BUILT A WORKING FLASK APP. Specifically:',
      items:[
        'Created a pipenv environment and installed Flask into it',
        'Written a one-route app returning HTML, with <code>app.run(debug=True)</code>, and opened it in a browser',
        'Added a second route at its own URL and linked the two pages together',
        'Moved from returning strings to <code>render_template</code> with a real <code>templates/</code> folder',
        'Passed a variable into a template and displayed it with Jinja <code>{{ }}</code>',
        'Built an HTML <code>&lt;form&gt;</code>, read it with <code>request.form</code>, and shown the result on another page',
        'Broken it on purpose by setting <code>id</code> without <code>name</code>, and seen the KeyError',
        'Used <code>url_for()</code> for a link, and a <code>&lt;select&gt;</code> whose value reaches Python',
        'Pulled a project from a repository branch'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> virtual environments, installing Flask, the first route and f-strings, plus a second page at its own URL; <strong>L2</strong> Jinja, <code>render_template</code> and template variables, building a smart-home energy calculator; <strong>L3</strong> an EduScrum lesson on repository branches, <code>url_for</code> and HTML forms; <strong>L4</strong> interactive elements and a meme generator that changes the page dynamically.',
          why:'This is the module where Python starts serving web pages. Everything in course Modules 4 and 7 sits directly on top of it, so a shaky grasp of routes or templates blocks the rest of the web track.',
          learn:'Students isolate a project with a virtual environment, install Flask with <code>pipenv</code>, write routes, return dynamic content with f-strings, render full HTML pages through Jinja, pass variables into templates, pull a project from a repository branch, build a form and read its data, and drive a page from <code>&lt;select&gt;</code> and <code>&lt;input&gt;</code> values.',
          confident:'Why a virtual environment prevents dependency conflicts; <code>pipenv install flask</code>; <code>@app.route</code> and <code>app.run(debug=True)</code>; the difference between returning a string and <code>render_template</code>; Jinja <code>{{ }}</code>; <code>url_for()</code>; and <code>request.form</code> with <code>methods=[\'GET\',\'POST\']</code>.'
        }
      ]},
      {t:'🧪 L1 — Virtual environments, Flask & routes', cards:[
        {type:'text', h:'What a virtual environment is, in plain words', b:'A tool that <strong>isolates a project and its dependencies</strong> from every other project. That prevents version conflicts between libraries, makes the project easy to move to another machine, and means packages installed for this project don’t pollute everything else. Once you are inside one created with <code>pipenv</code>, libraries must be installed into it: <code>pipenv install flask</code>, not bare <code>pip install</code>.'},
        {type:'warn', txt:'Do not overrun this stage — the important topic comes after it. If a student can’t get their environment working, <strong>encourage them and move on</strong>: tell them explicitly that it won’t stop them doing today’s work and they can try again later. Losing twenty minutes here costs you the routes stage.'},
        {type:'text', h:'Read the documentation, don’t dictate the code', b:'Send students the Flask documentation link and ask them to <strong>find the basic page example themselves</strong> (show them where the first example lives if they flounder). Then explain how to run it and test it, and break the code into pieces together. This is the M1L4 documentation habit being used for real, one module later.'},
        {type:'code', lbl:'the first Flask app — one route, dynamic content, f-strings', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask
<span class="ck">import</span> random

app = <span class="ct2">Flask</span>(__name__)

facts_list = [
    <span class="cs">"More than 50% of people aged 18 to 34 consider themselves dependent on their smartphones."</span>,
    <span class="cs">"Social networks have positives and negatives — we should be aware of both."</span>
]

<span class="cd">@app.route</span>(<span class="cs">"/"</span>)
<span class="ck">def</span> <span class="cf">facts</span>():
    <span class="cc"># an f-string evaluates whatever is inside the curly braces</span>
    <span class="ck">return</span> <span class="cs">f'&lt;p&gt;{random.choice(facts_list)}&lt;/p&gt;'</span>

app.<span class="cf">run</span>(debug=<span class="ck">True</span>)`},
        {type:'text', h:'Then hide the page behind its own URL', b:'A <strong>URL</strong> is a page’s address: type it, the browser asks the server, the server returns the page at that address. The task is to move the random fact off the home page onto <code>/random_fact</code>, give the home page a welcome message, and link the two with <code>&lt;a href="/random_fact"&gt;View a random fact!&lt;/a&gt;</code>. Two routes, two functions — that is the mental model students need before Jinja.'},
        {type:'tip', txt:'Suggest one student becomes the tutor during the Flask install stage and demonstrates their screen. It is faster than you narrating, and it is one of the differentiation moves this course uses constantly for strong students.'}
      ]},
      {t:'🧩 L2 — Jinja templates & the energy calculator', cards:[
        {type:'text', h:'The problem: the energy crisis', b:'Open with smart homes — are they good or bad, and which kind of housing harms the environment most? An <strong>energy crisis</strong> is when demand for energy resources significantly outstrips supply. Most energy still comes from non-renewable sources, and generating and transporting it pollutes the air, water and land. The project is a calculator that estimates a smart home’s energy efficiency.'},
        {type:'qa', h:'The three things Jinja gives you', items:[
          {k:'Templates', v:'Pre-made HTML pages you can change and customise dynamically.'},
          {k:'Whole pages, not tags', v:'Students already know how to return individual HTML tags from Flask. Import <code>render_template</code> and you can return an entire page instead.'},
          {k:'Variables in HTML', v:'The real prize — embed Python values into the page with <code>{{ }}</code> and change them on the fly.'}
        ]},
        {type:'code', lbl:'from returning a string to rendering a page', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask, render_template

<span class="cd">@app.route</span>(<span class="cs">'/'</span>)
<span class="ck">def</span> <span class="cf">index</span>():
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>)`},
        {type:'code', lbl:'Jinja variables inside the template', code:`<span class="cc">&lt;!-- size and lights are values passed in from Python --&gt;</span>
<span class="ct2">&lt;li</span> <span class="cf">class</span>=<span class="cs">"list__item"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ size + "/7" }}"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;img</span> <span class="cf">class</span>=<span class="cs">"item__img"</span> <span class="cf">src</span>=<span class="cs">"../static/img/light.svg"</span> <span class="cf">alt</span>=<span class="cs">"light"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;span&gt;</span>4-6 lightbulbs<span class="ct2">&lt;/span&gt;</span>
  <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/li&gt;</span>`},
        {type:'text', h:'How the lesson is run', b:'Install Jinja2, pull the project from the repository, then <strong>split students into pairs in breakout rooms</strong>. Their job is to analyse the template and connect front-end to back-end — specifically, to work out which piece of code is responsible for which page. A student who doesn’t want to pair up can study it alone. Then everyone works through the template tasks, and the lesson ends with a creative assignment: invent your own eco-build card, with its own description, coefficient and image.'},
        {type:'tip', txt:'Ask stronger students to take a closer look at the Jinja documentation as their additional task rather than racing ahead in the project. It keeps them inside today’s topic and reinforces the documentation habit.'}
      ]},
      {t:'🌿 L3 — Branches, url_for & forms (EduScrum)', cards:[
        {type:'hi', h:'This is an EduScrum lesson — timing is the skill', b:'The lesson is built as <strong>two sprints with retrospectives</strong>. Tell students the time limit for each sprint out loud. The lesson note is blunt about the failure mode: if you are falling behind schedule, <strong>go to the retrospective anyway</strong> and discuss what went wrong. Finishing every task is less important than the group experiencing a complete sprint cycle.'},
        {type:'qa', h:'The retrospective questions', items:[
          {k:'1', v:'What did you accomplish? Did you have enough time for everything?'},
          {k:'2', v:'Which stage was the hardest?'},
          {k:'3', v:'How would you improve this sprint?'}
        ]},
        {type:'text', h:'Repository branches — the metaphor that works', b:'A <strong>branch</strong> is like a copy of the repository made for one specific task. Ask them: your project is being used by people every day and you need to change something — do you pause the whole project while you develop? Obviously not. You create a branch, build and test there, and merge it into the main project once you are sure it works. In this lesson the practical goal is simply to find the right branch and download the project files from it.'},
        {type:'text', h:'url_for and forms', b:'Explain <code>url_for()</code> — it builds a URL from the <em>name of the view function</em> rather than a hard-coded path, so links don’t break when routes change. Then forms: show students the form they themselves filled in when applying to Kodland, so <code>&lt;form&gt;</code> and <code>&lt;input&gt;</code> arrive as something familiar rather than abstract.'},
        {type:'code', lbl:'the link, the input, and the route that receives them', code:`<span class="cc">&lt;!-- a link built from the view function's name --&gt;</span>
<span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ url_for('form') }}"</span> <span class="cf">class</span>=<span class="cs">"main__link"</span><span class="ct2">&gt;</span>Fill out the form<span class="ct2">&lt;/a&gt;</span>

<span class="cc">&lt;!-- an input that collects an email --&gt;</span>
<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"email"</span><span class="ct2">&gt;</span>E-mail<span class="ct2">&lt;/label&gt;</span>
<span class="ct2">&lt;input</span> <span class="cf">type</span>=<span class="cs">"email"</span> <span class="cf">name</span>=<span class="cs">"email"</span> <span class="cf">id</span>=<span class="cs">"email"</span> <span class="cf">required</span><span class="ct2">&gt;</span>`},
        {type:'code', lbl:'reading the form on the Python side', code:`<span class="cd">@app.route</span>(<span class="cs">'/submit'</span>, methods=[<span class="cs">'GET'</span>, <span class="cs">'POST'</span>])
<span class="ck">def</span> <span class="cf">submit_form</span>():
    name    = request.form[<span class="cs">'name'</span>]      <span class="cc"># the key is the input's name=""</span>
    email   = request.form[<span class="cs">'email'</span>]
    address = request.form[<span class="cs">'address'</span>]
    date    = request.form[<span class="cs">'date'</span>]

    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'form_result.html'</span>,
                           name=name, email=email,
                           address=address, date=date)`},
        {type:'warn', txt:'The single most common form bug: <code>request.form[\'email\']</code> reads the input’s <strong><code>name</code></strong> attribute, not its <code>id</code>. Students set <code>id</code> and forget <code>name</code>, then get a KeyError. Say it once at the start and you will save five interruptions.'},
        {type:'tip', txt:'Homework extends the form to also save the submitted information into a <code>.txt</code> file — which quietly revises the file handling from course Module 2 and previews why a database is a better idea. That is the whole setup for next module.'}
      ]},
      {t:'🎭 L4 — Interactive elements & the meme generator', cards:[
        {type:'text', h:'The build', b:'A <strong>meme generator</strong>: the user picks a template from a <code>&lt;select&gt;</code>, types their caption into inputs, and the page updates with the finished meme. Students pull the project from the repository, hunt for the elements in it, add their own memes to the <code>&lt;select&gt;</code>, then write the back-end that receives the text and pushes it into the template — including using a Jinja variable inside CSS to style the caption.'},
        {type:'qa', h:'The tags this lesson introduces', items:[
          {k:'&lt;select&gt;', v:'A drop-down list — the container.'},
          {k:'&lt;option&gt;', v:'One choice inside the drop-down.'},
          {k:'The pattern', v:'Read the chosen value on the Python side exactly like any other form field, then pass it into the template.'}
        ]},
        {type:'hi', h:'The “find it if you can!” minigame', b:'Before any coding: briefly remind them what each element looks like, then give them <strong>two minutes</strong> to find all of them in the project themselves. Ask afterwards how many they found. It turns reading an unfamiliar codebase — a genuinely hard skill — into a game with a timer, and it means they are oriented before they start editing.'},
        {type:'good', txt:'End with the best-meme competition: students use the tool they just built to generate memes, screenshot them into the group chat, and vote. The winner earns the right to post one meme a week in the chat. It costs ten minutes and it makes the project feel like it shipped — which is exactly the feeling the course is engineering.'},
        {type:'tip', txt:'Watch what students choose while they hunt for memes. The plan asks you to monitor their meme selection and help with the search — partly to keep the pace up, partly because you are responsible for what ends up in a shared classroom project.'}
      ]}
    ],
    quiz:[
      {q:'A student asks why they need a virtual environment at all. What is the accurate answer?', opts:['It isolates the project and its dependencies, preventing version conflicts and making the project easy to move to another machine','It makes Python run faster','It is required by Flask and has no other purpose','It hides the code from other users of the computer'], c:0, fb:'A virtual environment isolates a project’s dependencies, avoids conflicts between library versions, and keeps packages installed per-project.'},
      {q:'Inside a pipenv-managed project, how does a student install Flask?', opts:['pipenv install flask — so it goes into that project’s environment','pip install flask, which always works the same way','By downloading Flask from the website and copying the folder in','Flask is built into Python and needs no install'], c:0, fb:'Installing libraries works the same way generally, but inside a pipenv environment you must install into that environment: pipenv install flask.'},
      {q:'What is the difference between returning an f-string of HTML and using render_template?', opts:['An f-string returns a small piece of HTML from the function; render_template returns an entire HTML page from the templates folder','render_template is the older way of doing the same thing','An f-string can include variables and render_template cannot','render_template only works for the home page'], c:0, fb:'That is precisely the step from M3L1 to M3L2: Flask can return tags directly, but Jinja’s render_template returns whole pages — and lets you inject variables into them.'},
      {q:'Why does the course teach url_for() instead of hard-coded hrefs?', opts:['It builds the URL from the view function’s name, so links keep working if the route path changes','It is shorter to type','It encrypts the URL','It is required for any link inside a form'], c:0, fb:'url_for() references the function rather than the path, which is why the calculator’s links use {{ url_for(\'form\') }}.'},
      {q:'A student’s form submits but Flask raises a KeyError on request.form[\'email\']. What is the most likely cause?', opts:['The input has an id but no matching name attribute — request.form reads the name','They forgot to import Flask','The route is missing debug=True','The form needs a database before it can be read'], c:0, fb:'request.form is keyed on the input’s name attribute. Setting only id is the classic beginner mistake here.'},
      {q:'How would you explain a repository branch to a student?', opts:['A copy of the project made for one specific task, developed and tested separately, then merged into the main project once it works','A backup taken automatically every day','A second GitHub account for the same project','A folder inside the repository for old versions'], c:0, fb:'The lesson’s framing: you can’t pause a live project to change it, so you branch, test, and merge back when you are sure.'},
      {q:'You are twenty minutes into an EduScrum lesson and clearly behind schedule. What does the course tell you to do?', opts:['Move to the retrospective anyway and discuss what went wrong — the sprint cycle matters more than finishing every task','Skip the retrospective and keep coding until the tasks are done','Extend the lesson past its end time','Give students the solution code so they catch up'], c:0, fb:'The EduScrum note is explicit: strict time management is the point. If you fall behind, go to the retrospective and discuss it.'},
      {q:'A student can’t get their virtual environment working and the Flask stage is about to start. What is the right move?', opts:['Reassure them it won’t block today’s work, move on with the lesson, and help them retry later','Stop the lesson until it works for everyone','Tell them to skip the module','Have them work without Python for the rest of the course'], c:0, fb:'The lesson note says exactly this: don’t exceed the allotted time, encourage the student, and tell them it won’t prevent them doing today’s work.'},
      {q:'What is the purpose of the “find it if you can!” minigame in the meme-generator lesson?', opts:['It gets students oriented in an unfamiliar codebase — a real skill — before they start editing it','It tests whether they memorised the HTML tag list','It fills time while the project downloads','It decides who presents at the end'], c:0, fb:'Two minutes to locate the elements themselves turns reading unfamiliar code into a game, and means they know their way around before making changes.'}
    ]
  },
  {
    id:8, emoji:'🗄️', color:'#7C5CFC',
    title:'M4 — Databases, Auth & Deployment',
    desc:'Course Module 4: LiveCoding, SQLAlchemy databases, classes, connecting a DB to HTML, user registration and login, PythonAnywhere deployment, and the portfolio website.',
    obj:'Teach students to store and retrieve real data and put a site on the internet. You should be able to run a LiveCoding lesson properly, define a model class, explain classes using Flask itself, wire registration and login with sessions, deploy to PythonAnywhere including the WSGI file, and handle the password-storage caveat honestly.',
    prep:'~6–7 hours. The heaviest module in the training. Budget two sittings.',
    practical:{
      intro:'Before you teach any of course Module 4 you must have personally BUILT THE DIARY APP END TO END — you are expected to LiveCode this in front of students, which is impossible from reading. Specifically:',
      items:[
        'Installed <code>flask_sqlalchemy</code> and defined a model class with <code>db.Column</code> fields and a <code>primary_key</code>',
        'Created the <code>.db</code> file and saved a record with <code>db.session.add()</code> then <code>commit()</code>',
        'Deliberately omitted <code>commit()</code> and confirmed nothing saves and nothing errors',
        'Read records back with <code>.query.all()</code>, <code>.order_by()</code> and <code>.get(id)</code>, and displayed them in a template',
        'Added a second <code>User</code> table, hit the “no such table” error, and fixed it by deleting and recreating the <code>.db</code>',
        'Built registration and login, with <code>session</code> and <code>secret_key</code>, and filtered entries with <code>filter_by()</code>',
        'Deployed a working app to <strong>PythonAnywhere</strong>, including editing the WSGI file, and opened it on your phone',
        'Broken the deployment on purpose and found the cause in the error log',
        'Practised the one-sentence password-hashing caveat out loud'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> databases and the “Programmer’s Diary”, taught by LiveCoding, plus classes; <strong>L2</strong> a user table, registration and login with sessions; <strong>L3</strong> an EduScrum lesson deploying to <strong>PythonAnywhere</strong>; <strong>L4</strong> three sprints building and publishing a portfolio website, then the halfway career milestone.',
          why:'A site that forgets everything the moment you close it isn’t an app. This module is where students’ projects gain memory and a public address — and it is the technical high point of the web track.',
          learn:'Students create a SQLite database through <code>flask_sqlalchemy</code>, define tables as classes, save and query records, build registration and login, keep a logged-in user in the <code>session</code>, deploy a working app to a real URL, and ship a portfolio website with a dynamic project list and a feedback form.',
          confident:'The LiveCoding method; <code>db.Column</code> field definitions and <code>primary_key</code>; <code>db.session.add()</code> / <code>commit()</code>; <code>Card.query.all()</code> / <code>get(id)</code> / <code>filter_by()</code>; <code>session</code> plus <code>secret_key</code>; the PythonAnywhere WSGI step; and the honest caveat about plain-text passwords.'
        }
      ]},
      {t:'🎥 L1 — LiveCoding, databases & classes', cards:[
        {type:'hi', h:'LiveCoding — the method this lesson is built on', b:'LiveCoding means the tutor <strong>builds the code gradually together with the students</strong>, sharing their screen. The point is not the finished result — it is that students see programming as a continuous process full of small decisions, rather than something that arrives complete.'},
        {type:'qa', h:'How to LiveCode well', items:[
          {k:'Narrate', v:'Talk while you code; explain the logic behind each action.'},
          {k:'Ask', v:'Keep students engaged with questions rather than a monologue.'},
          {k:'Make mistakes', v:'Errors are fine — make some <em>deliberately</em> and ask students to find them.'},
          {k:'Slow down', v:'Don’t rush. Pause so students can catch up.'},
          {k:'Draw', v:'Use Zoom’s annotation tools to visualise the logic.'},
          {k:'Be legible', v:'A clear, large font, and write in code blocks so the structure is visible and easy to explain.'}
        ]},
        {type:'text', h:'The project and its hook', b:'The <strong>Programmer’s Diary</strong> — a web app with a real database behind it. The framing is privacy: everything we do lives online, so can you trust your data is safe? Today you learn to build a genuinely confidential service, because <em>you</em> are the one storing the data. A <strong>database</strong> is an organised collection of data that lets you store, manage and retrieve information.'},
        {type:'code', lbl:'the table, defined as a class', code:`<span class="ck">class</span> <span class="ct2">Card</span>(db.<span class="ct2">Model</span>):
    <span class="cc"># each field becomes a column</span>
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>)
    title    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    subtitle = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">300</span>), nullable=<span class="ck">False</span>)
    text     = db.<span class="ct2">Column</span>(db.<span class="ct2">Text</span>, nullable=<span class="ck">False</span>)

    <span class="ck">def</span> <span class="cf">__repr__</span>(self):
        <span class="ck">return</span> <span class="cs">f'&lt;Card {self.id}&gt;'</span>`},
        {type:'text', h:'Classes, taught after the fact — deliberately', b:'Notice the lesson order: students <strong>build the table first</strong>, then you explain classes. That is intentional, because by then they have a real question — “why did we write <code>class</code>?” In Python everything is an object, and classes are the blueprints objects are made from. The killer example is right in front of them: <strong>Flask is a class</strong>, with its own methods and functions they have been using all module.'},
        {type:'code', lbl:'saving and reading records', code:`<span class="cc"># save a new entry</span>
card = <span class="ct2">Card</span>(title=title, subtitle=subtitle, text=text)
db.session.<span class="cf">add</span>(card)
db.session.<span class="cf">commit</span>()

<span class="cc"># every entry, in id order, for the index page</span>
cards = <span class="ct2">Card</span>.query.<span class="cf">order_by</span>(<span class="ct2">Card</span>.id).<span class="cf">all</span>()
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>, cards=cards)

<span class="cc"># one specific entry, by its id</span>
card = <span class="ct2">Card</span>.query.<span class="cf">get</span>(id)
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'card.html'</span>, card=card)`},
        {type:'warn', txt:'<code>add()</code> without <code>commit()</code> is the bug of this lesson: nothing is saved and there is no error to tell you. Have students say the pair out loud — “add then commit” — the way they said “first item is item zero” in Python Basic.'}
      ]},
      {t:'🔑 L2 — Users, registration & login', cards:[
        {type:'text', h:'What the lesson builds', b:'Pull the updated project from its <strong>branch</strong>, add a second table for users, add login and password inputs to <code>login.html</code>, save a registered user, then check a submitted login against the database. Every step consolidates something from L1 — this lesson is deliberately a repetition of the same skills on new content.'},
        {type:'code', lbl:'the User table', code:`<span class="ck">class</span> <span class="ct2">User</span>(db.<span class="ct2">Model</span>):
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>, autoincrement=<span class="ck">True</span>)
    email    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    password = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">30</span>), nullable=<span class="ck">False</span>)`},
        {type:'code', lbl:'the login check — a loop over the users table', code:`users_db = <span class="ct2">User</span>.query.<span class="cf">all</span>()

<span class="ck">for</span> user <span class="ck">in</span> users_db:
    <span class="ck">if</span> form_login == user.email <span class="ck">and</span> form_password == user.password:
        session[<span class="cs">'user_email'</span>] = user.email   <span class="cc"># remember who is logged in</span>
        <span class="ck">return</span> <span class="cf">redirect</span>(<span class="cs">'/index'</span>)

<span class="cc"># no match anywhere in the table → show an error</span>
error = <span class="cs">'Incorrect login or password'</span>
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'login.html'</span>, error=error)`},
        {type:'text', h:'The session is what makes the diary personal', b:'Once <code>session[\'user_email\']</code> is set, the index route can filter entries to that user: <code>Card.query.filter_by(user_email=email).all()</code>. That requires <code>app.secret_key</code> to be set, and it requires the <code>Card</code> table to have gained a <code>user_email</code> column. Point at the difference between <code>.all()</code> and <code>.filter_by(...).all()</code> — it is the whole idea of “my data” in one line.'},
        {type:'warn', txt:'Say the security caveat out loud, in one sentence: <strong>real applications never store the password itself</strong> — they store a scrambled fingerprint of it called a hash, so that even the developer can’t read it. We are skipping that today so the comparison loop stays visible. Ten seconds of honesty prevents a genuinely bad habit, and students at this level will meet hashing soon.'},
        {type:'tip', txt:'The <code>secret_key</code> in the lesson code is a placeholder for a teaching project. Tell students that in a real deployed app the secret key is a secret — not committed to GitHub — for the same reason a bot token isn’t. It connects straight back to Module 1.'},
        {type:'warn', txt:'Adding the <code>User</code> class means the old <code>.db</code> file has no such table. The fix taught here is blunt: <strong>delete the old database file and create a new one from the terminal.</strong> Warn students first — it wipes the diary entries they just made.'}
      ]},
      {t:'🚀 L3 — Deploying to PythonAnywhere (EduScrum)', cards:[
        {type:'text', h:'What deployment means for these students', b:'Up to now their app has only run on their own machine. <strong>PythonAnywhere</strong> puts it on the internet with a real URL. Introduce the dashboard, help everyone register, then walk the deployment: upload and unzip the files, install the libraries, create a web app pointing at <code>main.py</code>, replace the remote code with their local code, edit the <strong>WSGI configuration file</strong> on the Web page, add the database-creation code, and reload the app.'},
        {type:'tip', txt:'The WSGI file is the step that silently breaks deployments — students skip it because it isn’t part of their project code. Say what it is: the file the server reads to find your app. Have everyone show you their WSGI edit before they hit reload, and keep the server-error and app-error log pages open, since that is where the diagnosis lives.'},
        {type:'text', h:'The second sprint: testing and target audience', b:'After deployment, students <strong>test the live app and compare it with the local version</strong> — a genuinely useful habit, because “works on my machine” is the oldest bug in software. Then the target-audience discussion returns, now aimed at the portfolio they build next lesson: what is the goal of your project, and who is it for? They record the answers in the diary they built.'},
        {type:'good', txt:'This is a satisfying moment to name out loud. A student can now send a link to a friend or a parent and have them use the thing they built. Ask them to do it — an audience outside the classroom is the strongest motivation available to you.'}
      ]},
      {t:'💼 L4 — The portfolio website & the halfway mark', cards:[
        {type:'text', h:'Three sprints, one deliverable', b:'<strong>Sprint 1 — materials:</strong> pull the template, and use the diary to record what they will need, choosing a colour palette, images and text. <strong>Sprint 2 — development:</strong> put the materials into the site, build a dynamic project showcase with Jinja, and process a feedback form. <strong>Sprint 3 — testing and open source:</strong> test it and publish to a public repository. Retrospective after each.'},
        {type:'hi', h:'This lesson revises the whole web track', b:'Nothing new is introduced. The portfolio needs Jinja dynamic elements, form creation and processing, colour and layout choices, and a Git publish — which is exactly the point. If a student can build this unaided, the web half of the course has landed. If they can’t, you now know precisely which lesson to revisit.'},
        {type:'text', h:'End of Topic 2 — the 50% milestone', b:'Course Module 4 closes the Flask topic and the halfway point of Python Pro. Say it properly: they are <strong>50% through an advanced course</strong>, which very few people finish. Then connect it forward — ask what they would like to do with these skills, and let them answer. The graded homework is refining the portfolio, worth up to 50 points via the assessment tool.'},
        {type:'tip', txt:'The portfolio has a life beyond the course. Encourage students to keep it updated with each later project — the AI bot from Module 7, the graduation project from Module 10. A portfolio site that grows is worth more to them than any certificate.'}
      ]}
    ],
    quiz:[
      {q:'What is the core idea of the LiveCoding method used in M4L1?', opts:['The tutor builds the code gradually with the students so they see programming as a process of decisions, not a finished result','The tutor codes silently and students copy the screen','Students code alone while the tutor watches','The tutor shows completed code and explains it afterwards'], c:0, fb:'LiveCoding means writing the code together, narrating the decisions, pausing, and even making deliberate mistakes for students to find.'},
      {q:'A student has written Card(...) and db.session.add(card) but nothing appears in the database. What is missing?', opts:['db.session.commit() — add stages the change, commit saves it','A primary_key on the table','render_template after saving','A restart of the Flask server'], c:0, fb:'add() then commit() is the pair. Without commit the record is never written, and nothing errors to tell you.'},
      {q:'Why does the course teach classes AFTER students have already built the database table?', opts:['Because by then they have a real question — “why did we write class?” — and Flask itself is a class they have been using all along','Because classes are too hard to introduce at the start of a lesson','Because SQLAlchemy requires it in that order','To save time in the lesson plan'], c:0, fb:'The table comes first, then the theory answers the question it created — and the strongest example is that Flask is itself a class with its own methods.'},
      {q:'What makes the diary show only the logged-in user’s own entries?', opts:['The user’s email is stored in session at login, and the index route uses Card.query.filter_by(user_email=email).all()','Each user gets their own database file','The Card table is deleted between logins','Jinja filters the entries in the template'], c:0, fb:'session[\'user_email\'] plus filter_by is the whole mechanism — and it needs app.secret_key set for sessions to work.'},
      {q:'The M4L2 project stores passwords as plain text. What should you say to students?', opts:['Say in one sentence that real apps store a hash rather than the password, and that this is a deliberate simplification to keep the logic visible','Nothing — it would confuse them at this level','That plain text is fine as long as the database file is local','That they should never build a login form again'], c:0, fb:'A brief, honest caveat costs ten seconds and prevents a genuinely bad habit. The simplification is fine; leaving it unmentioned is not.'},
      {q:'After adding the User class, students get “no such table”. What is the fix taught in this lesson?', opts:['Delete the old .db file and create a new one from the terminal — warning them it wipes existing entries first','Rename the User class to match the file','Reinstall flask_sqlalchemy','Add nullable=True to every column'], c:0, fb:'The old database file was created before the class existed. M4L2 has students delete it and recreate it — so warn them about the data loss.'},
      {q:'Which PythonAnywhere step do students most often skip, and what is it for?', opts:['Editing the WSGI configuration file — it is what the server reads to find your app','Choosing a username — it becomes the URL','Installing Python — PythonAnywhere needs it uploaded','Setting debug=True on the server'], c:0, fb:'The WSGI file isn’t part of their project code, so it gets forgotten. Deployments fail silently without it, which is why the error logs matter.'},
      {q:'Why does M4L3 have students test the deployed app against their local version?', opts:['Because behaviour can differ between local and live — “works on my machine” is a real failure mode','To check their internet speed','Because PythonAnywhere requires a test before publishing','To compare load times for the report'], c:0, fb:'Comparing the live app with the local one is a genuine engineering habit, and this is the first time in the course students have two environments to compare.'},
      {q:'What is the purpose of the portfolio website in M4L4?', opts:['It revises the whole web track — Jinja, forms, layout and Git — so you can see exactly what has and hasn’t landed','To introduce advanced CSS layout','To replace the graduation project','To practise deployment a second time'], c:0, fb:'Nothing new is taught. The portfolio requires dynamic Jinja, form processing, design choices and publishing — a diagnostic and a deliverable at once.'}
    ]
  },
  {
    id:9, emoji:'📊', color:'#2BB3E8',
    title:'M5 — Data, Scraping, NLP & Computer Vision',
    desc:'Course Module 5: AI myths, Google Colab, images as pixels, rembg and OpenCV, scraping with BeautifulSoup and pandas, NLP with NLTK, and training a classifier in Teachable Machine.',
    obj:'Teach the data foundations of the AI block. You should be able to run the myths-and-facts research activity, drive Google Colab confidently, explain images as pixel data, teach the legal and ethical limits of scraping, explain a pipeline and NLTK’s role in it, and run a Teachable Machine training competition.',
    prep:'~5 hours. All of it in Colab; run every cell yourself.',
    practical:{
      intro:'Before you teach any of course Module 5 you must have personally:',
      items:[
        'Built a Colab notebook with code and markdown cells, and uploaded images into the session',
        'Removed an image background with <code>rembg</code> and composited a new one with OpenCV',
        'Written text onto an image with OpenCV',
        'Opened browser devtools and identified the tag and class holding a piece of page content',
        'Scraped one page with <code>BeautifulSoup</code>, then looped it into a crawler over several sections',
        'Built a pandas <code>DataFrame</code> and saved it with <code>to_csv</code> — and kept the file',
        'Run the NLTK summariser end to end, including <code>stopwords</code> and <code>FreqDist</code>',
        'Trained a Teachable Machine classifier and tested it on an image it had never seen',
        'Trained a deliberately bad model and watched it fail confidently'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> what AI is (by research, not lecture), Google Colab, and replacing an image background; <strong>L2</strong> scraping, parsing and crawling with <strong>BeautifulSoup</strong> and <strong>pandas</strong>; <strong>L3</strong> NLP with <strong>NLTK</strong>, list comprehensions and a text summariser; <strong>L4</strong> computer vision, datasets, and training a classifier in <strong>Google Teachable Machine</strong>.',
          why:'Everything in course Module 6 and 7 runs on this. AI is data first — and a student who doesn’t understand what a dataset is will train a useless model and blame the code.',
          learn:'Students research AI myths and defend their answers, build Colab notebooks, cut a background out with <code>rembg</code> and composite a new one with OpenCV, scrape hundreds of news articles into a CSV, write a function that summarises an article, and train and test their own image classifier.',
          confident:'That modern AI is <em>weak</em> AI; Colab cells and the temporary session; images as pixel arrays; scraping vs parsing vs crawling <strong>and the rules</strong>; <code>find</code>/<code>find_all</code> plus a pandas DataFrame; tokenization vs lemmatization; and why dataset quality decides model quality.'
        }
      ]},
      {t:'🔬 L1 — AI myths, Colab & image backgrounds', cards:[
        {type:'text', h:'Teach the theory as an investigation', b:'Do not lecture. Split students into breakout rooms of two to four and give them <strong>ten minutes</strong> with a set of statements about AI. Their job is not only to say which are myths but to <strong>justify the answer with evidence</strong>. Any source is allowed — ideally they use search engines themselves. If a group won’t self-organise, assign one person per statement.'},
        {type:'qa', h:'The myths and facts, with the answers', items:[
          {k:'“AI can replace humans in all professions.”', v:'<strong>Myth.</strong> AI can replace humans in many fields but not entirely — it lacks empathy, creative thinking and intuition.'},
          {k:'“Modern AI is strong intelligence.”', v:'<strong>Myth.</strong> There are three levels — weak, strong and superintelligence — and today’s AI is classified as <strong>weak</strong>, because it cannot think or be self-aware.'},
          {k:'“AI can’t explain its decisions.”', v:'<strong>True, for now.</strong> Explainable AI is an active research area, but current models mostly decide in “black box” mode.'},
          {k:'“You need data, an algorithm and computing resources.”', v:'<strong>True.</strong> Data to learn from, an algorithm to train with, and a machine powerful enough — usually cloud resources for training from scratch.'}
        ]},
        {type:'text', h:'Google Colab, in ten minutes', b:'Students log in with a Google account, create a <code>.ipynb</code> notebook on their Drive, and run <strong>two or three code cells and one markdown cell</strong>. Make sure everyone can create a cell and run it — that is the whole success criterion. Then show them how to upload images into the current session, and at the end of the lesson, how to <strong>share</strong> a notebook with view or edit rights.'},
        {type:'warn', txt:'The thing that will bite every cohort: <strong>Colab sessions are temporary.</strong> Uploaded files disappear when the session restarts, and <em>every cell must be run, in order,</em> for later cells to work. Say it at the start, and expect to say it again. For stronger groups, show them how to mount Google Drive instead.'},
        {type:'text', h:'Images are numbers', b:'Before any library, explain how an image is stored: a grid of <strong>pixels</strong>, each holding colour values. That framing is what makes the rest of the module make sense — filling a background is arithmetic on those values, and a classifier is a function over them. The good diagnostic question the lesson uses: how many pixels are in a 6×6 image, and what colour is an image whose pixel values are all set to 500?'},
        {type:'code', lbl:'cutting the background out with rembg', code:`<span class="cc"># in Colab, ! runs an operating-system command</span>
<span class="cc"># !pip install rembg</span>
<span class="cc"># !pip install onnxruntime   ← rembg needs this too</span>

<span class="ck">from</span> rembg <span class="ck">import</span> remove

input_path  = <span class="cs">'photo.png'</span>      <span class="cc"># must be the real path to the image</span>
output_path = <span class="cs">'output.png'</span>

<span class="ck">with</span> <span class="cf">open</span>(input_path, <span class="cs">'rb'</span>) <span class="ck">as</span> i:
    <span class="ck">with</span> <span class="cf">open</span>(output_path, <span class="cs">'wb'</span>) <span class="ck">as</span> o:
        o.<span class="cf">write</span>(<span class="cf">remove</span>(i.<span class="cf">read</span>()))`},
        {type:'code', lbl:'compositing the new background with OpenCV', code:`<span class="ck">import</span> cv2

image  = cv2.<span class="cf">imread</span>(<span class="cs">'output.png'</span>, cv2.IMREAD_UNCHANGED)
back   = cv2.<span class="cf">imread</span>(<span class="cs">'/content/background.jpg'</span>)

result = <span class="cf">change_back</span>(back, image)   <span class="cc"># the function students analyse</span>
cv2.<span class="cf">imwrite</span>(<span class="cs">"result.png"</span>, result)`},
        {type:'tip', txt:'Have students find the background-removal snippet <strong>in the rembg documentation themselves</strong> rather than giving it to them, then emphasise the one line they always get wrong: the actual path to their own image. Homework extends it with OpenCV text so the image becomes a meme — worth up to 20 points, judged on whether the caption sits sensibly on the image.'}
      ]},
      {t:'🕸️ L2 — Scraping, parsing & crawling', cards:[
        {type:'text', h:'Why we collect data at all', b:'Open with the value of data. The internet is full of datasets, but most are vague or incomplete, and good training data is rare and expensive. So to train our own AI, <strong>we have to prepare the data ourselves</strong> — which is what this lesson does, ending with 600 news entries in a single file.'},
        {type:'qa', h:'The three terms, distinguished', items:[
          {k:'Crawling', v:'Automatically scanning many sites, moving page to page, gathering everything relevant. The broadest of the three, and it happens <strong>first</strong>.'},
          {k:'Scraping', v:'Automatically extracting information from a web page — text, images, prices — by reading its HTML.'},
          {k:'Parsing', v:'Analysing the data’s structure to pull out specific information: examining HTML elements, using CSS selectors or XPath to extract exactly what you want.'}
        ]},
        {type:'warn', txt:'Teach the limits as part of the skill, not as a disclaimer. <strong>Copyright</strong> — don’t use or redistribute protected data without permission. <strong>Terms of use and privacy policies</strong> — sites specify how their data may be accessed. <strong>robots.txt</strong> — shows which parts of a site may be crawled; check it and respect it. <strong>Unfair-competition law</strong> in some jurisdictions. <strong>Personal-data law</strong> — names, emails and phone numbers fall under regulations like the GDPR. Open the practice site’s robots.txt with the class and read which sections are off-limits.'},
        {type:'text', h:'How the practical works', b:'Show them the browser developer tools — <code>Shift+Ctrl+I</code> on Windows, <code>Option+Cmd+I</code> on Mac — and set the puzzle: which tag holds the news headline, and which class does it belong to? That is the actual skill. Then they extend the demo notebook so it collects not just titles and links but publication dates and view counts, finding those tags themselves.'},
        {type:'code', lbl:'from one page to a crawler over five sections', code:`dict_news = {<span class="cs">"news"</span>: [], <span class="cs">"links"</span>: [], <span class="cs">"views"</span>: [], <span class="cs">"comments"</span>: []}

url   = <span class="cs">'https://www.thescientificteen.org/'</span>
pages = [<span class="cs">"technology"</span>, <span class="cs">"medicine"</span>, <span class="cs">"chemistry"</span>, <span class="cs">"physics"</span>]

<span class="ck">for</span> section <span class="ck">in</span> pages:
    response = requests.<span class="cf">get</span>(url + section + <span class="cs">"/"</span>)
    bs = <span class="ct2">BeautifulSoup</span>(response.text, <span class="cs">"lxml"</span>)
    <span class="ck">for</span> post <span class="ck">in</span> bs.<span class="cf">find_all</span>(<span class="cs">'div'</span>, <span class="cs">'post-list-item-wrapper'</span>):
        dict_news[<span class="cs">"news"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'p'</span>).text)
        dict_news[<span class="cs">"links"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'a'</span>).<span class="cf">get</span>(<span class="cs">'href'</span>))

<span class="cc"># a DataFrame is a table; to_csv saves it for the next lesson</span>
df_news = pd.<span class="ct2">DataFrame</span>(dict_news)
df_news.<span class="cf">to_csv</span>(<span class="cs">"./saved_data.csv"</span>, index=<span class="ck">False</span>)`},
        {type:'hi', h:'The moment worth pausing on', b:'One loop turns a one-page scraper into a crawler across five sections and 600 articles in under a minute. Say that out loud — it is the first time in the course that a small amount of code does an amount of work no human would attempt by hand. That feeling is why the AI block starts here.'},
        {type:'tip', txt:'Make sure everybody saves the CSV, and keep your own copy: the <strong>next lesson depends on it</strong>, and the plan tells you to share it in the chat for anyone who lost theirs. Homework is pandas analysis on a supplied CSV — <code>.min()</code>, <code>.max()</code>, filtering, <code>.sum()</code> — which prepares them for the next lesson too.'}
      ]},
      {t:'📝 L3 — NLP, pipelines & the summariser', cards:[
        {type:'text', h:'List comprehensions first, as a Python feature', b:'A short warm-up: in Python it is common to compress several lines into one. Give students the two versions of the same code and have <em>them</em> explain the difference — the comprehension <code>[word.lower() for word in words if word.isalpha()]</code> against the classic <code>for</code> loop with <code>append()</code>. Be honest about the trade-off: the comprehension is compact and elegant, the loop is more readable and gives finer control. Which you choose depends on the situation.'},
        {type:'text', h:'What a pipeline is', b:'A sequence of processing steps where each one’s output feeds the next. Walk the summarisation algorithm as a discussion before any code: split into sentences → split into words → remove <strong>stop words</strong> → reduce each word to its base form → count word frequencies → score each sentence by the frequency of its words → keep the top sentences → reassemble them in their original order.'},
        {type:'code', lbl:'the summariser, as a reusable function', code:`<span class="ck">def</span> <span class="cf">summarization</span>(text, sent_number=<span class="cn">3</span>):
    sentences  = <span class="cf">sent_tokenize</span>(text, language=<span class="cs">'english'</span>)
    stop_words = <span class="cf">set</span>(stopwords.<span class="cf">words</span>(<span class="cs">'english'</span>))

    words = <span class="cf">word_tokenize</span>(text)
    words = [w.<span class="cf">lower</span>() <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w.<span class="cf">isalpha</span>()]
    words = [w <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w <span class="ck">not</span> <span class="ck">in</span> stop_words]

    freq_dist = <span class="ct2">FreqDist</span>(words)          <span class="cc"># how often each word appears</span>

    sentence_scores = {}
    <span class="ck">for</span> i, sentence <span class="ck">in</span> <span class="cf">enumerate</span>(sentences):
        sentence_words = <span class="cf">word_tokenize</span>(sentence.<span class="cf">lower</span>())
        sentence_scores[i] = <span class="cf">sum</span>([freq_dist[w] <span class="ck">for</span> w <span class="ck">in</span> sentence_words
                                  <span class="ck">if</span> w <span class="ck">in</span> freq_dist])

    <span class="cc"># the best-scoring sentences, put back in reading order</span>
    best = <span class="cf">sorted</span>(sentence_scores.<span class="cf">items</span>(), key=<span class="ck">lambda</span> x: x[<span class="cn">1</span>], reverse=<span class="ck">True</span>)
    best = <span class="cf">sorted</span>(best[:sent_number])

    <span class="ck">return</span> <span class="cs">' '</span>.<span class="cf">join</span>([sentences[i] <span class="ck">for</span> i, _ <span class="ck">in</span> best])`},
        {type:'hi', h:'Run the NLTK exploration as a race', b:'Rather than listing the functions, put students in breakout rooms of two or three with the example notebook and give them <strong>five minutes to find as many NLTK functions as they can</strong>, helping each other. Then bring everyone back and pool the findings. The functions get learned; the passive listening doesn’t happen.'},
        {type:'text', h:'Then it scales', b:'The point of wrapping the algorithm in a function is what follows: they loop over the links scraped in L2 and summarise <strong>ten real articles</strong>. Their own scraped data, their own function, running unattended — that is the pipeline complete, and it is worth naming as such.'},
        {type:'tip', txt:'The distinction students confuse is <strong>tokenization vs lemmatization</strong>. Tokenization splits text into pieces (sentences or words). Lemmatization reduces a word to its base form so “running” and “ran” count as one word. Both are in the pipeline, doing different jobs — it is one of the closing revision questions.'}
      ]},
      {t:'👁️ L4 — Computer vision & the classifier', cards:[
        {type:'text', h:'The problem, and why it is a good one', b:'Feeding birds: different species need different food — bread is bad for ducks, grain is good for sparrows. So an app that identifies a bird and says what to feed it has a genuinely broad audience. Concrete, harmless, and it needs exactly one AI capability: <strong>classification</strong>.'},
        {type:'hi', h:'Theory as a game — tic-tac-toe', b:'Split into an X team and an O team. You ask a question; any source is allowed — platform, internet, notes; the <strong>same student cannot answer twice in a row</strong>; a correct answer wins a square. If the answer is wrong, it passes to the other students. Correct wrong answers explicitly, because the whole class needs to hear the right one.'},
        {type:'qa', h:'The questions and the answers', items:[
          {k:'What is computer vision?', v:'A branch of AI where a computer is trained to distinguish objects in an image.'},
          {k:'What is classification?', v:'Sorting objects into classes — cats/dogs/squirrels, funny memes/cringe memes.'},
          {k:'What can be the model?', v:'A neural network.'},
          {k:'What else do you need besides the model?', v:'A dataset.'},
          {k:'What do you show the network while training?', v:'An image <em>and its class</em>.'},
          {k:'Does dataset quality matter?', v:'Yes — it decides the quality of the model. Improve it by adding more, and more varied, data.'}
        ]},
        {type:'text', h:'Building the dataset properly', b:'Students explore the supplied dataset — what classes are there, how many training images per class — then download it and add two or three images of their own per class. Emphasise that the <strong>quality of the objects in the training sample matters</strong>. Then each student finds <strong>one test image</strong>, and here is the rule that must land: the test image has to be one the model has <strong>never seen</strong>. Otherwise the model is just cheating.'},
        {type:'text', h:'Training and the competition', b:'Show them the Teachable Machine setup, train the classifier, upload a test image and read the response. Then let them explore the <strong>training parameters</strong> — and make sure they know how to <strong>save the project</strong>, because Module 6 needs the exported model. Finally, a real competition: seven minutes to make their model as accurate as they can, by any means. You send one image; the most accurate model wins, and the winner explains how they trained it.'},
        {type:'good', txt:'The winner’s explanation is the most valuable minute of the lesson. They will almost always say “I added more images” or “I added more variety” — which is the lesson’s entire point, arrived at by experiment rather than assertion. Let them teach it.'},
        {type:'tip', txt:'Homework adds another class to the model — a bird species that lives near the student — which quietly prepares the model they will import into code next module. Games and competitions here exist to present theory in an unusual format and keep engagement high; don’t treat them as optional filler.'}
      ]}
    ],
    quiz:[
      {q:'A student says “AI today is strong intelligence — it can think.” How do you correct them, per the course material?', opts:['Modern AI is classified as weak: it cannot think or be self-aware. Strong AI and superintelligence are the other two levels','They are right — current models reason like humans','The three levels are narrow, broad and general, and AI is broad','AI has no levels; the classification is a myth'], c:0, fb:'The myths activity in M5L1 has exactly this statement as a myth: computer scientists classify contemporary AI as weak because it lacks thought and self-awareness.'},
      {q:'Students return to Colab and their model and images are gone. Why?', opts:['Colab sessions are temporary — uploaded files vanish when the session restarts, and every cell must be re-run in order','Colab deletes files that break its terms','They forgot to save the notebook as .py','Their Google Drive was full'], c:0, fb:'This catches every cohort. Warn them up front; for stronger groups, mount Google Drive so the files persist.'},
      {q:'What is the correct relationship between crawling, scraping and parsing?', opts:['Crawling happens first and is broadest — scanning many sites; scraping extracts information from a page; parsing analyses structure to pull out specific data','Parsing happens first, then crawling, then scraping','They are three names for the same operation','Scraping is legal, crawling and parsing are not'], c:0, fb:'M5L2 puts crawling first and broadest, with scraping and parsing as the extraction steps performed on the collected pages.'},
      {q:'Before scraping a site with students, which file do you check, and why?', opts:['robots.txt — it specifies which parts of the site may be crawled and indexed, and those restrictions must be respected','index.html — to see the page structure','sitemap.css — to find the styling classes','license.txt — to check the copyright holder'], c:0, fb:'robots.txt is one of the five rules taught in this lesson, alongside copyright, terms of use and privacy policy, unfair-competition law, and personal-data law such as the GDPR.'},
      {q:'What actually turns the one-page scraper into a crawler collecting 600 articles?', opts:['A loop over a list of section names, requesting each one in turn','A second BeautifulSoup instance','Saving to CSV instead of printing','Switching from find to find_all'], c:0, fb:'One loop over the section list is the whole change — which is what makes the scale so striking to students.'},
      {q:'What is the difference between tokenization and lemmatization?', opts:['Tokenization splits text into sentences or words; lemmatization reduces a word to its base form so variants count as one','They are the same step under two names','Tokenization removes stop words; lemmatization counts frequencies','Lemmatization splits text; tokenization normalises it'], c:0, fb:'Both are steps in the summarisation pipeline doing different jobs — and distinguishing them is one of the lesson’s closing revision questions.'},
      {q:'How does the summariser decide which sentences to keep?', opts:['It scores each sentence by the frequency of the words it contains, keeps the top-scoring ones, then puts them back in their original order','It keeps the first three sentences of the article','It picks the longest sentences','It asks a language model to rewrite the text'], c:0, fb:'Frequency distribution over cleaned, lemmatised words gives each sentence a score; the best are re-sorted into reading order so the summary flows.'},
      {q:'A student wants to test their classifier with one of its own training images. What do you say?', opts:['The test image must be one the model has never seen — otherwise you are not testing it, you are letting it cheat','That is fine, since the classes are the same','Only if they use at least three images','It doesn’t matter for Teachable Machine models'], c:0, fb:'The test sample must contain new images. The lesson phrases it exactly that way — we don’t want our models to cheat.'},
      {q:'A student’s classifier performs badly. Where should they look first?', opts:['The dataset — more images and more variety is what improves the model','The code that loads the image','The training parameters, which are the only real lever','The browser they trained in'], c:0, fb:'Dataset quality determines model quality. That is the answer the tic-tac-toe questions build to, and the answer the competition winner almost always gives.'},
      {q:'Why does the M5L4 lesson use tic-tac-toe and a training competition instead of a presentation?', opts:['To present theory in an unusual format and keep students actively engaged — the games are the delivery method, not filler','Because the theory is too thin to fill the time','To decide which students continue to Module 6','Because the platform requires a game each lesson'], c:0, fb:'The lesson’s own note says the purpose of the games and the competition is to present theory in an unusual form and engage students in the educational process.'}
    ]
  },
  {
    id:10, emoji:'🧠', color:'#EC4899',
    title:'M6 — Neural Networks & Object Detection',
    desc:'Course Module 6: exporting a model into code with Keras, generating images and the AI-vs-real competition, business letters, detection and segmentation with ImageAI/YOLO, and building a self-chosen solution.',
    obj:'Teach students to run a trained model from Python and to tell the three computer-vision tasks apart. You should be able to import a Teachable Machine model into Colab, fix the version clash, run the image-generation competition responsibly, explain classification vs detection vs segmentation, use ImageAI, and run a brainstorm that produces a buildable idea.',
    prep:'~5 hours. Expect to fight library versions; that is the point.',
    practical:{
      intro:'Before you teach any of course Module 6 you must have personally:',
      items:[
        'Exported a Teachable Machine model, unzipped it in Colab, and loaded it with <code>tf_keras</code>',
        'Hit the <code>DepthwiseConv2D</code> version error and fixed it with the pinned versions',
        'Written a function that takes an image and returns a class name plus a confidence',
        'Confirmed the model forces an unrelated image into one of its known classes',
        'Generated images with prompts and assembled a two-class dataset from generated and real images',
        'Run detection with <code>ImageAI</code>/YOLOv3 and filtered the results by object name',
        'Compared detection on a cluttered photo versus a clean one, to see why background matters',
        'Built one small end-to-end script of your own that uses a model to solve a made-up problem'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> export the trained model and run it from code with <strong>Keras</strong>; <strong>L2</strong> a team competition training a model to tell real photos from AI-generated ones; <strong>L3</strong> business-letter structure, <strong>detection and segmentation</strong> with ImageAI/YOLO, and a brainstorm; <strong>L4</strong> an EduScrum lesson where students build their own solution to a problem they chose.',
          why:'A model that only lives in a browser tab isn’t software. This is where students’ AI becomes a program — and where they meet the difference between a demo and a deployable capability.',
          learn:'Students export a <code>.h5</code> model, load it with <code>tf_keras</code>, write a function that returns a class and a confidence, generate images with prompts, assemble a shared dataset, detect road users in a photo with YOLO, and build a script that automates a routine problem of their own choosing.',
          confident:'Exporting and unzipping the model; the pinned library versions and the <code>DepthwiseConv2D</code> error; that a model only recognises the classes it was shown; classification vs detection vs segmentation; prompt engineering; and the brainstorming rules.'
        }
      ]},
      {t:'⚙️ L1 — Running the model from code (Keras)', cards:[
        {type:'text', h:'Use–Modify–Create again', b:'This lesson runs on <strong>UMC</strong>: students first <em>use</em> the code Teachable Machine gives them and check it works, then implement their own logic on top of it. Show them how to export the model, add the downloaded project to the Colab session, and unzip it with <code>!unzip ./converted_keras.zip</code>. For a strong group, connect Google Drive instead.'},
        {type:'code', lbl:'the version pins and the imports that actually work', code:`<span class="cc"># pin the versions — do not debug this live, just paste it</span>
<span class="cc"># !pip install -q tf-keras==2.19.0 h5py==3.11.0</span>

<span class="ck">import</span> tf_keras <span class="ck">as</span> keras       <span class="cc"># Keras version compatible with .h5 models</span>
<span class="ck">from</span> tf_keras.models <span class="ck">import</span> load_model
<span class="ck">from</span> PIL <span class="ck">import</span> Image, ImageOps  <span class="cc"># Pillow, installed instead of PIL</span>
<span class="ck">import</span> numpy <span class="ck">as</span> np

<span class="cc"># right-click the model in Colab → Copy path, and paste it here</span>
model = <span class="cf">load_model</span>(<span class="cs">"PATH_TO_MODEL"</span>, compile=<span class="ck">False</span>)`},
        {type:'text', h:'What to say about Keras', b:'Keras is part of <strong>TensorFlow</strong>; in modern versions it is available as <code>tf.keras</code>. Because the exported model is saved in <code>.h5</code> format, the course uses <code>tf-keras</code>, the <code>.h5</code>-compatible version — otherwise it is the same library. Be clear that the handful of functions they are using is a <em>tiny</em> part of a very large library.'},
        {type:'hi', h:'The “all versus one” game', b:'After five minutes exploring the code, one student becomes the <strong>expert</strong> and answers everyone else’s questions. Questions can be simple or hard, and it is fine if the asker doesn’t know the answer either. If the expert is stumped, you answer. The expert wins by answering everything; otherwise the win goes to whoever asked the most unanswerable questions. The real purpose is stated in the plan: it <strong>helps students overcome the fear of formulating a question</strong>. Reassure them there is no stupid question.'},
        {type:'warn', txt:'Highlight this after the game: the model can <strong>only</strong> distinguish the classes it was trained on. Show it something else and it will still confidently force the input into one of its known classes. This is the single most common misunderstanding students have about AI, and here they can see it happen.'},
        {type:'text', h:'Then they build the actual feature', b:'The assignment: implement an image-upload button, use the exported code to write a <code>detect_bird</code> function that takes an image, the model path and the labels path and returns the bird’s name plus the probability, and make the script respond to an upload by suggesting a suitable treat. The lesson closes with a quiz.'}
      ]},
      {t:'🎨 L2 — Generated vs real: the AI competition', cards:[
        {type:'text', h:'The problem, honestly framed', b:'Generative models write essays, draw realistic images and make animations — and the same power is available to scammers. The two risks the lesson names: generated images can carry <strong>negative or discriminatory content</strong>, and they can <strong>resemble real photographs</strong>, which spreads misinformation. Ask students what they think and what problems they foresee. The task falls out of the discussion: train a model to tell real images from generated ones.'},
        {type:'warn', txt:'Keep prompts to animals, objects and invented characters — <strong>never real, identifiable people</strong>. The course’s own task is deliberately cats. Prepare the Google Drive folders for each team <em>before</em> the lesson, and if the generator asks for payment on high-quality images, lower the generation-quality parameter rather than paying.'},
        {type:'qa', h:'The competition rules', items:[
          {k:'Structure', v:'Three stages — 30 minutes data preparation, 20 minutes model training, 10 minutes testing.'},
          {k:'Teams', v:'You assign them, 3–4 students each; students do not pick their own. Each team names itself and chooses a captain.'},
          {k:'Shared data, individual models', v:'Everyone in a team uses the same dataset, but each student trains their own model.'},
          {k:'Winning', v:'Not the single best model — the <strong>team with the highest average accuracy</strong>. That is what makes helping a teammate rational.'}
        ]},
        {type:'text', h:'Prompt engineering, in one sentence', b:'A query to a generative model is a <strong>prompt</strong>, and prompt engineering is the craft of writing good ones: a good prompt makes your intention clear to the model, so you get a more accurate answer or better content. Teams generate 8–20 images for the “generated” class, then download real photos for a separate “real” folder, and upload both to their shared team folder.'},
        {type:'good', txt:'The “highest team average” rule is the best-designed detail in this lesson. It removes the incentive to hoard a good technique and replaces it with an incentive to teach it. If you change nothing else about how you run this competition, keep that rule.'},
        {type:'tip', txt:'Differentiate at the login stage: while you help the students who can’t sign in, give the faster ones the additional task. Homework is to write a script that uses their model for a purpose <em>they</em> invent — graded on whether it responds to both classes, runs without errors, and has a clear purpose.'}
      ]},
      {t:'🔍 L3 — Detection, segmentation & the letter', cards:[
        {type:'text', h:'The gamified framing', b:'The lesson opens with a <strong>business letter</strong> commissioning a road-safety app. If your students will play along, treat it as a real client email; if they are too self-conscious, just use it to break down the structure. Either way, have them read it and identify its logical blocks.'},
        {type:'qa', h:'The six blocks of a business letter', items:[
          {k:'1. Subject', v:'A brief, precise statement of the letter’s purpose.'},
          {k:'2. Greeting / introduction', v:'A polite greeting, plus a short self-introduction — or a reference to previous correspondence.'},
          {k:'3. Main body', v:'The message, information or proposal: arguments, details, arrangements.'},
          {k:'4. Closure', v:'A polite conclusion — thanks for their attention, further information, or the next steps.'},
          {k:'5. Farewell', v:'“Regards” or “Best wishes”, plus the sender’s name and title.'},
          {k:'6. Appendices', v:'A list of any attached documents or materials.'}
        ]},
        {type:'text', h:'The three computer-vision tasks', b:'This is the conceptual core of the module. <strong>Classification</strong> — what class does the <em>whole image</em> belong to? <strong>Detection</strong> — find and locate objects, marking each with a box, even several at once. <strong>Segmentation</strong> — divide the image into regions, working out <em>which pixels</em> belong to which object. The lesson’s example: a photo of a person in a forest. Detection boxes the person; segmentation splits the image into person-pixels and forest-pixels.'},
        {type:'code', lbl:'detection with ImageAI and YOLOv3', code:`<span class="ck">def</span> <span class="cf">detect_objects_on_road</span>(input_image, output_image, model_path):
    detector = <span class="ct2">ObjectDetection</span>()
    detector.<span class="cf">setModelTypeAsYOLOv3</span>()
    detector.<span class="cf">setModelPath</span>(model_path)
    detector.<span class="cf">loadModel</span>()

    <span class="ck">return</span> detector.<span class="cf">detectObjectsFromImage</span>(
        input_image=input_image,
        output_image_path=output_image,
        minimum_percentage_probability=<span class="cn">30</span>   <span class="cc"># confidence threshold</span>
    )

<span class="ck">def</span> <span class="cf">analyze_objects</span>(detections):
    road = [<span class="cs">"car"</span>, <span class="cs">"motorbike"</span>, <span class="cs">"bicycle"</span>, <span class="cs">"person"</span>,
            <span class="cs">"bus"</span>, <span class="cs">"train"</span>, <span class="cs">"truck"</span>, <span class="cs">"traffic_light"</span>, <span class="cs">"stop_sign"</span>]
    <span class="ck">return</span> [d <span class="ck">for</span> d <span class="ck">in</span> detections <span class="ck">if</span> d[<span class="cs">"name"</span>] <span class="ck">in</span> road]`},
        {type:'hi', h:'Judge the tool, not just the output', b:'Evaluate the detection quality with the class and ask which images would work better. The conclusion matters: YOLO works best when objects <strong>stand out from the background</strong>. Then generalise it — when you take on a detection job, you must think about what kind of input you will actually receive. Choosing a tool for the data you have is professional judgement, and this is where students first meet it.'},
        {type:'text', h:'The brainstorm — and its rules', b:'Developers have their own startups, often called <strong>pet projects</strong>. Two guidelines: build something that solves <em>your own</em> daily problem, so it is useful even if it never sells; and make it useful to a specific audience. Then brainstorm properly on a shared board: everyone lists daily problems, one sticker per problem, <strong>no criticism or evaluation at this stage</strong>, quantity over quality, five-minute timer. Only afterwards do you group them by how hard they’d be to build. Each student picks one to build next lesson and describes its target audience.'},
        {type:'tip', txt:'Run the coding part as live coding — one person writes, the others follow. If you have a strong student, give them the keyboard. The additional assignment extends the detector by cropping out each detected road user with OpenCV.'}
      ]},
      {t:'🛠️ L4 — Building their own solution (EduScrum)', cards:[
        {type:'text', h:'Three sprints, their own idea', b:'<strong>Sprint 1 — preparation:</strong> set up the notebook, prepare data, train the model or instantiate whatever library objects they need. <strong>Sprint 2 — development:</strong> implement the inference logic and document the notebook with comments and text blocks. <strong>Sprint 3 — testing:</strong> test it and list the bugs and improvement ideas in the platform chat. Retrospective after each sprint.'},
        {type:'qa', h:'The retrospective questions for this lesson', items:[
          {k:'1', v:'What did we achieve? Did you have enough time to do everything you wanted?'},
          {k:'2', v:'Which part of the script was the hardest?'},
          {k:'3', v:'What do you need to do to improve what you were working on?'}
        ]},
        {type:'text', h:'Your job during sprint 1', b:'Make sure every student <strong>understands which technology they need and what they must do to use it</strong> before development starts. This is the first time they have chosen the problem themselves, so the risk isn’t coding ability — it is picking something they have no route into. Catch that in sprint 1, not in sprint 2.'},
        {type:'tip', txt:'If students struggle during development, put them together in breakout rooms or join them individually. Documenting the notebook with comments and text blocks isn’t decoration — it is the habit that course Module 9’s clean-code lesson will build on.'},
        {type:'text', h:'End of Topic 3 — the data scientist', b:'Close the AI topic by connecting it to a career, and ask what they know first rather than telling them. The framing the course offers: a data scientist is an information detective in the digital world — they collect the data, clean it so it is accurate, then use specialist tools to find patterns and answers. Then ask who feels drawn to that, and whether it complements their other interests.'}
      ]}
    ],
    quiz:[
      {q:'A student’s exported model throws “Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”. What is happening?', opts:['A library version clash — the course pins tf-keras==2.19.0 and h5py==3.11.0 in Colab, or tensorflow==2.15 in a pipenv project','The model file is corrupted and must be retrained','The image is the wrong size','Colab has run out of memory'], c:0, fb:'It is a version-compatibility issue. Have the pinned install commands ready to paste rather than debugging versions in front of the class.'},
      {q:'Why does the course use tf-keras rather than plain keras for these models?', opts:['The exported model is saved in .h5 format, and tf-keras is the .h5-compatible version — otherwise it is the same library','tf-keras is faster on Colab','Plain Keras cannot classify images','tf-keras is the only version that is free'], c:0, fb:'Keras is part of TensorFlow and available as tf.keras; because the Teachable Machine model is .h5, the course uses the compatible tf-keras.'},
      {q:'A student shows their bird classifier a photo of a car and it confidently reports “sparrow”. What is the explanation?', opts:['The model only knows the classes it was trained on, so it forces any input into one of them','The model is broken and must be retrained','The image resolution confused it','ImageAI was needed instead of Keras'], c:0, fb:'M6L1 highlights exactly this after the question game: the model never saw any other object, so it only looks for what it knows.'},
      {q:'What is the real purpose of the “all versus one” expert game?', opts:['To help students overcome the fear of formulating a question — it is fine not to know the answer to your own question','To identify the strongest student in the group','To test who read the documentation','To fill time while models train'], c:0, fb:'The lesson note says it directly: the game helps students overcome the fear of formulating a question, and there is no such thing as a stupid question.'},
      {q:'In the AI-vs-real competition, who wins?', opts:['The team with the highest average model accuracy — not the individual with the single best model','The student whose model is most accurate','The team that finishes training first','The team that generated the most images'], c:0, fb:'The rule is deliberate: rewarding the team average makes helping your teammates rational rather than optional.'},
      {q:'What should you tell students about the images they generate for the dataset?', opts:['Keep to animals, objects and invented characters — never real, identifiable people, because realistic fakes spread misinformation','Any subject is fine as long as the images stay in the team folder','Only generate images of celebrities, since there are more references','Generation topic doesn’t affect the model, so it doesn’t matter'], c:0, fb:'The lesson is built around exactly this risk: generated images resembling real ones lead to misinformation, and can carry discriminatory content.'},
      {q:'What is the difference between detection and segmentation?', opts:['Detection finds and boxes objects’ locations; segmentation works out which individual pixels belong to which object or region','Detection is for photos and segmentation is for video','Segmentation finds one object, detection finds many','They are the same task with different libraries'], c:0, fb:'Classification labels the whole image, detection locates and boxes objects, and segmentation divides the image into pixel regions per object.'},
      {q:'After testing YOLO on several images, what conclusion should students reach?', opts:['It works best when objects stand out from the background — so you must consider what input your app will actually receive','It works equally well on any image','It only detects vehicles','Accuracy depends only on the confidence threshold'], c:0, fb:'The lesson has you discuss which images work better, then generalise: choosing a tool that suits your real input is professional judgement.'},
      {q:'During the brainstorming stage, what rule must you enforce?', opts:['No criticism or evaluation of ideas while they are being generated — quantity first, sorting afterwards','Only realistic, buildable ideas may be written down','Each student may suggest one idea only','Ideas must be approved by the tutor before being added'], c:0, fb:'The important-points note says not to let students evaluate ideas during generation; even the most ridiculous ones get written down, and grouping by feasibility happens later.'},
      {q:'What must you verify during Sprint 1 of M6L4, before development starts?', opts:['That every student understands which technology they need and what they must do to use it','That every student has finished training their model','That the notebook is fully commented','That everyone has picked the same problem'], c:0, fb:'It is the first time students chose the problem themselves, so the real risk is picking something with no route in. The sprint-1 note asks you to check exactly this.'}
    ]
  },
  {
    id:11, emoji:'🔌', color:'#F59E0B',
    title:'M7 — Integrating AI into Their Projects',
    desc:'Course Module 7: preparing the IDE for AI work, a Discord bot that runs their own vision model, publishing from VS Code, speech transcription and translation, and voice input in the Flask app.',
    obj:'Teach students to combine everything they have built. You should be able to prepare a virtual environment for AI libraries and fix the version clash, wire a bot to accept image attachments and run inference, publish a project from inside VS Code, and live-code a speech-recognition script and a voice-input button.',
    prep:'~5–6 hours. The most fragile module — rehearse it twice.',
    practical:{
      intro:'Before you teach any of course Module 7 you must have personally:',
      items:[
        'Deployed a virtual environment with the AI libraries installed and the right interpreter selected',
        'Made a bot accept an image attachment and save it with <code>attachment.save()</code>',
        'Wired your own exported model into that bot so it replies with a prediction',
        'Published the whole project from VS Code — after removing the token',
        'Written a README good enough to score 30 by the course’s own criteria',
        'Recorded and transcribed speech with <code>sounddevice</code> and <code>speech_recognition</code>',
        'Hit the busy-microphone failure and confirmed muting Zoom fixes it',
        'Added translation to the transcription script',
        'Added a working voice-input route to your Flask app, wrapped in <code>try</code>/<code>except</code>'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> prepare the IDE and environment, make a bot accept image uploads, and brainstorm a startup; <strong>L2</strong> load the model into the project and implement <strong>inference</strong>, then publish from VS Code; <strong>L3</strong> speech transcription and translation with <code>speech_recognition</code>; <strong>L4</strong> add voice input to their Flask site, with <code>try</code>/<code>except</code>.',
          why:'This is the payoff module. Everything from Modules 1–6 converges: their bot, their website, their trained model, their virtual environment. It is also the most technically fragile module in the course, so preparation matters more here than anywhere else.',
          learn:'Students set up a virtual environment with AI libraries, accept and save a Discord attachment, run their own model against an uploaded image and reply with the result, publish a project to GitHub from the editor, record and transcribe speech, translate the transcription, and add a working voice-input button to their diary site.',
          confident:'Deploying the environment and selecting the interpreter; the <code>tensorflow==2.15</code> fix; <code>ctx.message.attachments</code> and <code>attachment.save()</code>; what inference means; publishing from the VS Code Git interface; the Zoom-microphone gotcha; and <code>try</code>/<code>except</code> around anything that touches hardware or a network.'
        }
      ]},
      {t:'🔧 L1 — Preparing the environment & the bot', cards:[
        {type:'warn', txt:'This lesson is <strong>technical and fragile</strong> — prepare students in advance. Ask them to open their old Discord bot projects <em>before</em> the lesson, revise how they work, and keep them open, because they will work on them throughout. A student arriving without their project costs you the whole first stage.'},
        {type:'text', h:'The environment stage', b:'Remind them how to create a <strong>virtual environment</strong> — this is non-negotiable here, because the AI libraries are large and version-sensitive. Share your screen, or hand it to a strong student to lead. Then install every library the project needs into the environment.'},
        {type:'code', lbl:'the fix for the version clash — have this ready to paste', code:`<span class="cc"># If you see:</span>
<span class="cc">#   Exception encountered: Unrecognized keyword arguments</span>
<span class="cc">#   passed to DepthwiseConv2D: {'groups': 1}</span>
<span class="cc"># it is a version-compatibility problem, not your code.</span>

pipenv uninstall tensorflow
pipenv install tensorflow==2.15   <span class="cc"># compatible with Python 3.11</span>`},
        {type:'tip', txt:'Two fallbacks that will save the lesson. If the install drags or fails, use the <strong>Pipfile from the solution repository</strong> to deploy the environment in one step. If a student never saved their old bot, give them the school’s <strong>Basic Bot</strong> starter. Neither is cheating — it is refusing to let setup consume a practical lesson.'},
        {type:'code', lbl:'a bot command that accepts and saves an image', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Saved the image to ./{attachment.filename}"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"You forgot to upload the image :("</span>)`},
        {type:'text', h:'The brainstorm and the market check', b:'A three-step activity, skippable in parts if you are short on time. <strong>1. Brainstorm</strong> — students generate ideas for a startup Discord bot that uses image classification, with no evaluation during generation; you record every idea somewhere everyone can see. After four minutes, form teams of 2–3 and assign each the most feasible idea. <strong>2. Market analysis</strong> — eight minutes to search for similar existing solutions and to list the advantages and disadvantages of their assigned idea, writing the findings in the assignment chat. <strong>3. Presentation</strong> — each team shares what they found.'},
        {type:'good', txt:'The market-analysis step is quietly the most grown-up thing in the course. Most students have never checked whether their idea already exists — and finding out that it does, and that it has flaws, is more motivating than discouraging. Frame it as reconnaissance, not judgement.'}
      ]},
      {t:'🧩 L2 — Inference in the bot & publishing from VS Code', cards:[
        {type:'text', h:'What inference means', b:'Give them the word properly: <strong>inference</strong> is using an already-trained model to make a prediction on new input. Training is over; this is the model doing its job. Their task is to add the model and the <code>labels.txt</code> file to the project, work out which files are needed and why, then make the bot reply to an uploaded image with the model’s output.'},
        {type:'code', lbl:'the bot running its own model on an upload', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_class</span>(
                model_path=<span class="cs">"./keras_model.h5"</span>,
                labels_path=<span class="cs">"labels.txt"</span>,
                image_path=<span class="cs">f"./{attachment.filename}"</span>))
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"You forgot to upload the image :("</span>)`},
        {type:'tip', txt:'Rather than telling them which files the project needs, <strong>ask</strong> — and if they get it right, have them run a mini master class for their classmates. That is the differentiation pattern this course uses everywhere, and it is genuinely faster than explaining. Point them at their own M6L4 scripts as the hint for the inference logic.'},
        {type:'text', h:'Publishing from the editor', b:'Students upload the project to GitHub using the <strong>VS Code interface</strong> rather than the web page — completing the arc that started in M1L2 with the clumsy web upload and continued in M2L3 when they connected their account. Discuss why publishing matters: it is their portfolio, and it is how anyone else can run their work.'},
        {type:'qa', h:'The README criteria — worth showing students', items:[
          {k:'20 points', v:'A description of the bot in the README, but unstructured text.'},
          {k:'30 points', v:'A structured description with emojis — clear and pleasant to read.'},
          {k:'+5 bonus', v:'A picture or a GIF of the bot working.'},
          {k:'+10 bonus', v:'A licence file.'}
        ]},
        {type:'warn', txt:'The token check, again and for real: this project now contains a bot token <em>and</em> a trained model. Before anything is pushed, the token comes out. A public repository with a live token is the single worst outcome this course can produce — and this is the lesson where it is most likely, because students are focused on the AI part.'}
      ]},
      {t:'🎙️ L3 — Speech transcription & translation', cards:[
        {type:'text', h:'Start from what they already use', b:'Five minutes of discussion before any code: where have they met transcription? Google Translate, voice input in messengers, YouTube subtitles, TikTok and Instagram auto-captions. <strong>Transcription</strong> is converting speech into text — they should be able to explain it in their own words at user level before they build it.'},
        {type:'code', lbl:'record, then transcribe — built by live coding', code:`<span class="ck">import</span> sounddevice <span class="ck">as</span> sd
<span class="ck">import</span> scipy.io.wavfile <span class="ck">as</span> wav
<span class="ck">import</span> speech_recognition <span class="ck">as</span> sr

duration    = <span class="cn">5</span>        <span class="cc"># seconds of recording</span>
sample_rate = <span class="cn">44100</span>

<span class="cf">print</span>(<span class="cs">"Speak now..."</span>)
recording = sd.<span class="cf">rec</span>(<span class="cf">int</span>(duration * sample_rate),
                   samplerate=sample_rate, channels=<span class="cn">1</span>, dtype=<span class="cs">"int16"</span>)
sd.<span class="cf">wait</span>()
wav.<span class="cf">write</span>(<span class="cs">"output.wav"</span>, sample_rate, recording)

<span class="cf">print</span>(<span class="cs">"Recording complete, now recognising..."</span>)
recognizer = sr.<span class="ct2">Recognizer</span>()
<span class="ck">with</span> sr.<span class="ct2">AudioFile</span>(<span class="cs">"output.wav"</span>) <span class="ck">as</span> source:
    audio = recognizer.<span class="cf">record</span>(source)

<span class="ck">try</span>:
    text = recognizer.<span class="cf">recognize_google</span>(audio, language=<span class="cs">"en-GB"</span>)
    <span class="cf">print</span>(<span class="cs">"You said:"</span>, text)
<span class="ck">except</span> sr.<span class="ct2">UnknownValueError</span>:
    <span class="cf">print</span>(<span class="cs">"Speech could not be recognised."</span>)
<span class="ck">except</span> sr.<span class="ct2">RequestError</span> <span class="ck">as</span> e:
    <span class="cf">print</span>(<span class="cs">f"Service error: {e}"</span>)`},
        {type:'warn', txt:'The single most useful thing in this lesson plan: <strong>if the script errors, mute your microphone in Zoom and run it again.</strong> Zoom holds the microphone and the script cannot open it. Tell students this before the first run, not after twenty minutes of debugging.'},
        {type:'text', h:'Then add translation', b:'Second half: extend the script so the transcribed text is translated into another language with the <code>Translator</code> class, and let the user choose the target language code. Both halves are done by <strong>live coding</strong> — you build it together — and the success criterion is stated plainly: by the end of the stage, <strong>every student has working code</strong>.'},
        {type:'hi', h:'Don’t skip the break activity', b:'Between the two practical halves there is a ten-minute game: you call out a colour or a letter and students have sixty seconds to find and show an object matching it. The plan says explicitly <strong>do not skip this</strong> — students need to reset focus before the second practical, and this lesson has sixty straight minutes of practice. Join in yourself.'}
      ]},
      {t:'🗣️ L4 — Voice input in the Flask app', cards:[
        {type:'text', h:'The goal, and the freedom you have', b:'Add a <strong>voice-input button</strong> that appears when the user creates a new diary entry card. The lesson manual is explicit that its own implementation is one simple — and not the most effective — option among many. You are free to implement it differently to suit your students’ level. Say that to strong groups; they will find something better.'},
        {type:'text', h:'Start with questions, not code', b:'Ask them to recall what a web page is made of, and which page the button belongs on. Show them the template and have them find the class already defined for buttons. Then the subtle point: the <code>&lt;button&gt;</code> inside a form <strong>submits the form</strong>, and that is not what we want — we want our own function to run. That is why the example uses a styled link instead.'},
        {type:'code', lbl:'the route, wrapped in try/except', code:`<span class="ck">from</span> speech <span class="ck">import</span> speech

<span class="cd">@app.route</span>(<span class="cs">'/voice'</span>)
<span class="ck">def</span> <span class="cf">voices</span>():
    <span class="ck">try</span>:
        text = <span class="cf">speech</span>()
    <span class="ck">except</span>:
        text = <span class="cs">"Something went wrong..."</span>
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'create_card.html'</span>, text=text)`},
        {type:'code', lbl:'the template receives it as a Jinja variable', code:`<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"text"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;textarea</span> <span class="cf">class</span>=<span class="cs">"form__text"</span> <span class="cf">name</span>=<span class="cs">"text"</span> <span class="cf">id</span>=<span class="cs">"text"</span> <span class="cf">required</span><span class="ct2">&gt;</span>{{ text }}<span class="ct2">&lt;/textarea&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">class</span>=<span class="cs">"help_button"</span> <span class="cf">href</span>=<span class="cs">"./voice"</span><span class="ct2">&gt;</span> Record <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/label&gt;</span>`},
        {type:'hi', h:'try / except, taught by necessity', b:'The reason <code>try</code>/<code>except</code> arrives here rather than earlier is that the students have just met code which <em>genuinely fails sometimes</em> — a microphone might be busy, a network call might not answer. That is the honest case for exception handling: <code>try</code> holds the code that might fail, <code>except</code> holds what to do when it does, so the whole page doesn’t break. Introduce it as a fix for a problem they have already experienced.'},
        {type:'text', h:'End of Topic 4 — the AI specialist', b:'Close the applied-AI topic: celebrate finishing it, show what the skills unlock, and talk about the advantages of being an AI specialist today. Ask whether this could be their dream job, and whether they can think of advantages you didn’t mention. The additional assignment is nicely open — find a library that interests you and use it to improve your project however you like.'},
        {type:'tip', txt:'If time is short, do the creative assignment as live coding rather than dropping it. And note the CSS gotcha in the plan: when copying button styles, the button may end up sitting on top of the form — <code>display: inline-block;</code> fixes it.'}
      ]}
    ],
    quiz:[
      {q:'What does “inference” mean in M7L2?', opts:['Using an already-trained model to make a prediction on new input','Training a model on a new dataset','Guessing which class a dataset should contain','Converting a model into a smaller file'], c:0, fb:'Training is finished; inference is the model doing its job on new data — here, an image a Discord user uploaded.'},
      {q:'A student’s AI bot project throws the DepthwiseConv2D “groups” error during setup. What is the prepared fix?', opts:['pipenv uninstall tensorflow, then pipenv install tensorflow==2.15 (compatible with Python 3.11)','Retrain the model in Teachable Machine','Switch from the Bot class to the Client class','Reinstall Python'], c:0, fb:'It is a version-compatibility problem. Have this command pair ready to paste rather than debugging versions live.'},
      {q:'What should you ask students to do BEFORE the M7L1 lesson starts?', opts:['Open their old Discord bot projects, revise how they work, and keep them open — they build on them all lesson','Retrain their vision model from scratch','Delete their virtual environments','Write a README for the project'], c:0, fb:'The lesson note flags it as technical and asks you to have students prepare in advance, with their old bot projects open.'},
      {q:'A student never saved their bot from Module 1. What is the right response?', opts:['Give them the school’s Basic Bot starter so setup doesn’t consume the practical lesson','Have them rebuild the bot from scratch while the class waits','Pair them with someone and let them watch','Skip them and mark the lesson incomplete'], c:0, fb:'The plan provides a Basic Bot for exactly this, just as it provides the solution repository’s Pipfile when environment setup drags.'},
      {q:'Which discord.py feature lets the bot receive an image from the user?', opts:['ctx.message.attachments, then attachment.save() to write it to disk','discord.File, which reads uploads','request.form, as with a web form','The Client class’s on_upload event'], c:0, fb:'The command checks ctx.message.attachments, loops over them and saves each one — then the saved path is what gets passed to the model.'},
      {q:'What is the highest-risk security moment in this module?', opts:['Publishing the project to GitHub while the real bot token is still in the code','Uploading the trained model file','Installing tensorflow from the internet','Letting the bot save user-uploaded images'], c:0, fb:'Students are focused on the AI part, and the project now contains a live token. Check before every push — a public repo with a working token is the worst outcome available.'},
      {q:'The speech-recognition script errors as soon as it runs during your lesson. What do you check first?', opts:['Whether your Zoom microphone is unmuted — Zoom holds the mic, so mute it and re-run','Whether speech_recognition is installed','Whether the language code is correct','Whether the .wav file already exists'], c:0, fb:'The lesson plan flags this explicitly as an important point: mute the microphone in Zoom and restart the script.'},
      {q:'Why does try/except arrive in M7L4 rather than earlier in the course?', opts:['Because students have just written code that genuinely fails sometimes — a busy microphone, an unanswered network call — so exception handling solves a problem they have experienced','Because Flask requires it for every route','Because it is too advanced before this point','Because Jinja cannot render errors'], c:0, fb:'The speech function sometimes produces an error, which is precisely the honest motivation for try/except: catch the failure so the page doesn’t break.'},
      {q:'Why does the M7L4 example use a styled link rather than a <button> inside the form?', opts:['A <button> inside a form submits the form, which isn’t what we want — we want our own function to run','Links are faster than buttons','Buttons cannot be styled with CSS','Flask cannot receive button clicks'], c:0, fb:'The lesson has you discuss exactly this: the button tag in a form is responsible for submitting data, so the voice trigger is implemented differently.'},
      {q:'What does the ten-minute “find an object” game between the two practical halves of M7L3 exist for?', opts:['To reset students’ focus before the second practical — the plan says explicitly not to skip it','To assess their vocabulary','To fill time if the code finishes early','To pick who presents their program'], c:0, fb:'M7L3 has sixty straight minutes of practice. The break is deliberately timetabled and the plan asks you not to skip it — and to join in yourself.'}
    ]
  },
  {
    id:12, emoji:'🤝', color:'#14B8A6',
    title:'M8 — Agile, Git Branching & Code Review',
    desc:'Course Module 8: Agile values and Scrum roles, creating and merging Git branches, the principles and checklist of code review, and collaborative coding with Live Share.',
    obj:'Teach the engineering craft that makes teamwork possible. You should be able to explain Agile and Scrum with everyday analogies, define the three Scrum roles accurately, run a sprint-planning exercise, teach branching and merging, build a code-review checklist with students, and set up a collaborative environment before the lesson.',
    prep:'~3–4 hours. Less building, more practising Git.',
    practical:{
      intro:'Before you teach any of course Module 8 you must have personally:',
      items:[
        'Explained Agile and Scrum out loud, in your own words, using the everyday analogies',
        'Written a sprint plan for one small feature, split into tasks with owners',
        'Created a branch, committed to it, merged it, and read the merge output',
        'Created a merge <strong>conflict</strong> on purpose and resolved it — so it does not surprise you live',
        'Reviewed the course’s buggy example code and found all four planted problems yourself',
        'Written a code-review checklist of your own before comparing it to the course’s',
        'Installed the <strong>Live Share</strong> extension and run a session with a second device or a colleague',
        'Refactored the broken collaborative-task code into something that works'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> Agile and Scrum, the three roles, and planning a real sprint; <strong>L2</strong> Git branches — creating, managing and merging; <strong>L3</strong> code review, its principles, a shared checklist, and reviewing each other’s projects; <strong>L4</strong> collaborative development environments (VS Code Live Share) plus the module game.',
          why:'Students have used sprints and retrospectives since Module 1 without ever being told what they are. This module names the practices, and adds the two skills that make working with other people possible: branching and reviewing.',
          learn:'Students explain Agile’s values in their own words, research and present a Scrum role, plan a sprint for a real feature, create and merge branches, build and apply a code-review checklist, give constructive feedback, and code simultaneously in one shared editor.',
          confident:'Agile as philosophy vs Scrum as concrete practice; what the Scrum Master, Product Owner and Development Team each actually do; <code>git merge</code> and what a successful merge looks like; the five principles of effective review; and having Live Share set up <em>before</em> the lesson.'
        }
      ]},
      {t:'🏃 L1 — Agile, Scrum & sprint planning', cards:[
        {type:'text', h:'Teach the values through everyday analogies', b:'Stop at the Agile values and ask students to explain each in their own words with an example from daily life. The course supplies four analogies that land well with teenagers, and using them beats defining the terms.'},
        {type:'qa', h:'The four Agile values, as the course frames them', items:[
          {k:'Individuals and interactions over processes and tools', v:'Planning a family dinner: instead of a rigid cooking rota, you discuss preferences, decide who does what, and help whoever gets stuck.'},
          {k:'Working software over comprehensive documentation', v:'Tidying your room: rather than planning where everything goes, you start clearing things out. A clean room is the goal; the route can change.'},
          {k:'Customer collaboration over contract negotiation', v:'You arranged to meet friends, then one has a class. Instead of insisting on the original time, you find one that works.'},
          {k:'Responding to change over following a plan', v:'You planned a morning run and it’s raining, so you do yoga at home instead of cancelling.'}
        ]},
        {type:'hi', h:'Agile vs Scrum, in one image', b:'This is the distinction students most often blur. <strong>Agile is the philosophy</strong> — how a family agrees to live in harmony: respect, flexibility, cooperation. <strong>Scrum is the concrete rules</strong> for putting it into practice: who cooks, who lays the table, who cleans up — the roles, the tasks, the meetings that make it work. Agile is the idea; Scrum is a way to bring the idea to life.'},
        {type:'text', h:'The roles, researched by the students', b:'Split the group into three teams — <strong>Scrum Master</strong>, <strong>Product Owner</strong>, <strong>Development Team</strong> — and give them ten minutes with any resources they like to research their role in the context of a mobile-app project. Each team then gives a five-minute mini-presentation. Your job is answering organisational and technical questions and building a positive atmosphere. Afterwards, ask who would <em>want</em> to be Scrum Master or Product Owner, and why.'},
        {type:'twocol', left:{h:'Scrum Master', items:['Removes obstacles so the team can work','Explains Agile and Scrum, especially to newcomers','Runs standups, planning and retrospectives — and keeps them productive','Makes sure people feel safe expressing ideas, and draws in quieter members','<strong>Does not direct</strong> — creates the conditions for success']}, right:{h:'Product Owner', items:['Gathers requirements from customers, managers and users','Builds the task list and orders it by priority','Writes tasks as user stories the team can understand','Defines when a task counts as done','Helps the team break tasks down and assess complexity']}},
        {type:'text', h:'Then plan a sprint for real', b:'The whole group acts as one development team. Brainstorm “what would you build if you could build anything?”, then <strong>you take the Product Owner role</strong> and help them plan a sprint. Don’t plan the entire project — take one part of it, such as a registration form or a menu. The suggested timing: 5 minutes brainstorm, 5 minutes with the Product Owner, 15 minutes planning, 5 minutes presentation and feedback.'},
        {type:'tip', txt:'The worked example in the plan — a registration form split into frontend, backend, infrastructure, testing and documentation across two weeks — is far more detailed than what your students will produce. Use it as your own reference for prompting them (“who tests it? who documents it?”), not as a standard to hold them to.'}
      ]},
      {t:'🌳 L2 — Git branches', cards:[
        {type:'text', h:'Two analogies, both worth having ready', b:'<strong>Shared class notes:</strong> the whole class works on one big set of notes, and each student writes their part on a separate sheet — a branch — so nobody messes up the main document. When all the sections are ready they are combined into one file: a <strong>merge</strong>. A mistake can be fixed on the individual sheet without touching the whole document. <strong>A film production:</strong> the main branch is the finished script containing only working material; a feature branch is a separate scene where new ideas are tried without affecting the script; merging is the edit that cuts the scenes together.'},
        {type:'text', h:'How the practical runs', b:'Do the task on your own machine and have students follow along <strong>step by step</strong>, checking that everyone keeps up. The success criterion is concrete: every student sends a screenshot of their terminal showing the result of <code>git merge feature/add-greeting</code>. Make sure <em>every</em> student completes it — this is a skill that silently blocks teamwork later if it doesn’t land.'},
        {type:'code', lbl:'what a successful fast-forward merge looks like', code:`Updating 319de95..8de4c42
Fast-forward
 main.py | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)`},
        {type:'hi', h:'Open with the quiz, and read out the answers', b:'The lesson starts with a ten-minute quiz on the previous lesson’s Agile and Scrum material, and the plan tells you to review <strong>every</strong> correct answer afterwards with its explanation. That is worth doing properly — the Product Owner owns the backlog, a sprint is a fixed time period of one to four weeks, backlog creation is <em>not</em> the Scrum Master’s job, the retrospective is where the team plans improvements, and quick adaptation to change is the Agile principle.'},
        {type:'tip', txt:'Homework here has a second part: a “<strong>Secret Assignment</strong>” you should <em>not</em> discuss — just remind students they will need it in lesson four of this module. Don’t spoil it, and don’t forget it either.'}
      ]},
      {t:'🔎 L3 — Code review', cards:[
        {type:'text', h:'Why review exists', b:'Lead a group discussion rather than presenting. The five objectives students should arrive at: <strong>error detection</strong>, so bugs don’t reach users; <strong>maintaining standards</strong> of code style; <strong>improving team skills</strong> by sharing knowledge; <strong>enhancing readability</strong> so the code is understandable to the whole team, not only its author; and <strong>increasing shared accountability</strong>, making the codebase a collective effort rather than a set of individual ones.'},
        {type:'qa', h:'The five principles of effective review', items:[
          {k:'Be respectful', v:'Constructive feedback without blame.'},
          {k:'Focus on the problem, not the person', v:'Discuss the code, not the author.'},
          {k:'Be specific', v:'Give concrete examples of improvements.'},
          {k:'Balance criticism and praise', v:'Acknowledge well-written code explicitly.'},
          {k:'Give clear recommendations', v:'Make your suggestions as unambiguous as you can.'}
        ]},
        {type:'text', h:'Build the checklist with them, then use it', b:'Ten minutes in teams of two or three, researching and drafting a checklist, then pool everything into <strong>one final checklist the whole group will use</strong> — and send it to the group chat, because it is needed for the next assignment and the homework. The categories the drafts should converge on: code clarity, correctness, simplicity, style compliance, logic verification, and correct output.'},
        {type:'code', lbl:'the practice code — four planted problems', code:`<span class="ck">import</span> random

<span class="cf">print</span>(<span class="cs">"Welcome to the 'Guess the Number' game!"</span>)
secret = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">100</span>)
attempt = <span class="cn">0</span>

<span class="ck">while</span> <span class="ck">True</span>:
    user_guess = <span class="cf">input</span>(<span class="cs">"Enter your number: "</span>)
    attempt += <span class="cn">1</span>
    <span class="ck">if</span> user_gess == secret:              <span class="cc"># 1. typo: user_gess</span>
        <span class="cf">print</span>(<span class="cs">"Congratulations!"</span>)        <span class="cc"># 2. input() is a string —</span>
        <span class="ck">break</span>                            <span class="cc">#    never converted with int()</span>
    <span class="ck">elif</span> user_guess &gt; secret:            <span class="cc"># 3. no comments anywhere</span>
        <span class="cf">print</span>(<span class="cs">"Your number is higher."</span>)  <span class="cc"># 4. no input validation —</span>
    <span class="ck">elif</span> user_guess &lt; secret:            <span class="cc">#    text input crashes it</span>
        <span class="cf">print</span>(<span class="cs">"Your number is lower."</span>)`},
        {type:'text', h:'The peer review itself', b:'Students exchange projects — and if not everyone has one ready, that is fine, several students can review the same project, or you fall back on the example code above. Fifteen minutes to review, submitting the code and their comments to the assignment chat. Then they present what they reviewed and you discuss the feedback and the issues found together.'},
        {type:'good', txt:'Re-state the constructive-feedback rule right before they start, not just during the theory. Reviewing a classmate’s code is socially risky for a teenager, and the difference between “this is wrong” and “I’d rename this so it’s clearer” is the entire difference between a lesson that works and one that damages the group.'},
        {type:'tip', txt:'Homework depends on the previous lesson: students had to prepare one of their own projects to hand to a classmate. Remind them at the end of L2, or half your class arrives with nothing to review.'}
      ]},
      {t:'👥 L4 — Collaborative development & the module game', cards:[
        {type:'warn', txt:'<strong>Stage 0 happens before the lesson begins.</strong> Install the <strong>Live Share</strong> extension in VS Code, create a folder with a <code>main.py</code> containing a simple snippet, and be ready. Then in the lesson: click Live Share, log in, share the link, accept each student’s connection request and <strong>grant editing permissions</strong>. If you try to do this cold in front of the class, you will lose the lesson.'},
        {type:'text', h:'What to emphasise about the environment', b:'It does not matter which specific tool they use — the point is understanding <strong>how you work when several people share one codebase</strong>. Have each student print their name in the terminal as a connection check, and then do not disconnect anyone when you move to the next assignment: the work continues in that environment.'},
        {type:'text', h:'The collaborative task', b:'Load deliberately broken code into the shared environment and help students <strong>distribute the fixes among themselves</strong>. Tell them they don’t have to complete everything, but should improve it as much as they can. Twenty minutes, then stop and share impressions. The planted problems are a good tour of the course: a function that computes but never <code>return</code>s, unvalidated input, no exception handling around <code>int(input(...))</code>, a variable assigned <code>None</code> as a consequence, and a player name collected but never used.'},
        {type:'code', lbl:'the shape of the refactored version they work towards', code:`<span class="ck">import</span> random

<span class="cc"># Greeting the player and validating the name input</span>
<span class="ck">def</span> <span class="cf">greet_player</span>():
    <span class="ck">while</span> <span class="ck">True</span>:
        name = <span class="cf">input</span>(<span class="cs">"What is your name? (1-15 characters): "</span>).<span class="cf">strip</span>()
        <span class="ck">if</span> <span class="cn">1</span> &lt;= <span class="cf">len</span>(name) &lt;= <span class="cn">15</span>:
            <span class="ck">return</span> name                       <span class="cc"># the fix: actually return it</span>
        <span class="cf">print</span>(<span class="cs">"The name must be between 1 and 15 characters. Try again."</span>)

<span class="ck">def</span> <span class="cf">generate_random</span>(low, high):
    <span class="ck">return</span> random.<span class="cf">randint</span>(low, high)      <span class="cc"># the fix: return, not just call</span>

<span class="ck">if</span> __name__ == <span class="cs">"__main__"</span>:
    <span class="cf">main</span>()`},
        {type:'hi', h:'The module game — “The Dream App”', b:'Fifteen minutes preparation in two teams, then five minutes each to present. Choose an idea, form the team, plan a sprint. <strong>There are no winners in this task</strong>, and the plan says so — concrete results are secondary to working as a team, reinforcing the module, and enjoying it. If nobody did the “Secret Homework”, cheer them up and have them invent an idea now; the idea can be anything, even unrealistic. If they are stuck, suggest planning an app similar to one they use daily.'},
        {type:'tip', txt:'Keep to the timings ruthlessly here: 5 minutes explaining and forming teams, 15 minutes working, 5 + 5 minutes presenting. This lesson has four distinct stages and no slack.'}
      ]}
    ],
    quiz:[
      {q:'How do you explain the difference between Agile and Scrum?', opts:['Agile is the philosophy — respect, flexibility, cooperation; Scrum is the concrete set of roles, tasks and meetings that put it into practice','Scrum is the philosophy and Agile is the toolset','They are competing methodologies and a team picks one','Agile is for software and Scrum is for hardware'], c:0, fb:'The course’s family analogy: Agile is how a family agrees to live in harmony; Scrum is who cooks, who lays the table and who cleans up.'},
      {q:'Which of these is NOT a Scrum Master responsibility?', opts:['Creating and prioritising the product backlog','Removing obstacles that block the team','Running standups, planning and retrospectives','Making sure quieter team members are heard'], c:0, fb:'The backlog belongs to the Product Owner. The Scrum Master ensures the team works effectively and removes obstacles — this is one of the M8L2 quiz answers.'},
      {q:'What is a sprint, and how long does one typically last?', opts:['A fixed time period allocated to completing tasks from the backlog — typically one to four weeks','A meeting where the team reviews finished work','The final week before a release','A single working day of focused coding'], c:0, fb:'A sprint is a fixed-length period during which the team focuses on completing backlog tasks — usually one to four weeks.'},
      {q:'A student asks why branches exist. Which explanation does the course use?', opts:['Each person works on a separate sheet so the main document stays intact, then the sheets are combined — a merge — and mistakes can be fixed without touching the whole project','Branches store old versions of the project as backups','Branches let two people share one GitHub account','Branches are required before you can push to GitHub'], c:0, fb:'The shared-class-notes analogy, with the film-production one as the alternative: the main branch is the finished script, a feature branch is a scene being tried out, merging is the edit.'},
      {q:'What is the concrete success criterion for the M8L2 practical?', opts:['Every student sends a screenshot of their terminal showing a successful git merge feature/add-greeting','Every student creates a branch named after themselves','The tutor merges all the students’ branches','Every student explains merging in their own words'], c:0, fb:'The plan asks for the terminal screenshot of the merge result, and says to make sure every student completes the task.'},
      {q:'Which of these is one of the five principles of effective code review?', opts:['Focus on the problem, not the person — discuss the code, not its author','Point out every issue, however small, before praising anything','Have the tutor review all code so feedback is consistent','Only review code that already runs without errors'], c:0, fb:'The five principles are: be respectful, focus on the problem not the person, be specific, balance criticism with praise, and give clear recommendations.'},
      {q:'Two of the planted bugs in the code-review exercise are a misspelled variable and a missing conversion. What is the second one?', opts:['input() returns a string, so it is never converted with int() and cannot be compared to the secret number','random.randint is called with the wrong range','The while loop has no break condition','The print statements are missing their parentheses'], c:0, fb:'user_guess stays a string, making the comparison with secret impossible — the same bug students meet naturally throughout the course.'},
      {q:'Not every student has a project ready for the peer code review. What do you do?', opts:['Let several students review the same project, or fall back on the example code provided — it’s explicitly fine','Cancel the review stage','Have students review their own code instead','Postpone the lesson'], c:0, fb:'The plan says it directly: that’s okay, multiple students can review the same project, and there is example code for review if nobody submits one.'},
      {q:'What must you do BEFORE the M8L4 lesson begins?', opts:['Install the Live Share extension, create the project folder with main.py, and be ready to share — Stage 0 is pre-lesson work','Send students the broken code to read','Divide the class into teams','Prepare the quiz link'], c:0, fb:'Stage 0 is explicitly labelled as setup to complete on your end before the lesson. Doing it cold in front of the class costs you the lesson.'},
      {q:'Who wins “The Dream App” game at the end of M8L4?', opts:['Nobody — the plan states there are no winners; teamwork, reinforcement and enjoyment are the goals','The team with the most feasible idea','The team that finishes planning first','The team whose presentation is best received'], c:0, fb:'“There are no winners in this task.” Concrete results are secondary to working in teams, reinforcing the module material, and enjoying the game.'}
    ]
  },
  {
    id:13, emoji:'🗣️', color:'#8B5CF6',
    title:'M9 — Speech Synthesis, APIs & Clean Code',
    desc:'Course Module 9: speech synthesis with pyttsx3, a talking weather bot built on a keyless API, an independent facts bot, and clean code with refactoring and flake8.',
    obj:'Teach students to make programs talk and to make their code readable. You should be able to distinguish the three voice technologies, configure pyttsx3, live-code a bot in three checkable stages, run an independent build with real autonomy, and lead a refactoring session including a linter.',
    prep:'~4 hours. Genuinely enjoyable; still build it.',
    practical:{
      intro:'Before you teach any of course Module 9 you must have personally:',
      items:[
        'Installed <code>pyttsx3</code> and made your machine speak, adjusting rate, volume and voice',
        'Confirmed which voice indexes actually exist on your OS',
        'Called <code>wttr.in</code> and got a formatted forecast back',
        'Built the talking weather bot in the three stages the lesson uses',
        'Confirmed the speech comes from the machine running the bot, not from Discord',
        'Built a second speaking bot from a different API, independently, to time yourself',
        'Refactored the messy tax and house-points examples yourself before reading the solutions',
        'Installed <code>flake8</code>, run it on your own code, and fixed what it flagged',
        'Found one problem in your code that flake8 could not catch'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Four lessons: <strong>L1</strong> speech synthesis and a text-to-speech program with <strong>pyttsx3</strong>; <strong>L2</strong> a Discord bot that fetches the weather from an API and reads it aloud; <strong>L3</strong> an independent build — a bot that speaks random facts — plus the future of voice technology; <strong>L4</strong> clean code, refactoring, and <strong>flake8</strong>.',
          why:'Two very different payoffs. Voice makes their projects feel finished and genuinely portfolio-worthy, and clean code is the difference between a project someone else can pick up and one nobody can. L4 is also the most professionally useful lesson in the whole course.',
          learn:'Students distinguish voice control, recognition and synthesis; install and configure a synthesis library; build a talking weather bot on a keyless API; independently build a second speaking bot; and refactor messy code against clean-code criteria, checking it with a linter.',
          confident:'The three voice technologies and their use cases; the three stages of how synthesis works; <code>pyttsx3</code>’s <code>rate</code>, <code>volume</code>, <code>voice</code>, <code>say</code> and <code>runAndWait</code>, and that it works <strong>offline</strong>; <code>wttr.in</code> needing no API key; and the clean-code checklist plus <code>flake8</code>.'
        }
      ]},
      {t:'🔊 L1 — Speech synthesis', cards:[
        {type:'qa', h:'The three technologies, distinguished', items:[
          {k:'Voice control', v:'Using your voice to control devices or apps. Smart-home lights and thermostats, “call mum”, starting music or GPS in a car.'},
          {k:'Speech recognition', v:'Converting speech into text or commands. Voice-to-text dictation, translator apps, live subtitles in video meetings.'},
          {k:'Speech synthesis', v:'Converting text into speech so the computer “speaks”. Navigation (“in 300 metres, turn left”), e-readers reading a book aloud, spoken notifications.'}
        ]},
        {type:'text', h:'All three together', b:'The best examples use all three, and students already own them. A <strong>voice assistant</strong>: recognition understands you, synthesis replies, voice control executes the command. A <strong>car navigation system</strong>: you dictate the address, it speaks the route, you change it by voice. <strong>Assistive software</strong>: it understands the person, reads out text they can’t read themselves, and can be controlled by voice.'},
        {type:'text', h:'How synthesis actually works — three stages', b:'<strong>1. Text analysis</strong> — the computer works out how the text should be read: a full stop means a pause, a question mark changes intonation. <strong>2. Text-to-sound conversion</strong> — words become sounds, using a database of all the sounds of the language. <strong>3. Speech generation</strong> — the sounds are combined into words and sentences, aiming for something smooth and lifelike.'},
        {type:'code', lbl:'pyttsx3 — the whole library, essentially', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

engine.<span class="cf">setProperty</span>(<span class="cs">'rate'</span>, <span class="cn">150</span>)      <span class="cc"># speech rate</span>
engine.<span class="cf">setProperty</span>(<span class="cs">'volume'</span>, <span class="cn">0.9</span>)    <span class="cc"># volume</span>

voices = engine.<span class="cf">getProperty</span>(<span class="cs">'voices'</span>)
engine.<span class="cf">setProperty</span>(<span class="cs">'voice'</span>, voices[<span class="cn">0</span>].id)   <span class="cc"># voice choice is system-dependent</span>

engine.<span class="cf">say</span>(<span class="cs">"Hello"</span>)
engine.<span class="cf">runAndWait</span>()                     <span class="cc"># actually perform the synthesis</span>`},
        {type:'text', h:'The independent-work stage', b:'This is a genuinely independent 40-minute stage: 25 minutes to study the documentation and build a program that vocalises text and experiment with the settings, then 15 minutes presenting. Your role is answering organisational and technical questions — nothing more. If a student is struggling, have them share their screen and help them individually. <strong>The priority is that every student ends up with a working speech program</strong>, and you praise every presentation.'},
        {type:'tip', txt:'Ask them a genuinely good question at the end: how would our lives change without speech synthesis? Students tend to think of it as a convenience until they think about someone who cannot read the screen — and then the technology stops being a toy.'}
      ]},
      {t:'🌤️ L2 — The talking weather bot', cards:[
        {type:'text', h:'Why this lesson is easy to run well', b:'The API needs <strong>no account and no key</strong>. <code>wttr.in</code> returns weather over a plain HTTP request, which means no registration stage, no key to leak, and no student blocked on a signup. Pick that battle deliberately — the lesson is about combining three things they already know, not about API authentication.'},
        {type:'hi', h:'Live-code it in three checkable stages', b:'The plan splits the build into three, and asks you to confirm every student is on track after <em>each</em> one. <strong>Stage 1</strong> — a basic bot with a <code>!start</code> command that replies. <strong>Stage 2</strong> — add the API call so <code>!weather London</code> returns the forecast as text. <strong>Stage 3</strong> — add synthesis so the bot also reads it aloud. Before writing any code, take a couple of minutes to check everyone has their bot token to hand.'},
        {type:'code', lbl:'stage 2 — the weather function', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:
    <span class="cc"># %C is the description, %t the temperature</span>
    base_url = <span class="cs">f"https://wttr.in/{city}?format=%C+%t"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        <span class="ck">return</span> response.text.<span class="cf">strip</span>()
    <span class="ck">return</span> <span class="cs">"Unable to retrieve weather data. Please try again later."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Weather in {city}: {weather_info}"</span>)`},
        {type:'code', lbl:'stage 3 — one function turns it into a talking bot', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

<span class="ck">def</span> <span class="cf">speak</span>(text: <span class="ct2">str</span>):
    <span class="cs">"""Vocalise the given text using pyttsx3."""</span>
    engine.<span class="cf">say</span>(text)
    engine.<span class="cf">runAndWait</span>()

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Weather in {city}: {weather_info}"</span>)
    <span class="cf">speak</span>(weather_info)   <span class="cc"># speaks on the machine running the bot</span>

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'A conceptual point students will trip over: the speech comes out of the <strong>computer running the bot</strong>, not out of Discord. Their bot doesn’t talk to the whole server — it talks to them. Say this before they test it, or you will field the same confused question five times. It is also a natural way to introduce the idea that code runs somewhere specific.'},
        {type:'text', h:'Ten bots worth having in your pocket', b:'The lesson lists examples students can adapt for homework and for the graduation project: weather, translator, learning assistant, news anchor, meditation, fitness, game helper, smart home, booking, tourist guide. Read a few out during the theory stage — it turns “add speech to a bot” from an exercise into a menu of things they might actually want.'},
        {type:'tip', txt:'Send the final commented code to students <strong>after</strong> the lesson, since homework is to improve the bot. The full third-stage version in the plan has every line explained — use it as your own reference while live-coding, and note that the M9L2 quiz answers double as a compact revision of the pyttsx3 API.'}
      ]},
      {t:'🎲 L3 — The independent build & the future of voice', cards:[
        {type:'text', h:'Genuine autonomy, with a safety net', b:'The structure: 5 minutes explaining and setting a positive tone, <strong>20 minutes building a bot that fetches random facts from an API and speaks them</strong>, then 15 minutes where one student shares their screen and explains their code line by line. Any resources allowed. Help with technical and organisational problems but <strong>let them implement it independently</strong> — this is a rehearsal for the hackathon that starts next module.'},
        {type:'code', lbl:'the pattern they should arrive at themselves', code:`<span class="ck">def</span> <span class="cf">get_fact</span>() -&gt; <span class="ct2">str</span>:
    <span class="cs">"""Retrieve a random fact from the API."""</span>
    base_url = <span class="cs">"https://uselessfacts.jsph.pl/random.json?language=en"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        data = response.<span class="cf">json</span>()
        <span class="ck">return</span> data.<span class="cf">get</span>(<span class="cs">"text"</span>, <span class="cs">"Failed to retrieve fact."</span>)
    <span class="ck">return</span> <span class="cs">"Failed to retrieve data. Please try again later."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">fact</span>(ctx):
    random_fact = <span class="cf">get_fact</span>()
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Here's an interesting fact: {random_fact}"</span>)
    <span class="cf">speak</span>(random_fact)`},
        {type:'hi', h:'The line-by-line explanation is the assessment', b:'Fifteen minutes of one student narrating their own code is a better check of understanding than any quiz. Pick someone who built it themselves rather than the fastest finisher, and use <code>data.get("text", "…")</code> as your prompt: why a default value instead of <code>data["text"]</code>? Because the API might not return that field — which is the same defensive instinct as <code>try</code>/<code>except</code>.'},
        {type:'text', h:'Close with the discussion, not the code', b:'Fifteen minutes on integrating speech synthesis with AI, with translation into other languages, and where voice technology is heading. Ask every student for an opinion. The stated goal is that students understand the importance of this module <em>and</em> realise they have explored only a small part of what voice technology can do — leave them with the sense that there is more, not that the topic is closed.'},
        {type:'tip', txt:'The lesson opens with a Tally test where students see the correct answers and comments after finishing. Tell them that up front — it changes the test from something to survive into something to learn from. And remind them at the end to prepare a project for next lesson’s code review.'}
      ]},
      {t:'🧼 L4 — Clean code, refactoring & flake8', cards:[
        {type:'text', h:'What clean code is, and the definition to give', b:'Code that is <strong>easy to read, understand and maintain</strong> — written for quality and structure rather than for speed or minimal effort. Spend ten minutes discussing the slide questions before any code; students who have just spent a module reviewing each other’s work have opinions worth hearing.'},
        {type:'qa', h:'Why it matters — the reasons students should reach', items:[
          {k:'Maintenance', v:'Clean code is understandable even when you didn’t write it — vital once a project grows and other people work on it.'},
          {k:'Fewer errors', v:'Well-structured code hides fewer bugs, so less time goes on debugging.'},
          {k:'Easier testing', v:'Code split into small parts is easy to cover with tests.'},
          {k:'Flexibility', v:'Clear code is easier to extend when requirements change.'},
          {k:'Team productivity', v:'Everyone can understand the logic regardless of who wrote it.'},
          {k:'Easier refactoring', v:'Improving code is far less painful when the structure was logical to begin with.'},
          {k:'Onboarding', v:'New people join a clean project faster.'}
        ]},
        {type:'text', h:'The practice — find the problems, then automate the check', b:'Show the messy code and give students <strong>five minutes to find issues themselves</strong>, then five minutes taking turns sharing findings and fixes. Only then introduce <code>flake8</code> — ten minutes installing it and running it — and five minutes fixing what it flags. That order matters: they must exercise their own judgement before the tool does it for them, or they will learn to outsource the thinking.'},
        {type:'twocol', left:{h:'The problems in the example', items:['<code>taxrate</code> is a constant but isn’t <code>CAPITALISED</code>','<code>Tax</code> — function name starts with a capital','Whole functions written on one line','No spaces between parameters, or around <code>+</code>','Naming ignores <code>snake_case</code>','No type annotations','No docstrings','Tax calculations repeated instead of extracted','No input validation','Calculations and console output mixed together']}, right:{h:'What the refactor does', items:['<code>TAX_RATE = 0.2</code> as a named constant','<code>calculate_tax()</code> in <code>snake_case</code>','One statement per line, properly indented','PEP-8 spacing throughout','Consistent <code>snake_case</code> naming','<code>(price: float) -&gt; float</code> annotations','A docstring on every function','Repeated logic extracted into functions','Values validated before use','Calculation separated from printing']}},
        {type:'code', lbl:'the refactored version', code:`<span class="cc"># Defining the tax rate as a named constant</span>
TAX_RATE = <span class="cn">0.2</span>

<span class="ck">def</span> <span class="cf">calculate_tax</span>(price: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Calculates the tax on a given amount."""</span>
    <span class="ck">return</span> price * TAX_RATE

<span class="ck">def</span> <span class="cf">calculate_total_price</span>(*prices: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Sums the provided prices."""</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

total_price = <span class="cf">calculate_total_price</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>, <span class="cn">400</span>)
tax         = <span class="cf">calculate_tax</span>(total_price)
final_price = total_price + tax

<span class="cf">print</span>(<span class="cs">"Final price:"</span>, final_price)`},
        {type:'good', txt:'Point out what a linter can and cannot do. <code>flake8</code> catches spacing, naming style and unused code — real but shallow problems. It will never tell you that the same calculation appears three times, that a function does two unrelated jobs, or that a name is technically valid but meaningless. That judgement is theirs, and saying so is what stops “the linter is happy” becoming a synonym for “the code is good”.'},
        {type:'text', h:'The independent refactor', b:'Twenty minutes on the second exercise, working on their own — you may help with technical issues but let them do the thinking. Afterwards they explain what they fixed. The improvements to look for: constants for the point values, named arguments for flexibility, docstrings, a single reusable output function instead of repeated <code>print</code> calls, and better overall structure.'},
        {type:'tip', txt:'This is the lesson to connect back to M6L4, where students were asked to comment and structure their notebooks, and forward to the graduation project, which a classmate will have to read and test. Clean code stops being an abstract virtue the moment someone else has to run your project.'}
      ]}
    ],
    quiz:[
      {q:'What is the difference between speech recognition and speech synthesis?', opts:['Recognition converts speech into text or commands; synthesis converts text into speech so the computer “speaks”','Recognition is offline and synthesis is online','They are the same thing described from the user’s and developer’s perspective','Recognition works on words and synthesis works on whole sentences'], c:0, fb:'The three technologies are voice control (controlling by voice), recognition (speech → text) and synthesis (text → speech). A voice assistant uses all three.'},
      {q:'What are the three stages of how speech synthesis works?', opts:['Text analysis for pauses and intonation, conversion of words into sounds from a sound database, then combining sounds into smooth speech','Recording, compression, playback','Tokenization, lemmatization, generation','Input validation, translation, output'], c:0, fb:'M9L1 breaks it into text analysis, text-to-sound conversion using a database of the language’s sounds, and speech generation aiming for a lifelike voice.'},
      {q:'Why is pyttsx3 described as an offline solution?', opts:['It generates speech locally on the device, with no internet connection required','It caches audio files after the first run','It only works with locally stored text files','It uses the operating system’s downloaded voice pack once per session'], c:0, fb:'pyttsx3 generates speech on the device itself — that is one of the M9L2 quiz answers, and a genuine practical advantage over API-based synthesis.'},
      {q:'Why does the course use wttr.in for the weather bot?', opts:['It returns weather over a plain HTTP request with no account and no API key, so nobody is blocked on signup and there is no key to leak','It is the most accurate weather service available','It is the only service that returns plain text','It provides speech synthesis as well as weather'], c:0, fb:'No account and no API key means the lesson stays focused on combining bots, APIs and synthesis rather than on authentication.'},
      {q:'A student runs the talking weather bot and asks why nobody else in the Discord server can hear it. What is the answer?', opts:['The speech is generated on the computer running the bot, not sent through Discord — the bot talks to whoever is running it','Voice permissions are not enabled for the bot','They need to join a voice channel first','pyttsx3 needs an internet connection to broadcast'], c:0, fb:'It is a genuinely confusing point worth pre-empting, and a natural way to introduce the idea that code runs somewhere specific.'},
      {q:'How does the M9L2 build stay manageable in a live-coding lesson?', opts:['It is split into three stages — basic bot, then the API call, then synthesis — with a check that every student is on track after each one','The tutor writes it while students watch and copy at the end','Students each build one stage and combine them','The finished code is given out at the start and explained'], c:0, fb:'Three stages with a checkpoint after each, plus a couple of minutes up front confirming everyone has their bot token ready.'},
      {q:'In M9L3, what is the 15-minute presentation stage actually assessing?', opts:['Understanding — one student narrates their own code line by line, which reveals far more than a quiz would','Presentation skills for the hackathon','Whether the bot has no errors','Speed of implementation'], c:0, fb:'A student explaining their own code line by line is the real check. Choose someone who built it themselves rather than the fastest finisher.'},
      {q:'Why does the clean-code lesson have students find the problems BEFORE introducing flake8?', opts:['So they exercise their own judgement first — otherwise they learn to outsource the thinking to the tool','Because flake8 takes ten minutes to install','Because flake8 finds different problems than humans do','So the tutor can grade their answers before the tool corrects them'], c:0, fb:'The order is deliberate: five minutes finding issues, five sharing them, then the tool. Judgement first, automation second.'},
      {q:'Which problem in the messy example would flake8 NOT catch?', opts:['That the same tax calculation is repeated several times and should be extracted into a function','Missing spaces around the + operator','A function name starting with a capital letter','A constant not written in capitals'], c:0, fb:'A linter catches spacing, naming style and unused code. Duplicated logic, a function doing two jobs, or a meaningless-but-valid name all require human judgement.'},
      {q:'Which of these is a clean-code improvement the M9L4 refactor makes?', opts:['Adding docstrings and type annotations, and separating the calculation from the console output','Combining functions onto single lines to reduce file length','Removing all comments so the code speaks for itself','Renaming variables to single letters for brevity'], c:0, fb:'The refactor introduces a named constant, snake_case naming, one statement per line, docstrings, type annotations, extracted functions, validation, and separated calculation from output.'}
    ]
  },
  {
    id:14, emoji:'🎓', color:'#EF4444',
    title:'M10 — The Hackathon & Graduation Project',
    desc:'Course Module 10: the climate-change brief, brainstorming and choosing a project type, presentation skills, test documentation and checklists, peer testing, and preparing for graduation.',
    obj:'Run the finale. You should be able to set up a hackathon, run a brainstorm that ends in a committed idea, help students choose a project type that matches their skills, teach presentation and testing checklists, run a peer-testing round with constructive feedback, and get every student ready to graduate with something finished.',
    prep:'~2–3 hours, plus ongoing support time once projects start.',
    practical:{
      intro:'Before you teach any of course Module 10 you must have personally:',
      items:[
        'Run a brainstorm to a committed decision — even alone, on paper, to feel the shape of it',
        'Chosen a project type for an idea and written down why that type fits',
        'Prepared a one-minute pitch of a project using the eight presentation rules, and timed it',
        'Written a testing checklist using the five steps, then tested one of your own projects against it',
        'Cloned a project you did not write, deployed its environment, and got it running',
        'Written three-part feedback — positives, mistakes, recommendations — on someone else’s code',
        'Re-read your builds from Modules 5–13, because students will ask about any of them'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'Three lessons before graduation: <strong>L1</strong> the climate-change brief, brainstorming, choosing the project type, and the what-next presentation; <strong>L2</strong> presentation skills, answering the questions students prepared, building the main feature, and creating a testing checklist; <strong>L3</strong> fixing the main problems, peer testing against the checklist, the Creativity Card, and graduation prep.',
          why:'Everything in the course exists to make this possible. It is also where the risk profile changes: the danger is no longer that students can’t code, but that they choose something they can’t finish.',
          learn:'Students research a real problem, generate and commit to an idea, choose which kind of project fits it, create a public repository, present in one minute, build the core feature, write a testing checklist, test a classmate’s project against it, give and receive feedback, and prepare a presentation.',
          confident:'Running a brainstorm to a committed decision; helping students match idea to project type; the eight presentation rules; what test documentation is and the five steps of a checklist; and keeping scope small enough to finish.'
        }
      ]},
      {t:'🌍 L1 — The brief, the brainstorm & the decision', cards:[
        {type:'text', h:'The problem: climate change, researched not lectured', b:'Give students five minutes to research UN articles themselves and find answers to four questions: <strong>what is climate change</strong>, <strong>how serious is it and does it concern us</strong>, <strong>what triggers it</strong>, and <strong>how can we slow it down</strong>. You can split the responsibilities — one student per question — and then pool the findings. Then explain what a hackathon is and what awaits them in the module.'},
        {type:'text', h:'The brainstorm, with a real decision at the end', b:'First, everyone creates a <strong>new public GitHub repository</strong> for their project. Then five minutes on a shared board generating answers to one question: how can we solve the problem of climate change? Rules as before — <strong>no evaluation during generation</strong>, write down even the ridiculous ones. Note the subtlety in the plan: they generate <em>solutions to problems</em>, not project ideas — the technology comes after. Then evaluate: which ideas could be tweaked and improved? Finally each student picks one and <strong>writes it in the README of their repository</strong>.'},
        {type:'good', txt:'Making them commit in the README rather than in the chat is a small, excellent detail. It is public, it is permanent, and it means the next lesson starts with everybody having a stated idea rather than a vague intention. Do not let this step slide.'},
        {type:'text', h:'Choosing the project type', b:'Now the technology decision. Ask: the course is ending — what kinds of project have we learned to build? Remind them of the lessons where the answers live if they need it. Then have them choose the type they will use to realise their idea <strong>and explain why</strong>, recording it in the README too. Justifying the choice is the point — matching a solution to the tools you actually have is exactly the judgement M6L3 introduced.'},
        {type:'qa', h:'The menu they should be able to recall', items:[
          {k:'A Discord bot', v:'Commands, files, APIs — optionally with their own vision model.'},
          {k:'A Flask website', v:'Templates, forms, a database, login, deployed to a real URL.'},
          {k:'A Colab script or notebook', v:'Image processing, scraping, NLP, detection.'},
          {k:'A voice-enabled project', v:'Transcription, translation or synthesis added to any of the above.'}
        ]},
        {type:'warn', txt:'The final stage of this lesson presents Kodland’s other courses and includes a quiz whose results go to the sales team, are recorded per student and shared with parents. Be straight about what it is: run it warmly and honestly, do not comment on individual quiz answers while students are taking it, and don’t oversell. Your credibility with the group is worth more than a lead.'},
        {type:'tip', txt:'After the lesson, <strong>collect all the ideas in one place and send them to the group</strong> — screenshots or a list of links — so students can see and discuss each other’s plans. Homework is to prepare a project template with the libraries installed <em>and</em> a written list of implementation questions, which is what makes the next lesson work.'}
      ]},
      {t:'🎤 L2 — Presenting, building & the checklist', cards:[
        {type:'warn', txt:'Two things to do <strong>before</strong> this lesson: collect every question students wrote in their homework into a single visible list (a doc, a slide, a board), and decide the breakout groups in advance — grouping students by similar questions or similar project types. Improvising this in the lesson wastes the stage.'},
        {type:'qa', h:'The hackathon nominations', items:[
          {k:'🎤', v:'The best presentation'},
          {k:'🧩', v:'The most complex technical solution'},
          {k:'✨', v:'The project with the best appearance on Git'},
          {k:'🎯', v:'The most applicable solution'}
        ]},
        {type:'text', h:'Say the caveat that comes with them', b:'The nominations let students aim at a goal that suits their strengths — but tell them what the plan says next: this does <strong>not</strong> mean specialising in one direction. A truly good project is good in all regards. The categories are motivation, not permission to neglect three quarters of the work.'},
        {type:'text', h:'The eight presentation rules', b:'Have students read the rules and say which they are seeing for the first time, then apply them immediately: <strong>one minute</strong> each to present their idea and homework results, with an on-screen timer. If you think they will struggle, <strong>go first yourself</strong> — model a one-minute pitch of your own project and highlight its main points.'},
        {type:'twocol', left:{h:'Rules 1–4', items:['<strong>Prepare</strong> — have your materials and data open and ready','<strong>Define the goal</strong> — know what message and what result you want','<strong>Structure it</strong> — introduction, main body, conclusion','<strong>Use simple language</strong> — and explain any term you must use']}, right:{h:'Rules 5–8', items:['<strong>Practise</strong> — in front of a mirror or a friend, for style and confidence','<strong>Engage</strong> — talk with the audience, ask them questions','<strong>Control the time</strong> — don’t rush, don’t drag','<strong>Prepare for questions</strong> — anticipate them; it shows competence']}},
        {type:'text', h:'The development stages', b:'Students go into breakout rooms grouped by question or project type and start building the logic, exchanging ideas and looking for solutions together. <strong>You move between rooms answering the questions from the list</strong>, marking each one solved so you can show the completed list afterwards. Then everyone returns to the main room to continue, with general questions encouraged so students help each other.'},
        {type:'text', h:'Test documentation & the checklist', b:'<strong>Test documentation</strong> is the set of documents and instructions used to plan and carry out testing: how to verify the software works and how to find and eliminate errors. It exists for quality assurance, to document the problems you find, to simplify communication about what needs testing, and to be re-runnable after future changes. Then build <strong>one universal checklist for the whole group</strong>, using the assessment rubrics from earlier lessons as a reference — and send the finished version to the students.'},
        {type:'qa', h:'The five steps of building a checklist', items:[
          {k:'1. Identify the goals', v:'What do you actually want to test — functionality, interface, performance, security?'},
          {k:'2. Divide into categories', v:'Sections such as “Functionality”, “Interface”, “Security”.'},
          {k:'3. Describe expected results', v:'For each category, what should you see? Describe the expected behaviour.'},
          {k:'4. Add tasks per category', v:'Concrete items — e.g. under Functionality, “verify that user registration works”.'},
          {k:'5. Set priorities', v:'Which tasks matter most and should be tested first.'}
        ]}
      ]},
      {t:'🏁 L3 — Peer testing, feedback & graduation prep', cards:[
        {type:'warn', txt:'<strong>Check the state of every student’s project before this lesson.</strong> The order of the stages depends on it: if the projects are genuinely working, do the peer-testing stage first; if they are not, help students finish them and test afterwards. Also prepare the presentation order in advance to keep the stage moving.'},
        {type:'text', h:'The honest opening', b:'Each student takes <strong>one minute to describe the main problem of their project</strong> — not its features, its problem. Timer on, order pre-arranged. It sets a tone where being stuck is normal and speakable, which is exactly what you need in the last week before graduation.'},
        {type:'text', h:'Peer testing, properly structured', b:'Assign each student a classmate’s project. They <strong>clone it</strong>, make sure they have access to everything they need, deploy the environment from the Pipfile, and work through the <strong>shared checklist</strong>, recording results. Send the checklist again in case anyone lost it. Then they prepare feedback in three parts: the <strong>positive aspects</strong>, the <strong>mistakes discovered</strong>, and <strong>recommendations for corrections</strong>. Feedback is exchanged in the general chat so you can moderate it.'},
        {type:'good', txt:'Say the framing out loud before they begin: <strong>this is not part of any assessment — it is helping each other.</strong> Feedback must be constructive and correct, with no negative or offensive comments. If a student struggles to phrase something, help them find the words. Getting this wrong in the final week is worse than not doing it at all.'},
        {type:'hi', h:'The most important thing you say all module', b:'After feedback, some students will want to rebuild everything before graduation. Head that off directly, in the plan’s own words: <strong>complete the graduation project without overcomplicating it.</strong> Focus on what can be finished in the time available, and save improvements for later. A finished simple project presented with confidence beats an ambitious half-built one every single time — and this is the moment students most need to hear it.'},
        {type:'text', h:'The Creativity Card', b:'A form each student fills in during lessons, covering the <strong>description of the final project</strong>, its <strong>uniqueness</strong>, the <strong>obstacles</strong> they hit, and their <strong>progress</strong>. Make sure every student completes theirs: it helps them at the presentation lesson, and it is how you keep track of where each project actually stands.'},
        {type:'tip', txt:'Homework is preparing the presentation — Google Slides or the project README. Flag the graduation-prep instructions too: students need to download and install a festive background, and the instructions list what else to have ready. Chase this, because a student who arrives at graduation unprepared remembers that, not the project they built.'}
      ]}
    ],
    quiz:[
      {q:'In the M10L1 brainstorm, what exactly are students generating?', opts:['Solutions to the problem of climate change — the project type and technology are chosen afterwards','Project ideas with the technology already decided','A list of libraries they want to use','Names for their repositories'], c:0, fb:'The note is specific: you should not generate project ideas, but solutions to problems. Matching a technology to the solution is the next stage.'},
      {q:'Where do students record the idea they commit to?', opts:['In the README of the new public GitHub repository they create — public and permanent','In the group WhatsApp chat','In the tutor’s notes','On the shared brainstorming board only'], c:0, fb:'Both the chosen idea and, later, the project type go into the repository README — so the next lesson starts with everyone having a stated plan.'},
      {q:'Why does the course have students explain WHY they chose a particular project type?', opts:['Because matching a solution to the tools you actually have is the professional judgement the course has been building since M6L3','Because the tutor needs it for grading','Because the platform requires a written justification','To decide the hackathon nominations'], c:0, fb:'Choosing a tool that suits the problem and your own capability is real engineering judgement — first introduced when evaluating whether YOLO suited the input.'},
      {q:'What caveat comes with the four hackathon nominations?', opts:['They let students aim at their strengths, but a truly good project is good in all regards — not an excuse to specialise','Only one nomination may be entered per student','The nominations are decided by student vote','Winning a nomination replaces the graduation presentation'], c:0, fb:'The plan says it directly after listing them: this does not mean you should specialise in only one direction.'},
      {q:'What must you prepare BEFORE running M10L2?', opts:['A single visible list of all the questions students wrote in their homework, plus pre-planned breakout groups','The finished checklist for the whole group','A demo of each project type','The graduation slides'], c:0, fb:'The note asks you to arrange the questions into a list you can show the group, and to work out the groupings in advance — by similar questions or similar projects.'},
      {q:'What is test documentation, as the course defines it?', opts:['The set of documents and instructions used to plan and carry out testing — how to verify the software works and how to find and eliminate errors','A log of every bug a project has ever had','The README of the project','The tutor’s assessment rubric'], c:0, fb:'It exists for quality assurance, to document discovered problems, to simplify communication about what needs testing, and to be re-runnable after changes.'},
      {q:'A student has read their peer’s feedback and now wants to rebuild their whole project before graduation. What do you tell them?', opts:['Complete it without overcomplicating — focus on what can be finished in the time available and save improvements for later','Rebuild it, since the feedback identified real problems','Present the current version and say it is unfinished','Swap to a simpler project type entirely'], c:0, fb:'This is the explicit advice in the M10L3 tips: finish without overcomplicating, focus on what fits the time, save improvements for later.'},
      {q:'How should peer feedback be framed before students start?', opts:['As helping each other, not as part of any assessment — constructive and correct, with no negative or offensive comments','As a graded exercise so students take it seriously','As a competition to find the most bugs','As anonymous, so students can be blunt'], c:0, fb:'The plan is emphatic: feedback must be constructive and correct, and it is important to say this is not part of evaluation but a means of helping each other.'},
      {q:'What is the Creativity Card, and why does it matter?', opts:['A form covering the project’s description, uniqueness, obstacles and progress — it helps students at the presentation and shows you where each project stands','A certificate awarded at graduation','A card with prompts for students who can’t think of an idea','The peer-testing feedback form'], c:0, fb:'Make sure every student completes it: it supports them at the presentation lesson and lets you track each project’s real progress.'},
      {q:'How should you handle the stage of M10L1 that presents Kodland’s other courses?', opts:['Run it warmly and honestly without overselling, and don’t comment on individual quiz answers while students take it','Skip it, since it is not technical content','Emphasise that students must continue to another course','Have students complete it as homework instead'], c:0, fb:'The plan asks you not to comment on each question so students answer without outside influence. Running it honestly protects your credibility with the group.'}
    ]
  },
  {
    id:15, emoji:'📋', color:'#6366F1',
    title:'Teaching Delivery Craft',
    desc:'The deeper delivery skills: running the five methods well, differentiation, answering what you don’t know, classroom management, grading partial work, adapting to 50-minute individual lessons, and the eight reflection techniques.',
    obj:'Master delivery, not content. Module 3 gave you the lesson skeleton and the method names; this module makes you good at them. By the end you should be able to differentiate on the fly, handle a question beyond your knowledge without losing the room, grade half-working code fairly, cut a 90-minute lesson down to 50, and close every lesson with a reflection that consolidates the learning.',
    prep:'~3 hours. Best read after you have worked through the content modules.',
    practical:{
      intro:'Before the test, rehearse the things that are hard to do cold:',
      items:[
        'Said the “I don’t know, let’s find out” script out loud until it sounds natural rather than apologetic',
        'Taken one 90-minute lesson plan and written the 50-minute individual version of it',
        'Graded a piece of half-working code against the course’s criteria and justified the number',
        'Picked three reflection techniques you can run with no preparation',
        'Written your own list of additional assignments for fast finishers, per module'
      ]
    },
    sections:[
      {t:'🧭 Overview & goals', cards:[
        {type:'brief',
          overview:'The delivery craft that sits on top of the lesson skeleton: running the five methods <em>well</em>, differentiation, <strong>answering questions beyond your knowledge</strong>, classroom management, <strong>grading partial work</strong>, adapting a 90-minute lesson to the <strong>50-minute individual</strong> format, and the eight reflection techniques.',
          why:'Content knowledge is necessary but not sufficient. A tutor who knows Flask perfectly and runs the lesson badly loses the group; a tutor who knows how to handle the room recovers from anything — including from not knowing an answer.',
          learn:'Nothing new for students — this module is about <em>you</em>. It is the layer that determines whether the other fifteen modules land.',
          confident:'Running LiveCoding and UMC properly; the differentiation moves in both directions; a script for “I don’t know”; how to grade half-working code; what to cut for an individual lesson; and three reflection techniques you can run cold.'
        },
        {type:'tip', txt:'Module 3 covered the lesson skeleton and what the five method names mean. This module assumes that and goes deeper. If any of “EduScrum”, “LiveCoding” or “Use–Modify–Create” is still fuzzy, go back to Module 3 first — the rest of this will land better.'}
      ]},
      {t:'🙋 When you don’t know the answer', cards:[
        {type:'text', h:'This will happen, and sooner than you expect', b:'Python Pro is an advanced course and some of these students are sharp. Someone will ask what a hash actually is, or how the neural network decides, or why <code>Client</code> exists if <code>Bot</code> is better. If you came to this job from a non-developer background, you will be asked something you cannot answer within the first few lessons. That is <strong>normal and survivable</strong> — what matters is having decided in advance how you will handle it.'},
        {type:'qa', h:'The three moves, and when to use each', items:[
          {k:'Look it up together — the default', v:'“Great question, I’m not certain. Let’s find out — where would we look?” Then actually do it, sharing your screen. This is the strongest option because it <em>is</em> the M1L4 lesson: nobody knows a library by heart, and finding the answer is the professional skill. You are not covering for a gap; you are demonstrating the thing you are meant to be teaching.'},
          {k:'Park it and follow up', v:'When you are mid-sprint and time is tight: “That’s a really good question and I want to give it a proper answer — let me come back to you in the group chat tonight.” <strong>Then actually do it.</strong> A followed-up question builds more trust than an instant answer; a forgotten one costs you more than admitting ignorance did.'},
          {k:'Name the edge honestly', v:'When the question is genuinely beyond the course: “That’s past where this course goes, and honestly past what I know well. Here’s the short version I’m confident about…” then give what you do know. Students respect a clear boundary far more than a vague answer.'}
        ]},
        {type:'warn', txt:'The one move that actually costs you the room is <strong>guessing confidently</strong>. Students test answers — they will paste it into a search engine during the lesson. Being wrong while sounding certain is what ends your credibility; saying “I don’t know” never does. Say it out loud a few times before your first lesson until it stops feeling like a confession.'},
        {type:'good', txt:'Reframe it: a tutor who says “I don’t know, let’s find out” in front of teenagers is modelling exactly the behaviour the course wants from them. The whole M6L1 “all versus one” game exists to help students overcome the fear of asking questions. You cannot teach that fear away while pretending to be omniscient.'},
        {type:'tip', txt:'Do the boring prevention work too: read the next lesson’s plan and materials properly, and note the two or three places you feel shaky. Most unanswerable questions are predictable from the lesson content — decorators in M1L3, <code>async</code> in every bot lesson, hashing in M4L2, how the model actually learns in M5L4. Training Module 2 covers the first three.'}
      ]},
      {t:'🧑‍🤝‍🧑 Classroom management with teenagers online', cards:[
        {type:'qa', h:'The situations you will actually meet', items:[
          {k:'A student won’t turn their camera on', v:'The plans ask you to check cameras and microphones work, which is about participation, not surveillance. Don’t make it a confrontation in front of the group — ask once, publicly and lightly; if it continues, ask privately whether something is wrong. Engagement in the chat and on tasks matters more than a visible face.'},
          {k:'One student dominates everything', v:'Use the structures rather than your authority: the “ball” game where the speaker picks the next speaker, the rule that the same student can’t answer twice running, and asking a specific quieter student by name for their view. Let the format do the limiting.'},
          {k:'A student is disruptive or off-task', v:'Give them a job. In this course that is easy — have them lead an install, share their screen, or explain their solution. Disruption is usually under-occupation, and the course is full of legitimate roles to hand out.'},
          {k:'A breakout room isn’t working', v:'Drop in. The plans have you moving between rooms anyway. If a pair has stalled, restate the concrete goal and the time remaining — vague tasks stall pairs faster than difficulty does.'},
          {k:'Nobody answers your question', v:'Almost always the question was too big. Shrink it: not “how would we solve this?” but “what type should this variable be?” The plans model this constantly with narrow, answerable prompts.'},
          {k:'A student is silent for a whole lesson', v:'Note it and act next lesson — the homework check is your read on who is disengaging. Ask them something you know they can answer, so the first thing they say is a success.'}
        ]},
        {type:'good', txt:'The course gives you an unusual amount of goodwill to work with: students are building things they chose, for problems they picked, and publishing them. Lean on that when engagement dips. “Who is this for?” and “what would make yours different?” re-engage a teenager far better than “please pay attention.”'},
        {type:'warn', txt:'Two things not to do, both explicit in the plans: don’t be negative towards students who didn’t do the homework, and don’t single anyone out for lacking equipment or a slow machine. Both are usually about circumstances at home rather than effort.'}
      ]},
      {t:'🎓 The five methods, done well', cards:[
        {type:'text', h:'1. Scrum & EduScrum', b:'Used from M1L2 onwards and taught explicitly in course Module 8. The lesson is divided into <strong>sprints</strong> with strict time limits, each opening with a short discussion and closing with a debrief. The two debrief questions are fixed: <strong>“did we really achieve the result?”</strong> and <strong>“how does this bring us closer to solving the main problem?”</strong> Fuller EduScrum lessons add a retrospective with three questions: what did you accomplish and was there enough time; which stage was hardest; how would you improve this sprint.'},
        {type:'text', h:'2. LiveCoding', b:'The tutor builds the code <strong>gradually, together with the students</strong>, sharing their screen — so they see programming as a stream of small decisions rather than a finished artefact. Talk while you code, ask questions to keep them engaged, explain the logic behind each move, <strong>make mistakes deliberately and ask them to find them</strong>, don’t rush, pause so people catch up, use Zoom’s drawing tools to visualise logic, use a clear large font, and write in code blocks so the structure is visible.'},
        {type:'text', h:'3. Use–Modify–Create', b:'Used for M1L3 and M6L1. Students first <strong>use</strong> working code — run it, see it work, experiment freely — then <strong>modify</strong> it while you explain what each change does, and only then <strong>create</strong> their own version. Do the first two steps in order and resist explaining early: five minutes of “change something and run it again” produces better questions than any lecture.'},
        {type:'text', h:'4. Metacognition', b:'Introduced in M2L1 as the “metacognition train” — five scheduled stops through the lesson: state the objectives; self-question how prior knowledge helped; identify the tools and strategies used; evaluate whether those strategies worked; and reflect on whether they transfer outside the course. Read the tutor booklet before running it. The most useful move it gives you: a student’s frustration is <strong>valid information about the strategy they chose</strong>, not evidence about their ability.'},
        {type:'text', h:'5. Gamification', b:'Not decoration — the delivery mechanism for theory that would otherwise be a lecture. The course’s repertoire: <strong>tic-tac-toe</strong> quiz teams (M5L4), <strong>“all versus one”</strong> where one student is the expert (M6L1), the <strong>“ball”</strong> game where the speaker picks the next speaker (M1L3), <strong>“find it if you can”</strong> two-minute code hunts (M3L4), <strong>model-accuracy competitions</strong> (M5L4, M6L2), and the <strong>best-meme contest</strong> (M3L4). Several also spread airtime automatically — the rule that the same student can’t answer twice running does more for participation than asking quiet students directly.'},
        {type:'tip', txt:'When a lesson note names a method, it is telling you the lesson will not work otherwise. A UMC lesson delivered as a lecture, or an EduScrum lesson run without timings, produces a stage that overruns and a group that disengages. Read the note at the top of the plan before anything else.'}
      ]},
      {t:'⚖️ Differentiation', cards:[
        {type:'twocol', left:{h:'🚀 For students who are ahead', items:['Use the built-in <strong>additional assignments</strong> (⭐️ / “Add.”) — they exist in nearly every lesson','Have them <strong>share their screen and lead</strong> an install or a live-coding stage','Ask them to run a <strong>mini master class</strong> for classmates','Point them at the <strong>documentation</strong> for a deeper task inside today’s topic','Give the open-ended “make it your own” version of the project']}, right:{h:'🐢 For students who are behind', items:['<strong>Reduce scope</strong> — a finished simple version beats an unfinished ambitious one','Hand them a <strong>starter</strong>: the Basic Bot, the repository branch, the solution Pipfile, the shared CSV','Let the <strong>technical assistant</strong> help while you keep the class moving','<strong>Pair them</strong> in a breakout room, or join them individually','Fix the <em>one</em> blocking issue and get them a visible win']}},
        {type:'warn', txt:'Never let one broken machine hold the class hostage. The plans say it in several places: start the students who are ready, get help to the blocked one, and use the prepared fallback. An install problem is not worth twenty minutes of nine students’ time.'},
        {type:'good', txt:'The best differentiation move in the course is turning a fast student into a teacher. It deepens their understanding, buys you time with the students who are stuck, and costs nothing. Praise the <em>explaining</em>, not the finishing — that is what makes it a reward rather than a chore.'}
      ]},
      {t:'📊 Assessment & the platform', cards:[
        {type:'text', h:'How work is assessed', b:'Assignments are either <strong>checked automatically</strong> by the platform or <strong>manually by you</strong>. Manual ones come with criteria and point values — for example, functions written and code working is worth 30 points, plus an additional task 35, non-working code 0; the module projects are worth up to <strong>50 points</strong> and have a dedicated assessment tool; a README is worth 20 unstructured, 30 structured with emojis, +5 for an image or GIF, +10 for a licence file. Use the tools where they exist, and put the grades on the platform.'},
        {type:'qa', h:'The operational details that catch new tutors', items:[
          {k:'The Submit button', v:'Work only counts once submitted. Say “please make sure you’ve submitted your classwork” at the end of every lesson, and verify in the Backoffice.'},
          {k:'Links in the chat', v:'Several graded assignments are assessed from a GitHub link posted in the assignment chat. No link means an unassessed student — chase it during the lesson.'},
          {k:'Deadlines', v:'Discuss homework deadlines with students and leave yourself enough time to assess properly.'},
          {k:'Attendance', v:'Record it while talking to students rather than as a formal roll call.'},
          {k:'The group chat', v:'Homework can be discussed there between lessons — remind students so they don’t wait a week to get unstuck.'}
        ]},
        {type:'text', h:'The end-of-module career stage', b:'Modules 1, 2, 3 and 4 of the course each end with a short stage connecting the work to a career: celebrate finishing a topic very few people finish, show the skills unlocked, and connect them to professional paths — Python’s presence in major products for the automation block, a data scientist as “an information detective” for the AI block, and the advantages of being an AI specialist for the applied block. Ask what students know before telling them, and ask what they would like to do with these skills.'},
        {type:'warn', txt:'One stage in M10L1 presents Kodland’s other courses and collects quiz results that go to the sales team and to parents. Run it warmly and honestly, don’t comment on answers while students take the quiz, and don’t oversell. Your credibility with the group is worth more than a lead.'}
      ]},
      {t:'💭 The eight reflection techniques', cards:[
        {type:'text', h:'Rotate them — that is the instruction', b:'The later lesson plans supply eight techniques and recommend using a <strong>different one each lesson</strong>. Keeping them in rotation is what stops the closing ten minutes becoming a ritual students sit through. Have three or four you can run without preparation.'},
        {type:'qa', h:'The eight', items:[
          {k:'1. Completing the sentence', v:'“Today I learned that…”, “My favourite part of the lesson was…”'},
          {k:'2. The discovery whiteboard', v:'Open a Zoom board and have everyone write one new thing — a fact, a trick, a term, an idea worth remembering.'},
          {k:'3. In one meme', v:'Everyone posts one meme or image describing their impression of the lesson.'},
          {k:'4. Blitz questions', v:'Quick one-sentence answers: most memorable thing, most interesting or challenging task, something usable outside class.'},
          {k:'5. Did anything surprise you?', v:'Take turns naming what surprised or amazed them.'},
          {k:'6. A small victory', v:'Everyone shares one win — even “I wrote code without errors” or “I helped a friend”.'},
          {k:'7. Educate a friend', v:'Twenty seconds each explaining what they would teach a friend who missed the lesson. Excellent for consolidation and confidence.'},
          {k:'8. A secret tip', v:'Everyone shares one piece of advice for other learners — “check your code after each step”, “don’t be afraid to try new code”.'}
        ]},
        {type:'good', txt:'“Educate a friend” is the most diagnostic of the eight. A student who can explain today’s lesson in twenty seconds has understood it; a student who can’t, hasn’t — and you find that out in the last five minutes of the lesson rather than in next week’s test.'},
        {type:'text', h:'And always close the same way', b:'Say goodbye properly, tell them you are expecting everyone next lesson, and remind them they can discuss homework in the group chat <strong>without waiting for the next lesson</strong>. It appears at the end of all forty lesson plans. It takes fifteen seconds, and it is the difference between a class and a group.'}
      ]},
      {t:'✍️ Grading code that half works', cards:[
        {type:'text', h:'The problem the criteria don’t solve', b:'The course gives you point values — 30 for working functions, 35 with the additional task, <strong>0 if the code does not work</strong>, up to 50 for a module project, and the README scale of 20/30/+5/+10. What it does not tell you is what to do with the very common case: the thinking is right, the structure is right, and it crashes on line 14.'},
        {type:'qa', h:'A defensible way to decide', items:[
          {k:'Separate understanding from execution', v:'Ask yourself two questions: did they understand what was needed, and does it run? A student who designed the right solution and hit one typo is in a completely different position from one who pasted something they can’t explain.'},
          {k:'Where a strict 0 is written, honour it — but say why', v:'Some criteria are explicit that non-working code scores 0. Apply it, and then give the feedback that makes it useful: exactly which line, and what to change. A 0 with a precise fix is a teaching act; a 0 with no comment is just a number.'},
          {k:'Reward the visible attempt', v:'Where the criteria give you latitude — project scores, additional tasks, README quality — credit real effort that fell short. Comments, structure, a sensible commit history, a README that explains the intention.'},
          {k:'Never grade on speed', v:'Nothing in the course rewards finishing first. A complete simple project is explicitly worth more than an unfinished ambitious one.'},
          {k:'Always leave a route to the points', v:'Say what would move it up. Every manual assignment can be resubmitted in spirit, because the whole course is iterative — the next lesson builds on the same project.'}
        ]},
        {type:'good', txt:'A useful habit: write the feedback first and the number second. If you cannot explain the number in two sentences that would help the student improve, it is probably the wrong number.'},
        {type:'tip', txt:'Use the <strong>assessment tools</strong> where the course provides them (the module-1 bot project and the module-4 portfolio both have one) — they exist so grading is consistent between tutors, not just convenient for you. And remember the practical trap: several graded assignments are assessed from a <strong>GitHub link in the assignment chat</strong>. No link, no assessment — chase it during the lesson, out loud, more than once.'}
      ]},
      {t:'👤 The 50-minute individual lesson', cards:[
        {type:'text', h:'Every lesson has one, and it is not just “the same but faster”', b:'Each plan in the curriculum carries a <strong>50-minute individual variant</strong> with its own stage table. The temptation is to run the group lesson at speed. Don’t — you lose 40 minutes, and a lot of what you would rush is exactly what a single student cannot do at all.'},
        {type:'twocol', left:{h:'What has to go', items:['<strong>Breakout rooms</strong> — there is nobody to pair with','<strong>Team competitions</strong> — the M6L2 team-average rule stops meaning anything','<strong>Peer review and peer testing</strong> — <em>you</em> become the reviewer','<strong>Presentations to the group</strong> — becomes a conversation with you','<strong>Games that need teams</strong> — tic-tac-toe teams, the “ball” game','Most of the idea-sharing and voting stages']}, right:{h:'What you gain, and should use', items:['<strong>Genuine pace matching</strong> — no waiting for the slowest or fastest','<strong>Continuous dialogue</strong> — you can ask “why?” after every step','<strong>Deeper debugging</strong> — read every error together properly','<strong>Their own project focus</strong> — the real-world framing can be picked for them','More time on the additional assignments','Immediate, specific feedback instead of batched marking']}},
        {type:'qa', h:'How to convert the collaborative stages', items:[
          {k:'Pair analysis → think-aloud', v:'Where students would analyse code in pairs, have them narrate their reasoning to you. The M6L1 “all versus one” game already has an individual variant in the plan: you and the student take turns asking each other questions, with no winner.'},
          {k:'Peer code review → your review, their checklist', v:'They review <em>your</em> deliberately flawed code against the checklist. It teaches the same skill and it is arguably harder.'},
          {k:'Team competition → against a benchmark', v:'Instead of beating another team, beat a target: “can you get the model above 90% on this test image?”'},
          {k:'Group brainstorm → structured prompting', v:'A lone brainstorm dies fast. Give categories and a timer, and contribute ideas yourself — the no-criticism rule still applies to both of you.'},
          {k:'Presentation → a real audience', v:'Have them present to you formally, timed, with the eight presentation rules applied. Then suggest they show a parent or a friend, so there is still a genuine audience.'}
        ]},
        {type:'tip', txt:'One thing gets <em>harder</em> alone: motivation on a long build. In a group, momentum is social. One-to-one it is entirely on you, so break the work into visible wins and name each one as it lands.'}
      ]},
      {t:'🧰 The habit that prevents most bad lessons', cards:[
        {type:'text', h:'Set up the next lesson at the end of this one', b:'Installers as homework before M1L2. Emails ready before the registration lessons. A project prepared before the code review. Old bot projects opened before M7L1. Live Share installed before M8L4. The CSV kept before M5L3. Questions written before M10L2. Almost every lesson that goes badly went badly because of something that should have happened a week earlier.'},
        {type:'good', txt:'Build yourself a two-line end-of-lesson ritual: confirm everyone pressed <strong>Submit</strong>, and say the one thing they must bring or install next time. Fifteen seconds, and it removes most of the chaos from the first ten minutes of your next lesson.'}
      ]}
    ],
    quiz:[
      {q:'A student asks you something you genuinely do not know. What is the default move?', opts:['Say you are not certain and look it up together on screen — it is the M1L4 documentation habit demonstrated live','Give your best guess confidently so the group keeps trusting you','Tell them it is beyond the scope of the course','Move on quickly and hope they forget'], c:0, fb:'Looking it up together is the strongest option because it IS the skill the course teaches: nobody knows a library by heart. You are not covering a gap, you are modelling the method.'},
      {q:'Which response to a question you cannot answer actually damages your credibility?', opts:['Guessing confidently — students test answers, and being wrong while sounding certain is what ends their trust','Saying “I don’t know”','Parking the question and answering it in the group chat that evening','Naming honestly where the edge of your knowledge is'], c:0, fb:'Admitting uncertainty never costs you the room. A confident wrong answer, checked by a student mid-lesson, does.'},
      {q:'You park a question to answer later in the group chat. What determines whether that helps or hurts?', opts:['Whether you actually follow up — a followed-up question builds more trust than an instant answer, a forgotten one costs more than admitting ignorance','How quickly you reply','Whether you answer it privately or publicly','Whether the student asked it in front of others'], c:0, fb:'Parking is a legitimate move only if the follow-up happens. Otherwise you have simply avoided the question, and students notice.'},
      {q:'Which of these is a core part of the LiveCoding method?', opts:['Making mistakes deliberately and asking students to find them','Writing the code silently so students can concentrate','Showing the finished code first, then explaining it','Having students code while you watch without speaking'], c:0, fb:'LiveCoding means narrating your decisions, asking questions, pausing, drawing to visualise logic — and making errors on purpose so students practise spotting them.'},
      {q:'One student is answering every question and the rest have gone quiet. What is the course-consistent fix?', opts:['Use the built-in structures — the “ball” game, the no-answering-twice-in-a-row rule — and let the format limit them','Ask them privately to contribute less','Stop asking open questions to the group','Move them to a separate breakout room'], c:0, fb:'Several of the course’s games spread airtime automatically. Letting the format do the limiting avoids making it personal.'},
      {q:'A student is being disruptive and off-task. What usually works in this course?', opts:['Give them a job — leading an install, sharing their screen, explaining their solution; disruption is usually under-occupation','Mute them for the rest of the stage','Move straight to the reflection stage','Set them extra homework'], c:0, fb:'The course is full of legitimate roles to hand out, and a bored capable student is the most common cause of disruption here.'},
      {q:'You ask the group a question and nobody answers. What is the most likely cause?', opts:['The question was too big — shrink it to something narrow and answerable, like “what type should this variable be?”','The group is disengaged and needs a break','They did not do the homework','The material is too advanced for them'], c:0, fb:'The lesson plans model narrow, answerable prompts constantly. Silence is usually a symptom of question size rather than of unwillingness.'},
      {q:'A student’s code shows the right thinking and the right structure, but it crashes. How should you grade it?', opts:['Apply the criteria — including a strict 0 where that is written — but always give the precise line and fix, so the mark teaches something','Give full marks, since the thinking was correct','Give zero with no comment, since the code does not run','Average the mark with their previous assignment'], c:0, fb:'Where non-working code scores 0, honour it — but a 0 with a precise fix is a teaching act, while a 0 with no comment is just a number.'},
      {q:'What is a good habit when grading manual assignments?', opts:['Write the feedback first and the number second — if you cannot justify the number in two helpful sentences, it is probably wrong','Grade the fastest submissions first while you have energy','Mark everything relative to the strongest student in the group','Give the same score to everyone who submitted, to stay fair'], c:0, fb:'Feedback first keeps the number defensible and useful. Nothing in the course rewards speed, and grading on a curve is not part of any criteria.'},
      {q:'When running a 50-minute individual lesson, what should you NOT do?', opts:['Run the 90-minute group lesson at speed — you lose 40 minutes and most of what you rush needs a group anyway','Convert the peer review into a review of your own flawed code','Replace the team competition with a benchmark target','Spend more time on the additional assignments'], c:0, fb:'Breakout rooms, team competitions, peer review and group presentations cannot happen with one student. Each needs converting, not compressing.'},
      {q:'In an individual lesson, how do you preserve the peer-code-review skill?', opts:['Have the student review YOUR deliberately flawed code against the checklist — same skill, arguably harder','Skip it, since it requires two students','Have them review their own code from a previous lesson','Ask them to review a classmate’s code as homework'], c:0, fb:'The skill is applying a checklist and giving constructive feedback. Your flawed code provides the subject, and you can plant exactly the problems you want found.'},
      {q:'What gets harder, not easier, in a one-to-one lesson?', opts:['Motivation on a long build — momentum is social in a group, so you must break work into visible wins and name each one','Debugging, because there is nobody to compare with','Keeping to the timings','Explaining theory clearly'], c:0, fb:'Pace matching and dialogue get better one-to-one. Sustaining momentum over a long build is the thing that lands entirely on you.'},
      {q:'A student is visibly frustrated during the metacognition lesson. What does the course have you say?', opts:['That the reaction is valid, and it is information about the strategy they chose — not evidence about their ability','That they should take a break and rejoin later','That frustration means the lesson is too advanced for them','Nothing — move on so you don’t draw attention to it'], c:0, fb:'The M2L1 note frames frustration as useful feedback about the strategy used, and asks you to congratulate the student for noticing, because noticing is the skill.'},
      {q:'What is the best differentiation move for a student who consistently finishes early?', opts:['Give them the built-in additional assignment, or have them lead a stage or run a mini master class — and praise the explaining','Send them ahead into next lesson’s material','Let them help you mark the other students’ work','Reduce the number of tasks for the rest of the class'], c:0, fb:'Additional assignments exist in nearly every lesson, and having strong students lead installs or explain solutions is a pattern used throughout the course.'},
      {q:'A student’s environment is broken and the practical stage is starting. What do you do?', opts:['Start the students who are ready, get the technical assistant onto the problem, and hand the blocked student a prepared fallback','Pause the lesson until everyone’s environment works','Have them watch a classmate for the whole lesson','Move the lesson to the next week'], c:0, fb:'The plans provide fallbacks — the Basic Bot, the solution Pipfile, the shared dataset, the previous lesson’s CSV — precisely so one machine can’t hold the class hostage.'},
      {q:'Why does the course provide eight reflection techniques rather than one?', opts:['Because you are meant to rotate them, so the closing ten minutes stays live rather than becoming a ritual','So tutors can pick the one they personally prefer and reuse it','Because different age groups need different techniques','Because the platform assigns one at random'], c:0, fb:'The later lesson plans recommend changing the method every lesson — that is what keeps reflection from becoming something students sit through.'},
      {q:'Which reflection technique best reveals whether a student actually understood the lesson?', opts:['“Educate a friend” — twenty seconds explaining what they would teach someone who missed it','“In one meme” — their impression of the lesson','“A small victory” — one win from the session','“Completing the sentence” — “today I learned that…”'], c:0, fb:'Explaining a concept aloud in twenty seconds is a genuine comprehension check, and it consolidates the knowledge and builds confidence at the same time.'},
      {q:'A graded module project has no GitHub link in the assignment chat. Why does this matter?', opts:['That link is how the project is assessed — no link means an unassessed student, so chase it during the lesson','The platform deducts points automatically for a missing link','The student cannot progress to the next module without it','It prevents classmates from doing the peer review'], c:0, fb:'Several graded assignments are assessed from the link posted in the assignment chat. The plans tell you to remind students, out loud, more than once.'},
      {q:'What single habit prevents most lessons from going badly?', opts:['Setting up the next lesson at the end of this one — installers, emails, projects opened, extensions installed','Reading the whole lesson plan aloud at the start','Preparing extra theory in case practice finishes early','Keeping a spare laptop available'], c:0, fb:'Installers before M1L2, emails before registration lessons, a project ready before the code review, Live Share before M8L4 — most bad lessons were lost a week earlier.'}
    ]
  },
  {
    id:16, emoji:'🎬', color:'#0EA5E9',
    lesson:true,
    title:'Model Lesson — Watch & Analyse',
    desc:'A real recorded Python Pro lesson to watch, with a guide to what this tutor does well, what is missing from it, and why noticing the difference is the point.',
    prep:'~2 hours: watch once, then watch again with the guide and a notebook.',
    practical:{
      intro:'Before marking this complete — and unlocking the DST:',
      items:[
        'Watched the model lesson once straight through, then again against the observation guide',
        'Written down, verbatim, the phrases the tutor uses when a student wants the answer',
        'Listed the six delivery strengths below and noted the timestamp where each one happens',
        'Found the two stages that are <strong>missing</strong> from this lesson, and written the sentences you would have said instead',
        'Opened the M1L2 lesson plan alongside the video and compared it against the stage table',
        'Checked your own <strong>✋ Before you teach this</strong> lists across all modules and closed anything you skipped'
      ]
    },
    obj:'See everything from Module 15 executed in a real lesson — and see what happens when two required stages get squeezed out. Watch a complete Python Pro session, identify the delivery behaviours worth copying, spot the two gaps, and work out what you would have done differently.',
    completeH:'Ready to be assessed',
    completeBody:'Once you have watched the model lesson and worked through the observation guide, mark this module complete. That unlocks the <strong>Digital Skill Test</strong> — the final practical assessment for Python Pro tutor candidates.',
    completeBtn:'Mark model lesson watched →',
    sections:[
      {t:'🎥 The recording', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/H3ctpvdhzT0', cap:'A complete Python Pro lesson, delivered by an experienced tutor. If the player does not load, open it directly at <a href="https://youtu.be/H3ctpvdhzT0" target="_blank" rel="noopener noreferrer">youtu.be/H3ctpvdhzT0</a>.'},
        {type:'text', h:'Which lesson this is', b:'Judging by the content — the Python interpreter, setting up VS Code, creating a folder and running a first script, and homework about finding Discord bots — this is <strong>course lesson M1L2</strong>, the second lesson of the whole course. Open that plan alongside the video. It is a <strong>small group of two students</strong>, so the dynamics sit somewhere between the 90-minute group format and the 50-minute individual one.'},
        {type:'text', h:'How to watch it', b:'Watch it once straight through, as a student would. Then watch it again with the guide below and a notebook, pausing to write down what the tutor <em>does</em> rather than what they say. Delivery is a set of concrete behaviours — where they pause, when they hand over the screen, how they phrase a correction — and those are only visible on a second viewing.'},
        {type:'warn', txt:'This is a <strong>real lesson, not a staged demonstration.</strong> Most of it is very good and worth copying closely. Two required stages are also missing from it. Both facts are useful to you, and the second one is arguably more useful than the first — which is why the recording has not been edited to hide it.'}
      ]},
      {t:'✅ What this tutor does well — copy these', cards:[
        {type:'qa', h:'Six concrete behaviours, with what makes each one work', items:[
          {k:'Opens with the person, not the material', v:'Greets the students and asks about their week and what they have been doing. This is the briefing done properly — attendance happens inside a conversation rather than as a roll call.'},
          {k:'Checks homework by asking about the work itself', v:'Asks about their research and project from the previous lesson, and about the code-reading task — and the students actually answer. The homework check is a genuine discussion, which is also your best early read on who is drifting.'},
          {k:'Demonstrates first, then hands over', v:'Sets up VS Code and runs a Python script <em>before</em> the students do it themselves. For a setup-heavy lesson this is the right call: watch me, now you.'},
          {k:'Breaks instructions into steps', v:'Create a folder, open it in the terminal, type this command. Setup lessons fall apart when instructions arrive as a paragraph; they work when they arrive as a numbered sequence with a checkpoint after each one.'},
          {k:'Uses both students’ names, repeatedly', v:'Named address during learning interactions — not just for register. With two students this is easy; with eight it is a deliberate discipline, and it is the single cheapest way to keep everyone present.'},
          {k:'Asks students to explain, rather than explaining', v:'Asks them what an interpreter <em>is</em>, and they answer in their own words. This is the “don’t give the answer” rule applied to theory, and it is the behaviour to steal above all others here.'}
        ]},
        {type:'good', txt:'Note what the feedback looks like too: the tutor works through the students’ code with them, helping them find and correct their own errors rather than fixing it for them. That is the M1L4 debugging habit being modelled two lessons before it is formally taught.'},
        {type:'text', h:'And the homework is handed over properly', b:'The task — find Discord bots and bring them next lesson — is <strong>explained</strong>, not just announced, and it is linked forward to what the next lesson will do with it. That forward-link is what makes homework feel like part of something rather than an add-on, and it is in every lesson plan for exactly that reason.'}
      ]},
      {t:'🕳️ The two stages that are missing', cards:[
        {type:'text', h:'What is not there', b:'Two of the seven parts of the lesson skeleton do not appear: <strong>no clear lesson objective is stated</strong> at or near the start, and <strong>no recap or review closes the lesson</strong>. Both are required stages in every one of the 40 lesson plans, and the M1L2 plan has both — a goals slide listing what today produces, and a reflection stage with revision questions.'},
        {type:'twocol', left:{h:'Why the goals stage matters', items:['Students who know the destination tolerate a hard middle — and this lesson has a hard middle','Setup work feels like admin until it is attached to a purpose','The M1L2 plan’s own goals slide names four outcomes, including the strong-password generator','Without it, “why are we typing commands into a terminal?” goes unanswered']}, right:{h:'Why the recap matters', items:['Reflection is where the lesson consolidates — it is timetabled, not optional','It is your last chance to catch a student who nodded through something','Revision questions deliberately pull in the quieter student','A lesson that stops rather than closes leaves nothing to build on next week']}},
        {type:'good', txt:'Be fair about why this happens: it is almost always <strong>time</strong>. Setup lessons overrun — installs fail, machines differ, one student lags — and the stages at the two ends are the ones that get squeezed. That is precisely the failure mode Module 3 warns about, and seeing it happen to a competent tutor should tell you it will happen to you too unless you actively protect those stages.'},
        {type:'tip', txt:'Your task: write the two things that are missing. A <strong>30-second opening</strong> stating what this lesson produces, and a <strong>2-minute close</strong> with three revision questions and the homework. Write them out in full, in your own words. Those two short scripts are the most portable thing you will take from this module — they work in every lesson in the course, and you can reuse them almost unchanged.'}
      ]},
      {t:'🔍 Your observation task', cards:[
        {type:'qa', h:'Stage by stage, while you watch', items:[
          {k:'Briefing', v:'How is attendance taken — as a roll call, or inside a conversation? How quickly does the lesson get to a reason for existing?'},
          {k:'Homework check', v:'How is the previous lesson’s work drawn out? What happens to a student who has less to show?'},
          {k:'Goals', v:'<strong>Missing here.</strong> Note the point where it should have gone, and what you would have said.'},
          {k:'Theory', v:'How short is it? Watch the interpreter question specifically — the tutor asks rather than tells. Time how long the theory actually lasts.'},
          {k:'Practice', v:'Count how many times the tutor is asked for the answer and does not give it. Write down what they say instead.'},
          {k:'Reflection', v:'<strong>Missing here.</strong> The homework is explained well, but there is no recap. Note where it should have gone.'}
        ]},
        {type:'twocol', left:{h:'Delivery behaviours to note', items:['When the screen is handed over, and when it is taken back','How an error in a student’s code gets diagnosed out loud','Which questions get answered with another question','How pace is checked without singling anyone out','How the next lesson is set up at the end','How often each student is addressed by name']}, right:{h:'Moments that always go wrong', items:['Someone’s environment or install fails','A student finishes far ahead of the other','A student is silent for a long stretch','The setup stage starts to overrun','Code that worked a minute ago errors live','A path or filename is subtly wrong']}},
        {type:'good', txt:'The most useful thing you can take from this recording is the tutor’s <strong>phrasing</strong> in the moments where a student wants the answer. Write those sentences down verbatim. Having two or three ready-made ways to say “what does the error say?” is worth more in your first lesson than any amount of theory about not giving answers.'},
        {type:'tip', txt:'Finally, open the M1L2 plan next to the video and compare it against the stage table. Which stages ran long? Which got compressed? Seeing where a real lesson diverges from its plan is how you learn which parts of a plan are load-bearing and which will flex — and this particular comparison tells you a lot, because you already know how it ends.'}
      ]}
    ]
  }
]
};

/* ============================================================================
   Kodland Python Pro Tutor Training — CONTENIDO (Español)
   Traducción de content-en.js. NO cambies las claves, la estructura, las
   etiquetas HTML, las clases CSS ni el código Python — dentro de los bloques
   de código traduce SOLO los comentarios con #.

   REGLA DE SEGURIDAD para quien edite este archivo: nunca pegues un token real
   de bot de Discord, una clave de API, una cookie de sesión ni una contraseña
   de plataforma en este archivo. Usa los marcadores literales
   "YOUR_BOT_TOKEN" / "YOUR_API_KEY" exactamente como lo hacen los materiales
   del curso.
   ============================================================================ */
window.CONTENT = {
code: 'es',
htmlLang: 'es',
title: 'Formación de Tutores de Python Pro — Kodland',
ui: {
  logoSub: 'Formación Python Pro',
  heroEyebrow: '🐍 Programa de Formación de Tutores',
  heroTitle: 'Prepárate para enseñar<br><span class="h-pill">Python Pro</span><br>a chicos y chicas de 13 a 17 años',
  heroSub: 'Recorre todos los módulos en orden y aprueba su test para completar tu preparación como tutor o tutora. Saca un 70% o más en el test de un módulo para desbloquear el siguiente: no se puede saltar, y el Test de Habilidades Digitales se abre solo cuando todos los módulos están hechos.',
  progLabel: 'módulos hechos',
  modulesLabel: 'Tus módulos',
  allDone: '🏆 ¡Todo listo!',
  completeWord: 'completado',
  backModules: '← Módulos',
  exitQuiz: '← Salir del test',
  backDashboard: '← Panel',
  faqNav: '❓ Preguntas frecuentes',
  changeRegion: '🌐 Idioma',
  moduleWord: 'Módulo',
  ofWord: 'de',
  objectiveWord: 'Objetivo',
  badgePassed: '✓ Aprobado',
  badgeLocked: '🔒 Bloqueado',
  badgeStart: 'Empezar →',
  badgeWatched: '✓ Visto',
  badgeWatch: '▶ Ver',
  tagCompleted: 'Completado',
  tagExampleLesson: 'Clase modelo',
  completeModuleWord: 'Completar módulo',
  completeAllFirst: 'Termina antes todos los módulos',
  scoreWord: 'Puntuación',
  questionsWord: 'preguntas',
  takeQuiz: '📝 Hacer el test del módulo →',
  retakeQuiz: '🔄 Repetir el test',
  markComplete: 'Marcar como completado',
  doneCompleted: '✓ Completado',
  moduleComplete: 'Módulo completado',
  questionWord: 'Pregunta',
  correctPrefix: '✅ ¡Correcto! ',
  notQuitePrefix: '❌ No exactamente. ',
  seeResults: 'Ver resultados →',
  nextBtn: 'Siguiente →',
  modulePassed: '¡Módulo aprobado!',
  keepReviewing: 'Sigue repasando',
  scoreLine: 'Acertaste {s} de {t}.',
  passMsg: ' ¡Siguiente módulo desbloqueado!',
  failMsg: ' Necesitas un 70% para aprobar. ¡Repasa el módulo e inténtalo de nuevo!',
  reviewModuleWord: '📖 Repasar módulo',
  startModuleWord: 'Empezar módulo',
  watchModuleWord: '▶ Ver módulo',
  viewCertificate: '🏆 Ver certificado',
  trainingComplete: '¡Formación completada!',
  completeSub: 'Has recorrido todos los módulos, ¡enhorabuena! Ya estás listo o lista para el Test de Habilidades Digitales.',
  certLabel: 'Certificado de finalización',
  certTitle: 'Formación de Tutores de Python Pro',
  certLine: 'Kodland · Los {n} módulos · Puntuación media en los tests: {avg}%',
  takeDST: '🎯 Hacer el Test de Habilidades Digitales →',
  backDashboard2: '← Volver al panel',
  dstCardStage: 'Etapa final',
  dstCardTitle: 'Test de Habilidades Digitales',
  dstCardDesc: 'La evaluación práctica final: se desbloquea solo cuando todos los módulos están completados.',
  dstReady: 'Listo',
  dstCardTag: 'Evaluación práctica',
  devSkipDST: '🔓 Dev: ir directamente al DST →',
  prepWord: 'preparación',
  practicalTitle: 'Antes de enseñar esto',
  practicalNote: 'Esto es una autodeclaración: nadie puede comprobarlo desde aquí. Márcalo con honestidad, porque el test del módulo solo puede confirmar que has leído esto, no que sabes hacerlo.',
  practicalWarn: 'Todavía tienes {n} elemento(s) prácticos sin marcar en “Antes de enseñar esto”.\n\nEl test solo comprueba que has leído el módulo; no puede comprobar que sepas construir esto de verdad. Seguir sin hacer el trabajo práctico es justo como una clase se desmorona delante del grupo.\n\n¿Hacer el test de todos modos?',
  // etiquetas del bloque brief
  briefOverview: 'Panorama general',
  briefWhy: 'Por qué importa',
  briefLearn: 'Qué construyen y aplican los alumnos',
  briefConfident: 'Domina al 100%',
  // marcadores
  imgPhTitle: 'Espacio para imagen',
  videoPhTitle: 'Espacio para vídeo',
  videoPhBody: 'Aquí se añadirá una grabación.',
  videoFallback: 'Tu navegador no puede reproducir este vídeo. Puedes descargarlo desde la carpeta assets/media/videos.',
  // Preguntas frecuentes
  faqTitle: 'Preguntas frecuentes y resolución de problemas',
  faqSub: 'Respuestas rápidas para las situaciones que vivirás de verdad en una clase de Python Pro: los errores que aparecen en cada módulo, las reglas de seguridad que nunca debes saltarte y qué hacer cuando alguien va por delante o por detrás del grupo. Siempre disponible, desde cualquier pantalla.'
},
dst: {
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🎯 Etapa final</div>
      <h1 class="dst-h1">Prueba para candidatos y candidatas a tutor de Python Pro</h1>
      <p class="dst-sub">El objetivo principal de este curso es que los alumnos construyan grandes proyectos en varios campos —automatización con chatbots, desarrollo web e inteligencia artificial— usando las distintas librerías de Python. Esta tarea es donde demuestras que tienes conocimientos avanzados de Python y que puedes ayudar a los alumnos mientras escriben esos proyectos.</p>
    </div>

    <div class="dst-block">
      <div class="sch">🧩 La tarea práctica</div>
      <div class="card">
        <p>Usando <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a> y tus conocimientos de bases de datos, construye una <strong>web de cuestionarios dirigida a adolescentes</strong> que sea atractiva y dinámica.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">✅ Criterios del proyecto</div>
      <div class="card"><ul class="dst-check">
        <li>La web debe tener un cuestionario que cubra <strong>todos</strong> los temas propuestos.</li>
        <li>El cuestionario debe constar de <strong>al menos 5</strong> preguntas.</li>
        <li>Debe usarse una <strong>base de datos relacional</strong>. (Puedes utilizar <a href="https://flask-sqlalchemy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Flask-SQLAlchemy</a>.)</li>
        <li>La web debe estar publicada en <a href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">PythonAnywhere</a>.</li>
        <li>La web debe tener una página aparte donde pueda <strong>detectar o clasificar una imagen que suba la persona usuaria</strong>.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">📚 Temas del cuestionario</div>
      <div class="card"><ul class="dst-check">
        <li>Automatización de chatbots con Python (<a href="https://discordpy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Discord.py</a>)</li>
        <li>Desarrollo web con Python (<a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a>)</li>
        <li>Desarrollo de inteligencia artificial con Python</li>
        <li>Visión por computador (<a href="https://www.tensorflow.org/api_docs/python/tf" target="_blank" rel="noopener noreferrer">TensorFlow</a>, <a href="https://imageai.readthedocs.io/en/latest/detection/index.html" target="_blank" rel="noopener noreferrer">ImageAI</a>)</li>
        <li>Procesamiento del lenguaje natural (<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" rel="noopener noreferrer">BeautifulSoup</a>, <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">NLTK</a>)</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">⚠️ Cosas a las que prestar atención</div>
      <div class="card"><ul class="dst-check">
        <li>Cuando la persona usuaria envía el cuestionario, <strong>debe mostrarse la puntuación obtenida</strong>. Puede repetir el cuestionario, y deben mostrarse tanto su <strong>último resultado</strong> como su <strong>puntuación más alta</strong>.</li>
        <li>En la <strong>esquina superior derecha de la pantalla</strong> deben mostrarse la puntuación más alta lograda entre todas las personas usuarias hasta el momento y la propia puntuación más alta de quien está usando la web.</li>
        <li>El <strong>pie de página de todas las páginas</strong> de la web debe contener información sobre su autoría.</li>
        <li>Los resultados de la detección de imágenes deben <strong>mostrarse en pantalla</strong> (por ejemplo: nombre de la clase + nivel de confianza) y <strong>guardarse en la base de datos</strong>. Para el modelo puedes usar uno que hayas entrenado en Teachable Machine, o el modelo Tiny YOLO de ImageAI.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">🖼️ Un sitio de ejemplo</div>
      <p class="dst-note">La implementación de referencia muestra una página de cuestionario con <em>Tu nombre</em>, preguntas numeradas y respuestas de opción múltiple, con <strong>Personal High Score</strong> y <strong>Overall High Score</strong> arriba a la derecha, y una página de resultados que muestra <em>Tu puntuación</em>, <em>Puntuación personal más alta</em>, <em>Puntuación más alta general</em>, un botón <strong>Try Again</strong> y el crédito de autoría en el pie de página.</p>
      <div class="dl-row">
        <a class="dl-btn" href="https://github.com/GitKodland/HardSkillsTest" target="_blank" rel="noopener noreferrer">
          <span class="dl-ico">📦</span><span class="dl-tx"><b>La plantilla</b><small>github.com/GitKodland/HardSkillsTest</small></span>
        </a>
      </div>
      <p class="dst-note" style="margin-top:12px">Puedes usar esta plantilla o crear una totalmente nueva por tu cuenta.</p>
    </div>

    <div class="dst-block">
      <div class="sch">📝 Nota</div>
      <div class="card hi">
        <h4>Esta tarea mide tus habilidades de back-end</h4>
        <p>Por eso no necesitas esmerarte especialmente con el diseño.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">‼️ Importante</div>
      <div class="card">
        <p><strong>Asegúrate de haber probado el proyecto por completo antes de entregarlo.</strong> Deben cumplirse todos los criterios, todos los elementos requeridos deben estar presentes en las páginas y el proyecto debe funcionar sin errores.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">🚀 Cómo entregarlo</div>
      <div class="card"><ol class="dst-steps">
        <li>Sube el proyecto terminado a <strong>GitHub</strong> y pon el acceso en <strong>público</strong>.</li>
        <li>Publícalo en <strong>PythonAnywhere</strong>.</li>
        <li>Haz la prueba de habilidades y añade el enlace a tu proyecto como respuesta a la <strong>última pregunta</strong> de la prueba.</li>
      </ol></div>
    </div>

    <div class="dst-block">
      <div class="sch">🔗 Prueba de habilidades</div>
      <div class="form-ph">
        <div class="form-ph-ico">📝</div>
        <strong>Enlace al formulario de entrega pendiente</strong>
        <p>Todavía no está enlazado aquí el formulario de entrega en español. Tu equipo de formación lo añadirá: vuelve a mirar antes de entregar.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="card">
        <p style="text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:18px;color:var(--text);margin:0">¡Mucha suerte! 🍀</p>
      </div>
    </div>

    <hr class="divider">

    <div class="dst-block">
      <div class="sch">📎 De tu formación — no forma parte del enunciado anterior</div>
      <div class="card hi">
        <h4>Dónde se enseñó cada requisito</h4>
        <p>Todas las habilidades que pide esta tarea están cubiertas en un módulo que ya has completado. Si algo te parece flojo, vuelve a él en lugar de empezar de cero:</p>
        <ul>
          <li><strong>Flask, rutas, plantillas y formularios</strong> → Módulo 7 (M3 del curso)</li>
          <li><strong>Base de datos relacional con Flask-SQLAlchemy y puntuaciones por persona</strong> → Módulo 8 (M4 del curso)</li>
          <li><strong>Publicación en PythonAnywhere, incluido el paso del WSGI</strong> → Módulo 8 (M4L3 del curso)</li>
          <li><strong>Entrenar un modelo en Teachable Machine</strong> → Módulo 9 (M5L4 del curso)</li>
          <li><strong>Ejecutar ese modelo desde el código, y detección con ImageAI / Tiny YOLO</strong> → Módulo 10 (M6 del curso)</li>
          <li><strong>Discord.py, BeautifulSoup y NLTK</strong> — materia del cuestionario → Módulos 5 y 9</li>
        </ul>
      </div>
      <div class="callout cw"><span class="ci">⚠️</span><span>Antes de hacer público el repositorio: tu proyecto puede contener un token de bot, una clave de API o una <code>secret_key</code> de Flask. Ninguno de ellos pinta nada en un repositorio público, y borrarlos después no sirve porque Git guarda el historial. Compruébalo antes de subir: es la misma regla que harás cumplir a tus propios alumnos.</span></div>
    </div>
  </div>`
},
faq: [
  {
    cat: '📖 Glosario — las palabras que usa el curso',
    items: [
      {q: 'Palabras de Python y de código', a: '<strong>Intérprete</strong>: el programa que traduce tu Python a código máquina. <strong>IDE</strong>: el editor que te ayuda a escribir código (aquí VS Code). <strong>Librería / módulo / paquete</strong>: código que escribió otra persona y que tú importas. <strong>pip</strong>: la herramienta que instala librerías. <strong>Entorno virtual</strong>: un conjunto aislado de librerías que pertenece a un solo proyecto. <strong>Dependencia</strong>: una librería que tu proyecto necesita para funcionar. <strong>Framework</strong>: una librería grande que da estructura a tu proyecto (Flask). <strong>Decorador</strong>: la línea con <code>@</code> que entrega tu función a una librería. <strong>async / await</strong>: permite que una función se pause mientras espera sin congelar todo lo demás. <strong>Clase</strong>: el plano a partir del cual se crean los objetos. <strong>Objeto / instancia</strong>: una cosa creada a partir de ese plano. <strong>Herencia</strong>: una clase que recibe las capacidades de otra. <strong>Método</strong>: una función que pertenece a una clase. <strong>Argumento / parámetro</strong>: los valores que recibe una función. <strong>Return</strong>: el valor que devuelve. <strong>Excepción</strong>: un error que lanza Python; <code>try</code>/<code>except</code> lo captura. <strong>Refactorización</strong>: mejorar el código sin cambiar lo que hace. <strong>Linter</strong>: una herramienta que señala problemas de estilo (<code>flake8</code>).'},
      {q: 'Palabras de web y Flask', a: '<strong>Front-end</strong>: lo que ve la persona usuaria (HTML, CSS, JavaScript). <strong>Back-end</strong>: la lógica que hay detrás (aquí Python/Flask). <strong>HTML</strong>: contenido y estructura de la página. <strong>CSS</strong>: apariencia. <strong>Etiqueta</strong>: un elemento HTML como <code>&lt;p&gt;</code>. <strong>URL</strong>: la dirección de una página. <strong>Ruta</strong>: el código que se ejecuta para una URL concreta. <strong>Plantilla</strong>: una página HTML que Flask rellena con datos. <strong>Jinja</strong>: el motor de plantillas que hace ese relleno, con <code>{{ }}</code>. <strong>Formulario</strong>: los campos que envía la persona usuaria. <strong>GET / POST</strong>: pedir una página frente a enviarle datos. <strong>Sesión</strong>: cómo el servidor recuerda quién ha iniciado sesión. <strong>Widget / iframe</strong>: la aplicación de otra persona incrustada en tu página. <strong>Despliegue</strong>: poner tu aplicación en internet. <strong>PythonAnywhere</strong>: el servicio de alojamiento que usa el curso. <strong>Archivo WSGI</strong>: el archivo que lee el servidor para encontrar tu aplicación. <strong>UI / UX</strong>: cómo se ve frente a cómo se siente al usarla.'},
      {q: 'Palabras de datos e IA', a: '<strong>API</strong>: un servicio al que puedes pedir datos desde el código. <strong>JSON</strong>: el formato de texto en el que suelen responder las API. <strong>Petición</strong>: pedir algo a un servidor. <strong>Scraping</strong>: extraer información de una página. <strong>Parsing</strong>: analizar la estructura para sacar datos concretos. <strong>Crawling</strong>: recorrer muchas páginas recogiendo datos. <strong>robots.txt</strong>: un archivo que indica qué partes de un sitio se pueden rastrear. <strong>DataFrame</strong>: una tabla en pandas. <strong>CSV</strong>: un archivo de hoja de cálculo en texto plano. <strong>Dataset</strong>: los datos con los que aprende un modelo. <strong>Muestra de entrenamiento / de prueba</strong>: datos para enseñar frente a datos para comprobar (los de prueba deben ser inéditos). <strong>Modelo</strong>: lo ya entrenado que hace predicciones. <strong>Red neuronal</strong>: el tipo de modelo que se usa aquí. <strong>Clasificación</strong>: etiquetar una imagen entera. <strong>Detección</strong>: localizar objetos dentro de ella. <strong>Segmentación</strong>: decidir qué píxeles pertenecen a qué. <strong>Inferencia</strong>: usar un modelo entrenado con una entrada nueva. <strong>Hiperparámetro</strong>: un ajuste de entrenamiento que eliges, como las épocas. <strong>Época</strong>: una pasada completa por los datos de entrenamiento. <strong>Prompt</strong>: la instrucción que le das a un modelo generativo. <strong>PLN</strong>: procesamiento del lenguaje natural. <strong>Tokenización</strong>: dividir el texto en piezas. <strong>Lematización</strong>: reducir una palabra a su forma base. <strong>Stop words</strong>: palabras comunes que se eliminan antes del análisis. <strong>Pipeline</strong>: una secuencia de pasos de procesamiento. <strong>Colab</strong>: el entorno de cuadernos en el navegador de Google. <strong>Cuaderno / celda</strong>: el formato de archivo y sus bloques ejecutables.'},
      {q: 'Palabras de Git y trabajo en equipo', a: '<strong>Git</strong>: el programa de control de versiones en tu máquina. <strong>GitHub</strong>: la web que aloja repositorios. <strong>Repositorio (repo)</strong>: una carpeta de proyecto que Git sigue. <strong>Commit</strong>: un cambio guardado con un mensaje. <strong>Push / pull</strong>: enviar cambios arriba / traerlos abajo. <strong>Clonar</strong>: descargar un repositorio. <strong>Rama</strong>: una copia paralela para una tarea. <strong>Merge</strong>: volver a combinar una rama. <strong>Conflicto</strong>: cuando dos cambios tocan las mismas líneas. <strong>README</strong>: el archivo que describe el proyecto. <strong>Código abierto</strong>: código publicado para que cualquiera lo lea. <strong>Token</strong>: una clave secreta que autentica tu programa; trátalo como una contraseña. <strong>Intents</strong>: los permisos que solicita un bot de Discord. <strong>Agile</strong>: la filosofía de desarrollo flexible y colaborativo. <strong>Scrum</strong>: una forma concreta de practicarla. <strong>Sprint</strong>: un periodo fijo para un conjunto de tareas. <strong>Backlog</strong>: la lista de tareas priorizada. <strong>Retrospectiva</strong>: la revisión tras un sprint. <strong>Code review</strong>: leer el código de alguien y sugerir mejoras. <strong>Live Share</strong>: la extensión de VS Code para editar en común.'},
      {q: 'Palabras de Kodland', a: '<strong>La plataforma</strong>: donde viven las tareas, la teoría y las notas. <strong>Backoffice (BO)</strong>: donde verificas entregas y encuentras los enlaces de grupo. <strong>TS</strong>: asistente técnico, tu segundo par de manos. <strong>DST</strong>: Test de Habilidades Digitales, la evaluación práctica final. <strong>EduScrum</strong>: la adaptación de Scrum al aula que usa el curso. <strong>LiveCoding</strong>: construir código en común en pantalla. <strong>UMC</strong>: Usar–Modificar–Crear. <strong>Metacognición</strong>: pensar sobre cómo aprendes. <strong>Tarjeta de Creatividad</strong>: el formulario que sigue el proyecto de graduación de cada alumno. <strong>Test sumativo</strong>: el test de repaso dentro de una clase.'}
    ]
  },
  {
    cat: '🔐 Reglas de seguridad que nunca debes saltarte',
    items: [
      {q: 'Un alumno pregunta: “¿puedo subir mi token del bot a GitHub?”', a: 'La respuesta es siempre <strong>no</strong>. Un token de bot de Discord es una contraseña: quien lo tenga controla el bot por completo y puede usarlo para hacer spam o atacar servidores. El curso lo señala explícitamente en M1L3. En el código de clase escribimos el marcador literal <code>bot.run("YOUR_BOT_TOKEN")</code> y pegamos el token real solo en local. Di la regla en voz alta cada vez que se sube un proyecto.'},
      {q: 'Un alumno ya subió su token (o lo pegó en el chat del grupo). ¿Y ahora?', a: 'Trátalo como filtrado, porque lo está. Que vaya al Discord Developer Portal → Bot → <strong>Reset Token</strong> y pegue el nuevo solo en local. Recuérdale que <strong>borrar el archivo no sirve</strong>: Git guarda el historial para siempre, que es justo lo que enseñaste en M1L4. Regenerarlo es la única solución.'},
      {q: '¿Es seguro compartir pantalla con mi token a la vista?', a: 'No, y esto pilla a tutores, no solo a alumnos. Antes de compartir pantalla o grabar una clase, sustituye tu token por el marcador o guárdalo en un archivo aparte que nunca abras en cámara. Lo mismo vale para contraseñas de la plataforma y pestañas del Backoffice.'},
      {q: 'El proyecto del “Diario del Programador” guarda las contraseñas en texto plano. ¿Debo mencionarlo?', a: '<strong>Sí.</strong> El código de M4L2 guarda <code>password</code> directamente en la tabla <code>User</code> para que quien empieza vea funcionar el bucle de comparación. Es una simplificación didáctica, no un patrón. Di una frase: “Las aplicaciones reales nunca guardan la contraseña en sí, guardan una huella cifrada llamada hash. Hoy nos lo saltamos para que la lógica siga siendo visible”. Cuesta diez segundos y evita un hábito genuinamente malo.'},
      {q: '¿Qué no deben poner nunca los alumnos en un proyecto que publican?', a: 'Tokens y claves de API, direcciones de correo y contraseñas reales suyas o de otras personas, su domicilio o su centro de estudios, y fotos de otras personas sin permiso. Repositorio público significa público para siempre. Si un proyecto necesita un formulario de inicio de sesión, que usen datos de prueba obviamente falsos.'},
      {q: '¿Se puede hacer scraping? ¿Qué les digo a los alumnos?', a: 'Enseña los límites de M5L2 como parte de la habilidad, no como una nota al pie: comprueba el <strong>robots.txt</strong>, respeta los <strong>términos de uso y la política de privacidad</strong> del sitio, no redistribuyas contenido con <strong>derechos de autor</strong> y no recojas <strong>datos personales</strong> (RGPD). Hacemos scraping del sitio de noticias de prácticas precisamente porque es seguro hacerlo.'},
      {q: 'Un alumno quiere generar imágenes de una persona real, o hacer pasar imágenes de IA por reales.', a: 'Ese es exactamente el riesgo sobre el que se construye M6L2. Las imágenes generadas que imitan fotos reales difunden desinformación, y el contenido generado puede ser discriminatorio. Mantén los prompts en animales, objetos y personajes inventados —nunca personas reales e identificables— y haz que el debate “¿cómo detectarías una falsificación?” forme parte de la clase en lugar de ser una advertencia pegada al final.'}
    ]
  },
  {
    cat: '🐞 Errores que aparecen en todos los grupos',
    items: [
      {q: '“ModuleNotFoundError” justo después de un pip install que funcionó.', a: 'Casi siempre es un <strong>desajuste de intérprete</strong>: la librería fue a un Python y VS Code está ejecutando otro. Se arregla con <code>Shift+Ctrl+P</code> (<code>Cmd+Shift+P</code> en Mac) → <em>Python: Select Interpreter</em> → elige el entorno del proyecto. Dentro de un proyecto pipenv el comando de instalación debe ser <code>pipenv install &lt;librería&gt;</code>, no <code>pip install</code> a secas.'},
      {q: '“pip is not recognised” / no hay terminal en VS Code.', a: 'Abre uno desde <strong>Terminal → New Terminal</strong>. Si no encuentra <code>pip</code>, el intérprete de Python no se añadió al PATH durante la instalación: reinstalar marcando la casilla “Add Python to PATH” es más rápido que depurarlo en directo. M1L2 lo cubre; no dejes que la instalación de un alumno bloquee a toda la clase.'},
      {q: 'El bot aparece en línea pero ignora todos los mensajes.', a: 'Dos causas, en este orden. (1) Falta <code>intents.message_content = True</code> en el código. (2) El interruptor correspondiente de <strong>Message Content Intent</strong> está apagado en la página Bot del Discord Developer Portal. El código y el portal tienen que permitirlo los dos.'},
      {q: 'Comandos como $hello no hacen nada, aunque el bot responde a mensajes normales.', a: 'Están mezclando las dos clases. <code>Client</code> reacciona a <em>eventos</em> (<code>@client.event</code>); <code>Bot</code> reacciona a <em>comandos</em> (<code>@bot.command()</code>). M1L4 se construye sobre esa comparación. No se pueden usar las dos en un mismo programa, y el mensaje debe empezar exactamente por el <code>command_prefix</code> que hayan puesto.'},
      {q: '“FileNotFoundError” cuando el bot de memes intenta enviar una imagen.', a: 'Es un problema de ruta, no de código. La carpeta de imágenes debe estar dentro de la carpeta del proyecto, el nombre y la extensión deben coincidir exactamente (mayúsculas incluidas) y <code>os.listdir(\'images\')</code> es relativo al lugar desde el que se ejecuta el script. Que impriman la ruta antes de abrirla.'},
      {q: '“TypeError: \'&gt;\' not supported between instances of \'str\' and \'int\'”', a: '<code>input()</code> siempre devuelve una <strong>cadena</strong>. Necesitan <code>int(input(...))</code>. Es el mismo fallo escondido en el ejercicio de code review de M8L3, así que cuando aparezca de forma natural, nómbralo: luego lo detectarán solos en la clase de revisión.'},
      {q: 'La página de Flask no cambia por mucho que editen.', a: 'Comprueba tres cosas: <code>app.run(debug=True)</code> para que el servidor recargue, un refresco forzado en el navegador (Ctrl/Cmd+Shift+R) para saltarse la caché, y que hayan guardado el archivo. Confirma también que están editando la plantilla que Flask está renderizando de verdad.'},
      {q: '“jinja2.exceptions.TemplateNotFound”', a: 'Flask solo mira en una carpeta llamada exactamente <code>templates</code> (y <code>static</code> para CSS e imágenes), situada junto al archivo <code>.py</code> principal. Una errata o una carpeta anidada lo rompen. Que te enseñen el árbol de archivos en lugar del error.'},
      {q: '“sqlite3.OperationalError: no such table”', a: 'El archivo <code>.db</code> se creó antes de añadir la clase, o se añadió una columna después. En este curso la solución que se enseña en M4L2 es directa y está bien para quien empieza: borrar el <code>.db</code> antiguo y crearlo de nuevo desde la terminal. Avísales antes de que eso borra sus entradas.'},
      {q: 'Colab se ha olvidado de su modelo / imágenes / archivos.', a: 'Las sesiones de Colab son temporales: todo lo subido a la sesión desaparece al reiniciarse, y hay que volver a ejecutar todas las celdas en orden. Para una sesión más larga, enséñales a montar Google Drive (M6L1 lo sugiere para grupos más fuertes). Recuérdales que guarden una copia del cuaderno en su propio Drive.'},
      {q: '“Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”', a: 'Un choque de versiones de librería con el modelo exportado de Teachable Machine. En un proyecto pipenv: <code>pipenv uninstall tensorflow</code> y luego <code>pipenv install tensorflow==2.15</code> (funciona con Python 3.11). En Colab el curso fija <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> e importa <code>tf_keras</code>. Ten los comandos fijados listos para pegar; no depures versiones en directo.'},
      {q: 'pyttsx3 no dice nada, o speech_recognition da error a mitad de clase.', a: 'Comprueba el dispositivo de salida y, sobre todo, <strong>silencia tu micrófono de Zoom y vuelve a ejecutar</strong>: M7L3 lo señala explícitamente, porque Zoom se queda con el micrófono. En algunos sistemas el índice de voz de <code>voices[0].id</code> no existe; que prueben <code>voices[1]</code>.'},
      {q: 'Git se niega a hacer commit y menciona una identidad.', a: 'Ejecuta una vez por máquina, con los datos de la persona: <code>git config --global user.email "tu@ejemplo.com"</code> y <code>git config --global user.name "Tu Nombre"</code>. Está en las notas de M2L3.'},
      {q: 'El modelo de un alumno se equivoca en todo con total seguridad.', a: 'Es lo esperable, y una oportunidad didáctica. El clasificador solo conoce las clases que se le mostraron: forzará cualquier entrada dentro de una de ellas (M6L1). Arregla el <strong>dataset</strong>, no el código: más imágenes, más variedad y una imagen de prueba que el modelo no haya visto nunca.'}
    ]
  },
  {
    cat: '🙋 Momentos difíciles — qué decir de verdad',
    items: [
      {q: 'Un alumno pregunta algo que realmente no sé.', a: 'Por defecto: <strong>“Buena pregunta, no estoy seguro; vamos a averiguarlo. ¿Dónde miraríamos?”</strong> y hazlo de verdad en pantalla. Es la clase M1L4 sucediendo en vivo: nadie se sabe una librería de memoria, y encontrar la respuesta <em>es</em> la habilidad profesional. Si estás a mitad de un sprint y vas justo de tiempo, apárcala: “Quiero darte una respuesta como es debido; te contesto esta noche en el chat del grupo”. Y luego cúmplelo, sin falta. La única respuesta que te perjudica es una suposición dicha con seguridad, porque los alumnos la comprobarán durante la clase.'},
      {q: '¿Cómo digo “no lo sé” sin perder autoridad?', a: 'Dilo breve y pasa directamente a la acción: la frase que funciona es “no lo sé, vamos a averiguarlo”, no “lo siento, no se me da muy bien”. Aquí tu autoridad viene de dar una buena clase y de saber dónde buscar, no de la omnisciencia. Practica la frase en voz alta unas cuantas veces antes de tu primera clase para que salga con naturalidad y no como una disculpa.'},
      {q: 'Un alumno sabe claramente más que yo sobre algo.', a: 'Aprovéchalo. El curso te pide explícitamente que entregues la pantalla a los alumnos fuertes para dirigir una instalación, explicar una solución o dar una miniclase magistral. Dilo abiertamente —“en esto me llevas ventaja, ven y enséñanoslo”— y elogia el <em>explicar</em>. Un tutor que hace eso se lee como seguro, no como débil. Lo que sigue siendo tuyo es la clase: el ritmo, la estructura y asegurarte de que el resto no se quede atrás.'},
      {q: 'Mi propio código se rompe mientras hago LiveCoding delante de todos.', a: 'Es un regalo, y el método está hecho para eso: LiveCoding recomienda explícitamente cometer errores <em>a propósito</em>. Di “vale, vamos a leer qué nos está diciendo” y depúralo en voz alta. Los alumnos aprenden más viéndote diagnosticar con calma un error real que viendo una escritura impecable, y eso normaliza los errores como algo corriente y no vergonzoso.'},
      {q: 'Me estoy quedando sin tiempo y la etapa no está terminada.', a: 'Protege la forma, sacrifica el alcance. Pasa igualmente a la retrospectiva o a la reflexión, y di con claridad qué no llegaste a cubrir y cuándo lo retomarás. Nunca recortes la etapa de reflexión para terminar una tarea: la reflexión es donde la clase se consolida, y una tarea sin acabar es un resultado normal de un sprint.'},
      {q: 'Un alumno dice que el proyecto es aburrido o no sirve para nada.', a: 'Ve a la pregunta del público en lugar de defender la tarea: “¿quién usaría esto de verdad, y qué haría que el tuyo fuera distinto?”. Todos los proyectos del curso tienen un marco real y una versión abierta, así que “haz que resuelva tu problema para tu gente” siempre está disponible. La autonomía reengancha a un adolescente aburrido mucho más rápido que justificarse.'},
      {q: 'Un alumno no hizo los deberes y se ha quedado callado.', a: 'Los planes son tajantes: implícale igualmente y no seas negativo. Pregúntale qué <em>piensa</em>, no qué terminó. M1L3 incluso les da una salida airosa —“el perro se comió mis deberes”— para que puedan pasar el turno sin vergüenza y seguir en la sala.'},
      {q: 'Nadie responde cuando pregunto al grupo.', a: 'La pregunta era casi con seguridad demasiado grande. Redúcela hasta que se pueda responder en pocas palabras: no “¿cómo resolveríamos esto?”, sino “¿de qué tipo tiene que ser esta variable?”. Los planes de clase modelan preguntas estrechas constantemente. El silencio suele ser cuestión del tamaño de la pregunta, no de mala disposición.'}
    ]
  },
  {
    cat: '🚀 Cuando alguien va por delante del resto de la clase',
    items: [
      {q: 'Un alumno termina la tarea principal en diez minutos.', a: 'Todas las clases de este curso traen <strong>tareas adicionales</strong> (marcadas con ⭐️ o “Adic.”) justo para esto. Úsalas antes de inventar nada: las tareas de API de M2L1, los comandos mágicos de M5L1, la extensión de recorte con OpenCV de M6L3. Profundizan en el concepto de hoy en lugar de adelantarse al grupo.'},
      {q: '¿Cómo mantengo enganchado a alguien rápido sin abandonar al resto?', a: 'Dale un papel. El curso sugiere repetidamente que un alumno fuerte <strong>comparta pantalla y dirija la instalación o el live coding</strong> (M3L1, M6L3, M7L1). Explicar una solución la consolida, le mantiene ocupado con sentido y te compra tiempo con quienes están atascados. Elogia el explicar, no el terminar.'},
      {q: '¿Debo dejar que alguien avanzado se meta en el material de la clase siguiente?', a: 'Mejor profundidad que velocidad: desincroniza al grupo y crea huecos. Apúntale a la <strong>documentación de la librería</strong>: M1L4 existe para enseñar que leer documentación y adaptar ejemplos <em>es</em> la habilidad profesional. “Encuentra en la documentación un comando que no haya usado nadie y añádelo” gana a “empieza la clase seis”.'},
      {q: 'Un alumno dice que el proyecto es aburrido o demasiado fácil.', a: 'Dale la versión abierta. Todos los proyectos de este curso tienen un marco real —contraseñas, separación de residuos, adicción a la tecnología, consumo energético, seguridad vial, cambio climático—, así que “haz que resuelva tu problema para tu público” siempre está disponible. La autonomía reengancha a quien acaba rápido mucho mejor que más ejercicios.'},
      {q: 'Un alumno domina el debate y responde a todo.', a: 'Usa las estructuras que ya están en los planes: el juego de la “pelota” de M1L3, donde quien habla elige a la persona siguiente; el juego del experto “todos contra uno” de M6L1; y la regla de que el mismo alumno no puede responder dos veces seguidas en el tres en raya de M5L4. Deja que el formato reparta el tiempo de palabra para no tener que hacerlo tú.'}
    ]
  },
  {
    cat: '🐢 Cuando alguien se está quedando atrás',
    items: [
      {q: 'Un alumno está atascado y frustrándose.', a: '<strong>Encuentra primero el único problema que bloquea</strong>: suele ser una errata, un intérprete sin seleccionar o un intent que falta, no una incomprensión de toda la clase. Leed juntos el mensaje de error, arreglad esa única cosa y consíguele una victoria visible. La inercia importa más que cubrirlo todo.'},
      {q: 'Un alumno no puede seguir el ritmo de la construcción.', a: '<strong>Reduce su alcance.</strong> Una versión simple terminada gana a una ambiciosa sin acabar; las notas de M10L3 dicen exactamente eso del proyecto de graduación. Que clave lo esencial (el bot responde, la página carga, la entrada se guarda) y trate los extras como opcionales. Donde exista un proyecto de partida (el Basic Bot de la escuela en M7L1, el ZIP y las ramas del repositorio en M4), dáselo en lugar de dejar que la configuración se coma la clase.'},
      {q: 'Su entorno está roto y la clase está empezando.', a: 'No dejes que una máquina tenga secuestrada a la clase. Empieza con quienes están listos, pide al asistente técnico que ayude al resto y dale a quien está bloqueado un plan B que funcione: el Pipfile del repositorio de solución (M7L1), el dataset compartido (M6L2) o el CSV de la clase anterior (M5L3). Luego arregla el entorno durante la práctica o después de la clase.'},
      {q: 'Un alumno faltó a la clase anterior y está perdido.', a: 'Haz de puente con la etapa de repaso en vez de frenar al grupo: un resumen de dos minutos solo de lo que hoy hace falta, más un enlace al estado del proyecto que se perdió (la rama del repositorio, el ZIP, el cuaderno anterior). Ponle ponerse al día como deberes ligeros. La mayoría de los módulos abren además con un test que puedes usar como repaso.'},
      {q: 'Un alumno comete siempre el mismo error.', a: 'No lo arregles sin más: <strong>nombra el patrón</strong> y dale la frase para autocomprobarse: “<code>input()</code> me da texto, así que lo envuelvo en <code>int()</code>”, “el token nunca sale de mi máquina”, “si pip funcionó pero el import falló, revisa el intérprete”. Y que la próxima vez lo encuentre <em>él</em>. El reflejo de depuración vale más que cualquier arreglo puntual.'},
      {q: 'Un alumno no hizo los deberes y se ha quedado callado.', a: 'Los planes de clase son tajantes: <strong>implícale igualmente y no seas negativo.</strong> Pregúntale qué piensa, no qué terminó. M1L3 incluso les da una salida airosa (“el perro se comió mis deberes”) para que puedan pasar el turno sin vergüenza y seguir en la sala.'},
      {q: 'Un alumno está desanimado y quiere abandonar.', a: 'Empieza con un elogio concreto al esfuerzo —“ese fallo lo encontraste tú, y eso es exactamente lo que hacen los programadores”— y reduce el siguiente paso hasta que el éxito esté garantizado. Las notas de metacognición de M2L1 dicen lo mismo: una reacción de frustración es <em>información válida</em> sobre la estrategia elegida, no prueba de que no sepa programar. Dilo en voz alta.'}
    ]
  }
],
modules: [
  {
    id:1, emoji:'🚀', color:'#3776AB',
    title:'Introducción y Visión General del Curso',
    desc:'Qué es Python Pro, los proyectos que entregan los alumnos, los métodos de enseñanza que hay detrás, cómo se ve el éxito y cómo funciona esta formación.',
    obj:'Entender el cuadro completo antes de enseñar nada: qué se propone el curso Python Pro, sus diez módulos y cuarenta clases, los proyectos y la franja de edad, los métodos de enseñanza sobre los que se construye, cómo son un buen tutor y un buen alumno, y cómo está estructurado este programa de formación.',
    prep:'~45 minutos. Solo lectura: el trabajo práctico empieza en el Módulo 2.',
    sections:[
      {t:'🐍 Qué es este curso', cards:[
        {type:'text', h:'El itinerario avanzado de Python, construido en torno a proyectos reales', b:'Python Pro es el <strong>curso avanzado de Python</strong> de Kodland para chicos y chicas de <strong>13 a 17 años</strong>: el salto desde Python Basic. Los alumnos no se sientan a escuchar teoría; desde la primera clase construyen y publican programas que funcionan. A lo largo del curso asumen por turnos tres identidades profesionales —<strong>programador de automatización</strong>, <strong>desarrollador web</strong> y <strong>programador de IA</strong>— para que al final puedan elegir por sí mismos una dirección dentro del desarrollo en Python.'},
        {type:'hi', h:'Diez módulos, cuarenta clases, de 13 a 17 años', b:'El curso son <strong>10 módulos de 4 clases cada uno: 40 clases</strong>, para alumnos de <strong>13 a 17 años</strong>. Una clase en grupo dura <strong>90 minutos</strong>; la misma clase existe como plan <strong>individual de 50 minutos</strong>. Los módulos 1 y 2 construyen bots y el front-end, el 3 y el 4 aplicaciones web con Flask y bases de datos, el 5 y el 6 son el bloque de IA, el 7 integra la IA en los proyectos anteriores, el 8 y el 9 son oficio de ingeniería y tecnología de voz, y el 10 es una hackathon que desemboca en el proyecto de graduación.'},
        {type:'text', h:'Herramientas reales, desde la primera clase', b:'Los alumnos salen del entorno de pruebas del navegador casi de inmediato. Trabajan en <strong>VS Code</strong>, instalan librerías con <strong>pip</strong> y <strong>pipenv</strong>, publican en <strong>GitHub</strong>, registran aplicaciones en el <strong>Discord Developer Portal</strong>, ejecutan cuadernos en <strong>Google Colab</strong>, entrenan modelos con <strong>Google Teachable Machine</strong> y despliegan en <strong>PythonAnywhere</strong>. Tu propia soltura con esta cadena de herramientas es para lo que sirve esta formación.'},
        {type:'qa', h:'Qué entregan de verdad', items:[
          {k:'Bloque de automatización', v:'Un diccionario de jerga, un generador de contraseñas fuertes y bots de Discord: un bot de memes que lee una carpeta y un bot que ayuda a reducir residuos.'},
          {k:'Bloque web', v:'Una página sobre adicción a la tecnología, una web de datos curiosos en Flask, una calculadora de energía para casas inteligentes, un generador de memes, el “Diario del Programador” con base de datos e inicio de sesión, y una web de portafolio desplegada.'},
          {k:'Bloque de IA', v:'Scripts de sustitución de fondos de imagen, un raspador de noticias, un resumidor de PLN, un clasificador de imágenes entrenado, una participación en la competición de imagen real frente a IA y un detector de objetos para seguridad vial.'},
          {k:'Integración y oficio', v:'Un bot de Discord que ejecuta su propio modelo de visión, un traductor por voz, un bot parlante del tiempo y código limpio refactorizado.'},
          {k:'Cierre', v:'Un proyecto de graduación elegido por cada alumno, construido en formato hackathon, probado contra una lista de comprobación y presentado.'}
        ]}
      ]},
      {t:'🧭 La filosofía de enseñanza', cards:[
        {type:'good', txt:'La regla que aparece en casi todos los planes de clase: <strong>no escribas el código por los alumnos y no les des las respuestas.</strong> Haz preguntas que guíen, deja que piensen en voz alta, deja que se ayuden. Tu trabajo es desatascar, no resolver.'},
        {type:'text', h:'Cada módulo empieza con un problema real', b:'Los proyectos nunca son “haz una aplicación”. Se plantean como problemas que merece la pena resolver: <strong>ataques informáticos</strong> (el generador de contraseñas), <strong>contaminación y residuos</strong> (el eco-bot), <strong>adicción a la tecnología</strong> (las páginas web), la <strong>crisis energética</strong> (la calculadora), la <strong>seguridad vial</strong> (el detector), el <strong>cambio climático</strong> (la hackathon). Abre con el problema, no con la sintaxis: el código se convierte en un medio para un fin.'},
        {type:'text', h:'Experimentar y luego explicar', b:'Varias clases dan a los alumnos el código <em>antes</em> de la explicación, a propósito, y les piden que averigüen qué hace: el bot de Discord en M1L3, la plantilla Jinja en M3L2, los cuadernos del M5. Resiste la tentación de explicar pronto. Cinco minutos de “cambia algo y vuelve a ejecutarlo” producen mejores preguntas que cualquier exposición.'},
        {type:'hi', h:'La reflexión es una etapa, no un añadido', b:'Absolutamente todas las clases terminan con una etapa de <strong>reflexión de 10 a 15 minutos</strong>: qué logramos, qué fue lo más difícil, qué mejorarías, más los deberes. Está en el horario porque es donde el aprendizaje se consolida. El Módulo 15 de esta formación cubre las ocho técnicas de reflexión que ofrece el curso para que puedas ir alternándolas.'},
        {type:'tip', txt:'La motivación forma parte del trabajo. El curso te pide que elogies el esfuerzo concreto, que compartas vídeos motivadores en el chat del grupo tras las clases que marcan un hito y que celebres el final de cada módulo conectándolo con una carrera real. Muy poca gente termina un curso avanzado: dilo, y dilo en serio.'}
      ]},
      {t:'🎯 Cómo se ve el éxito', cards:[
        {type:'twocol', left:{h:'✅ Un buen tutor o tutora', items:['Tiene soltura suficiente con las herramientas como para centrarse del todo en el alumnado','Abre con el problema, no con la sintaxis','Nunca escribe el código por sus alumnos','Cumple los tiempos y sigue adelante cuando una etapa se alarga','Lee los errores en voz alta en lugar de arreglarlos en silencio','Hace cumplir las reglas de tokens y secretos sin excepción','Ajusta el alcance para quien va por delante o por detrás del grupo']}, right:{h:'🌟 Un buen alumno o alumna', items:['Entrega proyectos que funcionan y los publica en GitHub','Sabe explicar qué hace su código, no solo ejecutarlo','Encuentra respuestas en la documentación sin que se lo digan','Depura un problema sencillo con creciente independencia','Piensa en para quién es su proyecto','Da y recibe comentarios constructivos sobre código','Presenta un proyecto de graduación terminado del que se siente orgulloso']}},
        {type:'good', txt:'El éxito <strong>no</strong> es “haber cubierto todo el material”. Es un alumno seguro con un proyecto terminado que entiende y sobre el que sabe hablar. El curso lo dice claramente sobre el proyecto de graduación: anímales a terminarlo sin complicarlo de más y a dejar las mejoras para después.'}
      ]},
      {t:'🗂️ Cómo está estructurada esta formación', cards:[
        {type:'text', h:'Los módulos, en orden', b:'Esta formación tiene <strong>16 módulos</strong> en tres partes. <strong>Preparativos (1 a 4):</strong> esta visión general, las construcciones de Python que el curso usa pero nunca explica, cómo funciona una clase y un laboratorio práctico de configuración. <strong>El curso en sí (5 a 14):</strong> un módulo por cada módulo del curso, en orden —el Módulo 5 de la formación cubre el Módulo 1 del curso, y así sucesivamente— para que encuentres cualquier clase al instante. <strong>Impartición y evaluación (15 y 16):</strong> el oficio de enseñar más a fondo y luego una clase modelo para ver. Cada módulo abre con un breve <strong>panorama general → por qué importa → qué construyen los alumnos → qué debes dominar al 100%</strong> y después entra en detalle.'},
        {type:'hi', h:'La regla del 70% y la prueba final', b:'Debes recorrer los módulos <strong>en orden</strong>. Cada uno tiene un test corto y necesitas <strong>un 70% o más para desbloquear el siguiente módulo</strong>: no se puede saltar. Cuando todos los módulos estén completados, se desbloquea el <strong>Test de Habilidades Digitales (DST)</strong>. El orden de las preguntas y el de las respuestas se barajan en cada intento, así que repetir un test significa saberse la materia y no recordar posiciones.'},
        {type:'warn', txt:'Los tests solo comprueban que has <strong>leído y entendido</strong> un módulo. No pueden comprobar que sepas <em>hacerlo</em>, y en este curso no son lo mismo. Para eso está la lista <strong>✋ Antes de enseñar esto</strong> al principio de cada módulo: cosas que debes haber construido y ejecutado personalmente. Márcalas con honestidad. Aprobar el test del módulo de bases de datos sin haber construido nunca la aplicación con base de datos es exactamente la situación que se desmorona delante de una clase.'},
        {type:'tip', txt:'Dos cosas están siempre disponibles desde la parte superior de cualquier pantalla: las <strong>❓ preguntas frecuentes</strong> (un glosario, los errores que se encuentran los alumnos, las reglas de seguridad, qué decir cuando no sabes una respuesta y qué hacer cuando alguien va por delante o por detrás del grupo) y el <strong>cambio de tema visual</strong>. Usa las preguntas frecuentes como referencia rápida mientras preparas.'},
        {type:'text', h:'Cuánto lleva esto, más o menos', b:'Cada módulo lleva arriba una <strong>estimación de preparación</strong> que cubre la lectura más el trabajo práctico. En total la formación son unas <strong>30 a 40 horas</strong> si haces las listas prácticas como es debido, y el trabajo práctico es la mayor parte. Los módulos más pesados son el laboratorio de configuración, Flask y bases de datos. Una vez estés dando clase, calcula alrededor de <strong>1 o 2 horas de preparación por clase</strong>, más para las clases de LiveCoding y las de bases de datos del módulo 4, y menos para las guiadas por debate.'}
      ]}
    ],
    quiz:[
      {q:'¿Cómo está estructurado el curso Python Pro?', opts:['10 módulos de 4 clases cada uno — 40 clases, de 90 minutos en formato de grupo','4 módulos de 10 clases cada uno, de 45 minutos','Un único bloque continuo de clases sin módulos','20 clases de 60 minutos, todas individuales'], c:0, fb:'Python Pro son 10 módulos × 4 clases = 40 clases. Las clases en grupo duran 90 minutos; cada una tiene una variante individual de 50 minutos.'},
      {q:'¿Qué tres roles profesionales asumen los alumnos en el curso?', opts:['Programador de automatización, desarrollador web y programador de IA','Diseñador de videojuegos, animador y modelador 3D','Administrativo de datos, tester y jefe de proyecto','Desarrollador front-end, ingeniero DevOps y analista de seguridad'], c:0, fb:'M1L1 enmarca todo el curso en torno a tres roles —programador de automatización, desarrollador web y programador de IA— para que al final los alumnos puedan elegir una dirección.'},
      {q:'Un alumno está atascado con el generador de contraseñas. ¿Qué espera el curso que hagas?', opts:['Hacer preguntas que guíen y dejar que él y sus compañeros razonen la solución — no escribas el código por él','Escribir la solución en su editor para que la clase no se retrase','Enviarle el código terminado por el chat','Saltarte la tarea y pasar a la siguiente etapa'], c:0, fb:'“No escribas el código por los alumnos y no les des las respuestas” se repite a lo largo de los planes de clase. Tú desatascas; ellos resuelven.'},
      {q:'¿Por qué cada proyecto se presenta con un problema real como los ataques informáticos o la separación de residuos?', opts:['Para que el código se convierta en un medio para resolver algo que a los alumnos les importa, en vez de en un ejercicio','Porque la plataforma exige un tema para cada tarea','Para llenar tiempo antes de la etapa práctica','Porque los problemas son lo que evalúa el test'], c:0, fb:'Cada módulo abre con un problema genuino —contraseñas, contaminación, adicción a la tecnología, energía, seguridad vial, cambio climático— para que construyan algo que les importe.'},
      {q:'¿Dónde se sitúa la etapa de reflexión en una clase de Python Pro?', opts:['Es una etapa de 10 a 15 minutos, prevista en el horario, al final de absolutamente todas las clases','Ocurre solo al final de cada módulo','Es opcional y normalmente se salta','Sustituye a la etapa práctica cuando falta tiempo'], c:0, fb:'Todas las clases terminan con una etapa programada de reflexión y deberes: es donde el aprendizaje se consolida, no un extra opcional.'},
      {q:'¿Cómo llega una persona candidata al Test de Habilidades Digitales en esta formación?', opts:['Completando todos los módulos en orden con un 70% o más en cada test — el DST se desbloquea solo entonces','Pulsando un botón de “saltar al DST” disponible para todo el mundo','Aprobando el primer módulo','El DST está abierto desde el principio'], c:0, fb:'Los módulos son secuenciales y cada uno necesita un 70% para desbloquear el siguiente. El DST se abre solo cuando todos los módulos están completados.'},
      {q:'¿Qué define el curso como éxito para un alumno?', opts:['Un alumno seguro, con un proyecto terminado que entiende y sabe presentar','Un alumno que hizo todas las tareas independientemente de lo que funcionara','El que programa más rápido del grupo','El que memorizó más comandos de librerías'], c:0, fb:'Un proyecto terminado, entendido y presentable gana a uno ambicioso sin acabar: las notas del proyecto de graduación dicen exactamente eso.'}
    ]
  },
  {
    id:2, emoji:'🐍', color:'#4A9BD8',
    title:'El Python que Necesitas Antes',
    desc:'El Python que aparece a lo largo del curso pero nunca se explica en él: decoradores, async/await, clases y self, métodos dunder, lambda, anotaciones de tipo y *args, más una versión en lenguaje llano de cada uno para el alumnado.',
    obj:'Cerrar la distancia entre “sé lo básico de Python” y “sé explicar cada línea del código del curso”. Todas las construcciones que hay aquí aparecen en las clases que vas a dar, y el temario no se detiene a explicar ninguna. Necesitas dos cosas de cada una: una comprensión lo bastante sólida como para no ir de farol y una frase que puedas decirle a alguien de 14 años.',
    prep:'~2 o 3 horas. Escribe tú cada ejemplo en lugar de leerlo.',
    practical:{
      intro:'Este módulo es el único sitio donde leer de verdad no basta: estas construcciones solo encajan cuando las has ejecutado. Antes del test, trabaja todo esto en un archivo de pruebas:',
      items:[
        'Escribió un decorador propio, desde cero, y vio cómo envuelve una función',
        'Escribió y ejecutó una función <code>async def</code> con <code>await asyncio.sleep(1)</code> y vio por qué importa el bucle',
        'Definió una clase con <code>__init__</code> y <code>self</code>, creó dos objetos a partir de ella y les dio valores distintos',
        'Hizo que una clase heredara de otra y llamó al método de la clase madre',
        'Añadió un <code>__repr__</code> y vio qué cambia al imprimir el objeto',
        'Reescribió un pequeño bucle <code>for</code> como comprensión de lista, y una función de dos líneas como <code>lambda</code>',
        'Ejecutó una función que recibe <code>*args</code> e imprimió qué es <code>args</code> en realidad'
      ]
    },
    sections:[
      {t:'🧭 Por qué existe este módulo', cards:[
        {type:'brief',
          overview:'Siete construcciones de Python que aparecen constantemente en el código del curso y que él nunca explica: el <strong>decorador</strong> (<code>@bot.command()</code>, <code>@app.route()</code>), <strong>async/await</strong>, las <strong>clases</strong> con <code>self</code> y herencia, los <strong>métodos dunder</strong>, <strong>lambda</strong>, las <strong>anotaciones de tipo</strong> y <strong>*args</strong>.',
          why:'Todas las clases de Discord usan decoradores y <code>async</code>. Todas las clases de Flask usan decoradores. El módulo de bases de datos define clases que heredan. Alguien preguntará “¿para qué es la <code>@</code>?” en la clase M1L3 del curso —la tercera clase— y “no lo sé” es una respuesta que solo puedes dar una vez antes de que el grupo deje de preguntarte cosas.',
          learn:'Nada directamente: al alumnado nunca se le enseña esto de forma explícita. El temario lo aplaza abiertamente: “Cualquier librería consta de clases. Hablaremos de qué son y por qué las necesitamos en otras clases”. En la práctica, la explicación eres <em>tú</em>.',
          confident:'Qué le hace un decorador a la función que tiene debajo; por qué el código de un bot necesita <code>async</code>/<code>await</code>; a qué se refiere <code>self</code>; qué significan los paréntesis de <code>class Card(db.Model)</code>; y una versión de una frase, para el alumnado, de cada uno.'
        },
        {type:'good', txt:'No necesitas dominar esto a nivel profesional. Necesitas no ir de farol. El listón es: sabes explicarlo de forma sencilla, sabes responder a una repregunta y conoces el límite honesto de tus conocimientos.'}
      ]},
      {t:'🎀 Decoradores — el símbolo @', cards:[
        {type:'text', h:'Qué es en realidad', b:'Un <strong>decorador</strong> es una función que toma otra función, le envuelve un comportamiento extra y la devuelve. La línea con <code>@</code> es una abreviatura: escribir <code>@mi_decorador</code> encima de <code>def saludar()</code> significa “toma <code>saludar</code>, pásala por <code>mi_decorador</code> y deja que el resultado sea lo que ahora significa <code>saludar</code>”.'},
        {type:'code', lbl:'un decorador que puedes escribir tú en diez líneas', code:`<span class="ck">def</span> <span class="cf">shout</span>(func):              <span class="cc"># recibe una función...</span>
    <span class="ck">def</span> <span class="cf">wrapper</span>():
        result = <span class="cf">func</span>()          <span class="cc"># ...ejecuta la original...</span>
        <span class="ck">return</span> result.<span class="cf">upper</span>() + <span class="cs">"!!!"</span>   <span class="cc"># ...y le añade algo</span>
    <span class="ck">return</span> wrapper             <span class="cc"># ...y devuelve la nueva versión</span>

<span class="cd">@shout</span>
<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="ck">return</span> <span class="cs">"hello"</span>

<span class="cf">print</span>(<span class="cf">greet</span>())               <span class="cc"># HELLO!!!</span>

<span class="cc"># @shout encima de greet() es exactamente lo mismo que escribir:</span>
<span class="cc">#   greet = shout(greet)</span>`},
        {type:'text', h:'Qué significa eso para el código del curso', b:'En el curso nunca escribes un decorador: solo <em>usas</em> los que dan las librerías. <code>@bot.command()</code> significa “discord.py, registra la función de abajo como un comando que la gente puede escribir”. <code>@app.route("/")</code> significa “Flask, ejecuta la función de abajo cuando alguien visite esta dirección”. En los dos casos el decorador es cómo <strong>tu función se entrega a la librería</strong>, para que la librería pueda llamarla luego cuando llegue el momento. Tú nunca llamas a esas funciones: ese es justo el sentido, y es la parte que al alumnado le resulta rara.'},
        {type:'hi', h:'La frase para el alumnado', b:'“La línea con <code>@</code> es una etiqueta que le pegas a una función para que la librería sepa <em>para qué</em> sirve. <code>@app.route("/")</code> es una etiqueta que dice ‘ejecuta esta cuando alguien abra la página de inicio’. Tú nunca la llamas: la llama Flask por ti cuando alguien entra.” Para quien sea mayor o más despierto puedes añadir: es una función que envuelve a otra función.'},
        {type:'warn', txt:'Una diferencia que conviene conocer para no parecer inconsistente: <code>@bot.event</code> no lleva paréntesis y <code>@bot.command()</code> sí. Las dos formas son correctas tal como aparecen en el código del curso. La que lleva paréntesis es una <em>fábrica</em> de decoradores: puede recibir opciones como <code>@bot.command(name="pw")</code>, así que hay que llamarla primero para producir el decorador real. Si alguien pregunta, “esa puede recibir ajustes, así que necesita sus propios paréntesis” es una respuesta cierta y suficiente.'}
      ]},
      {t:'⏳ async y await', cards:[
        {type:'text', h:'El problema que resuelve', b:'Un bot de Discord se pasa casi todo el tiempo <strong>esperando</strong>: un mensaje, la confirmación de un envío, la respuesta de una API. La espera normal de Python bloquea todo: mientras una línea espera no puede ocurrir nada más, así que el bot estaría sordo mientras responde a un solo mensaje. <code>async</code> permite que una función se pause en un punto de espera y deje que otro trabajo avance mientras tanto.'},
        {type:'qa', h:'Las tres palabras, en términos llanos', items:[
          {k:'async def', v:'Declara una función que <em>puede pausarse</em>. Llamarla no la ejecuta: produce algo que el bucle de eventos ejecutará.'},
          {k:'await', v:'“Párate aquí hasta que esto termine, y deja que ocurran otras cosas mientras esperamos.” Solo se puede usar dentro de un <code>async def</code>.'},
          {k:'El bucle de eventos', v:'El gestor que mantiene en marcha todas las funciones pausadas. En el curso, discord.py lo arranca por ti dentro de <code>bot.run(...)</code>, y por eso no hay que configurar nada.'}
        ]},
        {type:'code', lbl:'por qué todos los comandos de bot del curso tienen esta forma', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):                <span class="cc"># puede pausarse</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Hi!"</span>)            <span class="cc"># pausa hasta que Discord confirme</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Still here!"</span>)    <span class="cc"># y luego sigue</span>

<span class="cc"># Si olvidas el await no se envía nada: sale un aviso de que una</span>
<span class="cc"># "coroutine was never awaited". Es el fallo nº1 de async del alumnado.</span>`},
        {type:'warn', txt:'El fallo que el alumnado va a producir de verdad: escribir <code>ctx.send("Hi")</code> sin <code>await</code>. No aparece ningún mensaje y la consola menciona una corrutina que nunca se esperó. Aprende a reconocer ese mensaje: significa “creaste el trabajo pero nunca lo dejaste ejecutarse”. Ten en cuenta además que las funciones de voz y de API del curso <em>no</em> son async, así que un comando de bot mezcla llamadas con await (Discord) y llamadas normales (<code>speak()</code>, <code>requests.get()</code>).'},
        {type:'hi', h:'La frase para el alumnado', b:'“<code>async</code> significa que esta función puede esperar sin congelar el bot entero, y <code>await</code> marca el punto donde espera. Piensa en un camarero que toma la comanda de otra mesa mientras la cocina prepara el plato, en vez de quedarse quieto hasta que la comida esté lista.”'},
        {type:'good', txt:'Este es el límite honesto de lo que necesitas. <strong>No</strong> necesitas entender las corrutinas, las tripas del bucle de eventos ni <code>asyncio.gather</code>. Si alguien va más allá de “espera sin congelar”, esa es una pregunta genuinamente avanzada: dilo, di que es una gran pregunta y buscadlo juntos. Eso modela el hábito de documentación de M1L4 en lugar de restarte credibilidad.'}
      ]},
      {t:'🏗️ Clases, self y herencia', cards:[
        {type:'text', h:'La parte que te da el temario', b:'El curso dice: en Python todo es un objeto, y las clases son los <strong>planos</strong> a partir de los cuales se crean los objetos, más la excelente observación de que <strong>Flask es una clase</strong> que llevan usando todo el tiempo. Ese planteamiento es correcto, y es donde se detiene la clase M4L1 del curso. Lo que sigue es lo que necesitas más allá de eso.'},
        {type:'code', lbl:'una clase, un objeto y qué es self', code:`<span class="ck">class</span> <span class="ct2">Dog</span>:
    <span class="ck">def</span> <span class="cf">__init__</span>(self, name):    <span class="cc"># se ejecuta al crear uno</span>
        self.name = name         <span class="cc"># guárdalo EN ESTE objeto</span>

    <span class="ck">def</span> <span class="cf">speak</span>(self):
        <span class="ck">return</span> <span class="cs">f"{self.name} says woof"</span>

rex = <span class="ct2">Dog</span>(<span class="cs">"Rex"</span>)               <span class="cc"># dos objetos...</span>
bella = <span class="ct2">Dog</span>(<span class="cs">"Bella"</span>)            <span class="cc"># ...de un mismo plano</span>

<span class="cf">print</span>(rex.<span class="cf">speak</span>())             <span class="cc"># Rex says woof</span>
<span class="cf">print</span>(bella.<span class="cf">speak</span>())           <span class="cc"># Bella says woof</span>`},
        {type:'text', h:'self, en una idea', b:'<code>self</code> es <strong>“el objeto concreto sobre el que se llamó a este método”</strong>. Un plano, muchos objetos, cada uno con sus propios datos: <code>self</code> es cómo un método sabe con cuál está trabajando. Es el primer parámetro de todos los métodos y Python lo rellena por ti, y por eso escribes <code>rex.speak()</code> sin nada entre paréntesis pero <code>def speak(self)</code> dentro de la clase.'},
        {type:'text', h:'Herencia — los paréntesis de class Card(db.Model)', b:'Escribir <code>class Card(db.Model)</code> significa “<strong>Card es un tipo de db.Model y recibe gratis todo lo que db.Model sabe hacer</strong>”. Por eso <code>Card</code> tiene de repente <code>.query</code>, y por eso SQLAlchemy sabe convertirla en una tabla de base de datos: nada de eso es código que nadie escribiera en la clase. El mismo patrón en todas partes: <code>class User(db.Model)</code> en M4L2 hereda las mismas capacidades.'},
        {type:'hi', h:'Las frases para el alumnado', b:'Para las clases: “Una clase es un molde de galletas y los objetos son las galletas: una forma, muchas galletas, cada una con su decoración.” Para <code>self</code>: “<code>self</code> significa <em>esta en concreto</em>: es cómo la receta sabe de qué galleta está hablando.” Para la herencia: “Los paréntesis significan ‘esto es un tipo de aquello y hereda todo lo que sabe hacer’, como que un caniche es un tipo de perro y ya sabe ladrar sin que se lo enseñen.”'},
        {type:'tip', txt:'No vas a dar una clase formal de programación orientada a objetos: el temario mantiene las clases ligeras y prácticas a propósito. Tu trabajo es más estrecho: cuando alguien pregunte por qué <code>class Card(db.Model)</code> lleva algo entre paréntesis, o qué es <code>self</code>, tú tienes una respuesta de verdad. Esas dos son las preguntas que se hacen realmente.'}
      ]},
      {t:'✨ Métodos dunder, lambda, anotaciones de tipo y *args', cards:[
        {type:'qa', h:'Métodos dunder (“doble guion bajo”)', items:[
          {k:'Qué son', v:'Métodos con dos guiones bajos a cada lado. Python los llama <em>por</em> ti en momentos concretos, en lugar de llamarlos tú por su nombre.'},
          {k:'__init__', v:'Se ejecuta al crear un objeto. “Prepara este.”'},
          {k:'__repr__', v:'Decide qué aspecto tiene el objeto al imprimirlo. Eso es todo lo que hace <code>return f\'&lt;Card {self.id}&gt;\'</code> en M4L1: hace legible la salida de depuración en lugar de mostrar una dirección de memoria.'},
          {k:'__name__', v:'No es un método, sino una variable con el nombre del archivo actual, o la cadena <code>"__main__"</code> si es el archivo que ejecutaste. <code>Flask(__name__)</code> es Flask preguntando “¿dónde estoy, para encontrar tu carpeta de plantillas?”.'},
          {k:'if __name__ == "__main__":', v:'“Haz esto solo si este archivo se ejecutó directamente, no si lo importó otro archivo.” Por eso importar <code>bot_logic.py</code> en M1L3 no arranca nada sin querer.'}
        ]},
        {type:'code', lbl:'lambda, anotaciones de tipo y *args — los tres más pequeños', code:`<span class="cc"># lambda: una función diminuta y sin nombre, escrita en línea</span>
<span class="ck">lambda</span> x: x[<span class="cn">1</span>]        <span class="cc"># igual que: def f(x): return x[1]</span>

<span class="cc"># En M5L3 le dice a sorted() POR QUÉ parte ordenar: el elemento 1, la puntuación:</span>
<span class="cc">#   sorted(scores.items(), key=lambda x: x[1], reverse=True)</span>

<span class="cc"># anotaciones de tipo: notas para humanos. Python NO las hace cumplir.</span>
<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:   <span class="cc"># recibe una cadena, devuelve una cadena</span>
    <span class="ck">return</span> <span class="cs">"sunny"</span>

<span class="cc"># *args: "cualquier número de argumentos posicionales", reunidos en una tupla</span>
<span class="ck">def</span> <span class="cf">total</span>(*prices):
    <span class="cf">print</span>(prices)          <span class="cc"># (100, 200, 300) — es solo una tupla</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

<span class="cf">total</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>)        <span class="cc"># funciona con cualquier cantidad</span>`},
        {type:'hi', h:'Las frases para el alumnado', b:'<strong>lambda:</strong> “Una minifunción de usar y tirar que escribes en una línea cuando no merece la pena ponerle nombre.” <strong>Anotaciones de tipo:</strong> “Notas que dicen qué entra y qué sale. Python no las comprueba: son para quien lea el código, incluido tú dentro de un mes.” <strong>*args:</strong> “El asterisco significa ‘tantos como quieras’: llegan como una lista que puedes sumar.” <strong>__repr__:</strong> “Decide qué se muestra al imprimir el objeto, para que veas algo útil en vez de un galimatías.”'},
        {type:'good', txt:'Las anotaciones de tipo merecen algo de entusiasmo cuando llegues a la clase de código limpio. Son lo único de esta lista que trata puramente de ser amable con quien lea después, que es exactamente el argumento de esa clase entera.'}
      ]}
    ],
    quiz:[
      {q:'Un alumno señala @app.route("/") y pregunta qué hace la @. ¿Cuál es tu respuesta?', opts:['Entrega la función de abajo a Flask como un trabajo etiquetado, para que Flask la ejecute cuando alguien visite esa dirección — tú nunca la llamas','Marca la función como privada para que el alumnado no pueda cambiarla','Es un comentario que recuerda a qué página corresponde la función','Importa la ruta desde la librería Flask'], c:0, fb:'Un decorador toma la función que tiene debajo y se la entrega a la librería con un comportamiento extra añadido. Tú nunca llamas a esas funciones: las llama la librería cuando llega el momento.'},
      {q:'Escribir @shout encima de def greet() equivale a qué línea de Python normal?', opts:['greet = shout(greet)','shout = greet()','greet(shout)','import shout from greet'], c:0, fb:'Eso es precisamente lo que abrevia la sintaxis @: pasar la función por el decorador y dejar que el resultado sea el nuevo significado del nombre.'},
      {q:'¿Por qué todos los comandos de Discord del curso se escriben como async def?', opts:['Porque el bot se pasa casi todo el tiempo esperando, y async le permite pausarse en un punto de espera en lugar de congelar todo lo demás','Porque los comandos de Discord deben ejecutarse más rápido que las funciones normales','Porque async es obligatorio en cualquier función que reciba argumentos','Porque hace que el bot atienda más servidores a la vez'], c:0, fb:'Un bot está casi siempre esperando: mensajes, confirmaciones, APIs. async permite que una función se pause y deje que otro trabajo continúe mientras espera.'},
      {q:'Un alumno escribe ctx.send("Hi") sin await y no aparece nada. ¿Qué ha pasado?', opts:['Creó el trabajo pero nunca lo dejó ejecutarse — la consola mencionará una corrutina que nunca se esperó','El mensaje se envió al canal equivocado','Su token del bot ha caducado','send() necesita la clase Client en lugar de Bot'], c:0, fb:'Es el fallo de async más común del alumnado. Reconocer el mensaje de “coroutine was never awaited” es la forma más rápida de diagnosticarlo.'},
      {q:'¿A qué se refiere self dentro del método de una clase?', opts:['Al objeto concreto sobre el que se llamó al método — es cómo el método sabe los datos de qué objeto usar','A la clase en sí, y no a ningún objeto creado a partir de ella','Al archivo en el que está escrita la clase','A la clase madre de la que hereda'], c:0, fb:'Un mismo plano puede producir muchos objetos, cada uno con sus datos. self es cómo un método sabe con cuál trabaja, y Python lo rellena automáticamente.'},
      {q:'¿Qué significan los paréntesis de class Card(db.Model)?', opts:['Card es un tipo de db.Model y hereda todo lo que sabe hacer — por eso de repente tiene .query y puede convertirse en una tabla','db.Model se pasa como primer dato','La clase solo funciona mientras db.Model esté importado','Renombra la clase a db.Model internamente'], c:0, fb:'Herencia. Nada de la maquinaria de consultas ni del mapeo de tablas está escrito en la clase: Card lo recibe todo gratis de db.Model.'},
      {q:'¿Para qué sirve __repr__?', opts:['Decide qué aspecto tiene el objeto al imprimirlo, para que la salida de depuración sea legible en lugar de una dirección de memoria','Se ejecuta al crear el objeto y prepara sus datos','Elimina el objeto de la base de datos','Devuelve la posición del objeto en la tabla'], c:0, fb:'__init__ prepara un objeto; __repr__ decide cómo se ve al imprimirlo. En M4L1 es lo que hace que salga <Card 3> en lugar de un galimatías.'},
      {q:'En sorted(scores.items(), key=lambda x: x[1], reverse=True), ¿qué hace la lambda?', opts:['Actúa como una función diminuta sin nombre que le dice a sorted() que ordene por el elemento 1 — la puntuación','Invierte cada par antes de ordenar','Elimina las entradas cuya puntuación es cero','Convierte el diccionario en una lista'], c:0, fb:'Una lambda es una función sin nombre de una línea. Aquí le dice a sorted() qué parte de cada par comparar: el elemento 1, la puntuación de la frase.'},
      {q:'¿Qué hacen realmente en tiempo de ejecución las anotaciones de tipo como (city: str) -> str?', opts:['Nada — Python no las hace cumplir; documentan qué entra y qué sale para quien lea el código','Convierten el argumento a cadena automáticamente','Lanzan un error si se pasa el tipo equivocado','Hacen que la función se ejecute más rápido'], c:0, fb:'Son documentación para personas. Python no las comprueba, y conviene decirlo con claridad para que nadie se apoye en ellas para validar.'},
      {q:'Un alumno espabilado va mucho más allá de “async significa que espera sin congelar” y pregunta cómo planifica las corrutinas el bucle de eventos. ¿Cuál es la jugada correcta?', opts:['Decir que es una pregunta genuinamente avanzada, que necesitarías consultarlo, y consultarlo juntos','Dar una respuesta segura a ojo para que el grupo siga confiando en ti','Decirle que está fuera del curso y seguir adelante','Redirigirle a una tarea adicional en lugar de responder'], c:0, fb:'Este es el límite honesto de lo que necesitas, y consultarlo juntos modela exactamente el hábito de documentación que M1L4 quiere enseñar. Adivinar es la única opción que sí te cuesta credibilidad.'}
    ]
  },
  {
    id:3, emoji:'🗺️', color:'#2FA37C',
    title:'Cómo Funciona una Clase de Python Pro',
    desc:'La forma que sigue toda clase, los cinco métodos de enseñanza que los planes dan por sabidos y la disciplina de tiempos que decide si una clase funciona.',
    obj:'Aprender la mecánica de una clase antes de aprender diez módulos de contenido. Todos los planes de clase nombran un método al principio y dan por hecho que sabes qué significa; este módulo se asegura de que así sea, para que “esta clase funciona con el método Usar–Modificar–Crear” sea una instrucción y no un acertijo.',
    prep:'~1 hora.',
    practical:{
      intro:'Antes del test, oriéntate en los materiales reales:',
      items:[
        'Leyó un plan de clase completo del PDF del temario de principio a fin, incluida su tabla de etapas',
        'Identificó en ese plan: el briefing, el problema, los objetivos, la teoría, la práctica y la reflexión',
        'Encontró la nota del principio del plan que nombra el método de enseñanza que usa',
        'Averiguó qué tendría que dejar fuera la versión individual de 50 minutos de esa clase'
      ]
    },
    sections:[
      {t:'🧭 Por qué esto va antes que el contenido', cards:[
        {type:'brief',
          overview:'Cada una de las 40 clases comparte un esqueleto —<strong>briefing → repaso de deberes → el problema → los objetivos → teoría → práctica → reflexión</strong>— y se apoya en cinco métodos con nombre propio: <strong>EduScrum</strong>, <strong>LiveCoding</strong>, <strong>Usar–Modificar–Crear</strong>, <strong>metacognición</strong> y <strong>gamificación</strong>.',
          why:'Los métodos empiezan a usarse en la <em>segunda clase del curso</em>. Si te encuentras con “esta sesión está diseñada en torno al sistema Scrum” sin saber qué significa, darás la clase como una cualquiera y la estructura de la que depende desaparecerá en silencio.',
          learn:'Nada directamente, pero el alumnado lo nota todo. El ritmo de sprint, los errores deliberados, los cinco minutos de experimentación antes de la explicación: eso es lo que hace que el curso se sienta distinto del colegio.',
          confident:'El esqueleto de siete partes; qué significa en la práctica cada uno de los cinco nombres de método; y qué hacer cuando te retrasas respecto al horario.'
        }
      ]},
      {t:'🕐 El esqueleto', cards:[
        {type:'text', h:'Las siete partes, en orden', b:'<strong>1. Briefing y saludos:</strong> comprueba micrófonos y cámaras, pasa lista dentro de una conversación en lugar de como una lista. <strong>2. Repaso de deberes:</strong> participa todo el mundo, incluidos quienes no los hicieron. <strong>3. El problema:</strong> el gancho del mundo real. <strong>4. Los objetivos:</strong> qué produce la clase de hoy. <strong>5. Teoría:</strong> corta, siempre. <strong>6. Práctica:</strong> el grueso de la clase. <strong>7. Reflexión y deberes:</strong> de 10 a 15 minutos, previstos en el horario.'},
        {type:'text', h:'Lee la tabla de etapas antes que nada', b:'Todos los planes de clase del PDF empiezan con una tabla que da a cada etapa una <strong>duración y una hora de inicio</strong>, más una variante individual de 50 minutos. Esa tabla es la columna vertebral de la clase. Léela y ten claro dónde están tus dos anclas innegociables: la práctica debe recibir su tiempo y la reflexión no se puede sacrificar.'},
        {type:'warn', txt:'La forma más habitual de que una clase de Python Pro falle es que una <strong>etapa temprana se alargue</strong>. Los planes lo advierten una y otra vez: no dejes que la teoría se estire, no te pases del tiempo en la configuración del entorno, no prolongues el debate. Vigílalo en ti: la etapa de teoría da seguridad al enseñar, y justo por eso se expande.'},
        {type:'good', txt:'Usa cronómetros visibles, sin parar. Los planes los piden en presentaciones de un minuto, lluvias de ideas de cinco minutos, búsquedas de código de dos minutos, rondas de entrenamiento de siete minutos. Un cronómetro en pantalla se encarga de la disciplina, así que tú sigues siendo quien ayuda y no quien mete prisa.'}
      ]},
      {t:'🎓 Los cinco métodos, por su nombre', cards:[
        {type:'qa', h:'Qué significa cada nombre cuando lo ves al principio de un plan', items:[
          {k:'Scrum / EduScrum', v:'La clase se divide en <strong>sprints</strong> con límites de tiempo estrictos. Cada uno abre con un debate corto y cierra con dos preguntas fijas: “¿logramos de verdad el resultado?” y “¿cómo nos acerca esto a resolver el problema principal?”. Las versiones más completas añaden una retrospectiva. <em>Se usa por primera vez en la clase M1L2 del curso: la segunda clase.</em>'},
          {k:'LiveCoding', v:'Construyes el código <strong>junto con el alumnado</strong>, compartiendo pantalla, narrando decisiones y cometiendo errores a propósito para que los pillen. <em>Se usa en las clases de bases de datos.</em>'},
          {k:'Usar–Modificar–Crear', v:'El alumnado primero <strong>usa</strong> código que funciona, luego lo <strong>modifica</strong> mientras tú explicas, y solo entonces <strong>crea</strong> el suyo. Resiste la tentación de explicar pronto. <em>Se usa en el primer bot de Discord y en el modelo de Keras.</em>'},
          {k:'Metacognición', v:'Cinco paradas programadas en las que el alumnado piensa sobre <em>cómo</em> está aprendiendo, no sobre qué. <em>Se usa en la clase M2L1 del curso.</em>'},
          {k:'Gamificación', v:'Teoría servida como juego en lugar de como exposición: equipos de concurso, juegos de experto, búsquedas de código, competiciones de precisión. No es relleno; <em>es</em> el método de entrega.'}
        ]},
        {type:'text', h:'Cuando te retrasas', b:'La instrucción es explícita y conviene interiorizarla ya: en una clase de EduScrum, si vas retrasado, <strong>pasa igualmente a la retrospectiva</strong> y comentad qué salió mal. Una clase completa con tareas sin acabar gana a una clase incompleta. La misma lógica vale para todo: protege la forma, sacrifica el alcance.'},
        {type:'tip', txt:'Cuando un plan nombra un método, te está diciendo que la clase no funcionará de otra manera. Una clase de Usar–Modificar–Crear dada como exposición, o una de EduScrum sin control de tiempos, produce una etapa que se alarga y un grupo desenganchado. Lee primero la nota del principio del plan, siempre.'}
      ]},
      {t:'🧰 Las herramientas y las dos reglas de oro', cards:[
        {type:'qa', h:'Con qué das una clase', items:[
          {k:'Zoom / Classroom', v:'La clase en sí, más las salas de trabajo, las herramientas de anotación para LiveCoding y la pizarra compartida.'},
          {k:'La plataforma', v:'Tareas, teoría, ejemplos de código, chats, notas. Casi todas las etapas dicen “ve a la tarea llamada…”.'},
          {k:'Backoffice (BO)', v:'Verificar que las tareas se entregaron de verdad; el enlace del chat del grupo.'},
          {k:'Chat del grupo', v:'Apoyo entre clases, enlaces a repositorios, memes.'},
          {k:'Herramientas de test y pizarras', v:'Wayground / Quizizz, Tally y Miro o equivalente para lluvias de ideas.'},
          {k:'Asistente técnico (TS)', v:'Tu segundo par de manos para instalaciones y alumnos bloqueados. Úsalo.'}
        ]},
        {type:'good', txt:'<strong>Regla uno: nunca escribas el código de un alumno.</strong> Haz preguntas que guíen, deja que piensen en voz alta, deja que se ayuden. Aparece en casi todos los planes y es el comportamiento que más distingue aquí a un buen tutor.'},
        {type:'good', txt:'<strong>Regla dos: primero la teoría, después el código.</strong> Di qué hace una línea y luego escribidla juntos. Quien empieza y cae de golpe dentro de un script se pierde: el concepto tiene que asentar antes que la sintaxis.'},
        {type:'tip', txt:'El Módulo 15 cubre el resto del oficio de dar clase: diferenciación, evaluación, gestión del aula, las técnicas de reflexión y qué decir cuando no sabes una respuesta. Vuelve a él cuando tengas los módulos de contenido bien asentados; entonces le sacarás más partido.'}
      ]}
    ],
    quiz:[
      {q:'¿Cuáles son las siete partes de una clase de Python Pro, en orden?', opts:['Briefing → repaso de deberes → el problema → los objetivos → teoría → práctica → reflexión y deberes','Teoría → práctica → test → reflexión → deberes → objetivos → briefing','Objetivos → teoría → repaso de deberes → práctica → briefing → reflexión → test','Briefing → teoría → test → práctica → deberes → objetivos → reflexión'], c:0, fb:'Casi todas las clases del curso siguen este esqueleto, y la tabla de etapas del plan da a cada parte una duración y una hora de inicio.'},
      {q:'Un plan de clase empieza con “esta sesión está diseñada en torno al sistema Scrum”. ¿Qué te dice eso?', opts:['La clase se divide en sprints con tiempo limitado, cada uno abriendo con un debate y cerrando con las dos preguntas fijas de balance','Que deberías mencionar Scrum durante la etapa de teoría','Que al alumnado se le evaluará en equipo y no individualmente','Que la clase no tiene etapa práctica'], c:0, fb:'Es una instrucción sobre estructura, no sobre el tema. Dala como una clase corriente y el ritmo de sprint del que depende el plan desaparece.'},
      {q:'En una clase de Usar–Modificar–Crear, ¿a qué tienes que resistirte?', opts:['A explicar el código antes de que el alumnado lo haya ejecutado y experimentado por su cuenta','A dejar que cambien el código de ejemplo','A darles código que funcione','A permitir que trabajen por parejas'], c:0, fb:'Usar y modificar van primero, en ese orden. Explicar pronto elimina la experimentación que produce las buenas preguntas.'},
      {q:'Vas retrasado en una clase de EduScrum y con tareas sin acabar. ¿Qué haces?', opts:['Pasar igualmente a la retrospectiva y comentar qué salió mal — protege la forma, sacrifica el alcance','Alargar el sprint hasta terminar las tareas','Saltarte la retrospectiva y dejar el resto como deberes','Darles el código de la solución para que se pongan al día'], c:0, fb:'Una clase completa con tareas sin acabar gana a una clase incompleta. Los planes lo dicen directamente.'},
      {q:'¿Qué etapa tiene más probabilidades de alargarse, y por qué es peligroso?', opts:['La teoría — da seguridad al enseñar, así que se expande y se come el tiempo de práctica','La reflexión — al alumnado le gusta y sigue hablando','El briefing — pasar lista lleva más de lo previsto','La práctica — el alumnado siempre necesita más tiempo'], c:0, fb:'Los planes advierten repetidamente de no dejar que la teoría se estire. La práctica y la reflexión son las dos cosas que deben conservar su tiempo.'},
      {q:'¿Cuáles son las dos reglas de oro que aparecen en casi todos los planes de clase?', opts:['Nunca escribas el código de un alumno, y explica la teoría antes de escribir el código','Termina siempre todas las tareas, y no dejes que nadie se quede atrás','Mantén la cámara encendida, y empieza siempre con un test','Sigue el plan al pie de la letra, y no improvises nunca'], c:0, fb:'“No escribas el código por los alumnos” y “explica primero la teoría y luego escribid el código juntos” son las dos instrucciones más repetidas del temario.'},
      {q:'¿Por qué este módulo va antes que los diez módulos de contenido?', opts:['Porque los métodos de enseñanza empiezan a usarse en la segunda clase del curso, así que necesitas el vocabulario antes de encontrártelo','Porque es el módulo más fácil y da confianza','Porque la plataforma exige completar antes la metodología','Porque los módulos de contenido no se entienden sin él'], c:0, fb:'Los métodos aparecen a partir de la clase M1L2 del curso. Encontrarse con “diseñada en torno al sistema Scrum” sin saber qué significa es exactamente el problema que elimina este módulo.'}
    ]
  },
  {
    id:4, emoji:'🧰', color:'#E8663B',
    title:'Tu Laboratorio de Configuración y las Herramientas',
    desc:'Prepara en tu propia máquina todo lo que necesita el curso —intérprete, VS Code, pipenv, Git, el Discord Developer Portal, Colab, Teachable Machine— más un recorrido por la plataforma y las presentaciones.',
    obj:'Hacer, en tu propia máquina, todo lo que luego pedirás al alumnado. No puedes resolver problemas de una instalación que nunca has hecho, ni dirigir la etapa del Developer Portal sin haber pasado nunca por ella. Este módulo es enteramente práctico: aquí no hay nada que aprender leyendo.',
    prep:'~3 o 4 horas, repartidas en varias sesiones. Hazlo en la máquina desde la que vayas a dar clase.',
    practical:{
      intro:'Este módulo ES la lista de comprobación. No lo marques como completado hasta que cada punto sea cierto de verdad: todo lo que viene después lo da por hecho:',
      items:[
        'Instaló el intérprete de Python y confirmó que <code>python --version</code> funciona en una terminal nueva',
        'Instaló VS Code, la extensión de Python y usó <em>Python: Select Interpreter</em> al menos una vez',
        'Creó una carpeta de proyecto y un archivo <code>.py</code>, y lo ejecutó desde la terminal de VS Code',
        'Instaló una librería con <code>pip install</code> y después creó un entorno <strong>pipenv</strong> e instaló una dentro de él',
        'Provocó a propósito un <code>ModuleNotFoundError</code> instalando fuera del entorno — y lo arregló',
        'Instaló Git, ejecutó <code>git config --global user.name</code> y <code>user.email</code>, y publicó un repositorio <strong>desde dentro de VS Code</strong>',
        'Creó y fusionó una rama, y vio la salida del merge fast-forward',
        'Registró una aplicación y un bot de Discord, activó el <strong>Message Content Intent</strong>, lo invitó a su propio servidor y consiguió que respondiera',
        'Creó un cuaderno de Colab, ejecutó una celda de código y una de markdown, subió un archivo y vio cómo el reinicio de sesión lo borraba',
        'Entrenó un clasificador en Teachable Machine, exportó el modelo y lo descomprimió en Colab',
        'Abrió la plataforma como tutor Y vio una clase tal como la ve un alumno',
        'Abrió al menos tres presentaciones de clase en modo presentación'
      ]
    },
    sections:[
      {t:'🧭 Por qué este módulo es todo hacer', cards:[
        {type:'brief',
          overview:'Un laboratorio práctico que cubre toda la cadena de herramientas: <strong>intérprete y VS Code</strong>, <strong>pip y pipenv</strong>, <strong>Git y GitHub</strong>, el <strong>Discord Developer Portal</strong>, <strong>Google Colab</strong>, <strong>Teachable Machine</strong> y la <strong>plataforma y las presentaciones</strong>.',
          why:'La clase M1L2 del curso te pone a instalar un intérprete y un IDE para toda una clase de chicos de 13 a 17 años con sistemas operativos distintos, en quince minutos. Cada módulo posterior añade una herramienta. La pedagogía de eso se cubre en otro sitio; lo que ninguna lectura te da es haberlo hecho tú una vez, con calma, antes de que importe.',
          learn:'El alumnado hace todo esto también: este laboratorio es deliberadamente el recorrido del alumno, hecho antes y a tu ritmo.',
          confident:'Todos los puntos de la lista de arriba, hechos en tu propia máquina, habiendo visto al menos una vez cada forma de fallo.'
        },
        {type:'good', txt:'Lo mejor que puedes hacer mientras trabajas este laboratorio es <strong>anotar todo lo que te salió mal</strong>. Tus propios tropiezos son la predicción más exacta posible de con qué se van a encontrar tus alumnos, y esas notas se convierten en tu complemento personal a las preguntas frecuentes.'}
      ]},
      {t:'💻 Intérprete, VS Code y la trampa del intérprete', cards:[
        {type:'text', h:'Hazlo en este orden', b:'Instala el <strong>intérprete de Python</strong> (en Windows, marca <em>Add Python to PATH</em>: saltárselo es la causa más común de “pip is not recognised”). Instala <strong>VS Code</strong>. Instala la <strong>extensión de Python</strong> desde el panel de extensiones. Después usa <code>Shift+Ctrl+P</code> / <code>Cmd+Shift+P</code> → <em>Python: Select Interpreter</em>. Crea una carpeta, crea un archivo <code>.py</code>, escribe <code>print("Hello, world!")</code> y ejecútalo.'},
        {type:'warn', txt:'Rómpelo a propósito una vez, ahora, en privado. Instala una librería con el intérprete equivocado seleccionado y observa cómo aparece <code>ModuleNotFoundError</code> aunque pip haya funcionado claramente. Ese error saldrá en una clase real, y haberlo provocado a propósito es la diferencia entre diagnosticarlo en diez segundos y perder veinte minutos.'},
        {type:'text', h:'Windows y Mac difieren, y media clase estará en cada uno', b:'Ten los dos juegos en la cabeza: el atajo de la paleta (<code>Shift+Ctrl+P</code> frente a <code>Cmd+Shift+P</code>), <code>python</code> frente a <code>python3</code> y cómo se abre la terminal. Cuando un comando difiera, di los dos en voz alta en lugar de dar algo por supuesto: “Ctrl+Shift+P, o Cmd+Shift+P en Mac” cuesta dos segundos y ahorra un alumno confundido.'},
        {type:'image', src:'assets/media/images/setup-interpreter.jpg', alt:'VS Code con la paleta Select Interpreter abierta, mostrando muchos entornos virtuales, con el que coincide con el proyecto abierto resaltado.', cap:'Seleccionar el intérprete: la solución a la mayoría de los problemas de “se instaló pero no importa”. Fíjate en cuántos entornos aparecen: el que hay que elegir es aquel cuyo nombre coincide con el proyecto abierto (aquí TUR_Calculator-main, que coincide con la carpeta TUR_CALCULATOR-MAIN del explorador). Elegir cualquier otro es exactamente como se produce un ModuleNotFoundError.'},
        {type:'tip', txt:'Ya que estás, escribe la <strong>hoja de configuración para el alumnado</strong> que vas a pegar en el chat del grupo antes de la primera clase: enlaces de descarga, la casilla del PATH y qué aspecto tiene “hecho”. El temario pone los instaladores como deberes justamente para no perder tiempo de clase, y una hoja clara es lo que hace que esos deberes se hagan de verdad.'}
      ]},
      {t:'📦 pip, pipenv y entornos virtuales', cards:[
        {type:'text', h:'Qué hacer exactamente', b:'Instala una librería globalmente con <code>pip install requests</code>. Después crea un proyecto con un entorno <strong>pipenv</strong> e instala dentro de él con <code>pipenv install requests</code>. Fíjate en la diferencia: dónde van los archivos y qué ocurre cuando después seleccionas el intérprete equivocado. La clase M3L1 del curso hace esto con Flask, y M7L1 lo repite con librerías grandes de IA.'},
        {type:'warn', txt:'La trampa que pilla igual a alumnos y a tutores: dentro de un proyecto pipenv debes usar <code>pipenv install &lt;librería&gt;</code>. Un <code>pip install</code> a secas la deja en un sitio que el proyecto no ve, y el <code>ModuleNotFoundError</code> resultante parece exactamente una instalación rota. Si lo has hecho tú una vez, lo reconocerás al instante.'},
        {type:'text', h:'Practica ahora la fijación de versiones de IA, no en la clase', b:'El módulo M7 del curso es el más frágil de todos. Adelántate: crea un entorno, instala TensorFlow y ten a mano los comandos de solución: <code>pipenv uninstall tensorflow</code> y luego <code>pipenv install tensorflow==2.15</code>. Ten claro que el equivalente en Colab es <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> con <code>import tf_keras</code>. Son comandos listos para pegar, no cosas que razonar en directo.'},
        {type:'tip', txt:'Una instalación grande puede tardar mucho en un portátil de instituto. Ten preparado un plan B —el Pipfile del repositorio de solución— y ten claro que usarlo es lo correcto, no una concesión. La clase va de la IA, no de esperar una descarga.'}
      ]},
      {t:'🐙 Git, GitHub y ramas', cards:[
        {type:'text', h:'La secuencia completa, para hacerla tú', b:'Crea la cuenta de GitHub. Crea un repositorio público vacío y sube un archivo <strong>a través de la web</strong>: la forma torpe con la que el alumnado se encuentra primero en M1L2. Después instala la <strong>aplicación git</strong>, eligiendo VS Code como editor durante la instalación. Ejecuta <code>git config --global user.name</code> y <code>user.email</code>. Inicia sesión en GitHub desde dentro de VS Code y publica un repositorio <strong>desde el editor</strong>, como enseña M2L3. Por último, haz un commit de un cambio y mira el historial del archivo.'},
        {type:'text', h:'Y luego ramas, porque M8L2 pide una captura a cada alumno', b:'Crea una rama, haz un cambio en ella, vuelve atrás y fusiónala. Observa la salida del fast-forward. Vas a pedir exactamente eso a cada alumno, así que haberlo hecho más de una vez importa: fusionar es de esas cosas que parecen sencillas hasta que las haces delante de gente.'},
        {type:'good', txt:'Ya que estás, practica decir lo que repetirás todo el curso: todo lo que se sube a Git <strong>se queda</strong> ahí. Borra un archivo, haz commit y luego encuéntralo en el historial. Verlo tú es lo que te hace convincente al explicar por qué un token filtrado hay que regenerarlo y no borrarlo.'}
      ]},
      {t:'🤖 El Discord Developer Portal', cards:[
        {type:'text', h:'Recórrelo entero una vez', b:'Crea tu propio servidor de Discord. Ve al Developer Portal, crea una <strong>aplicación</strong>, añade un <strong>bot</strong> y —el paso que rompe todo en silencio— activa el <strong>Message Content Intent</strong> en la página Bot. Copia el token. Invita al bot a tu servidor con los permisos adecuados. Después ejecuta el ejemplo de la clase Client del curso con tu token pegado en local y consigue que responda. Y luego reescríbelo usando la clase <code>Bot</code>.'},
        {type:'warn', txt:'Dos cosas que debes tener grabadas antes de la clase. Primera: el intent debe estar activado <strong>tanto</strong> en el código (<code>intents.message_content = True</code>) <strong>como</strong> en el portal; con solo uno te queda un bot que se conecta y lo ignora todo. Segunda: el diseño del portal cambia. Recórrelo otra vez poco antes de dar M1L3, en lugar de fiarte de lo que recuerdas de hace meses.'},
        {type:'image', src:'assets/media/images/setup-discord-intents.jpg', alt:'La página Bot del Discord Developer Portal mostrando la sección Privileged Gateway Intents con los intents Presence, Server Members y Message Content, todos desactivados.', cap:'La página Bot (menú izquierdo → <strong>Bot</strong>). Baja hasta <strong>Privileged Gateway Intents</strong> y activa <strong>Message Content Intent</strong>: el tercer interruptor. Los tres vienen DESACTIVADOS por defecto, exactamente como se ve aquí, y por eso un bot recién creado se conecta y luego ignora todos los mensajes. Portal capturado con la interfaz en turco; los nombres de los intents están en inglés en todos los idiomas.'},
        {type:'warn', txt:'Lee la captura con atención: los tres intents están <strong>desactivados</strong>. Ese es el estado por defecto, y <strong>Message Content Intent</strong> es el que debes encender: el interruptor de abajo, parcialmente cortado en esta captura. Activarlo en el portal es solo la mitad del trabajo: <code>intents.message_content = True</code> tiene que estar también en el código. Si falta cualquiera de los dos, el bot aparece en línea y no oye nada.'},
        {type:'good', txt:'Practica ahora mismo contigo la disciplina del token. Pon tu token en el código en local y, antes de enseñarle nada a nadie, sustitúyelo por <code>YOUR_BOT_TOKEN</code>. Coge el hábito mientras lo único en juego es lo tuyo, y revisa tu propia pantalla antes de compartirla jamás.'}
      ]},
      {t:'🔬 Colab y Teachable Machine', cards:[
        {type:'text', h:'Colab', b:'Crea un cuaderno en tu Drive. Ejecuta dos o tres <strong>celdas de código</strong> y una de <strong>markdown</strong>. Sube una imagen a la sesión. Después reinicia la sesión a propósito y observa cómo desaparece el archivo, porque vas a tener que explicárselo a una clase desconcertada. Aprende que <code>!</code> ejecuta un comando del sistema operativo y que <strong>hay que ejecutar todas las celdas, en orden</strong>. Por último, practica montar Google Drive, que es la solución para proyectos más largos.'},
        {type:'text', h:'Teachable Machine, de principio a fin', b:'Entrena un pequeño clasificador de imágenes con dos clases. Pruébalo con una imagen que no haya visto nunca. Guarda el proyecto. Después <strong>exporta el modelo</strong>, mira qué sale realmente del zip (el modelo <code>.h5</code> y <code>labels.txt</code>), súbelo a Colab, descomprímelo con <code>!unzip</code> y cárgalo con <code>tf_keras</code>. Toda esa cadena son los módulos M5L4 → M6L1 → M7L2 del curso, y es la parte donde aparecen los errores de versión.'},
        {type:'image', src:'assets/media/images/setup-gtm.jpg', alt:'Google Teachable Machine con dos clases nombradas de imágenes de pájaros, un modelo entrenado y el botón Export Model resaltado.', cap:'Teachable Machine, montado para el proyecto de pájaros del propio curso: dos clases llamadas <em>Güvercin</em> (paloma) y <em>Serçe</em> (gorrión), con 6 y 7 imágenes de muestra. Renombra cada clase con el icono del lápiz; añade imágenes con <strong>Upload</strong>. Cuando ponga <strong>Model Trained</strong>, <strong>Export Model</strong> (arriba a la derecha) es lo que produce el archivo que cargas en la clase M6L1 del curso. En <strong>Advanced</strong>, dentro de Training, están las épocas y la tasa de aprendizaje.'},
        {type:'tip', txt:'Fíjate en el número de muestras de la captura: 6 y 7 imágenes por clase. Es a propósito un dataset <em>pequeño</em>, y es aproximadamente lo que producirá el alumnado en clase. Entrena tú uno de ese tamaño y pruébalo con un pájaro que no haya visto: ver rendir mal un dataset pobre es la forma más rápida de entender por qué “añade más datos y más variados” es la respuesta a casi cualquier queja sobre la precisión.'},
        {type:'tip', txt:'Entrena también un modelo deliberadamente malo —dos clases con cuatro imágenes borrosas cada una— y míralo fallar con total seguridad. Eso te da una demostración en vivo de la idea más importante del bloque de IA: el modelo solo conoce lo que se le mostró, y arreglarlo significa arreglar el dataset, no el código.'}
      ]},
      {t:'🖥️ La plataforma y las presentaciones', cards:[
        {type:'text', h:'Míralo desde los dos lados', b:'Casi todas las etapas de todas las clases dicen “ve a la tarea llamada…”, así que la plataforma es donde vive realmente el curso. Consigue acceso y mira: cómo se ve una <strong>página de tarea</strong> para un alumno, dónde se muestran la <strong>teoría y los ejemplos de código</strong> a los que se refieren los planes, el <strong>chat</strong> asociado a cada tarea, qué hace el botón <strong>Enviar</strong> y cómo se <strong>ponen las notas</strong>. Después abre el <strong>Backoffice</strong> y localiza dónde se verifican las entregas y dónde está el enlace del chat del grupo.'},
        {type:'warn', txt:'Los planes citan constantemente “Diapositiva 4”, “Diapositiva 6 (esta diapositiva está animada)”. Si no has abierto las presentaciones no sabrás si una diapositiva ya cubre un concepto o si se espera que lo expliques tú, y acabarás duplicando o saltándotelo. Abre las presentaciones de la clase siguiente cada vez que prepares, y recuerda presentar en <strong>modo presentación</strong>, como especifican los planes.'},
        {type:'image', src:'assets/media/images/setup-platform.jpg', alt:'La página del curso Python Pro en la plataforma de Kodland, con la barra de título del curso, las pestañas de tareas de clase y deberes, y las tarjetas de módulo.', cap:'La página del curso en la plataforma. Menú izquierdo: <em>Kurslarım</em> = Mis cursos. Las pestañas son <em>Ders İçi Görevler</em> = tareas de clase, <em>Ödevler</em> = deberes (con el número de elementos pendientes), <em>Lider Tablosu</em> = tabla de clasificación. Debajo están las tarjetas de módulo —<em>Modül 1, 2, 3…</em>— y cada una abre la lista de clases a la que apuntan todas las instrucciones de “ve a la tarea llamada…”.'},
        {type:'good', txt:'Lee la barra de título del curso en esa captura, porque es el resumen más claro de lo que vas a enseñar: <strong>[1619] Python Pro [13-17] [90 min] [40 L] [Turkey]</strong>: código de curso 1619, edades <strong>13 a 17</strong>, clases de noventa minutos, cuarenta en total. La insignia sobre <em>Ödevler</em> son los deberes pendientes de corregir; ese número es el que crece en silencio si dejas la corrección para luego.'},
        {type:'text', h:'Los materiales que te da cada clase', b:'Todos los planes tienen una sección de <strong>Materiales</strong> que lista lo que existe para esa clase: la presentación, los cuestionarios, los vídeos, los enlaces a documentación, los repositorios de partida, los ZIP y las herramientas de evaluación. Léela antes de preparar nada desde cero. Varias cosas que podrías dar por hecho que tienes que construir ya están dadas, incluido el <code>diary(complete).zip</code> del módulo de bases de datos y el repositorio de solución de las clases del bot con IA.'},
        {type:'good', txt:'Cuando tengas acceso, haz un ensayo: elige una clase, abre su plan, su presentación y sus tareas de la plataforma en paralelo y recórrela como si la estuvieras dando. Ese único ensayo te dirá más sobre tu preparación que cualquier test de esta formación.'}
      ]}
    ],
    quiz:[
      {q:'En Windows, ¿qué provoca “pip is not recognised” y cuál es la solución más rápida?', opts:['Python se instaló sin marcar “Add Python to PATH” — reinstalar con la casilla marcada es más rápido que depurarlo en directo','Falta la extensión de Python en VS Code — instálala','pip debe instalarse aparte con un segundo instalador','La terminal se abrió antes de que Python terminara de instalarse — vuelve a abrirla'], c:0, fb:'Es un problema de PATH del instalador. En una clase en directo, reinstalar con la casilla marcada gana a investigar mientras ocho alumnos esperan.'},
      {q:'Estás dentro de un proyecto pipenv. Un alumno ejecuta pip install flask y luego recibe ModuleNotFoundError. ¿Por qué?', opts:['Dentro de un entorno pipenv hay que usar pipenv install — el pip a secas la dejó en un sitio que el proyecto no ve','Flask no se puede instalar con pip','Había que reiniciar VS Code para que la instalación se registrara','Al proyecto le faltaba un requirements.txt'], c:0, fb:'Es la trampa que pilla también a tutores, y el error se ve idéntico a una instalación rota. Haberlo provocado una vez lo convierte en un diagnóstico de diez segundos.'},
      {q:'Un bot se conecta y aparece en línea pero ignora todos los mensajes. ¿Qué dos cosas deben cumplirse a la vez?', opts:['intents.message_content = True en el código Y el Message Content Intent activado en la página Bot del Developer Portal','El bot debe tener permisos de administrador Y ser el dueño del servidor','Hay que regenerar el token Y volver a invitar al bot','Hay que usar la clase Bot Y poner el prefijo en $'], c:0, fb:'Leer el texto de los mensajes es un privilegio que hay que conceder en los dos sitios. Con solo uno queda un bot que se conecta y no oye nada.'},
      {q:'¿Por qué este módulo te dice que reinicies a propósito una sesión de Colab antes de dar clase con ella?', opts:['Para haber visto desaparecer archivos subidos y poder explicarlo con calma cuando le pase a toda una clase','Para liberar memoria antes de entrenar un modelo','Porque Colab exige un reinicio tras la primera subida','Para comprobar que tu Google Drive tiene espacio suficiente'], c:0, fb:'Las sesiones de Colab son temporales y eso desconcierta a todos los grupos. Haberlo visto ocurrir significa que explicas en lugar de improvisar.'},
      {q:'¿Qué deberías hacer con las notas de lo que te salió mal durante este laboratorio?', opts:['Guardarlas — tus propios tropiezos son la mejor predicción disponible de lo que se encontrará el alumnado, y amplían las preguntas frecuentes','Tirarlas cuando todo funcione','Enviarlas al equipo de la plataforma como informes de fallos','Usarlas para decidir qué clases saltarte'], c:0, fb:'Estás haciendo primero el recorrido del alumnado. Donde tropezaste tú tropezarán ellos, y tus notas se convierten en un complemento personal a las preguntas frecuentes.'},
      {q:'¿Por qué debes abrir las presentaciones al preparar cada clase?', opts:['Porque los planes citan diapositivas concretas y, sin verlas, o duplicarás lo que una diapositiva cubre o te saltarás algo que no cubre','Porque las diapositivas contienen las respuestas del test','Porque el alumnado no puede ver las diapositivas si no las abres tú primero','Porque las presentaciones listan los plazos de los deberes'], c:0, fb:'Los planes dicen cosas como “Diapositiva 6 (esta diapositiva está animada)”. No saber qué hay en ella significa adivinar qué queda por explicar.'},
      {q:'¿Dónde deberías mirar antes de construir cualquier material propio para una clase?', opts:['La sección de Materiales del plan de esa clase — presentaciones, cuestionarios, vídeos, repositorios de partida, ZIP y herramientas de evaluación suelen estar ya dados','Las preguntas frecuentes de esta formación','La vista de calificación de la plataforma','Los deberes de la clase anterior'], c:0, fb:'Varias cosas que podrías dar por hecho que hay que construir ya existen, incluido el ZIP completo del diario y el repositorio de solución del bot con IA.'},
      {q:'¿Cuál es el mejor ensayo para tu primera clase, una vez que tienes acceso a la plataforma?', opts:['Elegir una clase y recorrer su plan, su presentación y sus tareas de la plataforma en paralelo, como si la estuvieras dando','Releer el módulo de metodología de esta formación','Memorizar los tiempos de las etapas de las cuarenta clases','Construir antes todos los proyectos del curso'], c:0, fb:'Un ensayo con los materiales reales abiertos a la vez te dice más sobre tu preparación que cualquier test de aquí.'}
    ]
  },
  {
    id:5, emoji:'🛠️', color:'#F5B93B',
    title:'M1 — VS Code, Git y Bots de Discord',
    desc:'Módulo 1 del curso: repaso de Python, GitHub, el intérprete y VS Code, pip y Discord.py, funciones y las clases Client y Bot.',
    obj:'Dar las cuatro clases que convierten a alguien que viene de Python Basic en alguien que trabaja como desarrollador: repasar sintaxis, registrarse y usar GitHub, instalar un IDE y un intérprete de verdad, instalar librerías con pip, construir un bot de Discord, extraer la lógica a funciones y leer la documentación de la librería para ampliarlo.',
    prep:'~4 o 5 horas. La mayor parte es construir el bot; no te lo saltes.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 1 del curso, debes haber hecho personalmente:',
      items:[
        'Escribió la aplicación de diccionario de jerga con un diccionario real y búsqueda con <code>.keys()</code>',
        'Escribió el generador de contraseñas con <code>random.choice</code> dentro de un bucle',
        'Extrajo ese generador a <code>bot_logic.py</code> como función y lo importó en <code>main.py</code>',
        'Registró un bot, activó el Message Content Intent y consiguió que un bot de la clase <strong>Client</strong> respondiera en su propio servidor',
        'Reescribió ese mismo bot usando la clase <strong>Bot</strong>, con <code>@bot.command()</code> y un prefijo',
        'Subió un proyecto a GitHub, lo modificó, lo volvió a subir y vio el historial del archivo',
        'Ejecutó a propósito un bot con el token quitado, para saber cómo se manifiesta ese fallo'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> repaso + GitHub + la app de diccionario de jerga; <strong>L2</strong> el intérprete y VS Code + un generador de contraseñas; <strong>L3</strong> pip, el Discord Developer Portal, el primer bot y las funciones; <strong>L4</strong> documentación de librerías, la clase <code>Bot</code>, el historial del repositorio y pruebas entre compañeros.',
          why:'Este módulo saca al alumnado de la plataforma y lo mete en un flujo de trabajo profesional. Si GitHub, el intérprete o el token nunca acaban de funcionar, todo lo que viene después en el curso se atasca.',
          learn:'El alumnado repasa <code>input</code>/<code>print</code>, listas, bucles, diccionarios y <code>random</code>; crea cuentas y repositorios en GitHub; instala y configura VS Code; instala <code>discord.py</code> con pip; registra un bot y usa un token con seguridad; y empaqueta su propia lógica en una función importada.',
          confident:'La diferencia entre intérprete e IDE; seleccionar el intérprete correcto en VS Code; <code>pip install</code>; las tres cosas que necesita un bot de Discord (servidor, bot registrado, token); <code>intents.message_content</code>; y la diferencia entre <code>Client</code> y <code>Bot</code>.'
        }
      ]},
      {t:'📚 L1 — Repaso, GitHub y el diccionario de jerga', cards:[
        {type:'text', h:'Qué pasa en la clase', b:'Presentación (un juego de nombre + adjetivo con la misma letra), normas del grupo creadas <em>por el propio alumnado</em>, un test de repaso sincronizado y luego la tarea principal: un programa que imprime un dato aleatorio sobre ti a partir de una lista. Después GitHub: teoría, registro y creación del primer repositorio público vacío. A continuación el proyecto de verdad: una app de diccionario que explica jerga a familiares mayores. Por último, suben el código y exploran los repositorios de los demás.'},
        {type:'text', h:'El Python que estás repasando', b:'Deliberadamente estrecho: <code>input</code>/<code>print</code>, <strong>listas</strong>, <strong>bucles</strong>, la librería <strong>random</strong> y —para el proyecto principal— <strong>diccionarios</strong>. Recuerda que una entrada tiene una <strong>clave y un valor</strong> y que <code>.keys()</code> devuelve todas las claves. Pregunta en qué dirección va la búsqueda: ¿buscamos la clave por el valor, o el valor por la clave?'},
        {type:'code', lbl:'el diccionario de jerga — el formato al que llega el alumnado', code:`meme_dict = {
    <span class="cs">"CRINGE"</span>: <span class="cs">"Algo extremadamente raro o vergonzoso"</span>,
    <span class="cs">"LOL"</span>: <span class="cs">"Respuesta habitual a algo gracioso"</span>,
    <span class="cs">"ROFL"</span>: <span class="cs">"Reacción a algo muy gracioso, parecida a LOL"</span>
}

word = <span class="cf">input</span>(<span class="cs">"Escribe una palabra de jerga que no entiendas (¡TODO EN MAYÚSCULAS!): "</span>)

<span class="ck">if</span> word <span class="ck">in</span> meme_dict.<span class="cf">keys</span>():
    <span class="cf">print</span>(meme_dict[word])
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Todavía no tenemos esa palabra... ¡pero estamos en ello!"</span>)`},
        {type:'hi', h:'Por qué importa explorar los repositorios', b:'Después de subir el código, el alumnado publica los enlaces de sus repositorios en el chat del grupo y sale a cazar la palabra más graciosa que haya añadido alguien. Ese es el objetivo entero de la etapa: les enseña en la práctica que <strong>Git hace que el código de otras personas sea accesible al instante</strong>. Hazlo tú también: abre algunos repositorios y comenta en voz alta qué ha hecho bien cada persona.'},
        {type:'tip', txt:'Prepara la clase siguiente al final de esta. Los deberes piden explorar un proyecto en GitHub y traer 2 o 3 preguntas sobre él; pide además que <strong>descarguen en casa los instaladores de Python y VS Code</strong> y tengan un correo listo. Las descargas durante la segunda clase se comerán tu tiempo de práctica.'}
      ]},
      {t:'💻 L2 — El intérprete, VS Code y el generador de contraseñas', cards:[
        {type:'text', h:'El problema que da el marco', b:'Los ataques informáticos. Debatid cómo se roban datos personales y qué protege: no hacer clic en enlaces sospechosos, no meter datos personales en webs desconocidas y <strong>usar contraseñas fuertes</strong>. Esto último se convierte en el proyecto: un programa de código abierto que genera contraseñas fuertes.'},
        {type:'qa', h:'Los dos conceptos que tienen que asentar', items:[
          {k:'Intérprete', v:'El ordenador solo entiende código máquina: ceros y unos. Escribir eso a mano es inviable, así que escribimos en Python y el intérprete lo traduce al código máquina que ejecuta el procesador.'},
          {k:'IDE', v:'Integrated Development Environment: un programa que ayuda a escribir código — autocompletado, sugerencias de sintaxis, comprobación de errores, pruebas, compartición. Este curso usa VS Code; PyCharm es otra buena opción. Los IDE no son exclusivos de Python.'}
        ]},
        {type:'text', h:'La secuencia de configuración', b:'Instala el intérprete, instala VS Code, instala la <strong>extensión de Python</strong> y después selecciona el intérprete con <code>Shift+Ctrl+P</code>. Recalca dos cosas: la configuración se hace <strong>una vez</strong>, justo después de instalar; y <strong>la extensión del archivo importa</strong>: un archivo de Python debe terminar en <code>.py</code> para ejecutarse. Después crea una carpeta de proyecto (siempre una carpeta por proyecto), un archivo <code>.py</code> y ejecuta <code>print("Hello, world!")</code>.'},
        {type:'code', lbl:'el generador de contraseñas', code:`<span class="ck">import</span> random

elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"</span>

pass_length = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Escribe la longitud de la contraseña: "</span>))
password = <span class="cs">""</span>

<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
    password += random.<span class="cf">choice</span>(elements)

<span class="cf">print</span>(password)`},
        {type:'hi', h:'Esta clase tiene forma de sprint de Scrum', b:'Cada etapa es un <strong>sprint</strong>: un debate corto al principio, un límite de tiempo estricto y después un cierre con dos preguntas fijas: “<em>¿logramos de verdad el resultado?</em>” y “<em>¿cómo nos acerca esto a resolver el problema principal?</em>”. Di los límites de tiempo en voz alta. Es su primer contacto con un ritmo que vuelve a lo largo del curso y que se enseña formalmente en el Módulo 8.'},
        {type:'tip', txt:'La etapa de subida es torpe a propósito: pídeles que averigüen solos cómo meter el código en el repositorio vacío, debatiéndolo en voz alta, antes de enseñarles el botón de subida de GitHub. Después diles que esa es solo una de las opciones, y ni siquiera la más cómoda. Eso prepara la integración de Git en VS Code de M2L3.'}
      ]},
      {t:'🤖 L3 — pip, el bot de Discord y las funciones', cards:[
        {type:'text', h:'Usar–Modificar–Crear', b:'Esta clase funciona con el <strong>método UMC</strong>, y tienes que hacer los dos primeros pasos en orden: el alumnado <strong>usa</strong> un bot completo (lo ejecuta, lo ve funcionar) y después lo <strong>modifica</strong> mientras tú explicas qué hace cada cambio. Dales cinco minutos para experimentar libremente con el código de ejemplo y responde preguntas sin regalar nada.'},
        {type:'qa', h:'pip y las tres cosas que necesita un bot', items:[
          {k:'pip', v:'“Pip Installs Packages”: el gestor de paquetes de Python. <code>pip install discord</code> en la terminal y ya tienes la librería. Una de las mayores ventajas de Python es que existe una librería para casi todo.'},
          {k:'1. Un servidor', v:'El bot necesita un espacio donde vivir. Cada alumno crea su propio servidor de Discord.'},
          {k:'2. Un bot registrado', v:'Registrado en el Discord Developer Portal, para que Discord sepa que es un bot y se puedan configurar los permisos.'},
          {k:'3. Un token', v:'La llave que permite al programa ejecutar ese bot concreto. Quien tenga el token controla el bot por completo.'}
        ]},
        {type:'warn', txt:'Di esto en el momento en que aparezcan los tokens, y cada vez que se publique un proyecto: <strong>si alguien consigue tu token, el bot es suyo.</strong> Nunca lo subas en un commit, nunca lo pegues en el chat, nunca lo dejes visible en una pantalla compartida. En el código compartido escribimos el marcador <code>bot.run("YOUR_BOT_TOKEN")</code>. Si un token se filtra, regenéralo en el Developer Portal: borrar el archivo no basta, porque Git guarda el historial.'},
        {type:'code', lbl:'la lógica del bot en su propio archivo — bot_logic.py', code:`<span class="ck">import</span> random

<span class="ck">def</span> <span class="cf">gen_pass</span>(pass_length):
    elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;"</span>
    password = <span class="cs">""</span>
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
        password += random.<span class="cf">choice</span>(elements)
    <span class="ck">return</span> password`},
        {type:'code', lbl:'el bot que la importa — main.py (clase Client)', code:`<span class="ck">import</span> discord
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

<span class="cc"># intents guarda los privilegios del bot</span>
intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>   <span class="cc"># permite leer el texto de los mensajes</span>

client = discord.<span class="ct2">Client</span>(intents=intents)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'Conectados como {client.user}'</span>)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_message</span>(message):
    <span class="ck">if</span> message.author == client.user:   <span class="cc"># evita que el bot se responda a sí mismo</span>
        <span class="ck">return</span>
    <span class="ck">if</span> message.content.<span class="cf">startswith</span>(<span class="cs">'$hello'</span>):
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"¡Hola!"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Tu contraseña "</span> + <span class="cf">gen_pass</span>(<span class="cn">10</span>))

client.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'Funciones, enseñadas desde el código que tienen delante', b:'Una función es código que escribes una vez y reutilizas. Señala los dos <code>def</code> que ya están en el bot y pregunta: ¿cómo se llaman? ¿Qué tiene una función además del nombre y el cuerpo? ¿Qué otras funciones conocen ya (<code>print</code>, <code>input</code>, <code>len</code>)? Después hazlo concreto: los datos <strong>entran</strong> por los argumentos entre paréntesis y los datos procesados <strong>salen</strong> por el <code>return</code>. La tarea es convertir su programa anterior en una función, ponerla en su propio archivo e importarla.'},
        {type:'tip', txt:'Buena pregunta diagnóstica para la fase de experimentación: “¿qué pasa si quitas <code>if message.author == client.user: return</code>?”. El bot pasa a responderse a sí mismo para siempre. Deja que descubran el bucle infinito en lugar de avisar.'}
      ]},
      {t:'📖 L4 — Documentación, la clase Bot y pruebas entre compañeros', cards:[
        {type:'text', h:'El verdadero objetivo de esta clase', b:'No es una funcionalidad, es un <strong>hábito</strong>. El alumnado tiene que salir creyendo que consultar la documentación es lo que hacen los programadores de verdad. Nadie se sabe una librería de memoria; la habilidad es encontrar un ejemplo y adaptarlo. Dilo explícitamente y trata los errores como parte corriente del proceso, no como algo vergonzoso.'},
        {type:'twocol', left:{h:'Client', items:['Reacciona a <strong>eventos</strong> — <code>@client.event</code>','Lee el <strong>mensaje entero</strong>, así que pasar un valor exige partir el texto tú','Úsala para actuar sobre la API como una persona usuaria']}, right:{h:'Bot', items:['Reacciona a <strong>comandos que tú defines</strong> — <code>@bot.command()</code>','Acepta directamente los argumentos que escribe la persona usuaria','Úsala para automatizar acciones concretas']}},
        {type:'code', lbl:'el mismo bot reescrito con la clase Bot', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>

<span class="cc"># command_prefix es el identificador que marca un comando</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'Conectados como {bot.user}'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f'¡Hola! Soy un bot: {bot.user}!'</span>)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">pasw</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">gen_pass</span>(<span class="cn">10</span>))

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'<strong>Nunca uses <code>Bot</code> y <code>Client</code> en el mismo programa.</strong> Quien copie trozos de dos tutoriales distintos hará exactamente eso y obtendrá fallos desconcertantes. Es una de las “5 diferencias” que tienen que encontrar entre las dos versiones del código.'},
        {type:'text', h:'Historial de Git y pruebas entre compañeros', b:'El alumnado <strong>actualiza</strong> el repositorio que ya existe en lugar de crear uno nuevo, y después mira el historial del archivo, y tú cuentas la verdad: <strong>todo lo que va a Git se queda ahí.</strong> Enseña también el panel de actividad del perfil. Luego se ponen por parejas en salas de trabajo, ejecutan el bot de la otra persona y se dan tres ideas de mejora mutuamente, que van al chat de la tarea como una lista de pendientes. Los deberes son implementar una de ellas.'},
        {type:'tip', txt:'Antes de las pruebas entre compañeros, pregunta cómo se haría para ejecutar el bot de otra persona. La respuesta es una receta de cuatro pasos: abrir su repositorio, copiar el código a tu proyecto, pegar <strong>tu propio</strong> token y ejecutar. El último paso es el que olvidan, y es un buen momento para repetir por qué el token es solo suyo.'}
      ]}
    ],
    quiz:[
      {q:'Un alumno pregunta cuál es la diferencia entre el intérprete de Python y un IDE. ¿Cuál es la respuesta correcta?', opts:['El intérprete traduce Python a código máquina que ejecuta el procesador; el IDE es el programa que te ayuda a escribir el código','Son dos nombres para lo mismo','El intérprete escribe el código y el IDE solo lo ejecuta','El intérprete es para principiantes y el IDE para profesionales'], c:0, fb:'El intérprete convierte Python legible en código máquina. El IDE —aquí VS Code— es el editor con autocompletado, sugerencias y comprobación de errores.'},
      {q:'¿Cuáles son las tres cosas que necesita un bot de Discord antes de que funcione nada de código?', opts:['Un servidor de Discord, un bot registrado en el Developer Portal y un token','Una suscripción de pago a Discord, un servidor y un correo','Un repositorio de GitHub, una web y un dominio','Un servidor de Discord, una webcam y un micrófono'], c:0, fb:'M1L3 lo presenta como tres requisitos: el servidor da espacio al bot, el registro hace que Discord lo reconozca como bot para poder configurar permisos, y el token permite a tu programa ejecutarlo.'},
      {q:'Un alumno quiere subir su bot funcionando a un repositorio público de GitHub. ¿Qué tiene que pasar antes?', opts:['El token real tiene que salir y ser sustituido por un marcador — y si alguna vez se subió, hay que regenerarlo en el Developer Portal','Nada — el repositorio puede ser público porque el código es suyo','Hay que renombrar el repositorio con algo que parezca privado','Debe borrar la línea del token después de subirlo'], c:0, fb:'Un token es una contraseña: quien lo tenga controla el bot. Borrarlo después no sirve, porque Git guarda el historial; la única solución para un token filtrado es regenerarlo.'},
      {q:'¿Cuál es la diferencia entre las clases Client y Bot en discord.py?', opts:['Client responde a eventos; Bot responde a comandos que tú defines con un prefijo — y no deben usarse las dos en el mismo programa','Client es para texto y Bot para imágenes','Bot es la versión antigua de Client','Client es más rápido porque lee menos mensajes'], c:0, fb:'Client reacciona a eventos con @client.event; Bot reacciona a comandos definidos con @bot.command() y acepta argumentos escritos. Mezclarlas en un programa lo rompe.'},
      {q:'El bot de un alumno está en línea pero ignora todos los mensajes. ¿Qué es lo primero que hay que comprobar?', opts:['Si intents.message_content = True está en el código y si el Message Content Intent está activado en el Developer Portal','Si la conexión a internet es estable','Si el servidor tiene suficientes miembros','Si usaron la clase Client en lugar de Bot'], c:0, fb:'Leer el texto de los mensajes es un privilegio. Tiene que estar activado en el código y en el portal: si falta uno, el bot no ve nada.'},
      {q:'¿Por qué el curso hace que el alumnado convierta el generador de contraseñas en una función en un archivo aparte?', opts:['Para mostrar que la lógica escrita una vez se puede importar y reutilizar — los datos entran por argumentos y salen por return','Porque Discord exige que todo bot tenga dos archivos','Para que el archivo sea más pequeño y se suba más rápido','Porque las funciones se ejecutan más rápido que el código suelto'], c:0, fb:'M1L3 usa el programa anterior del propio alumnado para enseñar funciones de forma concreta: entran argumentos, sale un return, importado en main.py, “como los programadores de verdad”.'},
      {q:'¿Cuál es el objetivo principal de M1L4, la clase de documentación?', opts:['Crear el hábito de encontrar y adaptar ejemplos de la documentación, porque ningún programador se sabe una librería de memoria','Memorizar la lista completa de comandos de discord.py','Terminar el bot para que no haga falta cambiarlo más','Enseñar al alumnado a evitar librerías y escribirlo todo desde cero'], c:0, fb:'La nota de la clase es explícita: el alumnado debe aprender que puede y debe buscar ejemplos de código en la documentación de la librería. Programar es exploración y aprendizaje constantes.'},
      {q:'El alumnado no ha descargado en casa los instaladores de Python y VS Code. ¿Qué manda hacer el curso?', opts:['Iniciar la descarga ahora, pero seguir la clase con quienes están listos en lugar de bloquear al grupo entero','Cancelar la etapa práctica y usar el tiempo para teoría','Esperar a que todo el mundo termine de descargar antes de empezar','Mandarles instalar en casa y continuar la semana siguiente'], c:0, fb:'Los instaladores son deberes precisamente para evitar esto. Si alguien no lo hizo, inicia las descargas y sigue: el asistente técnico puede ayudarles a ponerse al día.'}
    ]
  },
  {
    id:6, emoji:'🎨', color:'#E8663B',
    title:'M2 — Archivos, HTML, CSS y UI/UX',
    desc:'Módulo 2 del curso: leer archivos y carpetas con os, el bot de memes, APIs, el proyecto del eco-bot, público objetivo, HTML, CSS, UI/UX y Git dentro de VS Code.',
    obj:'Enseñar al alumnado a trabajar con archivos y datos externos, a construir un proyecto para un público elegido y a crear sus primeras páginas web. Debes saber explicar los modos de acceso a archivos y <code>os.listdir</code>, montar una petición a una API, dirigir el debate sobre público objetivo, enseñar las etiquetas de HTML y las reglas de CSS esenciales, criticar una página desde el punto de vista de UI/UX y conectar GitHub con VS Code.',
    prep:'~4 horas. El HTML/CSS es rápido; el bot y la API no.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 2 del curso, debes haber hecho personalmente:',
      items:[
        'Escribió un bot que envía una imagen concreta con <code>discord.File</code> y el modo <code>\'rb\'</code>',
        'Lo refinó para elegir un archivo al azar con <code>os.listdir</code> — y falló al menos una vez con la ruta',
        'Llamó a una API pública con <code>requests</code> y extrajo un campo de la respuesta <code>.json()</code>',
        'Construyó una pequeña página HTML con las etiquetas del curso y le enlazó un <code>style.css</code>',
        'Añadió una animación con <code>@keyframes</code> y una variante <code>:hover</code>',
        'Incrustó un widget de terceros con <code>&lt;iframe&gt;</code>',
        'Publicó la página en GitHub desde dentro de VS Code',
        'Miró una web deliberadamente mala y anotó él mismo sus problemas de UX y de UI'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> archivos, carpetas y el bot de memes (más APIs y un test sumativo); <strong>L2</strong> un eco-bot desde cero con un público objetivo elegido; <strong>L3</strong> front-end y back-end, HTML, CSS y Git dentro de VS Code; <strong>L4</strong> principios de UI/UX, animación en CSS y widgets incrustados.',
          why:'Aquí es donde el alumnado deja de consumir datos que ha escrito él mismo y empieza a leerlos del disco y de internet, y donde arranca la mitad web del curso. También introduce la idea de que un proyecto es <em>para alguien</em>.',
          learn:'El alumnado lee archivos con <code>with open(...)</code>, lista una carpeta con <code>os.listdir</code>, envía imágenes por un bot, llama a una API pública con <code>requests</code>, construye un bot para un público que ha elegido, crea una página HTML con estilos sobre la adicción a la tecnología, la anima con <code>@keyframes</code>, incrusta un widget con <code>&lt;iframe&gt;</code> y publica desde VS Code.',
          confident:'<code>with open()</code> y los modos de acceso a archivos; <code>os.listdir()</code> con <code>random.choice</code>; <code>discord.File</code>; qué devuelve una API y cómo lo manejan <code>requests</code>/<code>.json()</code>; las etiquetas HTML esenciales; cómo enlazar una hoja de estilos; y <code>git config</code> más publicar un repositorio desde VS Code.'
        }
      ]},
      {t:'📁 L1 — Archivos, el bot de memes y APIs', cards:[
        {type:'text', h:'Qué enseñar sobre archivos', b:'Dos cosas que el alumnado falla de inmediato: el <strong>nombre y la extensión del archivo</strong> deben ser exactos, y el archivo debe estar <strong>en la carpeta del programa</strong> (o hay que escribir la ruta completa). Presta atención de verdad a la palabra clave <code>with</code> y a los <strong>modos de acceso</strong>: <code>\'rb\'</code>, que lee una imagen como bytes, es lo que necesita el bot. Diles que siempre pueden volver a esta tarea y releer el código.'},
        {type:'code', lbl:'el bot de memes — una imagen y luego una al azar de la carpeta', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">import</span> os, random

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">mem</span>(ctx):
    <span class="cc"># os.listdir nos da todos los nombres de archivo de la carpeta</span>
    img_name = random.<span class="cf">choice</span>(os.<span class="cf">listdir</span>(<span class="cs">'images'</span>))
    <span class="ck">with</span> <span class="cf">open</span>(<span class="cs">f'images/{img_name}'</span>, <span class="cs">'rb'</span>) <span class="ck">as</span> f:
        picture = discord.<span class="ct2">File</span>(f)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(file=picture)

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'El orden de construcción importa', b:'Hazlo en dos pasos, no en uno. Primero un bot que envía <strong>un meme concreto</strong> al recibir <code>$mem</code>: la fontanería funciona. Solo después refínalo para que elija un archivo <strong>al azar</strong> de la carpeta, que es donde <code>os</code> se gana su sitio. Plan de desarrollo del segundo paso: una variable con los nombres de archivo, una variable que elige uno al azar, y luego el envío.'},
        {type:'hi', h:'Las APIs, como tarea adicional', b:'Para quien vaya más rápido: una <strong>API</strong> es un conjunto de funciones y datos ya hechos que expone otro servicio. En lugar de montar tu propia base de datos de fotos de patos, llamas a la API de patos. En Python eso significa la librería <code>requests</code>: envías una petición HTTP, recibes una respuesta JSON y extraes de ella el campo que necesitas. Algunas APIs piden una clave de acceso gratuita; la documentación dice qué peticiones existen y qué devuelven.'},
        {type:'code', lbl:'llamando a una API pública desde el bot (sin clave)', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_duck_image_url</span>():
    url = <span class="cs">'https://random-d.uk/api/random'</span>
    res = requests.<span class="cf">get</span>(url)
    data = res.<span class="cf">json</span>()          <span class="cc"># convierte la respuesta JSON en un diccionario</span>
    <span class="ck">return</span> data[<span class="cs">'url'</span>]

<span class="cd">@bot.command</span>(<span class="cs">'duck'</span>)
<span class="ck">async def</span> <span class="cf">duck</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_duck_image_url</span>())`},
        {type:'text', h:'El tren de la metacognición', b:'Esta clase lleva un segundo hilo que atraviesa los 90 minutos: cinco “estaciones” programadas en las que paras y haces que el alumnado piense sobre <em>cómo</em> está aprendiendo. Estación 1: enuncia los objetivos con claridad. Estación 2: autopreguntas, ¿cómo te ayudó lo que ya sabías a entender esto? Estación 3: ¿qué herramientas y estrategias usaste? Estación 4: evalúa esas estrategias. Estación 5: reflexión final, ¿te servirán estas estrategias fuera de este curso? Lee el cuadernillo del tutor antes de dirigirlo.'},
        {type:'good', txt:'Si alguien se frustró durante la clase, el marco metacognitivo te da algo realmente útil que decir: esa reacción es <strong>válida</strong>, y es información sobre la <em>estrategia</em> que eligió, no sobre su capacidad. Felicítale por haberse dado cuenta: darse cuenta es la habilidad.'},
        {type:'tip', txt:'Hay un <strong>test sumativo</strong> en esta clase (15 minutos). Preséntalo como repaso y no como examen de alto riesgo, y hazlo de forma interactiva. Hay también una tarea creativa: hacer un meme sobre programar bots de Discord, cinco minutos, cronómetro en marcha. Guarda los memes: puedes usarlos como calentamiento durante semanas.'}
      ]},
      {t:'♻️ L2 — El eco-bot, desde cero, para un público', cards:[
        {type:'text', h:'Qué tiene de distinto esta clase', b:'No hay paso a paso. El alumnado construye un <strong>bot completo de diseño propio</strong> en 40 minutos, usando todo lo del Módulo 1 y de la L1. Tu papel pasa de explicar a hacer preguntas que guíen y dar pistas. Aunque cada persona construya el suyo, anímales a ayudarse.'},
        {type:'text', h:'Público objetivo — el concepto que cambia el proyecto', b:'El público objetivo es el grupo de personas para el que construyes; conocer sus problemas es lo que hace útil un producto. La clase ofrece tres públicos para un bot de reducción de residuos: <strong>adolescentes</strong> que quieren reducir la basura doméstica pero no saben por dónde empezar, <strong>personas adultas</strong> en la misma situación, y <strong>gente ya interesada</strong> en prácticas ecológicas que quiere ir más allá. Cada uno implica una funcionalidad distinta: consejos personalizados, una guía paso a paso o una sección de noticias y artículos. Cada alumno elige uno y lo fija públicamente en el chat.'},
        {type:'qa', h:'Ideas de bot que ofrecer si se atascan', items:[
          {k:'Bot de manualidades con plástico', v:'Ideas para reutilizar el plástico de casa.'},
          {k:'Bot de separación', v:'Dice en qué contenedor va cada objeto y qué hay que reciclar.'},
          {k:'Bot de descomposición', v:'Indica cuánto tarda en descomponerse un objeto doméstico dado.'}
        ]},
        {type:'warn', txt:'La etapa de subida a GitHub de esta clase <strong>se evalúa</strong>: el enlace del chat de la tarea es como valoras el proyecto, así que un enlace que falta significa un alumno sin evaluar. Recuérdales otra vez, en voz alta, que el token no sube con el código. Los proyectos aquí valen hasta 50 puntos mediante la herramienta de evaluación.'},
        {type:'hi', h:'Fin del Tema 1 — la etapa de carrera', b:'Esta clase cierra el arco del Módulo 1 del curso con una etapa de cinco minutos que no es relleno: celebra que han terminado un tema que muy poca gente termina y conecta las habilidades con el trabajo real. Partes de YouTube, Facebook, Instagram, Netflix, productos de Google, Spotify y proyectos de la NASA están hechos con Python, que lleva años entre los lenguajes más demandados. Pregúntales si se imaginaban construyendo programas que facilitan la vida a la gente.'}
      ]},
      {t:'🌐 L3 — Front-end, HTML, CSS y Git en VS Code', cards:[
        {type:'text', h:'El marco y el arco de diez clases', b:'Anúncialo: durante las <strong>próximas diez clases</strong> van a construir webs, y acabarán con cinco páginas web distintas en su portafolio de GitHub. El desarrollo web se divide en <strong>front-end</strong> (lo que ve la persona usuaria) y <strong>back-end</strong> (la lógica que lo hace funcionar). El front-end suele ser HTML + CSS + JavaScript; el back-end puede ser PHP, Java, Ruby o <strong>Python</strong>, y el framework web de Python en este curso es <strong>Flask</strong>, que llega en el módulo siguiente.'},
        {type:'qa', h:'La distinción que hay que dejar clara', items:[
          {k:'HTML', v:'Crea el <strong>contenido y la estructura</strong>: texto, imágenes, enlaces. No es un lenguaje de programación.'},
          {k:'CSS', v:'Controla la <strong>apariencia</strong>: colores, fuentes, disposición. Tampoco es un lenguaje de programación.'},
          {k:'Por qué importa para Python', v:'HTML y CSS se convierten en <em>plantillas</em> que Flask rellena con datos. Conocerlos es lo que permite a una persona que programa en Python entregar una página con aspecto acabado.'}
        ]},
        {type:'code', lbl:'la página que construye el alumnado — index.html', code:`<span class="ck">&lt;!DOCTYPE html&gt;</span>
<span class="ct2">&lt;html&gt;</span>
    <span class="ct2">&lt;head&gt;</span>
        <span class="ct2">&lt;title&gt;</span>¡Información útil!<span class="ct2">&lt;/title&gt;</span>
        <span class="ct2">&lt;link</span> <span class="cf">rel</span>=<span class="cs">"stylesheet"</span> <span class="cf">href</span>=<span class="cs">"style.css"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;/head&gt;</span>
    <span class="ct2">&lt;body&gt;</span>
        <span class="ct2">&lt;h1&gt;</span>Dependencia de las redes sociales<span class="ct2">&lt;/h1&gt;</span>
        <span class="ct2">&lt;p&gt;</span>Las redes sociales reducen el tiempo que pasamos en el mundo real.<span class="ct2">&lt;/p&gt;</span>
        <span class="ct2">&lt;img</span> <span class="cf">src</span>=<span class="cs">"phone.gif"</span> <span class="cf">alt</span>=<span class="cs">"Imagen 1"</span><span class="ct2">&gt;</span>
        <span class="ct2">&lt;h2&gt;</span>¿Cómo podemos resistirnos?<span class="ct2">&lt;/h2&gt;</span>
        <span class="ct2">&lt;ul&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Poner límites al tiempo que pasamos con los dispositivos.<span class="ct2">&lt;/li&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Reservar tiempo sin tecnología para desconectar.<span class="ct2">&lt;/li&gt;</span>
        <span class="ct2">&lt;/ul&gt;</span>
    <span class="ct2">&lt;/body&gt;</span>
<span class="ct2">&lt;/html&gt;</span>`},
        {type:'code', lbl:'style.css — y el único cambio que les pides', code:`body {
    font-family: Arial, Verdana, sans-serif;  <span class="cc">/* familia de fuente */</span>
    font-size: 11pt;                          <span class="cc">/* tamaño del texto principal */</span>
    background-color: #f0f0f0;                <span class="cc">/* fondo de la página */</span>
    color: #333;                              <span class="cc">/* color del texto */</span>
}

h1 {
    color: #00a800;                           <span class="cc">/* color del titular */</span>
    font-size: 24pt;
    font-family: Georgia, Times, serif;
}`},
        {type:'text', h:'Git es el programa, GitHub es la web', b:'Explica que <strong>GitHub es una web</strong> y que <strong>git es un programa aparte</strong> en tu máquina que hace el flujo de trabajo mucho más fácil. El paso importante de la instalación es <strong>elegir VS Code</strong> como editor; el resto puede quedarse por defecto. Después inicia sesión en GitHub desde dentro de VS Code —<em>una vez</em>— y publica la página como un nuevo repositorio público directamente desde el editor.'},
        {type:'warn', txt:'Si git se niega a funcionar, la solución casi siempre es la identidad. Ejecútalo con los datos del propio alumno: <code>git config --global user.email "tu@ejemplo.com"</code> y <code>git config --global user.name "Tu Nombre"</code>. Demuestra primero la instalación entera; si alguien no puede seguir el ritmo, que la termine en casa con la grabación de la clase en lugar de frenar al grupo.'},
        {type:'tip', txt:'Mantén el HTML y el CSS superficiales a propósito. La nota de la clase es explícita: el alumnado necesita solo lo básico esencial, sin profundizar. Cuatro etiquetas y un par de reglas de CSS es el objetivo; la profundidad llega después, con los proyectos.'}
      ]},
      {t:'✨ L4 — UI/UX, animación y widgets', cards:[
        {type:'text', h:'Enseña UI/UX mediante crítica, no mediante exposición', b:'No conviertas esto en un monólogo. Abre una web real deliberadamente mala —el curso usa la de la Yale School of Art— y haz que sea el <em>alumnado</em> quien diga qué está mal, dando el turno a todo el mundo. Después organiza sus respuestas en los dos grupos.'},
        {type:'twocol', left:{h:'❌ Problemas de UX (experiencia)', items:['<strong>Navegación compleja</strong>: menús sobrecargados y poco intuitivos','<strong>Sin jerarquía de la información</strong>: muros de texto sin estructura','<strong>Accesibilidad pobre</strong>: fuentes diminutas, poco contraste','<strong>Elementos que distraen</strong>: animación y color que apartan la atención del contenido']}, right:{h:'❌ Problemas de UI (interfaz)', items:['<strong>Estilo inconsistente</strong>: sin diseño unificado, caos visual','<strong>Interfaz impredecible</strong>: cosas que parecen enlaces y no lo son','<strong>Sin adaptabilidad</strong>: inutilizable en el móvil']}},
        {type:'code', lbl:'animación en CSS con @keyframes — y la variante :hover', code:`<span class="cd">@keyframes</span> color-change {
    0%   { color: blue; }
    50%  { color: red; }
    100% { color: blue; }
}

h1 {
    animation: color-change 3s infinite;
}

<span class="cc">/* añade :hover y solo se anima bajo el cursor */</span>
h1:hover {
    animation: color-change 3s infinite;
}`},
        {type:'text', h:'Widgets con &lt;iframe&gt;', b:'Un <strong>widget</strong> es la aplicación de otra persona incrustada en tu página, usando la etiqueta <code>&lt;iframe&gt;</code>. El ejemplo de la clase encaja bien con el tema: incrustar una <strong>previsión del tiempo</strong> para animar a quien lee una página sobre adicción a la tecnología a salir a la calle. Las webs de widgets te dejan configurar la apariencia y copiar el código <code>&lt;iframe&gt;</code> ya hecho.'},
        {type:'good', txt:'Fíjate en cómo conectan las dos mitades de esta clase: acabas de enseñar que la animación puede ser un <em>problema</em> de UX y a continuación enseñas a animar. Haz explícita esa tensión: “ahora que sabes hacerlo, ¿cuándo deberías?”. Su propia crítica de la web mala se convierte en el listón que se aplican a sí mismos.'},
        {type:'tip', txt:'Cierra con el test de repaso y termina con las dos preguntas de reflexión que sugiere el plan: ¿qué principio de UX te parece más importante y cuál vas a usar de verdad en tus propias aplicaciones? Los deberes son una tarea de “limpia el proyecto”, que prepara las estructuras de carpetas más complejas que necesita Flask en el módulo siguiente.'}
      ]}
    ],
    quiz:[
      {q:'¿Por qué el bot de memes abre el archivo de imagen en modo \'rb\'?', opts:['Una imagen es un dato binario, así que hay que leerla como bytes y no como texto','Porque \'rb\' significa “random bytes”, que es lo que elige la imagen','Porque Discord solo acepta archivos abiertos en modo lectura','Es arbitrario: cualquier modo funciona'], c:0, fb:'Los modos de acceso importan: \'rb\' lee el archivo como bytes en bruto, que es lo que necesita discord.File para una imagen.'},
      {q:'¿Qué devuelve os.listdir(\'images\') y por qué lo necesita el bot de memes?', opts:['Todos los nombres de archivo de la carpeta, para que random.choice pueda elegir uno en lugar de enviar siempre la misma imagen','El tamaño de la carpeta en bytes','Una lista de archivos ya abiertos listos para enviar','Los permisos de la carpeta, que Discord comprueba'], c:0, fb:'El bot se construye en dos pasos: primero enviando una imagen fija y luego usando os.listdir con random.choice para elegir cualquier archivo de la carpeta.'},
      {q:'Un alumno quiere que su bot envíe fotos aleatorias de patos. ¿Cuál es el enfoque profesional que enseña el curso?', opts:['Llamar a una API pública con la librería requests y leer la URL de la respuesta JSON','Descargar varios cientos de fotos de patos en la carpeta images','Pedir a cada persona usuaria que suba antes una foto de pato','Generar los patos con un modelo de imagen'], c:0, fb:'Ese es el sentido de la tarea de API: en lugar de montar tu propia base de datos, usas una API que ya proporciona los datos; requests envía la llamada HTTP y .json() interpreta la respuesta.'},
      {q:'¿Qué es un público objetivo y por qué la clase del eco-bot hace que el alumnado elija uno?', opts:['Es el grupo concreto para el que es el producto — conocer sus problemas es lo que hace el bot realmente útil, y cambia qué funcionalidades se construyen','Un número mínimo de personas usuarias que debe alcanzar el bot','El conjunto de servidores de Discord en los que puede entrar el bot','Los compañeros de clase que probarán el bot'], c:0, fb:'La clase ofrece tres públicos para el mismo bot, cada uno implicando una funcionalidad distinta: consejos personalizados, una guía paso a paso o una sección de noticias.'},
      {q:'¿Cuál de estas afirmaciones sobre HTML, CSS y Python es correcta?', opts:['HTML estructura el contenido y CSS le da estilo — ninguno es un lenguaje de programación, y ambos se convierten en plantillas que Flask rellena con datos','Los tres son lenguajes de programación que se usan en el front-end','CSS es el back-end y HTML el front-end','HTML es una librería de Python'], c:0, fb:'HTML crea el contenido, CSS controla la apariencia, y conocer ambos es lo que permite a una aplicación Flask entregar una página con aspecto acabado.'},
      {q:'El commit de un alumno falla con un mensaje sobre la identidad. ¿Qué ejecutas?', opts:['git config --global user.email y git config --global user.name, con sus propios datos','git init --force','pip install git','git reset --hard'], c:0, fb:'Las notas de M2L3 dan exactamente esos dos comandos como solución cuando git aún no está configurado en esa máquina.'},
      {q:'Estás enseñando UI/UX. ¿Qué dice la clase que NO hay que hacer?', opts:['Convertirlo en una exposición unilateral — debe ser el alumnado quien identifique los problemas en una web mala de verdad','Enseñar una web real, porque podría resultar ofensiva','Mencionar la accesibilidad, que queda fuera de la franja de edad','Dejar que el alumnado discrepe entre sí'], c:0, fb:'La nota de puntos importantes es explícita: no conviertas esto en una clase magistral, provoca un debate y, a poder ser, da la palabra a todo el mundo.'},
      {q:'¿Qué cambia al añadir :hover al selector de una animación en CSS?', opts:['La animación solo se ejecuta mientras el ratón está sobre el elemento','La animación va el doble de rápido','La animación se repite indefinidamente en lugar de una vez','Desactiva la animación en el móvil'], c:0, fb:'La clase hace que el alumnado añada :hover precisamente para ver que la animación pasa a reproducirse solo cuando el cursor está encima del elemento.'},
      {q:'¿Qué es un widget en el contexto de esta clase y cómo se incrusta?', opts:['La aplicación de otra persona mostrada dentro de tu página, incrustada con la etiqueta &lt;iframe&gt;','Una animación de CSS que reacciona a la persona usuaria','Una función de Python que devuelve HTML','Una función de GitHub para compartir páginas'], c:0, fb:'Los widgets son aplicaciones de terceros incrustadas mediante <iframe>; la clase incrusta una previsión del tiempo en la página sobre adicción a la tecnología.'}
    ]
  },
  {
    id:7, emoji:'🌐', color:'#2FA37C',
    title:'M3 — Flask y Plantillas Jinja',
    desc:'Módulo 3 del curso: entornos virtuales, instalar Flask, rutas y f-strings, plantillas y variables de Jinja, ramas de repositorio, formularios HTML y elementos interactivos.',
    obj:'Enseñar al alumnado a construir una aplicación web real en Python. Debes saber explicar por qué existe un entorno virtual, instalar Flask dentro de él, desmenuzar el ejemplo de la documentación, enseñar rutas y <code>url_for</code>, explicar qué hace un motor de plantillas, conectar un formulario HTML con una ruta de Flask y dirigir una clase de EduScrum dentro del tiempo.',
    prep:'~5 o 6 horas. Es el primer módulo que no puedes dar solo leyendo.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 3 del curso, debes haber CONSTRUIDO PERSONALMENTE UNA APLICACIÓN FLASK QUE FUNCIONE. En concreto:',
      items:[
        'Creó un entorno con pipenv e instaló Flask dentro de él',
        'Escribió una app de una sola ruta que devuelve HTML, con <code>app.run(debug=True)</code>, y la abrió en un navegador',
        'Añadió una segunda ruta con su propia URL y enlazó las dos páginas entre sí',
        'Pasó de devolver cadenas a <code>render_template</code> con una carpeta <code>templates/</code> de verdad',
        'Pasó una variable a una plantilla y la mostró con <code>{{ }}</code> de Jinja',
        'Construyó un <code>&lt;form&gt;</code> HTML, lo leyó con <code>request.form</code> y mostró el resultado en otra página',
        'Lo rompió a propósito poniendo <code>id</code> sin <code>name</code>, y vio el KeyError',
        'Usó <code>url_for()</code> en un enlace, y un <code>&lt;select&gt;</code> cuyo valor llega a Python',
        'Descargó un proyecto desde una rama del repositorio'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> entornos virtuales, instalar Flask, la primera ruta y las f-strings, más una segunda página con su propia URL; <strong>L2</strong> Jinja, <code>render_template</code> y variables de plantilla, construyendo una calculadora de energía para casas inteligentes; <strong>L3</strong> una clase de EduScrum sobre ramas de repositorio, <code>url_for</code> y formularios HTML; <strong>L4</strong> elementos interactivos y un generador de memes que cambia la página dinámicamente.',
          why:'Este es el módulo en el que Python empieza a servir páginas web. Todo lo de los módulos 4 y 7 del curso se apoya directamente en él, así que una noción floja de rutas o plantillas bloquea el resto del itinerario web.',
          learn:'El alumnado aísla un proyecto con un entorno virtual, instala Flask con <code>pipenv</code>, escribe rutas, devuelve contenido dinámico con f-strings, renderiza páginas HTML completas con Jinja, pasa variables a plantillas, descarga un proyecto desde una rama, construye un formulario y lee sus datos, y controla una página a partir de valores de <code>&lt;select&gt;</code> e <code>&lt;input&gt;</code>.',
          confident:'Por qué un entorno virtual evita conflictos de dependencias; <code>pipenv install flask</code>; <code>@app.route</code> y <code>app.run(debug=True)</code>; la diferencia entre devolver una cadena y <code>render_template</code>; <code>{{ }}</code> de Jinja; <code>url_for()</code>; y <code>request.form</code> con <code>methods=[\'GET\',\'POST\']</code>.'
        }
      ]},
      {t:'🧪 L1 — Entornos virtuales, Flask y rutas', cards:[
        {type:'text', h:'Qué es un entorno virtual, en palabras llanas', b:'Una herramienta que <strong>aísla un proyecto y sus dependencias</strong> de todos los demás proyectos. Eso evita conflictos de versiones entre librerías, facilita llevar el proyecto a otra máquina y hace que los paquetes instalados para este proyecto no contaminen el resto. Una vez dentro de uno creado con <code>pipenv</code>, las librerías hay que instalarlas ahí: <code>pipenv install flask</code>, no un <code>pip install</code> a secas.'},
        {type:'warn', txt:'No te pases del tiempo en esta etapa: el tema importante viene después. Si alguien no consigue que su entorno funcione, <strong>anímale y sigue adelante</strong>: dile explícitamente que eso no le va a impedir hacer el trabajo de hoy y que puede volver a intentarlo más tarde. Perder veinte minutos aquí te cuesta la etapa de las rutas.'},
        {type:'text', h:'Que lean la documentación, no les dictes el código', b:'Envía el enlace a la documentación de Flask y pídeles que <strong>encuentren solos el ejemplo de página básica</strong> (enséñales dónde está el primer ejemplo si se pierden). Después explica cómo ejecutarlo y probarlo, y desmenuzad el código juntos. Es el hábito de documentación de M1L4 usándose de verdad, un módulo después.'},
        {type:'code', lbl:'la primera aplicación Flask — una ruta, contenido dinámico, f-strings', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask
<span class="ck">import</span> random

app = <span class="ct2">Flask</span>(__name__)

facts_list = [
    <span class="cs">"Más del 50% de las personas de 18 a 34 años se consideran dependientes del móvil."</span>,
    <span class="cs">"Las redes sociales tienen cosas buenas y malas: conviene ser consciente de ambas."</span>
]

<span class="cd">@app.route</span>(<span class="cs">"/"</span>)
<span class="ck">def</span> <span class="cf">facts</span>():
    <span class="cc"># una f-string evalúa lo que haya dentro de las llaves</span>
    <span class="ck">return</span> <span class="cs">f'&lt;p&gt;{random.choice(facts_list)}&lt;/p&gt;'</span>

app.<span class="cf">run</span>(debug=<span class="ck">True</span>)`},
        {type:'text', h:'Y luego esconde la página tras su propia URL', b:'Una <strong>URL</strong> es la dirección de una página: la escribes, el navegador se la pide al servidor y el servidor devuelve la página de esa dirección. La tarea es sacar el dato aleatorio de la página de inicio y llevarlo a <code>/random_fact</code>, dar a la página de inicio un mensaje de bienvenida y enlazar ambas con <code>&lt;a href="/random_fact"&gt;¡Ver un dato al azar!&lt;/a&gt;</code>. Dos rutas, dos funciones: ese es el modelo mental que necesitan antes de Jinja.'},
        {type:'tip', txt:'Propón que un alumno haga de tutor durante la etapa de instalación de Flask y muestre su pantalla. Es más rápido que narrarlo tú, y es una de las jugadas de diferenciación que este curso usa constantemente con el alumnado más fuerte.'}
      ]},
      {t:'🧩 L2 — Plantillas Jinja y la calculadora de energía', cards:[
        {type:'text', h:'El problema: la crisis energética', b:'Abre con las casas inteligentes: ¿son buenas o malas, y qué tipo de vivienda daña más el medio ambiente? Una <strong>crisis energética</strong> es cuando la demanda de recursos energéticos supera notablemente a la oferta. La mayor parte de la energía sigue viniendo de fuentes no renovables, y generarla y transportarla contamina el aire, el agua y el suelo. El proyecto es una calculadora que estima la eficiencia energética de una casa inteligente.'},
        {type:'qa', h:'Las tres cosas que te da Jinja', items:[
          {k:'Plantillas', v:'Páginas HTML ya hechas que puedes cambiar y personalizar dinámicamente.'},
          {k:'Páginas enteras, no etiquetas', v:'El alumnado ya sabe devolver etiquetas HTML sueltas desde Flask. Importa <code>render_template</code> y podrás devolver una página completa.'},
          {k:'Variables en el HTML', v:'El premio de verdad: incrustar valores de Python en la página con <code>{{ }}</code> y cambiarlos sobre la marcha.'}
        ]},
        {type:'code', lbl:'de devolver una cadena a renderizar una página', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask, render_template

<span class="cd">@app.route</span>(<span class="cs">'/'</span>)
<span class="ck">def</span> <span class="cf">index</span>():
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>)`},
        {type:'code', lbl:'variables de Jinja dentro de la plantilla', code:`<span class="cc">&lt;!-- size y lights son valores que llegan desde Python --&gt;</span>
<span class="ct2">&lt;li</span> <span class="cf">class</span>=<span class="cs">"list__item"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ size + "/7" }}"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;img</span> <span class="cf">class</span>=<span class="cs">"item__img"</span> <span class="cf">src</span>=<span class="cs">"../static/img/light.svg"</span> <span class="cf">alt</span>=<span class="cs">"light"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;span&gt;</span>4-6 bombillas<span class="ct2">&lt;/span&gt;</span>
  <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/li&gt;</span>`},
        {type:'text', h:'Cómo se dirige la clase', b:'Instala Jinja2, descarga el proyecto del repositorio y después <strong>divide al alumnado por parejas en salas de trabajo</strong>. Su tarea es analizar la plantilla y conectar el front-end con el back-end; en concreto, averiguar qué trozo de código es responsable de qué página. Quien no quiera emparejarse puede estudiarlo en solitario. Después todo el mundo trabaja las tareas de la plantilla, y la clase termina con una tarea creativa: inventar tu propia tarjeta de eco-construcción, con su descripción, su coeficiente y su imagen.'},
        {type:'tip', txt:'Pide al alumnado más fuerte que mire con más detalle la documentación de Jinja como tarea adicional, en lugar de correr por delante en el proyecto. Eso les mantiene dentro del tema del día y refuerza el hábito de la documentación.'}
      ]},
      {t:'🌿 L3 — Ramas, url_for y formularios (EduScrum)', cards:[
        {type:'hi', h:'Esta es una clase de EduScrum — la habilidad es el tiempo', b:'La clase está montada como <strong>dos sprints con retrospectivas</strong>. Di en voz alta el límite de tiempo de cada sprint. La nota de la clase es tajante sobre el modo de fallo: si vas retrasado, <strong>pasa igualmente a la retrospectiva</strong> y comentad qué salió mal. Terminar todas las tareas importa menos que el grupo viva un ciclo de sprint completo.'},
        {type:'qa', h:'Las preguntas de la retrospectiva', items:[
          {k:'1', v:'¿Qué habéis conseguido? ¿Os dio tiempo a todo?'},
          {k:'2', v:'¿Qué etapa fue la más difícil?'},
          {k:'3', v:'¿Cómo mejoraríais este sprint?'}
        ]},
        {type:'text', h:'Ramas de repositorio — la metáfora que funciona', b:'Una <strong>rama</strong> es como una copia del repositorio hecha para una tarea concreta. Pregúntales: tu proyecto lo usa gente todos los días y necesitas cambiar algo, ¿paras el proyecto entero mientras desarrollas? Evidentemente no. Creas una rama, desarrollas y pruebas ahí, y la fusionas con el proyecto principal cuando estás seguro de que funciona. En esta clase el objetivo práctico es simplemente encontrar la rama correcta y descargar de ella los archivos del proyecto.'},
        {type:'text', h:'url_for y formularios', b:'Explica <code>url_for()</code>: construye una URL a partir del <em>nombre de la función de vista</em> en lugar de una ruta fija, así que los enlaces no se rompen cuando cambian las rutas. Después los formularios: enséñales el formulario que ellos mismos rellenaron al apuntarse a Kodland, para que <code>&lt;form&gt;</code> e <code>&lt;input&gt;</code> lleguen como algo familiar y no abstracto.'},
        {type:'code', lbl:'el enlace, el campo y la ruta que los recibe', code:`<span class="cc">&lt;!-- un enlace construido a partir del nombre de la función de vista --&gt;</span>
<span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ url_for('form') }}"</span> <span class="cf">class</span>=<span class="cs">"main__link"</span><span class="ct2">&gt;</span>Rellena el formulario<span class="ct2">&lt;/a&gt;</span>

<span class="cc">&lt;!-- un campo que recoge un correo --&gt;</span>
<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"email"</span><span class="ct2">&gt;</span>Correo<span class="ct2">&lt;/label&gt;</span>
<span class="ct2">&lt;input</span> <span class="cf">type</span>=<span class="cs">"email"</span> <span class="cf">name</span>=<span class="cs">"email"</span> <span class="cf">id</span>=<span class="cs">"email"</span> <span class="cf">required</span><span class="ct2">&gt;</span>`},
        {type:'code', lbl:'leyendo el formulario desde Python', code:`<span class="cd">@app.route</span>(<span class="cs">'/submit'</span>, methods=[<span class="cs">'GET'</span>, <span class="cs">'POST'</span>])
<span class="ck">def</span> <span class="cf">submit_form</span>():
    name    = request.form[<span class="cs">'name'</span>]      <span class="cc"># la clave es el name="" del campo</span>
    email   = request.form[<span class="cs">'email'</span>]
    address = request.form[<span class="cs">'address'</span>]
    date    = request.form[<span class="cs">'date'</span>]

    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'form_result.html'</span>,
                           name=name, email=email,
                           address=address, date=date)`},
        {type:'warn', txt:'El fallo más común con los formularios: <code>request.form[\'email\']</code> lee el atributo <strong><code>name</code></strong> del campo, no su <code>id</code>. El alumnado pone <code>id</code> y olvida <code>name</code>, y le sale un KeyError. Dilo una vez al principio y te ahorras cinco interrupciones.'},
        {type:'tip', txt:'Los deberes amplían el formulario para que además guarde la información enviada en un archivo <code>.txt</code>, lo que repasa de forma discreta el manejo de archivos del Módulo 2 del curso y anticipa por qué una base de datos es mejor idea. Esa es toda la preparación del módulo siguiente.'}
      ]},
      {t:'🎭 L4 — Elementos interactivos y el generador de memes', cards:[
        {type:'text', h:'Qué se construye', b:'Un <strong>generador de memes</strong>: la persona usuaria elige una plantilla en un <code>&lt;select&gt;</code>, escribe su texto en los campos y la página se actualiza con el meme terminado. El alumnado descarga el proyecto del repositorio, caza los elementos dentro de él, añade sus propios memes al <code>&lt;select&gt;</code> y después escribe el back-end que recibe el texto y lo mete en la plantilla, incluido el uso de una variable de Jinja dentro del CSS para dar estilo al texto.'},
        {type:'qa', h:'Las etiquetas que presenta esta clase', items:[
          {k:'&lt;select&gt;', v:'Una lista desplegable: el contenedor.'},
          {k:'&lt;option&gt;', v:'Una opción dentro del desplegable.'},
          {k:'El patrón', v:'Leer el valor elegido desde Python exactamente igual que cualquier otro campo de formulario y luego pasarlo a la plantilla.'}
        ]},
        {type:'hi', h:'El minijuego “¡encuéntralo si puedes!”', b:'Antes de escribir nada de código: recuérdales brevemente qué aspecto tiene cada elemento y luego dales <strong>dos minutos</strong> para encontrarlos todos ellos solos en el proyecto. Pregunta después cuántos encontraron. Convierte leer una base de código desconocida —una habilidad genuinamente difícil— en un juego con cronómetro, y hace que lleguen orientados antes de empezar a editar.'},
        {type:'good', txt:'Termina con el concurso de mejor meme: el alumnado usa la herramienta que acaba de construir para generar memes, los pega como captura en el chat del grupo y vota. Quien gane se lleva el derecho a publicar un meme por semana en el chat. Cuesta diez minutos y hace que el proyecto se sienta entregado, que es exactamente la sensación que el curso está diseñando.'},
        {type:'tip', txt:'Vigila qué eligen mientras cazan memes. El plan te pide que supervises su selección y ayudes con la búsqueda, en parte para mantener el ritmo y en parte porque eres responsable de lo que acaba en un proyecto compartido de clase.'}
      ]}
    ],
    quiz:[
      {q:'Un alumno pregunta para qué necesita un entorno virtual. ¿Cuál es la respuesta correcta?', opts:['Aísla el proyecto y sus dependencias, evitando conflictos de versiones y facilitando llevar el proyecto a otra máquina','Hace que Python se ejecute más rápido','Lo exige Flask y no tiene otra finalidad','Oculta el código a otras personas que usen el ordenador'], c:0, fb:'Un entorno virtual aísla las dependencias de un proyecto, evita conflictos entre versiones de librerías y mantiene los paquetes instalados por proyecto.'},
      {q:'Dentro de un proyecto gestionado con pipenv, ¿cómo instala Flask un alumno?', opts:['pipenv install flask — así va al entorno de ese proyecto','pip install flask, que siempre funciona igual','Descargando Flask de la web y copiando la carpeta dentro','Flask viene incluido en Python y no necesita instalación'], c:0, fb:'Instalar librerías funciona igual en general, pero dentro de un entorno pipenv hay que instalar en ese entorno: pipenv install flask.'},
      {q:'¿Cuál es la diferencia entre devolver una f-string con HTML y usar render_template?', opts:['Una f-string devuelve un trozo pequeño de HTML desde la función; render_template devuelve una página HTML entera desde la carpeta templates','render_template es la forma antigua de hacer lo mismo','Una f-string puede incluir variables y render_template no','render_template solo funciona para la página de inicio'], c:0, fb:'Ese es justamente el paso de M3L1 a M3L2: Flask puede devolver etiquetas directamente, pero render_template de Jinja devuelve páginas enteras y permite inyectarles variables.'},
      {q:'¿Por qué el curso enseña url_for() en lugar de href fijos?', opts:['Construye la URL a partir del nombre de la función de vista, así que los enlaces siguen funcionando si cambia la ruta','Es más corto de escribir','Cifra la URL','Es obligatorio para cualquier enlace dentro de un formulario'], c:0, fb:'url_for() referencia la función y no la ruta, y por eso los enlaces de la calculadora usan {{ url_for(\'form\') }}.'},
      {q:'El formulario de un alumno se envía pero Flask lanza un KeyError en request.form[\'email\']. ¿Cuál es la causa más probable?', opts:['El campo tiene id pero no un atributo name que le corresponda — request.form lee el name','Se olvidó de importar Flask','A la ruta le falta debug=True','El formulario necesita una base de datos antes de poder leerse'], c:0, fb:'request.form se indexa por el atributo name del campo. Poner solo el id es el error clásico de quien empieza.'},
      {q:'¿Cómo le explicarías una rama de repositorio a un alumno?', opts:['Una copia del proyecto hecha para una tarea concreta, desarrollada y probada aparte, y fusionada con el proyecto principal cuando funciona','Una copia de seguridad que se hace automáticamente cada día','Una segunda cuenta de GitHub para el mismo proyecto','Una carpeta dentro del repositorio para versiones antiguas'], c:0, fb:'El planteamiento de la clase: no puedes parar un proyecto en uso para cambiarlo, así que creas una rama, pruebas y fusionas cuando estás seguro.'},
      {q:'Llevas veinte minutos de una clase de EduScrum y vas claramente retrasado. ¿Qué manda hacer el curso?', opts:['Pasar igualmente a la retrospectiva y comentar qué salió mal — el ciclo del sprint importa más que terminar todas las tareas','Saltarse la retrospectiva y seguir programando hasta acabar las tareas','Alargar la clase más allá de su hora','Dar el código de la solución para que se pongan al día'], c:0, fb:'La nota de EduScrum es explícita: la gestión estricta del tiempo es el objetivo. Si te retrasas, pasa a la retrospectiva y coméntalo.'},
      {q:'Un alumno no consigue que funcione su entorno virtual y la etapa de Flask está a punto de empezar. ¿Cuál es la jugada correcta?', opts:['Tranquilizarle diciendo que eso no bloquea el trabajo de hoy, seguir con la clase y ayudarle a reintentarlo después','Parar la clase hasta que funcione para todo el mundo','Decirle que se salte el módulo','Hacer que trabaje sin Python el resto del curso'], c:0, fb:'La nota de la clase dice exactamente esto: no te pases del tiempo asignado, anima al alumno y dile que eso no le impedirá hacer el trabajo de hoy.'},
      {q:'¿Cuál es el propósito del minijuego “¡encuéntralo si puedes!” en la clase del generador de memes?', opts:['Que el alumnado se oriente en una base de código desconocida —una habilidad real— antes de empezar a editarla','Comprobar si memorizaron la lista de etiquetas HTML','Llenar tiempo mientras se descarga el proyecto','Decidir quién presenta al final'], c:0, fb:'Dos minutos para localizar ellos mismos los elementos convierten leer código desconocido en un juego, y hacen que sepan moverse antes de tocar nada.'}
    ]
  },
  {
    id:8, emoji:'🗄️', color:'#7C5CFC',
    title:'M4 — Bases de Datos, Autenticación y Despliegue',
    desc:'Módulo 4 del curso: LiveCoding, bases de datos con SQLAlchemy, clases, conectar la base de datos al HTML, registro e inicio de sesión, despliegue en PythonAnywhere y la web de portafolio.',
    obj:'Enseñar al alumnado a almacenar y recuperar datos reales y a poner una web en internet. Debes saber dirigir bien una clase de LiveCoding, definir una clase de modelo, explicar las clases usando el propio Flask, montar registro e inicio de sesión con sesiones, desplegar en PythonAnywhere incluido el archivo WSGI y tratar con honestidad la advertencia sobre el almacenamiento de contraseñas.',
    prep:'~6 o 7 horas. El módulo más pesado de la formación. Reserva dos sesiones.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 4 del curso debes haber CONSTRUIDO PERSONALMENTE LA APP DEL DIARIO DE PRINCIPIO A FIN — se espera que hagas LiveCoding de esto delante del alumnado, y eso es imposible solo leyendo. En concreto:',
      items:[
        'Instaló <code>flask_sqlalchemy</code> y definió una clase de modelo con campos <code>db.Column</code> y una <code>primary_key</code>',
        'Creó el archivo <code>.db</code> y guardó un registro con <code>db.session.add()</code> y después <code>commit()</code>',
        'Omitió el <code>commit()</code> a propósito y confirmó que no se guarda nada y no salta ningún error',
        'Leyó registros con <code>.query.all()</code>, <code>.order_by()</code> y <code>.get(id)</code>, y los mostró en una plantilla',
        'Añadió una segunda tabla <code>User</code>, se topó con el error “no such table” y lo arregló borrando y recreando el <code>.db</code>',
        'Construyó registro e inicio de sesión, con <code>session</code> y <code>secret_key</code>, y filtró las entradas con <code>filter_by()</code>',
        'Desplegó una app que funciona en <strong>PythonAnywhere</strong>, incluida la edición del archivo WSGI, y la abrió en el móvil',
        'Rompió el despliegue a propósito y encontró la causa en el registro de errores',
        'Ensayó en voz alta la advertencia de una frase sobre el hash de contraseñas'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> bases de datos y el “Diario del Programador”, con LiveCoding, más clases; <strong>L2</strong> una tabla de personas usuarias, registro e inicio de sesión con sesiones; <strong>L3</strong> una clase de EduScrum desplegando en <strong>PythonAnywhere</strong>; <strong>L4</strong> tres sprints construyendo y publicando una web de portafolio, y luego el hito de la mitad del curso.',
          why:'Una web que olvida todo en cuanto la cierras no es una aplicación. En este módulo los proyectos del alumnado ganan memoria y una dirección pública, y es el punto álgido técnico del itinerario web.',
          learn:'El alumnado crea una base de datos SQLite con <code>flask_sqlalchemy</code>, define tablas como clases, guarda y consulta registros, construye registro e inicio de sesión, mantiene a la persona conectada en la <code>session</code>, despliega una app funcionando en una URL real y entrega una web de portafolio con una lista dinámica de proyectos y un formulario de contacto.',
          confident:'El método LiveCoding; la definición de campos con <code>db.Column</code> y <code>primary_key</code>; <code>db.session.add()</code> / <code>commit()</code>; <code>Card.query.all()</code> / <code>get(id)</code> / <code>filter_by()</code>; <code>session</code> más <code>secret_key</code>; el paso del WSGI en PythonAnywhere; y la advertencia honesta sobre contraseñas en texto plano.'
        }
      ]},
      {t:'🎥 L1 — LiveCoding, bases de datos y clases', cards:[
        {type:'hi', h:'LiveCoding — el método sobre el que se construye esta clase', b:'LiveCoding significa que el tutor <strong>construye el código gradualmente junto al alumnado</strong>, compartiendo su pantalla. Lo importante no es el resultado terminado, sino que el alumnado vea programar como un proceso continuo lleno de pequeñas decisiones, y no como algo que llega hecho.'},
        {type:'qa', h:'Cómo hacer bien LiveCoding', items:[
          {k:'Narra', v:'Habla mientras programas; explica la lógica de cada acción.'},
          {k:'Pregunta', v:'Mantén al alumnado enganchado con preguntas en lugar de un monólogo.'},
          {k:'Comete errores', v:'Los errores están bien: comete algunos <em>a propósito</em> y pide que los encuentren.'},
          {k:'Ve despacio', v:'No corras. Haz pausas para que puedan alcanzarte.'},
          {k:'Dibuja', v:'Usa las herramientas de anotación de Zoom para visualizar la lógica.'},
          {k:'Que se lea', v:'Fuente grande y clara, y escribe en bloques de código para que la estructura se vea y sea fácil de explicar.'}
        ]},
        {type:'text', h:'El proyecto y su gancho', b:'El <strong>Diario del Programador</strong>: una aplicación web con una base de datos real detrás. El marco es la privacidad: todo lo que hacemos vive en internet, ¿puedes confiar en que tus datos están a salvo? Hoy aprenden a construir un servicio genuinamente confidencial, porque son <em>ellos</em> quienes guardan los datos. Una <strong>base de datos</strong> es una colección organizada de datos que permite almacenar, gestionar y recuperar información.'},
        {type:'code', lbl:'la tabla, definida como una clase', code:`<span class="ck">class</span> <span class="ct2">Card</span>(db.<span class="ct2">Model</span>):
    <span class="cc"># cada campo se convierte en una columna</span>
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>)
    title    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    subtitle = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">300</span>), nullable=<span class="ck">False</span>)
    text     = db.<span class="ct2">Column</span>(db.<span class="ct2">Text</span>, nullable=<span class="ck">False</span>)

    <span class="ck">def</span> <span class="cf">__repr__</span>(self):
        <span class="ck">return</span> <span class="cs">f'&lt;Card {self.id}&gt;'</span>`},
        {type:'text', h:'Las clases, enseñadas después — a propósito', b:'Fíjate en el orden de la clase: el alumnado <strong>construye primero la tabla</strong> y solo después explicas las clases. Es intencionado, porque a esas alturas tienen una pregunta real: “¿por qué hemos escrito <code>class</code>?”. En Python todo es un objeto, y las clases son los planos a partir de los cuales se hacen los objetos. El ejemplo definitivo lo tienen delante: <strong>Flask es una clase</strong>, con sus propios métodos y funciones, que llevan usando todo el módulo.'},
        {type:'code', lbl:'guardando y leyendo registros', code:`<span class="cc"># guarda una entrada nueva</span>
card = <span class="ct2">Card</span>(title=title, subtitle=subtitle, text=text)
db.session.<span class="cf">add</span>(card)
db.session.<span class="cf">commit</span>()

<span class="cc"># todas las entradas, por orden de id, para la página de inicio</span>
cards = <span class="ct2">Card</span>.query.<span class="cf">order_by</span>(<span class="ct2">Card</span>.id).<span class="cf">all</span>()
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>, cards=cards)

<span class="cc"># una entrada concreta, por su id</span>
card = <span class="ct2">Card</span>.query.<span class="cf">get</span>(id)
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'card.html'</span>, card=card)`},
        {type:'warn', txt:'<code>add()</code> sin <code>commit()</code> es el fallo de esta clase: no se guarda nada y no hay ningún error que te avise. Haz que digan el par en voz alta —“add y luego commit”— igual que decían “el primer elemento es el elemento cero” en Python Basic.'}
      ]},
      {t:'🔑 L2 — Personas usuarias, registro e inicio de sesión', cards:[
        {type:'text', h:'Qué construye la clase', b:'Descarga el proyecto actualizado desde su <strong>rama</strong>, añade una segunda tabla para las personas usuarias, añade campos de usuario y contraseña a <code>login.html</code>, guarda a quien se registra y después comprueba un inicio de sesión contra la base de datos. Cada paso consolida algo de la L1: esta clase es deliberadamente una repetición de las mismas habilidades sobre contenido nuevo.'},
        {type:'code', lbl:'la tabla User', code:`<span class="ck">class</span> <span class="ct2">User</span>(db.<span class="ct2">Model</span>):
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>, autoincrement=<span class="ck">True</span>)
    email    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    password = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">30</span>), nullable=<span class="ck">False</span>)`},
        {type:'code', lbl:'la comprobación de inicio de sesión — un bucle sobre la tabla', code:`users_db = <span class="ct2">User</span>.query.<span class="cf">all</span>()

<span class="ck">for</span> user <span class="ck">in</span> users_db:
    <span class="ck">if</span> form_login == user.email <span class="ck">and</span> form_password == user.password:
        session[<span class="cs">'user_email'</span>] = user.email   <span class="cc"># recuerda quién ha iniciado sesión</span>
        <span class="ck">return</span> <span class="cf">redirect</span>(<span class="cs">'/index'</span>)

<span class="cc"># ninguna coincidencia en la tabla → muestra un error</span>
error = <span class="cs">'Usuario o contraseña incorrectos'</span>
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'login.html'</span>, error=error)`},
        {type:'text', h:'La sesión es lo que hace personal el diario', b:'Una vez fijado <code>session[\'user_email\']</code>, la ruta de inicio puede filtrar las entradas de esa persona: <code>Card.query.filter_by(user_email=email).all()</code>. Eso exige tener definido <code>app.secret_key</code> y que la tabla <code>Card</code> haya ganado una columna <code>user_email</code>. Señala la diferencia entre <code>.all()</code> y <code>.filter_by(...).all()</code>: es la idea entera de “mis datos” en una línea.'},
        {type:'warn', txt:'Di la advertencia de seguridad en voz alta, en una frase: <strong>las aplicaciones reales nunca guardan la contraseña en sí</strong>, guardan una huella cifrada llamada hash, de modo que ni quien desarrolla puede leerla. Hoy nos lo saltamos para que el bucle de comparación siga siendo visible. Diez segundos de honestidad evitan un hábito genuinamente malo, y quien esté en este nivel se topará pronto con el hashing.'},
        {type:'tip', txt:'La <code>secret_key</code> del código de la clase es un marcador de un proyecto didáctico. Diles que en una app real desplegada la clave secreta es secreta —no se sube a GitHub— por el mismo motivo que un token de bot. Eso conecta directamente con el Módulo 1.'},
        {type:'warn', txt:'Añadir la clase <code>User</code> hace que el archivo <code>.db</code> antiguo no tenga esa tabla. La solución que se enseña aquí es directa: <strong>borrar el archivo de base de datos antiguo y crear uno nuevo desde la terminal.</strong> Avísales antes: eso borra las entradas de diario que acaban de escribir.'}
      ]},
      {t:'🚀 L3 — Despliegue en PythonAnywhere (EduScrum)', cards:[
        {type:'text', h:'Qué significa desplegar para este alumnado', b:'Hasta ahora su app solo ha funcionado en su propia máquina. <strong>PythonAnywhere</strong> la pone en internet con una URL real. Presenta el panel, ayuda a que todo el mundo se registre y después recorre el despliegue: subir y descomprimir los archivos, instalar las librerías, crear una aplicación web apuntando a <code>main.py</code>, sustituir el código remoto por el suyo, editar el <strong>archivo de configuración WSGI</strong> en la página Web, añadir el código de creación de la base de datos y recargar la aplicación.'},
        {type:'tip', txt:'El archivo WSGI es el paso que rompe despliegues en silencio: el alumnado se lo salta porque no forma parte del código de su proyecto. Di qué es: el archivo que lee el servidor para encontrar tu aplicación. Haz que todo el mundo te enseñe su edición del WSGI antes de pulsar recargar, y ten abiertas las páginas de registro de errores del servidor y de la aplicación, porque ahí es donde está el diagnóstico.'},
        {type:'text', h:'El segundo sprint: pruebas y público objetivo', b:'Tras el despliegue, el alumnado <strong>prueba la app publicada y la compara con la versión local</strong>, un hábito genuinamente útil, porque “en mi máquina funciona” es el fallo más antiguo del software. Después vuelve el debate sobre el público objetivo, ahora apuntando al portafolio que construyen en la clase siguiente: ¿cuál es el objetivo de tu proyecto y para quién es? Anotan las respuestas en el diario que han construido.'},
        {type:'good', txt:'Este es un momento satisfactorio que conviene nombrar en voz alta. Cualquiera puede ya mandar un enlace a una amiga o a su familia y verles usar lo que ha construido. Pídeles que lo hagan: un público fuera del aula es la motivación más fuerte de la que dispones.'}
      ]},
      {t:'💼 L4 — La web de portafolio y la marca de la mitad', cards:[
        {type:'text', h:'Tres sprints, una entrega', b:'<strong>Sprint 1 — materiales:</strong> descargar la plantilla y usar el diario para anotar qué van a necesitar, eligiendo paleta de colores, imágenes y textos. <strong>Sprint 2 — desarrollo:</strong> meter los materiales en la web, construir un escaparate dinámico de proyectos con Jinja y procesar un formulario de contacto. <strong>Sprint 3 — pruebas y código abierto:</strong> probarla y publicarla en un repositorio público. Retrospectiva después de cada uno.'},
        {type:'hi', h:'Esta clase repasa todo el itinerario web', b:'No se introduce nada nuevo. El portafolio necesita elementos dinámicos de Jinja, creación y procesamiento de formularios, decisiones de color y disposición, y una publicación en Git, que es exactamente el objetivo. Si alguien puede construir esto sin ayuda, la mitad web del curso ha calado. Si no puede, ahora sabes exactamente a qué clase volver.'},
        {type:'text', h:'Fin del Tema 2 — el hito del 50%', b:'El Módulo 4 del curso cierra el tema de Flask y la mitad de Python Pro. Dilo como es debido: están al <strong>50% de un curso avanzado</strong>, algo que muy poca gente termina. Después conecta hacia delante: pregúntales qué les gustaría hacer con estas habilidades y deja que respondan. Los deberes evaluados son pulir el portafolio, y valen hasta 50 puntos mediante la herramienta de evaluación.'},
        {type:'tip', txt:'El portafolio tiene vida más allá del curso. Anímales a mantenerlo actualizado con cada proyecto posterior: el bot con IA del Módulo 7, el proyecto de graduación del Módulo 10. Una web de portafolio que crece les vale más que cualquier certificado.'}
      ]}
    ],
    quiz:[
      {q:'¿Cuál es la idea central del método LiveCoding que se usa en M4L1?', opts:['El tutor construye el código gradualmente con el alumnado para que vea programar como un proceso de decisiones, no como un resultado terminado','El tutor programa en silencio y el alumnado copia la pantalla','El alumnado programa solo mientras el tutor observa','El tutor enseña el código acabado y lo explica después'], c:0, fb:'LiveCoding significa escribir el código juntos, narrando las decisiones, haciendo pausas e incluso cometiendo errores a propósito para que los encuentren.'},
      {q:'Un alumno ha escrito Card(...) y db.session.add(card) pero no aparece nada en la base de datos. ¿Qué falta?', opts:['db.session.commit() — add prepara el cambio, commit lo guarda','Una primary_key en la tabla','Un render_template después de guardar','Reiniciar el servidor de Flask'], c:0, fb:'add() y luego commit() es el par. Sin el commit el registro nunca se escribe, y no salta ningún error que te avise.'},
      {q:'¿Por qué el curso enseña las clases DESPUÉS de que el alumnado haya construido la tabla de la base de datos?', opts:['Porque a esas alturas tienen una pregunta real —“¿por qué hemos escrito class?”— y el propio Flask es una clase que llevan usando desde el principio','Porque las clases son demasiado difíciles para presentarlas al inicio de una clase','Porque SQLAlchemy lo exige en ese orden','Para ahorrar tiempo en el plan de clase'], c:0, fb:'Primero va la tabla y luego la teoría responde a la pregunta que ha creado, y el ejemplo más potente es que Flask es en sí una clase con sus propios métodos.'},
      {q:'¿Qué hace que el diario muestre solo las entradas de la persona que ha iniciado sesión?', opts:['Su correo se guarda en session al iniciar sesión, y la ruta de inicio usa Card.query.filter_by(user_email=email).all()','Cada persona tiene su propio archivo de base de datos','La tabla Card se borra entre inicios de sesión','Jinja filtra las entradas en la plantilla'], c:0, fb:'session[\'user_email\'] más filter_by es todo el mecanismo, y necesita app.secret_key definido para que las sesiones funcionen.'},
      {q:'El proyecto de M4L2 guarda las contraseñas en texto plano. ¿Qué deberías decirle al alumnado?', opts:['Decir en una frase que las apps reales guardan un hash en lugar de la contraseña, y que esto es una simplificación deliberada para mantener visible la lógica','Nada — les confundiría a este nivel','Que el texto plano está bien mientras el archivo de la base de datos sea local','Que no vuelvan a construir un formulario de inicio de sesión'], c:0, fb:'Una advertencia breve y honesta cuesta diez segundos y evita un hábito genuinamente malo. La simplificación está bien; no mencionarla no.'},
      {q:'Tras añadir la clase User, al alumnado le sale “no such table”. ¿Cuál es la solución que enseña esta clase?', opts:['Borrar el archivo .db antiguo y crear uno nuevo desde la terminal, avisando antes de que eso borra las entradas existentes','Renombrar la clase User para que coincida con el archivo','Reinstalar flask_sqlalchemy','Añadir nullable=True a todas las columnas'], c:0, fb:'El archivo de base de datos antiguo se creó antes de que existiera la clase. M4L2 hace que lo borren y lo recreen, así que avisa de la pérdida de datos.'},
      {q:'¿Qué paso de PythonAnywhere se salta más a menudo el alumnado, y para qué sirve?', opts:['Editar el archivo de configuración WSGI — es lo que lee el servidor para encontrar tu aplicación','Elegir un nombre de usuario — se convierte en la URL','Instalar Python — PythonAnywhere necesita que se suba','Poner debug=True en el servidor'], c:0, fb:'El archivo WSGI no forma parte del código de su proyecto, así que se olvida. Sin él los despliegues fallan en silencio, y por eso importan los registros de error.'},
      {q:'¿Por qué M4L3 hace que el alumnado pruebe la app desplegada frente a su versión local?', opts:['Porque el comportamiento puede diferir entre local y producción — “en mi máquina funciona” es un fallo real','Para comprobar la velocidad de su internet','Porque PythonAnywhere exige una prueba antes de publicar','Para comparar tiempos de carga en el informe'], c:0, fb:'Comparar la app publicada con la local es un hábito genuino de ingeniería, y es la primera vez en el curso que el alumnado tiene dos entornos que comparar.'},
      {q:'¿Cuál es el propósito de la web de portafolio en M4L4?', opts:['Repasa todo el itinerario web —Jinja, formularios, disposición y Git— para que veas exactamente qué ha calado y qué no','Introducir disposición avanzada en CSS','Sustituir al proyecto de graduación','Practicar el despliegue una segunda vez'], c:0, fb:'No se enseña nada nuevo. El portafolio exige Jinja dinámico, procesamiento de formularios, decisiones de diseño y publicación: un diagnóstico y una entrega a la vez.'}
    ]
  },
  {
    id:9, emoji:'📊', color:'#2BB3E8',
    title:'M5 — Datos, Scraping, PLN y Visión por Computador',
    desc:'Módulo 5 del curso: mitos sobre la IA, Google Colab, las imágenes como píxeles, rembg y OpenCV, scraping con BeautifulSoup y pandas, PLN con NLTK y entrenar un clasificador en Teachable Machine.',
    obj:'Enseñar los cimientos de datos del bloque de IA. Debes saber dirigir la actividad de investigación de mitos y hechos, manejar Google Colab con soltura, explicar las imágenes como datos de píxeles, enseñar los límites legales y éticos del scraping, explicar qué es un pipeline y el papel de NLTK en él, y dirigir una competición de entrenamiento en Teachable Machine.',
    prep:'~5 horas. Todo en Colab; ejecuta tú mismo todas las celdas.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 5 del curso, debes haber hecho personalmente:',
      items:[
        'Montó un cuaderno de Colab con celdas de código y de markdown, y subió imágenes a la sesión',
        'Quitó el fondo de una imagen con <code>rembg</code> y compuso uno nuevo con OpenCV',
        'Escribió texto sobre una imagen con OpenCV',
        'Abrió las herramientas de desarrollo del navegador e identificó la etiqueta y la clase que contienen un fragmento de contenido de la página',
        'Hizo scraping de una página con <code>BeautifulSoup</code> y después lo convirtió en un crawler sobre varias secciones',
        'Construyó un <code>DataFrame</code> de pandas y lo guardó con <code>to_csv</code> — y conservó el archivo',
        'Ejecutó el resumidor de NLTK de principio a fin, incluidas <code>stopwords</code> y <code>FreqDist</code>',
        'Entrenó un clasificador en Teachable Machine y lo probó con una imagen que nunca había visto',
        'Entrenó a propósito un modelo malo y lo vio fallar con total seguridad'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> qué es la IA (por investigación, no por exposición), Google Colab y sustituir el fondo de una imagen; <strong>L2</strong> scraping, parsing y crawling con <strong>BeautifulSoup</strong> y <strong>pandas</strong>; <strong>L3</strong> PLN con <strong>NLTK</strong>, comprensiones de lista y un resumidor de textos; <strong>L4</strong> visión por computador, datasets y entrenar un clasificador en <strong>Google Teachable Machine</strong>.',
          why:'Todo lo de los módulos 6 y 7 del curso se apoya en esto. La IA es datos ante todo, y quien no entienda qué es un dataset entrenará un modelo inútil y le echará la culpa al código.',
          learn:'El alumnado investiga mitos sobre la IA y defiende sus respuestas, monta cuadernos de Colab, recorta un fondo con <code>rembg</code> y compone otro con OpenCV, recopila cientos de noticias en un CSV, escribe una función que resume un artículo y entrena y prueba su propio clasificador de imágenes.',
          confident:'Que la IA moderna es <em>débil</em>; las celdas de Colab y la sesión temporal; las imágenes como matrices de píxeles; scraping, parsing y crawling <strong>y las reglas</strong>; <code>find</code>/<code>find_all</code> más un DataFrame de pandas; tokenización frente a lematización; y por qué la calidad del dataset decide la calidad del modelo.'
        }
      ]},
      {t:'🔬 L1 — Mitos sobre la IA, Colab y fondos de imagen', cards:[
        {type:'text', h:'Enseña la teoría como una investigación', b:'No des una charla. Divide al alumnado en salas de trabajo de dos a cuatro personas y dales <strong>diez minutos</strong> con un conjunto de afirmaciones sobre la IA. Su tarea no es solo decir cuáles son mitos, sino <strong>justificar la respuesta con pruebas</strong>. Vale cualquier fuente; lo ideal es que usen buscadores por su cuenta. Si un grupo no se organiza solo, asigna una persona por afirmación.'},
        {type:'qa', h:'Los mitos y los hechos, con las respuestas', items:[
          {k:'“La IA puede sustituir a las personas en todas las profesiones.”', v:'<strong>Mito.</strong> La IA puede sustituir a las personas en muchos campos, pero no del todo: le faltan empatía, pensamiento creativo e intuición.'},
          {k:'“La IA moderna es inteligencia fuerte.”', v:'<strong>Mito.</strong> Hay tres niveles —débil, fuerte y superinteligencia— y la IA de hoy se clasifica como <strong>débil</strong>, porque no puede pensar ni ser consciente de sí misma.'},
          {k:'“La IA no puede explicar sus decisiones.”', v:'<strong>Cierto, por ahora.</strong> La IA explicable es un área activa de investigación, pero los modelos actuales deciden en su mayoría en modo “caja negra”.'},
          {k:'“Hacen falta datos, un algoritmo y recursos de computación.”', v:'<strong>Cierto.</strong> Datos de los que aprender, un algoritmo con el que entrenar y una máquina lo bastante potente, normalmente recursos en la nube para entrenar desde cero.'}
        ]},
        {type:'text', h:'Google Colab, en diez minutos', b:'El alumnado inicia sesión con una cuenta de Google, crea un cuaderno <code>.ipynb</code> en su Drive y ejecuta <strong>dos o tres celdas de código y una de markdown</strong>. Asegúrate de que todo el mundo sea capaz de crear una celda y ejecutarla: ese es todo el criterio de éxito. Después enséñales a subir imágenes a la sesión actual y, al final de la clase, a <strong>compartir</strong> un cuaderno con permiso de lectura o de edición.'},
        {type:'warn', txt:'Lo que va a pillar a todos los grupos: <strong>las sesiones de Colab son temporales.</strong> Los archivos subidos desaparecen al reiniciarse la sesión, y <em>hay que ejecutar todas las celdas, en orden,</em> para que funcionen las posteriores. Dilo al principio y cuenta con tener que repetirlo. Para grupos más fuertes, enséñales a montar Google Drive.'},
        {type:'text', h:'Las imágenes son números', b:'Antes de tocar ninguna librería, explica cómo se almacena una imagen: una cuadrícula de <strong>píxeles</strong>, cada uno con valores de color. Ese planteamiento es lo que hace que el resto del módulo tenga sentido: rellenar un fondo es aritmética sobre esos valores, y un clasificador es una función sobre ellos. La buena pregunta diagnóstica que usa la clase: ¿cuántos píxeles hay en una imagen de 6×6, y de qué color es una imagen cuyos valores de píxel están todos a 500?'},
        {type:'code', lbl:'recortando el fondo con rembg', code:`<span class="cc"># en Colab, ! ejecuta un comando del sistema operativo</span>
<span class="cc"># !pip install rembg</span>
<span class="cc"># !pip install onnxruntime   ← rembg también necesita esto</span>

<span class="ck">from</span> rembg <span class="ck">import</span> remove

input_path  = <span class="cs">'photo.png'</span>      <span class="cc"># debe ser la ruta real de la imagen</span>
output_path = <span class="cs">'output.png'</span>

<span class="ck">with</span> <span class="cf">open</span>(input_path, <span class="cs">'rb'</span>) <span class="ck">as</span> i:
    <span class="ck">with</span> <span class="cf">open</span>(output_path, <span class="cs">'wb'</span>) <span class="ck">as</span> o:
        o.<span class="cf">write</span>(<span class="cf">remove</span>(i.<span class="cf">read</span>()))`},
        {type:'code', lbl:'componiendo el nuevo fondo con OpenCV', code:`<span class="ck">import</span> cv2

image  = cv2.<span class="cf">imread</span>(<span class="cs">'output.png'</span>, cv2.IMREAD_UNCHANGED)
back   = cv2.<span class="cf">imread</span>(<span class="cs">'/content/background.jpg'</span>)

result = <span class="cf">change_back</span>(back, image)   <span class="cc"># la función que analiza el alumnado</span>
cv2.<span class="cf">imwrite</span>(<span class="cs">"result.png"</span>, result)`},
        {type:'tip', txt:'Haz que encuentren el fragmento de eliminación de fondo <strong>en la propia documentación de rembg</strong> en lugar de dárselo, y después recalca la única línea que siempre fallan: la ruta real de su propia imagen. Los deberes lo amplían con texto de OpenCV para que la imagen se convierta en un meme; vale hasta 20 puntos, valorando si el texto queda bien colocado sobre la imagen.'}
      ]},
      {t:'🕸️ L2 — Scraping, parsing y crawling', cards:[
        {type:'text', h:'Por qué recogemos datos', b:'Abre con el valor de los datos. Internet está lleno de datasets, pero la mayoría son vagos o incompletos, y los buenos datos de entrenamiento son escasos y caros. Así que para entrenar nuestra propia IA <strong>tenemos que preparar los datos nosotros</strong>, que es lo que hace esta clase, terminando con 600 entradas de noticias en un solo archivo.'},
        {type:'qa', h:'Los tres términos, diferenciados', items:[
          {k:'Crawling', v:'Rastrear automáticamente muchos sitios, yendo de página en página, recogiendo todo lo relevante. El más amplio de los tres, y ocurre <strong>primero</strong>.'},
          {k:'Scraping', v:'Extraer automáticamente información de una página web —texto, imágenes, precios— leyendo su HTML.'},
          {k:'Parsing', v:'Analizar la estructura de los datos para sacar información concreta: examinar elementos HTML, usar selectores CSS o XPath para extraer exactamente lo que quieres.'}
        ]},
        {type:'warn', txt:'Enseña los límites como parte de la habilidad, no como aviso legal. <strong>Derechos de autor</strong>: no uses ni redistribuyas datos protegidos sin permiso. <strong>Términos de uso y políticas de privacidad</strong>: los sitios especifican cómo se puede acceder a sus datos. <strong>robots.txt</strong>: indica qué partes de un sitio se pueden rastrear; compruébalo y respétalo. <strong>Leyes de competencia desleal</strong> en algunas jurisdicciones. <strong>Legislación de datos personales</strong>: nombres, correos y teléfonos están bajo normas como el <strong>RGPD</strong>. Abre el robots.txt del sitio de prácticas con la clase y leed qué secciones están fuera de alcance.'},
        {type:'text', h:'Cómo funciona la práctica', b:'Enséñales las herramientas de desarrollo del navegador —<code>Shift+Ctrl+I</code> en Windows, <code>Option+Cmd+I</code> en Mac— y plantea el acertijo: ¿qué etiqueta contiene el titular de la noticia y a qué clase pertenece? Esa es la habilidad de verdad. Después amplían el cuaderno de demostración para recoger no solo títulos y enlaces, sino también fechas de publicación y número de visitas, encontrando esas etiquetas por su cuenta.'},
        {type:'code', lbl:'de una página a un crawler sobre cinco secciones', code:`dict_news = {<span class="cs">"news"</span>: [], <span class="cs">"links"</span>: [], <span class="cs">"views"</span>: [], <span class="cs">"comments"</span>: []}

url   = <span class="cs">'https://www.thescientificteen.org/'</span>
pages = [<span class="cs">"technology"</span>, <span class="cs">"medicine"</span>, <span class="cs">"chemistry"</span>, <span class="cs">"physics"</span>]

<span class="ck">for</span> section <span class="ck">in</span> pages:
    response = requests.<span class="cf">get</span>(url + section + <span class="cs">"/"</span>)
    bs = <span class="ct2">BeautifulSoup</span>(response.text, <span class="cs">"lxml"</span>)
    <span class="ck">for</span> post <span class="ck">in</span> bs.<span class="cf">find_all</span>(<span class="cs">'div'</span>, <span class="cs">'post-list-item-wrapper'</span>):
        dict_news[<span class="cs">"news"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'p'</span>).text)
        dict_news[<span class="cs">"links"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'a'</span>).<span class="cf">get</span>(<span class="cs">'href'</span>))

<span class="cc"># un DataFrame es una tabla; to_csv lo guarda para la clase siguiente</span>
df_news = pd.<span class="ct2">DataFrame</span>(dict_news)
df_news.<span class="cf">to_csv</span>(<span class="cs">"./saved_data.csv"</span>, index=<span class="ck">False</span>)`},
        {type:'hi', h:'El momento en el que merece la pena parar', b:'Un bucle convierte un scraper de una página en un crawler sobre cinco secciones y 600 artículos en menos de un minuto. Dilo en voz alta: es la primera vez en el curso que una pequeña cantidad de código hace un volumen de trabajo que ninguna persona intentaría a mano. Esa sensación es la razón de que el bloque de IA empiece aquí.'},
        {type:'tip', txt:'Asegúrate de que todo el mundo guarda el CSV, y guarda una copia tú: la <strong>clase siguiente depende de él</strong>, y el plan te dice que lo compartas en el chat para quien lo haya perdido. Los deberes son análisis con pandas sobre un CSV dado —<code>.min()</code>, <code>.max()</code>, filtros, <code>.sum()</code>—, lo que también les prepara para la clase siguiente.'}
      ]},
      {t:'📝 L3 — PLN, pipelines y el resumidor', cards:[
        {type:'text', h:'Primero las comprensiones de lista, como recurso de Python', b:'Un calentamiento corto: en Python es habitual comprimir varias líneas en una. Dales las dos versiones del mismo código y haz que sean <em>ellos</em> quienes expliquen la diferencia: la comprensión <code>[word.lower() for word in words if word.isalpha()]</code> frente al bucle <code>for</code> clásico con <code>append()</code>. Sé honesto con el equilibrio: la comprensión es compacta y elegante, el bucle es más legible y da un control más fino. Cuál elegir depende de la situación.'},
        {type:'text', h:'Qué es un pipeline', b:'Una secuencia de pasos de procesamiento en la que la salida de cada uno alimenta al siguiente. Recorre el algoritmo de resumen como debate antes de escribir código: dividir en frases → dividir en palabras → quitar las <strong>stop words</strong> → reducir cada palabra a su forma base → contar frecuencias → puntuar cada frase por la frecuencia de sus palabras → quedarse con las mejores → recomponerlas en su orden original.'},
        {type:'code', lbl:'el resumidor, como función reutilizable', code:`<span class="ck">def</span> <span class="cf">summarization</span>(text, sent_number=<span class="cn">3</span>):
    sentences  = <span class="cf">sent_tokenize</span>(text, language=<span class="cs">'english'</span>)
    stop_words = <span class="cf">set</span>(stopwords.<span class="cf">words</span>(<span class="cs">'english'</span>))

    words = <span class="cf">word_tokenize</span>(text)
    words = [w.<span class="cf">lower</span>() <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w.<span class="cf">isalpha</span>()]
    words = [w <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w <span class="ck">not</span> <span class="ck">in</span> stop_words]

    freq_dist = <span class="ct2">FreqDist</span>(words)          <span class="cc"># con qué frecuencia aparece cada palabra</span>

    sentence_scores = {}
    <span class="ck">for</span> i, sentence <span class="ck">in</span> <span class="cf">enumerate</span>(sentences):
        sentence_words = <span class="cf">word_tokenize</span>(sentence.<span class="cf">lower</span>())
        sentence_scores[i] = <span class="cf">sum</span>([freq_dist[w] <span class="ck">for</span> w <span class="ck">in</span> sentence_words
                                  <span class="ck">if</span> w <span class="ck">in</span> freq_dist])

    <span class="cc"># las frases con mejor puntuación, devueltas al orden de lectura</span>
    best = <span class="cf">sorted</span>(sentence_scores.<span class="cf">items</span>(), key=<span class="ck">lambda</span> x: x[<span class="cn">1</span>], reverse=<span class="ck">True</span>)
    best = <span class="cf">sorted</span>(best[:sent_number])

    <span class="ck">return</span> <span class="cs">' '</span>.<span class="cf">join</span>([sentences[i] <span class="ck">for</span> i, _ <span class="ck">in</span> best])`},
        {type:'hi', h:'Dirige la exploración de NLTK como una carrera', b:'En vez de enumerar las funciones, pon al alumnado en salas de trabajo de dos o tres con el cuaderno de ejemplo y dales <strong>cinco minutos para encontrar todas las funciones de NLTK que puedan</strong>, ayudándose entre ellos. Después reunidlos y poned en común los hallazgos. Las funciones se aprenden; la escucha pasiva no ocurre.'},
        {type:'text', h:'Y luego escala', b:'El sentido de envolver el algoritmo en una función es lo que viene después: recorren los enlaces recogidos en la L2 y resumen <strong>diez artículos reales</strong>. Sus propios datos recogidos, su propia función, ejecutándose sola: ese es el pipeline completo, y merece la pena nombrarlo así.'},
        {type:'tip', txt:'La distinción que el alumnado confunde es <strong>tokenización frente a lematización</strong>. La tokenización parte el texto en piezas (frases o palabras). La lematización reduce una palabra a su forma base, para que “corriendo” y “corrió” cuenten como una sola. Ambas están en el pipeline haciendo trabajos distintos, y es una de las preguntas de repaso del cierre.'}
      ]},
      {t:'👁️ L4 — Visión por computador y el clasificador', cards:[
        {type:'text', h:'El problema, y por qué es bueno', b:'Dar de comer a los pájaros: cada especie necesita un alimento distinto —el pan es malo para los patos, el grano es bueno para los gorriones—. Así que una app que identifique un ave y diga qué darle tiene un público genuinamente amplio. Concreto, inofensivo, y necesita exactamente una capacidad de IA: la <strong>clasificación</strong>.'},
        {type:'hi', h:'Teoría como juego — tres en raya', b:'Divide en un equipo X y un equipo O. Tú haces una pregunta; vale cualquier fuente —plataforma, internet, apuntes—; el <strong>mismo alumno no puede responder dos veces seguidas</strong>; una respuesta correcta gana una casilla. Si la respuesta es incorrecta, pasa al resto. Corrige las respuestas erróneas explícitamente, porque toda la clase necesita oír la buena.'},
        {type:'qa', h:'Las preguntas y las respuestas', items:[
          {k:'¿Qué es la visión por computador?', v:'Una rama de la IA en la que se entrena a un ordenador para distinguir objetos en una imagen.'},
          {k:'¿Qué es la clasificación?', v:'Ordenar objetos en clases: gatos/perros/ardillas, memes graciosos/memes vergonzosos.'},
          {k:'¿Qué puede ser el modelo?', v:'Una red neuronal.'},
          {k:'¿Qué más hace falta además del modelo?', v:'Un dataset.'},
          {k:'¿Qué le enseñas a la red durante el entrenamiento?', v:'Una imagen <em>y su clase</em>.'},
          {k:'¿Importa la calidad del dataset?', v:'Sí: decide la calidad del modelo. Se mejora añadiendo más datos y más variados.'}
        ]},
        {type:'text', h:'Montar bien el dataset', b:'El alumnado explora el dataset que se le da —qué clases hay, cuántas imágenes de entrenamiento por clase—, después lo descarga y añade dos o tres imágenes propias por clase. Recalca que <strong>la calidad de los objetos de la muestra de entrenamiento importa</strong>. Después cada persona busca <strong>una imagen de prueba</strong>, y aquí está la regla que tiene que calar: la imagen de prueba debe ser una que el modelo <strong>no haya visto nunca</strong>. Si no, el modelo simplemente está copiando.'},
        {type:'text', h:'El entrenamiento y la competición', b:'Enséñales la configuración de Teachable Machine, entrena el clasificador, sube una imagen de prueba y lee la respuesta. Después déjales explorar los <strong>parámetros de entrenamiento</strong> y asegúrate de que saben <strong>guardar el proyecto</strong>, porque el Módulo 6 necesita el modelo exportado. Por último, una competición de verdad: siete minutos para dejar su modelo lo más preciso posible, por cualquier medio. Tú envías una imagen; gana el modelo más preciso, y quien gane explica cómo lo entrenó.'},
        {type:'good', txt:'La explicación de quien gana es el minuto más valioso de la clase. Casi siempre dirá “añadí más imágenes” o “añadí más variedad”, que es la idea entera de la clase, alcanzada por experimento y no por afirmación. Deja que lo enseñe esa persona.'},
        {type:'tip', txt:'Los deberes añaden otra clase al modelo —una especie de ave que viva cerca del alumno—, lo que prepara discretamente el modelo que importarán al código en el módulo siguiente. Los juegos y competiciones existen aquí para presentar la teoría en un formato inusual y mantener alto el enganche; no los trates como relleno opcional.'}
      ]}
    ],
    quiz:[
      {q:'Un alumno dice “la IA de hoy es inteligencia fuerte, puede pensar”. ¿Cómo lo corriges, según el material del curso?', opts:['La IA moderna se clasifica como débil: no puede pensar ni ser consciente de sí misma. La IA fuerte y la superinteligencia son los otros dos niveles','Tiene razón: los modelos actuales razonan como las personas','Los tres niveles son estrecha, amplia y general, y la IA es amplia','La IA no tiene niveles; esa clasificación es un mito'], c:0, fb:'La actividad de mitos de M5L1 incluye exactamente esa afirmación como mito: la informática clasifica la IA contemporánea como débil porque le faltan pensamiento y autoconciencia.'},
      {q:'El alumnado vuelve a Colab y su modelo y sus imágenes han desaparecido. ¿Por qué?', opts:['Las sesiones de Colab son temporales — los archivos subidos desaparecen al reiniciarse la sesión, y hay que volver a ejecutar todas las celdas en orden','Colab borra los archivos que incumplen sus condiciones','Olvidaron guardar el cuaderno como .py','Su Google Drive estaba lleno'], c:0, fb:'Esto pilla a todos los grupos. Avísales de antemano; para los más fuertes, monta Google Drive para que los archivos persistan.'},
      {q:'¿Cuál es la relación correcta entre crawling, scraping y parsing?', opts:['El crawling va primero y es el más amplio —rastrear muchos sitios—; el scraping extrae información de una página; el parsing analiza la estructura para sacar datos concretos','Primero el parsing, luego el crawling, luego el scraping','Son tres nombres para la misma operación','El scraping es legal y el crawling y el parsing no'], c:0, fb:'M5L2 pone el crawling primero y como el más amplio, con scraping y parsing como los pasos de extracción sobre las páginas recogidas.'},
      {q:'Antes de hacer scraping de un sitio con el alumnado, ¿qué archivo compruebas y por qué?', opts:['robots.txt — especifica qué partes del sitio se pueden rastrear e indexar, y esas restricciones hay que respetarlas','index.html — para ver la estructura de la página','sitemap.css — para encontrar las clases de estilo','license.txt — para comprobar quién tiene los derechos'], c:0, fb:'El robots.txt es una de las cinco reglas que se enseñan en esta clase, junto con derechos de autor, términos de uso y política de privacidad, competencia desleal y legislación de datos personales como el RGPD.'},
      {q:'¿Qué convierte realmente el scraper de una página en un crawler que recoge 600 artículos?', opts:['Un bucle sobre una lista de nombres de sección, pidiendo cada una por turno','Una segunda instancia de BeautifulSoup','Guardar en CSV en lugar de imprimir','Cambiar find por find_all'], c:0, fb:'Un bucle sobre la lista de secciones es todo el cambio, y eso es lo que hace la escala tan llamativa para el alumnado.'},
      {q:'¿Cuál es la diferencia entre tokenización y lematización?', opts:['La tokenización parte el texto en frases o palabras; la lematización reduce una palabra a su forma base para que las variantes cuenten como una','Son el mismo paso con dos nombres','La tokenización quita las stop words; la lematización cuenta frecuencias','La lematización parte el texto; la tokenización lo normaliza'], c:0, fb:'Ambas son pasos del pipeline de resumen que hacen trabajos distintos, y distinguirlas es una de las preguntas de repaso del cierre de la clase.'},
      {q:'¿Cómo decide el resumidor qué frases conservar?', opts:['Puntúa cada frase por la frecuencia de las palabras que contiene, conserva las de mayor puntuación y las devuelve a su orden original','Se queda con las tres primeras frases del artículo','Elige las frases más largas','Le pide a un modelo de lenguaje que reescriba el texto'], c:0, fb:'La distribución de frecuencias sobre palabras limpias y lematizadas da una puntuación a cada frase; las mejores se reordenan al orden de lectura para que el resumen fluya.'},
      {q:'Un alumno quiere probar su clasificador con una de sus propias imágenes de entrenamiento. ¿Qué le dices?', opts:['La imagen de prueba tiene que ser una que el modelo no haya visto nunca — si no, no lo estás probando, le estás dejando copiar','Está bien, ya que las clases son las mismas','Solo si usa al menos tres imágenes','Da igual con los modelos de Teachable Machine'], c:0, fb:'La muestra de prueba debe contener imágenes nuevas. La clase lo formula exactamente así: no queremos que nuestros modelos copien.'},
      {q:'El clasificador de un alumno funciona mal. ¿Dónde debería mirar primero?', opts:['En el dataset — más imágenes y más variedad es lo que mejora el modelo','En el código que carga la imagen','En los parámetros de entrenamiento, que son la única palanca real','En el navegador en el que entrenó'], c:0, fb:'La calidad del dataset determina la calidad del modelo. Es la respuesta a la que llevan las preguntas del tres en raya, y la que casi siempre da quien gana la competición.'},
      {q:'¿Por qué la clase M5L4 usa el tres en raya y una competición de entrenamiento en lugar de una presentación?', opts:['Para presentar la teoría en un formato inusual y mantener al alumnado activamente enganchado — los juegos son el método de entrega, no relleno','Porque la teoría es demasiado escasa para llenar el tiempo','Para decidir qué alumnos siguen al Módulo 6','Porque la plataforma exige un juego por clase'], c:0, fb:'La propia nota de la clase dice que el propósito de los juegos y la competición es presentar la teoría de forma inusual y implicar al alumnado en el proceso educativo.'}
    ]
  },
  {
    id:10, emoji:'🧠', color:'#EC4899',
    title:'M6 — Redes Neuronales y Detección de Objetos',
    desc:'Módulo 6 del curso: exportar un modelo al código con Keras, generar imágenes y la competición IA contra real, cartas comerciales, detección y segmentación con ImageAI/YOLO, y construir una solución elegida por cada alumno.',
    obj:'Enseñar al alumnado a ejecutar un modelo entrenado desde Python y a distinguir las tres tareas de visión por computador. Debes saber importar un modelo de Teachable Machine en Colab, resolver el choque de versiones, dirigir con responsabilidad la competición de generación de imágenes, explicar clasificación, detección y segmentación, usar ImageAI y dirigir una lluvia de ideas que acabe en una idea construible.',
    prep:'~5 horas. Cuenta con pelearte con las versiones de las librerías; de eso se trata.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 6 del curso, debes haber hecho personalmente:',
      items:[
        'Exportó un modelo de Teachable Machine, lo descomprimió en Colab y lo cargó con <code>tf_keras</code>',
        'Se topó con el error de versión de <code>DepthwiseConv2D</code> y lo arregló con las versiones fijadas',
        'Escribió una función que recibe una imagen y devuelve un nombre de clase y una confianza',
        'Confirmó que el modelo mete a la fuerza una imagen sin relación en una de sus clases conocidas',
        'Generó imágenes con prompts y montó un dataset de dos clases con imágenes generadas y reales',
        'Ejecutó una detección con <code>ImageAI</code>/YOLOv3 y filtró los resultados por nombre de objeto',
        'Comparó la detección en una foto recargada y en una limpia, para ver por qué importa el fondo',
        'Construyó un pequeño script propio de principio a fin que usa un modelo para resolver un problema inventado'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> exportar el modelo entrenado y ejecutarlo desde el código con <strong>Keras</strong>; <strong>L2</strong> una competición por equipos entrenando un modelo para distinguir fotos reales de imágenes generadas por IA; <strong>L3</strong> estructura de una carta comercial, <strong>detección y segmentación</strong> con ImageAI/YOLO y una lluvia de ideas; <strong>L4</strong> una clase de EduScrum en la que el alumnado construye su propia solución a un problema que ha elegido.',
          why:'Un modelo que solo vive en una pestaña del navegador no es software. Aquí la IA del alumnado se convierte en un programa, y aquí se encuentran con la diferencia entre una demostración y una capacidad que se puede entregar.',
          learn:'El alumnado exporta un modelo <code>.h5</code>, lo carga con <code>tf_keras</code>, escribe una función que devuelve clase y confianza, genera imágenes con prompts, monta un dataset compartido, detecta usuarios de la vía en una foto con YOLO y construye un script que automatiza un problema cotidiano elegido por él.',
          confident:'Exportar y descomprimir el modelo; las versiones fijadas de las librerías y el error de <code>DepthwiseConv2D</code>; que un modelo solo reconoce las clases que se le han mostrado; clasificación, detección y segmentación; ingeniería de prompts; y las reglas de la lluvia de ideas.'
        }
      ]},
      {t:'⚙️ L1 — Ejecutar el modelo desde el código (Keras)', cards:[
        {type:'text', h:'Usar–Modificar–Crear otra vez', b:'Esta clase funciona con <strong>UMC</strong>: el alumnado primero <em>usa</em> el código que le da Teachable Machine y comprueba que funciona, y después implementa su propia lógica encima. Enséñales a exportar el modelo, a añadir el proyecto descargado a la sesión de Colab y a descomprimirlo con <code>!unzip ./converted_keras.zip</code>. Para un grupo fuerte, conecta Google Drive en su lugar.'},
        {type:'code', lbl:'las versiones fijadas y los imports que sí funcionan', code:`<span class="cc"># fija las versiones — no depures esto en directo, solo pégalo</span>
<span class="cc"># !pip install -q tf-keras==2.19.0 h5py==3.11.0</span>

<span class="ck">import</span> tf_keras <span class="ck">as</span> keras       <span class="cc"># versión de Keras compatible con modelos .h5</span>
<span class="ck">from</span> tf_keras.models <span class="ck">import</span> load_model
<span class="ck">from</span> PIL <span class="ck">import</span> Image, ImageOps  <span class="cc"># Pillow, instalado en lugar de PIL</span>
<span class="ck">import</span> numpy <span class="ck">as</span> np

<span class="cc"># clic derecho sobre el modelo en Colab → Copiar ruta, y pégala aquí</span>
model = <span class="cf">load_model</span>(<span class="cs">"PATH_TO_MODEL"</span>, compile=<span class="ck">False</span>)`},
        {type:'text', h:'Qué decir sobre Keras', b:'Keras forma parte de <strong>TensorFlow</strong>; en las versiones modernas está disponible como <code>tf.keras</code>. Como el modelo exportado se guarda en formato <code>.h5</code>, el curso usa <code>tf-keras</code>, la versión compatible con <code>.h5</code>; por lo demás es la misma librería. Deja claro que el puñado de funciones que están usando es una parte <em>minúscula</em> de una librería enorme.'},
        {type:'hi', h:'El juego de “todos contra uno”', b:'Después de cinco minutos explorando el código, un alumno se convierte en el <strong>experto</strong> y responde a las preguntas de los demás. Las preguntas pueden ser fáciles o difíciles, y no pasa nada si quien pregunta tampoco sabe la respuesta. Si el experto se atasca, respondes tú. El experto gana si responde a todo; si no, gana quien haya hecho más preguntas sin respuesta. El propósito real está en el plan: <strong>ayuda al alumnado a superar el miedo a formular una pregunta</strong>. Recalca que no hay preguntas tontas.'},
        {type:'warn', txt:'Destaca esto después del juego: el modelo <strong>solo</strong> puede distinguir las clases con las que se entrenó. Enséñale otra cosa y seguirá metiendo la entrada, con total seguridad, en una de sus clases conocidas. Es el malentendido más común que tiene el alumnado sobre la IA, y aquí pueden verlo ocurrir.'},
        {type:'text', h:'Y luego construyen la funcionalidad de verdad', b:'La tarea: implementar un botón para subir imágenes, usar el código exportado para escribir una función <code>detect_bird</code> que reciba la imagen, la ruta del modelo y la ruta de las etiquetas y devuelva el nombre del ave y la probabilidad, y hacer que el script responda a una subida sugiriendo un alimento adecuado. La clase cierra con un test.'}
      ]},
      {t:'🎨 L2 — Generado contra real: la competición de IA', cards:[
        {type:'text', h:'El problema, planteado con honestidad', b:'Los modelos generativos escriben textos, dibujan imágenes realistas y hacen animaciones, y ese mismo poder está al alcance de quien estafa. Los dos riesgos que nombra la clase: las imágenes generadas pueden llevar <strong>contenido negativo o discriminatorio</strong> y pueden <strong>parecerse a fotografías reales</strong>, lo que difunde desinformación. Pregunta al alumnado qué opina y qué problemas prevé. La tarea sale del debate: entrenar un modelo que distinga imágenes reales de generadas.'},
        {type:'warn', txt:'Mantén los prompts en animales, objetos y personajes inventados: <strong>nunca personas reales e identificables</strong>. La tarea del propio curso es deliberadamente sobre gatos. Prepara las carpetas de Google Drive de cada equipo <em>antes</em> de la clase y, si el generador pide pago para imágenes de alta calidad, baja el parámetro de calidad en lugar de pagar.'},
        {type:'qa', h:'Las reglas de la competición', items:[
          {k:'Estructura', v:'Tres etapas: 30 minutos de preparación de datos, 20 minutos de entrenamiento del modelo, 10 minutos de pruebas.'},
          {k:'Equipos', v:'Los formas tú, de 3 o 4 personas; el alumnado no elige. Cada equipo se pone un nombre y elige un capitán o capitana.'},
          {k:'Datos compartidos, modelos individuales', v:'Todo el equipo usa el mismo dataset, pero cada persona entrena su propio modelo.'},
          {k:'Cómo se gana', v:'No con el mejor modelo suelto, sino con el <strong>equipo de mayor precisión media</strong>. Eso es lo que hace racional ayudar a tus compañeros.'}
        ]},
        {type:'text', h:'Ingeniería de prompts, en una frase', b:'Una consulta a un modelo generativo es un <strong>prompt</strong>, y la ingeniería de prompts es el oficio de escribir buenos prompts: un buen prompt deja clara tu intención al modelo, así que obtienes una respuesta más precisa o un mejor contenido. Los equipos generan de 8 a 20 imágenes para la clase “generada”, después descargan fotos reales a una carpeta “real” aparte y suben ambas a la carpeta compartida del equipo.'},
        {type:'good', txt:'La regla de “la media más alta del equipo” es el detalle mejor diseñado de esta clase. Elimina el incentivo de guardarse una buena técnica y lo sustituye por el incentivo de enseñarla. Si no cambias nada más de cómo diriges esta competición, conserva esa regla.'},
        {type:'tip', txt:'Diferencia en la etapa de inicio de sesión: mientras ayudas a quienes no consiguen entrar, da la tarea adicional a quienes van más rápido. Los deberes son escribir un script que use su modelo con un propósito que inventen <em>ellos</em>, y se valora si responde a las dos clases, si se ejecuta sin errores y si tiene un propósito claro.'}
      ]},
      {t:'🔍 L3 — Detección, segmentación y la carta', cards:[
        {type:'text', h:'El marco gamificado', b:'La clase abre con una <strong>carta comercial</strong> que encarga una app de seguridad vial. Si tu alumnado entra al juego, trátalo como un correo de cliente real; si les da demasiada vergüenza, úsalo solo para desmenuzar la estructura. En cualquier caso, haz que la lean e identifiquen sus bloques lógicos.'},
        {type:'qa', h:'Los seis bloques de una carta comercial', items:[
          {k:'1. Asunto', v:'Una formulación breve y precisa del propósito de la carta.'},
          {k:'2. Saludo / introducción', v:'Un saludo cortés más una breve presentación, o una referencia a la correspondencia anterior.'},
          {k:'3. Cuerpo principal', v:'El mensaje, la información o la propuesta: argumentos, detalles, acuerdos.'},
          {k:'4. Cierre', v:'Una conclusión cortés: agradecimiento por la atención, información adicional o los siguientes pasos.'},
          {k:'5. Despedida', v:'“Un saludo” o “Atentamente”, más el nombre y el cargo de quien firma.'},
          {k:'6. Anexos', v:'Una lista de los documentos o materiales adjuntos.'}
        ]},
        {type:'text', h:'Las tres tareas de visión por computador', b:'Este es el núcleo conceptual del módulo. <strong>Clasificación</strong>: ¿a qué clase pertenece la <em>imagen entera</em>? <strong>Detección</strong>: encontrar y localizar objetos, marcando cada uno con un recuadro, incluso varios a la vez. <strong>Segmentación</strong>: dividir la imagen en regiones, averiguando <em>qué píxeles</em> pertenecen a qué objeto. El ejemplo de la clase: una foto de una persona en un bosque. La detección encuadra a la persona; la segmentación divide la imagen en píxeles-de-persona y píxeles-de-bosque.'},
        {type:'code', lbl:'detección con ImageAI y YOLOv3', code:`<span class="ck">def</span> <span class="cf">detect_objects_on_road</span>(input_image, output_image, model_path):
    detector = <span class="ct2">ObjectDetection</span>()
    detector.<span class="cf">setModelTypeAsYOLOv3</span>()
    detector.<span class="cf">setModelPath</span>(model_path)
    detector.<span class="cf">loadModel</span>()

    <span class="ck">return</span> detector.<span class="cf">detectObjectsFromImage</span>(
        input_image=input_image,
        output_image_path=output_image,
        minimum_percentage_probability=<span class="cn">30</span>   <span class="cc"># umbral de confianza</span>
    )

<span class="ck">def</span> <span class="cf">analyze_objects</span>(detections):
    road = [<span class="cs">"car"</span>, <span class="cs">"motorbike"</span>, <span class="cs">"bicycle"</span>, <span class="cs">"person"</span>,
            <span class="cs">"bus"</span>, <span class="cs">"train"</span>, <span class="cs">"truck"</span>, <span class="cs">"traffic_light"</span>, <span class="cs">"stop_sign"</span>]
    <span class="ck">return</span> [d <span class="ck">for</span> d <span class="ck">in</span> detections <span class="ck">if</span> d[<span class="cs">"name"</span>] <span class="ck">in</span> road]`},
        {type:'hi', h:'Juzga la herramienta, no solo el resultado', b:'Evalúa con la clase la calidad de la detección y pregunta qué imágenes funcionarían mejor. La conclusión importa: YOLO funciona mejor cuando los objetos <strong>destacan del fondo</strong>. Después generalízalo: cuando aceptas un encargo de detección, tienes que pensar en qué tipo de entrada vas a recibir de verdad. Elegir una herramienta acorde a los datos que tienes es criterio profesional, y aquí es donde el alumnado se lo encuentra por primera vez.'},
        {type:'text', h:'La lluvia de ideas — y sus reglas', b:'Quienes desarrollan tienen sus propias iniciativas, a menudo llamadas <strong>pet projects</strong>. Dos pautas: construye algo que resuelva un problema <em>tuyo</em> del día a día, para que sea útil aunque nunca se venda; y hazlo útil para un público concreto. Después haced una lluvia de ideas en condiciones en una pizarra compartida: todo el mundo lista problemas cotidianos, una nota por problema, <strong>sin críticas ni valoraciones en esta fase</strong>, cantidad por encima de calidad, cronómetro de cinco minutos. Solo después se agrupan según lo difíciles que serían de construir. Cada persona elige una para construirla la clase siguiente y describe su público objetivo.'},
        {type:'tip', txt:'Haz la parte de código como live coding: una persona escribe y las demás siguen. Si tienes un alumno fuerte, dale el teclado. La tarea adicional amplía el detector recortando con OpenCV cada usuario de la vía detectado.'}
      ]},
      {t:'🛠️ L4 — Construir su propia solución (EduScrum)', cards:[
        {type:'text', h:'Tres sprints, su propia idea', b:'<strong>Sprint 1 — preparación:</strong> montar el cuaderno, preparar los datos, entrenar el modelo o instanciar los objetos de librería que necesiten. <strong>Sprint 2 — desarrollo:</strong> implementar la lógica de inferencia y documentar el cuaderno con comentarios y bloques de texto. <strong>Sprint 3 — pruebas:</strong> probarlo y listar los fallos y las ideas de mejora en el chat de la plataforma. Retrospectiva después de cada sprint.'},
        {type:'qa', h:'Las preguntas de retrospectiva de esta clase', items:[
          {k:'1', v:'¿Qué hemos conseguido? ¿Os dio tiempo a hacer todo lo que queríais?'},
          {k:'2', v:'¿Qué parte del script fue la más difícil?'},
          {k:'3', v:'¿Qué necesitáis hacer para mejorar aquello en lo que estabais trabajando?'}
        ]},
        {type:'text', h:'Tu trabajo durante el sprint 1', b:'Asegúrate de que cada persona <strong>entiende qué tecnología necesita y qué tiene que hacer para usarla</strong> antes de que empiece el desarrollo. Es la primera vez que han elegido el problema por su cuenta, así que el riesgo no es la capacidad de programar: es elegir algo sin ninguna vía de entrada. Detéctalo en el sprint 1, no en el 2.'},
        {type:'tip', txt:'Si se atascan durante el desarrollo, júntales en salas de trabajo o acompáñales individualmente. Documentar el cuaderno con comentarios y bloques de texto no es adorno: es el hábito sobre el que se apoyará la clase de código limpio del Módulo 9 del curso.'},
        {type:'text', h:'Fin del Tema 3 — la ciencia de datos', b:'Cierra el tema de IA conectándolo con una carrera, y pregunta qué saben antes de contárselo. El planteamiento que ofrece el curso: quien se dedica a la ciencia de datos es un detective de la información en el mundo digital: recoge los datos, los limpia para que sean correctos y después usa herramientas especializadas para encontrar patrones y respuestas. Después pregunta a quién le atrae eso y si encaja con sus otros intereses.'}
      ]}
    ],
    quiz:[
      {q:'El modelo exportado de un alumno lanza “Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”. ¿Qué está pasando?', opts:['Un choque de versiones de librería — el curso fija tf-keras==2.19.0 y h5py==3.11.0 en Colab, o tensorflow==2.15 en un proyecto pipenv','El archivo del modelo está corrupto y hay que reentrenarlo','La imagen tiene el tamaño equivocado','Colab se ha quedado sin memoria'], c:0, fb:'Es un problema de compatibilidad de versiones. Ten los comandos de instalación fijados listos para pegar en lugar de depurar versiones delante de la clase.'},
      {q:'¿Por qué el curso usa tf-keras en lugar de keras a secas para estos modelos?', opts:['El modelo exportado se guarda en formato .h5, y tf-keras es la versión compatible con .h5 — por lo demás es la misma librería','tf-keras es más rápido en Colab','Keras a secas no puede clasificar imágenes','tf-keras es la única versión gratuita'], c:0, fb:'Keras forma parte de TensorFlow y está disponible como tf.keras; como el modelo de Teachable Machine es .h5, el curso usa el tf-keras compatible.'},
      {q:'Un alumno enseña a su clasificador de aves una foto de un coche y responde “gorrión” con total seguridad. ¿Cuál es la explicación?', opts:['El modelo solo conoce las clases con las que se entrenó, así que mete cualquier entrada dentro de una de ellas','El modelo está roto y hay que reentrenarlo','La resolución de la imagen lo ha confundido','Hacía falta ImageAI en lugar de Keras'], c:0, fb:'M6L1 destaca exactamente esto después del juego de preguntas: el modelo nunca vio ningún otro objeto, así que solo busca lo que conoce.'},
      {q:'¿Cuál es el propósito real del juego del experto “todos contra uno”?', opts:['Ayudar al alumnado a superar el miedo a formular una pregunta — no pasa nada por no saber la respuesta a tu propia pregunta','Identificar a la persona más fuerte del grupo','Comprobar quién ha leído la documentación','Llenar tiempo mientras se entrenan los modelos'], c:0, fb:'La nota de la clase lo dice directamente: el juego ayuda al alumnado a superar el miedo a formular una pregunta, y no existen las preguntas tontas.'},
      {q:'En la competición de IA contra real, ¿quién gana?', opts:['El equipo con la mayor precisión media de sus modelos — no la persona con el mejor modelo suelto','El alumno cuyo modelo sea más preciso','El equipo que termine antes de entrenar','El equipo que genere más imágenes'], c:0, fb:'La regla es deliberada: premiar la media del equipo hace que ayudar a tus compañeros sea racional y no opcional.'},
      {q:'¿Qué deberías decirle al alumnado sobre las imágenes que genera para el dataset?', opts:['Que se limite a animales, objetos y personajes inventados — nunca personas reales e identificables, porque las falsificaciones realistas difunden desinformación','Cualquier tema vale mientras las imágenes se queden en la carpeta del equipo','Que genere solo imágenes de celebridades, ya que hay más referencias','El tema de la generación no afecta al modelo, así que da igual'], c:0, fb:'La clase se construye exactamente sobre ese riesgo: las imágenes generadas que se parecen a las reales llevan a la desinformación y pueden contener contenido discriminatorio.'},
      {q:'¿Cuál es la diferencia entre detección y segmentación?', opts:['La detección encuentra y encuadra la ubicación de los objetos; la segmentación averigua qué píxeles concretos pertenecen a qué objeto o región','La detección es para fotos y la segmentación para vídeo','La segmentación encuentra un objeto y la detección muchos','Son la misma tarea con librerías distintas'], c:0, fb:'La clasificación etiqueta la imagen entera, la detección localiza y encuadra objetos, y la segmentación divide la imagen en regiones de píxeles por objeto.'},
      {q:'Tras probar YOLO con varias imágenes, ¿a qué conclusión debería llegar el alumnado?', opts:['Funciona mejor cuando los objetos destacan del fondo — así que hay que pensar qué entrada va a recibir realmente tu aplicación','Funciona igual de bien con cualquier imagen','Solo detecta vehículos','La precisión depende únicamente del umbral de confianza'], c:0, fb:'La clase te pide que debatáis qué imágenes funcionan mejor y luego generalicéis: elegir una herramienta acorde a tu entrada real es criterio profesional.'},
      {q:'Durante la etapa de lluvia de ideas, ¿qué regla tienes que hacer cumplir?', opts:['Nada de críticas ni valoraciones de las ideas mientras se generan — primero cantidad, la criba después','Solo se pueden anotar ideas realistas y construibles','Cada persona puede sugerir una sola idea','Las ideas deben ser aprobadas por el tutor antes de añadirse'], c:0, fb:'La nota de puntos importantes dice que no dejes que valoren las ideas durante la generación; hasta las más disparatadas se anotan, y agruparlas por viabilidad viene después.'},
      {q:'¿Qué debes verificar durante el Sprint 1 de M6L4, antes de que empiece el desarrollo?', opts:['Que cada persona entiende qué tecnología necesita y qué tiene que hacer para usarla','Que cada persona ha terminado de entrenar su modelo','Que el cuaderno está completamente comentado','Que todo el mundo ha elegido el mismo problema'], c:0, fb:'Es la primera vez que el alumnado elige el problema por su cuenta, así que el riesgo real es elegir algo sin vía de entrada. La nota del sprint 1 pide exactamente esa comprobación.'}
    ]
  },
  {
    id:11, emoji:'🔌', color:'#F59E0B',
    title:'M7 — Integrar la IA en Sus Proyectos',
    desc:'Módulo 7 del curso: preparar el IDE para trabajar con IA, un bot de Discord que ejecuta su propio modelo de visión, publicar desde VS Code, transcripción y traducción de voz, y entrada por voz en la app de Flask.',
    obj:'Enseñar al alumnado a combinar todo lo que ha construido. Debes saber preparar un entorno virtual para librerías de IA y resolver el choque de versiones, hacer que un bot acepte imágenes adjuntas y ejecute la inferencia, publicar un proyecto desde dentro de VS Code y programar en directo un script de reconocimiento de voz y un botón de entrada por voz.',
    prep:'~5 o 6 horas. El módulo más frágil: ensáyalo dos veces.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 7 del curso, debes haber hecho personalmente:',
      items:[
        'Montó un entorno virtual con las librerías de IA instaladas y el intérprete correcto seleccionado',
        'Consiguió que un bot aceptara una imagen adjunta y la guardara con <code>attachment.save()</code>',
        'Conectó su propio modelo exportado a ese bot para que responda con una predicción',
        'Publicó el proyecto entero desde VS Code — después de quitar el token',
        'Escribió un README lo bastante bueno como para sacar 30 según los criterios del propio curso',
        'Grabó y transcribió voz con <code>sounddevice</code> y <code>speech_recognition</code>',
        'Se topó con el fallo del micrófono ocupado y confirmó que silenciar Zoom lo arregla',
        'Añadió traducción al script de transcripción',
        'Añadió una ruta funcional de entrada por voz a su app de Flask, envuelta en <code>try</code>/<code>except</code>'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> preparar el IDE y el entorno, hacer que un bot acepte imágenes y una lluvia de ideas de startup; <strong>L2</strong> cargar el modelo en el proyecto e implementar la <strong>inferencia</strong>, y después publicar desde VS Code; <strong>L3</strong> transcripción y traducción de voz con <code>speech_recognition</code>; <strong>L4</strong> añadir entrada por voz a su web de Flask, con <code>try</code>/<code>except</code>.',
          why:'Este es el módulo de la recompensa. Todo lo de los módulos 1 a 6 converge: su bot, su web, su modelo entrenado, su entorno virtual. También es el módulo técnicamente más frágil del curso, así que la preparación importa aquí más que en ninguna otra parte.',
          learn:'El alumnado monta un entorno virtual con librerías de IA, acepta y guarda un adjunto de Discord, ejecuta su propio modelo sobre una imagen subida y responde con el resultado, publica un proyecto en GitHub desde el editor, graba y transcribe voz, traduce la transcripción y añade un botón funcional de entrada por voz a su web de diario.',
          confident:'Montar el entorno y seleccionar el intérprete; el arreglo con <code>tensorflow==2.15</code>; <code>ctx.message.attachments</code> y <code>attachment.save()</code>; qué significa inferencia; publicar desde la interfaz de Git de VS Code; el truco del micrófono de Zoom; y <code>try</code>/<code>except</code> alrededor de todo lo que toque hardware o red.'
        }
      ]},
      {t:'🔧 L1 — Preparar el entorno y el bot', cards:[
        {type:'warn', txt:'Esta clase es <strong>técnica y frágil</strong>: prepara al alumnado con antelación. Pídeles que abran sus antiguos proyectos de bot de Discord <em>antes</em> de la clase, repasen cómo funcionan y los dejen abiertos, porque van a trabajar en ellos todo el rato. Quien llegue sin su proyecto te cuesta la primera etapa entera.'},
        {type:'text', h:'La etapa del entorno', b:'Recuérdales cómo crear un <strong>entorno virtual</strong>: aquí no es negociable, porque las librerías de IA son grandes y sensibles a las versiones. Comparte tu pantalla o cédesela a un alumno fuerte para que dirija. Después instala en el entorno todas las librerías que necesita el proyecto.'},
        {type:'code', lbl:'el arreglo del choque de versiones — ten esto listo para pegar', code:`<span class="cc"># Si ves:</span>
<span class="cc">#   Exception encountered: Unrecognized keyword arguments</span>
<span class="cc">#   passed to DepthwiseConv2D: {'groups': 1}</span>
<span class="cc"># es un problema de compatibilidad de versiones, no de tu código.</span>

pipenv uninstall tensorflow
pipenv install tensorflow==2.15   <span class="cc"># compatible con Python 3.11</span>`},
        {type:'tip', txt:'Dos planes B que salvan la clase. Si la instalación se alarga o falla, usa el <strong>Pipfile del repositorio de solución</strong> para montar el entorno de una vez. Si alguien nunca guardó su bot antiguo, dale el <strong>Basic Bot</strong> de la escuela. Ninguna de las dos cosas es hacer trampa: es negarse a que la configuración se coma una clase práctica.'},
        {type:'code', lbl:'un comando de bot que acepta y guarda una imagen', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Imagen guardada en ./{attachment.filename}"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Se te ha olvidado subir la imagen :("</span>)`},
        {type:'text', h:'La lluvia de ideas y el estudio de mercado', b:'Una actividad en tres pasos, con partes que puedes saltarte si vas justo de tiempo. <strong>1. Lluvia de ideas:</strong> el alumnado genera ideas para un bot de Discord tipo startup que use clasificación de imágenes, sin valoraciones durante la generación; tú anotas todas las ideas en un sitio visible para todos. Tras cuatro minutos, formad equipos de 2 o 3 y asigna a cada uno la idea más viable. <strong>2. Estudio de mercado:</strong> ocho minutos para buscar soluciones parecidas que ya existan y listar las ventajas e inconvenientes de la idea asignada, escribiendo los hallazgos en el chat de la tarea. <strong>3. Presentación:</strong> cada equipo comparte lo que ha encontrado.'},
        {type:'good', txt:'La etapa de estudio de mercado es, discretamente, lo más adulto del curso. Casi nadie ha comprobado nunca si su idea ya existe, y descubrir que sí y que además tiene defectos motiva más de lo que desanima. Plantéalo como reconocimiento del terreno, no como juicio.'}
      ]},
      {t:'🧩 L2 — Inferencia en el bot y publicación desde VS Code', cards:[
        {type:'text', h:'Qué significa inferencia', b:'Dales la palabra como es debido: la <strong>inferencia</strong> es usar un modelo ya entrenado para hacer una predicción sobre una entrada nueva. El entrenamiento ha terminado; esto es el modelo haciendo su trabajo. Su tarea es añadir el modelo y el archivo <code>labels.txt</code> al proyecto, averiguar qué archivos hacen falta y por qué, y luego hacer que el bot responda a una imagen subida con la salida del modelo.'},
        {type:'code', lbl:'el bot ejecutando su propio modelo sobre una subida', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_class</span>(
                model_path=<span class="cs">"./keras_model.h5"</span>,
                labels_path=<span class="cs">"labels.txt"</span>,
                image_path=<span class="cs">f"./{attachment.filename}"</span>))
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Se te ha olvidado subir la imagen :("</span>)`},
        {type:'tip', txt:'En lugar de decirles qué archivos necesita el proyecto, <strong>pregúntaselo</strong>, y si aciertan, pídeles que den una miniclase magistral a sus compañeros. Es el patrón de diferenciación que usa este curso en todas partes, y es genuinamente más rápido que explicarlo. Apúntales a sus propios scripts de M6L4 como pista para la lógica de inferencia.'},
        {type:'text', h:'Publicar desde el editor', b:'El alumnado sube el proyecto a GitHub usando la <strong>interfaz de VS Code</strong> en lugar de la web, cerrando el arco que empezó en M1L2 con la subida torpe por el navegador y siguió en M2L3 cuando conectaron su cuenta. Debatid por qué importa publicar: es su portafolio, y es como cualquier otra persona puede ejecutar su trabajo.'},
        {type:'qa', h:'Los criterios del README — merece la pena enseñárselos', items:[
          {k:'20 puntos', v:'Una descripción del bot en el README, pero en texto sin estructura.'},
          {k:'30 puntos', v:'Una descripción estructurada con emojis: clara y agradable de leer.'},
          {k:'+5 de bonus', v:'Una imagen o un GIF del bot funcionando.'},
          {k:'+10 de bonus', v:'Un archivo de licencia.'}
        ]},
        {type:'warn', txt:'La comprobación del token, otra vez y en serio: este proyecto ahora contiene un token de bot <em>y</em> un modelo entrenado. Antes de subir nada, el token sale. Un repositorio público con un token activo es el peor desenlace que puede producir este curso, y esta es la clase en la que es más probable, porque el alumnado está centrado en la parte de IA.'}
      ]},
      {t:'🎙️ L3 — Transcripción y traducción de voz', cards:[
        {type:'text', h:'Empieza por lo que ya usan', b:'Cinco minutos de debate antes de nada de código: ¿dónde se han encontrado con la transcripción? El Traductor de Google, la entrada de voz en las apps de mensajería, los subtítulos de YouTube, los subtítulos automáticos de TikTok e Instagram. La <strong>transcripción</strong> es convertir voz en texto: deben ser capaces de explicarlo con sus palabras, a nivel de persona usuaria, antes de construirlo.'},
        {type:'code', lbl:'grabar y luego transcribir — construido con live coding', code:`<span class="ck">import</span> sounddevice <span class="ck">as</span> sd
<span class="ck">import</span> scipy.io.wavfile <span class="ck">as</span> wav
<span class="ck">import</span> speech_recognition <span class="ck">as</span> sr

duration    = <span class="cn">5</span>        <span class="cc"># segundos de grabación</span>
sample_rate = <span class="cn">44100</span>

<span class="cf">print</span>(<span class="cs">"Habla ahora..."</span>)
recording = sd.<span class="cf">rec</span>(<span class="cf">int</span>(duration * sample_rate),
                   samplerate=sample_rate, channels=<span class="cn">1</span>, dtype=<span class="cs">"int16"</span>)
sd.<span class="cf">wait</span>()
wav.<span class="cf">write</span>(<span class="cs">"output.wav"</span>, sample_rate, recording)

<span class="cf">print</span>(<span class="cs">"Grabación completada, reconociendo..."</span>)
recognizer = sr.<span class="ct2">Recognizer</span>()
<span class="ck">with</span> sr.<span class="ct2">AudioFile</span>(<span class="cs">"output.wav"</span>) <span class="ck">as</span> source:
    audio = recognizer.<span class="cf">record</span>(source)

<span class="ck">try</span>:
    text = recognizer.<span class="cf">recognize_google</span>(audio, language=<span class="cs">"es-ES"</span>)
    <span class="cf">print</span>(<span class="cs">"Has dicho:"</span>, text)
<span class="ck">except</span> sr.<span class="ct2">UnknownValueError</span>:
    <span class="cf">print</span>(<span class="cs">"No se ha podido reconocer el habla."</span>)
<span class="ck">except</span> sr.<span class="ct2">RequestError</span> <span class="ck">as</span> e:
    <span class="cf">print</span>(<span class="cs">f"Error del servicio: {e}"</span>)`},
        {type:'warn', txt:'Lo más útil de todo este plan de clase: <strong>si el script da error, silencia tu micrófono en Zoom y vuelve a ejecutarlo.</strong> Zoom se queda con el micrófono y el script no puede abrirlo. Díselo al alumnado antes de la primera ejecución, no después de veinte minutos depurando.'},
        {type:'text', h:'Y luego añade la traducción', b:'Segunda mitad: amplía el script para que el texto transcrito se traduzca a otro idioma con la clase <code>Translator</code>, y deja que la persona usuaria elija el código del idioma de destino. Las dos mitades se hacen con <strong>live coding</strong> —lo construís juntos— y el criterio de éxito se dice sin rodeos: al final de la etapa, <strong>todo el alumnado tiene código que funciona</strong>.'},
        {type:'hi', h:'No te saltes la actividad de descanso', b:'Entre las dos mitades prácticas hay un juego de diez minutos: tú dices un color o una letra y tienen sesenta segundos para encontrar y enseñar un objeto que encaje. El plan dice explícitamente que <strong>no te lo saltes</strong>: necesitan recuperar la concentración antes de la segunda práctica, y esta clase tiene sesenta minutos seguidos de práctica. Participa tú también.'}
      ]},
      {t:'🗣️ L4 — Entrada por voz en la app de Flask', cards:[
        {type:'text', h:'El objetivo, y la libertad que tienes', b:'Añadir un <strong>botón de entrada por voz</strong> que aparece cuando la persona usuaria crea una nueva tarjeta de entrada del diario. El manual de la clase dice explícitamente que su propia implementación es una opción sencilla —y no la más eficaz— entre varias. Eres libre de implementarlo de otra forma según el nivel de tu alumnado. Dilo en los grupos fuertes: encontrarán algo mejor.'},
        {type:'text', h:'Empieza con preguntas, no con código', b:'Pídeles que recuerden de qué está hecha una página web y en qué página debe ir el botón. Enséñales la plantilla y haz que encuentren la clase ya definida para los botones. Después el punto sutil: el <code>&lt;button&gt;</code> dentro de un formulario <strong>envía el formulario</strong>, y no es eso lo que queremos: queremos que se ejecute nuestra función. Por eso el ejemplo usa un enlace con estilo.'},
        {type:'code', lbl:'la ruta, envuelta en try/except', code:`<span class="ck">from</span> speech <span class="ck">import</span> speech

<span class="cd">@app.route</span>(<span class="cs">'/voice'</span>)
<span class="ck">def</span> <span class="cf">voices</span>():
    <span class="ck">try</span>:
        text = <span class="cf">speech</span>()
    <span class="ck">except</span>:
        text = <span class="cs">"Algo ha salido mal..."</span>
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'create_card.html'</span>, text=text)`},
        {type:'code', lbl:'la plantilla lo recibe como variable de Jinja', code:`<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"text"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;textarea</span> <span class="cf">class</span>=<span class="cs">"form__text"</span> <span class="cf">name</span>=<span class="cs">"text"</span> <span class="cf">id</span>=<span class="cs">"text"</span> <span class="cf">required</span><span class="ct2">&gt;</span>{{ text }}<span class="ct2">&lt;/textarea&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">class</span>=<span class="cs">"help_button"</span> <span class="cf">href</span>=<span class="cs">"./voice"</span><span class="ct2">&gt;</span> Grabar <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/label&gt;</span>`},
        {type:'hi', h:'try / except, enseñado por necesidad', b:'El motivo de que <code>try</code>/<code>except</code> llegue aquí y no antes es que el alumnado acaba de escribir código que <em>de verdad falla a veces</em>: un micrófono puede estar ocupado, una llamada de red puede no responder. Ese es el argumento honesto para el manejo de excepciones: el <code>try</code> guarda el código que puede fallar, el <code>except</code> guarda qué hacer cuando falla, para que la página entera no se rompa. Preséntalo como la solución a un problema que ya han vivido.'},
        {type:'text', h:'Fin del Tema 4 — la especialidad en IA', b:'Cierra el tema de IA aplicada: celebra haberlo terminado, muestra qué desbloquean estas habilidades y habla de las ventajas de especializarse en IA hoy. Pregúntales si podría ser el trabajo de sus sueños y si se les ocurren ventajas que no hayas mencionado. La tarea adicional es muy abierta: encuentra una librería que te interese y úsala para mejorar tu proyecto como quieras.'},
        {type:'tip', txt:'Si vas justo de tiempo, haz la tarea creativa como live coding en lugar de quitarla. Y apunta el detalle de CSS del plan: al copiar los estilos del botón, este puede acabar encima del formulario; <code>display: inline-block;</code> lo arregla.'}
      ]}
    ],
    quiz:[
      {q:'¿Qué significa “inferencia” en M7L2?', opts:['Usar un modelo ya entrenado para hacer una predicción sobre una entrada nueva','Entrenar un modelo con un dataset nuevo','Adivinar qué clases debería contener un dataset','Convertir un modelo en un archivo más pequeño'], c:0, fb:'El entrenamiento ha terminado; la inferencia es el modelo haciendo su trabajo sobre datos nuevos, aquí una imagen que alguien ha subido en Discord.'},
      {q:'El proyecto de bot con IA de un alumno lanza el error “groups” de DepthwiseConv2D durante la configuración. ¿Cuál es el arreglo preparado?', opts:['pipenv uninstall tensorflow y luego pipenv install tensorflow==2.15 (compatible con Python 3.11)','Reentrenar el modelo en Teachable Machine','Cambiar la clase Bot por la clase Client','Reinstalar Python'], c:0, fb:'Es un problema de compatibilidad de versiones. Ten ese par de comandos listos para pegar en lugar de depurar versiones en directo.'},
      {q:'¿Qué debes pedirle al alumnado ANTES de que empiece la clase M7L1?', opts:['Que abran sus antiguos proyectos de bot de Discord, repasen cómo funcionan y los dejen abiertos — construyen sobre ellos toda la clase','Que reentrenen su modelo de visión desde cero','Que borren sus entornos virtuales','Que escriban un README para el proyecto'], c:0, fb:'La nota de la clase la marca como técnica y te pide que prepares al alumnado con antelación, con sus antiguos proyectos de bot abiertos.'},
      {q:'Un alumno nunca guardó su bot del Módulo 1. ¿Cuál es la respuesta correcta?', opts:['Darle el Basic Bot de la escuela para que la configuración no se coma la clase práctica','Hacer que reconstruya el bot desde cero mientras la clase espera','Emparejarle con alguien y dejar que solo mire','Ignorarle y marcar la clase como incompleta'], c:0, fb:'El plan facilita un Basic Bot exactamente para esto, igual que facilita el Pipfile del repositorio de solución cuando la configuración del entorno se alarga.'},
      {q:'¿Qué función de discord.py permite al bot recibir una imagen de la persona usuaria?', opts:['ctx.message.attachments, y luego attachment.save() para escribirla en disco','discord.File, que lee las subidas','request.form, como en un formulario web','El evento on_upload de la clase Client'], c:0, fb:'El comando comprueba ctx.message.attachments, recorre los adjuntos y guarda cada uno; después la ruta guardada es lo que se pasa al modelo.'},
      {q:'¿Cuál es el momento de mayor riesgo de seguridad de este módulo?', opts:['Publicar el proyecto en GitHub con el token real del bot todavía en el código','Subir el archivo del modelo entrenado','Instalar tensorflow desde internet','Dejar que el bot guarde imágenes subidas por otras personas'], c:0, fb:'El alumnado está centrado en la parte de IA, y el proyecto contiene ahora un token activo. Comprueba antes de cada subida: un repositorio público con un token que funciona es el peor desenlace posible.'},
      {q:'El script de reconocimiento de voz falla nada más ejecutarse durante tu clase. ¿Qué compruebas primero?', opts:['Si tu micrófono de Zoom está activo — Zoom se queda con el micro, así que silencia y vuelve a ejecutar','Si speech_recognition está instalado','Si el código de idioma es correcto','Si el archivo .wav ya existe'], c:0, fb:'El plan de clase lo señala explícitamente como punto importante: silencia el micrófono en Zoom y reinicia el script.'},
      {q:'¿Por qué try/except llega en M7L4 y no antes en el curso?', opts:['Porque el alumnado acaba de escribir código que de verdad falla a veces —un micrófono ocupado, una llamada de red sin respuesta—, así que el manejo de excepciones resuelve un problema que han vivido','Porque Flask lo exige en todas las rutas','Porque es demasiado avanzado antes de este punto','Porque Jinja no puede renderizar errores'], c:0, fb:'La función de voz a veces produce un error, que es justamente la motivación honesta para try/except: capturar el fallo para que la página no se rompa.'},
      {q:'¿Por qué el ejemplo de M7L4 usa un enlace con estilo en lugar de un <button> dentro del formulario?', opts:['Un <button> dentro de un formulario envía el formulario, que no es lo que queremos: queremos que se ejecute nuestra función','Los enlaces son más rápidos que los botones','Los botones no se pueden estilar con CSS','Flask no puede recibir clics de botón'], c:0, fb:'La clase te pide que debatáis justamente esto: la etiqueta button dentro de un formulario se encarga de enviar datos, así que el disparador de voz se implementa de otra manera.'},
      {q:'¿Para qué existe el juego de diez minutos de “encuentra un objeto” entre las dos mitades prácticas de M7L3?', opts:['Para que el alumnado recupere la concentración antes de la segunda práctica — el plan dice explícitamente que no te lo saltes','Para evaluar su vocabulario','Para llenar tiempo si el código termina antes','Para elegir quién presenta su programa'], c:0, fb:'M7L3 tiene sesenta minutos seguidos de práctica. El descanso está en el horario a propósito y el plan te pide que no te lo saltes, y que participes tú también.'}
    ]
  },
  {
    id:12, emoji:'🤝', color:'#14B8A6',
    title:'M8 — Agile, Ramas en Git y Revisión de Código',
    desc:'Módulo 8 del curso: valores de Agile y roles de Scrum, crear y fusionar ramas en Git, los principios y la lista de comprobación de la revisión de código, y programación colaborativa con Live Share.',
    obj:'Enseñar el oficio de ingeniería que hace posible el trabajo en equipo. Debes saber explicar Agile y Scrum con analogías cotidianas, definir con precisión los tres roles de Scrum, dirigir un ejercicio de planificación de sprint, enseñar ramas y fusiones, construir una lista de comprobación de revisión con el alumnado y preparar un entorno colaborativo antes de la clase.',
    prep:'~3 o 4 horas. Menos construcción, más práctica de Git.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 8 del curso, debes haber hecho personalmente:',
      items:[
        'Explicó Agile y Scrum en voz alta, con sus propias palabras, usando las analogías cotidianas',
        'Escribió un plan de sprint para una funcionalidad pequeña, dividido en tareas con responsables',
        'Creó una rama, hizo commits en ella, la fusionó y leyó la salida del merge',
        'Provocó a propósito un <strong>conflicto</strong> de fusión y lo resolvió, para que no le sorprenda en directo',
        'Revisó el código de ejemplo con fallos del curso y encontró él mismo los cuatro problemas plantados',
        'Escribió su propia lista de comprobación de revisión antes de compararla con la del curso',
        'Instaló la extensión <strong>Live Share</strong> y probó una sesión con un segundo dispositivo o con un compañero',
        'Refactorizó el código roto de la tarea colaborativa hasta que funcionó'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> Agile y Scrum, los tres roles y la planificación de un sprint real; <strong>L2</strong> ramas de Git: crear, gestionar y fusionar; <strong>L3</strong> revisión de código, sus principios, una lista de comprobación compartida y revisar los proyectos de los demás; <strong>L4</strong> entornos de desarrollo colaborativo (VS Code Live Share) más el juego del módulo.',
          why:'El alumnado lleva usando sprints y retrospectivas desde el Módulo 1 sin que nadie le haya dicho qué son. Este módulo pone nombre a las prácticas y añade las dos habilidades que hacen posible trabajar con otras personas: crear ramas y revisar.',
          learn:'El alumnado explica los valores de Agile con sus palabras, investiga y presenta un rol de Scrum, planifica un sprint para una funcionalidad real, crea y fusiona ramas, construye y aplica una lista de comprobación de revisión, da retroalimentación constructiva y programa a la vez en un mismo editor compartido.',
          confident:'Agile como filosofía frente a Scrum como práctica concreta; qué hacen realmente el Scrum Master, el Product Owner y el equipo de desarrollo; <code>git merge</code> y qué aspecto tiene una fusión correcta; los cinco principios de una revisión eficaz; y tener Live Share configurado <em>antes</em> de la clase.'
        }
      ]},
      {t:'🏃 L1 — Agile, Scrum y planificación de sprint', cards:[
        {type:'text', h:'Enseña los valores con analogías cotidianas', b:'Párate en los valores de Agile y pide al alumnado que explique cada uno con sus palabras y un ejemplo de la vida diaria. El curso aporta cuatro analogías que funcionan bien con adolescentes, y usarlas gana a definir los términos.'},
        {type:'qa', h:'Los cuatro valores de Agile, tal como los plantea el curso', items:[
          {k:'Individuos e interacciones por encima de procesos y herramientas', v:'Planear una cena familiar: en lugar de un turno de cocina rígido, habláis de preferencias, decidís quién hace qué y ayudáis a quien se atasca.'},
          {k:'Software funcionando por encima de documentación exhaustiva', v:'Recoger tu habitación: en vez de planear dónde va cada cosa, empiezas a despejar. La habitación limpia es el objetivo; el camino puede cambiar.'},
          {k:'Colaboración con el cliente por encima de negociación contractual', v:'Habías quedado con tus amigos y a uno le sale una clase. En lugar de insistir en la hora original, buscáis una que funcione.'},
          {k:'Responder al cambio por encima de seguir un plan', v:'Habías planeado salir a correr por la mañana y está lloviendo, así que haces yoga en casa en lugar de cancelarlo.'}
        ]},
        {type:'hi', h:'Agile y Scrum, en una imagen', b:'Es la distinción que más se difumina. <strong>Agile es la filosofía</strong>: cómo una familia acuerda convivir en armonía —respeto, flexibilidad, cooperación—. <strong>Scrum son las reglas concretas</strong> para llevarlo a la práctica: quién cocina, quién pone la mesa, quién recoge; los roles, las tareas, las reuniones que lo hacen funcionar. Agile es la idea; Scrum es una forma de darle vida.'},
        {type:'text', h:'Los roles, investigados por el alumnado', b:'Divide el grupo en tres equipos —<strong>Scrum Master</strong>, <strong>Product Owner</strong>, <strong>equipo de desarrollo</strong>— y dales diez minutos con las fuentes que quieran para investigar su rol en el contexto de un proyecto de app móvil. Después cada equipo hace una minipresentación de cinco minutos. Tu trabajo es responder a dudas organizativas y técnicas y construir un buen ambiente. Al terminar, pregunta a quién le <em>gustaría</em> ser Scrum Master o Product Owner, y por qué.'},
        {type:'twocol', left:{h:'Scrum Master', items:['Elimina obstáculos para que el equipo pueda trabajar','Explica Agile y Scrum, sobre todo a quien acaba de llegar','Dirige las reuniones diarias, la planificación y las retrospectivas, y las mantiene productivas','Se asegura de que la gente se sienta segura expresando ideas, y trae a la conversación a quien está más callado','<strong>No dirige</strong>: crea las condiciones para el éxito']}, right:{h:'Product Owner', items:['Reúne requisitos de clientes, responsables y personas usuarias','Construye la lista de tareas y la ordena por prioridad','Escribe las tareas como historias de usuario que el equipo entiende','Define cuándo una tarea cuenta como terminada','Ayuda al equipo a desglosar tareas y a valorar su complejidad']}},
        {type:'text', h:'Y luego planificad un sprint de verdad', b:'Todo el grupo actúa como un único equipo de desarrollo. Haced una lluvia de ideas sobre “¿qué construiríais si pudierais construir cualquier cosa?”, y después <strong>tú asumes el rol de Product Owner</strong> y les ayudas a planificar un sprint. No planifiquéis el proyecto entero: coged una parte, como un formulario de registro o un menú. Tiempos sugeridos: 5 minutos de lluvia de ideas, 5 minutos con el Product Owner, 15 minutos de planificación, 5 minutos de presentación y comentarios.'},
        {type:'tip', txt:'El ejemplo desarrollado del plan —un formulario de registro dividido en frontend, backend, infraestructura, pruebas y documentación a lo largo de dos semanas— es mucho más detallado de lo que producirá tu alumnado. Úsalo como referencia propia para provocarles (“¿quién lo prueba? ¿quién lo documenta?”), no como listón que exigirles.'}
      ]},
      {t:'🌳 L2 — Ramas en Git', cards:[
        {type:'text', h:'Dos analogías, las dos vale tener a mano', b:'<strong>Los apuntes compartidos de la clase:</strong> toda la clase trabaja sobre un mismo conjunto grande de apuntes, y cada persona escribe su parte en una hoja aparte —una rama— para que nadie estropee el documento principal. Cuando todas las secciones están listas, se combinan en un solo archivo: una <strong>fusión</strong>. Un error se puede corregir en la hoja individual sin tocar el documento entero. <strong>Un rodaje de cine:</strong> la rama principal es el guion final, que solo contiene material aprobado; una rama de funcionalidad es una escena aparte donde se prueban ideas nuevas sin afectar al guion; la fusión es el montaje que une las escenas.'},
        {type:'text', h:'Cómo se hace la práctica', b:'Haz la tarea en tu máquina y que el alumnado te siga <strong>paso a paso</strong>, comprobando que todo el mundo mantiene el ritmo. El criterio de éxito es concreto: cada persona envía una captura de su terminal con el resultado de <code>git merge feature/add-greeting</code>. Asegúrate de que la completa <em>todo</em> el mundo: es una habilidad que, si no cala, bloquea en silencio el trabajo en equipo más adelante.'},
        {type:'code', lbl:'qué aspecto tiene una fusión fast-forward correcta', code:`Updating 319de95..8de4c42
Fast-forward
 main.py | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)`},
        {type:'hi', h:'Abre con el test y lee las respuestas en voz alta', b:'La clase empieza con un test de diez minutos sobre el material de Agile y Scrum de la clase anterior, y el plan te dice que repases después <strong>todas</strong> las respuestas correctas con su explicación. Merece la pena hacerlo bien: el Product Owner es dueño del backlog, un sprint es un periodo fijo de una a cuatro semanas, crear el backlog <em>no</em> es trabajo del Scrum Master, la retrospectiva es donde el equipo planifica mejoras, y la adaptación rápida al cambio es el principio de Agile.'},
        {type:'tip', txt:'Los deberes de aquí tienen una segunda parte: una “<strong>tarea secreta</strong>” que <em>no</em> debes comentar; solo recuérdales que la necesitarán en la cuarta clase de este módulo. No destripes la sorpresa, y no te olvides de ella tampoco.'}
      ]},
      {t:'🔎 L3 — Revisión de código', cards:[
        {type:'text', h:'Por qué existe la revisión', b:'Dirige un debate en grupo en lugar de exponer. Los cinco objetivos a los que debe llegar el alumnado: <strong>detectar errores</strong>, para que los fallos no lleguen a las personas usuarias; <strong>mantener estándares</strong> de estilo de código; <strong>mejorar las habilidades del equipo</strong> compartiendo conocimiento; <strong>mejorar la legibilidad</strong>, para que el código sea comprensible para todo el equipo y no solo para quien lo escribió; y <strong>aumentar la responsabilidad compartida</strong>, convirtiendo la base de código en un esfuerzo colectivo y no en un conjunto de esfuerzos individuales.'},
        {type:'qa', h:'Los cinco principios de una revisión eficaz', items:[
          {k:'Sé respetuoso', v:'Retroalimentación constructiva, sin culpabilizar.'},
          {k:'Céntrate en el problema, no en la persona', v:'Habla del código, no de quien lo escribió.'},
          {k:'Sé concreto', v:'Da ejemplos específicos de mejora.'},
          {k:'Equilibra crítica y elogio', v:'Reconoce explícitamente el código bien escrito.'},
          {k:'Da recomendaciones claras', v:'Haz tus sugerencias lo más inequívocas posible.'}
        ]},
        {type:'text', h:'Construid la lista con ellos y después usadla', b:'Diez minutos en equipos de dos o tres investigando y redactando una lista de comprobación, y después poned todo en común en <strong>una única lista final que usará todo el grupo</strong>, y mándala al chat del grupo, porque hace falta para la tarea siguiente y para los deberes. Las categorías a las que deben converger los borradores: claridad del código, corrección, simplicidad, cumplimiento del estilo, verificación de la lógica y salida correcta.'},
        {type:'code', lbl:'el código de práctica — cuatro problemas plantados', code:`<span class="ck">import</span> random

<span class="cf">print</span>(<span class="cs">"¡Bienvenido al juego 'Adivina el número'!"</span>)
secret = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">100</span>)
attempt = <span class="cn">0</span>

<span class="ck">while</span> <span class="ck">True</span>:
    user_guess = <span class="cf">input</span>(<span class="cs">"Escribe tu número: "</span>)
    attempt += <span class="cn">1</span>
    <span class="ck">if</span> user_gess == secret:              <span class="cc"># 1. errata: user_gess</span>
        <span class="cf">print</span>(<span class="cs">"¡Enhorabuena!"</span>)           <span class="cc"># 2. input() es una cadena —</span>
        <span class="ck">break</span>                            <span class="cc">#    nunca se convierte con int()</span>
    <span class="ck">elif</span> user_guess &gt; secret:            <span class="cc"># 3. no hay comentarios en ningún sitio</span>
        <span class="cf">print</span>(<span class="cs">"Tu número es mayor."</span>)     <span class="cc"># 4. sin validación de entrada —</span>
    <span class="ck">elif</span> user_guess &lt; secret:            <span class="cc">#    escribir texto lo tumba</span>
        <span class="cf">print</span>(<span class="cs">"Tu número es menor."</span>)`},
        {type:'text', h:'La revisión entre compañeros en sí', b:'El alumnado intercambia proyectos, y si no todo el mundo tiene uno listo, no pasa nada: varias personas pueden revisar el mismo proyecto, o recurres al código de ejemplo de arriba. Quince minutos para revisar, entregando el código y sus comentarios en el chat de la tarea. Después presentan lo que han revisado y comentáis juntos la retroalimentación y los problemas encontrados.'},
        {type:'good', txt:'Repite la regla de la retroalimentación constructiva justo antes de que empiecen, no solo durante la teoría. Revisar el código de un compañero es socialmente arriesgado para un adolescente, y la diferencia entre “esto está mal” y “yo renombraría esto para que se entienda mejor” es toda la diferencia entre una clase que funciona y una que daña al grupo.'},
        {type:'tip', txt:'Los deberes dependen de la clase anterior: el alumnado tenía que preparar un proyecto propio para dárselo a un compañero. Recuérdaselo al final de la L2, o media clase llegará sin nada que revisar.'}
      ]},
      {t:'👥 L4 — Desarrollo colaborativo y el juego del módulo', cards:[
        {type:'warn', txt:'<strong>La etapa 0 ocurre antes de que empiece la clase.</strong> Instala la extensión <strong>Live Share</strong> en VS Code, crea una carpeta con un <code>main.py</code> con un fragmento sencillo y ten todo listo. Después, en clase: haz clic en Live Share, inicia sesión, comparte el enlace, acepta la petición de conexión de cada alumno y <strong>concede permisos de edición</strong>. Si intentas hacer esto en frío delante de la clase, perderás la clase.'},
        {type:'text', h:'Qué recalcar sobre el entorno', b:'Da igual qué herramienta concreta usen: lo importante es entender <strong>cómo se trabaja cuando varias personas comparten una base de código</strong>. Haz que cada persona imprima su nombre en la terminal como prueba de conexión, y luego no desconectes a nadie al pasar a la tarea siguiente: el trabajo continúa en ese entorno.'},
        {type:'text', h:'La tarea colaborativa', b:'Carga código deliberadamente roto en el entorno compartido y ayúdales a <strong>repartirse los arreglos</strong>. Diles que no hace falta que lo terminen todo, pero que lo mejoren cuanto puedan. Veinte minutos y después parad para compartir impresiones. Los problemas plantados son un buen recorrido por el curso: una función que calcula pero nunca hace <code>return</code>, entrada sin validar, ausencia de manejo de excepciones alrededor de <code>int(input(...))</code>, una variable que por eso recibe <code>None</code>, y un nombre de jugador que se recoge y nunca se usa.'},
        {type:'code', lbl:'la forma de la versión refactorizada a la que llegan', code:`<span class="ck">import</span> random

<span class="cc"># Saluda al jugador y valida el nombre introducido</span>
<span class="ck">def</span> <span class="cf">greet_player</span>():
    <span class="ck">while</span> <span class="ck">True</span>:
        name = <span class="cf">input</span>(<span class="cs">"¿Cómo te llamas? (1-15 caracteres): "</span>).<span class="cf">strip</span>()
        <span class="ck">if</span> <span class="cn">1</span> &lt;= <span class="cf">len</span>(name) &lt;= <span class="cn">15</span>:
            <span class="ck">return</span> name                       <span class="cc"># el arreglo: devolverlo de verdad</span>
        <span class="cf">print</span>(<span class="cs">"El nombre debe tener entre 1 y 15 caracteres. Inténtalo otra vez."</span>)

<span class="ck">def</span> <span class="cf">generate_random</span>(low, high):
    <span class="ck">return</span> random.<span class="cf">randint</span>(low, high)      <span class="cc"># el arreglo: devolver, no solo llamar</span>

<span class="ck">if</span> __name__ == <span class="cs">"__main__"</span>:
    <span class="cf">main</span>()`},
        {type:'hi', h:'El juego del módulo — “La app de tus sueños”', b:'Quince minutos de preparación en dos equipos y luego cinco minutos cada uno para presentar. Elegir una idea, formar el equipo, planificar un sprint. <strong>En esta tarea no hay ganadores</strong>, y el plan lo dice: los resultados concretos son secundarios frente a trabajar en equipo, reforzar el módulo y pasarlo bien. Si nadie hizo la “tarea secreta”, anímales y que inventen una idea sobre la marcha; la idea puede ser cualquier cosa, incluso poco realista. Si se atascan, propón planificar una app parecida a alguna que usen a diario.'},
        {type:'tip', txt:'Cumple los tiempos con rigor aquí: 5 minutos explicando y formando equipos, 15 minutos trabajando, 5 + 5 minutos presentando. Esta clase tiene cuatro etapas distintas y ningún margen.'}
      ]}
    ],
    quiz:[
      {q:'¿Cómo explicas la diferencia entre Agile y Scrum?', opts:['Agile es la filosofía —respeto, flexibilidad, cooperación—; Scrum es el conjunto concreto de roles, tareas y reuniones que la lleva a la práctica','Scrum es la filosofía y Agile el conjunto de herramientas','Son metodologías rivales y un equipo elige una','Agile es para software y Scrum para hardware'], c:0, fb:'La analogía familiar del curso: Agile es cómo una familia acuerda convivir en armonía; Scrum es quién cocina, quién pone la mesa y quién recoge.'},
      {q:'¿Cuál de estas NO es responsabilidad del Scrum Master?', opts:['Crear y priorizar el backlog del producto','Eliminar obstáculos que bloquean al equipo','Dirigir las reuniones diarias, la planificación y las retrospectivas','Asegurarse de que se escucha a quienes están más callados'], c:0, fb:'El backlog es del Product Owner. El Scrum Master se asegura de que el equipo trabaje con eficacia y elimina obstáculos; es una de las respuestas del test de M8L2.'},
      {q:'¿Qué es un sprint y cuánto suele durar?', opts:['Un periodo de tiempo fijo dedicado a completar tareas del backlog — normalmente de una a cuatro semanas','Una reunión en la que el equipo revisa el trabajo terminado','La última semana antes de un lanzamiento','Una única jornada de programación concentrada'], c:0, fb:'Un sprint es un periodo de duración fija en el que el equipo se centra en completar tareas del backlog, habitualmente de una a cuatro semanas.'},
      {q:'Un alumno pregunta por qué existen las ramas. ¿Qué explicación usa el curso?', opts:['Cada persona trabaja en una hoja aparte para que el documento principal quede intacto, y luego las hojas se combinan —una fusión— y los errores se corrigen sin tocar el proyecto entero','Las ramas guardan versiones antiguas del proyecto como copia de seguridad','Las ramas permiten que dos personas compartan una cuenta de GitHub','Las ramas son obligatorias antes de poder subir nada a GitHub'], c:0, fb:'La analogía de los apuntes compartidos de la clase, con la del rodaje de cine como alternativa: la rama principal es el guion final, una rama de funcionalidad es una escena que se prueba, y la fusión es el montaje.'},
      {q:'¿Cuál es el criterio concreto de éxito de la práctica de M8L2?', opts:['Cada persona envía una captura de su terminal con un git merge feature/add-greeting correcto','Cada persona crea una rama con su propio nombre','El tutor fusiona las ramas de todo el alumnado','Cada persona explica la fusión con sus propias palabras'], c:0, fb:'El plan pide la captura de terminal con el resultado de la fusión, y dice que te asegures de que todo el mundo completa la tarea.'},
      {q:'¿Cuál de estos es uno de los cinco principios de una revisión de código eficaz?', opts:['Céntrate en el problema, no en la persona — habla del código, no de quien lo escribió','Señala todos los problemas, por pequeños que sean, antes de elogiar nada','Que el tutor revise todo el código para que la retroalimentación sea coherente','Revisar solo código que ya se ejecute sin errores'], c:0, fb:'Los cinco principios son: ser respetuoso, centrarse en el problema y no en la persona, ser concreto, equilibrar crítica y elogio, y dar recomendaciones claras.'},
      {q:'Dos de los fallos plantados en el ejercicio de revisión son una variable mal escrita y una conversión que falta. ¿Cuál es la segunda?', opts:['input() devuelve una cadena, así que nunca se convierte con int() y no se puede comparar con el número secreto','random.randint se llama con el rango equivocado','El bucle while no tiene condición de salida','A los print les faltan los paréntesis'], c:0, fb:'user_guess sigue siendo una cadena, lo que hace imposible la comparación con secret: el mismo fallo que el alumnado se encuentra de forma natural a lo largo del curso.'},
      {q:'No todo el alumnado tiene un proyecto listo para la revisión entre compañeros. ¿Qué haces?', opts:['Dejar que varias personas revisen el mismo proyecto, o recurrir al código de ejemplo facilitado — está explícitamente permitido','Cancelar la etapa de revisión','Hacer que revisen su propio código','Aplazar la clase'], c:0, fb:'El plan lo dice directamente: no pasa nada, varias personas pueden revisar el mismo proyecto, y hay código de ejemplo para revisar si nadie entrega uno.'},
      {q:'¿Qué debes hacer ANTES de que empiece la clase M8L4?', opts:['Instalar la extensión Live Share, crear la carpeta del proyecto con main.py y estar listo para compartir — la etapa 0 es trabajo previo a la clase','Enviar el código roto al alumnado para que lo lea','Dividir la clase en equipos','Preparar el enlace del test'], c:0, fb:'La etapa 0 está marcada explícitamente como preparación tuya antes de la clase. Hacerla en frío delante del grupo te cuesta la clase.'},
      {q:'¿Quién gana el juego de “La app de tus sueños” al final de M8L4?', opts:['Nadie — el plan afirma que no hay ganadores; el trabajo en equipo, el refuerzo y disfrutar son los objetivos','El equipo con la idea más viable','El equipo que termine antes de planificar','El equipo cuya presentación guste más'], c:0, fb:'“En esta tarea no hay ganadores.” Los resultados concretos son secundarios frente a trabajar en equipo, reforzar el material del módulo y disfrutar del juego.'}
    ]
  },
  {
    id:13, emoji:'🗣️', color:'#8B5CF6',
    title:'M9 — Síntesis de Voz, APIs y Código Limpio',
    desc:'Módulo 9 del curso: síntesis de voz con pyttsx3, un bot del tiempo que habla, construido sobre una API sin clave, un bot de datos curiosos hecho con autonomía, y código limpio con refactorización y flake8.',
    obj:'Enseñar al alumnado a hacer que sus programas hablen y a que su código sea legible. Debes saber distinguir las tres tecnologías de voz, configurar pyttsx3, programar en directo un bot en tres etapas comprobables, dirigir una construcción autónoma con libertad real y liderar una sesión de refactorización que incluya un linter.',
    prep:'~4 horas. Genuinamente divertido; aun así, constrúyelo.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 9 del curso, debes haber hecho personalmente:',
      items:[
        'Instaló <code>pyttsx3</code> e hizo hablar a su máquina, ajustando velocidad, volumen y voz',
        'Confirmó qué índices de voz existen realmente en su sistema operativo',
        'Llamó a <code>wttr.in</code> y recibió una previsión con formato',
        'Construyó el bot del tiempo que habla en las tres etapas que usa la clase',
        'Confirmó que la voz sale de la máquina que ejecuta el bot y no de Discord',
        'Construyó por su cuenta un segundo bot que habla a partir de otra API, para cronometrarse',
        'Refactorizó él mismo los ejemplos desordenados de impuestos y de puntos de casa antes de leer las soluciones',
        'Instaló <code>flake8</code>, lo ejecutó sobre su propio código y arregló lo que señaló',
        'Encontró en su código un problema que flake8 no podía detectar'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Cuatro clases: <strong>L1</strong> síntesis de voz y un programa de texto a voz con <strong>pyttsx3</strong>; <strong>L2</strong> un bot de Discord que consulta el tiempo en una API y lo lee en voz alta; <strong>L3</strong> una construcción autónoma —un bot que dice datos curiosos al azar— más el futuro de la tecnología de voz; <strong>L4</strong> código limpio, refactorización y <strong>flake8</strong>.',
          why:'Dos recompensas muy distintas. La voz hace que sus proyectos parezcan acabados y genuinamente dignos de un portafolio, y el código limpio es la diferencia entre un proyecto que otra persona puede retomar y uno que no puede nadie. La L4 es además la clase más útil profesionalmente de todo el curso.',
          learn:'El alumnado distingue control por voz, reconocimiento y síntesis; instala y configura una librería de síntesis; construye un bot del tiempo que habla sobre una API sin clave; construye por su cuenta un segundo bot parlante; y refactoriza código desordenado contra criterios de código limpio, comprobándolo con un linter.',
          confident:'Las tres tecnologías de voz y sus usos; las tres etapas del funcionamiento de la síntesis; <code>rate</code>, <code>volume</code>, <code>voice</code>, <code>say</code> y <code>runAndWait</code> de <code>pyttsx3</code>, y que funciona <strong>sin conexión</strong>; que <code>wttr.in</code> no necesita clave de API; y la lista de comprobación de código limpio más <code>flake8</code>.'
        }
      ]},
      {t:'🔊 L1 — Síntesis de voz', cards:[
        {type:'qa', h:'Las tres tecnologías, diferenciadas', items:[
          {k:'Control por voz', v:'Usar la voz para manejar dispositivos o aplicaciones. Luces y termostatos de casa inteligente, “llama a mamá”, poner música o el GPS en el coche.'},
          {k:'Reconocimiento de voz', v:'Convertir el habla en texto o en órdenes. Dictado de voz a texto, apps de traducción, subtítulos en directo en videollamadas.'},
          {k:'Síntesis de voz', v:'Convertir texto en habla para que el ordenador “hable”. Navegación (“en 300 metros, gira a la izquierda”), lectores de libros digitales que leen en voz alta, notificaciones habladas.'}
        ]},
        {type:'text', h:'Las tres juntas', b:'Los mejores ejemplos usan las tres, y el alumnado ya los tiene. Un <strong>asistente de voz</strong>: el reconocimiento te entiende, la síntesis responde, el control por voz ejecuta la orden. Un <strong>navegador de coche</strong>: dictas la dirección, te dice la ruta en voz alta, la cambias por voz. <strong>Software de apoyo</strong>: entiende a la persona, le lee en voz alta un texto que no puede leer y se puede manejar con la voz.'},
        {type:'text', h:'Cómo funciona la síntesis en realidad — tres etapas', b:'<strong>1. Análisis del texto:</strong> el ordenador averigua cómo debe leerse el texto: un punto significa una pausa, un signo de interrogación cambia la entonación. <strong>2. Conversión de texto a sonido:</strong> las palabras se convierten en sonidos, usando una base con todos los sonidos del idioma. <strong>3. Generación del habla:</strong> los sonidos se combinan en palabras y frases, buscando algo fluido y natural.'},
        {type:'code', lbl:'pyttsx3 — en esencia, la librería entera', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

engine.<span class="cf">setProperty</span>(<span class="cs">'rate'</span>, <span class="cn">150</span>)      <span class="cc"># velocidad del habla</span>
engine.<span class="cf">setProperty</span>(<span class="cs">'volume'</span>, <span class="cn">0.9</span>)    <span class="cc"># volumen</span>

voices = engine.<span class="cf">getProperty</span>(<span class="cs">'voices'</span>)
engine.<span class="cf">setProperty</span>(<span class="cs">'voice'</span>, voices[<span class="cn">0</span>].id)   <span class="cc"># la elección de voz depende del sistema</span>

engine.<span class="cf">say</span>(<span class="cs">"Hola"</span>)
engine.<span class="cf">runAndWait</span>()                     <span class="cc"># ejecuta de verdad la síntesis</span>`},
        {type:'text', h:'La etapa de trabajo autónomo', b:'Es una etapa genuinamente autónoma de 40 minutos: 25 minutos para estudiar la documentación y construir un programa que vocaliza texto y experimentar con los ajustes, y luego 15 minutos de presentación. Tu papel es responder a dudas organizativas y técnicas, nada más. Si alguien se atasca, que comparta pantalla y ayúdale individualmente. <strong>La prioridad es que todo el alumnado acabe con un programa de voz que funcione</strong>, y elogia todas las presentaciones.'},
        {type:'tip', txt:'Hazles al final una pregunta genuinamente buena: ¿cómo cambiaría nuestra vida sin síntesis de voz? El alumnado tiende a verla como una comodidad hasta que piensa en alguien que no puede leer la pantalla, y entonces la tecnología deja de ser un juguete.'}
      ]},
      {t:'🌤️ L2 — El bot del tiempo que habla', cards:[
        {type:'text', h:'Por qué esta clase es fácil de dar bien', b:'La API no necesita <strong>cuenta ni clave</strong>. <code>wttr.in</code> devuelve el tiempo con una simple petición HTTP, lo que significa que no hay etapa de registro, no hay clave que se pueda filtrar y nadie se queda bloqueado en un formulario. Elige esa batalla a propósito: la clase va de combinar tres cosas que ya conocen, no de autenticación de APIs.'},
        {type:'hi', h:'Prográmalo en directo en tres etapas comprobables', b:'El plan divide la construcción en tres y te pide que confirmes que todo el mundo va bien después de <em>cada</em> una. <strong>Etapa 1:</strong> un bot básico con un comando <code>!start</code> que responde. <strong>Etapa 2:</strong> añadir la llamada a la API para que <code>!weather Madrid</code> devuelva la previsión como texto. <strong>Etapa 3:</strong> añadir la síntesis para que el bot también la lea en voz alta. Antes de escribir nada de código, dedica un par de minutos a comprobar que todo el mundo tiene su token del bot a mano.'},
        {type:'code', lbl:'etapa 2 — la función del tiempo', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:
    <span class="cc"># %C es la descripción, %t la temperatura</span>
    base_url = <span class="cs">f"https://wttr.in/{city}?format=%C+%t"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        <span class="ck">return</span> response.text.<span class="cf">strip</span>()
    <span class="ck">return</span> <span class="cs">"No se han podido obtener los datos del tiempo. Inténtalo más tarde."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Tiempo en {city}: {weather_info}"</span>)`},
        {type:'code', lbl:'etapa 3 — una función lo convierte en un bot parlante', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

<span class="ck">def</span> <span class="cf">speak</span>(text: <span class="ct2">str</span>):
    <span class="cs">"""Vocaliza el texto indicado usando pyttsx3."""</span>
    engine.<span class="cf">say</span>(text)
    engine.<span class="cf">runAndWait</span>()

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Tiempo en {city}: {weather_info}"</span>)
    <span class="cf">speak</span>(weather_info)   <span class="cc"># habla en la máquina que ejecuta el bot</span>

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'Un punto conceptual con el que el alumnado va a tropezar: la voz sale del <strong>ordenador que ejecuta el bot</strong>, no de Discord. Su bot no le habla al servidor entero: le habla a esa persona. Dilo antes de que lo prueben, o te harán la misma pregunta desconcertada cinco veces. Además es una forma natural de introducir la idea de que el código se ejecuta en algún sitio concreto.'},
        {type:'text', h:'Diez bots que merece la pena tener en el bolsillo', b:'La clase enumera ejemplos que el alumnado puede adaptar para los deberes y para el proyecto de graduación: tiempo, traductor, asistente de estudio, presentador de noticias, meditación, ejercicio, ayudante de videojuegos, casa inteligente, reservas y guía turístico. Lee algunos en voz alta durante la teoría: convierte “añade voz a un bot” de ejercicio en un menú de cosas que quizá quieran de verdad.'},
        {type:'tip', txt:'Envía el código final comentado al alumnado <strong>después</strong> de la clase, ya que los deberes son mejorar el bot. La versión completa de la tercera etapa del plan tiene cada línea explicada: úsala como referencia propia mientras programas en directo, y ten en cuenta que las respuestas del test de M9L2 funcionan como un repaso compacto de la API de pyttsx3.'}
      ]},
      {t:'🎲 L3 — La construcción autónoma y el futuro de la voz', cards:[
        {type:'text', h:'Autonomía real, con red de seguridad', b:'La estructura: 5 minutos explicando y creando un buen ambiente, <strong>20 minutos construyendo un bot que consulta datos curiosos aleatorios en una API y los dice en voz alta</strong>, y luego 15 minutos en los que una persona comparte pantalla y explica su código línea a línea. Vale cualquier fuente. Ayuda con problemas técnicos y organizativos pero <strong>deja que lo implementen por su cuenta</strong>: es un ensayo de la hackathon que empieza en el módulo siguiente.'},
        {type:'code', lbl:'el patrón al que deberían llegar solos', code:`<span class="ck">def</span> <span class="cf">get_fact</span>() -&gt; <span class="ct2">str</span>:
    <span class="cs">"""Obtiene un dato curioso al azar de la API."""</span>
    base_url = <span class="cs">"https://uselessfacts.jsph.pl/random.json?language=en"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        data = response.<span class="cf">json</span>()
        <span class="ck">return</span> data.<span class="cf">get</span>(<span class="cs">"text"</span>, <span class="cs">"No se ha podido obtener el dato."</span>)
    <span class="ck">return</span> <span class="cs">"No se han podido obtener los datos. Inténtalo más tarde."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">fact</span>(ctx):
    random_fact = <span class="cf">get_fact</span>()
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Aquí va un dato curioso: {random_fact}"</span>)
    <span class="cf">speak</span>(random_fact)`},
        {type:'hi', h:'La explicación línea a línea es la evaluación', b:'Quince minutos de alguien narrando su propio código es una comprobación de comprensión mejor que cualquier test. Elige a quien lo haya construido por su cuenta, no a quien haya terminado más rápido, y usa <code>data.get("text", "…")</code> como provocación: ¿por qué un valor por defecto en lugar de <code>data["text"]</code>? Porque la API podría no devolver ese campo, que es el mismo instinto defensivo que <code>try</code>/<code>except</code>.'},
        {type:'text', h:'Cierra con el debate, no con el código', b:'Quince minutos sobre integrar la síntesis de voz con la IA, con traducción a otros idiomas y hacia dónde va la tecnología de voz. Pide la opinión de todo el mundo. El objetivo declarado es que el alumnado entienda la importancia de este módulo <em>y</em> se dé cuenta de que ha explorado solo una pequeña parte de lo que puede hacer la tecnología de voz: déjales con la sensación de que hay más, no de que el tema se ha cerrado.'},
        {type:'tip', txt:'La clase abre con un test en Tally en el que el alumnado ve las respuestas correctas y los comentarios al terminar. Díselo de antemano: convierte el test de algo que sobrevivir en algo con lo que aprender. Y recuérdales al final que preparen un proyecto para la revisión de código de la clase siguiente.'}
      ]},
      {t:'🧼 L4 — Código limpio, refactorización y flake8', cards:[
        {type:'text', h:'Qué es el código limpio, y la definición que dar', b:'Código <strong>fácil de leer, entender y mantener</strong>, escrito buscando calidad y estructura y no velocidad o mínimo esfuerzo. Dedica diez minutos a debatir las preguntas de la diapositiva antes de tocar código: quien acaba de pasar un módulo revisando el trabajo de sus compañeros tiene opiniones que merece la pena escuchar.'},
        {type:'qa', h:'Por qué importa — las razones a las que debe llegar el alumnado', items:[
          {k:'Mantenimiento', v:'El código limpio se entiende aunque no lo hayas escrito tú, algo vital cuando un proyecto crece y trabaja más gente en él.'},
          {k:'Menos errores', v:'El código bien estructurado esconde menos fallos, así que se va menos tiempo en depurar.'},
          {k:'Pruebas más fáciles', v:'El código dividido en partes pequeñas es fácil de cubrir con pruebas.'},
          {k:'Flexibilidad', v:'El código claro es más fácil de ampliar cuando cambian los requisitos.'},
          {k:'Productividad del equipo', v:'Todo el mundo puede entender la lógica, sin importar quién la escribió.'},
          {k:'Refactorización más fácil', v:'Mejorar el código duele mucho menos cuando la estructura ya era lógica.'},
          {k:'Incorporación', v:'Quien llega nuevo se integra antes en un proyecto limpio.'}
        ]},
        {type:'text', h:'La práctica — encuentra los problemas y luego automatiza la comprobación', b:'Enseña el código desordenado y da al alumnado <strong>cinco minutos para encontrar problemas por su cuenta</strong>, y luego cinco minutos por turnos compartiendo hallazgos y arreglos. Solo entonces presenta <code>flake8</code> —diez minutos instalándolo y ejecutándolo— y cinco minutos arreglando lo que señale. Ese orden importa: tienen que ejercer su propio criterio antes de que lo haga la herramienta, o aprenderán a delegar el pensamiento.'},
        {type:'twocol', left:{h:'Los problemas del ejemplo', items:['<code>taxrate</code> es una constante pero no está en <code>MAYÚSCULAS</code>','<code>Tax</code>: nombre de función que empieza por mayúscula','Funciones enteras escritas en una sola línea','Sin espacios entre parámetros ni alrededor del <code>+</code>','La nomenclatura ignora el <code>snake_case</code>','Sin anotaciones de tipo','Sin docstrings','Cálculos de impuestos repetidos en lugar de extraídos','Sin validación de la entrada','Cálculos y salida por consola mezclados']}, right:{h:'Qué hace la refactorización', items:['<code>TAX_RATE = 0.2</code> como constante con nombre','<code>calculate_tax()</code> en <code>snake_case</code>','Una instrucción por línea, con sangría correcta','Espaciado según PEP 8 en todo el código','Nomenclatura coherente en <code>snake_case</code>','Anotaciones <code>(price: float) -&gt; float</code>','Un docstring en cada función','La lógica repetida extraída a funciones','Los valores validados antes de usarse','El cálculo separado de la impresión']}},
        {type:'code', lbl:'la versión refactorizada', code:`<span class="cc"># Define el tipo impositivo como constante con nombre</span>
TAX_RATE = <span class="cn">0.2</span>

<span class="ck">def</span> <span class="cf">calculate_tax</span>(price: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Calcula el impuesto de una cantidad dada."""</span>
    <span class="ck">return</span> price * TAX_RATE

<span class="ck">def</span> <span class="cf">calculate_total_price</span>(*prices: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Suma los precios indicados."""</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

total_price = <span class="cf">calculate_total_price</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>, <span class="cn">400</span>)
tax         = <span class="cf">calculate_tax</span>(total_price)
final_price = total_price + tax

<span class="cf">print</span>(<span class="cs">"Precio final:"</span>, final_price)`},
        {type:'good', txt:'Señala qué puede y qué no puede hacer un linter. <code>flake8</code> detecta espaciado, estilo de nombres y código sin usar: problemas reales, pero superficiales. Nunca te dirá que el mismo cálculo aparece tres veces, que una función hace dos trabajos sin relación o que un nombre es técnicamente válido pero no significa nada. Ese criterio es suyo, y decirlo es lo que impide que “el linter está contento” se convierta en sinónimo de “el código está bien”.'},
        {type:'text', h:'La refactorización autónoma', b:'Veinte minutos con el segundo ejercicio, trabajando por su cuenta: puedes ayudar con cuestiones técnicas, pero deja que piensen ellos. Después explican qué han arreglado. Las mejoras que buscar: constantes para los valores de puntos, argumentos con nombre para ganar flexibilidad, docstrings, una única función de salida reutilizable en lugar de <code>print</code> repetidos, y mejor estructura general.'},
        {type:'tip', txt:'Esta es la clase para conectar hacia atrás con M6L4, donde se les pidió comentar y estructurar sus cuadernos, y hacia delante con el proyecto de graduación, que un compañero tendrá que leer y probar. El código limpio deja de ser una virtud abstracta en el momento en que otra persona tiene que ejecutar tu proyecto.'}
      ]}
    ],
    quiz:[
      {q:'¿Cuál es la diferencia entre reconocimiento de voz y síntesis de voz?', opts:['El reconocimiento convierte el habla en texto u órdenes; la síntesis convierte texto en habla para que el ordenador “hable”','El reconocimiento funciona sin conexión y la síntesis en línea','Son lo mismo descrito desde la perspectiva de quien usa y de quien desarrolla','El reconocimiento trabaja con palabras y la síntesis con frases enteras'], c:0, fb:'Las tres tecnologías son control por voz (manejar con la voz), reconocimiento (voz → texto) y síntesis (texto → voz). Un asistente de voz usa las tres.'},
      {q:'¿Cuáles son las tres etapas del funcionamiento de la síntesis de voz?', opts:['Análisis del texto para pausas y entonación, conversión de palabras en sonidos a partir de una base de sonidos, y luego combinación de los sonidos en habla fluida','Grabación, compresión, reproducción','Tokenización, lematización, generación','Validación de la entrada, traducción, salida'], c:0, fb:'M9L1 lo divide en análisis del texto, conversión de texto a sonido usando una base con los sonidos del idioma, y generación del habla buscando una voz natural.'},
      {q:'¿Por qué se describe pyttsx3 como una solución sin conexión?', opts:['Genera la voz localmente en el dispositivo, sin necesitar conexión a internet','Guarda en caché los archivos de audio tras la primera ejecución','Solo funciona con archivos de texto guardados en local','Usa el paquete de voces descargado del sistema una vez por sesión'], c:0, fb:'pyttsx3 genera la voz en el propio dispositivo: es una de las respuestas del test de M9L2 y una ventaja práctica real frente a la síntesis por API.'},
      {q:'¿Por qué el curso usa wttr.in para el bot del tiempo?', opts:['Devuelve el tiempo con una simple petición HTTP, sin cuenta ni clave de API, así que nadie se queda bloqueado en un registro y no hay clave que filtrar','Es el servicio meteorológico más preciso que existe','Es el único servicio que devuelve texto plano','Ofrece también síntesis de voz además del tiempo'], c:0, fb:'Sin cuenta y sin clave de API, la clase sigue centrada en combinar bots, APIs y síntesis en lugar de en la autenticación.'},
      {q:'Un alumno ejecuta el bot del tiempo que habla y pregunta por qué nadie más en el servidor de Discord lo oye. ¿Cuál es la respuesta?', opts:['La voz se genera en el ordenador que ejecuta el bot, no se envía por Discord — el bot le habla a quien lo está ejecutando','No están activados los permisos de voz del bot','Tiene que entrar antes en un canal de voz','pyttsx3 necesita conexión a internet para emitir'], c:0, fb:'Es un punto genuinamente confuso que conviene anticipar, y una forma natural de introducir la idea de que el código se ejecuta en algún sitio concreto.'},
      {q:'¿Cómo se mantiene manejable la construcción de M9L2 en una clase de live coding?', opts:['Se divide en tres etapas —bot básico, luego la llamada a la API, luego la síntesis— con una comprobación de que todo el mundo va bien tras cada una','El tutor lo escribe mientras el alumnado mira y copia al final','Cada persona construye una etapa y luego se combinan','Se entrega el código terminado al principio y se explica'], c:0, fb:'Tres etapas con un punto de control tras cada una, más un par de minutos al inicio confirmando que todo el mundo tiene listo su token del bot.'},
      {q:'En M9L3, ¿qué evalúa realmente la etapa de presentación de 15 minutos?', opts:['La comprensión — una persona narra su propio código línea a línea, lo que revela mucho más que un test','Habilidades de presentación para la hackathon','Si el bot no tiene errores','La velocidad de implementación'], c:0, fb:'Alguien explicando su propio código línea a línea es la comprobación de verdad. Elige a quien lo haya construido por su cuenta, no a quien haya terminado más rápido.'},
      {q:'¿Por qué la clase de código limpio hace que el alumnado encuentre los problemas ANTES de presentar flake8?', opts:['Para que ejerza su propio criterio primero — si no, aprende a delegar el pensamiento en la herramienta','Porque flake8 tarda diez minutos en instalarse','Porque flake8 encuentra problemas distintos de los que encuentran las personas','Para que el tutor pueda calificar sus respuestas antes de que la herramienta corrija'], c:0, fb:'El orden es deliberado: cinco minutos buscando problemas, cinco compartiéndolos, y luego la herramienta. Primero el criterio, después la automatización.'},
      {q:'¿Qué problema del ejemplo desordenado NO detectaría flake8?', opts:['Que el mismo cálculo de impuestos se repite varias veces y debería extraerse a una función','Faltan espacios alrededor del operador +','Un nombre de función que empieza por mayúscula','Una constante que no está en mayúsculas'], c:0, fb:'Un linter detecta espaciado, estilo de nombres y código sin usar. La lógica duplicada, una función que hace dos trabajos o un nombre válido pero sin sentido requieren criterio humano.'},
      {q:'¿Cuál de estas es una mejora de código limpio que hace la refactorización de M9L4?', opts:['Añadir docstrings y anotaciones de tipo, y separar el cálculo de la salida por consola','Juntar funciones en líneas únicas para reducir el tamaño del archivo','Quitar todos los comentarios para que el código hable por sí solo','Renombrar las variables con una sola letra por brevedad'], c:0, fb:'La refactorización introduce una constante con nombre, nomenclatura en snake_case, una instrucción por línea, docstrings, anotaciones de tipo, funciones extraídas, validación y la separación entre cálculo y salida.'}
    ]
  },
  {
    id:14, emoji:'🎓', color:'#EF4444',
    title:'M10 — La Hackathon y el Proyecto de Graduación',
    desc:'Módulo 10 del curso: el encargo sobre el cambio climático, lluvia de ideas y elección del tipo de proyecto, habilidades de presentación, documentación de pruebas y listas de comprobación, pruebas entre compañeros y preparación de la graduación.',
    obj:'Dirigir el final. Debes saber montar una hackathon, dirigir una lluvia de ideas que acabe en una idea asumida, ayudar al alumnado a elegir un tipo de proyecto acorde a sus habilidades, enseñar listas de comprobación de presentación y de pruebas, dirigir una ronda de pruebas entre compañeros con retroalimentación constructiva y dejar a todo el mundo listo para graduarse con algo terminado.',
    prep:'~2 o 3 horas, más el tiempo continuo de acompañamiento en cuanto empiecen los proyectos.',
    practical:{
      intro:'Antes de dar cualquier clase del Módulo 10 del curso, debes haber hecho personalmente:',
      items:[
        'Dirigió una lluvia de ideas hasta una decisión asumida — aunque fuera solo, en papel, para notar la forma que tiene',
        'Eligió un tipo de proyecto para una idea y escribió por qué encaja ese tipo',
        'Preparó una presentación de un minuto de un proyecto usando las ocho reglas, y la cronometró',
        'Escribió una lista de comprobación de pruebas usando los cinco pasos y probó con ella uno de sus propios proyectos',
        'Clonó un proyecto que no había escrito, montó su entorno y consiguió ejecutarlo',
        'Escribió una retroalimentación en tres partes —aspectos positivos, errores y recomendaciones— sobre el código de otra persona',
        'Releyó sus construcciones de los Módulos 5 a 13, porque el alumnado preguntará por cualquiera de ellas'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'Tres clases antes de la graduación: <strong>L1</strong> el encargo sobre el cambio climático, la lluvia de ideas, la elección del tipo de proyecto y la presentación de qué viene después; <strong>L2</strong> habilidades de presentación, respuestas a las preguntas que preparó el alumnado, construcción de la funcionalidad principal y creación de una lista de comprobación de pruebas; <strong>L3</strong> arreglar los problemas principales, pruebas entre compañeros contra la lista, la Tarjeta de Creatividad y la preparación de la graduación.',
          why:'Todo lo del curso existe para hacer esto posible. Es también donde cambia el perfil de riesgo: el peligro ya no es que el alumnado no sepa programar, sino que elija algo que no pueda terminar.',
          learn:'El alumnado investiga un problema real, genera una idea y se compromete con ella, elige qué tipo de proyecto encaja, crea un repositorio público, presenta en un minuto, construye la funcionalidad central, escribe una lista de comprobación de pruebas, prueba con ella el proyecto de un compañero, da y recibe retroalimentación y prepara una presentación.',
          confident:'Dirigir una lluvia de ideas hasta una decisión asumida; ayudar a casar idea y tipo de proyecto; las ocho reglas de presentación; qué es la documentación de pruebas y los cinco pasos de una lista de comprobación; y mantener el alcance lo bastante pequeño como para terminar.'
        }
      ]},
      {t:'🌍 L1 — El encargo, la lluvia de ideas y la decisión', cards:[
        {type:'text', h:'El problema: el cambio climático, investigado y no expuesto', b:'Da al alumnado cinco minutos para investigar por su cuenta artículos de la ONU y encontrar respuestas a cuatro preguntas: <strong>qué es el cambio climático</strong>, <strong>cómo de grave es y si nos afecta</strong>, <strong>qué lo provoca</strong> y <strong>cómo podemos frenarlo</strong>. Puedes repartir las responsabilidades —una persona por pregunta— y luego poner en común. Después explica qué es una hackathon y qué les espera en el módulo.'},
        {type:'text', h:'La lluvia de ideas, con una decisión real al final', b:'Primero, cada persona crea un <strong>repositorio público nuevo en GitHub</strong> para su proyecto. Después, cinco minutos en una pizarra compartida generando respuestas a una pregunta: ¿cómo podemos resolver el problema del cambio climático? Las reglas de siempre: <strong>sin valoraciones durante la generación</strong>, anotad incluso las ideas ridículas. Fíjate en el matiz del plan: generan <em>soluciones a problemas</em>, no ideas de proyecto; la tecnología viene después. Después evaluad: ¿qué ideas se podrían ajustar y mejorar? Por último, cada persona elige una y <strong>la escribe en el README de su repositorio</strong>.'},
        {type:'good', txt:'Hacer que se comprometan en el README y no en el chat es un detalle pequeño y excelente. Es público, es permanente, y hace que la clase siguiente empiece con todo el mundo teniendo una idea declarada y no una intención vaga. No dejes que esta etapa se te escape.'},
        {type:'text', h:'Elegir el tipo de proyecto', b:'Ahora la decisión tecnológica. Pregunta: el curso se está acabando, ¿qué tipos de proyecto hemos aprendido a construir? Recuérdales en qué clases están las respuestas si lo necesitan. Después haz que elijan el tipo que van a usar para hacer realidad su idea <strong>y expliquen por qué</strong>, anotándolo también en el README. Justificar la elección es el objetivo: casar una solución con las herramientas que realmente tienes es exactamente el criterio que introdujo M6L3.'},
        {type:'qa', h:'El menú que deberían ser capaces de recordar', items:[
          {k:'Un bot de Discord', v:'Comandos, archivos, APIs, opcionalmente con su propio modelo de visión.'},
          {k:'Una web en Flask', v:'Plantillas, formularios, base de datos, inicio de sesión, desplegada en una URL real.'},
          {k:'Un script o cuaderno de Colab', v:'Procesamiento de imágenes, scraping, PLN, detección.'},
          {k:'Un proyecto con voz', v:'Transcripción, traducción o síntesis añadidas a cualquiera de los anteriores.'}
        ]},
        {type:'warn', txt:'La etapa final de esta clase presenta los otros cursos de Kodland e incluye un test cuyos resultados van al equipo comercial, se registran por alumno y se comparten con las familias. Sé claro sobre qué es: hazlo con cordialidad y honestidad, no comentes respuestas concretas mientras responden y no fuerces la venta. Tu credibilidad con el grupo vale más que un contacto comercial.'},
        {type:'tip', txt:'Después de la clase, <strong>reúne todas las ideas en un sitio y mándalas al grupo</strong> —capturas o una lista de enlaces— para que el alumnado vea y comente los planes de los demás. Los deberes son preparar una plantilla de proyecto con las librerías instaladas <em>y</em> una lista escrita de dudas de implementación, que es lo que hace que funcione la clase siguiente.'}
      ]},
      {t:'🎤 L2 — Presentar, construir y la lista de comprobación', cards:[
        {type:'warn', txt:'Dos cosas que hacer <strong>antes</strong> de esta clase: reunir todas las preguntas que el alumnado escribió en los deberes en una única lista visible (un documento, una diapositiva, una pizarra) y decidir los grupos de las salas de trabajo con antelación, agrupando por preguntas parecidas o tipos de proyecto parecidos. Improvisar esto en clase desperdicia la etapa.'},
        {type:'qa', h:'Las categorías de la hackathon', items:[
          {k:'🎤', v:'La mejor presentación'},
          {k:'🧩', v:'La solución técnica más compleja'},
          {k:'✨', v:'El proyecto con mejor aspecto en Git'},
          {k:'🎯', v:'La solución más aplicable'}
        ]},
        {type:'text', h:'Di la advertencia que las acompaña', b:'Las categorías permiten al alumnado apuntar a un objetivo que encaje con sus puntos fuertes, pero diles lo que dice el plan a continuación: esto <strong>no</strong> significa especializarse en una sola dirección. Un proyecto verdaderamente bueno es bueno en todos los aspectos. Las categorías son motivación, no permiso para descuidar tres cuartas partes del trabajo.'},
        {type:'text', h:'Las ocho reglas de presentación', b:'Haz que lean las reglas y digan cuáles ven por primera vez, y luego que las apliquen de inmediato: <strong>un minuto</strong> cada persona para presentar su idea y los resultados de los deberes, con cronómetro en pantalla. Si crees que les va a costar, <strong>empieza tú</strong>: haz una presentación de un minuto de un proyecto tuyo y destaca sus puntos principales.'},
        {type:'twocol', left:{h:'Reglas 1 a 4', items:['<strong>Prepárate</strong>: ten tus materiales y datos abiertos y listos','<strong>Define el objetivo</strong>: ten claro qué mensaje y qué resultado quieres','<strong>Estructúralo</strong>: introducción, cuerpo principal, conclusión','<strong>Usa lenguaje sencillo</strong>: y explica cualquier término que tengas que usar']}, right:{h:'Reglas 5 a 8', items:['<strong>Practica</strong>: ante el espejo o ante alguien, para el estilo y la confianza','<strong>Implica</strong>: habla con el público, hazle preguntas','<strong>Controla el tiempo</strong>: ni corras ni te alargues','<strong>Prepárate para las preguntas</strong>: anticípalas; demuestra competencia']}},
        {type:'text', h:'Las etapas de desarrollo', b:'El alumnado pasa a salas de trabajo agrupado por pregunta o por tipo de proyecto y empieza a construir la lógica, intercambiando ideas y buscando soluciones juntos. <strong>Tú te mueves entre salas respondiendo a las preguntas de la lista</strong>, marcando cada una como resuelta para poder enseñar la lista completada después. Luego todo el mundo vuelve a la sala principal para continuar, animando a las preguntas generales para que se ayuden entre ellos.'},
        {type:'text', h:'Documentación de pruebas y la lista de comprobación', b:'La <strong>documentación de pruebas</strong> es el conjunto de documentos e instrucciones que se usan para planificar y llevar a cabo las pruebas: cómo verificar que el software funciona y cómo encontrar y eliminar errores. Existe para garantizar la calidad, documentar los problemas encontrados, simplificar la comunicación sobre qué hay que probar y poder volver a ejecutarse tras cambios futuros. Después construid <strong>una lista de comprobación universal para todo el grupo</strong>, usando como referencia las rúbricas de evaluación de clases anteriores, y envía la versión final al alumnado.'},
        {type:'qa', h:'Los cinco pasos para construir una lista de comprobación', items:[
          {k:'1. Identificar los objetivos', v:'¿Qué quieres probar realmente: funcionalidad, interfaz, rendimiento, seguridad?'},
          {k:'2. Dividir en categorías', v:'Secciones como “Funcionalidad”, “Interfaz”, “Seguridad”.'},
          {k:'3. Describir los resultados esperados', v:'Para cada categoría, ¿qué deberías ver? Describe el comportamiento esperado.'},
          {k:'4. Añadir tareas por categoría', v:'Elementos concretos; por ejemplo, en Funcionalidad, “verificar que el registro de usuarios funciona”.'},
          {k:'5. Establecer prioridades', v:'Qué tareas importan más y deben probarse primero.'}
        ]}
      ]},
      {t:'🏁 L3 — Pruebas entre compañeros, retroalimentación y preparación de la graduación', cards:[
        {type:'warn', txt:'<strong>Comprueba el estado del proyecto de cada alumno antes de esta clase.</strong> El orden de las etapas depende de ello: si los proyectos funcionan de verdad, haz primero la etapa de pruebas entre compañeros; si no, ayúdales a terminarlos y probad después. Prepara también el orden de las presentaciones con antelación para que la etapa fluya.'},
        {type:'text', h:'La apertura honesta', b:'Cada persona dedica <strong>un minuto a describir el problema principal de su proyecto</strong>: no sus funcionalidades, su problema. Cronómetro en marcha, orden acordado de antemano. Eso crea un clima en el que estar atascado es normal y se puede decir, que es exactamente lo que necesitas en la última semana antes de la graduación.'},
        {type:'text', h:'Pruebas entre compañeros, bien estructuradas', b:'Asigna a cada persona el proyecto de un compañero. Lo <strong>clonan</strong>, se aseguran de tener acceso a todo lo que necesitan, montan el entorno a partir del Pipfile y recorren la <strong>lista de comprobación compartida</strong>, anotando resultados. Vuelve a enviar la lista por si alguien la ha perdido. Después preparan la retroalimentación en tres partes: los <strong>aspectos positivos</strong>, los <strong>errores encontrados</strong> y las <strong>recomendaciones de corrección</strong>. La retroalimentación se intercambia en el chat general para que puedas moderarla.'},
        {type:'good', txt:'Di el planteamiento en voz alta antes de que empiecen: <strong>esto no forma parte de ninguna evaluación, es ayudarse mutuamente.</strong> La retroalimentación debe ser constructiva y correcta, sin comentarios negativos ni ofensivos. Si a alguien le cuesta formular algo, ayúdale a encontrar las palabras. Equivocarse en esto la última semana es peor que no hacerlo.'},
        {type:'hi', h:'Lo más importante que dirás en todo el módulo', b:'Después de la retroalimentación, habrá quien quiera reconstruirlo todo antes de la graduación. Córtalo de raíz, con las palabras del propio plan: <strong>completa el proyecto de graduación sin complicarlo de más.</strong> Céntrate en lo que se pueda terminar en el tiempo disponible y guarda las mejoras para después. Un proyecto sencillo y terminado, presentado con confianza, gana a uno ambicioso a medio hacer todas las veces, y este es el momento en el que más falta les hace oírlo.'},
        {type:'text', h:'La Tarjeta de Creatividad', b:'Un formulario que cada persona rellena durante las clases, con la <strong>descripción del proyecto final</strong>, su <strong>originalidad</strong>, los <strong>obstáculos</strong> encontrados y su <strong>progreso</strong>. Asegúrate de que lo completa todo el mundo: les ayuda en la clase de presentación, y es como tú sigues dónde está realmente cada proyecto.'},
        {type:'tip', txt:'Los deberes son preparar la presentación: Google Slides o el README del proyecto. Señala también las instrucciones de preparación de la graduación: hay que descargar e instalar un fondo festivo, y las instrucciones dicen qué más hay que tener listo. Insiste en esto, porque quien llega sin preparar a la graduación recuerda eso, y no el proyecto que construyó.'}
      ]}
    ],
    quiz:[
      {q:'En la lluvia de ideas de M10L1, ¿qué está generando exactamente el alumnado?', opts:['Soluciones al problema del cambio climático — el tipo de proyecto y la tecnología se eligen después','Ideas de proyecto con la tecnología ya decidida','Una lista de librerías que quieren usar','Nombres para sus repositorios'], c:0, fb:'La nota es concreta: no hay que generar ideas de proyecto, sino soluciones a problemas. Casar una tecnología con la solución es la etapa siguiente.'},
      {q:'¿Dónde anota el alumnado la idea con la que se compromete?', opts:['En el README del nuevo repositorio público de GitHub que crea — público y permanente','En el chat de grupo de WhatsApp','En las notas del tutor','Solo en la pizarra compartida de la lluvia de ideas'], c:0, fb:'Tanto la idea elegida como, después, el tipo de proyecto van al README del repositorio, para que la clase siguiente empiece con un plan declarado por cada persona.'},
      {q:'¿Por qué el curso hace que el alumnado explique POR QUÉ ha elegido un tipo de proyecto concreto?', opts:['Porque casar una solución con las herramientas que realmente tienes es el criterio profesional que el curso viene construyendo desde M6L3','Porque el tutor lo necesita para calificar','Porque la plataforma exige una justificación escrita','Para decidir las categorías de la hackathon'], c:0, fb:'Elegir una herramienta acorde al problema y a tu propia capacidad es criterio de ingeniería real, presentado por primera vez al valorar si YOLO encajaba con la entrada.'},
      {q:'¿Qué advertencia acompaña a las cuatro categorías de la hackathon?', opts:['Permiten apuntar a los puntos fuertes de cada persona, pero un proyecto verdaderamente bueno es bueno en todos los aspectos — no es excusa para especializarse','Solo se puede optar a una categoría por persona','Las categorías las decide el voto del alumnado','Ganar una categoría sustituye a la presentación de graduación'], c:0, fb:'El plan lo dice justo después de enumerarlas: esto no significa que debas especializarte en una sola dirección.'},
      {q:'¿Qué debes preparar ANTES de dar M10L2?', opts:['Una única lista visible con todas las preguntas que el alumnado escribió en los deberes, más los grupos de las salas decididos de antemano','La lista de comprobación terminada para todo el grupo','Una demostración de cada tipo de proyecto','Las diapositivas de la graduación'], c:0, fb:'La nota te pide que organices las preguntas en una lista que puedas enseñar al grupo y que decidas los grupos con antelación, por preguntas o proyectos parecidos.'},
      {q:'¿Qué es la documentación de pruebas, tal como la define el curso?', opts:['El conjunto de documentos e instrucciones que se usan para planificar y llevar a cabo las pruebas: cómo verificar que el software funciona y cómo encontrar y eliminar errores','Un registro de todos los fallos que ha tenido un proyecto','El README del proyecto','La rúbrica de evaluación del tutor'], c:0, fb:'Existe para garantizar la calidad, documentar los problemas encontrados, simplificar la comunicación sobre qué hay que probar y poder volver a ejecutarse tras los cambios.'},
      {q:'Un alumno ha leído la retroalimentación de su compañero y ahora quiere reconstruir todo su proyecto antes de la graduación. ¿Qué le dices?', opts:['Que lo complete sin complicarlo de más — que se centre en lo que se pueda terminar en el tiempo disponible y guarde las mejoras para después','Que lo reconstruya, ya que la retroalimentación señaló problemas reales','Que presente la versión actual y diga que está sin terminar','Que cambie por completo a un tipo de proyecto más sencillo'], c:0, fb:'Es el consejo explícito de los consejos de M10L3: terminar sin complicarlo de más, centrarse en lo que cabe en el tiempo y dejar las mejoras para después.'},
      {q:'¿Cómo hay que plantear la retroalimentación entre compañeros antes de que empiecen?', opts:['Como ayudarse mutuamente, y no como parte de ninguna evaluación — constructiva y correcta, sin comentarios negativos ni ofensivos','Como un ejercicio calificado, para que se lo tomen en serio','Como una competición para encontrar más fallos','Como anónima, para que puedan ser directos'], c:0, fb:'El plan es enfático: la retroalimentación debe ser constructiva y correcta, y es importante decir que esto no forma parte de la evaluación sino que es un medio para ayudarse.'},
      {q:'¿Qué es la Tarjeta de Creatividad y por qué importa?', opts:['Un formulario con la descripción del proyecto, su originalidad, los obstáculos y el progreso — ayuda al alumnado en la presentación y te muestra dónde está cada proyecto','Un certificado que se entrega en la graduación','Una tarjeta con sugerencias para quien no se le ocurre ninguna idea','El formulario de retroalimentación de las pruebas entre compañeros'], c:0, fb:'Asegúrate de que la completa todo el mundo: apoya al alumnado en la clase de presentación y te permite seguir el progreso real de cada proyecto.'},
      {q:'¿Cómo deberías llevar la etapa de M10L1 que presenta los otros cursos de Kodland?', opts:['Con cordialidad y honestidad, sin forzar la venta, y sin comentar respuestas concretas mientras el alumnado responde','Saltártela, ya que no es contenido técnico','Insistir en que deben continuar con otro curso','Dejar que la completen como deberes'], c:0, fb:'El plan te pide que no comentes cada pregunta, para que respondan sin influencia externa. Llevarlo con honestidad protege tu credibilidad con el grupo.'}
    ]
  },
  {
    id:15, emoji:'📋', color:'#6366F1',
    title:'El Oficio de Dar Clase',
    desc:'Las habilidades de impartición más profundas: aplicar bien los cinco métodos, diferenciación, responder a lo que no sabes, gestión del aula, calificar trabajo a medias, adaptarse a clases individuales de 50 minutos y las ocho técnicas de reflexión.',
    obj:'Dominar la impartición, no el contenido. El Módulo 3 te dio el esqueleto de una clase y los nombres de los métodos; este módulo te hace bueno en ellos. Al final deberías saber diferenciar sobre la marcha, manejar una pregunta que va más allá de tus conocimientos sin perder al grupo, calificar con justicia código que funciona a medias, reducir una clase de 90 minutos a 50 y cerrar todas las clases con una reflexión que consolide lo aprendido.',
    prep:'~3 horas. Mejor leerlo después de haber pasado por los módulos de contenido.',
    practical:{
      intro:'Antes del test, ensaya lo que es difícil hacer en frío:',
      items:[
        'Dijo en voz alta el guion del “no lo sé, vamos a averiguarlo” hasta que sonó natural y no como una disculpa',
        'Cogió un plan de clase de 90 minutos y escribió su versión individual de 50 minutos',
        'Calificó un fragmento de código que funciona a medias con los criterios del curso y justificó la nota',
        'Eligió tres técnicas de reflexión que puede dirigir sin ninguna preparación',
        'Escribió su propia lista de tareas adicionales para quien termina rápido, por módulo'
      ]
    },
    sections:[
      {t:'🧭 Panorama y objetivos', cards:[
        {type:'brief',
          overview:'El oficio de impartir que se apoya sobre el esqueleto de la clase: aplicar <em>bien</em> los cinco métodos, la diferenciación, <strong>responder a preguntas que van más allá de tus conocimientos</strong>, la gestión del aula, <strong>calificar trabajo parcial</strong>, adaptar una clase de 90 minutos al formato <strong>individual de 50 minutos</strong> y las ocho técnicas de reflexión.',
          why:'Conocer el contenido es necesario pero no suficiente. Alguien que domina Flask a la perfección y da mal la clase pierde al grupo; alguien que sabe manejar el aula se recupera de cualquier cosa, incluso de no saber una respuesta.',
          learn:'Nada nuevo para el alumnado: este módulo va sobre <em>ti</em>. Es la capa que determina si los otros quince módulos calan.',
          confident:'Dirigir correctamente LiveCoding y UMC; los movimientos de diferenciación en las dos direcciones; un guion para el “no lo sé”; cómo calificar código que funciona a medias; qué recortar en una clase individual; y tres técnicas de reflexión que puedas dirigir en frío.'
        },
        {type:'tip', txt:'El Módulo 3 cubrió el esqueleto de la clase y qué significan los cinco nombres de método. Este módulo lo da por sabido y va más a fondo. Si “EduScrum”, “LiveCoding” o “Usar–Modificar–Crear” siguen borrosos, vuelve antes al Módulo 3: el resto de esto calará mejor.'}
      ]},
      {t:'🙋 Cuando no sabes la respuesta', cards:[
        {type:'text', h:'Esto va a pasar, y antes de lo que crees', b:'Python Pro es un curso avanzado y parte de este alumnado es muy espabilado. Alguien preguntará qué es realmente un hash, o cómo decide la red neuronal, o por qué existe <code>Client</code> si <code>Bot</code> es mejor. Si llegas a este trabajo desde fuera del desarrollo, te preguntarán algo que no sabes responder en las primeras clases. Eso es <strong>normal y sobrevivible</strong>: lo que importa es haber decidido de antemano cómo lo vas a manejar.'},
        {type:'qa', h:'Los tres movimientos, y cuándo usar cada uno', items:[
          {k:'Buscarlo juntos — la opción por defecto', v:'“Buena pregunta, no estoy seguro. Vamos a averiguarlo, ¿dónde miraríamos?” Y luego hazlo de verdad, compartiendo tu pantalla. Es la opción más potente porque <em>es</em> la clase M1L4: nadie se sabe una librería de memoria, y encontrar la respuesta es la habilidad profesional. No estás tapando una laguna, estás demostrando justo lo que deberías enseñar.'},
          {k:'Aparcarla y volver', v:'Cuando estás a mitad de un sprint y vas justo: “Esa pregunta es muy buena y quiero darte una respuesta como es debido; te contesto esta noche en el chat del grupo.” <strong>Y luego hazlo de verdad.</strong> Una pregunta retomada genera más confianza que una respuesta instantánea; una olvidada cuesta más de lo que habría costado admitir que no lo sabías.'},
          {k:'Nombrar el límite con honestidad', v:'Cuando la pregunta va genuinamente más allá del curso: “Eso está más allá de donde llega este curso y, sinceramente, más allá de lo que conozco bien. La versión corta de la que sí estoy seguro es…”, y luego das lo que sí sabes. El alumnado respeta un límite claro mucho más que una respuesta vaga.'}
        ]},
        {type:'warn', txt:'El único movimiento que de verdad te cuesta el aula es <strong>adivinar con seguridad</strong>. El alumnado comprueba las respuestas: las pegará en un buscador durante la clase. Estar equivocado sonando seguro es lo que acaba con tu credibilidad; decir “no lo sé” nunca lo hace. Dilo en voz alta unas cuantas veces antes de tu primera clase, hasta que deje de sonar a confesión.'},
        {type:'good', txt:'Replantéalo: alguien que dice “no lo sé, vamos a averiguarlo” delante de adolescentes está modelando exactamente el comportamiento que el curso quiere de ellos. El juego de “todos contra uno” de M6L1 existe para ayudarles a superar el miedo a preguntar. No puedes enseñar a superar ese miedo fingiendo omnisciencia.'},
        {type:'tip', txt:'Haz también el trabajo aburrido de prevención: lee bien el plan y los materiales de la clase siguiente y anota los dos o tres puntos en los que te sientes flojo. La mayoría de las preguntas sin respuesta son predecibles a partir del contenido: los decoradores en M1L3, <code>async</code> en todas las clases de bots, el hashing en M4L2, cómo aprende de verdad el modelo en M5L4. El Módulo 2 de la formación cubre los tres primeros.'}
      ]},
      {t:'🧑‍🤝‍🧑 Gestión del aula con adolescentes en línea', cards:[
        {type:'qa', h:'Las situaciones con las que te vas a encontrar de verdad', items:[
          {k:'Alguien no enciende la cámara', v:'Los planes te piden que compruebes que cámaras y micrófonos funcionan, y eso va de participación, no de vigilancia. No lo conviertas en un enfrentamiento delante del grupo: pregunta una vez, en público y con ligereza; si sigue, pregunta en privado si pasa algo. Participar en el chat y en las tareas importa más que una cara visible.'},
          {k:'Una persona domina todo', v:'Usa las estructuras en lugar de tu autoridad: el juego de la “pelota”, en el que quien habla elige a la siguiente persona, la regla de que nadie responde dos veces seguidas, y pedir su opinión por su nombre a alguien más callado. Deja que el formato ponga el límite.'},
          {k:'Alguien molesta o está desconectado', v:'Dale un trabajo. En este curso es fácil: que dirija una instalación, comparta pantalla o explique su solución. Molestar suele ser señal de estar poco ocupado, y el curso está lleno de papeles legítimos que repartir.'},
          {k:'Una sala de trabajo no funciona', v:'Entra. Los planes ya prevén que te muevas entre salas. Si una pareja se ha atascado, repite el objetivo concreto y el tiempo que queda: las tareas vagas atascan a las parejas más rápido que la dificultad.'},
          {k:'Nadie responde a tu pregunta', v:'Casi siempre la pregunta era demasiado grande. Redúcela: no “¿cómo resolveríamos esto?”, sino “¿de qué tipo tiene que ser esta variable?”. Los planes modelan esto constantemente con preguntas estrechas y respondibles.'},
          {k:'Alguien está en silencio toda la clase', v:'Anótalo y actúa en la clase siguiente: el repaso de deberes es tu lectura de quién se está desenganchando. Pregúntale algo que sepas que puede responder, para que lo primero que diga sea un acierto.'}
        ]},
        {type:'good', txt:'El curso te da una cantidad inusual de buena voluntad con la que trabajar: el alumnado está construyendo cosas que ha elegido, para problemas que ha escogido, y publicándolas. Apóyate en eso cuando decaiga el enganche. “¿Para quién es esto?” y “¿qué haría que el tuyo fuera distinto?” reenganchan a un adolescente mucho mejor que “atención, por favor”.'},
        {type:'warn', txt:'Dos cosas que no hacer, ambas explícitas en los planes: no seas negativo con quien no ha hecho los deberes, y no señales a nadie por no tener equipo o por tener una máquina lenta. Las dos suelen ir de circunstancias en casa y no de esfuerzo.'}
      ]},
      {t:'🎓 Los cinco métodos, bien hechos', cards:[
        {type:'text', h:'1. Scrum y EduScrum', b:'Se usa a partir de M1L2 y se enseña explícitamente en el Módulo 8 del curso. La clase se divide en <strong>sprints</strong> con límites de tiempo estrictos, cada uno abriendo con un debate corto y cerrando con un balance. Las dos preguntas del balance son fijas: <strong>“¿logramos de verdad el resultado?”</strong> y <strong>“¿cómo nos acerca esto a resolver el problema principal?”</strong>. Las clases de EduScrum más completas añaden una retrospectiva con tres preguntas: qué habéis conseguido y si dio tiempo a todo; qué etapa fue la más difícil; cómo mejoraríais este sprint.'},
        {type:'text', h:'2. LiveCoding', b:'El tutor construye el código <strong>gradualmente, junto al alumnado</strong>, compartiendo pantalla, para que vean programar como una corriente de pequeñas decisiones y no como un objeto acabado. Habla mientras programas, haz preguntas para mantener el enganche, explica la lógica de cada movimiento, <strong>comete errores a propósito y pide que los encuentren</strong>, no corras, haz pausas para que te alcancen, usa las herramientas de dibujo de Zoom para visualizar la lógica, usa una fuente grande y clara, y escribe en bloques de código para que la estructura se vea.'},
        {type:'text', h:'3. Usar–Modificar–Crear', b:'Se usa en M1L3 y M6L1. El alumnado primero <strong>usa</strong> código que funciona —lo ejecuta, lo ve funcionar, experimenta libremente—, después lo <strong>modifica</strong> mientras tú explicas qué hace cada cambio, y solo entonces <strong>crea</strong> su propia versión. Haz los dos primeros pasos en orden y resiste la tentación de explicar pronto: cinco minutos de “cambia algo y vuelve a ejecutarlo” producen mejores preguntas que cualquier exposición.'},
        {type:'text', h:'4. Metacognición', b:'Se presenta en M2L1 como el “tren de la metacognición”: cinco paradas programadas a lo largo de la clase para enunciar los objetivos; autopreguntarse cómo ayudó el conocimiento previo; identificar las herramientas y estrategias usadas; evaluar si esas estrategias funcionaron; y reflexionar sobre si se trasladan fuera del curso. Lee el cuadernillo del tutor antes de dirigirlo. El movimiento más útil que te da: la frustración de alguien es <strong>información válida sobre la estrategia que eligió</strong>, no una prueba sobre su capacidad.'},
        {type:'text', h:'5. Gamificación', b:'No es decoración: es el mecanismo con el que se entrega una teoría que si no sería una charla. El repertorio del curso: equipos de concurso en el <strong>tres en raya</strong> (M5L4), <strong>“todos contra uno”</strong> con una persona experta (M6L1), el juego de la <strong>“pelota”</strong> en el que quien habla elige a quien sigue (M1L3), las búsquedas de código de dos minutos <strong>“encuéntralo si puedes”</strong> (M3L4), las <strong>competiciones de precisión</strong> (M5L4, M6L2) y el <strong>concurso de mejor meme</strong> (M3L4). Varios reparten además el tiempo de palabra automáticamente: la regla de que nadie responde dos veces seguidas hace más por la participación que preguntar directamente a quien está callado.'},
        {type:'tip', txt:'Cuando la nota de una clase nombra un método, te está diciendo que la clase no funcionará de otra manera. Una clase de UMC dada como charla, o una de EduScrum sin control de tiempos, produce una etapa que se alarga y un grupo desenganchado. Lee la nota del principio del plan antes que nada.'}
      ]},
      {t:'⚖️ Diferenciación', cards:[
        {type:'twocol', left:{h:'🚀 Para quien va por delante', items:['Usa las <strong>tareas adicionales</strong> ya previstas (⭐️ / “Adic.”): existen en casi todas las clases','Haz que <strong>comparta pantalla y dirija</strong> una instalación o una etapa de live coding','Pídele una <strong>miniclase magistral</strong> para sus compañeros','Apúntale a la <strong>documentación</strong> con una tarea más profunda dentro del tema de hoy','Dale la versión abierta “hazlo tuyo” del proyecto']}, right:{h:'🐢 Para quien va por detrás', items:['<strong>Reduce el alcance</strong>: una versión sencilla terminada gana a una ambiciosa sin acabar','Dale un <strong>punto de partida</strong>: el Basic Bot, la rama del repositorio, el Pipfile de la solución, el CSV compartido','Deja que el <strong>asistente técnico</strong> ayude mientras tú mantienes la clase en marcha','<strong>Emparéjale</strong> en una sala de trabajo, o acompáñale individualmente','Arregla <em>el único</em> problema que bloquea y consíguele una victoria visible']}},
        {type:'warn', txt:'Nunca dejes que una máquina rota tenga secuestrada a la clase. Los planes lo dicen en varios sitios: empieza con quienes están listos, lleva ayuda a quien está bloqueado y usa el plan B preparado. Un problema de instalación no vale veinte minutos del tiempo de nueve personas.'},
        {type:'good', txt:'El mejor movimiento de diferenciación del curso es convertir a alguien rápido en profesor. Profundiza su comprensión, te compra tiempo con quien está atascado y no cuesta nada. Elogia el <em>explicar</em>, no el terminar: eso es lo que lo convierte en una recompensa y no en una carga.'}
      ]},
      {t:'📊 Evaluación y la plataforma', cards:[
        {type:'text', h:'Cómo se evalúa el trabajo', b:'Las tareas se <strong>corrigen automáticamente</strong> en la plataforma o <strong>manualmente por ti</strong>. Las manuales vienen con criterios y puntuaciones: por ejemplo, funciones escritas y código funcionando valen 30 puntos, con la tarea adicional 35, código que no funciona 0; los proyectos de módulo valen hasta <strong>50 puntos</strong> y tienen una herramienta de evaluación propia; un README vale 20 sin estructura, 30 estructurado con emojis, +5 por una imagen o GIF, +10 por un archivo de licencia. Usa las herramientas donde existan y pon las notas en la plataforma.'},
        {type:'qa', h:'Los detalles operativos que pillan a quien empieza', items:[
          {k:'El botón Enviar', v:'El trabajo solo cuenta una vez enviado. Di “aseguraos de haber enviado la tarea de clase” al final de todas las clases, y verifícalo en el Backoffice.'},
          {k:'Enlaces en el chat', v:'Varias tareas calificadas se evalúan a partir de un enlace de GitHub publicado en el chat de la tarea. Sin enlace no hay evaluación: insiste durante la clase.'},
          {k:'Plazos', v:'Acuerda con el alumnado los plazos de los deberes y déjate tiempo suficiente para evaluar bien.'},
          {k:'Asistencia', v:'Regístrala mientras hablas con el alumnado, no como un pase de lista formal.'},
          {k:'El chat del grupo', v:'Los deberes se pueden comentar ahí entre clases; recuérdaselo para que no esperen una semana atascados.'}
        ]},
        {type:'text', h:'La etapa de carrera al final de módulo', b:'Los módulos 1, 2, 3 y 4 del curso terminan con una etapa corta que conecta el trabajo con una carrera: celebra haber terminado un tema que muy poca gente termina, muestra las habilidades desbloqueadas y conéctalas con caminos profesionales —la presencia de Python en grandes productos para el bloque de automatización, la ciencia de datos como “detective de la información” para el bloque de IA, y las ventajas de especializarse en IA para el bloque aplicado—. Pregunta qué saben antes de contárselo, y pregunta qué les gustaría hacer con estas habilidades.'},
        {type:'warn', txt:'Una etapa de M10L1 presenta los otros cursos de Kodland y recoge resultados de un test que van al equipo comercial y a las familias. Hazlo con cordialidad y honestidad, no comentes respuestas mientras responden y no fuerces la venta. Tu credibilidad con el grupo vale más que un contacto comercial.'}
      ]},
      {t:'💭 Las ocho técnicas de reflexión', cards:[
        {type:'text', h:'Ve alternándolas — esa es la instrucción', b:'Los planes de las clases más avanzadas aportan ocho técnicas y recomiendan usar <strong>una distinta cada clase</strong>. Mantenerlas en rotación es lo que impide que los diez minutos finales se conviertan en un ritual que el alumnado se limita a aguantar. Ten tres o cuatro que puedas dirigir sin preparación.'},
        {type:'qa', h:'Las ocho', items:[
          {k:'1. Completar la frase', v:'“Hoy he aprendido que…”, “Lo que más me ha gustado de la clase ha sido…”'},
          {k:'2. La pizarra de descubrimientos', v:'Abre una pizarra de Zoom y que cada persona escriba algo nuevo: un dato, un truco, un término, una idea que merezca recordar.'},
          {k:'3. En un meme', v:'Cada persona publica un meme o una imagen que describa su impresión de la clase.'},
          {k:'4. Preguntas relámpago', v:'Respuestas rápidas de una frase: lo más memorable, la tarea más interesante o difícil, algo aprovechable fuera de clase.'},
          {k:'5. ¿Te ha sorprendido algo?', v:'Por turnos, cada persona dice qué le ha sorprendido o asombrado.'},
          {k:'6. Una pequeña victoria', v:'Cada persona comparte un logro, aunque sea “he escrito código sin errores” o “he ayudado a un compañero”.'},
          {k:'7. Enseña a un amigo', v:'Veinte segundos cada persona explicando qué le enseñaría a alguien que faltó a la clase. Excelente para consolidar y para la confianza.'},
          {k:'8. Un consejo secreto', v:'Cada persona comparte un consejo para otras personas que aprenden: “comprueba tu código después de cada paso”, “no tengas miedo de probar código nuevo”.'}
        ]},
        {type:'good', txt:'“Enseña a un amigo” es la más diagnóstica de las ocho. Quien puede explicar la clase de hoy en veinte segundos la ha entendido; quien no puede, no la ha entendido, y lo descubres en los últimos cinco minutos de la clase y no en el test de la semana que viene.'},
        {type:'text', h:'Y cierra siempre igual', b:'Despídete como es debido, di que esperas a todo el mundo en la clase siguiente y recuerda que pueden comentar los deberes en el chat del grupo <strong>sin esperar a la clase siguiente</strong>. Aparece al final de los cuarenta planes de clase. Cuesta quince segundos, y es la diferencia entre una clase y un grupo.'}
      ]},
      {t:'✍️ Calificar código que funciona a medias', cards:[
        {type:'text', h:'El problema que los criterios no resuelven', b:'El curso te da puntuaciones: 30 por funciones que funcionan, 35 con la tarea adicional, <strong>0 si el código no funciona</strong>, hasta 50 por un proyecto de módulo, y la escala del README de 20/30/+5/+10. Lo que no te dice es qué hacer con el caso más habitual: el razonamiento es correcto, la estructura es correcta, y se rompe en la línea 14.'},
        {type:'qa', h:'Una forma defendible de decidir', items:[
          {k:'Separa comprensión de ejecución', v:'Hazte dos preguntas: ¿entendió qué hacía falta, y se ejecuta? Quien diseñó la solución correcta y se topó con una errata está en una posición completamente distinta de quien pegó algo que no sabe explicar.'},
          {k:'Donde ponga 0 estricto, cúmplelo — pero di por qué', v:'Algunos criterios son explícitos: código que no funciona vale 0. Aplícalo, y luego da la retroalimentación que lo hace útil: exactamente qué línea y qué cambiar. Un 0 con un arreglo preciso es un acto de enseñanza; un 0 sin comentario es solo un número.'},
          {k:'Reconoce el intento visible', v:'Donde los criterios te den margen —notas de proyecto, tareas adicionales, calidad del README—, valora el esfuerzo real que se quedó corto. Comentarios, estructura, un historial de commits sensato, un README que explica la intención.'},
          {k:'Nunca califiques por velocidad', v:'Nada en el curso premia terminar primero. Un proyecto sencillo y completo vale explícitamente más que uno ambicioso sin acabar.'},
          {k:'Deja siempre un camino a los puntos', v:'Di qué haría subir la nota. Toda tarea manual se puede reenviar en espíritu, porque el curso entero es iterativo: la clase siguiente construye sobre el mismo proyecto.'}
        ]},
        {type:'good', txt:'Un hábito útil: escribe primero la retroalimentación y después el número. Si no puedes explicar el número en dos frases que ayuden a mejorar, probablemente sea el número equivocado.'},
        {type:'tip', txt:'Usa las <strong>herramientas de evaluación</strong> donde el curso las facilita (el proyecto de bot del módulo 1 y el portafolio del módulo 4 tienen una cada uno): existen para que la calificación sea coherente entre tutores, no solo para tu comodidad. Y recuerda la trampa práctica: varias tareas calificadas se evalúan a partir de un <strong>enlace de GitHub en el chat de la tarea</strong>. Sin enlace no hay evaluación: insiste durante la clase, en voz alta, más de una vez.'}
      ]},
      {t:'👤 La clase individual de 50 minutos', cards:[
        {type:'text', h:'Todas las clases tienen una, y no es “lo mismo pero más rápido”', b:'Cada plan del temario lleva una <strong>variante individual de 50 minutos</strong> con su propia tabla de etapas. La tentación es dar la clase de grupo acelerada. No lo hagas: pierdes 40 minutos, y buena parte de lo que meterías con prisas es justo lo que una sola persona no puede hacer en absoluto.'},
        {type:'twocol', left:{h:'Qué tiene que salir', items:['<strong>Salas de trabajo</strong>: no hay con quien emparejarse','<strong>Competiciones por equipos</strong>: la regla de la media del equipo de M6L2 deja de significar nada','<strong>Revisión y pruebas entre compañeros</strong>: <em>tú</em> pasas a revisar','<strong>Presentaciones al grupo</strong>: se convierten en una conversación contigo','<strong>Juegos que necesitan equipos</strong>: el tres en raya por equipos, el juego de la “pelota”','La mayor parte de las etapas de puesta en común y votación']}, right:{h:'Qué ganas, y deberías usar', items:['<strong>Ritmo realmente ajustado</strong>: sin esperar al más lento ni al más rápido','<strong>Diálogo continuo</strong>: puedes preguntar “¿por qué?” tras cada paso','<strong>Depuración más profunda</strong>: leer bien cada error juntos','<strong>Foco en su propio proyecto</strong>: el marco real se puede elegir a medida','Más tiempo para las tareas adicionales','Retroalimentación inmediata y concreta en lugar de correcciones acumuladas']}},
        {type:'qa', h:'Cómo convertir las etapas colaborativas', items:[
          {k:'Análisis en pareja → pensar en voz alta', v:'Donde analizarían código por parejas, haz que te narre su razonamiento. El juego “todos contra uno” de M6L1 ya tiene una variante individual en el plan: tú y la persona os turnáis haciéndoos preguntas, sin ganador.'},
          {k:'Revisión entre compañeros → tu revisión, su lista', v:'Revisa <em>tu</em> código deliberadamente defectuoso contra la lista de comprobación. Enseña la misma habilidad y probablemente es más difícil.'},
          {k:'Competición por equipos → contra una referencia', v:'En lugar de ganar a otro equipo, alcanzar un objetivo: “¿puedes pasar el modelo del 90% con esta imagen de prueba?”'},
          {k:'Lluvia de ideas en grupo → provocación estructurada', v:'Una lluvia de ideas en solitario muere rápido. Da categorías y un cronómetro, y aporta ideas tú también: la regla de no criticar sigue valiendo para los dos.'},
          {k:'Presentación → un público real', v:'Que te presente formalmente, cronometrado, aplicando las ocho reglas de presentación. Después sugiérele que se lo enseñe a su familia o a una amistad, para que haya un público de verdad.'}
        ]},
        {type:'tip', txt:'Una cosa se vuelve <em>más difícil</em> a solas: la motivación en una construcción larga. En grupo, la inercia es social. Uno a uno recae enteramente en ti, así que divide el trabajo en victorias visibles y nombra cada una cuando llega.'}
      ]},
      {t:'🧰 El hábito que evita la mayoría de las clases malas', cards:[
        {type:'text', h:'Prepara la clase siguiente al final de esta', b:'Los instaladores como deberes antes de M1L2. Correos listos antes de las clases de registro. Un proyecto preparado antes de la revisión de código. Los antiguos proyectos de bot abiertos antes de M7L1. Live Share instalado antes de M8L4. El CSV guardado antes de M5L3. Las preguntas escritas antes de M10L2. Casi todas las clases que salen mal salen mal por algo que debería haber ocurrido una semana antes.'},
        {type:'good', txt:'Constrúyete un ritual de dos líneas para el final de la clase: confirma que todo el mundo ha pulsado <strong>Enviar</strong> y di la única cosa que tienen que traer o instalar para la próxima vez. Quince segundos, y elimina la mayor parte del caos de los diez primeros minutos de tu clase siguiente.'}
      ]}
    ],
    quiz:[
      {q:'Un alumno te pregunta algo que realmente no sabes. ¿Cuál es el movimiento por defecto?', opts:['Decir que no estás seguro y buscarlo juntos en pantalla — es el hábito de documentación de M1L4 demostrado en directo','Dar tu mejor suposición con seguridad para que el grupo siga confiando en ti','Decirle que está fuera del alcance del curso','Pasar rápido y esperar que se olviden'], c:0, fb:'Buscarlo juntos es la opción más potente porque ES la habilidad que enseña el curso: nadie se sabe una librería de memoria. No estás tapando una laguna, estás modelando el método.'},
      {q:'¿Qué respuesta a una pregunta que no sabes daña realmente tu credibilidad?', opts:['Adivinar con seguridad — el alumnado comprueba las respuestas, y estar equivocado sonando seguro es lo que acaba con su confianza','Decir “no lo sé”','Aparcar la pregunta y responderla esa noche en el chat del grupo','Nombrar con honestidad dónde está el límite de lo que sabes'], c:0, fb:'Admitir incertidumbre nunca te cuesta el aula. Una respuesta segura y equivocada, comprobada por alguien a mitad de clase, sí.'},
      {q:'Aparcas una pregunta para responderla luego en el chat del grupo. ¿Qué determina si eso ayuda o perjudica?', opts:['Si realmente vuelves a ella — una pregunta retomada genera más confianza que una respuesta instantánea, y una olvidada cuesta más que admitir que no lo sabías','La rapidez con la que respondas','Si respondes en privado o en público','Si la pregunta se hizo delante de los demás'], c:0, fb:'Aparcar solo es un movimiento legítimo si el seguimiento ocurre. Si no, simplemente has esquivado la pregunta, y el alumnado se da cuenta.'},
      {q:'¿Cuál de estos es una parte central del método LiveCoding?', opts:['Cometer errores a propósito y pedir al alumnado que los encuentre','Escribir el código en silencio para que puedan concentrarse','Enseñar primero el código terminado y explicarlo después','Que programen mientras tú observas sin hablar'], c:0, fb:'LiveCoding significa narrar tus decisiones, hacer preguntas, pausar, dibujar para visualizar la lógica, y cometer errores a propósito para que practiquen detectarlos.'},
      {q:'Una persona responde a todas las preguntas y el resto se ha quedado callado. ¿Cuál es la solución coherente con el curso?', opts:['Usar las estructuras ya previstas —el juego de la “pelota”, la regla de no responder dos veces seguidas— y dejar que el formato ponga el límite','Pedirle en privado que participe menos','Dejar de hacer preguntas abiertas al grupo','Moverla a una sala de trabajo aparte'], c:0, fb:'Varios juegos del curso reparten el tiempo de palabra automáticamente. Dejar que el formato ponga el límite evita que sea algo personal.'},
      {q:'Alguien está molestando y desconectado de la tarea. ¿Qué suele funcionar en este curso?', opts:['Darle un trabajo: dirigir una instalación, compartir pantalla, explicar su solución; molestar suele ser señal de estar poco ocupado','Silenciarle el resto de la etapa','Pasar directamente a la etapa de reflexión','Ponerle deberes extra'], c:0, fb:'El curso está lleno de papeles legítimos que repartir, y alguien capaz y aburrido es la causa más común de que molesten aquí.'},
      {q:'Haces una pregunta al grupo y nadie responde. ¿Cuál es la causa más probable?', opts:['La pregunta era demasiado grande — redúcela a algo estrecho y respondible, como “¿de qué tipo tiene que ser esta variable?”','El grupo está desenganchado y necesita un descanso','No hicieron los deberes','El material es demasiado avanzado para ellos'], c:0, fb:'Los planes de clase modelan preguntas estrechas y respondibles constantemente. El silencio suele ser un síntoma del tamaño de la pregunta, no de mala disposición.'},
      {q:'El código de un alumno muestra el razonamiento y la estructura correctos, pero se rompe. ¿Cómo lo calificas?', opts:['Aplica los criterios —incluido el 0 estricto donde así esté escrito— pero da siempre la línea exacta y el arreglo, para que la nota enseñe algo','Nota máxima, ya que el razonamiento era correcto','Cero sin comentario, ya que el código no funciona','Haz media con su tarea anterior'], c:0, fb:'Donde el código que no funciona vale 0, cúmplelo, pero un 0 con un arreglo preciso es un acto de enseñanza, mientras que un 0 sin comentario es solo un número.'},
      {q:'¿Cuál es un buen hábito al calificar tareas manuales?', opts:['Escribir primero la retroalimentación y después el número — si no puedes justificar el número en dos frases útiles, probablemente esté mal','Corregir primero las entregas más rápidas, mientras tienes energía','Calificar todo en relación con la persona más fuerte del grupo','Dar la misma nota a todo el mundo que haya entregado, para ser justo'], c:0, fb:'La retroalimentación primero mantiene el número defendible y útil. Nada en el curso premia la velocidad, y calificar en curva no forma parte de ningún criterio.'},
      {q:'Al dar una clase individual de 50 minutos, ¿qué NO deberías hacer?', opts:['Dar la clase de grupo de 90 minutos acelerada — pierdes 40 minutos y la mayor parte de lo que meterías con prisas necesita grupo de todos modos','Convertir la revisión entre compañeros en una revisión de tu propio código defectuoso','Sustituir la competición por equipos por un objetivo de referencia','Dedicar más tiempo a las tareas adicionales'], c:0, fb:'Las salas de trabajo, las competiciones por equipos, la revisión entre compañeros y las presentaciones al grupo no pueden ocurrir con una sola persona. Cada una hay que convertirla, no comprimirla.'},
      {q:'En una clase individual, ¿cómo conservas la habilidad de revisar código entre compañeros?', opts:['Haz que revise TU código deliberadamente defectuoso contra la lista de comprobación — la misma habilidad, y probablemente más difícil','Sáltatela, ya que necesita dos personas','Que revise su propio código de una clase anterior','Que revise el código de un compañero como deberes'], c:0, fb:'La habilidad es aplicar una lista de comprobación y dar retroalimentación constructiva. Tu código defectuoso aporta el objeto, y puedes plantar exactamente los problemas que quieras que encuentre.'},
      {q:'¿Qué se vuelve más difícil, y no más fácil, en una clase uno a uno?', opts:['La motivación en una construcción larga — la inercia es social en grupo, así que tienes que dividir el trabajo en victorias visibles y nombrar cada una','La depuración, porque no hay con quien comparar','Cumplir los tiempos','Explicar la teoría con claridad'], c:0, fb:'El ajuste de ritmo y el diálogo mejoran en el uno a uno. Sostener la inercia a lo largo de una construcción larga es lo que recae enteramente en ti.'},
      {q:'Alguien está visiblemente frustrado durante la clase de metacognición. ¿Qué te hace decir el curso?', opts:['Que la reacción es válida y es información sobre la estrategia que eligió, no una prueba sobre su capacidad','Que se tome un descanso y vuelva luego','Que la frustración significa que la clase es demasiado avanzada para él','Nada: seguir adelante para no llamar la atención'], c:0, fb:'La nota de M2L1 plantea la frustración como retroalimentación útil sobre la estrategia usada, y te pide que felicites a la persona por haberse dado cuenta, porque darse cuenta es la habilidad.'},
      {q:'¿Cuál es el mejor movimiento de diferenciación para alguien que termina siempre pronto?', opts:['Darle la tarea adicional ya prevista, o pedirle que dirija una etapa o dé una miniclase magistral — y elogiar el explicar','Adelantarle al material de la clase siguiente','Dejar que te ayude a corregir el trabajo de los demás','Reducir el número de tareas para el resto de la clase'], c:0, fb:'Las tareas adicionales existen en casi todas las clases, y hacer que el alumnado fuerte dirija instalaciones o explique soluciones es un patrón que se usa a lo largo de todo el curso.'},
      {q:'El entorno de un alumno está roto y la etapa práctica está empezando. ¿Qué haces?', opts:['Empezar con quienes están listos, poner al asistente técnico con el problema y darle a quien está bloqueado un plan B preparado','Parar la clase hasta que funcione el entorno de todo el mundo','Que se pase la clase entera mirando a un compañero','Aplazar la clase a la semana siguiente'], c:0, fb:'Los planes facilitan planes B —el Basic Bot, el Pipfile de la solución, el dataset compartido, el CSV de la clase anterior— precisamente para que una máquina no tenga secuestrada a la clase.'},
      {q:'¿Por qué el curso ofrece ocho técnicas de reflexión en lugar de una?', opts:['Porque la idea es alternarlas, para que los diez minutos finales sigan vivos en lugar de convertirse en un ritual','Para que cada tutor elija la que prefiera y la reutilice','Porque cada franja de edad necesita técnicas distintas','Porque la plataforma asigna una al azar'], c:0, fb:'Los planes de las clases más avanzadas recomiendan cambiar de método cada clase: eso es lo que evita que la reflexión se convierta en algo que el alumnado se limita a aguantar.'},
      {q:'¿Qué técnica de reflexión revela mejor si alguien ha entendido la clase de verdad?', opts:['“Enseña a un amigo”: veinte segundos explicando qué le enseñaría a alguien que faltó','“En un meme”: su impresión de la clase','“Una pequeña victoria”: un logro de la sesión','“Completar la frase”: “hoy he aprendido que…”'], c:0, fb:'Explicar un concepto en voz alta en veinte segundos es una comprobación real de comprensión, y consolida el conocimiento y da confianza al mismo tiempo.'},
      {q:'Un proyecto de módulo calificado no tiene enlace de GitHub en el chat de la tarea. ¿Por qué importa?', opts:['Ese enlace es como se evalúa el proyecto — sin enlace no hay evaluación, así que insiste durante la clase','La plataforma descuenta puntos automáticamente por un enlace que falta','El alumno no puede pasar al módulo siguiente sin él','Impide que sus compañeros hagan la revisión'], c:0, fb:'Varias tareas calificadas se evalúan a partir del enlace publicado en el chat de la tarea. Los planes te dicen que se lo recuerdes, en voz alta, más de una vez.'},
      {q:'¿Qué único hábito evita que la mayoría de las clases salgan mal?', opts:['Preparar la clase siguiente al final de esta: instaladores, correos, proyectos abiertos, extensiones instaladas','Leer el plan de clase entero en voz alta al principio','Preparar teoría extra por si la práctica termina antes','Tener un portátil de repuesto disponible'], c:0, fb:'Instaladores antes de M1L2, correos antes de las clases de registro, un proyecto listo antes de la revisión de código, Live Share antes de M8L4: la mayoría de las clases malas se perdieron una semana antes.'}
    ]
  },
  {
    id:16, emoji:'🎬', color:'#0EA5E9',
    lesson:true,
    title:'Clase Modelo — Mírala y Analízala',
    desc:'Una clase real de Python Pro grabada para verla, con una guía sobre qué hace bien esta persona, qué le falta y por qué darse cuenta de la diferencia es lo importante.',
    prep:'~2 horas: mírala una vez y luego otra con la guía y un cuaderno.',
    practical:{
      intro:'Antes de marcarlo como completado — y desbloquear el DST:',
      items:[
        'Vio la clase modelo una vez de principio a fin, y luego otra siguiendo la guía de observación',
        'Anotó, palabra por palabra, las frases que usa esta persona cuando alguien quiere la respuesta',
        'Enumeró las seis virtudes de impartición de abajo y anotó el momento en el que ocurre cada una',
        'Encontró las dos etapas que <strong>faltan</strong> en esta clase y escribió las frases que habría dicho en su lugar',
        'Abrió el plan de la clase M1L2 junto al vídeo y lo comparó con la tabla de etapas',
        'Repasó sus propias listas <strong>✋ Antes de enseñar esto</strong> de todos los módulos y cerró todo lo que se había saltado'
      ]
    },
    obj:'Ver todo lo del Módulo 15 ejecutado en una clase real, y ver qué pasa cuando dos etapas obligatorias quedan fuera por falta de tiempo. Mira una sesión completa de Python Pro, identifica los comportamientos de impartición que merece la pena copiar, detecta las dos carencias y averigua qué habrías hecho tú de otra manera.',
    completeH:'Listo o lista para la evaluación',
    completeBody:'Cuando hayas visto la clase modelo y recorrido la guía de observación, marca este módulo como completado. Eso desbloquea el <strong>Test de Habilidades Digitales</strong>, la evaluación práctica final para las personas candidatas a tutor de Python Pro.',
    completeBtn:'Marcar clase modelo como vista →',
    sections:[
      {t:'🎥 La grabación', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/H3ctpvdhzT0', cap:'Una clase completa de Python Pro, impartida por una persona con experiencia. Si el reproductor no carga, ábrela directamente en <a href="https://youtu.be/H3ctpvdhzT0" target="_blank" rel="noopener noreferrer">youtu.be/H3ctpvdhzT0</a>.'},
        {type:'text', h:'Qué clase es esta', b:'A juzgar por el contenido —el intérprete de Python, la configuración de VS Code, crear una carpeta y ejecutar un primer script, y los deberes sobre encontrar bots de Discord—, esta es la <strong>clase M1L2 del curso</strong>, la segunda de todo el curso. Abre ese plan junto al vídeo. Es un <strong>grupo pequeño, de dos alumnos</strong>, así que la dinámica está a medio camino entre el formato de grupo de 90 minutos y el individual de 50.'},
        {type:'text', h:'Cómo verla', b:'Mírala una vez de principio a fin, como lo haría un alumno. Después vuelve a verla con la guía de abajo y un cuaderno, pausando para anotar lo que esta persona <em>hace</em>, no lo que dice. Impartir es un conjunto de comportamientos concretos —dónde pausa, cuándo cede la pantalla, cómo formula una corrección— y eso solo se ve en un segundo visionado.'},
        {type:'warn', txt:'Esta es una <strong>clase real, no una demostración preparada.</strong> La mayor parte es muy buena y merece la pena copiarla de cerca. También le faltan dos etapas obligatorias. Ambos hechos te son útiles, y el segundo probablemente más que el primero, y por eso la grabación no se ha editado para ocultarlo.'}
      ]},
      {t:'✅ Qué hace bien esta persona — copia esto', cards:[
        {type:'qa', h:'Seis comportamientos concretos, y qué hace que funcione cada uno', items:[
          {k:'Abre por la persona, no por el material', v:'Saluda al alumnado y pregunta por su semana y por qué han estado haciendo. Es el briefing bien hecho: la asistencia ocurre dentro de una conversación y no como un pase de lista.'},
          {k:'Revisa los deberes preguntando por el trabajo en sí', v:'Pregunta por su investigación y su proyecto de la clase anterior, y por la tarea de lectura de código, y el alumnado responde de verdad. La revisión de deberes es un debate genuino, que además es tu mejor lectura temprana de quién se está descolgando.'},
          {k:'Demuestra primero y luego cede', v:'Configura VS Code y ejecuta un script de Python <em>antes</em> de que lo hagan ellos. Para una clase cargada de configuración es lo correcto: mírame a mí, ahora tú.'},
          {k:'Divide las instrucciones en pasos', v:'Crea una carpeta, ábrela en la terminal, escribe este comando. Las clases de configuración se desmoronan cuando las instrucciones llegan como un párrafo; funcionan cuando llegan como una secuencia numerada con un punto de control tras cada paso.'},
          {k:'Usa los nombres de los dos alumnos, repetidamente', v:'Se dirige a ellos por su nombre durante las interacciones de aprendizaje, no solo para el registro. Con dos personas es fácil; con ocho es una disciplina deliberada, y es la forma más barata de mantener a todo el mundo presente.'},
          {k:'Pide que expliquen, en lugar de explicar', v:'Les pregunta qué <em>es</em> un intérprete, y responden con sus propias palabras. Es la regla de “no des la respuesta” aplicada a la teoría, y es el comportamiento que hay que robar por encima de todos los demás.'}
        ]},
        {type:'good', txt:'Fíjate también en cómo es la retroalimentación: recorre el código del alumnado con ellos, ayudándoles a encontrar y corregir sus propios errores en lugar de arreglárselo. Es el hábito de depuración de M1L4 modelado dos clases antes de enseñarse formalmente.'},
        {type:'text', h:'Y los deberes se entregan como es debido', b:'La tarea —buscar bots de Discord y traerlos a la clase siguiente— se <strong>explica</strong>, no solo se anuncia, y se conecta hacia delante con lo que hará con ella la clase siguiente. Esa conexión hacia delante es lo que hace que los deberes se sientan parte de algo y no un añadido, y está en todos los planes de clase exactamente por eso.'}
      ]},
      {t:'🕳️ Las dos etapas que faltan', cards:[
        {type:'text', h:'Qué no está', b:'Dos de las siete partes del esqueleto de la clase no aparecen: <strong>no se enuncia ningún objetivo claro</strong> al principio ni cerca de él, y <strong>ninguna recapitulación o repaso cierra la clase</strong>. Ambas son etapas obligatorias en los 40 planes de clase, y el plan de M1L2 tiene las dos: una diapositiva de objetivos que enumera lo que produce el día, y una etapa de reflexión con preguntas de repaso.'},
        {type:'twocol', left:{h:'Por qué importa la etapa de objetivos', items:['Quien conoce el destino tolera una parte central difícil, y esta clase tiene una parte central difícil','El trabajo de configuración parece burocracia hasta que se conecta con un propósito','La propia diapositiva de objetivos del plan de M1L2 nombra cuatro resultados, incluido el generador de contraseñas fuertes','Sin ella, “¿por qué estamos escribiendo comandos en una terminal?” se queda sin respuesta']}, right:{h:'Por qué importa la recapitulación', items:['La reflexión es donde la clase se consolida: está en el horario, no es opcional','Es tu última oportunidad de pillar a quien ha asentido sin entender','Las preguntas de repaso atraen deliberadamente a quien está más callado','Una clase que se detiene en lugar de cerrarse no deja nada sobre lo que construir la semana siguiente']}},
        {type:'good', txt:'Sé justo sobre por qué pasa esto: casi siempre es <strong>el tiempo</strong>. Las clases de configuración se alargan —las instalaciones fallan, las máquinas difieren, alguien se queda atrás— y las etapas de los dos extremos son las que quedan fuera. Es exactamente el modo de fallo del que avisa el Módulo 3, y ver que le pasa a alguien competente debería decirte que también te pasará a ti si no proteges activamente esas etapas.'},
        {type:'tip', txt:'Tu tarea: escribe las dos cosas que faltan. Una <strong>apertura de 30 segundos</strong> que diga qué produce esta clase, y un <strong>cierre de 2 minutos</strong> con tres preguntas de repaso y los deberes. Escríbelos enteros, con tus palabras. Esos dos guiones cortos son lo más portátil que te llevarás de este módulo: funcionan en todas las clases del curso y puedes reutilizarlos casi sin cambios.'}
      ]},
      {t:'🔍 Tu tarea de observación', cards:[
        {type:'qa', h:'Etapa por etapa, mientras miras', items:[
          {k:'Briefing', v:'¿Cómo se toma la asistencia: como un pase de lista o dentro de una conversación? ¿En cuánto tiempo llega la clase a un motivo para existir?'},
          {k:'Revisión de deberes', v:'¿Cómo se saca el trabajo de la clase anterior? ¿Qué pasa con quien tiene menos que enseñar?'},
          {k:'Objetivos', v:'<strong>Faltan aquí.</strong> Anota el punto en el que deberían haber ido, y qué habrías dicho tú.'},
          {k:'Teoría', v:'¿Cómo de corta es? Fíjate en concreto en la pregunta sobre el intérprete: pregunta en lugar de contar. Cronometra cuánto dura la teoría en realidad.'},
          {k:'Práctica', v:'Cuenta cuántas veces le piden la respuesta y no la da. Anota qué dice en su lugar.'},
          {k:'Reflexión', v:'<strong>Falta aquí.</strong> Los deberes se explican bien, pero no hay recapitulación. Anota dónde debería haber ido.'}
        ]},
        {type:'twocol', left:{h:'Comportamientos de impartición que anotar', items:['Cuándo se cede la pantalla y cuándo se recupera','Cómo se diagnostica en voz alta un error en el código de un alumno','Qué preguntas se responden con otra pregunta','Cómo se comprueba el ritmo sin señalar a nadie','Cómo se prepara la clase siguiente al final','Con qué frecuencia se llama a cada alumno por su nombre']}, right:{h:'Momentos que siempre salen mal', items:['El entorno o la instalación de alguien falla','Una persona termina mucho antes que la otra','Alguien se queda en silencio un buen rato','La etapa de configuración empieza a alargarse','Código que funcionaba hace un minuto da error en directo','Una ruta o un nombre de archivo está sutilmente mal']}},
        {type:'good', txt:'Lo más útil que puedes sacar de esta grabación es la <strong>forma de expresarse</strong> de esta persona en los momentos en los que alguien quiere la respuesta. Anota esas frases palabra por palabra. Tener dos o tres maneras ya preparadas de decir “¿qué dice el error?” vale más en tu primera clase que cualquier cantidad de teoría sobre no dar respuestas.'},
        {type:'tip', txt:'Por último, abre el plan de M1L2 junto al vídeo y compáralo con la tabla de etapas. ¿Qué etapas se alargaron? ¿Cuáles se comprimieron? Ver dónde se desvía una clase real de su plan es como aprendes qué partes de un plan son estructurales y cuáles ceden, y esta comparación en concreto dice mucho, porque ya sabes cómo acaba.'}
      ]}
    ]
  },
/* NEXT-ES-MODULE */
]
};

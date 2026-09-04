/* ============================================================================
   Python Pro Tutor Training — Indonesian content
   ----------------------------------------------------------------------------
   This file only holds text. All behaviour lives in app.js, which is language
   agnostic: it reads window.CONTENT and renders whatever it finds here.

   Register: formal-but-warm. Tutor-facing text uses "Anda"; the example phrases
   a tutor would actually say to a 14-year-old stay in the natural informal
   register. Technical terms Indonesian developers use in English — request,
   commit, deploy, array, error — are left in English on purpose, because that
   is what students will see on screen and search for.

   Card types: text | hi | brief | image | warn | tip | good | code | video | qa | twocol
   ========================================================================= */
window.CONTENT = {
code: 'id',
htmlLang: 'id',
title: 'Pelatihan Tutor Python Pro — Kodland',
ui: {
  logoSub: 'Pelatihan Python Pro',
  heroEyebrow: '🐍 Program Pelatihan Tutor',
  heroTitle: 'Bersiaplah mengajar<br><span class="h-pill">Python Pro</span><br>kepada usia 13–17 tahun',
  heroSub: 'Kerjakan setiap modul secara berurutan dan lulus tesnya untuk menyelesaikan persiapan Anda sebagai tutor. Raih 70%+ pada tes sebuah modul untuk membuka modul berikutnya — tidak ada jalan pintas, dan Digital Skill Test baru terbuka setelah semua modul selesai.',
  progLabel: 'modul selesai',
  modulesLabel: 'Modul Anda',
  allDone: '🏆 Semua selesai!',
  completeWord: 'selesai',
  backModules: '← Modul',
  exitQuiz: '← Keluar dari Tes',
  backDashboard: '← Dasbor',
  faqNav: '❓ FAQ',
  changeRegion: '🌐 Bahasa',
  moduleWord: 'Modul',
  ofWord: 'dari',
  objectiveWord: 'Tujuan',
  badgePassed: '✓ Lulus',
  badgeLocked: '🔒 Terkunci',
  badgeStart: 'Mulai →',
  badgeWatched: '✓ Sudah ditonton',
  badgeWatch: '▶ Tonton',
  tagCompleted: 'Selesai',
  tagExampleLesson: 'Pelajaran contoh',
  completeModuleWord: 'Selesaikan modul',
  completeAllFirst: 'Selesaikan semua modul dulu',
  scoreWord: 'Skor',
  questionsWord: 'pertanyaan',
  takeQuiz: '📝 Kerjakan Tes Modul →',
  retakeQuiz: '🔄 Ulangi Tes',
  markComplete: 'Tandai Selesai',
  doneCompleted: '✓ Selesai',
  moduleComplete: 'Modul Selesai',
  questionWord: 'Pertanyaan',
  correctPrefix: '✅ Benar! ',
  notQuitePrefix: '❌ Belum tepat. ',
  seeResults: 'Lihat Hasil →',
  nextBtn: 'Berikutnya →',
  modulePassed: 'Modul Lulus!',
  keepReviewing: 'Pelajari Lagi',
  scoreLine: 'Anda menjawab benar {s}/{t}.',
  passMsg: ' Modul berikutnya terbuka!',
  failMsg: ' Anda perlu 70% untuk lulus. Pelajari ulang modulnya dan coba lagi!',
  reviewModuleWord: '📖 Tinjau Modul',
  startModuleWord: 'Mulai Modul',
  watchModuleWord: '▶ Tonton Modul',
  viewCertificate: '🏆 Lihat Sertifikat',
  trainingComplete: 'Pelatihan Selesai!',
  completeSub: 'Anda telah menuntaskan setiap modul — selamat! Anda siap untuk Digital Skill Test.',
  certLabel: 'Sertifikat Penyelesaian',
  certTitle: 'Pelatihan Tutor Python Pro',
  certLine: 'Kodland · Seluruh {n} modul · Rata-rata skor tes: {avg}%',
  takeDST: '🎯 Kerjakan Digital Skill Test →',
  backDashboard2: '← Kembali ke Dasbor',
  dstCardStage: 'Tahap Akhir',
  dstCardTitle: 'Digital Skill Test',
  dstCardDesc: 'Penilaian praktik terakhir — terbuka hanya setelah semua modul selesai.',
  dstReady: 'Siap',
  dstCardTag: 'Penilaian praktik',
  devSkipDST: '🔓 Dev: langsung ke DST →',
  prepWord: 'persiapan',
  practicalTitle: 'Sebelum Anda mengajarkan ini',
  practicalNote: 'Ini adalah pernyataan mandiri — tidak ada yang bisa memeriksanya dari sini. Centanglah dengan jujur: tes modul hanya bisa memastikan Anda sudah membaca materinya, bukan bahwa Anda bisa melakukannya.',
  practicalWarn: 'Masih ada {n} item praktik yang belum Anda centang di “Sebelum Anda mengajarkan ini”.\n\nTes ini hanya memeriksa bahwa Anda sudah membaca modulnya — tes tidak bisa memeriksa apakah Anda benar-benar bisa membangunnya. Melanjutkan tanpa mengerjakan bagian praktiknya adalah cara sebuah pelajaran berantakan di depan kelas.\n\nTetap kerjakan tesnya?',
  // brief block labels
  briefOverview: 'Gambaran umum',
  briefWhy: 'Mengapa ini penting',
  briefLearn: 'Yang dibangun & diterapkan siswa',
  briefConfident: 'Kuasai 100%',
  // placeholders
  imgPhTitle: 'Placeholder gambar',
  videoPhTitle: 'Placeholder video',
  videoPhBody: 'Rekaman akan ditambahkan di sini.',
  videoFallback: 'Browser Anda tidak dapat memutar video ini. Anda bisa mengunduhnya dari folder assets/media/videos.',
  // FAQ
  faqTitle: 'FAQ Tutor & Pemecahan Masalah',
  faqSub: 'Jawaban cepat untuk situasi yang benar-benar akan Anda hadapi dalam pelajaran Python Pro — error yang muncul di setiap modul, aturan keamanan yang tidak boleh dilanggar, dan apa yang harus dilakukan saat seorang siswa jauh di depan atau tertinggal dari kelompoknya. Selalu tersedia, dari layar mana pun.'
},
dst: {
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🎯 Tahap Akhir</div>
      <h1 class="dst-h1">Tes untuk Kandidat Tutor Python Pro</h1>
      <p class="dst-sub">Tujuan utama kursus ini adalah agar siswa membangun proyek-proyek hebat di beberapa bidang — otomatisasi chatbot, pengembangan web, dan kecerdasan buatan — menggunakan berbagai library Python. Tugas inilah tempat Anda menunjukkan bahwa Anda memiliki pengetahuan Python tingkat lanjut dan mampu membantu siswa selama mereka menulis proyek-proyek tersebut.</p>
    </div>

    <div class="dst-block">
      <div class="sch">🧩 Tugas praktik</div>
      <div class="card">
        <p>Dengan menggunakan <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a> dan keterampilan basis data, bangunlah sebuah <strong>situs web kuis yang ditujukan untuk remaja</strong> yang menarik dan dinamis.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">✅ Kriteria proyek</div>
      <div class="card"><ul class="dst-check">
        <li>Situs web harus memiliki kuis yang mencakup <strong>seluruh</strong> topik yang disarankan.</li>
        <li>Kuis harus terdiri dari <strong>minimal 5</strong> pertanyaan.</li>
        <li>Harus menggunakan <strong>basis data relasional</strong>. (Anda dapat memanfaatkan <a href="https://flask-sqlalchemy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Flask-SQLAlchemy</a>.)</li>
        <li>Situs web harus dipublikasikan di <a href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">PythonAnywhere</a>.</li>
        <li>Situs web harus memiliki halaman terpisah yang dapat <strong>mendeteksi atau mengklasifikasikan gambar yang diunggah pengguna</strong>.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">📚 Topik kuis</div>
      <div class="card"><ul class="dst-check">
        <li>Otomatisasi chatbot dengan Python (<a href="https://discordpy.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Discord.py</a>)</li>
        <li>Pengembangan web dengan Python (<a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">Flask</a>)</li>
        <li>Pengembangan kecerdasan buatan dengan Python</li>
        <li>Computer Vision (<a href="https://www.tensorflow.org/api_docs/python/tf" target="_blank" rel="noopener noreferrer">TensorFlow</a>, <a href="https://imageai.readthedocs.io/en/latest/detection/index.html" target="_blank" rel="noopener noreferrer">ImageAI</a>)</li>
        <li>Natural Language Processing (<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" rel="noopener noreferrer">BeautifulSoup</a>, <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">NLTK</a>)</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">⚠️ Hal-hal yang perlu diperhatikan</div>
      <div class="card"><ul class="dst-check">
        <li>Ketika pengguna mengirimkan kuis, <strong>skor yang mereka peroleh harus ditampilkan</strong>. Pengguna dapat mengulang kuis, dan baik <strong>hasil terbaru</strong> maupun <strong>skor tertinggi</strong> mereka harus ditampilkan.</li>
        <li>Di <strong>sudut kanan atas layar</strong>, skor tertinggi yang pernah dicapai oleh seluruh pengguna sejauh ini dan skor tertinggi pengguna saat ini harus ditampilkan.</li>
        <li><strong>Footer setiap halaman</strong> situs web harus memuat informasi tentang pembuatnya.</li>
        <li>Hasil deteksi gambar harus <strong>ditampilkan di layar</strong> (misalnya: nama kelas + skor keyakinan) dan <strong>disimpan ke basis data</strong>. Untuk modelnya, Anda dapat memakai model yang Anda latih di Teachable Machine, atau model Tiny YOLO dari ImageAI.</li>
      </ul></div>
    </div>

    <div class="dst-block">
      <div class="sch">🖼️ Contoh situs</div>
      <p class="dst-note">Implementasi acuannya menampilkan halaman kuis dengan <em>Nama Anda</em>, pertanyaan bernomor, dan jawaban pilihan ganda, dengan <strong>Personal High Score</strong> dan <strong>Overall High Score</strong> di kanan atas — serta halaman hasil yang menampilkan <em>Skor Anda</em>, <em>Skor tertinggi pribadi</em>, <em>Skor tertinggi keseluruhan</em>, tombol <strong>Try Again</strong>, dan kredit pembuat di footer.</p>
      <div class="dl-row">
        <a class="dl-btn" href="https://github.com/GitKodland/HardSkillsTest" target="_blank" rel="noopener noreferrer">
          <span class="dl-ico">📦</span><span class="dl-tx"><b>Templatnya</b><small>github.com/GitKodland/HardSkillsTest</small></span>
        </a>
      </div>
      <p class="dst-note" style="margin-top:12px">Anda boleh memakai templat ini, atau membuat yang sepenuhnya baru sendiri.</p>
    </div>

    <div class="dst-block">
      <div class="sch">📝 Catatan</div>
      <div class="card hi">
        <h4>Tugas ini mengukur keterampilan back-end Anda</h4>
        <p>Karena itu Anda tidak perlu terlalu memikirkan desainnya.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">‼️ Penting</div>
      <div class="card">
        <p><strong>Pastikan Anda sudah menguji proyeknya sepenuhnya sebelum mengirimkannya.</strong> Semua kriteria harus terpenuhi, setiap elemen yang diminta harus ada di halamannya, dan proyeknya harus berjalan tanpa error.</p>
      </div>
    </div>

    <div class="dst-block">
      <div class="sch">🚀 Cara mengirimkan</div>
      <div class="card"><ol class="dst-steps">
        <li>Unggah proyek yang sudah selesai ke <strong>GitHub</strong> dan atur aksesnya menjadi <strong>public</strong>.</li>
        <li>Publikasikan di <strong>PythonAnywhere</strong>.</li>
        <li>Kerjakan skill test-nya, dan tambahkan tautan proyek Anda sebagai jawaban untuk <strong>pertanyaan terakhir</strong> pada tes tersebut.</li>
      </ol></div>
    </div>

    <div class="dst-block">
      <div class="sch">🔗 Skill test</div>
      <a class="dst-form-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSfAiDvOJ6ZLjajFXGODjkn4M_L9DizqCaDaSGwr2w60_OdNjA/viewform" target="_blank" rel="noopener noreferrer">📝 Buka skill test →</a>
        <p class="dst-note" style="margin-top:12px">Membuka formulir di tab baru. Sebelum mengirim, pastikan repository Anda sudah public dan tidak ada token yang tertinggal di dalam kode.</p>
      </div>

    <div class="dst-block">
      <div class="card">
        <p style="text-align:center;font-family:'Nunito',sans-serif;font-weight:900;font-size:18px;color:var(--text);margin:0">Semoga berhasil! 🍀</p>
      </div>
    </div>

    <hr class="divider">

    <div class="dst-block">
      <div class="sch">📎 Dari pelatihan Anda — bukan bagian dari brief di atas</div>
      <div class="card hi">
        <h4>Di mana setiap kebutuhan ini diajarkan</h4>
        <p>Setiap keterampilan yang diminta tugas ini sudah dibahas dalam modul yang telah Anda selesaikan. Kalau ada yang terasa goyah, kembalilah ke sana alih-alih memulai dari nol:</p>
        <ul>
          <li><strong>Flask, route, template, dan form</strong> → Modul 7 (M3 kursus)</li>
          <li><strong>Basis data relasional dengan Flask-SQLAlchemy, dan skor per pengguna</strong> → Modul 8 (M4 kursus)</li>
          <li><strong>Publikasi di PythonAnywhere, termasuk langkah WSGI</strong> → Modul 8 (M4L3 kursus)</li>
          <li><strong>Melatih model di Teachable Machine</strong> → Modul 9 (M5L4 kursus)</li>
          <li><strong>Menjalankan model itu dari kode, serta deteksi ImageAI / Tiny YOLO</strong> → Modul 10 (M6 kursus)</li>
          <li><strong>Discord.py, BeautifulSoup, dan NLTK</strong> — materi bahan kuis → Modul 5 dan 9</li>
        </ul>
      </div>
      <div class="callout cw"><span class="ci">⚠️</span><span>Sebelum Anda menjadikan repository-nya public: proyek Anda mungkin memuat token bot, API key, atau <code>secret_key</code> Flask. Tidak satu pun dari itu boleh berada di repository publik, dan menghapusnya belakangan tidak menolong karena Git menyimpan riwayat. Periksa sebelum Anda push — ini aturan yang sama yang nantinya akan Anda tegakkan pada siswa Anda sendiri.</span></div>
    </div>
  </div>`
},
faq: [
  {
    cat: '📖 Glosarium — istilah yang dipakai kursus ini',
    items: [
      {q: 'Istilah Python & kode', a: '<strong>Interpreter</strong> — program yang menerjemahkan Python Anda menjadi kode mesin. <strong>IDE</strong> — editor yang membantu Anda menulis kode (VS Code di sini). <strong>Library / modul / package</strong> — kode buatan orang lain yang Anda import. <strong>pip</strong> — alat yang memasang library. <strong>Virtual environment</strong> — kumpulan library terisolasi milik satu proyek. <strong>Dependency</strong> — library yang dibutuhkan proyek Anda agar bisa berjalan. <strong>Framework</strong> — library besar yang memberi struktur pada proyek Anda (Flask). <strong>Decorator</strong> — baris <code>@</code> yang menyerahkan fungsi Anda kepada sebuah library. <strong>async / await</strong> — memungkinkan fungsi berhenti sejenak sambil menunggu tanpa membekukan semua hal lain. <strong>Class</strong> — cetak biru tempat object dibuat. <strong>Object / instance</strong> — satu benda yang dibuat dari cetak biru itu. <strong>Inheritance</strong> — satu class mewarisi kemampuan class lain. <strong>Method</strong> — fungsi milik sebuah class. <strong>Argument / parameter</strong> — nilai yang diterima sebuah fungsi. <strong>Return</strong> — nilai yang dikembalikannya. <strong>Exception</strong> — error yang dilempar Python; <code>try</code>/<code>except</code> menangkapnya. <strong>Refactoring</strong> — memperbaiki kode tanpa mengubah apa yang dilakukannya. <strong>Linter</strong> — alat yang menandai masalah gaya penulisan (<code>flake8</code>).'},
      {q: 'Istilah web & Flask', a: '<strong>Front-end</strong> — apa yang dilihat pengguna (HTML, CSS, JavaScript). <strong>Back-end</strong> — logika di baliknya (Python/Flask di sini). <strong>HTML</strong> — isi dan struktur halaman. <strong>CSS</strong> — tampilannya. <strong>Tag</strong> — elemen HTML seperti <code>&lt;p&gt;</code>. <strong>URL</strong> — alamat sebuah halaman. <strong>Route</strong> — kode yang dijalankan untuk sebuah URL. <strong>Template</strong> — halaman HTML yang diisi Flask dengan data. <strong>Jinja</strong> — mesin template yang melakukan pengisian itu, memakai <code>{{ }}</code>. <strong>Form</strong> — kolom isian yang dikirimkan pengguna. <strong>GET / POST</strong> — meminta sebuah halaman vs mengirim data ke halaman itu. <strong>Session</strong> — cara server mengingat siapa yang sedang login. <strong>Widget / iframe</strong> — aplikasi orang lain yang disematkan di halaman Anda. <strong>Deployment</strong> — menaruh aplikasi Anda di internet. <strong>PythonAnywhere</strong> — layanan hosting yang dipakai kursus ini. <strong>File WSGI</strong> — file yang dibaca server untuk menemukan aplikasi Anda. <strong>UI / UX</strong> — bagaimana tampilannya vs bagaimana rasanya saat dipakai.'},
      {q: 'Istilah data & AI', a: '<strong>API</strong> — layanan yang bisa Anda mintai data lewat kode. <strong>JSON</strong> — format teks yang biasanya dipakai API untuk membalas. <strong>Request</strong> — meminta sesuatu kepada server. <strong>Scraping</strong> — mengambil informasi dari sebuah halaman. <strong>Parsing</strong> — menganalisis struktur untuk menarik data tertentu. <strong>Crawling</strong> — berpindah melintasi banyak halaman sambil mengumpulkan data. <strong>robots.txt</strong> — file yang menyatakan bagian situs mana yang boleh di-crawl. <strong>DataFrame</strong> — sebuah tabel di pandas. <strong>CSV</strong> — file spreadsheet berbentuk teks biasa. <strong>Dataset</strong> — data yang dipelajari sebuah model. <strong>Data latih / data uji</strong> — data untuk mengajari vs untuk memeriksa (data uji harus belum pernah dilihat). <strong>Model</strong> — hasil pelatihan yang membuat prediksi. <strong>Neural network</strong> — jenis model yang dipakai di sini. <strong>Klasifikasi</strong> — memberi label pada seluruh gambar. <strong>Deteksi</strong> — menemukan letak objek di dalamnya. <strong>Segmentasi</strong> — menentukan piksel mana milik apa. <strong>Inference</strong> — memakai model terlatih pada input baru. <strong>Hyperparameter</strong> — pengaturan pelatihan yang Anda pilih, seperti epoch. <strong>Epoch</strong> — satu putaran penuh melewati data latih. <strong>Prompt</strong> — instruksi yang Anda berikan kepada model generatif. <strong>NLP</strong> — pemrosesan bahasa alami. <strong>Tokenization</strong> — memecah teks menjadi potongan-potongan. <strong>Lemmatization</strong> — mengembalikan kata ke bentuk dasarnya. <strong>Stop words</strong> — kata-kata umum yang dibuang sebelum analisis. <strong>Pipeline</strong> — rangkaian langkah pemrosesan. <strong>Colab</strong> — lingkungan notebook berbasis browser dari Google. <strong>Notebook / cell</strong> — format file itu dan blok-blok yang bisa dijalankan di dalamnya.'},
      {q: 'Istilah Git & kerja sama tim', a: '<strong>Git</strong> — program version control di komputer Anda. <strong>GitHub</strong> — situs web yang menampung repository. <strong>Repository (repo)</strong> — folder proyek yang dilacak Git. <strong>Commit</strong> — perubahan yang disimpan beserta pesannya. <strong>Push / pull</strong> — mengirim perubahan ke atas / menariknya ke bawah. <strong>Clone</strong> — mengunduh sebuah repository. <strong>Branch</strong> — salinan paralel untuk satu pekerjaan. <strong>Merge</strong> — menggabungkan branch kembali. <strong>Conflict</strong> — ketika dua perubahan menyentuh baris yang sama. <strong>README</strong> — file yang menjelaskan proyeknya. <strong>Open source</strong> — kode yang diterbitkan agar siapa pun bisa membacanya. <strong>Token</strong> — kunci rahasia yang mengautentikasi program Anda; perlakukan seperti kata sandi. <strong>Intents</strong> — izin yang diminta sebuah bot Discord. <strong>Agile</strong> — filosofi pengembangan yang lentur dan kolaboratif. <strong>Scrum</strong> — cara konkret untuk mempraktikkannya. <strong>Sprint</strong> — periode tetap untuk sekumpulan tugas. <strong>Backlog</strong> — daftar tugas yang sudah diprioritaskan. <strong>Retrospective</strong> — peninjauan setelah sebuah sprint. <strong>Code review</strong> — membaca kode orang lain dan mengusulkan perbaikan. <strong>Live Share</strong> — ekstensi VS Code untuk menyunting bersama-sama.'},
      {q: 'Istilah Kodland', a: '<strong>Platform</strong> — tempat tugas, teori, dan nilai berada. <strong>Backoffice (BO)</strong> — tempat Anda memverifikasi pengumpulan tugas dan menemukan tautan grup. <strong>TS</strong> — technical assistant, tangan kedua Anda. <strong>DST</strong> — Digital Skill Test, penilaian praktik terakhir. <strong>EduScrum</strong> — adaptasi Scrum ke dalam kelas versi kursus ini. <strong>LiveCoding</strong> — membangun kode bersama-sama di layar. <strong>UMC</strong> — Use–Modify–Create. <strong>Metakognisi</strong> — memikirkan bagaimana cara Anda belajar. <strong>Creativity Card</strong> — formulir yang melacak proyek kelulusan seorang siswa. <strong>Tes sumatif</strong> — tes pengulangan materi di dalam sebuah pelajaran.'}
    ]
  },
  {
    cat: '🔐 Aturan keamanan yang tidak boleh dilanggar',
    items: [
      {q: 'Seorang siswa bertanya “boleh nggak aku push token bot-ku ke GitHub?”', a: 'Jawabannya selalu <strong>tidak</strong>. Token bot Discord adalah kata sandi: siapa pun yang memilikinya menguasai bot itu sepenuhnya dan bisa memakainya untuk spam atau menyerang server. Kursus ini menandainya secara eksplisit di M1L3. Dalam kode pelajaran kita menulis placeholder harfiah <code>bot.run("YOUR_BOT_TOKEN")</code> dan menempelkan token aslinya hanya secara lokal. Ucapkan aturan ini dengan lantang setiap kali sebuah proyek diunggah.'},
      {q: 'Seorang siswa sudah terlanjur push token-nya (atau menempelkannya di chat grup). Sekarang bagaimana?', a: 'Anggap sudah bocor, karena memang begitu. Minta mereka membuka Discord Developer Portal → Bot → <strong>Reset Token</strong>, lalu menempelkan yang baru secara lokal saja. Ingatkan bahwa <strong>menghapus file-nya tidak menolong</strong> — Git menyimpan riwayat selamanya, dan justru itulah poin yang Anda ajarkan di M1L4. Membuat ulang token adalah satu-satunya perbaikan.'},
      {q: 'Apakah aman melakukan share screen saat token saya tampil di layar?', a: 'Tidak — dan ini lebih sering menjerat tutor daripada siswa. Sebelum Anda membagikan layar atau merekam pelajaran, ganti token Anda dengan placeholder, atau simpan di file terpisah yang tidak pernah Anda buka di depan kamera. Berlaku sama untuk kata sandi platform dan tab Backoffice.'},
      {q: 'Proyek “Buku Harian Programmer” menyimpan kata sandi sebagai teks biasa. Perlukah saya menyebutkannya?', a: '<strong>Ya.</strong> Kode M4L2 menyimpan <code>password</code> langsung ke tabel <code>User</code> supaya pemula bisa melihat perulangan pembandingnya bekerja. Itu penyederhanaan untuk mengajar, bukan pola yang benar. Katakan satu kalimat: “Aplikasi sungguhan tidak pernah menyimpan kata sandinya sendiri — mereka menyimpan sidik jari acaknya yang disebut hash. Hari ini kita lewati itu supaya logikanya tetap kelihatan.” Butuh sepuluh detik dan mencegah kebiasaan yang benar-benar buruk.'},
      {q: 'Apa yang tidak boleh siswa masukkan ke proyek yang mereka publikasikan?', a: 'Token dan API key, alamat email serta kata sandi asli milik mereka atau orang lain, alamat rumah atau sekolah mereka, dan foto orang lain tanpa izin. Repository publik berarti publik selamanya. Kalau sebuah proyek butuh form login, pakailah data uji yang jelas-jelas palsu.'},
      {q: 'Apakah web scraping diperbolehkan? Apa yang harus saya katakan pada siswa?', a: 'Ajarkan batasannya dari M5L2 sebagai bagian dari keterampilannya, bukan sebagai catatan kaki: periksa <strong>robots.txt</strong>, hormati <strong>ketentuan penggunaan dan kebijakan privasi</strong> situsnya, jangan menyebarkan ulang konten <strong>berhak cipta</strong>, dan jangan mengumpulkan <strong>data pribadi</strong> (GDPR). Kita melakukan scraping pada situs berita latihan justru karena situs itu aman untuk di-scrape.'},
      {q: 'Seorang siswa ingin menghasilkan gambar orang sungguhan, atau mengaku-ngaku gambar AI sebagai nyata.', a: 'Inilah risiko yang menjadi dasar M6L2. Gambar hasil generasi yang meniru foto asli menyebarkan misinformasi, dan konten hasil generasi bisa bersifat diskriminatif. Batasi prompt pada hewan, benda, dan tokoh rekaan — jangan pernah orang nyata yang bisa dikenali — dan jadikan diskusi “bagaimana caranya mengenali yang palsu?” sebagai bagian dari pelajaran, bukan peringatan yang ditempelkan di akhir.'}
    ]
  },
  {
    cat: '🐞 Error yang muncul di setiap angkatan',
    items: [
      {q: '“ModuleNotFoundError” tepat setelah pip install berhasil.', a: 'Hampir selalu <strong>interpreter-nya tidak cocok</strong>: library-nya masuk ke satu Python, sedangkan VS Code menjalankan Python yang lain. Perbaiki dengan <code>Ctrl+Shift+P</code> (<code>Cmd+Shift+P</code> di Mac) → <em>Python: Select Interpreter</em> → pilih environment milik proyeknya. Di dalam proyek pipenv, perintah pemasangannya sendiri harus <code>pipenv install &lt;library&gt;</code>, bukan <code>pip install</code> polos.'},
      {q: '“pip is not recognised” / tidak ada terminal di VS Code.', a: 'Buka satu lewat <strong>Terminal → New Terminal</strong>. Kalau <code>pip</code> sendiri tidak ditemukan, interpreter Python-nya tidak ditambahkan ke PATH saat pemasangan — memasang ulang dengan kotak “Add Python to PATH” dicentang lebih cepat daripada mendebug-nya secara langsung. M1L2 membahas ini; jangan biarkan pemasangan satu siswa menghambat seluruh kelas.'},
      {q: 'Bot-nya tampil online tapi mengabaikan setiap pesan.', a: 'Dua penyebab, dengan urutan ini. (1) <code>intents.message_content = True</code> tidak ada di kodenya. (2) Sakelar <strong>Message Content Intent</strong> yang bersesuaian mati di Discord Developer Portal → halaman Bot. Kode dan portalnya sama-sama harus mengizinkannya.'},
      {q: 'Perintah seperti $hello tidak melakukan apa-apa, padahal bot-nya membalas pesan biasa.', a: 'Mereka mencampur kedua class-nya. <code>Client</code> bereaksi pada <em>event</em> (<code>@client.event</code>); <code>Bot</code> bereaksi pada <em>command</em> (<code>@bot.command()</code>). M1L4 dibangun di atas perbandingan ini. Anda tidak bisa memakai keduanya dalam satu program, dan pesannya harus dimulai dengan <code>command_prefix</code> persis yang mereka tetapkan.'},
      {q: '“FileNotFoundError” saat bot meme mencoba mengirim gambar.', a: 'Masalah path, bukan masalah kode. Folder gambarnya harus berada di dalam folder proyek, nama file dan ekstensinya harus sama persis (termasuk besar-kecil huruf), dan <code>os.listdir(\'images\')</code> bersifat relatif terhadap tempat skripnya dijalankan. Minta mereka mencetak path-nya sebelum membukanya.'},
      {q: '“TypeError: \'&gt;\' not supported between instances of \'str\' and \'int\'”', a: '<code>input()</code> selalu mengembalikan <strong>string</strong>. Mereka butuh <code>int(input(...))</code>. Ini bug yang sama yang disembunyikan dalam latihan code review M8L3, jadi ketika muncul secara alami, sebutkan namanya — nanti mereka akan menemukannya sendiri di pelajaran review itu.'},
      {q: 'Halaman Flask tidak berubah apa pun yang mereka sunting.', a: 'Periksa tiga hal: <code>app.run(debug=True)</code> supaya server-nya memuat ulang, hard refresh di browser (Ctrl/Cmd+Shift+R) untuk mengalahkan cache, dan bahwa mereka sudah menyimpan file-nya. Pastikan juga mereka menyunting template yang memang sedang di-render Flask.'},
      {q: '“jinja2.exceptions.TemplateNotFound”', a: 'Flask hanya mencari di folder yang bernama persis <code>templates</code> (dan <code>static</code> untuk CSS dan gambar), yang letaknya bersebelahan dengan file <code>.py</code> utama. Salah ketik atau folder bertumpuk akan merusaknya. Minta mereka menunjukkan struktur file-nya, bukan pesan error-nya.'},
      {q: '“sqlite3.OperationalError: no such table”', a: 'File <code>.db</code>-nya dibuat sebelum class-nya ditambahkan, atau ada kolom yang ditambahkan setelahnya. Di kursus ini perbaikan yang diajarkan di M4L2 memang kasar tapi cukup untuk pemula: hapus file <code>.db</code> lama dan buat lagi dari terminal. Peringatkan dulu bahwa ini menghapus semua entri mereka.'},
      {q: 'Colab lupa model / gambar / file mereka.', a: 'Sesi Colab bersifat sementara — apa pun yang diunggah ke sesi itu hilang ketika sesinya di-restart, dan setiap cell harus dijalankan ulang secara berurutan. Untuk sesi yang lebih panjang, tunjukkan cara me-mount Google Drive (M6L1 menyarankan ini untuk kelompok yang lebih kuat). Ingatkan mereka menyimpan salinan notebook-nya di Drive mereka sendiri.'},
      {q: '“Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”', a: 'Bentrokan versi library dengan model Teachable Machine yang diekspor. Di proyek pipenv: <code>pipenv uninstall tensorflow</code> lalu <code>pipenv install tensorflow==2.15</code> (bekerja dengan Python 3.11). Di Colab, kursus ini mematok <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> dan meng-import <code>tf_keras</code>. Siapkan perintah-perintah yang sudah dipatok itu untuk ditempel — jangan mendebug versi secara langsung di kelas.'},
      {q: 'pyttsx3 tidak bersuara, atau speech_recognition melempar error di tengah pelajaran.', a: 'Periksa perangkat keluaran suaranya dan, yang penting, <strong>bisukan mikrofon Zoom Anda lalu jalankan ulang</strong> — M7L3 menandainya secara eksplisit, karena Zoom menahan mikrofonnya. Di sebagian sistem, indeks suara di <code>voices[0].id</code> tidak ada; minta mereka mencoba <code>voices[1]</code>.'},
      {q: 'Git menolak melakukan commit dan menyebut soal identitas.', a: 'Jalankan sekali per komputer, dengan data mereka sendiri: <code>git config --global user.email "kamu@example.com"</code> dan <code>git config --global user.name "Nama Kamu"</code>. Ada di catatan M2L3.'},
      {q: 'Model seorang siswa salah total tapi sangat percaya diri.', a: 'Sudah diduga, dan ini momen mengajar. Classifier hanya mengenal kelas yang pernah ditunjukkan kepadanya — ia akan memaksa input apa pun masuk ke salah satunya (M6L1). Perbaiki <strong>dataset</strong>-nya, bukan kodenya: lebih banyak gambar, lebih banyak variasi, dan satu gambar uji yang belum pernah dilihat model itu.'}
    ]
  },
  {
    cat: '🙋 Momen sulit — apa yang sebaiknya Anda katakan',
    items: [
      {q: 'Seorang siswa menanyakan sesuatu yang benar-benar tidak saya ketahui.', a: 'Andalkan <strong>“Pertanyaan bagus, aku belum yakin — ayo kita cari tahu. Kita cari di mana ya?”</strong> lalu benar-benar lakukan itu di layar. Ini pelajaran M1L4 yang terjadi secara langsung: tidak ada yang hafal sebuah library di luar kepala, dan menemukan jawabannya <em>itulah</em> keterampilan profesionalnya. Kalau Anda sedang di tengah sprint dan waktunya mepet, parkir dulu: “Aku mau menjawab itu dengan benar — nanti malam aku balas di chat grup.” Lalu benar-benar tindak lanjuti, tanpa kecuali. Satu-satunya jawaban yang merugikan Anda adalah tebakan yang diucapkan penuh percaya diri, karena siswa akan mengeceknya saat pelajaran berlangsung.'},
      {q: 'Bagaimana cara mengatakan “saya tidak tahu” tanpa kehilangan wibawa?', a: 'Katakan singkat lalu langsung bergerak — kalimat yang berhasil adalah “Aku nggak tahu, ayo kita cari tahu,” bukan “maaf, aku memang kurang bisa soal ini.” Wibawa Anda di sini berasal dari menjalankan pelajaran dengan baik dan tahu ke mana harus mencari, bukan dari serba tahu. Latih kalimat itu dengan suara keras beberapa kali sebelum pelajaran pertama Anda, supaya keluarnya terdengar biasa saja, bukan minta maaf.'},
      {q: 'Seorang siswa jelas lebih tahu soal sesuatu daripada saya.', a: 'Manfaatkan. Kursus ini secara eksplisit meminta Anda menyerahkan layar kepada siswa yang kuat untuk memimpin pemasangan, menjelaskan sebuah solusi, atau menjalankan master class kecil. Katakan terbuka — “kamu lebih jago dariku soal ini, ayo tunjukkan ke kita” — dan pujilah <em>penjelasannya</em>. Tutor yang bisa melakukan itu terbaca percaya diri, bukan lemah. Yang tetap Anda pegang adalah pelajarannya: ritmenya, strukturnya, dan memastikan semua orang lain tetap mengikuti.'},
      {q: 'Kode saya sendiri rusak saat saya LiveCoding di depan semua orang.', a: 'Ini hadiah, dan metodenya memang dibuat untuk itu — LiveCoding secara eksplisit menyarankan membuat kesalahan <em>dengan sengaja</em>. Katakan “oke, ayo baca apa yang sedang dia beritahukan ke kita” lalu debug dengan suara keras. Siswa belajar lebih banyak dari menonton Anda mendiagnosis error sungguhan dengan tenang daripada dari menonton pengetikan tanpa cela, dan itu menormalkan error sebagai hal biasa, bukan hal memalukan.'},
      {q: 'Waktu saya habis dan tahapannya belum selesai.', a: 'Lindungi bentuknya, korbankan cakupannya. Tetap lanjut ke retrospektif atau refleksi, dan katakan terus terang apa yang belum tercapai dan kapan Anda akan melanjutkannya. Jangan pernah memotong tahap refleksi demi menyelesaikan sebuah tugas — refleksi adalah tempat pelajarannya mengendap, dan tugas yang belum selesai adalah hasil sprint yang normal.'},
      {q: 'Seorang siswa bilang proyeknya nggak ada gunanya atau membosankan.', a: 'Beralihlah ke pertanyaan tentang audiens alih-alih membela tugasnya: “siapa yang benar-benar bakal pakai ini, dan apa yang bikin punyamu beda?” Setiap proyek di kursus ini punya bingkai dunia nyata dan versi terbuka, jadi “bikin ini menyelesaikan masalahmu untuk orang-orangmu” selalu tersedia. Otonomi menarik kembali remaja yang bosan jauh lebih cepat daripada pembelaan.'},
      {q: 'Seorang siswa tidak mengerjakan PR dan jadi diam saja.', a: 'Rencana pelajarannya tegas: tetap libatkan mereka, dan jangan bersikap negatif. Tanyakan apa yang mereka <em>pikirkan</em>, bukan apa yang mereka selesaikan. M1L3 bahkan memberi mereka kalimat penyelamat muka — “PR-ku dimakan anjing” — supaya mereka bisa melewatkan giliran tanpa malu dan tetap berada di ruangan.'},
      {q: 'Tidak ada yang menjawab ketika saya bertanya ke seluruh kelompok.', a: 'Pertanyaannya hampir pasti terlalu besar. Perkecil sampai bisa dijawab dalam beberapa kata: bukan “bagaimana kita menyelesaikan ini?” tapi “variabel ini harus bertipe apa?” Rencana pelajarannya terus-menerus mencontohkan pertanyaan sempit. Kesunyian biasanya soal ukuran pertanyaan, bukan soal keengganan.'}
    ]
  },
  {
    cat: '🚀 Ketika seorang siswa lebih maju dari kelas lainnya',
    items: [
      {q: 'Seorang siswa menyelesaikan tugas utama dalam sepuluh menit.', a: 'Setiap pelajaran di kursus ini menyertakan <strong>tugas tambahan</strong> (ditandai ⭐️ atau “Add.”) justru untuk ini. Pakai itu dulu sebelum mengarang sendiri: tugas API di M2L1, magic command di M5L1, ekstensi crop-with-OpenCV di M6L3. Semuanya memperdalam konsep hari ini alih-alih berlari mendahului kelompoknya.'},
      {q: 'Bagaimana menjaga siswa yang cepat tetap terlibat tanpa menelantarkan yang lain?', a: 'Beri mereka peran. Kursus ini berkali-kali menyarankan agar siswa yang kuat <strong>membagikan layarnya dan memimpin pemasangan atau live coding</strong> (M3L1, M6L3, M7L1). Menjelaskan sebuah solusi memperkuat pemahaman mereka, membuat mereka sibuk secara bermakna, dan memberi Anda waktu untuk siswa yang macet. Pujilah penjelasannya, bukan kecepatannya menyelesaikan.'},
      {q: 'Bolehkah saya membiarkan siswa yang mahir melompat ke materi pelajaran berikutnya?', a: 'Utamakan kedalaman daripada kecepatan — melompat membuat kelompoknya tidak sinkron dan menciptakan lubang. Arahkan mereka ke <strong>dokumentasi library</strong> saja: M1L4 ada justru untuk mengajarkan bahwa membaca dokumentasi dan mengadaptasi contohnya <em>itulah</em> keterampilan profesionalnya. “Temukan satu perintah di dokumentasi yang belum dipakai siapa pun lalu tambahkan” lebih baik daripada “mulai pelajaran enam.”'},
      {q: 'Seorang siswa bilang proyeknya membosankan / terlalu gampang.', a: 'Berikan versi terbukanya. Setiap proyek di kursus ini punya bingkai dunia nyata — kata sandi, pemilahan sampah, kecanduan teknologi, penggunaan energi, keselamatan jalan, perubahan iklim — jadi “bikin ini menyelesaikan masalahmu untuk audiensmu” selalu tersedia. Otonomi menarik kembali siswa yang cepat selesai jauh lebih baik daripada latihan tambahan.'},
      {q: 'Satu siswa mendominasi diskusi dan menjawab semuanya.', a: 'Pakai struktur yang sudah ada di rencana pelajarannya: permainan “bola” di M1L3 di mana pembicara saat ini memilih pembicara berikutnya, permainan ahli “semua lawan satu” di M6L1, dan aturan bahwa siswa yang sama tidak boleh menjawab dua kali berturut-turut dalam permainan tic-tac-toe M5L4. Biarkan formatnya yang menyebarkan giliran bicara supaya Anda tidak perlu melakukannya sendiri.'}
    ]
  },
  {
    cat: '🐢 Ketika seorang siswa tertinggal',
    items: [
      {q: 'Seorang siswa macet dan mulai frustrasi.', a: '<strong>Temukan dulu satu hal yang menghambat</strong> — biasanya cuma satu salah ketik, interpreter yang belum dipilih, atau intent yang hilang, bukan salah paham terhadap seluruh pelajaran. Baca pesan error-nya bersama-sama, perbaiki satu hal itu, dan berikan mereka kemenangan yang terlihat. Momentum lebih penting daripada menutup semua materi.'},
      {q: 'Seorang siswa tidak bisa mengikuti ritme pembangunannya.', a: '<strong>Kurangi cakupannya.</strong> Versi sederhana yang selesai lebih baik daripada versi ambisius yang tidak selesai — catatan M10L3 mengatakan persis ini tentang proyek kelulusan. Minta mereka memantapkan intinya (bot-nya membalas, halamannya termuat, entri-nya tersimpan) dan perlakukan tambahannya sebagai opsional. Kalau ada proyek awal yang tersedia (Basic Bot milik sekolah di M7L1, ZIP dan branch repository di M4), berikan itu kepada mereka daripada membiarkan penyiapan memakan waktu pelajarannya.'},
      {q: 'Environment-nya rusak dan pelajarannya sudah mau dimulai.', a: 'Jangan biarkan satu komputer menyandera kelas. Mulailah dengan siswa yang sudah siap, minta technical assistant membantu sisanya, dan berikan siswa yang terhambat sebuah cadangan yang berfungsi — Pipfile dari repository solusi (M7L1), dataset bersama (M6L2), atau CSV dari pelajaran sebelumnya (M5L3). Lalu perbaiki environment-nya saat waktu praktik atau setelah pelajaran.'},
      {q: 'Seorang siswa melewatkan pelajaran sebelumnya dan kebingungan.', a: 'Jembatani lewat tahap pengulangan alih-alih menghentikan kelompoknya: rangkuman dua menit tentang apa yang dibutuhkan hari ini saja, ditambah tautan ke kondisi proyek yang mereka lewatkan (branch repository, ZIP-nya, notebook sebelumnya). Jadikan mengejar ketertinggalan sebagai PR ringan. Sebagian besar modul juga dibuka dengan kuis yang bisa Anda pakai sebagai rangkumannya.'},
      {q: 'Seorang siswa terus-menerus melakukan kesalahan yang sama.', a: 'Jangan sekadar memperbaikinya — <strong>sebutkan polanya</strong> dan beri mereka kalimat untuk memeriksa diri sendiri: “<code>input()</code> memberiku teks, jadi bungkus dengan <code>int()</code>”, “token-nya tidak pernah keluar dari komputerku”, “kalau pip berhasil tapi import-nya gagal, cek interpreter-nya.” Lalu biarkan <em>mereka</em> yang menemukannya lain kali. Refleks debugging bernilai lebih daripada perbaikan tunggal mana pun.'},
      {q: 'Seorang siswa tidak mengerjakan PR dan jadi diam saja.', a: 'Rencana pelajarannya tegas soal ini: <strong>tetap libatkan mereka dan jangan bersikap negatif.</strong> Tanyakan apa yang mereka pikirkan, bukan apa yang mereka selesaikan. M1L3 bahkan memberi mereka kalimat penyelamat muka (“PR-ku dimakan anjing”) supaya mereka bisa melewatkan giliran tanpa malu dan tetap berada di ruangan.'},
      {q: 'Seorang siswa patah semangat dan ingin menyerah.', a: 'Mulailah dengan pujian spesifik atas usahanya — “kamu nemu bug itu sendiri, itu persis yang dilakukan programmer” — lalu perkecil langkah berikutnya sampai keberhasilannya terjamin. Catatan metakognisi M2L1 menyampaikan poin yang sama: reaksi frustrasi adalah <em>informasi yang sah</em> tentang strategi yang mereka pilih, bukan bukti bahwa mereka tidak bisa coding. Katakan itu dengan lantang.'}
    ]
  }
],
/* NEXT-ID-BASE */
modules: [
  {
    id:1, emoji:'🚀', color:'#3776AB',
    title:'Pengenalan & Gambaran Umum Kursus',
    desc:'Apa itu Python Pro, proyek yang dihasilkan siswa, metode pengajaran di baliknya, seperti apa keberhasilannya, dan bagaimana pelatihan ini sendiri bekerja.',
    obj:'Pahami gambaran utuhnya sebelum Anda mengajarkan bagian mana pun: apa yang ingin dicapai kursus Python Pro, sepuluh modul dan empat puluh pelajarannya, proyek-proyeknya dan kelompok usianya, metode pengajaran yang menjadi fondasinya, seperti apa tutor yang berhasil dan siswa yang berhasil, serta bagaimana program pelatihan ini disusun.',
    prep:'~45 menit. Hanya membaca — kerja praktiknya dimulai di Modul 2.',
    sections:[
      {t:'🐍 Kursus ini sebenarnya apa', cards:[
        {type:'text', h:'Jalur Python tingkat lanjut, dibangun di sekitar proyek nyata', b:'Python Pro adalah <strong>kursus Python tingkat lanjut</strong> dari Kodland untuk <strong>usia 13–17 tahun</strong> — kelanjutan dari Python Basic. Siswa tidak duduk mendengarkan teori: sejak pelajaran pertama mereka membangun dan mempublikasikan program yang benar-benar berjalan. Sepanjang kursus mereka mengambil tiga identitas profesional secara bergantian — <strong>programmer otomasi</strong>, <strong>web developer</strong>, dan <strong>programmer AI</strong> — sehingga di akhir mereka bisa memilih sendiri arah dalam pengembangan Python.'},
        {type:'hi', h:'Sepuluh modul, empat puluh pelajaran, usia 13–17', b:'Kursus ini terdiri dari <strong>10 modul dengan 4 pelajaran masing-masing — 40 pelajaran</strong>, untuk siswa berusia <strong>13 sampai 17 tahun</strong>. Pelajaran kelompok berlangsung <strong>90 menit</strong>; pelajaran yang sama juga tersedia sebagai rencana <strong>individu 50 menit</strong>. Modul 1–2 membangun bot dan front-end, 3–4 membangun aplikasi web dengan Flask dan basis data, 5–6 adalah blok AI, 7 mengintegrasikan AI ke proyek-proyek sebelumnya, 8–9 adalah keterampilan rekayasa dan teknologi suara, dan 10 adalah hackathon yang bermuara pada proyek kelulusan.'},
        {type:'text', h:'Alat sungguhan, sejak pelajaran pertama', b:'Siswa meninggalkan sandbox browser hampir seketika. Mereka bekerja di <strong>VS Code</strong>, memasang library dengan <strong>pip</strong> dan <strong>pipenv</strong>, mempublikasikan ke <strong>GitHub</strong>, mendaftarkan aplikasi di <strong>Discord Developer Portal</strong>, menjalankan notebook di <strong>Google Colab</strong>, melatih model dengan <strong>Google Teachable Machine</strong>, dan melakukan deploy ke <strong>PythonAnywhere</strong>. Kelancaran Anda sendiri dengan rangkaian alat inilah tujuan pelatihan ini.'},
        {type:'qa', h:'Apa yang benar-benar mereka hasilkan', items:[
          {k:'Blok otomasi', v:'Kamus bahasa gaul, generator kata sandi yang kuat, dan bot Discord — bot meme yang membaca sebuah folder, dan bot yang membantu pengguna mengurangi sampah.'},
          {k:'Blok web', v:'Halaman tentang kecanduan teknologi, situs fakta berbasis Flask, kalkulator energi rumah pintar, generator meme, “Buku Harian Programmer” dengan basis data dan login, serta situs portofolio yang sudah di-deploy.'},
          {k:'Blok AI', v:'Skrip gambar untuk mengganti latar belakang, scraper berita, peringkas NLP, classifier gambar terlatih, karya untuk lomba bedakan-gambar-asli-atau-AI, dan detektor objek untuk keselamatan jalan.'},
          {k:'Integrasi & keterampilan', v:'Bot Discord yang menjalankan model computer vision buatan mereka sendiri, penerjemah suara, bot cuaca yang bisa berbicara, dan kode bersih hasil refactoring.'},
          {k:'Penutup', v:'Proyek kelulusan pilihan sendiri, dibangun ala hackathon, diuji dengan checklist lalu dipresentasikan.'}
        ]}
      ]},
      {t:'🧭 Filosofi pengajarannya', cards:[
        {type:'good', txt:'Aturan yang muncul di hampir setiap rencana pelajaran: <strong>jangan menuliskan kodenya untuk siswa, dan jangan memberikan jawabannya.</strong> Ajukan pertanyaan penuntun, biarkan mereka berpikir dengan suara keras, biarkan mereka saling membantu. Tugas Anda adalah melepaskan hambatan, bukan menyelesaikan.'},
        {type:'text', h:'Setiap modul dimulai dari masalah nyata', b:'Proyeknya tidak pernah sekadar “buat sebuah aplikasi.” Semuanya dibingkai sebagai masalah yang layak diselesaikan: <strong>serangan hacker</strong> (generator kata sandi), <strong>polusi dan sampah</strong> (bot ramah lingkungan), <strong>kecanduan teknologi</strong> (halaman web), <strong>krisis energi</strong> (kalkulatornya), <strong>keselamatan jalan</strong> (detektornya), <strong>perubahan iklim</strong> (hackathon-nya). Bukalah dengan masalahnya, bukan sintaksnya — kodenya jadi sarana untuk mencapai tujuan.'},
        {type:'text', h:'Bereksperimen dulu, baru menjelaskan', b:'Beberapa pelajaran sengaja memberikan kode kepada siswa <em>sebelum</em> penjelasannya dan meminta mereka menebak apa yang dilakukannya — bot Discord di M1L3, template Jinja di M3L2, notebook-notebook di M5. Tahanlah keinginan menjelaskan lebih awal. Lima menit “ubah sesuatu lalu jalankan lagi” menghasilkan pertanyaan yang lebih baik daripada ceramah apa pun.'},
        {type:'hi', h:'Refleksi adalah sebuah tahap, bukan pelengkap', b:'Setiap pelajaran diakhiri dengan tahap <strong>refleksi 10–15 menit</strong>: apa yang kita capai, apa yang paling sulit, apa yang ingin kamu perbaiki, ditambah PR. Ini masuk jadwal karena di sinilah pembelajarannya mengendap. Modul 15 pelatihan ini membahas delapan teknik refleksi yang disediakan kursus supaya Anda bisa memutarnya bergantian.'},
        {type:'tip', txt:'Motivasi adalah bagian dari pekerjaan. Kursus ini meminta Anda memuji usaha yang spesifik, membagikan video motivasi di chat grup setelah pelajaran-pelajaran penting, dan merayakan akhir setiap modul dengan menghubungkannya ke karier nyata. Sangat sedikit siswa yang menuntaskan kursus tingkat lanjut — katakan itu, dan sungguh-sungguhlah.'}
      ]},
      {t:'🎯 Seperti apa keberhasilan itu', cards:[
        {type:'twocol', left:{h:'✅ Tutor yang berhasil', items:['Cukup lancar dengan rangkaian alatnya sehingga bisa fokus penuh pada siswa','Membuka dengan masalahnya, bukan sintaksnya','Tidak pernah menuliskan kode siswa untuk mereka','Menjaga waktu dan lanjut ketika sebuah tahap kelebihan waktu','Membaca pesan error dengan suara keras alih-alih memperbaiki diam-diam','Menegakkan aturan token/rahasia tanpa kecuali','Menyesuaikan cakupan untuk siswa yang lebih maju atau tertinggal']}, right:{h:'🌟 Siswa yang berhasil', items:['Menghasilkan proyek yang berjalan dan mempublikasikannya ke GitHub','Bisa menjelaskan apa yang dilakukan kodenya, bukan sekadar menjalankannya','Menemukan jawaban di dokumentasi tanpa disuruh','Men-debug masalah sederhana dengan kemandirian yang terus bertambah','Memikirkan proyeknya ini untuk siapa','Memberi dan menerima masukan kode yang membangun','Mempresentasikan proyek kelulusan yang selesai dan mereka banggakan']}},
        {type:'good', txt:'Keberhasilan <strong>bukan</strong> “semua materi sudah tersampaikan.” Keberhasilan adalah siswa yang percaya diri dengan proyek selesai yang mereka pahami dan bisa mereka bicarakan. Kursus ini menyatakannya terang-terangan tentang proyek kelulusan: doronglah mereka menyelesaikannya tanpa membuatnya terlalu rumit, dan simpan perbaikannya untuk nanti.'}
      ]},
      {t:'🗂️ Bagaimana pelatihan ini disusun', cards:[
        {type:'text', h:'Modulnya, secara berurutan', b:'Pelatihan ini memiliki <strong>16 modul</strong> dalam tiga bagian. <strong>Persiapan (1–4):</strong> gambaran umum ini, konstruksi Python yang dipakai kursus tapi tidak pernah dijelaskannya, cara sebuah pelajaran berjalan, dan lab penyiapan praktik. <strong>Kursusnya sendiri (5–14):</strong> satu modul untuk tiap modul kursus, berurutan — Modul 5 pelatihan membahas Modul 1 kursus, dan seterusnya — sehingga Anda bisa menemukan pelajaran mana pun seketika. <strong>Penyampaian dan penilaian (15–16):</strong> keterampilan mengajar yang lebih dalam, lalu sebuah pelajaran contoh untuk ditonton. Setiap modul dibuka dengan ringkasan singkat <strong>gambaran umum → mengapa ini penting → apa yang dibangun siswa → apa yang harus Anda kuasai 100%</strong>, lalu masuk ke detailnya.'},
        {type:'hi', h:'Aturan 70% & tes akhir', b:'Anda harus menuntaskan modul-modulnya <strong>secara berurutan</strong>. Masing-masing punya tes singkat, dan Anda butuh <strong>70%+ untuk membuka modul berikutnya</strong> — tidak ada jalan pintas. Setelah semua modul selesai, <strong>Digital Skill Test (DST)</strong> terbuka. Urutan pertanyaan dan urutan jawaban diacak setiap kali dicoba, jadi mengulang tes berarti menguasai materinya, bukan mengingat posisinya.'},
        {type:'warn', txt:'Tesnya hanya memeriksa bahwa Anda sudah <strong>membaca dan memahami</strong> sebuah modul. Tes tidak bisa memeriksa apakah Anda bisa <em>melakukannya</em> — dan untuk kursus ini keduanya bukan hal yang sama. Itulah gunanya checklist <strong>✋ Sebelum Anda mengajarkan ini</strong> di bagian atas setiap modul: daftar hal-hal yang harus Anda bangun dan jalankan sendiri. Centanglah dengan jujur. Lulus tes modul basis data tanpa pernah membangun aplikasi basis datanya adalah persis situasi yang berantakan di depan kelas.'},
        {type:'tip', txt:'Dua hal selalu tersedia dari bagian atas layar mana pun: <strong>❓ FAQ</strong> (glosarium, error yang dihadapi siswa, aturan keamanan, apa yang dikatakan saat Anda tidak tahu jawabannya, dan apa yang dilakukan ketika seorang siswa lebih maju atau tertinggal) dan <strong>tombol tema</strong>. Pakailah FAQ sebagai rujukan cepat saat Anda bersiap.'},
        {type:'text', h:'Kira-kira berapa lama ini memakan waktu', b:'Setiap modul mencantumkan <strong>perkiraan persiapan</strong> di bagian atas, mencakup bacaannya plus kerja praktiknya. Totalnya pelatihan ini sekitar <strong>30–40 jam</strong> kalau Anda mengerjakan checklist praktiknya dengan benar, dan kerja praktik itulah sebagian besarnya. Modul terberatnya adalah lab penyiapan, Flask, dan basis data. Begitu Anda mulai mengajar, siapkan sekitar <strong>1–2 jam persiapan per pelajaran</strong>, lebih untuk pelajaran LiveCoding dan pelajaran basis data di modul 4, lebih sedikit untuk yang berbasis diskusi.'}
      ]}
    ],
    quiz:[
      {q:'Bagaimana struktur kursus Python Pro?', opts:['10 modul dengan 4 pelajaran masing-masing — 40 pelajaran, 90 menit untuk pelajaran kelompok','4 modul dengan 10 pelajaran masing-masing, 45 menit setiap pelajaran','Satu blok pelajaran berkelanjutan tanpa modul','20 pelajaran berdurasi 60 menit, semuanya individu'], c:0, fb:'Python Pro adalah 10 modul × 4 pelajaran = 40 pelajaran. Pelajaran kelompok berlangsung 90 menit; masing-masing punya varian pelajaran individu 50 menit.'},
      {q:'Tiga peran profesional apa yang dijalani siswa dalam kursus ini?', opts:['Programmer otomasi, web developer, dan programmer AI','Perancang game, animator, dan pemodel 3D','Petugas entri data, tester, dan manajer proyek','Front-end developer, DevOps engineer, dan analis keamanan'], c:0, fb:'M1L1 membingkai seluruh kursus di sekitar tiga peran — programmer otomasi, web developer, dan programmer AI — supaya siswa bisa memilih arah di akhir.'},
      {q:'Seorang siswa macet pada generator kata sandi. Apa yang diharapkan kursus ini dari Anda?', opts:['Ajukan pertanyaan penuntun dan biarkan mereka serta temannya menalarkannya — jangan tuliskan kodenya untuk mereka','Ketikkan solusinya ke editor mereka supaya kelasnya tetap sesuai jadwal','Kirimkan kode jadinya di chat','Lewati tugasnya dan lanjut ke tahap berikutnya'], c:0, fb:'“Jangan menuliskan kodenya untuk siswa, dan jangan memberikan jawabannya” diulang di sepanjang rencana pelajarannya. Anda melepaskan hambatan; mereka yang menyelesaikan.'},
      {q:'Mengapa setiap proyek diperkenalkan dengan masalah dunia nyata seperti serangan hacker atau pemilahan sampah?', opts:['Supaya kodenya menjadi sarana untuk menyelesaikan sesuatu yang siswa pedulikan, bukan sekadar latihan','Karena platform-nya mewajibkan tema untuk setiap tugas','Untuk mengisi waktu sebelum tahap praktik','Karena masalah-masalah itulah yang dinilai dalam tes'], c:0, fb:'Setiap modul dibuka dengan masalah yang sungguhan — kata sandi, polusi, kecanduan teknologi, energi, keselamatan jalan, perubahan iklim — supaya siswa membangun sesuatu yang berarti bagi mereka.'},
      {q:'Di mana letak tahap refleksi dalam sebuah pelajaran Python Pro?', opts:['Ini tahap terjadwal selama 10–15 menit di akhir setiap pelajaran','Hanya terjadi di akhir setiap modul','Bersifat opsional dan biasanya dilewati','Menggantikan tahap praktik ketika waktunya mepet'], c:0, fb:'Setiap pelajaran berakhir dengan tahap refleksi dan PR yang terjadwal — di sinilah pembelajarannya mengendap, bukan tambahan opsional.'},
      {q:'Bagaimana seorang kandidat tutor sampai ke Digital Skill Test dalam pelatihan ini?', opts:['Dengan menyelesaikan setiap modul secara berurutan dan meraih 70%+ pada tiap tes — DST baru terbuka setelah itu','Dengan menekan tombol “lompat ke DST” yang tersedia untuk semua orang','Dengan lulus modul pertama','DST terbuka sejak awal'], c:0, fb:'Modulnya berurutan dan masing-masing butuh 70% untuk membuka yang berikutnya. DST baru terbuka setelah semua modul selesai.'},
      {q:'Apa yang didefinisikan kursus ini sebagai keberhasilan seorang siswa?', opts:['Siswa yang percaya diri dengan proyek selesai yang mereka pahami dan bisa mereka presentasikan','Siswa yang menuntaskan setiap tugas terlepas dari apa yang berhasil','Pembuat kode tercepat dalam kelompoknya','Siswa yang menghafal paling banyak perintah library'], c:0, fb:'Proyek yang selesai, dipahami, dan bisa dipresentasikan lebih baik daripada proyek ambisius yang tidak selesai — catatan proyek kelulusannya menyatakan persis ini.'}
    ]
  },
  {
    id:2, emoji:'🐍', color:'#4A9BD8',
    title:'Python yang Anda Butuhkan Lebih Dulu',
    desc:'Python yang muncul di sepanjang kursus tapi tidak pernah dijelaskan di dalamnya: decorator, async/await, class dan self, dunder method, lambda, type hint, dan *args — plus versi bahasa sederhananya untuk siswa.',
    obj:'Tutup jarak antara “saya tahu dasar-dasar Python” dan “saya bisa menjelaskan setiap baris kode kursus ini.” Setiap konstruksi di sini muncul dalam pelajaran yang akan Anda ajarkan, dan kurikulumnya tidak berhenti untuk menjelaskan satu pun. Anda butuh dua hal untuk masing-masing: pemahaman yang cukup kokoh sehingga Anda tidak sedang menggertak, dan satu kalimat yang bisa Anda ucapkan kepada anak 14 tahun.',
    prep:'~2–3 jam. Ketik sendiri setiap contohnya, jangan sekadar dibaca.',
    practical:{
      intro:'Modul ini adalah satu-satunya tempat di mana membaca saja benar-benar tidak cukup — konstruksi ini baru terasa masuk akal setelah Anda menjalankannya. Sebelum tes, kerjakan semua ini di sebuah file coretan:',
      items:[
        'Menulis sendiri sebuah decorator, dari nol, dan melihatnya membungkus sebuah fungsi',
        'Menulis dan menjalankan fungsi <code>async def</code> dengan <code>await asyncio.sleep(1)</code> dan melihat mengapa event loop-nya penting',
        'Mendefinisikan sebuah class dengan <code>__init__</code> dan <code>self</code>, membuat dua object darinya, dan memberi keduanya nilai yang berbeda',
        'Membuat satu class mewarisi class lain dan memanggil method induknya',
        'Menambahkan <code>__repr__</code> dan melihat apa yang berubah ketika Anda mencetak object-nya',
        'Menulis ulang perulangan <code>for</code> kecil menjadi list comprehension, dan fungsi dua baris menjadi <code>lambda</code>',
        'Menjalankan fungsi yang menerima <code>*args</code> dan mencetak apa sebenarnya isi <code>args</code>'
      ]
    },
    sections:[
      {t:'🧭 Mengapa modul ini ada', cards:[
        {type:'brief',
          overview:'Tujuh konstruksi Python yang terus-menerus muncul dalam kode kursus dan tidak pernah dijelaskan olehnya: <strong>decorator</strong> (<code>@bot.command()</code>, <code>@app.route()</code>), <strong>async/await</strong>, <strong>class</strong> dengan <code>self</code> dan inheritance, <strong>dunder method</strong>, <strong>lambda</strong>, <strong>type hint</strong>, dan <strong>*args</strong>.',
          why:'Setiap pelajaran Discord memakai decorator dan <code>async</code>. Setiap pelajaran Flask memakai decorator. Modul basis data mendefinisikan class yang mewarisi. Seorang siswa akan bertanya “<code>@</code> itu buat apa?” di pelajaran kursus M1L3 — pelajaran ketiga dari seluruh kursus — dan “saya tidak tahu” adalah jawaban yang hanya bisa Anda berikan sekali sebelum kelompoknya berhenti menanyakan apa pun kepada Anda.',
          learn:'Tidak ada secara langsung — siswa tidak pernah diajari ini secara formal. Kurikulumnya secara terbuka menundanya: “Setiap library terdiri dari class. Kita akan membahas apa itu dan mengapa kita membutuhkannya di pelajaran lain.” Dalam praktiknya, <em>Andalah</em> penjelasannya.',
          confident:'Apa yang dilakukan sebuah decorator terhadap fungsi di bawahnya; mengapa kode bot butuh <code>async</code>/<code>await</code>; <code>self</code> merujuk pada apa; apa arti tanda kurung pada <code>class Card(db.Model)</code>; serta satu kalimat versi siswa untuk masing-masingnya.'
        },
        {type:'good', txt:'Anda tidak perlu menguasai ini sampai standar profesional. Anda perlu tidak menggertak. Standarnya adalah: Anda bisa menjelaskannya secara sederhana, Anda bisa menjawab satu pertanyaan lanjutan, dan Anda tahu di mana batas jujur pengetahuan Anda.'}
      ]},
      {t:'🎀 Decorator — simbol @', cards:[
        {type:'text', h:'Sebenarnya apa itu', b:'<strong>Decorator</strong> adalah fungsi yang mengambil fungsi lain, membungkus perilaku tambahan di sekelilingnya, lalu mengembalikannya. Baris <code>@</code> adalah singkatannya: menulis <code>@my_decorator</code> di atas <code>def greet()</code> berarti “ambil <code>greet</code>, lewatkan melalui <code>my_decorator</code>, dan biarkan hasilnya menjadi arti <code>greet</code> yang baru.”'},
        {type:'code', lbl:'decorator yang bisa Anda tulis sendiri dalam sepuluh baris', code:`<span class="ck">def</span> <span class="cf">shout</span>(func):              <span class="cc"># menerima sebuah fungsi...</span>
    <span class="ck">def</span> <span class="cf">wrapper</span>():
        result = <span class="cf">func</span>()          <span class="cc"># ...menjalankan yang asli...</span>
        <span class="ck">return</span> result.<span class="cf">upper</span>() + <span class="cs">"!!!"</span>   <span class="cc"># ...lalu menambahinya</span>
    <span class="ck">return</span> wrapper             <span class="cc"># ...lalu mengembalikan versi barunya</span>

<span class="cd">@shout</span>
<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="ck">return</span> <span class="cs">"hello"</span>

<span class="cf">print</span>(<span class="cf">greet</span>())               <span class="cc"># HELLO!!!</span>

<span class="cc"># @shout di atas greet() persis sama dengan menulis:</span>
<span class="cc">#   greet = shout(greet)</span>`},
        {type:'text', h:'Apa artinya bagi kode kursus ini', b:'Dalam kursus ini Anda tidak pernah menulis decorator — Anda hanya <em>memakai</em> yang disediakan library-nya. <code>@bot.command()</code> berarti “discord.py, tolong daftarkan fungsi di bawah ini sebagai command yang bisa diketik pengguna.” <code>@app.route("/")</code> berarti “Flask, tolong jalankan fungsi di bawah ini ketika ada yang mengunjungi alamat ini.” Dalam kedua kasus, decorator adalah cara <strong>fungsi Anda diserahkan kepada library</strong>, supaya library-nya bisa memanggilnya nanti ketika saatnya tiba. Anda tidak pernah memanggil fungsi-fungsi ini sendiri — justru itulah intinya, dan itulah bagian yang dirasa aneh oleh siswa.'},
        {type:'hi', h:'Kalimat untuk siswa', b:'“Baris <code>@</code> adalah label yang kamu tempelkan ke sebuah fungsi supaya library-nya tahu fungsi itu <em>untuk apa</em>. <code>@app.route("/")</code> adalah label yang bilang ‘jalankan yang ini kalau ada yang buka halaman utama.’ Kamu nggak pernah memanggilnya sendiri — Flask yang memanggilnya untukmu ketika ada yang berkunjung.” Untuk siswa yang lebih besar atau lebih tajam Anda bisa menambahkan: itu fungsi yang membungkus fungsi lain.'},
        {type:'warn', txt:'Satu perbedaan yang perlu Anda ketahui supaya tidak terlihat tidak konsisten: <code>@bot.event</code> tanpa tanda kurung, <code>@bot.command()</code> pakai tanda kurung. Keduanya benar sebagaimana ditulis dalam kode kursusnya. Yang bertanda kurung adalah <em>pabrik</em> decorator — ia bisa menerima opsi seperti <code>@bot.command(name="pw")</code>, jadi harus dipanggil dulu untuk menghasilkan decorator sesungguhnya. Kalau ada siswa bertanya, “yang itu bisa menerima pengaturan, jadi butuh tanda kurungnya sendiri” adalah jawaban yang benar dan cukup.'}
      ]},
      {t:'⏳ async dan await', cards:[
        {type:'text', h:'Masalah yang diselesaikannya', b:'Sebuah bot Discord menghabiskan hampir seluruh waktunya untuk <strong>menunggu</strong> — menunggu pesan, menunggu Discord mengonfirmasi pengiriman, menunggu API membalas. Penungguan Python biasa memblokir segalanya: sementara satu baris menunggu, tidak ada hal lain yang bisa terjadi, jadi bot-nya akan tuli selama membalas satu pesan. <code>async</code> memungkinkan sebuah fungsi berhenti sejenak di titik tunggu dan membiarkan pekerjaan lain berjalan sementara itu.'},
        {type:'qa', h:'Tiga kata itu, dalam bahasa sederhana', items:[
          {k:'async def', v:'Mendeklarasikan fungsi yang <em>diizinkan berhenti sejenak</em>. Memanggilnya tidak menjalankannya — ia menghasilkan sesuatu yang akan dijalankan oleh event loop.'},
          {k:'await', v:'“Berhenti di sini sampai yang ini selesai, dan biarkan hal lain terjadi sementara kita menunggu.” Anda hanya bisa memakainya di dalam <code>async def</code>.'},
          {k:'Event loop', v:'Pengelola yang menjaga semua fungsi yang sedang berhenti tetap bergerak. Dalam kursus ini, discord.py memulainya untuk Anda di dalam <code>bot.run(...)</code> — itulah sebabnya tidak ada yang perlu disiapkan.'}
        ]},
        {type:'code', lbl:'mengapa setiap command bot dalam kursus ini bentuknya begini', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">hello</span>(ctx):                <span class="cc"># boleh berhenti sejenak</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Hi!"</span>)            <span class="cc"># tunggu sampai Discord mengonfirmasi</span>
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Still here!"</span>)    <span class="cc"># lalu lanjut</span>

<span class="cc"># Lupa await dan tidak ada yang terkirim — Anda dapat peringatan tentang</span>
<span class="cc"># "coroutine was never awaited". Itu bug async nomor 1 yang dialami siswa.</span>`},
        {type:'warn', txt:'Kegagalan yang benar-benar akan dibuat siswa: menulis <code>ctx.send("Hi")</code> tanpa <code>await</code>. Tidak ada pesan yang muncul dan console menyebut sebuah coroutine yang tidak pernah di-await. Belajarlah mengenali pesan itu — artinya “kamu sudah membuat pekerjaannya tapi tidak pernah membiarkannya berjalan.” Perhatikan juga bahwa fungsi suara dan API dalam kursus ini <em>bukan</em> async, jadi sebuah command bot mencampur panggilan ber-await (Discord) dengan panggilan biasa (<code>speak()</code>, <code>requests.get()</code>).'},
        {type:'hi', h:'Kalimat untuk siswa', b:'“<code>async</code> artinya fungsi ini boleh menunggu tanpa membekukan seluruh bot, dan <code>await</code> menandai titik tempat dia menunggu. Bayangkan pelayan yang mencatat pesanan meja lain sementara dapurnya memasak — bukan berdiri diam sampai makanannya siap.”'},
        {type:'good', txt:'Ini batas jujur dari apa yang Anda butuhkan. Anda <strong>tidak</strong> perlu memahami coroutine, isi perut event loop, atau <code>asyncio.gather</code>. Kalau seorang siswa mendorong lebih jauh dari “dia menunggu tanpa membeku,” itu pertanyaan yang benar-benar tingkat lanjut — katakan begitu, katakan itu pertanyaan bagus, lalu cari tahu bersama-sama. Itu mencontohkan kebiasaan membaca dokumentasi dari M1L4 alih-alih menjatuhkan wibawa Anda.'}
      ]},
      {t:'🏗️ Class, self & inheritance', cards:[
        {type:'text', h:'Bagian yang diberikan kurikulumnya kepada Anda', b:'Kursus ini menyatakan: di Python semuanya adalah object, dan class adalah <strong>cetak biru</strong> tempat object dibuat — ditambah pengamatan bagus bahwa <strong>Flask itu sebuah class</strong> yang selama ini mereka pakai. Pembingkaian itu benar, dan di situlah pelajaran kursus M4L1 berhenti. Yang berikut ini adalah apa yang Anda butuhkan di luar itu.'},
        {type:'code', lbl:'sebuah class, sebuah object, dan apa itu self', code:`<span class="ck">class</span> <span class="ct2">Dog</span>:
    <span class="ck">def</span> <span class="cf">__init__</span>(self, name):    <span class="cc"># berjalan saat Anda membuat satu</span>
        self.name = name         <span class="cc"># simpan PADA object INI</span>

    <span class="ck">def</span> <span class="cf">speak</span>(self):
        <span class="ck">return</span> <span class="cs">f"{self.name} says woof"</span>

rex = <span class="ct2">Dog</span>(<span class="cs">"Rex"</span>)               <span class="cc"># dua object...</span>
bella = <span class="ct2">Dog</span>(<span class="cs">"Bella"</span>)            <span class="cc"># ...dari satu cetak biru</span>

<span class="cf">print</span>(rex.<span class="cf">speak</span>())             <span class="cc"># Rex says woof</span>
<span class="cf">print</span>(bella.<span class="cf">speak</span>())           <span class="cc"># Bella says woof</span>`},
        {type:'text', h:'self, dalam satu gagasan', b:'<code>self</code> adalah <strong>“object tertentu yang padanya method ini dipanggil.”</strong> Satu cetak biru, banyak object, masing-masing dengan datanya sendiri — <code>self</code> adalah cara sebuah method tahu object mana yang sedang ditanganinya. Ia adalah parameter pertama setiap method dan Python mengisinya untuk Anda, itulah sebabnya Anda menulis <code>rex.speak()</code> dengan tanda kurung kosong tapi <code>def speak(self)</code> di dalam class-nya.'},
        {type:'text', h:'Inheritance — tanda kurung pada class Card(db.Model)', b:'Menulis <code>class Card(db.Model)</code> berarti “<strong>Card adalah sejenis db.Model dan mendapat semua kemampuan db.Model, secara cuma-cuma</strong>.” Itulah sebabnya <code>Card</code> tiba-tiba punya <code>.query</code>, dan mengapa SQLAlchemy tahu cara mengubahnya menjadi tabel basis data — tidak satu pun dari itu ditulis siapa pun dalam pelajarannya. Polanya sama di mana-mana: <code>class User(db.Model)</code> di M4L2 mewarisi kemampuan yang sama.'},
        {type:'hi', h:'Kalimat-kalimat untuk siswa', b:'Untuk class: “Class itu cetakan kue dan object itu kuenya — satu bentuk, banyak kue, masing-masing dengan hiasannya sendiri.” Untuk <code>self</code>: “<code>self</code> artinya <em>yang ini</em> — itu cara resepnya tahu kue mana yang sedang dibicarakan.” Untuk inheritance: “Tanda kurungnya berarti ‘ini sejenis itu, dan mewarisi semua yang bisa dilakukannya’ — seperti pudel yang sejenis anjing dan sudah bisa menggonggong tanpa diajari.”'},
        {type:'tip', txt:'Anda tidak akan mengajarkan pelajaran OOP formal — kurikulumnya sengaja menjaga class tetap ringan dan praktis. Tugas Anda lebih sempit: ketika seorang siswa bertanya mengapa <code>class Card(db.Model)</code> ada isinya di dalam kurung, atau apa itu <code>self</code>, Anda punya jawaban yang sungguhan. Dua pertanyaan itulah yang benar-benar ditanyakan.'}
      ]},
      {t:'✨ Dunder method, lambda, type hint & *args', cards:[
        {type:'qa', h:'Dunder (“double underscore”) method', items:[
          {k:'Apa itu', v:'Method dengan dua garis bawah di kedua sisinya. Python memanggilnya <em>untuk</em> Anda pada momen tertentu, bukan Anda yang memanggilnya dengan nama.'},
          {k:'__init__', v:'Berjalan ketika sebuah object dibuat. “Siapkan yang ini.”'},
          {k:'__repr__', v:'Menentukan seperti apa tampilan object ketika dicetak. Itu saja yang dilakukan <code>return f\'&lt;Card {self.id}&gt;\'</code> di M4L1 — membuat keluaran debugging terbaca alih-alih menampilkan alamat memori.'},
          {k:'__name__', v:'Bukan method — sebuah variabel yang menyimpan nama file saat ini, atau string <code>"__main__"</code> kalau itu file yang Anda jalankan. <code>Flask(__name__)</code> adalah Flask yang bertanya “saya ada di mana, supaya saya bisa menemukan folder templates Anda?”'},
          {k:'if __name__ == "__main__":', v:'“Lakukan ini hanya kalau file ini dijalankan langsung, bukan di-import oleh file lain.” Itulah sebabnya meng-import <code>bot_logic.py</code> di M1L3 tidak tanpa sengaja menjalankan apa pun.'}
        ]},
        {type:'code', lbl:'lambda, type hint, dan *args — tiga yang lebih kecil', code:`<span class="cc"># lambda: fungsi mungil tanpa nama, ditulis di tempat</span>
<span class="ck">lambda</span> x: x[<span class="cn">1</span>]        <span class="cc"># sama dengan: def f(x): return x[1]</span>

<span class="cc"># Di M5L3 dia memberi tahu sorted() BAGIAN MANA yang diurutkan — item 1, skornya:</span>
<span class="cc">#   sorted(scores.items(), key=lambda x: x[1], reverse=True)</span>

<span class="cc"># type hint: catatan untuk manusia. Python TIDAK menegakkannya.</span>
<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:   <span class="cc"># menerima string, memberi string</span>
    <span class="ck">return</span> <span class="cs">"sunny"</span>

<span class="cc"># *args: "sebanyak apa pun argumen posisional", dikumpulkan jadi tuple</span>
<span class="ck">def</span> <span class="cf">total</span>(*prices):
    <span class="cf">print</span>(prices)          <span class="cc"># (100, 200, 300) — cuma sebuah tuple</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

<span class="cf">total</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>)        <span class="cc"># berfungsi dengan jumlah berapa pun</span>`},
        {type:'hi', h:'Kalimat-kalimat untuk siswa', b:'<strong>lambda:</strong> “Mini-fungsi sekali pakai yang kamu tulis dalam satu baris kalau nggak sepadan buat dikasih nama.” <strong>Type hint:</strong> “Catatan yang bilang apa yang masuk dan apa yang keluar. Python nggak mengeceknya — itu buat siapa pun yang membaca kodenya, termasuk kamu bulan depan.” <strong>*args:</strong> “Bintangnya berarti ‘sebanyak yang kamu mau’ — semuanya datang sebagai daftar yang bisa kamu jumlahkan.” <strong>__repr__:</strong> “Dia menentukan apa yang ditampilkan saat kamu mencetak object-nya, jadi kamu lihat sesuatu yang berguna alih-alih tulisan ngawur.”'},
        {type:'good', txt:'Type hint layak mendapat sedikit antusiasme ketika Anda sampai ke pelajaran kode bersih. Ia satu-satunya butir di daftar ini yang murni soal berbaik hati kepada pembaca berikutnya — dan itu persis argumen yang dibuat oleh seluruh pelajaran tersebut.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa menunjuk @app.route("/") dan bertanya @ itu melakukan apa. Apa jawaban Anda?', opts:['Dia menyerahkan fungsi di bawahnya kepada Flask sebagai pekerjaan berlabel, supaya Flask bisa menjalankannya ketika ada yang mengunjungi alamat itu — Anda tidak pernah memanggilnya sendiri','Dia menandai fungsinya sebagai privat supaya siswa tidak bisa mengubahnya','Dia komentar yang mengingatkan halaman mana yang dilayani fungsinya','Dia meng-import route dari library Flask'], c:0, fb:'Sebuah decorator mengambil fungsi di bawahnya dan memberikannya kepada library dengan perilaku tambahan yang menempel. Anda tidak pernah memanggil fungsi-fungsi ini sendiri — library-nya yang memanggilnya saat waktunya tiba.'},
      {q:'Menulis @shout di atas def greet() setara dengan baris Python biasa yang mana?', opts:['greet = shout(greet)','shout = greet()','greet(shout)','import shout from greet'], c:0, fb:'Persis itulah yang disingkat oleh sintaks @: lewatkan fungsinya melalui decorator-nya dan biarkan hasilnya menjadi arti baru dari nama itu.'},
      {q:'Mengapa setiap command Discord dalam kursus ini ditulis sebagai async def?', opts:['Karena bot-nya menghabiskan sebagian besar waktunya menunggu, dan async membuatnya bisa berhenti sejenak di titik tunggu alih-alih membekukan segalanya','Karena command Discord harus berjalan lebih cepat daripada fungsi biasa','Karena async diwajibkan untuk fungsi apa pun yang menerima argumen','Karena itu membuat bot-nya menangani lebih banyak server sekaligus'], c:0, fb:'Sebuah bot hampir selalu menunggu — menunggu pesan, konfirmasi, dan API. async membuat sebuah fungsi bisa berhenti sejenak dan membiarkan pekerjaan lain berlanjut selama ia menunggu.'},
      {q:'Seorang siswa menulis ctx.send("Hi") tanpa await dan tidak ada yang muncul. Apa yang terjadi?', opts:['Mereka membuat pekerjaannya tapi tidak pernah membiarkannya berjalan — console akan menyebut sebuah coroutine yang tidak pernah di-await','Pesannya terkirim ke channel yang salah','Token bot mereka sudah kedaluwarsa','send() membutuhkan class Client, bukan Bot'], c:0, fb:'Ini bug async paling umum yang dibuat siswa. Mengenali pesan “coroutine was never awaited” adalah cara tercepat mendiagnosisnya.'},
      {q:'self merujuk pada apa di dalam sebuah method class?', opts:['Object tertentu yang padanya method itu dipanggil — itu cara method-nya tahu data object mana yang harus dipakai','Class itu sendiri, bukan object mana pun yang dibuat darinya','File tempat class itu ditulis','Class induk yang diwarisi class itu'], c:0, fb:'Satu cetak biru bisa menghasilkan banyak object, masing-masing dengan datanya sendiri. self adalah cara sebuah method tahu object mana yang sedang ditanganinya, dan Python mengisinya secara otomatis.'},
      {q:'Apa arti tanda kurung pada class Card(db.Model)?', opts:['Card adalah sejenis db.Model dan mewarisi semua kemampuannya — itulah sebabnya dia tiba-tiba punya .query dan bisa menjadi tabel basis data','db.Model dimasukkan sebagai potongan data pertamanya','Class-nya hanya bekerja selama db.Model sudah di-import','Dia mengganti nama class-nya menjadi db.Model secara internal'], c:0, fb:'Inheritance. Tidak satu pun mesin query atau pemetaan tabelnya ditulis dalam pelajaran itu — Card mendapat semuanya dari db.Model secara cuma-cuma.'},
      {q:'__repr__ itu untuk apa?', opts:['Dia menentukan seperti apa tampilan object ketika dicetak, sehingga keluaran debugging terbaca alih-alih berupa alamat memori','Dia berjalan ketika object dibuat dan menyiapkan datanya','Dia menghapus object dari basis data','Dia mengembalikan posisi object di dalam tabel'], c:0, fb:'__init__ menyiapkan sebuah object; __repr__ menentukan bagaimana ia tampil saat dicetak. Di M4L1 itulah yang membuat <Card 3> muncul alih-alih tulisan ngawur.'},
      {q:'Pada sorted(scores.items(), key=lambda x: x[1], reverse=True), lambda-nya sedang melakukan apa?', opts:['Bertindak sebagai fungsi mungil tanpa nama yang memberi tahu sorted() untuk mengurutkan berdasarkan item 1 — skornya','Membalik setiap pasangan sebelum diurutkan','Menghapus entri yang skornya nol','Mengubah dictionary-nya menjadi list'], c:0, fb:'Sebuah lambda adalah fungsi satu baris tanpa nama. Di sini dia memberi tahu sorted() bagian mana dari setiap pasangan yang dibandingkan — elemen 1, yaitu skor kalimatnya.'},
      {q:'Apa yang sebenarnya dilakukan type hint seperti (city: str) -> str saat program berjalan?', opts:['Tidak ada — Python tidak menegakkannya; mereka mendokumentasikan apa yang masuk dan keluar untuk siapa pun yang membaca kodenya','Mereka mengubah argumennya menjadi string secara otomatis','Mereka melempar error kalau tipe yang salah dimasukkan','Mereka membuat fungsinya berjalan lebih cepat'], c:0, fb:'Mereka adalah dokumentasi untuk manusia. Python tidak memeriksanya, dan itu layak dikatakan terang-terangan supaya siswa tidak mengandalkannya untuk validasi.'},
      {q:'Seorang siswa yang tajam mendorong jauh melampaui “async artinya dia menunggu tanpa membeku” dan bertanya bagaimana event loop menjadwalkan coroutine. Apa langkah yang tepat?', opts:['Katakan itu pertanyaan yang benar-benar tingkat lanjut, bahwa Anda perlu mencari tahu, lalu cari tahu bersama-sama','Berikan tebakan yang meyakinkan supaya kelompoknya tetap percaya kepada Anda','Katakan itu di luar cakupan kursus lalu lanjut','Alihkan mereka ke tugas tambahan alih-alih menjawab'], c:0, fb:'Ini batas jujur dari apa yang Anda butuhkan, dan mencari tahu bersama mencontohkan persis kebiasaan membaca dokumentasi yang hendak diajarkan M1L4. Menebak adalah satu-satunya pilihan yang benar-benar merugikan kredibilitas Anda.'}
    ]
  },
  {
    id:3, emoji:'🗺️', color:'#2FA37C',
    title:'Cara Kerja Sebuah Pelajaran Python Pro',
    desc:'Bentuk yang diikuti setiap pelajaran, lima metode pengajaran yang dianggap sudah Anda kenal namanya oleh rencana pelajarannya, dan disiplin waktu yang menentukan berhasil tidaknya sebuah pelajaran.',
    obj:'Pelajari mekanika sebuah pelajaran sebelum Anda mempelajari sepuluh modul isi. Setiap rencana pelajaran menyebutkan sebuah metode di bagian atasnya dan menganggap Anda tahu artinya — modul ini memastikan Anda memang tahu, sehingga “pelajaran ini berjalan dengan metode Use–Modify–Create” menjadi sebuah instruksi, bukan teka-teki.',
    prep:'~1 jam.',
    practical:{
      intro:'Sebelum tesnya, orientasikan diri Anda pada materi yang sesungguhnya:',
      items:[
        'Membaca satu rencana pelajaran utuh dari PDF kurikulumnya dari awal sampai akhir, termasuk tabel tahapannya',
        'Mengenali di dalam rencana itu: briefing, masalahnya, tujuannya, teorinya, praktiknya, dan refleksinya',
        'Menemukan catatan di bagian atas rencananya yang menyebutkan metode pengajaran yang dipakainya',
        'Memikirkan apa yang harus dibuang oleh versi individu 50 menit dari pelajaran itu'
      ]
    },
    sections:[
      {t:'🧭 Mengapa ini datang sebelum isinya', cards:[
        {type:'brief',
          overview:'Setiap dari 40 pelajarannya berbagi satu kerangka — <strong>briefing → pemeriksaan PR → masalahnya → tujuannya → teori → praktik → refleksi</strong> — dan bersandar pada lima metode bernama: <strong>EduScrum</strong>, <strong>LiveCoding</strong>, <strong>Use–Modify–Create</strong>, <strong>metakognisi</strong>, dan <strong>gamifikasi</strong>.',
          why:'Metode-metode itu mulai dipakai di <em>pelajaran kedua kursus ini</em>. Kalau Anda bertemu “sesi ini dirancang di sekitar sistem Scrum” tanpa tahu artinya, Anda akan menjalankan pelajarannya seperti pelajaran biasa dan struktur yang menjadi tumpuannya diam-diam lenyap.',
          learn:'Tidak ada secara langsung — tapi siswa merasakan semuanya. Ritme sprint-nya, kesalahan yang disengaja, eksperimen lima menit sebelum penjelasannya: itulah yang membuat kursus ini terasa berbeda dari sekolah.',
          confident:'Kerangka tujuh bagiannya; apa arti masing-masing dari lima nama metode itu dalam praktik; dan apa yang dilakukan ketika Anda tertinggal dari jadwal.'
        }
      ]},
      {t:'🕐 Kerangkanya', cards:[
        {type:'text', h:'Tujuh bagiannya, secara berurutan', b:'<strong>1. Briefing dan salam</strong> — periksa mikrofon dan kamera, catat kehadiran di dalam sebuah percakapan alih-alih sebagai absensi. <strong>2. Pemeriksaan PR</strong> — semua orang ikut menyumbang, termasuk yang tidak mengerjakannya. <strong>3. Masalahnya</strong> — kaitan dunia nyatanya. <strong>4. Tujuannya</strong> — apa yang dihasilkan hari ini. <strong>5. Teori</strong> — selalu singkat. <strong>6. Praktik</strong> — bagian terbesar pelajarannya. <strong>7. Refleksi dan PR</strong> — 10 sampai 15 menit, masuk jadwal.'},
        {type:'text', h:'Baca tabel tahapannya sebelum apa pun', b:'Setiap rencana pelajaran di PDF-nya dibuka dengan tabel yang memberi setiap tahap sebuah <strong>durasi dan waktu mulai</strong>, plus varian individu 50 menit. Tabel itu tulang punggung pelajarannya. Bacalah, dan ketahui di mana dua jangkar Anda yang tidak boleh bergeser: praktik harus mendapatkan jatahnya, dan refleksi tidak boleh dikorbankan.'},
        {type:'warn', txt:'Cara paling umum sebuah pelajaran Python Pro gagal adalah <strong>tahap awal yang kelebihan waktu</strong>. Rencananya memperingatkan ini berulang kali — jangan biarkan teorinya berlarut-larut, jangan melebihi waktu untuk penyiapan environment, jangan memanjangkan diskusinya. Waspadai ini pada diri Anda sendiri: tahap teori terasa aman untuk diajarkan, dan justru karena itulah ia melebar.'},
        {type:'good', txt:'Pakailah pengatur waktu yang terlihat, terus-menerus. Rencananya meminta itu untuk presentasi satu menit, curah gagasan lima menit, perburuan kode dua menit, ronde latihan tujuh menit. Pengatur waktu di layar yang melakukan pendisiplinannya, jadi Anda tetap menjadi orang yang membantu alih-alih orang yang menggesa-gesa semua orang.'}
      ]},
      {t:'🎓 Kelima metode itu, disebut namanya', cards:[
        {type:'qa', h:'Apa arti tiap nama ketika Anda melihatnya di bagian atas sebuah rencana', items:[
          {k:'Scrum / EduScrum', v:'Pelajarannya dibagi menjadi <strong>sprint</strong> dengan batas waktu yang ketat. Masing-masing dibuka dengan diskusi singkat dan ditutup dengan dua pertanyaan tetap: “apakah kita benar-benar mencapai hasilnya?” dan “bagaimana ini mendekatkan kita pada penyelesaian masalah utamanya?” Versi yang lebih lengkap menambahkan retrospektif. <em>Pertama kali dipakai di pelajaran kursus M1L2 — pelajaran kedua.</em>'},
          {k:'LiveCoding', v:'Anda membangun kodenya <strong>bersama-sama dengan siswa</strong>, membagikan layar Anda, menarasikan keputusan-keputusannya, dan membuat kesalahan dengan sengaja supaya mereka menangkapnya. <em>Dipakai untuk pelajaran basis data.</em>'},
          {k:'Use–Modify–Create', v:'Siswa <strong>memakai</strong> kode yang sudah berjalan lebih dulu, lalu <strong>memodifikasinya</strong> sambil Anda menjelaskan, dan baru setelah itu <strong>membuat</strong> milik mereka sendiri. Tahan keinginan menjelaskan lebih awal. <em>Dipakai untuk bot Discord pertama dan model Keras.</em>'},
          {k:'Metakognisi', v:'Lima perhentian terjadwal tempat siswa memikirkan <em>bagaimana</em> mereka belajar, bukan apa yang mereka pelajari. <em>Dipakai di pelajaran kursus M2L1.</em>'},
          {k:'Gamifikasi', v:'Teori disampaikan sebagai permainan alih-alih ceramah — kuis beregu, permainan ahli, perburuan kode, kompetisi akurasi. Ini bukan pengisi waktu; ini <em>memang</em> metode penyampaiannya.'}
        ]},
        {type:'text', h:'Ketika Anda tertinggal', b:'Instruksinya eksplisit dan layak diresapi sekarang: dalam pelajaran EduScrum, kalau Anda tertinggal, <strong>tetaplah lanjut ke retrospektif</strong> dan bahas apa yang tidak berjalan. Pelajaran yang utuh dengan tugas yang belum selesai lebih baik daripada pelajaran yang tidak utuh. Logika yang sama berlaku di mana-mana — lindungi bentuknya, korbankan cakupannya.'},
        {type:'tip', txt:'Ketika sebuah rencana menyebutkan sebuah metode, ia sedang memberi tahu Anda bahwa pelajarannya tidak akan berjalan tanpa itu. Pelajaran Use–Modify–Create yang disampaikan sebagai ceramah, atau pelajaran EduScrum yang dijalankan tanpa pengaturan waktu, menghasilkan tahap yang kelebihan waktu dan kelompok yang tidak terlibat. Bacalah catatan di bagian atas rencananya lebih dulu, setiap kali.'}
      ]},
      {t:'🧰 Alat-alatnya dan dua aturan emasnya', cards:[
        {type:'qa', h:'Dengan apa Anda menjalankan sebuah pelajaran', items:[
          {k:'Zoom / Classroom', v:'Pelajarannya, plus breakout room, alat anotasi untuk LiveCoding, dan papan tulis bersama.'},
          {k:'Platform', v:'Tugas, teori, contoh kode, obrolan, nilai. Hampir setiap tahap menyebut “pindah ke tugas bernama…”.'},
          {k:'Backoffice (BO)', v:'Memverifikasi bahwa tugas benar-benar dikumpulkan; tautan chat grup.'},
          {k:'Chat grup', v:'Dukungan antar-pelajaran, tautan repository, meme.'},
          {k:'Alat kuis & papan', v:'Wayground / Quizizz, Tally, serta Miro atau yang setara untuk curah gagasan.'},
          {k:'Technical assistant (TS)', v:'Tangan kedua Anda untuk pemasangan dan siswa yang terhambat. Manfaatkan mereka.'}
        ]},
        {type:'good', txt:'<strong>Aturan satu: jangan pernah menuliskan kodenya untuk seorang siswa.</strong> Ajukan pertanyaan penuntun, biarkan mereka berpikir dengan suara keras, biarkan mereka saling membantu. Aturan ini muncul di hampir setiap rencana dan inilah satu perilaku yang paling membedakan tutor yang baik di sini.'},
        {type:'good', txt:'<strong>Aturan dua: teori dulu, baru kode.</strong> Katakan apa yang dilakukan sebuah baris, lalu ketik bersama-sama. Pemula yang langsung dijatuhkan ke dalam sebuah skrip akan tersesat — konsepnya harus mendarat sebelum sintaksnya.'},
        {type:'tip', txt:'Modul 15 membahas sisa keterampilan penyampaiannya — diferensiasi, penilaian, pengelolaan kelas, teknik-teknik refleksi, dan apa yang dikatakan ketika Anda tidak tahu jawabannya. Kembalilah ke sana setelah modul-modul isinya Anda kuasai; Anda akan mendapat lebih banyak darinya saat itu.'}
      ]}
    ],
    quiz:[
      {q:'Apa tujuh bagian sebuah pelajaran Python Pro, secara berurutan?', opts:['Briefing → pemeriksaan PR → masalahnya → tujuannya → teori → praktik → refleksi dan PR','Teori → praktik → tes → refleksi → PR → tujuan → briefing','Tujuan → teori → pemeriksaan PR → praktik → briefing → refleksi → tes','Briefing → teori → tes → praktik → PR → tujuan → refleksi'], c:0, fb:'Hampir setiap pelajaran dalam kursus ini mengikuti kerangka ini, dan tabel tahapan pada rencananya memberi setiap bagian sebuah durasi dan waktu mulai.'},
      {q:'Sebuah rencana pelajaran dibuka dengan “sesi ini dirancang di sekitar sistem Scrum.” Apa yang diberitahukannya kepada Anda?', opts:['Pelajarannya dibagi menjadi sprint berbatas waktu, masing-masing dibuka dengan diskusi dan ditutup dengan dua pertanyaan pembekalan yang tetap','Anda sebaiknya menyebut Scrum selama tahap teori','Siswa akan dinilai sebagai tim alih-alih perorangan','Pelajarannya tidak punya tahap praktik'], c:0, fb:'Itu instruksi tentang struktur, bukan topik. Jalankan sebagai pelajaran biasa dan ritme sprint yang menjadi tumpuan rencananya akan lenyap.'},
      {q:'Dalam pelajaran Use–Modify–Create, apa yang harus Anda tahan untuk tidak dilakukan?', opts:['Menjelaskan kodenya sebelum siswa menjalankan dan bereksperimen dengannya sendiri','Membiarkan siswa mengubah kode contohnya','Memberi mereka kode yang sudah berjalan sama sekali','Mengizinkan mereka bekerja berpasangan'], c:0, fb:'Use dan modify datang lebih dulu, secara berurutan. Menjelaskan lebih awal menghilangkan eksperimen yang menghasilkan pertanyaan-pertanyaan bagus.'},
      {q:'Anda tertinggal dari jadwal dalam pelajaran EduScrum dengan tugas yang belum selesai. Apa yang Anda lakukan?', opts:['Tetap lanjut ke retrospektif dan bahas apa yang tidak berjalan — lindungi bentuknya, korbankan cakupannya','Perpanjang sprint-nya sampai tugasnya selesai','Lewati retrospektifnya dan jadikan sisanya PR','Berikan kode solusinya kepada siswa supaya mereka menyusul'], c:0, fb:'Pelajaran yang utuh dengan tugas yang belum selesai lebih baik daripada pelajaran yang tidak utuh. Rencananya menyatakan ini secara langsung.'},
      {q:'Tahap mana yang paling mungkin kelebihan waktu, dan mengapa itu berbahaya?', opts:['Teori — terasa aman untuk diajarkan, jadi ia melebar, dan ia memakan waktu praktiknya','Refleksi — siswa menikmatinya dan terus berbicara','Briefing — pencatatan kehadiran lebih lama dari rencana','Praktik — siswa selalu butuh waktu lebih'], c:0, fb:'Rencananya berulang kali memperingatkan agar teorinya tidak berlarut-larut. Praktik dan refleksi adalah dua hal yang harus mempertahankan jatah waktunya.'},
      {q:'Apa dua aturan emas yang muncul di hampir setiap rencana pelajaran?', opts:['Jangan pernah menuliskan kodenya untuk seorang siswa, dan jelaskan teorinya sebelum menulis kodenya','Selalu selesaikan setiap tugas, dan jangan pernah biarkan seorang siswa tertinggal','Nyalakan kamera, dan selalu mulai dengan kuis','Ikuti rencananya persis, dan jangan pernah berimprovisasi'], c:0, fb:'“Jangan tuliskan kodenya untuk siswa” dan “jelaskan teorinya dulu, baru tulis kodenya bersama-sama” adalah dua instruksi yang paling sering diulang dalam kurikulumnya.'},
      {q:'Mengapa modul ini ditempatkan sebelum sepuluh modul isinya?', opts:['Karena metode pengajarannya mulai dipakai di pelajaran kedua kursus, jadi Anda butuh kosakatanya sebelum Anda menjumpainya','Karena ini modul termudah dan membangun rasa percaya diri','Karena platform-nya mewajibkan metodologi diselesaikan lebih dulu','Karena modul isinya tidak bisa dipahami tanpa ini'], c:0, fb:'Metodenya muncul mulai dari pelajaran kursus M1L2 dan seterusnya. Menjumpai “dirancang di sekitar sistem Scrum” tanpa tahu artinya adalah persis masalah yang dihilangkan modul ini.'}
    ]
  },
  {
    id:4, emoji:'🧰', color:'#E8663B',
    title:'Lab Penyiapan Anda & Alat-alatnya',
    desc:'Siapkan semua yang dibutuhkan kursus ini di komputer Anda sendiri — interpreter, VS Code, pipenv, Git, Discord Developer Portal, Colab, Teachable Machine — plus tur keliling platform dan dek slide-nya.',
    obj:'Kerjakan, di komputer Anda sendiri, semua yang nanti akan Anda minta dilakukan siswa. Anda tidak bisa memecahkan masalah pemasangan yang belum pernah Anda lakukan, dan Anda tidak bisa menjalankan tahap Developer Portal tanpa pernah mengekliknya sampai tuntas. Modul ini sepenuhnya praktik: tidak ada yang bisa dipelajari di sini dengan membaca.',
    prep:'~3–4 jam, dibagi dalam beberapa kali duduk. Kerjakan di komputer yang akan Anda pakai mengajar.',
    practical:{
      intro:'Modul ini ADALAH checklist-nya. Jangan tandai selesai sampai setiap butirnya benar-benar terpenuhi — semua yang setelahnya mengandaikan ini:',
      items:[
        'Memasang interpreter Python dan memastikan <code>python --version</code> bekerja di terminal yang baru dibuka',
        'Memasang VS Code, ekstensi Python-nya, dan memakai <em>Python: Select Interpreter</em> setidaknya sekali',
        'Membuat folder proyek dan file <code>.py</code>, lalu menjalankannya dari terminal VS Code',
        'Memasang sebuah library dengan <code>pip install</code>, lalu membuat environment <strong>pipenv</strong> dan memasang satu library ke dalamnya',
        'Dengan sengaja memicu <code>ModuleNotFoundError</code> dengan memasang di luar environment-nya — lalu memperbaikinya',
        'Memasang Git, menjalankan <code>git config --global user.name</code> dan <code>user.email</code>, serta mempublikasikan sebuah repository <strong>dari dalam VS Code</strong>',
        'Membuat lalu me-merge sebuah branch, dan melihat keluaran fast-forward merge-nya',
        'Mendaftarkan aplikasi dan bot Discord, mengaktifkan <strong>Message Content Intent</strong>, mengundangnya ke server Anda sendiri, dan membuatnya membalas',
        'Membuat notebook Colab, menjalankan cell kode dan cell markdown, mengunggah sebuah file, lalu menyaksikan reset sesinya menghapus file itu',
        'Melatih classifier Teachable Machine, mengekspor modelnya, dan meng-unzip-nya di Colab',
        'Membuka platform sebagai tutor DAN melihat sebuah pelajaran seperti yang dilihat siswa',
        'Membuka setidaknya tiga dek slide pelajaran dalam mode slideshow'
      ]
    },
    sections:[
      {t:'🧭 Mengapa modul ini seluruhnya praktik', cards:[
        {type:'brief',
          overview:'Lab praktik yang mencakup seluruh rangkaian alatnya: <strong>interpreter dan VS Code</strong>, <strong>pip dan pipenv</strong>, <strong>Git dan GitHub</strong>, <strong>Discord Developer Portal</strong>, <strong>Google Colab</strong>, <strong>Teachable Machine</strong>, serta <strong>platform dan dek slide-nya</strong>.',
          why:'Pelajaran kursus M1L2 meminta Anda memasang interpreter dan IDE untuk satu kelas penuh anak usia 13–17 tahun dengan sistem operasi yang bercampur, dalam lima belas menit. Setiap modul berikutnya menambah satu alat. Pedagoginya dibahas di tempat lain; yang tidak bisa diberikan oleh sebanyak apa pun bacaan adalah pengalaman sudah melakukannya sendiri sekali, dengan tenang, sebelum itu jadi penting.',
          learn:'Siswa juga melakukan semua ini — lab ini sengaja merupakan perjalanan siswa, dijalani lebih dulu dan dengan kecepatan Anda sendiri.',
          confident:'Setiap butir di checklist di atas, dikerjakan di komputer Anda sendiri, dengan mode kegagalannya sudah Anda lihat setidaknya sekali.'
        },
        {type:'good', txt:'Hal terbaik yang bisa Anda lakukan sambil mengerjakan lab ini adalah <strong>mencatat semua yang salah bagi Anda</strong>. Tersandungnya Anda sendiri adalah prediksi paling akurat yang mungkin ada tentang apa yang akan dialami siswa Anda, dan catatan itu menjadi pelengkap pribadi Anda untuk FAQ-nya.'}
      ]},
      {t:'💻 Interpreter, VS Code & jebakan interpreter', cards:[
        {type:'text', h:'Kerjakan dengan urutan ini', b:'Pasang <strong>interpreter Python</strong> (di Windows, centang <em>Add Python to PATH</em> — melewatkannya adalah penyebab paling umum “pip is not recognised”). Pasang <strong>VS Code</strong>. Pasang <strong>ekstensi Python</strong> dari panel Extensions. Lalu pakai <code>Shift+Ctrl+P</code> / <code>Cmd+Shift+P</code> → <em>Python: Select Interpreter</em>. Buat sebuah folder, buat file <code>.py</code>, tulis <code>print("Hello, world!")</code>, lalu jalankan.'},
        {type:'warn', txt:'Rusakkan dengan sengaja sekali, sekarang, saat tidak ada yang melihat. Pasang sebuah library dengan interpreter yang salah terpilih dan saksikan <code>ModuleNotFoundError</code> muncul padahal pip jelas-jelas berhasil. Error itu akan muncul dalam pelajaran sungguhan, dan pernah memicunya dengan sengaja adalah perbedaan antara mendiagnosisnya dalam sepuluh detik dan kehilangan dua puluh menit.'},
        {type:'text', h:'Windows dan Mac berbeda, dan separuh kelas Anda memakai masing-masing', b:'Simpan kedua rangkaiannya di kepala Anda: pintasan palet (<code>Shift+Ctrl+P</code> vs <code>Cmd+Shift+P</code>), <code>python</code> vs <code>python3</code>, dan cara terminalnya dibuka. Ketika sebuah perintah berbeda, ucapkan keduanya alih-alih berasumsi — “Ctrl+Shift+P, atau Cmd+Shift+P di Mac” cuma butuh dua detik dan menyelamatkan seorang siswa yang bingung.'},
        {type:'image', src:'assets/media/images/setup-interpreter.jpg', alt:'VS Code dengan palet Select Interpreter terbuka, menampilkan banyak virtual environment, dengan yang cocok dengan proyek yang sedang dibuka disorot.', cap:'Memilih interpreter — perbaikan untuk sebagian besar masalah “sudah terpasang tapi tidak mau di-import”. Perhatikan berapa banyak environment yang terdaftar: yang harus dipilih adalah yang namanya cocok dengan proyek yang sedang dibuka (di sini TUR_Calculator-main, cocok dengan folder TUR_CALCULATOR-MAIN di Explorer). Memilih yang lain adalah persis bagaimana ModuleNotFoundError terjadi.'},
        {type:'tip', txt:'Selagi Anda di sini, tuliskan <strong>lembar penyiapan untuk siswa</strong> yang akan Anda tempelkan ke chat grup sebelum pelajaran pertama: tautan unduhan, kotak centang PATH-nya, dan seperti apa “selesai” itu terlihat. Kurikulumnya menjadikan pemasangan installer sebagai PR justru supaya waktu pelajaran tidak hilang — lembar yang jelas itulah yang membuat PR tersebut benar-benar dikerjakan.'}
      ]},
      {t:'📦 pip, pipenv & virtual environment', cards:[
        {type:'text', h:'Apa yang harus benar-benar Anda lakukan', b:'Pasang sebuah library secara global dengan <code>pip install requests</code>. Lalu buat sebuah proyek dengan environment <strong>pipenv</strong> dan pasang ke dalamnya dengan <code>pipenv install requests</code>. Perhatikan perbedaannya: ke mana file-nya pergi, dan apa yang terjadi ketika setelahnya Anda memilih interpreter yang salah. Pelajaran kursus M3L1 meminta siswa melakukan ini untuk Flask, dan M7L1 mengulanginya dengan library AI yang besar.'},
        {type:'warn', txt:'Jebakan yang menjerat siswa dan tutor sama-sama: di dalam proyek pipenv Anda harus memakai <code>pipenv install &lt;library&gt;</code>. <code>pip install</code> polos menaruhnya di tempat yang tidak bisa dilihat proyeknya, dan <code>ModuleNotFoundError</code> yang muncul terlihat persis seperti pemasangan yang rusak. Kalau Anda pernah melakukannya sendiri sekali, Anda akan mengenalinya seketika.'},
        {type:'text', h:'Latih pematokan library AI sekarang, bukan saat pelajaran', b:'Modul kursus M7 adalah yang paling rapuh dalam kursus ini. Dahului: buat sebuah environment, pasang TensorFlow, dan siapkan perintah perbaikannya di tangan — <code>pipenv uninstall tensorflow</code> lalu <code>pipenv install tensorflow==2.15</code>. Ketahui bahwa padanan Colab-nya adalah <code>!pip install -q tf-keras==2.19.0 h5py==3.11.0</code> dengan <code>import tf_keras</code>. Ini perintah siap tempel, bukan hal yang dipikirkan di tempat.'},
        {type:'tip', txt:'Pemasangan besar bisa memakan waktu lama di laptop sekolah. Siapkan cadangan — Pipfile dari repository solusinya — dan ketahuilah bahwa memakainya adalah keputusan yang benar, bukan kompromi. Pelajarannya tentang AI-nya, bukan tentang menunggu unduhan.'}
      ]},
      {t:'🐙 Git, GitHub & branch', cards:[
        {type:'text', h:'Rangkaian lengkap yang harus Anda kerjakan sendiri', b:'Buat akun GitHub-nya. Buat repository publik yang kosong dan unggah sebuah file <strong>lewat situs webnya</strong> — cara canggung yang pertama kali dijumpai siswa di M1L2. Lalu pasang <strong>aplikasi git</strong>-nya, pilih VS Code sebagai editor saat penyiapan. Jalankan <code>git config --global user.name</code> dan <code>user.email</code>. Masuk ke GitHub dari dalam VS Code, lalu publikasikan sebuah repository <strong>dari editor</strong> — cara yang diajarkan M2L3. Terakhir, commit sebuah perubahan dan lihat riwayat file-nya.'},
        {type:'text', h:'Lalu branch, karena M8L2 membutuhkan tangkapan layar dari setiap siswa', b:'Buat sebuah branch, buat perubahan di atasnya, kembali lagi, lalu merge. Perhatikan keluaran fast-forward-nya. Anda akan meminta persis ini dari setiap siswa, jadi pernah melakukannya lebih dari sekali itu penting — merge adalah jenis hal yang terasa baik-baik saja sampai Anda melakukannya di depan orang.'},
        {type:'good', txt:'Selagi di sini, latih mengucapkan hal yang akan Anda ulangi sepanjang kursus: semua yang di-push ke Git <strong>tetap</strong> di sana. Hapus sebuah file, commit, lalu temukan file itu di riwayatnya. Menyaksikan itu sendiri adalah yang membuat Anda meyakinkan ketika menjelaskan mengapa token yang bocor harus di-reset, bukan dihapus.'}
      ]},
      {t:'🤖 Discord Developer Portal', cards:[
        {type:'text', h:'Klik menyusurinya sampai tuntas sekali', b:'Buat server Discord Anda sendiri. Buka Developer Portal, buat sebuah <strong>application</strong>, tambahkan sebuah <strong>bot</strong>, dan — langkah yang diam-diam merusak segalanya — aktifkan <strong>Message Content Intent</strong> di halaman Bot. Salin token-nya. Undang bot-nya ke server Anda dengan izin yang benar. Lalu jalankan contoh class Client dari kursusnya dengan token Anda ditempel secara lokal, dan buat ia membalas. Setelah itu tulis ulang memakai class <code>Bot</code>.'},
        {type:'warn', txt:'Dua hal yang harus tertanam sebelum pelajarannya. Pertama: intent-nya harus diaktifkan di <strong>kedua</strong> tempat, yaitu di kode (<code>intents.message_content = True</code>) dan di portalnya — salah satu saja meninggalkan Anda dengan bot yang tersambung tapi mengabaikan segalanya. Kedua: tata letak portalnya berubah-ubah. Klik menyusurinya lagi tak lama sebelum Anda mengajar M1L3 alih-alih memercayai ingatan Anda dari berbulan-bulan sebelumnya.'},
        {type:'image', src:'assets/media/images/setup-discord-intents.jpg', alt:'Halaman Bot di Discord Developer Portal memperlihatkan bagian Privileged Gateway Intents dengan intent Presence, Server Members, dan Message Content, semuanya dalam keadaan mati.', cap:'Halaman Bot (navigasi kiri → <strong>Bot</strong>). Gulir ke <strong>Privileged Gateway Intents</strong> lalu nyalakan <strong>Message Content Intent</strong> — sakelar ketiga. Ketiganya MATI secara bawaan, persis seperti yang terlihat di sini, dan itulah sebabnya bot yang baru dibuat tersambung lalu mengabaikan setiap pesan. Portal ditangkap dengan antarmuka berbahasa Turki; nama intent-nya sendiri berbahasa Inggris di semua lokal.'},
        {type:'warn', txt:'Bacalah tangkapan layarnya dengan cermat: ketiga intent-nya <strong>mati</strong>. Itu keadaan bawaannya, dan <strong>Message Content Intent</strong> adalah yang harus Anda nyalakan — sakelar paling bawah, yang sebagian terpotong pada tangkapan ini. Mengaktifkannya di portal hanya setengah pekerjaan: <code>intents.message_content = True</code> juga harus ada di kodenya. Tinggalkan salah satu dan bot-nya tampil online tapi tidak mendengar apa-apa.'},
        {type:'good', txt:'Latih disiplin token pada diri Anda sendiri sekarang juga. Taruh token Anda di kode secara lokal, lalu sebelum Anda menunjukkan apa pun kepada siapa pun, ganti dengan <code>YOUR_BOT_TOKEN</code>. Biasakanlah selagi taruhannya cuma milik Anda sendiri — dan periksa layar Anda sendiri sebelum Anda pernah membagikannya.'}
      ]},
      {t:'🔬 Colab & Teachable Machine', cards:[
        {type:'text', h:'Colab', b:'Buat sebuah notebook di Drive Anda. Jalankan dua atau tiga <strong>cell kode</strong> dan satu <strong>cell markdown</strong>. Unggah sebuah gambar ke dalam sesinya. Lalu restart sesinya dengan sengaja dan saksikan file-nya lenyap — karena Anda akan menjelaskan itu kepada satu kelas yang kebingungan. Pelajari bahwa <code>!</code> menjalankan perintah sistem operasi, dan bahwa <strong>setiap cell harus dijalankan, secara berurutan</strong>. Terakhir, latih me-mount Google Drive, yang merupakan perbaikan untuk proyek yang lebih panjang.'},
        {type:'text', h:'Teachable Machine, dari ujung ke ujung', b:'Latih sebuah classifier gambar kecil dengan dua kelas. Ujilah dengan gambar yang belum pernah dilihatnya. Simpan proyeknya. Lalu <strong>ekspor modelnya</strong>, lihat apa yang sebenarnya keluar dari zip-nya (model <code>.h5</code> dan <code>labels.txt</code>), unggah ke Colab, unzip dengan <code>!unzip</code>, dan muat dengan <code>tf_keras</code>. Seluruh rantai itu adalah modul kursus M5L4 → M6L1 → M7L2, dan di situlah error versi muncul.'},
        {type:'image', src:'assets/media/images/setup-gtm.jpg', alt:'Google Teachable Machine dengan dua kelas gambar burung yang sudah dinamai, model yang sudah dilatih, dan tombol Export Model disorot.', cap:'Teachable Machine, disiapkan untuk proyek burung milik kursus ini sendiri — dua kelas bernama <em>Güvercin</em> (merpati) dan <em>Serçe</em> (burung pipit), dengan 6 dan 7 gambar contoh. Ganti nama tiap kelas dengan mengeklik ikon pensilnya; tambahkan gambar dengan <strong>Upload</strong>. Begitu tertulis <strong>Model Trained</strong>, <strong>Export Model</strong> (kanan atas) adalah yang menghasilkan file yang Anda muat di pelajaran kursus M6L1. <strong>Advanced</strong> di bawah Training adalah tempat epoch dan learning rate berada.'},
        {type:'tip', txt:'Perhatikan jumlah contohnya di tangkapan layar itu — 6 dan 7 gambar per kelas. Itu memang sengaja dataset yang <em>kecil</em>, dan kira-kira segitulah yang akan dihasilkan siswa dalam pelajarannya. Latih satu seukuran itu sendiri lalu ujilah pada burung yang belum pernah dilihat: menyaksikan dataset yang tipis bekerja buruk adalah cara tercepat memahami mengapa “tambah lebih banyak data, dan lebih bervariasi” adalah jawaban untuk hampir setiap keluhan akurasi.'},
        {type:'tip', txt:'Latih juga model yang sengaja buruk — dua kelas dengan empat gambar buram masing-masing — dan lihat ia gagal dengan penuh percaya diri. Itu memberi Anda demonstrasi langsung untuk gagasan terpenting di blok AI: model hanya tahu apa yang ditunjukkan kepadanya, dan memperbaikinya berarti memperbaiki dataset-nya, bukan kodenya.'}
      ]},
      {t:'🖥️ Platform & dek slide-nya', cards:[
        {type:'text', h:'Lihatlah dari kedua sisi', b:'Hampir setiap tahap dari setiap pelajaran menyebut “pindah ke tugas bernama…”, jadi platform-nya adalah tempat kursus ini sebenarnya hidup. Dapatkan aksesnya lalu lihat: bagaimana <strong>halaman tugas</strong> tampak bagi seorang siswa, di mana <strong>teori dan contoh kode</strong> yang dirujuk rencananya ditampilkan, <strong>chat</strong> yang menempel pada setiap tugas, apa yang dilakukan tombol <strong>Submit</strong>, dan bagaimana Anda <strong>memasukkan nilai</strong>. Lalu buka <strong>Backoffice</strong> dan temukan di mana pengumpulan tugas diverifikasi dan di mana tautan chat grupnya berada.'},
        {type:'warn', txt:'Rencananya terus-menerus merujuk “Slide 4”, “Slide 6 (slide ini beranimasi)”. Kalau Anda belum membuka deknya, Anda tidak akan tahu apakah sebuah slide sudah membahas suatu konsep atau apakah Anda yang diharapkan menjelaskannya — dan Anda akan mengulangi atau melewatkan. Bukalah dek untuk pelajaran berikutnya setiap kali Anda bersiap, dan ingatlah untuk mempresentasikannya dalam <strong>mode slideshow</strong>, seperti yang ditentukan rencananya.'},
        {type:'image', src:'assets/media/images/setup-platform.jpg', alt:'Halaman kursus Python Pro di platform Kodland, memperlihatkan bilah judul kursus, tab tugas dalam pelajaran dan PR, serta kartu-kartu modulnya.', cap:'Halaman kursus di platform. Navigasi kiri: <em>Kurslarım</em> = Kursus Saya. Tab-nya adalah <em>Ders İçi Görevler</em> = tugas dalam pelajaran, <em>Ödevler</em> = PR (dengan jumlah item yang menunggu Anda), <em>Lider Tablosu</em> = papan peringkat. Di bawahnya ada kartu-kartu modul — <em>Modül 1, 2, 3…</em> — dan masing-masing membuka daftar pelajaran, tempat setiap instruksi “pindah ke tugas bernama…” menunjuk.'},
        {type:'good', txt:'Bacalah bilah judul kursusnya di tangkapan layar itu, karena itu ringkasan tunggal paling jelas tentang apa yang Anda ajarkan: <strong>[1619] Python Pro [13-17] [90 min] [40 L] [Turkey]</strong> — kode kursus 1619, usia <strong>13–17</strong>, pelajaran sembilan puluh menit, empat puluh pelajaran. Lencana pada <em>Ödevler</em> adalah PR yang menunggu dinilai; angka itulah yang diam-diam bertambah kalau Anda menunda-nunda penilaian.'},
        {type:'text', h:'Materi yang diberikan setiap pelajaran kepada Anda', b:'Setiap rencana punya bagian <strong>Materials</strong> yang mendaftar apa saja yang tersedia untuk pelajaran itu — presentasinya, kuis, video, tautan dokumentasi, repository awal, ZIP, dan alat penilaiannya. Bacalah sebelum Anda menyiapkan apa pun dari nol. Beberapa hal yang mungkin Anda kira harus Anda bangun ternyata sudah disediakan, termasuk <code>diary(complete).zip</code> untuk modul basis data dan repository solusi untuk pelajaran bot AI.'},
        {type:'good', txt:'Begitu Anda punya aksesnya, lakukan satu latihan penuh: pilih satu pelajaran, buka rencananya, deknya, dan tugas-tugas platform-nya berdampingan, lalu susurilah seolah-olah Anda sedang mengajar. Satu gladi bersih itu akan memberi tahu Anda lebih banyak tentang kesiapan Anda daripada tes mana pun dalam pelatihan ini.'}
      ]}
    ],
    quiz:[
      {q:'Di Windows, apa yang menyebabkan “pip is not recognised”, dan apa perbaikan tercepatnya?', opts:['Python dipasang tanpa mencentang “Add Python to PATH” — memasang ulang dengan itu dicentang lebih cepat daripada mendebug secara langsung','Ekstensi Python belum ada di VS Code — pasang ekstensinya','pip harus dipasang terpisah dengan installer kedua','Terminalnya dibuka sebelum Python selesai dipasang — buka ulang terminalnya'], c:0, fb:'Ini masalah PATH dari installer-nya. Dalam pelajaran langsung, memasang ulang dengan kotaknya dicentang lebih baik daripada memecahkan masalah sementara delapan siswa menunggu.'},
      {q:'Anda berada di dalam proyek pipenv. Seorang siswa menjalankan pip install flask lalu mendapat ModuleNotFoundError. Mengapa?', opts:['Di dalam environment pipenv Anda harus memakai pipenv install — pip polos menaruhnya di tempat yang tidak bisa dilihat proyeknya','Flask sama sekali tidak bisa dipasang dengan pip','Mereka perlu me-restart VS Code supaya pemasangannya tercatat','Proyeknya kekurangan requirements.txt'], c:0, fb:'Ini jebakan yang menjerat tutor sama seperti siswa, dan error-nya terlihat identik dengan pemasangan yang rusak. Pernah memicunya sendiri sekali membuatnya jadi diagnosis sepuluh detik.'},
      {q:'Sebuah bot tersambung dan tampil online tapi mengabaikan setiap pesan. Dua hal apa yang harus sama-sama terpenuhi?', opts:['intents.message_content = True di dalam kode, DAN Message Content Intent aktif di halaman Bot pada Developer Portal','Bot-nya harus punya izin administrator, DAN menjadi pemilik server','Token-nya harus dibuat ulang, DAN bot-nya diundang ulang','Class Bot harus dipakai, DAN prefix-nya diatur ke $'], c:0, fb:'Membaca teks pesan adalah hak istimewa yang harus diberikan di kedua tempat. Salah satu saja meninggalkan bot yang tersambung tapi tidak mendengar apa pun.'},
      {q:'Mengapa modul ini menyuruh Anda me-restart sesi Colab dengan sengaja sebelum Anda pernah mengajar dengannya?', opts:['Supaya Anda sudah melihat file yang diunggah lenyap dan bisa menjelaskannya dengan tenang ketika itu terjadi pada satu kelas penuh','Untuk mengosongkan memori sebelum melatih sebuah model','Karena Colab mewajibkan restart setelah unggahan pertama','Untuk memeriksa apakah Google Drive Anda cukup lega'], c:0, fb:'Sesi Colab bersifat sementara dan ini membingungkan setiap angkatan. Pernah menyaksikannya terjadi berarti Anda menjelaskan alih-alih berimprovisasi.'},
      {q:'Apa yang harus Anda lakukan dengan catatan tentang hal-hal yang salah selama lab ini?', opts:['Simpanlah — tersandungnya Anda sendiri adalah prediksi terbaik yang tersedia tentang apa yang akan dialami siswa, dan catatan itu memperluas FAQ-nya','Buang setelah semuanya berjalan','Kirimkan ke tim platform sebagai laporan bug','Pakai untuk memutuskan pelajaran mana yang dilewati'], c:0, fb:'Anda sedang menjalani perjalanan siswa lebih dulu. Di mana Anda tersandung, di situ pula mereka akan tersandung, dan catatan Anda menjadi pelengkap pribadi untuk FAQ-nya.'},
      {q:'Mengapa Anda harus membuka dek slide-nya sambil menyiapkan setiap pelajaran?', opts:['Karena rencananya merujuk slide-slide tertentu, dan tanpa melihatnya Anda akan mengulangi apa yang sudah dibahas sebuah slide atau melewatkan sesuatu yang tidak dibahasnya','Karena slide-nya memuat jawaban tesnya','Karena siswa tidak bisa melihat slide-nya kecuali Anda membukanya lebih dulu','Karena deknya mendaftar tenggat PR-nya'], c:0, fb:'Rencananya menulis hal seperti “Slide 6 (slide ini beranimasi)”. Tidak tahu apa isinya berarti menebak-nebak apa yang masih perlu dijelaskan.'},
      {q:'Ke mana Anda harus melihat sebelum membangun materi pengajaran Anda sendiri untuk sebuah pelajaran?', opts:['Bagian Materials pada rencana pelajaran itu — presentasi, kuis, video, repository awal, ZIP, dan alat penilaian sering kali sudah disediakan','FAQ di pelatihan ini','Tampilan penilaian di platform','PR pelajaran sebelumnya'], c:0, fb:'Beberapa hal yang mungkin Anda kira harus Anda bangun ternyata sudah ada, termasuk ZIP diary lengkapnya dan repository solusi bot AI-nya.'},
      {q:'Apa gladi bersih terbaik untuk pelajaran pertama Anda, setelah Anda punya akses platform?', opts:['Pilih satu pelajaran lalu susuri rencananya, dek slide-nya, dan tugas platform-nya secara berdampingan seolah-olah Anda sedang mengajarkannya','Baca ulang modul metodologi pelatihan ini','Hafalkan pengaturan waktu tahapan untuk keempat puluh pelajarannya','Bangun dulu setiap proyek dalam kursusnya'], c:0, fb:'Sebuah gladi bersih dengan materi sungguhan yang terbuka bersamaan memberi tahu Anda lebih banyak tentang kesiapan Anda daripada tes mana pun di sini.'}
    ]
  },
  {
    id:5, emoji:'🛠️', color:'#F5B93B',
    title:'M1 — VS Code, Git & Bot Discord',
    desc:'Modul 1 kursus: pengulangan Python, GitHub, interpreter dan VS Code, pip dan Discord.py, fungsi, serta class Client vs Bot.',
    obj:'Ajarkan empat pelajaran yang mengubah lulusan Python Basic menjadi seseorang yang bekerja seperti developer: mengulang sintaks, mendaftar dan memakai GitHub, memasang IDE dan interpreter sungguhan, memasang library dengan pip, membangun bot Discord, memindahkan logika ke dalam fungsi, dan membaca dokumentasi library untuk mengembangkannya.',
    prep:'~4–5 jam. Sebagian besarnya membangun bot-nya; jangan lewati itu.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 1 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Menulis aplikasi kamus bahasa gaulnya dengan dictionary sungguhan dan pencarian <code>.keys()</code>',
        'Menulis generator kata sandinya dengan <code>random.choice</code> di dalam perulangan',
        'Memindahkan generator itu ke <code>bot_logic.py</code> sebagai sebuah fungsi lalu meng-import-nya ke <code>main.py</code>',
        'Mendaftarkan sebuah bot, mengaktifkan Message Content Intent, dan membuat bot class <strong>Client</strong> membalas di server Anda sendiri',
        'Menulis ulang bot yang sama memakai class <strong>Bot</strong> dengan <code>@bot.command()</code> dan sebuah prefix',
        'Mem-push sebuah proyek ke GitHub, mengubahnya, mem-push lagi, lalu melihat riwayat file-nya',
        'Dengan sengaja menjalankan sebuah bot dengan token-nya dihapus, supaya Anda tahu seperti apa kegagalan itu terlihat'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> pengulangan + GitHub + aplikasi kamus bahasa gaul; <strong>L2</strong> interpreter dan VS Code + generator kata sandi; <strong>L3</strong> pip, Discord Developer Portal, bot pertama, dan fungsi; <strong>L4</strong> dokumentasi library, class <code>Bot</code>, riwayat repository, dan pengujian antarteman.',
          why:'Modul ini memindahkan siswa keluar dari platform dan masuk ke alur kerja profesional. Kalau GitHub, interpreter, atau token-nya tidak pernah benar-benar berfungsi, semua yang mengikutinya dalam kursus ini terhambat.',
          learn:'Siswa mengulang <code>input</code>/<code>print</code>, list, perulangan, dictionary, dan <code>random</code>; membuat akun serta repository GitHub; memasang dan mengonfigurasi VS Code; memasang <code>discord.py</code> dengan pip; mendaftarkan sebuah bot dan memakai token dengan aman; serta mengemas logika mereka sendiri menjadi fungsi yang di-import.',
          confident:'Perbedaan interpreter dan IDE; memilih interpreter yang tepat di VS Code; <code>pip install</code>; tiga hal yang dibutuhkan sebuah bot Discord (server, bot terdaftar, token); <code>intents.message_content</code>; serta perbedaan antara <code>Client</code> dan <code>Bot</code>.'
        }
      ]},
      {t:'📚 L1 — Pengulangan, GitHub & kamus bahasa gaul', cards:[
        {type:'text', h:'Apa yang terjadi dalam pelajarannya', b:'Perkenalan (permainan nama + kata sifat), aturan kelompok yang dibuat <em>oleh siswa sendiri</em>, kuis pengulangan yang serentak, lalu tugas utamanya: program yang mencetak fakta acak tentang dirimu dari sebuah list. Lalu GitHub — teorinya, pendaftarannya, dan pembuatan repository publik kosong yang pertama. Lalu proyek sungguhannya: aplikasi kamus yang menjelaskan bahasa gaul modern kepada kerabat yang lebih tua. Terakhir mereka mengunggah kodenya dan menjelajahi repository satu sama lain.'},
        {type:'text', h:'Python yang sedang Anda ulang', b:'Sengaja dipersempit: <code>input</code>/<code>print</code>, <strong>list</strong>, <strong>perulangan</strong>, library <strong>random</strong>, dan — untuk proyek utamanya — <strong>dictionary</strong>. Ingatkan bahwa sebuah entri terdiri dari <strong>key dan value</strong>, dan bahwa <code>.keys()</code> memberi Anda semua key-nya. Tanyakan arah pencariannya: apakah kita mencari key lewat value-nya, atau value lewat key-nya?'},
        {type:'code', lbl:'kamus bahasa gaul — bentuk yang dicapai siswa', code:`meme_dict = {
    <span class="cs">"CRINGE"</span>: <span class="cs">"Sesuatu yang luar biasa aneh atau memalukan"</span>,
    <span class="cs">"LOL"</span>: <span class="cs">"Respons umum untuk sesuatu yang lucu"</span>,
    <span class="cs">"ROFL"</span>: <span class="cs">"Reaksi untuk sesuatu yang lucu, mirip LOL"</span>
}

word = <span class="cf">input</span>(<span class="cs">"Ketik kata modern yang kamu nggak paham (HURUF BESAR!): "</span>)

<span class="ck">if</span> word <span class="ck">in</span> meme_dict.<span class="cf">keys</span>():
    <span class="cf">print</span>(meme_dict[word])
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Kata ini belum ada... Tapi kami sedang mengusahakannya!"</span>)`},
        {type:'hi', h:'Mengapa penjelajahan repository itu penting', b:'Setelah mengunggah, siswa memposting tautan repository mereka ke chat grup lalu berburu kata paling lucu yang ditambahkan teman sekelasnya. Itulah inti tahap ini: ia menunjukkan kepada mereka, secara langsung, bahwa <strong>Git membuat kode orang lain tersedia untuk Anda seketika</strong>. Contohkan sendiri — bukalah beberapa repository dan komentari dengan suara keras apa yang dikerjakan setiap siswa dengan baik.'},
        {type:'tip', txt:'Siapkan pelajaran berikutnya di akhir pelajaran ini. PR-nya meminta siswa meneliti sebuah proyek GitHub dan membawa 2–3 pertanyaan tentangnya; suruh juga mereka <strong>mengunduh installer Python dan VS Code di rumah</strong>, serta menyiapkan sebuah email. Unduhan saat pelajaran kedua akan memakan waktu praktik Anda.'}
      ]},
      {t:'💻 L2 — Interpreter, VS Code & generator kata sandi', cards:[
        {type:'text', h:'Masalah yang membingkainya', b:'Serangan hacker. Diskusikan bagaimana data pribadi dicuri dan apa yang melindunginya — jangan membuka tautan mencurigakan, jangan memasukkan informasi pribadi di situs yang tidak dikenal, dan <strong>pakai kata sandi yang kuat</strong>. Yang terakhir itu menjadi proyeknya: program open-source yang menghasilkan kata sandi kuat.'},
        {type:'qa', h:'Dua konsep yang harus mendarat', items:[
          {k:'Interpreter', v:'Komputer hanya memahami kode mesin — 0 dan 1. Menulis itu dengan tangan tidak praktis, jadi kita menulis dalam Python dan interpreter-nya menerjemahkannya menjadi kode mesin yang bisa dijalankan prosesornya.'},
          {k:'IDE', v:'Integrated Development Environment: program yang membantu Anda menulis kode — pelengkapan otomatis, petunjuk sintaks, pemeriksaan error, pengujian, berbagi. Kursus ini memakai VS Code; PyCharm juga bagus. IDE tidak khusus untuk Python.'}
        ]},
        {type:'text', h:'Urutan konfigurasinya', b:'Pasang interpreter-nya, pasang VS Code, pasang <strong>ekstensi Python</strong>-nya, lalu pilih interpreter-nya dengan <code>Shift+Ctrl+P</code>. Tekankan dua hal: konfigurasi dilakukan <strong>sekali</strong>, tepat setelah pemasangan; dan <strong>ekstensi file-nya penting</strong> — file Python harus berakhiran <code>.py</code> supaya bisa dijalankan. Lalu buat folder proyek (satu folder per proyek, selalu), sebuah file <code>.py</code>, dan jalankan <code>print("Hello, world!")</code>.'},
        {type:'code', lbl:'generator kata sandinya', code:`<span class="ck">import</span> random

elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"</span>

pass_length = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Masukkan panjang kata sandi: "</span>))
password = <span class="cs">""</span>

<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
    password += random.<span class="cf">choice</span>(elements)

<span class="cf">print</span>(password)`},
        {type:'hi', h:'Pelajaran ini berbentuk sprint Scrum', b:'Setiap tahap adalah sebuah <strong>sprint</strong>: diskusi singkat di depan, batas waktu yang ketat, lalu pembekalan yang mengajukan dua pertanyaan tetap — “<em>apakah kita benar-benar mencapai hasilnya?</em>” dan “<em>bagaimana ini mendekatkan kita pada penyelesaian masalah utamanya?</em>” Sebutkan batas waktunya dengan suara keras. Ini paparan pertama mereka pada ritme yang berulang sepanjang kursus dan diajarkan secara benar di Modul 8 kursus.'},
        {type:'tip', txt:'Tahap pengunggahannya sengaja dibuat canggung: minta siswa memikirkan sendiri cara memasukkan kode mereka ke repository kosongnya, sambil berdiskusi dengan suara keras, sebelum Anda menunjukkan tombol unggah di web GitHub. Lalu katakan bahwa itu hanya salah satu pilihan — dan bukan yang paling praktis. Itu menyiapkan integrasi Git di VS Code pada M2L3.'}
      ]},
      {t:'🤖 L3 — pip, bot Discord & fungsi', cards:[
        {type:'text', h:'Use–Modify–Create', b:'Pelajaran ini berjalan dengan <strong>metode UMC</strong>, dan Anda harus mengerjakan dua langkah pertamanya secara berurutan: siswa <strong>memakai</strong> sebuah bot yang lengkap (menjalankannya, melihatnya bekerja), lalu <strong>memodifikasinya</strong> sambil Anda menjelaskan apa yang dilakukan setiap perubahan. Beri mereka lima menit untuk bereksperimen bebas pada kode contohnya dan jawab pertanyaan tanpa membocorkan apa pun.'},
        {type:'qa', h:'pip dan tiga hal yang dibutuhkan sebuah bot', items:[
          {k:'pip', v:'“Pip Installs Packages” — manajer paket milik Python. <code>pip install discord</code> di terminal dan library-nya sudah ada. Salah satu keunggulan terbesar Python adalah tersedianya library untuk hampir apa saja.'},
          {k:'1. Sebuah server', v:'Bot-nya butuh ruang untuk tinggal. Setiap siswa membuat server Discord-nya sendiri.'},
          {k:'2. Bot yang terdaftar', v:'Terdaftar di Discord Developer Portal, supaya Discord tahu itu bot dan izinnya bisa diatur.'},
          {k:'3. Sebuah token', v:'Kunci yang membuat program bisa menjalankan bot tertentu itu. Siapa pun yang memegangnya menguasai bot-nya sepenuhnya.'}
        ]},
        {type:'warn', txt:'Katakan ini begitu token muncul, dan setiap kali sebuah proyek diunggah: <strong>kalau ada yang mendapatkan token-mu, dia memiliki bot-mu.</strong> Jangan pernah men-commit-nya, jangan pernah mempostingnya di chat, jangan pernah membiarkannya terlihat di layar yang dibagikan. Dalam kode yang dibagikan kita menulis placeholder <code>bot.run("YOUR_BOT_TOKEN")</code>. Kalau sebuah token memang bocor, reset di Developer Portal — menghapus file-nya tidak cukup, karena Git menyimpan riwayat.'},
        {type:'code', lbl:'logika bot di file-nya sendiri — bot_logic.py', code:`<span class="ck">import</span> random

<span class="ck">def</span> <span class="cf">gen_pass</span>(pass_length):
    elements = <span class="cs">"+-/*!&amp;$#?=@&lt;&gt;"</span>
    password = <span class="cs">""</span>
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(pass_length):
        password += random.<span class="cf">choice</span>(elements)
    <span class="ck">return</span> password`},
        {type:'code', lbl:'bot yang meng-import-nya — main.py (class Client)', code:`<span class="ck">import</span> discord
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

<span class="cc"># intents menyimpan hak istimewa bot-nya</span>
intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>   <span class="cc"># aktifkan pembacaan teks pesan</span>

client = discord.<span class="ct2">Client</span>(intents=intents)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_ready</span>():
    <span class="cf">print</span>(<span class="cs">f'We have logged in as {client.user}'</span>)

<span class="cd">@client.event</span>
<span class="ck">async def</span> <span class="cf">on_message</span>(message):
    <span class="ck">if</span> message.author == client.user:   <span class="cc"># cegah bot membalas dirinya sendiri</span>
        <span class="ck">return</span>
    <span class="ck">if</span> message.content.<span class="cf">startswith</span>(<span class="cs">'$hello'</span>):
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Hi!"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> message.channel.<span class="cf">send</span>(<span class="cs">"Kata sandimu "</span> + <span class="cf">gen_pass</span>(<span class="cn">10</span>))

client.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'Fungsi, diajarkan dari kode yang ada di depan mereka', b:'Fungsi adalah kode yang Anda tulis sekali lalu Anda pakai berulang. Tunjuklah dua <code>def</code> yang sudah ada di dalam bot-nya lalu tanyakan: namanya apa? Selain nama dan badan, sebuah fungsi punya apa lagi? Fungsi lain apa yang sudah kalian kenal (<code>print</code>, <code>input</code>, <code>len</code>)? Lalu buat konkret — data <strong>masuk</strong> lewat argumen di dalam tanda kurung, dan data yang sudah diolah <strong>keluar</strong> lewat <code>return</code>. Tugasnya adalah mengubah program mereka sebelumnya menjadi sebuah fungsi, menaruhnya di file tersendiri, lalu meng-import-nya.'},
        {type:'tip', txt:'Pertanyaan diagnosis yang bagus untuk fase eksperimen: “apa yang terjadi kalau kamu menghapus <code>if message.author == client.user: return</code>?” Bot-nya mulai membalas dirinya sendiri selamanya. Biarkan mereka menemukan perulangan tak berujung itu alih-alih Anda memperingatkannya.'}
      ]},
      {t:'📖 L4 — Dokumentasi, class Bot & pengujian antarteman', cards:[
        {type:'text', h:'Tujuan sesungguhnya pelajaran ini', b:'Bukan sebuah fitur — sebuah <strong>kebiasaan</strong>. Siswa harus pulang dengan keyakinan bahwa mencari hal-hal di dokumentasi adalah yang benar-benar dilakukan programmer. Tidak ada yang hafal sebuah library; keterampilannya adalah menemukan sebuah contoh lalu mengadaptasinya. Katakan itu secara eksplisit, dan perlakukan error sebagai bagian biasa dari prosesnya, bukan sesuatu yang memalukan.'},
        {type:'twocol', left:{h:'Client', items:['Merespons <strong>event</strong> — <code>@client.event</code>','Membaca <strong>seluruh pesan</strong>, jadi mengoper sebuah nilai berarti Anda sendiri yang memecah string-nya','Pakai untuk bertindak pada API-nya seperti seorang pengguna']}, right:{h:'Bot', items:['Merespons <strong>command yang Anda definisikan</strong> — <code>@bot.command()</code>','Menerima argumen yang diketik pengguna, secara langsung','Pakai untuk mengotomatiskan tindakan tertentu']}},
        {type:'code', lbl:'bot yang sama ditulis ulang dengan class Bot', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">from</span> bot_logic <span class="ck">import</span> gen_pass

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>

<span class="cc"># command_prefix adalah penanda yang menandai sebuah command</span>
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
        {type:'warn', txt:'<strong>Jangan pernah memakai <code>Bot</code> dan <code>Client</code> dalam satu program yang sama.</strong> Siswa yang menyalin potongan kode dari dua tutorial berbeda akan melakukan persis ini dan mendapat kegagalan yang membingungkan. Ini salah satu dari “5 perbedaan” yang diminta untuk mereka temukan antara kedua varian kodenya.'},
        {type:'text', h:'Riwayat Git & pengujian antarteman', b:'Siswa <strong>memperbarui</strong> repository mereka yang sudah ada alih-alih membuat yang baru, lalu melihat riwayat file-nya — dan Anda memberi tahu mereka kebenarannya: <strong>semua yang di-push ke Git tetap di sana.</strong> Tunjukkan juga pelacak aktivitas di profilnya. Setelah itu mereka berpasangan di breakout room, menjalankan bot teman sekelasnya, dan saling memberi tiga ide perbaikan yang masuk ke chat tugas sebagai backlog. PR-nya adalah menerapkan salah satunya.'},
        {type:'tip', txt:'Sebelum pengujian antarteman, tanyakan bagaimana caranya menjalankan bot orang lain. Jawabannya resep empat langkah: buka repository mereka, salin kodenya ke proyekmu, tempelkan token <strong>milikmu sendiri</strong>, jalankan. Langkah terakhir itulah yang mereka lupakan — dan momen yang bagus untuk menegaskan ulang mengapa token itu milik mereka seorang.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa bertanya apa bedanya interpreter Python dan sebuah IDE. Apa jawaban yang akurat?', opts:['Interpreter menerjemahkan Python menjadi kode mesin yang bisa dijalankan prosesor; IDE adalah program yang membantu Anda menulis kodenya','Keduanya dua nama untuk hal yang sama','Interpreter menulis kodenya dan IDE menjalankannya','Interpreter untuk pemula dan IDE untuk profesional'], c:0, fb:'Interpreter mengubah Python yang terbaca manusia menjadi kode mesin. IDE — VS Code di sini — adalah editor dengan pelengkapan otomatis, petunjuk, dan pemeriksaan error.'},
      {q:'Apa tiga hal yang dibutuhkan sebuah bot Discord sebelum kode apa pun bisa bekerja?', opts:['Sebuah server Discord, bot yang terdaftar di Developer Portal, dan sebuah token','Langganan Discord berbayar, sebuah server, dan sebuah email','Repository GitHub, sebuah situs web, dan sebuah domain','Sebuah server Discord, webcam, dan mikrofon'], c:0, fb:'M1L3 menyatakannya sebagai tiga syarat: server-nya memberi bot sebuah ruang, pendaftarannya memberi tahu Discord bahwa itu bot supaya izinnya bisa diatur, dan token-nya membuat program Anda bisa menjalankannya.'},
      {q:'Seorang siswa ingin mem-push bot mereka yang sudah berjalan ke repository GitHub publik. Apa yang harus terjadi lebih dulu?', opts:['Token aslinya harus dikeluarkan dan diganti dengan placeholder — dan kalau pernah ter-push, harus di-reset di Developer Portal','Tidak perlu apa-apa — repository-nya boleh publik karena kodenya milik mereka','Repository-nya harus diganti nama menjadi sesuatu yang terdengar privat','Mereka sebaiknya menghapus baris token-nya setelah mem-push'], c:0, fb:'Token adalah kata sandi: siapa pun yang memilikinya menguasai bot-nya. Menghapusnya belakangan tidak menolong karena Git menyimpan riwayat — satu-satunya perbaikan untuk token yang bocor adalah me-reset-nya.'},
      {q:'Apa perbedaan class Client dan Bot di discord.py?', opts:['Client merespons event; Bot merespons command yang Anda definisikan dengan sebuah prefix — dan keduanya tidak boleh dipakai bersamaan dalam satu program','Client untuk teks dan Bot untuk gambar','Bot adalah versi lama dari Client','Client lebih cepat karena membaca lebih sedikit pesan'], c:0, fb:'Client bereaksi pada event lewat @client.event; Bot bereaksi pada command yang didefinisikan lewat @bot.command() dan bisa menerima argumen yang diketik pengguna. Mencampurnya dalam satu program merusaknya.'},
      {q:'Bot seorang siswa online tapi mengabaikan setiap pesan. Apa hal pertama yang diperiksa?', opts:['Bahwa intents.message_content = True ada di kodenya dan Message Content Intent yang bersesuaian aktif di Developer Portal','Bahwa koneksi internet mereka stabil','Bahwa server-nya punya cukup anggota','Bahwa mereka memakai class Client alih-alih Bot'], c:0, fb:'Membaca teks pesan adalah hak istimewa. Itu harus diaktifkan di kodenya dan di portalnya — keduanya, atau bot-nya tidak melihat apa pun.'},
      {q:'Mengapa kursus ini meminta siswa mengubah generator kata sandinya menjadi sebuah fungsi di file terpisah?', opts:['Untuk menunjukkan bahwa logika yang ditulis sekali bisa di-import dan dipakai ulang — data masuk lewat argumen dan keluar lewat return','Karena Discord mewajibkan setiap bot punya dua file','Untuk membuat file-nya lebih kecil supaya lebih cepat diunggah','Karena fungsi berjalan lebih cepat daripada kode biasa'], c:0, fb:'M1L3 memakai program mereka sendiri sebelumnya untuk mengajarkan fungsi secara konkret: argumen masuk, return keluar, di-import ke main.py — “persis seperti programmer sungguhan.”'},
      {q:'Apa tujuan utama M1L4, pelajaran dokumentasinya?', opts:['Membangun kebiasaan menemukan dan mengadaptasi contoh dari dokumentasi, karena tidak ada programmer yang hafal sebuah library','Menghafal daftar lengkap command discord.py','Menyelesaikan bot-nya sehingga tidak butuh perubahan lagi','Mengajari siswa menghindari library dan menulis semuanya sendiri'], c:0, fb:'Catatan pelajarannya eksplisit: siswa harus belajar bahwa mereka bisa dan sebaiknya mencari contoh kode di dokumentasi library-nya. Memprogram adalah penjelajahan dan pembelajaran terus-menerus.'},
      {q:'Siswa tidak mengunduh installer Python dan VS Code di rumah. Apa yang disarankan kursus ini untuk Anda lakukan?', opts:['Mulai unduhannya sekarang, tapi tetap mengajar siswa yang sudah siap alih-alih menghambat seluruh kelas','Batalkan tahap praktiknya dan pakai waktunya untuk teori','Tunggu semua orang selesai mengunduh sebelum memulai','Pulangkan mereka untuk memasangnya lalu lanjutkan minggu depan'], c:0, fb:'Installer dijadikan PR justru untuk menghindari ini. Kalau sebagian siswa melewatkannya, mulai unduhannya lalu lanjutkan — technical assistant bisa membantu mereka menyusul.'}
    ]
  },
  {
    id:6, emoji:'🎨', color:'#E8663B',
    title:'M2 — File, HTML, CSS & UI/UX',
    desc:'Modul 2 kursus: membaca file dan folder dengan os, bot meme, API, proyek pengulangan bot ramah lingkungan, target audiens, HTML, CSS, UI/UX, dan Git di dalam VS Code.',
    obj:'Ajari siswa bekerja dengan file dan data eksternal, membangun proyek untuk audiens yang mereka pilih, dan membuat halaman web pertama mereka. Anda harus bisa menjelaskan mode akses file dan os.listdir, merangkai sebuah request API, menjalankan diskusi target audiens, mengajarkan tag HTML dan aturan CSS yang esensial, mengkritik sebuah halaman dari sisi UI/UX, serta menyambungkan GitHub ke VS Code.',
    prep:'~4 jam. Bagian HTML/CSS-nya cepat; bagian bot dan API-nya tidak.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 2 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Menulis bot yang mengirim satu gambar tertentu dengan <code>discord.File</code> dan mode <code>\'rb\'</code>',
        'Menyempurnakannya untuk memilih file secara acak memakai <code>os.listdir</code> — dan mengalami error path setidaknya sekali',
        'Memanggil sebuah API publik dengan <code>requests</code> lalu menarik sebuah field dari respons <code>.json()</code>-nya',
        'Membangun halaman HTML kecil memakai tag-tag dari kursusnya lalu menautkan sebuah <code>style.css</code> padanya',
        'Menambahkan animasi <code>@keyframes</code> dan varian <code>:hover</code>',
        'Menyematkan widget pihak ketiga dengan <code>&lt;iframe&gt;</code>',
        'Mempublikasikan halamannya ke GitHub dari dalam VS Code',
        'Melihat situs web yang sengaja dibuat buruk dan menuliskan sendiri masalah UX dan UI-nya'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> file, folder, dan bot meme (plus API dan tes sumatif); <strong>L2</strong> bot ramah lingkungan dari nol dengan target audiens yang dipilih sendiri; <strong>L3</strong> front-end vs back-end, HTML, CSS, dan Git di dalam VS Code; <strong>L4</strong> prinsip UI/UX, animasi CSS, dan widget yang disematkan.',
          why:'Di sinilah siswa berhenti mengonsumsi data yang mereka ketik sendiri dan mulai membacanya dari disk dan dari internet — dan di sinilah separuh web dari kursus ini dimulai. Ini juga memperkenalkan gagasan bahwa sebuah proyek itu <em>untuk seseorang</em>.',
          learn:'Siswa membaca file dengan <code>with open(...)</code>, mendaftar isi folder dengan <code>os.listdir</code>, mengirim gambar lewat bot, memanggil API publik dengan <code>requests</code>, membangun bot untuk target audiens pilihan mereka, menulis halaman HTML bergaya tentang kecanduan teknologi, menganimasikannya dengan <code>@keyframes</code>, menyematkan widget dengan <code>&lt;iframe&gt;</code>, dan mempublikasikannya dari VS Code.',
          confident:'<code>with open()</code> dan mode akses file; <code>os.listdir()</code> plus <code>random.choice</code>; <code>discord.File</code>; apa yang dikembalikan sebuah API dan bagaimana <code>requests</code>/<code>.json()</code> menanganinya; tag HTML yang esensial; menautkan stylesheet; serta <code>git config</code> plus mempublikasikan repository dari VS Code.'
        }
      ]},
      {t:'📁 L1 — File, bot meme & API', cards:[
        {type:'text', h:'Apa yang diajarkan tentang file', b:'Dua hal yang langsung salah dilakukan siswa: <strong>nama file dan ekstensinya</strong> harus persis, dan file-nya harus berada <strong>di folder programnya</strong> (atau mereka harus menulis path lengkapnya). Berikan perhatian sungguhan pada kata kunci <code>with</code> dan pada <strong>mode akses</strong> — <code>\'rb\'</code> untuk membaca gambar sebagai byte adalah yang dibutuhkan bot-nya. Katakan bahwa mereka selalu bisa kembali ke tugas ini dan membaca ulang kodenya.'},
        {type:'code', lbl:'bot meme — satu gambar, lalu satu acak dari foldernya', code:`<span class="ck">import</span> discord
<span class="ck">from</span> discord.ext <span class="ck">import</span> commands
<span class="ck">import</span> os, random

intents = discord.Intents.<span class="cf">default</span>()
intents.message_content = <span class="ck">True</span>
bot = commands.<span class="ct2">Bot</span>(command_prefix=<span class="cs">'$'</span>, intents=intents)

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">mem</span>(ctx):
    <span class="cc"># os.listdir memberi kita setiap nama file di dalam folder</span>
    img_name = random.<span class="cf">choice</span>(os.<span class="cf">listdir</span>(<span class="cs">'images'</span>))
    <span class="ck">with</span> <span class="cf">open</span>(<span class="cs">f'images/{img_name}'</span>, <span class="cs">'rb'</span>) <span class="ck">as</span> f:
        picture = discord.<span class="ct2">File</span>(f)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(file=picture)

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'text', h:'Urutan pembangunannya penting', b:'Kerjakan dalam dua langkah, bukan satu. Pertama sebuah bot yang mengirim <strong>satu meme tertentu</strong> pada <code>$mem</code> — pipa dasarnya bekerja. Baru setelah itu sempurnakan agar memilih file <strong>acak</strong> dari foldernya, dan di situlah <code>os</code> membuktikan gunanya. Rencana pengembangan langkah kedua: sebuah variabel yang menyimpan nama-nama file, sebuah variabel yang memilih satu secara acak, lalu kirim.'},
        {type:'hi', h:'API, sebagai tugas tambahannya', b:'Untuk siswa yang lebih cepat: <strong>API</strong> adalah sekumpulan fungsi dan data siap pakai yang dibuka layanan lain. Alih-alih membangun basis data gambar bebek Anda sendiri, Anda memanggil API bebeknya. Dalam Python itu berarti library <code>requests</code> — kirim sebuah HTTP request, dapatkan respons JSON, lalu tarik field yang Anda butuhkan darinya. Sebagian API butuh access key gratis; dokumentasinya memberi tahu request apa saja yang tersedia dan apa yang dikembalikannya.'},
        {type:'code', lbl:'memanggil API publik dari bot-nya (tanpa perlu key)', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_duck_image_url</span>():
    url = <span class="cs">'https://random-d.uk/api/random'</span>
    res = requests.<span class="cf">get</span>(url)
    data = res.<span class="cf">json</span>()          <span class="cc"># ubah respons JSON-nya jadi dict</span>
    <span class="ck">return</span> data[<span class="cs">'url'</span>]

<span class="cd">@bot.command</span>(<span class="cs">'duck'</span>)
<span class="ck">async def</span> <span class="cf">duck</span>(ctx):
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_duck_image_url</span>())`},
        {type:'text', h:'Kereta metakognisinya', b:'Pelajaran ini membawa untaian kedua yang mengalir sepanjang 90 menitnya: lima “stasiun” terjadwal tempat Anda berhenti dan membuat siswa memikirkan <em>bagaimana</em> mereka belajar. Stasiun 1 — nyatakan tujuannya dengan jelas. Stasiun 2 — bertanya pada diri sendiri: bagaimana apa yang sudah kamu ketahui membantumu memahami ini? Stasiun 3 — alat dan strategi apa yang kamu pakai? Stasiun 4 — evaluasi strategi-strategi itu. Stasiun 5 — refleksi akhir: apakah strategi ini akan membantumu di luar kursus ini? Bacalah buku panduan tutornya sebelum Anda menjalankannya.'},
        {type:'good', txt:'Kalau ada siswa yang frustrasi selama pelajarannya, pembingkaian metakognisi memberi Anda sesuatu yang benar-benar berguna untuk dikatakan: reaksi itu <strong>sah</strong>, dan itu informasi tentang <em>strategi</em> yang mereka pilih, bukan tentang kemampuan mereka. Berilah mereka selamat karena menyadarinya — penyadaran itulah keterampilannya.'},
        {type:'tip', txt:'Ada <strong>tes sumatif</strong> dalam pelajaran ini (15 menit). Sajikan sebagai pengulangan, bukan ujian bertaruhan tinggi, dan jalankan secara interaktif. Ada juga tugas kreatif: buat meme tentang memprogram bot Discord, lima menit, pengatur waktu menyala. Simpan meme-nya — Anda bisa memakainya sebagai pemanasan selama berminggu-minggu.'}
      ]},
      {t:'♻️ L2 — Bot ramah lingkungan, dari nol, untuk sebuah audiens', cards:[
        {type:'text', h:'Apa yang berbeda dari pelajaran ini', b:'Tidak ada panduan langkah demi langkah. Siswa membangun <strong>bot lengkap rancangan mereka sendiri</strong> dalam 40 menit, memakai semua yang ada dari Modul 1 dan L1. Peran Anda bergeser dari menjelaskan menjadi mengajukan pertanyaan penuntun dan memberi kiat. Meskipun tiap siswa membangun miliknya sendiri, doronglah mereka saling membantu.'},
        {type:'text', h:'Target audiens — konsep yang mengubah proyeknya', b:'Target audiens adalah kelompok orang yang untuknya Anda membangun; mengetahui masalah mereka itulah yang membuat sebuah produk berguna. Pelajarannya memberi tiga audiens untuk bot pengurangan sampah — <strong>remaja</strong> yang ingin mengurangi sampah rumah tangga tapi tidak tahu harus mulai dari mana, <strong>orang dewasa</strong> dalam posisi yang sama, dan <strong>orang yang sudah tertarik</strong> pada praktik ramah lingkungan yang ingin melangkah lebih jauh. Masing-masing menyiratkan fitur yang berbeda: kiat yang dipersonalisasi, panduan langkah demi langkah, atau bagian berita dan artikel. Siswa memilih satu lalu menguncinya secara terbuka di chat.'},
        {type:'qa', h:'Ide bot untuk ditawarkan kalau mereka mentok', items:[
          {k:'Bot kerajinan plastik', v:'Ide-ide untuk memakai ulang plastik rumah tangga.'},
          {k:'Bot pemilahan', v:'Memberi tahu pengguna sebuah barang masuk ke tempat sampah yang mana dan apa yang harus didaur ulang.'},
          {k:'Bot penguraian', v:'Menyebutkan berapa lama sebuah barang rumah tangga terurai.'}
        ]},
        {type:'warn', txt:'Tahap pengunggahan GitHub dalam pelajaran ini <strong>dinilai</strong> — tautan di chat tugasnya adalah cara Anda menilai proyeknya, jadi tautan yang hilang berarti siswa yang tidak ternilai. Ingatkan mereka lagi, dengan suara keras, bahwa token-nya tidak ikut naik bersama kodenya. Proyek di sini bernilai sampai 50 poin lewat alat penilaiannya.'},
        {type:'hi', h:'Akhir Topik 1 — tahap karier', b:'Pelajaran ini menutup busur Modul 1 kursus dengan tahap lima menit yang bukan pengisi waktu: rayakan bahwa mereka menyelesaikan sebuah topik yang sangat sedikit orang selesaikan, lalu hubungkan keterampilannya dengan pekerjaan nyata. Sebagian YouTube, Facebook, Instagram, Netflix, produk Google, Spotify, dan proyek NASA dibangun dengan Python, dan Python sudah bertahun-tahun termasuk bahasa yang paling dicari. Tanyakan kepada mereka apakah dulu mereka pernah membayangkan membangun program yang membuat hidup orang lebih mudah.'}
      ]},
      {t:'🌐 L3 — Front-end, HTML, CSS & Git di VS Code', cards:[
        {type:'text', h:'Pembingkaian dan busur sepuluh pelajarannya', b:'Umumkan: selama <strong>sepuluh pelajaran berikutnya</strong> mereka membangun situs web, dan pada akhirnya mereka akan punya lima halaman web berbeda di portofolio GitHub mereka. Pengembangan web terbagi menjadi <strong>front-end</strong> (yang dilihat pengguna) dan <strong>back-end</strong> (logika yang membuatnya bekerja). Front-end biasanya HTML + CSS + JavaScript; back-end bisa PHP, Java, Ruby, atau <strong>Python</strong> — dan framework web Python dalam kursus ini adalah <strong>Flask</strong>, yang datang di modul berikutnya.'},
        {type:'qa', h:'Pembedaan yang harus dipaku', items:[
          {k:'HTML', v:'Membuat <strong>isi dan struktur</strong> — teks, gambar, tautan. Bukan bahasa pemrograman.'},
          {k:'CSS', v:'Mengendalikan <strong>tampilannya</strong> — warna, huruf, tata letak. Juga bukan bahasa pemrograman.'},
          {k:'Mengapa penting bagi Python', v:'HTML dan CSS menjadi <em>template</em> yang diisi Flask dengan data. Menguasainya itulah yang membuat seorang developer Python bisa menghasilkan halaman yang terlihat rampung.'}
        ]},
        {type:'code', lbl:'halaman yang dibangun siswa — index.html', code:`<span class="ck">&lt;!DOCTYPE html&gt;</span>
<span class="ct2">&lt;html&gt;</span>
    <span class="ct2">&lt;head&gt;</span>
        <span class="ct2">&lt;title&gt;</span>Informasi berguna!<span class="ct2">&lt;/title&gt;</span>
        <span class="ct2">&lt;link</span> <span class="cf">rel</span>=<span class="cs">"stylesheet"</span> <span class="cf">href</span>=<span class="cs">"style.css"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;/head&gt;</span>
    <span class="ct2">&lt;body&gt;</span>
        <span class="ct2">&lt;h1&gt;</span>Ketergantungan media sosial<span class="ct2">&lt;/h1&gt;</span>
        <span class="ct2">&lt;p&gt;</span>Media sosial mengurangi waktu yang kita habiskan di dunia nyata.<span class="ct2">&lt;/p&gt;</span>
        <span class="ct2">&lt;img</span> <span class="cf">src</span>=<span class="cs">"phone.gif"</span> <span class="cf">alt</span>=<span class="cs">"Gambar 1"</span><span class="ct2">&gt;</span>
        <span class="ct2">&lt;h2&gt;</span>Bagaimana kita bisa melawannya?<span class="ct2">&lt;/h2&gt;</span>
        <span class="ct2">&lt;ul&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Batasi waktu yang dihabiskan pada perangkat kita.<span class="ct2">&lt;/li&gt;</span>
            <span class="ct2">&lt;li&gt;</span>Jadwalkan waktu bebas teknologi untuk bersantai.<span class="ct2">&lt;/li&gt;</span>
        <span class="ct2">&lt;/ul&gt;</span>
    <span class="ct2">&lt;/body&gt;</span>
<span class="ct2">&lt;/html&gt;</span>`},
        {type:'code', lbl:'style.css — dan satu perubahan yang Anda minta mereka lakukan', code:`body {
    font-family: Arial, Verdana, sans-serif;  <span class="cc">/* jenis huruf */</span>
    font-size: 11pt;                          <span class="cc">/* ukuran teks utama */</span>
    background-color: #f0f0f0;                <span class="cc">/* latar halaman */</span>
    color: #333;                              <span class="cc">/* warna teks */</span>
}

h1 {
    color: #00a800;                           <span class="cc">/* warna judul */</span>
    font-size: 24pt;
    font-family: Georgia, Times, serif;
}`},
        {type:'text', h:'Git si aplikasi, bukan cuma situs webnya', b:'Jelaskan bahwa <strong>GitHub adalah sebuah situs web</strong> dan <strong>git adalah program terpisah</strong> di komputer Anda yang membuat alur kerjanya jauh lebih mudah. Langkah pemasangan yang penting adalah <strong>memilih VS Code</strong> sebagai editornya; sisanya boleh tetap bawaan. Lalu masuk ke GitHub dari dalam VS Code — <em>sekali saja</em> — dan publikasikan halamannya sebagai repository publik baru langsung dari editornya.'},
        {type:'warn', txt:'Kalau git menolak bekerja, perbaikannya hampir selalu soal identitas. Jalankan dengan data siswanya sendiri: <code>git config --global user.email "kamu@example.com"</code> dan <code>git config --global user.name "Nama Kamu"</code>. Demonstrasikan seluruh pemasangannya lebih dulu; kalau seorang siswa tidak bisa mengikuti, minta mereka menyelesaikannya di rumah dari rekaman pelajarannya alih-alih menghambat kelas.'},
        {type:'tip', txt:'Jaga HTML dan CSS-nya tetap dangkal dengan sengaja. Catatan pelajarannya eksplisit: siswa hanya butuh dasar-dasar esensialnya, tanpa penyelaman dalam. Empat tag dan beberapa aturan CSS adalah targetnya — kedalamannya datang belakangan, lewat proyek-proyeknya.'}
      ]},
      {t:'✨ L4 — UI/UX, animasi & widget', cards:[
        {type:'text', h:'Ajarkan UI/UX lewat kritik, bukan lewat ceramah', b:'Jangan mengubah ini menjadi monolog. Bukalah situs web nyata yang sengaja buruk — kursusnya memakai situs Yale School of Art — lalu biarkan <em>siswa</em> yang menyebutkan apa yang salah, dengan semua orang mendapat giliran. Setelah itu susun jawaban mereka ke dalam dua keranjang.'},
        {type:'twocol', left:{h:'❌ Masalah UX (pengalaman)', items:['<strong>Navigasi rumit</strong> — menu yang kelebihan muatan dan tidak intuitif','<strong>Tidak ada hierarki informasi</strong> — dinding teks tanpa struktur','<strong>Aksesibilitas buruk</strong> — huruf sangat kecil, kontras rendah','<strong>Elemen yang mengganggu</strong> — animasi dan warna yang menarik perhatian menjauh dari isinya']}, right:{h:'❌ Masalah UI (antarmuka)', items:['<strong>Gaya tidak konsisten</strong> — tanpa desain yang menyatu, kekacauan visual','<strong>Antarmuka tak terduga</strong> — hal-hal yang terlihat seperti tautan padahal bukan','<strong>Tidak responsif</strong> — tidak bisa dipakai di ponsel']}},
        {type:'code', lbl:'animasi CSS dengan @keyframes — dan varian :hover-nya', code:`<span class="cd">@keyframes</span> color-change {
    0%   { color: blue; }
    50%  { color: red; }
    100% { color: blue; }
}

h1 {
    animation: color-change 3s infinite;
}

<span class="cc">/* tambahkan :hover dan dia hanya beranimasi di bawah kursor */</span>
h1:hover {
    animation: color-change 3s infinite;
}`},
        {type:'text', h:'Widget dengan &lt;iframe&gt;', b:'<strong>Widget</strong> adalah aplikasi orang lain yang disematkan di halaman Anda, memakai tag <code>&lt;iframe&gt;</code>. Contoh pelajarannya cocok rapi dengan temanya: sematkan <strong>ramalan cuaca</strong> untuk mendorong pengguna halaman kecanduan teknologi supaya keluar rumah. Situs-situs widget memungkinkan Anda mengatur tampilannya dan menyalin kode <code>&lt;iframe&gt;</code> yang sudah jadi.'},
        {type:'good', txt:'Perhatikan bagaimana dua paruh pelajaran ini tersambung: Anda baru saja mengajari mereka bahwa animasi bisa menjadi <em>masalah</em> UX, lalu Anda mengajari mereka menganimasikan. Buat ketegangannya eksplisit — “sekarang kamu bisa melakukan ini, tapi kapan sebaiknya kamu melakukannya?” Kritik mereka sendiri terhadap situs yang buruk itu menjadi standar yang mereka pegang untuk diri sendiri.'},
        {type:'tip', txt:'Tutup dengan kuis pengulangannya, dan akhiri pada dua pertanyaan refleksi yang disarankan rencananya: prinsip UX mana yang menurutmu paling penting, dan mana yang benar-benar akan kamu pakai di aplikasimu sendiri? PR-nya adalah tugas “bereskan proyeknya” tentang struktur proyek, yang menyiapkan tata letak folder yang lebih rumit yang dibutuhkan Flask di modul berikutnya.'}
      ]}
    ],
    quiz:[
      {q:'Mengapa bot meme membuka file gambarnya dalam mode \'rb\'?', opts:['Gambar adalah data biner, jadi harus dibaca sebagai byte alih-alih sebagai teks','Karena \'rb\' berarti “random bytes”, yang memilih gambarnya','Karena Discord hanya menerima file yang dibuka dalam mode baca','Itu sembarangan — mode apa pun bisa'], c:0, fb:'Mode akses file itu penting: \'rb\' membaca file-nya sebagai byte mentah, yang memang dibutuhkan discord.File untuk sebuah gambar.'},
      {q:'os.listdir(\'images\') memberi Anda apa, dan mengapa bot meme membutuhkannya?', opts:['Setiap nama file di dalam foldernya, supaya random.choice bisa memilih satu alih-alih selalu mengirim gambar yang sama','Ukuran foldernya dalam byte','Daftar file handle terbuka yang siap dikirim','Izin foldernya, yang diperiksa Discord'], c:0, fb:'Bot-nya dibangun dalam dua langkah: pertama mengirim satu gambar tetap, lalu memakai os.listdir plus random.choice untuk memilih file mana pun di dalam foldernya.'},
      {q:'Seorang siswa ingin bot mereka mengirim gambar bebek acak. Apa pendekatan profesional yang diajarkan kursus ini?', opts:['Panggil API publik dengan library requests lalu baca URL-nya dari respons JSON-nya','Unduh beberapa ratus gambar bebek ke dalam folder images','Minta setiap pengguna mengunggah gambar bebek lebih dulu','Hasilkan bebeknya dengan model gambar'], c:0, fb:'Itulah inti tugas API-nya: alih-alih membangun basis data Anda sendiri, Anda memakai API yang sudah menyediakan datanya — requests mengirim panggilan HTTP-nya dan .json() mengurai balasannya.'},
      {q:'Apa itu target audiens, dan mengapa pelajaran bot ramah lingkungan meminta siswa memilih satu?', opts:['Kelompok spesifik yang untuknya produk itu dibuat — mengetahui masalah mereka itulah yang membuat bot-nya benar-benar berguna, dan itu mengubah fitur mana yang dibangun','Jumlah minimum pengguna yang harus dijangkau bot-nya','Kumpulan server Discord yang boleh dimasuki bot-nya','Teman sekelas yang akan menguji bot-nya'], c:0, fb:'Pelajarannya memberi tiga audiens untuk bot yang sama, masing-masing menyiratkan fitur yang berbeda — kiat yang dipersonalisasi, panduan langkah demi langkah, atau bagian berita.'},
      {q:'Pernyataan mana tentang HTML, CSS, dan Python yang benar?', opts:['HTML menyusun isinya dan CSS mengatur gayanya — keduanya bukan bahasa pemrograman, dan keduanya menjadi template yang diisi Flask dengan data','Ketiganya adalah bahasa pemrograman yang dipakai untuk front-end','CSS adalah back-end dan HTML adalah front-end','HTML adalah sebuah library Python'], c:0, fb:'HTML membuat isinya, CSS mengendalikan tampilannya, dan menguasai keduanya itulah yang membuat aplikasi Flask bisa menghasilkan halaman yang terlihat rampung.'},
      {q:'Commit git seorang siswa gagal dengan pesan tentang identitas. Apa yang Anda jalankan?', opts:['git config --global user.email dan git config --global user.name, dengan data mereka sendiri','git init --force','pip install git','git reset --hard'], c:0, fb:'Catatan M2L3 memberi persis kedua perintah ini sebagai perbaikan ketika git belum dikonfigurasi di komputer itu.'},
      {q:'Anda sedang mengajarkan UI/UX. Apa yang menurut pelajarannya TIDAK boleh Anda lakukan?', opts:['Mengubahnya menjadi ceramah sepihak — siswa yang harus mengenali sendiri masalah pada situs web buruk yang nyata','Menampilkan situs web nyata, karena mungkin menyinggung','Menyebut aksesibilitas, yang di luar jangkauan kelompok usianya','Membiarkan siswa saling berbeda pendapat'], c:0, fb:'Catatan poin pentingnya eksplisit: jangan jadikan ini ceramah, adakan diskusi, dan idealnya beri setiap siswa kesempatan berbicara.'},
      {q:'Apa yang berubah ketika :hover ditambahkan pada selector animasi CSS?', opts:['Animasinya hanya berjalan selama tetikus berada di atas elemennya','Animasinya berjalan dua kali lebih cepat','Animasinya berulang selamanya alih-alih sekali','Itu mematikan animasinya di ponsel'], c:0, fb:'Pelajarannya meminta siswa menambahkan :hover justru supaya mereka melihat bahwa animasinya lalu hanya diputar ketika kursornya berada di atas elemennya.'},
      {q:'Apa itu widget dalam konteks pelajaran ini, dan bagaimana cara menyematkannya?', opts:['Aplikasi orang lain yang ditampilkan di dalam halaman Anda, disematkan dengan tag &lt;iframe&gt;','Animasi CSS yang bereaksi terhadap pengguna','Fungsi Python yang mengembalikan HTML','Fitur GitHub untuk berbagi halaman'], c:0, fb:'Widget adalah aplikasi pihak ketiga yang disematkan lewat <iframe> — pelajarannya menyematkan ramalan cuaca ke halaman kecanduan teknologi.'}
    ]
  },
  {
    id:7, emoji:'🌐', color:'#2FA37C',
    title:'M3 — Flask & Template Jinja',
    desc:'Modul 3 kursus: virtual environment, memasang Flask, route dan f-string, template Jinja dan variabel, branch repository, form HTML, serta elemen interaktif.',
    obj:'Ajari siswa membangun aplikasi web Python yang sungguhan. Anda harus bisa menjelaskan mengapa virtual environment ada, memasang Flask ke dalamnya, membedah contoh dari dokumentasinya, mengajarkan route dan url_for, menjelaskan apa yang dilakukan sebuah template engine, merangkai form HTML ke sebuah route Flask, dan menjalankan pelajaran EduScrum sesuai waktu.',
    prep:'~5–6 jam. Ini modul pertama yang tidak bisa Anda ajarkan hanya dari membaca.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 3 kursus, Anda harus sudah MEMBANGUN APLIKASI FLASK YANG BERJALAN. Secara spesifik:',
      items:[
        'Membuat environment pipenv dan memasang Flask ke dalamnya',
        'Menulis aplikasi satu route yang mengembalikan HTML, dengan <code>app.run(debug=True)</code>, lalu membukanya di browser',
        'Menambahkan route kedua di URL-nya sendiri dan menautkan kedua halamannya',
        'Berpindah dari mengembalikan string menjadi <code>render_template</code> dengan folder <code>templates/</code> yang sungguhan',
        'Mengoper sebuah variabel ke dalam template dan menampilkannya dengan Jinja <code>{{ }}</code>',
        'Membangun <code>&lt;form&gt;</code> HTML, membacanya dengan <code>request.form</code>, lalu menampilkan hasilnya di halaman lain',
        'Merusaknya dengan sengaja dengan mengatur <code>id</code> tanpa <code>name</code>, lalu melihat KeyError-nya',
        'Memakai <code>url_for()</code> untuk sebuah tautan, dan sebuah <code>&lt;select&gt;</code> yang nilainya sampai ke Python',
        'Menarik sebuah proyek dari branch repository'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> virtual environment, memasang Flask, route pertama dan f-string, plus halaman kedua di URL-nya sendiri; <strong>L2</strong> Jinja, <code>render_template</code> dan variabel template, membangun kalkulator energi rumah pintar; <strong>L3</strong> pelajaran EduScrum tentang branch repository, <code>url_for</code>, dan form HTML; <strong>L4</strong> elemen interaktif dan generator meme yang mengubah halamannya secara dinamis.',
          why:'Ini modul tempat Python mulai menyajikan halaman web. Semua yang ada di Modul 4 dan 7 kursus berdiri langsung di atasnya, jadi pemahaman yang goyah tentang route atau template menghambat sisa jalur web-nya.',
          learn:'Siswa mengisolasi sebuah proyek dengan virtual environment, memasang Flask dengan <code>pipenv</code>, menulis route, mengembalikan isi dinamis dengan f-string, merender halaman HTML utuh lewat Jinja, mengoper variabel ke dalam template, menarik proyek dari branch repository, membangun sebuah form dan membaca datanya, serta menggerakkan halamannya dari nilai <code>&lt;select&gt;</code> dan <code>&lt;input&gt;</code>.',
          confident:'Mengapa virtual environment mencegah konflik dependency; <code>pipenv install flask</code>; <code>@app.route</code> dan <code>app.run(debug=True)</code>; beda antara mengembalikan string dan <code>render_template</code>; Jinja <code>{{ }}</code>; <code>url_for()</code>; serta <code>request.form</code> dengan <code>methods=[\'GET\',\'POST\']</code>.'
        }
      ]},
      {t:'🧪 L1 — Virtual environment, Flask & route', cards:[
        {type:'text', h:'Apa itu virtual environment, dalam kata-kata sederhana', b:'Sebuah alat yang <strong>mengisolasi sebuah proyek beserta dependency-nya</strong> dari setiap proyek lain. Itu mencegah konflik versi antar-library, membuat proyeknya mudah dipindahkan ke komputer lain, dan berarti paket yang dipasang untuk proyek ini tidak mencemari yang lainnya. Begitu Anda berada di dalam environment yang dibuat dengan <code>pipenv</code>, library harus dipasang ke dalamnya: <code>pipenv install flask</code>, bukan <code>pip install</code> polos.'},
        {type:'warn', txt:'Jangan sampai tahap ini kelebihan waktu — topik pentingnya datang setelahnya. Kalau seorang siswa tidak bisa membuat environment-nya bekerja, <strong>berilah semangat lalu lanjut</strong>: katakan secara eksplisit bahwa itu tidak akan menghalangi mereka mengerjakan pekerjaan hari ini dan mereka bisa mencoba lagi nanti. Kehilangan dua puluh menit di sini merenggut tahap route Anda.'},
        {type:'text', h:'Bacalah dokumentasinya, jangan mendiktekan kodenya', b:'Kirimkan tautan dokumentasi Flask kepada siswa lalu minta mereka <strong>menemukan sendiri contoh halaman dasarnya</strong> (tunjukkan letak contoh pertamanya kalau mereka kesulitan). Lalu jelaskan cara menjalankan dan mengujinya, dan bedah kodenya bersama-sama. Ini kebiasaan dokumentasi dari M1L4 yang dipakai sungguhan, satu modul berikutnya.'},
        {type:'code', lbl:'aplikasi Flask pertama — satu route, isi dinamis, f-string', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask
<span class="ck">import</span> random

app = <span class="ct2">Flask</span>(__name__)

facts_list = [
    <span class="cs">"Lebih dari 50% orang berusia 18 sampai 34 menganggap dirinya bergantung pada ponsel pintar."</span>,
    <span class="cs">"Media sosial punya sisi positif dan negatif — kita perlu menyadari keduanya."</span>
]

<span class="cd">@app.route</span>(<span class="cs">"/"</span>)
<span class="ck">def</span> <span class="cf">facts</span>():
    <span class="cc"># f-string mengevaluasi apa pun yang ada di dalam kurung kurawalnya</span>
    <span class="ck">return</span> <span class="cs">f'&lt;p&gt;{random.choice(facts_list)}&lt;/p&gt;'</span>

app.<span class="cf">run</span>(debug=<span class="ck">True</span>)`},
        {type:'text', h:'Lalu sembunyikan halamannya di balik URL-nya sendiri', b:'<strong>URL</strong> adalah alamat sebuah halaman: ketik alamatnya, browser meminta ke server-nya, server mengembalikan halaman di alamat itu. Tugasnya adalah memindahkan fakta acaknya dari halaman utama ke <code>/random_fact</code>, memberi halaman utama sebuah pesan sambutan, dan menautkan keduanya dengan <code>&lt;a href="/random_fact"&gt;Lihat fakta acak!&lt;/a&gt;</code>. Dua route, dua fungsi — itulah model mental yang dibutuhkan siswa sebelum Jinja.'},
        {type:'tip', txt:'Sarankan satu siswa menjadi tutor selama tahap pemasangan Flask dan mendemonstrasikan layarnya. Itu lebih cepat daripada Anda menarasikannya, dan itu salah satu langkah diferensiasi yang terus-menerus dipakai kursus ini untuk siswa yang kuat.'}
      ]},
      {t:'🧩 L2 — Template Jinja & kalkulator energi', cards:[
        {type:'text', h:'Masalahnya: krisis energi', b:'Bukalah dengan rumah pintar — apakah bagus atau buruk, dan jenis hunian mana yang paling merusak lingkungan? <strong>Krisis energi</strong> adalah ketika permintaan sumber daya energi jauh melampaui pasokannya. Sebagian besar energi masih berasal dari sumber tak terbarukan, dan menghasilkan serta mengangkutnya mencemari udara, air, dan tanah. Proyeknya adalah kalkulator yang memperkirakan efisiensi energi sebuah rumah pintar.'},
        {type:'qa', h:'Tiga hal yang diberikan Jinja kepada Anda', items:[
          {k:'Template', v:'Halaman HTML siap pakai yang bisa Anda ubah dan sesuaikan secara dinamis.'},
          {k:'Halaman utuh, bukan tag', v:'Siswa sudah tahu cara mengembalikan tag HTML satuan dari Flask. Import <code>render_template</code> dan Anda bisa mengembalikan seluruh halaman.'},
          {k:'Variabel di dalam HTML', v:'Hadiah sesungguhnya — sematkan nilai Python ke dalam halamannya dengan <code>{{ }}</code> lalu ubah secara langsung.'}
        ]},
        {type:'code', lbl:'dari mengembalikan string menjadi merender halaman', code:`<span class="ck">from</span> flask <span class="ck">import</span> Flask, render_template

<span class="cd">@app.route</span>(<span class="cs">'/'</span>)
<span class="ck">def</span> <span class="cf">index</span>():
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>)`},
        {type:'code', lbl:'variabel Jinja di dalam template-nya', code:`<span class="cc">&lt;!-- size dan lights adalah nilai yang dioper dari Python --&gt;</span>
<span class="ct2">&lt;li</span> <span class="cf">class</span>=<span class="cs">"list__item"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ size + "/7" }}"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;img</span> <span class="cf">class</span>=<span class="cs">"item__img"</span> <span class="cf">src</span>=<span class="cs">"../static/img/light.svg"</span> <span class="cf">alt</span>=<span class="cs">"light"</span><span class="ct2">&gt;</span>
    <span class="ct2">&lt;span&gt;</span>4-6 bohlam<span class="ct2">&lt;/span&gt;</span>
  <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/li&gt;</span>`},
        {type:'text', h:'Bagaimana pelajarannya dijalankan', b:'Pasang Jinja2, tarik proyeknya dari repository, lalu <strong>bagi siswa menjadi pasangan di breakout room</strong>. Tugas mereka adalah menganalisis template-nya dan menghubungkan front-end dengan back-end — khususnya, memikirkan potongan kode mana yang bertanggung jawab atas halaman mana. Siswa yang tidak mau berpasangan boleh mempelajarinya sendiri. Setelah itu semua orang mengerjakan tugas-tugas template-nya, dan pelajarannya berakhir dengan tugas kreatif: ciptakan kartu bangunan ramah lingkunganmu sendiri, dengan deskripsi, koefisien, dan gambarnya sendiri.'},
        {type:'tip', txt:'Mintalah siswa yang lebih kuat melihat lebih dekat dokumentasi Jinja sebagai tugas tambahan mereka alih-alih berlari mendahului dalam proyeknya. Itu menjaga mereka tetap di dalam topik hari ini dan memperkuat kebiasaan membaca dokumentasi.'}
      ]},
      {t:'🌿 L3 — Branch, url_for & form (EduScrum)', cards:[
        {type:'hi', h:'Ini pelajaran EduScrum — pengaturan waktu adalah keterampilannya', b:'Pelajarannya dibangun sebagai <strong>dua sprint dengan retrospektif</strong>. Sebutkan batas waktu tiap sprint dengan suara keras. Catatan pelajarannya terus terang tentang mode kegagalannya: kalau Anda tertinggal dari jadwal, <strong>tetaplah lanjut ke retrospektif</strong> dan bahas apa yang tidak berjalan. Menyelesaikan setiap tugas kurang penting dibandingkan kelompoknya mengalami satu siklus sprint yang utuh.'},
        {type:'qa', h:'Pertanyaan retrospektifnya', items:[
          {k:'1', v:'Apa yang kalian capai? Apakah waktunya cukup untuk semuanya?'},
          {k:'2', v:'Tahap mana yang paling sulit?'},
          {k:'3', v:'Bagaimana kalian akan memperbaiki sprint ini?'}
        ]},
        {type:'text', h:'Branch repository — metafora yang berhasil', b:'<strong>Branch</strong> itu seperti salinan repository yang dibuat untuk satu tugas tertentu. Tanyakan kepada mereka: proyekmu dipakai orang setiap hari dan kamu perlu mengubah sesuatu — apakah kamu menghentikan seluruh proyeknya selama kamu mengembangkan? Jelas tidak. Kamu membuat sebuah branch, membangun dan mengujinya di sana, lalu me-merge-nya ke proyek utama setelah kamu yakin itu bekerja. Dalam pelajaran ini tujuan praktisnya sekadar menemukan branch yang tepat dan mengunduh file proyeknya dari sana.'},
        {type:'text', h:'url_for dan form', b:'Jelaskan <code>url_for()</code> — ia membangun sebuah URL dari <em>nama fungsi view</em>-nya alih-alih path yang ditulis mati, jadi tautannya tidak rusak ketika route-nya berubah. Lalu form: tunjukkan kepada siswa formulir yang mereka sendiri isi ketika mendaftar ke Kodland, sehingga <code>&lt;form&gt;</code> dan <code>&lt;input&gt;</code> datang sebagai sesuatu yang familier alih-alih abstrak.'},
        {type:'code', lbl:'tautannya, input-nya, dan route yang menerimanya', code:`<span class="cc">&lt;!-- tautan yang dibangun dari nama fungsi view-nya --&gt;</span>
<span class="ct2">&lt;a</span> <span class="cf">href</span>=<span class="cs">"{{ url_for('form') }}"</span> <span class="cf">class</span>=<span class="cs">"main__link"</span><span class="ct2">&gt;</span>Isi formulirnya<span class="ct2">&lt;/a&gt;</span>

<span class="cc">&lt;!-- input yang mengumpulkan sebuah email --&gt;</span>
<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"email"</span><span class="ct2">&gt;</span>E-mail<span class="ct2">&lt;/label&gt;</span>
<span class="ct2">&lt;input</span> <span class="cf">type</span>=<span class="cs">"email"</span> <span class="cf">name</span>=<span class="cs">"email"</span> <span class="cf">id</span>=<span class="cs">"email"</span> <span class="cf">required</span><span class="ct2">&gt;</span>`},
        {type:'code', lbl:'membaca form-nya di sisi Python', code:`<span class="cd">@app.route</span>(<span class="cs">'/submit'</span>, methods=[<span class="cs">'GET'</span>, <span class="cs">'POST'</span>])
<span class="ck">def</span> <span class="cf">submit_form</span>():
    name    = request.form[<span class="cs">'name'</span>]      <span class="cc"># key-nya adalah name="" milik input-nya</span>
    email   = request.form[<span class="cs">'email'</span>]
    address = request.form[<span class="cs">'address'</span>]
    date    = request.form[<span class="cs">'date'</span>]

    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'form_result.html'</span>,
                           name=name, email=email,
                           address=address, date=date)`},
        {type:'warn', txt:'Bug form paling umum: <code>request.form[\'email\']</code> membaca atribut <strong><code>name</code></strong> milik input-nya, bukan <code>id</code>-nya. Siswa mengatur <code>id</code> lalu lupa <code>name</code>, kemudian mendapat KeyError. Katakan sekali di awal dan Anda menghemat lima interupsi.'},
        {type:'tip', txt:'PR-nya memperluas form-nya agar juga menyimpan informasi yang dikirimkan ke dalam sebuah file <code>.txt</code> — yang diam-diam mengulang penanganan file dari Modul 2 kursus dan memberi bocoran mengapa basis data adalah ide yang lebih baik. Itulah seluruh persiapan untuk modul berikutnya.'}
      ]},
      {t:'🎭 L4 — Elemen interaktif & generator meme', cards:[
        {type:'text', h:'Yang dibangun', b:'Sebuah <strong>generator meme</strong>: pengguna memilih sebuah templat dari <code>&lt;select&gt;</code>, mengetikkan keterangannya ke dalam input, dan halamannya diperbarui dengan meme yang jadi. Siswa menarik proyeknya dari repository, berburu elemen-elemennya di dalamnya, menambahkan meme mereka sendiri ke <code>&lt;select&gt;</code>, lalu menulis back-end yang menerima teksnya dan mendorongnya ke dalam template — termasuk memakai variabel Jinja di dalam CSS untuk menata keterangannya.'},
        {type:'qa', h:'Tag yang diperkenalkan pelajaran ini', items:[
          {k:'&lt;select&gt;', v:'Daftar tarik-turun — wadahnya.'},
          {k:'&lt;option&gt;', v:'Satu pilihan di dalam daftar tarik-turunnya.'},
          {k:'Polanya', v:'Baca nilai yang dipilih di sisi Python persis seperti field form lainnya, lalu oper ke dalam template-nya.'}
        ]},
        {type:'hi', h:'Minigame “temukan kalau bisa!”', b:'Sebelum ada pengetikan kode: ingatkan sebentar seperti apa tiap elemennya, lalu beri mereka <strong>dua menit</strong> untuk menemukan semuanya sendiri di dalam proyeknya. Tanyakan setelahnya berapa yang mereka temukan. Itu mengubah membaca basis kode yang asing — keterampilan yang benar-benar sulit — menjadi permainan dengan pengatur waktu, dan itu berarti mereka sudah terorientasi sebelum mulai menyunting.'},
        {type:'good', txt:'Akhiri dengan lomba meme terbaik: siswa memakai alat yang baru saja mereka bangun untuk menghasilkan meme, mengirim tangkapan layarnya ke chat grup, lalu memilih. Pemenangnya mendapat hak memposting satu meme seminggu di chat-nya. Itu cuma butuh sepuluh menit dan membuat proyeknya terasa benar-benar dirilis — dan persis perasaan itulah yang sedang dirancang kursus ini.'},
        {type:'tip', txt:'Perhatikan apa yang dipilih siswa selama mereka berburu meme. Rencananya meminta Anda memantau pemilihan meme mereka dan membantu pencariannya — sebagian untuk menjaga ritmenya, sebagian karena Andalah yang bertanggung jawab atas apa yang berakhir di dalam proyek kelas bersama.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa bertanya mengapa mereka butuh virtual environment sama sekali. Apa jawaban yang akurat?', opts:['Ia mengisolasi proyeknya beserta dependency-nya, mencegah konflik versi dan membuat proyeknya mudah dipindahkan ke komputer lain','Ia membuat Python berjalan lebih cepat','Ia diwajibkan Flask dan tidak punya kegunaan lain','Ia menyembunyikan kodenya dari pengguna lain komputer itu'], c:0, fb:'Virtual environment mengisolasi dependency sebuah proyek, menghindari konflik antar-versi library, dan menjaga paket terpasang per proyek.'},
      {q:'Di dalam proyek yang dikelola pipenv, bagaimana seorang siswa memasang Flask?', opts:['pipenv install flask — supaya masuk ke environment proyek itu','pip install flask, yang selalu bekerja dengan cara yang sama','Dengan mengunduh Flask dari situsnya lalu menyalin foldernya ke dalam','Flask sudah ada di dalam Python dan tidak perlu dipasang'], c:0, fb:'Memasang library umumnya bekerja dengan cara yang sama, tapi di dalam environment pipenv Anda harus memasang ke environment itu: pipenv install flask.'},
      {q:'Apa beda antara mengembalikan f-string berisi HTML dan memakai render_template?', opts:['f-string mengembalikan potongan kecil HTML dari fungsinya; render_template mengembalikan seluruh halaman HTML dari folder templates','render_template adalah cara lama untuk melakukan hal yang sama','f-string bisa memuat variabel dan render_template tidak','render_template hanya bekerja untuk halaman utama'], c:0, fb:'Itu persis langkah dari M3L1 ke M3L2: Flask bisa mengembalikan tag secara langsung, tapi render_template milik Jinja mengembalikan halaman utuh — dan membuat Anda bisa menyuntikkan variabel ke dalamnya.'},
      {q:'Mengapa kursus ini mengajarkan url_for() alih-alih href yang ditulis mati?', opts:['Ia membangun URL-nya dari nama fungsi view-nya, jadi tautannya tetap bekerja kalau path route-nya berubah','Lebih pendek diketik','Ia mengenkripsi URL-nya','Ia diwajibkan untuk tautan apa pun di dalam sebuah form'], c:0, fb:'url_for() merujuk fungsinya alih-alih path-nya, dan itulah sebabnya tautan pada kalkulatornya memakai {{ url_for(\'form\') }}.'},
      {q:'Form seorang siswa terkirim tapi Flask melempar KeyError pada request.form[\'email\']. Apa penyebab yang paling mungkin?', opts:['Input-nya punya id tapi tidak punya atribut name yang bersesuaian — request.form membaca name-nya','Mereka lupa meng-import Flask','Route-nya kekurangan debug=True','Form-nya butuh basis data dulu sebelum bisa dibaca'], c:0, fb:'request.form berkunci pada atribut name milik input-nya. Mengatur id saja adalah kesalahan pemula yang klasik di sini.'},
      {q:'Bagaimana Anda akan menjelaskan branch repository kepada seorang siswa?', opts:['Salinan proyek yang dibuat untuk satu tugas tertentu, dikembangkan dan diuji terpisah, lalu di-merge ke proyek utama setelah berhasil','Cadangan yang diambil otomatis setiap hari','Akun GitHub kedua untuk proyek yang sama','Folder di dalam repository untuk versi-versi lama'], c:0, fb:'Pembingkaian pelajarannya: Anda tidak bisa menghentikan proyek yang sedang hidup untuk mengubahnya, jadi Anda membuat branch, menguji, lalu me-merge kembali ketika Anda yakin.'},
      {q:'Anda sudah dua puluh menit dalam pelajaran EduScrum dan jelas tertinggal dari jadwal. Apa yang disarankan kursus ini?', opts:['Tetap lanjut ke retrospektif dan bahas apa yang tidak berjalan — siklus sprint-nya lebih penting daripada menyelesaikan setiap tugas','Lewati retrospektifnya dan terus mengetik kode sampai tugasnya selesai','Perpanjang pelajarannya melewati waktu berakhirnya','Berikan kode solusinya kepada siswa supaya mereka menyusul'], c:0, fb:'Catatan EduScrum-nya eksplisit: manajemen waktu yang ketat adalah intinya. Kalau Anda tertinggal, lanjutlah ke retrospektifnya dan bahas itu.'},
      {q:'Seorang siswa tidak bisa membuat virtual environment-nya bekerja dan tahap Flask-nya hendak dimulai. Apa langkah yang tepat?', opts:['Yakinkan mereka bahwa itu tidak akan menghalangi pekerjaan hari ini, lanjutkan pelajarannya, dan bantu mereka mencoba lagi nanti','Hentikan pelajarannya sampai itu bekerja untuk semua orang','Suruh mereka melewati modulnya','Minta mereka bekerja tanpa Python untuk sisa kursusnya'], c:0, fb:'Catatan pelajarannya menyatakan persis ini: jangan melebihi waktu yang dialokasikan, berilah semangat kepada siswanya, dan katakan bahwa itu tidak akan mencegah mereka mengerjakan pekerjaan hari ini.'},
      {q:'Apa tujuan minigame “temukan kalau bisa!” dalam pelajaran generator meme?', opts:['Ia membuat siswa terorientasi dalam basis kode yang asing — sebuah keterampilan nyata — sebelum mereka mulai menyuntingnya','Ia menguji apakah mereka menghafal daftar tag HTML','Ia mengisi waktu sementara proyeknya diunduh','Ia menentukan siapa yang presentasi di akhir'], c:0, fb:'Dua menit untuk menemukan sendiri elemen-elemennya mengubah membaca kode asing menjadi permainan, dan berarti mereka sudah tahu jalannya sebelum membuat perubahan.'}
    ]
  },
  {
    id:8, emoji:'🗄️', color:'#7C5CFC',
    title:'M4 — Basis Data, Autentikasi & Deployment',
    desc:'Modul 4 kursus: LiveCoding, basis data SQLAlchemy, class, menghubungkan basis data ke HTML, pendaftaran dan login pengguna, deployment ke PythonAnywhere, dan situs portofolio.',
    obj:'Ajari siswa menyimpan dan mengambil data sungguhan serta menaruh sebuah situs di internet. Anda harus bisa menjalankan pelajaran LiveCoding dengan benar, mendefinisikan sebuah class model, menjelaskan class memakai Flask itu sendiri, merangkai pendaftaran dan login dengan session, melakukan deploy ke PythonAnywhere termasuk file WSGI-nya, dan menangani catatan penting soal penyimpanan kata sandi dengan jujur.',
    prep:'~6–7 jam. Modul terberat dalam pelatihan ini. Siapkan dua kali duduk.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 4 kursus, Anda harus sudah MEMBANGUN APLIKASI DIARY-NYA DARI UJUNG KE UJUNG — Anda diharapkan mem-LiveCode ini di depan siswa, dan itu mustahil hanya dari membaca. Secara spesifik:',
      items:[
        'Memasang <code>flask_sqlalchemy</code> dan mendefinisikan class model dengan field <code>db.Column</code> serta sebuah <code>primary_key</code>',
        'Membuat file <code>.db</code>-nya dan menyimpan sebuah record dengan <code>db.session.add()</code> lalu <code>commit()</code>',
        'Dengan sengaja menghilangkan <code>commit()</code> dan memastikan tidak ada yang tersimpan dan tidak ada error',
        'Membaca record kembali dengan <code>.query.all()</code>, <code>.order_by()</code>, dan <code>.get(id)</code>, lalu menampilkannya di sebuah template',
        'Menambahkan tabel <code>User</code> kedua, mengalami error “no such table”, lalu memperbaikinya dengan menghapus dan membuat ulang <code>.db</code>-nya',
        'Membangun pendaftaran dan login, dengan <code>session</code> dan <code>secret_key</code>, serta menyaring entri dengan <code>filter_by()</code>',
        'Men-deploy aplikasi yang berjalan ke <strong>PythonAnywhere</strong>, termasuk menyunting file WSGI-nya, lalu membukanya di ponsel Anda',
        'Merusak deployment-nya dengan sengaja lalu menemukan penyebabnya di log error-nya',
        'Melatih dengan suara keras satu kalimat catatan penting tentang hashing kata sandi'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> basis data dan “Buku Harian Programmer”, diajarkan lewat LiveCoding, plus class; <strong>L2</strong> tabel pengguna, pendaftaran dan login dengan session; <strong>L3</strong> pelajaran EduScrum yang men-deploy ke <strong>PythonAnywhere</strong>; <strong>L4</strong> tiga sprint membangun dan mempublikasikan situs portofolio, lalu tonggak karier separuh jalan.',
          why:'Situs yang melupakan segalanya begitu Anda menutupnya bukanlah sebuah aplikasi. Modul inilah tempat proyek siswa memperoleh ingatan dan alamat publik — dan ini titik teknis tertinggi jalur web-nya.',
          learn:'Siswa membuat basis data SQLite lewat <code>flask_sqlalchemy</code>, mendefinisikan tabel sebagai class, menyimpan dan mengueri record, membangun pendaftaran dan login, menyimpan pengguna yang sedang login di dalam <code>session</code>, men-deploy aplikasi yang berjalan ke URL sungguhan, serta merilis situs portofolio dengan daftar proyek dinamis dan form umpan balik.',
          confident:'Metode LiveCoding; definisi field <code>db.Column</code> dan <code>primary_key</code>; <code>db.session.add()</code> / <code>commit()</code>; <code>Card.query.all()</code> / <code>get(id)</code> / <code>filter_by()</code>; <code>session</code> plus <code>secret_key</code>; langkah WSGI di PythonAnywhere; serta catatan jujur tentang kata sandi berbentuk teks biasa.'
        }
      ]},
      {t:'🎥 L1 — LiveCoding, basis data & class', cards:[
        {type:'hi', h:'LiveCoding — metode yang menjadi fondasi pelajaran ini', b:'LiveCoding berarti tutor <strong>membangun kodenya sedikit demi sedikit bersama siswa</strong>, sambil membagikan layarnya. Intinya bukan hasil akhirnya — melainkan bahwa siswa melihat pemrograman sebagai proses berkelanjutan yang penuh keputusan kecil, bukan sesuatu yang tiba dalam keadaan lengkap.'},
        {type:'qa', h:'Cara mem-LiveCode dengan baik', items:[
          {k:'Narasikan', v:'Bicaralah sambil Anda mengetik kode; jelaskan logika di balik setiap tindakan.'},
          {k:'Bertanyalah', v:'Jaga keterlibatan siswa dengan pertanyaan alih-alih monolog.'},
          {k:'Buat kesalahan', v:'Error itu wajar — buatlah beberapa dengan <em>sengaja</em> lalu minta siswa menemukannya.'},
          {k:'Pelankan', v:'Jangan terburu-buru. Berhentilah sejenak supaya siswa bisa menyusul.'},
          {k:'Gambar', v:'Pakai alat anotasi Zoom untuk memvisualkan logikanya.'},
          {k:'Mudah dibaca', v:'Huruf yang jelas dan besar, dan tulislah dalam blok kode supaya strukturnya terlihat dan mudah dijelaskan.'}
        ]},
        {type:'text', h:'Proyeknya dan kaitannya', b:'<strong>Buku Harian Programmer</strong> — aplikasi web dengan basis data sungguhan di belakangnya. Pembingkaiannya adalah privasi: semua yang kita lakukan hidup secara daring, jadi bisakah kamu percaya bahwa datamu aman? Hari ini kamu belajar membangun layanan yang benar-benar rahasia, karena <em>kamulah</em> yang menyimpan datanya. <strong>Basis data</strong> adalah kumpulan data terorganisir yang memungkinkan Anda menyimpan, mengelola, dan mengambil informasi.'},
        {type:'code', lbl:'tabelnya, didefinisikan sebagai sebuah class', code:`<span class="ck">class</span> <span class="ct2">Card</span>(db.<span class="ct2">Model</span>):
    <span class="cc"># setiap field menjadi sebuah kolom</span>
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>)
    title    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    subtitle = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">300</span>), nullable=<span class="ck">False</span>)
    text     = db.<span class="ct2">Column</span>(db.<span class="ct2">Text</span>, nullable=<span class="ck">False</span>)

    <span class="ck">def</span> <span class="cf">__repr__</span>(self):
        <span class="ck">return</span> <span class="cs">f'&lt;Card {self.id}&gt;'</span>`},
        {type:'text', h:'Class, diajarkan setelahnya — dengan sengaja', b:'Perhatikan urutan pelajarannya: siswa <strong>membangun tabelnya lebih dulu</strong>, baru Anda menjelaskan class. Itu disengaja, karena saat itu mereka sudah punya pertanyaan sungguhan — “kenapa kita menulis <code>class</code>?” Di Python semuanya adalah object, dan class adalah cetak biru tempat object dibuat. Contoh pamungkasnya ada tepat di depan mereka: <strong>Flask itu sebuah class</strong>, dengan method dan fungsinya sendiri yang sudah mereka pakai sepanjang modul ini.'},
        {type:'code', lbl:'menyimpan dan membaca record', code:`<span class="cc"># simpan entri baru</span>
card = <span class="ct2">Card</span>(title=title, subtitle=subtitle, text=text)
db.session.<span class="cf">add</span>(card)
db.session.<span class="cf">commit</span>()

<span class="cc"># semua entri, urut berdasarkan id, untuk halaman index</span>
cards = <span class="ct2">Card</span>.query.<span class="cf">order_by</span>(<span class="ct2">Card</span>.id).<span class="cf">all</span>()
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'index.html'</span>, cards=cards)

<span class="cc"># satu entri tertentu, berdasarkan id-nya</span>
card = <span class="ct2">Card</span>.query.<span class="cf">get</span>(id)
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'card.html'</span>, card=card)`},
        {type:'warn', txt:'<code>add()</code> tanpa <code>commit()</code> adalah bug pelajaran ini: tidak ada yang tersimpan dan tidak ada error yang memberi tahu Anda. Mintalah siswa mengucapkan pasangannya dengan suara keras — “add lalu commit” — seperti mereka mengucapkan “item pertama adalah item nol” di Python Basic.'}
      ]},
      {t:'🔑 L2 — Pengguna, pendaftaran & login', cards:[
        {type:'text', h:'Apa yang dibangun pelajarannya', b:'Tarik proyek yang sudah diperbarui dari <strong>branch</strong>-nya, tambahkan tabel kedua untuk pengguna, tambahkan input login dan kata sandi ke <code>login.html</code>, simpan pengguna yang terdaftar, lalu periksa login yang dikirimkan terhadap basis datanya. Setiap langkah memantapkan sesuatu dari L1 — pelajaran ini sengaja merupakan pengulangan keterampilan yang sama pada isi yang baru.'},
        {type:'code', lbl:'tabel User-nya', code:`<span class="ck">class</span> <span class="ct2">User</span>(db.<span class="ct2">Model</span>):
    id       = db.<span class="ct2">Column</span>(db.<span class="ct2">Integer</span>, primary_key=<span class="ck">True</span>, autoincrement=<span class="ck">True</span>)
    email    = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">100</span>), nullable=<span class="ck">False</span>)
    password = db.<span class="ct2">Column</span>(db.<span class="ct2">String</span>(<span class="cn">30</span>), nullable=<span class="ck">False</span>)`},
        {type:'code', lbl:'pemeriksaan login — perulangan atas tabel pengguna', code:`users_db = <span class="ct2">User</span>.query.<span class="cf">all</span>()

<span class="ck">for</span> user <span class="ck">in</span> users_db:
    <span class="ck">if</span> form_login == user.email <span class="ck">and</span> form_password == user.password:
        session[<span class="cs">'user_email'</span>] = user.email   <span class="cc"># ingat siapa yang sedang login</span>
        <span class="ck">return</span> <span class="cf">redirect</span>(<span class="cs">'/index'</span>)

<span class="cc"># tidak ada yang cocok di seluruh tabel → tampilkan error</span>
error = <span class="cs">'Login atau kata sandi salah'</span>
<span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'login.html'</span>, error=error)`},
        {type:'text', h:'Session-lah yang membuat buku hariannya jadi pribadi', b:'Begitu <code>session[\'user_email\']</code> terisi, route index bisa menyaring entri untuk pengguna itu: <code>Card.query.filter_by(user_email=email).all()</code>. Itu membutuhkan <code>app.secret_key</code> yang sudah diatur, dan membutuhkan tabel <code>Card</code> yang sudah mendapat kolom <code>user_email</code>. Tunjuklah perbedaan antara <code>.all()</code> dan <code>.filter_by(...).all()</code> — itu seluruh gagasan “dataku” dalam satu baris.'},
        {type:'warn', txt:'Ucapkan catatan keamanannya dengan suara keras, dalam satu kalimat: <strong>aplikasi sungguhan tidak pernah menyimpan kata sandinya sendiri</strong> — mereka menyimpan sidik jari acaknya yang disebut hash, sehingga bahkan developer-nya pun tidak bisa membacanya. Hari ini kita melewatinya supaya perulangan pembandingnya tetap terlihat. Sepuluh detik kejujuran mencegah kebiasaan yang benar-benar buruk, dan siswa pada tingkat ini akan segera bertemu hashing.'},
        {type:'tip', txt:'<code>secret_key</code> di dalam kode pelajarannya adalah placeholder untuk proyek pengajaran. Katakan kepada siswa bahwa dalam aplikasi sungguhan yang di-deploy, secret key itu rahasia — tidak di-commit ke GitHub — dengan alasan yang sama seperti token bot. Itu tersambung langsung kembali ke Modul 1.'},
        {type:'warn', txt:'Menambahkan class <code>User</code> berarti file <code>.db</code> lama tidak punya tabel itu. Perbaikan yang diajarkan di sini kasar: <strong>hapus file basis data lamanya lalu buat yang baru dari terminal.</strong> Peringatkan siswa lebih dulu — itu menghapus entri buku harian yang baru saja mereka buat.'}
      ]},
      {t:'🚀 L3 — Deploy ke PythonAnywhere (EduScrum)', cards:[
        {type:'text', h:'Apa arti deployment bagi siswa ini', b:'Sampai sekarang aplikasi mereka hanya berjalan di komputer mereka sendiri. <strong>PythonAnywhere</strong> menaruhnya di internet dengan URL sungguhan. Perkenalkan dasbornya, bantu semua orang mendaftar, lalu susuri deployment-nya: unggah dan unzip file-nya, pasang library-nya, buat sebuah web app yang menunjuk ke <code>main.py</code>, ganti kode di sana dengan kode lokal mereka, sunting <strong>file konfigurasi WSGI</strong> di halaman Web, tambahkan kode pembuatan basis datanya, lalu reload aplikasinya.'},
        {type:'tip', txt:'File WSGI adalah langkah yang diam-diam merusak deployment — siswa melewatinya karena itu bukan bagian dari kode proyek mereka. Katakan apa itu: file yang dibaca server untuk menemukan aplikasi Anda. Mintalah semua orang menunjukkan suntingan WSGI mereka sebelum menekan reload, dan biarkan halaman log server-error dan app-error tetap terbuka, karena di situlah diagnosisnya berada.'},
        {type:'text', h:'Sprint kedua: pengujian dan target audiens', b:'Setelah deployment, siswa <strong>menguji aplikasi yang sudah hidup dan membandingkannya dengan versi lokalnya</strong> — kebiasaan yang benar-benar berguna, karena “jalan kok di komputerku” adalah bug tertua dalam perangkat lunak. Lalu diskusi target audiens kembali, kini diarahkan ke portofolio yang mereka bangun pelajaran berikutnya: apa tujuan proyekmu, dan untuk siapa? Mereka mencatat jawabannya di buku harian yang mereka bangun.'},
        {type:'good', txt:'Ini momen memuaskan yang layak disebut dengan lantang. Seorang siswa sekarang bisa mengirim tautan kepada teman atau orang tuanya dan membuat mereka memakai benda yang mereka bangun. Mintalah mereka melakukannya — audiens di luar ruang kelas adalah motivasi terkuat yang tersedia bagi Anda.'}
      ]},
      {t:'💼 L4 — Situs portofolio & titik separuh jalan', cards:[
        {type:'text', h:'Tiga sprint, satu hasil', b:'<strong>Sprint 1 — bahan:</strong> tarik templatnya, dan pakai buku hariannya untuk mencatat apa yang mereka butuhkan, memilih palet warna, gambar, dan teksnya. <strong>Sprint 2 — pengembangan:</strong> masukkan bahannya ke dalam situsnya, bangun etalase proyek dinamis dengan Jinja, dan proses sebuah form umpan balik. <strong>Sprint 3 — pengujian dan open source:</strong> ujilah lalu publikasikan ke repository publik. Retrospektif setelah masing-masing.'},
        {type:'hi', h:'Pelajaran ini mengulang seluruh jalur web-nya', b:'Tidak ada yang baru diperkenalkan. Portofolionya membutuhkan elemen dinamis Jinja, pembuatan dan pemrosesan form, pilihan warna dan tata letak, serta publikasi Git — dan justru itulah intinya. Kalau seorang siswa bisa membangun ini tanpa bantuan, separuh web dari kursusnya sudah mendarat. Kalau tidak bisa, Anda kini tahu persis pelajaran mana yang harus ditinjau ulang.'},
        {type:'text', h:'Akhir Topik 2 — tonggak 50%', b:'Modul 4 kursus menutup topik Flask dan titik separuh jalan Python Pro. Katakan dengan semestinya: mereka sudah <strong>50% menempuh sebuah kursus tingkat lanjut</strong>, yang sangat sedikit orang selesaikan. Lalu hubungkan ke depan — tanyakan apa yang ingin mereka lakukan dengan keterampilan ini, dan biarkan mereka menjawab. PR yang dinilai adalah menyempurnakan portofolionya, bernilai sampai 50 poin lewat alat penilaiannya.'},
        {type:'tip', txt:'Portofolionya punya kehidupan di luar kursus ini. Doronglah siswa terus memperbaruinya dengan setiap proyek berikutnya — bot AI dari Modul 7, proyek kelulusan dari Modul 10. Situs portofolio yang bertumbuh lebih berharga bagi mereka daripada sertifikat mana pun.'}
      ]}
    ],
    quiz:[
      {q:'Apa gagasan inti metode LiveCoding yang dipakai di M4L1?', opts:['Tutor membangun kodenya sedikit demi sedikit bersama siswa supaya mereka melihat pemrograman sebagai proses berisi keputusan, bukan hasil jadi','Tutor mengetik kode dalam diam dan siswa menyalin layarnya','Siswa mengetik kode sendiri sementara tutornya menonton','Tutor menunjukkan kode yang sudah jadi lalu menjelaskannya setelahnya'], c:0, fb:'LiveCoding berarti menulis kodenya bersama-sama, menarasikan keputusannya, berhenti sejenak, dan bahkan membuat kesalahan dengan sengaja untuk ditemukan siswa.'},
      {q:'Seorang siswa sudah menulis Card(...) dan db.session.add(card) tapi tidak ada yang muncul di basis datanya. Apa yang kurang?', opts:['db.session.commit() — add menyiapkan perubahannya, commit menyimpannya','Sebuah primary_key pada tabelnya','render_template setelah menyimpan','Me-restart server Flask-nya'], c:0, fb:'add() lalu commit() adalah pasangannya. Tanpa commit, record-nya tidak pernah ditulis, dan tidak ada error yang memberi tahu Anda.'},
      {q:'Mengapa kursus ini mengajarkan class SETELAH siswa membangun tabel basis datanya?', opts:['Karena saat itu mereka sudah punya pertanyaan sungguhan — “kenapa kita menulis class?” — dan Flask sendiri adalah sebuah class yang selama ini mereka pakai','Karena class terlalu sulit diperkenalkan di awal sebuah pelajaran','Karena SQLAlchemy mewajibkan urutan itu','Untuk menghemat waktu dalam rencana pelajarannya'], c:0, fb:'Tabelnya datang lebih dulu, lalu teorinya menjawab pertanyaan yang diciptakannya — dan contoh terkuatnya adalah bahwa Flask itu sendiri sebuah class dengan method-nya sendiri.'},
      {q:'Apa yang membuat buku hariannya hanya menampilkan entri milik pengguna yang sedang login?', opts:['Email penggunanya disimpan di session saat login, dan route index memakai Card.query.filter_by(user_email=email).all()','Setiap pengguna mendapat file basis datanya sendiri','Tabel Card dihapus di antara login','Jinja menyaring entrinya di dalam template'], c:0, fb:'session[\'user_email\'] plus filter_by adalah seluruh mekanismenya — dan itu butuh app.secret_key diatur supaya session-nya bekerja.'},
      {q:'Proyek M4L2 menyimpan kata sandi sebagai teks biasa. Apa yang harus Anda katakan kepada siswa?', opts:['Katakan dalam satu kalimat bahwa aplikasi sungguhan menyimpan hash alih-alih kata sandinya, dan bahwa ini penyederhanaan yang disengaja supaya logikanya tetap terlihat','Tidak usah apa-apa — itu akan membingungkan mereka pada tingkat ini','Bahwa teks biasa tidak apa-apa selama file basis datanya lokal','Bahwa mereka sebaiknya tidak pernah lagi membangun form login'], c:0, fb:'Catatan singkat dan jujur cuma butuh sepuluh detik dan mencegah kebiasaan yang benar-benar buruk. Penyederhanaannya tidak masalah; membiarkannya tak disebut, itu masalah.'},
      {q:'Setelah menambahkan class User, siswa mendapat “no such table”. Apa perbaikan yang diajarkan dalam pelajaran ini?', opts:['Hapus file .db lamanya lalu buat yang baru dari terminal — peringatkan lebih dulu bahwa itu menghapus entri yang ada','Ganti nama class User-nya agar cocok dengan file-nya','Pasang ulang flask_sqlalchemy','Tambahkan nullable=True pada setiap kolom'], c:0, fb:'File basis data lamanya dibuat sebelum class-nya ada. M4L2 meminta siswa menghapus dan membuatnya ulang — jadi peringatkan mereka tentang hilangnya data.'},
      {q:'Langkah PythonAnywhere mana yang paling sering dilewati siswa, dan itu untuk apa?', opts:['Menyunting file konfigurasi WSGI — itulah yang dibaca server untuk menemukan aplikasi Anda','Memilih username — itu menjadi URL-nya','Memasang Python — PythonAnywhere butuh itu diunggah','Mengatur debug=True di server-nya'], c:0, fb:'File WSGI bukan bagian dari kode proyek mereka, jadi terlupakan. Deployment gagal diam-diam tanpa itu, dan itulah sebabnya log error-nya penting.'},
      {q:'Mengapa M4L3 meminta siswa menguji aplikasi yang sudah di-deploy terhadap versi lokalnya?', opts:['Karena perilakunya bisa berbeda antara lokal dan yang hidup — “jalan kok di komputerku” adalah mode kegagalan yang nyata','Untuk memeriksa kecepatan internet mereka','Karena PythonAnywhere mewajibkan pengujian sebelum publikasi','Untuk membandingkan waktu muat bagi laporannya'], c:0, fb:'Membandingkan aplikasi yang hidup dengan yang lokal adalah kebiasaan rekayasa yang sungguhan, dan ini pertama kalinya dalam kursus siswa punya dua environment untuk dibandingkan.'},
      {q:'Apa tujuan situs portofolio di M4L4?', opts:['Ia mengulang seluruh jalur web-nya — Jinja, form, tata letak, dan Git — sehingga Anda bisa melihat persis apa yang sudah dan belum mendarat','Untuk memperkenalkan tata letak CSS tingkat lanjut','Untuk menggantikan proyek kelulusan','Untuk melatih deployment kedua kalinya'], c:0, fb:'Tidak ada yang baru diajarkan. Portofolionya membutuhkan Jinja dinamis, pemrosesan form, pilihan desain, dan publikasi — sekaligus alat diagnosis dan hasil kerja.'}
    ]
  },
  {
    id:9, emoji:'📊', color:'#2BB3E8',
    title:'M5 — Data, Scraping, NLP & Computer Vision',
    desc:'Modul 5 kursus: mitos AI, Google Colab, gambar sebagai piksel, rembg dan OpenCV, scraping dengan BeautifulSoup dan pandas, NLP dengan NLTK, serta melatih classifier di Teachable Machine.',
    obj:'Ajarkan fondasi data dari blok AI-nya. Anda harus bisa menjalankan aktivitas riset mitos-dan-fakta, mengemudikan Google Colab dengan percaya diri, menjelaskan gambar sebagai data piksel, mengajarkan batas hukum dan etika scraping, menjelaskan sebuah pipeline dan peran NLTK di dalamnya, serta menjalankan lomba pelatihan Teachable Machine.',
    prep:'~5 jam. Semuanya di Colab; jalankan sendiri setiap cell-nya.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 5 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Membangun notebook Colab dengan cell kode dan markdown, serta mengunggah gambar ke dalam sesinya',
        'Menghapus latar belakang sebuah gambar dengan <code>rembg</code> lalu menyusun latar baru dengan OpenCV',
        'Menuliskan teks di atas sebuah gambar dengan OpenCV',
        'Membuka devtools browser dan mengenali tag serta class yang memuat sepotong isi halaman',
        'Melakukan scraping satu halaman dengan <code>BeautifulSoup</code>, lalu mengulangnya menjadi crawler atas beberapa bagian',
        'Membangun <code>DataFrame</code> pandas dan menyimpannya dengan <code>to_csv</code> — dan menyimpan file-nya',
        'Menjalankan peringkas NLTK dari ujung ke ujung, termasuk <code>stopwords</code> dan <code>FreqDist</code>',
        'Melatih classifier Teachable Machine lalu mengujinya pada gambar yang belum pernah dilihatnya',
        'Melatih model yang sengaja buruk lalu menyaksikannya gagal dengan penuh percaya diri'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> apa itu AI (lewat riset, bukan ceramah), Google Colab, dan mengganti latar belakang gambar; <strong>L2</strong> scraping, parsing, dan crawling dengan <strong>BeautifulSoup</strong> dan <strong>pandas</strong>; <strong>L3</strong> NLP dengan <strong>NLTK</strong>, list comprehension, dan peringkas teks; <strong>L4</strong> computer vision, dataset, dan melatih classifier di <strong>Google Teachable Machine</strong>.',
          why:'Semua yang ada di Modul 6 dan 7 kursus berjalan di atas ini. AI itu data lebih dulu — dan siswa yang tidak paham apa itu dataset akan melatih model yang tidak berguna lalu menyalahkan kodenya.',
          learn:'Siswa meneliti mitos AI dan mempertahankan jawabannya, membangun notebook Colab, memotong latar belakang dengan <code>rembg</code> lalu menyusun latar baru dengan OpenCV, melakukan scraping ratusan artikel berita ke sebuah CSV, menulis fungsi yang meringkas artikel, serta melatih dan menguji classifier gambar mereka sendiri.',
          confident:'Bahwa AI modern itu AI <em>lemah</em>; cell Colab dan sesinya yang sementara; gambar sebagai larik piksel; scraping vs parsing vs crawling <strong>dan aturannya</strong>; <code>find</code>/<code>find_all</code> plus DataFrame pandas; tokenization vs lemmatization; serta mengapa kualitas dataset menentukan kualitas model.'
        }
      ]},
      {t:'🔬 L1 — Mitos AI, Colab & latar belakang gambar', cards:[
        {type:'text', h:'Ajarkan teorinya sebagai penyelidikan', b:'Jangan berceramah. Bagi siswa ke dalam breakout room berisi dua sampai empat orang lalu beri mereka <strong>sepuluh menit</strong> dengan sekumpulan pernyataan tentang AI. Tugas mereka bukan hanya menyebut mana yang mitos tapi <strong>membenarkan jawabannya dengan bukti</strong>. Sumber apa pun diperbolehkan — idealnya mereka memakai mesin pencari sendiri. Kalau sebuah kelompok tidak mau mengatur diri, tugaskan satu orang per pernyataan.'},
        {type:'qa', h:'Mitos dan faktanya, beserta jawabannya', items:[
          {k:'“AI bisa menggantikan manusia di semua profesi.”', v:'<strong>Mitos.</strong> AI bisa menggantikan manusia di banyak bidang tapi tidak sepenuhnya — ia tidak punya empati, pemikiran kreatif, dan intuisi.'},
          {k:'“AI modern adalah kecerdasan yang kuat.”', v:'<strong>Mitos.</strong> Ada tiga tingkat — lemah, kuat, dan superkecerdasan — dan AI hari ini digolongkan <strong>lemah</strong>, karena tidak bisa berpikir atau menyadari dirinya.'},
          {k:'“AI tidak bisa menjelaskan keputusannya.”', v:'<strong>Benar, untuk saat ini.</strong> Explainable AI adalah bidang riset yang aktif, tapi model saat ini sebagian besar memutuskan dalam mode “kotak hitam”.'},
          {k:'“Kamu butuh data, algoritma, dan sumber daya komputasi.”', v:'<strong>Benar.</strong> Data untuk dipelajari, algoritma untuk melatih, dan mesin yang cukup kuat — biasanya sumber daya awan untuk melatih dari nol.'}
        ]},
        {type:'text', h:'Google Colab, dalam sepuluh menit', b:'Siswa masuk dengan akun Google, membuat notebook <code>.ipynb</code> di Drive mereka, dan menjalankan <strong>dua atau tiga cell kode dan satu cell markdown</strong>. Pastikan semua orang bisa membuat sebuah cell lalu menjalankannya — itulah seluruh kriteria keberhasilannya. Lalu tunjukkan cara mengunggah gambar ke sesi saat ini, dan di akhir pelajaran, cara <strong>membagikan</strong> sebuah notebook dengan hak lihat atau sunting.'},
        {type:'warn', txt:'Hal yang akan menggigit setiap angkatan: <strong>sesi Colab bersifat sementara.</strong> File yang diunggah lenyap ketika sesinya di-restart, dan <em>setiap cell harus dijalankan, secara berurutan,</em> supaya cell berikutnya bekerja. Katakan di awal, dan bersiaplah mengatakannya lagi. Untuk kelompok yang lebih kuat, tunjukkan cara me-mount Google Drive sebagai gantinya.'},
        {type:'text', h:'Gambar itu angka', b:'Sebelum library apa pun, jelaskan bagaimana sebuah gambar disimpan: sebuah kisi <strong>piksel</strong>, masing-masing menyimpan nilai warna. Pembingkaian itulah yang membuat sisa modul ini masuk akal — mengisi latar belakang adalah aritmetika atas nilai-nilai itu, dan sebuah classifier adalah fungsi atasnya. Pertanyaan diagnosis bagus yang dipakai pelajarannya: berapa piksel dalam gambar 6×6, dan apa warna sebuah gambar yang seluruh nilai pikselnya diatur ke 500?'},
        {type:'code', lbl:'memotong latar belakangnya dengan rembg', code:`<span class="cc"># di Colab, ! menjalankan perintah sistem operasi</span>
<span class="cc"># !pip install rembg</span>
<span class="cc"># !pip install onnxruntime   ← rembg juga butuh ini</span>

<span class="ck">from</span> rembg <span class="ck">import</span> remove

input_path  = <span class="cs">'photo.png'</span>      <span class="cc"># harus path asli ke gambarnya</span>
output_path = <span class="cs">'output.png'</span>

<span class="ck">with</span> <span class="cf">open</span>(input_path, <span class="cs">'rb'</span>) <span class="ck">as</span> i:
    <span class="ck">with</span> <span class="cf">open</span>(output_path, <span class="cs">'wb'</span>) <span class="ck">as</span> o:
        o.<span class="cf">write</span>(<span class="cf">remove</span>(i.<span class="cf">read</span>()))`},
        {type:'code', lbl:'menyusun latar belakang baru dengan OpenCV', code:`<span class="ck">import</span> cv2

image  = cv2.<span class="cf">imread</span>(<span class="cs">'output.png'</span>, cv2.IMREAD_UNCHANGED)
back   = cv2.<span class="cf">imread</span>(<span class="cs">'/content/background.jpg'</span>)

result = <span class="cf">change_back</span>(back, image)   <span class="cc"># fungsi yang dianalisis siswa</span>
cv2.<span class="cf">imwrite</span>(<span class="cs">"result.png"</span>, result)`},
        {type:'tip', txt:'Mintalah siswa menemukan potongan kode penghapus latar belakangnya <strong>sendiri di dokumentasi rembg</strong> alih-alih Anda memberikannya, lalu tekankan satu baris yang selalu salah bagi mereka: path sebenarnya ke gambar mereka sendiri. PR-nya memperluas itu dengan teks OpenCV supaya gambarnya menjadi meme — bernilai sampai 20 poin, dinilai dari apakah keterangannya duduk masuk akal di atas gambarnya.'}
      ]},
      {t:'🕸️ L2 — Scraping, parsing & crawling', cards:[
        {type:'text', h:'Mengapa kita mengumpulkan data sama sekali', b:'Bukalah dengan nilai data. Internet penuh dataset, tapi sebagian besarnya kabur atau tidak lengkap, dan data latih yang baik itu langka dan mahal. Jadi untuk melatih AI kita sendiri, <strong>kita harus menyiapkan datanya sendiri</strong> — dan itulah yang dilakukan pelajaran ini, berakhir dengan 600 entri berita dalam satu file.'},
        {type:'qa', h:'Ketiga istilahnya, dibedakan', items:[
          {k:'Crawling', v:'Memindai banyak situs secara otomatis, berpindah dari halaman ke halaman, mengumpulkan semua yang relevan. Yang terluas dari ketiganya, dan terjadi <strong>lebih dulu</strong>.'},
          {k:'Scraping', v:'Mengambil informasi dari sebuah halaman web secara otomatis — teks, gambar, harga — dengan membaca HTML-nya.'},
          {k:'Parsing', v:'Menganalisis struktur datanya untuk menarik informasi tertentu: memeriksa elemen HTML, memakai CSS selector atau XPath untuk mengambil persis yang Anda inginkan.'}
        ]},
        {type:'warn', txt:'Ajarkan batasannya sebagai bagian dari keterampilannya, bukan sebagai penafian. <strong>Hak cipta</strong> — jangan memakai atau menyebarkan ulang data terlindungi tanpa izin. <strong>Ketentuan penggunaan dan kebijakan privasi</strong> — situs menetapkan bagaimana datanya boleh diakses. <strong>robots.txt</strong> — menunjukkan bagian situs mana yang boleh di-crawl; periksa dan hormati. <strong>Hukum persaingan tidak sehat</strong> di sebagian yurisdiksi. <strong>Hukum data pribadi</strong> — nama, email, dan nomor telepon tercakup regulasi seperti GDPR. Bukalah robots.txt situs latihannya bersama kelas dan bacalah bagian mana yang terlarang.'},
        {type:'text', h:'Bagaimana praktiknya berjalan', b:'Tunjukkan kepada mereka developer tools browser-nya — <code>Shift+Ctrl+I</code> di Windows, <code>Option+Cmd+I</code> di Mac — lalu ajukan teka-tekinya: tag mana yang memuat judul beritanya, dan ia termasuk class apa? Itulah keterampilan yang sesungguhnya. Setelah itu mereka memperluas notebook demonya supaya mengumpulkan bukan hanya judul dan tautan tapi juga tanggal terbit dan jumlah dilihat, dengan menemukan sendiri tag-tag itu.'},
        {type:'code', lbl:'dari satu halaman ke crawler atas lima bagian', code:`dict_news = {<span class="cs">"news"</span>: [], <span class="cs">"links"</span>: [], <span class="cs">"views"</span>: [], <span class="cs">"comments"</span>: []}

url   = <span class="cs">'https://www.thescientificteen.org/'</span>
pages = [<span class="cs">"technology"</span>, <span class="cs">"medicine"</span>, <span class="cs">"chemistry"</span>, <span class="cs">"physics"</span>]

<span class="ck">for</span> section <span class="ck">in</span> pages:
    response = requests.<span class="cf">get</span>(url + section + <span class="cs">"/"</span>)
    bs = <span class="ct2">BeautifulSoup</span>(response.text, <span class="cs">"lxml"</span>)
    <span class="ck">for</span> post <span class="ck">in</span> bs.<span class="cf">find_all</span>(<span class="cs">'div'</span>, <span class="cs">'post-list-item-wrapper'</span>):
        dict_news[<span class="cs">"news"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'p'</span>).text)
        dict_news[<span class="cs">"links"</span>].<span class="cf">append</span>(post.<span class="cf">find</span>(<span class="cs">'a'</span>).<span class="cf">get</span>(<span class="cs">'href'</span>))

<span class="cc"># DataFrame itu sebuah tabel; to_csv menyimpannya untuk pelajaran berikutnya</span>
df_news = pd.<span class="ct2">DataFrame</span>(dict_news)
df_news.<span class="cf">to_csv</span>(<span class="cs">"./saved_data.csv"</span>, index=<span class="ck">False</span>)`},
        {type:'hi', h:'Momen yang layak dijeda', b:'Satu perulangan mengubah scraper satu halaman menjadi crawler atas lima bagian dan 600 artikel dalam waktu kurang dari semenit. Katakan itu dengan lantang — ini pertama kalinya dalam kursus sejumlah kecil kode mengerjakan pekerjaan yang tidak akan dicoba manusia mana pun dengan tangan. Perasaan itulah sebabnya blok AI-nya dimulai di sini.'},
        {type:'tip', txt:'Pastikan semua orang menyimpan CSV-nya, dan simpan salinan Anda sendiri: <strong>pelajaran berikutnya bergantung padanya</strong>, dan rencananya menyuruh Anda membagikannya di chat untuk siapa pun yang kehilangan miliknya. PR-nya adalah analisis pandas pada sebuah CSV yang disediakan — <code>.min()</code>, <code>.max()</code>, penyaringan, <code>.sum()</code> — yang juga mempersiapkan mereka untuk pelajaran berikutnya.'}
      ]},
      {t:'📝 L3 — NLP, pipeline & peringkasnya', cards:[
        {type:'text', h:'List comprehension lebih dulu, sebagai fitur Python', b:'Pemanasan singkat: di Python lazim memampatkan beberapa baris menjadi satu. Beri siswa dua versi kode yang sama lalu biarkan <em>mereka</em> yang menjelaskan bedanya — comprehension <code>[word.lower() for word in words if word.isalpha()]</code> melawan perulangan <code>for</code> klasik dengan <code>append()</code>. Jujurlah tentang pertukarannya: comprehension itu ringkas dan elegan, perulangannya lebih terbaca dan memberi kendali lebih halus. Mana yang Anda pilih tergantung situasinya.'},
        {type:'text', h:'Apa itu pipeline', b:'Rangkaian langkah pemrosesan yang keluaran tiap langkahnya menjadi masukan langkah berikutnya. Susurilah algoritma peringkasannya sebagai diskusi sebelum ada kode: pecah menjadi kalimat → pecah menjadi kata → buang <strong>stop word</strong> → kembalikan tiap kata ke bentuk dasarnya → hitung frekuensi katanya → beri skor tiap kalimat berdasarkan frekuensi kata-katanya → simpan kalimat teratas → susun kembali dalam urutan aslinya.'},
        {type:'code', lbl:'peringkasnya, sebagai fungsi yang bisa dipakai ulang', code:`<span class="ck">def</span> <span class="cf">summarization</span>(text, sent_number=<span class="cn">3</span>):
    sentences  = <span class="cf">sent_tokenize</span>(text, language=<span class="cs">'english'</span>)
    stop_words = <span class="cf">set</span>(stopwords.<span class="cf">words</span>(<span class="cs">'english'</span>))

    words = <span class="cf">word_tokenize</span>(text)
    words = [w.<span class="cf">lower</span>() <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w.<span class="cf">isalpha</span>()]
    words = [w <span class="ck">for</span> w <span class="ck">in</span> words <span class="ck">if</span> w <span class="ck">not</span> <span class="ck">in</span> stop_words]

    freq_dist = <span class="ct2">FreqDist</span>(words)          <span class="cc"># seberapa sering tiap kata muncul</span>

    sentence_scores = {}
    <span class="ck">for</span> i, sentence <span class="ck">in</span> <span class="cf">enumerate</span>(sentences):
        sentence_words = <span class="cf">word_tokenize</span>(sentence.<span class="cf">lower</span>())
        sentence_scores[i] = <span class="cf">sum</span>([freq_dist[w] <span class="ck">for</span> w <span class="ck">in</span> sentence_words
                                  <span class="ck">if</span> w <span class="ck">in</span> freq_dist])

    <span class="cc"># kalimat dengan skor terbaik, dikembalikan ke urutan baca</span>
    best = <span class="cf">sorted</span>(sentence_scores.<span class="cf">items</span>(), key=<span class="ck">lambda</span> x: x[<span class="cn">1</span>], reverse=<span class="ck">True</span>)
    best = <span class="cf">sorted</span>(best[:sent_number])

    <span class="ck">return</span> <span class="cs">' '</span>.<span class="cf">join</span>([sentences[i] <span class="ck">for</span> i, _ <span class="ck">in</span> best])`},
        {type:'hi', h:'Jalankan penjelajahan NLTK-nya sebagai lomba', b:'Alih-alih mendaftar fungsi-fungsinya, tempatkan siswa di breakout room berisi dua atau tiga orang dengan notebook contohnya lalu beri mereka <strong>lima menit untuk menemukan sebanyak mungkin fungsi NLTK</strong>, sambil saling membantu. Setelah itu kumpulkan semua orang dan gabungkan temuannya. Fungsinya jadi dipelajari; mendengar secara pasif tidak terjadi.'},
        {type:'text', h:'Lalu skalanya', b:'Inti membungkus algoritmanya dalam sebuah fungsi adalah apa yang mengikutinya: mereka melakukan perulangan atas tautan yang di-scrape di L2 lalu meringkas <strong>sepuluh artikel sungguhan</strong>. Data hasil scraping mereka sendiri, fungsi mereka sendiri, berjalan tanpa ditunggui — itulah pipeline yang lengkap, dan itu layak disebut demikian.'},
        {type:'tip', txt:'Pembedaan yang membingungkan siswa adalah <strong>tokenization vs lemmatization</strong>. Tokenization memecah teks menjadi potongan (kalimat atau kata). Lemmatization mengembalikan kata ke bentuk dasarnya supaya “running” dan “ran” dihitung sebagai satu kata. Keduanya ada di dalam pipeline-nya, mengerjakan tugas berbeda — ini salah satu pertanyaan pengulangan penutupnya.'}
      ]},
      {t:'👁️ L4 — Computer vision & classifier-nya', cards:[
        {type:'text', h:'Masalahnya, dan mengapa itu masalah yang bagus', b:'Memberi makan burung: spesies berbeda butuh pakan berbeda — roti buruk untuk bebek, biji-bijian baik untuk burung pipit. Jadi aplikasi yang mengenali seekor burung lalu menyebutkan apa yang harus diberikan punya audiens yang benar-benar luas. Konkret, tidak berbahaya, dan butuh persis satu kemampuan AI: <strong>klasifikasi</strong>.'},
        {type:'hi', h:'Teori sebagai permainan — tic-tac-toe', b:'Bagi menjadi regu X dan regu O. Anda mengajukan pertanyaan; sumber apa pun boleh — platform, internet, catatan; <strong>siswa yang sama tidak boleh menjawab dua kali berturut-turut</strong>; jawaban benar memenangkan satu kotak. Kalau jawabannya salah, giliran berpindah ke siswa lain. Perbaiki jawaban yang salah secara eksplisit, karena seluruh kelas perlu mendengar yang benar.'},
        {type:'qa', h:'Pertanyaan dan jawabannya', items:[
          {k:'Apa itu computer vision?', v:'Cabang AI di mana komputer dilatih untuk membedakan objek dalam sebuah gambar.'},
          {k:'Apa itu klasifikasi?', v:'Memilah objek ke dalam kelas — kucing/anjing/tupai, meme lucu/meme cringe.'},
          {k:'Modelnya bisa berupa apa?', v:'Sebuah neural network.'},
          {k:'Selain modelnya, apa lagi yang Anda butuhkan?', v:'Sebuah dataset.'},
          {k:'Apa yang Anda tunjukkan kepada jaringannya selama pelatihan?', v:'Sebuah gambar <em>beserta kelasnya</em>.'},
          {k:'Apakah kualitas dataset itu penting?', v:'Ya — itu menentukan kualitas modelnya. Perbaiki dengan menambahkan lebih banyak data, dan lebih bervariasi.'}
        ]},
        {type:'text', h:'Membangun dataset-nya dengan benar', b:'Siswa menjelajahi dataset yang disediakan — ada kelas apa saja, berapa banyak gambar latih per kelas — lalu mengunduhnya dan menambahkan dua atau tiga gambar mereka sendiri per kelas. Tekankan bahwa <strong>kualitas objek dalam sampel latihnya penting</strong>. Setelah itu setiap siswa mencari <strong>satu gambar uji</strong>, dan inilah aturan yang harus mendarat: gambar ujinya harus yang <strong>belum pernah dilihat</strong> modelnya. Kalau tidak, modelnya cuma curang.'},
        {type:'text', h:'Pelatihan dan lombanya', b:'Tunjukkan penyiapan Teachable Machine-nya, latih classifier-nya, unggah gambar uji lalu baca responsnya. Setelah itu biarkan mereka menjelajahi <strong>parameter pelatihannya</strong> — dan pastikan mereka tahu cara <strong>menyimpan proyeknya</strong>, karena Modul 6 membutuhkan model yang diekspornya. Terakhir, sebuah lomba sungguhan: tujuh menit untuk membuat model mereka seakurat mungkin, dengan cara apa pun. Anda mengirim satu gambar; model paling akurat menang, dan pemenangnya menjelaskan bagaimana mereka melatihnya.'},
        {type:'good', txt:'Penjelasan si pemenang adalah menit paling berharga dalam pelajarannya. Mereka hampir selalu akan berkata “aku menambah gambar” atau “aku menambah variasinya” — dan itu seluruh inti pelajarannya, dicapai lewat eksperimen alih-alih pernyataan. Biarkan mereka yang mengajarkannya.'},
        {type:'tip', txt:'PR-nya menambahkan satu kelas lagi ke modelnya — spesies burung yang hidup di dekat siswanya — yang diam-diam menyiapkan model yang akan mereka import ke dalam kode di modul berikutnya. Permainan dan lomba di sini ada untuk menyajikan teori dalam format yang tidak biasa dan menjaga keterlibatan tetap tinggi; jangan perlakukan sebagai pengisi waktu yang opsional.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa berkata “AI hari ini adalah kecerdasan yang kuat — dia bisa berpikir.” Bagaimana Anda mengoreksinya, menurut materi kursusnya?', opts:['AI modern digolongkan lemah: ia tidak bisa berpikir atau menyadari dirinya. AI kuat dan superkecerdasan adalah dua tingkat lainnya','Mereka benar — model saat ini bernalar seperti manusia','Ketiga tingkatnya adalah sempit, luas, dan umum, dan AI berada di luas','AI tidak punya tingkatan; penggolongannya adalah mitos'], c:0, fb:'Aktivitas mitos di M5L1 memuat persis pernyataan ini sebagai mitos: ilmuwan komputer menggolongkan AI kontemporer sebagai lemah karena ia tidak punya pikiran dan kesadaran diri.'},
      {q:'Siswa kembali ke Colab dan model serta gambar mereka hilang. Mengapa?', opts:['Sesi Colab bersifat sementara — file yang diunggah lenyap ketika sesinya di-restart, dan setiap cell harus dijalankan ulang secara berurutan','Colab menghapus file yang melanggar ketentuannya','Mereka lupa menyimpan notebook-nya sebagai .py','Google Drive mereka penuh'], c:0, fb:'Ini menjerat setiap angkatan. Peringatkan di awal; untuk kelompok yang lebih kuat, mount Google Drive supaya file-nya bertahan.'},
      {q:'Apa hubungan yang benar antara crawling, scraping, dan parsing?', opts:['Crawling terjadi lebih dulu dan paling luas — memindai banyak situs; scraping mengambil informasi dari sebuah halaman; parsing menganalisis struktur untuk menarik data tertentu','Parsing lebih dulu, lalu crawling, lalu scraping','Ketiganya nama untuk operasi yang sama','Scraping itu legal, crawling dan parsing tidak'], c:0, fb:'M5L2 menempatkan crawling lebih dulu dan paling luas, dengan scraping dan parsing sebagai langkah pengambilan yang dilakukan pada halaman yang sudah dikumpulkan.'},
      {q:'Sebelum melakukan scraping sebuah situs bersama siswa, file mana yang Anda periksa, dan mengapa?', opts:['robots.txt — ia menetapkan bagian situs mana yang boleh di-crawl dan diindeks, dan batasan itu harus dihormati','index.html — untuk melihat struktur halamannya','sitemap.css — untuk menemukan class penataannya','license.txt — untuk memeriksa pemegang hak ciptanya'], c:0, fb:'robots.txt adalah salah satu dari lima aturan yang diajarkan dalam pelajaran ini, bersama hak cipta, ketentuan penggunaan dan kebijakan privasi, hukum persaingan tidak sehat, dan hukum data pribadi seperti GDPR.'},
      {q:'Apa yang sebenarnya mengubah scraper satu halaman menjadi crawler yang mengumpulkan 600 artikel?', opts:['Sebuah perulangan atas daftar nama bagian, meminta masing-masing secara bergiliran','Sebuah instance BeautifulSoup kedua','Menyimpan ke CSV alih-alih mencetak','Berpindah dari find ke find_all'], c:0, fb:'Satu perulangan atas daftar bagiannya adalah seluruh perubahannya — dan itulah yang membuat skalanya begitu mencolok bagi siswa.'},
      {q:'Apa beda tokenization dan lemmatization?', opts:['Tokenization memecah teks menjadi kalimat atau kata; lemmatization mengembalikan kata ke bentuk dasarnya supaya varian-variannya dihitung sebagai satu','Keduanya langkah yang sama dengan dua nama','Tokenization membuang stop word; lemmatization menghitung frekuensi','Lemmatization memecah teks; tokenization menormalkannya'], c:0, fb:'Keduanya adalah langkah dalam pipeline peringkasan yang mengerjakan tugas berbeda — dan membedakannya adalah salah satu pertanyaan pengulangan penutup pelajarannya.'},
      {q:'Bagaimana peringkasnya memutuskan kalimat mana yang disimpan?', opts:['Ia memberi skor tiap kalimat berdasarkan frekuensi kata-kata yang dimuatnya, menyimpan yang skornya tertinggi, lalu mengembalikannya ke urutan aslinya','Ia menyimpan tiga kalimat pertama artikelnya','Ia memilih kalimat terpanjang','Ia meminta model bahasa menulis ulang teksnya'], c:0, fb:'Distribusi frekuensi atas kata yang sudah dibersihkan dan dilematisasi memberi tiap kalimat sebuah skor; yang terbaik diurutkan ulang ke urutan baca supaya ringkasannya mengalir.'},
      {q:'Seorang siswa ingin menguji classifier mereka dengan salah satu gambar latihnya sendiri. Apa yang Anda katakan?', opts:['Gambar ujinya harus yang belum pernah dilihat modelnya — kalau tidak, Anda bukan mengujinya, Anda membiarkannya curang','Itu tidak apa-apa, karena kelasnya sama','Boleh, asal mereka memakai setidaknya tiga gambar','Itu tidak penting untuk model Teachable Machine'], c:0, fb:'Sampel ujinya harus berisi gambar baru. Pelajarannya mengungkapkannya persis begitu — kita tidak ingin model kita curang.'},
      {q:'Classifier seorang siswa bekerja buruk. Ke mana mereka harus melihat lebih dulu?', opts:['Dataset-nya — lebih banyak gambar dan lebih banyak variasi itulah yang memperbaiki modelnya','Kode yang memuat gambarnya','Parameter pelatihannya, yang merupakan satu-satunya tuas sesungguhnya','Browser tempat mereka melatihnya'], c:0, fb:'Kualitas dataset menentukan kualitas model. Itulah jawaban yang dituju oleh pertanyaan tic-tac-toe-nya, dan jawaban yang hampir selalu diberikan pemenang lombanya.'},
      {q:'Mengapa pelajaran M5L4 memakai tic-tac-toe dan lomba pelatihan alih-alih presentasi?', opts:['Untuk menyajikan teori dalam format yang tidak biasa dan menjaga siswa terlibat aktif — permainannya adalah metode penyampaiannya, bukan pengisi waktu','Karena teorinya terlalu tipis untuk mengisi waktunya','Untuk menentukan siswa mana yang lanjut ke Modul 6','Karena platform-nya mewajibkan satu permainan tiap pelajaran'], c:0, fb:'Catatan pelajarannya sendiri menyatakan bahwa tujuan permainan dan lombanya adalah menyajikan teori dalam bentuk yang tidak biasa dan melibatkan siswa dalam proses pendidikannya.'}
    ]
  },
  {
    id:10, emoji:'🧠', color:'#EC4899',
    title:'M6 — Neural Network & Deteksi Objek',
    desc:'Modul 6 kursus: mengekspor model ke dalam kode dengan Keras, menghasilkan gambar dan lomba AI-vs-asli, surat bisnis, deteksi dan segmentasi dengan ImageAI/YOLO, serta membangun solusi pilihan sendiri.',
    obj:'Ajari siswa menjalankan model terlatih dari Python dan membedakan tiga tugas computer vision. Anda harus bisa meng-import model Teachable Machine ke Colab, memperbaiki bentrokan versinya, menjalankan lomba pembuatan gambar secara bertanggung jawab, menjelaskan klasifikasi vs deteksi vs segmentasi, memakai ImageAI, dan menjalankan curah gagasan yang menghasilkan ide yang bisa dibangun.',
    prep:'~5 jam. Bersiaplah bergulat dengan versi library; justru itu intinya.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 6 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Mengekspor model Teachable Machine, meng-unzip-nya di Colab, lalu memuatnya dengan <code>tf_keras</code>',
        'Mengalami error versi <code>DepthwiseConv2D</code> lalu memperbaikinya dengan versi yang dipatok',
        'Menulis fungsi yang menerima sebuah gambar lalu mengembalikan nama kelas beserta tingkat keyakinannya',
        'Memastikan modelnya memaksa gambar yang tidak berhubungan masuk ke salah satu kelas yang dikenalnya',
        'Menghasilkan gambar dengan prompt lalu menyusun dataset dua kelas dari gambar hasil generasi dan gambar asli',
        'Menjalankan deteksi dengan <code>ImageAI</code>/YOLOv3 lalu menyaring hasilnya berdasarkan nama objek',
        'Membandingkan deteksi pada foto yang berantakan dengan yang bersih, untuk melihat mengapa latar belakangnya penting',
        'Membangun satu skrip kecil ujung-ke-ujung milik Anda sendiri yang memakai sebuah model untuk menyelesaikan masalah rekaan'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> ekspor model terlatih lalu jalankan dari kode dengan <strong>Keras</strong>; <strong>L2</strong> lomba beregu melatih model untuk membedakan foto asli dari yang dihasilkan AI; <strong>L3</strong> struktur surat bisnis, <strong>deteksi dan segmentasi</strong> dengan ImageAI/YOLO, serta curah gagasan; <strong>L4</strong> pelajaran EduScrum tempat siswa membangun solusi mereka sendiri untuk masalah yang mereka pilih.',
          why:'Model yang hanya hidup di sebuah tab browser bukanlah perangkat lunak. Di sinilah AI siswa menjadi sebuah program — dan di sinilah mereka bertemu perbedaan antara sebuah demo dan kemampuan yang bisa di-deploy.',
          learn:'Siswa mengekspor model <code>.h5</code>, memuatnya dengan <code>tf_keras</code>, menulis fungsi yang mengembalikan kelas dan tingkat keyakinan, menghasilkan gambar dengan prompt, menyusun dataset bersama, mendeteksi pengguna jalan dalam sebuah foto dengan YOLO, dan membangun skrip yang mengotomatiskan masalah rutin pilihan mereka sendiri.',
          confident:'Mengekspor dan meng-unzip modelnya; versi library yang dipatok dan error <code>DepthwiseConv2D</code>; bahwa sebuah model hanya mengenali kelas yang ditunjukkan kepadanya; klasifikasi vs deteksi vs segmentasi; prompt engineering; serta aturan curah gagasannya.'
        }
      ]},
      {t:'⚙️ L1 — Menjalankan modelnya dari kode (Keras)', cards:[
        {type:'text', h:'Use–Modify–Create lagi', b:'Pelajaran ini berjalan dengan <strong>UMC</strong>: siswa mula-mula <em>memakai</em> kode yang diberikan Teachable Machine lalu memastikan itu bekerja, kemudian menerapkan logika mereka sendiri di atasnya. Tunjukkan cara mengekspor modelnya, menambahkan proyek yang diunduh ke sesi Colab, lalu meng-unzip-nya dengan <code>!unzip ./converted_keras.zip</code>. Untuk kelompok yang kuat, sambungkan Google Drive sebagai gantinya.'},
        {type:'code', lbl:'pematokan versi dan import yang benar-benar bekerja', code:`<span class="cc"># patok versinya — jangan debug ini secara langsung, tempel saja</span>
<span class="cc"># !pip install -q tf-keras==2.19.0 h5py==3.11.0</span>

<span class="ck">import</span> tf_keras <span class="ck">as</span> keras       <span class="cc"># versi Keras yang cocok dengan model .h5</span>
<span class="ck">from</span> tf_keras.models <span class="ck">import</span> load_model
<span class="ck">from</span> PIL <span class="ck">import</span> Image, ImageOps  <span class="cc"># Pillow, dipasang menggantikan PIL</span>
<span class="ck">import</span> numpy <span class="ck">as</span> np

<span class="cc"># klik kanan modelnya di Colab → Copy path, lalu tempel di sini</span>
model = <span class="cf">load_model</span>(<span class="cs">"PATH_TO_MODEL"</span>, compile=<span class="ck">False</span>)`},
        {type:'text', h:'Apa yang dikatakan tentang Keras', b:'Keras adalah bagian dari <strong>TensorFlow</strong>; dalam versi modern ia tersedia sebagai <code>tf.keras</code>. Karena model yang diekspor disimpan dalam format <code>.h5</code>, kursus ini memakai <code>tf-keras</code>, versi yang cocok dengan <code>.h5</code> — selebihnya library-nya sama. Katakan dengan jelas bahwa segelintir fungsi yang mereka pakai adalah bagian yang <em>sangat kecil</em> dari library yang sangat besar.'},
        {type:'hi', h:'Permainan “semua lawan satu”', b:'Setelah lima menit menjelajahi kodenya, satu siswa menjadi <strong>ahli</strong> dan menjawab pertanyaan semua orang. Pertanyaannya boleh sederhana atau sulit, dan tidak apa-apa kalau si penanya juga tidak tahu jawabannya. Kalau si ahli buntu, Anda yang menjawab. Si ahli menang kalau berhasil menjawab semuanya; kalau tidak, kemenangan jatuh kepada siapa pun yang paling banyak mengajukan pertanyaan tak terjawab. Tujuan sebenarnya dinyatakan dalam rencananya: itu <strong>membantu siswa mengatasi rasa takut merumuskan pertanyaan</strong>. Yakinkan mereka bahwa tidak ada pertanyaan bodoh.'},
        {type:'warn', txt:'Tegaskan ini setelah permainannya: modelnya <strong>hanya</strong> bisa membedakan kelas yang dilatihkan kepadanya. Tunjukkan sesuatu yang lain dan ia tetap akan memaksa masukan itu masuk ke salah satu kelas yang dikenalnya dengan penuh percaya diri. Ini kesalahpahaman paling umum yang dimiliki siswa tentang AI, dan di sini mereka bisa melihatnya terjadi.'},
        {type:'text', h:'Lalu mereka membangun fiturnya yang sesungguhnya', b:'Tugasnya: terapkan tombol unggah gambar, pakai kode yang diekspor untuk menulis fungsi <code>detect_bird</code> yang menerima sebuah gambar, path modelnya, dan path label-nya lalu mengembalikan nama burungnya beserta probabilitasnya, dan buat skripnya merespons sebuah unggahan dengan menyarankan pakan yang sesuai. Pelajarannya ditutup dengan kuis.'}
      ]},
      {t:'🎨 L2 — Hasil generasi vs asli: lomba AI-nya', cards:[
        {type:'text', h:'Masalahnya, dibingkai dengan jujur', b:'Model generatif menulis esai, menggambar gambar realistis, dan membuat animasi — dan kekuatan yang sama tersedia bagi penipu. Dua risiko yang disebut pelajarannya: gambar hasil generasi bisa membawa <strong>konten negatif atau diskriminatif</strong>, dan bisa <strong>menyerupai foto sungguhan</strong>, yang menyebarkan misinformasi. Tanyakan pendapat siswa dan masalah apa yang mereka perkirakan. Tugasnya jatuh keluar dari diskusi itu: latih sebuah model untuk membedakan gambar asli dari gambar hasil generasi.'},
        {type:'warn', txt:'Batasi prompt-nya pada hewan, benda, dan tokoh rekaan — <strong>jangan pernah orang nyata yang bisa dikenali</strong>. Tugas kursusnya sendiri sengaja memakai kucing. Siapkan folder Google Drive untuk tiap regu <em>sebelum</em> pelajarannya, dan kalau generatornya meminta pembayaran untuk gambar berkualitas tinggi, turunkan parameter kualitas generasinya alih-alih membayar.'},
        {type:'qa', h:'Aturan lombanya', items:[
          {k:'Struktur', v:'Tiga tahap — 30 menit penyiapan data, 20 menit pelatihan model, 10 menit pengujian.'},
          {k:'Regu', v:'Anda yang menentukannya, 3–4 siswa masing-masing; siswa tidak memilih sendiri. Setiap regu menamai dirinya dan memilih kapten.'},
          {k:'Data bersama, model perorangan', v:'Semua orang dalam satu regu memakai dataset yang sama, tapi tiap siswa melatih modelnya sendiri.'},
          {k:'Cara menang', v:'Bukan satu model terbaik — melainkan <strong>regu dengan rata-rata akurasi tertinggi</strong>. Itulah yang membuat membantu teman seregu menjadi masuk akal.'}
        ]},
        {type:'text', h:'Prompt engineering, dalam satu kalimat', b:'Sebuah kueri kepada model generatif disebut <strong>prompt</strong>, dan prompt engineering adalah keterampilan menulis prompt yang baik: prompt yang baik membuat maksud Anda jelas bagi modelnya, sehingga Anda mendapat jawaban yang lebih akurat atau konten yang lebih baik. Regu-regunya menghasilkan 8–20 gambar untuk kelas “hasil generasi”, lalu mengunduh foto asli untuk folder “asli” terpisah, dan mengunggah keduanya ke folder regu bersama mereka.'},
        {type:'good', txt:'Aturan “rata-rata regu tertinggi” adalah detail dengan rancangan terbaik dalam pelajaran ini. Ia menghilangkan dorongan untuk menyimpan sendiri sebuah teknik bagus dan menggantinya dengan dorongan untuk mengajarkannya. Kalau Anda tidak mengubah apa pun yang lain tentang cara menjalankan lomba ini, pertahankanlah aturan itu.'},
        {type:'tip', txt:'Lakukan diferensiasi pada tahap login: sementara Anda membantu siswa yang tidak bisa masuk, berikan tugas tambahan kepada yang lebih cepat. PR-nya adalah menulis skrip yang memakai model mereka untuk tujuan yang <em>mereka</em> ciptakan — dinilai dari apakah skripnya merespons kedua kelasnya, berjalan tanpa error, dan punya tujuan yang jelas.'}
      ]},
      {t:'🔍 L3 — Deteksi, segmentasi & suratnya', cards:[
        {type:'text', h:'Pembingkaian bergaya permainan', b:'Pelajarannya dibuka dengan <strong>surat bisnis</strong> yang memesan sebuah aplikasi keselamatan jalan. Kalau siswa Anda mau ikut bermain peran, perlakukan itu sebagai email klien sungguhan; kalau mereka terlalu malu, pakai saja untuk membedah strukturnya. Bagaimanapun, minta mereka membacanya dan mengenali blok-blok logisnya.'},
        {type:'qa', h:'Enam blok sebuah surat bisnis', items:[
          {k:'1. Perihal', v:'Pernyataan singkat dan tepat tentang maksud suratnya.'},
          {k:'2. Salam / pembuka', v:'Salam yang sopan, plus perkenalan diri singkat — atau rujukan pada surat-menyurat sebelumnya.'},
          {k:'3. Badan utama', v:'Pesannya, informasinya, atau usulannya: argumen, rincian, kesepakatan.'},
          {k:'4. Penutup', v:'Kesimpulan yang sopan — terima kasih atas perhatiannya, informasi lanjutan, atau langkah berikutnya.'},
          {k:'5. Salam perpisahan', v:'“Hormat kami” atau “Salam hangat”, plus nama dan jabatan pengirimnya.'},
          {k:'6. Lampiran', v:'Daftar dokumen atau materi apa pun yang dilampirkan.'}
        ]},
        {type:'text', h:'Ketiga tugas computer vision', b:'Ini inti konseptual modulnya. <strong>Klasifikasi</strong> — <em>seluruh gambar</em> termasuk kelas apa? <strong>Deteksi</strong> — temukan dan tentukan letak objeknya, tandai masing-masing dengan sebuah kotak, bahkan beberapa sekaligus. <strong>Segmentasi</strong> — bagi gambarnya menjadi wilayah-wilayah, memikirkan <em>piksel mana</em> yang termasuk objek mana. Contoh pelajarannya: foto seseorang di dalam hutan. Deteksi mengotaki orangnya; segmentasi memecah gambarnya menjadi piksel-orang dan piksel-hutan.'},
        {type:'code', lbl:'deteksi dengan ImageAI dan YOLOv3', code:`<span class="ck">def</span> <span class="cf">detect_objects_on_road</span>(input_image, output_image, model_path):
    detector = <span class="ct2">ObjectDetection</span>()
    detector.<span class="cf">setModelTypeAsYOLOv3</span>()
    detector.<span class="cf">setModelPath</span>(model_path)
    detector.<span class="cf">loadModel</span>()

    <span class="ck">return</span> detector.<span class="cf">detectObjectsFromImage</span>(
        input_image=input_image,
        output_image_path=output_image,
        minimum_percentage_probability=<span class="cn">30</span>   <span class="cc"># ambang keyakinan</span>
    )

<span class="ck">def</span> <span class="cf">analyze_objects</span>(detections):
    road = [<span class="cs">"car"</span>, <span class="cs">"motorbike"</span>, <span class="cs">"bicycle"</span>, <span class="cs">"person"</span>,
            <span class="cs">"bus"</span>, <span class="cs">"train"</span>, <span class="cs">"truck"</span>, <span class="cs">"traffic_light"</span>, <span class="cs">"stop_sign"</span>]
    <span class="ck">return</span> [d <span class="ck">for</span> d <span class="ck">in</span> detections <span class="ck">if</span> d[<span class="cs">"name"</span>] <span class="ck">in</span> road]`},
        {type:'hi', h:'Nilai alatnya, bukan cuma keluarannya', b:'Evaluasi kualitas deteksinya bersama kelas lalu tanyakan gambar seperti apa yang akan bekerja lebih baik. Kesimpulannya penting: YOLO bekerja paling baik ketika objeknya <strong>menonjol dari latar belakangnya</strong>. Lalu generalisasikan — ketika Anda menerima pekerjaan deteksi, Anda harus memikirkan jenis masukan seperti apa yang sebenarnya akan Anda terima. Memilih alat untuk data yang Anda punya adalah penilaian profesional, dan di sinilah siswa pertama kali menemuinya.'},
        {type:'text', h:'Curah gagasannya — dan aturannya', b:'Developer punya startup mereka sendiri, sering disebut <strong>pet project</strong>. Dua panduan: bangunlah sesuatu yang menyelesaikan masalah harian <em>Anda sendiri</em>, supaya berguna bahkan kalau tidak pernah terjual; dan buatlah berguna bagi audiens tertentu. Lalu lakukan curah gagasan dengan benar di papan bersama: semua orang mendaftar masalah hariannya, satu stiker per masalah, <strong>tanpa kritik atau penilaian pada tahap ini</strong>, kuantitas di atas kualitas, pengatur waktu lima menit. Baru setelah itu Anda mengelompokkannya berdasarkan tingkat kesulitannya untuk dibangun. Setiap siswa memilih satu untuk dibangun pelajaran berikutnya dan menjelaskan target audiensnya.'},
        {type:'tip', txt:'Jalankan bagian pengetikan kodenya sebagai live coding — satu orang menulis, yang lain mengikuti. Kalau Anda punya siswa yang kuat, berikan papan ketiknya kepada mereka. Tugas tambahannya memperluas detektornya dengan memotong keluar setiap pengguna jalan yang terdeteksi memakai OpenCV.'}
      ]},
      {t:'🛠️ L4 — Membangun solusi mereka sendiri (EduScrum)', cards:[
        {type:'text', h:'Tiga sprint, ide mereka sendiri', b:'<strong>Sprint 1 — persiapan:</strong> siapkan notebook-nya, siapkan datanya, latih modelnya atau buat object library apa pun yang mereka butuhkan. <strong>Sprint 2 — pengembangan:</strong> terapkan logika inference-nya dan dokumentasikan notebook-nya dengan komentar dan blok teks. <strong>Sprint 3 — pengujian:</strong> ujilah dan daftar bug serta ide perbaikannya di chat platform. Retrospektif setelah tiap sprint.'},
        {type:'qa', h:'Pertanyaan retrospektif untuk pelajaran ini', items:[
          {k:'1', v:'Apa yang kita capai? Apakah waktunya cukup untuk mengerjakan semua yang kalian inginkan?'},
          {k:'2', v:'Bagian mana dari skripnya yang paling sulit?'},
          {k:'3', v:'Apa yang perlu kalian lakukan untuk memperbaiki apa yang sedang kalian kerjakan?'}
        ]},
        {type:'text', h:'Tugas Anda selama sprint 1', b:'Pastikan setiap siswa <strong>memahami teknologi mana yang mereka butuhkan dan apa yang harus mereka lakukan untuk memakainya</strong> sebelum pengembangannya dimulai. Ini pertama kalinya mereka memilih sendiri masalahnya, jadi risikonya bukan kemampuan mengetik kode — melainkan memilih sesuatu yang tidak punya jalan masuk bagi mereka. Tangkap itu di sprint 1, bukan di sprint 2.'},
        {type:'tip', txt:'Kalau siswa kesulitan selama pengembangan, satukan mereka di breakout room atau bergabunglah dengan mereka satu per satu. Mendokumentasikan notebook-nya dengan komentar dan blok teks bukan hiasan — itu kebiasaan yang akan menjadi dasar pelajaran kode bersih di Modul 9 kursus.'},
        {type:'text', h:'Akhir Topik 3 — sang data scientist', b:'Tutup topik AI-nya dengan menghubungkannya ke sebuah karier, dan tanyakan dulu apa yang mereka ketahui alih-alih Anda yang memberi tahu. Pembingkaian yang ditawarkan kursusnya: seorang data scientist adalah detektif informasi di dunia digital — mereka mengumpulkan datanya, membersihkannya agar akurat, lalu memakai alat khusus untuk menemukan pola dan jawaban. Setelah itu tanyakan siapa yang merasa tertarik pada itu, dan apakah itu melengkapi minat mereka yang lain.'}
      ]}
    ],
    quiz:[
      {q:'Model ekspor seorang siswa melempar “Unrecognized keyword arguments passed to DepthwiseConv2D: {\'groups\': 1}”. Apa yang terjadi?', opts:['Bentrokan versi library — kursusnya mematok tf-keras==2.19.0 dan h5py==3.11.0 di Colab, atau tensorflow==2.15 dalam proyek pipenv','File modelnya rusak dan harus dilatih ulang','Ukuran gambarnya salah','Colab kehabisan memori'], c:0, fb:'Ini masalah kecocokan versi. Siapkan perintah pemasangan yang sudah dipatok untuk ditempel alih-alih mendebug versi di depan kelas.'},
      {q:'Mengapa kursus ini memakai tf-keras alih-alih keras biasa untuk model-model ini?', opts:['Model yang diekspor disimpan dalam format .h5, dan tf-keras adalah versi yang cocok dengan .h5 — selebihnya library-nya sama','tf-keras lebih cepat di Colab','Keras biasa tidak bisa mengklasifikasikan gambar','tf-keras satu-satunya versi yang gratis'], c:0, fb:'Keras adalah bagian dari TensorFlow dan tersedia sebagai tf.keras; karena model Teachable Machine-nya berformat .h5, kursus ini memakai tf-keras yang cocok.'},
      {q:'Seorang siswa menunjukkan foto mobil kepada classifier burungnya dan ia dengan yakin melaporkan “burung pipit”. Apa penjelasannya?', opts:['Modelnya hanya mengenal kelas yang dilatihkan kepadanya, jadi ia memaksa masukan apa pun masuk ke salah satunya','Modelnya rusak dan harus dilatih ulang','Resolusi gambarnya membingungkannya','Seharusnya memakai ImageAI, bukan Keras'], c:0, fb:'M6L1 menegaskan persis ini setelah permainan tanya-jawabnya: modelnya tidak pernah melihat objek lain, jadi ia hanya mencari apa yang dikenalnya.'},
      {q:'Apa tujuan sesungguhnya permainan ahli “semua lawan satu”?', opts:['Membantu siswa mengatasi rasa takut merumuskan pertanyaan — tidak apa-apa tidak tahu jawaban pertanyaanmu sendiri','Mengenali siswa terkuat dalam kelompoknya','Menguji siapa yang membaca dokumentasinya','Mengisi waktu sementara model-modelnya dilatih'], c:0, fb:'Catatan pelajarannya menyatakannya langsung: permainan itu membantu siswa mengatasi rasa takut merumuskan pertanyaan, dan tidak ada yang namanya pertanyaan bodoh.'},
      {q:'Dalam lomba AI-vs-asli, siapa yang menang?', opts:['Regu dengan rata-rata akurasi model tertinggi — bukan perorangan dengan satu model terbaik','Siswa yang modelnya paling akurat','Regu yang paling cepat menyelesaikan pelatihannya','Regu yang menghasilkan gambar paling banyak'], c:0, fb:'Aturannya disengaja: memberi ganjaran pada rata-rata regu membuat membantu teman seregu menjadi masuk akal alih-alih opsional.'},
      {q:'Apa yang harus Anda katakan kepada siswa tentang gambar yang mereka hasilkan untuk dataset-nya?', opts:['Batasi pada hewan, benda, dan tokoh rekaan — jangan pernah orang nyata yang bisa dikenali, karena palsuan yang realistis menyebarkan misinformasi','Subjek apa pun boleh asalkan gambarnya tetap di folder regunya','Hasilkan gambar selebritas saja, karena rujukannya lebih banyak','Topik generasinya tidak memengaruhi modelnya, jadi tidak penting'], c:0, fb:'Pelajarannya dibangun persis di sekitar risiko ini: gambar hasil generasi yang menyerupai gambar asli menuntun pada misinformasi, dan bisa membawa konten diskriminatif.'},
      {q:'Apa beda deteksi dan segmentasi?', opts:['Deteksi menemukan dan mengotaki letak objeknya; segmentasi memikirkan piksel mana secara individual yang termasuk objek atau wilayah mana','Deteksi untuk foto dan segmentasi untuk video','Segmentasi menemukan satu objek, deteksi menemukan banyak','Keduanya tugas yang sama dengan library yang berbeda'], c:0, fb:'Klasifikasi memberi label pada seluruh gambar, deteksi menemukan dan mengotaki objek, dan segmentasi membagi gambarnya menjadi wilayah piksel per objek.'},
      {q:'Setelah menguji YOLO pada beberapa gambar, kesimpulan apa yang harus dicapai siswa?', opts:['Ia bekerja paling baik ketika objeknya menonjol dari latar belakangnya — jadi Anda harus mempertimbangkan masukan apa yang sebenarnya akan diterima aplikasi Anda','Ia bekerja sama baiknya pada gambar apa pun','Ia hanya mendeteksi kendaraan','Akurasinya hanya bergantung pada ambang keyakinannya'], c:0, fb:'Pelajarannya meminta Anda mendiskusikan gambar mana yang bekerja lebih baik, lalu menggeneralisasi: memilih alat yang sesuai dengan masukan nyata Anda adalah penilaian profesional.'},
      {q:'Selama tahap curah gagasan, aturan apa yang harus Anda tegakkan?', opts:['Tidak ada kritik atau penilaian ide selama ide-idenya sedang dihasilkan — kuantitas dulu, penyortiran belakangan','Hanya ide yang realistis dan bisa dibangun yang boleh ditulis','Setiap siswa hanya boleh mengusulkan satu ide','Ide-idenya harus disetujui tutor sebelum ditambahkan'], c:0, fb:'Catatan poin pentingnya menyatakan agar siswa tidak menilai ide selama tahap penghasilan; bahkan yang paling konyol pun tetap ditulis, dan pengelompokan berdasarkan kelayakannya terjadi kemudian.'},
      {q:'Apa yang harus Anda pastikan selama Sprint 1 di M6L4, sebelum pengembangannya dimulai?', opts:['Bahwa setiap siswa memahami teknologi mana yang mereka butuhkan dan apa yang harus mereka lakukan untuk memakainya','Bahwa setiap siswa sudah selesai melatih modelnya','Bahwa notebook-nya sudah berkomentar lengkap','Bahwa semua orang memilih masalah yang sama'], c:0, fb:'Ini pertama kalinya siswa memilih sendiri masalahnya, jadi risiko sesungguhnya adalah memilih sesuatu yang tidak punya jalan masuk. Catatan sprint 1-nya meminta Anda memeriksa persis ini.'}
    ]
  },
  {
    id:11, emoji:'🔌', color:'#F59E0B',
    title:'M7 — Mengintegrasikan AI ke Proyek Mereka',
    desc:'Modul 7 kursus: menyiapkan IDE untuk pekerjaan AI, bot Discord yang menjalankan model computer vision mereka sendiri, publikasi dari VS Code, transkripsi dan penerjemahan suara, serta masukan suara di aplikasi Flask.',
    obj:'Ajari siswa menggabungkan semua yang sudah mereka bangun. Anda harus bisa menyiapkan virtual environment untuk library AI dan memperbaiki bentrokan versinya, merangkai bot agar menerima lampiran gambar lalu menjalankan inference, mempublikasikan proyek dari dalam VS Code, serta mem-live-code skrip pengenalan suara dan sebuah tombol masukan suara.',
    prep:'~5–6 jam. Modul paling rapuh — latihlah dua kali.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 7 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Menyiapkan virtual environment dengan library AI-nya terpasang dan interpreter yang tepat terpilih',
        'Membuat sebuah bot menerima lampiran gambar lalu menyimpannya dengan <code>attachment.save()</code>',
        'Merangkai model ekspor Anda sendiri ke dalam bot itu supaya ia membalas dengan sebuah prediksi',
        'Mempublikasikan seluruh proyeknya dari VS Code — setelah menghapus token-nya',
        'Menulis README yang cukup baik untuk meraih 30 menurut kriteria kursusnya sendiri',
        'Merekam dan mentranskripsikan suara dengan <code>sounddevice</code> dan <code>speech_recognition</code>',
        'Mengalami kegagalan mikrofon-sedang-dipakai dan memastikan membisukan Zoom memperbaikinya',
        'Menambahkan penerjemahan ke skrip transkripsinya',
        'Menambahkan route masukan suara yang berjalan ke aplikasi Flask Anda, dibungkus <code>try</code>/<code>except</code>'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> siapkan IDE dan environment-nya, buat bot menerima unggahan gambar, lalu curah gagasan sebuah startup; <strong>L2</strong> muat modelnya ke dalam proyeknya dan terapkan <strong>inference</strong>, lalu publikasikan dari VS Code; <strong>L3</strong> transkripsi dan penerjemahan suara dengan <code>speech_recognition</code>; <strong>L4</strong> tambahkan masukan suara ke situs Flask mereka, dengan <code>try</code>/<code>except</code>.',
          why:'Ini modul buah hasilnya. Semua dari Modul 1–6 menyatu: bot mereka, situs web mereka, model terlatih mereka, virtual environment mereka. Ini juga modul paling rapuh secara teknis dalam kursus ini, jadi persiapan di sini lebih penting daripada di mana pun.',
          learn:'Siswa menyiapkan virtual environment dengan library AI, menerima dan menyimpan lampiran Discord, menjalankan model mereka sendiri atas gambar yang diunggah lalu membalas dengan hasilnya, mempublikasikan proyek ke GitHub dari editornya, merekam dan mentranskripsikan suara, menerjemahkan transkripsinya, serta menambahkan tombol masukan suara yang berjalan ke situs buku harian mereka.',
          confident:'Menyiapkan environment-nya dan memilih interpreter-nya; perbaikan <code>tensorflow==2.15</code>; <code>ctx.message.attachments</code> dan <code>attachment.save()</code>; apa arti inference; publikasi dari antarmuka Git VS Code; jebakan mikrofon Zoom; serta <code>try</code>/<code>except</code> di sekitar apa pun yang menyentuh perangkat keras atau jaringan.'
        }
      ]},
      {t:'🔧 L1 — Menyiapkan environment & bot-nya', cards:[
        {type:'warn', txt:'Pelajaran ini <strong>teknis dan rapuh</strong> — siapkan siswa jauh-jauh hari. Minta mereka membuka proyek bot Discord lama mereka <em>sebelum</em> pelajarannya, mengulang cara kerjanya, dan membiarkannya tetap terbuka, karena mereka akan mengerjakannya sepanjang pelajaran. Seorang siswa yang datang tanpa proyeknya merenggut seluruh tahap pertama Anda.'},
        {type:'text', h:'Tahap environment-nya', b:'Ingatkan mereka cara membuat <strong>virtual environment</strong> — ini tidak bisa ditawar di sini, karena library AI-nya besar dan sensitif terhadap versi. Bagikan layar Anda, atau serahkan kepada siswa yang kuat untuk memimpin. Lalu pasang setiap library yang dibutuhkan proyeknya ke dalam environment itu.'},
        {type:'code', lbl:'perbaikan untuk bentrokan versinya — siapkan ini untuk ditempel', code:`<span class="cc"># Kalau Anda melihat:</span>
<span class="cc">#   Exception encountered: Unrecognized keyword arguments</span>
<span class="cc">#   passed to DepthwiseConv2D: {'groups': 1}</span>
<span class="cc"># itu masalah kecocokan versi, bukan kode Anda.</span>

pipenv uninstall tensorflow
pipenv install tensorflow==2.15   <span class="cc"># cocok dengan Python 3.11</span>`},
        {type:'tip', txt:'Dua cadangan yang akan menyelamatkan pelajarannya. Kalau pemasangannya berlarut-larut atau gagal, pakai <strong>Pipfile dari repository solusinya</strong> untuk menyiapkan environment-nya dalam satu langkah. Kalau seorang siswa tidak pernah menyimpan bot lamanya, berikan starter <strong>Basic Bot</strong> milik sekolah. Keduanya bukan curang — itu menolak membiarkan penyiapan memakan habis pelajaran praktik.'},
        {type:'code', lbl:'command bot yang menerima dan menyimpan sebuah gambar', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Gambarnya tersimpan ke ./{attachment.filename}"</span>)
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Kamu lupa mengunggah gambarnya :("</span>)`},
        {type:'text', h:'Curah gagasan dan pemeriksaan pasarnya', b:'Aktivitas tiga langkah, sebagian boleh dilewati kalau waktu Anda mepet. <strong>1. Curah gagasan</strong> — siswa menghasilkan ide untuk bot Discord startup yang memakai klasifikasi gambar, tanpa penilaian selama penghasilan idenya; Anda mencatat setiap ide di tempat yang bisa dilihat semua orang. Setelah empat menit, bentuk regu berisi 2–3 orang lalu tugaskan masing-masing ide yang paling layak. <strong>2. Analisis pasar</strong> — delapan menit untuk mencari solusi serupa yang sudah ada dan mendaftar kelebihan serta kekurangan ide yang ditugaskan kepada mereka, lalu menulis temuannya di chat tugas. <strong>3. Presentasi</strong> — setiap regu membagikan apa yang mereka temukan.'},
        {type:'good', txt:'Langkah analisis pasar diam-diam adalah hal paling dewasa dalam kursus ini. Sebagian besar siswa belum pernah memeriksa apakah ide mereka sudah ada — dan mengetahui bahwa ide itu sudah ada, dan punya kelemahan, lebih memotivasi daripada mematahkan semangat. Bingkailah sebagai pengintaian, bukan penghakiman.'}
      ]},
      {t:'🧩 L2 — Inference di dalam bot & publikasi dari VS Code', cards:[
        {type:'text', h:'Apa arti inference', b:'Berikan istilahnya dengan semestinya: <strong>inference</strong> adalah memakai model yang sudah terlatih untuk membuat prediksi atas masukan baru. Pelatihannya sudah selesai; ini modelnya yang sedang mengerjakan tugasnya. Tugas mereka adalah menambahkan modelnya dan file <code>labels.txt</code> ke dalam proyeknya, memikirkan file mana yang dibutuhkan dan mengapa, lalu membuat bot-nya membalas gambar yang diunggah dengan keluaran modelnya.'},
        {type:'code', lbl:'bot yang menjalankan modelnya sendiri atas sebuah unggahan', code:`<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">check</span>(ctx):
    <span class="ck">if</span> ctx.message.attachments:
        <span class="ck">for</span> attachment <span class="ck">in</span> ctx.message.attachments:
            <span class="ck">await</span> attachment.<span class="cf">save</span>(<span class="cs">f"./{attachment.filename}"</span>)
            <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cf">get_class</span>(
                model_path=<span class="cs">"./keras_model.h5"</span>,
                labels_path=<span class="cs">"labels.txt"</span>,
                image_path=<span class="cs">f"./{attachment.filename}"</span>))
    <span class="ck">else</span>:
        <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">"Kamu lupa mengunggah gambarnya :("</span>)`},
        {type:'tip', txt:'Alih-alih memberi tahu mereka file mana yang dibutuhkan proyeknya, <strong>tanyakan</strong> — dan kalau mereka menjawab benar, minta mereka menjalankan master class kecil untuk teman sekelasnya. Itulah pola diferensiasi yang dipakai kursus ini di mana-mana, dan itu benar-benar lebih cepat daripada menjelaskan. Arahkan mereka ke skrip M6L4 mereka sendiri sebagai petunjuk logika inference-nya.'},
        {type:'text', h:'Publikasi dari editornya', b:'Siswa mengunggah proyeknya ke GitHub memakai <strong>antarmuka VS Code</strong> alih-alih halaman webnya — menuntaskan busur yang dimulai di M1L2 dengan unggahan web yang canggung dan berlanjut di M2L3 ketika mereka menyambungkan akunnya. Diskusikan mengapa publikasi itu penting: itu portofolio mereka, dan itulah cara orang lain bisa menjalankan karya mereka.'},
        {type:'qa', h:'Kriteria README — layak ditunjukkan kepada siswa', items:[
          {k:'20 poin', v:'Ada deskripsi bot-nya di README, tapi teksnya tidak terstruktur.'},
          {k:'30 poin', v:'Deskripsi terstruktur dengan emoji — jelas dan enak dibaca.'},
          {k:'+5 bonus', v:'Sebuah gambar atau GIF bot-nya sedang bekerja.'},
          {k:'+10 bonus', v:'Sebuah file lisensi.'}
        ]},
        {type:'warn', txt:'Pemeriksaan token, lagi dan sungguh-sungguh: proyek ini sekarang memuat token bot <em>dan</em> sebuah model terlatih. Sebelum apa pun di-push, token-nya keluar. Repository publik dengan token yang hidup adalah hasil terburuk yang bisa dihasilkan kursus ini — dan inilah pelajaran di mana itu paling mungkin terjadi, karena siswa terfokus pada bagian AI-nya.'}
      ]},
      {t:'🎙️ L3 — Transkripsi & penerjemahan suara', cards:[
        {type:'text', h:'Mulailah dari yang sudah mereka pakai', b:'Lima menit diskusi sebelum ada kode: di mana mereka pernah bertemu transkripsi? Google Translate, masukan suara di aplikasi pesan, subtitle YouTube, takarir otomatis TikTok dan Instagram. <strong>Transkripsi</strong> adalah mengubah ucapan menjadi teks — mereka harus bisa menjelaskannya dengan kata-kata mereka sendiri pada tingkat pengguna sebelum membangunnya.'},
        {type:'code', lbl:'rekam, lalu transkripsikan — dibangun lewat live coding', code:`<span class="ck">import</span> sounddevice <span class="ck">as</span> sd
<span class="ck">import</span> scipy.io.wavfile <span class="ck">as</span> wav
<span class="ck">import</span> speech_recognition <span class="ck">as</span> sr

duration    = <span class="cn">5</span>        <span class="cc"># detik perekaman</span>
sample_rate = <span class="cn">44100</span>

<span class="cf">print</span>(<span class="cs">"Bicara sekarang..."</span>)
recording = sd.<span class="cf">rec</span>(<span class="cf">int</span>(duration * sample_rate),
                   samplerate=sample_rate, channels=<span class="cn">1</span>, dtype=<span class="cs">"int16"</span>)
sd.<span class="cf">wait</span>()
wav.<span class="cf">write</span>(<span class="cs">"output.wav"</span>, sample_rate, recording)

<span class="cf">print</span>(<span class="cs">"Perekaman selesai, sekarang mengenali..."</span>)
recognizer = sr.<span class="ct2">Recognizer</span>()
<span class="ck">with</span> sr.<span class="ct2">AudioFile</span>(<span class="cs">"output.wav"</span>) <span class="ck">as</span> source:
    audio = recognizer.<span class="cf">record</span>(source)

<span class="ck">try</span>:
    text = recognizer.<span class="cf">recognize_google</span>(audio, language=<span class="cs">"id-ID"</span>)
    <span class="cf">print</span>(<span class="cs">"Kamu bilang:"</span>, text)
<span class="ck">except</span> sr.<span class="ct2">UnknownValueError</span>:
    <span class="cf">print</span>(<span class="cs">"Ucapannya tidak bisa dikenali."</span>)
<span class="ck">except</span> sr.<span class="ct2">RequestError</span> <span class="ck">as</span> e:
    <span class="cf">print</span>(<span class="cs">f"Error layanan: {e}"</span>)`},
        {type:'warn', txt:'Hal paling berguna dalam rencana pelajaran ini: <strong>kalau skripnya error, bisukan mikrofon Anda di Zoom lalu jalankan lagi.</strong> Zoom menahan mikrofonnya dan skripnya tidak bisa membukanya. Katakan ini kepada siswa sebelum menjalankan pertama kali, bukan setelah dua puluh menit mendebug.'},
        {type:'text', h:'Lalu tambahkan penerjemahan', b:'Paruh kedua: perluas skripnya sehingga teks yang ditranskripsikan diterjemahkan ke bahasa lain dengan class <code>Translator</code>, dan biarkan pengguna memilih kode bahasa tujuannya. Kedua paruhnya dikerjakan lewat <strong>live coding</strong> — Anda membangunnya bersama-sama — dan kriteria keberhasilannya dinyatakan terang-terangan: di akhir tahapnya, <strong>setiap siswa punya kode yang berjalan</strong>.'},
        {type:'hi', h:'Jangan lewati aktivitas rehatnya', b:'Di antara dua paruh praktiknya ada permainan sepuluh menit: Anda menyebutkan sebuah warna atau huruf dan siswa punya enam puluh detik untuk menemukan dan menunjukkan benda yang cocok. Rencananya menyatakan secara eksplisit <strong>jangan lewati ini</strong> — siswa perlu menyetel ulang fokusnya sebelum praktik kedua, dan pelajaran ini punya enam puluh menit praktik beruntun. Ikutlah bermain sendiri.'}
      ]},
      {t:'🗣️ L4 — Masukan suara di aplikasi Flask', cards:[
        {type:'text', h:'Tujuannya, dan kebebasan yang Anda miliki', b:'Tambahkan <strong>tombol masukan suara</strong> yang muncul ketika pengguna membuat kartu entri buku harian baru. Panduan pelajarannya eksplisit bahwa implementasinya sendiri adalah salah satu pilihan sederhana — dan bukan yang paling efektif — di antara banyak pilihan. Anda bebas menerapkannya secara berbeda untuk menyesuaikan tingkat siswa Anda. Katakan itu kepada kelompok yang kuat; mereka akan menemukan sesuatu yang lebih baik.'},
        {type:'text', h:'Mulailah dengan pertanyaan, bukan kode', b:'Minta mereka mengingat sebuah halaman web terbuat dari apa, dan tombolnya termasuk di halaman yang mana. Tunjukkan template-nya lalu minta mereka menemukan class yang sudah didefinisikan untuk tombol. Setelah itu poin halusnya: <code>&lt;button&gt;</code> di dalam sebuah form <strong>mengirimkan form-nya</strong>, dan itu bukan yang kita mau — kita mau fungsi kita sendiri yang berjalan. Itulah sebabnya contohnya memakai tautan bergaya sebagai gantinya.'},
        {type:'code', lbl:'route-nya, dibungkus try/except', code:`<span class="ck">from</span> speech <span class="ck">import</span> speech

<span class="cd">@app.route</span>(<span class="cs">'/voice'</span>)
<span class="ck">def</span> <span class="cf">voices</span>():
    <span class="ck">try</span>:
        text = <span class="cf">speech</span>()
    <span class="ck">except</span>:
        text = <span class="cs">"Ada yang tidak beres..."</span>
    <span class="ck">return</span> <span class="cf">render_template</span>(<span class="cs">'create_card.html'</span>, text=text)`},
        {type:'code', lbl:'template-nya menerimanya sebagai variabel Jinja', code:`<span class="ct2">&lt;label</span> <span class="cf">for</span>=<span class="cs">"text"</span><span class="ct2">&gt;</span>
  <span class="ct2">&lt;textarea</span> <span class="cf">class</span>=<span class="cs">"form__text"</span> <span class="cf">name</span>=<span class="cs">"text"</span> <span class="cf">id</span>=<span class="cs">"text"</span> <span class="cf">required</span><span class="ct2">&gt;</span>{{ text }}<span class="ct2">&lt;/textarea&gt;</span>
  <span class="ct2">&lt;a</span> <span class="cf">class</span>=<span class="cs">"help_button"</span> <span class="cf">href</span>=<span class="cs">"./voice"</span><span class="ct2">&gt;</span> Rekam <span class="ct2">&lt;/a&gt;</span>
<span class="ct2">&lt;/label&gt;</span>`},
        {type:'hi', h:'try / except, diajarkan karena kebutuhan', b:'Alasan <code>try</code>/<code>except</code> muncul di sini alih-alih lebih awal adalah karena siswa baru saja menulis kode yang <em>benar-benar kadang gagal</em> — sebuah mikrofon mungkin sedang dipakai, sebuah panggilan jaringan mungkin tidak menjawab. Itulah alasan jujur untuk penanganan exception: <code>try</code> memuat kode yang mungkin gagal, <code>except</code> memuat apa yang dilakukan ketika itu terjadi, sehingga seluruh halamannya tidak rusak. Perkenalkan sebagai perbaikan untuk masalah yang sudah mereka alami.'},
        {type:'text', h:'Akhir Topik 4 — sang spesialis AI', b:'Tutup topik AI terapannya: rayakan penyelesaiannya, tunjukkan apa yang dibuka oleh keterampilannya, dan bicarakan keuntungan menjadi spesialis AI hari ini. Tanyakan apakah ini bisa jadi pekerjaan impian mereka, dan apakah mereka bisa memikirkan keuntungan yang tidak Anda sebutkan. Tugas tambahannya terbuka dengan bagus — temukan sebuah library yang menarik bagimu lalu pakai untuk memperbaiki proyekmu sesukamu.'},
        {type:'tip', txt:'Kalau waktunya mepet, kerjakan tugas kreatifnya sebagai live coding alih-alih membuangnya. Dan perhatikan jebakan CSS dalam rencananya: ketika menyalin gaya tombol, tombolnya bisa berakhir duduk di atas form-nya — <code>display: inline-block;</code> memperbaikinya.'}
      ]}
    ],
    quiz:[
      {q:'Apa arti “inference” di M7L2?', opts:['Memakai model yang sudah terlatih untuk membuat prediksi atas masukan baru','Melatih sebuah model pada dataset baru','Menebak kelas apa yang seharusnya dimuat sebuah dataset','Mengubah sebuah model menjadi file yang lebih kecil'], c:0, fb:'Pelatihannya sudah selesai; inference adalah modelnya mengerjakan tugasnya pada data baru — di sini, sebuah gambar yang diunggah pengguna Discord.'},
      {q:'Proyek bot AI seorang siswa melempar error DepthwiseConv2D “groups” saat penyiapan. Apa perbaikan yang sudah disiapkan?', opts:['pipenv uninstall tensorflow, lalu pipenv install tensorflow==2.15 (cocok dengan Python 3.11)','Latih ulang modelnya di Teachable Machine','Berpindah dari class Bot ke class Client','Pasang ulang Python'], c:0, fb:'Ini masalah kecocokan versi. Siapkan pasangan perintah ini untuk ditempel alih-alih mendebug versi secara langsung.'},
      {q:'Apa yang harus Anda minta dilakukan siswa SEBELUM pelajaran M7L1 dimulai?', opts:['Membuka proyek bot Discord lama mereka, mengulang cara kerjanya, dan membiarkannya terbuka — mereka membangun di atasnya sepanjang pelajaran','Melatih ulang model computer vision mereka dari nol','Menghapus virtual environment mereka','Menulis README untuk proyeknya'], c:0, fb:'Catatan pelajarannya menandainya sebagai teknis dan meminta Anda menyiapkan siswa jauh-jauh hari, dengan proyek bot lama mereka terbuka.'},
      {q:'Seorang siswa tidak pernah menyimpan bot mereka dari Modul 1. Apa respons yang tepat?', opts:['Berikan starter Basic Bot milik sekolah supaya penyiapannya tidak memakan habis pelajaran praktiknya','Minta mereka membangun ulang bot-nya dari nol sementara kelasnya menunggu','Pasangkan mereka dengan seseorang dan biarkan menonton','Lewati mereka dan tandai pelajarannya tidak selesai'], c:0, fb:'Rencananya menyediakan Basic Bot justru untuk ini, sebagaimana ia menyediakan Pipfile repository solusinya ketika penyiapan environment berlarut-larut.'},
      {q:'Fitur discord.py mana yang membuat bot bisa menerima gambar dari pengguna?', opts:['ctx.message.attachments, lalu attachment.save() untuk menuliskannya ke disk','discord.File, yang membaca unggahan','request.form, seperti pada form web','Event on_upload milik class Client'], c:0, fb:'Command-nya memeriksa ctx.message.attachments, melakukan perulangan atasnya lalu menyimpan masing-masing — dan path yang tersimpan itulah yang dioper ke modelnya.'},
      {q:'Apa momen keamanan berisiko tertinggi dalam modul ini?', opts:['Mempublikasikan proyeknya ke GitHub sementara token bot yang asli masih ada di kodenya','Mengunggah file model terlatihnya','Memasang tensorflow dari internet','Membiarkan bot menyimpan gambar yang diunggah pengguna'], c:0, fb:'Siswa terfokus pada bagian AI-nya, dan proyeknya sekarang memuat token yang hidup. Periksa sebelum setiap push — repo publik dengan token yang berfungsi adalah hasil terburuk yang tersedia.'},
      {q:'Skrip pengenalan suaranya error begitu dijalankan selama pelajaran Anda. Apa yang Anda periksa lebih dulu?', opts:['Apakah mikrofon Zoom Anda tidak dibisukan — Zoom menahan mikrofonnya, jadi bisukan lalu jalankan lagi','Apakah speech_recognition sudah terpasang','Apakah kode bahasanya benar','Apakah file .wav-nya sudah ada'], c:0, fb:'Rencana pelajarannya menandai ini secara eksplisit sebagai poin penting: bisukan mikrofonnya di Zoom lalu jalankan ulang skripnya.'},
      {q:'Mengapa try/except muncul di M7L4 alih-alih lebih awal dalam kursusnya?', opts:['Karena siswa baru saja menulis kode yang benar-benar kadang gagal — mikrofon yang sedang dipakai, panggilan jaringan yang tidak dijawab — sehingga penanganan exception menyelesaikan masalah yang sudah mereka alami','Karena Flask mewajibkannya untuk setiap route','Karena itu terlalu tingkat lanjut sebelum titik ini','Karena Jinja tidak bisa merender error'], c:0, fb:'Fungsi suaranya kadang menghasilkan error, dan itu persis motivasi jujur untuk try/except: tangkap kegagalannya supaya halamannya tidak rusak.'},
      {q:'Mengapa contoh M7L4 memakai tautan bergaya alih-alih <button> di dalam form-nya?', opts:['Sebuah <button> di dalam form mengirimkan form-nya, dan itu bukan yang kita mau — kita mau fungsi kita sendiri yang berjalan','Tautan lebih cepat daripada tombol','Tombol tidak bisa ditata dengan CSS','Flask tidak bisa menerima klik tombol'], c:0, fb:'Pelajarannya meminta Anda mendiskusikan persis ini: tag button di dalam form bertanggung jawab mengirimkan data, jadi pemicu suaranya diterapkan dengan cara berbeda.'},
      {q:'Untuk apa permainan “temukan sebuah benda” selama sepuluh menit di antara dua paruh praktik M7L3?', opts:['Untuk menyetel ulang fokus siswa sebelum praktik kedua — rencananya menyatakan secara eksplisit agar tidak melewatinya','Untuk menilai kosakata mereka','Untuk mengisi waktu kalau kodenya selesai lebih cepat','Untuk memilih siapa yang mempresentasikan programnya'], c:0, fb:'M7L3 punya enam puluh menit praktik beruntun. Rehatnya sengaja dijadwalkan dan rencananya meminta Anda tidak melewatinya — serta ikut bermain sendiri.'}
    ]
  },
  {
    id:12, emoji:'🤝', color:'#14B8A6',
    title:'M8 — Agile, Branching Git & Code Review',
    desc:'Modul 8 kursus: nilai-nilai Agile dan peran Scrum, membuat dan me-merge branch Git, prinsip serta checklist code review, dan pemrograman kolaboratif dengan Live Share.',
    obj:'Ajarkan keterampilan rekayasa yang memungkinkan kerja tim. Anda harus bisa menjelaskan Agile dan Scrum dengan analogi sehari-hari, mendefinisikan ketiga peran Scrum secara akurat, menjalankan latihan perencanaan sprint, mengajarkan branching dan merging, membangun checklist code review bersama siswa, serta menyiapkan lingkungan kolaboratif sebelum pelajarannya.',
    prep:'~3–4 jam. Lebih sedikit membangun, lebih banyak melatih Git.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 8 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Menjelaskan Agile dan Scrum dengan suara keras, dengan kata-kata Anda sendiri, memakai analogi sehari-harinya',
        'Menulis rencana sprint untuk satu fitur kecil, dipecah menjadi tugas beserta pemiliknya',
        'Membuat sebuah branch, mem-commit ke dalamnya, me-merge-nya, dan membaca keluaran merge-nya',
        'Membuat <strong>konflik</strong> merge dengan sengaja lalu menyelesaikannya — supaya itu tidak mengejutkan Anda secara langsung',
        'Meninjau kode contoh yang bermasalah dari kursusnya dan menemukan sendiri keempat masalah yang ditanam',
        'Menulis checklist code review Anda sendiri sebelum membandingkannya dengan milik kursusnya',
        'Memasang ekstensi <strong>Live Share</strong> dan menjalankan sesi dengan perangkat kedua atau seorang rekan',
        'Merefaktor kode tugas kolaboratif yang rusak menjadi sesuatu yang berjalan'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> Agile dan Scrum, ketiga perannya, serta merencanakan sprint sungguhan; <strong>L2</strong> branch Git — membuat, mengelola, dan me-merge; <strong>L3</strong> code review, prinsipnya, sebuah checklist bersama, dan saling meninjau proyek masing-masing; <strong>L4</strong> lingkungan pengembangan kolaboratif (VS Code Live Share) plus permainan modulnya.',
          why:'Siswa sudah memakai sprint dan retrospektif sejak Modul 1 tanpa pernah diberi tahu apa itu. Modul ini menamai praktiknya, dan menambahkan dua keterampilan yang memungkinkan bekerja dengan orang lain: branching dan meninjau.',
          learn:'Siswa menjelaskan nilai-nilai Agile dengan kata-kata mereka sendiri, meneliti dan mempresentasikan satu peran Scrum, merencanakan sprint untuk sebuah fitur sungguhan, membuat dan me-merge branch, membangun dan menerapkan checklist code review, memberi umpan balik yang membangun, serta mengetik kode secara bersamaan di satu editor bersama.',
          confident:'Agile sebagai filosofi vs Scrum sebagai praktik konkret; apa yang sebenarnya dikerjakan Scrum Master, Product Owner, dan Development Team; <code>git merge</code> dan seperti apa merge yang berhasil; lima prinsip peninjauan yang efektif; serta menyiapkan Live Share <em>sebelum</em> pelajarannya.'
        }
      ]},
      {t:'🏃 L1 — Agile, Scrum & perencanaan sprint', cards:[
        {type:'text', h:'Ajarkan nilainya lewat analogi sehari-hari', b:'Berhentilah pada nilai-nilai Agile lalu minta siswa menjelaskan masing-masing dengan kata-kata mereka sendiri disertai contoh dari kehidupan sehari-hari. Kursusnya menyediakan empat analogi yang mengena bagi remaja, dan memakainya lebih baik daripada mendefinisikan istilahnya.'},
        {type:'qa', h:'Keempat nilai Agile, sebagaimana dibingkai kursusnya', items:[
          {k:'Individu dan interaksi di atas proses dan alat', v:'Merencanakan makan malam keluarga: alih-alih jadwal memasak yang kaku, kalian membicarakan selera, memutuskan siapa mengerjakan apa, dan membantu siapa pun yang kesulitan.'},
          {k:'Perangkat lunak yang berjalan di atas dokumentasi yang menyeluruh', v:'Merapikan kamarmu: alih-alih merencanakan letak semua benda, kamu mulai membereskan. Kamar yang bersih adalah tujuannya; jalannya bisa berubah.'},
          {k:'Kolaborasi dengan pelanggan di atas negosiasi kontrak', v:'Kamu sudah janjian bertemu teman, lalu salah satunya ada kelas. Alih-alih memaksakan waktu semula, kalian mencari waktu yang cocok.'},
          {k:'Menanggapi perubahan di atas mengikuti rencana', v:'Kamu berencana lari pagi dan ternyata hujan, jadi kamu yoga di rumah alih-alih membatalkannya.'}
        ]},
        {type:'hi', h:'Agile vs Scrum, dalam satu gambaran', b:'Ini pembedaan yang paling sering dikaburkan siswa. <strong>Agile adalah filosofinya</strong> — bagaimana sebuah keluarga sepakat hidup rukun: saling menghormati, lentur, bekerja sama. <strong>Scrum adalah aturan konkretnya</strong> untuk mempraktikkannya: siapa memasak, siapa menata meja, siapa membereskan — peran, tugas, dan pertemuan yang membuatnya berjalan. Agile adalah gagasannya; Scrum adalah cara menghidupkan gagasan itu.'},
        {type:'text', h:'Perannya, diteliti oleh siswa', b:'Bagi kelompoknya menjadi tiga regu — <strong>Scrum Master</strong>, <strong>Product Owner</strong>, <strong>Development Team</strong> — lalu beri mereka sepuluh menit dengan sumber apa pun yang mereka suka untuk meneliti perannya dalam konteks proyek aplikasi seluler. Setiap regu lalu memberikan presentasi mini lima menit. Tugas Anda adalah menjawab pertanyaan organisasional dan teknis serta membangun suasana yang positif. Setelah itu, tanyakan siapa yang <em>ingin</em> menjadi Scrum Master atau Product Owner, dan mengapa.'},
        {type:'twocol', left:{h:'Scrum Master', items:['Menyingkirkan hambatan supaya timnya bisa bekerja','Menjelaskan Agile dan Scrum, terutama kepada pendatang baru','Menjalankan standup, perencanaan, dan retrospektif — serta menjaganya tetap produktif','Memastikan orang merasa aman menyampaikan ide, dan menarik masuk anggota yang lebih pendiam','<strong>Tidak mengarahkan</strong> — ia menciptakan kondisi untuk keberhasilan']}, right:{h:'Product Owner', items:['Mengumpulkan kebutuhan dari pelanggan, manajer, dan pengguna','Menyusun daftar tugas lalu mengurutkannya berdasarkan prioritas','Menulis tugas sebagai user story yang bisa dipahami timnya','Menetapkan kapan sebuah tugas dihitung selesai','Membantu timnya memecah tugas dan menilai kerumitannya']}},
        {type:'text', h:'Lalu rencanakan sebuah sprint sungguhan', b:'Seluruh kelompok bertindak sebagai satu tim pengembangan. Curahkan gagasan “apa yang akan kalian bangun kalau bisa membangun apa saja?”, lalu <strong>Anda mengambil peran Product Owner</strong> dan membantu mereka merencanakan sebuah sprint. Jangan merencanakan seluruh proyeknya — ambil satu bagiannya, seperti sebuah form pendaftaran atau sebuah menu. Waktu yang disarankan: 5 menit curah gagasan, 5 menit dengan Product Owner, 15 menit perencanaan, 5 menit presentasi dan umpan balik.'},
        {type:'tip', txt:'Contoh terperinci dalam rencananya — sebuah form pendaftaran yang dipecah menjadi frontend, backend, infrastruktur, pengujian, dan dokumentasi selama dua minggu — jauh lebih rinci daripada apa yang akan dihasilkan siswa Anda. Pakailah itu sebagai rujukan Anda sendiri untuk memancing mereka (“siapa yang mengujinya? siapa yang mendokumentasikannya?”), bukan sebagai standar yang Anda tuntut dari mereka.'}
      ]},
      {t:'🌳 L2 — Branch Git', cards:[
        {type:'text', h:'Dua analogi, keduanya layak disiapkan', b:'<strong>Catatan kelas bersama:</strong> seluruh kelas mengerjakan satu kumpulan catatan besar, dan setiap siswa menulis bagiannya di lembar terpisah — sebuah branch — supaya tidak ada yang merusak dokumen utamanya. Ketika semua bagiannya siap, semuanya digabungkan menjadi satu file: sebuah <strong>merge</strong>. Kesalahan bisa diperbaiki di lembar perorangannya tanpa menyentuh seluruh dokumennya. <strong>Sebuah produksi film:</strong> branch utamanya adalah naskah jadi yang hanya memuat materi yang berhasil; branch fitur adalah adegan terpisah tempat ide baru dicoba tanpa memengaruhi naskahnya; merging adalah penyuntingan yang menyambung adegan-adegannya.'},
        {type:'text', h:'Bagaimana praktiknya berjalan', b:'Kerjakan tugasnya di komputer Anda sendiri lalu minta siswa mengikuti <strong>langkah demi langkah</strong>, sambil memastikan semua orang tetap menyusul. Kriteria keberhasilannya konkret: setiap siswa mengirim tangkapan layar terminalnya yang menampilkan hasil <code>git merge feature/add-greeting</code>. Pastikan <em>setiap</em> siswa menyelesaikannya — ini keterampilan yang diam-diam menghambat kerja tim belakangan kalau tidak mendarat.'},
        {type:'code', lbl:'seperti apa fast-forward merge yang berhasil terlihat', code:`Updating 319de95..8de4c42
Fast-forward
 main.py | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)`},
        {type:'hi', h:'Bukalah dengan kuisnya, dan bacakan jawabannya', b:'Pelajarannya dimulai dengan kuis sepuluh menit tentang materi Agile dan Scrum dari pelajaran sebelumnya, dan rencananya menyuruh Anda meninjau <strong>setiap</strong> jawaban yang benar setelahnya beserta penjelasannya. Itu layak dikerjakan dengan semestinya — Product Owner memiliki backlog-nya, sebuah sprint adalah periode waktu tetap selama satu sampai empat minggu, pembuatan backlog <em>bukan</em> tugas Scrum Master, retrospektif adalah tempat timnya merencanakan perbaikan, dan adaptasi cepat terhadap perubahan adalah prinsip Agile-nya.'},
        {type:'tip', txt:'PR di sini punya bagian kedua: sebuah “<strong>Tugas Rahasia</strong>” yang <em>tidak</em> boleh Anda bahas — ingatkan saja siswa bahwa mereka akan membutuhkannya di pelajaran keempat modul ini. Jangan membocorkannya, dan jangan melupakannya juga.'}
      ]},
      {t:'🔎 L3 — Code review', cards:[
        {type:'text', h:'Mengapa peninjauan itu ada', b:'Pimpin diskusi kelompok alih-alih presentasi. Lima tujuan yang harus dicapai siswa: <strong>mendeteksi kesalahan</strong>, supaya bug tidak sampai ke pengguna; <strong>menjaga standar</strong> gaya penulisan kode; <strong>meningkatkan keterampilan tim</strong> dengan berbagi pengetahuan; <strong>menambah keterbacaan</strong> supaya kodenya bisa dipahami seluruh tim, bukan hanya penulisnya; dan <strong>meningkatkan tanggung jawab bersama</strong>, menjadikan basis kodenya usaha kolektif alih-alih kumpulan usaha perorangan.'},
        {type:'qa', h:'Lima prinsip peninjauan yang efektif', items:[
          {k:'Hormatilah', v:'Umpan balik yang membangun tanpa menyalahkan.'},
          {k:'Fokus pada masalahnya, bukan orangnya', v:'Bahaslah kodenya, bukan penulisnya.'},
          {k:'Spesifiklah', v:'Berikan contoh konkret perbaikannya.'},
          {k:'Seimbangkan kritik dan pujian', v:'Akui secara eksplisit kode yang ditulis dengan baik.'},
          {k:'Berikan rekomendasi yang jelas', v:'Buat saran Anda setidak-ambigu mungkin.'}
        ]},
        {type:'text', h:'Bangun checklist-nya bersama mereka, lalu pakailah', b:'Sepuluh menit dalam regu berisi dua atau tiga orang, meneliti dan menyusun rancangan checklist, lalu gabungkan semuanya menjadi <strong>satu checklist akhir yang akan dipakai seluruh kelompok</strong> — dan kirimkan ke chat grup, karena itu dibutuhkan untuk tugas berikutnya dan PR-nya. Kategori yang harus dituju rancangannya: kejelasan kode, kebenaran, kesederhanaan, kepatuhan gaya, verifikasi logika, dan keluaran yang benar.'},
        {type:'code', lbl:'kode latihannya — empat masalah yang ditanam', code:`<span class="ck">import</span> random

<span class="cf">print</span>(<span class="cs">"Selamat datang di permainan 'Tebak Angka'!"</span>)
secret = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">100</span>)
attempt = <span class="cn">0</span>

<span class="ck">while</span> <span class="ck">True</span>:
    user_guess = <span class="cf">input</span>(<span class="cs">"Masukkan angkamu: "</span>)
    attempt += <span class="cn">1</span>
    <span class="ck">if</span> user_gess == secret:              <span class="cc"># 1. salah ketik: user_gess</span>
        <span class="cf">print</span>(<span class="cs">"Selamat!"</span>)                <span class="cc"># 2. input() itu string —</span>
        <span class="ck">break</span>                            <span class="cc">#    tidak pernah diubah dengan int()</span>
    <span class="ck">elif</span> user_guess &gt; secret:            <span class="cc"># 3. tidak ada komentar di mana pun</span>
        <span class="cf">print</span>(<span class="cs">"Angkamu terlalu besar."</span>)   <span class="cc"># 4. tidak ada validasi masukan —</span>
    <span class="ck">elif</span> user_guess &lt; secret:            <span class="cc">#    masukan teks membuatnya crash</span>
        <span class="cf">print</span>(<span class="cs">"Angkamu terlalu kecil."</span>)`},
        {type:'text', h:'Peninjauan antartemannya sendiri', b:'Siswa bertukar proyek — dan kalau tidak semua orang punya yang siap, itu tidak apa-apa, beberapa siswa boleh meninjau proyek yang sama, atau Anda kembali memakai kode contoh di atas. Lima belas menit untuk meninjau, mengirimkan kodenya dan komentarnya ke chat tugas. Setelah itu mereka mempresentasikan apa yang mereka tinjau dan Anda membahas umpan balik serta masalah yang ditemukan bersama-sama.'},
        {type:'good', txt:'Nyatakan ulang aturan umpan balik yang membangun tepat sebelum mereka mulai, bukan hanya selama teorinya. Meninjau kode teman sekelas itu berisiko secara sosial bagi seorang remaja, dan perbedaan antara “ini salah” dan “aku akan mengganti nama ini supaya lebih jelas” adalah seluruh perbedaan antara pelajaran yang berhasil dan yang merusak kelompoknya.'},
        {type:'tip', txt:'PR-nya bergantung pada pelajaran sebelumnya: siswa harus menyiapkan salah satu proyek mereka sendiri untuk diserahkan kepada teman sekelas. Ingatkan mereka di akhir L2, atau separuh kelas Anda datang tanpa apa pun untuk ditinjau.'}
      ]},
      {t:'👥 L4 — Pengembangan kolaboratif & permainan modulnya', cards:[
        {type:'warn', txt:'<strong>Tahap 0 terjadi sebelum pelajarannya dimulai.</strong> Pasang ekstensi <strong>Live Share</strong> di VS Code, buat sebuah folder berisi <code>main.py</code> dengan potongan kode sederhana, dan bersiaplah. Lalu di dalam pelajaran: klik Live Share, masuk, bagikan tautannya, terima permintaan sambungan tiap siswa dan <strong>berikan izin menyunting</strong>. Kalau Anda mencoba melakukan ini tanpa persiapan di depan kelas, Anda akan kehilangan pelajarannya.'},
        {type:'text', h:'Apa yang ditekankan tentang lingkungannya', b:'Tidak penting alat spesifik mana yang mereka pakai — intinya adalah memahami <strong>bagaimana Anda bekerja ketika beberapa orang berbagi satu basis kode</strong>. Mintalah setiap siswa mencetak namanya di terminal sebagai pemeriksaan sambungan, lalu jangan memutus sambungan siapa pun ketika Anda pindah ke tugas berikutnya: pekerjaannya berlanjut di lingkungan itu.'},
        {type:'text', h:'Tugas kolaboratifnya', b:'Muat kode yang sengaja dirusak ke lingkungan bersamanya lalu bantu siswa <strong>membagi perbaikannya di antara mereka sendiri</strong>. Katakan bahwa mereka tidak harus menyelesaikan semuanya, tapi harus memperbaikinya sebanyak yang mereka bisa. Dua puluh menit, lalu berhenti dan bagikan kesan. Masalah yang ditanam adalah tur yang bagus atas kursusnya: sebuah fungsi yang menghitung tapi tidak pernah <code>return</code>, masukan yang tidak divalidasi, tidak ada penanganan exception di sekitar <code>int(input(...))</code>, sebuah variabel yang jadi bernilai <code>None</code> akibatnya, dan nama pemain yang dikumpulkan tapi tidak pernah dipakai.'},
        {type:'code', lbl:'bentuk versi hasil refaktor yang mereka tuju', code:`<span class="ck">import</span> random

<span class="cc"># Menyapa pemain dan memvalidasi masukan namanya</span>
<span class="ck">def</span> <span class="cf">greet_player</span>():
    <span class="ck">while</span> <span class="ck">True</span>:
        name = <span class="cf">input</span>(<span class="cs">"Siapa namamu? (1-15 karakter): "</span>).<span class="cf">strip</span>()
        <span class="ck">if</span> <span class="cn">1</span> &lt;= <span class="cf">len</span>(name) &lt;= <span class="cn">15</span>:
            <span class="ck">return</span> name                       <span class="cc"># perbaikannya: benar-benar kembalikan</span>
        <span class="cf">print</span>(<span class="cs">"Namanya harus 1 sampai 15 karakter. Coba lagi."</span>)

<span class="ck">def</span> <span class="cf">generate_random</span>(low, high):
    <span class="ck">return</span> random.<span class="cf">randint</span>(low, high)      <span class="cc"># perbaikannya: return, bukan cuma panggil</span>

<span class="ck">if</span> __name__ == <span class="cs">"__main__"</span>:
    <span class="cf">main</span>()`},
        {type:'hi', h:'Permainan modulnya — “Aplikasi Impian”', b:'Lima belas menit persiapan dalam dua regu, lalu lima menit masing-masing untuk presentasi. Pilih sebuah ide, bentuk regunya, rencanakan sebuah sprint. <strong>Tidak ada pemenang dalam tugas ini</strong>, dan rencananya menyatakan demikian — hasil konkretnya nomor dua setelah bekerja sebagai tim, memantapkan modulnya, dan menikmatinya. Kalau tidak ada yang mengerjakan “PR Rahasia”-nya, hiburlah mereka lalu minta mereka menciptakan ide sekarang; idenya boleh apa saja, bahkan yang tidak realistis. Kalau mereka mentok, sarankan merencanakan aplikasi yang mirip dengan yang mereka pakai sehari-hari.'},
        {type:'tip', txt:'Patuhi waktunya tanpa kompromi di sini: 5 menit menjelaskan dan membentuk regu, 15 menit bekerja, 5 + 5 menit presentasi. Pelajaran ini punya empat tahap berbeda dan tidak ada kelonggaran.'}
      ]}
    ],
    quiz:[
      {q:'Bagaimana Anda menjelaskan perbedaan antara Agile dan Scrum?', opts:['Agile adalah filosofinya — saling menghormati, lentur, bekerja sama; Scrum adalah kumpulan konkret peran, tugas, dan pertemuan yang mempraktikkannya','Scrum adalah filosofinya dan Agile adalah perangkat alatnya','Keduanya metodologi yang bersaing dan sebuah tim memilih salah satu','Agile untuk perangkat lunak dan Scrum untuk perangkat keras'], c:0, fb:'Analogi keluarga dari kursusnya: Agile adalah bagaimana sebuah keluarga sepakat hidup rukun; Scrum adalah siapa memasak, siapa menata meja, dan siapa membereskan.'},
      {q:'Mana di antara ini yang BUKAN tanggung jawab Scrum Master?', opts:['Membuat dan memprioritaskan product backlog','Menyingkirkan hambatan yang menghalangi timnya','Menjalankan standup, perencanaan, dan retrospektif','Memastikan anggota tim yang lebih pendiam didengar'], c:0, fb:'Backlog-nya milik Product Owner. Scrum Master memastikan timnya bekerja efektif dan menyingkirkan hambatan — ini salah satu jawaban kuis M8L2.'},
      {q:'Apa itu sprint, dan biasanya berlangsung berapa lama?', opts:['Periode waktu tetap yang dialokasikan untuk menyelesaikan tugas dari backlog — biasanya satu sampai empat minggu','Pertemuan tempat timnya meninjau pekerjaan yang sudah selesai','Minggu terakhir sebelum sebuah rilis','Satu hari kerja penuh berisi pengetikan kode yang terfokus'], c:0, fb:'Sprint adalah periode berdurasi tetap selama tim berfokus menyelesaikan tugas backlog — biasanya satu sampai empat minggu.'},
      {q:'Seorang siswa bertanya mengapa branch ada. Penjelasan mana yang dipakai kursus ini?', opts:['Setiap orang bekerja di lembar terpisah supaya dokumen utamanya tetap utuh, lalu lembar-lembarnya digabungkan — sebuah merge — dan kesalahan bisa diperbaiki tanpa menyentuh seluruh proyeknya','Branch menyimpan versi lama proyeknya sebagai cadangan','Branch memungkinkan dua orang berbagi satu akun GitHub','Branch diwajibkan sebelum Anda bisa mem-push ke GitHub'], c:0, fb:'Analogi catatan kelas bersama, dengan analogi produksi film sebagai alternatifnya: branch utama adalah naskah jadinya, branch fitur adalah adegan yang sedang dicoba, merging adalah penyuntingannya.'},
      {q:'Apa kriteria keberhasilan yang konkret untuk praktik M8L2?', opts:['Setiap siswa mengirim tangkapan layar terminalnya yang menampilkan git merge feature/add-greeting yang berhasil','Setiap siswa membuat branch yang dinamai menurut namanya sendiri','Tutor me-merge semua branch siswanya','Setiap siswa menjelaskan merging dengan kata-katanya sendiri'], c:0, fb:'Rencananya meminta tangkapan layar terminal berisi hasil merge-nya, dan menyuruh memastikan setiap siswa menyelesaikan tugasnya.'},
      {q:'Mana di antara ini yang merupakan salah satu dari lima prinsip code review yang efektif?', opts:['Fokus pada masalahnya, bukan orangnya — bahaslah kodenya, bukan penulisnya','Tunjukkan setiap masalah, sekecil apa pun, sebelum memuji apa pun','Minta tutor meninjau semua kode supaya umpan baliknya konsisten','Hanya tinjau kode yang sudah berjalan tanpa error'], c:0, fb:'Kelima prinsipnya adalah: hormatilah, fokus pada masalahnya bukan orangnya, spesifiklah, seimbangkan kritik dengan pujian, dan berikan rekomendasi yang jelas.'},
      {q:'Dua dari bug yang ditanam dalam latihan code review adalah variabel yang salah eja dan konversi yang hilang. Apa yang kedua itu?', opts:['input() mengembalikan string, jadi ia tidak pernah diubah dengan int() dan tidak bisa dibandingkan dengan angka rahasianya','random.randint dipanggil dengan rentang yang salah','Perulangan while-nya tidak punya kondisi break','Pernyataan print-nya kehilangan tanda kurungnya'], c:0, fb:'user_guess tetap berupa string, sehingga pembandingannya dengan secret menjadi mustahil — bug yang sama yang dijumpai siswa secara alami di sepanjang kursusnya.'},
      {q:'Tidak setiap siswa punya proyek yang siap untuk code review antarteman. Apa yang Anda lakukan?', opts:['Biarkan beberapa siswa meninjau proyek yang sama, atau kembali memakai kode contoh yang disediakan — itu secara eksplisit tidak apa-apa','Batalkan tahap peninjauannya','Minta siswa meninjau kodenya sendiri saja','Tunda pelajarannya'], c:0, fb:'Rencananya menyatakannya langsung: itu tidak apa-apa, beberapa siswa boleh meninjau proyek yang sama, dan ada kode contoh untuk ditinjau kalau tidak ada yang mengumpulkan.'},
      {q:'Apa yang harus Anda lakukan SEBELUM pelajaran M8L4 dimulai?', opts:['Pasang ekstensi Live Share, buat folder proyeknya berisi main.py, dan bersiap membagikannya — Tahap 0 adalah pekerjaan pra-pelajaran','Kirimkan kode rusaknya kepada siswa untuk dibaca','Bagi kelasnya menjadi regu-regu','Siapkan tautan kuisnya'], c:0, fb:'Tahap 0 secara eksplisit dilabeli sebagai penyiapan yang harus diselesaikan di pihak Anda sebelum pelajarannya. Melakukannya tanpa persiapan di depan kelas merenggut pelajaran Anda.'},
      {q:'Siapa yang menang dalam permainan “Aplikasi Impian” di akhir M8L4?', opts:['Tidak ada — rencananya menyatakan tidak ada pemenang; kerja tim, pemantapan, dan kesenangan adalah tujuannya','Regu dengan ide paling layak','Regu yang paling cepat menyelesaikan perencanaannya','Regu yang presentasinya paling disukai'], c:0, fb:'“Tidak ada pemenang dalam tugas ini.” Hasil konkretnya nomor dua setelah bekerja dalam regu, memantapkan materi modulnya, dan menikmati permainannya.'}
    ]
  },
  {
    id:13, emoji:'🗣️', color:'#8B5CF6',
    title:'M9 — Sintesis Suara, API & Kode Bersih',
    desc:'Modul 9 kursus: sintesis suara dengan pyttsx3, bot cuaca yang bisa berbicara dibangun di atas API tanpa key, bot fakta yang dibangun mandiri, serta kode bersih dengan refactoring dan flake8.',
    obj:'Ajari siswa membuat program berbicara dan membuat kode mereka terbaca. Anda harus bisa membedakan ketiga teknologi suaranya, mengonfigurasi pyttsx3, mem-live-code sebuah bot dalam tiga tahap yang bisa diperiksa, menjalankan pembangunan mandiri dengan otonomi yang sungguhan, serta memimpin sesi refactoring termasuk sebuah linter.',
    prep:'~4 jam. Benar-benar menyenangkan; tetap bangun sendiri.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 9 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Memasang <code>pyttsx3</code> dan membuat komputer Anda berbicara, sambil mengatur kecepatan, volume, dan suaranya',
        'Memastikan indeks suara mana yang benar-benar ada di sistem operasi Anda',
        'Memanggil <code>wttr.in</code> dan mendapatkan ramalan cuaca yang terformat',
        'Membangun bot cuaca yang berbicara itu dalam tiga tahap yang dipakai pelajarannya',
        'Memastikan suaranya keluar dari komputer yang menjalankan bot-nya, bukan dari Discord',
        'Membangun bot berbicara kedua dari API yang berbeda, secara mandiri, untuk mengukur waktu Anda sendiri',
        'Merefaktor sendiri contoh pajak dan poin rumah yang berantakan sebelum membaca solusinya',
        'Memasang <code>flake8</code>, menjalankannya pada kode Anda sendiri, dan memperbaiki apa yang ditandainya',
        'Menemukan satu masalah dalam kode Anda yang tidak bisa ditangkap flake8'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Empat pelajaran: <strong>L1</strong> sintesis suara dan program teks-ke-suara dengan <strong>pyttsx3</strong>; <strong>L2</strong> bot Discord yang mengambil cuaca dari sebuah API lalu membacakannya; <strong>L3</strong> pembangunan mandiri — bot yang mengucapkan fakta acak — plus masa depan teknologi suara; <strong>L4</strong> kode bersih, refactoring, dan <strong>flake8</strong>.',
          why:'Dua buah hasil yang sangat berbeda. Suara membuat proyek mereka terasa rampung dan benar-benar layak masuk portofolio, dan kode bersih adalah perbedaan antara proyek yang bisa dilanjutkan orang lain dan yang tidak bisa disentuh siapa pun. L4 juga pelajaran paling berguna secara profesional dalam seluruh kursus ini.',
          learn:'Siswa membedakan kendali suara, pengenalan suara, dan sintesis suara; memasang dan mengonfigurasi library sintesis; membangun bot cuaca berbicara di atas API tanpa key; membangun bot berbicara kedua secara mandiri; serta merefaktor kode berantakan terhadap kriteria kode bersih, dengan memeriksanya memakai sebuah linter.',
          confident:'Ketiga teknologi suara dan kasus penggunaannya; tiga tahap cara kerja sintesis; <code>rate</code>, <code>volume</code>, <code>voice</code>, <code>say</code>, dan <code>runAndWait</code> milik <code>pyttsx3</code>, serta bahwa ia bekerja <strong>luring</strong>; <code>wttr.in</code> yang tidak butuh API key; serta checklist kode bersih plus <code>flake8</code>.'
        }
      ]},
      {t:'🔊 L1 — Sintesis suara', cards:[
        {type:'qa', h:'Ketiga teknologinya, dibedakan', items:[
          {k:'Kendali suara', v:'Memakai suara Anda untuk mengendalikan perangkat atau aplikasi. Lampu dan termostat rumah pintar, “telepon ibu”, memulai musik atau GPS di mobil.'},
          {k:'Pengenalan suara', v:'Mengubah ucapan menjadi teks atau perintah. Pendiktean suara-ke-teks, aplikasi penerjemah, takarir langsung dalam rapat video.'},
          {k:'Sintesis suara', v:'Mengubah teks menjadi ucapan sehingga komputernya “berbicara”. Navigasi (“300 meter lagi, belok kiri”), pembaca buku elektronik yang membacakan, notifikasi yang diucapkan.'}
        ]},
        {type:'text', h:'Ketiganya bersamaan', b:'Contoh terbaik memakai ketiganya, dan siswa sudah memilikinya. Sebuah <strong>asisten suara</strong>: pengenalan memahami Anda, sintesis membalas, kendali suara menjalankan perintahnya. Sebuah <strong>sistem navigasi mobil</strong>: Anda mendiktekan alamatnya, ia mengucapkan rutenya, Anda mengubahnya dengan suara. <strong>Perangkat lunak bantu</strong>: ia memahami orangnya, membacakan teks yang tidak bisa mereka baca sendiri, dan bisa dikendalikan dengan suara.'},
        {type:'text', h:'Bagaimana sintesis sebenarnya bekerja — tiga tahap', b:'<strong>1. Analisis teks</strong> — komputernya memikirkan bagaimana teksnya harus dibaca: sebuah titik berarti jeda, sebuah tanda tanya mengubah intonasinya. <strong>2. Konversi teks ke suara</strong> — kata-katanya menjadi bunyi, memakai basis data seluruh bunyi bahasanya. <strong>3. Penghasilan ucapan</strong> — bunyi-bunyinya digabungkan menjadi kata dan kalimat, mengincar sesuatu yang mulus dan menyerupai manusia.'},
        {type:'code', lbl:'pyttsx3 — pada dasarnya seluruh library-nya', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

engine.<span class="cf">setProperty</span>(<span class="cs">'rate'</span>, <span class="cn">150</span>)      <span class="cc"># kecepatan bicara</span>
engine.<span class="cf">setProperty</span>(<span class="cs">'volume'</span>, <span class="cn">0.9</span>)    <span class="cc"># volume</span>

voices = engine.<span class="cf">getProperty</span>(<span class="cs">'voices'</span>)
engine.<span class="cf">setProperty</span>(<span class="cs">'voice'</span>, voices[<span class="cn">0</span>].id)   <span class="cc"># pilihan suara tergantung sistem</span>

engine.<span class="cf">say</span>(<span class="cs">"Halo"</span>)
engine.<span class="cf">runAndWait</span>()                     <span class="cc"># benar-benar lakukan sintesisnya</span>`},
        {type:'text', h:'Tahap kerja mandirinya', b:'Ini tahap mandiri 40 menit yang sungguhan: 25 menit untuk mempelajari dokumentasinya lalu membangun program yang menyuarakan teks dan bereksperimen dengan pengaturannya, lalu 15 menit presentasi. Peran Anda adalah menjawab pertanyaan organisasional dan teknis — tidak lebih. Kalau seorang siswa kesulitan, minta mereka membagikan layarnya lalu bantu mereka satu per satu. <strong>Prioritasnya adalah setiap siswa berakhir dengan program suara yang berjalan</strong>, dan Anda memuji setiap presentasi.'},
        {type:'tip', txt:'Ajukan pertanyaan yang benar-benar bagus di akhir: bagaimana hidup kita akan berubah tanpa sintesis suara? Siswa cenderung menganggapnya sebagai kemudahan sampai mereka memikirkan seseorang yang tidak bisa membaca layarnya — dan pada saat itu teknologinya berhenti menjadi mainan.'}
      ]},
      {t:'🌤️ L2 — Bot cuaca yang berbicara', cards:[
        {type:'text', h:'Mengapa pelajaran ini mudah dijalankan dengan baik', b:'API-nya <strong>tidak butuh akun dan tidak butuh key</strong>. <code>wttr.in</code> mengembalikan cuaca lewat request HTTP biasa, yang berarti tidak ada tahap pendaftaran, tidak ada key yang bisa bocor, dan tidak ada siswa yang terhambat pada pendaftaran. Pilihlah pertempuran itu dengan sengaja — pelajarannya tentang menggabungkan tiga hal yang sudah mereka ketahui, bukan tentang autentikasi API.'},
        {type:'hi', h:'Live-code dalam tiga tahap yang bisa diperiksa', b:'Rencananya membagi pembangunannya menjadi tiga, dan meminta Anda memastikan setiap siswa berada di jalur yang benar setelah <em>masing-masing</em> tahap. <strong>Tahap 1</strong> — bot dasar dengan command <code>!start</code> yang membalas. <strong>Tahap 2</strong> — tambahkan panggilan API-nya supaya <code>!weather London</code> mengembalikan ramalannya sebagai teks. <strong>Tahap 3</strong> — tambahkan sintesisnya supaya bot-nya juga membacakannya. Sebelum menulis kode apa pun, luangkan beberapa menit memastikan semua orang menyiapkan token bot-nya.'},
        {type:'code', lbl:'tahap 2 — fungsi cuacanya', code:`<span class="ck">import</span> requests

<span class="ck">def</span> <span class="cf">get_weather</span>(city: <span class="ct2">str</span>) -&gt; <span class="ct2">str</span>:
    <span class="cc"># %C adalah deskripsinya, %t suhunya</span>
    base_url = <span class="cs">f"https://wttr.in/{city}?format=%C+%t"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        <span class="ck">return</span> response.text.<span class="cf">strip</span>()
    <span class="ck">return</span> <span class="cs">"Tidak bisa mengambil data cuaca. Coba lagi nanti."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Cuaca di {city}: {weather_info}"</span>)`},
        {type:'code', lbl:'tahap 3 — satu fungsi mengubahnya menjadi bot yang berbicara', code:`<span class="ck">import</span> pyttsx3

engine = pyttsx3.<span class="cf">init</span>()

<span class="ck">def</span> <span class="cf">speak</span>(text: <span class="ct2">str</span>):
    <span class="cs">"""Menyuarakan teks yang diberikan memakai pyttsx3."""</span>
    engine.<span class="cf">say</span>(text)
    engine.<span class="cf">runAndWait</span>()

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">weather</span>(ctx, *, city: <span class="ct2">str</span>):
    weather_info = <span class="cf">get_weather</span>(city)
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Cuaca di {city}: {weather_info}"</span>)
    <span class="cf">speak</span>(weather_info)   <span class="cc"># berbicara di komputer yang menjalankan bot-nya</span>

bot.<span class="cf">run</span>(<span class="cs">"YOUR_BOT_TOKEN"</span>)`},
        {type:'warn', txt:'Poin konseptual yang akan membuat siswa tersandung: suaranya keluar dari <strong>komputer yang menjalankan bot-nya</strong>, bukan dari Discord. Bot mereka tidak berbicara kepada seluruh server — ia berbicara kepada mereka. Katakan ini sebelum mereka mengujinya, atau Anda akan menerima pertanyaan bingung yang sama lima kali. Ini juga cara alami memperkenalkan gagasan bahwa kode berjalan di suatu tempat yang spesifik.'},
        {type:'text', h:'Sepuluh bot yang layak disimpan di saku Anda', b:'Pelajarannya mendaftar contoh yang bisa diadaptasi siswa untuk PR dan untuk proyek kelulusan: cuaca, penerjemah, asisten belajar, pembaca berita, meditasi, kebugaran, pembantu permainan, rumah pintar, pemesanan, pemandu wisata. Bacakan beberapa selama tahap teorinya — itu mengubah “tambahkan suara ke sebuah bot” dari sebuah latihan menjadi daftar hal yang mungkin benar-benar mereka inginkan.'},
        {type:'tip', txt:'Kirimkan kode akhir yang berkomentar kepada siswa <strong>setelah</strong> pelajarannya, karena PR-nya adalah memperbaiki bot-nya. Versi tahap ketiga yang lengkap dalam rencananya menjelaskan setiap barisnya — pakailah sebagai rujukan Anda sendiri saat mem-live-code, dan perhatikan bahwa jawaban kuis M9L2 sekaligus berfungsi sebagai pengulangan ringkas atas API pyttsx3-nya.'}
      ]},
      {t:'🎲 L3 — Pembangunan mandiri & masa depan suara', cards:[
        {type:'text', h:'Otonomi yang sungguhan, dengan jaring pengaman', b:'Strukturnya: 5 menit menjelaskan dan menyetel nada yang positif, <strong>20 menit membangun bot yang mengambil fakta acak dari sebuah API lalu mengucapkannya</strong>, lalu 15 menit ketika satu siswa membagikan layarnya dan menjelaskan kodenya baris demi baris. Sumber apa pun boleh. Bantulah dengan masalah teknis dan organisasional tapi <strong>biarkan mereka menerapkannya secara mandiri</strong> — ini gladi bersih untuk hackathon yang dimulai di modul berikutnya.'},
        {type:'code', lbl:'pola yang harus mereka capai sendiri', code:`<span class="ck">def</span> <span class="cf">get_fact</span>() -&gt; <span class="ct2">str</span>:
    <span class="cs">"""Mengambil sebuah fakta acak dari API-nya."""</span>
    base_url = <span class="cs">"https://uselessfacts.jsph.pl/random.json?language=en"</span>
    response = requests.<span class="cf">get</span>(base_url)

    <span class="ck">if</span> response.status_code == <span class="cn">200</span>:
        data = response.<span class="cf">json</span>()
        <span class="ck">return</span> data.<span class="cf">get</span>(<span class="cs">"text"</span>, <span class="cs">"Gagal mengambil fakta."</span>)
    <span class="ck">return</span> <span class="cs">"Gagal mengambil data. Coba lagi nanti."</span>

<span class="cd">@bot.command</span>()
<span class="ck">async def</span> <span class="cf">fact</span>(ctx):
    random_fact = <span class="cf">get_fact</span>()
    <span class="ck">await</span> ctx.<span class="cf">send</span>(<span class="cs">f"Ini fakta menarik: {random_fact}"</span>)
    <span class="cf">speak</span>(random_fact)`},
        {type:'hi', h:'Penjelasan baris demi barisnya adalah penilaiannya', b:'Lima belas menit seorang siswa menarasikan kodenya sendiri adalah pemeriksaan pemahaman yang lebih baik daripada kuis mana pun. Pilihlah seseorang yang membangunnya sendiri alih-alih yang paling cepat selesai, dan pakailah <code>data.get("text", "…")</code> sebagai pancingan Anda: mengapa sebuah nilai bawaan alih-alih <code>data["text"]</code>? Karena API-nya mungkin tidak mengembalikan field itu — dan itu naluri bertahan yang sama seperti <code>try</code>/<code>except</code>.'},
        {type:'text', h:'Tutuplah dengan diskusinya, bukan dengan kodenya', b:'Lima belas menit tentang mengintegrasikan sintesis suara dengan AI, dengan penerjemahan ke bahasa lain, dan ke mana teknologi suara sedang menuju. Mintalah pendapat setiap siswa. Tujuan yang dinyatakan adalah supaya siswa memahami pentingnya modul ini <em>dan</em> menyadari bahwa mereka baru menjelajahi sebagian kecil dari apa yang bisa dilakukan teknologi suara — tinggalkan mereka dengan rasa bahwa masih ada lagi, bukan bahwa topiknya sudah tertutup.'},
        {type:'tip', txt:'Pelajarannya dibuka dengan tes Tally yang membuat siswa melihat jawaban benar dan komentarnya setelah selesai. Katakan itu di awal — itu mengubah tesnya dari sesuatu yang harus dilewati menjadi sesuatu yang bisa dipelajari. Dan ingatkan mereka di akhir untuk menyiapkan sebuah proyek untuk code review pelajaran berikutnya.'}
      ]},
      {t:'🧼 L4 — Kode bersih, refactoring & flake8', cards:[
        {type:'text', h:'Apa itu kode bersih, dan definisi yang diberikan', b:'Kode yang <strong>mudah dibaca, dipahami, dan dipelihara</strong> — ditulis demi mutu dan struktur alih-alih demi kecepatan atau usaha seminimal mungkin. Habiskan sepuluh menit membahas pertanyaan slide-nya sebelum ada kode; siswa yang baru saja menghabiskan satu modul saling meninjau karya masing-masing punya pendapat yang layak didengar.'},
        {type:'qa', h:'Mengapa itu penting — alasan yang harus dicapai siswa', items:[
          {k:'Pemeliharaan', v:'Kode bersih bisa dipahami bahkan ketika Anda bukan penulisnya — penting begitu sebuah proyek bertumbuh dan orang lain ikut mengerjakannya.'},
          {k:'Lebih sedikit error', v:'Kode yang terstruktur baik menyembunyikan lebih sedikit bug, jadi lebih sedikit waktu terpakai untuk debugging.'},
          {k:'Pengujian lebih mudah', v:'Kode yang terbagi menjadi bagian-bagian kecil mudah dicakup dengan pengujian.'},
          {k:'Keluwesan', v:'Kode yang jelas lebih mudah diperluas ketika kebutuhannya berubah.'},
          {k:'Produktivitas tim', v:'Semua orang bisa memahami logikanya terlepas dari siapa yang menulisnya.'},
          {k:'Refactoring lebih mudah', v:'Memperbaiki kode jauh tidak menyakitkan kalau strukturnya memang sudah logis sejak awal.'},
          {k:'Penyesuaian anggota baru', v:'Orang baru bergabung ke proyek yang bersih lebih cepat.'}
        ]},
        {type:'text', h:'Praktiknya — temukan masalahnya, lalu otomatiskan pemeriksaannya', b:'Tunjukkan kode yang berantakannya lalu beri siswa <strong>lima menit untuk menemukan sendiri masalahnya</strong>, lalu lima menit bergiliran membagikan temuan dan perbaikannya. Baru setelah itu perkenalkan <code>flake8</code> — sepuluh menit memasang dan menjalankannya — lalu lima menit memperbaiki apa yang ditandainya. Urutan itu penting: mereka harus melatih penilaian mereka sendiri sebelum alatnya melakukannya untuk mereka, atau mereka akan belajar menyerahkan proses berpikirnya kepada alat.'},
        {type:'twocol', left:{h:'Masalah dalam contohnya', items:['<code>taxrate</code> adalah sebuah konstanta tapi tidak <code>DITULIS KAPITAL</code>','<code>Tax</code> — nama fungsi dimulai dengan huruf besar','Seluruh fungsi ditulis dalam satu baris','Tidak ada spasi antar-parameter, atau di sekitar <code>+</code>','Penamaannya mengabaikan <code>snake_case</code>','Tidak ada anotasi tipe','Tidak ada docstring','Perhitungan pajaknya diulang alih-alih dipisahkan','Tidak ada validasi masukan','Perhitungan dan keluaran console bercampur jadi satu']}, right:{h:'Apa yang dilakukan refaktornya', items:['<code>TAX_RATE = 0.2</code> sebagai konstanta bernama','<code>calculate_tax()</code> dalam <code>snake_case</code>','Satu pernyataan per baris, dengan indentasi yang benar','Spasi sesuai PEP-8 di seluruh kodenya','Penamaan <code>snake_case</code> yang konsisten','Anotasi <code>(price: float) -&gt; float</code>','Sebuah docstring pada setiap fungsi','Logika yang berulang dipisahkan menjadi fungsi','Nilai divalidasi sebelum dipakai','Perhitungan dipisahkan dari pencetakan']}},
        {type:'code', lbl:'versi hasil refaktornya', code:`<span class="cc"># Mendefinisikan tarif pajak sebagai konstanta bernama</span>
TAX_RATE = <span class="cn">0.2</span>

<span class="ck">def</span> <span class="cf">calculate_tax</span>(price: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Menghitung pajak atas jumlah tertentu."""</span>
    <span class="ck">return</span> price * TAX_RATE

<span class="ck">def</span> <span class="cf">calculate_total_price</span>(*prices: <span class="ct2">float</span>) -&gt; <span class="ct2">float</span>:
    <span class="cs">"""Menjumlahkan harga-harga yang diberikan."""</span>
    <span class="ck">return</span> <span class="cf">sum</span>(prices)

total_price = <span class="cf">calculate_total_price</span>(<span class="cn">100</span>, <span class="cn">200</span>, <span class="cn">300</span>, <span class="cn">400</span>)
tax         = <span class="cf">calculate_tax</span>(total_price)
final_price = total_price + tax

<span class="cf">print</span>(<span class="cs">"Harga akhir:"</span>, final_price)`},
        {type:'good', txt:'Tunjukkan apa yang bisa dan tidak bisa dilakukan sebuah linter. <code>flake8</code> menangkap spasi, gaya penamaan, dan kode yang tidak terpakai — masalah nyata tapi dangkal. Ia tidak akan pernah memberi tahu Anda bahwa perhitungan yang sama muncul tiga kali, bahwa sebuah fungsi mengerjakan dua pekerjaan yang tidak berhubungan, atau bahwa sebuah nama secara teknis sah tapi tidak bermakna. Penilaian itu milik mereka, dan mengatakannya itulah yang mencegah “linter-nya senang” menjadi sinonim dari “kodenya bagus”.'},
        {type:'text', h:'Refaktor mandirinya', b:'Dua puluh menit untuk latihan kedua, dikerjakan sendiri — Anda boleh membantu dengan masalah teknis tapi biarkan mereka yang berpikir. Setelahnya mereka menjelaskan apa yang mereka perbaiki. Perbaikan yang dicari: konstanta untuk nilai poinnya, argumen bernama demi keluwesan, docstring, satu fungsi keluaran yang bisa dipakai ulang alih-alih panggilan <code>print</code> yang berulang, serta struktur keseluruhan yang lebih baik.'},
        {type:'tip', txt:'Ini pelajaran untuk menyambung kembali ke M6L4, tempat siswa diminta memberi komentar dan menyusun notebook mereka, dan menyambung ke depan ke proyek kelulusan, yang harus dibaca dan diuji seorang teman sekelas. Kode bersih berhenti menjadi keutamaan abstrak begitu orang lain harus menjalankan proyek Anda.'}
      ]}
    ],
    quiz:[
      {q:'Apa beda pengenalan suara dan sintesis suara?', opts:['Pengenalan mengubah ucapan menjadi teks atau perintah; sintesis mengubah teks menjadi ucapan sehingga komputernya “berbicara”','Pengenalan itu luring dan sintesis itu daring','Keduanya hal yang sama yang digambarkan dari sudut pandang pengguna dan developer','Pengenalan bekerja pada kata dan sintesis bekerja pada kalimat utuh'], c:0, fb:'Ketiga teknologinya adalah kendali suara (mengendalikan dengan suara), pengenalan (ucapan → teks), dan sintesis (teks → ucapan). Sebuah asisten suara memakai ketiganya.'},
      {q:'Apa tiga tahap cara kerja sintesis suara?', opts:['Analisis teks untuk jeda dan intonasi, konversi kata menjadi bunyi dari sebuah basis data bunyi, lalu menggabungkan bunyinya menjadi ucapan yang mulus','Perekaman, pemampatan, pemutaran','Tokenization, lemmatization, penghasilan','Validasi masukan, penerjemahan, keluaran'], c:0, fb:'M9L1 memecahnya menjadi analisis teks, konversi teks-ke-bunyi memakai basis data bunyi bahasanya, dan penghasilan ucapan yang mengincar suara menyerupai manusia.'},
      {q:'Mengapa pyttsx3 digambarkan sebagai solusi luring?', opts:['Ia menghasilkan ucapannya secara lokal di perangkatnya, tanpa membutuhkan sambungan internet','Ia menyimpan file audionya setelah dijalankan pertama kali','Ia hanya bekerja dengan file teks yang tersimpan lokal','Ia memakai paket suara sistem operasi yang diunduh sekali per sesi'], c:0, fb:'pyttsx3 menghasilkan ucapannya di perangkatnya sendiri — itu salah satu jawaban kuis M9L2, dan keunggulan praktis yang nyata dibanding sintesis berbasis API.'},
      {q:'Mengapa kursus ini memakai wttr.in untuk bot cuacanya?', opts:['Ia mengembalikan cuaca lewat request HTTP biasa tanpa akun dan tanpa API key, jadi tidak ada yang terhambat pendaftaran dan tidak ada key yang bisa bocor','Ia layanan cuaca paling akurat yang tersedia','Ia satu-satunya layanan yang mengembalikan teks biasa','Ia menyediakan sintesis suara sekaligus cuaca'], c:0, fb:'Tanpa akun dan tanpa API key berarti pelajarannya tetap terfokus pada menggabungkan bot, API, dan sintesis alih-alih pada autentikasi.'},
      {q:'Seorang siswa menjalankan bot cuaca yang berbicara lalu bertanya mengapa tidak ada orang lain di server Discord-nya yang bisa mendengarnya. Apa jawabannya?', opts:['Suaranya dihasilkan di komputer yang menjalankan bot-nya, tidak dikirim lewat Discord — bot-nya berbicara kepada siapa pun yang menjalankannya','Izin suara belum diaktifkan untuk bot-nya','Mereka perlu bergabung ke sebuah voice channel dulu','pyttsx3 butuh sambungan internet untuk menyiarkannya'], c:0, fb:'Ini poin yang benar-benar membingungkan dan layak didahului, serta cara alami memperkenalkan gagasan bahwa kode berjalan di suatu tempat yang spesifik.'},
      {q:'Bagaimana pembangunan M9L2 tetap terkendali dalam pelajaran live coding?', opts:['Ia dibagi menjadi tiga tahap — bot dasar, lalu panggilan API-nya, lalu sintesisnya — dengan pemeriksaan bahwa setiap siswa di jalur yang benar setelah masing-masing','Tutor menulisnya sementara siswa menonton lalu menyalin di akhir','Setiap siswa membangun satu tahap lalu digabungkan','Kode jadinya dibagikan di awal lalu dijelaskan'], c:0, fb:'Tiga tahap dengan titik periksa setelah masing-masing, plus beberapa menit di awal memastikan semua orang menyiapkan token bot-nya.'},
      {q:'Di M9L3, tahap presentasi 15 menit itu sebenarnya menilai apa?', opts:['Pemahaman — satu siswa menarasikan kodenya sendiri baris demi baris, yang mengungkap jauh lebih banyak daripada sebuah kuis','Keterampilan presentasi untuk hackathon-nya','Apakah bot-nya bebas error','Kecepatan penerapannya'], c:0, fb:'Seorang siswa yang menjelaskan kodenya sendiri baris demi baris adalah pemeriksaan yang sesungguhnya. Pilihlah yang membangunnya sendiri alih-alih yang paling cepat selesai.'},
      {q:'Mengapa pelajaran kode bersihnya meminta siswa menemukan masalahnya SEBELUM memperkenalkan flake8?', opts:['Supaya mereka melatih penilaian mereka sendiri lebih dulu — kalau tidak, mereka belajar menyerahkan proses berpikirnya kepada alatnya','Karena flake8 butuh sepuluh menit untuk dipasang','Karena flake8 menemukan masalah yang berbeda dari yang ditemukan manusia','Supaya tutor bisa menilai jawabannya sebelum alatnya mengoreksi'], c:0, fb:'Urutannya disengaja: lima menit menemukan masalah, lima menit membagikannya, baru alatnya. Penilaian dulu, otomatisasi kemudian.'},
      {q:'Masalah mana dalam contoh yang berantakan itu yang TIDAK akan ditangkap flake8?', opts:['Bahwa perhitungan pajak yang sama diulang beberapa kali dan seharusnya dipisahkan menjadi sebuah fungsi','Spasi yang hilang di sekitar operator +','Nama fungsi yang dimulai dengan huruf kapital','Sebuah konstanta yang tidak ditulis dengan huruf kapital'], c:0, fb:'Sebuah linter menangkap spasi, gaya penamaan, dan kode yang tidak terpakai. Logika yang berganda, sebuah fungsi yang mengerjakan dua pekerjaan, atau nama yang sah tapi tidak bermakna semuanya butuh penilaian manusia.'},
      {q:'Mana di antara ini yang merupakan perbaikan kode bersih yang dilakukan refaktor M9L4?', opts:['Menambahkan docstring dan anotasi tipe, serta memisahkan perhitungannya dari keluaran console-nya','Menggabungkan fungsi ke dalam baris tunggal untuk mengurangi panjang file','Menghapus semua komentar supaya kodenya berbicara sendiri','Mengganti nama variabel menjadi huruf tunggal demi keringkasan'], c:0, fb:'Refaktornya memperkenalkan konstanta bernama, penamaan snake_case, satu pernyataan per baris, docstring, anotasi tipe, fungsi yang dipisahkan, validasi, dan perhitungan yang dipisahkan dari keluarannya.'}
    ]
  },
  {
    id:14, emoji:'🎓', color:'#EF4444',
    title:'M10 — Hackathon & Proyek Kelulusan',
    desc:'Modul 10 kursus: brief perubahan iklim, curah gagasan dan memilih jenis proyek, keterampilan presentasi, dokumentasi pengujian dan checklist, pengujian antarteman, serta persiapan kelulusan.',
    obj:'Jalankan penutupnya. Anda harus bisa menyiapkan sebuah hackathon, menjalankan curah gagasan yang berakhir pada ide yang dikunci, membantu siswa memilih jenis proyek yang cocok dengan keterampilan mereka, mengajarkan checklist presentasi dan pengujian, menjalankan satu ronde pengujian antarteman dengan umpan balik yang membangun, serta menyiapkan setiap siswa untuk lulus dengan sesuatu yang selesai.',
    prep:'~2–3 jam, plus waktu dukungan berkelanjutan begitu proyeknya dimulai.',
    practical:{
      intro:'Sebelum Anda mengajarkan bagian mana pun dari Modul 10 kursus, Anda harus sudah secara pribadi:',
      items:[
        'Menjalankan curah gagasan sampai pada keputusan yang dikunci — bahkan sendirian, di atas kertas, untuk merasakan bentuknya',
        'Memilih jenis proyek untuk sebuah ide lalu menuliskan mengapa jenis itu cocok',
        'Menyiapkan pitch satu menit sebuah proyek memakai delapan aturan presentasinya, lalu mengukur waktunya',
        'Menulis checklist pengujian memakai lima langkahnya, lalu menguji salah satu proyek Anda sendiri terhadapnya',
        'Meng-clone proyek yang bukan Anda tulis, menyiapkan environment-nya, dan membuatnya berjalan',
        'Menulis umpan balik tiga bagian — hal positifnya, kesalahannya, rekomendasinya — atas kode orang lain',
        'Membaca ulang bangunan Anda dari Modul 5–13, karena siswa akan menanyakan mana pun dari itu'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Tiga pelajaran sebelum kelulusan: <strong>L1</strong> brief perubahan iklim, curah gagasan, memilih jenis proyek, dan presentasi apa-selanjutnya; <strong>L2</strong> keterampilan presentasi, menjawab pertanyaan yang disiapkan siswa, membangun fitur utamanya, dan menyusun checklist pengujian; <strong>L3</strong> memperbaiki masalah utamanya, pengujian antarteman terhadap checklist-nya, Creativity Card, dan persiapan kelulusan.',
          why:'Semua dalam kursus ini ada untuk memungkinkan hal ini. Ini juga tempat profil risikonya berubah: bahayanya bukan lagi bahwa siswa tidak bisa mengetik kode, melainkan bahwa mereka memilih sesuatu yang tidak bisa mereka selesaikan.',
          learn:'Siswa meneliti masalah nyata, menghasilkan lalu mengunci sebuah ide, memilih jenis proyek yang cocok untuknya, membuat repository publik, mempresentasikan dalam satu menit, membangun fitur intinya, menulis checklist pengujian, menguji proyek teman sekelas terhadapnya, memberi dan menerima umpan balik, serta menyiapkan sebuah presentasi.',
          confident:'Menjalankan curah gagasan sampai pada keputusan yang dikunci; membantu siswa mencocokkan ide dengan jenis proyek; delapan aturan presentasi; apa itu dokumentasi pengujian dan lima langkah sebuah checklist; serta menjaga cakupannya cukup kecil untuk diselesaikan.'
        }
      ]},
      {t:'🌍 L1 — Brief, curah gagasan & keputusannya', cards:[
        {type:'text', h:'Masalahnya: perubahan iklim, diteliti bukan diceramahkan', b:'Beri siswa lima menit untuk meneliti sendiri artikel PBB dan menemukan jawaban atas empat pertanyaan: <strong>apa itu perubahan iklim</strong>, <strong>seberapa serius dan apakah menyangkut kita</strong>, <strong>apa pemicunya</strong>, dan <strong>bagaimana kita bisa memperlambatnya</strong>. Anda boleh membagi tanggung jawabnya — satu siswa per pertanyaan — lalu menggabungkan temuannya. Setelah itu jelaskan apa itu hackathon dan apa yang menanti mereka di modul ini.'},
        {type:'text', h:'Curah gagasannya, dengan keputusan sungguhan di akhirnya', b:'Pertama, setiap orang membuat <strong>repository GitHub publik baru</strong> untuk proyeknya. Lalu lima menit di papan bersama menghasilkan jawaban atas satu pertanyaan: bagaimana kita bisa menyelesaikan masalah perubahan iklim? Aturannya seperti sebelumnya — <strong>tanpa penilaian selama penghasilan idenya</strong>, tulis bahkan yang konyol sekalipun. Perhatikan kehalusan dalam rencananya: mereka menghasilkan <em>solusi atas masalah</em>, bukan ide proyek — teknologinya datang belakangan. Lalu evaluasi: ide mana yang bisa disesuaikan dan diperbaiki? Terakhir setiap siswa memilih satu lalu <strong>menuliskannya di README repository-nya</strong>.'},
        {type:'good', txt:'Membuat mereka mengunci pilihannya di README alih-alih di chat adalah detail kecil yang sangat baik. Itu publik, itu permanen, dan itu berarti pelajaran berikutnya dimulai dengan semua orang punya ide yang sudah dinyatakan alih-alih niat yang samar. Jangan biarkan langkah ini terlewat.'},
        {type:'text', h:'Memilih jenis proyeknya', b:'Sekarang keputusan teknologinya. Tanyakan: kursusnya hampir berakhir — jenis proyek apa saja yang sudah kita pelajari cara membangunnya? Ingatkan mereka pelajaran tempat jawabannya berada kalau perlu. Lalu minta mereka memilih jenis yang akan mereka pakai untuk mewujudkan idenya <strong>dan menjelaskan mengapa</strong>, sambil mencatatnya di README juga. Membenarkan pilihannya itulah intinya — mencocokkan solusi dengan alat yang benar-benar Anda punya adalah persis penilaian yang diperkenalkan M6L3.'},
        {type:'qa', h:'Daftar pilihan yang harus bisa mereka ingat', items:[
          {k:'Sebuah bot Discord', v:'Command, file, API — opsional dengan model computer vision mereka sendiri.'},
          {k:'Sebuah situs web Flask', v:'Template, form, basis data, login, di-deploy ke URL sungguhan.'},
          {k:'Sebuah skrip atau notebook Colab', v:'Pemrosesan gambar, scraping, NLP, deteksi.'},
          {k:'Proyek berkemampuan suara', v:'Transkripsi, penerjemahan, atau sintesis yang ditambahkan ke salah satu di atas.'}
        ]},
        {type:'warn', txt:'Tahap terakhir pelajaran ini memperkenalkan kursus Kodland lainnya dan memuat kuis yang hasilnya masuk ke tim penjualan, dicatat per siswa, dan dibagikan kepada orang tua. Berterus teranglah tentang apa itu: jalankan dengan hangat dan jujur, jangan mengomentari jawaban kuis perorangan selagi siswa mengerjakannya, dan jangan berlebihan menjualnya. Kredibilitas Anda di mata kelompoknya lebih berharga daripada satu prospek.'},
        {type:'tip', txt:'Setelah pelajarannya, <strong>kumpulkan semua idenya di satu tempat lalu kirimkan ke grupnya</strong> — tangkapan layar atau daftar tautan — supaya siswa bisa melihat dan mendiskusikan rencana satu sama lain. PR-nya adalah menyiapkan templat proyek dengan library-nya terpasang <em>dan</em> daftar tertulis pertanyaan penerapannya, dan itulah yang membuat pelajaran berikutnya berjalan.'}
      ]},
      {t:'🎤 L2 — Presentasi, pembangunan & checklist-nya', cards:[
        {type:'warn', txt:'Dua hal yang dikerjakan <strong>sebelum</strong> pelajaran ini: kumpulkan setiap pertanyaan yang ditulis siswa dalam PR-nya menjadi satu daftar yang terlihat (sebuah dokumen, slide, atau papan), dan tentukan kelompok breakout-nya jauh-jauh hari — mengelompokkan siswa berdasarkan pertanyaan serupa atau jenis proyek serupa. Berimprovisasi soal ini di dalam pelajaran menyia-nyiakan tahapnya.'},
        {type:'qa', h:'Nominasi hackathon-nya', items:[
          {k:'🎤', v:'Presentasi terbaik'},
          {k:'🧩', v:'Solusi teknis paling rumit'},
          {k:'✨', v:'Proyek dengan tampilan terbaik di Git'},
          {k:'🎯', v:'Solusi paling bisa diterapkan'}
        ]},
        {type:'text', h:'Sampaikan catatan yang menyertainya', b:'Nominasinya membuat siswa bisa membidik tujuan yang cocok dengan kekuatan mereka — tapi katakan apa yang dinyatakan rencananya berikutnya: ini <strong>tidak</strong> berarti mengkhususkan diri pada satu arah. Proyek yang benar-benar baik itu baik dalam segala hal. Kategorinya adalah motivasi, bukan izin untuk mengabaikan tiga perempat pekerjaannya.'},
        {type:'text', h:'Delapan aturan presentasi', b:'Minta siswa membaca aturannya lalu menyebutkan mana yang baru pertama kali mereka lihat, kemudian terapkan segera: <strong>satu menit</strong> masing-masing untuk mempresentasikan ide dan hasil PR-nya, dengan pengatur waktu di layar. Kalau menurut Anda mereka akan kesulitan, <strong>majulah lebih dulu sendiri</strong> — contohkan pitch satu menit proyek Anda sendiri dan tonjolkan poin-poin utamanya.'},
        {type:'twocol', left:{h:'Aturan 1–4', items:['<strong>Bersiaplah</strong> — buka dan siapkan materi serta data Anda','<strong>Tetapkan tujuannya</strong> — ketahui pesan apa dan hasil apa yang Anda inginkan','<strong>Susun strukturnya</strong> — pembuka, badan utama, kesimpulan','<strong>Pakai bahasa sederhana</strong> — dan jelaskan istilah apa pun yang terpaksa Anda pakai']}, right:{h:'Aturan 5–8', items:['<strong>Berlatihlah</strong> — di depan cermin atau seorang teman, demi gaya dan rasa percaya diri','<strong>Libatkan</strong> — berbicaralah dengan audiensnya, ajukan pertanyaan kepada mereka','<strong>Kendalikan waktunya</strong> — jangan terburu-buru, jangan bertele-tele','<strong>Bersiaplah untuk pertanyaan</strong> — perkirakan pertanyaannya; itu menunjukkan kompetensi']}},
        {type:'text', h:'Tahap pengembangannya', b:'Siswa masuk ke breakout room yang dikelompokkan berdasarkan pertanyaan atau jenis proyek lalu mulai membangun logikanya, bertukar ide dan mencari solusi bersama-sama. <strong>Anda berpindah antar-ruangan sambil menjawab pertanyaan dari daftarnya</strong>, menandai tiap pertanyaan yang terjawab supaya Anda bisa menunjukkan daftar yang lengkap setelahnya. Setelah itu semua orang kembali ke ruang utama untuk melanjutkan, dengan pertanyaan umum didorong supaya siswa saling membantu.'},
        {type:'text', h:'Dokumentasi pengujian & checklist-nya', b:'<strong>Dokumentasi pengujian</strong> adalah kumpulan dokumen dan instruksi yang dipakai untuk merencanakan dan melaksanakan pengujian: bagaimana memastikan perangkat lunaknya bekerja dan bagaimana menemukan serta menghilangkan error. Ia ada untuk penjaminan mutu, untuk mendokumentasikan masalah yang Anda temukan, untuk menyederhanakan komunikasi tentang apa yang perlu diuji, dan supaya bisa dijalankan ulang setelah perubahan di kemudian hari. Lalu bangunlah <strong>satu checklist universal untuk seluruh kelompok</strong>, memakai rubrik penilaian dari pelajaran sebelumnya sebagai rujukan — dan kirimkan versi jadinya kepada siswa.'},
        {type:'qa', h:'Lima langkah menyusun sebuah checklist', items:[
          {k:'1. Kenali tujuannya', v:'Apa yang sebenarnya ingin Anda uji — fungsionalitas, antarmuka, kinerja, keamanan?'},
          {k:'2. Bagi ke dalam kategori', v:'Bagian seperti “Fungsionalitas”, “Antarmuka”, “Keamanan”.'},
          {k:'3. Jelaskan hasil yang diharapkan', v:'Untuk tiap kategori, apa yang seharusnya Anda lihat? Jelaskan perilaku yang diharapkan.'},
          {k:'4. Tambahkan tugas per kategori', v:'Butir yang konkret — misalnya di bawah Fungsionalitas, “pastikan pendaftaran pengguna bekerja”.'},
          {k:'5. Tetapkan prioritasnya', v:'Tugas mana yang paling penting dan harus diuji lebih dulu.'}
        ]}
      ]},
      {t:'🏁 L3 — Pengujian antarteman, umpan balik & persiapan kelulusan', cards:[
        {type:'warn', txt:'<strong>Periksa kondisi proyek setiap siswa sebelum pelajaran ini.</strong> Urutan tahapannya bergantung pada itu: kalau proyeknya benar-benar berjalan, kerjakan tahap pengujian antartemannya lebih dulu; kalau tidak, bantu siswa menyelesaikannya lalu uji setelahnya. Siapkan juga urutan presentasinya jauh-jauh hari supaya tahapnya terus bergerak.'},
        {type:'text', h:'Pembukaan yang jujur', b:'Setiap siswa mengambil <strong>satu menit untuk menjelaskan masalah utama proyeknya</strong> — bukan fiturnya, masalahnya. Pengatur waktu menyala, urutannya sudah diatur sebelumnya. Itu menyetel nada bahwa terhambat itu wajar dan boleh diucapkan, dan justru itulah yang Anda butuhkan pada minggu terakhir sebelum kelulusan.'},
        {type:'text', h:'Pengujian antarteman, terstruktur dengan benar', b:'Tugaskan setiap siswa sebuah proyek teman sekelasnya. Mereka <strong>meng-clone-nya</strong>, memastikan punya akses ke semua yang dibutuhkan, menyiapkan environment-nya dari Pipfile-nya, lalu menyusuri <strong>checklist bersama</strong>-nya sambil mencatat hasilnya. Kirimkan checklist-nya lagi kalau-kalau ada yang kehilangan miliknya. Setelah itu mereka menyiapkan umpan balik dalam tiga bagian: <strong>aspek positifnya</strong>, <strong>kesalahan yang ditemukan</strong>, dan <strong>rekomendasi perbaikannya</strong>. Umpan baliknya dipertukarkan di chat umum supaya Anda bisa memoderasinya.'},
        {type:'good', txt:'Sampaikan pembingkaiannya dengan lantang sebelum mereka mulai: <strong>ini bukan bagian dari penilaian apa pun — ini saling membantu.</strong> Umpan baliknya harus membangun dan benar, tanpa komentar negatif atau menyinggung. Kalau seorang siswa kesulitan merumuskan sesuatu, bantu mereka menemukan kata-katanya. Salah menangani ini di minggu terakhir lebih buruk daripada tidak melakukannya sama sekali.'},
        {type:'hi', h:'Hal terpenting yang Anda katakan sepanjang modul ini', b:'Setelah umpan baliknya, sebagian siswa akan ingin membangun ulang semuanya sebelum kelulusan. Cegah itu secara langsung, dengan kata-kata rencananya sendiri: <strong>selesaikan proyek kelulusannya tanpa membuatnya terlalu rumit.</strong> Fokuslah pada apa yang bisa diselesaikan dalam waktu yang tersedia, dan simpan perbaikannya untuk nanti. Proyek sederhana yang selesai dan dipresentasikan dengan percaya diri mengalahkan proyek ambisius yang setengah jadi setiap kali — dan inilah momen ketika siswa paling perlu mendengarnya.'},
        {type:'text', h:'Creativity Card-nya', b:'Sebuah formulir yang diisi setiap siswa selama pelajarannya, mencakup <strong>deskripsi proyek akhirnya</strong>, <strong>keunikannya</strong>, <strong>hambatan</strong> yang mereka hadapi, dan <strong>kemajuannya</strong>. Pastikan setiap siswa menyelesaikan miliknya: itu membantu mereka di pelajaran presentasinya, dan itulah cara Anda melacak posisi sebenarnya tiap proyek.'},
        {type:'tip', txt:'PR-nya adalah menyiapkan presentasinya — Google Slides atau README proyeknya. Tandai juga instruksi persiapan kelulusannya: siswa perlu mengunduh dan memasang latar belakang meriah, dan instruksinya mendaftar apa lagi yang perlu disiapkan. Kejarlah ini, karena siswa yang datang ke kelulusan tanpa persiapan akan mengingat itu, bukan proyek yang mereka bangun.'}
      ]}
    ],
    quiz:[
      {q:'Dalam curah gagasan M10L1, apa persisnya yang dihasilkan siswa?', opts:['Solusi atas masalah perubahan iklim — jenis proyek dan teknologinya dipilih setelahnya','Ide proyek dengan teknologinya sudah ditentukan','Daftar library yang ingin mereka pakai','Nama untuk repository mereka'], c:0, fb:'Catatannya spesifik: Anda tidak boleh menghasilkan ide proyek, melainkan solusi atas masalah. Mencocokkan teknologi dengan solusinya adalah tahap berikutnya.'},
      {q:'Di mana siswa mencatat ide yang mereka kunci?', opts:['Di README repository GitHub publik baru yang mereka buat — publik dan permanen','Di chat WhatsApp grup','Di catatan tutornya','Hanya di papan curah gagasan bersamanya'], c:0, fb:'Baik ide yang dipilih maupun, belakangan, jenis proyeknya masuk ke README repository-nya — supaya pelajaran berikutnya dimulai dengan semua orang punya rencana yang sudah dinyatakan.'},
      {q:'Mengapa kursus ini meminta siswa menjelaskan MENGAPA mereka memilih jenis proyek tertentu?', opts:['Karena mencocokkan solusi dengan alat yang benar-benar Anda punya adalah penilaian profesional yang sudah dibangun kursus ini sejak M6L3','Karena tutornya membutuhkannya untuk penilaian','Karena platform-nya mewajibkan pembenaran tertulis','Untuk menentukan nominasi hackathon-nya'], c:0, fb:'Memilih alat yang cocok dengan masalahnya dan dengan kemampuan Anda sendiri adalah penilaian rekayasa yang sungguhan — pertama kali diperkenalkan saat menilai apakah YOLO cocok dengan masukannya.'},
      {q:'Catatan apa yang menyertai keempat nominasi hackathon-nya?', opts:['Nominasinya membuat siswa bisa membidik kekuatan mereka, tapi proyek yang benar-benar baik itu baik dalam segala hal — bukan alasan untuk mengkhususkan diri','Hanya satu nominasi yang boleh diikuti tiap siswa','Nominasinya ditentukan lewat pemungutan suara siswa','Memenangkan sebuah nominasi menggantikan presentasi kelulusannya'], c:0, fb:'Rencananya menyatakannya langsung setelah mendaftarnya: ini tidak berarti Anda harus mengkhususkan diri hanya pada satu arah.'},
      {q:'Apa yang harus Anda siapkan SEBELUM menjalankan M10L2?', opts:['Satu daftar terlihat berisi semua pertanyaan yang ditulis siswa dalam PR-nya, plus kelompok breakout yang sudah direncanakan','Checklist jadi untuk seluruh kelompok','Sebuah demo untuk tiap jenis proyek','Slide kelulusannya'], c:0, fb:'Catatannya meminta Anda menyusun pertanyaannya menjadi daftar yang bisa Anda tunjukkan kepada kelompoknya, dan memikirkan pengelompokannya jauh-jauh hari — berdasarkan pertanyaan serupa atau proyek serupa.'},
      {q:'Apa itu dokumentasi pengujian, sebagaimana didefinisikan kursusnya?', opts:['Kumpulan dokumen dan instruksi yang dipakai untuk merencanakan dan melaksanakan pengujian — bagaimana memastikan perangkat lunaknya bekerja dan bagaimana menemukan serta menghilangkan error','Catatan setiap bug yang pernah dimiliki sebuah proyek','README proyeknya','Rubrik penilaian tutornya'], c:0, fb:'Ia ada untuk penjaminan mutu, untuk mendokumentasikan masalah yang ditemukan, untuk menyederhanakan komunikasi tentang apa yang perlu diuji, dan supaya bisa dijalankan ulang setelah perubahan.'},
      {q:'Seorang siswa sudah membaca umpan balik temannya dan sekarang ingin membangun ulang seluruh proyeknya sebelum kelulusan. Apa yang Anda katakan?', opts:['Selesaikan tanpa membuatnya terlalu rumit — fokuslah pada apa yang bisa diselesaikan dalam waktu yang tersedia dan simpan perbaikannya untuk nanti','Bangun ulang, karena umpan baliknya menemukan masalah yang nyata','Presentasikan versi yang sekarang lalu katakan itu belum selesai','Berpindah sepenuhnya ke jenis proyek yang lebih sederhana'], c:0, fb:'Ini nasihat eksplisit dalam kiat M10L3: selesaikan tanpa membuatnya terlalu rumit, fokus pada yang muat dalam waktunya, simpan perbaikannya untuk nanti.'},
      {q:'Bagaimana umpan balik antarteman harus dibingkai sebelum siswa mulai?', opts:['Sebagai saling membantu, bukan sebagai bagian dari penilaian apa pun — membangun dan benar, tanpa komentar negatif atau menyinggung','Sebagai latihan bernilai supaya siswa menganggapnya serius','Sebagai lomba menemukan bug terbanyak','Sebagai anonim, supaya siswa bisa berterus terang'], c:0, fb:'Rencananya tegas: umpan baliknya harus membangun dan benar, dan penting untuk mengatakan bahwa ini bukan bagian dari evaluasi melainkan sarana saling membantu.'},
      {q:'Apa itu Creativity Card, dan mengapa itu penting?', opts:['Formulir yang mencakup deskripsi proyeknya, keunikannya, hambatannya, dan kemajuannya — itu membantu siswa saat presentasi dan menunjukkan kepada Anda posisi tiap proyek','Sertifikat yang diberikan saat kelulusan','Kartu berisi pancingan untuk siswa yang tidak bisa memikirkan sebuah ide','Formulir umpan balik pengujian antartemannya'], c:0, fb:'Pastikan setiap siswa menyelesaikannya: itu mendukung mereka di pelajaran presentasinya dan membuat Anda bisa melacak kemajuan nyata tiap proyek.'},
      {q:'Bagaimana Anda harus menangani tahap M10L1 yang memperkenalkan kursus Kodland lainnya?', opts:['Jalankan dengan hangat dan jujur tanpa berlebihan menjualnya, dan jangan mengomentari jawaban kuis perorangan selagi siswa mengerjakannya','Lewati saja, karena itu bukan isi teknis','Tekankan bahwa siswa harus melanjutkan ke kursus lain','Minta siswa menyelesaikannya sebagai PR saja'], c:0, fb:'Rencananya meminta Anda tidak mengomentari tiap pertanyaan supaya siswa menjawab tanpa pengaruh dari luar. Menjalankannya dengan jujur melindungi kredibilitas Anda di mata kelompoknya.'}
    ]
  },
  {
    id:15, emoji:'📋', color:'#6366F1',
    title:'Keterampilan Menyampaikan Pengajaran',
    desc:'Keterampilan penyampaian yang lebih dalam: menjalankan kelima metodenya dengan baik, diferensiasi, menjawab apa yang tidak Anda ketahui, pengelolaan kelas, menilai pekerjaan yang setengah jadi, menyesuaikan ke pelajaran individu 50 menit, dan delapan teknik refleksi.',
    obj:'Kuasai penyampaiannya, bukan isinya. Modul 3 memberi Anda kerangka pelajarannya dan nama-nama metodenya; modul ini membuat Anda mahir menjalankannya. Di akhirnya Anda harus bisa melakukan diferensiasi secara spontan, menangani pertanyaan di luar pengetahuan Anda tanpa kehilangan kelasnya, menilai kode yang setengah berjalan secara adil, memangkas pelajaran 90 menit menjadi 50, dan menutup setiap pelajaran dengan refleksi yang memantapkan pembelajarannya.',
    prep:'~3 jam. Paling baik dibaca setelah Anda menuntaskan modul-modul isinya.',
    practical:{
      intro:'Sebelum tesnya, latihlah hal-hal yang sulit dilakukan tanpa persiapan:',
      items:[
        'Mengucapkan naskah “aku nggak tahu, ayo kita cari tahu” dengan suara keras sampai terdengar wajar alih-alih seperti minta maaf',
        'Mengambil satu rencana pelajaran 90 menit lalu menulis versi individu 50 menitnya',
        'Menilai sepotong kode yang setengah berjalan terhadap kriteria kursusnya lalu membenarkan angkanya',
        'Memilih tiga teknik refleksi yang bisa Anda jalankan tanpa persiapan',
        'Menulis daftar tugas tambahan Anda sendiri untuk siswa yang cepat selesai, per modul'
      ]
    },
    sections:[
      {t:'🧭 Gambaran umum & tujuan', cards:[
        {type:'brief',
          overview:'Keterampilan penyampaian yang duduk di atas kerangka pelajarannya: menjalankan kelima metodenya <em>dengan baik</em>, diferensiasi, <strong>menjawab pertanyaan di luar pengetahuan Anda</strong>, pengelolaan kelas, <strong>menilai pekerjaan setengah jadi</strong>, menyesuaikan pelajaran 90 menit ke format <strong>individu 50 menit</strong>, serta delapan teknik refleksi.',
          why:'Pengetahuan isi itu perlu tapi tidak cukup. Tutor yang menguasai Flask dengan sempurna tapi menjalankan pelajarannya dengan buruk akan kehilangan kelompoknya; tutor yang tahu cara menangani ruangannya bisa pulih dari apa pun — termasuk dari tidak tahu sebuah jawaban.',
          learn:'Tidak ada yang baru untuk siswa — modul ini tentang <em>Anda</em>. Ini lapisan yang menentukan apakah lima belas modul lainnya mendarat.',
          confident:'Menjalankan LiveCoding dan UMC dengan benar; langkah diferensiasi ke kedua arah; sebuah naskah untuk “saya tidak tahu”; cara menilai kode yang setengah berjalan; apa yang dipangkas untuk pelajaran individu; serta tiga teknik refleksi yang bisa Anda jalankan tanpa persiapan.'
        },
        {type:'tip', txt:'Modul 3 membahas kerangka pelajarannya dan arti kelima nama metodenya. Modul ini mengandaikan itu lalu masuk lebih dalam. Kalau salah satu dari “EduScrum”, “LiveCoding”, atau “Use–Modify–Create” masih kabur, kembalilah ke Modul 3 dulu — sisanya akan mendarat lebih baik.'}
      ]},
      {t:'🙋 Ketika Anda tidak tahu jawabannya', cards:[
        {type:'text', h:'Ini akan terjadi, dan lebih cepat dari yang Anda kira', b:'Python Pro adalah kursus tingkat lanjut dan sebagian siswanya tajam. Seseorang akan bertanya apa sebenarnya sebuah hash, atau bagaimana neural network-nya memutuskan, atau mengapa <code>Client</code> ada kalau <code>Bot</code> lebih baik. Kalau Anda datang ke pekerjaan ini dari latar belakang non-developer, Anda akan ditanyai sesuatu yang tidak bisa Anda jawab dalam beberapa pelajaran pertama. Itu <strong>wajar dan bisa dilewati</strong> — yang penting adalah sudah memutuskan sejak awal bagaimana Anda akan menanganinya.'},
        {type:'qa', h:'Ketiga langkahnya, dan kapan memakai masing-masing', items:[
          {k:'Cari tahu bersama — pilihan bawaannya', v:'“Pertanyaan bagus, aku belum yakin. Ayo kita cari tahu — kita cari di mana ya?” Lalu benar-benar lakukan, sambil membagikan layar Anda. Ini pilihan terkuat karena ini <em>memang</em> pelajaran M1L4: tidak ada yang hafal sebuah library di luar kepala, dan menemukan jawabannya adalah keterampilan profesionalnya. Anda bukan sedang menutupi kekurangan; Anda sedang mendemonstrasikan hal yang seharusnya Anda ajarkan.'},
          {k:'Parkir lalu tindak lanjuti', v:'Ketika Anda sedang di tengah sprint dan waktunya mepet: “Itu pertanyaan yang benar-benar bagus dan aku mau menjawabnya dengan benar — nanti aku balas di chat grup malam ini.” <strong>Lalu benar-benar lakukan.</strong> Pertanyaan yang ditindaklanjuti membangun lebih banyak kepercayaan daripada jawaban seketika; yang terlupakan merugikan Anda lebih besar daripada mengakui ketidaktahuan.'},
          {k:'Sebutkan batasnya dengan jujur', v:'Ketika pertanyaannya benar-benar di luar cakupan kursusnya: “Itu sudah lewat dari sejauh mana kursus ini pergi, dan jujur juga lewat dari yang aku kuasai. Ini versi singkat yang aku yakin…” lalu berikan apa yang memang Anda tahu. Siswa jauh lebih menghormati batas yang jelas daripada jawaban yang samar.'}
        ]},
        {type:'warn', txt:'Satu langkah yang benar-benar merugikan Anda di depan kelas adalah <strong>menebak dengan penuh percaya diri</strong>. Siswa menguji jawaban — mereka akan menempelkannya ke mesin pencari selama pelajarannya. Salah sambil terdengar yakin itulah yang mengakhiri kredibilitas Anda; mengatakan “saya tidak tahu” tidak pernah begitu. Ucapkan dengan suara keras beberapa kali sebelum pelajaran pertama Anda sampai itu berhenti terasa seperti pengakuan dosa.'},
        {type:'good', txt:'Bingkai ulang: tutor yang mengatakan “aku nggak tahu, ayo kita cari tahu” di depan remaja sedang mencontohkan persis perilaku yang diinginkan kursus ini dari mereka. Seluruh permainan “semua lawan satu” di M6L1 ada untuk membantu siswa mengatasi rasa takut bertanya. Anda tidak bisa mengajarkan hilangnya rasa takut itu sambil berpura-pura serba tahu.'},
        {type:'tip', txt:'Kerjakan juga pekerjaan pencegahan yang membosankan: baca rencana dan materi pelajaran berikutnya dengan benar, dan catat dua atau tiga tempat yang membuat Anda merasa goyah. Sebagian besar pertanyaan yang tak terjawab bisa diprediksi dari isi pelajarannya — decorator di M1L3, <code>async</code> di setiap pelajaran bot, hashing di M4L2, bagaimana modelnya sebenarnya belajar di M5L4. Modul 2 pelatihan ini membahas tiga yang pertama.'}
      ]},
      {t:'🧑‍🤝‍🧑 Pengelolaan kelas remaja secara daring', cards:[
        {type:'qa', h:'Situasi yang benar-benar akan Anda temui', items:[
          {k:'Seorang siswa tidak mau menyalakan kameranya', v:'Rencananya meminta Anda memeriksa bahwa kamera dan mikrofonnya bekerja, dan itu soal partisipasi, bukan pengawasan. Jangan menjadikannya konfrontasi di depan kelompoknya — tanyakan sekali, secara terbuka dan ringan; kalau berlanjut, tanyakan secara pribadi apakah ada yang salah. Keterlibatan di chat dan pada tugasnya lebih penting daripada wajah yang terlihat.'},
          {k:'Satu siswa mendominasi segalanya', v:'Pakailah strukturnya alih-alih wibawa Anda: permainan “bola” tempat pembicara memilih pembicara berikutnya, aturan bahwa siswa yang sama tidak boleh menjawab dua kali beruntun, dan meminta pendapat siswa tertentu yang lebih pendiam dengan menyebut namanya. Biarkan formatnya yang membatasi.'},
          {k:'Seorang siswa mengganggu atau tidak fokus pada tugasnya', v:'Berikan mereka pekerjaan. Dalam kursus ini itu mudah — minta mereka memimpin sebuah pemasangan, membagikan layarnya, atau menjelaskan solusinya. Gangguan biasanya berasal dari kurang kesibukan, dan kursus ini penuh peran sah untuk dibagikan.'},
          {k:'Sebuah breakout room tidak berjalan', v:'Mampirlah ke sana. Rencananya memang meminta Anda berpindah antar-ruangan. Kalau sebuah pasangan mandek, nyatakan ulang tujuan konkretnya dan sisa waktunya — tugas yang samar membuat pasangan mandek lebih cepat daripada tingkat kesulitan.'},
          {k:'Tidak ada yang menjawab pertanyaan Anda', v:'Hampir selalu pertanyaannya terlalu besar. Perkecil: bukan “bagaimana kita akan menyelesaikan ini?” tapi “variabel ini harus bertipe apa?” Rencananya terus-menerus mencontohkan pancingan yang sempit dan bisa dijawab.'},
          {k:'Seorang siswa diam sepanjang satu pelajaran', v:'Catat lalu bertindaklah pelajaran berikutnya — pemeriksaan PR adalah bacaan Anda atas siapa yang mulai menjauh. Tanyakan sesuatu yang Anda tahu bisa mereka jawab, supaya hal pertama yang mereka ucapkan adalah sebuah keberhasilan.'}
        ]},
        {type:'good', txt:'Kursus ini memberi Anda niat baik dalam jumlah yang tidak biasa untuk dipakai: siswa membangun benda yang mereka pilih, untuk masalah yang mereka pilih, lalu mempublikasikannya. Bersandarlah pada itu ketika keterlibatannya menurun. “Ini buat siapa?” dan “apa yang bikin punyamu beda?” menarik kembali seorang remaja jauh lebih baik daripada “tolong perhatikan.”'},
        {type:'warn', txt:'Dua hal yang tidak boleh dilakukan, keduanya eksplisit dalam rencananya: jangan bersikap negatif terhadap siswa yang tidak mengerjakan PR-nya, dan jangan menyorot siapa pun karena kekurangan peralatan atau komputer yang lambat. Keduanya biasanya soal keadaan di rumah, bukan soal usaha.'}
      ]},
      {t:'🎓 Kelima metodenya, dijalankan dengan baik', cards:[
        {type:'text', h:'1. Scrum & EduScrum', b:'Dipakai sejak M1L2 dan diajarkan secara eksplisit di Modul 8 kursus. Pelajarannya dibagi menjadi <strong>sprint</strong> dengan batas waktu yang ketat, masing-masing dibuka dengan diskusi singkat dan ditutup dengan pembekalan. Dua pertanyaan pembekalannya tetap: <strong>“apakah kita benar-benar mencapai hasilnya?”</strong> dan <strong>“bagaimana ini mendekatkan kita pada penyelesaian masalah utamanya?”</strong> Pelajaran EduScrum yang lebih lengkap menambahkan retrospektif dengan tiga pertanyaan: apa yang kalian capai dan apakah waktunya cukup; tahap mana yang paling sulit; bagaimana kalian akan memperbaiki sprint ini.'},
        {type:'text', h:'2. LiveCoding', b:'Tutor membangun kodenya <strong>sedikit demi sedikit, bersama siswa</strong>, sambil membagikan layarnya — sehingga mereka melihat pemrograman sebagai aliran keputusan kecil alih-alih sebuah artefak jadi. Bicaralah sambil mengetik kode, ajukan pertanyaan supaya mereka tetap terlibat, jelaskan logika di balik setiap langkah, <strong>buat kesalahan dengan sengaja lalu minta mereka menemukannya</strong>, jangan terburu-buru, berhentilah sejenak supaya orang bisa menyusul, pakai alat gambar Zoom untuk memvisualkan logikanya, pakai huruf yang jelas dan besar, dan tulislah dalam blok kode supaya strukturnya terlihat.'},
        {type:'text', h:'3. Use–Modify–Create', b:'Dipakai untuk M1L3 dan M6L1. Siswa mula-mula <strong>memakai</strong> kode yang berjalan — menjalankannya, melihatnya bekerja, bereksperimen bebas — lalu <strong>memodifikasinya</strong> sambil Anda menjelaskan apa yang dilakukan setiap perubahan, dan baru setelah itu <strong>membuat</strong> versi mereka sendiri. Kerjakan dua langkah pertamanya secara berurutan dan tahan keinginan menjelaskan lebih awal: lima menit “ubah sesuatu lalu jalankan lagi” menghasilkan pertanyaan yang lebih baik daripada ceramah apa pun.'},
        {type:'text', h:'4. Metakognisi', b:'Diperkenalkan di M2L1 sebagai “kereta metakognisi” — lima perhentian terjadwal sepanjang pelajarannya: nyatakan tujuannya; tanyai diri sendiri bagaimana pengetahuan sebelumnya membantu; kenali alat dan strategi yang dipakai; evaluasi apakah strategi itu berhasil; dan renungkan apakah semua itu berlaku di luar kursusnya. Bacalah buku panduan tutornya sebelum menjalankannya. Langkah paling berguna yang diberikannya: frustrasi seorang siswa adalah <strong>informasi yang sah tentang strategi yang mereka pilih</strong>, bukan bukti tentang kemampuan mereka.'},
        {type:'text', h:'5. Gamifikasi', b:'Bukan hiasan — ini mekanisme penyampaian teori yang kalau tidak begitu akan menjadi ceramah. Perbendaharaan kursusnya: kuis beregu <strong>tic-tac-toe</strong> (M5L4), <strong>“semua lawan satu”</strong> tempat satu siswa menjadi ahli (M6L1), permainan <strong>“bola”</strong> tempat pembicara memilih pembicara berikutnya (M1L3), perburuan kode dua menit <strong>“temukan kalau bisa”</strong> (M3L4), <strong>lomba akurasi model</strong> (M5L4, M6L2), dan <strong>lomba meme terbaik</strong> (M3L4). Beberapa di antaranya juga menyebarkan giliran bicara secara otomatis — aturan bahwa siswa yang sama tidak boleh menjawab dua kali beruntun lebih banyak berbuat untuk partisipasi daripada bertanya langsung kepada siswa yang pendiam.'},
        {type:'tip', txt:'Ketika catatan sebuah pelajaran menyebutkan sebuah metode, ia sedang memberi tahu Anda bahwa pelajarannya tidak akan berjalan tanpa itu. Pelajaran UMC yang disampaikan sebagai ceramah, atau pelajaran EduScrum yang dijalankan tanpa pengaturan waktu, menghasilkan tahap yang kelebihan waktu dan kelompok yang menjauh. Bacalah catatan di bagian atas rencananya sebelum apa pun.'}
      ]},
      {t:'⚖️ Diferensiasi', cards:[
        {type:'twocol', left:{h:'🚀 Untuk siswa yang lebih maju', items:['Pakailah <strong>tugas tambahan</strong> bawaannya (⭐️ / “Add.”) — semuanya ada di hampir setiap pelajaran','Minta mereka <strong>membagikan layar dan memimpin</strong> sebuah pemasangan atau tahap live coding','Minta mereka menjalankan <strong>master class kecil</strong> untuk teman sekelasnya','Arahkan mereka ke <strong>dokumentasi</strong> untuk tugas yang lebih dalam di dalam topik hari ini','Berikan versi terbuka “jadikan milikmu sendiri” dari proyeknya']}, right:{h:'🐢 Untuk siswa yang tertinggal', items:['<strong>Kurangi cakupannya</strong> — versi sederhana yang selesai mengalahkan versi ambisius yang tidak selesai','Berikan mereka <strong>proyek awal</strong>: Basic Bot, branch repository-nya, Pipfile solusinya, CSV bersamanya','Biarkan <strong>technical assistant</strong> membantu sementara Anda menjaga kelasnya tetap berjalan','<strong>Pasangkan mereka</strong> di sebuah breakout room, atau bergabunglah dengan mereka satu per satu','Perbaiki <em>satu</em> hal yang menghambat lalu berikan mereka kemenangan yang terlihat']}},
        {type:'warn', txt:'Jangan pernah biarkan satu komputer yang rusak menyandera kelasnya. Rencananya menyatakannya di beberapa tempat: mulailah dengan siswa yang sudah siap, kirimkan bantuan kepada yang terhambat, dan pakai cadangan yang sudah disiapkan. Masalah pemasangan tidak sepadan dengan dua puluh menit waktu sembilan siswa.'},
        {type:'good', txt:'Langkah diferensiasi terbaik dalam kursus ini adalah mengubah siswa yang cepat menjadi seorang pengajar. Itu memperdalam pemahaman mereka, memberi Anda waktu untuk siswa yang macet, dan tidak memakan biaya apa pun. Pujilah <em>penjelasannya</em>, bukan selesainya — itulah yang menjadikannya ganjaran alih-alih beban.'}
      ]},
      {t:'📊 Penilaian & platform', cards:[
        {type:'text', h:'Bagaimana pekerjaannya dinilai', b:'Tugas dinilai entah <strong>secara otomatis</strong> oleh platform-nya atau <strong>secara manual oleh Anda</strong>. Yang manual datang dengan kriteria dan nilai poinnya — misalnya, fungsi sudah ditulis dan kodenya berjalan bernilai 30 poin, plus tugas tambahan 35, kode yang tidak berjalan 0; proyek modulnya bernilai sampai <strong>50 poin</strong> dan punya alat penilaian tersendiri; sebuah README bernilai 20 kalau tidak terstruktur, 30 kalau terstruktur dengan emoji, +5 untuk gambar atau GIF, +10 untuk file lisensi. Pakailah alatnya di mana tersedia, dan masukkan nilainya ke platform.'},
        {type:'qa', h:'Detail operasional yang menjerat tutor baru', items:[
          {k:'Tombol Submit', v:'Pekerjaan baru dihitung setelah dikirimkan. Katakan “tolong pastikan kalian sudah mengirimkan tugas kelasnya” di akhir setiap pelajaran, dan pastikan di Backoffice.'},
          {k:'Tautan di chat', v:'Beberapa tugas bernilai dinilai dari sebuah tautan GitHub yang diposting di chat tugasnya. Tidak ada tautan berarti siswa yang tidak ternilai — kejarlah selama pelajarannya.'},
          {k:'Tenggat', v:'Bahaslah tenggat PR-nya bersama siswa dan sisakan waktu yang cukup bagi diri Anda untuk menilai dengan benar.'},
          {k:'Kehadiran', v:'Catatlah sambil berbicara dengan siswa alih-alih sebagai absensi formal.'},
          {k:'Chat grup', v:'PR bisa dibahas di sana di antara pelajaran — ingatkan siswa supaya mereka tidak menunggu seminggu untuk lepas dari kebuntuan.'}
        ]},
        {type:'text', h:'Tahap karier di akhir modul', b:'Modul 1, 2, 3, dan 4 kursus masing-masing berakhir dengan tahap singkat yang menghubungkan pekerjaannya dengan sebuah karier: rayakan menyelesaikan topik yang sangat sedikit orang selesaikan, tunjukkan keterampilan yang terbuka, dan hubungkan dengan jalur profesional — kehadiran Python dalam produk-produk besar untuk blok otomasi, seorang data scientist sebagai “detektif informasi” untuk blok AI, dan keuntungan menjadi spesialis AI untuk blok terapannya. Tanyakan apa yang sudah diketahui siswa sebelum Anda memberi tahu, dan tanyakan apa yang ingin mereka lakukan dengan keterampilan ini.'},
        {type:'warn', txt:'Satu tahap di M10L1 memperkenalkan kursus Kodland lainnya dan mengumpulkan hasil kuis yang masuk ke tim penjualan dan kepada orang tua. Jalankan dengan hangat dan jujur, jangan mengomentari jawaban selagi siswa mengerjakan kuisnya, dan jangan berlebihan menjualnya. Kredibilitas Anda di mata kelompoknya lebih berharga daripada satu prospek.'}
      ]},
      {t:'💭 Delapan teknik refleksi', cards:[
        {type:'text', h:'Putarlah bergantian — itu instruksinya', b:'Rencana pelajaran yang belakangan menyediakan delapan teknik dan menyarankan memakai <strong>yang berbeda tiap pelajaran</strong>. Menjaganya tetap berputar itulah yang mencegah sepuluh menit penutupnya menjadi ritual yang sekadar dilewati siswa. Sediakan tiga atau empat yang bisa Anda jalankan tanpa persiapan.'},
        {type:'qa', h:'Kedelapan teknik itu', items:[
          {k:'1. Melengkapi kalimat', v:'“Hari ini aku belajar bahwa…”, “Bagian favoritku dari pelajaran ini adalah…”'},
          {k:'2. Papan penemuan', v:'Buka papan Zoom lalu minta semua orang menulis satu hal baru — sebuah fakta, trik, istilah, atau ide yang layak diingat.'},
          {k:'3. Dalam satu meme', v:'Semua orang memposting satu meme atau gambar yang menggambarkan kesannya atas pelajaran itu.'},
          {k:'4. Pertanyaan kilat', v:'Jawaban satu kalimat yang cepat: hal paling berkesan, tugas paling menarik atau paling menantang, sesuatu yang bisa dipakai di luar kelas.'},
          {k:'5. Ada yang mengejutkanmu?', v:'Bergiliran menyebutkan apa yang mengejutkan atau mengagumkan mereka.'},
          {k:'6. Kemenangan kecil', v:'Semua orang membagikan satu kemenangan — bahkan “aku menulis kode tanpa error” atau “aku membantu teman”.'},
          {k:'7. Ajari seorang teman', v:'Dua puluh detik masing-masing untuk menjelaskan apa yang akan mereka ajarkan kepada teman yang melewatkan pelajarannya. Sangat bagus untuk pemantapan dan rasa percaya diri.'},
          {k:'8. Kiat rahasia', v:'Semua orang membagikan satu nasihat untuk pembelajar lain — “periksa kodemu setelah tiap langkah”, “jangan takut mencoba kode baru”.'}
        ]},
        {type:'good', txt:'“Ajari seorang teman” adalah yang paling diagnostik dari kedelapannya. Siswa yang bisa menjelaskan pelajaran hari ini dalam dua puluh detik sudah memahaminya; siswa yang tidak bisa, belum — dan Anda mengetahuinya pada lima menit terakhir pelajarannya alih-alih pada tes minggu depan.'},
        {type:'text', h:'Dan selalu tutuplah dengan cara yang sama', b:'Ucapkan selamat tinggal dengan semestinya, katakan bahwa Anda menanti semua orang di pelajaran berikutnya, dan ingatkan bahwa mereka bisa membahas PR-nya di chat grup <strong>tanpa menunggu pelajaran berikutnya</strong>. Ini muncul di akhir keempat puluh rencana pelajarannya. Butuh lima belas detik, dan itulah perbedaan antara sebuah kelas dan sebuah kelompok.'}
      ]},
      {t:'✍️ Menilai kode yang setengah berjalan', cards:[
        {type:'text', h:'Masalah yang tidak diselesaikan kriterianya', b:'Kursusnya memberi Anda nilai poin — 30 untuk fungsi yang berjalan, 35 dengan tugas tambahannya, <strong>0 kalau kodenya tidak berjalan</strong>, sampai 50 untuk proyek modul, dan skala README 20/30/+5/+10. Yang tidak diberitahukannya adalah apa yang dilakukan pada kasus yang sangat umum: pemikirannya benar, strukturnya benar, dan ia crash di baris 14.'},
        {type:'qa', h:'Cara memutuskan yang bisa dipertanggungjawabkan', items:[
          {k:'Pisahkan pemahaman dari pelaksanaan', v:'Tanyakan pada diri Anda dua hal: apakah mereka memahami apa yang dibutuhkan, dan apakah kodenya berjalan? Siswa yang merancang solusi yang benar lalu tersandung satu salah ketik berada di posisi yang sama sekali berbeda dari yang menempelkan sesuatu yang tidak bisa mereka jelaskan.'},
          {k:'Di mana 0 yang tegas tertulis, hormatilah — tapi katakan alasannya', v:'Sebagian kriteria eksplisit bahwa kode yang tidak berjalan bernilai 0. Terapkanlah, lalu berikan umpan balik yang membuatnya berguna: tepatnya baris yang mana, dan apa yang harus diubah. Nilai 0 dengan perbaikan yang tepat adalah tindakan mengajar; nilai 0 tanpa komentar hanyalah sebuah angka.'},
          {k:'Berilah ganjaran pada usaha yang terlihat', v:'Di mana kriterianya memberi Anda kelonggaran — skor proyek, tugas tambahan, mutu README — hargailah usaha nyata yang belum sampai. Komentar, struktur, riwayat commit yang masuk akal, README yang menjelaskan maksudnya.'},
          {k:'Jangan pernah menilai berdasarkan kecepatan', v:'Tidak ada apa pun dalam kursus ini yang memberi ganjaran pada selesai duluan. Proyek sederhana yang lengkap secara eksplisit lebih berharga daripada yang ambisius tapi belum selesai.'},
          {k:'Selalu tinggalkan jalan menuju poinnya', v:'Katakan apa yang akan menaikkannya. Setiap tugas manual bisa dikumpulkan ulang dalam semangatnya, karena seluruh kursus ini berulang — pelajaran berikutnya membangun di atas proyek yang sama.'}
        ]},
        {type:'good', txt:'Kebiasaan yang berguna: tulis umpan baliknya dulu dan angkanya belakangan. Kalau Anda tidak bisa menjelaskan angkanya dalam dua kalimat yang akan membantu siswanya membaik, itu mungkin angka yang salah.'},
        {type:'tip', txt:'Pakailah <strong>alat penilaian</strong>-nya di mana kursusnya menyediakannya (proyek bot modul 1 dan portofolio modul 4 sama-sama punya) — semuanya ada supaya penilaiannya konsisten antar-tutor, bukan sekadar praktis bagi Anda. Dan ingatlah jebakan praktisnya: beberapa tugas bernilai dinilai dari <strong>tautan GitHub di chat tugasnya</strong>. Tidak ada tautan, tidak ada penilaian — kejarlah selama pelajarannya, dengan suara keras, lebih dari sekali.'}
      ]},
      {t:'👤 Pelajaran individu 50 menit', cards:[
        {type:'text', h:'Setiap pelajaran punya satu, dan itu bukan sekadar “sama tapi lebih cepat”', b:'Setiap rencana dalam kurikulumnya membawa <strong>varian individu 50 menit</strong> dengan tabel tahapannya sendiri. Godaannya adalah menjalankan pelajaran kelompoknya dengan kecepatan tinggi. Jangan — Anda kehilangan 40 menit, dan banyak dari yang akan Anda buru-burukan justru hal yang sama sekali tidak bisa dilakukan seorang siswa sendirian.'},
        {type:'twocol', left:{h:'Apa yang harus dibuang', items:['<strong>Breakout room</strong> — tidak ada yang bisa dijadikan pasangan','<strong>Lomba beregu</strong> — aturan rata-rata regu M6L2 berhenti bermakna','<strong>Peninjauan dan pengujian antarteman</strong> — <em>Anda</em> menjadi peninjaunya','<strong>Presentasi kepada kelompok</strong> — menjadi percakapan dengan Anda','<strong>Permainan yang butuh regu</strong> — regu tic-tac-toe, permainan “bola”','Sebagian besar tahap berbagi ide dan pemungutan suara']}, right:{h:'Apa yang Anda dapat, dan sebaiknya dipakai', items:['<strong>Pencocokan ritme yang sungguhan</strong> — tidak ada menunggu yang paling lambat atau paling cepat','<strong>Dialog terus-menerus</strong> — Anda bisa bertanya “kenapa?” setelah tiap langkah','<strong>Debugging yang lebih dalam</strong> — baca setiap error bersama-sama dengan benar','<strong>Fokus pada proyek mereka sendiri</strong> — pembingkaian dunia nyatanya bisa dipilihkan untuk mereka','Lebih banyak waktu untuk tugas tambahannya','Umpan balik yang langsung dan spesifik alih-alih penilaian yang ditumpuk']}},
        {type:'qa', h:'Cara mengonversi tahap-tahap kolaboratifnya', items:[
          {k:'Analisis berpasangan → berpikir dengan suara keras', v:'Di mana siswa akan menganalisis kode berpasangan, minta mereka menarasikan penalarannya kepada Anda. Permainan “semua lawan satu” di M6L1 sudah punya varian individu dalam rencananya: Anda dan siswanya bergantian saling mengajukan pertanyaan, tanpa pemenang.'},
          {k:'Code review antarteman → tinjauan Anda, checklist mereka', v:'Mereka meninjau kode <em>Anda</em> yang sengaja dibuat cacat terhadap checklist-nya. Itu mengajarkan keterampilan yang sama dan bisa dibilang lebih sulit.'},
          {k:'Lomba beregu → melawan sebuah tolok ukur', v:'Alih-alih mengalahkan regu lain, kalahkan sebuah target: “bisakah kamu membuat modelnya di atas 90% pada gambar uji ini?”'},
          {k:'Curah gagasan kelompok → pemancingan terstruktur', v:'Curah gagasan sendirian cepat mati. Berikan kategori dan pengatur waktu, dan sumbangkan ide Anda sendiri — aturan tanpa-kritiknya tetap berlaku untuk kalian berdua.'},
          {k:'Presentasi → audiens sungguhan', v:'Minta mereka berpresentasi kepada Anda secara formal, terukur waktunya, dengan delapan aturan presentasinya diterapkan. Lalu sarankan mereka menunjukkannya kepada orang tua atau teman, supaya tetap ada audiens yang sungguhan.'}
        ]},
        {type:'tip', txt:'Satu hal justru menjadi <em>lebih sulit</em> saat sendirian: motivasi pada pembangunan yang panjang. Dalam kelompok, momentumnya bersifat sosial. Satu lawan satu, itu sepenuhnya ada pada Anda, jadi pecahlah pekerjaannya menjadi kemenangan yang terlihat lalu sebutkan masing-masing begitu tercapai.'}
      ]},
      {t:'🧰 Kebiasaan yang mencegah sebagian besar pelajaran buruk', cards:[
        {type:'text', h:'Siapkan pelajaran berikutnya di akhir pelajaran ini', b:'Installer sebagai PR sebelum M1L2. Email siap sebelum pelajaran pendaftarannya. Sebuah proyek disiapkan sebelum code review-nya. Proyek bot lama dibuka sebelum M7L1. Live Share terpasang sebelum M8L4. CSV disimpan sebelum M5L3. Pertanyaan ditulis sebelum M10L2. Hampir setiap pelajaran yang berjalan buruk berjalan buruk karena sesuatu yang seharusnya terjadi seminggu sebelumnya.'},
        {type:'good', txt:'Bangunlah ritual dua baris di akhir pelajaran Anda: pastikan semua orang menekan <strong>Submit</strong>, dan sebutkan satu hal yang harus mereka bawa atau pasang lain kali. Lima belas detik, dan itu menghilangkan sebagian besar kekacauan dari sepuluh menit pertama pelajaran Anda berikutnya.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa menanyakan sesuatu yang benar-benar tidak Anda ketahui. Apa langkah bawaannya?', opts:['Katakan bahwa Anda belum yakin lalu cari tahu bersama di layar — itu kebiasaan dokumentasi M1L4 yang didemonstrasikan secara langsung','Berikan tebakan terbaik Anda dengan yakin supaya kelompoknya tetap percaya kepada Anda','Katakan itu di luar cakupan kursusnya','Lanjut dengan cepat dan berharap mereka lupa'], c:0, fb:'Mencari tahu bersama adalah pilihan terkuat karena ITU memang keterampilan yang diajarkan kursusnya: tidak ada yang hafal sebuah library. Anda bukan menutupi kekurangan, Anda mencontohkan metodenya.'},
      {q:'Respons mana atas pertanyaan yang tidak bisa Anda jawab yang benar-benar merusak kredibilitas Anda?', opts:['Menebak dengan penuh percaya diri — siswa menguji jawaban, dan salah sambil terdengar yakin itulah yang mengakhiri kepercayaan mereka','Mengatakan “saya tidak tahu”','Memarkir pertanyaannya lalu menjawabnya di chat grup malam itu','Menyebutkan dengan jujur di mana batas pengetahuan Anda'], c:0, fb:'Mengakui ketidakpastian tidak pernah merugikan Anda di depan kelas. Jawaban salah yang diucapkan dengan yakin, lalu diperiksa seorang siswa di tengah pelajaran, itulah yang merugikan.'},
      {q:'Anda memarkir sebuah pertanyaan untuk dijawab nanti di chat grup. Apa yang menentukan apakah itu membantu atau merugikan?', opts:['Apakah Anda benar-benar menindaklanjutinya — pertanyaan yang ditindaklanjuti membangun lebih banyak kepercayaan daripada jawaban seketika, yang terlupakan merugikan lebih besar daripada mengakui ketidaktahuan','Seberapa cepat Anda membalas','Apakah Anda menjawabnya secara pribadi atau terbuka','Apakah siswanya menanyakannya di depan orang lain'], c:0, fb:'Memarkir adalah langkah yang sah hanya kalau tindak lanjutnya terjadi. Kalau tidak, Anda cuma menghindari pertanyaannya, dan siswa menyadarinya.'},
      {q:'Mana di antara ini yang merupakan bagian inti metode LiveCoding?', opts:['Membuat kesalahan dengan sengaja lalu meminta siswa menemukannya','Menulis kodenya dalam diam supaya siswa bisa berkonsentrasi','Menunjukkan kode jadinya lebih dulu, lalu menjelaskannya','Membiarkan siswa mengetik kode sementara Anda menonton tanpa berbicara'], c:0, fb:'LiveCoding berarti menarasikan keputusan Anda, mengajukan pertanyaan, berhenti sejenak, menggambar untuk memvisualkan logikanya — dan membuat error dengan sengaja supaya siswa berlatih menemukannya.'},
      {q:'Satu siswa menjawab setiap pertanyaan dan sisanya jadi diam. Apa perbaikan yang sejalan dengan kursusnya?', opts:['Pakai struktur bawaannya — permainan “bola”, aturan tidak-menjawab-dua-kali-beruntun — dan biarkan formatnya yang membatasi mereka','Minta mereka secara pribadi untuk berkontribusi lebih sedikit','Berhenti mengajukan pertanyaan terbuka kepada kelompoknya','Pindahkan mereka ke breakout room terpisah'], c:0, fb:'Beberapa permainan kursusnya menyebarkan giliran bicara secara otomatis. Membiarkan formatnya yang membatasi menghindarkan hal itu menjadi personal.'},
      {q:'Seorang siswa mengganggu dan tidak fokus pada tugasnya. Apa yang biasanya berhasil dalam kursus ini?', opts:['Berikan mereka pekerjaan — memimpin sebuah pemasangan, membagikan layarnya, menjelaskan solusinya; gangguan biasanya berasal dari kurang kesibukan','Bisukan mereka untuk sisa tahapnya','Langsung lanjut ke tahap refleksinya','Berikan mereka PR tambahan'], c:0, fb:'Kursus ini penuh peran sah untuk dibagikan, dan siswa yang mampu tapi bosan adalah penyebab gangguan paling umum di sini.'},
      {q:'Anda mengajukan pertanyaan kepada kelompoknya dan tidak ada yang menjawab. Apa penyebab yang paling mungkin?', opts:['Pertanyaannya terlalu besar — perkecil menjadi sesuatu yang sempit dan bisa dijawab, seperti “variabel ini harus bertipe apa?”','Kelompoknya sudah tidak terlibat dan butuh rehat','Mereka tidak mengerjakan PR-nya','Materinya terlalu tinggi bagi mereka'], c:0, fb:'Rencana pelajarannya terus-menerus mencontohkan pancingan yang sempit dan bisa dijawab. Kesunyian biasanya gejala dari ukuran pertanyaannya, bukan dari keengganan.'},
      {q:'Kode seorang siswa menunjukkan pemikiran dan struktur yang benar, tapi crash. Bagaimana Anda harus menilainya?', opts:['Terapkan kriterianya — termasuk 0 yang tegas di mana itu tertulis — tapi selalu berikan baris dan perbaikan yang tepat, supaya nilainya mengajarkan sesuatu','Berikan nilai penuh, karena pemikirannya benar','Berikan nol tanpa komentar, karena kodenya tidak berjalan','Rata-ratakan nilainya dengan tugas mereka sebelumnya'], c:0, fb:'Di mana kode yang tidak berjalan bernilai 0, hormatilah — tapi 0 dengan perbaikan yang tepat adalah tindakan mengajar, sedangkan 0 tanpa komentar hanyalah sebuah angka.'},
      {q:'Apa kebiasaan yang baik saat menilai tugas manual?', opts:['Tulis umpan baliknya dulu dan angkanya belakangan — kalau Anda tidak bisa membenarkan angkanya dalam dua kalimat yang membantu, itu mungkin salah','Nilai kiriman yang paling cepat dulu selagi Anda masih bertenaga','Nilai semuanya relatif terhadap siswa terkuat dalam kelompoknya','Berikan skor yang sama kepada semua yang mengumpulkan, demi keadilan'], c:0, fb:'Umpan balik lebih dulu menjaga angkanya tetap bisa dipertanggungjawabkan dan berguna. Tidak ada apa pun dalam kursusnya yang memberi ganjaran pada kecepatan, dan menilai secara kurva bukan bagian dari kriteria mana pun.'},
      {q:'Ketika menjalankan pelajaran individu 50 menit, apa yang TIDAK boleh Anda lakukan?', opts:['Menjalankan pelajaran kelompok 90 menit dengan kecepatan tinggi — Anda kehilangan 40 menit dan sebagian besar yang Anda buru-burukan tetap butuh sebuah kelompok','Mengubah peninjauan antartemannya menjadi peninjauan atas kode cacat Anda sendiri','Mengganti lomba beregunya dengan target tolok ukur','Menghabiskan lebih banyak waktu untuk tugas tambahannya'], c:0, fb:'Breakout room, lomba beregu, peninjauan antarteman, dan presentasi kelompok tidak bisa terjadi dengan satu siswa. Masing-masing perlu dikonversi, bukan dimampatkan.'},
      {q:'Dalam pelajaran individu, bagaimana Anda mempertahankan keterampilan code review antartemannya?', opts:['Minta siswanya meninjau kode ANDA yang sengaja dibuat cacat terhadap checklist-nya — keterampilan yang sama, bisa dibilang lebih sulit','Lewati saja, karena itu butuh dua siswa','Minta mereka meninjau kodenya sendiri dari pelajaran sebelumnya','Minta mereka meninjau kode teman sekelas sebagai PR'], c:0, fb:'Keterampilannya adalah menerapkan sebuah checklist dan memberi umpan balik yang membangun. Kode cacat Anda menyediakan subjeknya, dan Anda bisa menanam persis masalah yang ingin ditemukan.'},
      {q:'Apa yang menjadi lebih sulit, bukan lebih mudah, dalam pelajaran satu lawan satu?', opts:['Motivasi pada pembangunan yang panjang — momentum bersifat sosial dalam kelompok, jadi Anda harus memecah pekerjaannya menjadi kemenangan yang terlihat lalu menyebut masing-masing','Debugging, karena tidak ada yang bisa dibandingkan','Menjaga pengaturan waktunya','Menjelaskan teori dengan jelas'], c:0, fb:'Pencocokan ritme dan dialog justru membaik satu lawan satu. Mempertahankan momentum sepanjang pembangunan yang panjang adalah hal yang sepenuhnya jatuh ke tangan Anda.'},
      {q:'Seorang siswa terlihat frustrasi selama pelajaran metakognisinya. Apa yang disuruh kursusnya untuk Anda katakan?', opts:['Bahwa reaksi itu sah, dan itu informasi tentang strategi yang mereka pilih — bukan bukti tentang kemampuan mereka','Bahwa mereka sebaiknya rehat dulu lalu bergabung lagi nanti','Bahwa frustrasi berarti pelajarannya terlalu tinggi bagi mereka','Tidak usah apa-apa — lanjut saja supaya Anda tidak menarik perhatian'], c:0, fb:'Catatan M2L1 membingkai frustrasi sebagai umpan balik yang berguna tentang strategi yang dipakai, dan meminta Anda memberi selamat kepada siswanya karena menyadarinya, karena penyadaran itulah keterampilannya.'},
      {q:'Apa langkah diferensiasi terbaik untuk siswa yang selalu selesai lebih awal?', opts:['Berikan tugas tambahan bawaannya, atau minta mereka memimpin sebuah tahap atau menjalankan master class kecil — lalu pujilah penjelasannya','Kirim mereka mendahului ke materi pelajaran berikutnya','Biarkan mereka membantu Anda menilai pekerjaan siswa lain','Kurangi jumlah tugas untuk sisa kelasnya'], c:0, fb:'Tugas tambahan tersedia di hampir setiap pelajaran, dan meminta siswa yang kuat memimpin pemasangan atau menjelaskan solusi adalah pola yang dipakai di sepanjang kursusnya.'},
      {q:'Environment seorang siswa rusak dan tahap praktiknya sedang dimulai. Apa yang Anda lakukan?', opts:['Mulailah dengan siswa yang sudah siap, arahkan technical assistant ke masalahnya, dan berikan siswa yang terhambat sebuah cadangan yang sudah disiapkan','Hentikan pelajarannya sampai environment semua orang bekerja','Minta mereka menonton teman sekelasnya sepanjang pelajaran','Pindahkan pelajarannya ke minggu berikutnya'], c:0, fb:'Rencananya menyediakan cadangan — Basic Bot, Pipfile solusinya, dataset bersamanya, CSV pelajaran sebelumnya — justru supaya satu komputer tidak bisa menyandera kelasnya.'},
      {q:'Mengapa kursus ini menyediakan delapan teknik refleksi alih-alih satu?', opts:['Karena Anda dimaksudkan memutarnya bergantian, supaya sepuluh menit penutupnya tetap hidup alih-alih menjadi ritual','Supaya tutor bisa memilih satu yang paling mereka sukai lalu memakainya berulang','Karena kelompok usia yang berbeda butuh teknik yang berbeda','Karena platform-nya menetapkan satu secara acak'], c:0, fb:'Rencana pelajaran yang belakangan menyarankan mengganti metodenya tiap pelajaran — itulah yang mencegah refleksi menjadi sesuatu yang sekadar dilewati siswa.'},
      {q:'Teknik refleksi mana yang paling mengungkap apakah seorang siswa benar-benar memahami pelajarannya?', opts:['“Ajari seorang teman” — dua puluh detik menjelaskan apa yang akan mereka ajarkan kepada orang yang melewatkannya','“Dalam satu meme” — kesan mereka atas pelajarannya','“Kemenangan kecil” — satu kemenangan dari sesi itu','“Melengkapi kalimat” — “hari ini aku belajar bahwa…”'], c:0, fb:'Menjelaskan sebuah konsep dengan suara keras dalam dua puluh detik adalah pemeriksaan pemahaman yang sungguhan, dan itu sekaligus memantapkan pengetahuannya dan membangun rasa percaya diri.'},
      {q:'Sebuah proyek modul yang dinilai tidak punya tautan GitHub di chat tugasnya. Mengapa itu penting?', opts:['Tautan itulah cara proyeknya dinilai — tidak ada tautan berarti siswa yang tidak ternilai, jadi kejarlah selama pelajarannya','Platform-nya otomatis memotong poin untuk tautan yang hilang','Siswanya tidak bisa lanjut ke modul berikutnya tanpa itu','Itu mencegah teman sekelasnya melakukan peninjauan antarteman'], c:0, fb:'Beberapa tugas bernilai dinilai dari tautan yang diposting di chat tugasnya. Rencananya menyuruh Anda mengingatkan siswa, dengan suara keras, lebih dari sekali.'},
      {q:'Satu kebiasaan apa yang mencegah sebagian besar pelajaran berjalan buruk?', opts:['Menyiapkan pelajaran berikutnya di akhir pelajaran ini — installer, email, proyek yang dibuka, ekstensi yang dipasang','Membacakan seluruh rencana pelajarannya dengan lantang di awal','Menyiapkan teori tambahan kalau-kalau praktiknya selesai lebih cepat','Menyediakan laptop cadangan'], c:0, fb:'Installer sebelum M1L2, email sebelum pelajaran pendaftarannya, sebuah proyek siap sebelum code review-nya, Live Share sebelum M8L4 — sebagian besar pelajaran yang buruk sudah kalah seminggu sebelumnya.'}
    ]
  },
  {
    id:16, emoji:'🎬', color:'#0EA5E9',
    lesson:true,
    title:'Pelajaran contoh — tonton dan analisis',
    desc:'Rekaman pelajaran Python Pro yang sungguhan untuk ditonton, disertai panduan tentang apa yang dilakukan orang ini dengan baik, apa yang kurang, dan mengapa menyadari perbedaannya itulah intinya.',
    prep:'~2 jam: tonton sekali, lalu tonton lagi dengan panduannya dan sebuah buku catatan.',
    practical:{
      intro:'Sebelum menandainya selesai — dan membuka DST-nya:',
      items:[
        'Menonton pelajaran contohnya sekali dari awal sampai akhir, lalu sekali lagi sambil mengikuti panduan pengamatannya',
        'Mencatat, kata demi kata, kalimat yang dipakai orang ini ketika ada yang menginginkan jawaban jadinya',
        'Mendaftar keenam kualitas memimpin di bawah ini lalu mencatat momen ketika masing-masing terjadi',
        'Menemukan dua tahap yang <strong>hilang</strong> dalam pelajaran ini lalu menuliskan kalimat yang akan Anda ucapkan di tempatnya',
        'Membuka rencana pelajaran M1L2 di samping videonya lalu membandingkannya dengan tabel tahapannya',
        'Meninjau ulang daftar <strong>✋ Sebelum Anda mengajarkan ini</strong> Anda di semua modul lalu menutup apa yang Anda lewati'
      ]
    },
    obj:'Melihat semua yang ada di Modul 15 dipraktikkan dalam pelajaran yang sungguhan, dan melihat apa yang terjadi ketika dua tahap wajib terhimpit keluar. Tontonlah satu sesi Python Pro yang utuh, kenali perilaku memimpin yang layak ditiru, sadari kedua kekosongannya, dan pahami apa yang akan Anda lakukan secara berbeda.',
    completeH:'Siap untuk dinilai',
    completeBody:'Setelah menonton pelajaran contohnya dan menyusuri panduan pengamatannya, tandai modul ini sebagai selesai. Ini membuka <strong>Digital Skill Test</strong>, penilaian praktik terakhir bagi mereka yang melamar sebagai tutor Python Pro.',
    completeBtn:'Tandai pelajaran contohnya sudah ditonton →',
    sections:[
      {t:'🎥 Rekamannya', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/H3ctpvdhzT0', cap:'Satu pelajaran Python Pro yang utuh, dibawakan oleh seseorang yang berpengalaman. Kalau pemutarnya tidak termuat, bukalah langsung di <a href="https://youtu.be/H3ctpvdhzT0" target="_blank" rel="noopener noreferrer">youtu.be/H3ctpvdhzT0</a>.'},
        {type:'text', h:'Ini pelajaran yang mana', b:'Dilihat dari isinya — interpreter Python, penyiapan VS Code, membuat folder dan menjalankan skrip pertama, serta PR tentang mencari bot Discord — ini adalah <strong>pelajaran M1L2 kursusnya</strong>, pelajaran kedua dari seluruh kursus. Bukalah rencana itu di samping videonya. Ini <strong>kelompok kecil berisi dua siswa</strong>, jadi dinamikanya berada di tengah-tengah antara format kelompok 90 menit dan format individu 50 menit.'},
        {type:'text', h:'Cara menontonnya', b:'Tontonlah sekali dari awal sampai akhir, seperti yang dilakukan seorang siswa. Lalu tontonlah lagi dengan panduan di bawah ini dan sebuah buku catatan, sambil menjeda untuk mencatat apa yang orang ini <em>lakukan</em>, bukan apa yang mereka katakan. Memimpin adalah kumpulan perilaku yang konkret — di mana mereka berhenti sejenak, kapan mereka menyerahkan layarnya, bagaimana mereka merumuskan sebuah koreksi — dan itu hanya terlihat pada tontonan kedua.'},
        {type:'warn', txt:'Ini <strong>pelajaran sungguhan, bukan demonstrasi yang disiapkan.</strong> Sebagian besarnya sangat baik dan layak ditiru dari dekat. Ia juga kehilangan dua tahap wajib. Kedua fakta itu berguna bagi Anda, dan yang kedua mungkin lebih berguna daripada yang pertama, dan itulah sebabnya rekamannya tidak disunting untuk menyembunyikannya.'}
      ]},
      {t:'✅ Apa yang dilakukan orang ini dengan baik — tirulah ini', cards:[
        {type:'qa', h:'Enam perilaku konkret, dan apa yang membuatnya efektif', items:[
          {k:'Membuka dari orangnya, bukan dari materinya', v:'Menyapa siswanya lalu menanyakan minggu mereka dan apa yang mereka kerjakan. Itu briefing yang dikerjakan dengan benar: kehadirannya tercatat di dalam sebuah percakapan dan bukan sebagai absensi.'},
          {k:'Memeriksa PR dengan menanyakan pekerjaannya sendiri', v:'Menanyakan riset dan proyek mereka dari pelajaran sebelumnya, serta tugas membaca kodenya — dan siswanya benar-benar menjawab. Pemeriksaan PR menjadi diskusi yang otentik, yang sekaligus merupakan bacaan awal terbaik Anda atas siapa yang mulai tergelincir.'},
          {k:'Mendemonstrasikan dulu, baru menyerahkan', v:'Menyiapkan VS Code dan menjalankan sebuah skrip Python <em>sebelum</em> mereka melakukannya. Untuk pelajaran yang sarat penyiapan itu pilihan yang tepat: lihat aku, sekarang giliranmu.'},
          {k:'Memecah instruksinya menjadi langkah-langkah', v:'Buat sebuah folder, buka di terminal, ketik perintah ini. Pelajaran penyiapan runtuh ketika instruksinya datang sebagai satu paragraf; ia berjalan ketika instruksinya datang sebagai urutan bernomor dengan titik periksa setelah tiap langkah.'},
          {k:'Memakai nama kedua siswanya, berulang kali', v:'Menyapa mereka dengan nama selama interaksi pembelajarannya, bukan hanya saat absensi. Dengan dua orang itu mudah; dengan delapan itu disiplin yang disengaja, dan itu cara paling murah menjaga semua orang tetap hadir.'},
          {k:'Meminta menjelaskan, alih-alih menjelaskan', v:'Menanyakan kepada mereka apa <em>itu</em> interpreter, dan mereka menjawab dengan kata-kata mereka sendiri. Itu aturan “jangan berikan jawabannya” yang diterapkan pada teori, dan itulah perilaku yang paling layak dicuri dari semua yang ada di sini.'}
        ]},
        {type:'good', txt:'Perhatikan juga bagaimana umpan baliknya dilakukan: orang ini menyusuri kode siswanya bersama mereka, membantu mereka menemukan dan memperbaiki kesalahannya sendiri alih-alih membereskannya untuk mereka. Itu kebiasaan debugging dari M1L4 yang ditunjukkan dua pelajaran sebelum diajarkan secara formal.'},
        {type:'text', h:'Dan PR-nya diserahkan dengan semestinya', b:'PR-nya — mencari bot Discord lalu membawanya ke pelajaran berikutnya — <strong>dijelaskan</strong>, bukan sekadar diumumkan, dan dihubungkan dengan apa yang akan dilakukan pelajaran berikutnya. Sambungan ke depan itulah yang membuat PR terasa sebagai bagian dari sesuatu alih-alih tempelan, dan itu ada di setiap rencana pelajaran justru karena itu.'}
      ]},
      {t:'🕳️ Dua tahap yang hilang', cards:[
        {type:'text', h:'Apa yang tidak ada di sana', b:'Dua dari tujuh bagian kerangka pelajarannya tidak muncul: <strong>tidak ada tujuan jelas yang dinyatakan</strong> di awal atau dekat awal, dan <strong>tidak ada rangkuman atau pengulangan yang menutup pelajarannya</strong>. Keduanya adalah tahap wajib dalam setiap dari 40 rencana pelajarannya, dan rencana M1L2 memuat keduanya: sebuah slide tujuan yang mendaftar apa yang dihasilkan hari itu dan sebuah tahap refleksi dengan pertanyaan pengulangan.'},
        {type:'twocol', left:{h:'Mengapa tahap tujuannya penting', items:['Orang yang tahu tujuannya bisa menoleransi bagian tengah yang sulit, dan pelajaran ini punya bagian tengah yang sulit','Pekerjaan penyiapan terasa seperti birokrasi sampai dihubungkan dengan sebuah maksud','Slide tujuan pada rencana M1L2 menyebutkan empat hasil, termasuk generator kata sandi yang kuat','Tanpa itu, “kenapa kita mengetik perintah di sebuah terminal?” tetap tidak terjawab']}, right:{h:'Mengapa rangkumannya penting', items:['Refleksi adalah tempat pelajarannya mengendap: itu terjadwal, bukan opsional','Itu kesempatan terakhir Anda menangkap siapa yang mengangguk tanpa memahami','Pertanyaan pengulangannya sengaja menarik masuk mereka yang paling pendiam','Pelajaran yang terhenti alih-alih ditutup tidak meninggalkan apa pun untuk dibangun minggu berikutnya']}},
        {type:'good', txt:'Jujurlah tentang mengapa itu terjadi: hampir selalu karena <strong>waktu</strong>. Pelajaran penyiapan kelebihan waktu — pemasangannya gagal, komputernya berbeda-beda, ada yang tertinggal — dan tahap di kedua ujungnyalah yang terhimpit. Itu persis mode kegagalan yang diperingatkan Modul 3, dan melihatnya terjadi pada orang yang kompeten seharusnya memberi tahu Anda bahwa itu akan terjadi pada Anda juga, kecuali Anda melindungi tahap-tahap itu secara aktif.'},
        {type:'tip', txt:'Tugas Anda: tuliskan dua hal yang hilang itu. Sebuah <strong>pembukaan 30 detik</strong> yang menyebutkan apa yang dihasilkan pelajaran ini dan sebuah <strong>penutup 2 menit</strong> berisi tiga pertanyaan pengulangan dan PR-nya. Tulislah selengkapnya, dengan kata-kata Anda sendiri. Dua naskah pendek itu adalah hal paling mudah dibawa yang akan Anda peroleh dari modul ini: keduanya berlaku di setiap pelajaran kursusnya dan bisa Anda pakai ulang nyaris tanpa perubahan.'}
      ]},
      {t:'🔍 Tugas pengamatan Anda', cards:[
        {type:'qa', h:'Tahap demi tahap, sambil Anda menonton', items:[
          {k:'Briefing', v:'Bagaimana kehadirannya dicatat: sebagai absensi atau di dalam sebuah percakapan? Dalam waktu berapa lama pelajarannya sampai pada alasan untuk ada?'},
          {k:'Pemeriksaan PR', v:'Bagaimana pekerjaan pelajaran sebelumnya dimunculkan? Apa yang terjadi pada mereka yang punya lebih sedikit untuk ditunjukkan?'},
          {k:'Tujuan', v:'<strong>Bagian ini hilang.</strong> Catat titik di mana seharusnya ia masuk, dan apa yang akan Anda katakan.'},
          {k:'Teori', v:'Seberapa singkat? Perhatikan khususnya pertanyaan tentang interpreter-nya: orang ini bertanya alih-alih bercerita. Ukurlah berapa lama teorinya benar-benar berlangsung.'},
          {k:'Praktik', v:'Hitung berapa kali mereka diminta jawabannya dan tidak memberikannya. Catat apa yang mereka katakan sebagai gantinya.'},
          {k:'Refleksi', v:'<strong>Bagian ini hilang.</strong> PR-nya dijelaskan dengan baik, tapi tidak ada rangkuman. Catat di mana seharusnya ia masuk.'}
        ]},
        {type:'twocol', left:{h:'Perilaku memimpin yang dicatat', items:['Kapan layarnya diserahkan dan kapan diambil kembali','Bagaimana sebuah error dalam kode siswa didiagnosis dengan suara keras','Pertanyaan mana yang dibalas dengan pertanyaan lain','Bagaimana ritmenya diperiksa tanpa mempermalukan siapa pun','Bagaimana pelajaran berikutnya disiapkan di akhir','Seberapa sering tiap siswa dipanggil namanya']}, right:{h:'Momen yang selalu berjalan tidak beres', items:['Environment atau pemasangan seseorang tidak bekerja','Satu orang selesai jauh lebih dulu daripada yang lain','Seseorang diam cukup lama','Tahap penyiapannya mulai kelebihan waktu','Kode yang semenit lalu berjalan tiba-tiba error secara langsung','Sebuah path atau nama file salah secara halus']}},
        {type:'good', txt:'Hal paling berguna yang bisa Anda bawa dari rekaman ini adalah <strong>cara orang ini merumuskan kalimatnya</strong> pada momen ketika seseorang menginginkan jawabannya. Catat kalimat-kalimat itu kata demi kata. Punya dua atau tiga cara yang sudah siap untuk mengatakan “error-nya lagi ngasih tahu kamu apa?” lebih berharga dalam pelajaran pertama Anda daripada sebanyak apa pun teori tentang tidak memberikan jawaban.'},
        {type:'tip', txt:'Terakhir, bukalah rencana M1L2 di samping videonya lalu bandingkan dengan tabel tahapannya. Tahap mana yang memanjang? Mana yang termampatkan? Melihat di mana sebuah pelajaran sungguhan menyimpang dari rencananya adalah cara Anda belajar bagian mana dari sebuah rencana yang menopang dan bagian mana yang lentur, dan perbandingan yang ini khususnya banyak bercerita, karena Anda sudah tahu bagaimana akhirnya.'}
      ]}
    ]
  },
/* NEXT-ID-MODULE */
]
};

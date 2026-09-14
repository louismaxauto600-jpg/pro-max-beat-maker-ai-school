(() => {
  "use strict";

  const get = (id) => document.getElementById(id);

  const courses = [
    {
      icon: "🎛️",
      title: "Beat Making Fundamentals",
      description:
        "Studio workflow, bars, beats and the production process.",
      content: `
        <h3>Entwodiksyon</h3>
        <p>
          Beat making se pwosesis pou konstwi yon fondasyon rythmik ak
          mizikal pou yon chante. Anvan w kòmanse, ou dwe konprann 4
          eleman debaz yo: BEAT, BAR, MEASURE, ak TRACK.
        </p>

        <h3>Kisa yon "Beat" ye?</h3>
        <p>
          Yon beat se yon inite tan debaz — tankou "tik" yon revèy.
          Nan mizik, chak beat reprezante yon moman kote ou ka mete
          yon son (kick, snare, hi-hat, elatriye).
        </p>

        <h3>Kisa yon "Bar" (Measure) ye?</h3>
        <p>
          Yon bar se yon gwoup beat — pi souvan 4 beat pou chak bar
          nan mizik modèn (sa rele 4/4 time signature). Yon chante
          konplè ka gen 32, 64, oswa plis bars.
        </p>

        <h3>Workflow Studio</h3>
        <p>
          1) Chwazi yon tempo (BPM)<br>
          2) Kreye yon pattern drum debaz<br>
          3) Ajoute bass ak akò<br>
          4) Ajoute melodi/lead<br>
          5) Aranje estrikti chante a (intro, verse, chorus)<br>
          6) Mix ak master
        </p>

        <h3>Pratik</h3>
        <p>
          Ouvri Beat Maker la, chwazi 120 BPM. Kreye yon pattern
          8-step ak sèlman kick ak hi-hat. Koute l plizyè fwa pou
          zòrèy ou abitye ak groove a anvan w ajoute lòt eleman.
        </p>

        <h3>Konsèy Pwofesyonèl</h3>
        <p>
          Pa eseye fè tout bagay pafè nan premye eseye a. Kòmanse
          senp, epi ajoute konpleksite ti kras pa ti kras. Pi gwo
          erè débutan yo fè se mete twòp eleman nan yon sèl fwa.
        </p>
      `
    },
    {
      icon: "⏱️",
      title: "BPM, Tempo & Rhythm",
      description:
        "Control timing, groove, swing and rhythmic structure.",
      content: `
        <h3>Kisa BPM Ye?</h3>
        <p>
          BPM (Beats Per Minute) mezire vitès mizik la. Pi ba BPM la,
          pi dous mizik la santi; pi wo BPM la, pi vit ak enèjik li ye.
        </p>

        <h3>Gid BPM pa Genre</h3>
        <p>
          Hip-Hop: 80-100 BPM<br>
          Kompa: 100-130 BPM<br>
          Rara/Rabòday: 120-140 BPM<br>
          House/EDM: 120-130 BPM<br>
          Trap: 130-150 BPM (souvan santi de fwa pi lan)
        </p>

        <h3>Swing ak Groove</h3>
        <p>
          Swing se yon ti "dekalaj" nan timing pou bay mizik la yon
          santiman plis natirèl, plis "vivan". San swing, yon beat ka
          son twò rijid oswa mekanik.
        </p>

        <h3>Estrikti Rythmik</h3>
        <p>
          Chak mizik gen yon "grid" — divizyon tan an an ti pòsyon
          egal (8th notes, 16th notes). Konprann grid sa a ede w plase
          son yo egzakteman kote w vle yo.
        </p>

        <h3>Pratik</h3>
        <p>
          Kreye menm pattern lan de fwa: yon fwa a 90 BPM, yon lòt fwa
          a 128 BPM. Remake kijan menm groove a santi totalman diferan
          selon vitès la.
        </p>

        <h3>Egzèsis Zòrèy</h3>
        <p>
          Koute 3 chante diferan epi eseye devine BPM yo san zouti.
          Apre sa, verifye ak yon "BPM counter" pou tcheke si ou te
          jis. Sa devlope zòrèy ou pou rekonèt tempo natirèlman.
        </p>
      `
    },
    {
      icon: "🥁",
      title: "Drums & Percussion",
      description:
        "Kick, snare, hi-hat, clap and percussion patterns.",
      content: `
        <h3>Wòl Chak Eleman</h3>
        <p>
          <strong>Kick:</strong> bay pwa ak fondasyon (souvan sou beat
          1 ak 3)<br>
          <strong>Snare/Clap:</strong> bay aksan, souvan sou beat 2 ak 4<br>
          <strong>Hi-Hat:</strong> bay mouvman ak enèji, ka jwe sou
          chak 8th oswa 16th note<br>
          <strong>Percussion:</strong> (shaker, conga, tanbou) ajoute
          teksti ak koulè
        </p>

        <h3>Pattern Debaz (4/4)</h3>
        <p>
          Kick: beat 1 ak 3<br>
          Snare: beat 2 ak 4<br>
          Hi-Hat: chak 8th note (1&2&3&4&)
        </p>

        <h3>Varyasyon ak Fill</h3>
        <p>
          Yon "fill" se yon ti chanjman nan pattern drum lan (souvan
          nan dènye bar anvan yon nouvo seksyon) ki anonse yon
          tranzisyon — egzanp: yon woulman snare anvan chorus la.
        </p>

        <h3>Layering (Anpile Son)</h3>
        <p>
          Pwofesyonèl yo souvan mete 2-3 son ansanm pou kreye yon sèl
          "kick" oswa "snare" ki gen plis pwofondè — egzanp: yon kick
          gwo ansanm ak yon "click" kout pou l pi klè nan mix la.
        </p>

        <h3>Pratik</h3>
        <p>
          Mete kick sou etap 1 ak 5 (nan yon pattern 8-step), epi mete
          snare sou etap 3 ak 7. Ajoute hi-hat sou chak etap. Koute
          rezilta a, epi eseye deplase yon kick pou wè kijan sa chanje
          groove a.
        </p>

        <h3>Konsèy</h3>
        <p>
          Pa mete twòp percussion nan kòmansman an. Kite espas nan mix
          la — "silans" se yon zouti mizikal tou.
        </p>
      `
    },
    {
      icon: "🎹",
      title: "Chords, Melody & Bass",
      description:
        "Build harmony, melodies, hooks and basslines.",
      content: `
        <h3>Kisa yon Akò (Chord) Ye?</h3>
        <p>
          Yon akò se 3 nòt oswa plis ki jwe ansanm. Akò yo kreye
          "koulè emosyonèl" mizik la — majè souvan son kontan/limyè,
          minè souvan son tris/pwofon.
        </p>

        <h3>Pwogresyon Akò Debaz</h3>
        <p>
          Youn nan pwogresyon ki pi popilè nan mizik modèn se: I - V -
          vi - IV (egzanp nan C majè: C - G - Am - F). Eseye jwe sa
          nan Beat Maker la epi koute kijan li son familyè.
        </p>

        <h3>Melodi</h3>
        <p>
          Yon bon melodi souvan senp epi fasil pou chante/ret nan tèt
          moun. Li itilize repetisyon ak ti varyasyon — pa nesesèman
          anpil nòt konplike.
        </p>

        <h3>Bassline</h3>
        <p>
          Bass la se pon ant akò yo ak ritm lan. Li souvan jwe nòt
          debaz (root note) chak akò, men li ka gen mouvman pwòp li
          tou pou ajoute enterè.
        </p>

        <h3>Relasyon Bass-Kick</h3>
        <p>
          Kick ak bass yo pataje menm zòn frekans ba. Se poutèt sa
          fòk yo travay ansanm — souvan bass la "kite espas" pou kick
          la pase klè, oswa yo jwe nan moman diferan.
        </p>

        <h3>Pratik</h3>
        <p>
          Chwazi yon scale (egzanp C majè). Kreye yon motif melodik
          kout, 2-4 bars. Repete l epi fè yon ti varyasyon nan dezyèm
          fwa a. Ajoute yon bassline senp ki swiv akò yo.
        </p>
      `
    },
    {
      icon: "🎼",
      title: "Song Arrangement",
      description:
        "Intro, verse, chorus, bridge, breakdown and outro.",
      content: `
        <h3>Poukisa Estrikti Enpòtan</h3>
        <p>
          Yon bon aranjman mennen oditè a nan yon "vwayaj" — li kreye
          tansyon, rilaks, ak sipriz nan moman byen chwazi. San
          estrikti, yon chante ka son monotòn menm si son yo bon.
        </p>

        <h3>Seksyon Prensipal Yo</h3>
        <p>
          <strong>Intro:</strong> prezante mizik la, souvan pi senp<br>
          <strong>Verse:</strong> rakonte istwa a, plis kalm<br>
          <strong>Chorus/Hook:</strong> pati ki pi enèjik, pi "catchy"<br>
          <strong>Bridge:</strong> yon chanjman ki bay yon nouvo
          pèspektiv anvan dènye chorus la<br>
          <strong>Breakdown:</strong> yon moman kote gwo eleman yo
          retire pou kreye tansyon<br>
          <strong>Outro:</strong> fen chante a, souvan yon diminisyon
          gradyèl
        </p>

        <h3>Egzanp Estrikti Konplè</h3>
        <p>
          Intro (8 bars) → Verse 1 (16 bars) → Chorus (8 bars) →
          Verse 2 (16 bars) → Chorus (8 bars) → Bridge (8 bars) →
          Chorus Final (8-16 bars) → Outro (8 bars)
        </p>

        <h3>Konsèy Tansyon ak Rilaks</h3>
        <p>
          Chak chorus dwe santi pi fò pase verse anvan li. Sa ka fèt
          ak plis eleman, plis volim, oswa plis enèji nan melodi a.
        </p>

        <h3>Pratik</h3>
        <p>
          Òganize yon chante ak: Intro 8 bars, Verse 16 bars, Chorus 8
          bars, Outro 8 bars. Koute l soti nan kòmansman rive nan fen
          pou verifye tranzisyon yo koule byen.
        </p>
      `
    },
    {
      icon: "✂️",
      title: "Sampling & Sound Design",
      description:
        "Edit samples and create original sounds responsibly.",
      content: `
        <h3>Kisa Sampling Ye?</h3>
        <p>
          Sampling se lè ou pran yon pòsyon son (yon vye disk, yon
          anrejistreman, yon lòt enstriman) epi modifye l pou kreye
          nouvo materyèl mizikal.
        </p>

        <h3>Teknik Sampling Debaz</h3>
        <p>
          <strong>Chop:</strong> koupe yon sample an ti mòso<br>
          <strong>Pitch:</strong> chanje wotè son an (pi ba oswa pi wo)<br>
          <strong>Reverse:</strong> jwe son an nan sans opoze<br>
          <strong>Filter:</strong> retire oswa mete aksan sou sèten
          frekans<br>
          <strong>Time-Stretch:</strong> chanje vitès san chanje wotè
        </p>

        <h3>Sound Design</h3>
        <p>
          Sound design se kreye son de zewo, souvan ak sentetizè
          (synthesizers). Ou ka konbine plizyè "wave" debaz (sine,
          square, saw) pou kreye teksti inik.
        </p>

        <h3>Dwa Otè ak Etik</h3>
        <p>
          Itilize sèlman son ou kreye ou menm, son ki nan domèn piblik,
          oswa son ou gen yon lisans ("cleared sample") pou itilize.
          Itilize san lisans ka kreye pwoblèm legal grav pou pwojè
          komèsyal yo.
        </p>

        <h3>Pratik</h3>
        <p>
          Chwazi yon son senp (egzanp yon vwa, yon enstriman). Chope
          yon ti pòsyon, chanje pitch li, epi reverse li. Koute kijan
          ti chanjman sa yo transfòme son orijinal la totalman.
        </p>
      `
    },
    {
      icon: "🎚️",
      title: "Mixing & EQ",
      description:
        "Balance gain, EQ, panning and frequencies.",
      content: `
        <h3>Objektif Mixing</h3>
        <p>
          Mixing se pwosesis balanse tout eleman yon chante pou yo
          travay ansanm san yo pa "goumen" pou menm espas nan mix la.
        </p>

        <h3>Etap 1: Gain Staging</h3>
        <p>
          Anvan ou touche EQ, kòmanse ak bon volim debaz pou chak
          track. Si yon son deja twò fò oswa twò fèb, EQ p ap ka
          ranje pwoblèm nan kòrèkteman.
        </p>

        <h3>EQ (Equalization)</h3>
        <p>
          EQ ajiste volim diferan frekans (grav, medyòm, egi). Règ
          debaz: retire frekans ki pa nesesè pito ke ogmante sa ou
          renmen — sa kenbe mix la pwòp.
        </p>

        <h3>Panning</h3>
        <p>
          Panning plase son yo goch/dwat nan espas stereo a. Sa ede
          separe eleman yo pou yo pa tout "anpile" nan sant lan.
        </p>

        <h3>Evite Clipping</h3>
        <p>
          Clipping se lè volim la depase limit teknik la epi kreye
          yon son kase/distòsyon endezirab. Toujou kite yon ti "espas"
          (headroom) anvan volim maksimòm nan.
        </p>

        <h3>Separe Kick ak Bass</h3>
        <p>
          Paske yo pataje menm zòn frekans, itilize EQ pou "kreye
          espas": bese yon ti kras frekans kick la kote bass la fò,
          epi vice versa.
        </p>

        <h3>Pratik</h3>
        <p>
          Pran yon mix ak 4 eleman (kick, bass, melodi, vwa). Bese
          gain jeneral pou evite clipping, epi itilize EQ pou separe
          kick ak bass klèman.
        </p>
      `
    },
    {
      icon: "🔊",
      title: "Recording & Mastering",
      description:
        "Record clean audio and export a polished WAV mix.",
      content: `
        <h3>Anrejistreman Kalite</h3>
        <p>
          Yon bon anrejistreman kòmanse ak yon anviwònman trankil, yon
          mikwofòn byen plase, ak nivo gain ki pa clip. "Garbage in,
          garbage out" — si anrejistreman debaz la pa bon, mix/master
          pa ka sove l nèt.
        </p>

        <h3>Kisa Mastering Ye?</h3>
        <p>
          Mastering se dènye etap la, apre mixing. Li prepare mix
          final la pou l son konsistan sou tout sistèm son (telefòn,
          machin, klib) epi konpetitif ak lòt mizik komèsyal.
        </p>

        <h3>Eleman Mastering</h3>
        <p>
          <strong>EQ Final:</strong> ti ajisteman jeneral sou tout mix la<br>
          <strong>Compression:</strong> egalize dinamik la pou son ki
          plis konsistan<br>
          <strong>Limiting:</strong> ogmante volim jeneral san kreye
          clipping<br>
          <strong>Loudness:</strong> asire mizik la gen menm nivo fò
          ak lòt chante komèsyal
        </p>

        <h3>Verifye Anvan Export</h3>
        <p>
          Tcheke peak (pa depase 0 dB), tcheke dinamik (mix la pa dwe
          "plat"), epi koute mix la sou plizyè aparèy (kas, ti
          enseint, telefòn) pou konfime li son byen toupatou.
        </p>

        <h3>Export Fòma</h3>
        <p>
          Export an WAV (pa MP3) pou kenbe pi bon kalite posib. WAV se
          fòma "lossless" ki pa konprese/detwi done odyo yo.
        </p>

        <h3>Pratik</h3>
        <p>
          Tcheke peak mix ou a, verifye dinamik li, epi export li an
          WAV. Konpare volim li ak yon chante komèsyal ou renmen.
        </p>
      `
    },
    {
      icon: "🇭🇹",
      title: "Haitian Music Production",
      description:
        "Kompa, Rara, Rabòday and Twoubadou foundations.",
      content: `
        <h3>Kompa Dirèk</h3>
        <p>
          Kompa gen yon groove karakteristik ak gita ki jwe pattern
          repetitif, yon bass ki solid, ak yon seksyon tanbou/pèkisyon
          ki bay enèji san domine mix la. Tempo tipik: 100-130 BPM.
        </p>

        <h3>Rara</h3>
        <p>
          Rara itilize vaksin (bwat bwa long), tanbou, graj (metal
          rasp), ak klewon. Se yon mizik ki baze sou modèl apèl-repons
          (call and response) ak yon enèji mach/pwosesyon.
        </p>

        <h3>Rabòday</h3>
        <p>
          Rabòday se yon evolisyon modèn ki melanje eleman elektwonik
          ak rasin ayisyen, souvan ak tanbou elektwonik ki senkronize
          ak beat dans yo.
        </p>

        <h3>Twoubadou</h3>
        <p>
          Twoubadou se yon stil akoustik, souvan ak gita, marakas, ak
          vwa ki rakonte istwa lavi chak jou. Se rasin anpil lòt
          jenerasyon mizik ayisyen.
        </p>

        <h3>Enstriman Kle Yo</h3>
        <p>
          Tanbou, gita, vaksin, bas, ak vwa se fondasyon prèske tout
          stil sa yo. Konprann wòl chak enstriman ede w pwodwi yon son
          otantik.
        </p>

        <h3>Pratik</h3>
        <p>
          Kreye yon pattern tanbou ki respekte groove kompa a (pa
          egzanp, yon rythm ki gen yon "ti dekalaj" karakteristik).
          Ajoute yon gita ki repete yon pattern senp pou konplete l.
        </p>
      `
    },
    {
      icon: "🤖",
      title: "AI Music Workflow",
      description:
        "Use AI for ideas, lyrics, arrangement and production planning.",
      content: `
        <h3>AI Kòm Zouti Asistans</h3>
        <p>
          AI ka ede yon pwodiktè jenere lide rapid, men li pa ranplase
          kreyativite imen an — li se yon zouti pou akselere pwosesis
          la, pa yon "ranplasan" pou atis la.
        </p>

        <h3>Kote AI Ede</h3>
        <p>
          <strong>Brainstorming:</strong> jenere lide tit, tèm, oswa
          konsèp<br>
          <strong>Lyrics:</strong> ede ekri premye vèsyon parole, ou
          apre modifye yo ak vwa pèsonèl ou<br>
          <strong>Estrikti:</strong> pwopoze yon aranjman debaz pou
          eksperimante<br>
          <strong>Plan Pwodiksyon:</strong> ede òganize etap travay yo
        </p>

        <h3>Limit AI Yo</h3>
        <p>
          AI pa gen "gou" pèsonèl, pa konnen kontèks kiltirèl fen, ak
          li ka fè erè. Toujou tande rezilta l ak yon zòrèy kritik.
        </p>

        <h3>Responsablite Kreyatè a</h3>
        <p>
          Verifye tout rezilta AI bay yo anvan w pibliye yo. Pwoteje
          orijinalite w — sèvi ak AI kòm yon pwen depa, pa yon
          pwodwi final ou kopye san chanjman.
        </p>

        <h3>Etik ak Transparans</h3>
        <p>
          Nan anpil ka, li bon pratik pou konnen lè ou itilize zouti
          AI nan pwosesis kreyatif ou, sitou si w travay ak lòt atis
          oswa kliyan.
        </p>

        <h3>Pratik</h3>
        <p>
          Itilize yon zouti AI pou jenere 3 lide tit chante sou yon tèm
          ou chwazi. Analize yo, chwazi pi bon an, epi modifye l ak
          pwòp vwa kreyatif ou.
        </p>
      `
    }
  ];
  const translations = {
    ht: {
      progress: "PWOGRÈ",
      open: "OUVRI KOU A",
      complete: "✓ MAKE KOU A FINI",
      done: "✓ KOU FINI"
    },
    fr: {
      progress: "PROGRÈS",
      open: "OUVRIR LE COURS",
      complete: "✓ MARQUER TERMINÉ",
      done: "✓ COURS TERMINÉ"
    },
    en: {
      progress: "PROGRESS",
      open: "OPEN COURSE",
      complete: "✓ MARK COMPLETE",
      done: "✓ COURSE COMPLETE"
    }
  };

  let language =
    localStorage.getItem("promaxSchoolLanguage") || "ht";

  let completedCourses = JSON.parse(
    localStorage.getItem("promaxCompletedCourses") || "[]"
  );

  let activeCourse = 0;

  function renderCourses() {
    const grid = get("courseGrid");

    grid.innerHTML = "";

    courses.forEach((course, index) => {
      const card = document.createElement("article");

      const completed =
        completedCourses.includes(index);

      card.className =
        "course" + (completed ? " done" : "");

      card.innerHTML = `
        <span class="course-icon">${course.icon}</span>
        <h3>${index + 1}. ${course.title}</h3>
        <p>${course.description}</p>
        <button type="button">
          ${
            completed
              ? translations[language].done
              : translations[language].open
          } →
        </button>
      `;

      card.addEventListener(
        "click",
        () => openLesson(index)
      );

      grid.appendChild(card);
    });

    updateProgress();
  }

  function openLesson(index) {
    activeCourse = index;

    const course = courses[index];

    get("lessonIcon").textContent = course.icon;

    get("lessonTitle").textContent =
      `${index + 1}. ${course.title}`;

    get("lessonBody").innerHTML = course.content;

    get("completeLesson").textContent =
      completedCourses.includes(index)
        ? translations[language].done
        : translations[language].complete;

    get("lessonModal").classList.add("open");
  }

  function closeLesson() {
    get("lessonModal").classList.remove("open");
  }

  function updateProgress() {
    const numberCompleted =
      completedCourses.length;

    get("progressText").textContent =
      `${translations[language].progress}: ` +
      `${numberCompleted} / 10`;

    get("progressBar").style.width =
      `${numberCompleted * 10}%`;
  }

  get("completeLesson").addEventListener(
    "click",
    () => {
      if (!completedCourses.includes(activeCourse)) {
        completedCourses.push(activeCourse);
      }

      localStorage.setItem(
        "promaxCompletedCourses",
        JSON.stringify(completedCourses)
      );

      renderCourses();
      closeLesson();
    }
  );

  get("closeLesson").addEventListener(
    "click",
    closeLesson
  );

  get("lessonModal").addEventListener(
    "click",
    (event) => {
      if (event.target === get("lessonModal")) {
        closeLesson();
      }
    }
  );

  function applyLanguage(selectedLanguage) {
    language = selectedLanguage;

    document.documentElement.lang =
      selectedLanguage;

    document
      .querySelectorAll("[data-ht][data-fr][data-en]")
      .forEach((element) => {
        element.textContent =
          element.getAttribute(
            `data-${selectedLanguage}`
          );
      });

    document
      .querySelectorAll("[data-lang]")
      .forEach((button) => {
        button.classList.toggle(
          "active",
          button.dataset.lang === selectedLanguage
        );
      });

    localStorage.setItem(
      "promaxSchoolLanguage",
      selectedLanguage
    );

    renderCourses();
  }

  document
    .querySelectorAll("[data-lang]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => applyLanguage(button.dataset.lang)
      );
    });

  get("menu").addEventListener(
    "click",
    () => get("nav").classList.toggle("open")
  );

  document
    .querySelectorAll("nav a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        () => get("nav").classList.remove("open")
      );
    });

  // ============================================
  // PWOFESÈ AI — KOUNYE A KONEKTE AK GEMINI
  // (Sèl pati sa a chanje; tout rès fichye a
  // rete egzakteman jan li te ye)
  // ============================================

  const GEMINI_API_KEY =
    "AQ.Ab8RN6KBB-sJlVuUGq3llvBcLuIXIR_BW39LybDlcnFOW_a44A";

  const GEMINI_MODEL = "gemini-3.6-flash";

  const PROFESSOR_CONTEXT =
    "Ou se yon pwofesè AI k ap ede elèv yo nan " +
    "PRO-MAX Beat Maker AI School, yon lekòl " +
    "pwodiksyon mizik. Reponn kesyon yo klè, senp, " +
    "an kreyòl ayisyen (sof si elèv la poze kesyon " +
    "an nan yon lòt lang), ak yon ton pwofesyonèl " +
    "men amikal. Sijè yo enkli: BPM, tempo, ritm, " +
    "melodi, akò, bass, aranjman chante, sampling, " +
    "sound design, mixing, EQ, mastering, mizik " +
    "ayisyen (Kompa, Rara, Rabòday, Twoubadou), ak " +
    "itilizasyon AI nan pwodiksyon mizikal.";

  async function getProfessorReply(question) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      PROFESSOR_CONTEXT +
                      "\n\nKesyon elèv la: " +
                      question
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();

      if (data.error) {
        return "Erè: " + data.error.message;
      }

      return data.candidates[0].content.parts[0].text;

    } catch (error) {
      return (
        "Pa gen koneksyon kounye a. " +
        "Eseye ankò nan yon ti moman."
      );
    }
  }

  get("askForm").addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      const question =
        get("question").value.trim();

      if (!question) {
        return;
      }

      const safeQuestion =
        question.replace(/[<>]/g, "");

      const userMessage =
        document.createElement("div");

      userMessage.className = "user";
      userMessage.textContent = safeQuestion;

      get("messages").appendChild(userMessage);

      get("question").value = "";

      const professorMessage =
        document.createElement("div");

      professorMessage.className = "bot";

      professorMessage.textContent =
        "🎓 Ap reflechi...";

      get("messages").appendChild(professorMessage);

      get("messages").scrollTop =
        get("messages").scrollHeight;

      const reply = await getProfessorReply(question);

      professorMessage.textContent = "🎓 " + reply;

      get("messages").scrollTop =
        get("messages").scrollHeight;
    }
  );

  const examQuestions = [
    {
      question: "Kisa BPM kontwole?",
      answers: [
        "Vitès mizik la",
        "Koulè logo a",
        "Non atis la"
      ],
      correct: 0
    },
    {
      question: "Ki eleman ki bay beat la plis pwa?",
      answers: [
        "Kick",
        "Tit chante a",
        "Cover art"
      ],
      correct: 0
    },
    {
      question: "Kisa EQ sèvi pou fè?",
      answers: [
        "Jere frekans",
        "Ekri modpas",
        "Kreye kont"
      ],
      correct: 0
    },
    {
      question:
        "Ki fòma ki bon pou export kalite siperyè?",
      answers: [
        "WAV",
        "JPG",
        "HTML"
      ],
      correct: 0
    },
    {
      question:
        "Ki wòl AI nan pwodiksyon an?",
      answers: [
        "Asiste kreyatè a",
        "Ranplase tout desizyon imen",
        "Efase dwa otè"
      ],
      correct: 0
    }
  ];

  function renderExam() {
    get("examForm").innerHTML =
      examQuestions
        .map((question, questionIndex) => {
          const answers =
            question.answers
              .map((answer, answerIndex) => {
                return `
                  <label>
                    <input
                      type="radio"
                      name="q${questionIndex}"
                      value="${answerIndex}"
                      required
                    >
                    ${answer}
                  </label>
                `;
              })
              .join("");

          return `
            <div class="question">
              <h3>
                ${questionIndex + 1}.
                ${question.question}
              </h3>
              ${answers}
            </div>
          `;
        })
        .join("") +
      `
        <button class="btn primary" type="submit">
          SUBMIT EXAM
        </button>
        <p id="examResult"></p>
      `;

    get("examForm").addEventListener(
      "submit",
      gradeExam
    );
  }

  function gradeExam(event) {
    event.preventDefault();

    const formData =
      new FormData(event.target);

    let score = 0;

    examQuestions.forEach(
      (question, index) => {
        const selectedAnswer =
          Number(formData.get(`q${index}`));

        if (selectedAnswer === question.correct) {
          score++;
        }
      }
    );

    const passed = score >= 4;

    localStorage.setItem(
      "promaxExamPassed",
      passed ? "yes" : "no"
    );

    get("examResult").textContent =
      `SCORE: ${score}/5 — ` +
      (passed
        ? "PASSED ✓"
        : "REVIEW AND TRY AGAIN");
  }

  get("certificateBtn").addEventListener(
    "click",
    () => {
      const studentName =
        get("studentName").value.trim();

      if (!studentName) {
        get("certificateMessage").textContent =
          "Ekri non konplè elèv la.";

        return;
      }

      const examPassed =
        localStorage.getItem("promaxExamPassed") ===
        "yes";

      if (
        completedCourses.length < 10 ||
        !examPassed
      ) {
        get("certificateMessage").textContent =
          "Fini 10 kou yo epi pase egzamen an anvan.";

        return;
      }

      const safeName =
        studentName.replace(/[<>]/g, "");

      const certificateWindow =
        window.open("", "_blank");

      if (!certificateWindow) {
        get("certificateMessage").textContent =
          "Browser la bloke sètifika a. Pèmèt pop-up epi eseye ankò.";

        return;
      }

      certificateWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>PRO-MAX Certificate</title>
        </head>
        <body style="
          min-height:100vh;
          box-sizing:border-box;
          margin:0;
          padding:70px;
          border:14px double #ff7900;
          color:#ffad4d;
          background:#000000;
          font-family:Arial,sans-serif;
          text-align:center;
        ">
          <h3>BSS1815 PRO-MAX DMP</h3>

          <h1 style="
            color:#ff7900;
            font-size:48px;
          ">
            CERTIFICATE OF COMPLETION
          </h1>

          <p>This certifies that</p>

          <h2>${safeName}</h2>

          <p>
            successfully completed
            PRO-MAX Beat Maker AI School.
          </p>

          <h3>${new Date().toLocaleDateString()}</h3>

          <button
            onclick="window.print()"
            style="
              margin-top:25px;
              padding:12px 20px;
              border:1px solid #ff7900;
              color:#000000;
              background:#ff7900;
              font-weight:bold;
            "
          >
            PRINT / SAVE PDF
          </button>
        </body>
        </html>
      `);

      certificateWindow.document.close();

      get("certificateMessage").textContent =
        "Sètifika a pare.";
    }
  );

  get("year").textContent =
    new Date().getFullYear();

  applyLanguage(language);
  renderExam();
})();

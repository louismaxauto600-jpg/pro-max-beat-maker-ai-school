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
        <h3>Objektif</h3>
        <p>
          Konprann kijan yon beat konstwi ak tempo,
          bars, measures ak tracks.
        </p>
        <h3>Pratik</h3>
        <p>
          Ouvri Beat Maker la, chwazi 120 BPM epi
          kreye yon pattern 8-step.
        </p>
      `
    },
    {
      icon: "⏱️",
      title: "BPM, Tempo & Rhythm",
      description:
        "Control timing, groove, swing and rhythmic structure.",
      content: `
        <h3>BPM</h3>
        <p>
          BPM vle di beats per minute.
          Li kontwole vitès mizik la.
        </p>
        <h3>Pratik</h3>
        <p>
          Konpare yon beat 90 BPM ak yon beat 120 BPM.
        </p>
      `
    },
    {
      icon: "🥁",
      title: "Drums & Percussion",
      description:
        "Kick, snare, hi-hat, clap and percussion patterns.",
      content: `
        <h3>Fondasyon</h3>
        <p>
          Kick bay pwa, snare bay aksan,
          hi-hat bay mouvman.
        </p>
        <h3>Pratik</h3>
        <p>
          Mete kick sou etap 1 ak 5,
          epi mete snare sou etap 3 ak 7.
        </p>
      `
    },
    {
      icon: "🎹",
      title: "Chords, Melody & Bass",
      description:
        "Build harmony, melodies, hooks and basslines.",
      content: `
        <h3>Amoni</h3>
        <p>
          Chords sipòte melodi a.
          Bassline konekte amoni ak ritm.
        </p>
        <h3>Pratik</h3>
        <p>
          Kreye yon melodi 4-bar epi ajoute
          yon bassline senp.
        </p>
      `
    },
    {
      icon: "🎼",
      title: "Song Arrangement",
      description:
        "Intro, verse, chorus, bridge, breakdown and outro.",
      content: `
        <h3>Estrikti</h3>
        <p>
          Yon aranjman klè mennen moun
          nan yon vwayaj mizikal.
        </p>
        <h3>Pratik</h3>
        <p>
          Òganize Intro 8 bars, Verse 16,
          Chorus 8 ak Outro 8.
        </p>
      `
    },
    {
      icon: "✂️",
      title: "Sampling & Sound Design",
      description:
        "Edit samples and create original sounds responsibly.",
      content: `
        <h3>Sampling</h3>
        <p>
          Koupe, pitch, reverse ak filtre yon son
          pou kreye nouvo materyèl.
        </p>
        <h3>Dwa</h3>
        <p>
          Itilize son ou kreye oswa son
          ou gen lisans pou itilize.
        </p>
      `
    },
    {
      icon: "🎚️",
      title: "Mixing & EQ",
      description:
        "Balance gain, EQ, panning and frequencies.",
      content: `
        <h3>Mixing</h3>
        <p>
          Kòmanse ak bon volume anvan EQ.
          Retire frekans ki pa nesesè.
        </p>
        <h3>Pratik</h3>
        <p>
          Bese gain pou evite clipping
          epi separe kick ak bass.
        </p>
      `
    },
    {
      icon: "🔊",
      title: "Recording & Mastering",
      description:
        "Record clean audio and export a polished WAV mix.",
      content: `
        <h3>Mastering</h3>
        <p>
          Mastering prepare mix final la
          pou diferan sistèm son.
        </p>
        <h3>Pratik</h3>
        <p>
          Tcheke peak, dinamik epi export an WAV.
        </p>
      `
    },
    {
      icon: "🇭🇹",
      title: "Haitian Music Production",
      description:
        "Kompa, Rara, Rabòday and Twoubadou foundations.",
      content: `
        <h3>Idantite</h3>
        <p>
          Etidye groove tanbou, gita,
          vaksin, bas ak konpa dirèk.
        </p>
        <h3>Pratik</h3>
        <p>
          Kreye yon pattern ki respekte
          rasin mizik ayisyen an.
        </p>
      `
    },
    {
      icon: "🤖",
      title: "AI Music Workflow",
      description:
        "Use AI for ideas, lyrics, arrangement and production planning.",
      content: `
        <h3>AI kòm asistan</h3>
        <p>
          AI ka ede devlope lide, tit,
          estrikti ak plan pwodiksyon.
        </p>
        <h3>Responsablite</h3>
        <p>
          Verifye rezilta yo epi pwoteje
          orijinalite ak dwa kreyatè yo.
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

  const professorAnswers = {
    bpm:
      "BPM vle di beats per minute. Pou konpa, ou ka kòmanse anviwon 90–120 BPM epi ajiste selon groove la.",

    tempo:
      "Tempo se vitès mizik la. Yon BPM ba bay yon mouvman pi dous; yon BPM wo bay plis enèji.",

    ritm:
      "Kòmanse ak kick, snare ak hi-hat. Fè yon pattern senp 8-step, apre sa ajoute variation.",

    rhythm:
      "Start with kick, snare and hi-hat. Build a simple 8-step pattern, then add variations.",

    melodi:
      "Chwazi yon scale, kreye yon motif kout 2–4 bars epi repete li ak ti chanjman.",

    melody:
      "Choose a scale, create a short 2–4 bar motif, then repeat it with small variations.",

    konpa:
      "Pou konpa, konsantre sou groove gita, bass, kick ak tanbou ki rete byen kole ansanm.",

    kompa:
      "Pou konpa, konsantre sou groove gita, bass, kick ak tanbou ki rete byen kole ansanm.",

    rara:
      "Rara sèvi ak vaksin, tanbou, graj, klewon ak percussion. Respekte apèl-repons ak enèji mach la.",

    mix:
      "Kòmanse ak gain staging. Balanse volume yo, retire frekans ki pa nesesè epi evite clipping.",

    mastering:
      "Mastering se dènye etap la. Verifye EQ, dinamik, peak epi export yon WAV kalite siperyè.",

    master:
      "Mastering se dènye etap la. Verifye EQ, dinamik, peak epi export yon WAV kalite siperyè.",

    ai:
      "Sèvi ak AI pou brainstorming, lyrics, chord ideas ak plan aranjman. Se ou menm ki pran desizyon kreyatif final yo."
  };

  function getProfessorReply(question) {
    const normalizedQuestion =
      question.toLowerCase();

    for (const keyword in professorAnswers) {
      if (normalizedQuestion.includes(keyword)) {
        return professorAnswers[keyword];
      }
    }

    return (
      "Bon kesyon. Di m si kestyon an konsène BPM, " +
      "ritm, melodi, konpa, rara, mixing, mastering " +
      "oswa AI pou m ka gide w etap pa etap."
    );
  }

  get("askForm").addEventListener(
    "submit",
    (event) => {
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

      const professorMessage =
        document.createElement("div");

      professorMessage.className = "bot";

      professorMessage.textContent =
        "🎓 " + getProfessorReply(question);

      get("messages").appendChild(userMessage);
      get("messages").appendChild(professorMessage);

      get("question").value = "";

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

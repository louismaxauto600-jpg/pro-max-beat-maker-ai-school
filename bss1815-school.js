(() => {
  "use strict";

  const get = (id) => document.getElementById(id);

  const GEMINI_API_KEY = "AQ.Ab8RN6KBB-sJlVuUGq3llvBcLuIXIR_BW39LybDlcnFOW_a44A";
  const GEMINI_MODEL = "gemini-3.6-flash";
  const PROFESSOR_CONTEXT = "Ou se yon pwofesè k ap ede elèv yo nan yon lekòl imobilye ak asirans ki rele BSS1815 PRO-MAX DMP. Reponn kesyon yo klè, senp, an kreyòl ayisyen (sof si elèv la poze kesyon an nan yon lòt lang), ak yon ton pwofesyonèl men amikal. Bay egzanp pratik lè sa posib.";

  const courses = [
    {
      icon: "🏠",
      title: "Entwodiksyon nan Imobilye",
      description: "Konsèp debaz, wòl ajan an, ak jan endistri a fonksyone.",
      content: `
        <h3>Objektif</h3>
        <p>Konprann wòl yon ajan imobilye ak etap debaz nan yon tranzaksyon.</p>
        <h3>Pratik</h3>
        <p>Idantifye 3 etap prensipal nan achte yon kay.</p>
      `
    },
    {
      icon: "📜",
      title: "Lisans ak Règleman",
      description: "Kondisyon legal pou vin yon ajan lisansye.",
      content: `
        <h3>Lisans</h3>
        <p>Konnen kondisyon leta a mande pou w kalifye kòm ajan imobilye.</p>
        <h3>Pratik</h3>
        <p>Fè lis dokiman ou bezwen pou aplike pou lisans lan.</p>
      `
    },
    {
      icon: "🤝",
      title: "Kontra ak Negosyasyon",
      description: "Konprann kontra vant, ofrandes, ak jan pou negosye.",
      content: `
        <h3>Kontra</h3>
        <p>Yon bon kontra pwoteje tou de pati yo nan yon tranzaksyon.</p>
        <h3>Pratik</h3>
        <p>Analize yon egzanp ofrand achte epi idantifye kloz enpòtan yo.</p>
      `
    },
    {
      icon: "💰",
      title: "Finansman ak Ipotèk",
      description: "Kijan prè ipotèkè fonksyone ak opsyon finansman.",
      content: `
        <h3>Ipotèk</h3>
        <p>Yon ipotèk se yon prè ki sèvi kay la kòm garanti.</p>
        <h3>Pratik</h3>
        <p>Kalkile yon egzanp peman mansyèl senp ak yon to enterè fiks.</p>
      `
    },
    {
      icon: "🔍",
      title: "Evalyasyon Pwopriyete",
      description: "Kijan pou detèmine valè yon pwopriyete.",
      content: `
        <h3>Evalyasyon</h3>
        <p>Konpare pwopriyete similè nan menm zòn pou estime yon pri jis.</p>
        <h3>Pratik</h3>
        <p>Fè yon konparezon senp ant 2 kay nan menm katye.</p>
      `
    },
    {
      icon: "🛡️",
      title: "Fondasyon Asirans",
      description: "Kisa asirans ye ak diferan kalite polis.",
      content: `
        <h3>Asirans</h3>
        <p>Asirans pwoteje kont pèt finansye enprevi.</p>
        <h3>Pratik</h3>
        <p>Konpare yon polis asirans kay ak yon polis asirans lokatè.</p>
      `
    },
    {
      icon: "📋",
      title: "Reklamasyon ak Polis",
      description: "Kijan pou trete yon reklamasyon asirans kòrèkteman.",
      content: `
        <h3>Reklamasyon</h3>
        <p>Yon reklamasyon byen dokimante akselere pwosesis peman an.</p>
        <h3>Pratik</h3>
        <p>Fè lis dokiman nesesè pou soumèt yon reklamasyon apre yon dega.</p>
      `
    },
    {
      icon: "🧾",
      title: "Etik ak Konfòmite",
      description: "Règ etik ki gouvène pwofesyon an.",
      content: `
        <h3>Etik</h3>
        <p>Onètte ak transparans se fondasyon konfyans kliyan an.</p>
        <h3>Pratik</h3>
        <p>Idantifye yon sitiyasyon konfli enterè ak kijan pou jere l.</p>
      `
    },
    {
      icon: "📈",
      title: "Estrateji Vant ak Maketing",
      description: "Kijan pou jwenn ak kenbe kliyan.",
      content: `
        <h3>Vant</h3>
        <p>Yon bon estrateji konekte ofrand la ak bezwen kliyan an.</p>
        <h3>Pratik</h3>
        <p>Prepare yon deskripsyon kout pou yon pwopriyete oswa yon polis.</p>
      `
    },
    {
      icon: "🤖",
      title: "AI nan Imobilye ak Asirans",
      description: "Itilize AI pou analiz, redaksyon ak sipò kliyan.",
      content: `
        <h3>AI kòm asistan</h3>
        <p>AI ka ede analize done, ekri deskripsyon ak reponn kesyon kliyan.</p>
        <h3>Responsablite</h3>
        <p>Toujou verifye enfòmasyon AI bay avan w pataje l ak kliyan.</p>
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

  let language = localStorage.getItem("bss1815SchoolLanguage") || "ht";
  let completedCourses = JSON.parse(localStorage.getItem("bss1815CompletedCourses") || "[]");
  let activeCourse = 0;

  function renderCourses() {
    const grid = get("courseGrid");
    grid.innerHTML = "";

    courses.forEach((course, index) => {
      const card = document.createElement("article");
      const completed = completedCourses.includes(index);
      card.className = "course" + (completed ? " done" : "");

      card.innerHTML = `
        <span class="course-icon">${course.icon}</span>
        <h3>${index + 1}. ${course.title}</h3>
        <p>${course.description}</p>
        <button type="button">
          ${completed ? translations[language].done : translations[language].open} →
        </button>
      `;

      card.addEventListener("click", () => openLesson(index));
      grid.appendChild(card);
    });

    updateProgress();
  }

  function openLesson(index) {
    activeCourse = index;
    const course = courses[index];

    get("lessonIcon").textContent = course.icon;
    get("lessonTitle").textContent = `${index + 1}. ${course.title}`;
    get("lessonBody").innerHTML = course.content;
    get("completeLesson").textContent = completedCourses.includes(index)
      ? translations[language].done
      : translations[language].complete;

    get("lessonModal").classList.add("open");
  }

  function closeLesson() {
    get("lessonModal").classList.remove("open");
  }

  function updateProgress() {
    const numberCompleted = completedCourses.length;
    get("progressText").textContent = `${translations[language].progress}: ${numberCompleted} / 10`;
    get("progressBar").style.width = `${numberCompleted * 10}%`;
  }

  get("completeLesson").addEventListener("click", () => {
    if (!completedCourses.includes(activeCourse)) {
      completedCourses.push(activeCourse);
    }
    localStorage.setItem("bss1815CompletedCourses", JSON.stringify(completedCourses));
    renderCourses();
    closeLesson();
  });

  get("closeLesson").addEventListener("click", closeLesson);

  get("lessonModal").addEventListener("click", (event) => {
    if (event.target === get("lessonModal")) closeLesson();
  });

  function applyLanguage(selectedLanguage) {
    language = selectedLanguage;
    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-ht][data-fr][data-en]").forEach((element) => {
      element.textContent = element.getAttribute(`data-${selectedLanguage}`);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === selectedLanguage);
    });

    localStorage.setItem("bss1815SchoolLanguage", selectedLanguage);
    renderCourses();
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  get("menu").addEventListener("click", () => get("nav").classList.toggle("open"));

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => get("nav").classList.remove("open"));
  });

  // ============================================
  // PWOFESÈ AI — Kounye a itilize Gemini reyèl
  // olye de yon lis repons fikse davans
  // ============================================
  async function getProfessorReply(question) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { parts: [{ text: PROFESSOR_CONTEXT + "\n\nKesyon elèv la: " + question }] }
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
      return "Pa gen koneksyon kounye a. Eseye ankò nan yon ti moman.";
    }
  }

  get("askForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const question = get("question").value.trim();
    if (!question) return;

    const safeQuestion = question.replace(/[<>]/g, "");

    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = safeQuestion;
    get("messages").appendChild(userMessage);

    get("question").value = "";

    const thinkingMessage = document.createElement("div");
    thinkingMessage.className = "bot";
    thinkingMessage.textContent = "🎓 Ap reflechi...";
    get("messages").appendChild(thinkingMessage);
    get("messages").scrollTop = get("messages").scrollHeight;

    const reply = await getProfessorReply(question);
    thinkingMessage.textContent = "🎓 " + reply;

    get("messages").scrollTop = get("messages").scrollHeight;
  });

  const examQuestions = [
    {
      question: "Kisa yon ipotèk ye?",
      answers: ["Yon prè ki sèvi kay la kòm garanti", "Yon kalite asirans", "Yon dokiman lisans"],
      correct: 0
    },
    {
      question: "Kisa ki pwoteje yon kliyan nan yon reklamasyon asirans?",
      answers: ["Dokimantasyon byen fèt", "Koulè polis la", "Non ajan an"],
      correct: 0
    },
    {
      question: "Kisa etik pwofesyonèl mande?",
      answers: ["Onètte ak transparans", "Pi gwo pri posib", "Kache enfòmasyon"],
      correct: 0
    },
    {
      question: "Ki dokiman ki enpòtan pou soumèt yon reklamasyon?",
      answers: ["Prèv dega ak polis la", "Yon deskripsyon kout", "Non atis prefere w"],
      correct: 0
    },
    {
      question: "Ki wòl AI nan travay imobilye/asirans?",
      answers: ["Asiste ajan an nan analiz ak redaksyon", "Ranplase tout desizyon legal", "Siyen kontra pou kliyan an"],
      correct: 0
    }
  ];

  function renderExam() {
    get("examForm").innerHTML =
      examQuestions
        .map((question, questionIndex) => {
          const answers = question.answers
            .map((answer, answerIndex) => `
              <label>
                <input type="radio" name="q${questionIndex}" value="${answerIndex}" required>
                ${answer}
              </label>
            `)
            .join("");

          return `
            <div class="question">
              <h3>${questionIndex + 1}. ${question.question}</h3>
              ${answers}
            </div>
          `;
        })
        .join("") +
      `
        <button class="btn primary" type="submit">SUBMIT EXAM</button>
        <p id="examResult"></p>
      `;

    get("examForm").addEventListener("submit", gradeExam);
  }

  function gradeExam(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let score = 0;

    examQuestions.forEach((question, index) => {
      const selectedAnswer = Number(formData.get(`q${index}`));
      if (selectedAnswer === question.correct) score++;
    });

    const passed = score >= 4;
    localStorage.setItem("bss1815ExamPassed", passed ? "yes" : "no");

    get("examResult").textContent =
      `SCORE: ${score}/5 — ` + (passed ? "PASSED ✓" : "REVIEW AND TRY AGAIN");
  }

  get("certificateBtn").addEventListener("click", () => {
    const studentName = get("studentName").value.trim();

    if (!studentName) {
      get("certificateMessage").textContent = "Ekri non konplè elèv la.";
      return;
    }

    const examPassed = localStorage.getItem("bss1815ExamPassed") === "yes";

    if (completedCourses.length < 10 || !examPassed) {
      get("certificateMessage").textContent = "Fini 10 kou yo epi pase egzamen an anvan.";
      return;
    }

    const safeName = studentName.replace(/[<>]/g, "");
    const certificateWindow = window.open("", "_blank");

    if (!certificateWindow) {
      get("certificateMessage").textContent = "Browser la bloke sètifika a. Pèmèt pop-up epi eseye ankò.";
      return;
    }

    certificateWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head><title>BSS1815 Certificate</title></head>
      <body style="
        min-height:100vh; box-sizing:border-box; margin:0; padding:70px;
        border:14px double #ff7900; color:#ffad4d; background:#000000;
        font-family:Arial,sans-serif; text-align:center;
      ">
        <h3>BSS1815 PRO-MAX DMP</h3>
        <h1 style="color:#ff7900; font-size:48px;">CERTIFICATE OF COMPLETION</h1>
        <p>This certifies that</p>
        <h2>${safeName}</h2>
        <p>successfully completed BSS1815 Real Estate & Insurance School.</p>
        <h3>${new Date().toLocaleDateString()}</h3>
        <button onclick="window.print()" style="
          margin-top:25px; padding:12px 20px; border:1px solid #ff7900;
          color:#000000; background:#ff7900; font-weight:bold;
        ">PRINT / SAVE PDF</button>
      </body>
      </html>
    `);

    certificateWindow.document.close();
    get("certificateMessage").textContent = "Sètifika a pare.";
  });

  get("year").textContent = new Date().getFullYear();

  applyLanguage(language);
  renderExam();
})();

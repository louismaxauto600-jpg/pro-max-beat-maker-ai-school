(() => {
  "use strict";

  const get = (id) => document.getElementById(id);

  const GEMINI_API_KEY = "AQ.Ab8RN6KBB-sJlVuUGq3llvBcLuIXIR_BW39LybDlcnFOW_a44A";
  const GEMINI_MODEL = "gemini-3.6-flash";
  const PROFESSOR_CONTEXT = "Ou se yon pwofesè AI k ap ede elèv yo nan PRO-MAX Beat Maker AI School. Reponn kesyon yo klè, senp, an kreyòl ayisyen (sof si elèv la poze kesyon an nan yon lòt lang), ak yon ton pwofesyonèl men amikal.";

  async function getProfessorReply(question) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: PROFESSOR_CONTEXT + "\n\nKesyon: " + question }] }]
          })
        }
      );
      const data = await response.json();
      if (data.error) return "Erè: " + data.error.message;
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      return "Pa gen koneksyon kounye a. Eseye ankò.";
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

    const botMessage = document.createElement("div");
    botMessage.className = "bot";
    botMessage.textContent = "🎓 Ap reflechi...";
    get("messages").appendChild(botMessage);
    get("messages").scrollTop = get("messages").scrollHeight;

    const reply = await getProfessorReply(question);
    botMessage.textContent = "🎓 " + reply;
    get("messages").scrollTop = get("messages").scrollHeight;
  });
})();


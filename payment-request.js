// ============================================
// PAYMENT-REQUEST.JS
// Ranplase self-generate sètifika a ak yon demand
// peman ki sere nan Firestore pou admin verifye
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyB24Sbq_ud2qSFtdHwRhiKelokeIjCtDuY",
  authDomain: "briyant-soley-signo-1815.firebaseapp.com",
  projectId: "briyant-soley-signo-1815",
  storageBucket: "briyant-soley-signo-1815.firebasestorage.app",
  messagingSenderId: "873317957685",
  appId: "1:873317957685:web:1bb4bb30831a058399717c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

function get(id) {
  return document.getElementById(id);
}

get("certificateBtn").addEventListener("click", async () => {
  const studentName = get("studentName").value.trim();

  if (!studentName) {
    get("certificateMessage").textContent = "Ekri non konplè elèv la.";
    return;
  }

  const completedCourses = JSON.parse(
    localStorage.getItem("promaxCompletedCourses") || "[]"
  );
  const examPassed = localStorage.getItem("promaxExamPassed") === "yes";

  if (completedCourses.length < 10 || !examPassed) {
    get("certificateMessage").textContent =
      "Fini 10 kou yo epi pase egzamen an anvan.";
    return;
  }

  const studentPhone = get("studentPhone")
    ? get("studentPhone").value.trim()
    : "";

  if (!studentPhone) {
    get("certificateMessage").textContent =
      "Ekri nimewo telefòn ou (sa a ki dwe voye peman NatCash/MonCash la).";
    return;
  }

  get("certificateBtn").disabled = true;
  get("certificateBtn").textContent = "Ap voye demand...";

  try {
    await db.collection("certificate_requests").add({
      studentName: studentName,
      studentPhone: studentPhone,
      examPassed: true,
      coursesCompleted: completedCourses.length,
      paymentConfirmed: false,
      paymentMethod: null,
      requestedAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    get("certificateMessage").innerHTML =
      "✓ Demand ou voye! Fè peman ou nan MonCash oswa NatCash " +
      "(+509 42 54 4447), epi tann admin konfime peman an anvan " +
      "sètifika ou voye ba ou pa WhatsApp oswa imèl.";

  } catch (error) {
    get("certificateMessage").textContent =
      "Erè: pa t ka voye demand la. Eseye ankò.";
  } finally {
    get("certificateBtn").disabled = false;
    get("certificateBtn").textContent = "VOYE DEMAND SÈTIFIKA";
  }
});


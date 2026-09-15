// ============================================
// ADMIN-CERTIFICATES.JS
// Paj admin sèlman — konfime peman + jenere sètifika
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyB24Sbq_ud2qSFtdHwRhiKelokeIjCtDuY",
  authDomain: "briyant-soley-signo-1815.firebaseapp.com",
  projectId: "briyant-soley-signo-1815",
  storageBucket: "briyant-soley-signo-1815.firebasestorage.app",
  messagingSenderId: "873317957685",
  appId: "1:873317957685:web:1bb4bb30831a058399717c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const get = (id) => document.getElementById(id);

// ============================================
// LOGIN GATE — sèlman admin ka wè paj sa a
// ============================================
get("loginBtn").addEventListener("click", async () => {
  const email = get("adminEmail").value.trim();
  const password = get("adminPassword").value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    get("loginError").textContent = "Imèl oswa modpas pa kòrèk.";
  }
});

auth.onAuthStateChanged((user) => {
  if (user) {
    get("loginGate").style.display = "none";
    get("adminPanel").style.display = "block";
    loadRequests();
  } else {
    get("loginGate").style.display = "block";
    get("adminPanel").style.display = "none";
  }
});

// ============================================
// LIS DEMAND SÈTIFIKA
// ============================================
function loadRequests() {
  db.collection("certificate_requests")
    .orderBy("requestedAt", "desc")
    .onSnapshot((snapshot) => {
      const list = get("requestList");
      list.innerHTML = "";

      if (snapshot.empty) {
        list.innerHTML = "<p>Pa gen demand kounye a.</p>";
        return;
      }

      snapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        const confirmed = data.paymentConfirmed === true;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${data.studentName}</h3>
          <p>📞 ${data.studentPhone}</p>
          <p>Kou fini: ${data.coursesCompleted}/10</p>
          <p>
            Estati peman:
            <span class="badge ${confirmed ? "confirmed" : "pending"}">
              ${confirmed ? "PEYE ✓" : "AP TANN PEMAN"}
            </span>
          </p>
        `;

        if (!confirmed) {
          const confirmBtn = document.createElement("button");
          confirmBtn.className = "btn-confirm";
          confirmBtn.textContent = "Konfime peman resevwa";
          confirmBtn.addEventListener("click", () => confirmPayment(id));
          card.appendChild(confirmBtn);
        } else {
          const certBtn = document.createElement("button");
          certBtn.className = "btn-cert";
          certBtn.textContent = "Jenere Sètifika (PDF)";
          certBtn.addEventListener("click", () => generateCertificate(data));
          card.appendChild(certBtn);
        }

        list.appendChild(card);
      });
    });
}

async function confirmPayment(requestId) {
  await db.collection("certificate_requests").doc(requestId).update({
    paymentConfirmed: true,
    confirmedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function generateCertificate(data) {
  const safeName = data.studentName.replace(/[<>]/g, "");
  const certificateWindow = window.open("", "_blank");

  if (!certificateWindow) {
    alert("Browser la bloke pop-up. Pèmèt pop-up epi eseye ankò.");
    return;
  }

  certificateWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head><title>PRO-MAX Certificate</title></head>
    <body style="
      min-height:100vh; box-sizing:border-box; margin:0; padding:70px;
      border:14px double #ff7900; color:#ffad4d; background:#000000;
      font-family:Arial,sans-serif; text-align:center;
    ">
      <h3>BSS1815 PRO-MAX DMP</h3>
      <h1 style="color:#ff7900; font-size:48px;">CERTIFICATE OF COMPLETION</h1>
      <p>This certifies that</p>
      <h2>${safeName}</h2>
      <p>successfully completed PRO-MAX Beat Maker AI School.</p>
      <h3>${new Date().toLocaleDateString()}</h3>
      <button onclick="window.print()" style="
        margin-top:25px; padding:12px 20px; border:1px solid #ff7900;
        color:#000000; background:#ff7900; font-weight:bold;
      ">PRINT / SAVE PDF</button>
    </body>
    </html>
  `);

  certificateWindow.document.close();
}


// Prove the file loads
console.log("scripts.js loaded");

// ==== Simple storage: JSON <-> Map/Set (in-memory) ====
const seedUsers = {
  alice: "Abcd1234!xYz",
  bob:   "Qwerty1234!AA",
  carmen:"Zz11!zz11!zz"
};

let usersMap, usernamesSet;

const loadUsers = () => {
  try {
    const raw = sessionStorage.getItem("usersJSON");
    const obj = raw ? JSON.parse(raw) : seedUsers;
    usersMap = new Map(Object.entries(obj));
    usernamesSet = new Set(usersMap.keys());
  } catch (e) {
    console.warn("JSON parse failed, using seed users.", e);
    usersMap = new Map(Object.entries(seedUsers));
    usernamesSet = new Set(usersMap.keys());
  }
};

const saveUsers = () => {
  try {
    sessionStorage.setItem("usersJSON", JSON.stringify(Object.fromEntries(usersMap)));
  } catch (e) {
    console.error("Could not save to sessionStorage", e);
  }
};

// ==== Validators (per handout) ====
const emailOk    = v => /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,8}$/.test(v);
const usernameOk = v => /^[A-Za-z][A-Za-z0-9]*$/.test(v);
const passwordOk = v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,}$/.test(v);

// ==== Tiny UI helpers ====
const setFieldState = (inputEl, helpEl, ok, msg) => {
  if (!inputEl || !helpEl) return;
  inputEl.classList.remove("ok", "error");
  helpEl.classList.remove("ok", "error");
  if (ok === true)  { inputEl.classList.add("ok");   helpEl.classList.add("ok"); }
  if (ok === false) { inputEl.classList.add("error");helpEl.classList.add("error"); }
  helpEl.textContent = msg || "";
};

const showAlert = (kind, text) => {
  const box = document.getElementById("alert");
  if (!box) return;
  if (!text) { box.className = "hidden"; box.textContent = ""; return; }
  box.className = kind === "ok" ? "ok" : "bad";
  box.textContent = text;
};

const wireFocusBlur = nodes => {
  if (!nodes || !nodes.length) return;
  for (const el of nodes) {
    el.addEventListener("focus", () => { el.style.background = "#f9fffb"; });
    el.addEventListener("blur",  () => { el.style.background = ""; });
  }
};

// ==== Registration ====
const wireRegister = () => {
  const form = document.getElementById("registerForm");
  if (!form) return;

  const email   = document.getElementById("email");
  const username= document.getElementById("username");
  const password= document.getElementById("password");
  const confirm = document.getElementById("confirm");

  const emailHelp    = document.getElementById("emailHelp");
  const usernameHelp = document.getElementById("usernameHelp");
  const passwordHelp = document.getElementById("passwordHelp");
  const confirmHelp  = document.getElementById("confirmHelp");

  // guard against missing IDs
  if (!(email && username && password && confirm && emailHelp && usernameHelp && passwordHelp && confirmHelp)) {
    console.error("Register page is missing required IDs; check index.html");
    return;
  }

  wireFocusBlur([email, username, password, confirm]);

  const live = () => {
    const { value: ev } = email;
    const { value: uv } = username;
    const { value: pv } = password;
    const { value: cv } = confirm;

    const eok = emailOk(ev);
    setFieldState(email, emailHelp, eok, eok ? "" : "Invalid email.");

    const ufmt = usernameOk(uv);
    const free = !usernamesSet.has(uv);
    setFieldState(username, usernameHelp, ufmt && free,
      ufmt ? (free ? "" : "Username already exists.") : "Start with a letter; letters/numbers only."
    );

    const pok = passwordOk(pv);
    setFieldState(password, passwordHelp, pok, pok ? "Strong password." : "12+ chars, upper/lower/digit/special.");

    const match = pv.length > 0 && pv === cv;
    setFieldState(confirm, confirmHelp, match, match ? "Match." : "Passwords do not match.");
  };

  form.addEventListener("input", live);
  form.addEventListener("blur",  live, true);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const { value: ev } = email;
    const { value: uv } = username;
    const { value: pv } = password;
    const { value: cv } = confirm;

    const ok = emailOk(ev) && usernameOk(uv) && !usernamesSet.has(uv) && passwordOk(pv) && pv === cv;
    if (!ok) {
      live();
      showAlert("bad", "Please fix the highlighted fields.");
      return;
    }

    try {
      usersMap.set(uv, pv);
      usernamesSet.add(uv);
      saveUsers();
      console.log("Registered:", { username: uv });
      showAlert("ok", "You've been successfully registered.");
      form.reset();
      [email, username, password, confirm].forEach(el => el.classList.remove("ok", "error"));
      setTimeout(() => { window.location.href = "./login.html"; }, 600);
    } catch (err) {
      console.error("Registration error:", err);
      showAlert("bad", "Unexpected error during registration.");
    }
  });
};

// ==== Login ====
const wireLogin = () => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const u  = document.getElementById("l_username");
  const p  = document.getElementById("l_password");
  const uh = document.getElementById("l_userHelp");
  const ph = document.getElementById("l_passHelp");

  if (!(u && p && uh && ph)) {
    console.error("Login page is missing required IDs; check login.html");
    return;
  }

  wireFocusBlur([u, p]);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const { value: uv } = u;
    const { value: pv } = p;

    const exists = usersMap.has(uv);
    setFieldState(u, uh, exists, exists ? "" : "User not found.");

    const passok = exists && usersMap.get(uv) === pv;
    setFieldState(p, ph, passok, passok ? "" : "Incorrect password.");

    if (exists && passok) {
      showAlert("ok", "Login successful.");
      console.log("Login OK:", { username: uv });
    } else {
      showAlert("bad", "Invalid username or password.");
    }
  });
};

// ==== Boot ====
document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
  showAlert("", "");
  wireRegister();
  wireLogin();
});

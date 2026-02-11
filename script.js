// =====================
// DAFTAR AKUN
// =====================
const accounts = [
  {u:"Gojo01", p:"001"},
  {u:"Gojo10", p:"010"},
  {u:"Gojo20", p:"020"},
  {u:"Gojo30", p:"030"},
  {u:"Gojo40", p:"040"},
  {u:"Gojo50", p:"050"}
];

// =====================
// LOGIN
// =====================
function login(){
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const error = document.getElementById("error");
  const popup = document.getElementById("popup");

  error.innerText = "";
  popup.style.display = "flex";

  setTimeout(()=>{
    const ok = accounts.find(a => a.u === u && a.p === p);

    if(ok){
      localStorage.setItem("login","yes");
      localStorage.setItem("user", u);
      location.href = "dashboard.html";
    }else{
      popup.style.display = "none";
      error.innerText = "Username atau password salah";
      shakeError();
    }
  }, 900);
}

// =====================
// SHAKE ERROR
// =====================
function shakeError(){
  const card = document.getElementById("loginCard");
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");
}

// =====================
// ENTER = LOGIN
// =====================
document.addEventListener("keydown", e=>{
  if(e.key === "Enter") login();
});

// =====================
// PROTEKSI DASHBOARD
// =====================
if(location.pathname.includes("dashboard.html")){
  if(!localStorage.getItem("login")){
    location.href="index.html";
  }
}
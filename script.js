function girisYap() {
  const sifre = document.getElementById("sifre").value;
  if (sifre === "250805Seb.") {
    window.location.href = "panel.html";
  } else {
    alert("Şifre yanlış. Lütfen tekrar deneyin.");
  }
}

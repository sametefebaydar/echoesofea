function girisYap() {
  const sifre = document.getElementById("sifre").value;
  if (sifre === "250805Seb.") {
    document.getElementById("giris-ekrani").style.display = "none";
    document.getElementById("ana-panel").style.display = "block";
  } else {
    alert("Şifre yanlış. Lütfen tekrar deneyin.");
  }
}

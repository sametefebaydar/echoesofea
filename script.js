<script>
  function girisYap() {
    const sifre = document.getElementById("sifre").value;
    const hata = document.getElementById("hataMesaji");
    if (sifre === "250805Seb.") {
      window.location.href = "panel.html";
    } else {
      hata.style.display = "block";
    }
  }
</script>

// mode édition couleur bouton (temporaire)

const colorH1 = document.getElementsByTagName("h1");
const colorH2 = document.getElementsByTagName("h2");
const colorP = document.getElementsByTagName("p");
const coloredBtn = document.getElementById("colored-btn");

colorH1[0].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #ac00e6, #f2ccff)"; 
});

colorH2[0].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #339933, #c6ecc6)"; 
});

colorP[0].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #336699, #b3cce6)"; 
});

colorP[1].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #d28a46, #ebcbad)"; 
});
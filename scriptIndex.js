// mode édition couleur bouton (temporaire)

const colorH1 = document.getElementsByTagName("h1");
const colorH2 = document.getElementsByTagName("h2");
const colorP = document.getElementsByTagName("p");
const coloredBtn = document.getElementById("colored-btn");

colorH1[0].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #ac00e6, #f2ccff)"; 
});

colorH2[0].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #730099, #f2ccff)"; 
});

colorP[0].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #6b00b3, #e0b3ff)"; 
});

colorP[1].addEventListener("click", function (e) {
  coloredBtn.style.background = "linear-gradient(to bottom right, #d28a46, #ebcbad)"; 
});
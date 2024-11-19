const body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.backgroundColor = "gray";

const divPai = document.createElement("div");
divPai.style.width = "250px";
divPai.style.height = "80px";
divPai.style.display = "flex";
divPai.style.justifyContent = "center";
body.appendChild(divPai)


const textoFaxina = document.createElement("h1");
textoFaxina.textContent = "Faxina";
textoFaxina.style.width = "100px";
textoFaxina.style.height = "30px";
textoFaxina.style.color = "#7BDAAF";
textoFaxina.style.fontSize = "50px"
divPai.appendChild(textoFaxina)

const textoFacil = document.createElement("h2");
textoFacil.textContent = "FÁCIL";
textoFacil.style.width = "100px";
textoFacil.style.height = "30px";
textoFacil.style.color = "#0743A2";
textoFacil.style.paddingLeft = "60px";
textoFacil.style.marginTop = "58px"
divPai.appendChild(textoFacil)  
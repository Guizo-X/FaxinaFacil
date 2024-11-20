const body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";

const divPai = document.createElement("div");
divPai.style.width = "250px";
divPai.style.height = "80px";
divPai.style.display = "flex";
divPai.style.justifyContent = "center";
body.appendChild(divPai)

const TodosStories1 = document.createElement("div");
TodosStories1.style.width = "100%";
TodosStories1.style.height = "80px";
TodosStories1.style.display = "flex";
TodosStories1.style.justifyContent = "start";
body.appendChild(TodosStories1)

const stories1 = document.createElement("div");
stories1.style.width = "70px";
stories1.style.height = "70px";
stories1.style.backgroundColor = "gray";
stories1.style.borderRadius = "50%";
stories1.style.borderTop = "5px solid #7BDAAF";
stories1.style.borderRight = "5px solid yellow";
stories1.style.borderLeft = "5px solid orange";
stories1.style.borderBottom = "5px solid cyan";
TodosStories1.appendChild(stories1)

const stories2 = document.createElement("div");
stories2.style.width = "70px";
stories2.style.height = "70px";
stories2.style.backgroundColor = "gray";
stories2.style.borderRadius = "50%";
stories2.style.borderTop = "5px solid #7BDAAF";
stories2.style.borderRight = "5px solid yellow";
stories2.style.borderLeft = "5px solid orange";
stories2.style.borderBottom = "5px solid cyan";
TodosStories1.appendChild(stories2)



const divLinhaStories = document.createElement("div");
divLinhaStories.style.backgroundColor = "black";
divLinhaStories.style.marginTop = "10px";
divLinhaStories.style.width = "102%";
divLinhaStories.style.height = "1px";
body.appendChild(divLinhaStories)


const textoFaxina = document.createElement("h1");
textoFaxina.textContent = "Faxina";
textoFaxina.style.width = "100px";
textoFaxina.style.height = "30px";
textoFaxina.style.color = "#7BDAAF";
textoFaxina.style.fontSize = "50px";
divPai.appendChild(textoFaxina)

const textoFacil = document.createElement("h2");
textoFacil.textContent = "FÁCIL";
textoFacil.style.width = "100px";
textoFacil.style.height = "30px";
textoFacil.style.color = "#0743A2";
textoFacil.style.paddingLeft = "60px";
textoFacil.style.marginTop = "58px";
divPai.appendChild(textoFacil)  

const Select = document.createElement("h1");
Select.style.color = "#0743A2"
Select.textContent = "Selecione seu(s) serviço(s)";
Select.style.width = "400px";
Select.style.height = "30px";
body.appendChild(Select)





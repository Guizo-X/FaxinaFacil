const body = document.querySelector("body");
body.style.height = "100vh";
body.style.width = "100%";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";

const negativeMode = document.createElement("button");
negativeMode.style.width = "100px";
negativeMode.style.height = "100px";
negativeMode.style.backgroundColor = "Red";
negativeMode.style.color = "white";
negativeMode.textContent = "Modo Noturno";
negativeMode.addEventListener("click", function(){
    body.style.backgroundColor = "black";
})
body.appendChild(negativeMode);

const lightMode = document.createElement("button");
lightMode.style.width = "100px";
lightMode.style.height = "100px";
lightMode.style.backgroundColor = "Red";
lightMode.style.color = "white";
lightMode.textContent = "Modo Claro";
lightMode.addEventListener("click", function(){
    body.style.backgroundColor = "white";
})
body.appendChild(lightMode);

const divPai = document.createElement("div");
divPai.style.width = "250px";
divPai.style.height = "80px";
divPai.style.display = "flex";
divPai.style.justifyContent = "center";
body.appendChild(divPai)


const TodosStories1 = document.createElement("div");
TodosStories1.style.marginTop = "20px";
TodosStories1.style.width = "100%";
TodosStories1.style.height = "80px";
TodosStories1.style.display = "flex";
TodosStories1.style.justifyContent = "center";
body.appendChild(TodosStories1)


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

const divfilho = document.createElement("div");

divfilho.style.display = "flex";
divfilho.style.alignItems = "center";
divfilho.style.flexDirection = "column";
divfilho.style.height = "5000px";
body.appendChild(divfilho)


const Select = document.createElement("h1");
Select.style.color = "#0743A2"
Select.textContent = "Selecione seu(s) serviço(s)";
Select.style.width = "400px";
Select.style.height = "30px";
divfilho.appendChild(Select)

const lista = document.createElement("h1");
lista.textContent = "Lista de categorias de serviços:";
lista.style.color = "black";
lista.style.width = "425px";
lista.style.height = "100px";
divfilho.appendChild(lista)

const bloco1 = document.createElement("div");
bloco1.style.display = "flex";
bloco1.style.justifyContent = "start";
bloco1.style.alignItems = "center";
bloco1.style.width = "500px";
bloco1.style.height = "80px";
bloco1.style.backgroundColor = "#0743A2";
bloco1.style.borderRadius ="10px";
bloco1.style.margin = "10px";
divfilho.appendChild(bloco1)


const check1 = document.createElement("button");
check1.style.width = "20px";
check1.style.height = "20px";
check1.style.margin = "20px";
check1.style.borderColor = "white";
check1.style.backgroundColor = "transparent"; 


check1.addEventListener("click", function() {
    check1.style.backgroundColor = check1.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco1.appendChild(check1);

const textlim = document.createElement("h2");
textlim.textContent ="Limpeza de banheiro";
textlim.style.marginLeft = "70px";
textlim.style.width = "50%";
textlim.style.color ="white";
textlim.style.height = "50p%";
bloco1.appendChild(textlim)

const bloco2 = document.createElement("div");
bloco2.style.display = "flex";
bloco2.style.justifyContent = "start";
bloco2.style.alignItems = "center";
bloco2.style.width = "500px";
bloco2.style.height = "80px";
bloco2.style.backgroundColor = "#0743A2";
bloco2.style.borderRadius ="10px";
bloco2.style.margin = "10px";
divfilho.appendChild(bloco2)


const check2 = document.createElement("button");
check2.style.width = "20px";
check2.style.height = "20px";
check2.style.margin = "20px";
check2.style.borderColor = "white";
check2.style.backgroundColor = "transparent"; 
check2.addEventListener("click", function() {
    check2.style.backgroundColor = check2.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco2.appendChild(check2);

const textlim2 = document.createElement("h2");
textlim2.textContent ="Limpeza de banheiro";
textlim2.style.marginLeft = "70px";
textlim2.style.width = "50%";
textlim2.style.color ="white";
textlim2.style.height = "50p%";
bloco2.appendChild(textlim2)

const bloco3 = document.createElement("div");
bloco3.style.display = "flex";
bloco3.style.justifyContent = "start";
bloco3.style.alignItems = "center";
bloco3.style.width = "500px";
bloco3.style.height = "80px";
bloco3.style.backgroundColor = "#0743A2";
bloco3.style.borderRadius ="10px";
bloco3.style.margin = "10px";
divfilho.appendChild(bloco3)


const check3 = document.createElement("button");
check3.style.width = "20px";
check3.style.height = "20px";
check3.style.margin = "20px";
check3.style.borderColor = "white";
check3.style.backgroundColor = "transparent"; 
check3.addEventListener("click", function() {
    check3.style.backgroundColor = check3.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco3.appendChild(check3);

const textlim3 = document.createElement("h2");
textlim3.textContent ="Limpeza de banheiro";
textlim3.style.marginLeft = "70px";
textlim3.style.width = "50%";
textlim3.style.color ="white";
textlim3.style.height = "50p%";
bloco3.appendChild(textlim3)


const bloco4 = document.createElement("div");
bloco4.style.display = "flex";
bloco4.style.justifyContent = "start";
bloco4.style.alignItems = "center";
bloco4.style.width = "500px";
bloco4.style.height = "80px";
bloco4.style.backgroundColor = "#0743A2";
bloco4.style.borderRadius ="10px";
bloco4.style.margin = "10px";
divfilho.appendChild(bloco4)


const check4 = document.createElement("button");
check4.style.width = "20px";
check4.style.height = "20px";
check4.style.margin = "20px";
check4.style.borderColor = "white";
check4.style.backgroundColor = "transparent"; 
check4.addEventListener("click", function() {
    check4.style.backgroundColor = check4.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco4.appendChild(check4);

const textlim4 = document.createElement("h2");
textlim4.textContent ="Limpeza de banheiro";
textlim4.style.marginLeft = "70px";
textlim4.style.width = "50%";
textlim4.style.color ="white";
textlim4.style.height = "50p%";
bloco4.appendChild(textlim4)


const outros = document.createElement("button");
outros.textContent = "Outros";
outros.style.color = "white";
outros.style.width = "400px";
outros.style.height = "50px";
outros.style.backgroundColor = "#0743A2";
outros.style.borderRadius ="10px";
outros.style.margin = "10px";
let opcoesCarregadas = false;
outros.addEventListener("click", function(){
    if(!opcoesCarregadas){
    const bloco9 = document.createElement("div");
bloco9.style.display = "flex";
bloco9.style.justifyContent = "start";
bloco9.style.alignItems = "center";
bloco9.style.width = "500px";
bloco9.style.height = "80px";
bloco9.style.backgroundColor = "#0743A2";
bloco9.style.borderRadius ="10px";
bloco9.style.margin = "10px";
divfilho.appendChild(bloco9)


const check9 = document.createElement("button");
check9.style.width = "20px";
check9.style.height = "20px";
check9.style.margin = "20px";
check9.style.borderColor = "white";
check9.style.backgroundColor = "transparent"; 
check9.addEventListener("click", function() {
    check9.style.backgroundColor = check9.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco9.appendChild(check9);

const textlim9 = document.createElement("h2");
textlim9.textContent ="Limpeza de banheiro";
textlim9.style.marginLeft = "70px";
textlim9.style.width = "50%";
textlim9.style.color ="white";
textlim9.style.height = "50p%";
bloco9.appendChild(textlim9)



const bloco8 = document.createElement("div");
bloco8.style.display = "flex";
bloco8.style.justifyContent = "start";
bloco8.style.alignItems = "center";
bloco8.style.width = "500px";
bloco8.style.height = "80px";
bloco8.style.backgroundColor = "#0743A2";
bloco8.style.borderRadius ="10px";
bloco8.style.margin = "10px";
divfilho.appendChild(bloco8)


const check8 = document.createElement("button");
check8.style.width = "20px";
check8.style.height = "20px";
check8.style.margin = "20px";
check8.style.borderColor = "white";
check8.style.backgroundColor = "transparent"; 
check8.addEventListener("click", function() {
    check8.style.backgroundColor = check8.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco8.appendChild(check8);

const textlim8 = document.createElement("h2");
textlim8.textContent ="Limpeza de banheiro";
textlim8.style.marginLeft = "70px";
textlim8.style.width = "50%";
textlim8.style.color ="white";
textlim8.style.height = "50p%";
bloco8.appendChild(textlim8)




const bloco5 = document.createElement("div");
bloco5.style.display = "flex";
bloco5.style.justifyContent = "start";
bloco5.style.alignItems = "center";
bloco5.style.width = "500px";
bloco5.style.height = "80px";
bloco5.style.backgroundColor = "#0743A2";
bloco5.style.borderRadius ="10px";
bloco5.style.margin = "10px";
divfilho.appendChild(bloco5)


const check5 = document.createElement("button");
check5.style.width = "20px";
check5.style.height = "20px";
check5.style.margin = "20px";
check5.style.borderColor = "white";
check5.style.backgroundColor = "transparent"; 
check5.addEventListener("click", function() {
    check5.style.backgroundColor = check5.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco5.appendChild(check5);

const textlim5 = document.createElement("h2");
textlim5.textContent ="Limpeza de banheiro";
textlim5.style.marginLeft = "70px";
textlim5.style.width = "50%";
textlim5.style.color ="white";
textlim5.style.height = "50p%";
bloco5.appendChild(textlim5)




const bloco6 = document.createElement("div");
bloco6.style.display = "flex";
bloco6.style.justifyContent = "start";
bloco6.style.alignItems = "center";
bloco6.style.width = "500px";
bloco6.style.height = "80px";
bloco6.style.backgroundColor = "#0743A2";
bloco6.style.borderRadius ="10px";
bloco6.style.margin = "10px";
divfilho.appendChild(bloco6)


const check6 = document.createElement("button");
check6.style.width = "20px";
check6.style.height = "20px";
check6.style.margin = "20px";
check6.style.borderColor = "white";
check6.style.backgroundColor = "transparent"; 
check6.addEventListener("click", function() {
    check6.style.backgroundColor = check6.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco6.appendChild(check6);

const textlim6 = document.createElement("h2");
textlim6.textContent ="Limpeza de banheiro";
textlim6.style.marginLeft = "70px";
textlim6.style.width = "50%";
textlim6.style.color ="white";
textlim6.style.height = "50p%";
bloco6.appendChild(textlim6)




const bloco7 = document.createElement("div");
bloco7.style.display = "flex";
bloco7.style.justifyContent = "start";
bloco7.style.alignItems = "center";
bloco7.style.width = "500px";
bloco7.style.height = "80px";
bloco7.style.backgroundColor = "#0743A2";
bloco7.style.borderRadius ="10px";
bloco7.style.margin = "10px";
divfilho.appendChild(bloco7)


const check7 = document.createElement("button");
check7.style.width = "20px";
check7.style.height = "20px";
check7.style.margin = "20px";
check7.style.borderColor = "white";
check7.style.backgroundColor = "transparent"; 
check7.addEventListener("click", function() {
    check7.style.backgroundColor = check7.style.backgroundColor === "transparent" ? "white" : "transparent";
});

bloco7.appendChild(check7);


const textlim7 = document.createElement("h2");
textlim7.textContent ="Limpeza de banheiro";
textlim7.style.marginLeft = "70px";
textlim7.style.width = "50%";
textlim7.style.color ="white";
textlim7.style.height = "50p%";
bloco7.appendChild(textlim7);
opcoesCarregadas = true;
outros.removeEventListener("click", this);
}


const recarregarPag = document.createElement("button");
recarregarPag.textContent = "Ver Menos";
recarregarPag.style.color = "white";
recarregarPag.style.width = "400px";
recarregarPag.style.height = "50px";
recarregarPag.style.backgroundColor = "#0743A2";
recarregarPag.style.borderRadius = "10px";
recarregarPag.style.margin = "10px";

recarregarPag.addEventListener("click", function() {
    location.reload();
});

divfilho.appendChild(recarregarPag);

})
divfilho.appendChild(outros)


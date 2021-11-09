
let contador_finish =0;
let contador_de_jogadas=0;
let tempo = 0;
let idinterval;

let cards = window.prompt("Com quantas cartas você deseja jogar?", "4 a 14");
const imgs =["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"] ;

if(((cards%2)!==0) || cards>14 || cards <4){
    alert("Por favor Insira números pares e na faixa de 4-14");
    location.reload();
}
contar()

function contar() {

const contator = document.querySelector(".contador");
idinterval = setInterval(incrementar, 1000);
}

function incrementar() {
  tempo++;
  const contator = document.querySelector(".contador");
  contator.innerHTML = tempo;
}

let list1=gerar_lista(parseInt(cards)/2);
list1.sort(comparador);

let list2=gerar_lista(parseInt(cards)/2);
list2.sort(comparador);



const card_container = document.querySelector(".cartas-container");

for(let i=0;i<parseInt(cards)/2;i++){
  

  card_container.innerHTML+= `
  <div class="card" onclick="clickCard(this)" data-identifier="card"> \n
  <div class="card-face front-face" data-identifier="front-face">\n
    <img src="./assets/front.png" alt="">\n
  </div>\n
  <div class ="card-face back-face" data-identifier="back-face">
      <img src="./assets/${imgs[list1[i]]}.gif" alt="">\n
  </div>\n
</div>

  <div class="card" onclick="clickCard(this)" data-identifier="card"> \n
  <div class="card-face front-face" data-identifier="front-face">\n
    <img src="./assets/front.png" alt="">\n
  </div>\n
  <div class ="card-face back-face" data-identifier="back-face">
      <img src="./assets/${imgs[list2[i]]}.gif" alt="">\n
  </div>\n
</div>
`
 
};

function clickCard(element){
  contador_de_jogadas++;
  
  const elemento_selecionado = document.querySelector(".card.mostrar-card");
  
  const img1= document.querySelector(".card.mostrar-card .back-face img");
  const img2= element.querySelector(".back-face img");
  
  //VERIFICAR SE JA TEM ALGUM ABERTO
  if(elemento_selecionado!=null){
    //Se for par
    if((img1.src.substr(img1.src.lastIndexOf('/')))==(img2.src.substr(img2.src.lastIndexOf('/')))){
      elemento_selecionado.classList.add("feito-par");
      element.classList.add("feito-par");
      
      elemento_selecionado.onclick="";
      element.onclick="";

      element.classList.remove("mostrar-card")
      elemento_selecionado.classList.remove("mostrar-card");
      contador_finish++;
      
      //se o jogo já encerrou
      if(contador_finish==(parseInt(cards)/2)){
        setTimeout(alertare, 1200);
      }
    }
    //se não for par
    else{
      
      //elemento_selecionado.classList.toggle("mostrar-card")
      //element.classList.remove("mostrar-card")
      element.classList.add("mostrar-card")
      setTimeout(error_card,1000);
      
      function error_card(){
        //elemento_selecionado.classList.add("revirar")
        //element.classList.add("revirar")
        elemento_selecionado.classList.toggle("mostrar-card")
        element.classList.remove("mostrar-card")
      }
    }
  }
  else{
    element.classList.add("mostrar-card");
  }
}


function gerar_lista(max){
  let list = [];
  for (let i = 0; i < max; i++) {
  list[i] = i ;
}
return list;
}
function alertare(){

  alert("Você ganhou! Você fez em "+ contador_de_jogadas+ " Jogadas e com tempo de: "+ tempo+" segundos");
  let febck=prompt("Você deseja começar um novo game? Digite 'sim' ou nao")
  if(febck=="sim"){
    location.reload();
  }
 
}



// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


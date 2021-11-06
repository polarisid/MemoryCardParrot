let cards = window.prompt("Com quantas cartas você deseja jogar?", "de 4 a 14");
const imgs =["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertilparrot","tripletsparrot","inicornparrot"] ;

if(((cards%2)!==0) || cards>14 || cards <4){
    alert("Por favor Insira números pares e na faixa de 4-14");
    location.reload();
}


const card_container = document.querySelector(".cartas-container");

for(let i=0;i<parseInt(cards);i++){
  

  card_container.innerHTML+= `
  <div class="card" data-identifier="card"> \n
  <div class="card-face front-face" data-identifier="front-face">\n
    <img src="/assets/front.png" alt="">\n
  </div>\n
  <div class ="card-face back-face" data-identifier="back-face">
      <img src="/assets/${imgs[2]}.gif" alt="">\n
  </div>\n
</div>`
 
};

gerar_lista(parseInt(cards))


function gerar_lista(max){
  let list = [];
  for (let i = 0; i < max; i++) {
  list[i] = i ;
}
console.log(list)
}



//const cardes=card.querySelector(".card-1");
  
  
 




//console.log(parseInt(cards));


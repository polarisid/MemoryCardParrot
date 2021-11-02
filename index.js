let cards = window.prompt("Com quantas cartas você deseja jogar?", "de 4 a 14");

if(((cards%2)!==0) || cards>14 || cards <4){
    alert("Por favor Insira números pares e na faixa de 4-14");
    location.reload();
}
const card = document.querySelector(".cartas-container");

for (let i = 1; i <= parseInt(cards); i++) {
    console.log(i)
    const cardes=card.querySelector(".card-"+i);
    cardes.classList.add("mostrar")
    console.log(cardes)
  }
  //const cardes=card.querySelector(".card-1");
  
  
 




//console.log(parseInt(cards));


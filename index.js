let cards = document.querySelectorAll('.card');
cards.forEach(card =>{
    
    card.addEventListener('click', ()=>{
        removeClass()
      card.classList.add('card2')
    })
}) 

function removeClass(){
    cards.forEach(card =>{
          card.classList.remove('card2')
    }) 
}
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
let pos = 1;
console.log(fruits.splice(pos,2))
console.log(fruits.slice(1))
console.log(Object.keys(fruits))
if(fruits.includes('Strawberry')){
    let str = fruits.indexOf('Strawberry');
    console.log("The position of Strawberry is " + (1 +fruits.indexOf('Strawberry')))
}
else{
    console.log('strawberry does not exists')
}
*/

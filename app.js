let noOfProducts = document.querySelectorAll('.trade').length;

const button1 = document.querySelectorAll(".next");
const button2 = document.querySelectorAll(".btn");
const product = document.querySelectorAll(".trade");

for (var i = 0; i < noOfProducts; i++) {
    document.querySelectorAll('.trade')[i].addEventListener('click', function(e){
      button1.classList.remove("show-btn1");
    button1.classList.add("hide-btn1");
    button2.classList.remove("hide-btn2");
    button2.classList.add("show-btn2");
    product.classList.remove("product");
    product.classList.add("hover-text");
      //let element = document.querySelector(".show-btn1");
      //element.remove();
     //let  element2 = document.querySelectorAll(".btn").classList;
      //element2.add(".show-btn2");
      //button1.classList.remove('.show-btn1');
      //button1.classList.add(".hide-btn1");

      //alert("You've been clicked!");
   //console.log(e.target);
    });
}

console.log(button1, product, button2);













/*let button1 = document.getElementsByClassName('next');
let button2 = document.getElementsByClassName('btn');
let product = document.getElementsByClassName('trade');

console.log(button1, button2, product);

product.addEventListener("click", function(e) {
    button1.classList.remove("show-btn1");
    button1.classList.add("hide-btn1");
    button2.classList.remove("hide-btn2");
    button2.classList.add("show-btn2");
    product.classList.remove("product");
    product.classList.add("hover-text");
  })
*/

/*const button1 = document.querySelectorAll(".next");
const button2 = document.querySelectorAll(".btn");
const product = document.querySelectorAll(".trade");
console.log(button1, button2, product);
trade.addEventListener("click", function() {
  button1.classList.remove("show-btn1");
  button1.classList.add("hide-btn1");
  button2.classList.remove("hide-btn2");
  button2.classList.add("show-btn2");
})*/
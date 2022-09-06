
let change3=document.getElementById("change3")
let click3 =document.getElementById("click3")
let change1 =document.getElementById("change1")
let click1 =document.getElementById("click1")
let change2 =document.getElementById("change2")
let click2 =document.getElementById("click2")

change3.addEventListener('mouseover',function(){
     change3.style.backgroundColor ="#2B076E"
     change3.style.color = "#fff"
    click3.textContent ="Start mining >"
    click3.style.backgroundColor ="#3B82F6"
    click3.style.width ="200px";
    click3.style.borderRadius ="30px"
    click3.style.color = "#fff"
    click3.style.padding ="15px 20px 12px";
})
change3.addEventListener('mouseout',function(){
    change3.style.backgroundColor ="white"
    change3.style.color = "#000"
    click3.textContent ="❯"
    click3.style.color ="#3B82F6"
click3.style.backgroundColor ="white"
click3.style.width ="70px";
})
change1.addEventListener('mouseover',function(){
    change1.style.backgroundColor ="#2B076E"
    change1.style.color = "#fff"
   click1.textContent ="Start mining >"
   click1.style.backgroundColor ="#3B82F6"
   click1.style.width = "200px"
   click1.style.padding ="15px 20px 12px";
   click1.style.borderRadius ="30px"
   click1.style.color = "#fff"
})
change1.addEventListener('mouseout',function(){
   change1.style.backgroundColor ="white"
   change1.style.color = "#000"
   click1.textContent ="❯"
   click1.style.color ="#3B82F6"
click1.style.backgroundColor ="white"
click1.style.width ="70px";
})
change2.addEventListener('mouseover',function(){
    change2.style.backgroundColor ="#2B076E"
    change2.style.color = "#fff"
   click2.textContent ="Start mining >"
   click2.style.backgroundColor ="#3B82F6"
   click2.style.width ="200px";
   click2.style.borderRadius ="30px"
   click2.style.padding ="15px 20px 12px";
   click2.style.color = "#fff"
})
change2.addEventListener('mouseout',function(){
   change2.style.backgroundColor ="white"
   change2.style.color = "#000"
   click2.textContent ="❯"
   click2.style.color ="#3B82F6"
click2.style.backgroundColor ="white"
click2.style.width ="70px";
})
































/*let element = document.getElementsByClassName('product');
console.log(element);
for (var i = 0; i < element.length; i++) {
  element[i].addEventListener('click', function () {

    let el = element[0];
    while (el) {
      if (el.tagName === "DIV") {
        el.classList.remove("hover-text");
      }
      el = el.nextSibling;
    }

   this.classList.add( 'hover-text');

  });

}
let button = document.getElementsByClassName('show-btn1');
 console.log(button);
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function (){
    button.textContent = "Start Mining";
   let btn = button[0];
   while(btn) {
    if (btn.tagName === "DIV") {
      btn.classList.remove("show-btn2");
    }
    btn = btn.nextSibling;
   }

   this.classList.add('show-btn2');
   
 });
} */







/*
for (var i = 0; i < element2.length; i++) {
  element2[i].addEventListener('click', function () {
   this.classList.add('show-btn2');

  });

} */

/*let cards = document.querySelectorAll(".product");
let span = document.querySelectorAll(".show-btn1");

console.log(cards, span);
cards.forEach(function(card){
  card.addEventListener("mouseover", function(e){
    card.classList.add("hover-text");
  });
})
cards.forEach(function(card) {
  cards,addEventListener("mouseout", function(e){
    card.classList.remove("hover-text");
  });
});

const duration = 5000;
function render(info) {
  let startValue = 0;
  const item = info.target;
  const data = parseInt(item.getAttribute("data-value"));
  const time = Math.floor(duration / data);

  let interval = setInterval(function () {
    startValue += 1;
    item.textContent = startValue;
    if (startValue === data) {
      clearInterval(interval);
    }
  }, [time]);
}

let options = {
root: null,
rootMargin: "0px",
threshold: 1.0,
};

let myInterval = function(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      render(entry);
    }
  });
}
*/
//let observer = new IntersectionObserver(myInterval, options);
//span.forEach (function(span) {
 // observer.observe(span);
//});

































/*let change = document.getElementById('product');
let click = document.getElementById('btn1');


change.addEventListener("mouseover", function(){
  click.style.backgroundColor = "#fff"
  click.textContent = ">"
  change.style.backgroundColor = "#fff"
  change.style.color = "#000"
})


change.addEventListener("mouseout", function() {
  
  click.style.backgroundColor = "#3B82F6"
  click.textContent = "Start Mining"
  change.style.backgroundColor = "##2B076E"
})













/*let elements = document.getElementsByClassName("product");

for (var i = 0; i < elements.length; i++) {
  elements[i].onClick = function() {
    alert("youve been clicked");
      this.classList.add('hover-text');
   
  };
}*/


/*let noOfProducts = document.querySelectorAll('.trade').length;

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
      let element = document.querySelector(".show-btn1");
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

*/

/* let noOfProducts = document.querySelectorAll('.trade').length;

const button1 = document.getElementById("#btn1");
const button2 = document.getElementById("#btn2");
const button3 = document.getElementById("#btn3");
const startButton1 = document.getElementById("#start-btn1");
const startButton2 = document.getElementById("#start-btn2");
const startButton3 = document.getElementById("#start-btn3");
const product1 = document.getElementById("#product");
const product2 = document.getElementById("#product2");
const product3 = document.getElementById("#product3");

for (var i = 0; i < noOfProducts; i++) {
    document.querySelectorAll('.trade')[i].addEventListener('click', function(e){
      button1.classList.remove("hide-btn1");
    button1.classList.add("show-btn1");
    button2.classList.remove("hide-btn1");
    button2.classList.add("show-btn1");
    button3.classList.remove("hide-btn1");
    button3.classList.add("show-btn1");
      let element = document.getElementById(".show-btn1");
      element.remove();
     let  element2 = document.querySelectorAll(".btn").classList;
      element2.add(".show-btn2");
      button1.classList.remove('.show-btn1');
      button1.classList.add(".hide-btn1");

      alert("You've been clicked!");
   console.log(e.target);
    });
}

console.log(button1, product, button2);
*/








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
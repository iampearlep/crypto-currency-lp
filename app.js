
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
h = document.querySelectorAll("td")

console.log(h[0].textContent==="")

function change(i){
  i.addEventListener("mouseover",function(){
    i.style.background = 'grey';
  })

  i.addEventListener("mouseout",function(){
    if (i.textContent == ""){i.style.background = 'white';}
  })

  i.addEventListener("click",function(){
    if (i.textContent === ""){i.textContent = "X"}
    else if (i.textContent === "X"){i.textContent = "O"}
    else{i.textContent = ""}
  })
}

h.forEach(change)

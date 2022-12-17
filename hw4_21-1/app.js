const count = document.querySelector('#count')
const btns = document.querySelectorAll('.btn')
// const resert = document.querySelector(.'reset')
const btn=document.querySelector('#btn')
const h2=document.getElementsByClassName('h2')
let label = 0

count.innerText = label 

btns[0].onclick = () => {
    label += 1
    count.innerText = label
    if ( label <0) {
      count.style.color="green"
    }else if(label===0){
      count.style.color="silver"
    }
}

btns[1].onclick = () => {
    label -= 1
    count.innerText = label
    if ( label <0) {
      count.style.color="red"
    }else if(label===0){
      count.style.color="silver"
    }
}
btn.onclick=()=>{
  for(let i=0;i<=6;i++){
  h2[i].innerText=Math.floor(1 + Math.random() * (100 + 1 - 1))
}
}






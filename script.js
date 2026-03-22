const text = "Ishitva Rathore";
const el = document.getElementById("heroTitle");
let i = 0;

function type(){
  if(i < text.length){
    el.textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

window.onload = ()=>{
  el.textContent="";
  type();
};

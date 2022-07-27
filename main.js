let display = document.querySelector('.display')

function clearDisplay() {
  display.innerHTML = "0"
}

function addDisplay(value){
  if (display.innerHTML == "0") {
    display.innerHTML = ""
    number = display.innerHTML
  display.innerHTML = number + value
  }else{
    number = display.innerHTML
  display.innerHTML = number + value
  }
  
}

function backDisplay(){
  let clear = display.innerHTML
  display.innerHTML = clear.substring(0, clear.length -1)
}

function result() {
 let number = eval(display.innerHTML)
 if( display.innerHTML == ""){
  number = 0
  display.innerHTML =`${number.toLocaleString('pt-BR')}`
 }else {
  display.innerHTML =`${number.toLocaleString('pt-BR')}`
 }
 
}
 

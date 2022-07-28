let display = document.querySelector('.display')

// clear calculator display
function clearDisplay() {
  display.innerHTML = "0"
}

//add math expression to the display
function addDisplay(value){
  if (display.innerHTML == 0) {
    display.innerHTML = ""
    number = display.innerHTML
  display.innerHTML = number + value
  }else{
    number = display.innerHTML
  display.innerHTML = number + value
  }
  
}

//delete display number
function backDisplay(){
  let clear = display.innerHTML
  display.innerHTML = clear.substring(0, clear.length -1)
}

//returns the result of the expression
function result() {
 let number = eval(display.innerHTML)
 if( display.innerHTML == ""){
  number = 0
  display.innerHTML =`${number.toLocaleString('pt-BR')}`
 }else {
  display.innerHTML =`${number.toLocaleString('pt-BR')}`
 }
 
}
 

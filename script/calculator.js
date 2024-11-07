const buttons = []

for (let index = 0; index < 20; index++) {
  buttons[index] = document.getElementById("b" + (index + 1))
}

const display = document.querySelector("#calculator__display span")

var liveDisplay = "", liveNumber = "", historic = []

function updateDisplay(data) {
  if (data == ""){ 
    display.innerHTML = ""
    liveNumber = ""
    liveDisplay = ""
    let enabled = document.querySelectorAll(".calculator__buttons button:not(#b1)")
    enabled.forEach(botao => { botao.disabled = false})
  }

  else if (data == "P"){ 
    if(liveNumber != "" && Number(liveNumber) < 0){
      let original = liveNumber
      liveNumber = (Number(liveNumber) * (-1)).toString()
      if (display.innerHTML.includes("(" + original + ")")) {
        display.innerHTML = display.innerHTML.replace("(" + original + ")", liveNumber);
      } else {
        display.innerHTML = display.innerHTML.replace(original, liveNumber);
      }
    }
  }

  else if (data == "N"){
    if(liveNumber != "" && Number(liveNumber) > 0){
      let original = liveNumber
      liveNumber = (Number(liveNumber) * (-1)).toString()
      let lastIndex = display.innerHTML.lastIndexOf(original)
      display.innerHTML = display.innerHTML.substring(0, lastIndex) + "(" + liveNumber + ")"
    }
  }

  else if (data == "+" && display.innerHTML != "") {
    if(display.innerHTML.at(display.innerHTML.length - 1) == ')' || display.innerHTML.at(display.innerHTML.length - 1) >= '0' && display.innerHTML.at(display.innerHTML.length - 1) <= '9'){
      display.innerHTML += "+"
      liveNumber = ""
    }
  }
  else if (data == "-" && display.innerHTML != "") {
    if(display.innerHTML.at(display.innerHTML.length - 1) == ')' || display.innerHTML.at(display.innerHTML.length - 1) >= '0' && display.innerHTML.at(display.innerHTML.length - 1) <= '9'){
    display.innerHTML += "-"
    liveNumber = ""
    }
  }
  else if (data == "/" && display.innerHTML != "") {
    if(display.innerHTML.at(display.innerHTML.length - 1) == ')' || display.innerHTML.at(display.innerHTML.length - 1) >= '0' && display.innerHTML.at(display.innerHTML.length - 1) <= '9'){
    display.innerHTML += "/"
    liveNumber = ""
    }
  }
  else if (data == "*" && display.innerHTML != "") {
    if(display.innerHTML.at(display.innerHTML.length - 1) == ')' || display.innerHTML.at(display.innerHTML.length - 1) >= '0' && display.innerHTML.at(display.innerHTML.length - 1) <= '9'){
    display.innerHTML += "*"
    liveNumber = ""
    }
  }

  else if (data >= "0" && data <= "9") {
    display.innerHTML += data;
    liveNumber += data;
  }

  else if (data == "S" && display.innerHTML != ""){
    liveDisplay = eval(display.innerHTML)
    if(liveDisplay >= 0){
      liveDisplay = Math.sqrt(liveDisplay)
      display.innerHTML = liveDisplay
      liveNumber = liveDisplay
    } else{
      display.innerHTML = "Error"
      let disabled = document.querySelectorAll(".calculator__buttons button:not(#b1)")
      disabled.forEach(botao => { botao.disabled = true})
    }
  }

  else if (data == "."){
    if(liveNumber != ""){
      let original = liveNumber
      liveNumber = liveNumber + "."
      let lastIndex = display.innerHTML.lastIndexOf(original)
      display.innerHTML = display.innerHTML.substring(0, lastIndex).replace(/\(/g, "") + liveNumber 
    }
  } 

  else if (data == "="){
      liveDisplay = eval(display.innerHTML)
      display.innerHTML = liveDisplay.toString()
      liveNumber = liveDisplay.toString()
  }

}


buttons.at(0).addEventListener("click", () => updateDisplay(""))
buttons.at(1).addEventListener("click", () => updateDisplay("P"))
buttons.at(2).addEventListener("click", () => updateDisplay("N"))
buttons.at(3).addEventListener("click", () => updateDisplay("/"))
buttons.at(4).addEventListener("click", () => updateDisplay("1"))
buttons.at(5).addEventListener("click", () => updateDisplay("2"))
buttons.at(6).addEventListener("click", () => updateDisplay("3"))
buttons.at(7).addEventListener("click", () => updateDisplay("*"))
buttons.at(8).addEventListener("click", () => updateDisplay("4"))
buttons.at(9).addEventListener("click", () => updateDisplay("5"))
buttons.at(10).addEventListener("click", () => updateDisplay("6"))
buttons.at(11).addEventListener("click", () => updateDisplay("+"))
buttons.at(12).addEventListener("click", () => updateDisplay("7"))
buttons.at(13).addEventListener("click", () => updateDisplay("8"))
buttons.at(14).addEventListener("click", () => updateDisplay("9"))
buttons.at(15).addEventListener("click", () => updateDisplay("-"))
buttons.at(16).addEventListener("click", () => updateDisplay("S"))
buttons.at(17).addEventListener("click", () => updateDisplay("0"))
buttons.at(18).addEventListener("click", () => updateDisplay("."))
buttons.at(19).addEventListener("click", () => updateDisplay("=")) 


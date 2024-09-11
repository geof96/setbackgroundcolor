console.log("Jeg sætter baggrundsfarve")

let inp = document.querySelector(".inpColor")
console.log(inp)

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

pbCol.textContent = "Tryk mig for set color";

let bdy = document.querySelector("body")
console.log(bdy)

const pTags = document.getElementsByTagName('p')

//Color picker
let inpColorPicker = document.getElementById("inpColorPicker")

//Set background color function
function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

// Chooses different color depending on what keys are pressed
pbCol.addEventListener('click', setBackgroundColor);
document.addEventListener('keyup', setBackgroundColor);


var inpColorValue = document.querySelector(".inpColorValue")
inpColorValue.value = bdy.style.backgroundColor;


function useColorPicker(){
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}
document.addEventListener("input", useColorPicker)
inpColorPicker.addEventListener("dragenter", useColorPicker)


let pTagArr = Array.from(pTags)
console.log(pTagArr)
pTagArr.forEach(p => p.textContent = "Hej fra foreach!")

/*
function changeColorBody() {
    const bdy = document.body;
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Genererer en tilfældig farve
    bdy.style.backgroundColor = randomColor;

    // Skriv værdien af backgroundColor til inputfeltet
    const inpColorValue = document.querySelector('.inpColorValue');
    inpColorValue.value = bdy.style.backgroundColor;
}
*/


const button = document.querySelector("#colorButton");
const rgbColor = document.querySelector("#rgbColor");
const body = document.body;


// random color generator function
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    // assigning all three colors in one variable --> finalColor
    const finalColor = `rgb(${red}, ${green}, ${blue})`;
    return finalColor;
}


// adding event listener on the button
button.addEventListener("click", ()=>{
    // calling randomColor function
    const randomColor = randomColorGenerator();
    // changing body color
    body.style.backgroundColor = randomColor;
    // updating rgb value on screen
    rgbColor.textContent = randomColor;
})
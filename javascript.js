const container = document.querySelector("#container");
const buttonContainer = document.querySelector("#buttonContainer");

const button = document.createElement("button");

button.id = "popup";

button.textContent = "Change Size";

buttonContainer.appendChild(button);

let numSquares = 16;

button.addEventListener("click",() =>{
    numSquares= Number(prompt("Input number of squares per side","16"));
    if(numSquares > 100){
        numSquares = 100;
    }
    container.replaceChildren();
    constructNew();
});

container.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("squareClass")){
        e.target.style.backgroundColor = "red";
    }
});

container.addEventListener("mouseout", (e) => {
    if(e.target.classList.contains("squareClass")){
        e.target.style.backgroundColor = "blue";
    }
});

function constructNew(){
    const squareSize = 900 / numSquares; //total size is 900px, divide by number of squares to get dimension of each square
    const borderSize = Math.min(5, squareSize / 4);
    for (let i = 0; i < (numSquares * numSquares); i++)
    {
        const square = document.createElement("div");
        square.classList.add("squareClass");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.borderWidth = `${borderSize}`;
        container.appendChild(square);
        // square.setAttribute("activate","Off");
    }
    
};

constructNew();


// const squares = document.querySelectorAll(".squareClass");

// squares.forEach((item) => {
//     item.addEventListener("mouseenter",(e) => {
//         // item.setAttribute("activate","On");
//         item.style.backgroundColor = "red";
//     })

//     item.addEventListener("mouseleave",(e) =>{
//         // if(item.getAttribute("activate") == "On")
//         // {
//         //     item.style.backgroundColor = "red";
//         // }
//         // item.setAttribute("activate","Off");
//         item.style.backgroundColor = "blue";
//     })
// });




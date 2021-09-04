const colorBtn = document.querySelector("#change-color");
const colorList = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
const body = document.querySelector("body");
let color = document.querySelector("#color");
// const bodyColor = document.querySelector("text");
// const body = document.querySelector("body");
colorBtn.addEventListener("click",() => {
    let index = [parseInt((Math.random()*colorList.length)+1),
        parseInt((Math.random()*colorList.length)+1),
        parseInt((Math.random()*colorList.length)+1),
        parseInt((Math.random()*colorList.length)+1),
        parseInt((Math.random()*colorList.length)+1),
        parseInt((Math.random()*colorList.length)+1)];
    // const color = "yellow";
    
    body.style.backgroundColor = `#${colorList[index[0]]}${colorList[index[1]]}${colorList[index[2]]}${colorList[index[3]]}${colorList[index[4]]}${colorList[index[5]]}`;
    color.textContent = body.style.backgroundColor;
    console.log(color.value);
});
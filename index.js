let x = 0
document.querySelector("#counter").innerText = x
document.querySelector(".cookie").addEventListener("click", iterate)

function iterate(){
    x += 1;
    console.log(x);
    document.querySelector("#counter").innerText = x;
}


// // document.querySelector(".text").addEventListener("click", smallerText())

//the text should get larger upon user clicking.  the text should not get larger then 100px.  we will use the value of 16px to increment size.
document.querySelector(".button1").addEventListener("click", largerText)

document.querySelector(".button2").addEventListener("click", smallerText)

function largerText(){
    txt = document.querySelector("#random1");
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size')
    currentSize = parseFloat(style);
    if ((currentSize + 8) > 100){
        txt.style.fontSize = "100px"
    } else {
        txt.style.fontSize = (currentSize + 8) + "px";
    }
}

function smallerText(){
    txt = document.querySelector("#random1");
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size')
    currentSize = parseFloat(style);
    if ((currentSize - 1) < 1){
        txt.style.fontSize = "1px"
    } else {
        txt.style.fontSize = (currentSize - 1) + "px";
    }
}

// text input box should turn the background color of the website to a specific color.  blue, green, red, orange, yellow will be the colors.
document.querySelector('.button3').addEventListener("click", changeColors)

function changeColors(){
    let colorValue = document.querySelector("#randomColor").value
    if(colorValue == "blue"){
        document.querySelector("body").style.backgroundColor = "blue"
    } else if (colorValue == "red"){
        document.querySelector("body").style.backgroundColor = "red"
    } else if (colorValue == "yellow"){
        document.querySelector("body").style.backgroundColor = "yellow"
    } else if (colorValue == "green"){
        document.querySelector("body").style.backgroundColor = "green"
    } else if (colorValue == "orange"){
        document.querySelector("body").style.backgroundColor = "orange"
    }
    console.log(colorValue)
}

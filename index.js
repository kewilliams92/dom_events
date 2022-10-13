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
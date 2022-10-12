let x = 0
document.querySelector("#counter").innerText = x
document.querySelector(".cookie").addEventListener("click", iterate)

function iterate(){
    x += 1;
    console.log(x);
    document.querySelector("#counter").innerText = x;
}

document.querySelector(".text").addEventListener("click", largerText())
document.querySelector(".text").addEventListener("click", smallerText())


//the text should get larger upon user clicking.  the text should not get larger then 100px.  we will use the value of 16px to increment size.

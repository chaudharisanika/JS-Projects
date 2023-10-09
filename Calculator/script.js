const result = document.querySelector("#result")
const clear = document.querySelector("#btn")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btnd = document.querySelector("#btnd")

const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btnm = document.querySelector("#btnm")

const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btnp = document.querySelector("#btnp")

const btndo = document.querySelector("#btndo")
const btn0 = document.querySelector("#btn0")
const btnmu = document.querySelector("#btnmu")

const btnr = document.querySelector("#btnr")
const h1 = document.querySelector("h1")

// const calc = document.querySelector("calculator")
const calcn = document.querySelector(".calculatorn")


function clearScreen() {
    result.value = "";
}
function calculate() {
    var p = result.value;

    try {
        var q = eval(p); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            // alert("Wrong Syntax Please try again");
            h1.innerText="Wrong Syntax try again"
            document.getElementById("error").className = "calcn"; 
        } else {
            throw e;
        }
    }
   
    result.value = q;
}



clear.addEventListener("click",clearScreen)

btn1.addEventListener("click",()=>result.value+=1)
btn2.addEventListener("click",()=>result.value+=2)
btn3.addEventListener("click",()=>result.value+=3)
btnd.addEventListener("click",()=>result.value+="/")

btn4.addEventListener("click",()=>result.value+=4)
btn5.addEventListener("click",()=>result.value+=5)
btn6.addEventListener("click",()=>result.value+=6)
btnm.addEventListener("click",()=>result.value+="-")

btn7.addEventListener("click",()=>result.value+=7)
btn8.addEventListener("click",()=>result.value+=8)
btn9.addEventListener("click",()=>result.value+=9)
btnp.addEventListener("click",()=>result.value+="+")
btnmu.addEventListener("click",()=>result.value+="*")

btndo.addEventListener("click",()=>result.value+=".")
btn0.addEventListener("click",()=>result.value+=0)

btnr.addEventListener("click",calculate)


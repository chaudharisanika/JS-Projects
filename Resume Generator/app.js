const input = document.querySelector("input");
const save1 = document.querySelector("#save");
const name2 = document.querySelector("#name");
save1.addEventListener("click",()=>{
    const name1 = input.value;
    name2.innerText=name1;
})
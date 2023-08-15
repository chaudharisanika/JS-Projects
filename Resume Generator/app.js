const add1 = document.querySelector("#btn1");
const skill = document.querySelector("#skill");
// const skilladd = document.querySelector("#skilladd")
add1.addEventListener("click",function(){
       // e.preventDefault();
       let newSkill = document.createElement("inputsss");
       newSkill.classList.add('skill');

       let sk = document.querySelector("#sk");
       sk.append(newSkill);
       
})
console.log('hARRY')
let Box= document.getElementsByClassName("box")
console.log(Box)
Box[1].style.backgroundColor="red"
document.getElementById("green").style.backgroundColor="green" 
// Takes 1st container of that class 
document.querySelector(".box").style.backgroundColor="yellow"
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor=("green")
});
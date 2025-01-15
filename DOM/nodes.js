console.log("Hello world")

//document.body.firstElementChild 
//document.body.firstElementChild.childNodes 
//document.body.firstElementChild.children-->
console.log(document.body.firstElementChild)
console.log(document.body.lastChild)

var x = document.getElementsByTagName("th");
x[0].innerHTML = "Missing";
x[0].style.backgroundColor = "Red";
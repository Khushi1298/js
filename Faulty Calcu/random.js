/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
let random =Math.random()
let a=prompt("Enter First Operand")
let b=prompt("Enter Operator")
let c=prompt("Enter Second Operand")
console.log(random)
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if(random>0.1)
{
    //Perform correct calculation
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
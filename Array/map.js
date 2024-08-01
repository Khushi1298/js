let a=[4,8,3,2,6]
let b =[]
for(let i=0;i<a.length;i++)
{
    const ele =a[i] ;
    b.push(ele*2)
}
console.log(b)
for(let i=0;i<a.length;i++)
    {
        const ele =a[i] ;
        b.push(ele**3)
    }
console.log(b)
let c=a.map((e)=> //call back func
{
    return e*3 ;
})
console.log(c) 
const greaterThanSeven=(e)=> {
        if(e>7)
        {
            return true 
        }
        return false 
}
console.log(a.filter(greaterThanSeven))
console.log(b.filter(greaterThanSeven))
console.log(c.filter(greaterThanSeven))
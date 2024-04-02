let student = {
     name : 'KHUSHI',
     age : 20 ,
     cgpa : 8.1 ,
     isPass :  true ,
} ;
for (let i in student)
{
    console.log("Key :",i,"\n Value :",student[i]) ;
    console.log(typeof(student)) ;
}
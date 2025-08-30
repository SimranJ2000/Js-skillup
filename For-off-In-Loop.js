//for- off loop is used to iterate over the properties of an object
//for- in loop is used to iterate over the elements of an iterable object like an array
//1. for-off loop
//syntax for  for off loop
let arr = ["Apna Ghar"];      
for(let element of arr){
    console.log(element); //code to be executed     
    //code to be executed
}
//2. for-in loop
//syntax for for in loop
let obj = {
    name: "Sijahan",
     age: 24,
      city: "Bangalore"};
for(let key in obj){
    console.log(key + ": " + obj[key]); //code to be executed
}   
//calculate the length of string using for-in loop
let str = "Simranjahan";
let length = 1;
for(let index in str){
    length++;    
}
console.log("The length of the string is: " + length);
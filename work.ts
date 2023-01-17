/* 
Create a function that takes an array of numbers as an argument and returns the sum 
of all the numbers in the array. Use type annotations to indicate the type of the 
parameter and return value.

*/
let numbers :
 number[] = 
 [1,43,6,4,2]

/* ---------------------------------------------------- */

function math(numbers) {
    let sum : number = 0; 

    numbers.forEach(item => {
      sum += item;
    });
  
    console.log(sum); 
    return sum;
  }
  
  math(numbers); 
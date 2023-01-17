/*
Create a function that takes an array of numbers as an argument and returns the sum
of all the numbers in the array. Use type annotations to indicate the type of the
parameter and return value.

*/
var numbers = [1, 43, 6, 4, 2];
/* ---------------------------------------------------- */
function math(numbers) {
    var sum = 0;
    numbers.forEach(function (item) {
        sum += item;
    });
    console.log(sum);
    return sum;
}
math(numbers);

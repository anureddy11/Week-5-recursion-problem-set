/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
    if (n===0){
        return 1
    }
    if (n<0){
        return null
    }
    if(n===1){
        return 1
    }

    else{

        return n *factorial(n-1)
    }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
    if (array.length<1){
        return 0
    }

    else{

        return array[0] + sum(array.slice(1))
    }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15


// let arraySum = function(array) {
//     if(array.length<1){
//         return []
//     }
//     else if (Array.isArray(array[0])){
//         return [...arraySum(array[0]), ...arraySum(array.splice(1))]
//     }
// };

// 4. Check if a number is even.
// isEven(2) // true
// isEven(9) // false
let isEven = function(n) {

    if (n/2===1){
        return true
    }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {

    if (n===0){
        return 0
    }
    else if (n>0) {
        return n-1 + sumBelow(n-1)
    }

    else{
        return n+1 + sumBelow(n+1)
    }


};



// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {


    if(y>x){
        if (y-x<2){
            return []
        }

        else{
            return [x+1, ...range(x+1,y)]
        }
    }else{
        if (x-y<2){
            return []
        }

        else{
            return [x-1, ...range(x-1,y)]
        }


    }



};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
    if (exp<1){
        return 1
    }

    else{
        return base * exponent(base, exp-1)
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
  if(n===1){
    return true
  }

  else{
    if(n%2 ===0){
    return powerOfTwo(n/2)
  } else {
    return false
  }
}
}



// 9. Write a function that reverses a string.
// reverse("hello"); // olleh
let reverse = function(string) {
    if (string.length<1){
        return string
    }

    else {
        lastChar = string.charAt(string.length-1)
        newString = string.slice(0,-1)
        return lastChar+reverse(newString)

    }
};

// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true
let palindrome = function(string) {
    if (string.length<2){
        return true
    }

    else{
        firstChar=string[0]
        lastChar = string[string.length-1]
        if(firstChar===lastChar){
            return palindrome(string.slice(1,-1))
        }
        else{
            return false
        }
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4


let modulo = function(x, y) {

    if (Number.isInteger(x/y)){
        return 0
    }

    else{
        return 1 + modulo(x-1,y)
    }

};


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function(x, y) {

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function(str) {
};

// 17. Reverse the order of an array
let reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function(value, length) {
    if(length<2){
        return [value]
    }

    else{
        return [value, ...buildList(value, length-1)]
    }
};


// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function(n) {
    if(n<2){

        return [`${n}`]
    }

    else{
        if(n%5===0 && n%3===0){
            return [...fizzBuzz(n-1),"FizzBuzz"]
        }
        else if(n%3===0){
            return [...fizzBuzz(n-1),"Fizz"]
        }

        else if(n%5===0){
            return [...fizzBuzz(n-1),"Buzz"]
        }

        else {
            return [...fizzBuzz(n-1),`${n}`]
        }
    }
};


// console.log(fizzBuzz(15)) // ['1','2','Fizz','4','Buzz']

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {

    if(array.length<1){
        return []
    }
    else{

        return [callback(array[0])*2, ...rMap(array.slice(1),callback)]
    }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2


let countKeysInObj = function(obj, key,count=0) {
    for(const prop in obj){
            if(prop===key){
                count++
            }
            if(typeof obj[prop]==="object"){
                count =countKeysInObj(obj[prop],key,count)
            }

    }
    return count
}


let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
debugger
// console.log(countKeysInObj(obj, 'r')) // 1
// console.log(countKeysInObj(obj, 'e')) // 2

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function(obj, value, count =0) {

    for(const key in obj){
        if(obj[key] === value){
            count++
        }
        if(typeof obj[key] === "object"){
            count=countValuesInObj(obj[key],value,count)
        }
    }
    return count



};

debugger
console.log(countValuesInObj(obj, 'r')) // 2
console.log(countValuesInObj(obj, 'e')) // 1

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function(obj, oldKey, newKey) {



};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
// let fibonacci = function(n) {
//     if (n <= 0) {
//       return 0; // Base case: Fibonacci(0) is 0
//     } else if (n === 1) {
//       return 1; // Base case: Fibonacci(1) is 1
//     } else {
//       return [fibonacci(n - 1)+fibonacci(n - 2)]; // Recursive case
//     }
//   };


// console.log(fibonacci(5)); // [0,1,1,2,3,5]


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

let capitalizeWords = function(array) {
    if (array.length<1){
         return []
    }
    else{
        return [ array[0].toUpperCase(), ...capitalizeWords(array.slice(1))]
    }

};

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function(array) {
    if (array.length<1){
        return []
   }
   else{
       return [ firstCap(array[0]), ...capitalizeFirst(array.slice(1))]
   }
};

let firstCap = (str)=>{
    let arr = str.split("")
    arr[0]=arr[0].toUpperCase()
    return arr.join("")
}

console.log(capitalizeFirst(['car','poop','banana'])); // ['Car','Poop','Banana']

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function(obj) {

    if (Object.keys(obj).length === 0) {
        return 0;
    }

    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const restOfObj = { ...obj };
    delete restOfObj[firstKey];

    if (typeof obj[firstKey] === "object") {
        return nestedEvenSum(obj[firstKey]) + nestedEvenSum(restOfObj);
    } else {
        return (typeof obj[firstKey] === "number" && obj[firstKey] % 2 === 0 ? obj[firstKey] : 0) + nestedEvenSum(restOfObj);
    }

};


// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// console.log(nestedEvenSum(obj1)); // 10

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function(array) {

    if (array.length<1){
        return []
    }

    else if(Array.isArray(array[0])){
        return [...flatten(array[0]), ...flatten(array.slice(1))]
    }

    else{
        return [array[0], ...flatten(array.slice(1))]
    }
};

// console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function(str, obj={}) {
    if(str.length<1){
        return obj
    }

    else{

        let element = str[0]
        if (element in obj) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }

        str= str.slice(1)
        return letterTally(str,obj)
    }


};

// console.log(letterTally('potato')); // {p:1, o:2, t:2, a:1}


// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function(list) {
    if (list.length<1){
        return []
    }

    else{
        if (list[0]===list[1]){
            return [...compress(list.slice(1))]
        }

        else{
            return [list[0],...compress(list.slice(1))]
        }
    }


};
// console.log(compress([1,2,2,3,4,4,5,5,5])) // [1,2,3,4,5]
// console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4])) // [1,2,3,4,2,5,4]

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function(array, aug) {

    if (array.length<1){
        return array
    }

    else{
        return [[...array[0],aug], ...augmentElements(array.slice(1),aug)]
    }
};

// console.log(augmentElements([[],[3],[7]], 5)); // [[5],[3,5],[7,5]]


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
    if(array.length<1){
        return array
    }

    else{
        if(array[0]===0 && array [1]===0){
            return minimizeZeroes(array.slice(1))
        }

        else{
            return [array[0], ...minimizeZeroes(array.slice(1))]
        }
    }

};

// console.log(minimizeZeroes([2,0,0,0,1,4])) // [2,0,1,4]
// console.log(minimizeZeroes([2,0,0,0,1,0,0,4])) // [2,0,1,0,4]

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function(input) {
};

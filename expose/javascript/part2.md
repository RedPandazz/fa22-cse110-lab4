1. It will output 3, this is because there are three entries when passing the price parameter as we call discountPrices.
2. It will output 150, since 300 is the last entry from the prices array that we passed in, discountedPrice will have a reassigned value of the latest price entry after the discount. hence 150.
3. It will output 150, finalPrice's value will be reassigned to the latest discounted price entry multiplied by 100 and divided by 100, hence it would be the same as the latest discounted price entry.
4. The function will return [ 50, 100, 150 ], this is because the original price entries were [100, 200, 300] and the applied discount that we passed into the functino is 0.5 which is 50% of its original price. We also know that the function returns an array of prices after we applied the discount to the original prices, hence [ 50, 100, 150 ].
5. An error will occur, this is because i is defined using the keyword let and it resides in the inner loop block, making it inaccessible from the console.log that resides outside of that block.
6. An error will occur,  this is because discountPrice is defined using the keyword let and it resides in the inner loop block, making it inaccessible from the console.log that resides outside of that block.
7. It will output 150, finalPrice's value will be reassigned to the latest discounted price entry multiplied by 100 and divided by 100, hence it would be the same as the latest discounted price entry. Moreover, finalPrice is declared in the same block as the console.log call.
8. The function will return [ 50, 100, 150 ]. Similarly as number 4, the function will return the discounted prices of the original prcies that we inputted into the function as parameters. Since we are returning the discounted array, it is still valid because discounted is still declared in the same block/scope as the return statement.
9. An error will occur, this is because i is declared within the loop block, which is beyond the scope of the console.log call.
10. It will output 3, this is because length is declared within the same scope as the console.log call and a value has been initially already assigned to it (which is the length of the prices array that is provided as a parameter).
11. The function will return [ 50, 100, 150 ]. In this case, we know that the variables that are being used within the function does not have any reassignment. Therefore, it will simply calculated the discounted prices and output it as an array.
12. 
A: student.name
B: student['Grad Year']
C: student.greeting()
D: student['Favorite Teacher'].name
E: student.courseLoad[0]
13. 
A: 32, concatenation of a string and an integer
B: 1, implicit conversion of string due to arithmetic operation
C: 3, Adding 3 to nothing.
D: 3null, type conversion of null into string due to string concatenation
E: 4, type conversion from boolean to integer: 1 + 3
F: 0, type conversion into integer
G: 3undefined, type conversion of null into string due to string concatenation
H: NaN, cannot perform operation with undefined
14. 
A: true, will convert into the same data type for comparison
B: false, 2 is greater than the 1 in 12
C: true, will convert into the same data type for comparison
D: false, the === operator is a strict comparison
E: false, they are both not equivalant after the conversion
F: true, boolean function call will return true which is strictly the same as the value true
15. The == operator compares two values loosely in a sense that it allows for type conversions, meanwhile === compares two values strictly without type conversions.
17. As we pass in the values from the modifyArray call, it will create a new array to store the results that are to be returned by the function. As it is looping through the content of the input array, the function will modify the contents of the input array using the callback function passed as a parameter which is doSmoething. doSomething will multiply a number by 2. Therefore, the contents of the original array will be multiplied by two and be pushed into the result array to be returned.
19. The output is 1,4,3,2

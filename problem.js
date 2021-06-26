function getFactorial (array,int) {

    let factorialArray = []
   
    for (let index = 0; index < array.length; index++) {
        const dividedElement = array[index] / int;
        // console.log(dividedElement);
        let factorial = 1;
        for (let j = dividedElement; j >= 1; j--) {
             factorial = factorial * j ;
             
             
            
        }
        factorialArray.push(factorial)
      
        
    }
   
let largestNumber = 0;
// console.log(factorialArray);
for (let i = 0; i < factorialArray.length; i++) {
    const element = factorialArray[i];
    // console.log(element);

    if (element > largestNumber) {
        largestNumber = factorialArray[i]
   
    }
    
    
}

    return largestNumber;

}
console.log(getFactorial([2,5,3,4,10],3));


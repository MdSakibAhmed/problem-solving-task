function getFactorial (array,int) {

    let factorialArray = []
    let factorial = 1;
    for (let index = 0; index < array.length; index++) {
        const dividedElement = array[index];
        console.log(dividedElement);

        for (let j = dividedElement; j >= 1; j--) {
          
             factorial = factorial * j ;
             
            
        }
        factorialArray.push(factorial)
        
    }
    return factorialArray


}
console.log(getFactorial([2,5,3,4],2));

let factorial5 = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial5 = factorial5 * i;
// }
for (let i = 5; i >= 1; i--) {
    factorial5 = factorial5 * i ;
    
}
console.log(factorial5);
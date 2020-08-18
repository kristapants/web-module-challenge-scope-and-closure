// 1. I would have expected type of both a and be to return undefined because they are defined only inside of the function. the console log for a returns false and true for b. I do not understand why.

// 2.

function createBase(baseNumber) {
    return function(additive) {
        return baseNumber + additive;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
var addEightteen = createBase(addSix(12));
console.log(addEightteen(2));




// function addFunctionAndLog(x, y) {
//     return function(N) {
//       return function(M) {
//         return (x + y) * N + M;
//       }
//     }
//   }
  
//   var addnumbers = addFunctionAndLog(5,7)
  
//   var thisIsDumb = addnumbers(8)
  
//   console.log(thisIsDumb(5))

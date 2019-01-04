//                      What are the differences between let, const and var?

/*  CONST
   1.const declarations are block scoped
   2.const cannot be updated or re-declared
   
 */
 
 //Example:
   const People = {
      name: 'John',
      age: 20,
      country: 'USA'
      }
      console.log(People) //That is be O.K
     
   
 //and
       const Car = {
       model:'Audi',
       Year: 2015
       }
       console.log(Car)   // The answer is : name: Audi, Year: 2015

/*!!!! But We can not use it:  console.log(People.model) or console.log(Car.country) 
   The answer is Undefined!!!!!
*/
// LET and VAR


// With VAR we can rename value of veriable and Var have a little problem:
//Example:
var a = 'Hello';
var a = 'Hello World!'
console.log(a) /* The answer is : a = 'Hello World!' ,because the we rename the value of variable from 'Hello' to 'Hello World!'
                  and problem VAR is that:
                  !!!!!Var variables can be re-declared and updated!
                   */
                   
                   
    // LET
    
      //LET is block scoped:
      
     let people = 'John'
     console.log(people)
     //But we can not be declare variable people:
     let people = 'Michel'
     console.log(people)
     //The answer is:  SyntaxError: Identifier 'people' has already been declared
     
     // LET can be updated but not re-declared.
     
   // Hoisting? What is this?
   /*Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

If a developer doesn't understand hoisting, programs may contain bugs (errors).

To avoid bugs, always declare all variables at the beginning of every scope.

Since this is how JavaScript interprets the code, it is always a good rule.

JavaScript in strict mode does not allow variables to be used if they are not declared.

*/

// Example:

  var x = 10
  var y;
  console.log('The number x is ' + ' ' + x + ' ' + y) //The answer is :  The number x is  10 undefined
  
  //But next Example:
  
   var x = 5; 
   console.log('The number is ' + ' ' + x + ' ' +y)
   var y = 10
   //The answer will be : The number is  5 undefined
  
   
   

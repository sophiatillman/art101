/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @AuthorName   Sophia
 * @created 11.05.2009
 * @License  Public Domain
 **/
  function isEven(x){
  }
 function isEven(x){
     return (x % 2 == 0);
 }
 //test function
 console.log("is 1 even? ", isEven(1));
 console.log("is 2 even? ", isEven(2));

 array = [200, 5, 70, 134, 789, 1000, 600]
 console.log("my array", array);

 var result = array.map(isEven);
 //should return [true, false, true, true, false, true, true]
 console.log("test of evenness of array",result);

 var result = array.map(function(x){
   return x ** 0.2;
 })
 //should return [2.8853998118144273, 1.379729661461215, 2.3389428374280206, 2.6633053388644834, 3.7967797155355707, 3.9810717055349727, 3.5944318187380233]
 console.log("new array!",result);

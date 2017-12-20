//Chapter 1 Fundementals

// 1. Setting and Swapping
let myNumber = 42;
let myName = 'devon';
temp = myName;
myName = myNumber;
myNumber = temp;

console.log(myNumber + " " + myName);

// 2. Print and Count
function printAndCount(){
    let count = 0;
    for(var i = 512; i <= 4096; i++){
        if(i % 5 === 0){
            console.log(i);
            count++;
        }
    }
    console.log(count);
}
 printAndCount();

// 3. Print -52 to 1066
function printAll(){
    for(var i = -52; i <= 1066; i++){
        console.log(i);
    }
}
printAll();

// 4. Multiples of Six
function printWhile(){
    num = 6;
    while(num < 60000){
        if(num % 6 === 0){
            console.log(num);
        }
        num++;
    }
}
printWhile();

// 5. Don’t Worry, Be Happy
function  beCheerful(){
    for(var i = 0; i < 98; i++){
      console.log("good morning!");
    }
  }
beCheerful();

// 6. Counting, the Dojo Way
function countDojo(){
    for(var i = 0; i<= 1000; i++){
      if(i % 5 === 0 && i !== 0){
        console.log('Coding');
      }if(i % 10 === 0 && i !== 0){
        console.log('Dojo');
      }else{
        console.log(i);
      }
    }
  }
  
  countDojo();

// 7. Multiples of Three – but Not All
function someMultiples(){
    for(var i = -300; i <= 0; i++){
        if(i % 3 == 0 && i != -3 && i != -6){
            console.log(i);
        }
    }
}
someMultiples();

// 8.What Do You Know?
function sayWhat(whatYouSay){
    console.log(whatYouSay);
}

// 9. Print integers from 2000 to 5280, using a WHILE

function printInt(){
var num = 2000;
    while(num <= 5280){
      console.log(num);
      num++;
    }
}
printInt();

// 10. Whoa, That Sucker’s Huge…
function addOdd(){
    var sum = 0;
    for(var i = -300000; i<= 300000; i++){
      if(i % 2 !== 0){
        sum += i;
      }
    }
    console.log(sum);
  }
  
  addOdd();

// 11. You Say It’s Your Birthday
function guessMyBday(num1,num2){
    let birthday = [10,28];//can re-write code to test bday passed as array.
    if((num1 == 10 || num1 == 28)&&(num2 == 10 || num2 == 28)&&(num1 != num2)){
      console.log("aww yeah, its ma birfday!");
    }else{
      console.log('just another day...');
    }
  }
  guessMyBday(28,10);

  // 12. Countdown by Fours
  function logPos(){
    var num = 2016;
    
    while(num > 0){
      console.log(num);
      num  = num - 4;
    }
  }
  
  logPos();

  // 13.  Leap Year
  function leapYear(year){
    if((year % 4 === 0 || year % 400 === 0) && (year % 100 !== 0)){
      console.log(year + " is a leap year");
    }else{
      console.log(year + " is not a leap year");
    }
  }
  
  leapYear(2088);

  // 14. Flexible Countdown
  function flexCount(lowNum, highNum, mult){
    for(var i = highNum; i >= lowNum; i--){
      if(i % mult === 0){
        console.log(i);
      }
    }
  }
  
  flexCount(10,100,5);

  // 15. The Final Countdown
  function finalCount(mult,start,end,skip){
    var i = start;
    while(i <= end){
      if(i % mult === 0 && i !== skip){
        console.log(i);
      }
      i++;
    }
  }
  finalCount(3,5,17,9);

  //Chapter 1 – Fundamentals pt.2

  // 1. Countdown
  function countDown(num){
    var myArr =[];
    for(var i = num; i>=0; i--){
      myArr[i] = i;
    }
    myArr = myArr.reverse();
   // console.log(myArr + " is " + myArr.length + " long.");
    return myArr;
  }
  
  countDown(6);

  // 2. Print and Return
  function printReturn(arr){
    console.log(arr[0]);
    return arr[1];
  }
  
  printReturn([7,4]);

  // 3. First Plus Length
  function firstPlus(arr){
    return arr[0] + " " + arr.length;
  }
  
  firstPlus([10,9,5]);

  // 4. Values Greater than Second
  function greaterThan(){
    var arr = [1,3,5,7,9,13];
    var temp =[];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[1]){
        temp.push(arr[i]);
      }
    }
    console.log(temp);
    return temp.length;
  }
  
  greaterThan();

  // 5. Values Greater than Second, Generalized
  function greaterThanTwo(arr){
    var temp =[];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[1]){
        temp.push(arr[i]);
      }
    }
    console.log(temp);
    return temp.length;
  }
  
  greaterThanTwo([1,3,5,7,9,13]);

  // 6. This Length, That Value (I don't understand what this problem is asking.)

  // 7. Fit the First Value
  function fit(arr){
    if(arr[0] > arr.length){
      return "Too big!";
    }else if(arr[0] < arr.length){
      return "Too small!";
    }else if(arr[0] == arr.length){
      return "Just right";
    }
  }
  
  fit([9,1,2,3,4]);

  // 8. Fahrenheit to Celsius
  function fahrenheitToCelsius(fDegrees){
    return ((fDegrees - 32) * 5/9);
  }
  
  fahrenheitToCelsius(32);

  // 9. Celsius to Fahrenheit
  function  celsiusToFahrenheit(cDegrees){
    
    var tempF = ((9/5 * cDegrees) + 32);
   
    return tempF;
  }
  
  celsiusToFahrenheit(32);

  // 9. Optional
  function equalPoint(){
    var equals = [];
    for(var i = 200; i > -200; i--){
      if(celsiusToFahrenheit(i) == i){
        equals.push(i);
      }
    }
    return equals;
  }
  
  equalPoint();

// Chapter 1 Fundementals pt.3

// 1. Biggie Size
function makeItBig(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      arr[i] = "big";
    }
  }
  return arr;
}

makeItBig([-1,3,5,-5]);

// 2. Previous Lengths
function previousLengths(arr){
  
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].length; 
  }
  arr.unshift(0); //index 0 will always be 0 since there is no string before it.
  arr.pop();
  return arr;
}

previousLengths(['cat','rabbit','apple','horn','ninja']);

// 3. Print Low, Return High
function lowHigh(arr){
  console.log(Math.min(...arr));
  return Math.max(...arr);
}

lowHigh([12,9,4,7,192,-9]);

// 4. Add Seven to Most
function addSeven(arr){
  var newArr = [];
  for(var i = 1; i<arr.length;i++){
    newArr[i-1] = arr[i] + 7;
  }
  return newArr;
}
addSeven([1,2,3,4,5,6,7,8,9]);

// 5. Print One, Return Another
function printReturn(arr){
  function checkOdd(num){
    return num % 2 !== 0;
  }
  console.log(arr[arr.length - 2]);
  return arr.find(checkOdd);
}

printReturn([2,4,6,8,9,8,6,4,2]);

// 6. Reverse Array
function reverseArr(arr){
  return arr.reverse();
}

reverseArr([1,2,3,4,5]);

// 7. Double Vision
function dblArr(arr){
  var newArr = [];
  function double(item){
    newArr.push(item * 2);
  }
  arr.forEach(double);
  console.log(arr);
  return newArr;
}

dblArr([2,4,6,8]); 

//Or with map

function dblMap(arr){
  let dbl = (item) =>{
    return item * 2;
  };
  console.log(arr);
  return arr.map(dbl);
}

dblMap([3,6,9,12]);

// 8. Outlook: Negative
/*
let makeNegative = (arr) =>{
  let checkNum = (item) =>{
    if(item <= 0){
      return item;
    }else{
      return item * -1;
    }
  };
  console.log(arr);
 return arr.map(checkNum);
};

makeNegative([0,1,-100,100,0,5,-6]);
*/
//re-factored

let makeNegative = (arr) =>{
  let checkNum = (item) =>{
   return item <=0 ? item : item * -1;
  };
  return arr.map(checkNum);
};

makeNegative([0,1,-100,100,0,5,-6]);

// 9. Count Positives
let countPositives = (arr) =>{
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      count += 1;
    }
  }
  arr[arr.length - 1] = count;
  console.log(count);
  return arr;
};

countPositives([1,2,3,-4,5,-1,1]);

// 10. Always Hungry
let alwaysHungry = (arr) =>{
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == "food"){
      console.log("yummy");
    }
  }
    if(arr.indexOf("food") == -1){
      console.log("I'm hungry!");
    }
};

alwaysHungry([1,2,3,"food"]);

// 11. Evens and Odds
let evensOdds = (arr) =>{
  for(var i = 0; i< arr.length; i+=3){
    if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0){
      console.log("That's odd!");
    }else if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0){
      console.log("even more so!");
    }
  }
};

evensOdds([1,2,3,2,4,6,1,3,5]);

// 12. Swap Toward the Center
// Works but needs re-factoring...
let swapcenter = (arr) =>{
  var center = Math.round(parseFloat((arr.length / 2)));
  
 for(var i = arr.length - 1; i >= center; i = i-2){
   var last = arr[i];
   var first = arr[arr.length - (i+1)];
   console.log(first,last);
   
   arr[i] = first;
   arr[arr.length - (i+1)] = last;
  
   }
   
   return arr;
};

swapcenter([true,42,"Ada",2,"pizza"]);

//13. Increment the Seconds
let addToOdd = (arr) =>{
  for(var i = 0; i<arr.length; i++){
    if(arr[i] %2 !== 0){
      arr[i] += 1;
      console.log(arr[i]);
    }
  }
  return arr;
};

addToOdd([1,2,3,4,5,6,7,8,9]);

//14. Scale the Array
let scaleArr = (arr,num) =>{
  for(var i = 0; i<arr.length;i++){
    arr[i] = arr[i]*num;
  }
  return arr;
};

scaleArr([1,2,3,4,5,6,7], 100);





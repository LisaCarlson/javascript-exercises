














// var test1 = [1,2,3];
// var test2 = [1,6,4,5,2];
// var test3 = [];


// function intersection(array1, array2) {
//     var result = [];
//     for (var x in array1) {
//         var elem = array1[x];
//         for (var y in array2) {
//             var check = array2[y];
//             if (elem === check) {
//                 result.push(elem);
//             }
//         }
//     }
//     return result;
// }


// console.log(intersection(test1, test2));
// console.log(intersection(test1, test3));

//Given a string, determine if all of the characters in the string are unique or not. 
//This function, allCharsUnique should return a Boolean value.

  var data = [
    {department: 'Food', totalPrice: 10},
    {department: 'Food', totalPrice: 14},
    {department: 'Not Food', totalPrice: 2},
    {department: 'Not Food', totalPrice: 682}
  ];
//   console.log(sumBy(data));
  // { Food: 24, 'Not Food' : 684 }

// function find_in_array(array, element) {
//   for (var x in array) {
//     if (array[x] === element) {
//       return element;
//     }
//   }
//   return null;
// }

// var numbers = [1,2,3,4,5,6,7];
// var animals = ['cat', 'dog', 'fish', 'tiger'];

// console.log(find_in_array(numbers, 4));
// console.log(find_in_array(numbers, 14));
// console.log(find_in_array(animals, 'fish'));
// console.log(find_in_array(animals, 'shark'));



//Write a multiply function that multiplies two integers without using *.

// function multiplier(number1,number2) {
//   var integer1 = number1/1;
//   var integer2 = 1/number2;
//   return integer1/integer2;
// }

// console.log(multiplier(5,5));
// console.log(multiplier(10,2));


//Write a function named isPalindrome that takes a string and determines if it is a palindrome.

// function isPalindrome(string) {
//   var reverseString = '';
//   for (var i = string.length-1; i >= 0; i--) {
//     reverseString += string[i]
//   }
//   return reverseString.toUpperCase() === string.toUpperCase();
// }

// console.log(isPalindrome('Racecar'));
// console.log(isPalindrome('noon'));
// console.log(isPalindrome('hello'));

//You are given an array with integers between 1 and 1,000,000, but one integer is missing. Write a function that determines the missing value.

// var numbers = [1,2,3,4,5,6,7,8,10,11,12];

// function findInArray(array) {
//   var check = 0;
//   for (var x in array) {
//     if (array[x] !== check + 1) {
//       return array[x]-1;
//     }
//     check = array[x];
//   }
// }

// console.log(findInArray(numbers));




// function reverse(string) {
//   for (var i = 0; i < string.length/2; i++) {

//     var temp = string[i];

//     string[i] = string[string.length-1-i];
//     console.log(string[i]);
//     string[string.length-1-i] = temp;
//   }
//    return string;
// }


// console.log(reverse('Hello'));



// console.log(reverse('Hello world'));



//A closure is a function that binds up free variables



// Write a function named addString that takes a string of arithmetic involving 
// addition and returns the proper value. For example addString("10+20+30"); 
// would return 60 (as a Number).
// Write a function named multiplyString that takes a string of arithmetic involving 
// addition and returns the proper value. For example multiplyString("10*20*30"); would 
// return 6000 (as a Number).
// Is it possible to do an inplace swap in a String in JavaScript? How about an Array? Why?
//strings are immutable in javascript
//can this be done iterating through the string instead of splitting into an array

// function addString(string) {
//   for (var i =0; i < string.length; i++) {
//     if (string[i] !== '*'){

//     }
//   }
// }

// function addString(string) {
//   var stringArray = string.split('+');
//   return stringArray.reduce(function(previous, current){
//     return Number(previous)+Number(current);
//   });
// }

// console.log(addString("10+20+30"));


// function multiplyString(string) {
//   var stringArray = string.split('*');
//   return stringArray.reduce(function(previous, current){
//     return Number(previous)*Number(current);
//   });
// }
// console.log(addString("10*20*30"));



//Write a function named subtractString that takes a string of arithmetic 
//involving addition and returns the proper value. For example subtractString("10-20-30"); 
//would return -40 (as a Number).


// function subtractString(string) {
//   return string.split('-').reduce(function (previous, current) {
//     return Number(previous) - Number(current);
//   });
// }

// console.log(subtractString("10-20-30"));

// Write a function named divideString that takes a string of arithmetic 
// involving addition and returns the proper value. For example divideString("10/20"); 
// would return 0.5 (as a Number). What is the edge case in division? 
// Do not worry about covering it but please explain what it is.
//You can't divide by 0


// function divideString(string) {
//   return string.split('/').reduce(function (previous, current) {
//     if (Number(current) === 0) {
//       return "Cannot divide by 0";
//     }
//     return Number(previous) / Number(current);
//   })
// }

// console.log(divideString("10/20"));


//Write a function called strip which removes all leading and trailing whitespace from a string, but preserves whitespace not found at the beginning or end of the string.
// use substring, charAt , test empty array and full array
// function strip(string) {
//   var output = [];
//   var charsArray = string.split('');
//   for (var i=0; i < charsArray.length; i++) {
//     if (charsArray[i] !== ' ') {
//       output.push(charsArray[i]);
//     }
//   }
//   return output.join(' ');
// }

// console.log(strip('   This      is  a string   '));

//You are given an array with integers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one?
// var numbers = [1,2,3,4,3,5];

// function findDuplicate(array) {  
//   var orderedArray = array.sort();
//   return orderedArray.reduce(function(previous, current) {
//     return previous === current-1 ? previous : current;
//   });
// }

// console.log(findDuplicate(numbers)); //3


//Find the only element in an array that only occurs once. For example in [1,2,2,3,3,5,5,1,6], 6 is the only element that occurs precisely one time


// var numbers = [1,2,2,3,6,2,1,3,5,5,1];

// function findUnique(array) {  
//   var orderedArray = array.slice().sort();
//   return orderedArray.reduce(function(previous, current) {
//     return previous === current ? previous : current;
//   });
// }

// console.log(findUnique(numbers)); //6


//Write a function called toDecimal which takes a binary number and converts it to decimal. Here are some examples:

// toDecimal(0); // 0
//   toDecimal(1); // 1
//   toDecimal(11); // 3
//   toDecimal(1000); // 8
//   toDecimal(1100); // 12


// function toDecimal(number,base) {
//   var result = 0;
//   var array = number.toString().split('').reverse();
//   for (var i = 0; i < array.length; i++) {
//     result += Number(array[i]) * Math.pow(base,i);  
//   }
//   return result;
// }

// console.log(toDecimal(2301,4)); //177
// console.log(toDecimal(1233215,7));//159605


//Write a function named removeDupes which takes a string and removes all duplicate characters in the String. Here are some examples:
 // removeDupes('AABB'); // 'AB'
 // removeDupes('AaAaBbBb'); // 'AaBb'
 // removeDupes('cAtCaT'); // 'cAtCaT'


// function removeDupes(string) {
//   return string.split('').filter(function(char,index,array) {
//     return array.indexOf(char) == index;
//   }).join(''); 
// }

// console.log(removeDupes('AABB')); //'AB'
// console.log(removeDupes('AaAaBbBb')); // 'AaBb'
// console.log(removeDupes('cAtCaT')); // 'cAtCaT'

//Write a function named insensitiveRemoveDupes which takes a string and removes all duplicate characters regardless of capitalization. Here are some examples:
  // removeDupes('AABB'); // 'AB'
  // removeDupes('AaAaBbBb'); // 'AB'
  // removeDupes('cAtCaT'); // 'cAt'

// function insensitiveRemoveDupes(string) {
//   var result = '';
//   for (var i = 0; i < string.length; i++) { 
//     if(result.toLowerCase().indexOf(string.charAt(i).toLowerCase()) < 0) {
//       result += string.charAt(i);
//     }
//   }
//   return result;
// }

// console.log(insensitiveRemoveDupes('cAtCaT'));

// var string = 'foobar';
// var rotatedOnce = rotateEvenIndices(string);
// console.log(rotatedOnce);

// var rotatedTwice = rotateEvenIndices(rotatedOnce);
// console.log(rotatedTwice);

// var backToOriginal = rotateEvenIndices(rotatedTwice);
// console.log(string === backToOriginal); // true


//Write a function named rotateEvenIndices that take a String argument, here are sample tests to illustrate the behavior:

// function rotateEvenIndices(string){
//   var output = "";
//   var modulo = string.length % 2 === 0 ? string.length : string.length + 1;
//   for (var i = 0; i < string.length; i++){
//     var nextChar = string[i % 2 === 1 ? i : (modulo + i - 2) % modulo];
//     output += nextChar;
//   }
//   return output;
// }

// console.log(rotateEvenIndices('foobartz')); // aofbor

// function greatestProductOfPairs(array) {
//   var check = -Infinity;
//   for (var i = 0; i < array.length; i++) { 
//     var num1 = array[i];
//     for (var j = i+1; j < array.length; j++) {
//       var num2 = array[j];
//       if (num1 * num2 > check) {
//         check = num1 * num2;
//       }  
//     }     
//   }
//   return check;
// }


//Suppose you are given an array of integers. Find the largest product of any pair of integers in the array. Some examples:

// console.log(greatestProductOfPairs([2,3,4,-5,92,100])); // 9200
// console.log(greatestProductOfPairs([-2,3,-4,-5,-92,-100])); // 9200
// console.log(greatestProductOfPairs([1,100,100])); // 10000
// console.log(greatestProductOfPairs([-1,-2,3])); // 2










var json = {"dlpgcack": false, 
"indwqahe": null, 
  "caki": {"vvczskh": null, 
           "tczqyzn": false, 
           "qymizftua": "jfx", 
           "cyd": {"qembsejm": [null, "full-stack", null], 
                   "qtcgujuki": 79, 
                   "ptlwe": "lrvogzcpw", 
                   "jivdwnqi": null, 
                   "nzjlfax": "xaiuf", 
                   "cqajfbn": true}, 
           "kbttv": "dapsvkdnxm", 
           "gcfv": 43.25503357696589}, 
"cfqnknrm": null, 
"dtqx": "psuyc", "zkhreog": [null, {"txrhgu": false, "qkhe": false, 
"oqlzgmtmx": "xndcy", "khuwjmktox": 48, "yoe": true, "xode": "hzxfgvw", 
"cgsciipn": 20.075297532268902}, "hducqtvon", false, [null, 76.8463226047357, 
"qctvnvo", null], [null, {"nlp": false, "xebvtnvwbb": null, "uhfikxc": null, 
"eekejwjbe": false, "jmrkaqky": null, "oeyystp": false}, [null, 10, "nyzfhaps", 
71, null], 40, null, 13.737832677566875], [true, 80, 20, {"weynlgnfro":
40.25989193717965, "ggsirrt": 17, "ztvbcpsba": 12, "mljfh": false, "lihndukg": 
"bzebyljg", "pllpche": null}, null, [true, false, 52.532666161803895, "mkmqrhg",
 "kgdqstfn", null, "szse"], null, {"qkhfufrgac": "vpmiicarn", "hguztz": 
 "ocbmzpzon", "wprnlua": null}], {"drnj": [null, false], "jkjzvjuiw": false, 
 "oupsmgjd": false, "kcwjy": null}]};

function jsonSearch(object) {
  var input = JSON.stringify(object);
  var match = input.match(/full-stack/g);
  return typeof(match);

}


// console.log(jsonSearch(json));













// var numbers = [3,10,2,5,50,1000,7,70,6];

// function greatest(array) {
//   return array.reduce(function(previous,current) {
//     return current > previous ? current : previous;
//   });
// }

// console.log(greatest(numbers));



// Call is invoking a function on an object as if the function were a method of the 
// object and supplies the value of THIS.

// var f = function(param1) {
//   this.foo = param1;
// };

// var obj = {some: 'object'};
// f.call(obj, "W");

// console.log(obj); // {foo:'W', some: 'object'}








// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n-1);
// }
// console.log(factorial(50));

//find max integer in array using recursion

var a = [1,10,-50,20,45,6];

//base case: array.length == 0

// function maxInArray(array) {

// var max = arguments[1] || array[0];
//   if (array.length == 0) {
//     return max;
//   }
//   var newMax = max > array[0] ? max : array[0];
//   return maxInArray(array.slice(1), newMax);
// }

// console.log(maxInArray(a));


//refactored maxInArray

// function maxInArray(array) {
//   function go(array, max) {   
//     if (array.length == 0) {
//       return max;
//     }
//     var newMax = max > array[0] ? max : array[0];
//     return maxInArray(array.slice(1), newMax);
//   }

//   return go(array, array[0]);
// }

// console.log(maxInArray(a));

//What is the difference between call and apply? Provide an example of each in your explanation.

//call and apply are only different in the form the arguments take. apply can only take it's arguments 
//as an array. both are defined in the function prototype. both allow you to treat any function
//as if it a method of the object provided as this
// math.pow.call(null,2,2)
//math.pow.apply(null,[2,2])

//Write a function charCounts that when given a string, produces a map of character counts. 
//Usage would look like:

// > console.log(charCounts("This is a string!!!"))
// { T: 1, h: 1, i: 3, s: 3, ' ': 3, a: 1, t: 1, r: 1, n: 1, g: 1, '!': 3 }

// > console.log(charCounts("!Data!Is~The*Coolest"))
// { '!': 2,
//   D: 1,
//   a: 2,
//   t: 2,
//   I: 1,
//   s: 2,
//   '~': 1,
//   T: 1,
//   h: 1,
//   e: 2,
//   '*': 1,
//   C: 1,
//   o: 2,
//   l: 1 }


// function charCounts(string) {
//   var split = string.split('');
//   return split.reduce(function(obj,val) {
//     obj[val] = obj[val]+1 || 1;
//     return obj;
//   },{});
// }

// console.log(charCounts("!Data!Is~The*Coolest"));


//Write constructors that make the following examples work:
// 1. construct cows that can moo
// > var bessy = new Cow("Bessy", 10);
// > console.log(bessy.moo());
// moooooooo I'm Bessy moooooooo!!!!!!
// > var mooey = new Cow("Mooey", 2);
// > console.log(mooey.moo());
// moooooooo I'm Mooey moooooooo!!!!!!
// > var chewy = new Cow("Chewy", 1);
// > console.log(chewy.moo());
// moooooooo I'm Chewy moooooooo!!!!!!

// // 2. construct a farm full of cows, where all cows can be called on to moo in turn
// > var farm = new CowFarm([bessy, mooey, chewy]);
// > console.log(farm.mooInOrder());
// moooooooo I'm Bessy moooooooo!!!!!!
// moooooooo I'm Mooey moooooooo!!!!!!
// moooooooo I'm Chewy moooooooo!!!!!!

function Cow(name, age) {
  this.name = name;
  this.age = age;
}

// Cow.prototype.moo = function() {
//   return "moooooooo I'm " + this.name + " moooooooo!!!!!!";
// }

// var bessy= new Cow("Bessy", 10);
// // console.log(bessy.moo());
// var mooey = new Cow("Mooey", 2);
// // console.log(mooey.moo());
// var chewy = new Cow("Chewy", 1);
// // console.log(chewy.moo());

// // CowFarm.prototype = Object.create(Cow.prototype);


// function CowFarm(names) {
//   this.mooInOrder = function() {
//     var result = names.map(function(name) {
//       return name.moo();  
//     });
//     return result.join('\n');
//   }
// }

// var farm = new CowFarm([bessy, mooey, chewy]);

// console.log(farm.mooInOrder());





// console.log(max(input));






//Explain what recursion is to a beginner developer.
//recursion is when a function calls itself until a known or 'base' case is reached.

// Define a recursive function named power which takes two arguments; 
// a number and an exponent to raise that number to


function power(number, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    number = 1/number;
    exponent = Math.abs(exponent);
  }

  return number * power(number, exponent-1);
}

// console.log(power(2,3));//8
// console.log(power(4,2));//16
// console.log(power(2,-3));//1/8


//Define a recursive function named palindrome that returns true if 
//a string is a palindrome and false otherwise.


function palindrome(string) {
  if (!string.length) {
    return;
  }


  return string.charAt(string.length-1) == palindrome(string.slice(1));


}

// console.log(palindrome('noonx'));









//recursive function of forEach

function forEach(array,cb) {
  if (!array.length) return;
  cb(array[0]);
  return forEach(array.slice(1),cb)
}




































function LinkedList(head) {
  this.head = head;
} 

function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

LinkedList.prototype.length = function() {
  var node = this.head; 
  var count = 0;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}

LinkedList.prototype.reverse = function() {
  var node = this.head;
  var previous = null;
  while(node) {
    var temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  this.head = previous;
  return previous;
}

LinkedList.prototype.insertAtIndex = function(node, index) {
  if (index=== 0) {
    node.next = this.head.next;
    this.head = node;
  }
  else {
    var current = this.head;
    for (var i =1; i < index; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
return;
}



var head = new Node("first");
var second = new Node("second");
var third = new Node("third");
var fourth = new Node("fourth");

var linked = new LinkedList(head);



// linked.reverse();


// console.log(linked.length());

// linked.insertAtIndex(fourth, 1);



//1.Reverse a LinkedList
//2. Insert at kth index, linkedList.insertAtIndex(node,index)
//3. Challenge Re-implement linkedlist so that it has encapsulation, setHead method


// console.log(linked);




// Implemenation of the stack
 
//  function Stack() {
//   this.elements = [];
//  }

// Stack.prototype.push = function(elem) {
//   this.elements.push(elem);
// }

// Stack.prototype.pop = function() {]
//   return this.elements.pop();
// }


// Implementation of the queue

// function Queue() {
//   this.elements = [];
// }

// e.g. 
//   var q = new Queue;
//   q.enqueue(12);
//   q.enqueue(15);
//   q.dequeue(); //12

// Queue.prototype.enqueue = function(elem) {
//   this.elements.push(elem);
// }

// Queue.prototype.dequeue = function(elem) {
//   return this.elements.shift(elem);
// }


// function maxSubstring(string1, string2) {
//   for (var i = 0; i < string1.length; i++) {

//   }

// }

// console.log(maxSubstring('example','Texas'));

//What is a Linked List? What are the benefits of using a Linked List?
//A data structure that contains a reference to the head. The nodes in the list contain data and reference to the next node. The benefits are that you can add or delete large amounts of data very quickly

 //If n is even, divide it by 2 to get n / 2. If n is odd, multiply it by 3 and add 1 to obtain 3n + 1

// > console.log(collatzSequence(13));
//   13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1


// function collatzSequence(number) {
//   if (number == 1) {
//     return 1;
//   }
//   if (number % 2 == 0) {
//     return number + " -> " + collatzSequence(number/2);
//   }
//   else {
//     return number + " -> " + collatzSequence((number*3)+1);
//   }
// }

function collatzSequence(number) {
  var param;
  if (number == 1) {
    return 1;
  }
  number % 2 == 0 ? param = number/2 : param = (number*3)+1;
  return number + ' -> ' + collatzSequence(param);
}

// console.log(collatzSequence(13));
// console.log(collatzSequence(252));





//var text; gets hoisted above cL and cL logs 'undefined'

  // var text = 'outside';
  // function logIt(){
  //     console.log(text);
  //     var text = 'inside';
  // };
  // logIt();



//   function longestSubstring(str1, str2){
//   var longest = '';
//   function go(str1, str2){
//     if (str1.length == 0) { return 'done' };
//     function vroom(str1, str2){
//       if (str1.length == 0) { return 'done' };
//       str2.includes(str1) && str1.length > longest.length ? longest = str1 : vroom(str1.slice(0, -1), str2);
//     } 
//     vroom(str1, str2);
//     return go(str1.slice(1), str2)
//   }
//   go(str1, str2);
//   return longest;
// }


function LinkedList(head) {
    this.head = head;
  }

  function Node(data, next) {
    this.data = data;
    this.next = next || null;
  }

var head1 = new Node("first");
var second = new Node("second");
var third = new Node("third");
var fourth = new Node("fourth");

var head2 = new Node("fifth");
var sixth = new Node("third");
var seventh = new Node("seventh");

var list1 = new LinkedList(head1);

head1.next = second;
second.next = third;
third.next = fourth;

var list2 = new LinkedList(head2);

head2.next = sixth;
sixth.next = seventh;

var l1 = new LinkedList(new Node("This is the head"));
  var foo = new Node('fooski');
  var bar = new Node('barski');
  l1.head.next = foo;
  foo.next = bar;

  var l2 = new LinkedList(new Node("something cool!"));
  var goo = new Node('gooski');
  var bar2 = new Node('barski');
  l2.head.next = bar2;
  bar2.next = goo;



function commonDataBetweenLists(list1, list2) {
  var node1 = list1.head;
  var node2 = list2.head;
  var count = 0;
  var data1 = [];
  var data2 = [];
  var result = [];
  while (node1) {
    data1.push(node1.data);
    node1 = node1.next;
  }
  while (node2) {
    data2.push(node2.data);
    node2 = node2.next;
  }
  for (var i in data1) {
    for (var j in data2) {
      if (data1[i] == data2[j]) {
        result.push(data1[i]);
      }
    }
  }
  return result;
}
// console.log(commonDataBetweenLists(list1,list2));
// console.log(commonDataBetweenLists(l1, l2));

var sentence = 'This is a typical sentence';

function sentenceToLinkedList(sentence) {
  var words = sentence.split(' ');
  var output = new LinkedList(new Node(words.shift()));
  var node = output.head;

  words.forEach(function(word) {
    word = new Node(word);
    node.next = word;
    node = word;
  });
  
  return output; 
}

// console.log(sentenceToLinkedList(sentence));

// 

 // parensChecker("()(((())))") //=> true


// function parensChecker(string) {
//   var open = [];
//   var closed = [];
//   for (var i = 0; i < string.length; i++) {
//     if (string[0] == ')') {
//       return false;
//     }
//     if (string[i] == '(') {
//       open.push(string[i]);
//     }
//     else closed.push(string[i]);
//   }
//   return open.length == closed.length;
// }

function parensChecker(string) {
  var chars = string.split('');
  if (chars[0] == ')') return false;
  for (var i in chars) {
 
  }
}





console.log(parensChecker("()(((())))")); //true
console.log(parensChecker("())))(")); //false
console.log(parensChecker(")(")); //false



function crazy(string) {
  var char = string.slice(0,1);
  var addO;
  if (string == '') {
    return '';
  }

  vowelOrSpace.indexOf(char.toLowerCase()) == -1 ? addO = char + 'o' + char : addO = char;
  
  return addO + crazy(string.slice(1));
}

console.log(crazy("this is fun"));//=>tothohisos isos fofunon
console.log(crazy(""));//=>
console.log(crazy("Hello"));//=>hohelollolo






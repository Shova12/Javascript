if(!Array.isArray){
	Array.isArray = function(a){
		return Object.toString(a) ==='[w3resource]';
		console.log(is_Array('w3resource')); 
	};
};


is_array = function(input){
	if(toString.call(input) === '[object Array]')
		return true;
	else
		return false;
};

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); 
console.log(list1)
//creating array using slice
array_Clone = function (x) {
  return x.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//var first = [7, 9, 0, -2]
//console.log(first[0]); 

// find first element of array
first = function(array,n){
	if (array == null)
		return void 0;
	if (n== null)
		return array[0];
	if (n<0)
		return [];
	else
		return array.slice(0,n);
};
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//5. to join following array to string
myColor = ["Red", "Green", "White", "Black"];
var myVar = myColor.join();
var myVar1 = myColor.toString();
var myVar2 = myColor.join('+');
var myVar3 = myColor.join(',');
var myVar4 = myColor.join('-');
console.log(myVar)
console.log(myVar1)
console.log(myVar2)
console.log(myVar3)
console.log(myVar4)

//7. to sort
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var mySort =arr1.sort();
console.log(mySort)

//10 nested loop(2D array)
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i in a){
	console.log('row'+ i);
	for (var j in a[i]){
		console.log(''+a[i][j]);
	}
}


//11 sum of sqrt.
function sum_sqrt(array){
	var sum = 0,
	i =array.length;


}



//Javascript Basic
//1 current date and time
var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log("Today:"+dayList[day]+".");
var hour = today.getHours();
var minute = today.getMinutes();
var second= today.getSeconds();
var prepand = (hour >=12)? "PM":"AM" 
hour = (hour >= 12)? hour -12:hour;//shift+ctrl+\ to commit
if (hour === 0 && prepand === 'PM')
{
if (minute === 0 && second===0)
{
	hour = 12;
	prepand = 'Noon'
}
else
{
	hour =12;
	prepand= 'PM'
}
}
if (hour === 0 && prepand === 'AM')
{
if (minute === 0 && second===0)
{
	hour = 12;
	prepand = 'Midnight'
}
else
{
	hour =12;
	prepand= 'AM'
}
}

//console.log('Current time:'+hour+prepand+':'+minute+':'+second);

//2. o print the contents of the cuurent window
function current_page_page() {
	window.print();
}

//3. programm to get current date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if (dd <10) {
	dd = '0'+dd;
}
if (mm<10){
	mm = "0"+mm;
}

today = mm+'-'+dd+'-'+yyyy;
console.log(today)

// 4. area of issocle triangle
var s1 = 5;
var s2 = 6;
var s3 = 7;
var perimeter = (s1+s2+s3)/2;
console.log(perimeter);

var area = Math.sqrt(perimeter*((perimeter-s1)*(perimeter-s2)*(perimeter-s3)))
console.log(area);

var age = 12;
//bad code
//var hasAge = new Boolean(age); 
var hasAge = Boolean(age); 
var hasAge = !!age; 

console.log(hasAge);

function largest_number(a,b){
	var largest;
	if(a>b) {
		largest = a;
	}
	else {
		largest = b;
	}

	return largest;
}

var largest = largest_number(10,20);
console.log(largest);

var largest = largest_number(-1,-2);
console.log(largest);

function largestNumberInArray(a){
	var largest;
	if(a[0] > a[1]){
		largest = a[0];
	}
	else{
		largest = a[1];
	}
	return largest;
}

var largest = largestNumberInArray([10,20]);
document.getElementById("exercise").innerHTML  = largest;

function largest_number(a,b,c){
	var largest;
	if(a>b && a>c) {
		largest = a;
	}
	else if (b>a && b>c) {
		largest = b;
	}
	else {
		largest = c;
	}

	return largest;
}

var largest = largest_number(10,20,32);
document.getElementById("exercise").innerHTML  = largest;

function largestNumber(a,b,c){
	var largest = 0;
	if(a > largest) {
		largest = a;
	}
	if(b > largest) {
		largest = b;
	}
	if(c > largest) {
		largest = c;
	}
	
	return largest;
}

var largest = largestNumber(70,1,60);
document.getElementById("exercise").innerHTML  = largest;

var largestNumberArray = function(a){
	var largest = 0;
	a.forEach(function(x){
		if(x > largest){
			largest = x;
		}
	})
	return largest;
}

var largest = largestNumberArray([70,1,60,200,450]);
document.getElementById("exercise").innerHTML  = largest;

function reverseArray(x){
	var a = [];
	var len = x.length;
	for(var i= 0; i<len; i++){
		a[i] = x[len-1-i]
	}
	return a;
}
var a = [10,20];
var reversedArray = reverseArray(a);
document.getElementById("exercise").innerHTML  = reversedArray;

function multiplicationTable(x){
	var a = [];
	for(var j = 0; j <10; j++){
		if(j%2 == 0){
			for(var i=0; i<10; i++){
				a[i] = j*i;
				console.log(a[i]);
			}

		}
	}	
	return a;
}

var a = 3;
var multiplication = multiplicationTable(a);



console.log("Shree");

 var x = 1;
  if (function f(){}) {
    x += typeof f;
  }
  console.log(x);
/*
  answer: 1undefined
  1
  1function
  NaN
*/

 var x = [typeof x, typeof y][1];
  console.log(typeof typeof x);
/*
"number"
 "string" -
 "undefined"
 "object"
*/
//What will be output of following script:

var output = (function(x){
    delete x;
    return x;
  })(10);

  console.log(output);
/*
	undefined
	10 -
	0
	null
*/

var x = { foo : 10};
var output = (function(){
    delete x.foo;
    return x.foo;
  })();

  console.log(output);
/*
	undefined -
	10
	0
	null
*/

var countries = ["US","UK","France","Japan","Italy"];
delete countries[3];

console.log(countries.length);

  /*
	0
	null
	4
	5 -
  */

 var foo = function bar(){ return 12; };
 //typeof bar(); 
 /*
 Reference Error -
 12
 undefined
 null
 */
//What will be output of alert : 
var x = [1, 2, 3, 4];
x.map(function(x, y) { return x + y } );
alert(x);
/*
Which one of the below options statements are true for Java script?
Javascript is casesensitive
javascript statements can be grouped together in blocks
semicolon at the end ofstatements is mendetory
-Both A & B

Which is the correct way to write a JavaScript array?
- var txt = new Array('arr','kim','jim');
var txt = new Array:1=('arr'),2=('kim'),3=('jim');
var txt = new Array(1:'arr',2:'kim',3:'jim');
var txt = new Array'arr','kim','jim';

Which of the ways below is incorrect of installing a date?
new Date(seconds)

How to append a value to an array of Java Script?
- arr[arr.length] = value 
arr[arr.length+1] = value 
arr[arr.length-1] = value 
arr[] = value 

Which below is the event that fires when the form elements: 
- Onblur
Onclick
Ondblclick
Onfocus

Consider an HTML form with a checkbox and a text field. When data is entered and the return key is pressed, the data seems to be lost before the user can click on the button that calls the processing function. How do you correct this?
-Add "return false" to onsubmit="..." in the FORM tag
Add a TYPE="HIDDEN" input to the form
trap the return keypress and return (null)
Instruct the user not to press the Return key

What is negative infinity in Java script?
- Any of the below
number in Javascript, derided by dividing  number by negative number
number in Javascript, derided by dividing  number by zero
number in Javascript, derided by dividing negative number by zero 

var days = ['mon','tues','wed'];

console.dir(days);

console.log( days.shift() ); //mon

console.dir(days);

var a = {a: 1};
var b = {a: 1};
a === b //false

*/

var dosomething = function(input){
	if(toString.call(input) === '[object Array]') {
		return true;
		console.log('Array');
	}
	else {
		return false;
		console.log('Not Array');
	}
};

console.log(dosomething([1, 2, 4, 0]));

function product(x,y,z){
	var x = 3;
	var y = 7;
	var z = 2;
	console.log ("Product:",x*y*z);
	
}
var array1 = [1,2,3,4];
var array2 = ['a','b','c','d'];

console.log(array1[0]);

var len = array1.length;
for(var i =0; i<len; i++ ) {
	console.log(array1[i]);
}

array1.forEach(function(a) {
	console.log(a*1);
})

var index = array1.indexOf(2);

array2.forEach(function(a) {
	console.log(a);
})


//Javascript Object
var object1 = {
	name: 'Shova',
	lastname: 'Prajapati'
}

console.log(object1.name);
console.log(object1.lastname);

//Array of object

var arrObject = [{
	name: 'Shova',
	lastname: 'Prajapati'
},
{
	name:"shashwot",
	lastname: 'shrestha'
}];

console.log(arrObject[0].name)

arrObject.forEach(function(a,i) {
	console.log("Name :"+a.name);
	console.log("Lastname : "+ a.lastname);
})

var fruit = ['cherries','apples','bananas'];
fruit.sort();
console.log(fruit);

var items =[{
	name: 'Adam', age: 21
},
{
	name:'Cady' , age: 18
},
{
	name:'Mendy', age: 30
},
{
	name:'Sandy', age: 2
},
{
	name:'Pali', age: 17
},
{
	name:'Rosy', age: 0

}];

//
items.sort(function(a,b){
	if(a.age > b.age){
		return 1;
	}

	if(a.age < b.age){
		return -1;
	}

	return 0;
});
console.log('Sort Item:',items.sort())


/*items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
})

console.log(items.sort())*/

var stringArray = [{colour:'Blue'}, {colour:'Humpback'}, {colour:'Beluga'}];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

//console.log('stringArray:', stringArray.sort()) // sorting

//length of array
var fName =["Cady","Silly","Peru","Sony","Tina"];
console.log(fName.length);

//accessing last array items
var last = fName[fName.length-1];
console.log(last);
//console.log(fName[fName.length-1]);
//accessing array by index 
var fifth = fName[4];
console.log(fifth);

//Add to end of array- push
var newLength = fName.push("Rani");
console.log(newLength);
console.log(fName);

//Add to the front of an array-unshift
var newLength = fName.unshift('Palisooa');
console.log(fName);

// Loop over an array....forEach
fName.forEach(function(item,index,array){
	console.log(item);
	//console.log(item,index);
});

//Remove from the end of array-pop
var rLast = fName.pop();
console.log(fName);
console.log(rLast);

//Remove from the front of Array-shift
var first = fName.shift();
console.log(fName);
console.log(first);

// Find the index of an items in the Array
fName.push('Roy');
console.log(fName);

var pos = fName.indexOf('Sony'); //indexOf
console.log(pos);

//Remove items by index Position -splice
var rItem = fName.splice(pos,1); //1 represent how many items to remove from array, following index of item
console.log("Item after removing:",fName);
//console.log(rItem);

//copy an Array-slice
var copy = fName.slice()
console.log("makeCopy:",copy);

// relationship between length and numerical properties
fName[4] ='Pali' ;
console.log(fName[4]);
console.log(Object.keys(fName)); //print 0-4
console.log(fName.length); //update length of fNamwe

//increasing length
fName.length = 10;
console.log(Object.keys(fName));
console.log(fName.length);
 
//Decreasing length
fName.length = 3;
console.log(Object.keys(fName));
console.log(fName.length);

//using Localstring
var number = 3500.123456;
//console.log(number.toLocaleString()); //display above number in local format

//reuesting a currency format

console.log(number.toLocaleString('usa-USA',{style:'currency', currency:'USD', maximumSignificantDigits:3}));

console.log("Array functions: filter");

var array1 = [1,2,3,4];

var even_array = array1.filter(function(a) {
	return a%2==0
});
console.log("Even Array : "+even_array)


function isArray(input){

	if(toString.call(input) == "[object Array]"){
		return true;
	}
	else{
		return false;
	}
}
console.log(isArray('w3resource')); 
console.log(isArray([1, 2, 4, 0]));

function arrayClone(array){
	return array.slice();
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

function lastElement(array,n){
		if(array==null){
			return void 0;
		}
		if(n == null){
			return array[array.length-1]
		return array.slice(Math.max(array.length-n,0));
		}
}	

console.log(lastElement([7, 9, 0, -2])); 
console.log(lastElement([7, 9, 0, -2],3)); 
console.log(lastElement([7, 9, 0, -2],6));


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
console.log(multiplication);


function product(x,y,z){
	var x = 3;
	var y = 7;
	var z = 2
	console.log (x*y*z);
	
}

product();

function productOfSign(a,b){
	var array1 = product();
	if(a > 0 && b>0){
		console.log("The sign is +")
	}
	else if(a < 0 && b< 0){
		console.log("The sign is -");
	}
	else{
		console.log("The sign is -")
	}
}

productOfSign();
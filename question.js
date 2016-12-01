What will be output of following script
var a = {a: 1};
var b = {a: 1};
if(a == b) {
   console.log('Equal');
}

if(a === b) {
   console.log('Same Objects');
}
else {
  console.log('Different Objects');
}


function dosomething(x){
	var a = [];
	var len = x.length;
	for(var i= 0; i<len; i++){
		a[i] = x[len-1-i]
	}
	return a;
}
var a = [10,20,2,5];
alert(dosomething(a));

var dosomething = function(a){
	var a = 0;
	a.forEach(function(x){
		if(x > a){
			a = x;
		}
	})
	return a;
}

console.log(dosomething([70,1,60,200,450]));


var age = 12;
var hasAge = Boolean(age); 
var hasAge = !!age; 

console.log(hasAge);

function dosomething(b){
	var a = 10;
	b.forEach(function(y){
		if(y < a){
			a = y;
		}
	})
	return a;
 }

 var b =[1,2,3,4,40];

 console.log(dosomething(b));


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

var x =  32243;

// change digits or object into array by using split()
var digits = (""+x).split(""); 
document.getElementById('exercise').innerHTML = digits;

function reverseNumber(a){
	var digits =[];
	var len = a.length;
	for(var i = 0; i< len; i++){
		digits[i] = a[len -1 -i];
	}
	return digits;
}

var reversedArray = reverseNumber(digits);
console.log(reversedArray);

/*var x =  32243;

// change digits or object into array by using split() and then reverse() to reverse array
var digits = (""+x).split("").reverse(); 
document.getElementById('exercise').innerHTML = digits;
*/
//4. return a passed string with letters in alphabetical order
 var string = 'webmaster' 
 // sort() is used to sort
 var stringArray = (''+string).split('').sort();
 document.getElementById('order').innerHTML = stringArray;
 
 //6. longest word in string
 function longestWord(str){
 	var array1 = str.match(/\w[a-z]{0,}/gi); // .match() will return word 
 	var result = array1[0];
 	
 	for (var i = 0; i < array1.length; i++){
 		if(result.length < array1[i].length){
 			result = array1[i];

 		}
 	}
 	return result;
 }

 console.log(longestWord('Web Development Tutorial'));

 //7. count vowel

 /*function vowelCount(str){
 	var vowelList = 'aeiouAEIOU'
 	var vCount = null;
 	for(var i =0; i < str.length; i++){
 		if(vowelList.indexOf(str[i]) !== -1){
 			vCount +=1;
 		}
 	}
 	return vCount;
 }

 var string = 'The quick brown fox';
 console.log(vowelCount(string));*/

 function vowelCount(str1){
 	var vowelList = 'aeiouAEIOU'
 	var vCount = 0;
 	for(i = 0; i< str1.length; i++){
 		if(vowelList.indexOf(str1[i]) !== -1){
 			vCount += 1;
 		}
 	}
 	return vCount;
 }

 var str = 'The quick brown fox';
 var countConstant = str.length - vowelCount(str);
 console.log(vowelCount(str));
 console.log('Constants in String:',countConstant)

 //is prime number or not
 function isPrimeNumber(n){
 	
 	for(i=0; i< n; i++){
		if(n % i == 0){
			return false;
		}
	}
	return true;	
 	}

 console.log(isPrimeNumber(4));


//Object
//1.
function deleteRollNo(array){
	 var student = { 
				name : "David Rayy", 
				sclass : "VI", 
				rollno : 12 };
				console.log(delete.student.rollno);

}

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

console.log(deleteRollNo(student));




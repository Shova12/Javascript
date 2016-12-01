function matrix(n){
	var j;
	var i;
	for(j = 0; j < n; j++){
		for(i = 0; i < n; i++){
			if(i == j){
				console.log(' 1 ');
			}
			else{
				console.log(' 0 ');}
		}

		console.log(' .......... ');
	}
	
}

matrix(4);

//11.find second lowest and second greatest

function storeArray(b){
	var lowest = 10;
	b.forEach(function(y){
		if(y < lowest){
			lowest = y;
		}
	})
	return lowest;
 }

 var b =[1,2,3,4];

 console.log('Lowest:',storeArray(b));


/*function storeArray(a){
	var greatest = 0;
	a.forEach(function(x){
		if(x > greatest){
			greatest = x;
		}
	})
	return greatest;		
}	
 var a =[1,2,3,4];

 console.log('Greatest:',storeArray(a));*/

 var largestNumberArray = function(a){
	var largest = 0;
	a.forEach(function(x){
		if(x > largest){
			largest = x;
		}
	})
	return largest;
}

var largest = largestNumberArray([-12,40,0,-56,-1]);
var max = largestNumberArray([12,34,56,1]);
document.getElementById("largest_array").innerHTML = max;
document.getElementById("exercise").innerHTML = largest;

function secondLargestArray(array_num){
	var array1 = 0;
	var sortArray = array_num.sort();
	var len = sortArray.length;
	array1 = array_num[len -2]
	/*for(var i = 0; i < len; i++){
		array1[i] = array_num[len -2]
	}*/
	return array1;
}

var array = [1,2,3,4];
var array1 = secondLargestArray(array);
console.log("Second largest No. In Array:",array1);


//13
function factorOfNumber(a){
	var factor =[];
	for(var i = 0; i <=a; i++){
		if(a%i ==0){
			factor.push(i); // create a new element in array
		}
	}
	return factor;		
}

console.log(factorOfNumber(15));

//is number perfect
function isPerfect(a){
	factor = factorOfNumber(a);
	var sum = 0;
	factor.forEach(function(x){
		sum = sum+x;
	})
	if(sum/2 == a){
		console.log('The number is perfect number');
		return true;
	}
	else{
		return false;
	}
	
}

isPerfect(28);

function perfectNumbers(a){
	var perfectNumberArray =[];
	for(var i = 0; i< a; i++){
		perfect = isPerfect(i);
		if(perfect == true){
			perfectNumberArray.push(i);
		}	
	}
	return perfectNumberArray;
}

var number = 1000; 
console.log(perfectNumbers(number));

// expon. b power n
function compute(b,n){
	var ans = 1;
	for(var i = 1; i <= n; i++){
		ans = b * ans;
	}
	return ans;
}

console.log(compute(2,3));
/*
for(var i = 0; i < 100; i++){
	if(i%3 ==0 && i%5==0){
		console.log(i +'FizzBuzz');
	}
	else if(i%3 == 0){
		console.log(i+ 'Fizz');
	}
	else if(i%5 == 0){
		console.log(i+ 'Buzz');
	}
	else{
		console.log(i);
	}
}*/

function multiplication(a){
	for(var i = 0; i < 20; i++){
		if(i%3 == 0 && i%5 == 0){
			console.log(i+ 'FizzBuzz');
		}
		else if(i%3 == 0){
			console.log(i+ 'Fizz');
		}
		else if(i%5 == 0){
			console.log(i+ 'Buzz');
		}
		else{
			console.log(i);
		}
	}
	return a;
}

multiplication(5);

function abc(){
	console.log(arguments.callee.name); // to get function name
}
abc();

//to pass function as parameter
function addStudent(id,refreshCallback){
	refreshCallback();

}
function refreshStudentList(){
	console.log("New Student Welcome");
};

addStudent(1,refreshStudentList);  
addStudent(2,refreshStudentList);





	
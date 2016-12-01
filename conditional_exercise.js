function largestNumberIs(a,b){
	var largest = 0;
	if (a > largest){
		largest = a;
	}
	if (b > largest){
		largest = b;
	}
	return largest;
}

var sample1 =(21,13);
console.log(largestNumberIs(sample1));


// product of sign with alert sign

	var x =3
	var y =-7
	var z =-2
	if (x >0 && y> 0 && z >0){
		alert ('The sign is +')
	}
	else if (x <0 && y <0 && z < 0){
		console.log('The sign is +')
		}
		else if(x >0 && y <0 && z < 0){
			console.log('The sign is +')
		}
		else if(x <0 && y >0 && z < 0){
			console.log('The sign is +')
		}
		
	else{
			console.log('The sign is -')
		}

//2.sort
var sampleNumber = [0,-1,4];
sampleNumber.sort();
console.log(sampleNumber.sort());

function largestNumber(a,b,c,d,e){
	var largest = 0;
	if(a > largest){
		largest = a;
	}
	if(b > largest){
		largest = b;
	}
	if(c > largest){
		largest = c;
	}
	if(d > largest){
		largest = d;
	}
	if(e > largest){
		largest = e;
	}
	return largest;
}

var sample = (5,2,6,0,1);
//var largestNumber = largestNumber(sample);
console.log(largestNumber(sample));

//5.check current umber is odd or even
function checkEvenOdd(a){
	for(var i = 0; i <= 15; i++){
		if(i%2 == 0){
			console.log(i +' is even')
		}
		else{
			console.log(i +' is odd')
		}
	}
}

sample2 =(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
checkEvenOdd(sample2);

//find average and this average is used to determine the corresponding grade
function averageGrade(markOfStudent){
	var sum =0;
	var avg ;
	markOfStudent.forEach(function(a){
		sum = sum +a;
		avg = (sum)/markOfStudent.length;
	})
	return avg;		
}

var student = [80,77,88,95,68];
console.log('Average:',averageGrade(student));

function computeGrade(grade){
	avg = averageGrade(grade);
	if(avg < 60){
		console.log('F');
	}
	else if(avg < 70){
		console.log('D');
	}
	else if(avg < 80){
		console.log('C');
	}
	else if(avg < 90){
		console.log('B');
	}
	else if(avg < 100){
		console.log('A');
	}
}

var student = [80,77,88,95,68];
'Grade:',computeGrade(student);

//find grade of each student
/*function gradeStudent(a){
	a.forEach(function(b){
		if(b < 60){
			console.log('F');
		}
		else if(b < 70){
			console.log('D');
		}
		else if(b < 80){
			console.log('C');
		}
		else if(b < 90){
			console.log('B');
		}
		else if(b < 100){
			console.log('A');
		}
	});
	return a;

}

var student = [80,77,68,95,50];
'Student Grade:',gradeStudent(student);
*/
function gradeStudent(a){
	a.forEach(function(b){
		if(b.mark < 60){
			b.grade = 'F';
		}
		else if(b.mark < 70){
			b.grade = 'D';
		}
		else if(b.mark < 80){
			b.grade = 'C';
		}
		else if(b.mark < 90){
			b.grade = 'B';
		}
		else if(b.mark < 100){
			b.grade = 'A';
		}
	});
	return a;

}

var student = [
				{name: 'David',
				mark : 80},
				{name: 'Vinoth',
				mark : 77},
				{name: 'Divya',
				mark : 88},
				{name: 'Ishitha',
				mark : 95},
				{name: 'Thomas',
				mark : 68}
				];
var grade = gradeStudent(student);
console.log('Grade:', grade);

var tbl = '<table cellspacing="0">';
	tbl += '<tr>';
	tbl += '<th> Student Name </th>';
	tbl += '<th> Marks </th>';
	tbl += '<th> Grade </th>';
	tbl += '</tr>';
	
grade.forEach(function(a){
	tbl += '<tr>';
	tbl += '<td> '+a.name+'</td>';
	tbl += '<td> '+a.mark+' </td>';
	tbl += '<td> '+a.grade+' </td>';
	tbl += '</tr>';

});
tbl += '</table>';



document.getElementById('student_table').innerHTML = tbl;

//multiplication for 3 - fizz and 5- buzz
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
}

//function sumMultiples(a,b){
	var sum =0;
	for(var i = 0; i <1000; i++){
		if(i % 3==0 || i % 5 == 0){
			sum +=i;
		}
	}
	console.log(sum);
//}

/*var a = (3,5);
console.log(sumMultiples(a));*/


function currentDate(x){
	today = new Date();
	var dd = today.getDay();
	var mm = today.getMonth();
	var yyyy = today.getFullYear();
	if (dd< 10){
		dd = '0'+dd;
	}
	if (mm < 10){
		mm = '0'+mm;
	}
		return (mm+x+dd+x+yyyy);	
}
console.log(currentDate('/'));


function isString(input){
	if(Object.prototype.toString.call(input) === '[object String]'){
		return true;
	}
	
	else{
		return false;
	}
	
};

console.log(isString('w3resource')); 

console.log(isString([1, 2, 4, 0]));

function isStringBlank(string){
	//var str = isString();
	if(string.length ==0){
		return true;
	}
	else{
		return false;
	}
}
console.log(isStringBlank('dfsd123')); 
console.log(isStringBlank(''));

function largestNumberInArray(a){
	var largest = 0;
	a.forEach(function(x){
		if(x > largest){
			largest = x;
		}	
	})
	return largest;
}

var largest= [12,32];
console.log(largestNumberInArray(largest));

function productOfArray(array){
	var product = 1;
	//var array = [];
	for(var i =0; i < array.length; i++){
		product = product * array[i];
	}
	return product;
}
var a = [3,-7,2]
console.log("Product:",productOfArray(a));

function productOfSign(a,b){
	var array1 = productOfArray();
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

var a = [3,7,2]

productOfSign(a);




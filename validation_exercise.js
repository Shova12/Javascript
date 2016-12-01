//return returns value and toString.call() return object string '[object object]'
function isBoolean(type){
	if(type == 0){
		return true;
	}
	else {
		return false;
	}
	/*else{
		return toString.call(type) == '[object Boolean]';
	}*/
}

console.log(isBoolean(0));
console.log(isBoolean("abcd)"));
console.log(isBoolean([12,13,1,2]));

//given value is error or not
//following expression returns true or false;
function isError(val)
        {
        return val !== val;
       }

console.log(isError(NaN)); // NaN mean not a number 

console.log(isError('bar'));

function is_error(value){
	var err = isBoolean();
	if(value !== value){
		value = err;
	}
	return err;
}
console.log(is_error(NaN)); // NaN mean not a number 

console.log(is_error('bar'));

/*function isNull(val){
	return val == null;
};
console.log(isNull(null));
console.log(isNull('bar'));*/

function isNumber(val){
	return !isNaN(val);
};
console.log(isNumber(1));

function isObject(value){
	var datatype = typeof value;
	return datatype == 'function' || datatype == 'object' && !!value;
}
console.log(isObject({name:'Raja'},{name:'Shyam'}));
console.log(isObject('bar'));

function isRegExp(val){
	return toString.call(val)== '[object object]';
}

console.log(isRegExp(/test/));
console.log(isRegExp('bar'));

function is_char(value)  
    {  
      if (Object.prototype.toString.call(value) !== '[object String]')  
        return false;  
    return value && value.length === 1;  
    }  
   
console.log(is_char('f'));  
console.log(is_char('*')); 


function isDate(date){
	if(Object.prototype.toString.call("date") == '[object date]'){
		return true;
	}
	return false;
}

console.log(isDate("October 13, 2014 11:13:00")); 
console.log(isDate(new Date(86400000))); 
console.log(isDate(new Date(99,5,24,11,33,30,0))); 
console.log(isDate([1, 2, 4, 0]));

/*function currentDate(x){
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
console.log(currentDate('/'));*/

function stringToArray(string){
	return string.split();
}
console.log(stringToArray("Robin Singh"));

function trauncateString(string,length){
	if((string.constructor == String) && (length>0)){
	return string.slice(0,length); // 0:number of first string to be trauncated and length: number of string to be printed
	}
}
console.log(trauncateString("1234569 12365",5));

function protectEmail(email){
	var splitted = email.split("@");
	var email1 = splitted[0];
	var avg = email1.length/2;
	var part1 = email1.substring(0,(email1.length - avg));
	var part2 = splitted[1];
	return part1 +".....@"+part2
}

console.log(protectEmail("robin_singh123@example.com"))

function stringParameterize(str){
	return str.slice().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}
console.log(stringParameterize("Robin Singh from USA."));

function firstCapital(str){
	return str.replace(/\w\S*/g,
		function(text){
			return text.charAt(0).toUpperCase()+text.substr(1).toLowerCase();
	});

}

console.log(firstCapital('js string exercises'));

function swapCase(str){
	return str.replace(/([a-z]+)|([A-Z]+)/g, 
		function(match,chr){
			return chr ? match.toUpperCase() : match.toLowerCase();
	});

}
console.log(swapCase('AaBbCcdEfG'));

function repeat(str,n){
	if(typeof(n) == 'undefined'){
		n = 1;
	}
	return n <1 ? '' : new Array(n +1).join(str);
}
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));

function text_truncate(str,n){
	if((str.constructor == String) && (length>0)){
	return text.slice(0,length);
	}
}
console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

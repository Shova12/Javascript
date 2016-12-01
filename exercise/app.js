//app.js
function getData() {
	debugger;
  // Get value of input
  var data = document.getElementById('name').value;

  // Get dataSpan DOM element
  var out = document.getElementById('dataSpan');

  //convert data into an array of string
  var nums = data.split('');

  //convert nums into an array of numbers
  nums = nums.map(Number);

  var sum = 0;
  var product = 1;
  // calculate sum and product
  nums.forEach(function(num){
  	sum += num;
  	product *=num
  });


//set text of dataspan to the result of sum and product
var output = 'sum is' + sum + 'and product is' + product;
  // Assign the value of data into dataSpan html
  out.innerHTML = data;
}

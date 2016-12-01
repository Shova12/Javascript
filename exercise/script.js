//$(document).ready(function(){
	var obj = {a:1, b:2,c:3};
	var arr = ['a','b','c'];
	var len = arr.length;
	var arr2 = [];
	arr.forEach(function(a,i) {
		arr2[len-1-i] = a;
		//a=a+'1';
		console.log(a,i);

	//});

	console.log(arr);
	console.log(arr2);

	arr.push('d');

	console.log(arr);

	/*var myHtml = "<span> I came from jquery </span>";
	myHtml += "<p> This is second paragraph </p>";
	console.log($("div#myhtml").html());
	$("#myhtml").html(myHtml);*/

	var imgObj = [// contains list of image name 	
					"friendship.jpg","friendship_1.jpg","friendship_2.jpg","friendship_3.jpg"
				]
	evenImg ='<h1> Even Image</h1>';	
	oddImg	='<h1> Odd Image</h1>';
	imgObj.forEach(function(img,i){
		if (i%2==0) {
			evenImg += '<img width="50" src="images/'+img+'" >';
		}
		else{
			oddImg += '<img width="50" src="images/'+img+'" >';
		}
	});
	$("#evenImg").html(evenImg);

	$("#oddImg").html(oddImg);
	
});








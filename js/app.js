$(document).ready(function(){




function fizzBuzz(num){

	for(var i=1;i<=num;i++){
		if(i%3===0 && i%5===0){
			$('body').append("fizzbuzz"+"<br>");
		}
		else if(i%3===0){
			$('body').append("fizz"+"<br>");
		}
		else if(i%5===0){
			$('body').append("buzz"+"<br>");
		}
		else{
			$('body').append(i+"<br>");
		}
	}
}
fizzBuzz(100);

});
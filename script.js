// var x;
// console.log(x);
// if (x== undefined){
// 	console.log("x is undefined");
// }
// console.log((5+3)/3);
console.log(document.getElementById("title"));
function sayHello(){
	var name=document.getElementById("name").value;
	var message="<h2>Hello " + name + "!</h2>";

	// document.getElementById("content").textContent=message;
	document.getElementById("content").innerHTML=message;
	if(document.getElementById("name").value==="Arjun"){
		document.getElementById("title").innerHTML+= " Enjoy!";

	}
}
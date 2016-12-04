"use strict";

function inputClick(value) {

	var view = document.getElementById("view").value;

	if (value != "AC" && value != "=" && value != ".") //sprawdzamy, czy znaki są różne od AC, =, .

	{
		document.getElementById("view").value += value;
	} 
	
	else if (value == "AC") {
		document.getElementById("view").value = "";
	} 
	
	else if (value == ".") {
		if (view.slice(-1) != ".") {
			document.getElementById("view").value += value;
		}
	} 
	
	else {
		
		if(isNaN(view.slice(-1)) || view.indexOf("/0") > -1) {
			document.getElementById("view").value = "Error!";
		} else {
			document.getElementById("view").value = eval(view);
		}
		
		
	}
}
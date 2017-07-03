
		//SIZE
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1);
	
	
};
	//MEAT
	
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
getVeggie(runningTotal,text1);
	
};


		//VEGGIE
function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;				
	var selectedVeggie = [];			
	var veggieArray = document.getElementsByClassName("veggies");	
	for (var v = 0; v < veggieArray.length; v++) {
		if (veggieArray[v].checked) {
			selectedVeggie.push(veggieArray[v].value);
			text1 = text1+veggieArray[v].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal );
getCrust(runningTotal,text1);
	
};
		//CRUST
function getCrust(runningTotal,text1) {
	var crustTotal = 0;	
   var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");		
	for (var c = 0; c < crustArray.length; c++) {
		if (crustArray[c].checked) {
			var selectedCrust = crustArray[c].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}

	if (selectedCrust === " Cheese Stuffed Crust") {
		crustTotal = 3;
 	}else   {
		crustTotal = 0
	}
	
	runningTotal = (runningTotal + crustTotal);
getCheese(runningTotal,text1);
};

  //CHEESE
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;	
    selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");		
	for (var d = 0; d < cheeseArray.length; d++) {
		if (cheeseArray[d].checked) {
			var selectedCheese = cheeseArray[d].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese" ) {
		cheeseTotal = 3;
 	}else   {
		cheeseTotal = 0
	}
	runningTotal = (runningTotal + cheeseTotal);
getSauce(runningTotal,text1);
} ;

		//SAUCE
function getSauce(runningTotal,text1) {
	var sauceTotal = 0;	
    selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");		
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}

	runningTotal = (runningTotal + sauceTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<br></h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
  
};



function Clear() {
 document.getElementById("showText").innerHTML = "";
   document.getElementById("totalPrice").innerHTML = "";
   
};



		
$(document).ready(function () {
    $("#btnOrder").click(function () {
        $("#cart").css("border-style","solid").animate({
            backgroundColor: '#ECE54F',

        });
    });
});
	

	
$(document).ready(function () {
    $("#btnCancel").click(function () {
        $("#cart").css("border-style","none").animate({
            backgroundColor: '#FF8C00',
        });
    });
});



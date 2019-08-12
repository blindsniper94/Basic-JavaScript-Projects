function getReceipt(){
    var text1 = "<h2> You have ordered: </h2>;"
    var text2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if(selectedSize === "Personal Pizza"){
        sizeTotal = 6;
        text2 = text2+sizeTotal+"<br>"
    }else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
        text2 = text2+sizeTotal+"<br>"
    }else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
        text2 = text2+sizeTotal+"<br>"
    }else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
        text2 = text2+sizeTotal+"<br>"
    }
    runningTotal = sizeTotal;
    
	getMeat(runningTotal,text1,text2);
};
function getMeat(runningTotal,text1,text2){
    var meatTotal= 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked){
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1){
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    for (var j = 0; j< selectedMeat.length; j++){
        text1 = text1 + selectedMeat[j]+"<br>";
        if (meatCount <= 1) {
            text2 = text2 + 0 + "<br>";
            meatCount = meatCount - 1;
        }
        else if (meatCount == 2){
            text2 = text2 + 1 + "<br>";
            meatCount = meatCount - 1;
        }
        else{
            text2 = text2 + 1 + "<br>";
            meatCount = meatCount - 1;
        }
    }
    getveggies(runningTotal,text1,text2);
};
function getveggies(runningTotal,text1,text2){
    var veggieTotal=0;
    var SelectedVeggies=[];
    var veggiesArray = document.getElementsByClassName("veggies");
    for (var j = 0; j < veggiesArray.length; j++){
        if(veggiesArray[j].checked){
            SelectedVeggies.push(veggiesArray[j].value);
            console.log("Selected Veggie Item: ("+veggiesArray[j].value+")");
            
        }
    }
    var veggieCount = SelectedVeggies.length;
    if (veggieCount >= 2){
        veggieTotal = (veggieCount - 1);
    }else{
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    for(var j = 0; j < SelectedVeggies.length; j++){
        text1 = text1 + veggiesArray[j].value+"<br>";
        if(veggieCount <= 1){
            text2 = text2 + 0 + "<br>";
            veggieCount = veggieCount -1;
        }
        else if(veggieCount == 2) {
            text2 = text2 + 1 + "<br>";
            veggieCount = veggieCount - 1;
        }
        else {
            text2 = text2 + 1 + "<br>";    
            veggieCount = veggieCount - 1;      
        }
    }
    getSauce(runningTotal,text1,text2);
};
function getSauce(runningTotal,text1,text2){
    var sauceArray = document.getElementsByClassName("sauce");
    for(var j= 0; j < sauceArray.length; j++){
        if(sauceArray[j].checked){
            selectedSauce = sauceArray[j].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }
    text2 = text2 + 0 + "<br>"
    console.log("selectedSauce text1"+ text1);
    getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2){
    var cheeseTotal = 0
    var selectedCheese = [];
    var cheeseArray = document.getElementsByClassName("cheese");
    for(var j = 0; j < cheeseArray.length; j++){
        if(cheeseArray[j].checked){
            selectedCheese = cheeseArray[j].value;
        }
    }
    if(selectedCheese === "Extra Cheese"){
        cheeseTotal = 3;
    }
    text2 = text2 + cheeseTotal+ "<br>"
    text1 = text1+ selectedCheese + "<br>";
    runningTotal = (runningTotal + cheeseTotal);
   
    getCrust(runningTotal,text1,text2);
}
function getCrust(runningTotal,text1,text2){
    var crustTotal = 0;
    var selectedCrust;
    var crustArray = document.getElementsByClassName("crust");
    for(var j = 0; j < crustArray.length; j++){
        if(crustArray[j].checked){
            selectedCrust = crustArray[j].value;
            text1 = text1 + selectedCrust + "<br>";
        }
    }
    if(selectedCrust == "Cheese stuffed crust"){
        crustTotal = 3;
    }
    runningTotal = (runningTotal + crustTotal);
    text2 = text2 + crustTotal + "<br>";
    
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("showText2").innerHTML = text2;

    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+" </strong></h3>";
}
function clearAll(){
    console.log("Star clearAll Function")
    document.getElementById("formMenu").reset();
    document.getElementById("pizza_cart").style.opacity=0;
    console.log("End clearAll Function")
}
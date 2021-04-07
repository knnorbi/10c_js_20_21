document.getElementById("itemPrice").addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        addPrice();
    }
});

function calculate() {
    var totalPrice = document.getElementById("price").value;
    var tipAmount = document.getElementById("tip").value;
    var totalWTip = Math.ceil(totalPrice * Number(1 + tipAmount));
    
    var numberOfPeople = document.getElementById("people").value;
    var totalWTipPP = totalWTip / numberOfPeople;
    
    // 5-re kerekites
    totalWTipPP = Math.ceil(totalWTipPP);
    while (totalWTipPP % 5 != 0) {
        totalWTipPP++;
    }
    
        // Matematikailag
    // totalWTipPP = 5 * Math.ceil(totalWTipPP / 5);
    
    document.getElementById("tprice").innerHTML = totalWTip;
    document.getElementById("tpricepp").innerHTML = totalWTipPP;
}

function addPrice() {
    var totalPrice = document.getElementById("price").value;
    var itemPrice = document.getElementById("itemPrice").value;
    
    document.getElementById("price").value = Number(totalPrice) + Number(itemPrice);
    
    document.getElementById("prices").innerHTML += "<li>" + itemPrice + " Ft</li>";
}
document.getElementById("title").innerHTML = "JS Arrays";

var numbers = [4, 8, 15, 16, 23, 42, "alma"];
numbers[6] = "barack";
numbers[7] = "szilva";
numbers[12] = "eper";

numbers[numbers.length] = "banan";
numbers.push("meggy");
numbers.unshift("citrom");

numbers.pop();
numbers.shift();

delete numbers[6];

numbers.splice(3, 0, "cseresznye", "dinnye");
numbers.splice(0, 3);

var fruits = ["korte", "kiwi"];
var fruits2 = ["mango"];

//var newarray = numbers.concat(fruits);
numbers = numbers.concat(fruits, fruits2);
numbers = numbers.concat("narancs");

numbers = numbers.slice(2);
numbers = numbers.slice(0, 3);


//for (var i = 0; i < numbers.length; i++) {
//    document.getElementById("array").innerHTML += numbers[i] + "<br>";
//}

//document.getElementById("array").innerHTML = numbers;
//document.getElementById("array").innerHTML = numbers.toString();
//document.getElementById("array").innerHTML = numbers.join(",");

document.getElementById("array").innerHTML = numbers.join("<br>");

document.getElementById("2nd").innerHTML = numbers[1];

function proc() {
//    while (numbers.length > 0) {
//        //alert(numbers.shift());
//        alert(numbers.pop());
//    }
}
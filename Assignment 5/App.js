var a = "enter a number for addition"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 + no2;
document.write("<h1>" + "Sum of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)

var a = "enter a number for substraction"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 - no2;
document.write("<h1>" + "Substraction of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)

var a = "enter a number for multiplication"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 * no2;
document.write("<h1>" + "Multiplication of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)

var a = "enter a numbe for divison"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 / no2;
document.write("<h1>" + "Divison of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total)


var a = "enter a numbe for modolus"
var no1 = +prompt(a)
var no2 = +prompt(a)
var total = no1 % no2;
document.write("<h1>" + "Modolus of" + " " + no1 + " " + "and" + " " + no2 + " " + "is" + " " + total + "<br> <br>")


var a = "1"
document.write("Value after variable declearation is " + a + "<br>")
var intialValue = 5
document.write("Initial value is " + " " + intialValue + "<br>")
var valueAfterincreament = intialValue++
document.write(" value after increament is " + intialValue + "<br>")
var valueAfterAdition = intialValue + valueAfterincreament
document.write("value after addition is" + valueAfterAdition + "<br>")
var valueAfterdecreament = --valueAfterAdition
document.write("Value after decreament is" + valueAfterdecreament + "<br>")
var reminder = valueAfterdecreament - 10
document.write("the reminder is " + reminder + "<br> <br> <br>")

var Costofticket = 600
var ticketbought = 5
var totalCost = Costofticket * ticketbought
document.write("Total cost to buy 5 tickets is " + totalCost + "PKR <br> <br> ")




var i;

for (var i = 1; i <= 10; i++) {
    document.write("4" + " " + "x" + " " + i + "=" + 4 * i + "<br>")
}

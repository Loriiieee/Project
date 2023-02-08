//var a= "Let's have a cup of coffee.";
//var b= 'He said "Hello" and left';
//var c= 'We\'ll never give up.';

//document.write(a + "<br>" + b + "<br>" + c);

//var a =25;
//var b = 30.5;
//var c = 4.25e+6;
//var d = 4.25e-6;

//document.write(a + b + c + d)

//var person = {"name: Lorie, surname: Dialoring, age: 21};
//document.write(person);

//var greeting = function(){
    //return "Hello World!";
//}
//alert(greeting());

var Total = function() {
    var totalbeans = document.getElementById("beans").value *3;
    var totalstrange = document.getElementById("strange").value *15;

    var totalPrice = totalbeans + totalstrange;
    return alert("Total: Php" + totalPrice);
}
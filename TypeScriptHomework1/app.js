var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
function greeter(person) {
    return "Hello, " + person;
}
function greet(elementId) {
    var inputValue = document.getElementById(elementId)["value"];
    if (inputValue.trim() == "") {
        inputValue = "World";
    }
    document.getElementById("third").innerText = greeter(inputValue);
}
//let fr = "11";
//if ((<HTMLInputElement>document.getElementById('first')).value!= null) {
//    fr = (<HTMLInputElement>document.getElementById('first')).value;
//};
var fr, sc, th;
function firstFunction() {
    fr = document.getElementById("first")["value"];
    console.log(fr + " " + typeof fr);
}
;
function secondFunction() {
    sc = document.getElementById("second")["value"];
    console.log(sc);
}
;
function thirdFunction() {
    th = document.getElementById("third")["value"];
    console.log(th);
}
;
function myFunction() {
    console.log("myFunction");
}
;
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    //document.getElementById("first").addEventListener("click", myFunction);
    //firstFunction
    //function convertFromCelsius() {
    //    if (cels.value) {
    //        farenh.value = (+cels.value * 1.8 + 32).toFixed(3);
    //        kelv.value = (+cels.value + 273.15).toFixed(3);
    //    }
    //    else {
    //        farenh.value = "";
    //        kelv.value = "";
    //    }
    //}
    //function convertFromFarenheit() {
    //    if (farenh.value) {
    //        cels.value = ((+farenh.value - 32) / 1.8).toFixed(3);
    //        kelv.value = (+cels.value + 273.15).toFixed(3);
    //    }
    //    else {
    //        cels.value = "";
    //        kelv.value = "";
    //    }
    //}
    //function convertFromKelvin() {
    //    if (kelv.value) {
    //        cels.value = (+kelv.value - 273.15).toFixed(3);
    //        farenh.value = (+cels.value * 1.8 + 32).toFixed(3);
    //    }
    //    else {
    //        cels.value = "";
    //        farenh.value = "";
    //    }
    //}       
    function mathOp(x, y, operation) {
        var result = operation(x, y);
        return result;
    }
    console.log(mathOp(10, 20, function (x, y) { return x + y; })); // 30 
    console.log(mathOp(10, 20, function (x, y) { return x * y; })); // 200 
};
//# sourceMappingURL=app.js.map
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}


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

let fr, sc, th;

function firstFunction(): void {  
   
    fr = document.getElementById("first").["value"];
    console.log(fr + " " + typeof fr);
};

function secondFunction(): void {
    sc = document.getElementById("second")["value"];
    console.log(sc);
};

function thirdFunction(): void {
    th = document.getElementById("third")["value"];
    console.log(th);
};

function myFunction(): void {

    console.log("myFunction");
};




//window.onload = () => {
//    //var el = document.getElementById('content');
//    //var greeter = new Greeter(el);
//    //greeter.start();

   
   
   
         
//    //document.getElementById("first").addEventListener("click", myFunction);
   
//    //firstFunction

//    //function convertFromCelsius() {
//    //    if (cels.value) {
//    //        farenh.value = (+cels.value * 1.8 + 32).toFixed(3);
//    //        kelv.value = (+cels.value + 273.15).toFixed(3);
//    //    }
//    //    else {
//    //        farenh.value = "";
//    //        kelv.value = "";
//    //    }
//    //}

//    //function convertFromFarenheit() {

//    //    if (farenh.value) {
//    //        cels.value = ((+farenh.value - 32) / 1.8).toFixed(3);
//    //        kelv.value = (+cels.value + 273.15).toFixed(3);
//    //    }
//    //    else {
//    //        cels.value = "";
//    //        kelv.value = "";
//    //    }
//    //}

//    //function convertFromKelvin() {

//    //    if (kelv.value) {
//    //        cels.value = (+kelv.value - 273.15).toFixed(3);
//    //        farenh.value = (+cels.value * 1.8 + 32).toFixed(3);
//    //    }
//    //    else {
//    //        cels.value = "";
//    //        farenh.value = "";
//    //    }
//    //}       



//    function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {

//        let result = operation(x, y);
//        return result;
//    }
//    console.log(mathOp(10, 20, (x, y) => x + y)); // 30 
//    console.log(mathOp(10, 20, (x, y) => x * y)); // 200 
//};
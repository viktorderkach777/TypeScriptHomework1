/// <reference path="scripts/typings/jquery/jquery.d.ts" />






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

//let fr, sc, th;

//function GetFunction(idName:string): void {

//    let fr = (<HTMLInputElement>document.getElementById(idName)).value;
//    console.log(fr + " " + typeof fr);   
//};




function firstFunction(): void {  
   
    let fr = (<HTMLInputElement>document.getElementById('first')).value;
    let sc = document.getElementById("second")["value"];
    let th = document.getElementById("third")["value"];
   

    let resultString = (fr + sc + th).toLocaleUpperCase();

    (<HTMLInputElement>document.getElementById('result')).value = resultString;
    console.log(resultString + " " + typeof resultString);
};

function secondFunction(getFn: () => string[], algoFn: (a: string[]) => string, setFn: (b: string) => void  ): void {
    //let fr = (<HTMLInputElement>document.getElementById('first')).value;
    //let sc = document.getElementById("second")["value"];
    //let th = document.getElementById("third")["value"];    

    //let list: string[] = [fr, sc, th];
    setFn(algoFn(getFn()));
    console.log($('#first').val());

    //let list = GetList();
    //let resString = "";
    //let maxNum = Math.max(list[0].length, list[1].length, list[2].length);   

    //for (var i = 0; i < maxNum; i++) {

    //    for (var j = 0; j < list.length; j++) {

    //        if (list[j].length > i) {
    //            resString += list[j][i];               
    //        }
    //    }        
    //} 

    //let resString = Func2(list);

    //SetList(resString);

    //(<HTMLInputElement>document.getElementById('result')).value = resString;
    //console.log(resString);
};

function Func2(list: string[]): string {

    let resString = "";

    let maxNum = Math.max(list[0].length, list[1].length, list[2].length);

    for (var i = 0; i < maxNum; i++) {

        for (var j = 0; j < list.length; j++) {

            if (list[j].length > i) {
                resString += list[j][i];
            }
        }
    }    

    return resString;
}

function SetList(resString:string): void {
    (<HTMLInputElement>document.getElementById('result')).value = resString;
    console.log(resString);
}


function GetList(): string[] {
    let fr = (<HTMLInputElement>document.getElementById('first')).value;
    let sc = document.getElementById("second")["value"];
    let th = document.getElementById("third")["value"];

    let list: string[] = [fr, sc, th];
    return list;
};

function thirdFunction(): void {
    let fr = (<HTMLInputElement>document.getElementById('first')).value;
    let sc = document.getElementById("second")["value"];
    let th = document.getElementById("third")["value"];

    let list: string[] = [fr, sc, th];
   

    //function onlyUnique(value, index, self) {
    //    return self.indexOf(value) === index;
    //}

    function uniques(arr) {
        var a = [];
        for (var i = 0, l = arr.length; i <= l; i++)
            if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
                a.push(arr[i]);
        return a;
    }
   
   
    //var uniq = list.filter(onlyUnique);

    //let resString = "";
    

    //for (var i = 0; i < list.length; i++) {
    //    console.log(split(uniques[i]));
    //}


    //(<HTMLInputElement>document.getElementById('result')).value = resString;
    //console.log(resString);
};

function myFunction(): void {

    console.log("myFunction");
};




window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();

   
   
   
         
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



    function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {

        let result = operation(x, y);
        return result;
    }
    console.log(mathOp(10, 20, (x, y) => x + y)); // 30 
    console.log(mathOp(10, 20, (x, y) => x * y)); // 200 
};
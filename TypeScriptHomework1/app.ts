/// <reference path="scripts/typings/jquery/jquery.d.ts" />


function universalFunction(getFn: () => string[], algoFn: (a: string[]) => string, setFn: (b: string) => void): void {
    
    setFn(algoFn(getFn()));    
};


function Func1(list: string[]): string {

    let resultString = (list[0] + list[1] + list[2]).toLocaleUpperCase();
    return resultString;
}


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


function Func3(list: string[]): string {

    let resString = UniqueCharacters(list[0]) + UniqueCharacters(list[1]) + UniqueCharacters(list[2]);
    resString = resString.split('').sort().join('');   

    return resString;
}


function UniqueCharacters(test: string): string {

    let temp = "";

    for (let i = 0; i < test.length; i++) {
        if (temp.indexOf(test.charAt(i)) == - 1) {
            temp = temp + test.charAt(i);
        }
    }

    return temp;
}


function SetValues(resString: string): void {
    (<HTMLInputElement>document.getElementById('result')).value = resString;     
}


function GetValues(): string[] {
    let fr = (<HTMLInputElement>document.getElementById('first')).value;
    let sc = document.getElementById("second")["value"];
    let th = document.getElementById("third")["value"];

    let list: string[] = [fr, sc, th];
    return list;
};
/// <reference path="scripts/typings/jquery/jquery.d.ts" />
function universalFunction(getFn, algoFn, setFn) {
    setFn(algoFn(getFn()));
}
;
function Func1(list) {
    var resultString = (list[0] + list[1] + list[2]).toLocaleUpperCase();
    return resultString;
}
function Func2(list) {
    var resString = "";
    var maxNum = Math.max(list[0].length, list[1].length, list[2].length);
    for (var i = 0; i < maxNum; i++) {
        for (var j = 0; j < list.length; j++) {
            if (list[j].length > i) {
                resString += list[j][i];
            }
        }
    }
    return resString;
}
function Func3(list) {
    var resString = UniqueCharacters(list[0]) + UniqueCharacters(list[1]) + UniqueCharacters(list[2]);
    resString = resString.split('').sort().join('');
    return resString;
}
function UniqueCharacters(test) {
    var temp = "";
    for (var i = 0; i < test.length; i++) {
        if (temp.indexOf(test.charAt(i)) == -1) {
            temp = temp + test.charAt(i);
        }
    }
    return temp;
}
function SetValues(resString) {
    document.getElementById('result').value = resString;
}
function GetValues() {
    var fr = document.getElementById('first').value;
    var sc = document.getElementById("second")["value"];
    var th = document.getElementById("third")["value"];
    var list = [fr, sc, th];
    return list;
}
;
//# sourceMappingURL=app.js.map
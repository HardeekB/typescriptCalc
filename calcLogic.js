
try {
    var button = document.querySelectorAll(".buttonReg");
    var display = document.querySelector("#displayWindow");
    var operatorButton = document.querySelectorAll(".btnOperator");
    var msGlobalMemory = 0;
    for (let element of button) {
        element.addEventListener('click', (e) => {
            button = e.target.value;
            display.value += button;
        });
    }
    for (let item of operatorButton) {
        // console.log("Inside loop1");
        item.addEventListener('click', (e) => {
            // console.log("Inside click event");  
            let checkOperators = ["%", "+", "-", "/", "*", ",", ",", "eof"];
            let TempDisplayString = Array(display.value);
            let flag = 0;
            for (let i = 0; checkOperators[i] != "eof"; i++) {
                // console.log("Inside loop2");
                if (TempDisplayString[TempDisplayString.length - 1] != checkOperators[i]) {
                    flag = 1;
                    // console.log("Inside if");
                }
                else {
                    flag = 0;
                    // console.log("inside else");
                    break;
                }
            }
            if (flag == 1) {
                // console.log("Inside flag check");
                operatorButton = e.target.value;
                display.value += operatorButton;
            }
            else {
                //  console.log("in flag else");
                let operatorButtoni = e.target.value;
                TempDisplayString[TempDisplayString.length - 1] = operatorButtoni;
                display.value = TempDisplayString.join("");
            }
        });
    }
    function degButtonClicked() {
        display.value = (Number(display.value) * 180 / Math.PI).toFixed(10);
    }
    function feButtonClicked() {
        let TempDisplayString = parseInt(display.value);
        display.value = String(TempDisplayString.toExponential());
    }
    function mClearButtonClicked() {
        msGlobalMemory = 0;
        document.getElementById("memoryElement").innerHTML = 'Memory: cleared';
        document.getElementById("mcFunction").style.color = "grey";
        document.getElementById("mrFunction").style.color = "grey";
    }
    function mRecallButtonClicked() {
        display.value = String(msGlobalMemory);
        document.getElementById("memoryElement").innerHTML = 'Memory:' + msGlobalMemory;
    }
    function mPlusButtonClicked() {
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
        else {
            msGlobalMemory = Number(msGlobalMemory) + Number(display.value);
            document.getElementById("memoryElement").innerHTML = 'Memory:' + msGlobalMemory;
            document.getElementById("mcFunction").style.color = "black";
            document.getElementById("mrFunction").style.color = "black";
        }
    }
    function mMinusButtonClicked() {
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
        else {
            msGlobalMemory = msGlobalMemory - Number(display.value);
            document.getElementById("memoryElement").innerHTML = 'Memory:' + msGlobalMemory;
            document.getElementById("mcFunction").style.color = "black";
            document.getElementById("mrFunction").style.color = "black";
        }
    }
    function msButtonClicked() {
        if (isNaN(Number(display.value)) || display.value == "") {
            display.value = "Syntax error";
        }
        else {
            msGlobalMemory = Number(display.value);
            document.getElementById("memoryElement").innerHTML = 'Memory:' + msGlobalMemory;
            document.getElementById("mcFunction").style.color = "black";
            document.getElementById("mrFunction").style.color = "black";
        }
    }
    // Trignometry 
    function sinButtonClicked() {
        let TempDisplayString = Math.sin(Number(display.value) * Math.PI / 180);
        display.value = TempDisplayString.toFixed(10);
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function cosButtonClicked() {
        let TempDisplayString = Math.cos(Number(display.value) * Math.PI / 180);
        display.value = TempDisplayString.toFixed(10);
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function tanButtonClicked() {
        let TempDisplayString = Math.tan(Number(display.value) * Math.PI / 180);
        display.value = TempDisplayString.toFixed(10);
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    // End of trignometry 
    // functions menu
    function ceilButtonClicked() {
        display.value = Math.ceil(Number(display.value)).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function floorButtonClicked() {
        display.value = Math.floor(Number(display.value)).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    // end of functions menu
    function twondButtonClicked() {
        display.value = Math.pow(2, Number(display.value)).toString();
    }
    function piButtonClicked() {
        if (display.value == null || display.value == "") {
            display.value = (Math.PI).toFixed(10);
        }
        else {
            display.value = (Number(display.value) * Number((Math.PI).toFixed(10))).toString();
        }
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function clearFunction() {
        display.value = "";
    }
    function backSpaceFunction() {
        display.value = display.value.slice(0, display.value.length - 1);
        // let b = Array.from(display.value);       //converting string to array  
        // b.pop();
        // console.log(b);
        // display.value = b.toString();
        // b.toString();
        // if(b == undefined)
        // {
        //     display.value = "";
        // }
        // else{
        //     display.value = string(b);
        // }
        // let b = display.value.substring(0, display.value.length-1);    //working
        // display.value = b;   
    }
    function xSquareButtonClicked() {
        display.value = Math.pow(Number(display.value), 2).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function oneDividedbyClicked() {
        display.value = (1 / Number(display.value)).toFixed(5);
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function modulusButtonClicked() {
        display.value = Math.abs(Number(display.value)).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function expButtonClicked() {
        display.value = Math.exp(Number(display.value)).toFixed(10);
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function squarerootButtonClicked() {
        display.value = Math.sqrt(Number(display.value)).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function factorialButtonClicked() {
        let TempDisplayString = Number(display.value);
        let sum = 0;
        for (sum = 1; TempDisplayString != 1; (TempDisplayString--)) {
            sum *= TempDisplayString;
        }
        display.value = sum.toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function tenXButtonClicked() {
        // let TempDisplayString,answer;
        display.value = Math.pow(10, Number(display.value)).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
            //console.log("inside if");
        }
        // TempDisplayString = display.value;
        // for( answer = 10 ; TempDisplayString != 1;TempDisplayString--)
        // {
        //     console.log(TempDisplayString);
        //     console.log(answer+ "before change");
        //     answer = answer*10;
        //     console.log(answer+ "after change");
        // }
        // display.value = answer;
    }
    function logButtonClicked() {
        display.value = Math.log10(parseInt(display.value)).toFixed(10);
    }
    function lnButtonClicked() {
        display.value = Math.log(Number(display.value)).toFixed(10);
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
            //console.log("inside if");   
        }
    }
    function plusMinusClicked() {
        display.value = Number(Number(display.value) * -1).toString();
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
    function equalFunction() {
        let x = eval(display.value);
        display.value = x;
        if (isNaN(Number(display.value))) {
            display.value = "Syntax error";
        }
    }
}
catch (err) {
    console.log(err);
    document.querySelector("#displayWindow").value = "Syntax Error";
}

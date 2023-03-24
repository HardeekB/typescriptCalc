

try {
    var button = document.querySelectorAll(".buttonReg");
    var display = document.querySelector("#displayWindow");
    var operatorButton = document.querySelectorAll(".btnOperator");
    var msGlobalMemory: number = 0;

    for (let element of button as any){
        element.addEventListener('click', (e : any) => {                 // added event listener to all buttons at once 
            button = (e.target as any).value;
            (<HTMLInputElement>display).value+= button;
        })
    }

    for (let item of operatorButton as any) {
        // console.log("Inside loop1");
        item.addEventListener('click', (e : any) => {                 // added event listener to all buttons at once 
            // console.log("Inside click event");  
            let checkOperators : string[] = ["%", "+", "-", "/", "*", ",", ",","eof"];
            let TempDisplayString = Array((<HTMLInputElement>display).value);
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
                operatorButton = (e.target as any).value;
                (<HTMLInputElement>display).value += operatorButton;
            }
            else {
                //  console.log("in flag else");
                let operatorButtoni = (e.target as any).value;
                TempDisplayString[TempDisplayString.length - 1]  = operatorButtoni;
                (<HTMLInputElement>display).value = TempDisplayString.join("");
            }

        })
    }

    function degButtonClicked() : void {
        (<HTMLInputElement>display).value = (Number((<HTMLInputElement>display).value) * 180 / Math.PI).toFixed(10);
    }

    function feButtonClicked()  : void {
        let TempDisplayString = parseInt((<HTMLInputElement>display).value);
        (<HTMLInputElement>display).value = String(TempDisplayString.toExponential());
    }

    function mClearButtonClicked()  : void  {
        msGlobalMemory = 0;
        document.getElementById("memoryElement")!.innerHTML = 'Memory: cleared';
        document.getElementById("mcFunction")!.style.color = "grey";
        document.getElementById("mrFunction")!.style.color = "grey";
    }

    function mRecallButtonClicked()  : void  {
        (<HTMLInputElement>display).value = String(msGlobalMemory);
        document.getElementById("memoryElement")!.innerHTML = 'Memory:' + msGlobalMemory;
    }

    function mPlusButtonClicked()  : void  {
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
        else {
            msGlobalMemory = Number(msGlobalMemory) + Number((<HTMLInputElement>display).value);
            document.getElementById("memoryElement")!.innerHTML = 'Memory:' + msGlobalMemory;
            document.getElementById("mcFunction")!.style.color = "black";
            document.getElementById("mrFunction")!.style.color = "black";
        }
    }

    function mMinusButtonClicked()  : void {
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
        else {
            msGlobalMemory = msGlobalMemory - Number((<HTMLInputElement>display).value);
            document.getElementById("memoryElement")!.innerHTML = 'Memory:' + msGlobalMemory;
            document.getElementById("mcFunction")!.style.color = "black";
            document.getElementById("mrFunction")!.style.color = "black";
        }
    }

    function msButtonClicked() : void  {

        if (isNaN(Number((<HTMLInputElement>display).value)) || (<HTMLInputElement>display).value == "") {
            (<HTMLInputElement>display).value = "Syntax error";
        }
        else {
            msGlobalMemory = Number((<HTMLInputElement>display).value);
            document.getElementById("memoryElement")!.innerHTML = 'Memory:' + msGlobalMemory;
            document.getElementById("mcFunction")!.style.color = "black";
            document.getElementById("mrFunction")!.style.color = "black";
        }
    } 
    
    
    // Trignometry 

    function sinButtonClicked() : void  {
        let TempDisplayString = Math.sin(Number((<HTMLInputElement>display).value) * Math.PI / 180);
        (<HTMLInputElement>display).value = TempDisplayString.toFixed(10);
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    function cosButtonClicked() : void {
        let TempDisplayString = Math.cos(Number((<HTMLInputElement>display).value) * Math.PI / 180);
        (<HTMLInputElement>display).value = TempDisplayString.toFixed(10);
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    function tanButtonClicked() : void {
        let TempDisplayString = Math.tan(Number((<HTMLInputElement>display).value)* Math.PI / 180);
        (<HTMLInputElement>display).value = TempDisplayString.toFixed(10);
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }

    // End of trignometry 

    // functions menu
    function ceilButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.ceil(Number((<HTMLInputElement>display).value)).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    function floorButtonClicked() : void  {
        (<HTMLInputElement>display).value = Math.floor(Number((<HTMLInputElement>display).value)).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    // end of functions menu

    function twondButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.pow(2,Number((<HTMLInputElement>display).value)).toString();
    }

    function piButtonClicked() : void {

        if ((<HTMLInputElement>display).value == null || (<HTMLInputElement>display).value == "") {
            (<HTMLInputElement>display).value = (Math.PI).toFixed(10);
        }
        else {
            (<HTMLInputElement>display).value = (Number((<HTMLInputElement>display).value) * Number((Math.PI).toFixed(10))).toString();
        }
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }

    function clearFunction() : void {
        (<HTMLInputElement>display).value = "";
    }

    function backSpaceFunction() : void {
        (<HTMLInputElement>display).value = (<HTMLInputElement>display).value.slice(0, (<HTMLInputElement>display).value.length - 1);
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

    function xSquareButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.pow(Number((<HTMLInputElement>display).value), 2).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }

    function oneDividedbyClicked() : void {
        (<HTMLInputElement>display).value = (1 / Number((<HTMLInputElement>display).value)).toFixed(5);
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }

    function modulusButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.abs(Number((<HTMLInputElement>display).value)).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }

    function expButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.exp(Number((<HTMLInputElement>display).value)).toFixed(10);
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    
    function squarerootButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.sqrt(Number((<HTMLInputElement>display).value)).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }

    function factorialButtonClicked() : void {
        let TempDisplayString:number = Number((<HTMLInputElement>display).value);
        let sum:number = 0;
        for (sum = 1; TempDisplayString != 1; (TempDisplayString -- )) {
            sum *= TempDisplayString;
        }
        (<HTMLInputElement>display).value = sum.toString();

        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    
    function tenXButtonClicked() : void {
        // let TempDisplayString,answer;
        (<HTMLInputElement>display).value = Math.pow(10, Number((<HTMLInputElement>display).value)).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
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
    
    function logButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.log10(parseInt((<HTMLInputElement>display).value)).toFixed(10);
    }

    function lnButtonClicked() : void {
        (<HTMLInputElement>display).value = Math.log(Number((<HTMLInputElement>display).value)).toFixed(10);
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
            //console.log("inside if");   
        }

    }

    function plusMinusClicked() : void {
        (<HTMLInputElement>display).value = Number(Number((<HTMLInputElement>display).value) * -1).toString();
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
    
    function equalFunction() : void {
        let x = eval((<HTMLInputElement>display).value);
        (<HTMLInputElement>display).value = x;
        if (isNaN(Number((<HTMLInputElement>display).value))) {
            (<HTMLInputElement>display).value = "Syntax error";
        }
    }
}

catch (err) {
    console.log(err);
    (<HTMLInputElement>document.querySelector("#displayWindow")).value = "Syntax Error";
}
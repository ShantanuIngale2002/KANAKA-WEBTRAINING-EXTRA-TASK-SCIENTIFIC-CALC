/*
    Search the keys to see implementation and also IMPLEMENTATION IS HARD is written to keys for which implementation is still remained and is hard to code.
*/


// ALL REQUIRED INITIALIZATIONS
let Stack=[]
var onButtonFlag=false;
var shiftButtonFlag=false;
var stackText="";
var getInputFlag=false;
var inputSingle=[];
var inputTwice=[];
// var pointBUttonFlag=false;
// var pointInt="";
// let pointStack=[];

function updateDisplay(){
    console.log(Stack);
    if(onButtonFlag){
        if(Stack.length>0){
            stackText=Stack.join("");
            if(stackText.length > 16){
                stackText=stackText.slice(-18);
            }
            // console.log(stackText);
            $(displayAll).text(stackText);
        }
            
        else
            $(displayAll).text("0");
    }
}
function getInput(s){
    $("#displayAll").text("Enter "+s+" : ");
}


// ON BUTTON
$('#onButton').click(function(){
    if(onButtonFlag===true){
        $(this).css("box-shadow","");
        onButtonFlag=false;
        Stack=[];
        $(this).text("ON");
        $(displayAll).text("DISPLAY").css('text-align','center');
        alert("The Calculator is now turned OFF.");
    }
    else{
        $(this).css('box-shadow','#fb9bd6 0 2px 10px 0px');
        onButtonFlag=true;
        $(this).text("OFF");
        $(displayAll).text("0000").css('text-align','left');
        alert("The Calculator is now turned ON.");
    }
});

// SHIFT BUTTON
$('#shiftButton').click(function(){
    if(shiftButtonFlag===true){
        $(this).css("box-shadow","");
        shiftButtonFlag=false;
    }
    else{
        $(this).css('box-shadow','#fb9bd6 0 2px 10px 0px');
        shiftButtonFlag=true;
    }
});

// DEL BUTTON
$("#delButton").click(function(){
    Stack.pop();
    updateDisplay();
});

// AC BUTTON
$("#acButton").click(function(){
    Stack=[];
    updateDisplay();
});

//  1 BUTTON
$("#oneButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                console.log("its here");
                Stack.push(Stack.pop()*10);
            }
            else
                Stack.push(10**1);
            getInputFlag=false;
        }
        else
            Stack.push(1);
    }
    updateDisplay();
});

// 2 BUTTON
$("#twoButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**2));
            }
            else
                Stack.push(10**2);
            getInputFlag=false;
        }
        else
            Stack.push(2);
    }
    updateDisplay();
});

// 3 BUTTON
$("#threeButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**3));
            }
            else
                Stack.push(10**3);
            getInputFlag=false;
        }
        else{
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**3));
            }
            else
                Stack.push(10**3);
        }
    }
    updateDisplay();
});

// 4 BUTTON
$("#fourButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**4));
            }
            else
                Stack.push(10**4);
            getInputFlag=false;
        }
        else
            Stack.push(4);
    }
    updateDisplay();
});

// 5 BUTTON
$("#fiveButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**5));
            }
            else
                Stack.push(10**5);
            getInputFlag=false;
        }
        else
            Stack.push(5);
    }
    updateDisplay();
});

// 6 BUTTON
$("#sixButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**6));
            }
            else
                Stack.push(10**6);
            getInputFlag=false;
        }
        else
            Stack.push(6);
    }
    updateDisplay();
});

// 7 BUTTON
$("#sevenButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**7));
            }
            else
                Stack.push(10**7);
            getInputFlag=false;
        }
        else
            Stack.push(7);
    }
    updateDisplay();
});

// 8 BUTTON
$("#eightButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**8));
            }
            else
                Stack.push(10**8);
            getInputFlag=false;
        }
        else
            Stack.push(8);
    }
    updateDisplay();
});

// 9 BUTTON
$("#nineButton").click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*(10**9));
            }
            else
                Stack.push(10**9);
            getInputFlag=false;
        }
        else
            Stack.push(9);
    }
    updateDisplay();
});

// 0 BUTTON
$('#zeroButton').click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop());
            }
            else
                Stack.push(1);
            getInputFlag=false;
        }
        else{
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*10);
            }
        }
    }
    updateDisplay();
});

// 00 BUTTON
$('#zerozeroButton').click(function(){
    if(onButtonFlag){
        if(getInputFlag){
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop());
            }
            else
                Stack.push(1);
            getInputFlag=false;
        }
        else{
            if(Stack[Stack.length-1]>=0 && Stack[Stack.length-1]<=9){
                Stack.push(Stack.pop()*100);
            }
        }
    }
    updateDisplay();
});

// . BUTTON
$('#pointButton').click(function(){
    if(onButtonFlag){
        Stack.push(".");
    }
    updateDisplay();
});

// 10^x BUTTON
$("#TenxButton").click(function(){
    if(onButtonFlag){
        getInputFlag=true;
        getInput("x");
        // Stack.push(10**inputSingle[0]);
        // inputSingle.pop();
        // getInputFlag=false;
    }
    // updateDisplay();
});

// = BUTTON
$("#equalsButton").click(function(){
    if(onButtonFlag){
        Stack=[String(EvaluateStack())];
    }
    updateDisplay();
});

// + BUTTON
$("#addButton").click(function(){
    if(onButtonFlag){
        Stack.push("+");
    }
    updateDisplay();
});

// - BUTTON
$("#subtractButton").click(function(){
    if(onButtonFlag){
        Stack.push("-");
    }
    updateDisplay();
});

// * BUTTON
$("#multiplyButton").click(function(){
    if(onButtonFlag){
        Stack.push("*");
    }
    updateDisplay();
});

// / BUTTON
$("#divideButton").click(function(){
    if(onButtonFlag){
        Stack.push("/");
    }
    updateDisplay();
});

















function EvaluateStack(){
    return 0;
}
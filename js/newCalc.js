/*
    Search the keys to see implementation and also IMPLEMENTATION IS HARD is written to keys for which implementation is still remained and is hard to code.
*/


// ALL REQUIRED INITIALIZATIONS
let Stack=[]
var onButtonFlag=false;
var shiftButtonFlag=false;
var stackText="";
var getInputFlag10x=false;
var getInputFlagxFacto=false;
var inputSingle=[];
var inputTwice=[];
// var pointBUttonFlag=false;
// var pointInt="";
// let pointStack=[];
var intVal;
var opVal;
var concate;

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
            $(displayAll).text(0);
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

// NUMPAD
$('.IntegerButton').click(function(){
    // intVal=parseFloat($(this).data('value'));
    intVal=$(this).data('value');
    if(onButtonFlag){
        if(getInputFlag10x){
            if(typeof(Stack[Stack.length-1]) == 'number'){
                console.log("its here");
                Stack.push(Stack.pop()*(10**intVal));
            }
            else
                Stack.push(10**intVal);
            getInputFlag10x=false;
        }
        // DO THIS NEXT
        else if(getInputFlagxFacto){
            if(typeof(Stack[Stack.length-1]) == 'number'){
                Stack.push(Stack.pop()*(10**intVal));
            }
            else
                Stack.push(10**intVal);
            getInputFlagxFacto=false;
        }
        else{
            if(typeof(Stack[Stack.length-1]) == 'number'){
                concate=String(Stack.pop())+String(intVal);
                Stack.push(parseFloat(concate));
            }
            else
                Stack.push(intVal);
        }
    }
    updateDisplay();
});

// 0 BUTTON
$('#zeroButton').click(function(){
    // console.log(typeof(Stack[Stack.length-1]));
    if(onButtonFlag){
        if(getInputFlag10x){
            if(typeof(Stack[Stack.length-1]) == 'number'){
                Stack.push(Stack.pop());
            }
            else
                Stack.push(1);
            getInputFlag10x=false;
        }
        else{
            if(typeof(Stack[Stack.length-1]) == 'number'){
                Stack.push(Stack.pop()*10);
            }
            else{
                Stack.push(0);
            }
        }
    }
    updateDisplay();
});

// 00 BUTTON
$('#zerozeroButton').click(function(){
    if(onButtonFlag){
        if(getInputFlag10x){
            if(typeof(Stack[Stack.length-1]) == 'number'){
                Stack.push(Stack.pop());
            }
            else
                Stack.push(1);
            getInputFlag10x=false;
        }
        else{
            if(typeof(Stack[Stack.length-1]) == 'number'){
                Stack.push(Stack.pop()*100);
            }
            else{
                Stack.push(0);
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
        getInputFlag10x=true;
        getInput("x");
    }
});

// = BUTTON
$("#equalsButton").click(function(){
    if(onButtonFlag){
        Stack=[EvaluateStack()];
    }
    updateDisplay();
});


//OPERATOR BUTTON
$(".operatorButton").click(function(){
    opVal=$(this).data('value');
    if(onButtonFlag && typeof(Stack[Stack.length-1]) == 'number'){
        Stack.push(opVal);
    }
    updateDisplay();
})

// x! button
$("#xFactoButton").click(function(){
    if(onButtonFlag){
        getInputFlagxFacto=true;
        getInput("x");
    }
});

// x^2 button
$("#xSquareButton").click(function(){
    if(!shiftButtonFlag){
        
    }
    else{

    }
});

// x root button
$("#xRootButton").click(function(){
    if(!shiftButtonFlag){
        
    }
    else{

    }
});















function EintValuateStack(){
    return 0;
}
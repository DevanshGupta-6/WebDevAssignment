let a = 0;
let b = 0;
let c = Math.random();
let d;
let data = document.getElementById("screen1").innerHTML;
let q = false;
let ansFilled = false; //Tells if the number inside the screen is answer or not

//+, = , *, / is the orientation of array
let operator = [false, false, false, false];
//Arithmetic functions
function sum(){
    operator = [true, false, false, false];
    q = true;
    document.getElementById("screen1").innerHTML = "";
    data = "";
    ansFilled = false;
}
function minus(){
    operator = [false, true, false, false];
    q = true;
    document.getElementById("screen1").innerHTML = "";
    data = "";
    ansFilled = false;
}
function multiply(){
    operator = [false, false, true, false];
    q = true;
    document.getElementById("screen1").innerHTML = "";
    data = "";
    ansFilled = false;
}
function divide(){
    operator = [false, false, false, true];
    q = true;
    document.getElementById("screen1").innerHTML = "";
    data = "";
    ansFilled = false;
}

//Number input
function one(){
    document.getElementById("screen1").innerHTML = data + "1";

    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    
    if(!q){
        a = (a*10) + 1;
    }else{
        b = (b*10) + 1;
    }
    data = document.getElementById("screen1").innerHTML;
}
function two(){
    document.getElementById("screen1").innerHTML = data + "2";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 2;
    }else{
        b = (b*10) + 2;
    }
    data = document.getElementById("screen1").innerHTML;
}
function three(){
    document.getElementById("screen1").innerHTML = data + "3";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 3;
    }else{
        b = (b*10) + 3;
    }
    data = document.getElementById("screen1").innerHTML;
}
function four(){
    document.getElementById("screen1").innerHTML = data + "4";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 4;
    }else{
        b = (b*10) + 4;
    }
    data = document.getElementById("screen1").innerHTML;
}
function five(){
    document.getElementById("screen1").innerHTML = data + "5";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 5;
    }else{
        b = (b*10) + 5;
    }
    data = document.getElementById("screen1").innerHTML;
}
function six(){
    document.getElementById("screen1").innerHTML = data + "6";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 6;
    }else{
        b = (b*10) + 6;
    }
    data = document.getElementById("screen1").innerHTML;
}
function seven(){
    document.getElementById("screen1").innerHTML = data + "7";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 7;
    }else{
        b = (b*10) + 7;
    }
    data = document.getElementById("screen1").innerHTML;
}
function eight(){
    document.getElementById("screen1").innerHTML = data + "8";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 8;
    }else{
        b = (b*10) + 8;
    }
    data = document.getElementById("screen1").innerHTML;
}
function nine(){
    document.getElementById("screen1").innerHTML = data + "9";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10) + 9;
    }else{
        b = (b*10) + 9;
    }
    data = document.getElementById("screen1").innerHTML;
}
function zero(){
    document.getElementById("screen1").innerHTML = data + "0";
    if(ansFilled){
        a = 0;
        ansFilled = false;
    }
    if(!q){
        a = (a*10);
    }else{
        b = (b*10);
    }
    data = document.getElementById("screen1").innerHTML;
}


//Submit and cancel
function result(){
    if(operator[0]){
        if(c<=0.1){
            d = (a - b);
        }else{
            d = (a + b);
        }
    }
    if(operator[1]){
        if(c<=0.1){
            d = (a / b);
        }else{
            d = (a - b);
        }
    }
    if(operator[2]){
        if(c<=0.1){
            d = (a + b);
        }else{
            d = (a * b);
        }
    }
    if(operator[3]){
        if(c<=0.1){
            d = (a ** b);
        }else{
            d = (a / b);
        }
    }
    document.getElementById("screen1").innerHTML = d;
    q = false;
    ansFilled = true;
    a = d;
    b = 0;
    d = 0;
    data = "";
    c = Math.random();
}

function cancel(){
    document.getElementById("screen1").innerHTML = "";
    ansFilled = false;
    q = false;
    a = 0;
    b = 0;
    d = 0;
    data = "";
    c = Math.random();
}
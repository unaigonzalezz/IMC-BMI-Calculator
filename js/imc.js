
function IMCJS() {
    var heightIMC = document.getElementById("heightIMC").value;
    var weightIMC = document.getElementById("weightIMC").value;
    var IMC = weightIMC / Math.pow((heightIMC / 100), 2)
    if(IMC !== IMC) {    
        document.getElementById("result").innerHTML = "Enter the values!";
   }else{
    document.getElementById("result").innerHTML = "Your IMC is: " + IMC;
}
    if (IMC < 18.5){
        document.body.style.backgroundColor = "#53e1e5";
        document.getElementById("status").innerHTML = "You have Low Weight.";
    }   
    if (IMC > 18.5 && IMC < 24.9 ){
        document.body.style.backgroundColor = "#c9e26c";
        document.getElementById("status").innerHTML = "You have Normal Weight.";
    }
    if (IMC > 25 && IMC < 25.9 ){
        document.body.style.backgroundColor = "#ffde63";
        document.getElementById("status").innerHTML = "You have Overweight.";
    }
    if (IMC > 30 && IMC < 34.9 ){
        document.body.style.backgroundColor = "#fea851";
        document.getElementById("status").innerHTML = "You have Obesity type 1";
    }
    if (IMC > 35 && IMC < 39.9 ){
        document.body.style.backgroundColor = "#ff9251";
        document.getElementById("status").innerHTML = "You have Obesity type 2.";
    }
    if (IMC > 40){
        document.body.style.backgroundColor = "#eb5a5f";
        document.getElementById("status").innerHTML = "You have Obesity type 3.";
    }
    
}




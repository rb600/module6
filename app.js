// js for an example to show Math.min and Math.max from a user defined array
let i=0;
let na = Array();

document.getElementById("btn1").onclick = 
function(){ add()};

function add(){
document.getElementById("listArray").innerHTML=" ";    
na[i]=document.getElementById("a").value;
i++;
document.getElementById("a").value="";
document.getElementById("listArray").innerHTML +=na;
let maxNum = Math.max.apply(null, na);
 let minNum = Math.min.apply(null, na);
 document.getElementById("max_min_result").innerHTML = "The highest and lowest number you have entered are " +maxNum + " and " +minNum + " respectively";

}

//  js for volume of a sphere


document.getElementById("btn2").onclick = 
function(){ calcVol()};

function calcVol(){
    let j=document.getElementById("b").value;
    const vol = 4/3*3.14159*j*j*j;
   document.getElementById("res").innerHTML =vol;
}

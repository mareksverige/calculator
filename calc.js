function clearview(){
    document.getElementById("view").innerHTML="0";
}
function deletezero(){
    var  value=document.getElementById("view").innerHTML;
    if(value=="0"){
        value=" "
        document.getElementById("view").innerHTML=value;
    }
}
function percen(){
    deletezero()
    var value=document.getElementById("view").innerHTML;
    value=value/100
    document.getElementById("view").innerHTML=value;
}
function forview(myvalue){
    deletezero()
    document.getElementById("view").innerHTML+=myvalue;
}
 function solve(){
     deletezero()
     var equation=document.getElementById("view").innerHTML;
     var solved=eval(equation);
     document.getElementById("view").innerHTML=solved;
 }
    

 var i=0;
var body=document.querySelector("body");
var input=document.querySelectorAll(".inp");
var submit=document.querySelectorAll(".submit");
var container=document.querySelectorAll(".container");
var content=document.querySelectorAll(".content");
var span=document.querySelectorAll(".span");
var contain=document.querySelectorAll(".contain");
var k=100;
var string= document.getElementsByClassName('container')[0].innerHTML;
var x =Math.floor((Math.random() * k) + 1);
  
span[i].textContent=k;

 submit[i].addEventListener("click", response);
 function response() {
 if(isNaN(input[i].value))
  alert("Must contain numbers");
 else
 submitt();
 }

function submitt(){
 
 var sub=Math.abs(x-input[i].value);
  console.log(x);
  if(sub==0){
container[i].style.background="Green";
container[i].style.color="gray";
 content[i].textContent="CORRECT!";
 input[i].disabled=true;
 submit[i].removeEventListener("click", response); 
  repeat();}
else
 if(sub>=1 && sub<=4){
container[i].style.background="Red";
 content[i].textContent="HOT!!";}
else
 if(sub>=5 && sub<=15){
container[i].style.background="Yellow";
 content[i].textContent="WARM!";}
else{
container[i].style.background="Blue";
 content[i].textContent="COLD";}
}

function repeat(){
  var div=document.createElement('div');
  div.className="container";
  //var string= document.getElementsByClassName('container')[0].innerHTML;
 div.innerHTML=string;
 //document.getElementsByTagName('head')[0].appendChild(div);
 contain[0].appendChild(div);
 //document.body.insertBefore();
// alert(string);
  /* <div id='heading'><strong>Guess The Number Up to <span><span></strong></div>
   <input type='text' id='inp'></div>
 <br>
  <button id='submit'><b>Submit</b></button>
 <br>
  <h2 id='content'></h2>
 </div>*/
  //document.querySelector("body").innerHTML=body;
 
 k=k+100;
 i++;
 input=document.querySelectorAll(".inp");
 submit=document.querySelectorAll(".submit");
 container=document.querySelectorAll(".container");
 content=document.querySelectorAll(".content");
 span=document.querySelectorAll(".span");
 span[i].textContent=k;
  input[i].disabled=false;
  input[i].enabled=true;
  //input[i].value="";
  x =Math.floor((Math.random() * k) + 1);
  submit[i].addEventListener("click", response);
}




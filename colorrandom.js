function changeColor(){
   var r=Math.round(Math.random()*255);
   
   var g=Math.round(Math.random()*255);
   var b=Math.round(Math.random()*255);
   var result="rgb("+r+","+g+","+b+")"
   var d="rgb("+1+","+4+","+3+")";
   
   document.body.style.backgroundColor=result;
}
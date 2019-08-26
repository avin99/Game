/*function move() {
    var elem=document.getElementById("basket2");
    var pos=0,k,flag=0;
    var id=setInterval(frame,10);
  
        function frame() {
            
            if (pos == 500 && flag==0) 
            {
                k=pos;
                flag=1;
            }
             // clearInterval(id);
             else if(flag==0){
               
                pos++; 
               
              elem.style.left = pos + 'px'; 
            }
            else{
            k--; 
               
              elem.style.left = k + 'px'; 
              if(k==0)
              {
                  pos=0;
                  flag=0;
              }
          }
          
    }
}*/

var f3=0;
var ey=620;
var ex=675;
var x1=620,x2=220,flag=0,flag2=0,f3=0;
var gravity=4;
var gap=300;
var x=620,y=620,y1=620,y2=620,f4=0;

window.onload = function(){
 //var start = document.getElementById('canvas');
 document.getElementById("canvas").onclick = function() {myFunction()};

function myFunction() {
  f3=1;
}
var canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
draw();
//some variables
//on key down
}

function draw(){
    var c = canvas.getContext('2d');
    var egg = new Image();
var basket1 = new Image();
var basket2 = new Image();
var basket3 = new Image();
var bg = new Image();
    bg.src = "../images/bgc2.jpg";
egg.src = "../images/egg(2).png";
basket1.src = "../images/basketgame.png";
basket2.src = "../images/basketgame.png";
basket3.src = "../images/basketgame.png";
    c.drawImage(bg,0,0,canvas.width,canvas.height);
    c.drawImage(egg,ex,ey,75,75);
    c.drawImage(basket1,x,y,180,150);
    c.drawImage(basket2,x1,y1-gap,180,150);
    c.drawImage(basket3,x2,y2-2*gap,180,150);
    //basket1
    if(x1+180<canvas.width && flag==0){
     x1=x1+5;
    } else
    {
        x1=x1-5;
        flag=1;
        if(x1==0)
        flag=0;
    }
    //basket2
    if(x2+180<canvas.width && flag2==0){
        x2=x2+5;
       } else
       {
        x2=x2-5;
           flag2=1;
           if(x2==0)
           flag2=0;
       }
       if(f3==1){
           if(f4==0)
        ey-=gravity;
         if(ey==(y1-gap) && (ex>=x1-30 && ex<=x1+210)){
             ey=y1-gap;
             ex=x1+56;
             f4=1;
         }
       }
       

    requestAnimationFrame(draw);
    }

// bg.onload = function()
// {
    
  
   
// }
//  onclick=moveup();
// function moveup(){
    
//     ey-=1;
//     console.log(ey);    
// }
//setInterval(moveup,10);

// window.addEventListener("keydown",function(){
    
// ey=ey-300;

// });

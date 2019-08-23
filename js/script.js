function move() {
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
}
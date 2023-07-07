 
         var tim = 60;
         var score = 0;

         function timer(){
           
            setInterval(function(){
                if(tim>0){
                    tim--;
                  
                }
                document.querySelector("#timer").textContent = tim ;
            },1000)
          
         }



         function bubbleMaker(){
            document.querySelector("#container").innerHTML = '';
            for(i=0;i<102;i++){
                var a = Math.floor(Math.random()*255);
                 var b = Math.floor(Math.random()*255);
                  var c= Math.floor(Math.random()*255);
             var rndm = Math.floor(Math.random()*10);
             document.querySelector("#container").innerHTML += `<div class="bubble">${rndm}</div>`;
            }
         }

         var rndm2 =  Math.floor(Math.random()*10);

         function hitval(){
            rndm2= Math.floor(Math.random()*10);
            document.querySelector("#hit").textContent = rndm2;
         }
         bubbleMaker();
         
         document.querySelector("#container").addEventListener("click",function(dets){
            if(dets.target!== document.querySelector("#container")){
                if(Number(dets.target.textContent)===rndm2){
                    bubbleMaker()
                    hitval();
                    score = score+10;
                    document.querySelector("#score").textContent = score;
                 }
                 else{
                    bubbleMaker()
                    hitval();
                    score = score-10;
                    document.querySelector("#score").textContent = score;
                 }
            }
           
                
         })


         timer();
        
         hitval();
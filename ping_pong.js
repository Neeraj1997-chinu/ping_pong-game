// var item=document.getElementsById('head').addEventListener
// item.addEventListener
// document.getElementsByClassName('bar').addEventListener(onkeypress);

// window.onkeypress=function(event){
//     var ev=event.keyCode; 
   
//     if(ev==97 || ev==65){
//         console.log(ev);
//        var item= document.getElementById('head');
//        var item2= document.getElementById('foot');
//        var left=item.offsetLeft-10;
//        var left1=item2.offsetLeft-10;
//        console.log(item.offsetLeft);
//        console.log(item2.offsetLeft);
//        item.style.left= left+"px"
//        item2.style.left= left1+"px"
     
//     } if(ev==100 || ev==68){
//         console.log(ev);
//         var item= document.getElementById('head');
//         var item2= document.getElementById('foot');
//         var left=item.offsetLeft+10;
//         var left1=item2.offsetLeft+10;
//         console.log(item.offsetLeft);
//         console.log(item2.offsetLeft);
//         item.style.left= left+"px"
//         item2.style.left= left1+"px"
//     }
// }


var canvas;
var ct;
var ballx;
var bally;
var barX=340
var  xVelocity=2;
var yVelocity=2;
var  ballwidth=10
var interval;
var score1=0;
var score2=0;

var load = function(){
  window.onload = function(){
    canvas=document.getElementById('canvas');
    ct=canvas.getContext("2d");
    console.log(canvas.height);
    console.log(canvas.width);
    console.log(localStorage.playerwon);

    if(localStorage.playerwon=="player2"){
      ballx=415;
      bally=20;
     }
    if(localStorage.playerwon=="player1"){
        ballx=415;
        bally=580;
    }
    
    
    if(localStorage.highscore==0){
      alert("this is your fist time press enter to start");
    }
    else{
      alert(`high score is ${localStorage.highscore} !! press enter  to start  ` );
    }
    interval= moveball();
    window.onkeypress = function(event){
      var ev = event.keyCode;
      if(ev==13){
        interval = setInterval(moveball,15);
      }
    }
    
    
  }
}

function moveball(){
  ct.clearRect(0, 0, canvas.width, canvas.height);
    ct.fillStyle = "#FF0000";
    ct.fillRect(barX, 0, 150, 10);
    ct.fillRect(barX, 590, 150, 10);
    ct.beginPath();
    ct.arc(ballx,bally,ballwidth,0,2*Math.PI,true);
    ct.fillStyle="blue"
    ct.fill();
    ct.stroke();
   
    ballx += xVelocity;
    bally += yVelocity;

    if( bally<=10 && ballx >= barX && ballx <= barX+150 ){
      console.log(bally);
      score1 += 10;
       yVelocity = - yVelocity;
    }
    if( bally>=590 && ballx >= barX && ballx <= barX+150 ){
      console.log(bally);
      score2 += 10;
       yVelocity = - yVelocity;
    }
    if(ballx+ballwidth >= canvas.width){
        xVelocity = -xVelocity;
    }
    if(ballx - ballwidth <= 0){
        xVelocity = -xVelocity
    }
    
    if(bally  >= canvas.height){
      ct.clearRect(0, 0, canvas.width, canvas.height);
      clearInterval(interval);
      localStorage.playerwon="player1";
      if(score2>localStorage.highscore){
        localStorage.highscore=score2;
        
        
        window.alert(`player 1 won the game score ${score1}  voila new highest score ${localStorage.highscore}`);
     }
     else{
         window.alert(`player 1 won the game score ${score1}`);
     }
      location.reload();
    }
    if(bally  <= 0){
  
      //  clearInterval(interval);
       ct.clearRect(0, 0, canvas.width, canvas.height);
       clearInterval(interval);
       localStorage.playerwon="player2";
       if(score2>localStorage.highscore){
          localStorage.highscore=score2;
          
         
          window.alert(`player 2 won the game score ${score2}  voila new highest score ${localStorage.highscore}`);
       }
       else{
           window.alert(`player 2 won the game score ${score2}`);
       }
      
       location.reload();
      //  window.onload();
    }

    window.onkeypress = function(event){
      var key = event.keyCode;
      if(key== 65 || key == 97){
          barX -= 10
      }
      if(key==68  || key == 100){
          barX += 10
      }
      // console.log(barX);
    }
    
}
load();




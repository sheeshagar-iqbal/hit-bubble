function createbubble(){
    var clutter ="";
    for( let i =0; i<=167; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += ` <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
createbubble()


 function timeinterval(){
    var timer = 6;
   var timerint = setInterval(() => {
        if(timer > 0){
         timer--;
         document.querySelector("#timerval").textContent =timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector('#pbtm').innerHTML = `<h1> End Game </h1>`
        }
    }, 1000);
 }
 timeinterval();

var hitnum;
 function hitval(){
    hitnum = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = hitnum
 }
 hitval();
 var score = 0;
 function increaseScore(){
   
    score += 10;
    document.querySelector('#scoreval').textContent = score;
 }
 

 document.querySelector('#pbtm').addEventListener("click",function(dets){
    //    console.log();
    var clickednum = Number(dets.target.textContent)
  if(clickednum === hitnum){
    increaseScore();
    hitval();
    createbubble();
  }       
 })
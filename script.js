function makeBubble(){
var clutter = "";

for(var i=1; i<=119 ; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}


document.querySelector("#panelbottom").innerHTML= clutter
}

var timer = 60;
function runTimer(){
    var Time = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#panelbottom").innerHTML= `<h1>Game Over</h1>`;
        }
    }, 1000);
}

var hitrn;
function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn ;
}

var score = 0;
function scoreValue(){
        score += 1;
        document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panelbottom")
.addEventListener("click", function(details) {
    var clickednum = Number(details.target.textContent); 
    if(clickednum === hitrn){
        scoreValue();
    }
    
    makeBubble();
    newHit();

});

//scoreValue();
newHit();
runTimer();
makeBubble();
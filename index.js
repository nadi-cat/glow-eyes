
var allEyeballs = document.getElementsByClassName('eye');

var stopBtn = document.getElementById('sbutton');
var playBtn = document.getElementById('pbutton');

var scoreLabel = document.querySelector("h3");
var score = 0;

let intervalID;

//sounds
let splat = new Audio("/sounds/splat.mp3")

//repeat code with interval
function repeatHalfSecond() {
    intervalID = setInterval(play, 600);     
}

//function to stop interval
function clearAlert() {
    clearTimeout(intervalID);
  }

//all game functionality 
function play(){

    // function to make eyes glow and keep score
    
    //loop through all eyes and turn off glow class everytime function called
        for (var i = 0; i<allEyeballs.length;i++){
            allEyeballs[i].classList.remove("glow")
        }

    //add glow class to random eye 
    var randomNum = Math.floor(Math.random() * 4 );

    allEyeballs[randomNum].classList.add("glow")
    
    //when clicked if glowing add point to score 
    allEyeballs[randomNum].addEventListener("click",function(){
        
        if (allEyeballs[randomNum].classList.contains("glow")){
            
            ++ score
            scoreLabel.innerHTML = score
            allEyeballs[randomNum].classList.remove("glow")

            //play sound
            splat.play()
            
            //splatter effect
            allEyeballs[randomNum].classList.add("splatter")
            setTimeout(function(){
                for (var i = 0; i<allEyeballs.length;i++){
                    allEyeballs[i].classList.remove("splatter")
                }
                
            }, 2000)

        }
    } )
    
}

//Disable button and set opacity until stop clicked
function disablePlayBtn(){
    playBtn.disabled = true;
    playBtn.classList.add("dim");
}

function enablePlayBtn(){
    playBtn.disabled = false;
    playBtn.classList.remove("dim");
}

//stop game on click and enable play button
stopBtn.onclick = function(){
   clearAlert();
   enablePlayBtn();
}

// play game and disable playbutton
playBtn.onclick = function(){
    repeatHalfSecond();
    disablePlayBtn();
}

// on start play game and disable play button
repeatHalfSecond();

disablePlayBtn();






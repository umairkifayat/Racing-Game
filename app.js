var bluecar = document.querySelector('#blue-car')
var racecar = document.querySelector('#race-car')
var result = document.querySelector('#result')
var score = document.querySelector('#score')
var game = document.querySelector('#game')
var jumpsound = document.querySelector('#jumpsound')

var counter = 0;




//  bluecar move 

bluecar.addEventListener('animationiteration',function (params) {
   var random = ((Math.floor(Math.random() * 3))  *130)
   bluecar.style.left = random + 'px'
   counter++
})



// racecar move 
window.addEventListener('keydown',function (e) {
    if(e.keyCode == '39'){    var racevarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racevarleft < 260) {
        racecar.style.left = (racevarleft + 130) + "px"
        jumpsound.play()

    }}
    if(e.keyCode == '37'){    var racevarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racevarleft > 0) {
        racecar.style.left = (racevarleft - 130) + "px"
        jumpsound.play()
    }}
})

// game over 

setInterval(function Gameover(params) {

        var bluecartop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
        var bluecarleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
        var racevarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
if ((bluecarleft === racevarleft) && (bluecartop > 250) && (bluecartop < 450)) {
    result.style.display = 'block'
    game.style.display = 'none'
    score.innerHTML = `score:${counter}`
    counter = 0;
}
},10)
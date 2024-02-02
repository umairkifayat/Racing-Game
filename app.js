var bluecar = document.querySelector('#blue-car')
var racecar = document.querySelector('#race-car')


//  bluecar move 

bluecar.addEventListener('animationiteration',function (params) {
   var random = ((Math.floor(Math.random() * 3))  *130)
   bluecar.style.left = random + 'px'
})

window.addEventListener('keydown',function (e) {
if(e.keyCode == '39'){    var racevarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racevarleft < 260) {
        racecar.style.left = (racevarleft + 130) + "px"
    }}
    if(e.keyCode == '37'){    var racevarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racevarleft > 0) {
        racecar.style.left = (racevarleft - 130) + "px"
    }}
})
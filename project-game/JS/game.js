var rocketContainer=document.querySelector(".rocket-container");
document.addEventListener('mousemove',function(eventInfo){
    rocketContainer.style.left=eventInfo.clientX+'px';
    rocketContainer.style.top=eventInfo.clientY+'px';
    
})

var bulletAudio=document.querySelector('#bullet-audio')
var left=0;
var bottom=0;
document.addEventListener("keydown",function(event){
    if(event.key==="ArrowRight"){
        left+=100;
        rocketContainer.style.left=left+'px'
    }
    else if(event.key==="ArrowLeft"){
        left-=100;
        rocketContainer.style.left=left+'px'
    }
    else if(event.key==="ArrowUp"){
        bottom+=100;
        rocketContainer.style.bottom=bottom+'px'
    }
    else if(event.key==="ArrowDown"){
        bottom-=100;
        rocketContainer.style.bottom=bottom+'px'
    }
    else if(event.key===" "){
       bulletAudio.play();
    }

})
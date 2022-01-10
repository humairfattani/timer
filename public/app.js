var hours = 0
var minute = 0
var second = 0


var showhrs = document.getElementById("showhrs")
var showmint = document.getElementById("showmint")
var showsec = document.getElementById("showsec")

var interval;
function start(){
    interval = setInterval(function()  {
second ++
        showsec.innerHTML = second
        if(second == 59){
            minute++
            second=0
            showmint.innerHTML = minute
            showsec.innerHTML = second
            if(minute == 59){
                hours++
                showhrs.innerHTML = hours
                minute = 0
                showmint.innerHTML = minute
            }
        }
    }, 1000);
}


function stop(){
    clearInterval(
        interval
    )
}

function reset(){
     hours = 0
     minute = 0
 second = 0
    stop()  
    showhrs.innerHTML = hours
    showmint.innerHTML = minute
    showsec.innerHTML = second
}




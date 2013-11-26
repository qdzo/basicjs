//--------------------------------------------------------------------------
function Timer() {
    var time, interval;
    
    
    this.run = function(minutes) {
        this.stop();
        time = parseInt(minutes)*60;
        interval = setInterval(this.minusSecond,1000);
    }
    
    this.stop = function() {
        clearInterval(interval);   
    }
    
    
    this.minusSecond = function() {
        if(time >= 0) {
            var minutes = parseInt(time/60);
            var seconds = time%60;
            document.getElementById('clock').innerHTML=minutes+':'+seconds;   
            time-=1;
        }
        else {
            alert('Dzzzzz-dzzzzzz!!!');
            this.stop();
        }
    }

    return this;
}
//----------------------------------------------------------------------------
var timer = new Timer();




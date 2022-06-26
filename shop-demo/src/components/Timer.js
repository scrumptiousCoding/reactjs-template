import { useState } from "react";
const Timer = (time, background) => {

    const [timerString, setTimerString] = useState()
    
    var countDownDate = new Date(time.time)

    var a = setInterval(function() {
        var now = new Date().getTime()
        var distance = countDownDate - now
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimerString(hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0'))
        if (distance < 0) {
            clearInterval(a)
            setTimerString("00:00:00")
        }
    }, 1000);

    return (
        <div>
            <span className="py-1 px-2 fw-bold fs-6">
                <i className="bi bi-clock"></i> <span>{timerString}</span>
            </span>
        </div>
    );
}
 
export default Timer;
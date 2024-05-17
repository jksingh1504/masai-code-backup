import React, { useEffect } from 'react'

const useTimer = (init) => {

    useEffect(()=>{
        setTime(init)
    },[init])

    const [time, setTime] = React.useState(init);
    
	const stopId = React.useRef(null);

	function msToTime(duration) {
		var seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		hours = hours <= 0 ? "" : hours + ":";
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		return hours + minutes + ":" + seconds;
	}

	const start = () => {
		if (!stopId.current) {
			stopId.current = setInterval(() => {
				setTime((time) => {
					if (time <= 0) {
						clearInterval(stopId.current);
						stopId.current = null;
						return time;
					}

					return time - 60;
				});
			}, 60);
		}
	};

	const reset = () => {
        setTime(0)
		clearInterval(stopId.current);
		stopId.current = null;
	};



  return {time,start,reset,msToTime}
}

export default useTimer
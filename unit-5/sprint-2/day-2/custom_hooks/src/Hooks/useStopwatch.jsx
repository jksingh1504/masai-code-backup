import React from 'react'

const useStopwatch = () => {
    const [strt, setStart] = React.useState(0);
	const end = React.useRef(Infinity);
	const timerid = React.useRef(null);

	function msToTime(duration) {
		var milliseconds = Math.floor((duration % 1000) / 10),
			seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
	}

	const stopTimer = (id) => {
		clearInterval(id);
		timerid.current = null;
	};

	const start = () => {
		if (!timerid.current) {
			// console.log("hello");
			const id = setInterval(() => {
				// console.log(strt, end);
				if (strt < end.current)
					setStart((strt) => {
						if (strt < end.current) return strt + 10;
						stopTimer(id);
						return strt;
					});
				else stopTimer(id);
			}, 10);
			timerid.current = id;
		}
	};

	const pause = () => {
		clearInterval(timerid.current);
		timerid.current = null;
	};

	const reset = () => {
		setStart(0);
		clearInterval(timerid.current);
		timerid.current = null;
		// clearInterval(timerid);
		// setTimerid(null);
	};

  return {init:strt,start , pause, reset,msToTime}
}

export default useStopwatch
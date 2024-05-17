import React from "react";
import useStopwatch from "../Hooks/useStopwatch";

const Stopwatch = () => {

	const {init,start,pause,reset,msToTime}=useStopwatch();
	

	return (
		<div>
			<br />
			<br />
			<h1>Stopwatch</h1>
			<h1>{msToTime(init)}</h1>
			<div>
				<button onClick={start}>start</button>
				<button onClick={pause}>pause</button>
				<button onClick={reset}>reset</button>
			</div>
		</div>
	);
};

export default Stopwatch;

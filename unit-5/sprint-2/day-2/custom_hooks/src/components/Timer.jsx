import React from "react";
import { useState } from "react";
import useTimer from "../Hooks/useTimer";

const Timer = () => {
	const timeValue = React.useRef("");
	// console.log("hello")
	const inputdefault="";
	const [init, setInit] = useState("");
	const { time, start, reset, msToTime } = useTimer(init);

	return (
		<div>
			<br />
			<br />
			<input
				onChange={(e) => (timeValue.current = e.target.value)}
				type="Number"
				placeholder="enter time in minutes"
				// value={timeValue.current}
			/>
			<button
				onClick={() => {
					timeValue.current = Number(timeValue.current) * 1000 * 60;

					setInit(timeValue.current);
					timeValue.current=""

					// console.log(init);
				}}
			>
				Set Timer
			</button>
			<h1>Timer</h1>
			<h1>{msToTime(time)}</h1>
			<button onClick={start}>Start</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Timer;

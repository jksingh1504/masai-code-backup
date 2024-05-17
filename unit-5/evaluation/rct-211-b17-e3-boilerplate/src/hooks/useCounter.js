import { useState } from "react";

export const useCounter = (init) => {
	const { initialValue, minValue, maxValue } = init;

	const [count, setCount] = useState(initialValue);

	const incCount = (x) => {
		if (x == undefined) x = 1;

		if (count < maxValue) setCount(count + x);
		else return;
	};

	const decCount = (x) => {
		if (x == undefined) x = 1;

		if (count > minValue) setCount(count - x);
		else return;
	};

	return { count, incCount, decCount };
};

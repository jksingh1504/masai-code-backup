import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useTimeout = (delay) => {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let id = setTimeout(() => {
			setReady(ready=>!ready);
		}, delay);

		return () => {
			clearTimeout(id);
		};
	}, [delay]);

	return {ready};
};

export default useTimeout;

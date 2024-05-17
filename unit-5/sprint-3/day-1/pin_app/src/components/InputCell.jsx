import React from "react";
import { forwardRef } from "react";

const InputCell = forwardRef(
	({ Ref, indx, setEnteredPin, setcurntRef }, ref) => {
		const handleInput = (e) => {
			if (e.target.value == " ") {
				e.target.value = "";
				return;
			}
			if (
				e.target.value.length == e.target.maxLength &&
				indx < Ref.current.length - 1
			) {
				setcurntRef(indx + 1);
			} else
				setEnteredPin((prev) => {
					if (prev.length < Ref.current.length) return prev + e.target.value;
					return prev;
				});
		};

		const handlekey = (e) => {
			const key = e.keyCode;
			// console.log(key)

			switch (key) {
				case 8:
					if (indx > 0) setcurntRef(indx - 1);
					else setEnteredPin("");
					break;
				case 39:
					if (indx < Ref.current.length - 1) setcurntRef(indx + 1);
					break;
				case 37:
					if (indx > 0) setcurntRef(indx - 1);
					break;
				default:
					break;
			}
		};

		const handlePaste = (e) => {
			let PastedPin = e.clipboardData.getData("text");
			// console.log(PastedPin.length)
			Ref.current.forEach((item, i) => {
				PastedPin[i] ? (item.value = PastedPin[i]) : (item.value = "");
			});
			if (PastedPin.length < Ref.current.length - 1)
				setcurntRef(PastedPin.length - 1);
			else setcurntRef(Ref.current.length - 1);
		};

		return (
			<input
				type="text"
				maxLength={1}
				onKeyUp={handlekey}
				onInput={handleInput}
				style={{
					width: "40px",
					height: "40px",
					textAlign: "center",
					fontSize: "20px",
				}}
				onPaste={handlePaste}
				ref={ref}
			/>
		);
	}
);

export default InputCell;

import React,{useRef} from "react";
import { useEffect } from "react";
import { forwardRef } from "react";

const InputCell = forwardRef(
	({ Ref, indx, setEnteredPin, setcurntRef, inputLength }, ref) => {

		
		const pasted=useRef(false)

		const handleInput = (e) => {
			if(pasted.current){
				pasted.current=false;
				return
			}
			// console.log(e)
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
					let bag = "";
					Ref.current.forEach((ele) => {
						bag += ele.value;
					});
					return bag;
				});
		};

		

		const handlekey = (e) => {
			const key = e.keyCode;
			// console.log(key)

			switch (key) {
				case 8:
					if (indx > 0 && e.target.value.length == 0) setcurntRef(indx - 1);
					else
						setEnteredPin((prev) => {
							let bag = "";
							Ref.current.forEach((ele) => {
								bag += ele.value;
							});
							return bag;
						});
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
			pasted.current=true
			
			let PastedPin = e.clipboardData.getData("text");
			// console.log(PastedPin.length)
			Ref.current.forEach((item, i) => {
				PastedPin[i] ? (item.value = (PastedPin[4*i]?PastedPin[4*i]:"")+(PastedPin[4*i+1]?PastedPin[4*i+1]:"")+(PastedPin[4*i+2]?PastedPin[4*i+2]:"")+(PastedPin[4*i+3]?PastedPin[4*i+3]:"")) : (item.value = "");
			});
			if (PastedPin.length < 4*Ref.current.length - 1)
				setcurntRef(Math.floor(PastedPin.length/4));
			else setcurntRef(Ref.current.length - 1);
		};

		return (
			<input
				type="text"
				maxLength={inputLength}
				onKeyUp={handlekey}
				onInput={handleInput}
				style={{
					width: "80px",
					height: "30px",
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

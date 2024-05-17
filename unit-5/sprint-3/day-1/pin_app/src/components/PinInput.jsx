import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import InputCell from "./InputCell";

const PinInput = ({ length }) => {
	const Input = useRef(new Array(length).fill(1));
    const Ref=useRef([])
    const [curntRef,setcurntRef]=useState(0)
    const [EnteredPin,setEnteredPin]=useState("")

    useEffect(()=>{
        let bag=""
        Ref.current.forEach((ele)=>{
            bag+=ele.value
        })
        // console.log(bag)
        Ref.current[curntRef].focus()
        setEnteredPin(bag)
    },[curntRef,setEnteredPin])
    

	return (
		<div>
			{Input.current.map((ele, indx) => 
				<InputCell setEnteredPin={setEnteredPin} key={indx} indx={indx} ref={(element)=>{Ref.current[indx]=element}} setcurntRef={setcurntRef} Ref={Ref} />
			)}
            <h2>Your Pin is : <span style={{color:"green",fontSize:"30px"}}>{EnteredPin}</span></h2>
		</div>
	);
};

export default PinInput;

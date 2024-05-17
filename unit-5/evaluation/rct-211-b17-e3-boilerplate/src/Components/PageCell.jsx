import React, { forwardRef } from "react";

const PageCell = forwardRef(({ indx,reference,curntRef }, ref) => {
    // console.log(reference)
    if(reference.current[curntRef]){
        reference.current[curntRef].style.border="2px solid blue"
        reference.current[curntRef].style.opacity=1;
    }
      
    
	return (
		<>
			<div
				style={{
					border: "1px solid black",
					padding: "7px 12px",
					marginLeft: "10px"
				}}

                ref={ref}
			>
				{indx + 1}
			</div>
		</>
	);
});

export default PageCell;

import React from "react";

const HotelCard = ({ele}) => {
    // console.log(ele)
	return (
		<div className="hotelCard">
			<div>
				<img src={ele["image_url"]} alt="" />
			</div>
            <div>
                <h1>{ele.category}</h1>
                <p>Adults : {ele.no_of_persons}</p>
                <p>capacity : {ele.capacity}</p>
                <p>type : {ele.type_of_room}</p>
                <p>bed type : {ele.bed_type}</p>
                <p>Price : {ele.cost}/night</p>
                <button style={{backgroundColor:"blueviolet",color:"white",padding:"10px 20px 12px",borderRadius:"8px"}}>Book Now</button>
            </div>
		</div>
	);
};

export default HotelCard;

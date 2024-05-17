import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const SingleRoom = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState({});
  const [bookingStatus, setBookingStatus] = useState(false);
  useEffect(() => {
    fetchRoomDetails();
  }, []);
  useEffect(() => {
    console.log(roomDetails);
  }, [roomDetails]);
  const {
    name,
    image,
    description,
    bathroom,
    capacity,
    size,
    price,
    amenities,
  } = roomDetails;
  async function fetchRoomDetails() {
    const data = await fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms/${id}`,
      { method: "GET" }
    );
    setRoomDetails(await data.json());
    return null;
  }
  return (
    <div data-testid="SingleRoom">
      <h2>{name}</h2>
      <img src={image} />
      <p>{description}</p>
      <h3>{bathroom}</h3>
      <h3>Capacity:{capacity}</h3>
      <h3>Size : {size}</h3>
      <h3>Price : {price}</h3>
      <h3>Amenities</h3>
      <ul>{amenities ? amenities.map((ele) => <li>{ele}</li>) : null}</ul>
      {bookingStatus ? (
        <h3>
          Booking Successful goto <Link to="/dashboard">Dashboard</Link>
        </h3>
      ) : (
        <button onClick={() => setBookingStatus(true)}>Book Now</button>
      )}
    </div>
  );
};

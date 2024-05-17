import { Link } from "react-router-dom";

export const RoomsContainer = ({ roomDetails }) => {
  const { name, description, image, id } = roomDetails;
  return (
    <div data-testid="rooms-container" className="room-card">
      <div>
        <h2>{name}</h2>
        <img src={image} />
        <p>{description}</p>
        <Link to={`/dashboard/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

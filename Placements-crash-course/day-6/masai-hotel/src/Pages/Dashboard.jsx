import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Loader } from "../Components/Loader";
import { RoomsContainer } from "../Components/RoomsContainer";

export const Dashboard = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  const [roomList, setRoomList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchRoomData();
    setTimeout(()=>{
      setLoading(false);
    },2000)
  }, []);
  async function fetchRoomData() {
    const data = await fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms`,
      { method: "GET" }
    );
    setRoomList(await data.json());
    return null;
  }
  return (
    <div data-testid="dashboard-component">
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">
          Logout
        </button>
        <p>
          Token:
          {/* The token should be displayed below */}
          <b data-testid="user-token"> {authState.token}</b>
        </p>
      </div>
      <div data-testid="room-container" id="room-container">
        {/* Either Loader or RoomsContainer should exist below */}
        {loading ? (
          <Loader />
        ) : (
          roomList.map((ele) => (
            <RoomsContainer key={ele.id} roomDetails={ele} />
          ))
        )}
      </div>
    </div>
  );
};

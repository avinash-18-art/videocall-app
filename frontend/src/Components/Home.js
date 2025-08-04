import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Make sure this file exists

function Home() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    const trimmedRoomId = roomId.trim();
    if (trimmedRoomId) {
      navigate(`/room/${trimmedRoomId}`);
    } else {
      alert('Please enter a valid Room ID');
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Join a Video Call</h1>
      <input
        type="text"
        placeholder="Enter the Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        className="room-input"
      />
      <button onClick={handleJoin} className="join-button">
        Join
      </button>
    </div>
  );
}

export default Home;

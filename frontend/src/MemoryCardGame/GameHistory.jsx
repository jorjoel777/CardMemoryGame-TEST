import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./GameHistory.css";
import backgroundGif from "../assets/images/play.gif";
import calmBackground from "../assets/images/calm-wallpaper.jpg";

const isCalmMode = false; // Static BG

const GameHistory = () => {
  const [history, setHistory] = useState([]);
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/memory/history/${userID}`);
        setHistory(response.data.history);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    if (userID) fetchHistory();
  }, [userID]);

  return (
    <div
      className="history-container"
      style={{
        backgroundImage: `url(${isCalmMode ? calmBackground : backgroundGif})`,
      }}
    >
      <h2 className="history-title">Game History</h2>

      <div className="history-scrollbox">
        {history.length === 0 ? (
          <p className="no-history">No game history available.</p>
        ) : (
          <ul className="history-list" style={{ listStyle: 'none', padding: 0 }}>
            {history.map((game, index) => {
              const date = new Date(game.gameDate);
              const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
              const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date
                .getMinutes()
                .toString()
                .padStart(2, '0')}`;

              return (
                <li key={index} className="history-item">
                  <p><strong>Date:</strong> {formattedDate}</p>
                  <p><strong>Time:</strong> {formattedTime}</p>
                  <p><strong>Difficulty:</strong> {game.difficulty}</p>
                  <p><strong>Completed:</strong> {game.completed ? "Yes" : "No"}</p>
                  <p><strong>Failed:</strong> {game.failed ? "Yes" : "No"}</p>
                  <p><strong>Time Taken:</strong> {game.timeTaken} seconds</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GameHistory;

import { useEffect, useState } from "react";
import API from "../services/api";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/leaderboard")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000, #141414, #1f1f1f)",
        color: "#e5e5e5",
        padding: "40px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "32px",
          color: "#ffffff"
        }}
      >
        Leaderboard
      </h2>

      {users.map((u, i) => (
        <div
          key={i}
          style={{
            background: "#1a1a1a",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "15px",
            border: "1px solid #2b2b2b",
            boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <p style={{ fontWeight: "bold", color: "#ffffff" }}>
            Rank #{i + 1}
          </p>

          <p style={{ wordBreak: "break-all", color: "#cfcfcf" }}>
            Wallet: {u.walletAddress}
          </p>

          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff" }}>
            Score: {u.score}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
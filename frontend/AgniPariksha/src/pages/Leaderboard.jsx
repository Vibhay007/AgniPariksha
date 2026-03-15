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
    <div>
      <h2>Leaderboard</h2>
      {users.map((u, i) => (
        <div key={i} className="card">
          <p>Rank #{i + 1}</p>
          <p>Wallet: {u.walletAddress}</p>
          <p>Score: {u.score}</p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
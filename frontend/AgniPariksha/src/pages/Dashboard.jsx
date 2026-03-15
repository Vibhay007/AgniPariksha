import { useState } from "react";
import API from "../services/api";
import "./Dashboard.css";

function Dashboard() {
  const [wallet, setWallet] = useState("");
  const [data, setData] = useState(null);

  const loadDashboard = async () => {
    try {
      const res = await API.get(`/submissions/${wallet}`);
      const total = res.data.length;
      const solved = res.data.filter(s => s.score > 0).length;
      const avg = total ? Math.round(res.data.reduce((a, s) => a + s.score, 0) / total) : 0;

      setData({
        totalSubmissions: total,
        problemsSolved: solved,
        averageScore: avg
      });
    } catch (err) {
      console.error(err);
      alert("Failed to load dashboard");
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-input">
        <input
          placeholder="Enter wallet address"
          value={wallet}
          onChange={e => setWallet(e.target.value)}
          className="wallet-input"
        />
        <button onClick={loadDashboard} className="dashboard-btn">
          Load Dashboard
        </button>
      </div>

      {data && (
        <div className="dashboard-card">
          <p>Total Submissions: <span>{data.totalSubmissions}</span></p>
          <p>Problems Solved: <span>{data.problemsSolved}</span></p>
          <p>Average Score: <span>{data.averageScore}</span></p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
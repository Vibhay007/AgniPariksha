import { useState } from "react";
import API from "../services/api";

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
    <div>
      <h2>Dashboard</h2>
      <input
        placeholder="Enter wallet address"
        value={wallet}
        onChange={e => setWallet(e.target.value)}
      />
      <button onClick={loadDashboard}>Load Dashboard</button>

      {data && (
        <div className="card">
          <p>Total Submissions: {data.totalSubmissions}</p>
          <p>Problems Solved: {data.problemsSolved}</p>
          <p>Average Score: {data.averageScore}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
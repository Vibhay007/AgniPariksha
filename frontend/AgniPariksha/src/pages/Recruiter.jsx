import { useState } from "react";
import API from "../services/api";
import "./Recruiter.css";

function Recruiter() {

  const [wallet, setWallet] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const verify = async () => {

    if (!wallet) {
      alert("Please enter wallet address");
      return;
    }

    try {

      setLoading(true);

      const res = await API.get(`/submissions/${wallet}`);

      const solved = res.data.filter(s => s.score > 0).length;

      const avg = res.data.length
        ? Math.round(
            res.data.reduce((a, s) => a + s.score, 0) /
            res.data.length
          )
        : 0;

      setData({
        problemsSolved: solved,
        averageScore: avg
      });

    } catch (err) {

      console.error(err);
      alert("Verification failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recruiter-page">

      <div className="recruiter-card">

        <h2>Recruiter Verification</h2>

        <input
          type="text"
          placeholder="Enter developer wallet address"
          value={wallet}
          onChange={e => setWallet(e.target.value)}
        />

        <button onClick={verify} disabled={loading}>
          {loading ? "Verifying..." : "Verify"}
        </button>

        {data && (
          <div className="result-box">
            <p><strong>Problems Solved:</strong> {data.problemsSolved}</p>
            <p><strong>Average Score:</strong> {data.averageScore}%</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Recruiter;
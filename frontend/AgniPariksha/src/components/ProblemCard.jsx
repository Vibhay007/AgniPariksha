function ProblemCard({ problem, onSolve }) {

  return (

    <div
      style={{
        background: "linear-gradient(145deg, #111, #1c1c1c)",
        border: "1px solid #2a2a2a",
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
        transition: "0.3s",
      }}
    >

      <h3
        style={{
          color: "#ffffff",
          marginBottom: "10px",
        }}
      >
        {problem.title}
      </h3>

      <p
        style={{
          color: "#bfbfbf",
          fontSize: "14px",
          lineHeight: "1.5",
          marginBottom: "15px",
        }}
      >
        {problem.description}
      </p>

      <button
        className="btn"
        style={{
          padding: "8px 18px",
          border: "none",
          borderRadius: "8px",
          background: "linear-gradient(90deg,rgb(137, 137, 137),rgb(103, 103, 103))",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={() => onSolve(problem)}
      >
        Solve
      </button>

    </div>

  );

}

export default ProblemCard;
import Editor from "@monaco-editor/react";
import { useState } from "react";

function CodeEditor({ onSubmit }) {

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleSubmit = async () => {

    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    try {

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });

      const walletAddress = accounts[0];

      console.log("Connected wallet:", walletAddress);

      onSubmit(code, language, walletAddress);

    } catch (error) {

      console.error("Wallet connection failed:", error);

    }

  };

  return (

    <div
      style={{
        background: "#111",
        padding: "20px",
        borderRadius: "14px",
        border: "1px solid #2a2a2a",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      }}
    >

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          marginBottom: "12px",
          padding: "8px 12px",
          borderRadius: "6px",
          background: "#1c1c1c",
          color: "white",
          border: "1px solid #333",
          outline: "none",
        }}
      >
        <option value="javascript">JavaScript</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>

      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "15px",
        }}
      >
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          background: "linear-gradient(90deg,#00c6ff,#0072ff)",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Submit Code
      </button>

    </div>

  );

}

export default CodeEditor;
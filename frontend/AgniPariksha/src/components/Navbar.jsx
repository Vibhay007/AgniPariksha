import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [wallet,setWallet] = useState(
    localStorage.getItem("walletAddress") || ""
  );

  const connectWallet = async () => {

    if(!window.ethereum){
      alert("Install MetaMask");
      return;
    }

    try{

      const accounts = await window.ethereum.request({
        method:"eth_requestAccounts"
      });

      const address = accounts[0];

      setWallet(address);

      localStorage.setItem("walletAddress",address);

    }catch(err){
      console.error(err);
    }

  };

  return (

    <div className="navbar">

      <h2 className="logo">AGNI PARIKSHA</h2>

      <div className="nav-links">

        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/problems">Problems</Link>
        <Link className="nav-item" to="/dashboard">Dashboard</Link>
        <Link className="nav-item" to="/leaderboard">Leaderboard</Link>
        <Link className="nav-item" to="/recruiter">Recruiter</Link>
        <Link className="nav-item" to="/credentials">Credentials</Link>

      </div>

      {wallet ? (

        <div className="wallet">
          {wallet.slice(0,6)}...{wallet.slice(-4)}
        </div>

      ) : (

        <button className="connect-btn" onClick={connectWallet}>
          Connect Wallet
        </button>

      )}

    </div>

  );

}

export default Navbar;
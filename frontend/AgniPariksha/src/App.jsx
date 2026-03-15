import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Recruiter from "./pages/Recruiter";
import Credentials from "./pages/Credentials";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="container">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/credentials" element={<Credentials />} />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;
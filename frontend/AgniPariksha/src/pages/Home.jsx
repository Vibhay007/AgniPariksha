import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Home(){

return(

<div className="container">

{/* HERO SECTION */}

<div className="hero">

<div className="hero-text">

<h1 className="hero-title">
Prove Your Skills On The Blockchain
</h1>

<p className="hero-desc">
AGNI PARIKSHA is a decentralized coding platform where developers
solve coding problems and earn blockchain verified credentials.
Recruiters can instantly verify real developer skills.
</p>

<div className="hero-buttons">

<Link to="/problems" className="btn btn-primary">
Start Solving
</Link>

<Link to="/leaderboard" className="leaderboard-btn">
View Leaderboard
</Link>

</div>

</div>

{/* HERO LOGO */}

<div className="hero-visual">

<img
src={logo}
alt="Agni Pariksha"
className="hero-logo"
/>

</div>

</div>

{/* FEATURES */}

<div className="features">

<h2 className="section-title">
Platform Features
</h2>

<div className="features-grid">

<div className="feature-card">

<h3 className="feature-title">
Real Coding Challenges
</h3>

<p className="feature-desc">
Solve real programming challenges similar to professional coding platforms.
</p>

</div>

<div className="feature-card">

<h3 className="feature-title">
Blockchain Credentials
</h3>

<p className="feature-desc">
Your achievements are permanently stored on blockchain making them verifiable.
</p>

</div>

<div className="feature-card">

<h3 className="feature-title">
Recruiter Verification
</h3>

<p className="feature-desc">
Companies can instantly verify developer skills using wallet credentials.
</p>

</div>

<div className="feature-card">

<h3 className="feature-title">
Global Leaderboard
</h3>

<p className="feature-desc">
Compete with developers and climb the global ranking system.
</p>

</div>

</div>

</div>

</div>

);

}

export default Home;
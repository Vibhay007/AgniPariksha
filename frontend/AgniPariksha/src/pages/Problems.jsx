import { useEffect, useState } from "react";
import API from "../services/api";
import ProblemCard from "../components/ProblemCard";
import CodeEditor from "../components/CodeEditor";
import "./Problems.css";

function Problems(){

const [problems,setProblems]=useState([]);
const [selectedProblem,setSelectedProblem]=useState(null);
const [loading,setLoading]=useState(true);
const [result,setResult]=useState(null);

useEffect(()=>{

API.get("/problems")
.then(res=>{
setProblems(res.data);
setLoading(false);
})
.catch(err=>console.error(err));

},[]);

const submitCode=async(code,language)=>{

try{

const walletAddress=
localStorage.getItem("walletAddress") || "demo_wallet";

const res=await API.post("/submissions",{
walletAddress,
problemId:selectedProblem._id,
code,
language
});

setResult(res.data);

}catch(error){

console.error(error);
alert("Submission failed");

}

};

if(loading){
return <p className="loading">Loading problems...</p>;
}

if(selectedProblem){

return(

<div className="problem-page">

<div className="coding-layout">

<div className="problem-panel">

<h2 className="problem-title">
{selectedProblem.title}
</h2>

<p className="problem-desc">
{selectedProblem.description}
</p>

<button
className="back-btn"
onClick={()=>setSelectedProblem(null)}
>
Back
</button>

</div>

<div className="editor-panel">

<CodeEditor onSubmit={submitCode}/>

{result && (

<div className="execution-panel">

<h3>Execution Result</h3>

<p>Passed: {result.passed}/{result.total}</p>

<p>Score: {result.score}</p>

{result.blockchainTx &&(

<p>
Blockchain Credential: {result.blockchainTx.slice(0,12)}...
</p>

)}

</div>

)}

</div>

</div>

</div>

);

}

return(

<div className="problems-page">

<h2 className="problems-heading">
Coding Problems
</h2>

<div className="problems-grid">

{problems.map((p)=>(

<ProblemCard
key={p._id}
problem={p}
onSolve={setSelectedProblem}
/>

))}

</div>

</div>

);

}

export default Problems;
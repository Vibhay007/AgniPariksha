import { useEffect,useState } from "react";
import { ethers } from "ethers";

function Credentials(){

  const [data,setData] = useState([]);

  const contractAddress = "YOUR_CONTRACT_ADDRESS";

  const abi = [
    "function credentials(uint) view returns(address,string,uint,uint)"
  ];

  useEffect(()=>{

    const loadData = async()=>{

      if(!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      const contract = new ethers.Contract(
        contractAddress,
        abi,
        provider
      );

      let list=[];

      for(let i=0;i<10;i++){

        try{

          const c = await contract.credentials(i);

          list.push(c);

        }catch{
          break;
        }

      }

      setData(list);

    };

    loadData();

  },[]);

  return(

    <div style={{padding:"40px",color:"white"}}>

      <h2>Blockchain Credentials</h2>

      {data.map((c,i)=>(

        <div key={i}
        style={{
          margin:"15px 0",
          padding:"15px",
          border:"1px solid #333",
          borderRadius:"10px"
        }}>

          <p><b>User:</b> {c[0]}</p>
          <p><b>Skill:</b> {c[1]}</p>
          <p><b>Score:</b> {c[2]}</p>

        </div>

      ))}

    </div>

  );

}

export default Credentials;
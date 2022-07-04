import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Signin=()=> {
  
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const cookies = new Cookies();
  const navigate=useNavigate()
    const SINGIN=()=>{
      fetch('http://localhost:4000/user/login',{
        method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              username:username,
              password:password
            })
      })

      .then((data)=>{
        console.log("mohtava",data);
        console.log("!!!");
        return(data.json()
      .then ((data)=>{
        if(data.token){
       cookies.set("ut",data.token)
        navigate("/dashboard")
      }})
  )})}
  return (
        <div className="flex justify-center flex-col w-[100%] bg-[#374151] h-[630px] items-center">
        <div className="flex w-[400px] h-[500px] flex-col rounded-2xl bg-white shadow-2xl  items-center">
        <p className="flex text-black font-bold text-2xl m-10"> SIGN IN </p>
        <p className="text-black  mr-56 mb-5 font-bold text-xl justify-start items-start"> Username </p>
        <input className="flex w-[85%] h-[10%] rounded-[20px] border-black border-[3px] " placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <p className="justify-start mr-56 mb-5 mt-2 text-black font-bold text-xl justify-start items-start"> Password </p>
        <input  className=" flex w-[85%] h-[10%] rounded-[20px] border-black border-[3px] " placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}
          />  
        <button className="flex w-[35%] rounded-[10px] h-[8%] border-4 border-[#374151] mt-10 text-center text-bold" onClick={()=>SINGIN()}> 
        <p className="text-center text-lg ml-8 font-bold"> SIGNIN</p>
        </button>
        </div>
      </div>
    )
  
  }
  export default Signin;
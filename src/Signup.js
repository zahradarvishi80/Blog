import { data } from "autoprefixer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Signup=()=> {
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const navigate = useNavigate()
  console.log("ooo",username);
  console.log("lllll",name);

  const SIGNUP = async () => {
    console.log("us",username);
    console.log("name",name);   
    fetch('http://localhost:4000/user/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        username:username,
        name:name
      })
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log('data : ', data);
      console.log("dataaaaaaa",data);
      // if(data.token){

      if (data.token) {
        // do some stuff
        cookies.set('ut', data.token)
        navigate("/signin")
        return 
      }

      alert(data.msg)
      // some error exists
      // console.log(cookies.get('ut'))
    // }
    });
  //  console.log("meghdar json", data))
    };
    return (
      <div className="flex justify-center flex-col w-[100%] bg-[#374151] h-[630px] items-center">
        <div className="flex w-[400px] h-[500px] flex-col rounded-2xl bg-white shadow-2xl  items-center">
        <p className="flex text-black font-bold text-2xl m-10"> SIGNUP </p>
        <p className="text-black  mr-56 mb-5 font-bold text-xl justify-start items-start"> Username </p>
        <input className="flex w-[85%] h-[10%] rounded-[20px] border-black border-[3px] " placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <p className="justify-start mr-60 mb-5 mt-2 text-black font-bold text-xl justify-start items-start"> Name </p>
        <input  className=" flex w-[85%] h-[10%] rounded-[20px] border-black border-[3px] " placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}
          />  
        <button className="flex w-[35%] rounded-[10px] h-[8%] border-4 border-[#374151] mt-10 text-center text-bold" onClick={()=>SIGNUP()}> 
        <p className="text-center text-lg ml-8 font-bold"> SIGNUP</p>
        </button>
        </div>
      </div>
    );
  }
  
 export default Signup
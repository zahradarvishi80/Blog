import { useEffect, useState } from "react"
import { useNavigate,Link } from "react-router-dom"


const AllUser=()=>{
const[alluser,setAlluser]=useState([])
const[topuser,setTopuser]=useState([])
const navigate=useNavigate()
useEffect(()=>{
    const AllUser= async()=>{
     fetch('http://localhost:4000/user/',
    )
    .then((response)=>response.json())
    .then(data=>{
     
            
        console.log("datafffffffffffffffffff",data)
        setAlluser(data)
        }
    
        )
    }
        AllUser()
    },[])


useEffect(()=>{
    const Topuser=async()=>{
        fetch('http://localhost:4000/user/top-users',
        )
        .then((response)=>response.json())
        .then(data=>{
            console.log("0000",data);
            setTopuser(data)
        })
        
    }
    Topuser()
},[])

    return(
        <div className="flex w-[100%] flex-col h-full  justify-center items-center">
        <div className="flex w-[100%] h-full justify-center grid grid-cols-4 ">
        {alluser.map((item,index)=>{
            return(
        
            <div className="flex w-[300px] shadow-2xl mt-10 h-[200px] rounded-xl bg-[#374151] flex-col">
                <Link to={`/dashboard/SingleUser/${item._id}`}>
            <p className="flex m-2 text-white font-bold">Name: {item.name}</p>
            <p className="flex m-2 text-white font-bold">Username: {item.username}</p>
            <p className="flex m-2 text-white font-bold">Bio: {item.bio}</p></Link>
            <button 
                    onClick={()=>navigate(`/dashboard/EditUser/${item._id}`)}
                className="flex"> <p className="flex mb-5 ml-2 text-[#374151] rounded-xl text-center font-bold w-[110px] h-[25px] bg-white">Edit profile </p> </button>
          
            </div>
      
    )

})}
</div>
<div className="flex w-[40%] h-[70px] border-4 m-5 rounded-xl border-[#374151] justify-center items-center">
 < p className="flex m-5 text-[#374151] text-2xl font-bold">Top User</p></div>
<div className="flex w-[100%] h-[500px] justify-center grid grid-cols-4 ">
    

{
    topuser.map((i,index)=>{
        return(
            <div className="flex w-[250px] shadow-2xl mt-10 h-[150px] rounded-xl bg-[#374151] flex-col">
                  
            <p className="flex m-5 text-white font-bold">Name: {i.name}</p>
            <p className="flex m-5 text-white font-bold">Username: {i.username}</p>
            {/* <button 
                    onClick={()=>navigate("/dashboard/EditUser/")}
                className="flex"> <p className="flex mb-5 ml-5 text-[#374151] rounded-xl text-center font-bold w-[110px] h-[25px] bg-white">Edit profile </p> </button>
           */}
            </div>
        )
    })
}
</div>
        </div>
    )
}
export default AllUser
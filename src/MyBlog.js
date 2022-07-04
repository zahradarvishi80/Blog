import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token=cookies.get("ut")

const MyBlog=()=>{
const[blog,setBlog]=useState([])
const navigate=useNavigate()
useEffect(()=>{
    const MyBlog= async()=>{
     fetch('http://localhost:4000/blog/my-blogs',{
        headers:{
            "Content-Type":"application/json",
            'auth':`ut ${token}`
          },
     }
    )
    
    .then((response)=>response.json())
    .then(data=>{
        console.log("data"+ data);
     setBlog(data)
        }
    
        )
    }
        MyBlog()
    },[])
    // if(!blog || !blog._id)return <h1> loading </h1>
    return(
        <div>
{blog.map((item,index)=>{
return(
    <div>
    <p className="flex m-5 text-[#374151] text-2xl font-bold">{item.title}</p>
    {/* <p>{item._id}</p>   */}
    <p className="flex m-5 text-[#374151] text-2xl font-bold" dangerouslySetInnerHTML={{__html:item.content}}></p>
    <img 
     className="flex w-[400px] h-[400px]"    
    src={item.imgurl}></img>
 


        <button 
               onClick={()=>navigate(`/dashboard/Edit/${item._id}`)}
                className="flex"> <p className="flex  border-[#374151]  border-4 text-[#374151] rounded-xl text-center font-bold w-[110px] text-sm h-[25px] bg-white">Edit profile </p> </button>
          

    </div>

)

})

}


       
     </div>
    )
}
export default MyBlog
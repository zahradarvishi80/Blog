import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const AllBlog=()=>{
const[allblog,setAllblog]=useState([])
useEffect(()=>{
const AllBlog= async()=>{
 fetch('http://localhost:4000/blog',
)
.then((response)=>response.json())
.then(data=>{ 
    console.log("data",data)
    setAllblog(data)
    }
    )
 }
 AllBlog()
 },[])

    return(
    <div className="w-[100%] h-[555px] bg-yellow-300 grid grid-cols-2 flex-row">
    {allblog.map((item,index)=>{
    return(
    <div key={item._id} id={index} className="w-[500px] h-[260px] bg-red-300  flex-col">
    
    <Link to={`/dashboard/SingleBlog/${item._id}`}>
    <p>{item.title}</p>
    <p dangerouslySetInnerHTML={{__html:item.content}}></p>
    <p>{item.creator.username}</p>
    <p>{item.creator.name}</p>
    <img className="flex w-24 h-20" alt="img" src={item.imgurl}></img>
    </Link>
    
    </div>
    )
    })
    }
    </div>
    )
}
export default AllBlog
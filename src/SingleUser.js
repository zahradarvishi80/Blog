import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const  SingleUser=()=>{
const[user,setUser]=useState(null)
const[list,setList]=useState([])
const {id}=useParams()

    const  SingleUser=()=>{
        console.log("qqqqqq");
     fetch(
          `http://localhost:4000/user/singleUser/${id}`,
          )
            .then(response => response.json())
            .then(data => {
                if(data._id){
                    setUser(data)
                    console.log("hiiii",data._id);
                }
                console.log("user",user);
                
         
                console.log("data",data);
            });
      };
      const ByUser=()=>{
        console.log("lll");
        fetch('http://localhost:4000/blog/by-user',{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({_id:id})
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
                setList([...data])
                
                
            })
            
        }
        console.log(list);
    useEffect(()=>{
        SingleUser();
        ByUser()
    },[])


      if(!user || !user._id)return <h1> loading </h1>
     return (
      <div className="flex flex-row"> 
      <div className="flex flex-col">
          <p className="flex font-bold text-[20px]">{user.username}</p>
          <p className="flex font-bold text-[20px]" ></p> {user.name} 
          <p className="flex font-bold text-[20px]" >{user.bio}</p></div>
          <div className="w-[100%] h-[555px] bg-yellow-300 grid grid-cols-2 flex-row">
            {list.map((i,index)=>{
                return(
                    <div key={i._id} id={index} className="w-[500px] h-[260px] bg-red-300  flex-col">
                     <p className="flex font-bold text-[20px]"> {i.title} </p>
                     <p dangerouslySetInnerHTML={{__html:i.content}}></p>
                    <img  className="flex w-24 h-20" alt="img" src={i.imgurl}></img>
                    </div>
                )
            })}
            
          </div>
       </div>
    )
}
export default SingleUser
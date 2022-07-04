import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
const SingleBlog = () => {
    const[blog,setBlog]=useState(null)
    const {id}=useParams()
    console.log(id);
    useEffect(() => {
        const getblogid = async () => {
         fetch(
              `http://localhost:4000/blog/single-blog/${id}`,
              )
                .then(response => response.json())
                .then(data => {
                if(data._id){
                setBlog(data)
                console.log(data);
                }
                });
          };
        getblogid();
      }, []);
      if(!blog || !blog._id)return <h1> loading </h1>
     return (
      <div className="flex flex-row"> 
      <div className="flex flex-col">
          <p className="flex font-bold text-[20px]">{blog.title}</p>
          <p className="flex font-bold text-[20px]" dangerouslySetInnerHTML={{__html:blog.content}}></p></div>
          <img className="flex w-[600px] h-[600px]" src={blog.imgurl}></img>
       </div>
    )
  }
export default SingleBlog  
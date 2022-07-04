
import React,{useEffect,useState,useRef} from "react";
import Cookies from "universal-cookie";
import { Link, useParams,useNavigate } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/type";
const EditUser=()=>{
    const[load,setLoad]=useState(true)
    const[blog,setBlog]=useState()
    const cookies = new Cookies();
    const navigate=useNavigate()
    const[type,setType]=useState()
    const[name,setName]=useState("")
    // const[imgurl,setImgurl]=useState("")
    const[content,setContent]=useState()
    const {id} =useParams()
    // const token=cookies.get('ut')
  // console.log(editorRef.current.getContent());
        const EditUser = () => {
  
            const token=cookies.get("ut")
          fetch('http://localhost:4000/user/edit',{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              'auth':`ut ${token}`
            },
            body:JSON.stringify({
           name:name,
              bio: type
            })
          })
          .then((response)=>response.json())
          .then((data)=>{
          if (data.msg==="ok") {
              return( navigate(`/dashboard/SingleUser/${id}`))
            }
          console.log("data",data,id)
          });
          

    }
// console.log(content);
    useEffect(() => {
     console.log("ggggggggg",name);
        console.log("ghhhhhhhh");
        const token=cookies.get("ut")
        const getblogid = async () => {
         fetch(
            'http://localhost:4000/user/me',
              {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                    'auth':`ut ${token}` 
                }     ,
                body: '{}'
              })
                .then(response => response.json())
                .then(data => {
                // console.log("ghhhhhhhh"+data);
                if (data) {
                  setName(data.name)
                  setType(data.bio)
                  console.log("ccc",data.bio);
                //   setContent(data.content)
                //   setBlogId(data.blogId)
                
                }
               console.log("0000",data);
                });
           
          };


        getblogid();
      }, []);

        const editorRef = useRef(null);
        const log = () => {
          if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setType(editorRef.current.getContent())
          }}
    return(
      <div className="flex flex-col   justify-center items-center w-[100%] h-full">

      <div className="flex w-[40%] h-[60px] border-4 m-5 rounded-xl border-[#374151] justify-center items-center">
       < p className="flex m-5 text-[#374151] text-2xl font-bold">Edit Your User</p></div>
       <div className="flex border-[#374151] justify-center items-center w-[70%] h-[400px] flex-col border-4 shadow-4xl">
              <input  className=" flex w-[400px] h-[50px] rounded-[20px] mb-10 border-black border-[3px]"  placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)}
                /> 
            
           <textarea
       value={type}
       onChange={(e)=>setType(e.target.value)}
       className="flex w-[800px] h-[100px] rounded-[20px] border-black border-[3px]"
       maxLength={200}
       ></textarea>
          {/* <input  className=" flex mt-10 w-[400px] h-[50px] rounded-[20px] border-black border-[3px] "  placeholder="write imgurl" value={imgurl} onChange={(e)=>setImgurl(e.target.value)}
                />  */}
                 <button className=" flex mt-10 w-[200px] h-[50px] justify-center items-center rounded-[20px] border-black border-[3px] " onClick={()=>EditUser()}>
                    
                    <p className="text-xl font-bold text-center justify-center items-center">EditUser</p>
                    </button>
      </div>
            </div>
    )
}
export default EditUser
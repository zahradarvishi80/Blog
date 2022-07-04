import React,{useRef,useState} from "react";
import Cookies from "universal-cookie";
// import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Navigate, useNavigate } from "react-router-dom";
// import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
  const DashboardHome = () => {
 const navigate =useNavigate()
  const[title,setTitle]=useState("")
  const[imgurl,setImgurl]=useState("")
  // const [content, setContent] = React.useState(() =>
  //   EditorState.createEmpty());
  const cookies = new Cookies();
   const token=cookies.get("ut")
      const SENT = async () => {
        // console.log(content);
        // console.log(title);
        // console.log(imgurl);
       fetch('http://localhost:4000/blog/write',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'auth':`ut ${token}`
        },
        body:JSON.stringify({
          title: title,
          content:editorRef.current.getContent(),
          imgurl: imgurl 
        })
       })
       .then((response)=>response.json())
       .then((data)=>{
         console.log(data)
         if(data._id){
          //  const id =data._id.split('-')
          //  console.log(id);         
          //id[1] in this target we replace
            const target=`/dashboard/SingleBlog/${data._id}`
           navigate(target)
         }
       }
       )
        };
  //   const editor = React.useRef(null);
  // function focusEditor() {
  //   editor.current.focus();
  // }
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
    return (
      <div className="flex flex-col   justify-center items-center w-[100%] h-full">

<div className="flex w-[40%] h-[70px] border-4 m-5 rounded-xl border-[#374151] justify-center items-center">
 < p className="flex m-5 text-[#374151] text-2xl font-bold">Write Your Blog</p></div>
 <div className="flex border-[#374151] justify-center items-center w-[70%] h-[500px] flex-col border-4 shadow-4xl">
        <input  className=" flex w-[400px] h-[50px] rounded-[20px] mb-10 border-black border-[3px]"  placeholder="title" value={title}  onChange={(e)=>setTitle(e.target.value)}
          /> 
      
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         init={{
           height: 200,
           width:900,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
    <input  className=" flex mt-10 w-[400px] h-[50px] rounded-[20px] border-black border-[3px] "  placeholder="write imgurl" value={imgurl} onChange={(e)=>setImgurl(e.target.value)}
          /> 
           <button className=" flex mt-10 w-[200px] h-[50px] justify-center items-center rounded-[20px] border-black border-[3px] " onClick={()=>SENT()}>
              
              <p className="text-xl font-bold text-center justify-center items-center">Sent</p>
              </button>
</div>
      </div>
    )
  }
  export default DashboardHome

// export default function MyEditor() {





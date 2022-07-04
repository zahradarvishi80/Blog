import React,{useEffect,useState,useRef} from "react";
import Cookies from "universal-cookie";
import { Link, useParams,useNavigate } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
const EditBlog=()=>{
    const[load,setLoad]=useState(true)
    const[blog,setBlog]=useState()
    const cookies = new Cookies();
    const navigate=useNavigate()
    const[blogId,setBlogId]=useState()
    const[title,setTitle]=useState("")
    const[imgurl,setImgurl]=useState("")
    const[content,setContent]=useState()
    const {id} =useParams()
        const EditBlog = async () => {
          console.log("zzzzzznnnzzzzz",content,title,imgurl,blogId);
            const token=cookies.get("ut")
          fetch('http://localhost:4000/blog/edit',{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              'auth':`ut ${token}`
            },
            body:JSON.stringify({
              blogId: id,
              data: {
                  title: title,
                  content:content,
                  imgurl: imgurl
                }
            })
          })
          .then((response)=>response.json())
          .then((data)=>{
            if (data.msg==="ok") {
              return( navigate(`/dashboard/SingleBlog/${id}`))
            }
          console.log("ddddddddddddddddddddata",data);
          },[]);
          

    }
console.log(content);
    useEffect(() => {

        console.log("ghhhhhhhh");
        const getblogid = async () => {
         fetch(
              `http://localhost:4000/blog/single-blog/${id}`,
              )
                .then(response => response.json())
                .then(data => {
                console.log("ghhhhhhhh"+data);
                if (data) {
                  setTitle(data.title)
                  setImgurl(data.imgurl)
                  setContent(data.content)
                  setBlogId(data.blogId)
                }
                setBlog(data)
                });
           
          };


        getblogid();
      }, []);

        const editorRef = useRef(null);
        const log = () => {
          if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setContent(editorRef.current.getContent())
          }}
      console.log(blog);
    return(
    //     <div className="flex flex-col mt-10">
    //     <input className="w-[150px] h-[50px] border-2 border-black mt-10" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}  />
      
    //     <>
    //    <Editor
    //      onInit={(evt, editor) => editorRef.current = editor}
    //     //  value={blog.content}
    //     value={content}
    //      init={{
    //        height: 150,
    //        menubar: false,
    //        plugins: [
    //          'advlist autolink lists link image charmap print preview anchor',
    //          'searchreplace visualblocks code fullscreen',
    //          'insertdatetime media table paste code help wordcount'
    //        ],
    //        toolbar: 'undo redo | formatselect | ' +
    //        'bold italic backcolor | alignleft aligncenter ' +
    //        'alignright alignjustify | bullist numlist outdent indent | ' +
    //        'removeformat | help',
    //        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    //      }}
    //    />
    //    <button onClick={log}>Log editor content</button>
    //  </>

    //     <input className="w-[150px] h-[50px] border-2 border-black mt-10" placeholder="imgurl" value={imgurl} onChange={(e)=>setImgurl(e.target.value)}  />
    //     <button className="w-[150px] h-[50px] border-2 border-black mt-10 bg-red-300" onClick={()=>EditBlog()}> Edit</button>
    //      <h1>Edit profile</h1></div>


    <div className="flex flex-col   justify-center items-center w-[100%] h-full">

    <div className="flex w-[40%] h-[70px] border-4 m-5 rounded-xl border-[#374151] justify-center items-center">
     < p className="flex m-5 text-[#374151] text-2xl font-bold">Edit Your Blog</p></div>
     <div className="flex border-[#374151] justify-center items-center w-[70%] h-[500px] flex-col border-4 shadow-4xl">
            <input  className=" flex w-[400px] h-[50px] rounded-[20px] mb-10 border-black border-[3px]"  placeholder="title"  value={title} onChange={(e)=>setTitle(e.target.value)}
              /> 
          
           <Editor
             onInit={(evt, editor) => editorRef.current = editor}
             value={content}
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
               <button className=" flex mt-10 w-[200px] h-[50px] justify-center items-center rounded-[20px] border-black border-[3px] " onClick={()=>EditBlog()}>
                  
                  <p className="text-xl font-bold text-center justify-center items-center">EditBlog</p>
                  </button>
    </div>
          </div>
    )
}
export default EditBlog
import { useEffect ,useState} from "react";
import Cookies from "universal-cookie";
import { Link, Outlet,useNavigate } from "react-router-dom";

const DashboardLayout = () => {
    const[load,setLoad]=useState(true)
    const cookies = new Cookies();
    const navigate=useNavigate()
  
    useEffect(()=>{
    const token=cookies.get("ut")
      const layout = async () => {
        fetch('http://localhost:4000/user/me',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            'auth':`ut ${token}`
          },
          body:JSON.stringify({
          })
        })
        .then((response)=>response.json())
        .then((data)=>{
          if (!data._id) {
            return( navigate("/dashboard/"))
           } else {
             setLoad(false)
            return 
          }
        
        },[]);
        };
  
      layout() 
      
  
    },[])
  console.log("helloo world")
  if(load){ return <h1> loading </h1>}
    return (

<div className="flex flex-col">
        <div className="flex w-[100%] h-[100px] bg-[#374151] justify-start">
          <nav>
          <Link to="/">
           
        <div  className="flex w-[100px] h-[100px] m-8 text-white font-bold ">Home</div> </Link>
          </nav>
         
        <nav>
        <Link to="MyEditor">
        <div  className="flex w-[100px] h-[100px] text-white  m-8 font-bold">MyEditor</div>
        </Link>
        </nav>
        <nav>
        <Link to="MyBlog">
        <div className="flex w-[100px] h-[100px] text-white  m-8 font-bold">MyBlog</div>
        </Link>
        </nav>
        </div>
        <Outlet />
      </div>

    )
  }
  export default DashboardLayout
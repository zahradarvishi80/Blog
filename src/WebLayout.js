import {Link, Outlet} from "react-router-dom"

const WebLayout = () => {
  
    return (
      <div className="flex flex-col">
        <div className="flex w-[100%] h-[100px] bg-[#374151] justify-start">
          <nav>
            <Link to="">
           
        <div  className="flex w-[100px] h-[100px] m-8 text-white font-bold ">Home</div> </Link>
          </nav>
        <nav>
          <Link to="AllUser">
        <div  className="flex w-[100px] h-[100px] text-white  m-8 font-bold ">AllUser</div>
        </Link>
        </nav>
        <nav>
          <Link to="/dashboard">
           
        <div  className="flex w-[100px] h-[100px] m-8 text-white font-bold ">Dashboard</div> </Link>
          </nav>

          <nav>
          <Link to="SingleUser">
           
        <div  className="flex w-[100px] h-[100px] m-8 text-white font-bold ">Blog by user</div> </Link>
          </nav>

        <nav>
          <Link to="Signin">
        <div  className="flex w-[100px] h-[100px] text-white  m-8 font-bold">signin</div>
        </Link>
        </nav>
       

        <nav>
          <Link to="Signup">
        <div className="flex w-[100px] h-[100px] text-white  m-8 font-bold">signup</div>
        </Link>
        </nav>
        {/* <div className="flex w-[100px] h-[100px] bg-yellow-400"></div> */}
        </div>
        <Outlet />
      </div>
    )
  }
  export default WebLayout

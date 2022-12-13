import { Routes, Route, useParams} from "react-router-dom";
import Signup from "./Signup"
import Signin from "./Signin";
import WebLayout from "./WebLayout"
import DashboardLayout from "./DashboardLayout"
import MyEditor from "./DashboardHome";
// import EditProfile from "./EditProfile";
// import SentBlog from "./SentBlog";
import './index.css';
import Home from "./Home";
// import PageDashboard from "./PageDashboard";
import SingleBlog from "./SingleBlog";
import AllBlog from "./AllBlog";
import AllUser from "./AllUser";
import MyBlog from "./MyBlog"
import EditBlog from "./EditBlog";
import EditUser from "./EditUser";
import SingleUser from "./SingleUser";
const App=() =>{
  return (
    <Routes>
      <Route path='/' element={<WebLayout />} >
        <Route path="" element={<Home />}/>
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="AllBlog" element={<AllBlog />} />
        <Route path="AllUser" element={<AllUser />} />
   
      </Route>
      <Route path='/dashboard/' element={<DashboardLayout />} >
        {/* <Route path="" element={<PageDashboard/>} /> */}
        <Route path='MyEditor' element={<MyEditor />} />
        {/* <Route path='EditProfile' element={<EditProfile />} /> */}
        {/* {/* <Route path='SentBlog' element={<SentBlog />} /> */} 
        <Route path="SingleBlog/:id" element={<SingleBlog />} />
        <Route path="SingleUser/:id" element={<SingleUser />} />
        <Route path="MyBlog" element={<MyBlog />} />
        <Route path="Edit/:id" element={<EditBlog/>}/>
        <Route path="EditUser/:id" element={<EditUser/>}/>
      </Route> 
    </Routes>

  )
}
export default App

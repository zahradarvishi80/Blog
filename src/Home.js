import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow"
import SamplePrevArrow from  "./SamplePrevArrow"
const Home=()=>{
    const[topwriter,setTopwriter]=useState([])
    const[allblog,setAllblog]=useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplaySpeed: true,
        // autoplay: true,
        rtl: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

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
        
    useEffect(()=>{
        const TopWriter= async()=>{
         fetch('http://localhost:4000/blog/top-blogs',
        )
        .then((response)=>response.json())
        .then(data=>{ 
            console.log("9999",data)
            setTopwriter(data)
            }
            )
         }
         TopWriter()
         },[])
return(
   
    <div className="w-[99.99%] bg-[#374151] h-full">
      <Slider {...settings}>
      {topwriter.map((item,index)=>{
        return(
            <div className="w-[100%] h-[400px]  items-center justify-center">
                <img 
                alt="imgurl"
                className="w-[80%] ml-[150px] h-[300px] justify-center items-center align-center"
                src={item.imgurl} />
                <p className="text-white text-[20px]  m-2 font-bold">{item.title}</p>
                <p className="text-white text-bold" dangerouslySetInnerHTML={{__html:item.content}}></p>
            </div>
        )
        })
        }
      </Slider>
      <p className="text-bold font-bold justify-center text-center text-white mt-10 mb-10"> ALL Blog</p>
        <div className="w-[100%] h-full bg-[#374151] grid grid-cols-3 flex-row">
         {allblog.map((item,index)=>{
         return(
         <div key={item._id} id={index} className="w-[500px] h-[600px] flex-col justify-center ">
    
            <Link to={`/dashboard/SingleBlog/${item._id}`}>
                <div className="flex w-[500px] h-[250px]">
                <img className="flex w-[400px] h-[250px] rounded-lg justify-center shadow-3xl align-center items-center drop-shadow-2xl" alt="img" src={item.imgurl}></img>
                </div>
                <div className="flex  w-[400px] h-[300px] flex-col">
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-white font-bold" dangerouslySetInnerHTML={{__html:item.content}}></p>
                </div>
                <div className="flex w-[200px] h-[200px] flex-col">
                {/* <p className="text-white font-bold">{item.creator.username}</p> */}
                {/* <p className="text-white font-bold">{item.creator.name}</p> */}
                </div>
            </Link>
         </div>
    )
    })
    }
    </div>
  </div>
)

}
export default Home
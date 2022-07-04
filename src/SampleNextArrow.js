import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import "./Css/SampleNextArrow.css";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="NextArrow" onClick={onClick}>
      {/* <BsArrowRight /> */}
    </div>
  );
}
export default SampleNextArrow;

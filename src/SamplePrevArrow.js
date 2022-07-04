import React from "react";
// import { BsArrowLeft } from "react-icons/bs";
import "./Css/SamplePrevArrow.css";
function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div className="PrevArrow" onClick={onClick}>
      {/* <BsArrowLeft /> */}
    </div>
  );
}
export default SamplePrevArrow;

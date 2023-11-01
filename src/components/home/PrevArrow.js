import React from "react";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      
    </div>
  );
}

export default PrevArrow;
import React from "react";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </div>
  );
}

export default PrevArrow;
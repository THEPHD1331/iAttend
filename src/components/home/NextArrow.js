import React from "react";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      
    </div>
  );
}

export default NextArrow;
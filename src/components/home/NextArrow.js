import React from "react";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      Next
    </div>
  );
}

export default NextArrow;
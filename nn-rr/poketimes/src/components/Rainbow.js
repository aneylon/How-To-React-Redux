import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const className = randomColor + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;

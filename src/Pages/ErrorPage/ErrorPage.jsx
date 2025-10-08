import React from "react";
import errorPic from "../../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="flex justify-center h-screen  items-center text-center">
      <img src={errorPic} alt="" />
    </div>
  );
};

export default ErrorPage;

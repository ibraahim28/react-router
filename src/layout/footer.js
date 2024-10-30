import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <footer className=" absolute bottom-0 right-0 left-0 text-purple-900 text-center bg-blue-400  font-bold text-3xl content-center">
      <h1>Footer</h1>
      <button className="text-lg bg-purple-300 px-4 py-2 rounded-xl text-purple-800 my-10" onClick={goBack}>Go Back</button>
    </footer>
  );
}

export default Footer;

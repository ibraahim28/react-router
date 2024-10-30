import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBtn from "../components/HomeBtn";
function Home() {
    const navigate = useNavigate()

    

  return (
    <div>
      <h1  className='text-2xl font-bold content-center' >Hello world from Home</h1>
      
        <div className="flex gap-5 justify-center items-center font-medium my-10">
       <NavigationBtn destination = "Contact" navigationPath = '/contact' />
        <NavigationBtn destination="About" navigationPath="/about" />
        <NavigationBtn destination="Profiles" navigationPath="/profiles" />
        </div>
    </div>
  );
}

export default Home;

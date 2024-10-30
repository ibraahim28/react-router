import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  const { state } = useLocation();

  // console.log("Location",location);
  return (
    <div className="flex items-center gap-5 text-left justify-self-center border-2 border-black rounded-lg my-7 w-1/3 p-2">
      <div>
        <img className="w-32" src={state.imgSrc} />
      </div>
      <div>
        <h1 className="text-xl font-bold">{state.name}</h1>
        <p className="text-md ">{state.email}</p>
        <p className="text-lg font-medium">Age : <span className="font-bold ">{state.age}</span></p>
        <p className="text-lg font-medium">Qualification : <span className="font-bold ">{state.qualification}</span></p>
        <p className="text-lg font-medium">Gender : <span className="font-bold ">{state.gender}</span></p>
        
      </div>
    </div>
  );
};

export default ProfilePage;

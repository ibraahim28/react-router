import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationBtn({ destination, navigationPath }) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToContact = () => {
    navigate("/contact");
  };
  const goToAbout = () => {
    navigate("/about");
  };
  const goToProfiles = () => {
    navigate("/profiles");
  };

  return (
    <button
      className="bg-slate-400 px-3 py-3 rounded-md cursor-pointer"
      onClick={
        destination === "Contact"
          ? goToContact
          : destination === "About"
          ? goToAbout
          : destination === "Profiles"
          ? goToProfiles
          : ""
      }
    >
      Go to {destination}
    </button>
  );
}

export default NavigationBtn;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
    let navigate = useNavigate();
    let { username } = useParams();
  return (
    <div>
        This is Profile of { username } page.
        <button 
            onClick={ () => {
            navigate("/");
        }}>
            {" "}
            To Home Page
        </button>
        <button 
            onClick={ () => {
            navigate("/about");
        }}>
            {" "}
            To About Page
        </button>
    </div>
  );
}

export default Profile;
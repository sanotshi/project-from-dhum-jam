import React, { useRef, useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const username = useRef("DJ@4");
  const password = useRef("Dhunjam@2023");
 

  useEffect(() => {
    getAdminLogin();
  }, []);

  const getAdminLogin = async () => {
    const userdata = {
      username: "DJ@4",
      password: "Dhunjam@2023",
    };
    const data = await fetch("https://stg.dhunjam.in/account/admin/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
    const json = await data.json();
    if (json){
navigate("/landingPage");
    }else{
      return null;
    }
  console.log(userdata);
  
  }
  //  const handleButtonClick = () => {
   
  //   //  dispatch(userdata(json.));
  //   const message = getAdminLogin(username,password);
  //    setErrorMessage(message);
  //   navigate("/landingPage");
  //  };

  
  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Venue Admin Login</h1>

        <input
          type="text"
          ref={username}
          placeholder="Username"
          className="inputBox"
        />
        <div className="icon">
          <input
            type="text"
             ref={password}
            placeholder="Password"
            className="inputBox"
          />
          
        </div>
        <button
          className="inputButton"
          // onClick={handleButtonClick}
          
        >
          Sign in
        </button>
        <span className="span">New Registration?</span>
      </form>
    </div>
  );
};

export default LoginPage;

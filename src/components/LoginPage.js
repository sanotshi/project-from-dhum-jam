import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addUser } from "../utilities/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const user = useSelector((store) => store.user);
  useEffect(() => {
    console.log(user);
    if (user) navigate("/landingPage");
  }, [user]);

  const getAdminLogin = async (username, password) => {
    const userData = {
      username: username,
      password: password,
    };

    const data = await fetch("https://stg.dhunjam.in/account/admin/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const json = await data.json();
    if (json.data) {
      const { id, token } = json.data;
      if (id) {
        dispatch(addUser({ uid: id, token: token }));
        navigate("/landingPage");
      } else {
        alert("user not found");
      }
    } else {
      return null;
    }
  };
  const handleButtonClick = () => {
    
    const name = username.current.value;
    const pwd = password.current.value;
    if (!name || !pwd) {
      alert("Please enter user details");
      return false;
    }
    const message = getAdminLogin(name, pwd);
    // setErrorMessage(message);
    // navigate("/landingPage");
  };

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
            type="password"
            ref={password}
            placeholder="Password"
            className="inputBox"
          />
        </div>
        <button className="inputButton" onClick={handleButtonClick}>
          Sign in
        </button>
        <span className="span">New Registration?</span>
      </form>
    </div>
  );
};

export default LoginPage;

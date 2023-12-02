import React from 'react';
import  userReducer  from './userSlice';
import { configureStore } from "@reduxjs/toolkit";

const appStore =configureStore( {
  reducer:{
    user:userReducer,
  }
})

export default appStore
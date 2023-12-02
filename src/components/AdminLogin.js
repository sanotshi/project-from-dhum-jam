import React from 'react';
import { useEffect } from 'react';

const AdminLogin = () => {
    useEffect(()=>{
getAdminLogin();
    },[])

    const getAdminLogin=async()=>{
        const data=await fetch("https://stg.dhunjam.in/account/admin/login");
        const json=await data.json();
        console.log(json);
    }
  return (
    <div>
       
    </div>
  )
}

export default AdminLogin
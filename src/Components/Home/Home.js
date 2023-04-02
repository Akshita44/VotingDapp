import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Context from '../../constant/context';
import {CONTRACT_ADDRESS,connect} from '../../constant/constants';
import "./home.css"
import { NavLink, useNavigate } from 'react-router-dom';

export default function Home() {
  const {details,dispatch}=useContext(Context);
  console.log("Home",details);
  useEffect(()=>{
    if(details.account=="" && details.isConnected==false)
    {
      const  func=async()=>{
        const {acnt,instance}= await connect();
        const result=await instance.methods.isAdmin(acnt[0]).call();
        var flags=true;
        if(!result)
        {
          try{
            const voter= await instance.methods.getVoterdetails(acnt[0]).call({
              from : acnt[0]
            });
            console.log(voter,voter?.votername);
            if(voter && voter?.votername)
            {
              flags=false            
            }
          }
          catch(err){
            console.log("hello err",err);
          }
        }
        dispatch({
          type:"login",
          payload:{
            account:acnt[0],
            instance,
            isadmin:result,
            flag:flags
          }
        })
      }
      func()
    }
    return ()=>{
      console.log("byeee");
    }
  },[])
  console.log(details,details.isadmin);
  return (
    <div className='homepage'>
    {details && details.isadmin ?(
      <div className='home'>
        <div className='welcome'>
          <h1>  Welcome to the Voting Application.</h1>  
          <h3>Conduct Elections And Bring Change.</h3>
        <NavLink to="/Election"><button className='btn'>Create Election</button></NavLink>
        </div>
        <div className='homeimg'>
          <img src="images/photo9.jpg" alt=""/>
        </div>
      </div>
    ):(
      <div className='home'>
        <div className='welcome'>
          <h1>  Welcome to the Voting Application.</h1>  
          <h3>Give Vote And Bring The Required Change.</h3>
        </div>
        <div className='homeimg'>
          <img src="images/photo1.jpg" alt=""/>
        </div>
      </div>
    )}
    </div>
  )
}

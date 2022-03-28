import React from 'react'
import { useEffect } from "react";
const Condition = () => {
    useEffect(()=>{
        console.log("fail component");
        return ()=>{
            console.log("fail component removed");
        }
    },[]);
  return (
    <div><h1>None</h1></div>
  )
}

export default Condition
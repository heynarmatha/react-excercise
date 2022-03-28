import React from 'react'
import { useEffect } from "react";
const Effect = () => {
    useEffect(()=>{
        console.log("demo component");
        return ()=>{
            console.log("demo component removed");
        }
    },[]);
  return (
    <h1>component loaded</h1>
  )
}

export default Effect;
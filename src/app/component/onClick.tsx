"use client"

import { useCallback } from "react";



export  const MyButton=() =>{

  const handleClick=useCallback((e: any)=>{
    console.log(e.target);
  },[])

  return (
    <button
      onClick={handleClick}
    >ボタン</button>
  );
}
"use client"

import { useCallback, useEffect } from "react";


export  const MyButton=() =>{

  useEffect(()=>{
    document.body.style.backgroundColor="red";

    return()=>{
      document.body.style.backgroundColor="";
    }
  },[]);

  const handleClick=useCallback((e:any)=>{
    alert("yahoo");
  },[]);

  return(
    <a className="flex justify-center"
      href="/about"
      onClick={handleClick}
    >ボタン</a>
  );
}
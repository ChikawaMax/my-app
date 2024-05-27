"use client"

import { useCallback, useEffect, useState } from "react";


export  const MyButton=() =>{

  useEffect(()=>{
    document.body.style.backgroundColor="red";

    return()=>{
      document.body.style.backgroundColor="";
    }
  },[]);

  const [count,setCount]=useState(0)
  const handleClick=(e:any)=>{
    setCount((count)=>count+1);
  };

  return(
    <div>
      <h1>{count}</h1>
      <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={handleClick}
      >ボタン</button>

    </div>
  );
}
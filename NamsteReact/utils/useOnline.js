import { useEffect, useState } from "react";

function useOnline()
{
    let [onlines,setOnlines]=useState(true);
   useEffect(()=>
{
    window.addEventListener("offline",()=>
    {
        setOnlines(false);

    });
    window.addEventListener("online",()=>
    {
        setOnlines(true);
    })
},[])
    
    return onlines;
}
export default useOnline
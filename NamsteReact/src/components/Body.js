import { useEffect, useState } from "react"
import Card, { newCard } from "./Card"
import { res_list } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import Shimmer from "./Shimmer";
function Body() {
    let [res,setRes]=useState([])   
    let NewC=newCard(Card)
    useEffect(()=>
    {
        let fetchdata=async ()=>{
        let data=await fetch(res_list)
        let jsondata=await data.json()
        let r=jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRes(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    fetchdata();
        
    },[])
   
    function topres()
    {
        console.log("top restaurants");
        let top_res=res.filter((el)=>el.info.avgRating>=4.5)
        setRes(top_res)
    }
    function open()
    {
        let open_res=res.filter((el)=>el.info.isOpen==true)
        setRes(open_res)
    }
    console.log(res);
    let status=useOnline();
    
    if(status==false)
    {
        return(<h1 id="cs">
            Oop's you are Offline.Check your Internet Connection or Connect to a Stable Internet Connection
        </h1>)
    }
    if(res.length==0)
    {
        return(<Shimmer/>)
    }
    
    return(<div className='con'>
        <div className="sort">
            <input type='text' placeholder='Enter the Restaurant Name' />
            <button onClick={topres}>Top Restaurants</button>
            <button onClick={open}>Open Restaurants</button>
        </div>
        <div className='cards'>
            {
                // res.map((el)=>)  
                res.map((el)=>
                {
                    let r="/rest/"+el.info.id
                    console.log(el.info.avgRating);
                    
                    
                    return(<>
                    {
                        <Link to={r}>{el.info.avgRating>4?<NewC resData={el}/>:<Card resData={el}/>}</Link>
                    }
                    </>)
                })
            }
        </div>
    </div>)
}
export default Body
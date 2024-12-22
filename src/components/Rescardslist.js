import { useDispatch } from "react-redux";
import { c_l, i_l } from "../../utils/constants"
import { addItem } from "../../utils/cartSlice";
function Rescardlist(props)
{
    let {resdData}=props
    console.log(resdData);
    let m=i_l+resdData.card.info.imageId

    console.log(m);
    let d=useDispatch()
    function fun(e)
    {
        d(addItem(e))
    }
    
    return (
        <div className='cardk' >
            <div><img src={m}/></div>
            <div><h5>{resdData.card.info.name}</h5></div>
            <div>{resdData.card.info.description}</div>
            <div>{resdData.card.info.price/100}</div>
            <div>{resdData.card.info.ratings.aggregatedRating.rating}</div>
            <button onClick={()=>fun(resdData.card.info)}>Add</button>

        </div>
        )
}

export default Rescardlist
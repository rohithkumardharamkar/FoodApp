import { useDispatch, useSelector } from "react-redux"
import { clearAll } from "../../utils/cartSlice";

function Cart()
{
    let s=useSelector((store)=>store.cart.items)
    console.log(s);
    let u=useDispatch()
    function fun()
    {
        u(clearAll())
    }
   
    
    return(<div>
       {s.length!=0 && <button onClick={fun}>Clear Cart</button>}
     { s.length==0 &&  <div><h4>Please Add Items to the Cart It is Empty</h4></div>}
     {
        s.map((el)=>
        {
            return(<div>
                 <div className='cardk' >
            <div><h5>{el.name}</h5></div>
            <div>{el.description}</div>
            <div>{el.price/100}</div>
            <div>{el.ratings.aggregatedRating.rating}</div>

        </div>
            </div>)
            
        })
     }

    </div>)
}
export default Cart
import { c_l } from "../../utils/constants";
function Card(props) {
    let { resData } = props;
    return (
        <div className='card'>
            <img src={c_l+resData.info.cloudinaryImageId} />

            <div><h5>{resData.info.name}</h5></div>
            <div>{resData.info.areaName}</div>
            <div>{resData.info.cuisines.join(',')}</div>
            <div>{resData.info.avgRating}</div>
            <div>{resData.info.costForTwo}</div>
        </div>)
}
export let  newCard=(Card)=>
    {
        return((props)=>
        {
            console.log(props);
            
            return(<div>
                <label>TOP</label>
             
                <Card {...props}/>
            </div>)
        })
    
    }
export default Card
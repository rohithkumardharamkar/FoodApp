import { useEffect, useState } from "react"
import { last, res_list } from "../../utils/constants"
import { useParams } from "react-router-dom"
import Rescardlist from "./Rescardslist"


function ResCard() {
    let i = useParams()
    let v = i.id
    console.log(i);
    let r = last + v;
    let [s, setS] = useState([])

    useEffect(() => {
        let fetdata= async ()=>{
            let c = await fetch(r);
        let d = await c.json();
        let p = await d.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        setS(p);

        }
        fetdata();
        
    }, [])
    return (<div>
        
            <div>
                {
                    s.map((el)=><Rescardlist resdData={el}/>)
                }
            </div>
           
    </div>)
}
export default ResCard
import {  useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../../utils/useOnline"
import { useDispatch, useSelector } from "react-redux"
function Header() {
    let [s, setS] = useState("Login")
    function fun() {
        let r = (s == "Login") ? "Logout" : "Login"
        setS(r)
    }
    
    let f=useSelector((store)=>store.cart.items)
    
    let st=useOnline()
    return (<div className='nav'>
        <div className='nav-items'>
            <div className='logo'>
                <img src='https://cdn.vectorstock.com/i/500p/70/35/scooter-delivery-silhouette-logo-template-vector-22657035.jpg' />
            </div>
            <div className='items'>
                <div>{st?"🟢":"🔴"}</div>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/about'>About</Link></div>
                <div><Link to='/contact'>Contact</Link></div>
                <div><Link to='/cart'>Cart-({f.length})</Link></div>
                <div><Link to='/groc'>Groceries</Link></div>
                <div></div>
            </div>
        </div>
    </div>)
}
export default Header
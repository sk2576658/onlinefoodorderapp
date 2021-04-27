import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (<>
    <div className="nav">
     <NavLink  className="nav_style"to="/">
         <p className=" nav_title">
             FoodOrdering Portal
             </p>
         </NavLink>
      <NavLink className="nav_style"to="/cart">
          <span >Cart {props.cartlength}
          </span>
          </NavLink>
          </div>
    </>)
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="mainpage_style">
            {props.items.map((currentvalue, index) => {
                if(index === 0 ){
                    return  <NavLink className="main_item" to='/pizza'>
                    <img  src={currentvalue.image} alt=''/>
                    <p>{currentvalue.name}</p>
                    </NavLink>
                }
                else{
                    return <NavLink className="main_item" to='/burger'>
                    <img  src={currentvalue.image} alt=''/>
                    <p>{currentvalue.name}</p>
                    </NavLink>
                }       
            }
            )}
        </div>
    )
}

export default Home
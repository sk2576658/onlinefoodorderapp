import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="homecontainer">
            {props.fooditem.map((singleelement, index) => {
                return index === 0 ?
                    <NavLink className="parentlink" to='/pizza'>
                        <img className="parentimage" src={singleelement.image} alt=''/>
                        <p>{singleelement.name}</p>
                        </NavLink>
                    :
                    <NavLink className="parentlink" to='/burger'>
                        <img className="parentimage" src={singleelement.image} alt=''/>
                        <p>{singleelement.name}</p>
                        </NavLink>
            }
            )}
        </div>
    )
}

export default Home

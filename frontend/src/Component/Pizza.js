import React from 'react'

const Pizza = (props) => {

    var fitems = props.items[0]
    if(fitems) {
        return (<div className="subitem_styling">
                <h1 className="main_heading">
                    {fitems.subItemsData.name}
                    </h1>
                {fitems.subItemsData.subItems.map(
                    (itemval, index) => <div className="cartdesign">
                    <div key={index} className="item_card">
                        <p className="item_tile">{itemval.name}</p>
                        <p className="priceitem">₹ {itemval.price}</p>
                        <p className="description">{itemval.description}</p>
                        <button className="button_styling" 
                        onClick={()=>{props.addtocart(itemval) }}>Order Now</button>
                    </div>
                    <div className="item_image">
                    <img src={itemval.image} alt="insertimage" />
                    </div>
                </div>
                )}
            </div>
        )
    } else{
        return null;
    }
}

export default Pizza
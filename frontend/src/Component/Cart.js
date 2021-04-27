import React from 'react'

const Cart = (props) => {
    if (props.itemcart.length !== 0) {
        console.log(props.cartdata)
        return (
            <div>
                {
                    props.itemcart.map((itemval, index) =>
                        <div className="cartdesign item_card">
                            <div classname="item_card">
                                <p className="item_tile">{itemval.itemname}</p>
                                <p className="priceitem">₹{itemval.itemprice}</p>
                                <p className="description">{itemval.itemdescription}</p>
                                <button className="button_styling"
                                 onClick={() => props.deletingitem(itemval)}>
                                     Remove
                                </button>
                            </div>
                            <div className="item_image">
                                <img  src={itemval.itemimage} alt="eeee"/>
                            </div>
                        </div>
                    )
                }
                <div className="clearbutton">
                <button className="button_styling" 
                onClick={props.clearallcart}>Place Order</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cartblank">No Item is Here !!!!</div>
        )
    }
}

export default Cart
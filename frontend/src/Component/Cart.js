import React from 'react'


const Cart = (props) => {
    if (props.itemcart.length !== 0) {
        return (
            <div>
                {
                    props.itemcart.map((itemval, index) =>
                        <div className="cardstyle childelement">
                            <div classname="childelement">
                                <p className="childelementname">{itemval.name}</p>
                                <p className="childelementprice">₹{itemval.price}</p>
                                <p className="childelementdiscription">{itemval.description}</p>
                                <button className="childelementbutton" onClick={() => props.removeCartItem(itemval)}>Remove</button>
                            </div>
                            <div className="childelementimage">
                                <img alt="" src={itemval.image} />
                            </div>
                        </div>
                    )
                }
                <div className="cartfooter">
                <button className="childelementbutton" onClick={props.removeAll}>Place Order</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="carthead">Cart is empty</div>
        )
    }
}

export default Cart

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Component/Home.js"
import Cart from "./Component/Cart.js"
import Pizza from "./Component/Pizza.js"
import Burger from "./Component/Burger.js"
import Navbar from './Component/Navbar.js';

function App() {
  const [items, setitems] = useState([]);
  const [itemcart, setcart] = useState([]);
  useEffect(() => {
   
  async function getfoodata() {
    const response = await axios.get('/allfooditemslist')
      setitems(response.data.results);
  }
    getfoodata();
    getcartitems(); 
  }, [])

  async function getcartitems() {
    const result= await axios.get('/getitemcart')
      setcart(result.data)
  }

  function addtocart(itemval) {
    const itemdata = {
      name: itemval.name,
      price: itemval.price,
      description: itemval.description,
      image: itemval.image
    }
    axios.post('/adcartitems', itemdata)

    getcartitems();
  }

  function deletingitem(itemval) {
    const data = {
      _id: itemval._id
    }

    axios.delete('/removingcartitem', { data })
    getcartitems();
  }

  function clearallcart() {
    axios.delete('/clearingallcart')
    getcartitems();
  }

  return (
    <Router>
      <div className="header">
        <Navbar cartlength={itemcart.length}/>
      </div>
      <Switch>
        <Route exact path="/" component={() => <Home items={items} />} />
        <Route exact path="/cart" component={() => <Cart itemcart={itemcart} deletingitem={deletingitem} clearallcart={clearallcart} />} />
        <Route exact path="/pizza" component={() => <Pizza items={items} addtocart={addtocart} />} />
        <Route exact path="/burger" component={() => <Burger items={items} addtocart={addtocart} />} />
      </Switch>
    </Router>
  );
}

export default App;
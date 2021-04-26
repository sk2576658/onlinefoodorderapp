import React, { useEffect, useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import axios from 'axios';
import Pizza from './Component/Pizza';
import Burger from './Component/Burger';
import Cart from './Component/Cart';
function App() {


  const [fooditem,setfooditem]= useState([]);
  const [itemcart,setitemcart]= useState([]);
  useEffect(() => {
     
 fetchingitems();
 fetchingcartitems();
},[])


async function fetchingitems(){
  const response= await axios.get('/allfooditemslist')
   setfooditem(response.fooditem.results);
}


async function fetchingcartitems(){
  const response= await axios.get('/itemcart')
  console.log(response.fooditem);
  setitemcart(response.fooditem);
     return response
} 



const addingitems=(items)=>{
  const addingitems={
    itemname:items.name,
    itemprice:items.price,
    itemimage:items.image,
    itemdescription:items.description
  }
  axios.post('/cartitems',addingitems)
  
  fetchingcartitems();
}
const removeCartItem=(items)=>{
  
  const data={
    _id:items._id
}
  axios.delete('/removingcartitem',{fooditem})
  fetchingcartitems();
  
}
const removeAll=()=>{
  
  axios.delete('/clearingallcart');
  setitemcart([]);
}

  return (<>
    <div className="App">
      <Header value={itemcart.length}/>  
      <Switch>
        <Route exact path="/" component={()=><LandingPage fooditem={fooditem} />}></Route>
        <Route exact path="/itemcart" component={()=><Cart itemcart={itemcart} removeCartItem={removeCartItem}  removeAll={removeAll}/>}></Route>
        <Route exact path="/pizza" component={()=><Pizza fooditem={fooditem} addingitems={addingitems}/>}></Route>
        <Route exact path="/burger" component={()=><Burger fooditem={fooditem} addingitems={addingitems}/>}></Route>
      </Switch>
    </div>
    </>
  );
}

export default App;

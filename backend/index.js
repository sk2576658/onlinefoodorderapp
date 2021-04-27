const fs = require('fs');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fooditemcontainer', { 
    useNewUrlParser: true,
     useUnifiedTopology: true, 
     useFindAndModify: false 
    });

const Schema = new mongoose.Schema({

    itemname: {
        type: String,
       
    },
    itemimage: {
        type: String,
      
    },
    itemprice: {
        type: String,
      
    },
    itemdescription: {
        type: String,
    }
});

var fooditemslist = mongoose.model('fooditemslist', Schema);

app.post('/adcartitems', (req, res) => {
    var addingfooitem = new fooditemslist({
        itemname: req.body.name,
        itemimage: req.body.image,
        itemprice: req.body.price,
        itemdescription: req.body.description
    });

    addingfooitem.save().then((docs) => {
    res.json({ result: 'Success' })
    console.log("output",docs)
    })
});

app.get('/getitemcart', (req, res) => {
    fooditemslist.find({}, (err, data) => {
        res.json(data)
    })
})

app.get('/allfooditemslist', (req, res) => {
    fs.readFile('fooddata.json', "UTF-8", (err, data) => {
       var result = JSON.parse(data);
        res.json({results:result});
    })
})

app.delete('/removingcartitem', function (req, res) {
    fooditemslist.deleteOne({ _id: req.body._id }).
    then((result) => {
      res.json(result);
      console.log(result)
    },
     (err) => console.log(err));
});

app.delete('/clearingallcart', function (req, res) {
    fooditemslist.deleteMany().
    then((response) => {
    res.json(response);
    console.log(response)
    },
     (err) => console.log(err));
});

app.listen(3001, () => {
    console.log('server is running at port 3001');
});

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
    iitemimage: {
        type: String,
      
    },
    itemprice: {
        type: String,
      
    },
    itemdescription: {
        type: String,
    }
}, { versionKey: false });

var fooditemslist = mongoose.model('fooditemslist', Schema);

app.post('/cartitems', (req, res) => {
    var addingfooitem = new fooditemslist({
        itemname: req.body.name,
        itemimage: req.body.image,
        itemprice: req.body.price,
        itemdescription: req.body.description
    });

    addingfooitem.save().then((docs) => {
        console.log("output",docs)
    }, (error) => {
        console.log(error)
    })
    res.json({ result: 'Success' })
});

app.get('/itemcart', (req, res) => {
    fooditemslist.find({}, (err, data) => {
        res.json(data)
    })
})

app.get('/allfooditemslist', (req, res) => {
    fs.readFile('data.json', "UTF-8", (err, data) => {
       var result = JSON.parse(data);
        res.send(result);
    })
})

app.delete('/removingcartitem', function (req, res) {

    fooditemslist.deleteOne({ _id: req.body._id }).
    then((result) => {
                 res.json(result);
    }, (err) => console.log(err));
});

app.delete('/clearingallcart', function (req, res) {

    fooditemslist.deleteMany().
    then((response) => {
        res.json(response);
    }, (err) => console.log(err));
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
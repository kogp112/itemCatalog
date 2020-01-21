const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    var db = req.db;
    var collection = db.get('CATALOG');
    var query = req.query;
    if (query.hasOwnProperty("genre")){
        query["genre"] = query.genre;
    }
    
    if (query.hasOwnProperty("color")){
        query["color"] = query.color;
    }
    
    collection.find(query, function (e, docs) {
        res.send(docs);
    });
});


module.exports = router;
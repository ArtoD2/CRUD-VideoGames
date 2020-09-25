const express = require('express');
const router = express.Router();

const db = require('../../data/mongo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const info = {
      query: {},
      collection: req.app.locals.collectionVG
  }
  db.readAll(info)
    .then((videoGames) => {
        res.json(videoGames)
    })
    .catch(err =>{
        console.log(err);
    })
});


router.post('/', function(req,res,next){
    const info = {
        doc: req.body,
        collection: req.app.locals.collectionVG
    }
    db.createOne(info)
    .then((data) => {
        res.json(data.ops[0]);
    })
    .catch(err =>{
        console.log(err);
    })
})

router.delete('/:id', function(req,res,next){
    const info = {
        id: req.params.id,
        collection: req.app.locals.collectionVG
    }
    db.deleteOne(info)
    .then(() => {
        res.json({msg: `deleted ${info.id}`});
    })
    .catch(err =>{
        console.log(err);
    })
})

router.put('/:id', function(req,res,next){
    const info = {
        id: req.params.id,
        doc: req.body,
        collection: req.app.locals.collectionVG
    }
    db.replaceOne(info)
    .then(() => {
        res.json({msg: `updated ${info.id}`});
    })
    .catch(err =>{
        console.log(err);
    })
})



// ignore this
//router.get('/:key/:value', function(req,res,next){

module.exports = router;

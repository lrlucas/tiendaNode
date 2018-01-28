var express = require('express');
var router = express.Router();
// var fs = require('fs');


router.get('/product-all', function (req, res, next) {
    // var files = [];
    // fs.readdirSync('/').filter(function (file) {
    //     files.push(file)
    // })

   res.status(200).json([
       {message:'Aqui se mostraran todos los productos'}
   ])

});

router.get('/product-all/:id',function (req, res, next) {

    res.status(200).json('obtener el producto por id '+req.params.id)

});

router.post('/product-all',function (req, res, next) {

    res.json(req.body)

});

router.delete('/product-all/:id',function (req, res, next) {

    res.status(200).json('Eliminar el producto por id '+req.params.id)

});



module.exports = router;
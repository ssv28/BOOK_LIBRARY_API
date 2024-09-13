let express = require('express');
let router = express.Router();

let BookController = require("../Controller/Books")
let UserController = require("../Controller/User")

//SIGN UP
router.post('/create', UserController.secure, BookController.bookCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, BookController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, BookController.FindId);

//DELETE DATA
router.delete('/delete/:id', UserController.secure, BookController.BookDelete);

//UPDATE DATA
router.patch('/update/:id', UserController.secure, BookController.BookUpdate);


module.exports = router;

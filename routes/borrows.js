let express = require('express');
let router = express.Router();

let BorrowController = require("../Controller/Borrow")
let UserController = require("../Controller/User")

//SIGN UP
router.post('/create', UserController.secure, BorrowController.BorrowCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, BorrowController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, BorrowController.FindId);

//DELETE DATA
router.delete('/delete/:id', UserController.secure, BorrowController.BorrowDelete);

//UPDATE DATA
router.patch('/update/:id', UserController.secure, BorrowController.BorrowUpdate);


module.exports = router;

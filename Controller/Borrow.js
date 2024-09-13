let BORROW = require('../Models/borrow');

exports.BorrowCreate = async function (req, res, next) {
    try {

        let borrowCreate = await BORROW.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Borrows Create SuccessFully!",
            data: borrowCreate

        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindData = async function (req, res, next) {
    try {

        let borrowFind = await BORROW.find().populate("user").populate("book")

        res.status(200).json({
            status: "Success",
            message: "Borrows Found SuccessFully!",
            data: borrowFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindId = async function (req, res, next) {
    try {

        let borrowFind = await BORROW.findById(req.params.id)
        if (!borrowFind) throw new Error('Borrow not found');

        res.status(200).json({
            status: "Success",
            message: "Borrows Find SuccessFully!",
            data: borrowFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.BorrowDelete = async function (req, res, next) {
    try {

        await BORROW.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Borrow Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.BorrowUpdate = async function (req, res, next) {
    try {

        console.log("===>>>", req.body);

        let borrowUpdate = await BORROW.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!borrowUpdate) throw new Error ('Borrow not found');

        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", borrowUpdate);

        res.status(200).json({
            status: "Success",
            message: "Borrows Update SuccessFully!",
            data: borrowUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}


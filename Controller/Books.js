let BOOKS = require('../Models/books');

exports.bookCreate = async function (req, res, next) {
    try {

        let bookCreate = await BOOKS.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Book Note Create SuccessFully!",
            data: bookCreate

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

        let bookFind = await BOOKS.find()

        res.status(200).json({
            status: "Success",
            message: "Book Note Found SuccessFully!",
            data: bookFind

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

        let bookFind = await BOOKS.findById(req.params.id)
        if (!bookFind) throw new Error('Book not found');

        res.status(200).json({
            status: "Success",
            message: "Book Note Find SuccessFully!",
            data: bookFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.BookDelete = async function (req, res, next) {
    try {

        await BOOKS.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Book-Note Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.BookUpdate = async function (req, res, next) {
    try {

        console.log("===>>>", req.body);

        let bookUpdate = await BOOKS.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!bookUpdate) throw new Error ('Book not found');

        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", bookUpdate);

        res.status(200).json({
            status: "Success",
            message: "Book Note Update SuccessFully!",
            data: bookUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}


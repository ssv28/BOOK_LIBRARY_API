let ADMIN = require('../Models/admin');
const bcrypt = require('bcrypt');

exports.AdminSignup = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let adminCreate = await ADMIN.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Admin Create SuccessFully!",
            data: adminCreate

        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.AdminLogin = async function (req, res, next) {
    try {

        let adminFind = await ADMIN.findOne({ email: req.body.email })
        if (!adminFind) throw new Error("User Not Found!")
        let passwordCompare = await bcrypt.compare(req.body.password, adminFind.password)
        if (!passwordCompare) throw new Error("Password Invalid!")


        res.status(200).json({
            status: "Success",
            message: "Admin Login SuccessFully!",
            data: adminFind

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

        let adminFind = await ADMIN.find()

        res.status(200).json({
            status: "Success",
            message: "Admin Found SuccessFully!",
            data: adminFind

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

        let adminFind = await ADMIN.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Admin Find SuccessFully!",
            data: adminFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AdminDelete = async function (req, res, next) {
    try {

        await ADMIN.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Admin Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AdminUpdate = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let adminUpdate = await ADMIN.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Admin Update SuccessFully!",
            data: adminUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
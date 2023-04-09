const {Call} = require('../models/models')
const ApiError = require("../error/ApiError");

class CallController {

    async getAll(req, res) {
        const call = await Call.findAll()
        return res.json(call)
    }

    async create(req, res) {
        const {phone} = req.body

            const newCall = await Call.create({
                phone,
                status: false,
            })
            return res.json(newCall)
      
    }

}

module.exports = new CallController()

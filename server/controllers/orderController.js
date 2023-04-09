const {Order} = require('../models/models')
const ApiError = require("../error/ApiError");

class OrderController {
    async create(req, res, next) {
        const {exursionId, userId, username, email} = req.body
        if (username && email && userId && exursionId) {
            const order = await Order.create({exursionId, userId, username, email})
            return res.json(order)
        }
        return next(ApiError.internal('Заполните обязательные поля'))
    }

    async getAll(req, res) {
        const order = await Order.findAll()
        return res.json(order)
    }

    async userOrder (req, res) {
        const {userId} = req.query
        const order = await Order.findAll({where:{userId}})
        return res.json(order)
    }


    async deleteOrder(req, res) {
        let {id} = req.query
        await Order.destroy({
            where: {id}
        })
    }
}

module.exports = new OrderController()

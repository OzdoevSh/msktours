const {Exursion, User} = require('../models/models')
const Sequelize = require('sequelize');
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const Op = Sequelize.Op;
const moment = require('moment');


class ExursionController {

    async create(req, res, next) {
        const {name, fullDescription, cost, date, cityId, description, address} = req.body
        if (!req.files) {
            return next(ApiError.internal('Загрузите изображение'))
        }
        if (name && cost && date && cityId && fullDescription && description && address) {
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const newExur = await Exursion.create({
                name,
                cost,
                date,
                cityId,
                description,
                address,
                img: fileName,
                fullDescription
            })
            return res.json(newExur)
        }
        return next(ApiError.internal('Заполните обязательные поля'))
    }

    async getAll(req, res) {
        console.log('job')
        let {cityId} = req.params
        const exur = await Exursion.findAll({
            where: {
                cityId,
                date: {
                    [Op.gte]: new Date()
                }
            }
        })
        return res.json(exur)
    }

    async getIdExursion(req, res) {
        let {id} = req.params
        const exur = await Exursion.findAll({where: {id}})
        return res.json(exur)
    }

    async deleteExur(req, res) {
        let {id} = req.query
        await Exursion.destroy({
            where: {id}
        })
    }


}

module.exports = new ExursionController()

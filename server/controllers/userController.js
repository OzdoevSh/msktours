const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const mailer = require('../middleware/nodemailer')
const uuid = require('uuid')

const generateJwt = (id, email, role, username) => {
    return jwt.sign(
        {id, email, role, username},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role, username} = req.body
        const uniqueid = uuid.v4()
        const message = {
            to: `${email}`,
            subject: "Подтверждение аккаунта!",
            html: `
                   <h1>Подтвердите аккаунт перейдя по ссылке ниже!</h1>
                   <a href="http://localhost:3000/Verify/${uniqueid}">Нажмите для подтверждения аккаунта</a>
                  `
        }
        mailer(message)
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword, username, uuid: uniqueid, status: false})
        const token = generateJwt(user.id, user.email, user.role, user.username)
        return res.json({token})
    }

    async activateAccount(req) {
        let {uuid} = req.body
        const user = await User.findOne({where: {uuid}})
        if (user) {
            await User.update({status: true}, {
                where: {
                    id: user.id
                }
            })
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = await bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = await generateJwt(user.id, user.email, user.role, user.username)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.username)
        return res.json({token})
    }
}

module.exports = new UserController()

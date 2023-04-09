const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const commRouter = require('./reviewsRouter')
const exurRouter = require('./exursionRouter')
const cityRouter = require('./cityRouter')
const orderRouter = require('./orderRouter')
const callRouter = require('./callRouter')
const questionRouter = require('./questionRouter')

router.use('/user', userRouter)
router.use('/review', commRouter)
router.use('/exursion', exurRouter)
router.use('/city', cityRouter)
router.use('/order', orderRouter)
router.use('/calls', callRouter)
router.use('/questions', questionRouter)

module.exports = router

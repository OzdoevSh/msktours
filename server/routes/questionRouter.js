const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController')

router.get('/', questionController.getAll)
router.post('/changeQuestion', questionController.changeStatus)
router.post('/', questionController.create)

module.exports = router

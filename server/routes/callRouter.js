const Router = require('express')
const router = new Router()
const callController = require('../controllers/callController')

router.get('/', callController.getAll)
router.post('/', callController.create)

module.exports = router

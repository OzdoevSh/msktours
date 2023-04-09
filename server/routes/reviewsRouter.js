const Router = require('express')
const router = new Router()
const otziviController = require('../controllers/reviewsController')

router.post('/', otziviController.create)
router.get('/', otziviController.getAll)
router.delete('/', otziviController.deleteOtziv)

module.exports = router

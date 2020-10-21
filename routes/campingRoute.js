const express = require('express');
const campingController = require('../controllers/campingController');

const router = express.Router();

router.get('/v1/campings', campingController.listAll);
router.get('/v1/campings/:id', campingController.getById);
router.post('/v1/campings', campingController.submit);
router.put('/v1/campings/:id', campingController.edit);
router.delete('/v1/campings/:id', campingController.remove);

module.exports = router;
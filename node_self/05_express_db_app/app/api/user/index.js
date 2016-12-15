const express = require('express');

const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.index);
router.get('/:id/', controller.show);

router.post('/', controller.create);

router.delete('/:id', controller.destroy);
router.put('/:id', controller.update);

module.exports = router;

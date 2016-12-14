const express = require('express');

const router = express.Router();
const controller = require('./user.controller');

router.get('', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.distroy);
router.post('/', controller.create); 
exports = router;

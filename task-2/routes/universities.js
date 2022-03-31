var express = require('express');
var router = express.Router();
const controller = require('../controller/universities');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAll)
      .get('/create', controller.create)
      .get('/:id', controller.getEdit)
      .get('/:id/view', controller.getView)
      .delete('/:id', controller.destroy)
module.exports = router;

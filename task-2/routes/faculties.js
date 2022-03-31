var express = require('express');
var router = express.Router();
const controller = require('../controller/faculties');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAll)
      .get('/create', controller.create)
      .get('/:id', controller.getEdit)
      .post('/', controller.create)
      .post('/:id', controller.update)
      .delete('/:id', controller.getDeleted)
module.exports = router;

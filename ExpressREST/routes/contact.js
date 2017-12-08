const ctrl = require('../controllers/contact');
const bodyParser = require('body-parser');
const authenticated = require('../middlewares/authenticated');
const router = require('express').Router();

router.get('/', ctrl.list);
router.post('/',
  bodyParser.json(),
  ctrl.add,
);
router.get('/:id', ctrl.show);
router.delete('/:id',
//  authenticated,
//  isAdmin,
  ctrl.delete,
);

module.exports = router;

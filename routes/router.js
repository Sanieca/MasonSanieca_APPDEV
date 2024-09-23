const express = require('express');
const router = express.Router();
const Sanieca = require('../Controller/SaniecaController');

router.get('/', Sanieca.main);
router.get('/eyebrows', Sanieca.eyebrows);
router.get('/eyelash', Sanieca.eyelash);
router.get('/hairtreatment', Sanieca.hairtreatment);
router.get('/nails', Sanieca.nails);




module.exports = router;
'use strict';

var express = require('express');

import {getMarkers, saveMarker, removeMarker} from './map.controller'

var router = express.Router();

router.get('/', getMarkers);
router.post('/', saveMarker);
router.delete('/:id', removeMarker);

module.exports = router;

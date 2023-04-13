const Event = require('../models/event_model')
const express=require('express')
const controller = require('../controller/bookings')
const router = express.Router()
const auth = require('../middleware/auth_middleware')
const withManager = require('../middleware/withManager')


router.use(auth).route('/').post(controller.bookEvent);
router.use(auth).route('/').get(controller.showBookings);
router.use(auth).route('/').delete(controller.cancelBookings);
router.use(auth).route('/:id').delete(controller.cancelOneBookings);




module.exports=router
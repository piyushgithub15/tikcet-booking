const Event = require('../models/event_model')
const express=require('express')
const controller = require('../controller/event')
const router = express.Router()
const auth = require('../middleware/auth_middleware')
const withManager = require('../middleware/withManager')


router.use(withManager).route('/').post(controller.createEvent);
router.route('/').get(controller.getAllEvents);
router.route('/:id').get(controller.getEvent);
router.use(withManager).route('/:id').get(controller.deleteEvent);
router.use(withManager).route('/:id').get(controller.updateEvent);



module.exports=router

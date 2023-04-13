const express = require("express");
const router = express.Router();
const controller = require("../controller/users");
const withAdmin = require('../middleware/withAdmin');

router.route("/signUp").post(controller.signUp);
router.route("/logIn").post(controller.logIn);
router.use(withAdmin).route("/:id").put(controller.updateUser);
router.use(withAdmin).route("/:id").delete(controller.deleteUser);


module.exports = router;
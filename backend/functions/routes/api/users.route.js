const router = require("express")();
const usersHandler = require("../../handlers/users.handler.js");

// post: create
// put: update
// delete: delete
// get: get
router.post("/", usersHandler.createUser);
router.get("/user/:userId", usersHandler.getUser);
router.get("/userEntity/:userEntityId", usersHandler.getUserByEntityId);
// router.delete("/:appointmentId", appointmentsHandler.deleteAppointment);
// router.put("/:appointmentId", appointmentsHandler.updateAppointment);


module.exports = router;
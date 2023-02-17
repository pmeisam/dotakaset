const router = require("express")();
const usersHandler = require("../../handlers/users.handler.js");

// post: create
// put: update
// delete: delete
// get: get
router.post("/", usersHandler.createUser);
router.get("/", usersHandler.getUser);
// router.delete("/:appointmentId", appointmentsHandler.deleteAppointment);
// router.put("/:appointmentId", appointmentsHandler.updateAppointment);


module.exports = router;
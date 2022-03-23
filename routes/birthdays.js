const express = require("express");
const router = express.Router();
const birthdaysControllers = require("../controllers/birthdays");

router.get("/", birthdaysControllers.index);
router.post("/addPerson", birthdaysControllers.addPerson);
router.delete("/delete/:id", birthdaysControllers.deletePerson);

module.exports = router;

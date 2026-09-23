const exprass = require("express");
const router = exprass.Router();
const ctrl = require("../controller/auth_controller");

router.get("/hello", (req, res) => {
    res.status(200).json({ message: "Hello world!" });
});

router.post("/login", ctrl.login);
router.post("/register", ctrl.register);
router.put("/users/:id", ctrl.edituser)
router.delete("/users/:id", ctrl.deleteuser)
module.exports = router;
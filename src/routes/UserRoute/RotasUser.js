const { Router } = require("express");
const UserRegistersController = require("../../controllers/userController/userRegisterController.js");

const router = Router();

router.post("/livraria/signin", UserRegistersController.signIn);
router.post("/livraria/register", UserRegistersController.registerUser);

module.exports = router;

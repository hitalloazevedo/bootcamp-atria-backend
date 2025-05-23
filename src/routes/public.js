"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RegisterUserController_1 = require("../controller/auth/RegisterUserController");
var LoginUserController_1 = require("../controller/auth/LoginUserController");
var router = express_1.default.Router();
//cadastro
router.post('/auth/register', function (req, res) {
    RegisterUserController_1.RegisterUserController.handle(req, res);
});
//login
router.post("/auth/login", function (req, res) {
    var user = LoginUserController_1.LoginUserController.handle(req, res);
    if (!user) {
        res.status(404).json({ message: "ususario nao encontrado" });
    }
    var token = jwt;
    res.status(200).json(token);
});
exports.default = router;

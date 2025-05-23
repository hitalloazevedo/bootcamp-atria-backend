"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ListTasksController_1 = require("../controller/task/ListTasksController");
var CreateTaskController_1 = require("../controller/task/CreateTaskController");
var UpdateTaskController_1 = require("../controller/task/UpdateTaskController");
var DeleteTaskController_1 = require("../controller/task/DeleteTaskController");
var router = express_1.default.Router();
// listar tarefas
router.get('/tasks', function (req, res) {
    var users = ListTasksController_1.ListTaasksControler.handle();
});
// criar tarefa
router.post('/tasks', function (req, res) {
    CreateTaskController_1.CreateTaskController.handle();
});
// atualizar tarefas
router.put('/tasks/:id', function (req, res) {
    UpdateTaskController_1.UpdateTaskController.handle();
});
// excluir tarefas
router.delete('/tasks/:id', function (req, res) {
    DeleteTaskController_1.DeleteTaskController.handle();
});
exports.default = router;

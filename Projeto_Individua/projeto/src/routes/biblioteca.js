var express = require("express");
var router = express.Router();

var bibliotecaController = require("../controllers/bibliotecaController");

router.get("/", function (req, res) {
    bibliotecaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    bibliotecaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    bibliotecaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:genero", function (req, res) {
    bibliotecaController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    bibliotecaController.publicar(req, res);
});

router.put("/editar/:idUsuario", function (req, res) {
    bibliotecaController.editar(req, res);
});

router.delete("/deletar/:idUsuario", function (req, res) {
    bibliotecaController.deletar(req, res);
});

module.exports = router;
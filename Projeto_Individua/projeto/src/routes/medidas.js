var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/quantidadeTotal", function (req, res) {
  medidaController.quantidadeTotal(req, res);
});

router.get("/criticas", function (req, res) {
  medidaController.criticas(req, res);
});

router.get("/recomendacao", function (req, res) {
  medidaController.recomendacao(req, res);
});

router.get("/outros", function (req, res) {
  medidaController.outros(req, res);
});

module.exports = router;

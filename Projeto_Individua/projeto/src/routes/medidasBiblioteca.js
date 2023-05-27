var express = require("express");
var router = express.Router();

var medidaBController = require("../controllers/medidaBController");

router.get("/ficcaoCientifica", function (req, res) {
  medidaBController.ficcaoCientifica(req, res);
});

router.get("/romance", function (req, res) {
  medidaBController.romance(req, res);
});

router.get("/suspense", function (req, res) {
  medidaBController.suspense(req, res);
});

router.get("/terror", function (req, res) {
  medidaBController.terror(req, res);
});

router.get("/aventura", function (req, res) {
  medidaBController.aventura(req, res);
});

router.get("/crimeEmisterio", function (req, res) {
  medidaBController.crimeEmisterio(req, res);
});

router.get("/historia", function (req, res) {
  medidaBController.historia(req, res);
});

router.get("/biografia", function (req, res) {
  medidaBController.biografia(req, res);
});

router.get("/autobiografia", function (req, res) {
  medidaBController.autobiografia(req, res);
});

router.get("/poesia", function (req, res) {
  medidaBController.poesia(req, res);
});

router.get("/contos", function (req, res) {
  medidaBController.contos(req, res);
});

router.get("/fantasia", function (req, res) {
  medidaBController.fantasia(req, res);
});

router.get("/mitologia", function (req, res) {
  medidaBController.mitologia(req, res);
});

router.get("/literaturaInfantilEJuvenil", function (req, res) {
  medidaBController.literaturaInfantilEJuvenil(req, res);
});

router.get("/drama", function (req, res) {
  medidaBController.drama(req, res);
});

router.get("/comedia", function (req, res) {
  medidaBController.comedia(req, res);
});

router.get("/ensaio", function (req, res) {
  medidaBController.ensaio(req, res);
});

router.get("/cronica", function (req, res) {
  medidaBController.cronica(req, res);
});

router.get("/guiasDeViagem", function (req, res) {
  medidaBController.guiasDeViagem(req, res);
});

router.get("/LivosDeAutoAjuda", function (req, res) {
  medidaBController.LivosDeAutoAjuda(req, res);
});

module.exports = router;

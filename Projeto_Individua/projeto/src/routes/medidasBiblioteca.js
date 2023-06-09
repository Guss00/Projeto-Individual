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

// Dados do Usuario ---------------------------------------------------------------------------------------------------------------

router.post("/ficcaoCientificaUsuario", function (req, res) {
  medidaBController.ficcaoCientificaUsuario(req, res);
});

router.post("/romanceUsuario", function (req, res) {
  medidaBController.romanceUsuario(req, res);
});

router.post("/suspenseUsuario", function (req, res) {
  medidaBController.suspenseUsuario(req, res);
});

router.post("/terrorUsuario", function (req, res) {
  medidaBController.terrorUsuario(req, res);
});

router.post("/aventuraUsuario", function (req, res) {
  medidaBController.aventuraUsuario(req, res);
});

router.post("/crimeEmisterioUsuario", function (req, res) {
  medidaBController.crimeEmisterioUsuario(req, res);
});

router.post("/historiaUsuario", function (req, res) {
  medidaBController.historiaUsuario(req, res);
});

router.post("/biografiaUsuario", function (req, res) {
  medidaBController.biografiaUsuario(req, res);
});

router.post("/autobiografiaUsuario", function (req, res) {
  medidaBController.autobiografiaUsuario(req, res);
});

router.post("/poesiaUsuario", function (req, res) {
  medidaBController.poesiaUsuario(req, res);
});

router.post("/contosUsuario", function (req, res) {
  medidaBController.contosUsuario(req, res);
});

router.post("/fantasiaUsuario", function (req, res) {
  medidaBController.fantasiaUsuario(req, res);
});

router.post("/mitologiaUsuario", function (req, res) {
  medidaBController.mitologiaUsuario(req, res);
});

router.post("/literaturaInfantilEJuvenilUsuario", function (req, res) {
  medidaBController.literaturaInfantilEJuvenilUsuario(req, res);
});

router.post("/dramaUsuario", function (req, res) {
  medidaBController.dramaUsuario(req, res);
});

router.post("/comediaUsuario", function (req, res) {
  medidaBController.comediaUsuario(req, res);
});

router.post("/ensaioUsuario", function (req, res) {
  medidaBController.ensaioUsuario(req, res);
});

router.post("/cronicaUsuario", function (req, res) {
  medidaBController.cronicaUsuario(req, res);
});

router.post("/guiasDeViagemUsuario", function (req, res) {
  medidaBController.guiasDeViagemUsuario(req, res);
});

router.post("/LivosDeAutoAjudaUsuario", function (req, res) {
  medidaBController.LivosDeAutoAjudaUsuario(req, res);
});

module.exports = router;

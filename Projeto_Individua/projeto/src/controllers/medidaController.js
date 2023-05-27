const medidaModel = require("../models/medidaModel");

function quantidadeTotal(req, res) {
  medidaModel.buscarQuantidadeDePostagens()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log("Erro ao buscar a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function criticas(req, res) {
  medidaModel.buscarQuantidadeDePostagensCriticas()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log("Erro ao buscar a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function recomendacao(req, res) {
  medidaModel.buscarQuantidadeDePostagensRecomendacao()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log("Erro ao buscar a quantidade de postagens de recomendação:", error);
      res.sendStatus(500);
    });
}

function outros(req, res) {
  medidaModel.buscarQuantidadeDePostagensOutros()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log("Erro ao buscar a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}

module.exports = {
  quantidadeTotal,
  criticas,
  recomendacao,
  outros
};

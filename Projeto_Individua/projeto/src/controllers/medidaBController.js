const medidaBModel = require("../models/medidaBModel");

function ficcaoCientifica(req, res) {
  medidaBModel
    .ficcaoCientifica()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function romance(req, res) {
  medidaBModel
    .romance()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function suspense(req, res) {
  medidaBModel
    .suspense()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(
        "Erro ao  a quantidade de postagens de recomendação:",
        error
      );
      res.sendStatus(500);
    });
}

function terror(req, res) {
  medidaBModel
    .terror()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}

function aventura(req, res) {
  medidaBModel
    .aventura()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function crimeEmisterio(req, res) {
  medidaBModel
    .crimeEmisterio()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function historia(req, res) {
  medidaBModel
    .historia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(
        "Erro ao  a quantidade de postagens de recomendação:",
        error
      );
      res.sendStatus(500);
    });
}

function biografia(req, res) {
  medidaBModel
    .biografia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}
function autobiografia(req, res) {
  medidaBModel
    .autobiografia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function poesia(req, res) {
  medidaBModel
    .poesia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function contos(req, res) {
  medidaBModel
    .contos()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(
        "Erro ao  a quantidade de postagens de recomendação:",
        error
      );
      res.sendStatus(500);
    });
}

function fantasia(req, res) {
  medidaBModel
    .fantasia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}

function mitologia(req, res) {
  medidaBModel
    .mitologia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function literaturaInfantilEJuvenil(req, res) {
  medidaBModel
    .literaturaInfantilEJuvenil()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function drama(req, res) {
  medidaBModel
    .drama()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function comedia(req, res) {
  medidaBModel
    .comedia()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(
        "Erro ao  a quantidade de postagens de recomendação:",
        error
      );
      res.sendStatus(500);
    });
}

function ensaio(req, res) {
  medidaBModel
    .ensaio()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}
function cronica(req, res) {
  medidaBModel
    .cronica()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function guiasDeViagem(req, res) {
  medidaBModel
    .guiasDeViagem()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function LivosDeAutoAjuda(req, res) {
  medidaBModel
    .LivosDeAutoAjuda()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(
        "Erro ao  a quantidade de postagens de recomendação:",
        error
      );
      res.sendStatus(500);
    });
}

module.exports = {
  ficcaoCientifica,
  romance,
  suspense,
  terror,
  aventura,
  crimeEmisterio,
  historia,
  biografia,
  autobiografia,
  poesia,
  contos,
  fantasia,
  mitologia,
  literaturaInfantilEJuvenil,
  drama,
  comedia,
  ensaio,
  cronica,
  guiasDeViagem,
  LivosDeAutoAjuda,
};

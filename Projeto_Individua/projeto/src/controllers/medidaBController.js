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

// Dados do Usuario --------------------------------------------------------------------------------------------

function ficcaoCientificaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .ficcaoCientificaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function romanceUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .romanceUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function suspenseUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .suspenseUsuario(fkUsuario)
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

function terrorUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .terrorUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}

function aventuraUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .aventuraUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function crimeEmisterioUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .crimeEmisterioUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function historiaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .historiaUsuario(fkUsuario)
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

function biografiaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .biografiaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}
function autobiografiaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .autobiografiaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function poesiaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .poesiaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function contosUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .contosUsuario(fkUsuario)
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

function fantasiaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .fantasiaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}

function mitologiaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .mitologiaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function literaturaInfantilEJuvenilUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .literaturaInfantilEJuvenilUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function dramaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .dramaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function comediaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .comediaUsuario(fkUsuario)
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

function ensaioUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .ensaioUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens de outros:", error);
      res.sendStatus(500);
    });
}
function cronicaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .cronicaUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade total de postagens:", error);
      res.sendStatus(500);
    });
}

function guiasDeViagemUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .guiasDeViagemUsuario(fkUsuario)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log("Erro ao  a quantidade de postagens críticas:", error);
      res.sendStatus(500);
    });
}

function LivosDeAutoAjudaUsuario(req, res) {
  var fkUsuario = req.body.idUsuario;
  medidaBModel
    .LivosDeAutoAjudaUsuario(fkUsuario)
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

  ficcaoCientificaUsuario,
  romanceUsuario,
  suspenseUsuario,
  terrorUsuario,
  aventuraUsuario,
  crimeEmisterioUsuario,
  historiaUsuario,
  biografiaUsuario,
  autobiografiaUsuario,
  poesiaUsuario,
  contosUsuario,
  fantasiaUsuario,
  mitologiaUsuario,
  literaturaInfantilEJuvenilUsuario,
  dramaUsuario,
  comediaUsuario,
  ensaioUsuario,
  cronicaUsuario,
  guiasDeViagemUsuario,
  LivosDeAutoAjudaUsuario,
};

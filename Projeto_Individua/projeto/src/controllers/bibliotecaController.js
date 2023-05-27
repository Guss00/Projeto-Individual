var bibliotecaModel = require("../models/bibliotecaModel");

function testar(req, res) {
    console.log("ENTRAMOS NA bibliotecaController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    bibliotecaModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    bibliotecaModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    bibliotecaModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {

    var nome = req.body.titulo;
    var genero = req.body.genero;
    var fkUsuario = req.params.idUsuario;

    if (nome == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (genero == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        bibliotecaModel.publicar(nome, genero, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novoTitulo = req.body.titulo;
    var novoGenero = req.body.genero;
    var nome = req.body.nomeAntigo;
    var fkUsuario = req.params.idUsuario;
  
    bibliotecaModel.editar(novoTitulo, novoGenero, nome, fkUsuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
  

  function deletar(req, res) {
      var fkUsuario = req.params.idUsuario;
      var nome = req.body.nomeAntigo;
  
    bibliotecaModel.deletar(nome, fkUsuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
  

module.exports = {
    testar,
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
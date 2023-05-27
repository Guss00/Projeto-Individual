const database = require("../database/config");

function buscarQuantidadeDePostagens() {
  const instrucaoSql = `SELECT COUNT(*) AS quantidade FROM comunidade;`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarQuantidadeDePostagensCriticas() {
  const instrucaoSql = `SELECT COUNT(*) AS quantidade FROM comunidade WHERE tipo = 'Crítica';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarQuantidadeDePostagensRecomendacao() {
  const instrucaoSql = `SELECT COUNT(*) AS quantidade FROM comunidade WHERE tipo = 'Recomendação';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarQuantidadeDePostagensOutros() {
  const instrucaoSql = `SELECT COUNT(*) AS quantidade FROM comunidade WHERE tipo = 'Outro';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarQuantidadeDePostagens,
  buscarQuantidadeDePostagensCriticas,
  buscarQuantidadeDePostagensRecomendacao,
  buscarQuantidadeDePostagensOutros
};

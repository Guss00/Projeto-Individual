const database = require("../database/config");

function ficcaoCientifica() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Ficção científica';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function romance() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Romance';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function suspense() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Suspense';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function terror() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Terror';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function aventura() {
    const instrucaoSql = `
    SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Aventura';`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function crimeEmisterio() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Crime e Mistério';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function historia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'História';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function biografia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Biografia';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function autobiografia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Autobiografia';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function poesia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Poesia';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contos() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Contos';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function fantasia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Fantasia';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mitologia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Mitologia';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function literaturaInfantilEJuvenil() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Literatura Infantil e Juvenil';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function drama() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Drama';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function comedia() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Comédia';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function ensaio() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Ensaio';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cronica() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Crônica';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function guiasDeViagem() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Guias de Viagem';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function LivosDeAutoAjuda() {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Livros de autoajuda e desenvolvimento pessoal';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Dados do Usuario ------------------------------------------------------------------------------------------------------------------------------------------------------------------

function ficcaoCientificaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Ficção científica' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function romanceUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Romance' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function suspenseUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Suspense' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function terrorUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Terror' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function aventuraUsuario(fkUsuario) {
    const instrucaoSql = `
    SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Aventura' AND fkUsuario = ${fkUsuario};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function crimeEmisterioUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Crime e Mistério' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function historiaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'História' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function biografiaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Biografia' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function autobiografiaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Autobiografia' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function poesiaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Poesia' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contosUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Contos' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function fantasiaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Fantasia' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mitologiaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Mitologia' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function literaturaInfantilEJuvenilUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Literatura Infantil e Juvenil' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function dramaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Drama' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function comediaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Comédia' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function ensaioUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Ensaio' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cronicaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Crônica' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function guiasDeViagemUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Guias de Viagem' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function LivosDeAutoAjudaUsuario(fkUsuario) {
  const instrucaoSql = `
  SELECT COUNT(*) AS quantidade FROM biblioteca WHERE genero = 'Livros de autoajuda e desenvolvimento pessoal' AND fkUsuario = ${fkUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
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

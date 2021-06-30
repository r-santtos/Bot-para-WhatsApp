const database = require("../../database");

function execute(user) {
  /** STAGE 1 = START */
  database.db[user].stage = 99;
    return [
    `Olá, sou assistente virtual, ainda não sei o seu nome, diga-me qual é o seu nome?`,
    ];
  }

exports.execute = execute;
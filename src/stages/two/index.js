const database = require("../../database");

function execute(user, msg) {
  switch (msg) {
    case '1':
      database.db[user].stage = 0;
      return ["Você escolheu primeira"];
      break;

    case '2':
      database.db[user].stage = 0;
      return ["Você escolheu segunda"];
      break;
      
    case '3':
      database.db[user].stage = 0;
      return ["Você escolheu terceira"];
      break;

    default:
      return ["Código inválido, digite corretamente"]
      break;
  }
}

exports.execute = execute;
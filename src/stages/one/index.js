const options = require("../../options/options");
const database = require("../../database");

function execute(user) {
  let menu = " Digite apenas o número \n\n";

  Object.keys(options.menu).forEach((value) => {
    let element = options.menu[value];
    menu += `${value} - ${element.description}\n`;
  });

  database.db[user].stage = 2;

  return [
    menu,
    `Olá ${user} sou uma assistente virtual, irei apresentar as opções...`,
  ];
}

exports.execute = execute;
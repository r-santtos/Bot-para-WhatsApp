const options = require("../../options/options");
const database = require("../../database");

function execute(user, msg) {
  let menu = "Digite apenas o número \n\n";

  Object.keys(options.menu).forEach((value) => {
    let element = options.menu[value];
    menu += `${value} - ${element.description}\n`;
  });

  database.db[user].stage = 2;

  return [
    `Olá ${msg}, irei apresentar as opções...\n\n${menu}`,
  ];
}

exports.execute = execute;
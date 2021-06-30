// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

const database = require("./database");
const stages = require("./stages");

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  function start(client) {
    client.onMessage((message) => {
      let resp = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body,
        message.sender.name
      );

      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.from, element);
      }

    });
  }


  function getStage(user) {
    if (database.db[user]) {
      //Se existir esse numero no banco de dados
      return database.db[user].stage;
    } else {
      //Se for a primeira vez que entra e contato
      database.db[user] = {
        stage: 0,
        itens: [],
      };
      return database.db[user].stage;
    }
  }
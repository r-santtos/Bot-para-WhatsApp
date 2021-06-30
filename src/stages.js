const stages = {
  99: {
    description: "Novo Usuário",
    obj: require("./stages/ninety-nine"),
  },
  0: {
    description: "Novo Usuário",
    obj: require("./stages/zero"),
  },
  1: {
    description: "Opções",
    obj: require("./stages/one"),
  },
  2: {
    description: "Escolhas",
    obj: require("./stages/two"),
  },
};
  
exports.step = stages;
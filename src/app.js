//ESTRUTURA DA APLICAÇÃO separada do servidor
const express = require('express');
//importando rotas de outro arquivo
const routes = require('./routes')

class App {
  constructor() {
    this.server = express();

   //chamando as funções para dentro do constructor, senão nunca seriam chamadas 
    this.middlewares();
    this.routes();
  }

  middlewares() {
      this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

//exportando uma nova instancia de App
    //única coisa que deve ser acessada fora dessa classe é o server
module.exports = new App().server;
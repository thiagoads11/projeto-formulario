const express = require("express")

const app = express()

const users = {
  {
    name: 'Thiago',
    age: 29,
  },
}


app.listen(3001, () => console.log('Servidor Rodando'))
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const users = [
  {
    name: 'Thiago',
    email: 'thiagomenezes@gmail.com',
  },
]

app.get('/usuarios', function (request,response){
  response.json(users)
})

app.post('/usuarios', function (request,response){
  console.log(request.body)

  const newUser = resquest.body

  users.push(newUser)

  response.status(201).json(newUser)
  
})


app.listen(3001, () => console.log('Servidor Rodando'))
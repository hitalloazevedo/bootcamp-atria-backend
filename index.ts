import express from "express"
import Routes from './src/routes/routes.ts'

// varios erros estão presentes pois varias implementações serão feitas 

const app = express()
app.use(express.json())

app.use('/', Routes)

app.listen(3000, () => {
    console.log("Servidor rodando em localhost:3000")
})

import express from "express"
import router from "./src/routes/routes"

// varios erros estão presentes pois varias implementações serão feitas 

const app = express()
app.use(express.json())

app.use('/', router)

app.listen(3000, () => {
    console.log("Servidor rodando em localhost:3000");
});
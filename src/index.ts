import express from "express"
import router from "./routes/routes"

const app = express()
app.use(express.json())

app.use('/', router)

app.listen(3000, () => {
    console.log("Servidor rodando em localhost:3000");
});
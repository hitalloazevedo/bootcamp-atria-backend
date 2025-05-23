import express from "express"
import publicRoutes from './src/routes/public.ts'
import privateRoutes from './src/routes/private.ts'
import auth from auth.ts

// varios erros estão presentes pois varias implementações serão feitas 

const app = express()
app.use(express.json())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)


app.listen(3000, () => {
    console.log("Servidor rodando em localhost:3000")
})

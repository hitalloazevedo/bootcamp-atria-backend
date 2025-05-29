import express from "express";
import publicRoutes from './src/routes/public.ts';
import privateRoutes from './src/routes/private.ts';
import ensureAuthenticated from './src/middlewares/ensureAuthenticated'; // middleware

const app = express();
app.use(express.json());

app.use('/', publicRoutes);
app.use('/tasks', ensureAuthenticated, privateRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em localhost:3000");
});
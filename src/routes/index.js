const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activityRouter = require ("./activitysRouter");
const wellcome = require("./wellcome");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();

//routes.use("/countries", countriesRouter);

// routes.("/", (req, res) => {
//   res.status(200).send(`Página Principal (Prueba)`);
// });

routes.use("/", wellcome);

routes.use("/countries", countriesRouter);

routes.use("/activity", activityRouter);

module.exports = routes;

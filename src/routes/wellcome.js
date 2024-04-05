const { Router } = require("express");

const wellcome = Router();

// wellcome.get("/", (req, res) => {
// 	res.status(200).send(`Página Principal (Prueba)`);
// });

wellcome.get("/", (req, res) => {
	const htmlResponse = `
        <html>
            <head>
                <title>Test01</title>
            </head>

            <body>
                <h1>Estoy en 'wellcome'</h1>
            </body>
        </html>`;

	res.status(200).send(htmlResponse);
});

module.exports = wellcome;

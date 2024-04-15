const {
	createActivity,
	getAllActivities,
	assignActivityController,
} = require("../controllers/activityController");

const getActivityHandler = async (req, res) => {
	try {
		const response = await getAllActivities();
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const createActivityHandler = async (req, res) => {
	const { nombre, dificultad, duracion, temporada } = req.body;
	// console.log("En el Handler: ");
	// console.log(req.body);
	//res.status(200).json("Llegaron las datos.")

	try {
		const response = await createActivity( nombre, dificultad, duracion, temporada, );
		// console.log(`Llego al activityHandler.`);
		res.status(200).json("Actividad Creada!");
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const assignActivityHandler = async (req, res) => {
	const statesAssignActivity = req.body;
	// console.log(statesAssignActivity);

	const idActivity = statesAssignActivity.selectActivity.id;
	const dataCountries = statesAssignActivity.listCountriesToActivity;

	try {
		const result = await assignActivityController(idActivity, dataCountries);

		statesAssignActivity.listCountriesToActivity = result;
        res.status(200).json({statesAssignActivity});
        // res.status(400).json(response);

	} catch (error) {
		res.status(400).json({ error: error.message });
	}

};

module.exports = { getActivityHandler, createActivityHandler, assignActivityHandler };

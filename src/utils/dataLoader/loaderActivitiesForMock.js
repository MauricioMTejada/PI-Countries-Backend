const { Activity } = require("../../db");
const { activitiesMock } = require("../mock/activitiesMock");

const loaderActivitiesForMock = async () => {
	// await Activity.sync({ force: true });

	for (let actividad of activitiesMock) {
		await Activity.create({
			nombre: actividad.nombre,
			dificultad: actividad.dificultad,
			duracion: actividad.duracion,
			temporada: actividad.temporada,
			// Agrega otros campos si es necesario
		});
	}

	// console.log("Actividades Creadas");
};

module.exports = { loaderActivitiesForMock };

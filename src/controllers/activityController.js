const { Activity, ActivityCountry } = require("../db");


const createActivity = async ( nombre, dificultad, duracion, temporada, ) => {
	// console.log("Dentro del controler: ");
	// console.log(nombre, dificultad, duracion, temporada);
	try {
		// console.log(`Intento escribir en la base de datos`);
		const activity = await Activity.create({ nombre, dificultad, duracion, temporada, });
		return activity;
	} catch (error) {
		console.error(error);
        throw error;
	}
};

const assignActivityController = async (idActivity, dataCountries) => {
	// console.log(`En el Controller: `);
	// console.log(`idActivity: ${idActivity}`);
	// console.log(dataCountries);

    try {
        // Iterar sobre cada countryId
        for (const dataCountry of dataCountries) {

			// Extraigo "id" del país
			const countryId = dataCountry.selectedCountry.id;
			console.log (`countryId: ${countryId}`);

			// Verificar si la relación ya existe
            const existingRelation = await ActivityCountry.findOne({
                where: { activityId: idActivity, countryId }
            });

            // Si la relación ya existe, agregarla al array de relaciones existentes
            if (existingRelation) {
				dataCountry.saveData = true;
				dataCountry.existSaveData = true;
                continue;
            } else {
				// Si la relación no existe, crearla
				const newRelation = await ActivityCountry.create({
					activityId: idActivity,
					countryId
				});

				dataCountry.saveData = true;
				dataCountry.existSaveData = false;
			}

        }

		return dataCountries;
    } catch (error) {
        console.error('Error al asignar actividad a países:', error);
        throw error;
    }
}

const getAllActivities = async () => {
	const activityAndRelations = { actividades: [], relaciones: [] };
	activityAndRelations.actividades = await Activity.findAll();
	activityAndRelations.relaciones = await ActivityCountry.findAll();
	return activityAndRelations;
};

module.exports = { createActivity, getAllActivities, assignActivityController };

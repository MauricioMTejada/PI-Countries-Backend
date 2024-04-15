const { Activity } = require("../../db");
const { activitiesMock } = require("../mock/activitiesMock");

const loaderActivitiesForMock = async () => {
    for (let actividad of activitiesMock) {
        await Activity.findOrCreate({
            where: { nombre: actividad.nombre }, // Especifica la condición de búsqueda aquí
            defaults: { // Especifica los valores predeterminados aquí
                dificultad: actividad.dificultad,
                duracion: actividad.duracion,
                temporada: actividad.temporada,
                // Agrega otros campos si es necesario
            }
        });
    }
};

module.exports = { loaderActivitiesForMock };

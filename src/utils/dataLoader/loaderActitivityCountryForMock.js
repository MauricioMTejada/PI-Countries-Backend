const { ActivityCountry, Activity, Country } = require("../../db");
const { activityCountryMock } = require("../mock/activityCountryMock");

const loaderActitivityCountryForMock = async () => {
    try {
        for (let activityCountry of activityCountryMock) {
            const { activityNombre, countryId } = activityCountry;

            // Buscar el activityId correspondiente al activityNombre
            const activity = await Activity.findOne({
                where: {
                    nombre: activityNombre
                }
            });

            if (activity) {
                const { id: activityId } = activity;

                // Verificar si el país existe en la tabla Country
                const country = await Country.findOne({
                    where: {
                        id: countryId
                    }
                });

                if (country) {
                    // Buscar o crear la entrada en la base de datos
                    const [existingEntry, created] = await ActivityCountry.findOrCreate({
                        where: {
                            activityId,
                            countryId
                        }
                    });

                    // console.log(`Nuevo registro: activityId: ${activityId}, countryId: ${countryId}`);
                    // console.log(`created: ${created}`);
                    // if(created) {
                    //     console.log(`existingEntry: `);
                    //     console.log(existingEntry);
                    // }
                } else {
                    console.error(`No se encontró país con ID: ${countryId}`);
                }
            } else {
                console.error(`No se encontró actividad con nombre: ${activityNombre}`);
            }
        }
    } catch (error) {
        console.error("Error al cargar actividades por país:", error);
    }
};

module.exports = { loaderActitivityCountryForMock };

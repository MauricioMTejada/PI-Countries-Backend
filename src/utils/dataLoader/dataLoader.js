const { Country, Activity, ActivityCountry } = require("../../db");
const { loaderActitivityCountryForMock } = require("./loaderActitivityCountryForMock");
const { loaderActivitiesForMock } = require("./loaderActivitiesForMock");
const { loaderCountriesForApi } = require("./loaderCountriesForApi");
const { yellow, green, red } = require("colorette");

// Para visualizar las tablas en SQL Shell,
// ingresar el comando: SET client_encoding = 'UTF8';
// para no tener incompatibilidad con los datos y poder visualizarlos

const dataLoader = async () => {

	// console.log('Paso por Dataloader');

	// consulto si está cargada la tabla "Country"
	const count = await Country.count();
	// console.log('cuenta de Countries: ', count);
	if (count === 0) {
		await loaderCountriesForApi();
	} else {
		// console.log(green("[ La Base de Datos ya ha sido cargada anteriormente ]"));
	}

	// consulto si está cargada la tabla "Activity"
	const countActivities = await Activity.count();
	// console.log( 'cuenta de Activities: ', countActivities);
	if (countActivities === 0) {
        await loaderActivitiesForMock();
    } else {
        // console.log(green("[ La Base de Actividades ya ha sido cargada anteriormente ]"));
    }

	// Cargar actividades por país si no están cargadas
	const countActivityCountry = await ActivityCountry.count();
	// console.log( 'cuenta de ActivityCountry: ', countActivityCountry);
	if (countActivityCountry === 0) {
		await loaderActitivityCountryForMock();
	} else {
		// console.log(green("[ Las actividades por país ya han sido cargadas anteriormente ]"));
	}
};

module.exports = { dataLoader };

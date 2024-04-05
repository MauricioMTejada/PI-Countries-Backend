const { Country, Activity } = require("../../db");
const { loaderActivitiesForMock } = require("./loaderActivitiesForMock");
const { loaderCountriesForApi } = require("./loaderCountriesForApi");
const { yellow, green, red } = require("colorette");

// Para visualizar las tablas en SQL Shell,
// ingresar el comando: SET client_encoding = 'UTF8';
// para no tener incompatibilidad con los datos y poder visualizarlos

const dataLoader = async () => {

	// consulto si está cargada la tabla "Country"
	const count = await Country.count();
	// console.log('cuenta de Countries: ', count);
	if (count === 0) {
		loaderCountriesForApi();
	} else {
		// console.log(green("[ La Base de Datos ya ha sido cargada anteriormente ]"));
	}

	// consulto si está cargada la tabla "Activity"
	const countActivities = await Activity.count();
	// console.log( 'cuenta de Activities: ', countActivities);
	if (countActivities === 0) {
        loaderActivitiesForMock();
    } else {
        // console.log(green("[ La Base de Actividades ya ha sido cargada anteriormente ]"));
    }
};

module.exports = { dataLoader };

const { Country } = require("../../db");
// const fetch = require("node-fetch");
const { yellow, green, red } = require("colorette");

const URL_BASE = "https://restcountries.com/v3/all";

const loaderCountriesForApi = async () => {
	console.log(yellow("[ Cargando Base de Datos ]"));

	try {
		const response = await fetch(URL_BASE);
		const data = await response.json();

		data.forEach(async (country) => {
			// for (let i = 0; i < data.length; i++) {
			// const country = data[i];
			const {
				cca3: id,
				name,
				flags,
				continents,
				capital,
				subregion,
				area,
				population,
			} = country;
			const nombre = name.common;
			const bandera = flags?.[1] || "";
			const continente = continents?.[0] || "";
			const capitalValue = capital?.[0] || "Sin Capital";
			const subregionValue = subregion || "Sin Subregion";
			const areaValue = Math.round(area);
			const poblacion = population;

			// const count = await Country.count();
			// console.log("cuenta de Countries: ", count);

			const existingCountry = await Country.findOne({ where: { id } });
			if (existingCountry) {
				// console.log(`[El país con ID ${id} ya existe en la base de datos]`);
			} else {
				await Country.create({
					id,
					nombre,
					bandera,
					continente,
					capital: capitalValue,
					subregion: subregionValue,
					area: areaValue,
					poblacion,
				});
			}
		});
		// };

		console.log(green("[ Base de Datos Cargada ]"));
	} catch (error) {
		// console.error(red("[ Error al cargar la base de datos: ]", error));
		console.error("[ Error al cargar la base de datos: ]", error);
	}
};

module.exports = { loaderCountriesForApi };

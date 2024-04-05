const {
  getAllCountries,
  getCoutryByName,
  getDetailCountry,
} = require("../controllers/countryController");

const getCountriesHandler = async (req, res) => {
  const { nombre } = req.query;
  // console.log(`LLego a getCountries Handler. nombre = ${nombre}`);

  try {
    if (nombre) {
      // console.log("countriesHandler, solicito un pais");
      const coutryByName = await getCoutryByName(nombre);
      res.status(200).json(coutryByName);
    } else {
      // console.log("countriesHandler, solicito todos los países");
      const response = await getAllCountries();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDetailCountriesHandler = async (req, res) => {
  const { id } = req.params;
  console.log(`LLego a getDetailCountries Handler. id = ${id}`);

  try {
    const response = await getDetailCountry(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountriesHandler, getDetailCountriesHandler };

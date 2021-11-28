const ciudades = [
  { name: "Alberta", src: "../Cities12/Alberta.jpg", id: 0 },
  { name: "Buenos Aires", src: "../Cities12/Baires.jpg", id: 1 },
  { name: "Dublin", src: "../Cities12/irlanda.jpg", id: 2 },
  { name: "Jerusalen", src: "../Cities12/jerusalen.jpg", id: 3 },
  { name: "London", src: "../Cities12/londres.jpg", id: 4 },
  { name: "New York", src: "../Cities12/newyork.jpg", id: 5 },
  { name: "Amsterdam", src: "../Cities12/paisesbajos.jpg", id: 6 },
  { name: "Paris", src: "../Cities12/paris.jpg", id: 7 },
  { name: "Seoul", src: "../Cities12/seul.jpg", id: 8 },
  { name: "Sydney", src: "../Cities12/sydney.jpg", id: 9 },
  { name: "Toronto", src: "../Cities12/toronto.jpg", id: 10 },
  { name: "Dubai", src: "../Cities12/dubai.jpg", id: 11 },
  { name: "Sydney", src: "../Cities12/sydney.jpg", id: 12 },
  { name: "Bora-Bora", src: "../Cities12/bora.jpg", id: 13 },
  { name: "Tokio", src: "../Cities12/tokio.jpg", id: 14 },
];

const citiesController = {
  getCities: (req, res) => {
    res.json({ response: { ciudades } });
  },
  getCity: (req, res) => {
    const ciudad = ciudades.find((ciudad) => ciudad.id.toString() === req.params.id);
    res.json({ response: { ciudad } });
  },
  createCity: (req, res) => {
    const { name, src } = req.body;
    const newCity = { name, src, id: ciudades.length };
    ciudades.push(newCity);
    res.json({ responses: { ciudades } });
  }
};

module.exports = citiesController;

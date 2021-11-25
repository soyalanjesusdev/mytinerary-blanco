const ciudades =[
    {name: "Alberta", src: ("../components/asset/Cities12/Alberta.jpg")},
    {name: "Buenos Aires", src: ("../components/asset/Cities12/Baires.jpg")},
    {name: "Dublin", src: ("../components/asset/Cities12/irlanda.jpg")},
    {name: "Jerusalen", src: ("../components/asset/Cities12/jesuralen.jpg")},
    {name: "London", src: ("../components/asset/Cities12/londres.jpg")},
    {name: "New York", src: ("../components/asset/Cities12/newyork.jpg")},
    {name: "Amsterdam", src: ("../components/asset/Cities12/paisesbajos.jpg")},
    {name: "Paris", src: ("../components/asset/Cities12/paris.jpg")},
    {name: "Seoul", src: ("../components/asset/Cities12/seul.jpg")},
    {name: "Sydney", src: ("../components/asset/Cities12/sydney.jpg")},
    {name: "Bora-Bora", src: ("../components/asset/Cities12/bora.jpg")},
    {name: "Dubai", src: ("../components/asset/Cities12/dubai.jpg")},
    {name: "Sydney", src: ("../components/asset/Cities12/sydney.jpg")},
    {name: "Bora-Bora", src: ("../components/asset/Cities12/bora.jpg")},
    {name: "Dubai", src: ("../components/asset/Cities12/dubai.jpg")},
]
const express = require('express'); 
const cors = require('cors');    //importamos cors
const app = express(); //creamos la aplicacion
app.use(cors()); //usamos cors

app.get('/api/ciudades', (req, res) => {
    res.json({response: ciudades});
})
app.listen(4000, () =>{console.log('Hello Server is running on port 4000')}); //escuchamos en el puerto 4000
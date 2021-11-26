    const ciudades =[
    {name: "Alberta", src: ("../Cities12/Alberta.jpg")},
    {name: "Buenos Aires", src: ("../Cities12/Baires.jpg")},
    {name: "Dublin", src: ("../Cities12/irlanda.jpg")},
    {name: "Jerusalen", src: ("../Cities12/jerusalen.jpg")},
    {name: "London", src: ("../Cities12/londres.jpg")},
    {name: "New York", src: ("../Cities12/newyork.jpg")},
    {name: "Amsterdam", src: ("../Cities12/paisesbajos.jpg")},
    {name: "Paris", src: ("../Cities12/paris.jpg")},
    {name: "Seoul", src: ("../Cities12/seul.jpg")},
    {name: "Sydney", src: ("../Cities12/sydney.jpg")},
    {name: "Toronto", src: ("../Cities12/toronto.jpg")},
    {name: "Dubai", src: ("../Cities12/dubai.jpg")},
    {name: "Sydney", src: ("../Cities12/sydney.jpg")},
    {name: "Bora-Bora", src: ("../Cities12/bora.jpg")},
    {name: "Tokio", src: ("../Cities12/tokio.jpg")},
]
const express = require('express'); 
const cors = require('cors');    //importamos cors
const app = express(); //creamos la aplicacion
app.use(cors()); //usamos cors

app.get('/api/ciudades', (req, res) => {
    res.json({response: {ciudades}});
})
app.listen(4000, () =>{console.log('Hello Server is running on port 4000')}); //escuchamos en el puerto 4000


import React, { useEffect, useState } from "react";

function TarjetaCiudad() {
    const [ciudades, setCiudades] = useState([]);
    useEffect(() => {
    fetch("http://localhost:400nod0/api/ciudades")
        .then((response) => response.json())
        .then((data) => setCiudades(data.response.ciudades))
        .catch((err) => console.error(err.message));
    }, []);
    return (
    <div className="cards">
           
        <h1>Cities</h1>
        <p>City Finder</p>
        {ciudades.map((ciudad) => (
        <h2> {ciudad} </h2>
        ))}

        
    </div>
    );
}

export default TarjetaCiudad;

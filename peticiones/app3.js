// Peticiones PUT y PATCH

// Solicitud 6 - Actualizar información con el metodo PUT
const SolicitudPUT = async (id) => {
    const update_completa = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT", // Actualizamos pero tenemos que indicar todos los atributos de cada objeto
        body: JSON.stringify({
            "id": `${id}`,
            "userId": 1,
            "title": "Nueva publicación del usuario 1",
            "body": "Aprendizaje en la creación de APIs"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    }); // Realizamos la petición y la guardamos en una constante

    // Convertimos el archivo para imprimirlo
    const data_update = await update_completa.json();
    console.log(data_update);
}

// Solicitud 7 - Actualizar información con el metodo PATCH
const SolicitudPATCH = async (id) => {
    const update_especifico = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH", // Nos permite actualizar definiendo unicamente un atributo
        body: JSON.stringify({
            "body": "Actualización con el metodo PATCH"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    }); // Realizamos la petición y la guardamos en una constante

    // Convertimos el archivo para imprimirlo
    const data_especifico = await update_especifico.json();
    console.log(data_especifico);
}

// Llamamos a la clase 
SolicitudPUT(1);
SolicitudPATCH(5);
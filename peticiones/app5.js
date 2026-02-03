// Peticiones GET para analizar respuestas

// Solicitud 9 - Get sobre un recurso eliminado
const SolicitudGET_error = async (id) => {
    const get_inexistente = await fetch(`http://localhost:3000/posts/${id}`); // Hacemos la petición de tipo GET sobre el ID, obtenemos el objeto
    const data_get = await get_inexistente.json();

    console.log(data_get);
}

// Solicitud 10 - GET sobre la db en general
const SolicitudGET = async () => {
    const db = await fetch(`http://localhost:3000/posts`);
    const data_db = await db.json();

    console.log("DB actual, luego de las peticiones")
    console.log(data_db);
}

// Llamamos a la función y entregamos como argumento el ID eliminado
// SolicitudGET_error(8);
SolicitudGET();


// OBSERVACIÓN PETICIÓN 9: En la consola de observo Not Found, significa que no se encontro lo que se estaba buscando, ademas que la N dice que la petición no recibio un archivo json 
// OBSERVACIÓN PETICIÓN 10: Se ven los cambios, todas las peticiones que hice tienen los cambios hechos por las peticiones, se ve en los IDs o mensajes que yo genere
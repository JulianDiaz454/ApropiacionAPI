// Petición DELETE, eliminar un objeto

// Solicitud 8 - Eliminar información con el metodo DELETE
const SolicitudDELETE = async (id) => {
    const eliminar_post = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE", // Este metodo elimina un objeto existente 
    })

    const data_eliminar = await eliminar_post.json(); 
    console.log(`Se elimino el post con el ID : ${id}\n ${data_eliminar}`);
}

// Llamamos a la función
SolicitudDELETE(8);
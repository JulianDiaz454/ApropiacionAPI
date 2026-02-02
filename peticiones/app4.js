// Petición DELETE, eliminar un objeto

// Solicitud 8 - Eliminar información con el metodo DELETE
const SolicitudDELETE = async (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE", // Este metodo elimina un objeto existente 
    })
}

SolicitudDELETE(8);
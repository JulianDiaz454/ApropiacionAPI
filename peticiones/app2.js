// Peticiones de tipo POST

// Solicitud 4 - Crear una nueva publicación
const SolicitudPOST = async () => {
    const nuevo_objeto = await fetch(`http://localhost:3000/posts`, {
        method: "POST", // Metodo de tipo POST
        body: JSON.stringify({
            "userId": 5,
            "title": "Nuevo post creado para el usuario 5",
            "body": "Post completo"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }) // Se genera la solicitud con dos argumentos, el fetch y el post

    const objeto_data = await nuevo_objeto.json()
    console.log(objeto_data);
}

// Solicitud 5 - Crear un nuevo comentario
const SolicitudPOST_comentario = async () => {
    const nuevo_comentario = await fetch(`http://localhost:3000/comments`, {
        method: "POST", // Metodo de tipo POST
        body: JSON.stringify({
            "postId": 6,
            "title": "Comentario 19 del post 6",
            "body": "Ejemplo de un nuevo post"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }) // Se genera la solicitud con dos argumentos, el fetch y el post

    const comentario_data = await nuevo_comentario.json()
    console.log(comentario_data);
}

SolicitudPOST();
SolicitudPOST_comentario();
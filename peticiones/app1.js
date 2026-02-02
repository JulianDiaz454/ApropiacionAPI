// Solución a la parte 1 del ejercicio

// Solicitud 1 - Petición para obtener la lista de todos los usuarios
const PeticionGET = async () => {
    const lista_usuarios = await fetch(`http://localhost:3000/users`) // Se especifica el endpoint de usuairios
    const lista_data = await lista_usuarios.json()

    console.log("Solicitud 1 - Lista de usuarios")
    console.log(lista_data)
}

// Solicitud 2 - Petición para consultar la información de un solo usuario 
const PeticionGET_user = async (id) => {
    const info_usuario = await fetch(`http://localhost:3000/users/${id}`) // Interpolamos con el argumento en el endpoint para encontrar el usuario
    const info_data = await info_usuario.json()

    console.log("Solicitud 2 - Información de un solo usuario")
    console.log(info_data);
}

// Solicitud 3 - Petición para obtener los POSTS de un solo usuario
const PeticionGET_post_user = async (id) => {
    const post_usuario = await fetch(`http://localhost:3000/posts/${id}`) // Interpolamos con el argumento en el endpoint para encontrar el usuario
    const post_data = await post_usuario.json()

    console.log("Solicitud 3 - Post de un solo usuario")
    console.log(post_data);
}


PeticionGET();
PeticionGET_user(10);
PeticionGET_post_user(6);
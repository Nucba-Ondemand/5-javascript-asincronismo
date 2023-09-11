const render = document.getElementById("render")

const peticion = async () => {
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/gengar")
        const data = await respuesta.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

const renderizarDatos = async () => {
    const datos = await peticion()
  //  render.innerHTML = datos.name

    render.innerHTML = `
        <h1>${datos.name}</h1>
        <h2>${datos.id}</h2>
        <img src="${datos.sprites.other.home.front_default}">
    `

}

renderizarDatos()
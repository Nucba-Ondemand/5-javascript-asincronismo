const llamadaGengar = async() => {
    const llamada = await fetch("https://pokeapi.co/api/v2/pokemon/gengar")
    const data = await llamada.json()
    return data
}

const llamadaCharizard = async() => {
    const llamada = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    const data = llamada.json()
    return data
}

const llamadaMagikarp = async() => {
    const llamada = await fetch("https://pokeapi.co/api/v2/pokemon/magikarp")
    const data = llamada.json()
    return data

}

const llamadaRegular = async()=> {
    const dataGengar = await llamadaGengar()
    const dataCharizard = await llamadaCharizard()
    const dataMagikarp = await llamadaMagikarp()

    console.log(dataGengar, dataCharizard, dataMagikarp);
}

const llamadaAll = async() => {
    const datos = await Promise.all([llamadaGengar(), llamadaCharizard(), 
        llamadaMagikarp()])
    console.log(datos);
}

//llamadaRegular();

llamadaAll();
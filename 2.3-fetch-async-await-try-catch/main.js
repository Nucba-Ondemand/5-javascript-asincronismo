//fetch

fetch("Lugar donde estamos realizando la peticion").then((res) => {
    "Codigo que maneja la respuesta"
    console.log(res);
}).catch((err) => {
    "Codigo que va a manejar este error"
    console.log(err);
})

// const miAsyncFunction = async() => {
//     const res = await fetch("Lugar donde estamos realizando la peticion")
//     console.log(res);
//     return res
// }

const miAsyncFunction = async () => {
    try {
        const res = await fetch("Lugar donde estamos realizando la peticion")
        console.log(res);
    } catch (error) {
        "Codigo en caso de error"
        console.log(error);
    }
}

console.log(miAsyncFunction());
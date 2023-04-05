const botonEnvio = document.getElementById("botonEnvio");
botonEnvio.addEventListener("click", () => {
    Swal.fire({
        title: "Gracias!",
        text: "A penas tenga un momento te contestaré",
        icon: "success",
        imageUrl: "https://placekitten.com/200/138",
        confirmButtonText: "Oki",
    }) 
})
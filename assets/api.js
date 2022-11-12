let dataBank = document.querySelector("#dataBank")
fetch("https://api.estadisticasbcra.com/usd", {
    headers: {
        Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTkwNjk0MTksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlbmRvY2tAaG90bWFpbC5jb20ifQ.ggDFgJR_-D7OfonB6KXzB17VYZNqIjsCj3oalPVomBD2F59GXZ97CsGfd24pC_HEARpeSOc5lgmXlGy-uFdrtg",
    },
})
.then((response) => response.json())
.then((data)=> {
    console.log(data)

    data.findLast((info) => {
        const contenido = document.createElement("div")
        contenido.innerHTML = `
        <li> A la fecha : ${info.d} el dolar oficial es de $${info.v}</li>
        `

        dataBank.append(contenido)
    })
})
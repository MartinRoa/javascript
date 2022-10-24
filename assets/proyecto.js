/* 
let nombre = prompt ("Bienvenido a Cervezeria Impronta Roja, ingresa tu nombre por favor.")

let edad = parseInt ( prompt ("Hola "+nombre+" ingresa tu edad por favor.", 0))
    while( isNaN( edad ) ){
    edad = parseInt ( prompt ("Hola "+nombre+" ingresa tu edad por favor.", 0))
}

if( edad >= 18){
    alert("Eres mayor de edad y puedes acceder al sitio.")
}else{
    alert("Eres menor de edad y no puedes acceder al sitio.")
}

alert("Ofrecemos 3 tipos de cervezas, elije segun su numero corresponda para saber su valor")

let rubia = 300

let roja = 350

let negra = 400

let cerveza = parseInt ( prompt ("1.Rubia 2.Roja 3.Negra"))

let imprime;

switch (cerveza) {
    case 1:
    imprime = "Has elegido la cerveza rubia y su valor de $"+ rubia +" muchas gracias."
    break;

    case 2:
    imprime = "Has elegido la cerveza roja y su valor de $"+ roja +" muchas gracias."
    break;

    case 3:
    imprime = "Has elegido la cerveza negra y su valor de $"+ negra +" muchas gracias."
    break;

    default:
        break;
}

alert(imprime); */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* let inicio = confirm(
    "Bienvenido a cervezeria Impronta Roja! ¿Eres mayor de 18 años?"
);
if (inicio == true) {
    alert("Excelente eres mayor de edad y puedes acceder al sitio!");
    class cliente {
      constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
      }
    }

    let nombreActual = prompt("Como te llamas?");
    let ciudadActual = prompt("Bienvenido " + nombreActual + ", de donde sos?");

    const productos = [
        { nombre: "rubia", precio: 300},
        { nombre: "roja", precio: 350},
        { nombre: "negra", precio: 400},
    ]

    let carrito = []

    alert(
        "Que tal " +
        nombreActual +
          " de " +
          ciudadActual +
          "\nA continuación tendras la posibilidad de comprar 3 tipos de cervezas: " + 
          "\nRubia, Roja o Negra " +
          "\nSolo debes responder algunas preguntas que te haremos para tener todo listo."
    );

    alert(
        "Bueno " + nombreActual + " ahora debes ingresar el número de la cerveza que quieras segun corresponda para saber su valor."
    );

    let seleccion = prompt("Para seguir a la siguiente seccion escribe si o no.")

    while (seleccion != "si" && seleccion != "no") {
        alert("Por favor ingresa si o no")
        seleccion = prompt("Deseas continuar si o no.")
    }

    if(seleccion == "si"){
        alert("A continuacion nuestra lista de productos:")
        let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
        alert(todoslosProductos.join(" - "))
    } else if (seleccion == "no"){
        alert("Muchas gracias" + nombreActual + "vuelva pronto.")
    }

    while (seleccion != "no"){
        let producto= prompt("Agrega un producto a tu carrito escribiendo exactamente el nombre ya sea: rubia, roja o negra")
        let precio = 0

        if(producto == "rubia" || producto == "roja" || producto == "negra"){
            switch (producto) {
                case "rubia":
                    precio = 300
                    break;
                case "roja":
                    precio = 350
                    break;
                case "negra":
                    precio = 400
                    break;
                default:
                    break;
            }

        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
        } else {
            alert("No tenemos ese producto.")
        }

        seleccion = prompt("¿Desea seguir comprando?")
        while (seleccion == "no") {
            alert("Gracias por la compra, hasta pronto!")
            carrito.forEach((carritoFinal) => {
                console.log(`Producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}.`)
            })
        break;
        }
    }
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El total a pagar por su compra es: ${total}, muchas gracias!`)

}else{
    alert("Eres menor de edad y no puedes acceder al sitio.");
}
 */
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content)

    let comprar = document.createElement("button");
    comprar.innerText = "comprar"
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
        `;

        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
});
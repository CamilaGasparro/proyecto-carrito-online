const CAR_PRODUCT0s = "cartProductsId"; //SIRVE PARA GUARDAR O ABRIR ELEMENTOS DEL LOCAL STORAGE

//funcion que dentro va a tener las funciones que se ejecutaran cuando la pagina ya se haya cargado por completo
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

//SACAR TODOS LOS PRODUCTOS DEL JSON CON UN FETCH
function getProductsDb() {
    const url="../dbProductos.json";

    return fetch(url)
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result);
        return result;
    })
    .catch(err => {
        console.log(err);
    });
}


async function loadProducts() {
    const products = await getProductsDb();
    console.log(products);
    let html = '' ;
    products.forEach(product => {
        console.log(product);
        html += `
            <div class="col-3 product-container">
                <div class="card product>
                    <img 
                        src="${product.image}"
                        class="card-img-top"
                        alt="${product.name}"
                    />
                    <div class="card-body>
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.extraInfo}</p>
                        <p class="card-text">${product.price} € / Unidad</p>
                        <button type="button" class="btn btn-primary btn-cart">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    document.getElementsByClassName("products")[0].innerHTML = html;
}


let productId;

getParams();

let singleItem = JSON.parse(loadData(productId))

let singleProductSection = document.getElementById("product-details");
    
const singleProduct = `
    <div id="product-img" class="w-50">
    <img src=${singleItem.img} alt="">
    </div>
    <div id="product-info" class="w-50">
        <h3>${singleItem.name}</h3>
        <p>${singleItem.desc}</p>
        <div id="lenses-all-buttons"></div>
        <div class="row">
            <div class="col">
                <p>${singleItem.price} €</p>
            </div>
            <div class="col">
                <button type="button" class="btn btn-dark" onclick="updateQuantity('${productId}');">Ajouter au panier</button>
                <input id="${productId}" type="number" min="0" max="10" step="1" value="${singleItem.quantity}">
            </div>
        </div>
    </div>
    `;

singleProductSection.insertAdjacentHTML('afterbegin', singleProduct); 

singleItem.lenses.forEach(element => {

    const lenseButton = `
        <button>${element}</button>
    `
    
    document.getElementById("lenses-all-buttons").innerHTML += lenseButton
});
let productId;
let checkedButton;
let itemsInCart = [];
let lensesAllButtons;
let buttonIsChecked;
let newItemInCart;

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
                <input id="${productId}" type="number" min="0" max="10" step="1">
                <button type="button" class="btn btn-dark" onclick="addToCart();">Ajouter au panier</button>
            </div>
        </div>
    </div>
    `;

singleProductSection.insertAdjacentHTML('afterbegin', singleProduct); 

singleItem.lenses.forEach(element => {
    const lenseButton = `
        <input id="${element}" type="radio" name="lense" checked>${element}</button>
    `;
    lensesAllButtons = document.getElementById("lenses-all-buttons");
    lensesAllButtons.innerHTML += lenseButton;
});



// function updateCartItem() {
//     itemsInCart = JSON.parse(loadData("myCart"));
//     itemsInCart.forEach( item => {
//         if (item.id === productId && item.lense === buttonIsChecked) {
//             item.quantity = document.getElementById(productId).value;
//         }
//     })
// }

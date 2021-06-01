let productId;
let checkedButton;
let itemsInCart = [];
let lensesAllButtons;
let buttonIsChecked;
let newItemInCart;
let singleItemQuantity;
let itemName;
let itemPrice;

getParams();

fetch("http://localhost:3000/api/cameras").then(function(response) {
    console.log(response)
    return response.json();
}).then(function(obj) {
    
    for (let i = 0; i < obj.length; i++) {

        if (obj[i]._id === productId) {
            
            let singleProductSection = document.getElementById("product-details");
    
            const singleProduct = `
                <div id="product-img" class="w-50">
                <img src=${obj[i].imageUrl} alt="">
                </div>
                <div id="product-info" class="w-50">
                    <h3>${obj[i].name}</h3>
                    <p>${obj[i].description}</p>
                    <div id="lenses-all-buttons"></div>
                    <div class="row">
                        <div class="col">
                            <p>${obj[i].price} €</p>
                        </div>
                        <div class="col">
                            <input id="${productId}" value="0" type="number" min="0" max="10" step="1">
                            <button type="button" class="btn btn-dark" onclick="addToCart();">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
                `;
            
            singleProductSection.insertAdjacentHTML('afterbegin', singleProduct);
            
            obj[i].lenses.forEach(element => {
                const lenseButton = `
                    <input id="${element}" type="radio" name="lense" onclick="getCurrentItemQuantity('${element}');">${element}</button>
                `;
                lensesAllButtons = document.getElementById("lenses-all-buttons");
                lensesAllButtons.innerHTML += lenseButton;
            });

        itemName = obj[i].name;
        itemPrice = obj[i].price;

        }

    }

}).catch(function (error) {
    console.error('Something went wrong!')
})


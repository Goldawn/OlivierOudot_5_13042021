let checkoutProductList = document.getElementById("checkout-product-list");
let totalPrice = 0;


let myCartItems = JSON.parse(loadData("myCart"))

function displayCheckout() {
    myCartItems.forEach( (item, index) => {
        if (item.quantity != 0) {
            
            const checkoutCard = `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">${item.name} - lense: ${item.lense}</h6>
                    <input id="${index}" type="number" value="${item.quantity}" min="0" max="10" step="1">
                    <button type="button" class="btn btn-dark" onclick="getQuantityFromInput(${index});updateQuantity('${item.id}', '${item.lense}', '${index}');">Mettre à jour le panier</button>
                    <div class="btn btn-dark" onclick="removeQuantity('${item.id}', '${item.lense}');"><p>X</p></div>
                </div>
                <span class="text-muted">${item.price} €</span>
            </li>
            `;
            
        checkoutProductList.innerHTML += checkoutCard;
        }
    
        totalPrice += Number(item.quantity*item.price);
    })

    document.getElementById("total-quantity").innerHTML = totalQuantity;
    
    checkoutProductList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>${totalPrice} €</strong>
        </li>
        `;
}

displayCheckout();

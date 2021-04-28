function saveData(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        alert("Web Storage is not supported");
    }
}

function loadData(key) {
    if (localStorage) {
        if (key in localStorage) {
            return localStorage.getItem(key);
        }
    } else {
        alert("Web Storage is not supported");
    }
}

function setQuantity() {
    saveData(productId, document.getElementById(productId).value);
    refresh();
}

function updateQuantity(productId) {
    saveData(productId, document.getElementById(productId).value);
}

function refresh() {
    if (loadData(productId)) {
        let itemQuantity = loadData(productId);
        document.getElementById(productId).setAttribute("value", itemQuantity);
    }
}

function updateCheckout(e) {
    fetch("http://localhost:3000/api/cameras")
        .then(response => response.json())
        .then(function (arrayProductDetails) {
            
            let checkoutProductList = document.getElementById("checkout-product-list");
            let totalQuantity = 0;
            let totalPrice = 0;
            checkoutProductList.innerHTML = "";
    
            arrayProductDetails.forEach( ({name, _id, price}) => {
                if (localStorage.getItem(_id) != 0) {

                    totalQuantity = totalQuantity + Number(localStorage.getItem(_id));
                    totalPrice = totalPrice + Number(localStorage.getItem(_id))*price;
                    
                    const checkoutCard = `           
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${name}</h6>
                            <input id="${_id}" type="number" value="${localStorage.getItem(_id)}" min="0" max="10" step="1" onchange="updateQuantity('${_id}'); updateCheckout('${_id}');">
                            <div onclick="removeQuantity('${_id}');"><p>X</p></div> 
                        </div>
                        <span class="text-muted">${price} €</span>
                    </li>
                    `;
                    checkoutProductList.innerHTML += checkoutCard;
                }
            });

            // for (let i = 0; i < obj.length; i++) {
                
            //     const {name, _id, price} = obj[i];
                        
            //     if (localStorage.getItem(_id) != 0) {

            //         totalQuantity = totalQuantity + Number(localStorage.getItem(_id));
            //         totalPrice = totalPrice + Number(localStorage.getItem(_id))*price;
                    
            //         const checkoutCard = `           
            //         <li class="list-group-item d-flex justify-content-between lh-sm">
            //             <div>
            //                 <h6 class="my-0">${name}</h6>
            //                 <input id="${_id}" type="number" value="${localStorage.getItem(_id)}" min="0" max="10" step="1" onchange="updateQuantity('${_id}'); updateCheckout('${_id}');">
            //                 <div onclick="removeQuantity('${_id}');"><p>X</p></div> 
            //             </div>
            //             <span class="text-muted">${price} €</span>
            //         </li>
            //         `;
            //         checkoutProductList.innerHTML += checkoutCard;
            //     }
            // }
            checkoutProductList.innerHTML += `
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>${totalPrice} €</strong>
                </li>
                `
                
            document.getElementById("total-quantity").innerHTML=totalQuantity;
            return totalPrice;

        }).catch(function (error) {
            console.error('Something went wrong!');
        })
}

function removeQuantity(productId) {
    saveData(productId, 0);
    updateCheckout();
}

// webpack
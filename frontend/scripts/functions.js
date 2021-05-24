function getParams() {
    let currentUrl = window.location.search;
    let searchParams = new URLSearchParams(currentUrl);
    productId = searchParams.get("id");
}

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

function lenseIsChecked() {
    for (let i = 0; i < lensesAllButtons.children.length; i++) {
        if ( lensesAllButtons.children[i].checked === true) {
            buttonIsChecked = lensesAllButtons.children[i].id;
            return buttonIsChecked;
        }
    }
}

function generateCartItem() {
    newItemInCart = {
        name:singleItem.name,
        lense:buttonIsChecked,
        quantity: document.getElementById(productId).value,
        price:singleItem.price,
        id:productId
    }
}

function addToCart() {
    lenseIsChecked();
    if (buttonIsChecked){
        if (loadData("myCart")){
        
            itemsInCart = JSON.parse(loadData("myCart"));        
    
            const itemExists = itemsInCart.filter( item => item.id === productId && item.lense === buttonIsChecked)
            
            if (itemExists.length > 0){
    
                itemExists[0].quantity = document.getElementById(productId).value;
                const allOtherCartItems = itemsInCart.filter(item => !(item.id === productId && item.lense === buttonIsChecked))
                itemsInCart = [];
                allOtherCartItems.forEach(item => itemsInCart.push(item));
                itemsInCart.push(itemExists[0]);
                saveData("myCart", JSON.stringify(itemsInCart))
            }
            else {
                generateCartItem();
                itemsInCart.push(newItemInCart);
                saveData("myCart", JSON.stringify(itemsInCart))       
            }
    
        } else {
            generateCartItem();
            itemsInCart.push(newItemInCart);
            saveData("myCart", JSON.stringify(itemsInCart))
        }
        location.reload();
        
    }
    else {
        window.alert("Veillez choisir une taille de lentille pour ajouter ce produit à votre panier")
    }
}

function getCurrentItemQuantity(lense) {
    
    if (localStorage) {
        if (loadData("myCart")){
            let myCartItems = JSON.parse(loadData("myCart"))
            const item = myCartItems.filter(elem => elem.id === productId && elem.lense === lense)
            if( item.length > 0) {
                document.getElementById(productId).value = item[0].quantity;
            }
            else {
                document.getElementById(productId).value = 0;
            }
        }
        else{
            document.getElementById(productId).value = 0;
        }
    }
}

function getQuantityFromInput(inputId) {
    const inputValue = document.getElementById(inputId).value;
    return inputValue;
}

function updateQuantity(itemId, itemLense, inputId) {
    const inputValue=getQuantityFromInput(inputId);
    itemsInCart = JSON.parse(loadData("myCart"));
    itemsInCart.forEach( item => {
        if (item.id == itemId && item.lense == itemLense) {
            item.quantity = inputValue;
            saveData("myCart", JSON.stringify(itemsInCart))
        }
    })
    location.reload();
}

function removeQuantity(itemId, itemLense) {
    itemsInCart = JSON.parse(loadData("myCart"));
    itemsInCart.forEach( item => {
        if (item.id == itemId && item.lense == itemLense) {
            item.quantity = 0;
            saveData("myCart", JSON.stringify(itemsInCart))
        }
    })
    location.reload();
}

function getTotalQuantity() {
    if (loadData("myCart")){
        let myCartItems = JSON.parse(loadData("myCart"));
        myCartItems.forEach(item => {
            totalQuantity += Number(item.quantity);
        })
    }
}
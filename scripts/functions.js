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

function refresh() {
    if (loadData(productId)) {
        let itemQuantity = loadData(productId);
        document.getElementById(productId).setAttribute("value", itemQuantity);
    }
}

function lenseIsChecked() {
    for (let i = 0; i < lensesAllButtons.children.length; i++) {
        if ( lensesAllButtons.children[i].checked === true) {
            buttonIsChecked = lensesAllButtons.children[i].id;
            // console.log(lensesAllButtons.children[i].id)
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
    if (loadData("myCart")){
        
        itemsInCart = JSON.parse(loadData("myCart"));
        console.log(itemsInCart)
        

        const itemExists = itemsInCart.filter( item => item.id === productId && item.lense === buttonIsChecked)
        console.log(itemExists)
        
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

function getCurrentItemQuantity(lense) {
    lenseIsChecked();
    console.log("in function")
    
    if (localStorage) {
        if (loadData("myCart")){
            let myCartItems = JSON.parse(loadData("myCart"))
            
            myCartItems.forEach( item => {
                if (item.id === productId && item.lense === lense) {
                    console.log("item.quantity -> " + item.quantity)
                    document.getElementById(productId).value = item.quantity;
                }
                else {
                    document.getElementById(productId).value = 0;
                }
            })
        }
        else{
            document.getElementById(productId).value = 0;
        }
    }
}

function getQuantityFromInput(inputId) {
    const inputValue = document.getElementById(inputId).value;
    console.log(inputValue);
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
    // displayCheckout();
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
    // displayCheckout();
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

// function addToCart(list, item, variation, quantity) {
//     const existItem = list.some(element => {
//         return (element.id == item.id)

//     });
//     if (existItem) {
//         const itemFromLocalStorage = list.find(e => {
//             return (e.id == item.id)
//         });
//         const existVariant = itemFromLocalStorage.variants.some(element => {
//             return (element.id == variation)
//         })
//             const newItem = {
//                 id: variation,
//                 quantity: quantity
//             }
//             let listModified = [];
//             if (existVariant) {
//                 listModified = itemFromLocalStorage.variants.filter(element => {
//                     return (element.id !== variation)
//                 });
//                 console.log(listModified)
//             } else {
//                 listModified = list;
//             }

//             listModified.push(newItem)
//             itemFromLocalStorage.variants = listModified;
//             const newList = list.filter(element => {
//                 return (element.id !== item.id)
//             });
//             newList.push(itemFromLocalStorage)
//             return newList;
//     } else {
//         const newItem = {
//             id: item.id,
//             name: item.name,
//             price: item.price,
//             description: item.description,
//             imageUrl: item.imageUrl,
//             variants: [{
//                 id: variation,
//                 quantity: quantity
//             }]
//         }
//         list.push(newItem)
//         return list
//     }
// }

// function handleAddToCart() {
//     const newCart = addToCart(JSON.parse(loadData("myCart")), singleItem, "test", (document.getElementById(productId).value))
//     saveData("myCart", JSON.stringify(newCart));
// }




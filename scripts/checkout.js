let response;
let totalQuantity = 0;
let productId;
let totalPrice = 0;

// fetch("http://localhost:3000/api/cameras").then(function(response) {
//     return response.json();
// }).then(function (obj) {
    
//     let checkoutProductList = document.getElementById("checkout-product-list");
    
//     for (let i = 0; i < obj.length; i++) {
//         console.log(obj[i]._id)
//         console.log(localStorage.getItem(obj[i]._id))
                
//         if (localStorage.getItem(obj[i]._id) != 0) {

//             totalQuantity = totalQuantity + Number(localStorage.getItem(obj[i]._id));
//             totalPrice = totalPrice + Number(localStorage.getItem(obj[i]._id))*obj[i].price;
            
//             const checkoutCard = `           
//             <li class="list-group-item d-flex justify-content-between lh-sm">
//                 <div>
//                     <h6 class="my-0">${obj[i].name}</h6>
//                     <input id="${obj[i]._id}" type="number" value="${localStorage.getItem(obj[i]._id)}" min="0" max="10" step="1" onchange="updateQuantity(this.id); updateCheckout(this.id);">
//                     <div id="${obj[i]._id}" onclick="removeQuantity(this.id);"><p>X</p></div> 
//                 </div>
//                 <span class="text-muted">${obj[i].price} €</span>
//             </li>
//             `;
//             checkoutProductList.innerHTML += checkoutCard;
//         }
//     }
//     checkoutProductList.innerHTML += `
//         <li class="list-group-item d-flex justify-content-between">
//             <span>Total</span>
//             <strong>${totalPrice} €</strong>
//         </li>
//         `
        
//     document.getElementById("total-quantity").innerHTML=totalQuantity;

// }).catch(function (error) {
//     console.error('Something went wrong!');
// })

updateCheckout();
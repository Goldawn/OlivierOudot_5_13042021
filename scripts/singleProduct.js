
// function getParams() {
    let currentUrl= window.location.search;
    let searchParams = new URLSearchParams(currentUrl);
    let productId = searchParams.get("id");
// }



let response;

fetch("http://localhost:3000/api/cameras").then(function(response) {
    return response.json();
}).then(function (obj) {
    console.log(obj)

    for (let i = 0; i < obj.length; i++) {
        if (obj[i]._id==productId){
            
            let singleProductSection = document.getElementById("product-details");
            
            const singleProduct = `
            <div id="product-img" class="w-50">
            <img src=${obj[i].imageUrl} alt="">
            </div>
            <div id="product-info" class="w-50">
                <h3>${obj[i].name}</h3>
                <p>${obj[i].description}</p>
                <div class="row">
                    <div class="col">
                        <p>${obj[i].price} €</p>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-dark">Ajouter au panier</button>
                        <input id="${obj[i]._id}" type="number" min="0" max="10" step="1" onchange="setQuantity();">
                    </div>
                </div>
            </div>
        `;
        
        singleProductSection.insertAdjacentHTML('afterbegin', singleProduct);
        }
    }
     
}).then(function() {
    refresh();
}).catch(function (error) {
    console.error('Something went wrong!')
})
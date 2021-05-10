let response;
let itemsIdList = [];
// localStorage.clear();


fetch("http://localhost:3000/api/cameras").then(function(response) {
    return response.json();
}).then(function (obj) {
    let productSection = document.getElementById("liste-produits");
    
    for (let i = 0; i < obj.length; i++) {
       
        const productCard = `           
            <div class="card col-sm-12 col-md-6 col-lg-4 " style="width: 18rem;">
                <img src=${obj[i].imageUrl} class="card-img-top border border-bottom-0" alt="...">
                <div class="card-body border border-top-0">
                    <h5 class="card-title">${obj[i].name}</h5>
                    <p class="card-text">${obj[i].price} €</p>
                    <p class="card-text">${obj[i].description}</p>
                    <a href="single.html?id=${obj[i]._id}" class="btn btn-primary">Voir plus</a>
                </div>
            </div>
        `;
        
        if (!loadData(obj[i]._id)) {
            
            let newCamera = JSON.stringify({
                lenses:obj[i].lenses,
                name:obj[i].name,
                price:obj[i].price,
                desc:obj[i].description,
                img:obj[i].imageUrl,
                id:obj[i]._id
            })
            

            saveData(obj[i]._id, newCamera);
            
        }
        
        productSection.innerHTML += productCard;
        
    }

}).catch(function (error) {
    console.error('Something went wrong!')
})

let myCheckoutForm = JSON.parse(loadData("formData"))
let myCartItems = JSON.parse(loadData("myCart"))
let totalPrice = 0;

function displayRecap() {
    
    const recapText = `
        <p class="font-weight-normal">Bonjour ${myCheckoutForm.firstname},</p>
        <p class=" py-4">Nous avons bien enregistré votre commande <span
                class="font-weight-normal">n° ${myCheckoutForm.id}</span>
            et nous vous remercions pour cet achat.</p>
        <p class=" font-weight-normal">Récapitulatif de votre commande</p>
    `;
    document.getElementById("recap-text").innerHTML += recapText;
    
    myCartItems.forEach( (item, index) => {
        
        if (item.quantity != 0) {
            
            const recapTable = `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${item.name}</td>
                    <td>${item.lense}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price} €</td>
                </tr>
            `;  
            document.getElementById("recap-table").innerHTML += recapTable;
        }
        totalPrice += Number(item.quantity*item.price);
    })
    
    document.getElementById("recap-table").innerHTML += `
        <tr>
            <th scope="row">Total</th>
            <td></td>
            <td></td>
            <td></td>
            <td>${totalPrice} €</td>
        </tr>
    `;
}

displayRecap();

// vider le panier
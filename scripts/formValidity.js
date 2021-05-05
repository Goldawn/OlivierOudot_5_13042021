let checkoutFormInputs = document.getElementsByClassName("form-control")



let formValidation = document.getElementById("validate-form");
let firstname = document.getElementById("firstname");
let invalidFirstname=document.getElementById("invalid-firstname");
let firstnameRegExp = /^[A-Z][A-Za-z\é\è\ê\-]+$/;

formValidation.addEventListener('click', validation)

function validation(event) {

    // checkoutFormInputs.forEach( input => {
    //     if (input.validity.valueMissing){
    //         event.preventDefault();
    //         // document.getElementById().textContent = "Ce champ est requis pour continuer";
    //     }
    // })
    
    if (firstname.validity.valueMissing){
        event.preventDefault();
        invalidFirstname.textContent = "Ce champ est requis pour continuer";
    }
    else if (firstnameRegExp.test(firstname.value) == false) {
        event.preventDefault();
        invalidFirstname.textContent = "Ce prénom n'est pas valide";
    }
}
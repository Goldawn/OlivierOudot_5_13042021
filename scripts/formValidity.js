(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

(function () {
    "use strict";

    var checkoutForm = document.getElementById("checkout-form");
    
    checkoutForm.addEventListener("submit",
            function (event) {
                if (checkoutForm.checkValidity()) {
                    
                    let formDataObject = {};

                    let formInputs = checkoutForm.querySelectorAll("input");
                    formInputs.forEach(input => {
                        formDataObject={
                            ...formDataObject,
                            ...(input.value && {
                                [input.id]:input.value
                            })
                        }
                        const orderId = generateUniqueId();
                        formDataObject={
                            ...formDataObject,
                            id:orderId
                        }
                    })
                    saveData("formData", JSON.stringify(formDataObject))
                    event.preventDefault();
                    window.location.replace("recap.html")
                }
            },
            false
        );
})();

function generateUniqueId() {
    var now = new Date();
    uniqueId = now.getFullYear().toString();
    uniqueId += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString();
    uniqueId += ((now.getDate < 10) ? '0' : '') + now.getDate().toString();
    uniqueId += ((now.getHours < 10) ? '0' : '') + now.getHours().toString();
    uniqueId += ((now.getMinutes < 10) ? '0' : '') + now.getMinutes().toString();
    uniqueId += ((now.getSeconds < 10) ? '0' : '') + now.getSeconds().toString();
    uniqueId += ((now.getMilliseconds < 10) ? '0' : '') + now.getMilliseconds().toString();
    return uniqueId;
}
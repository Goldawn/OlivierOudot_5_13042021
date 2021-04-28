function saveData(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
        // console.log(key, value);
    } else {
        alert("Web Storage is not supported");
    }
}

function loadData(key) {
    if (localStorage) {
        if (key in localStorage) {
            // console.log(localStorage.getItem(key));
            return localStorage.getItem(key);
        }
    } else {
        alert("Web Storage is not supported");
    }
}

function setQuantity() {
    // event.preventDefault();
    saveData("itemQuantity", document.getElementById("quantity").value);
    refresh();
}

function refresh() {
    // console.log("hey");
    if (loadData("itemQuantity")) {
        let itemQuantity = loadData("itemQuantity");
        document.getElementById("quantity").setAttribute("value", itemQuantity);
    }
}
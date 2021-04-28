function getParams() {
    let currentUrl= window.location.search;
    let searchParams = new URLSearchParams(currentUrl);
    let productId = searchParams.get("id");
}
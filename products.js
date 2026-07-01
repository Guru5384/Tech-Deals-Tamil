// =========================================
// TECH DEALS TAMIL
// Product Loader
// =========================================

let allProducts = [];

// Load Products

async function loadProducts(){

    try{

        const response = await fetch("data/products.json");

        allProducts = await response.json();

        showFeatured();

        showLatest();

    }

    catch(error){

        console.error("Products Not Loaded", error);

    }

}

loadProducts();

// =========================================
// Featured Products
// =========================================

function showFeatured(){

    const container =
    document.getElementById("featuredProducts");

    if(!container) return;

    container.innerHTML = "";

    allProducts
    .slice(0,4)
    .forEach(product=>{

        container.innerHTML += createCard(product);

    });

}

// =========================================
// Latest Products
// =========================================

function showLatest(){

    const container =
    document.getElementById("latestProducts");

    if(!container) return;

    container.innerHTML = "";

    allProducts
    .forEach(product=>{

        container.innerHTML += createCard(product);

    });

}
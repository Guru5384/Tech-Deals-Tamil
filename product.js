// =====================================
// Product Page
// Tech Deals Tamil
// =====================================

// URL Parameter

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

// Load Product

async function loadProduct(){

    const response =
    await fetch("data/products.json");

    const products =
    await response.json();

    const product =
    products.find(item => item.id === productId);

    if(!product){

        document.body.innerHTML =

        "<h1 style='text-align:center;margin-top:100px;'>Product Not Found</h1>";

        return;

    }

    document.title = product.name;

    document.getElementById("productName").textContent =
    product.name;

    document.getElementById("productPrice").textContent =
    product.price;

    document.getElementById("searchCode").textContent =
    product.searchCode;

    document.getElementById("productBadge").textContent =
    product.badge;

    document.getElementById("productImage").src =
    product.image;

    document.getElementById("buyButton").href =
    product.affiliateLink;
        // Features

    const featureList =
    document.getElementById("featureList");

    featureList.innerHTML = "";

    product.features.forEach(feature=>{

        featureList.innerHTML +=
        `<li>✅ ${feature}</li>`;

    });

    // Related Products

    const related =
    document.getElementById("relatedProducts");

    if(related){

        products
        .filter(item =>
            item.category === product.category &&
            item.id !== product.id
        )
        .slice(0,4)
        .forEach(item=>{

            related.innerHTML += `

            <div class="product-card">

                <img src="${item.image}">

                <div class="product-info">

                    <h3>${item.name}</h3>

                    <div class="price">

                        ${item.price}

                    </div>

                    <a
                    class="buy-btn"
                    href="product.html?id=${item.id}">

                    View Details

                    </a>

                </div>

            </div>

            `;

        });

    }

}

loadProduct();
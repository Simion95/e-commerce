let individualProductData = async (productId) => {
  
        let response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        let productData = await response.json();
        return productData;
 
};

let displayProductDetails = async (productId) => {
    let productData = await individualProductData(productId);
    if (productData) {
        let productContainer = document.createElement('div');
        productContainer.classList.add('product-card-container');
        productContainer.style.cssText = "height: 480px; margin-top: 20px;";


        let titleElement = document.createElement('h2');
        titleElement.textContent = productData.title;
        titleElement.classList.add("product-card-title")

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = productData.description;
        descriptionElement.classList.add("product-card-description")
        
        let priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${productData.price}`;
        priceElement.classList.add("product-card-price")
        
        let imageElement = document.createElement('img');
        imageElement.classList.add("product-card-image")
        imageElement.src = productData.image;
        imageElement.style.cssText = "width: 350px; height: 350px; margin-left: 25px;";

        productContainer.appendChild(titleElement);
        productContainer.appendChild(priceElement);
        productContainer.appendChild(descriptionElement);
        productContainer.appendChild(imageElement);

        document.body.appendChild(productContainer);
    }
};

displayProductDetails(1);


let mainTitle = document.querySelector(".main-title");
mainTitle.style.cursor = "pointer";
mainTitle.addEventListener("click", () => {
    location.href = "./index.html";
});

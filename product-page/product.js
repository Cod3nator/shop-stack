const currentUser = localStorage.getItem('currUser');



function renderProduct(product) {

    // ga_view_item(product.price, product.id, product.title, product.category);
  if (product) {
    const productContainer = document.querySelector(".product");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    productContainer.append(img);

    const title = document.createElement("h1");
    title.textContent = product.title;
    productContainer.append(title);

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = product.description;
    productContainer.append(description);

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${product.price}`;
    productContainer.append(price);

    const category = document.createElement("p");
    category.className = "category";
    category.textContent = `Category: ${product.category}`;
    productContainer.append(category);

    const rating = document.createElement("p");
    rating.className = "rating";
    rating.textContent = `Rating: ${product.rating.rate} (based on ${product.rating.count} reviews)`;
    productContainer.append(rating);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add("add-to-cart"); // Add a class to the button  addcartbtn2
    addToCartButton.classList.add("addcartbtn2"); 
    addToCartButton.addEventListener("click", () => {
      addToCart(product.id);

    });
    productContainer.append(addToCartButton);
    
  } else {
    console.log("Product not found");
  }
}

renderProduct(JSON.parse(localStorage.getItem('selectedProduct')));

function addToCart(id) {
  const cartKey = `cart_${currentUser.email}`;
  let item;
  
  const itemArr = JSON.parse(localStorage.getItem('itemArr')) || [];
  itemArr.forEach((ele) => {
    if (ele.id == id) {
      item = ele;
    }
  });

  if (item) {
    let cartArr = JSON.parse(localStorage.getItem(cartKey)) || [];

    cartArr.push(item);

    localStorage.setItem(cartKey, JSON.stringify(cartArr));

    // console.log(JSON.parse(localStorage.getItem(cartKey)));

    // ga_add_to_cart(item.price, item.id, item.title, item.category);
  } else {
    console.log("Item not found in itemArr");
  }




}



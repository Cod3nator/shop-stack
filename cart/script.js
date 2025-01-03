
if(!localStorage.getItem('currUser')){
    location.href='../login/index.html';
}
const currentUser = localStorage.getItem('currUser')
const itemContainer = document.querySelector('.items');
const listContainer = document.querySelector('.list-container');
const totalPrice = document.getElementById('total-price');
var cartItem=[];
const cartKey = `cart_user}`;

// window.addEventListener('load',function(){
//   function ga_checkout_process(products) {
//     gtag("event", "begin_checkout", {
//       currency: "INR",
//       value: products.reduce((acc, product) => acc + product.price, 0),
//       coupon: "no-coupon",
//       items: [
//         products.map((product) => ({
//           item_id: product.id,
//           item_name: product.title,
//           item_brand: product.category,
//           item_category: product.category,
//           price: product.price,
//           quantity: 1,
//         })),
//       ],
//     });
//   }
//   ga_checkout_process(cartItem);
// })
if(localStorage.getItem(cartKey)){

    let myArr =JSON.parse(localStorage.getItem(cartKey));

    cartItem=myArr;

    showCartItem(cartItem);
    
    
}
else{
    totalPrice.innerHTML='0';
}



function showCartItem(Arr){
    itemContainer.innerHTML='';
    listContainer.innerHTML='';

    if(cartItem.length==0){
        itemContainer.innerHTML=`
        <h3 style='text-align: center;;'>No products found in Cart</h3>
        `;
        console.log(totalPrice);
        totalPrice.innerHTML='0';
    }



    Arr.forEach((ele,index)=>{
        itemContainer.innerHTML+=`
        <div class="item">
        <img src="${ele.image}" alt="Item" />
        <div class="info">
          <div style="margin-bottom: 10px; font-weight:600">${ele.title}</div>
          <div style="font-weight:bold" class="row">
            <div class="price">$${ele.price}</div>
          </div>
          <div style='margin-top:10px;' class="row">Rating: ${Math.floor(ele.rating.rate)}</div>
        </div>
        <button id="addBtn" onClick='removeFromCart(${ele.id})'>Remove From Cart</button>
      </div>
        `;

        listContainer.innerHTML+=`
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; gap:20px">
         <div><strong>${index+1}.<strong>  ${ele.title}</div>
         <div>$${ele.price}</div>
        </div>
        `


    })

    totalPrice.innerHTML=totalPriceFunc();


}

function removeFromCart(id){
    console.log("remove");
    let itemToRemove;
    let indexToRemove;
    cartItem.forEach((item,index)=>{
        if(item.id==id){
            itemToRemove=item;
            indexToRemove=index;
        }
    })
    console.log(itemToRemove);
    cartItem.splice(indexToRemove,1);

    localStorage.setItem('cartArr',JSON.stringify(cartItem));
    
    showCartItem(cartItem);
}

if(cartItem.length==0){
    itemContainer.innerHTML=`
    <h3 style='text-align: center;;'>No products found in the Cart</h3>
    `;
}

function totalPriceFunc(){
    return cartItem.reduce((acc,item)=>{
        return acc+item.price;
    },0)
}

// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button

document.getElementById("rzp-button1").onclick = function (e) {
    ga_add_payment_info(cartItem)
    var options = {
      key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
      amount: totalPriceFunc() * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#000",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    localStorage.removeItem('cartArr');

    cartItem=[];

    showCartItem(cartItem);

  };
  






  function getAllLinks(){
    const link_clicks = document.querySelectorAll('a');
    link_clicks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        
        ga_page_view(link.href);
      });
    });
  }
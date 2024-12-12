const ga_id = "G-V9GTEX5QS1";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
function ga_add_to_cart(price, id, name, category) {
  // gtag("event", "add_to_cart", {
  //   currency: "INR",
  //   value: price,
  //   item_id: id,
  //   item_name: name,
  //   item_category: category,
  //   // items: [
  //   //   {
  //   //     item_id: "SKU_12345",
  //   //     item_name: "Stan and Friends Tee",
  //   //     affiliation: "Google Merchandise Store",
  //   //     coupon: "SUMMER_FUN",
  //   //     discount: 2.22,
  //   //     index: 0,
  //   //     item_brand: "Google",
  //   //     item_category: "Apparel",
  //   //     item_category2: "Adult",
  //   //     item_category3: "Shirts",
  //   //     item_category4: "Crew",
  //   //     item_category5: "Short sleeve",
  //   //     item_list_id: "related_products",
  //   //     item_list_name: "Related Products",
  //   //     item_variant: "green",
  //   //     location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
  //   //     price: 10.01,
  //   //     quantity: 3
  //   //   }
  //   // ]
  // });
}

function ga_view_item(price, id, name, category) {
  console.log("view item");

  // gtag("event", "view_item", {
  //   currency: "INR",
  //   value: price,
  //   item_id: id,
  //   item_name: name,
  //   item_category: category,
  // });
}
function ga_view_item_list(id = 1, category, products) {
  console.log(products);

  if (!Array.isArray(products)) {
    console.error("Products is not an array or is undefined");
    return;
  }

  console.log("view_item_list");
  // gtag("event", "view_item_list", {
  //   item_list_id: id,
  //   item_list_name: category,
  //   items:
  //     products.map((product) => ({
  //       item_id: product.id,
  //       item_name: product.title,
  //       item_brand: product.category,
  //       item_category: product.category,
  //       price: product.price,
  //       quantity: 1,
  //     })),
  // });
}

function ga_searched(name, category) {
  console.log("searched");

  // gtag("event", "searched", {
  //   currency: "INR",
  //   item_name: name,
  //   item_category: category,
  // });
}

function ga_filtered(name, category) {
  console.log("filtered");

  // gtag("event", "filter_applied", {
  //   currency: "INR",
  //   item_name: name,
  //   item_category: category,
  // });
}

function ga_checkout_process(products) {
  console.log("checkout");
  console.log(products.reduce((acc, product) => acc + product.price, 0));

  // gtag("event", "begin_checkout", {
  //   currency: "INR",
  //   value: products.reduce((acc, product) => acc + product.price, 0),
  //   coupon: "no-coupon",
  //   items: products.map((product) => ({
  //       item_id: product.id,
  //       item_name: product.title,
  //       item_brand: product.category,
  //       item_category: product.category,
  //       price: product.price,
  //       quantity: 1,
  //     })),
  // });
}

function ga_add_payment_info(products) {
  console.log("add_payment_info");
  // gtag("event", "add_payment_info", {
  //   currency: "INR",
  //   value: products.reduce((acc, product) => acc + product.price, 0),
  //   coupon: "no-coupon",
  //   payment_type: "Card",
  // });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".proaddtocartbtn")
    .addEventListener("click", function () {
      console.log("clicked add to cart");
      var cart_element = jQuery(this).closest(".productbox");
      item = {
        user_properties: {
          uuid: getCookie("xid"),
        },
        uuid: getCookie("xid"),
        item_brand: $(cart_element).find(".media-body").text().trim(),
        item_name: $(cart_element).find(".productname").text().trim(),
        // document.querySelector("[id*=_catname]").text().replace(/[&\/\\#,+()document.querySelector~%.'":*?<>{}]/g,'').trim() ||
        item_category: "Ecommerce",
        item_category2: "Shop stack",
        price: $(cart_element)
          .find(".mbs")
          .text()
          .trim()
          .replace(/[^\d.]/g, ""),
        image: $(cart_element).find(".proimage1 img").attr("src"),
      };
      nv("event","Add To Cart",item);
      gtag("event", "add_to_cart", item);
    });
});


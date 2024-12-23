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
        item_category: "Ecommerce",
        item_category2: "Shop stack",
        price: $(cart_element)
          .find(".mbs")
          .text()
          .trim()
          .replace(/[^\d.]/g, ""),
        image: $(cart_element).find(".proimage1 img").attr("src"),
      };
      nv("event", "add_to_cart", item);
      gtag("event", "add_to_cart", item);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.getElementsByTagName("a");
//   // console.log(links);
//   if(links.length > 0){
//    for (let i = 0; i < links.length; i++) {
//       links[i].addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log(e.target.href);
//         console.log(e.target.text);
//         let param = {
//           "link_url":e.target.href,
//           "link_name":e.target.text
//         }
//         nv("event","link_click",param)
//         gtag("event","link_click",param)
//       });
//     }
//   }
// })

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("click on 'a' tag");

      const linkUrl = link.href;
      const linkText = link.innerText.trim();
      gtag("event", "link_click", {
        uuid: getCookie("xid"),
        category: "Ecommerce",
        business_category: "Shop stack",
        link_name: linkText,
        link_url: linkUrl,
      });

      setTimeout(() => {
        if (
          link.target === "_blank" ||
          (linkUrl.startsWith("http") &&
            !linkUrl.includes(window.location.hostname))
        ) {
          window.open(linkUrl, "_blank");
        } else if (linkUrl.startsWith("#")) {
          window.location.hash = linkUrl.split("#")[1];
        } else {
          window.location.href = linkUrl;
        }
      }, 200);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();
      const filterText = filter.innerText.trim();
      gtag("event", "filter_applied", {
        category: "Ecommerce",
        business_category: "MeShop",
        filter_value: filterText,
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("blur", function () {
    const searchedTerm = searchInput.value.trim();

    if (searchedTerm) {
      gtag("event", "Searched", {
        category: "Ecommerce",
        business_category: "MeShop",
        uuid: getCookie("xid"),
        searched_term: searchedTerm,
      });

      console.log("Search event sent:", searchedTerm);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const linkName = this.textContent.trim() || "Unnamed Link";
      const linkUrl = this.href;
      gtag("event", "Link Clicked", {
        category: "Ecommerce",
        business_category: "shop stack",
        uuid: getCookie("xid"),
        link_name: linkName,
        link_url: linkUrl,
      });
      console.log("Link Clicked event sent:", linkName, linkUrl);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".subcategory-link").forEach((link) => {
    link.addEventListener("click", function () {
      const linkName = this.textContent.trim() || "Unnamed Subcategory";
      const linkUrl = this.href;

      gtag("event", "Subcategory Viewed", {
        user_properties: {
          uuid: getCookie("xid"),
        },
        category: "Ecommerce",
        business_category: "shop stack",
        uuid: getCookie("xid"),
        link_name: linkName,
        link_url: linkUrl,
      });

      console.log("Subcategory Viewed event sent:", linkName, linkUrl);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".brand-link").forEach((link) => {
    link.addEventListener("click", function () {
      const linkName = this.textContent.trim() || "Unnamed Brand";
      const linkUrl = this.href;
      gtag("event", "Brand Viewed", {
        user_properties: {
          uuid: getCookie("xid"),
        },
        category: "Ecommerce",
        business_category: "shop stack",
        uuid: getCookie("xid"),
        link_name: linkName,
        link_url: linkUrl,
      });

      console.log("Brand Viewed event sent:", linkName, linkUrl);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const userId = getCookie("xid");
  gtag("event", "page_view", {
    user_properties: {
      uuid: getCookie("xid"),
    },
    category: "Ecommerce",
    business_category: "shop stack",
    uuid: userId,
    user_id: userId,
  });

  console.log("page_view event sent:", userId);
});

document.addEventListener("DOMContentLoaded", function () {
  const items = JSON.parse(localStorage.getItem("itemArr")) || [];
  const dataLayerItems = items.map((item) => ({
    item_brand: item.title,
    item_name: item.title,
    item_category: item.category || "",
    item_category2: "",
    price: item.price ? item.price.toString() : "0",
  }));

  function pushToDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_item_list",
      items: dataLayerItems,
    });
  }
  pushToDataLayer();
  triggerViewItemListEvent();
});

function triggerViewItemListEvent() {
  const viewItemList = window.dataLayer.find(
    (event) => event.event === "view_item_list"
  );

  if (!viewItemList || !viewItemList.items) {
    console.warn("view_item_list event or items not found in dataLayer");
    return;
  }

  const items = viewItemList.items.map((item, index) => ({
    item_id: index,
    item_name: item.item_name,
    item_brand: item.item_brand,
    item_category: item.item_category,
    price: item.price,
    quantity: 1,
  }));

  const uuid = getCookie("xid") || "unknown_user";

  gtag("event", "view_item_list", {
    uuid: uuid,
    category: "Ecommerce",
    business_category: "shop stack",
    items: items,
  });
}

function ga_view_item(product) {
  const item = {
    item_id: product.id, 
    item_name: product.title,
    item_brand: "Some Brand",
    item_category: product.category,
    price: product.price,
    quantity: 1,
  };
  
  const uuid = getCookie("xid") || "unknown_user";

  gtag("event", "view_item", {
    uuid: uuid,
    category: "Ecommerce",
    business_category: "shop stack",
    items: [item], 
  });
}



document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("cart/index.html")) {
    const cartData = localStorage.getItem("cart_user");
    const products = cartData ? JSON.parse(cartData) : [];

    if (products.length > 0) {
      ga_checkout_process(products); 
    } else {
      console.warn("Cart is empty or invalid data in localStorage.");
    }
  }
});


function ga_checkout_process(products) {
  console.log("checkout");
  const totalValue = products.reduce((acc, product) => acc + product.price, 0);
  console.log(totalValue);

  gtag("event", "begin_checkout", {
    currency: "INR",
    value: totalValue,
    coupon: "no-coupon",
    items: products.map((product) => ({
      item_id: product.id,
      item_name: product.title,
      item_brand: product.category,
      item_category: product.category,
      price: product.price,
      quantity: 1,
    })),
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = Array.from(document.querySelectorAll("button"));

  addToCartButtons.forEach((button) => {
    if (button.textContent.trim().toLowerCase() === "add to cart") {
      button.addEventListener("click", ga_add_to_cart);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = Array.from(document.querySelectorAll("button"));

  addToCartButtons.forEach((button) => {
    if (button.textContent.trim().toLowerCase() === "add to cart") {
      button.addEventListener("click", function () {
        const productBox = this.closest(".productbox"); 
        if (productBox) {
          const name = productBox.querySelector("h1")?.textContent.trim() || "Unknown Name";
          const price = productBox.querySelector(".price")?.textContent.trim() || "0";
          const category = productBox.querySelector(".category")?.textContent.trim() || "Unknown Category";

          window.dataLayer = window.dataLayer || [];
          const data_cart=[
            {
              item_name: name,
              item_brand: name,
              price: parseFloat(price.replace(/[^\d.-]/g, "")), 
              category: category,
            },
          ]
          window.dataLayer.push({
            event: "add_to_cart",
            items: data_cart
          });

          console.log("Add to Cart event fired", {
            event: "add_to_cart",
            items: [{ item_name: name, price, category }],
          });
          fireAddToCartEvent(data_cart);
        } else {
          console.error("Parent productbox not found");
        }
      });
    }
  });
});

function fireAddToCartEvent(data_cart){
  gtag("event", "add_to_cart", {
      uuid: getCookie('xid'),
      user_id: getCookie('xid'),
      category: "Ecommerce",
      business_category: "Shop stack",
    items: data_cart,
  });

}
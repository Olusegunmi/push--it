const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 140,
    color: [
      {
        code: "aqua",
        img: "./images/Air_Force_1-removebg-preview.png",
      },
      {
        code: "skyblue",
        img: "./images/air_force_3-removebg-preview.png",
      },
    ],
  },

  {
    id: 2,
    title: "Blazer",
    price: 139,
    color: [
      {
        code: "black",
        img: "./images/blazers-removebg-preview.png",
      },
      {
        code: "white",
        img: "./images/blazer-removebg-preview.png",
      },
    ],
  },

  {
    id: 3,
    title: "crater",
    price: 125,
    color: [
      {
        code: "white",
        img: "./images/crater_4-removebg-preview.png",
      },
      {
        code: "grey",
        img: "./images/crater_3-removebg-preview.png",
      },
    ],
  },

  {
    id: 4,
    title: "Hippie",
    price: 110,
    color: [
      {
        code: "grey",
        img: "./images/hippie-removebg-preview.png",
      },
      {
        code: "black",
        img: "./images/hippie_4-removebg-preview.png",
      },
    ],
  },

  {
    id: 5,
    title: "Jordan",
    price: 145,
    color: [
      {
        code: "black",
        img: "./images/jordan_3-removebg-preview.png",
      },
      {
        code: "skyblue",
        img: "./images/jordan_4-removebg-preview.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    // change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.color[0].img;

   // assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.color[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.color[index].img;
  });
});

// sizes
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// payment
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex"
});

close.addEventListener("click", () => {
  payment.style.display = "none"
});



//  const wrapper = document.querySelector(".sliderWrapper");
//  const menuItems = document.querySelectorAll(".menuItem")

//   const currentProductImg = document.querySelector("ProductImage");
//   const currentProductTitle = document.querySelector("ProductTitle");
//   const currentProductPrice = document.querySelector(".ProductPrice");
//   const currentProductColors = document.querySelectorAll(".color")
//   const currentProductSizes = document.querySelectorAll(".size")

//  choosenProduct = Products[index]

//  menuItems.forEach((item,index)=>{
//    item.addEventListener("click", ()=>{
//     wrapper.style.transform = `TranslateY(${-100 * index}vw)`
//    })

//    currentProductTitle.textContent = choosenProduct.Title
//    currentProductPrice.textContent =  "$" + choosenProduct.Price
//    currentProductImg.src = choosenProduct.color[0].img

//    currentProductColors.forEach((color,index) => {
//      color.style.backgroundColor = choosenProduct.color[index].code;
//    });
// });

// currentProductColors.forEach((color,index) {
//    color.addEventListener("click" ()=> {
//      currentProductImg.src = choosenProduct.color(index).img;
//    })

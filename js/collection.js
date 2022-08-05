const products = [
  {
    title: "Your Skin But Better CC+ Cream with SPF50 12ml",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "KEM DUONG VT CICA - VT CICA CREAM",
    price: "32.00",
    discountPrice: "28.00",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "Niche Beauty CCC Cream – Niche Beauty",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "none",
  },
  {
    title: "Your Skin But Better CC+ Cream with SPF50 12ml",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "KEM DUONG VT CICA - VT CICA CREAM",
    price: "32.00",
    discountPrice: "28.00",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "Niche Beauty CCC Cream – Niche Beauty",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "none",
  },
  {
    title: "Your Skin But Better CC+ Cream with SPF50 12ml",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "KEM DUONG VT CICA - VT CICA CREAM",
    price: "32.00",
    discountPrice: "28.00",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "Niche Beauty CCC Cream – Niche Beauty",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "none",
  },
  {
    title: "Your Skin But Better CC+ Cream with SPF50 12ml",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "KEM DUONG VT CICA - VT CICA CREAM",
    price: "32.00",
    discountPrice: "28.00",
    img: "./../images/image10discoverImg.png",
    label: "New",
  },
  {
    title: "Niche Beauty CCC Cream – Niche Beauty",
    price: "28.00",
    discountPrice: "none",
    img: "./../images/image10discoverImg.png",
    label: "none",
  },
];

const createCard = (label, title, price, discountPrice, img) => {
  const productsContainer = document.querySelector(".products__container");
  const container = document.createElement("div");
  const fragment = document.createDocumentFragment();
  const productMarkup = `
  <div class="product__img-container">
    <img
    src="${img}"
    alt="discover image"
    class="product__img"
    />
    <p class="product__img-p">
      <a class="product__cta">+</a>Quick Shop
    </p>
    <div class="product__label-container">
      <p class="product__label">${label ? label : ""}</p>
    </div>
  </div>
  <div class="product__details">
    <p class="product__title">
      ${title}
    </p>
    <div class="product__prices">
      ${
        discountPrice
          ? `<p class="product__price-discount">$${discountPrice}</p>`
          : ""
      }
      <p class="product__price ${
        discountPrice ? "product__price-line" : ""
      }">$${price}</p>
    </div>
  </div>
  `;
  container.innerHTML = productMarkup;
  fragment.appendChild(container);
  productsContainer.appendChild(fragment);
};

products.forEach((product) => {
  createCard(
    product.label,
    product.title,
    product.price,
    product.discountPrice,
    product.img
  );
});

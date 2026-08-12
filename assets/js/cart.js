/* =========================================================
   عالم الموكيت للمفروشات — منطق سلة المشتريات
   يعتمد على localStorage (لا يوجد باك اند حاليًا)
   ========================================================= */

const CART_KEY = "aalam_almoquette_cart_v1";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(function (item) { return item.id === productId; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(function (item) { return item.id !== productId; });
  } else {
    const item = cart.find(function (i) { return i.id === productId; });
    if (item) item.qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter(function (item) { return item.id !== productId; });
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function cartLines() {
  return getCart().map(function (item) {
    const product = typeof findProduct === "function" ? findProduct(item.id) : null;
    if (!product) return null;
    return {
      product: product,
      qty: item.qty,
      lineTotal: product.price * item.qty
    };
  }).filter(Boolean);
}

function cartSubtotal() {
  return cartLines().reduce(function (sum, line) { return sum + line.lineTotal; }, 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll("[data-cart-badge]");
  const count = cartCount();
  badges.forEach(function (badge) {
    badge.textContent = count;
    badge.classList.toggle("hidden", count === 0);
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);

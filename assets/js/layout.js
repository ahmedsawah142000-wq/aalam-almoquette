/* =========================================================
   عالم الموكيت للمفروشات — الهيدر والفوتر المشتركين
   ========================================================= */

const NAV_LINKS = [
  { href: "index.html", label: "الرئيسية", icon: "home" },
  { href: "about.html", label: "من نحن", icon: "info" },
  { href: "products.html", label: "المنتجات", icon: "grid_view" },
  { href: "our-work.html", label: "أعمالنا", icon: "photo_library" },
  { href: "services.html", label: "الخدمات", icon: "handshake" },
  { href: "contact.html", label: "تواصل معنا", icon: "contact_support" }
];

const WHATSAPP_NUMBER = "966549859200";

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const active = currentPage();

  const desktopLinks = NAV_LINKS.map(function (link) {
    const isActive = link.href === active;
    const cls = isActive
      ? "font-label-md text-label-md text-primary border-b-2 border-secondary pb-1"
      : "font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors";
    return '<a class="' + cls + '" href="' + link.href + '">' + link.label + "</a>";
  }).join("");

  const drawerLinks = NAV_LINKS.map(function (link) {
    const isActive = link.href === active;
    const cls = isActive
      ? "flex flex-row-reverse items-center gap-sm p-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md"
      : "flex flex-row-reverse items-center gap-sm p-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md";
    const fill = isActive ? "style=\"font-variation-settings: 'FILL' 1;\"" : "";
    return (
      '<a class="' + cls + '" href="' + link.href + '">' +
      '<span class="material-symbols-outlined" ' + fill + ">" + link.icon + "</span>" +
      link.label +
      "</a>"
    );
  }).join("");

  mount.innerHTML =
    '<header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out h-16">' +
    '<div class="flex flex-row-reverse justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">' +
    '<button class="text-primary hover:text-secondary transition-colors" id="menu-btn" aria-label="القائمة">' +
    '<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: \'FILL\' 0;">menu</span>' +
    "</button>" +
    '<a href="index.html" class="flex items-center gap-2" aria-label="عالم الموكيت للمفروشات">' +
      '<img src="assets/img/logo.png" alt="شعار عالم الموكيت للمفروشات" class="h-11 w-11 object-contain"/>' +
    "</a>" +
    '<a href="cart.html" class="relative text-primary hover:text-secondary transition-colors" aria-label="سلة المشتريات">' +
    '<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: \'FILL\' 0;">shopping_bag</span>' +
    '<span data-cart-badge class="hidden absolute -top-2 -left-2 bg-secondary text-on-secondary text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>' +
    "</a>" +
    '<nav class="hidden md:flex flex-row-reverse gap-md items-center">' + desktopLinks + "</nav>" +
    "</div>" +
    "</header>" +
    '<div class="fixed inset-0 bg-on-background/50 z-[55] backdrop-blur-sm" id="drawer-overlay"></div>' +
    '<aside class="fixed inset-y-0 right-0 z-[60] flex flex-col p-base bg-surface-container-lowest h-full w-80 max-w-[85vw] shadow-xl" id="nav-drawer">' +
    '<div class="flex justify-between items-center mb-md px-4 pt-2">' +
    '<h2 class="font-headline-sm text-headline-sm text-primary">عالم الموكيت للمفروشات</h2>' +
    '<button class="text-on-surface-variant hover:text-primary transition-colors" id="close-drawer-btn" aria-label="إغلاق">' +
    '<span class="material-symbols-outlined">close</span>' +
    "</button>" +
    "</div>" +
    '<nav class="flex flex-col gap-sm">' + drawerLinks + "</nav>" +
    "</aside>";

  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-drawer-btn");
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("drawer-overlay");

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  menuBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  updateCartBadge();
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  mount.innerHTML =
    '<footer class="w-full mt-xl bg-primary text-on-primary py-lg px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-4 gap-md text-right relative overflow-hidden">' +
    '<div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>' +
    '<div class="md:col-span-1 flex flex-col gap-sm z-10">' +
    '<div class="flex items-center gap-2 mb-1">' +
      '<img src="assets/img/logo.png" alt="شعار عالم الموكيت" class="h-12 w-12 object-contain bg-white/90 rounded-full p-0.5"/>' +
      '<h3 class="font-headline-md text-headline-md text-secondary-fixed">عالم الموكيت</h3>' +
    "</div>" +
    '<p class="font-body-md text-on-primary/80">نقدم لكم أرقى تشكيلات السجاد والمفروشات التي تعكس الفخامة والأصالة لتناسب ذوقكم الرفيع.</p>' +
    "</div>" +
    '<div class="md:col-span-2 flex flex-col md:flex-row-reverse justify-around gap-md z-10">' +
    '<div class="flex flex-col gap-sm">' +
    '<h4 class="font-label-md text-label-md text-secondary-fixed mb-2">روابط سريعة</h4>' +
    '<a class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors" href="products.html">المنتجات</a>' +
    '<a class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors" href="our-work.html">أعمالنا</a>' +
    '<a class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors" href="services.html">الخدمات</a>' +
    '<a class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors" href="cart.html">سلة المشتريات</a>' +
    '<a class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors" href="contact.html">تواصل معنا</a>' +
    "</div>" +
    '<div class="flex flex-col gap-sm">' +
    '<h4 class="font-label-md text-label-md text-secondary-fixed mb-2">تواصل معنا</h4>' +
    '<a href="tel:+966549859200" class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed flex items-center gap-2 justify-end"><span dir="ltr">+966 54 985 9200</span><span class="material-symbols-outlined text-[18px]">call</span></a>' +
    '<a href="mailto:ahmedsawah142000@gmail.com" class="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed flex items-center gap-2 justify-end">ahmedsawah142000@gmail.com<span class="material-symbols-outlined text-[18px]">mail</span></a>' +
    "</div>" +
    "</div>" +
    '<div class="md:col-span-1 flex flex-col justify-end z-10">' +
    '<p class="font-body-md text-body-md text-on-primary/80 mt-md md:mt-0 text-center md:text-right">© ٢٠٢٦ عالم الموكيت للمفروشات. جميع الحقوق محفوظة</p>' +
    "</div>" +
    "</footer>" +
    '<div class="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-3" id="fab-widget">' +
      '<div class="flex flex-col gap-3 fab-menu-open" id="fab-menu">' +
        '<a href="https://www.tiktok.com/@worldofcarpetsandrugs?_r=1&_t=ZS-948tXVpVxfZ" target="_blank" rel="noopener" class="fab-item flex items-center gap-3 justify-end" aria-label="تابعنا على تيك توك">' +
          '<span class="bg-[#2b2b2b] text-white text-sm font-label-md px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">تابعنا على تيك توك</span>' +
          '<span class="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shrink-0">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>' +
          "</span>" +
        '</a>' +
        '<a href="tel:+966549859200" class="fab-item flex items-center gap-3 justify-end" aria-label="اتصل بنا الان">' +
          '<span class="bg-[#2b2b2b] text-white text-sm font-label-md px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">اتصل بنا الان</span>' +
          '<span class="bg-error text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shrink-0"><span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">call</span></span>' +
        '</a>' +
        '<a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" rel="noopener" class="fab-item flex items-center gap-3 justify-end" aria-label="تواصل عبر واتساب">' +
          '<span class="bg-[#25D366] text-white text-sm font-label-md px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">WhatsApp widget</span>' +
          '<span class="bg-[#25D366] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shrink-0"><span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">chat</span></span>' +
        '</a>' +
        '<a href="https://www.google.com/maps?q=24.597306,46.731194(%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D9%85%D9%88%D9%83%D9%8A%D8%AA%20%D9%84%D9%84%D9%85%D9%81%D8%B1%D9%88%D8%B4%D8%A7%D8%AA)" target="_blank" rel="noopener" class="fab-item flex items-center gap-3 justify-end" aria-label="موقعنا على الخريطة">' +
          '<span class="bg-[#2b2b2b] text-white text-sm font-label-md px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">موقعنا علي الخريطة</span>' +
          '<span class="bg-[#F5820D] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shrink-0"><span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">map</span></span>' +
        '</a>' +
      "</div>" +
      '<button id="fab-toggle" class="bg-error text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:scale-105 transition-transform" aria-label="إغلاق قائمة التواصل" aria-expanded="true">' +
        '<span class="material-symbols-outlined text-[26px]" id="fab-toggle-icon" style="font-variation-settings: \'FILL\' 1;">close</span>' +
      "</button>" +
    "</div>";

  var fabToggle = document.getElementById("fab-toggle");
  var fabMenu = document.getElementById("fab-menu");
  var fabIcon = document.getElementById("fab-toggle-icon");
  var fabOpen = true;

  function setFabState(open) {
    fabOpen = open;
    fabMenu.classList.toggle("fab-menu-open", open);
    fabToggle.setAttribute("aria-expanded", open ? "true" : "false");
    fabToggle.setAttribute("aria-label", open ? "إغلاق قائمة التواصل" : "فتح قائمة التواصل");
    fabIcon.textContent = open ? "close" : "sms";
  }

  fabToggle.addEventListener("click", function () { setFabState(!fabOpen); });
  document.addEventListener("click", function (e) {
    if (fabOpen && !document.getElementById("fab-widget").contains(e.target)) setFabState(false);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  renderFooter();
});

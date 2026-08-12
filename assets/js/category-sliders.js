/* =========================================================
   عالم الموكيت للمفروشات — سلايدر المنتجات حسب القسم
   يعرض سلايدر أفقي منفصل لكل تصنيف من CATEGORIES (ما عدا "الكل")
   ========================================================= */

function categoryProductCardHTML(p) {
  var priceLabel = priceHTML(p);
  var cornerBadge = p.badge || p.categoryLabel;
  return (
    '<div class="bg-surface rounded-xl overflow-hidden ambient-shadow hover-lift flex flex-col h-full border border-outline-variant/20 w-64 md:w-72">' +
      '<a href="product.html?id=' + p.id + '" class="h-44 overflow-hidden relative block">' +
        '<img class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="' + p.image + '" alt="' + p.name + '" loading="lazy"/>' +
        '<div class="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-md text-label-md text-secondary text-[12px]">' + cornerBadge + '</div>' +
        (p.originalPrice ? '<div class="absolute top-3 left-3 bg-error text-white px-2.5 py-1 rounded-full font-label-md text-[11px]">خصم</div>' : '') +
      '</a>' +
      '<div class="p-4 flex flex-col flex-grow text-right">' +
        '<h3 class="font-headline-sm text-[18px] font-bold text-primary mb-1"><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        (p.color ? '<p class="font-label-md text-label-md text-secondary text-[12px] mb-2">اللون: ' + p.color + '</p>' : '') +
        '<p class="font-body-md text-on-surface-variant text-[14px] mb-3 flex-grow line-clamp-2">' + p.shortDesc + '</p>' +
        '<div class="flex flex-row-reverse justify-between items-center pt-3 border-t border-outline-variant/10">' +
          '<span class="font-headline-sm text-primary text-[16px]">' + priceLabel + '</span>' +
          '<a href="product.html?id=' + p.id + '" class="text-secondary hover:underline font-label-md text-label-md">التفاصيل</a>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function categorySliderHTML(cat, products) {
  var sliderId = "cat-slider-" + cat.id;
  return (
    '<section class="mb-xl">' +
      '<div class="flex items-center justify-between mb-md px-margin-mobile md:px-gutter max-w-container-max mx-auto">' +
        '<a href="products.html?cat=' + cat.id + '" class="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1">' +
          'عرض الكل' +
          '<span class="material-symbols-outlined text-[18px]">arrow_back</span>' +
        '</a>' +
        '<h2 class="font-headline-md text-headline-md text-primary">' + cat.label + '</h2>' +
      '</div>' +
      '<div class="relative full-bleed">' +
        '<div class="cat-slider-track" id="' + sliderId + '" style="padding-inline: 16px;">' +
          products.map(categoryProductCardHTML).join("") +
        '</div>' +
        '<button data-prev="' + sliderId + '" class="cat-slider-arrow absolute top-1/2 -translate-y-1/2 right-2 md:right-6 bg-white/90 hover:bg-white text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md" aria-label="السابق"><span class="material-symbols-outlined">chevron_right</span></button>' +
        '<button data-next="' + sliderId + '" class="cat-slider-arrow absolute top-1/2 -translate-y-1/2 left-2 md:left-6 bg-white/90 hover:bg-white text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md" aria-label="التالي"><span class="material-symbols-outlined">chevron_left</span></button>' +
      "</div>" +
    "</section>"
  );
}

function renderCategorySliders(mountId) {
  var mount = document.getElementById(mountId);
  if (!mount) return;

  var html = "";
  CATEGORIES.forEach(function (cat) {
    if (cat.id === "all") return;
    var products = PRODUCTS.filter(function (p) { return p.category === cat.id; });
    if (products.length === 0) return;
    html += categorySliderHTML(cat, products);
  });

  mount.innerHTML = html;

  mount.querySelectorAll(".cat-slider-arrow").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-prev") || btn.getAttribute("data-next");
      var track = document.getElementById(targetId);
      if (!track) return;
      var cardWidth = track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 16 : 280;
      var amount = btn.hasAttribute("data-next") ? -cardWidth : cardWidth;
      track.scrollBy({ left: amount, behavior: "smooth" });
    });
  });
}

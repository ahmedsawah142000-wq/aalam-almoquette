/* =========================================================
   عالم الموكيت للمفروشات — السلايدر الإعلاني (بانرات ترويجية)
   أضف عنصر جديد لمصفوفة PROMO_SLIDES عشان تضيف بانر جديد للسلايدر
   ========================================================= */

const PROMO_SLIDES = [
  {
    title: "خدمة التقسيط متاحة الآن!",
    subtitle: "قسّط مشترياتك من عالم الموكيت بسهولة وبدون فوائد",
    badges: [
      { name: "تمارا", style: "tamara" },
      { name: "tabby", style: "tabby" }
    ]
  }
  // أضف بانرات إضافية هنا بنفس الشكل لو حبيت السلايدر يعرض أكتر من شريحة
];

function badgeHTML(badge) {
  var styles = {
    tamara: "background: linear-gradient(90deg, #f6a95a 0%, #f47b8f 45%, #8b7bd8 100%); color: #1a1a1a;",
    tabby: "background: #17d9a3; color: #063b2e;"
  };
  var style = styles[badge.style] || "background:#eee;color:#333;";
  return (
    '<div class="flex flex-col items-center gap-2">' +
      '<span class="px-6 py-2.5 rounded-lg font-bold text-[20px] shadow-sm inline-block" style="' + style + '">' + badge.name + "</span>" +
      '<span class="material-symbols-outlined text-[#2e7d32] text-[22px]" style="font-variation-settings: \'FILL\' 1;">check_circle</span>' +
    "</div>"
  );
}

function slideHTML(slide, index) {
  return (
    '<div class="promo-slide' + (index === 0 ? " active" : "") + '" data-index="' + index + '">' +
      '<div class="flex flex-col items-center text-center gap-md py-lg px-md">' +
        '<h3 class="font-headline-md text-headline-md text-primary">' + slide.title + "</h3>" +
        (slide.subtitle ? '<p class="font-body-md text-on-surface-variant max-w-lg">' + slide.subtitle + "</p>" : "") +
        '<div class="flex flex-wrap justify-center gap-lg mt-sm">' + slide.badges.map(badgeHTML).join("") + "</div>" +
      "</div>" +
    "</div>"
  );
}

function renderPromoSlider(mountId) {
  var mount = document.getElementById(mountId);
  if (!mount || PROMO_SLIDES.length === 0) return;

  var dotsHTML = PROMO_SLIDES.map(function (_, i) {
    return '<span class="promo-dot' + (i === 0 ? " active" : "") + '" data-dot="' + i + '"></span>';
  }).join("");

  mount.innerHTML =
    '<div class="relative rounded-xl overflow-hidden ambient-shadow border border-outline-variant/20" style="background: linear-gradient(135deg, #F5F5DC 0%, #ffffff 60%, #F5F5DC 100%);">' +
      '<div class="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>' +
      '<div class="relative">' + PROMO_SLIDES.map(slideHTML).join("") + "</div>" +
      (PROMO_SLIDES.length > 1
        ? '<div class="flex justify-center gap-2 pb-4" id="promo-dots">' + dotsHTML + "</div>"
        : "") +
    "</div>";

  if (PROMO_SLIDES.length <= 1) return;

  var current = 0;
  var slides = mount.querySelectorAll(".promo-slide");
  var dots = mount.querySelectorAll(".promo-dot");

  function goTo(i) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (i + PROMO_SLIDES.length) % PROMO_SLIDES.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () { goTo(i); });
  });

  var autoplay = setInterval(function () { goTo(current + 1); }, 5000);
  mount.addEventListener("mouseenter", function () { clearInterval(autoplay); });
  mount.addEventListener("mouseleave", function () { autoplay = setInterval(function () { goTo(current + 1); }, 5000); });
}

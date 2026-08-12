/* =========================================================
   عالم الموكيت للمفروشات — سلايدر صور الهيرو (الصفحة الرئيسية)
   أضف/عدّل الشرائح من مصفوفة HERO_SLIDES
   ========================================================= */

const HERO_SLIDES = [
  { image: "assets/img/hero-majlis.webp", alt: "مجلس عربي فاخر مفروش بسجاد فارسي وأثاث كلاسيكي راقٍ" },
  { image: "assets/img/hero-office-carpet.webp", alt: "مكتب عصري مفروش بموكيت أرضيات فاخر بإطلالة على أفق المدينة" },
  { image: "assets/img/hero-mosque.webp", alt: "قاعة مسجد واسعة مفروشة بسجاد محاريب فاخر تحت ثريا كبيرة" },
  { image: "assets/img/hero-texture.webp", alt: "نسيج سجادة فاخرة بنقوش ذهبية دقيقة على أرضية خضراء داكنة" }
];

function renderHeroSlider(mountId, overlayHTML) {
  var mount = document.getElementById(mountId);
  if (!mount || HERO_SLIDES.length === 0) return;

  var slidesHTML = HERO_SLIDES.map(function (s, i) {
    var loadingAttr = i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
    return (
      '<div class="hero-slide' + (i === 0 ? " active" : "") + '" data-index="' + i + '">' +
        '<img class="w-full h-[420px] sm:h-[480px] md:h-[620px] object-cover" src="' + s.image + '" alt="' + s.alt + '" ' + loadingAttr + '/>' +
      "</div>"
    );
  }).join("");

  var dotsHTML = HERO_SLIDES.map(function (_, i) {
    return '<span class="promo-dot' + (i === 0 ? " active" : "") + '" data-dot="' + i + '"></span>';
  }).join("");

  mount.innerHTML =
    '<div class="relative overflow-hidden">' +
      slidesHTML +
      '<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10 pointer-events-none"></div>' +
      (overlayHTML
        ? '<div class="absolute inset-0 flex items-center justify-center px-margin-mobile md:px-gutter pointer-events-none">' +
            '<div class="max-w-2xl w-full text-center pointer-events-auto">' + overlayHTML + "</div>" +
          "</div>"
        : "") +
      '<div class="absolute bottom-4 left-0 w-full flex justify-center gap-2" id="hero-dots">' + dotsHTML + "</div>" +
      '<button id="hero-prev" class="absolute top-1/2 -translate-y-1/2 right-3 md:right-6 bg-white/90 hover:bg-white text-primary rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shadow-md" aria-label="الشريحة السابقة"><span class="material-symbols-outlined">chevron_right</span></button>' +
      '<button id="hero-next" class="absolute top-1/2 -translate-y-1/2 left-3 md:left-6 bg-white/90 hover:bg-white text-primary rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shadow-md" aria-label="الشريحة التالية"><span class="material-symbols-outlined">chevron_left</span></button>' +
    "</div>";

  var current = 0;
  var slides = mount.querySelectorAll(".hero-slide");
  var dots = mount.querySelectorAll(".promo-dot");

  function goTo(i) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  dots.forEach(function (dot, i) { dot.addEventListener("click", function () { goTo(i); }); });
  document.getElementById("hero-next").addEventListener("click", function () { goTo(current + 1); });
  document.getElementById("hero-prev").addEventListener("click", function () { goTo(current - 1); });

  var autoplay = setInterval(function () { goTo(current + 1); }, 4500);
  mount.addEventListener("mouseenter", function () { clearInterval(autoplay); });
  mount.addEventListener("mouseleave", function () { autoplay = setInterval(function () { goTo(current + 1); }, 4500); });
}

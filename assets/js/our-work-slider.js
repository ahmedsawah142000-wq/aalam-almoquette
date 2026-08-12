/* =========================================================
   عالم الموكيت للمفروشات — سلايدرات صفحة أعمالنا
   أضف/عدّل الصور من المصفوفات تحت
   ========================================================= */

const OUR_WORK_IMAGES = [
  { image: "assets/img/our-work/our-work-01.webp", alt: "صورة من أعمال عالم الموكيت رقم 1" },
  { image: "assets/img/our-work/our-work-02.webp", alt: "صورة من أعمال عالم الموكيت رقم 2" },
  { image: "assets/img/our-work/our-work-03.webp", alt: "صورة من أعمال عالم الموكيت رقم 3" },
  { image: "assets/img/our-work/our-work-04.webp", alt: "صورة من أعمال عالم الموكيت رقم 4" },
  { image: "assets/img/our-work/our-work-05.webp", alt: "صورة من أعمال عالم الموكيت رقم 5" },
  { image: "assets/img/our-work/our-work-06.webp", alt: "صورة من أعمال عالم الموكيت رقم 6" },
  { image: "assets/img/our-work/our-work-07.webp", alt: "صورة من أعمال عالم الموكيت رقم 7" },
  { image: "assets/img/our-work/our-work-08.webp", alt: "صورة من أعمال عالم الموكيت رقم 8" },
  { image: "assets/img/our-work/our-work-09.webp", alt: "صورة من أعمال عالم الموكيت رقم 9" },
  { image: "assets/img/our-work/our-work-10.webp", alt: "صورة من أعمال عالم الموكيت رقم 10" },
  { image: "assets/img/our-work/our-work-11.webp", alt: "صورة من أعمال عالم الموكيت رقم 11" },
  { image: "assets/img/our-work/our-work-12.webp", alt: "صورة من أعمال عالم الموكيت رقم 12" },
  { image: "assets/img/our-work/our-work-13.webp", alt: "صورة من أعمال عالم الموكيت رقم 13" },
  { image: "assets/img/our-work/our-work-14.webp", alt: "صورة من أعمال عالم الموكيت رقم 14" },
  { image: "assets/img/our-work/our-work-15.webp", alt: "صورة من أعمال عالم الموكيت رقم 15" },
  { image: "assets/img/our-work/our-work-16.webp", alt: "صورة من أعمال عالم الموكيت رقم 16" },
  { image: "assets/img/our-work/our-work-17.webp", alt: "صورة من أعمال عالم الموكيت رقم 17" },
  { image: "assets/img/our-work/our-work-18.webp", alt: "صورة من أعمال عالم الموكيت رقم 18" },
  { image: "assets/img/our-work/our-work-19.webp", alt: "صورة من أعمال عالم الموكيت رقم 19" }
];

const OUR_WORK_IMAGES_2 = [
  { image: "assets/img/our-work-2/our-work-2-01.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 1" },
  { image: "assets/img/our-work-2/our-work-2-02.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 2" },
  { image: "assets/img/our-work-2/our-work-2-03.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 3" },
  { image: "assets/img/our-work-2/our-work-2-04.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 4" },
  { image: "assets/img/our-work-2/our-work-2-05.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 5" },
  { image: "assets/img/our-work-2/our-work-2-06.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 6" },
  { image: "assets/img/our-work-2/our-work-2-07.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 7" },
  { image: "assets/img/our-work-2/our-work-2-08.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 8" },
  { image: "assets/img/our-work-2/our-work-2-09.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 9" },
  { image: "assets/img/our-work-2/our-work-2-10.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 10" },
  { image: "assets/img/our-work-2/our-work-2-11.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 11" },
  { image: "assets/img/our-work-2/our-work-2-12.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 12" },
  { image: "assets/img/our-work-2/our-work-2-13.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 13" },
  { image: "assets/img/our-work-2/our-work-2-14.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 14" },
  { image: "assets/img/our-work-2/our-work-2-15.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 15" },
  { image: "assets/img/our-work-2/our-work-2-16.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 16" },
  { image: "assets/img/our-work-2/our-work-2-17.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 17" },
  { image: "assets/img/our-work-2/our-work-2-18.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 18" },
  { image: "assets/img/our-work-2/our-work-2-19.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 2 - رقم 19" }
];

const OUR_WORK_IMAGES_3 = [
  { image: "assets/img/our-work-3/our-work-3-01.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 1" },
  { image: "assets/img/our-work-3/our-work-3-02.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 2" },
  { image: "assets/img/our-work-3/our-work-3-03.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 3" },
  { image: "assets/img/our-work-3/our-work-3-04.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 4" },
  { image: "assets/img/our-work-3/our-work-3-05.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 5" },
  { image: "assets/img/our-work-3/our-work-3-06.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 6" },
  { image: "assets/img/our-work-3/our-work-3-07.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 7" },
  { image: "assets/img/our-work-3/our-work-3-08.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 8" },
  { image: "assets/img/our-work-3/our-work-3-09.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 9" },
  { image: "assets/img/our-work-3/our-work-3-10.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 10" },
  { image: "assets/img/our-work-3/our-work-3-11.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 11" },
  { image: "assets/img/our-work-3/our-work-3-12.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 12" },
  { image: "assets/img/our-work-3/our-work-3-13.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 13" },
  { image: "assets/img/our-work-3/our-work-3-14.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 14" },
  { image: "assets/img/our-work-3/our-work-3-15.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 15" },
  { image: "assets/img/our-work-3/our-work-3-16.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 16" },
  { image: "assets/img/our-work-3/our-work-3-17.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 17" },
  { image: "assets/img/our-work-3/our-work-3-18.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 18" },
  { image: "assets/img/our-work-3/our-work-3-19.webp", alt: "صورة من أعمال عالم الموكيت - مجموعة 3 - رقم 19" }
];

function renderOurWorkSlider(mountId, images) {
  var mount = document.getElementById(mountId);
  if (!mount || !images || images.length === 0) return;

  var slidesHTML = images.map(function (s, i) {
    var loadingAttr = i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
    return (
      '<div class="our-work-slide' + (i === 0 ? " active" : "") + '" data-index="' + i + '">' +
        '<img class="w-full h-[320px] sm:h-[420px] md:h-[560px] object-contain bg-surface-container-lowest" src="' + s.image + '" alt="' + s.alt + '" ' + loadingAttr + '/>' +
      "</div>"
    );
  }).join("");

  var dotsHTML = images.map(function (_, i) {
    return '<span class="promo-dot' + (i === 0 ? " active" : "") + '" data-dot="' + i + '"></span>';
  }).join("");

  mount.innerHTML =
    '<div class="relative overflow-hidden rounded-xl ambient-shadow">' +
      slidesHTML +
      '<div class="absolute top-3 left-3 bg-black/60 text-white text-[13px] font-label-md px-3 py-1 rounded-full" data-role="counter">1 / ' + images.length + '</div>' +
      '<div class="absolute bottom-4 left-0 w-full flex justify-center gap-2 flex-wrap px-4" data-role="dots">' + dotsHTML + "</div>" +
      '<button data-role="prev" class="absolute top-1/2 -translate-y-1/2 right-3 md:right-6 bg-white/90 hover:bg-white text-primary rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shadow-md" aria-label="الصورة السابقة"><span class="material-symbols-outlined">chevron_right</span></button>' +
      '<button data-role="next" class="absolute top-1/2 -translate-y-1/2 left-3 md:left-6 bg-white/90 hover:bg-white text-primary rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shadow-md" aria-label="الصورة التالية"><span class="material-symbols-outlined">chevron_left</span></button>' +
    "</div>";

  var current = 0;
  var slides = mount.querySelectorAll(".our-work-slide");
  var dots = mount.querySelectorAll(".promo-dot");
  var counter = mount.querySelector('[data-role="counter"]');

  function goTo(i) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (i + images.length) % images.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
    counter.textContent = (current + 1) + " / " + images.length;
  }

  dots.forEach(function (dot, i) { dot.addEventListener("click", function () { goTo(i); }); });
  mount.querySelector('[data-role="next"]').addEventListener("click", function () { goTo(current + 1); });
  mount.querySelector('[data-role="prev"]').addEventListener("click", function () { goTo(current - 1); });

  var autoplay = setInterval(function () { goTo(current + 1); }, 4500);
  mount.addEventListener("mouseenter", function () { clearInterval(autoplay); });
  mount.addEventListener("mouseleave", function () { autoplay = setInterval(function () { goTo(current + 1); }, 4500); });
}

document.addEventListener("DOMContentLoaded", function () {
  renderOurWorkSlider("our-work-slider-mount", OUR_WORK_IMAGES);
  renderOurWorkSlider("our-work-slider-mount-2", OUR_WORK_IMAGES_2);
  renderOurWorkSlider("our-work-slider-mount-3", OUR_WORK_IMAGES_3);
});

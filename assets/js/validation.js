/* =========================================================
   عالم الموكيت للمفروشات — التحقق من صحة النماذج (Form Validation)
   ========================================================= */

const VALIDATION_MESSAGES = {
  required: "هذا الحقل مطلوب",
  minLength: function (n) { return "لازم يكون " + n + " أحرف على الأقل"; },
  phone: "رقم جوال غير صحيح (مثال: 05xxxxxxxx)",
  email: "بريد إلكتروني غير صحيح"
};

const PHONE_REGEX = /^(?:\+?966|0)?5\d{8}$/; // يقبل: 05xxxxxxxx / 5xxxxxxxx / +9665xxxxxxxx / 9665xxxxxxxx
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldWrapper(input) {
  // العنصر الأب المباشر اللي هيحمل رسالة الخطأ تحت الحقل
  return input.closest("div") || input.parentElement;
}

function showFieldError(input, message) {
  clearFieldError(input);
  input.classList.add("border-error", "focus:border-error", "focus:ring-error");
  input.classList.remove("border-primary/30", "focus:border-secondary", "focus:ring-secondary");
  input.setAttribute("aria-invalid", "true");

  const errorEl = document.createElement("p");
  errorEl.className = "field-error font-caption text-caption text-error mt-1 flex items-center gap-1";
  errorEl.innerHTML = '<span class="material-symbols-outlined text-[14px]">error</span>' + message;
  fieldWrapper(input).appendChild(errorEl);
}

function clearFieldError(input) {
  input.classList.remove("border-error", "focus:border-error", "focus:ring-error");
  input.classList.add("border-primary/30", "focus:border-secondary", "focus:ring-secondary");
  input.removeAttribute("aria-invalid");
  const wrapper = fieldWrapper(input);
  const existing = wrapper.querySelector(".field-error");
  if (existing) existing.remove();
}

/**
 * يتحقق من حقل واحد حسب القواعد الممرَّرة.
 * rules: { required: true, minLength: 3, phone: true, email: true }
 * يرجع true لو الحقل سليم، وelse يعرض رسالة الخطأ ويرجع false.
 */
function validateField(input, rules) {
  const value = input.value.trim();
  rules = rules || {};

  if (rules.required && value === "") {
    showFieldError(input, VALIDATION_MESSAGES.required);
    return false;
  }
  if (rules.minLength && value.length > 0 && value.length < rules.minLength) {
    showFieldError(input, VALIDATION_MESSAGES.minLength(rules.minLength));
    return false;
  }
  if (rules.phone && value !== "" && !PHONE_REGEX.test(value.replace(/\s|-/g, ""))) {
    showFieldError(input, VALIDATION_MESSAGES.phone);
    return false;
  }
  if (rules.email && value !== "" && !EMAIL_REGEX.test(value)) {
    showFieldError(input, VALIDATION_MESSAGES.email);
    return false;
  }

  clearFieldError(input);
  return true;
}

/**
 * يتحقق من مجموعة حقول ويربط التحقق اللحظي (blur/input) تلقائيًا.
 * fieldsConfig: [{ input: HTMLElement, rules: {...} }, ...]
 * يرجع true لو كل الحقول سليمة.
 */
function validateForm(fieldsConfig) {
  let allValid = true;
  fieldsConfig.forEach(function (fc) {
    const valid = validateField(fc.input, fc.rules);
    if (!valid) allValid = false;
  });
  return allValid;
}

function attachLiveValidation(fieldsConfig) {
  fieldsConfig.forEach(function (fc) {
    fc.input.addEventListener("blur", function () { validateField(fc.input, fc.rules); });
    fc.input.addEventListener("input", function () {
      if (fc.input.getAttribute("aria-invalid") === "true") {
        validateField(fc.input, fc.rules);
      }
    });
  });
}

function scrollToFirstError(formEl) {
  const firstError = formEl.querySelector('[aria-invalid="true"]');
  if (firstError) {
    firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    firstError.focus();
  }
}

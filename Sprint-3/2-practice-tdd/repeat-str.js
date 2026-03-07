/**
 * repeatStr - Final Logic Implementation
 * -------------------------------------
 * This function handles all TDD cases:
 * 1. Multiple repetitions.
 * 2. Count of 1 (Returns original string).
 * 3. Count of 0 (Returns empty string).
 * 4. Negative count (Throws an Error).
 */

function repeatStr(str, count) {
  // 1. شرط الحماية (Guard Clause):
  // نتحقق أولاً إذا كان الرقم سالباً قبل البدء بأي عملية.
  if (count < 0) {
    // إلقاء خطأ برمجي لإعلام نظام الاختبار أن المدخلات غير صحيحة
    throw new Error("Count must be a non-negative integer");
  }

  // 2. استخدام دالة التكرار الجاهزة (repeat):
  // هذه الدالة ذكية جداً؛ فهي تكرر النص (str) بعدد مرات (count).
  // - إذا كان count يساوي 0، ستعيد نصاً فارغاً "" تلقائياً.
  // - إذا كان count يساوي 1، ستعيد النص كما هو.
  // - إذا كان count أكبر من 1، ستكرر النص.
  return str.repeat(count);
}

// تصدير الدالة لكي يتمكن ملف الأختبار من الوصول إليها
module.exports = repeatStr;

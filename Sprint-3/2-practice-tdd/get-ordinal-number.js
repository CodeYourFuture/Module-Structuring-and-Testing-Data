/**
 * getOrdinalNumber - Final Implementation
 * --------------------------------------
 * Converts a number to its English ordinal string (1st, 2nd, 3rd, etc.)
 */

function getOrdinalNumber(num) {
  // 1. التعامل مع الاستثناءات (11, 12, 13)
  // نستخدم % 100 للحصول على آخر رقمين
  const lastTwoDigits = num % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  // 2. الحصول على آخر رقم في العدد
  const lastDigit = num % 10;

  // 3. تحديد النهاية بناءً على آخر رقم
  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

// تصدير الدالة للاختبار
module.exports = getOrdinalNumber;

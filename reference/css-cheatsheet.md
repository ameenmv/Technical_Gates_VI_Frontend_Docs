# قاموس CSS الشامل (Ultimate CSS Dictionary)

أقوى ملف مرجعي لكل خصائص لغة التنسيق CSS. يغطي من أول الألوان وحتى التحركات في الـ 3D.

---

## 1. محددات الاستهداف (Selectors)
| المحدد (Selector) | الشرح | المثال |
| --- | --- | --- |
| `*` | تحديد كافة الكوكب (Universal) | `* { box-sizing: border-box; }` |
| `.class` | تحديد بـ كلاس مخصص (الفئة) | `.btn { color: red; }` |
| `#id` | استهداف صارم بـ الـ ID | `#header { background: #000; }` |
| `div p` | الأبناء في كل الأعماق (Descendant) | `article p { font-size: 16px; }` |
| `div > p` | الابن المباشر فقط (Child) | `ul > li { list-style: none; }` |
| `div + p` | الجار الأول واللصيق به (Adjacent) | `h1 + p { margin-top: 0; }` |
| `:hover` | حالة مرور الماوس فقط | `a:hover { color: gold; }` |
| `:nth-child(n)` | تحديد طفل معين برقمه | `tr:nth-child(even) { background: #eee; }` |
| `::before` / `::after` | خلق محتوى وهمي לפני أو אחרי العنصر | `h1::after { content: "✨"; }` |
| `:has(selector)` | سحر الجيل الجديد لاستهدف الوالد بناءً على المولد. | `div:has(img) { border: 2px solid; }` |

---

## 2. صندوق العناصر والأبعاد (Box Model & Sizing)
| الخاصية | الشرح | المثال |
| --- | --- | --- |
| `width` / `height` | العرض والطول | `width: 100%; height: 100vh;` |
| `max-width` / `min-width` | الحد الأقصى والأدنى للعرض | `max-width: 1200px;` |
| `margin` | الهوامش الخارجية لإبعاد العناصر | `margin: 10px auto; /* توسيط بلوك */ ` |
| `padding` | الهوامش الداخلية لنفخ العنصر بالداخل | `padding: 20px;` |
| `border` | الحدود | `border: 1px solid #ccc;` |
| `border-radius` | تدوير حواف العنصر | `border-radius: 50% /* دائرة كاملة */;` |
| `box-sizing` | طريقة احتساب البوكس | `box-sizing: border-box;` |
| `overflow` | الحشو الفائض عن المساحة | `overflow: hidden; /* أو auto للسكروّل */` |
| `box-shadow` | رسم ظل للعنصر | `box-shadow: 0 4px 6px rgba(0,0,0,0.1);` |

---

## 3. الخطوط والوحدات (Typography)
| الخاصية | الشرح | المثال |
| --- | --- | --- |
| `color` | لون النص | `color: #333;` |
| `font-family` | عائلة الخطوط | `font-family: 'Tajawal', sans-serif;` |
| `font-size` | الحجم (بوحدات px, em, rem, vw) | `font-size: 2rem;` |
| `font-weight` | سماكة الخط | `font-weight: bold /* 700 */;` |
| `text-align` | المحاذاة | `text-align: center;` |
| `text-decoration` | الزينة السطحية (خط تحت، شطب) | `text-decoration: none; /* إزالة خط الرابط */` |
| `text-transform` | تكبير/تصغير الحروف الإنجليزية | `text-transform: uppercase;` |
| `line-height` | المسافة بين السطور | `line-height: 1.6;` |
| `letter-spacing` | التباعد بين الحروف | `letter-spacing: 2px;` |

---

## 4. المحاذاة والتخطيط المعماري (Flexbox)
تُكتب في الحاوية الأב للتحكم في الأبناء:
| الخاصية | الشرح | المثال |
| --- | --- | --- |
| `display: flex` | تفعيل محرك الـ Flex | `display: flex;` |
| `flex-direction` | المحور الرئيسي | `flex-direction: row /* أو column */;` |
| `justify-content` | المحاذاة الأفقية/بناءً على المحور | `justify-content: center /* أو space-between */;` |
| `align-items` | المحاذاة الرأسية | `align-items: center;` |
| `flex-wrap` | السماح بالكسر לسطر جديد | `flex-wrap: wrap;` |
| `gap` | المسافة الفاصلة بين الأبناء | `gap: 20px;` |
وللأبناء:
| الخاصية | الشرح | المثال |
| --- | --- | --- |
| `flex-grow` | التمدد لالتهام المساحة | `flex-grow: 1;` |
| `flex-basis` | الحجم المبدئي | `flex-basis: 300px;` |

---

## 5. محرك الشبكة العملاق (Grid)
| الخاصية في الأب | الشرح | المثال |
| --- | --- | --- |
| `display: grid` | تفعيل محرك الجريد | `display: grid;` |
| `grid-template-columns`| حجم الأعمدة وعددها | `grid-template-columns: repeat(3, 1fr);` |
| `grid-template-rows` | حجم الصفوف | `grid-template-rows: auto 100px;` |
| `grid-template-areas` | رسم هيكل الموقع بالكامل لفظياً | `grid-template-areas: "nav nav" "aside main";` |

---

## 6. الأماكن والشفافية (Positioning & FX)
| الخاصية | الشرح | المثال |
| --- | --- | --- |
| `position` | الوضع الاستراتيجي الاستاتيكي | `position: absolute /* relative, fixed, sticky */;` |
| `top` / `bottom` / `left` / `right` | إحداثيات الدفع | `top: 50%; left: 50%;` |
| `z-index` | عمق الطبقات (الأكبر يكون في المقدمة) | `z-index: 999;` |
| `opacity` | الشفافية التامة للعنصر (من 0 لـ 1) | `opacity: 0.5;` |
| `filter` | فلاتر الصورة (ضباب، أبيض وأسود) | `filter: blur(5px) grayscale(100%);` |
| `cursor` | شكل مؤشر الماوس عند لمس العنصر | `cursor: pointer;` |

---

## 7. الحركات السحرية (Transforms & Animations)
| الخاصية | الشرح | المثال |
| --- | --- | --- |
| `transition` | حركة ناعمة عند تغيير الحالة (كالـ Hover) | `transition: all 0.3s ease-in-out;` |
| `transform: scale()`| التكبير والتصغير | `transform: scale(1.1);` |
| `transform: rotate()` | الدوران בזاوية | `transform: rotate(45deg);` |
| `transform: translate()`| إزاحة عنصر إجبارية من مكانه | `transform: translate(50px, -50px);` |
| `animation` | حركة بدون تدخل باستخدام الـ Keyframes | `animation: fadeIn 2s infinite;` |
| `@keyframes` | خلق الإطارات الزمنية | `@keyframes fadeIn { 0% {opacity:0} 100% {opacity:1} }` |

---

## 8. المتغيرات والتجاوب (CSS Variables & Media Queries)
**أحجام الشاشات:**
```css
/* عندما تكون مساحة الجهاز اللوحي فأكبر */
@media (min-width: 768px) {
  .sidebar { display: block; }
}
```

**تعريف المتغيرات في الـ CSS واستدعائها:**
```css
:root {
  --primary-color: #078D84;
}
.btn {
  background-color: var(--primary-color);
}
```

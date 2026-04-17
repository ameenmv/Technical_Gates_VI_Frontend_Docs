# الدرس الثالث: العمارة، الحركة، والتجاوب الشامل (الجزء الثاني)

إذا كان الدرس الثاني هو القواعد، فهذا الدرس هو "السحر والمستقبل". فيه ننتقل لهندسة الخرائط (Flexbox & Grid)، ثم إعطاء الروح بتحريك العناصر ورسم المواقع لتتفاعل أوتوماتيكيًا مع هواتف المحمول (Media Queries).

---

## 1. المتغيرات والانتقالات (Variables & Transitions)
المتغيرات توفر عليك آلاف السطور وتعتبر محرك الدارك مود.

```css
:root {
  --main-color: #078D84;
}
.btn {
  background-color: var(--main-color);
  /* الانتقالات الناعمة - لا تقفز فجأة عند الهوفر (Hover) */
  transition: background-color 0.4s ease, transform 0.2s linear;
}
```
**`!important` ومشاكل الهوامش (Margin Collapse):**
احذر من الهوامش المتطابقة (Margin Collapse) حين يندمج Margin أب مع الابن ولا ينعكس على المساحة! ولتجاوز أي قاعدة سابقة نكتب `!important` في نهاية السطر رغم أن المحترفين يتجنبونها.

---

## 2. الصندوق المرن الشامل (Flexbox Mastery)
أعظم ابتكار لمحاذاة العناصر بنظام خطي (1D).

### أوامر الحاوية (Flex Parent)
- `display: flex;`: فتح محرك المرونة.
- `flex-direction`: `row` (جانبياً) أو `column` (عمودياً).
- `flex-wrap`: هل تنزل الأبناء لسطر جديد عند الضيق؟ (`wrap` أو `nowrap`).
- `justify-content`: المحاذاة في المحور الرئيسي (Main Axis).
- `align-items`: المحاذاة في المحور العكسي (Cross Axis).
- `align-content`: محاذاة الخطوط المتعددة بأكملها (إن وُجد `wrap`).

### أوامر الأبناء (Flex Child)
- `order`: تغيير ترتيب ظهور العنصر بدون تعديل HTML.
- `flex-grow`: نسبة التمدد (كيف يلتهب المساحة الفارغة).
- `flex-shrink`: سرعة الانكماش (حين تضيق الشاشة بشكل مدمر).
- `flex-basis`: الحجم المبدئي قبل التدخل من (grow/shrink).
- **السحر المدمج (Flex Shorthand):** `flex: 1 0 200px;` (Stretch 1, NO Shrink 0, Base 200px).

---

## 3. الشبكة البنائية الفائقة (Grid Layout)
إذا كان فليكس للصندوق الواحد، الجريد للتخطيطات العملاقة (2D).

### أوامر החاوية (Grid Parent)
- `display: grid;`: فتح محرك الشبكة.
- `grid-template-columns`: عدد الأعمدة وأطوالها (مثال: `repeat(3, 1fr)`).
- `grid-template-rows`: عدد الصفوف.
- `gap`: المسافة الفاصلة בין الأعمدة والصفوف.
- `grid-template-areas`: عبقرية رسم الهيكل بالأسماء بدلاً من الأرقام!

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
.hdr { grid-area: header; }
```

### الشبكات الأوتوماتيكية و הـ (`minmax`)
أسرع سطر لجعل المعرض متجاوباً للموبايل بلا میڈیا କويري:
```css
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

---

## 4. التحويلات ثنائية وثلاثية الأبعاد (2D & 3D Transforms)
المحترف لا يغير موضع عنصر بالـ `padding`، بل بالـ `Transform` لتفادي ضغط الـ CPU، وتُحسب على كارت השاشة (GPU).

### التحويل المعماري (2D Transform)
- `scale(1.5)`: يُكّبر العنصر مرة ونصف.
- `rotate(45deg)`: يُدوّر العنصر (دوران عقارب השاعة).
- `translate(50px, -20px)`: تحريك إجبارى علىแกن X و Y دون التأثير بجيرانه (رائع للتوسيط المطلق).
- `skew(10deg)`: מיلان أو اعوجاج للصندوق.
- `transform-origin`: نقطة الارتكاز (من أين يكبر، من المنتصف أم من الركن).

### البعد الثالث (3D Transform & Perspective)
بإعطاء الأب خاصية `perspective` يظهر العمق، وبعدها ندور الابن كـالبطاقة:
```css
.card-container { perspective: 800px; }
.card { transform: rotateY(180deg); } /* يلف العنصر لتظهر خلفيته */
```

---

## 5. الحركات المتلألئة وصناعة الفيديوهات (Animations)
إذا كان הـ Transition يحتاج تدخل المستخدم (Hover)، فالـ Animation يعمل بحرية.

```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); background: #078D84; }
  100% { transform: translateY(0); }
}

.spinner {
  /* الاسم والمدة وسلوك الوقت والتكرار اللانهائي */
  animation: bounce 2s ease-in-out infinite alternate;
}
```

---

## 6. الفلاتر والتدرجات (Filters & Gradients)
للتأثير في الصور دون فوتوشوب:
- `filter: blur(5px) grayscale(100%) drop-shadow(0 0 5px red);`
- `background: linear-gradient(to right, red, blue);`: تدرج لوني. يمكن عمل إبداعات كروية בـ `radial-gradient`.

---

## 7. الاستعلامات والتجاوب المكتمل (Media Queries & Responsive)
هيكل الموبايل يكتب دائماً خارج الاستعلام ليكون الافتراضي (Mobile First Approach). ثم نبدأ الاستعلام وتغيير خطة الموقع:
```css
/* عندما تصبح الشاشة 768px (تابلت) */
@media (min-width: 768px) {
  .sidebar { display: block; } /* نظهر الـ Sidebar الذي أخفاه الموبايل */
  .grid-container { grid-template-columns: repeat(2, 1fr); }
}

/* شاشات الـ PC الضخمة 1200px فأكثر */
@media (min-width: 1200px) {
  .grid-container { grid-template-columns: repeat(4, 1fr); }
}
```

صناعة (Framework) التجاوب الخاص بك (كما في Bootstrap) تعتمد على تعريف `Global Values` كمتغيرات وفئات مثل `.container` و `.row` لتنظيم أي موقع مستقبلاً بمرونة فائقة!

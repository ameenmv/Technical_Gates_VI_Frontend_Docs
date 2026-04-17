# الدرس الثاني: أساسيات وتنسيقات CSS الشاملة (الجزء الأول)

هذا الدرس هو الدليل الشامل والمرجعي لكل ما يخص ألوان، أبعاد، ونصوص لغة CSS (يغطي النصف الأول من الدورة الموسوعية). 

---

## 1. تركيب اللغة وقواعد التحديد (Syntax & Selectors)
تتكون لغة CSS من **محدد (Selector)** وقوسين معقوفين `{}` وبداخلهما الخاصية والقيمة.

### التحديد المتعدد والوراثة (Grouping & Nesting)
لوضع نفس الستايل لأكثر من عنصر، نفصل بينهم بفاصلة:
```css
h1, h2, .main-title {
  color: #333;
  font-family: Arial, sans-serif;
}
```
الوراثة (`Inheritance`): بعض الخواص مثل (لون الخط) تورث من الأب للأبناء تلقائياً، والبعض الآخر (مثل الحدود `border`) لا يورث.

---

## 2. الألوان، الخلفيات، ونموذج الصندوق (Box Model)
كل عنصر في الويب هو "صندوق" ذو أربع ملامح رئيسية. يفضل أن نبدأ بتوحيد حسابات الحجم عبر:
```css
* {
  box-sizing: border-box; /* يجعل الـ Padding لا يزيد من مساحة العنصر الإجمالية */
}
```

### 1- الألوان والخلفيات (Backgrounds)
يمكننا تحديد ألوان بالنظام الست عشري (`Hexadecimal` كـ `#ff0000`) أو بالنظام العشري والشفافية (`rgba(255, 0, 0, 0.5)`).
```css
.card {
  background-color: #078D84;
  background-image: url('pattern.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; /* يغطي المساحة بالكامل */
  background-attachment: fixed; /* تأثير الـ Parallax */
}
```

### 2- الهوامش (Margin & Padding)
- **Padding**: المساحة الداخلية بين النص وإطار الصندوق.
- **Margin**: المساحة الخارجية التي تدفع العنصر بعيداً عن جيرانه.
```css
.box {
  padding: 10px 20px; /* 10 دلفوق وتحت، 20 يمين وشمال */
  margin: 0 auto; /* أشهر خدعة لتوسيط الصندوق بلوكاً في منتصف الشاشة */
}
```

### 3- الحدود والسطوع (Border & Outline)
- הـ `border` يؤثر في التخطيط.
- الـ `outline` خط إضافي يظهر خارج الـ border ولا يؤثر في الحجم الحقيقي للعنصر.
```css
.input-field {
  border: 2px solid #ccc;
  border-radius: 8px; /* تدوير الزوايا */
}
.input-field:focus {
  outline: 2px dashed #078D84;
}
```

---

## 3. التعامل مع العرض والنص (Display & Typography)

### حالة العنصر (Display & Visibility)
- `block`: يأخذ السطر بالكامل (مثل الـ `<div>`).
- `inline`: يأخذ مساحة المحتوى فقط ولا يقبل الطول والعرض (مثل `<span>`).
- `inline-block`: هجين؛ بجوار إخوته لكنه يقبل طول وعرض.
- `none`: إخفاء العنصر بالكامل لدرجة أنه يتلاشى من المساحة، على عكس `visibility: hidden` الذي يجعله شفافاً لكنه يحافظ على مكانه.

### الخطوط والنصوص (Text Formatting)
ترسانة كاملة لضبط كل حرف:
```css
p {
  color: #333;
  text-align: justify; /* ضبط الهوامش */
  text-decoration: underline; /* خط تحت النص */
  text-transform: capitalize; /* أول حرف كابيتال من كل كلمة */
  line-height: 1.6; /* تباعد السطور */
  letter-spacing: 1px; /* تباعد الحروف */
  font-family: 'Tajawal', sans-serif;
  font-size: 16px; /* الأحجام تكون بـ px أو em أو rem */
  font-weight: bold; /* سمك الخط */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5); /* ظل للنص */
}
```

---

## 4. التحكم في الفضاء (Positioning & Overflows)

### الطفحان (Overflow)
ماذا يحدث حين يتجاوز النص حجم صندوقك؟
- `overflow: hidden;`: إخفاء الزيادة (يقصها).
- `overflow: auto;`: إضافة شريط تمرير (Scrollbar) بناءً على الحاجة.

### المواضع الاستراتيجية (Position & Z-Index)
مكان العنصر يغير سلوكه:
- `relative`: يتحرك بالنسبة لنفسه دون إيذاء باقي العناصر.
- `absolute`: يخرج من الجاذبية ويطير ملتصقاً بأقرب أب له يحمل الـ relative.
- `fixed`: يلتصق بشاشة العرض نهائياً (مثل أشرطة الانتقالات العلوية).
- `sticky`: خليط بين relative و fixed (يلتصق عند الوصول له بالنزول).

> للتحكم في من يطغى على من عندما يتراكب عنصران نستخدم `z-index: 99;` (الأكبر دائماً للأعلى).

---

## 5. الظلال وعناصر الوهم (Pseudo Classes & Elements)
ننتقل لعمل تفاعلات دون لمس الـ HTML.

### خصائص التفاعل (Pseudo Classes)
كلاسات حالة، تتفعل بشروط معينة كمرور الماوس.
```css
a:hover { color: red; } /* عند مرور الماوس */
a:active { transform: scale(0.9); } /* لحظة الضغط */
li:first-child { font-weight: bold; } /* استهداف أول عنصر في القائمة */
li:nth-child(even) { background: #eee; } /* العناصر الزوجية لتلوين الجدول */
```

### عناصر الاستنساخ (Pseudo Elements)
سحر إنشاء أجزاء وهمية من الـ CSS لتزيين الموقع بدون HTML زيادة.
- `::before` و `::after`: لابد أن يحتوي على خاصية `content: "";` لكي يظهر.
- `::first-letter`: لاستهداف أول حرف من الفقرة وتكبيره كالمجلات.
- `::selection`: لتغيير شكل وإضاءة النص حين يحدده المستخدم بالماوس.

```css
p::selection {
  background-color: #078D84;
  color: #fff;
}

.button-icon::before {
  content: "🚀";
  margin-left: 8px;
}
```

### ظلال الصندوق (Box Shadow)
لإعطاء عمق و3D للموقع.
```css
.card {
  /* X, Y, Blur, Spread, Color */
  box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.1);
}
```
ينتهي الجزء الأول هنا لتهيئة أساسيات ومحركات הـ CSS.

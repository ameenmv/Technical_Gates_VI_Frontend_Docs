# الدرس الرابع: المحرك المنطقي وأساسيات الكود (JS Core - Part 1)

هنا تبدأ البرمجة الحقيقية. في النصف الأول من موسوعة الـ JavaScript سنتعلم لغة العقل والمنطق، منذ إعلان المتغيرات وحتى بناء خوارزميات المصفوفات المعقدة والدوال الوظيفية.

---

## 1. البدايات، المتغيرات، وأنواع البيانات (Basics & Data Types)

### الكونسول والـ (Web API)
نحن لا نكتب أكوادنا لتظهر في الواجهة مباشرة كالـ HTML، بل نجري عمليات دماغية في خفاء الكونسول:
```javascript
console.log("رسالة عادية");
console.error("خطأ مقصود للتحذير");
console.table(["Ameen", "Ali", "Osama"]);
```

### المتغيرات (`let`, `const`, `var`)
منذ إطلاق معايير ECMAScript 6، تم حظر استخدام `var` لما تسببه من فوضى (Hoisting) وتدمير النطاق. نستخدم:
- `const`: ثابت لا يتغير مطلقا (لأمان التطبيق).
- `let`: متغير قابل لإعادة التعيين والتعديل (مثل السن).

### الـ Template Literals
وداعا لعلامات الزائد `+` المزعجة لدمج الكلمات. نستخدم الـ Backticks (`) للـ Concatenation:
```javascript
const name = "أمين";
const age = 25;
console.log(`مرحبا، اسمي ${name} وعمري ${age} عاما.`);
```

---

## 2. العمليات، والأرقام، والنصوص (Operators & Methods)

### الـ Type Coercion وعمليات المقارنة
تفهم لغة الـ JS الأرقام حتى لو كانت نصوصاً، ولكن هذا خطير:
- `10 == "10"`: مقارنة سطحية (النتيجة True).
- `10 === "10"`: مقارنة صارمة للقيمة والنوع معاً (النتيجة False - هو الموصى به دائماً).

### كائن الـ Math وسحر الأرقام
```javascript
Math.round(2.4);  // التقريب الذكي (2)
Math.ceil(2.1);   // التقريب للأعلى دائما (3)
Math.floor(2.9);  // التقريب للأسفل دائما (2)
Math.random();    // يولد رقماً عشوائياً بين 0 و 1
```

### التلاعب بالنصوص (String Methods)
طرق متقدمة لقص وبحث النصوص:
```javascript
const title = "Technical Gates";

title.charAt(0); // حرف T
title.slice(0, 9); // "Technical" (اقتطاع المسافة بين أول وآخر اندكس)
title.split(" "); // ["Technical", "Gates"] (يحول النص لمصفوفة بناء على فاصل معين)
title.includes("Gate"); // True (بحث ذكي)
```

---

## 3. الشروط والقرارات المنطقية (Control Flow)
لجعل الموقع يتخذ قرارات، نستخدم الـ `if` والـ `switch`.

### הـ Ternary Operator (الشرط المختصر الإعجازي)
بدلاً من حشو الكود بسطور if/else، لو كان السطر مفرداً يُكتب كالتالي:
```javascript
const userAge = 20;

// (الشرط) ? (إذا تحقق) : (إذا لم يتحقق)
const status = userAge >= 18 ? "شخص بالغ للمتجر" : "ممنوع الدخول";
```

### الـ Nullish Coalescing (`??`) والحماية من הـ Null
إن كان المتغير يحمل `null` أو `undefined`، ضع بديلاً افتراضياً:
```javascript
const userMoney = 0;
// العلامة `||` ستعتبر الصفر خطأ وتطبع 50، بينما `??` تحترم الصفر.
console.log(userMoney ?? 50); // يطبع 0
```

---

## 4. سيادة المصفوفات (Arrays)
كيف نحفظ 100 اسم في وعاء واحد؟ المصفوفات! تبدأ المصفوفة الفهرسة (Index) من الصفر `0`.

### الإضافة والحذف السريع 
- `.push("Ali")`: إضافة للأخير.
- `.pop()`: مسح الأخير.
- `.unshift()`: إضافة للأول.
- `.shift()`: مسح الأول.

### التلاعب الاستراتيجي 
- `.sort()`: الترتيب الأبجدي.
- `.join(" - ")`: تحويل المصفوفة من كلمات لقطعة نصية، وبين كل كلمة علامة الناقص.
```javascript
let fruits = ["Apple", "Banana", "Kiwi"];
let sliced = fruits.slice(1, 3); // ["Banana", "Kiwi"] لا يدمر المصفوفة القديمة
```

---

## 5. محركات الدوران (Loops)
لتكرار تنفيذ مهمة 1000 مرة دون كتابتها 1000 مرة.

### حلقة الـ For Loop التقليدية والمخصصة
```javascript
const names = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Ahmed") continue; // تخطى دورة أحمد وكمل
  if (names[i] === "Sayed") break;    // أوقف العجلة تماما!
  console.log(names[i]);
}
```

---

## 6. مهندسو الشفرة (Functions & Scopes)
الدوال هي اللبنة الأساسية. تكتب الكود مرة واحدة وتطلبه متى شئت.

### المعطيات (Parameters & Arguments)
يمكن وضع معطيات افتراضية وإرجاع القيمة في الخفاء بدل طباعتها:
```javascript
function calcDiscount(price, discount = 10) { // الـ 10 قيمة افتراضية
  return price - discount;
}
console.log(calcDiscount(100)); // 90
```

### الرامي اللانهائي (Rest Parameters)
ماذا لو احتجت لدالة تجمع مليون رقم؟
```javascript
function sumAll(...numbers) {
  // يجمع كل ما تم إرساله داخل Array مخفية
}
```

### دوال السهم والنطاق (Arrow Functions & Lexical Scope)
دالة السهم خفيفة ولها تأثير هائل في كيفية رؤية لغة הـ JS للكلمة `this`.
```javascript
// دالة مكونة من سطر واحد، الـ return يحدث تلقائياً
const multiply = (x, y) => x * y;
```

---

## 7. الدوال علية المستوى (Higher Order Functions)
في الـ JS المعاصرة، لا أحد يتجول داخل الـ Arrays بالـ For العادية. נستخدم الـ HOF لأنها نظيفة كودياً ولا تدمر المصفوفة الأصلية.

### `map()` 
تلف على كل عنصر وتعدله وترجع مصفوفة جديدة.
```javascript
let nums = [1, 2, 3];
let doubled = nums.map((n) => n * 2); // [2, 4, 6]
```

### `filter()`
ترجع مصفوفة جديدة بها العناصر التي تتوافق مع شرط محدد فقط.
```javascript
let names = ["Ali", "Ameen", "Mona", "Osama"];
let startsWithA = names.filter((n) => n.startsWith("A")); // ["Ali", "Ameen"]
```

### `reduce()`
عصارة المصفوفة لتتحول لقيمة واحدة. تستخدم غالبا في الإحصائيات أو الشوبينج كارت.
```javascript
let prices = [10, 20, 30];
let total = prices.reduce((acc, current) => acc + current, 0); // 60
```

---

## 8. كيانات الكائنات الأولية (Objects & Methods)
لتمثيل كيان مستخدم له صفات وحركات، وليس مجرد تسلسل مصفوفات:
```javascript
const user = {
  name: "Ameen", // Property
  age: 26,
  skills: ["HTML", "CSS"],
  
  // Method
  sayHello: function() {
    return `Hello ${this.name}`; // this تعود على الكائن الأب
  }
};

// الاستدعاء (Dot Notation vs Bracket Notation)
console.log(user.name);
console.log(user["age"]); // هامة جدا لو اسم المفتاح كان متغيرا داخليا!
```
ينتهي الجزء الأول بمرحلة البيانات والمنطق، ويبدأ في الدرس الخامس التدخل الجراحي ومحاكاة الواجهة وتشفير البيانات والكائنات.

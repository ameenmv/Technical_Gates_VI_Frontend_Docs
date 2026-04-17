# الدرس الخامس: الـ DOM، الكائنات المتقدمة، والمستقبل (JS Core - Part 2)

انتهينا من بناء العقل والآن سنخرجه ليرى النور ويتعامل مع الصفحة والأجهزة، وسنغوص في أعماق البرمجة الموجهة للكائنات (OOP) والتنظيم المتقدم للأكواد. هذا الدرس يغطي النصف الثاني المعماري لدورة جافاسكريبت.

---

## 1. التلاعب بشجرة الويب والـ (DOM Architecture)
الـ (Document Object Model) هو التجسيد المكتوب لصفحة הـ HTML كي تعدلها الجافاسكريبت.

### اصطياد العناصر والخلق (Selection & Elements)
نستخدم `querySelector` للسيطرة، ولكن الأهم هو اصطناع عناصر من العدم ببراعة الحاوي:
```javascript
const newDiv = document.createElement("div"); // خلق كائن في الذاكرة
const text = document.createTextNode("مرحباً بك!");
newDiv.appendChild(text); 
document.body.append(newDiv); // إلقاء العنصر المليء للصفحة لتراه العين
```

### اجتياز الشجرة والبحث الأعمى (DOM Traversing)
الحركة صعودا وهبوطاً دون الـ ID:
- `element.children`: للنزول للابن.
- `element.parentElement`: للصعود للأب.
- `element.nextElementSibling`: للذهاب للجار اللصيق (الذي يليه).

التحكم بالكلاسات: `classList.add()`, `remove()`, والسحر المتنقل `toggle()` لصناعة الدارك مود بضغطة.

---

## 2. السلوكيات، التحكم بالمخزون، والأحداث (Events Array & Storage)
التحكم بسلوك الضغطات والماوس وحماية الفورم عند التسجيل.

### مراقب الأحداث الساكن `addEventListener`
```javascript
const btn = document.querySelector("#submit");

btn.addEventListener("click", function(event) {
  event.preventDefault(); // إيقاف تحديث الصفحة كالسحر الذي يظهر في المواقع!
  console.log("تم القبض على البيانات قبل إرسالها.");
});
```

### ذاكرة المتصفح طويلة الأمد (`localStorage`)
الدارك مود الذي لا يموت بعد غلق الصفحة:
```javascript
// الحفظ 
window.localStorage.setItem("theme", "dark");
// الاستخراج
const userTheme = window.localStorage.getItem("theme"); 

// JSON: لغة التخاطب 
// نحول أي Array لنص لكي يحفظه المتصفح، والعكس.
const saveArray = JSON.stringify([1, 2, 3]); 
```
الـ `sessionStorage` يقوم بنفس الدور لكنه معدوم الذاكرة بمجرد غلق التبويبة!

---

## 3. محرك نافذة المحيطات والإنذارات (BOM - Browser Object Model)
الـ BOM يتحكم بالنافذة والبراوزر نفسه ليس محتوى الصفحة حصرا.

### ساعات المهلة والتكرار الاستراتيجي
- `setTimeout`: دالة الأوامر المؤجلة. (نفذ هذا السطر العبقري بعد 3 ثوانٍ).
- `setInterval`: عداد الثواني (نفذ كل ثانيتين للأبد). نوقفه בـ `clearInterval`.

### الملاحة الجغرافية و Location
```javascript
// نقله جغرافياً كأنه سجل الدخول والتحول للداشبورد.
window.location.href = "https://cisteam.org/dashboard"; 

// النزول الحريري (Scroll)
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
```

---

## 4. الميزات الاستيعابية (Destructuring) وهندسة الـ Maps
لتفكيك حشو الأكواد والحصول على الكنز المخفي في المصفوفات والكائنات في سطر واحد!

### تفريغ الكود (Destructuring Objects)
```javascript
const user = { username: "Osama", power: "Admin" };
const { username, power } = user; // بدون let name = user.userName إلخ..
```

### هياكل البيانات العملاقة (Set & Map)
- **الـ `Set`**: يمتنع مستحيل أن يقبل قيمتين متكررتين (رائع لمصيدة الدلالات).
- **الـ `Map`**: كائن سريع يقبل أي شيء كمفتاح (Object Key) حتى لو كان المفتاح لـ Map دالة!

```javascript
let mySet = new Set([1, 1, 1, 2, 3]); // سيحفظها ( 1, 2, 3 ) ويهمل التكرار بقوته العجيبة!
```

---

## 5. التعابير النمطية المتقدمة (Regular Expressions)
كابوس المبرمجين ومنقذ المحترفين؛ لغة رموز داخل الـ JS للبحث وتأمين الفورم!
- `\d`: للبحث عن أي رقم.
- `\w`: للبحث عن الأحرف والأرقام.
- الـ Quantifiers `+` أکرر ، `?` محتمل ، `{3,5}` عدد معين.
```javascript
// هل يبدأ الإيميل بحروف وأرقام وينتهي بـ @gmail.com ؟
let emailRegex = /^\w+@gmail\.com$/ig; 
let test = emailRegex.test("ameen@gmail.com"); // True! أمن قوي وفوري
```

---

## 6. البرمجة كائنية التوجه (OOP Architecture)
الانتقال من مجرد سطور لكليّات وبرمجيات كبرى كائنات مستقلة لها حمض نووي خاص بها!

### الكلاسات البانية (Classes vs Constructors)
استخدم הـ Class לصناعة قالب يخرج مئات المستخدمين (Instances).
```javascript
class User {
  // الحرس السري للمتغير (لا يُرى إلا بالكلاس نفسه) - Encapsulation
  #salary; 

  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#salary = eSalary;
  }
  
  // وظيفة البطل (Method)
  getSalary() {
    return parseInt(this.#salary);
  }
}

// صناعة كائن صريح وحقيقي 
let userOne = new User(100, "Ameen", "5000 EGP");
```

### الميراث الأبدي (Inheritance & Prototypes)
صناعة كلاس جديد `Admin` يسرق أو يورث كل معلومات الـ `User` عن طريق كلمة `extends` واستخدام `super()` لحقن الجينات.

---

## 7. الزمان الفضائي، المولدات، والتوصيل (Date, Generators, Modules)
نهايات الكورس العملاق والأدوات الجوهرية.

### آلة الزمن (Date Object)
```javascript
let dateNow = new Date();
let getFullYear = dateNow.getFullYear(); // السنة حالياً
```

### المولدات الفضائية (Generators `function*`)
دوال عجيبة لا تنتهي بنقطة `return`! بل تستخدم `yield` لتقف وتنتظر المستفيد حتى يطلب منها القطعة التالية. (أساسات الحركات والألعاب ومحاكي الـ APIs البطيئة).

### التفريع المعماري للملفات (ES6 Modules)
لا كود יتجاوز الـ 500 سطر! نكتب أجزاءنا بملفات، ثم نصدرها בـ `export`:
```javascript
// بداخل ملف helpers.js
export function calcTax(x) { return x * 1.14; }

// في ملف المشروع app.js
import { calcTax } from './helpers.js';
```

مبروك، بهذا قد أتقنت المنطق، المحرك، وقطار المستقبل الخفي للويب (JavaScript).

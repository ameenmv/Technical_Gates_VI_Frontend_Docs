# قاموس JavaScript الشامل (Ultimate JS Dictionary)

المرجع النهائي والأسرع لأهم دوال، أساليب، ومفاهيم الجافاسكريبت.

---

## 1. المصفوفات والدوال عالية المستوى (Arrays & HOF)
| الكود / الدالة (Method) | الوصف | مثال كودي (Example) |
| --- | --- | --- |
| `push()` | إضافة عنصر لآخر المصفوفة الأصلية | `arr.push("Ameen")` |
| `pop()` | حذف آخر عنصر وإرجاعه | `let last = arr.pop()` |
| `unshift()` / `shift()` | إضافة / حذف من بداية المصفوفة | `arr.unshift("First")` |
| `slice(start, end)` | اقتطاع جزء دون المساس بالأصلية | `arr.slice(1, 3)` |
| `splice(start, count)` | قطع وإضافة عناصر (يدمر المصفوفة الأصلية) | `arr.splice(0, 1)` |
| `join(" ")` | تحويل المصفوفة إلى نص (String) | `arr.join("-")` |
| `map()` | يطبق الكود على كل عنصر ويرجع مصفوفة جديدة | `arr.map(x => x * 2)` |
| `filter()` | يرجع مصفوفة جديدة العناصر الناجحة في الشرط | `arr.filter(x => x > 5)` |
| `reduce()` | يدمج المصفوفة للوصول لقيمة وحيدة | `arr.reduce((acc, curr) => acc + curr)` |
| `forEach()` | ينفذ كود على كل عنصر (لا يرجع شيئاً) | `arr.forEach(e => console.log(e))` |

---

## 2. السلاسل النصية والأرقام (Strings & Numbers)
| الكود / الدالة (Method) | الوصف | مثال كودي (Example) |
| --- | --- | --- |
| `length` | لمعرفة عدد أحرف النص أو طول المصفوفة | `str.length` |
| `charAt(idx)` | استخراج حرف من منزلة معينة | `str.charAt(0)` |
| `split(" ")` | تحويل النص لمصفوفة بناءً على الفاصل | `str.split(",")` |
| `trim()` | إزالة المسافات الزائدة من أول وآخر النص | `str.trim()` |
| `includes()` | البحث الذكي (هل يحتوي على؟) يرجع True/False | `str.includes("Ameen")` |
| `toUpperCase()` | تحويل كل الحروف لـ कैपिटल | `str.toUpperCase()` |
| `Math.random()` | رقم عشوائي كسر من 0 إلى 1 | `Math.random()` |
| `Math.floor(num)` | التقريب للأسفل كلياً | `Math.floor(2.9) // 2` |
| `Math.ceil(num)` | التقريب للأعلى كلياً | `Math.ceil(2.1) // 3` |
| `parseInt()` | تحويل النص العشوائي لرقم صحيح | `parseInt("100px") // 100` |

---

## 3. شجرة الويب والتفاعل (DOM Elements & Manipulation)
| الكود / الدالة (Method) | الوصف | مثال كودي (Example) |
| --- | --- | --- |
| `querySelector()` | اصطياد أول عنصر يطابق المحدد (كـ CSS) | `document.querySelector(".btn")` |
| `querySelectorAll()` | اصطياد كل العناصر كـ NodeList | `document.querySelectorAll("p")` |
| `getElementById()` | أسرع سيليكتور يعتمد على الـ ID | `document.getElementById("nav")` |
| `createElement()` | اصطناع عنصر جديد من العدم بالذاكرة | `document.createElement("div")` |
| `Element.append()` | إلقاء العنصر داخل الصفحة وإظهاره | `document.body.append(newDiv)` |
| `innerHTML` | تغيير المحتوى (خطر: يقرأ تاجات הـ HTML) | `div.innerHTML = "<b>Bold</b>"` |
| `textContent` | تغيير النص فقط (آمن) | `div.textContent = "Safe Text"` |
| `classList.add()` | إضافة Class جديد للعنصر | `box.classList.add("dark")` |
| `classList.toggle()` | إن وجد الكلاس يزيله، وإن لم يوجد يضيفه | `box.classList.toggle("active")` |
| `setAttribute()` | وضع خصیصة (كمسار صورة) لعنصر | `img.setAttribute("src", "a.png")` |
| `addEventListener()` | مراقب الأحداث عند حدوث فعل | `btn.addEventListener("click", foo)` |

---

## 4. التحكم في البيئة والمتصفح (BOM & Storage)
| الكود / الدالة (Method) | الوصف | مثال كودي (Example) |
| --- | --- | --- |
| `setTimeout(fn, ms)` | تنفيذ كود مؤجل بعد مهلة زمنية إجبارية | `setTimeout(() => alert("Hi"), 3000)` |
| `setInterval(fn, ms)` | تنفيذ الكود بشكل متكرر ولانهائي | `setInterval(updateClock, 1000)` |
| `window.location.href` | قراءة أو توجيه المستخدم لرابط جديد جغرافياً | `location.href = "/dashboard"` |
| `window.scrollTo()` | إنزال المستخدم لمكان ما بنعومة | `scrollTo({ top: 0, behavior: 'smooth' })` |
| `localStorage.setItem` | حفظ بيانات في ذاكرة المتصفح للأبد | `localStorage.setItem("user", "Ali")` |
| `localStorage.getItem` | سحب بيانات مسجلة | `localStorage.getItem("user")` |
| `JSON.stringify()` | لتحويل الـ Array والـ Object لنص كي يُحفظ | `JSON.stringify([1,2,3])` |
| `JSON.parse()` | يسترجع النص لأصله البرمجي (Array/Object) | `JSON.parse('{"a":1}')` |

---

## 5. المستقبل وهيكلة البيانات المعاصرة (Modern ES6+)
| الكود / الميزة | الوصف | مثال كودي (Example) |
| --- | --- | --- |
| `let` / `const` | المتغيرات الآمنة (لا تستخدم `var` أبداً) | `const tax = 0.14` |
| Template Literals \` | النصوص السحرية لحقن المتغيرات بـ `${}` | `` `Hi ${name}` `` |
| Arrow Function `=>`| الدّوال السهمية المختصرة (لا تستحوذ على `this`) | `const sum = (x,y) => x + y` |
| Destructuring | إخراج القيم المحددة بسطر واحد من الأشياء | `const {name, age} = userObj` |
| Spread Syntax `...` | لنسخ مصفوفة داخل مصفوفة بلا مشاكل ريفرنس | `let newArr = [...oldArr, 4, 5]` |
| `??` | العميل السري (Nullish Coalescing) ضد الـ null | `userAge ?? 18` |
| `?` | التتابع الاختياري (Optional Chaining) لعدم هدم الموقع | `user.profile?.avatar` |
| `Set` | مصفوفة خارقة ترفض التكرار | `new Set([1, 1, 2]) // 1, 2` |
| `export` / `import` | لفصل وتنظيم الأكواد في ملفات (Modules) | `import { calc } from './app.js'` |

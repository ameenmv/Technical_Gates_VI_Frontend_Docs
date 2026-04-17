# قاموس HTML الشامل (Ultimate HTML Dictionary)

هذا القاموس المرجعي يحتوي حرفياً على كافة الوسوم المدعومة في لغة HTML5 مع أمثلة صريحة واستخداماتها بدقة.

---

## 1. العناصر الجذرية والبيانات المخفية (Root & Meta)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<!DOCTYPE html>` | الإعلان عن المعيار لدعم HTML5 | `<!DOCTYPE html>` |
| `<html>` | الجذر الممتد الذي يحضن كل الموقع | `<html lang="ar" dir="rtl">` |
| `<head>` | غرفة العمليات والبيانات المخفية (لا تُرى) | `<head>...</head>` |
| `<title>` | عنوان الصفحة لعلامة تبويب المتصفح | `<title>لوحة التحكم</title>` |
| `<meta>` | بيانات وصفية (الترميز، وصف الـ SEO) | `<meta charset="UTF-8">` |
| `<link>` | ربط ملفات خارجية (مثل ستايلات CSS) | `<link rel="stylesheet" href="style.css">` |
| `<style>` | لكتابة أكواد CSS داخل صفحة הـ HTML | `<style> body { color: red; } </style>` |
| `<script>` | لتضمين أو كتابة أكواد جافاسكريبت | `<script src="app.js"></script>` |

---

## 2. هيكلة المحتوى والمعمارية (Semantic & Sections)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<body>` | الحاوية المرئية لكل ما هو معروض بالموقع | `<body>محتوى الموقع</body>` |
| `<header>` | رأس الصفحة أو القسم (غالباً للوجو والناف) | `<header>Logo</header>` |
| `<nav>` | مخصص لروابط قائمة التصفح الرئيسية | `<nav><a href="#">Home</a></nav>` |
| `<main>` | المحتوى الرئيسي الأوحد في الصفحة | `<main>...</main>` |
| `<section>` | مقطع يعالج فكرة مستقلة (يفضل وضع عنوان له) | `<section id="about">...</section>` |
| `<article>` | تدوينة أو محتوى مستقل بذاته قابل للمشاركة | `<article>أخبار اليوم</article>` |
| `<aside>` | القائمة الجانبية أو المحتوى غير المحوري (كمساحة إعلانية) | `<aside>Ads</aside>` |
| `<footer>` | ذيل الصفحة أو ذيل القسم | `<footer>Copyright © 2026</footer>` |
| `<div>` | الحاوية الكلاسيكية الصامتة لتجميع العناصر (بدون معنى دلالي) | `<div class="container">...</div>` |

---

## 3. العناوين والنصوص (Text Semantics)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<h1>`-`<h6>` | العناوين التدرجية للأهمية | `<h1>العنوان الرئيسي</h1>` |
| `<p>` | الفقرات النصية العادية | `<p>نص عادي جداً...</p>` |
| `<span>` | حاوية سطرية صامتة (Inline) لتمييز كلمة | `<span>كلمة حمراء</span>` |
| `<a>` | الروابط (Anchor) | `<a href="link.com">Google</a>` |
| `<br>` | كسر السطر إجبارياً للنزول للذي يليه | `سطر أول <br> سطر ثاني` |
| `<hr>` | خط أفقي تكتيكي للفصل بين المواضيع | `<hr />` |
| `<blockquote>` | اقتباس نصي طويل من مصدر خارجي | `<blockquote cite="url">Quote</blockquote>` |

### تنسيقات الكلمات الدقيقة (Formatting)
- `<strong>`: نص عريض (دلالة على <b>أهمية بالغة</b>).
- `<b>`: نص عريض (بدون أهمية دلالية).
- `<em>`: نص مائل (دلالة على <i>تشديد في النطق</i>).
- `<i>`: نص مائل كلاسيكي.
- `<mark>`: قلم فسفوري (Highlighter).
- `<del>`: شطب الكلمة دلالة على حذفها (كخصم الأسعار).
- `<sub>` / `<sup>`: الأسس الكيميائية أو الرياضية للصعود والهبوط عن السطر (H<sub>2</sub>O).

---

## 4. القوائم والجداول (Lists & Tables)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<ul>` | القائمة غير المرتبة (نقاط) | `<ul><li>تفاح</li></ul>` |
| `<ol>` | القائمة المرتبة (أرقام أو حروف) | `<ol><li>أولاً</li></ol>` |
| `<dl>` | القائمة الوصفية (قاموس) | `<dl><dt>Tea</dt><dd>Hot</dd></dl>` |
| `<table>` | العنصر الرئيسي لتغليف الجدول | `<table border="1">...</table>` |
| `<thead>` | رأس الجدول الجليدي (عناوين الأعمدة) | `<thead><tr><th>الاسم</th></tr></thead>` |
| `<tbody>` | جسد الجدول الفعلي (البيانات) | `<tbody><tr><td>أمين</td></tr></tbody>` |
| `<tr>` | الصف (Table Row) | `<tr>...</tr>` |
| `<th>` | خلية عنوان الخط (Table Header) وتأتي بخط عريض | `<th>العمر</th>` |
| `<td>` | خلية بيانات عادية (Table Data) | `<td>25</td>` |

---

## 5. النماذج واستقبال البيانات (Forms & Inputs)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<form>` | غلاف النموذج للإرسال | `<form action="/submit" method="POST">` |
| `<input>` | حقل إدخال بـ Types عملاقة | `<input type="text" placeholder="اسمك">` |
| `<label>` | ربط نص توضيحي بالحقل لزيادة مساحة الضغط | `<label for="x">السن</label> <input id="x">` |
| `<textarea>` | حقل لكتابة رسائل أو نصوص طويلة متعددة الأسطر | `<textarea rows="4"></textarea>` |
| `<select>` | لفتح قائمة منسدلة بالاختيارات المحددة | `<select><option>ذكر</option></select>` |
| `<button>` | الزر التفاعلي | `<button type="submit">إرسال</button>` |
| `<fieldset>` | صندوق لتجميع حقول النموذج ببرواز جميل | `<fieldset><legend>معلوماتك</legend></fieldset>` |

> **أشهر انواع الـ Input:** `text`, `email`, `password`, `number`, `radio` (اختيار واحد), `checkbox` (خيارات متعددة), `file`, `color`, `date`, `range`.

---

## 6. الوسائط والرسومات (Media & Graphics)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<img>` | إدراج صور مع خصائص مسار ونص المعاقين | `<img src="a.png" alt="وصف">` |
| `<audio>` | مشغل الصوتيات | `<audio src="a.mp3" controls loop></audio>` |
| `<video>` | مشغل الفيديو | `<video src="v.mp4" controls autoplay></video>` |
| `<iframe>` | لتضمين محتوى ناتج عن موقع أخر (يوتيوب مثلاً) | `<iframe src="google.com"></iframe>` |
| `<canvas>` | حاوية تُستخدم للرسم الهندسي والأنيميشن التفاعلي عبر الـ JS | `<canvas id="game"></canvas>` |
| `<svg>` | للتعامل مع الـ Vector Graphics القابلة للتمدد اللانهائي | `<svg> <circle r="50"></circle> </svg>` |

---

## 7. العناصر العصرية المتطورة (Interactive/Modern)
| التاج (Tag) | الوصف (Description) | مثال كودي (Example) |
| --- | --- | --- |
| `<details>` | حاوية أكورديون (يفتح ويغلق) بلا الحاجة لجافاسكريبت | `<details>...</details>` |
| `<summary>` | العنصر الذي يظهر دائما كعنوان للـ details | `<summary>افتحني</summary>` |
| `<dialog>` | النوافذ المنبثقة (Modals) المبنية في أصل اللغة | `<dialog open>رسالة عاجلة!</dialog>` |
| `<progress>` | شريط تحميل ونسبة مئوية مرئي | `<progress value="70" max="100"></progress>` |
| `<meter>` | قياس معدلات أو سرعات أو مساحات | `<meter value="2" min="0" max="10"></meter>` |

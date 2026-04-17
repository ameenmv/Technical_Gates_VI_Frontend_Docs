import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "بوابة التقنية",
  description: "الدليل الشامل لكورس Technical Gates VI Frontend",
  lang: 'ar-EG',
  dir: 'rtl',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'الرئيسية', link: '/' },
      { text: 'الدروس', link: '/sessions/session-1' },
      { text: 'المراجع', link: '/reference/html-tags' }
    ],
    sidebar: [
      {
        text: 'مقدمة',
        items: [
          { text: 'عن الكورس', link: '/about' }
        ]
      },
      {
        text: 'الحلقات التدريبية',
        items: [
          { text: '1. هيكلة الويب (HTML5)', link: '/sessions/session-1' },
          { text: '2. قواعد التنسيق (CSS Flexbox)', link: '/sessions/session-2' },
          { text: '3. التصميم المتجاوب (Responsive)', link: '/sessions/session-3' },
          { text: '4. أساسيات جافاسكريبت (JS Core)', link: '/sessions/session-4' },
          { text: '5. التفاعل مع الصفحة (DOM)', link: '/sessions/session-5' },
          { text: '6. الإطلاق والذكاء الاصطناعي', link: '/sessions/session-6' }
        ]
      },
      {
        text: 'مراجع سريعة (قواميس)',
        items: [
          { text: 'قاموس الـ HTML', link: '/reference/html-tags' },
          { text: 'قاموس الـ CSS', link: '/reference/css-cheatsheet' },
          { text: 'قاموس الـ JS', link: '/reference/js-dictionary' },
          { text: 'قاموس الـ Git', link: '/reference/git-dictionary' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ameenmv' }
    ],
    outline: {
        label: 'في هذه الصفحة'
    },
    docFooter: {
        prev: 'الدرس السابق',
        next: 'الدرس التالي'
    }
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap', rel: 'stylesheet' }]
  ]
})

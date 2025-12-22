export const profileData = {
  settings: {
    colors: {
      primaryStart: '#4f46e5',
      primaryEnd: '#06b6d4',
      accent: '#f59e0b',
    },
    theme: 'dark',
  },
  en: {
    name: 'Ahmed Hussein',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60',
    cover: null,
    bio: 'Security researcher and hands-on instructor. Passionate about applied pentesting, Blue/Red team labs and secure code practices.',
    education: 'B.Sc. Computer Engineering',
    joinDate: '2022-01-15',
    contact: {
      email: 'ahmed@example.com',
      phone: '+20 10 0000 0000',
      location: 'Cairo, Egypt',
      website: 'https://example.com',
    },
    skills: [
      { id: 'sk1', skill: 'Web Pentesting', visible: true },
      { id: 'sk2', skill: 'Reverse Engineering', visible: true },
      { id: 'sk3', skill: 'Python', visible: true },
      { id: 'sk4', skill: 'Docker', visible: true },
    ],
    experience: [
      {
        id: 'exp-1',
        role: 'Senior Security Engineer',
        org: 'Cyber Labs',
        from: '2023',
        to: 'Present',
        desc: 'Leading red-team simulations and training bootcamps.',
      },
      {
        id: 'exp-2',
        role: 'Security Analyst',
        org: 'InfoSec Co',
        from: '2020',
        to: '2022',
        desc: 'Appsec assessments and vulnerability triage.',
      },
    ],
    courses: [
      {
        id: 'c1',
        title: 'Web Hacking 101',
        progress: 85,
        visible: true,
        status: 'in-progress',
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=60',
      },
      {
        id: 'c2',
        title: 'Reverse Engineering Basics',
        progress: 40,
        visible: true,
        status: 'in-progress',
        image:
          'https://images.unsplash.com/photo-1555066937-8c7f1a6a9d1f?w=800&q=60',
      },
      {
        id: 'c3',
        title: 'Docker for Pentesters',
        progress: 100,
        visible: false,
        status: 'completed',
        image:
          'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=60',
      },
    ],
    certificates: [
      {
        id: 'cert-1',
        title: 'Offensive Security Certified Professional',
        date: '2024-04-01',
        course: 'OSCP',
        image:
          'https://images.unsplash.com/photo-1529336953129-0eda4a6f6a6b?w=800&q=60',
      },
    ],
    badges: [
      { id: 'b1', name: 'Top Contributor', xp: 120 },
      { id: 'b2', name: 'Lab Master', xp: 200 },
    ],
    wishlist: [
      {
        id: 'w1',
        title: 'Advanced IoT Hacking',
        image:
          'https://images.unsplash.com/photo-1568495248636-643ea27e4d1d?w=800&q=60',
      },
    ],
    labels: {
      overview: 'Overview',
      courses: 'Courses',
      certificates: 'Certificates',
      badges: 'Badges',
      wishlist: 'Wishlist',
      editProfile: 'Edit profile',
    },
  },
  ar: {
    name: 'أحمد حسين',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60',
    cover: null,
    bio: 'باحث أمني ومدرب عملي. شغوف باختبار الاختراق التطبيقي، مختبرات Red/Blue، وممارسات كتابة الكود الآمن.',
    education: 'بكالوريوس هندسة حاسبات',
    joinDate: '2022-01-15',
    contact: {
      email: 'ahmed@example.com',
      phone: '+20 10 0000 0000',
      location: 'القاهرة، مصر',
      website: 'https://example.com',
    },
    skills: [
      { id: 'sk1', skill: 'اختبار تطبيقات الويب', visible: true },
      { id: 'sk2', skill: 'هندسة عكسية', visible: true },
      { id: 'sk3', skill: 'بايثون', visible: true },
      { id: 'sk4', skill: 'دُوكر', visible: true },
    ],
    experience: [
      {
        id: 'exp-1',
        role: 'مهندس أمن أول',
        org: 'Cyber Labs',
        from: '2023',
        to: 'حتى الآن',
        desc: 'قيادة محاكاة فرق الهجوم وتدريبات البوتكامب.',
      },
      {
        id: 'exp-2',
        role: 'محلل أمن',
        org: 'InfoSec Co',
        from: '2020',
        to: '2022',
        desc: 'تقييمات أمان التطبيقات وتصنيف الثغرات.',
      },
    ],
    courses: [
      {
        id: 'c1',
        title: 'اختراق الويب 101',
        progress: 85,
        visible: true,
        status: 'in-progress',
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=60',
      },
      {
        id: 'c2',
        title: 'أساسيات الهندسة العكسية',
        progress: 40,
        visible: true,
        status: 'in-progress',
        image:
          'https://images.unsplash.com/photo-1555066937-8c7f1a6a9d1f?w=800&q=60',
      },
      {
        id: 'c3',
        title: 'دُوكر للمختبرات',
        progress: 100,
        visible: false,
        status: 'completed',
        image:
          'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=60',
      },
    ],
    certificates: [
      {
        id: 'cert-1',
        title: 'شهادة OSCP',
        date: '2024-04-01',
        course: 'OSCP',
        image:
          'https://images.unsplash.com/photo-1529336953129-0eda4a6f6a6b?w=800&q=60',
      },
    ],
    badges: [
      { id: 'b1', name: 'مساهم مميز', xp: 120 },
      { id: 'b2', name: 'سيد المختبرات', xp: 200 },
    ],
    wishlist: [
      {
        id: 'w1',
        title: 'اختراق أجهزة IoT متقدم',
        image:
          'https://images.unsplash.com/photo-1568495248636-643ea27e4d1d?w=800&q=60',
      },
    ],
    labels: {
      overview: 'نظرة عامة',
      courses: 'الدورات',
      certificates: 'الشهادات',
      badges: 'الإنجازات',
      wishlist: 'قائمة الرغبات',
      editProfile: 'تعديل الملف',
    },
  },
};

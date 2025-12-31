export const defaultCourseData = {
  meta: {
    en_data: {
      courseTitle: 'Access control vulnerability',
      courseDescription:
        'Learn how attackers exploit access control vulnerabilities in web applications...',
      difficulty: 'Intermediate',
      duration: '20 min',
      courseImage: '',
      background: '',
    },
    ar_data: {
      courseTitle: 'ثغرة التحكم في الوصول',
      courseDescription:
        'تعلم كيف يستغل المهاجمون ثغرات التحكم في الوصول في تطبيقات الويب...',
      difficulty: 'متوسط',
      duration: '20 دقيقة',
      courseImage: '',
      background: '',
    },
  },

  sections: [
    {
      en_data: [
        {
          id: 'intro',
          header: 'Intro',
          subtitle: 'introduction to Access Control',
          paragraphs: [
            'Access control is a security mechanism used to control which users or systems are allowed to access a particular resource or system.',
            'Access control can be implemented in different ways...',
          ],
          images: [],
        },
        {
          id: 'types',
          header: 'Topic 1',
          subtitle: 'Discretionary Access Control (DAC)',
          paragraphs: [
            'In this type of access control, the resource owner or administrator determines who is allowed to access a resource...',
          ],
          images: [],
        },
      ],

      ar_data: [
        {
          id: 'intro',
          header: 'المقدمة',
          subtitle: 'مقدمة في التحكم في الوصول',
          paragraphs: [
            'التحكم في الوصول هو آلية أمان تُستخدم للتحكم في المستخدمين أو الأنظمة المسموح لها بالوصول إلى مورد أو نظام معين.',
            'يمكن تنفيذ التحكم في الوصول بطرق مختلفة...',
          ],
          images: [],
        },
        {
          id: 'types',
          header: 'الموضوع 1',
          subtitle: 'التحكم في الوصول التقديري (DAC)',
          paragraphs: [
            'في هذا النوع من التحكم في الوصول، يحدد مالك المورد أو المسؤول من يُسمح له بالوصول إلى مورد ما...',
          ],
          images: [],
        },
      ],
    },
  ],

  labsLink: '/AC-Vuln/AC_Vuln_labs',
};

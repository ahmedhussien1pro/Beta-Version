export const defaultCourseData = {
  meta: {
    courseTitle: 'Access control vulnerability',
    courseDescription:
      'Learn how attackers exploit access control vulnerabilities in web applications...',
    difficulty: 'Intermediate',
    duration: '20 min',
    courseImage: '',
    background: '',
  },
  sections: [
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
  labsLink: '/AC-Vuln/AC_Vuln_labs',
};

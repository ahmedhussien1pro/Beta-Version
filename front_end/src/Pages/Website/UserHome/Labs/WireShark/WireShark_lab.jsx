import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Obfuscation/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function WireShark_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'ARP Trick',
      en_brief:
        'Analyze ARP packets and discover network manipulation techniques using Wireshark.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'خدعة ARP',
      ar_brief:
        'قم بتحليل حزم ARP واكتشف تقنيات التلاعب بالشبكة باستخدام Wireshark.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/wireshark/wireshark_lab/arp-trick',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'TCP Intrusion',
      en_brief:
        'Investigate TCP traffic patterns and identify intrusion attempts in network communications.',
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'اختراق TCP',
      ar_brief:
        'تحقق من أنماط حركة مرور TCP وحدد محاولات الاختراق في اتصالات الشبكة.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: '/wireshark/wireshark_lab/tcp-intrusion',
      image: image,
      isFree: true,
      topicsCount: 4,
    },
    {
      // English Content
      en_title: 'Stolen Flag',
      en_brief:
        'Hunt for the stolen flag in captured network traffic using advanced Wireshark analysis techniques.',
      en_difficulty: 'Hard',

      // Arabic Content
      ar_title: 'العلم المسروق',
      ar_brief:
        'ابحث عن العلم المسروق في حركة مرور الشبكة الملتقطة باستخدام تقنيات تحليل Wireshark المتقدمة.',
      ar_difficulty: 'صعب',

      // Common Data
      link: '/wireshark/wireshark_lab/stolen-flag',
      image: image,
      isFree: true,
      topicsCount: 5,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Wire Shark'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

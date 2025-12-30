import React from 'react';
import Header from '../../Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Footer/Footer';
import '../Page_Styles/Lab.css';
import labImg from '../../assets/img/Hashing/Generator.jpg';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function Hashing_labs() {
  const Labs = [
    {
      // English Content
      en_title: 'Hashing Tools',
      en_brief:
        'Generate, compare, and crack hashes, and see how salting adds security to password hashing.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'أدوات التجزئة',
      ar_brief:
        'قم بإنشاء ومقارنة وكسر التجزئات، وشاهد كيف يضيف التمليح الأمان إلى تجزئة كلمات المرور.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Hashing/Hashing_labs/lab1',
      image: labImg,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Hashing Task',
      en_brief:
        'This task helps you understand: How hashing works, Differences between MD5, SHA-1, and SHA-256, and other.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'مهمة التجزئة',
      ar_brief:
        'تساعدك هذه المهمة على فهم: كيف تعمل التجزئة، الاختلافات بين MD5 و SHA-1 و SHA-256، وغيرها.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Hashing/Hashing_labs/lab2',
      image: labImg,
      isFree: true,
      topicsCount: 4,
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Hashing'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}

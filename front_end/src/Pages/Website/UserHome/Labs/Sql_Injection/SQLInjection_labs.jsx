import React from 'react';
import Header from '../../Header/Header';
import '../Page_Styles/Lab.css';
import labImg from '../../assets/img/SQL_Injection/lab.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function SQLInjection_lab() {
  const Labs = [
    {
      title: 'vulnerability allowing login bypass',
      link: '/Sql_Injection/sql_Injection_lab/login',
      image: labImg,
      brief: [
        'This lab contains a SQL injection vulnerability in the login function.',
        <br />,
        <b>To solve the lab:</b>,
        ' perform a SQL injection attack that logs in to the application as the ',
        <mark>Ahmed</mark>,
        ' user.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'vulnerability in WHERE clause allowing retrieval of hidden data',
      link: '/Sql_Injection/sql_Injection_lab/second_lab/our_store',
      image: labImg,
      brief: [
        ' This lab contains a SQL injection vulnerability in the product category filter. When the user selects a category, the application carries out a SQL query like the following:  ',
        <br />,
        <code>
          <mark>To solve the lab:</mark>
        </code>,
        <br />,
        <b>To solve the lab:</b>,
        ' perform a SQL injection attack that causes the application to display one or more unreleased products. ',
      ],
      difficulty: 'Easy',
    },
    {
      title:
        'UNION attack, determining the number of columns returned by the query',
      link: '/Sql_Injection/sql_Injection_lab/third_lab/show-prices',
      image: labImg,
      brief: [
        <b>To solve the lab:</b>,
        ' determine the number of columns returned by the query by performing a SQL injection ',
        <mark>UNION</mark>,
        ' attack that returns an additional row containing null values.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'UNION attack, finding a column containing text',
      link: '/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices',
      image: labImg,
      brief: [
        'The lab will provide a random value that you need to make appear within the query results.',
        <br />,
        <b>To solve the lab:</b>,
        <i>
          perform a SQL injection UNION attack that returns an additional row
          containing the value provided. This technique helps you determine
          which columns are compatible with string data.
        </i>,
      ],
      difficulty: 'Easy',
    },
  ];
  return (
    <>
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'SQL Injection'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return (
                <Card
                  title={lab.title}
                  link={lab.link}
                  image={lab.image}
                  brief={lab.brief}
                  difficulty={lab.difficulty}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

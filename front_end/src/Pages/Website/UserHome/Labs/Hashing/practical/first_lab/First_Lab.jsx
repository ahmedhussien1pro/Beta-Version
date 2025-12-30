import React from 'react';
import './First_Lab.css';
import CrackerImage from '../../../../assets/img/Hashing/Cracker.jpg';
import ComparatorImage from '../../../../assets/img/Hashing/Comparator.jpg';
import GeneratorImage from '../../../../assets/img/Hashing/Generator.jpg';
import SaltingImage from '../../../../assets/img/Hashing/Salting.jpg';
import { Card } from '../../../../Components/Card/Card';
import GoBackBtn from '../../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../../../../Components/ShowHint_Btn/ShowHint_Btn';
import Go2TopBtn from '../../../../Components/Go2Top_Btn/Go2Top_Btn';
import ThemeSwitcher from '../../../../Components/ThemeSwitcher/ThemeSwitcher';
const HashingLab = () => {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        
      </li>
    </ul>
  `;
  const Tools = [
    {
      title: 'Hash Generator',
      brief: 'Generate MD5, SHA-1, and SHA-256 hashes for any text input.',
      link: '/Hashing/Hashing_labs/lab1/HashGenerator',
      image: GeneratorImage,
      difficulty: 'Easy',
    },
    {
      title: 'Hash Comparator',
      brief:
        'Compare two hashes to see if they match. Useful for verifying data integrity.',
      link: '/Hashing/Hashing_labs/lab1/HashComparator',
      image: ComparatorImage,
      difficulty: 'Easy',
    },
    {
      title: 'Hash Cracker',
      brief:
        'Attempt to crack common password hashes using a dictionary attack (for educational purposes only).',
      link: '/Hashing/Hashing_labs/lab1/HashCracker',
      image: CrackerImage,
      difficulty: 'Easy',
    },
    {
      title: 'Salting Demo',
      brief:
        'See how salting adds security to password hashing by adding a random string before hashing.',
      link: '/Hashing/Hashing_labs/lab1/SaltingDemo',
      image: SaltingImage,
      difficulty: 'Easy',
    },
  ];
  return (
    <>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <ThemeSwitcher />
      <div className='course'>
        <div className='container mt-5'>
          <div className='secondary-bg primary-text shadow-lg mb-5'>
            <div className='card-body p-4 '>
              <h1 className='title-gradient text-center my-4'>Hashing Lab</h1>
              <p>
                Hashing is the process of converting an input (which can be a
                password, a file, or any message) into a fixed-length string of
                bytes. The output, or hash, is unique to the input data, and
                even a small change in the input will produce a completely
                different hash. Hashing is used in various applications, such as
                password storage, digital signatures, and data integrity checks.
              </p>
              <div className='note'>
                Below are some hashing tools, including a Hash Generator, Hash
                Comparator, Hash Cracker, and Salting Demo. Explore them to
                learn more about hashing!
              </div>
            </div>
          </div>

          <div className='row'>
            {Tools.map((tool, index) => (
              <Card
                key={index}
                title={tool.title}
                brief={tool.brief}
                link={tool.link}
                image={tool.image}
                difficulty={tool.difficulty}
              />
            ))}
          </div>
        </div>
      </div>
      <Go2TopBtn />
    </>
  );
};

export default HashingLab;

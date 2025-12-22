import { Route } from 'react-router-dom';
import HASHING from '../../Pages/Website/UserHome/Labs/Hashing/Hashing.jsx';
import HASHING_LABS from '../../Pages/Website/UserHome/Labs/Hashing/Hashing_labs.jsx';
import HASHING_FIRST_LAB from '../../Pages/Website/UserHome/Labs/Hashing/practical/first_lab/First_Lab.jsx';
import HashGenerator from '../../Pages/Website/UserHome/Labs/Hashing/practical/first_lab/HashGenerator.jsx';
import HashComparator from '../../Pages/Website/UserHome/Labs/Hashing/practical/first_lab/HashComparator.jsx';
import HashCracker from '../../Pages/Website/UserHome/Labs/Hashing/practical/first_lab/HashCracker.jsx';
import SaltingDemo from '../../Pages/Website/UserHome/Labs/Hashing/practical/first_lab/SaltingDemo.jsx';
import HASHING_SECOND_LAB from '../../Pages/Website/UserHome/Labs/Hashing/practical/second_lab/Second_Lab.jsx';
const HashingRoutes = (
  <>
    <Route path='/Hashing' element={<HASHING />} />
    <Route path='/Hashing/Hashing_labs' element={<HASHING_LABS />} />
    <Route path='/Hashing/Hashing_labs/lab1' element={<HASHING_FIRST_LAB />} />
    <Route
      path='/Hashing/Hashing_labs/lab1/HashGenerator'
      element={<HashGenerator />}
    />
    <Route
      path='/Hashing/Hashing_labs/lab1/HashComparator'
      element={<HashComparator />}
    />
    <Route
      path='/Hashing/Hashing_labs/lab1/HashCracker'
      element={<HashCracker />}
    />
    <Route
      path='/Hashing/Hashing_labs/lab1/SaltingDemo'
      element={<SaltingDemo />}
    />
    <Route path='/Hashing/Hashing_labs/lab2' element={<HASHING_SECOND_LAB />} />
  </>
);

export default HashingRoutes;

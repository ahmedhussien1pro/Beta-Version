import { Route } from 'react-router-dom';
import CSRF from '../../Pages/Website/UserHome/Labs/CSRF/CSRF.jsx';
import CSRF_LABS from '../../Pages/Website/UserHome/Labs/CSRF/CSRF_labs.jsx';
import CSRF_FIRST_LAB from '../../Pages/Website/UserHome/Labs/CSRF/practical/first_lab/First_Lab.jsx';
import CSRF_SECOND_LAB from '../../Pages/Website/UserHome/Labs/CSRF/practical/second_lab/Second_Lab.jsx';
import CSRF_THIRD_LAB from '../../Pages/Website/UserHome/Labs/CSRF/practical/third_lab/Third_Lab.jsx';
import CSRF_FOURTH_LAB from '../../Pages/Website/UserHome/Labs/CSRF/practical/quiz/MCQQuiz.jsx';
const CSRFRoutes = (
  <>
    <Route path='/CSRF' element={<CSRF />} />
    <Route path='/CSRF/CSRF_labs' element={<CSRF_LABS />} />
    <Route path='/CSRF/CSRF_labs/first_lab' element={<CSRF_FIRST_LAB />} />
    <Route path='/CSRF/CSRF_labs/second_lab' element={<CSRF_SECOND_LAB />} />
    <Route path='/CSRF/CSRF_labs/third_lab' element={<CSRF_THIRD_LAB />} />
    <Route path='/CSRF/CSRF_labs/MCQQuiz' element={<CSRF_FOURTH_LAB />} />
  </>
);

export default CSRFRoutes;

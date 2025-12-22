import { Route } from 'react-router-dom';
import REGEX from '../../Pages/Website/UserHome/Labs/Regex/Regex.jsx';
import REGEX_LABS from '../../Pages/Website/UserHome/Labs/Regex/Regex_labs.jsx';
import REGEX_FIRST_LAB from '../../Pages/Website/UserHome/Labs/Regex/practical/first_lab/First_Lab.jsx';
import REGEX_SECOND_LAB from '../../Pages/Website/UserHome/Labs/Regex/practical/second_lab/Second_Lab.jsx';
const REGEXRoutes = (
  <>
    <Route path='/Regex' element={<REGEX />} />
    <Route path='/Regex/Regex_labs' element={<REGEX_LABS />} />
    <Route path='/Regex/Regex_labs/MCQReview' element={<REGEX_FIRST_LAB />} />
    <Route
      path='/Regex/Regex_labs/CompleteReview'
      element={<REGEX_SECOND_LAB />}
    />
  </>
);

export default REGEXRoutes;

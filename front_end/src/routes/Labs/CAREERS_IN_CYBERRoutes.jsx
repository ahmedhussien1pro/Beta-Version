import { Route } from 'react-router-dom';
import CAREERS_IN_CYBER from '../../Pages/Website/UserHome/Labs/CareersInCyber/CareersInCyber.jsx';
import CAREERS_IN_CYBER_MCQ from '../../Pages/Website/UserHome/Labs/CareersInCyber/CareersInCyber_labs.jsx';
import CAREERS_IN_CYBER_MCQ_PAGE from '../../Pages/Website/UserHome/Labs/CareersInCyber/practical/MCQ/MCQPage.jsx';
import CAREERS_IN_CYBER_MORE from '../../Pages/Website/UserHome/Labs/CareersInCyber/more/MorePage.jsx';
const CAREERS_IN_CYBERRoutes = (
  <>
    <Route path='/CareersInCyber' element={<CAREERS_IN_CYBER />} />
    <Route
      path='/CareersInCyber/CareersInCyber_MCQ'
      element={<CAREERS_IN_CYBER_MCQ />}
    />

    <Route
      path='/CareersInCyber/CareersInCyber_MCQ/:category/MCQ'
      element={<CAREERS_IN_CYBER_MCQ_PAGE />}
    />
    <Route
      path='/CareersInCyber/CareersInCyber_labs/:page'
      element={<CAREERS_IN_CYBER_MORE />}
    />
  </>
);

export default CAREERS_IN_CYBERRoutes;

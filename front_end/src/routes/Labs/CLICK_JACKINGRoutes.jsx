import { Route } from 'react-router-dom';
import CLICK_JACKING from '../../Pages/Website/UserHome/Labs/Click-Jacking/Click_Jacking.jsx';
import CLICK_JACKING_LABS from '../../Pages/Website/UserHome/Labs/Click-Jacking/Click_Jacking_labs.jsx';
import CLICK_JACKING_FIRST_LAB from '../../Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/First_Lab.jsx';
import CLICK_JACKING_FIRST_LAB_AFFIRMATION from '../../Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/Affirmation.jsx';
import CLICK_JACKING_EDIT_INFO from '../../Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/EditInfo.jsx';
import CLICK_JACKING_EXPLOIT_PANEL from '../../Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/ExploitPanel.jsx';
const CLICK_JACKINGRoutes = (
  <>
    <Route path='/Click_Jacking' element={<CLICK_JACKING />} />
    <Route
      path='/Click_Jacking/Click_Jacking_labs'
      element={<CLICK_JACKING_LABS />}
    />
    <Route
      path='/Click_Jacking/Click_Jacking_labs/lab1'
      element={<CLICK_JACKING_FIRST_LAB />}
    />
    <Route
      path='/Click_Jacking/Click_Jacking_labs/lab1/affirmation'
      element={<CLICK_JACKING_FIRST_LAB_AFFIRMATION />}
    />
    <Route
      path='/Click_Jacking/Click_Jacking_labs/lab1/EditInfo'
      element={<CLICK_JACKING_EDIT_INFO />}
    />
    {/* CLICK_JACKING_EXPLOIT_PANEL */}
    <Route
      path='/Click_Jacking/Click_Jacking_labs/lab1/EditInfo/ExploitPanel'
      element={<CLICK_JACKING_EXPLOIT_PANEL />}
    />
  </>
);

export default CLICK_JACKINGRoutes;

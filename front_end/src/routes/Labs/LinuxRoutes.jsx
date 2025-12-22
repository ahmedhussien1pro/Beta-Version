import { Route } from 'react-router-dom';
import Linux from '../../Pages/Website/UserHome/Labs/Linux/Linux.jsx';
import LINUX_LAB from '../../Pages/Website/UserHome/Labs/Linux/Linux_lab.jsx';
import LINUX_FIRST_LAB from '../../Pages/Website/UserHome/Labs/Linux/practical/first_lab/Patient.jsx';
import LINUX_SECOND_LAB from '../../Pages/Website/UserHome/Labs/Linux/practical/second_lab/Power.jsx';
import LINUX_THIRD_LAB from '../../Pages/Website/UserHome/Labs/Linux/practical/fourth_lab/Test.jsx';
import LINUX_FOURTH_LAB from '../../Pages/Website/UserHome/Labs/Linux/practical/third_lab/Welcome.jsx';
const LinuxRoutes = (
  <>
    <Route path='/linux' element={<Linux />} />
    <Route path='/linux/linux_lab' element={<LINUX_LAB />} />
    <Route path='/linux/linux_lab/patient' element={<LINUX_FIRST_LAB />} />
    <Route
      path='/linux/linux_lab/power-of-command'
      element={<LINUX_SECOND_LAB />}
    />
    <Route path='/linux/linux_lab/Welcome' element={<LINUX_FOURTH_LAB />} />
    <Route
      path='/linux/linux_lab/test-yourself'
      element={<LINUX_THIRD_LAB />}
    />
  </>
);

export default LinuxRoutes;

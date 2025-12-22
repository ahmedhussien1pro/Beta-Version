import { Route } from 'react-router-dom';
import XSS from '../../Pages/Website/UserHome/Labs/XSS/XSS.jsx';
import XSS_LAB from '../../Pages/Website/UserHome/Labs/XSS/XSS_lab.jsx';
import XSS_FIRST from '../../Pages/Website/UserHome/Labs/XSS/Practical/First_lab.jsx';
import XSS_SECOND from '../../Pages/Website/UserHome/Labs/XSS/Practical/Second_lab.jsx';
import XSS_THIRD from '../../Pages/Website/UserHome/Labs/XSS/Practical/Third_lab.jsx';
import XSS_FOURTH from '../../Pages/Website/UserHome/Labs/XSS/Practical/Fourth_lab.jsx';
import Robots from '../../Pages/Website/UserHome/Labs/XSS/Practical/Robots.jsx';
import XSS_SEVEN from '../../Pages/Website/UserHome/Labs/XSS/Practical/XSS_SEVEN.jsx';
import PyramidsOfGiza from '../../Pages/Website/UserHome/Labs/XSS/Practical/PyramidsOfGiza.jsx';
import EiffelTower from '../../Pages/Website/UserHome/Labs/XSS/Practical/EiffelTower.jsx';
import ChichenItza from '../../Pages/Website/UserHome/Labs/XSS/Practical/ChichenItza.jsx';
import TajMahal from '../../Pages/Website/UserHome/Labs/XSS/Practical/TajMahal.jsx';
import ParadiseOfHawaii from '../../Pages/Website/UserHome/Labs/XSS/Practical/ParadiseOfHawaii.jsx';
import Colosseum from '../../Pages/Website/UserHome/Labs/XSS/Practical/Colosseum.jsx';
const XSSRoutes = (
  <>
    <Route path='/xss' element={<XSS />} />
    <Route path='/xss/xss_labs' element={<XSS_LAB />} />
    <Route path='/xss/xss_lab/first_lab' element={<XSS_FIRST />} />
    <Route path='/xss/xss_lab/second_lab' element={<XSS_SECOND />} />
    <Route path='/xss/xss_lab/third_lab' element={<XSS_THIRD />} />
    <Route path='/xss/xss_lab/fourth_lab' element={<XSS_FOURTH />} />
    <Route path='/xss/xss_lab/fourth_lab/Robots_Details' element={<Robots />} />
    <Route path='/xss/xss_lab/seven_lab' element={<XSS_SEVEN />} />
    <Route
      path='/xss/xss_lab/seven_lab/details/Pyramids-of-Giza'
      element={<PyramidsOfGiza />}
    />
    <Route
      path='/xss/xss_lab/seven_lab/details/The-Eiffel-Tower'
      element={<EiffelTower />}
    />
    <Route
      path='/xss/xss_lab/seven_lab/details/Pyramid-of-Chichén Itzá'
      element={<ChichenItza />}
    />
    <Route
      path='/xss/xss_lab/seven_lab/details/The-Taj-Mahal'
      element={<TajMahal />}
    />
    <Route
      path='/xss/xss_lab/seven_lab/details/Paradise-of-Hawaii'
      element={<ParadiseOfHawaii />}
    />
    <Route
      path='/xss/xss_lab/seven_lab/details/Colosseum'
      element={<Colosseum />}
    />
  </>
);

export default XSSRoutes;

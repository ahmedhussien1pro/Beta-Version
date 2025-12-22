import { Route } from 'react-router-dom';
import JWTAttacks from '../../Pages/Website/UserHome/Labs/JWTAttacks/JWTAttacks.jsx';
import JWTATTACKS_LAB from '../../Pages/Website/UserHome/Labs/JWTAttacks/JWTAttacks_lab.jsx';
import JWTATTACKS_ADMIN1 from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_1/lab1_admin.jsx';
import JWTATTACKS_USER1 from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_1/lab1_user.jsx';
import JWTATTACKS_ADMIN2 from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_2/lab2_admin.jsx';
import JWTATTACKS_USER2 from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_2/lab2_user.jsx';
import JWTATTACKS_ADMIN3 from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_3/lab3_admin.jsx';
import JWTATTACKS_USER3 from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_3/lab3_user.jsx';
import JWT_LAB_FIRST from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_1/lab1.jsx';
import JWT_LAB_SECOND from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_2/lab2.jsx';
import JWT_LAB_THIRD from '../../Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_3/lab3.jsx';
const JwtRoutes = (
  <>
    <Route path='/jwtattacks' element={<JWTAttacks />} />
    <Route path='/jwtattacks/jwtattacks_lab' element={<JWTATTACKS_LAB />} />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab1/admin'
      element={<JWTATTACKS_ADMIN1 />}
    />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab1/user'
      element={<JWTATTACKS_USER1 />}
    />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab2/admin'
      element={<JWTATTACKS_ADMIN2 />}
    />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab2/user'
      element={<JWTATTACKS_USER2 />}
    />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab3/admin'
      element={<JWTATTACKS_ADMIN3 />}
    />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab3/user'
      element={<JWTATTACKS_USER3 />}
    />
    <Route path='/jwtattacks/jwtattacks_lab/lab1' element={<JWT_LAB_FIRST />} />
    <Route
      path='/jwtattacks/jwtattacks_lab/lab2'
      element={<JWT_LAB_SECOND />}
    />
    <Route path='/jwtattacks/jwtattacks_lab/lab3' element={<JWT_LAB_THIRD />} />
  </>
);

export default JwtRoutes;

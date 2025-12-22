import { Route } from 'react-router-dom';
import AC_VULN from '../../Pages/Website/UserHome/Labs/AC-Vuln/AC_Vuln.jsx';
import AC_VULN_LABS from '../../Pages/Website/UserHome/Labs/AC-Vuln/AC_Vuln_labs.jsx';
import AC_VULN_FIRST_LAB from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/first_lab/First_Lab.jsx';
import AC_VULN_SECOND_LAB from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/second_lab/Second_Lab.jsx';
import AC_VULN_THIRD_LAB from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/third_lab/Third_Lab.jsx';
import AC_VULN_THIRD_LAB_LOGIN from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/third_lab/Third_Lab_LoginForm.jsx';
import AC_VULN_TXT_FILE from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/first_lab/TextFileViewer.jsx';
import AC_VULN_USERS from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/first_lab/UserList.jsx';
import AC_VULN_USERS2 from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/second_lab/UserList.jsx';
import AC_VULN_USERS3 from '../../Pages/Website/UserHome/Labs/AC-Vuln/practical/third_lab/UserList.jsx';
const AC_VULNRoutes = (
  <>
    <Route path='/AC_Vuln' element={<AC_VULN />} />
    <Route path='/AC-Vuln/AC_Vuln_labs' element={<AC_VULN_LABS />} />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/first_lab'
      element={<AC_VULN_FIRST_LAB />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/second_lab'
      element={<AC_VULN_SECOND_LAB />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/third_lab'
      element={<AC_VULN_THIRD_LAB />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/first_lab/robots.txt'
      element={<AC_VULN_TXT_FILE />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/first_lab/administrator-panel'
      element={<AC_VULN_USERS />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/second_lab/admin-qfn717'
      element={<AC_VULN_USERS2 />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/third_lab/admin'
      element={<AC_VULN_USERS3 />}
    />
    <Route
      path='/AC-Vuln/AC_Vuln_labs/third_lab/login'
      element={<AC_VULN_THIRD_LAB_LOGIN />}
    />
  </>
);

export default AC_VULNRoutes;

import { Route } from 'react-router-dom';
import API_HACKING from '../../Pages/Website/UserHome/Labs/Api-Hacking/Api_Hacking.jsx';
import API_HACKING_LABS from '../../Pages/Website/UserHome/Labs/Api-Hacking/Api_Hacking_labs.jsx';
import API_HACKING_FIRST_LAB from '../../Pages/Website/UserHome/Labs/Api-Hacking/practical/first_lab/First_Lab.jsx';
import API_HACKING_SECOND_LAB from '../../Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/Second_Lab.jsx';
import DashboardAdmin from '../../Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/DashboardUser/DashboardAdmin.jsx';
import Dashboard1 from '../../Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/DashboardUser/Dashboard1.jsx';
import UsersPage from '../../Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/UsersPage.jsx';
const API_HACKINGRoutes = (
  <>
    <Route path='/Api_Hacking' element={<API_HACKING />} />
    <Route
      path='/Api_Hacking/Api_Hacking_labs'
      element={<API_HACKING_LABS />}
    />
    <Route
      path='/Api_Hacking/Api_Hacking_labs/lab1'
      element={<API_HACKING_FIRST_LAB />}
    />
    <Route
      path='/Api_Hacking/Api_Hacking_labs/lab2'
      element={<API_HACKING_SECOND_LAB />}
    />
    <Route
      path='/Api_Hacking/Api_Hacking_labs/lab2/users.json'
      element={<UsersPage />}
    />
    <Route
      path='/Api_Hacking/Api_Hacking_labs/lab2/DashboardAdmin/:id'
      element={<DashboardAdmin />}
    />
    <Route
      path='/Api_Hacking/Api_Hacking_labs/lab2/DashboardUser/:id'
      element={<Dashboard1 />}
    />
  </>
);

export default API_HACKINGRoutes;

import { Route } from 'react-router-dom';
import BL_VULN from '../../Pages/Website/UserHome/Labs/BL-Vuln/BL_Vuln.jsx';
import BL_VULN_LABS from '../../Pages/Website/UserHome/Labs/BL-Vuln/BL_Vuln_labs.jsx';
import BL_VULN_FIRST_LAB from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/First_Lab.jsx';
import BL_VULN_FIRST_LAB_CART from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/CartPage.jsx';
import BL_VULN_FIRST_LAB_DETAIL_PAGE from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/DetailPage.jsx';
import BL_VULN_FIRST_LAB_LOGIN from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/LoginPage.jsx';
import BL_VULN_FIRST_LAB_MY_ACCOUNT from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/MyAccountPage.jsx';
import BL_VULN_SECOND_LAB from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/Second_Lab.jsx';
import BL_VULN_SECOND_LAB_CART from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/CartPage.jsx';
import BL_VULN_SECOND_LAB_DETAIL_PAGE from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/DetailPage.jsx';
import BL_VULN_SECOND_LAB_LOGIN from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/LoginPage.jsx';
import BL_VULN_SECOND_LAB_MY_ACCOUNT from '../../Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/MyAccountPage.jsx';
const BL_VULNRoutes = (
  <>
    <Route path='/BL_Vuln' element={<BL_VULN />} />
    <Route path='/BL-Vuln/BL_Vuln_labs' element={<BL_VULN_LABS />} />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/first_lab'
      element={<BL_VULN_FIRST_LAB />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/first_lab/cart'
      element={<BL_VULN_FIRST_LAB_CART />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/first_lab/ProductDetail/:id'
      element={<BL_VULN_FIRST_LAB_DETAIL_PAGE />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/first_lab/login'
      element={<BL_VULN_FIRST_LAB_LOGIN />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/first_lab/myaccount'
      element={<BL_VULN_FIRST_LAB_MY_ACCOUNT />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/second_lab'
      element={<BL_VULN_SECOND_LAB />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/second_lab/cart'
      element={<BL_VULN_SECOND_LAB_CART />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/second_lab/ProductDetail/:id'
      element={<BL_VULN_SECOND_LAB_DETAIL_PAGE />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/second_lab/login'
      element={<BL_VULN_SECOND_LAB_LOGIN />}
    />
    <Route
      path='/BL-Vuln/BL_Vuln_labs/second_lab/myaccount'
      element={<BL_VULN_SECOND_LAB_MY_ACCOUNT />}
    />
  </>
);

export default BL_VULNRoutes;

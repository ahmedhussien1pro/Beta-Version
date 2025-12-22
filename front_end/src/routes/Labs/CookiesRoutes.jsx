import { Route } from 'react-router-dom';
import Cookies from '../../Pages/Website/UserHome/Labs/Cookies/Cookies.jsx';
import COOKIES_LAB from '../../Pages/Website/UserHome/Labs/Cookies/Cookies_lab.jsx';
import CookiesFirstLogin from '../../Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Login_page.jsx';
import CookiesFirstAdmin from '../../Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Admin.jsx';
import CookiesFirstSupport from '../../Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Support.jsx';
import CookiesSecondlogin from '../../Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Login_page.jsx';
import CookiesSecondAdmin from '../../Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Admin.jsx';
import CookiesSecondSupport from '../../Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Support.jsx';
const CookiesRoutes = (
  <>
    <Route path='/cookies' element={<Cookies />} />
    <Route path='/cookies/cookies_lab' element={<COOKIES_LAB />} />
    <Route
      path='/cookies/cookies_lab/first/login'
      element={<CookiesFirstLogin />}
    />
    <Route
      path='/cookies/cookies_lab/first/admin'
      element={<CookiesFirstAdmin />}
    />
    <Route
      path='/cookies/cookies_lab/first/support'
      element={<CookiesFirstSupport />}
    />
    <Route
      path='/cookies/cookies_lab/second/login'
      element={<CookiesSecondlogin />}
    />
    <Route
      path='/cookies/cookies_lab/second/admin'
      element={<CookiesSecondAdmin />}
    />
    <Route
      path='/cookies/cookies_lab/second/support'
      element={<CookiesSecondSupport />}
    />
  </>
);

export default CookiesRoutes;

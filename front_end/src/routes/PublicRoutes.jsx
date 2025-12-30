import { Route } from 'react-router-dom';
import HomePage from '../Pages/Website/HomePage';
import Login from '../Pages/Auth/Login-Register/LoginForm.jsx';
import Authenticate from '../Pages/Auth/Authincate-Number/Authincate.jsx';
import PrivacyPolicy from '../Pages/Auth/PrivacyPolicy.jsx';
import DataDeletion from '../Pages/Auth/DataDeletion.jsx';
import Error404 from '../Pages/Auth/Page-404/404.jsx';
import Contact from '../Pages/Website/Contact/Contact.jsx';
import AboutUs from '../Pages/Website/AboutUs/AboutUs.jsx';
import ComingSoon from '../Pages/Website/ComingSoon/ComingSoon.jsx';
import SubscriptionPlans from '../Pages/Website/SubscriptionPlans/SubscriptionPlans.jsx';
import AdminDashboard from '../Components/Dashboards/Admin/AdminDashboard.jsx';
const PublicRoutes = (
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Login />} />
    <Route path='/authenticate' element={<Authenticate />} />
    <Route path='/*' element={<Error404 />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about-us' element={<AboutUs />} />
    <Route path='/coming-soon' element={<ComingSoon />} />
    <Route path='/subscription-plans' element={<SubscriptionPlans />} />
    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    <Route path='/data-deletion' element={<DataDeletion />} />
    <Route path='/dashboard/admin' element={<AdminDashboard />} />
  </>
);

export default PublicRoutes;

import { Route } from 'react-router-dom';
import SQL_INJECTION from '../../Pages/Website/UserHome/Labs/Sql_Injection/Sql_Injection.jsx';
import SQLInjection from '../../Pages/Website/UserHome/Labs/Sql_Injection/SQLInjection_labs.jsx';
import LoginSqlInjection from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/first_lab/LoginSqlInjection.jsx';
import Welcome from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/first_lab/Welcome.jsx';
import OUR_STORE from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/second_lab/Our_Store.jsx';
import WITH_STOCK from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/second_lab/With_Stock.jsx';
import SHOW_PRICES from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/third_lab/Show_prices.jsx';
import SHOW_PRICES2 from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/fourth_lab/Show_prices.jsx';
import FINISH_TEST from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/third_lab/Finish_test.jsx';
import FINISH_TEST2 from '../../Pages/Website/UserHome/Labs/Sql_Injection/practical/fourth_lab/Finish_test.jsx';
const SqlInjectionRoutes = (
  <>
    <Route path='/sql_Injection' element={<SQL_INJECTION />} />
    <Route
      path='/sql_Injection/sql_Injection_labs'
      element={<SQLInjection />}
    />
    <Route
      path='/Sql_Injection/sql_Injection_lab/login'
      element={<LoginSqlInjection />}
    />
    <Route
      path='/Sql_Injection/sql_Injection_lab/Welcome'
      element={<Welcome />}
    />
    <Route
      path='/Sql_Injection/sql_Injection_lab/second_lab/our_store'
      element={<OUR_STORE />}
    />
    <Route
      path="/Sql_Injection/sql_Injection_lab/second_lab/our_store'+or+1=1--"
      element={<WITH_STOCK />}
    />

    <Route
      path='/Sql_Injection/sql_Injection_lab/third_lab/show-prices'
      element={<SHOW_PRICES />}
    />
    <Route
      path='/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices'
      element={<SHOW_PRICES2 />}
    />
    <Route
      path="/Sql_Injection/sql_Injection_lab/third_lab/show-prices'+union+select+null,+null,+null--"
      element={<FINISH_TEST />}
    />

    <Route
      path='/Sql_Injection/sql_Injection_lab/fourth_lab/show-prices'
      element={<SHOW_PRICES2 />}
    />
    <Route
      path="/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices'+UNION+SELECT+NULL,'abcdef',NULL--"
      element={<FINISH_TEST2 />}
    />
  </>
);

export default SqlInjectionRoutes;

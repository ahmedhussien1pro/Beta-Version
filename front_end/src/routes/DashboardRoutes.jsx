import { Route } from 'react-router-dom';
import RequireAuth from '../Pages/Auth/RequireAuth';

import Dashboard from '../Pages/Dashboard/Dashboard';
import Users from '../Pages/Dashboard/Users/Users';
import User from '../Pages/Dashboard/User/User';
import AddUser from '../Pages/Dashboard/AddUser/AddUser';

import Settings from '../Pages/Dashboard/Settings/Settings';

const DashboardRoutes = (
  <>
    {/* Protected Dashboard */}
    <Route element={<RequireAuth allowedRole={['writer', 'admin']} />}>
      <Route path='/dashboard' element={<Dashboard />}>
        {/* Admin only */}
        <Route element={<RequireAuth allowedRole={['admin']} />}>
          <Route path='users' element={<Users />} />
          <Route path='user/edit/:id' element={<User />} />
          <Route path='user/add' element={<AddUser />} />
        </Route>

        {/* Writer + Admin */}
        <Route element={<RequireAuth allowedRole={['writer', 'admin']} />}>
          <Route path='settings' element={<Settings />} />
        </Route>
      </Route>
    </Route>
  </>
);

export default DashboardRoutes;

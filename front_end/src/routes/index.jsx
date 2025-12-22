import { Routes } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import AuthRoutes from './AuthRoutes';
import LabsRoutes from './Labs';
import DashboardRoutes from './DashboardRoutes';

const AppRoutes = () => (
  <Routes>
    {PublicRoutes}
    {AuthRoutes}
    {LabsRoutes}
    {DashboardRoutes}
  </Routes>
);

export default AppRoutes;

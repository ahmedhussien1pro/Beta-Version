import React from 'react';
// import Topbar from '../../Components/Dashboard/Topbar';
// import Sidebar from '../../Components/Dashboard/Sidebar';
// import { Outlet } from 'react-router-dom';
import './dashboard.css';
import AdminDashboard from '../../Components/Dashboards/Admin/AdminDashboard';

export default function Dashboard() {
  return (
    // <div className='dashboard'>
    //   <Topbar />
    //   <div className='side-effect'>
    //     <Sidebar />
    //   </div>
    //   <Outlet />
    // </div>
    <>
      <AdminDashboard />
    </>
  );
}

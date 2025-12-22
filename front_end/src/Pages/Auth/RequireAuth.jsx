import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';
import Error403 from './Page-403/403';
import axios from 'axios';
import Preloader from '../Website/Preloader/Preloader';
export default function RequireAuth({ allowedRole }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cookie = Cookie();
  const token = cookie.get('CuberWeb');

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        setLoading(false);
        navigate('/login', { replace: true });
        return;
      }

      try {
        const res = await axios.get(
          'https://digitopia-project-backend.vercel.app/api/user',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data.data);
      } catch (error) {
        console.error('Auth error:', error);
        cookie.remove('CuberWeb'); // مهم
        navigate('/login', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token, navigate]);

  if (loading) return <Preloader loading={loading} />;

  if (!user) return <Navigate to='/login' replace />;

  return allowedRole.includes(user.role) ? (
    <Outlet />
  ) : (
    <Error403 role={user.role} />
  );
}

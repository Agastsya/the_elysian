import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContext from '../context/PageContext';
import toast from 'react-hot-toast';

const UserProfile = () => {
  const navigate = useNavigate();
  const [isAuthenticated] = useContext(PageContext);
  useEffect(() => {
    isAuthenticated
      ? navigate('/')
      : toast.error('Login or Register for access') && navigate('/login');
  });

  return <div>UserProfile</div>;
};

export default UserProfile;

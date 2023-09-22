import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContext from '../context/PageContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { apiserver } from '../..';
import { HStack, Text, VStack } from '@chakra-ui/react';

const UserProfile = () => {
  const { user, setUser } = useContext(PageContext);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(PageContext);
  useEffect(() => {
    isAuthenticated
      ? navigate('/account')
      : toast.error('Login or Register for access') && navigate('/login');

    axios
      .get(`${apiserver}/me`, {
        withCredentials: true,
      })
      .then(res => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      });
  });

  return (
    <>
      <VStack>
        <HStack>
          <Text>Name:</Text>
          <Text>{user?.name}</Text>
        </HStack>
        <HStack>
          <Text>Email:</Text>
          <Text>{user?.email}</Text>
        </HStack>
      </VStack>
    </>
  );
};

export default UserProfile;

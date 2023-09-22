import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContext from '../context/PageContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { apiserver } from '../..';
import { HStack, Text, VStack } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

const UserProfile = () => {
  const { user, setUser } = useContext(PageContext);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(PageContext);
  useEffect(() => {
    isAuthenticated
      ? console.log('user is authenticated')
      : toast.error('Login or Register for access') && navigate('/login');

    const { data } = axios
      .get(`${apiserver}/me`, {
        withCredentials: true,
      })
      .then(res => {
        setUser(data?.name);
        setIsAuthenticated(true);
      });
  });

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default UserProfile;

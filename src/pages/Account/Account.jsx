import React, { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthProvider';
import UserProfile from '../../components/UserProfile/UserProfile';

const Account = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <UserProfile user={user} />
  );
};

export default Account;

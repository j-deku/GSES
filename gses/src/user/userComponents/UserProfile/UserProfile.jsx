import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

function UserProfile() {
  const { userData } = useContext(StoreContext);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      <img src={userData.picture} alt="User Profile Picture" />
    </div>
  );
}

export default UserProfile;
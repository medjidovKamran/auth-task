import React from 'react';

const Profile = ({ state }) => {
  return (
    <div>
      <h1>HELLO {state.user.email}</h1>
      <p>You're account create at {state.user.createdAt}</p>
    </div>
  );
};

export default Profile;

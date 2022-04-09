import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
  const {user} = useFirebase()
  return (
    <div>
      <h2>This is home</h2>
    {user? user.displayName : "voot"}
    </div>
  );
};

export default Home;
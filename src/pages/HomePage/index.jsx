import React, { useEffect } from 'react';
import ButtonLogout from '../../components/buttons/buttonLogOut';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
export default function Homepage() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });
  }, []);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      Homepage welcome
      <ButtonLogout click={handleSignOut} />
    </div>
  );
}

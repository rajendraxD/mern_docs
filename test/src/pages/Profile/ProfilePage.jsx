import React from 'react'
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const ProfilePage = () => {
  const { setTitle } = useOutletContext(); // Get from context
  useEffect(() => {
    if (setTitle) {
      setTitle('Profile')
    }
  }, [setTitle])
  return (
    <div>Profile Page</div>
  )
}

export default ProfilePage
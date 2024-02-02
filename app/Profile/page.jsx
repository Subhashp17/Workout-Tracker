// @pages/profilePage.js
"use client"

// @pages/profilePage.js

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import ProfileCard from '@components/Profile';

const ProfilePage = () => {
  const { data: session } = useSession();

  // Use useEffect to conditionally set the userId
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (session) {
      setUserId(session.user.id);
    }
  }, [session]);

  // Initial height and weight, you can fetch them from the backend if needed
  const initialHeight = 170;
  const initialWeight = 70;

  const [height, setHeight] = useState(initialHeight);
  const [weight, setWeight] = useState(initialWeight);

  const handleUpdateProfile = async (hi,we) => {

    try {
      if (!userId) {
        console.error('User ID not available.');
        return;
      }
       console.log(height);
      // Make the API call to update the profile on the backend
      const response = await fetch(`/api/update-profile/${userId}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ h: hi, w: we }),
      });

      if (response.ok) {
        // If the update is successful, update the state with the new values
        setHeight(height);
        setWeight(weight);
      } else {
        // Handle errors here
        console.error('Failed to update profile:', response.statusText);
      }
    } catch (error) {
      // Handle other errors
      console.error('Error updating profile:', error);
    }
  };

  // Ensure that the session is available before rendering
  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Render other content on the profile page */}
      <h1>User Profile</h1>

      {/* Render the ProfileCard and pass the initial values and the callback function */}
      <ProfileCard
        initialHeight={height}
        initialWeight={weight}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
};

export default ProfilePage;

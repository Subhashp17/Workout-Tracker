// @components/ProfileCard.js

import { useState } from 'react';

const ProfileCard = ({ initialHeight, initialWeight, onUpdateProfile }) => {
  const [height, setHeight] = useState(initialHeight);
  const [weight, setWeight] = useState(initialWeight);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleUpdateProfile = () => {
    // Notify the parent (ProfilePage) about the changes
    onUpdateProfile({ height, weight });
  };

  return (
    <div>
      {/* Render UI for profile card, including input fields for height and weight */}
      <label>
        Height:
        <input type="text" value={height} onChange={handleHeightChange} />
      </label>
      <label>
        Weight:
        <input type="text" value={weight} onChange={handleWeightChange} />
      </label>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}; 

export default ProfileCard;

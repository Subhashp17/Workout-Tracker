// pages/api/users/[userId]/profile.js

import { connectToDB } from '@utils/database';
import user from '@models/user';

export const PUT = async (req, {params}) => {



  try {
    const { h, w} = await req.json();
    console.log(req.json());
    await connectToDB();
    console.log(params.id)

    // Check if the user's profile exists
    const existingProfile = await user.findById(params.id );
    console.log(existingProfile)

    if (!existingProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Update the height and weight
    existingProfile.height = h;
    existingProfile.weight = w;

    // Save the updated profile
    await existingProfile.save();

    return  new Response("Success", {status: 200})
  } catch (error) {

    console.error('Error updating user profile:', error);
    return new Response(error,{status : 500})
  }
};

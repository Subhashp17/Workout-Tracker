import { connectToDB } from "@utils/database";
import User from "@models/user";
import { ObjectId } from "mongodb";

export const PUT = async (req, { params }) => {
  console.log(params.id);
  try {
    const { userId } = await req.json();
    await connectToDB();
    const user = await User.findById(userId);
    console.log(user);
    const updatedUser = await User.findByIdAndUpdate(
      params.id,
      { $addToSet: { friends: user } }, // Add the logged-in user to the friends list
      { new: true } // This option returns the updated document
    );

    console.log(User);

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
    });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

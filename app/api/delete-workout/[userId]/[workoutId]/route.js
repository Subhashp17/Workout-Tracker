import { connectToDB } from '@utils/database';
import Workout from '@models/workout';

export const DELETE = async (req, {params}) => {

  try {
    await connectToDB();

    // Check if the workout exists
    const existingWorkout = await Workout.findById(params.workoutId);

    if (!existingWorkout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    // Check if the user is the creator of the workout
    if (existingWorkout.creator.toString() !== params.userId) {
      return res.status(403).json({ message: 'Unauthorized to delete this workout' });
    }

    // Delete the workout
    await existingWorkout.deleteOne();

    return res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Error deleting workout:', error);
    return res.status(500).json({ message: 'Failed to delete workout' });
  }
};

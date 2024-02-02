import  {connectToDB } from '@utils/database';
import Workout from'@models/workout';


export const POST = async(req,res)=>{
    
    const {userId, workout , reps, weights }= await req.json();
    try {
        await connectToDB();
        const newWorkout = new Workout({
            creator : userId,
            workout,reps,weights
        })

        await newWorkout.save();
        return new Response(JSON.stringify(newWorkout), {status:201})

    }catch(error){
        return new Response("Failed to create a new Prompt ", {status:500});

    }

}
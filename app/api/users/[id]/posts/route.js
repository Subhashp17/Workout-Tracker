import { connectToDB } from '@utils/database';
import workout from '@models/workout';

export const GET = async (request , {params}) => {
    console.log(params.id)
    try{
        await connectToDB();
        const workouts = await workout.find({creator : params.id});
        console.log(workouts)

        return new Response(JSON.stringify(workouts),{
            status: 200
        })

    }catch(error){
        return new Response("Failed to fetch all prompts", {status : 500})

    }
}
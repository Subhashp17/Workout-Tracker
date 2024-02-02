import  {connectToDB } from '@utils/database';
import user from'@models/user';


export const POST = async(req,res)=>{
    
    const {height,weight }= await req.json();
    try {
        await connectToDB();
        const newWorkout = new User({
            height,weight
        })

        await newWorkout.save();
        return new Response(JSON.stringify(newWorkout), {status:201})

    }catch(error){
        return new Response("Failed to create a new Prompt ", {status:500});

    }

}
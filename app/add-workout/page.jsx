"use client"
import {useState} from 'react';
import {useSession} from 'next-auth/react';
import Form from '@components/Form';
import {useRouter} from 'next/navigation';


const AddWorkout = () => {
    const router = useRouter();
    const {data:session} = useSession();

    const [submitting, setSubmitting] = useState(false);
    const[post,setPost]= useState({
        workout: '',
        reps: 0,
        weights: 0.0,
    });

    const addWorkout = async (e) => {

        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/add-workout/new',{
                method:'POST',
                body:JSON.stringify({
                    workout:post.workout,
                    userId: session?.user.id,
                    reps : post.reps,
                    weights:post.weights

                })
            })
            if(response.ok){
                router.push('/')

            }
        }catch(error){
          console.log(error)
        }finally{
            setSubmitting(false);
        }

    }
  return (
    <Form
    type= "Create"
    post = {post}
    setPost = {setPost}
    submitting= {submitting}
    handleSubmit={addWorkout}

    
    />
  )
}

export default AddWorkout
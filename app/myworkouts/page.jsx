// pages/myWorkouts.js
"use client"
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import MyWorkOuts from '@components/MyWorkOuts';
import Workoutcard from '@components/Workoutcard';

const WorkOutCardList = ({ data, onDelete }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Workoutcard key={post._id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

const myWorkouts = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]); // Include session in the dependency array

  const handleDelete = async (postId) => {
    try {
      // Send delete request to the backend
      const response = await fetch(`/api/delete-workout/${session?.user.id}/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the delete request is successful, update the state to remove the deleted post
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      } else {
        // Handle error if the delete request fails
        console.error('Failed to delete workout');
      }
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <section>
      <MyWorkOuts name="My" desc="List of Workouts" data={posts} />
      <WorkOutCardList data={posts} onDelete={handleDelete} />
    </section>
  );
};

export default myWorkouts;

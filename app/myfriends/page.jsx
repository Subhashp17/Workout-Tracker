"use client"
import React, { useState } from 'react';
import {useSession} from 'next-auth/react';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friend List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

const AddFriend = ({ onAddFriend }) => {
const { data: session } = useSession();
  const [newFriend, setNewFriend] = useState('');

  const handleAddFriend = async (e) => {

    e.preventDefault();
    setNewFriend(true);

    try{
        const response = await fetch(`/api/add-friend/${session?.user.id}/add`,{
            method:'PUT',
            body:JSON.stringify({
                userId: newFriend,

            })
        })
        if(response.ok){
            router.push('/')

        }
    }catch(error){
      console.log(error)
    }finally{
        setNewFriend(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
    <h2 className="text-lg font-semibold mb-4">Add Friend</h2>
    <input
      type="text"
      className="w-full border border-gray-300 rounded-md p-2 mb-4"
      placeholder="Enter friend's name"
      value={newFriend}
      onChange={(e) => setNewFriend(e.target.value)}
    />
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      onClick={handleAddFriend}
    >
      Add Friend
    </button>
  </div>
  
  );
};

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  return (
    <section>
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
  <h1 className="text-2xl font-bold mb-4">Friends Page</h1>
  <AddFriend onAddFriend={handleAddFriend} />
  
</div>


</section>

  );
};

export default FriendsPage;

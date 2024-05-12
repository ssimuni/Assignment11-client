import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Need_Volunteer_card from './Need_Volunteer_card';

const Need_Volunteer = () => {
    const newPosts = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = newPosts.filter(post =>
        post.postTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <h1 className=' font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text mt-20'>Volunteers Need Now</h1>


            <div className='mx-auto justify-center'>

                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by Post Title"
                    className="w-[800px] flex mx-auto px-4 py-2 mb-4 border rounded-lg border-black"
                />

                <div className='lg:grid lg:grid-cols-2'>
                    {filteredPosts.map((newPost, index) => (
                        <div key={newPost._id}>
                            <Need_Volunteer_card newPost={newPost} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Need_Volunteer
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Need_Volunteer_card from './Need_Volunteer_card';

const Need_Volunteer = () => {
    const newPosts = useLoaderData();
    return (
        <div>
            <h1 className=' font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text mt-20'>Volunteers Need Now</h1>


            <div className='mx-auto justify-center'>
                <div className='lg:grid lg:grid-cols-2'>
                    {newPosts.map((newPost, index) => (
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
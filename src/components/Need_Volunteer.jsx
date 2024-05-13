import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import Need_Volunteer_card from './Need_Volunteer_card';
import { Helmet } from 'react-helmet-async';
import Need_Volunteer_table from './Need_Volunteer_table';
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdFormatLineSpacing } from "react-icons/md";

const Need_Volunteer = () => {

    useEffect(() => {
        document.title = 'Need Volunteer';
    }, []);

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    const newPosts = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [isCardView, setIsCardView] = useState(true);

    const filteredPosts = newPosts.filter(post =>
        post.postTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const toggleLayout = () => {
        setIsCardView((prev) => !prev);
    };

    return (
        <div>
            <h1 className=' font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text mt-20'>Volunteers Need Now</h1>


            <div className='mx-auto justify-center'>

                <div className='flex'> <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by Post Title"
                    className="lg:w-[800px] flex mx-auto px-4 py-2 mb-4 border rounded-lg border-black "
                />

                    <button
                        className=' text-white font-bold w-8 h-8 mx-auto -ml-20 rounded p-2'
                        onClick={toggleLayout} style={gradientBackground}
                    >
                        {isCardView ? <RiLayoutGrid2Fill /> : <MdFormatLineSpacing />}
                    </button></div>



                <div className=''>
                    {isCardView ? (
                        <div className='lg:grid lg:grid-cols-3 mx-auto'>
                            {filteredPosts.map((newPost, index) => (
                                <Need_Volunteer_card key={newPost._id} newPost={newPost} />
                            ))}
                        </div>
                    ) : (
                        <div>
                            {filteredPosts.map((newPost, index) => (
                                <Need_Volunteer_table key={newPost._id} newPost={newPost} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Need_Volunteer
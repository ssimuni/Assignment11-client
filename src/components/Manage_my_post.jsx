import React, { useContext, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';
import Manage_my_post_table from './Manage_my_post_table';
import Volunteer_request_table from './Volunteer_request_table';

const Manage_my_post = () => {
    const posts = useLoaderData();
    const { user } = useContext(AuthContext);
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await fetch('http://localhost:5000/volunteer-requests');
                if (response.ok) {
                    const data = await response.json();
                    setInfos(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchInfo();
    }, []);

    const myPosts = posts.filter(post => {
        return (
            post.name === user.displayName &&
            post.email === user.email
        );
    });


    return (
        <div>
            <h1 className='mt-20 font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text'>My Need Volunteer Posts</h1>

            <section class="container mx-auto p-6 font-mono">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">

                            <div className=''>

                                {
                                    myPosts.map(post => <Manage_my_post_table
                                        key={post._id}
                                        post={post}
                                    ></Manage_my_post_table>)
                                }

                            </div>
                        </table>
                    </div>
                </div>
            </section>

            <h1 className='mt-20 font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text'>My Volunteer Request Posts</h1>

            <section class="container mx-auto p-6 font-mono">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">

                            <div className=''>

                                {
                                    infos.map(info => <Volunteer_request_table
                                        key={info._id}
                                        info={info}
                                    ></Volunteer_request_table>)
                                }

                            </div>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Manage_my_post
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData, useParams } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Details = () => {

    const posts = useLoaderData();

    useEffect(() => {
        document.title = 'Details';
    }, []);
    const { _id } = useParams();

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    const post = posts.find(post => post._id === _id);

    const handleVolunteerClick = (e) => {

        if (post.no === 0) {
            Swal.fire({
                icon: 'error',
                title: 'No need!',
                text: 'No volunteers needed at the moment!',
            });
            e.preventDefault();
        }
    };

    // console.log(post);

    return (
        <div>
            <div class="ml-20 antialiased text-gray-900 mt-20">
                <div>

                    <img src={post.thumbnail} alt=" random imgee" class=" object-cover w-[800px] h-96 object-center rounded-lg shadow-md" />


                    <div class="relative rounded-lg -mt-20 w-[400px] bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 mx-auto p-1 shadow-lg">
                        <div class="bg-white p-6 rounded-lg shadow-lg">

                            <h4 class="text-center mb-2 mt-1 text-xl font-semibold uppercase leading-tight text-transparent bg-gradient-to-r from-orange-300 via-red-700 to-purple-800 bg-clip-text">{post.postTitle}</h4>

                            <div class="flex items-baseline">
                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Deadline
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-s font-semibold tracking-wider">
                                    {post.deadline}
                                </div>
                            </div>

                            <div class="flex mt-2 items-baseline">
                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Location
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-s font-semibold tracking-wider">
                                    {post.location}
                                </div>
                            </div>


                            <div class="flex mt-2 items-baseline">
                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Number of volunteer Needed
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-s font-semibold tracking-wider">
                                    {post.no}
                                </div>
                            </div>



                            <div class="flex my-2 items-baseline">

                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    category
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-sm font-semibold tracking-wider">
                                    {post.category}
                                </div>
                            </div>


                            <h4 class="mt-1 text-m font-semibold uppercase leading-tight text-transparent bg-gradient-to-r from-orange-300 via-red-700 to-purple-800 bg-clip-text">Description</h4>

                            <div class="mt-1">
                                {post.description}
                            </div>


                            <div className="mt-2 grid grid-cols-1 grid-rows-2 gap-4 border-t border-gray-400 pb-3 pt-3">
                                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                    <FaUserTie />
                                    <span className="xl:mt-0 ml-3"> {post.name} </span>
                                </p>

                                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                    <IoIosMail />
                                    <span className="mt-0 ml-3">{post.email}</span>
                                </p>
                                <Link onClick={handleVolunteerClick} className="btn uppercase text-sm font-bold tracking-wide bg-opacity-10 text-gray-100  mt-3 p-3 rounded-lg w-full 
                   focus:outline-none focus:shadow-outline" to={`/be-volunteer/${_id}`} style={gradientBackground}>
                                    Be a Volunteer
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Details
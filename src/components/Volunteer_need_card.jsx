import React from 'react'
import '../App.css'
const Volunteer_need_card = ({ newPost }) => {

    const { _id, thumbnail, postTitle, category, deadline } = newPost;

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    return (
        <div>
            <div class="wrapper -mb-20 antialiased text-gray-900">
                <div>

                    <img src={thumbnail} alt=" random imgee" class=" object-cover w-[400px] h-80 object-center rounded-lg shadow-md" />


                    <div class="relative rounded-lg -mt-16 w-[350px] bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 mx-auto p-1 shadow-lg">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="flex items-baseline">
                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Deadline
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-s font-semibold tracking-wider">
                                    {deadline}
                                </div>
                            </div>

                            <h4 class="mt-1 text-m font-semibold uppercase leading-tight text-transparent bg-gradient-to-r from-orange-300 via-red-700 to-purple-800 bg-clip-text">{postTitle}</h4>

                            <div class="mt-1">
                                {category}
                            </div>
                            <button className="uppercase text-sm font-bold tracking-wide bg-opacity-10 text-gray-100  mt-3 p-3 rounded-lg w-full 
                   focus:outline-none focus:shadow-outline" style={gradientBackground}>
                                View Details
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Volunteer_need_card
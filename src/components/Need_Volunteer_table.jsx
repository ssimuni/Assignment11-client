import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';


const Need_Volunteer_table = ({ newPost }) => {


    const { _id, location, no, thumbnail, postTitle, category, deadline } = newPost;

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };

    return (
        <div> <table class="lg:w-full">
            <tbody class="bg-white">
                <tr class="text-gray-700 lg:w-full border">
                    <td class="px-4 py-3 lg:w-[500px]">
                        <div class="flex items-center text-sm">
                            <div class="relative lg:w-8 lg:h-8 w-12 h-6 mr-3 lg:rounded-full md:block">
                                <img class="object-cover w-full h-full lg:rounded-full" src={thumbnail} alt="" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div className=''>
                                <p class="font-semibold text-black">{postTitle}</p>
                            </div>
                        </div>
                    </td>

                    <td class="px-4 py-3 text-ms font-semibold lg:w-[400px] text-center">{location}</td>

                    <td class="px-4 py-3 text-xs text-center lg:w-[400px]">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {category} </span>
                    </td>


                    <td className="text-xs w-24">
                        <Link to={`/details/${_id}`} className='text-center p-1 lg:p-2 text-white justify-center rounded' style={gradientBackground}>
                            View Details
                        </Link>
                    </td>


                </tr>

            </tbody>
        </table></div>
    )
}

export default Need_Volunteer_table
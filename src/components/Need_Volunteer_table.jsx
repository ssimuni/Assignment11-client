import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';


const Need_Volunteer_table = ({ newPost }) => {


    const { _id, location, no, thumbnail, postTitle, category, deadline } = newPost;

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };

    return (
        <div> <table class="w-full">
            <tbody class="bg-white">
                <tr class="text-gray-700 w-full">
                    <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img class="object-cover w-full h-full rounded-full" src={thumbnail} alt="" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div className=''>
                                <p class="font-semibold text-black">{postTitle}</p>

                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">{location}</td>
                    <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {category} </span>
                    </td>


                    <td className="text-xs">
                        <Link to={`/details/${_id}`} className='text-center p-2 text-white justify-center rounded' style={gradientBackground}>
                            View Details
                        </Link>
                    </td>


                </tr>

            </tbody>
        </table></div>
    )
}

export default Need_Volunteer_table
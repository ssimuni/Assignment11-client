import React from 'react'
import '../App.css'
const Need_Volunteer_card = ({ newPost }) => {

    const { _id, location, thumbnail, postTitle, category, deadline } = newPost;

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    return (
        <div>
            <div class="my-10 antialiased text-gray-900">
                <div className=''>

                    <div>
                        <img src={thumbnail} alt=" random imgee" class=" object-cover w-[400px] h-80 object-center rounded-lg shadow-md lg:ml-20" />
                    </div>



                    <div class="relative rounded-lg lg:mr-10 -mt-20 w-[350px] bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 mx-auto p-1 shadow-lg">
                        <div class="bg-white p-6 rounded-lg shadow-lg">

                            <h4 class="mt-1 text-m font-semibold uppercase leading-tight text-transparent bg-gradient-to-r from-orange-300 via-red-700 to-purple-800 bg-clip-text mb-5">{postTitle}</h4>

                            <div class="flex items-baseline">

                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Deadline
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-s font-semibold tracking-wider">
                                    {deadline}
                                </div>
                            </div>


                            <div class="flex my-2 items-baseline">

                                <span style={gradientBackground} class="bg-teal-200 text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    category
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-sm font-semibold tracking-wider">
                                    {category}
                                </div>
                            </div>

                            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                                <svg class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path></svg>
                                <span class="mt-2 xl:mt-0">
                                    {location}
                                </span>
                            </p>

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

export default Need_Volunteer_card
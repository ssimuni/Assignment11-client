import React from 'react'
import Swal from 'sweetalert2';

const Volunteer_request_table = ({ info }) => {


    const { _id, thumbnail, title, category, deadline, location } = info || {};

    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment11server-ssimunis-projects.vercel.app/volunteer-requests/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        //  console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your request has been canceled. Reload This page.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>

            <section class="container mx-auto p-6 font-mono">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <tbody class="bg-white">
                                <tr class="text-gray-700 w-full">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                                <img class="object-cover w-full h-full rounded-full" src={thumbnail} alt="" loading="lazy" />
                                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div className=''>
                                                <p class="font-semibold text-black">{title}</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{location}</td>
                                    <td class="px-4 py-3 text-xs">
                                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {category} </span>
                                    </td>




                                    <td class="px-4 py-3 text-xs "><button className='text-center p-2 text-white justify-center rounded' style={gradientBackground} onClick={() => handleDelete(_id)}>Cancel</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Volunteer_request_table
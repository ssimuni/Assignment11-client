import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

const Requests_received = ({ info, onUpdate }) => {

    const { _id, thumbnail, name, email, postTitle } = info || {};
    const [status, setStatus] = useState(localStorage.getItem(_id) || 'Pending');

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
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem(_id, 'Rejected');
                setStatus('Rejected');
                Swal.fire({
                    title: "Rejected!",
                    text: "Request has been rejected. Reload This page.",
                    icon: "success"
                });

            }
        })
    }


    const handleAccept = _id => {
        localStorage.setItem(_id, 'Accepted');
        setStatus('Accepted');
        Swal.fire({
            title: "Accepted!",
            text: "Request has been accepted. Reload This page.",
            icon: "success"
        });

    }

    useEffect(() => {
        localStorage.setItem(_id, status);
    }, [status, _id]);

    return (
        <div>

            <section class="container mx-auto p-6 font-mono">
                <div class="w-full  overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full border">
                            <tbody class="bg-white">
                                <tr class="text-gray-700 w-full">
                                    <td class="px-4 py-3 lg:w-[400px]">
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
                                    <td class="px-4 py-3 text-ms font-semibold lg:w-[250px]">{name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold lg:w-[300px]">{email}</td>

                                    <td className="px-4 py-3 text-xs text-right">
                                        {status === 'Pending' &&
                                            <button className='text-center p-2 text-white justify-center rounded' style={gradientBackground} onClick={handleAccept}>Accept</button>
                                        }
                                        
                                        {status === 'Accepted' && <p className='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 text-center rounded-lg'>Accepted</p>}
                                        {status === 'Rejected' && <p className='px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 text-center rounded-lg'>Rejected</p>}
                                    </td>

                                    <td className="px-4 py-3 text-xs text-right">
                                        {status === 'Pending' &&
                                            <button className='text-center p-2 text-white justify-center rounded' style={gradientBackground} onClick={handleDelete}>Reject</button>
                                        }
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Requests_received
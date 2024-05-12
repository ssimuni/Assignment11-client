import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from 'react-helmet-async';

const Add_Volunteer_Post = () => {

    useEffect(() => {
        document.title = 'Add Volunteer Post Page';
    }, []);
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };

    const handleAddPost = event => {
        event.preventDefault();
        const form = event.target;

        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const category = form.category.value;
        const location = form.location.value;
        const no = form.no.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const email = form.email.value;
        const name = form.name.value;

        const newPost = { name, email, thumbnail, title, category, location, no, deadline, description };

        console.log(newPost);

        fetch('http://localhost:5000/volunteer-posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added painting!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <div>
            <section className="gradient-form h-full mt-20">
                <div className="container h-full p-10 mx-auto">
                    <div
                        className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 border">
                        <div className="w-full">
                            <div
                                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">

                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">

                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-48"
                                                    src="logo.png"
                                                    alt="logo" />
                                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                </h4>
                                            </div>

                                            <form onSubmit={handleAddPost}>
                                                <div className="flex text-center mx-auto">
                                                    <h1 className="font-bold uppercase text-4xl bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Add Volunteer Post</h1>
                                                </div>

                                                <div className="relative mt-5">
                                                    <input
                                                        id="thumbnail"
                                                        name="thumbnail"

                                                        type="text"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Thumbnail"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-sm font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Thumbnail</label>
                                                </div>

                                                <div className="relative mt-5">
                                                    <input
                                                        id="title"
                                                        name="title"

                                                        type="text"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Title"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-sm font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Title</label>
                                                </div>

                                                <div className="relative mt-5">
                                                    <textarea
                                                        id="description"
                                                        name="description"

                                                        type="text"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="description"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-sm font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Description</label>
                                                </div>

                                                <div className="relative mt-5">
                                                    <input
                                                        id="category"
                                                        name="category"

                                                        type="text"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Category"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-sm font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Category</label>
                                                </div>

                                                <div className="relative mt-5">
                                                    <input
                                                        id="location"
                                                        name="location"

                                                        type="text"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Location"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-sm font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Location</label>
                                                </div>

                                                <div className="relative mt-5">
                                                    <input
                                                        id="no"
                                                        name="no"

                                                        type="text"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="No. of volunteers needed"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-sm font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">No. of volunteers needed</label>
                                                </div>

                                                <div className="relative mt-5">
                                                    <span className='bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text mr-5 font-bold'>Deadline: </span>
                                                    <DatePicker
                                                        id="deadline"
                                                        name="deadline"
                                                        toggleCalendarOnIconClick
                                                        selected={selectedDate}
                                                        onChange={(date) => setSelectedDate(date)}
                                                        className='bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text font-bold'

                                                    />

                                                </div>



                                                <div className="relative mt-5">
                                                    <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        id="email"
                                                        name="email"
                                                        value={user.email}
                                                        type="email"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Email"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text font-bold">Email</label>
                                                </div>


                                                <div className="relative my-5">
                                                    <input
                                                        id='name'
                                                        name="name"
                                                        value={user.displayName}
                                                        type="name"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Name"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text font-bold">Name</label>
                                                </div>


                                                <div className="mb-12 pb-1 pt-1 text-center">

                                                    <button className="uppercase text-sm font-bold tracking-wide bg-opacity-10 text-gray-100 p-3 rounded-lg w-full 
                   mb-4 focus:outline-none focus:shadow-outline" style={gradientBackground}>
                                                        Add Post
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    <div
                                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                                        style={gradientBackground}>
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            <h4 className="mb-6 text-xl font-semibold">
                                                We are more than just a company
                                            </h4>
                                            <p className="text-sm">
                                                Looking to make a difference? Join our vibrant volunteer community today and lend a helping hand where it's needed most! At VolunTree, we connect passionate individuals with meaningful volunteer opportunities across diverse causes. Whether you're passionate about environmental conservation, community outreach, education, or healthcare, we have opportunities that match your interests and skills. Make a positive impact alongside like-minded individuals and organizations dedicated to creating positive change. Embrace the joy of giving back and be part of something bigger than yourself. Sign up now and start your volunteer journey with us! Together, let's build a brighter, more compassionate world, one act of kindness at a time. Join us and make every moment count.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Add_Volunteer_Post
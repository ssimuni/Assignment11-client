import React from 'react'
import { useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    useEffect(() => {
        document.title = 'Register';
    }, []);
    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [photo, setPhoto] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
       // console.log(e.currentTarget);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
     //   console.log(email, password, name)

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 character long.');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter.');
            return;
        }

        if (!/[a-z]/.test(password)) {
            setRegisterError('Password must contain at least one lowercase letter.');
            return;
        }

        if (password)
            await createUser(email, password, name, photo)
                .then(result => {
                  //  console.log(result.user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registration Successful!',
                    });
                    logOut();
                    navigate('/login');
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: error.message,
                    });
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

                                            <form onSubmit={handleRegister}>
                                                <div className="flex text-center mx-auto">
                                                    <h1 className="font-bold uppercase text-4xl bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Register Here</h1>
                                                </div>

                                                <div className=" mt-5">
                                                    <div className="relative mt-5">
                                                        <input id="name"
                                                            name="name"
                                                            type="text"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none       focus:borer-rose-600"
                                                            placeholder="Name"
                                                            required />

                                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                                    </div>
                                                    <div className="relative mt-5">
                                                        <input id="email"
                                                            name="email"
                                                            type="email"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                            placeholder="Email"
                                                            required />
                                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                                    </div>
                                                    <div className="relative mt-5">
                                                        <input id="photo"
                                                            name="photo"
                                                            type="text"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                            placeholder="Profile Picture UR"
                                                            required />
                                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Profile Picture URL</label>
                                                    </div>
                                                    <div className="relative mt-5">
                                                        <input id="pass"
                                                            name="password"
                                                            type="password"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                            placeholder="Password"
                                                            required />
                                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                                    </div>
                                                    {
                                                        registerError && <p className="text-red-600">{registerError}</p>
                                                    }
                                                </div>


                                                {/* <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                                        type="button"
                                                        data-twe-ripple-init
                                                        data-twe-ripple-color="light"
                                                        style={gradientBackground}>
                                                        Register
                                                    </button>

                                                </div> */}


                                                <div className="my-2 pb-1 pt-1 text-center" >
                                                    <button className="uppercase mt-5 text-sm font-bold tracking-wide bg-opacity-10 text-gray-100 p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline" style={gradientBackground}>
                                                        Register
                                                    </button>
                                                </div>


                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 me-2">Already have an account?</p>
                                                    <Link to="/login">
                                                        <button
                                                            type="button"
                                                            className="inline-block rounded border border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                                                        >
                                                            Login
                                                        </button></Link>

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
            </section></div>
    )
}

export default Register
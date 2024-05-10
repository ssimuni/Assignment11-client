import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login Successful!',
                });
                setEmail('');
                setPassword('');
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password. Please try again.',
                });
            })
    }
    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Google Login Successful!',
            });
            setEmail('');
            setPassword('');
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Google Login Failed',
                text: 'Failed to sign in with Google.',
            });
        }
    };
    return (
        <div >
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

                                            <form onSubmit={handleLogin}>
                                                <div className="flex text-center mx-auto">
                                                    <h1 className="font-bold uppercase text-4xl bg-gradient-to-r from-orange-400 to-orange-900 inline-block text-transparent bg-clip-text">Login Here</h1>
                                                </div>

                                                <div className="relative mt-5">
                                                    <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        id="email"
                                                        name="email"
                                                        value={email}
                                                        type="email"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Email"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                                </div>


                                                <div className="relative my-5">
                                                    <input
                                                        onChange={(e) => setPassword(e.target.value)} id="pass"
                                                        name="password"
                                                        value={password}
                                                        type="password"
                                                        className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-black focus:outline-none focus:borer-rose-600"
                                                        placeholder="Password"
                                                        required />
                                                    <label for="password" className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                                </div>


                                                <div className="mb-12 pb-1 pt-1 text-center">

                                                    <button className="uppercase text-sm font-bold tracking-wide bg-opacity-10 text-gray-100 p-3 rounded-lg w-full 
                   mb-4 focus:outline-none focus:shadow-outline" style={gradientBackground}>
                                                        Login
                                                    </button>



                                                    <button onClick={handleGoogleLogin} className="w-full group h-10 px-5 border border-black rounded-full transition duration-300 
 hover:border-orange-400 focus:bg-blue-50 active:bg-blue-100">
                                                        <div className="relative flex items-center space-x-4 justify-center">
                                                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                                            <div></div>
                                                            <span className="block w-max font-semibold tracking-wide text-black text-sm transition duration-300 group-hover:text-orange-600 sm:text-base">Continue with Google</span>
                                                        </div>

                                                    </button>
                                                </div>


                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <Link to="/register">
                                                        <button
                                                            type="button"
                                                            className="inline-block rounded border border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out"
                                                        >
                                                            Register
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
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequat.
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

export default Login
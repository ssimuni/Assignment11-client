
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet-async';

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './styles.css'
import Volunteer_need_card from './Volunteer_need_card';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        document.title = 'Homepage';
    }, []);

    const newPosts = useLoaderData();
    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };
    return (
        <div className='light:bg-white'>

            <h1 className='mt-20 font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text'>Become a Volunteer and Be the Change.</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slideToClickedSlide={true}
                loop={true}

                breakpoints={{

                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },

                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1430: {
                        width: 1430,
                        slidesPerView: 3,
                    },
                }}
                clickable={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container mt-10"
            >

                <SwiperSlide>
                    <img src="1.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="2.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="3.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="4.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="5.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="6.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="7.jpg" className='border shadow-lg' alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="8.jpg" className='border-b border-black shadow-lg' alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>

            <h1 className=' font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text'>Volunteers Need Now</h1>
            <div className=' my-10 art-card-table'>
                <div className='lg:grid lg:grid-cols-3 mx-auto '>
                    {newPosts.map((newPost, index) => (
                        <div key={newPost._id}>
                            <Volunteer_need_card newPost={newPost} />
                        </div>
                    ))}
                </div>
            </div>

            <Link to="/need-volunteer">
                <button className="uppercase text-sm font-bold tracking-wide bg-opacity-10 text-gray-100  mt-3 p-3 rounded-lg lg:w-[500px] mx-auto flex place-content-center
                   focus:outline-none focus:shadow-outline" style={gradientBackground}>
                    See All
                </button>
            </Link>


            <h1 className='mt-20 font-bold uppercase text-5xl bg-gradient-to-r from-orange-100 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text'>Our Features</h1>

            <section className="p-4 lg:p-8 light:bg-white  dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="1.jpg" alt="" className="h-60 w-60  aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Virtual Gallery</h3>
                            <p className="my-6 dark:text-gray-600">Step into a world where art comes alive with our interactive virtual gallery feature. Showcase your artwork in a dynamic digital space that mimics a real gallery setting. Upload your paintings or drawings and watch as they transform into stunning exhibits that visitors can explore virtually.  </p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="3.jpg" alt="" className="h-60  aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Online Drawing Tools and Tutorials</h3>
                            <p className="my-6 dark:text-gray-600">Unleash your creativity with our integrated online drawing tools and tutorials. Create art directly on our website using a suite of digital brushes, diverse color palettes, and layering capabilities for intricate compositions. </p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="4.jpg" alt="" className="h-60   aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Community and Collaboration Hub</h3>
                            <p className="my-6 dark:text-gray-600"> Join a vibrant artistic community within our dedicated networking and collaboration hub. Engage with like-minded artists through forums, groups, challenges, and contests tailored to your interests.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">

                    <h1 className='mt-20 font-bold uppercase text-5xl bg-gradient-to-r from-orange-200 via-red-700 to-purple-800 
            text-center my-10 text-transparent bg-clip-text'>The talented people behind the scenes</h1>

                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                <p>Visual Designer</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                <p>Visual Designer</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                <p>Visual Designer</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                <p>Visual Designer</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                <p>Visual Designer</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                                <p>Visual Designer</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
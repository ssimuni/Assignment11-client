import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from "./errorlottie"
import groovyWalkAnimation from "./groovyWalk.json";


const Error = () => {
    return (
        <div class="h-screen w-screen flex items-center">
            <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-black">
                <div class="max-w-md">
                    <p
                        class="text-2xl md:text-3xl font-light leading-normal"
                    >Sorry we couldn't find this page. </p>
                    <p class="mb-8">But don't worry, you can find plenty of other things on our homepage.</p>

                    <Link to="/">
                        <button class="bg-gradient-to-r from-green-200 to-green-600 px-4 inline py-2 text-sm font-medium leading-5 shadow text-white hover:bg-blue-400 rounded-lg">Back to homepage</button>
                    </Link>


                </div>
                <div class="max-w-lg">
                    <Lottie
                        options={{
                            animationData: animationData,
                            loop: true,
                            autoplay: true
                        }}
                    />
                    <Lottie animationData={animationData} loop={true} />;
                </div>

            </div>
        </div>
    )
}

export default Error
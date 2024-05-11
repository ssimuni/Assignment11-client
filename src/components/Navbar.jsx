import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [loadingUser, setLoadingUser] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        setLoadingUser(true);
        const timeout = setTimeout(() => {
            setLoadingUser(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const renderLoggedInNavbar = () => {
        return (
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <div className="group cursor-pointer">
                        <Link className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                            {loadingUser ? (
                                <div><span className="loading loading-spinner text-info"></span></div>
                            ) : (
                                <div className="dropdown dropdown-end block">
                                    <div tabIndex={0} role="button" onClick={toggleDropdown} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL || 'https://via.placeholder.com/150'}
                                                onMouseEnter={() => setIsHovered(true)}

                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {isHovered && (
                                <div
                                    className="absolute top-10 right-0 bg-white border-2 shadow-lg rounded-lg text-black px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity "
                                >
                                    {loadingUser ? 'Loading...' : user.displayName}



                                </div>
                            )}

                            {isDropdownOpen && (
                                <div className="absolute top-0 right-12 bg-white border-2 shadow-lg rounded-lg text-black px-1 py-0.5 w-56">

                                    <ul className="mt-2">
                                        <li className='border px-2 border-black text-justify mb-2 rounded-lg bg-blue-gray-50'>
                                            <NavLink to="/add-volunteer-post" onClick={() => setIsHovered(false)}>
                                                Add Volunteer Post
                                            </NavLink>
                                        </li>
                                        <li onClick={handleLogOut} className=' p-2 text-white text-justify rounded-lg bg-red-500'>
                                            <NavLink to="" onClick={() => setIsHovered(false)}>
                                                Logout
                                            </NavLink>
                                        </li>


                                    </ul>
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const renderLoggedOutNavbar = () => {
        return (
            <div>
                <Link to="/login">
                    <button className="btn bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100">Log In</button>
                </Link>
                <Link to="/register">
                    <button className="btn ml-5 bg-gradient-to-l from-blue-400 to-blue-900 text-gray-100">Register</button>
                </Link>
            </div>

        );
    };

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/need-volunteer">Need Volunteer</NavLink></li>
    </>
    return (

        <div className="navbar fixed top-0 w-full backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>

                <a id="not-clickable"><img className="h-10 hidden lg:block" src="/logo.png" alt="" /></a>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>

            <div className="navbar-end">



                {user ? renderLoggedInNavbar() : renderLoggedOutNavbar()}
            </div>
        </div >
    )
}

export default Navbar
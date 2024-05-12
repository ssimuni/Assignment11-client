import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'


const Navbar = () => {
    const gradientBackground = {
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
    };

    const { user, logOut } = useContext(AuthContext);
    const [loadingUser, setLoadingUser] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme), [theme]
    });

    useEffect(() => {
        setLoadingUser(true);
        const timeout = setTimeout(() => {
            setLoadingUser(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // Close dropdown if click is outside the dropdown area
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
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
                                                onMouseMove={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(true)}
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
                                <div className="absolute z-50 p-12 border-red-600 top-0 right-12 bg-white border-2 shadow-lg rounded-lg text-black px-1 py-0.5 w-56" ref={dropdownRef}>

                                    <ul className="mt-2">
                                        <li className='border px-2 border-black text-justify mb-2 rounded-lg bg-blue-gray-50'>
                                            <NavLink to="/add-volunteer-post">
                                                Add Volunteer Post
                                            </NavLink>
                                        </li>
                                        <li className='border px-2 border-black text-justify mb-2 rounded-lg bg-blue-gray-50'>
                                            <NavLink to="/manage_my_post">
                                                Manage my Post
                                            </NavLink>
                                        </li>
                                        <button onClick={handleLogOut} className=' p-2 text-white text-justify rounded-lg bg-red-500'>
                                            <NavLink to="" >
                                                Logout
                                            </NavLink>
                                        </button>


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
                    <button className="btn ml-5 text-white" style={gradientBackground}>Log In</button>
                </Link>
                <Link to="/register">
                    <button className="btn ml-5 text-white" style={gradientBackground}>Register</button>
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

                <label className="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={handleToggle} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>

                {user ? renderLoggedInNavbar() : renderLoggedOutNavbar()}
            </div>
        </div >
    )
}

export default Navbar
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user?.email)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navber">
            <div className="navbar bg-transparent text-white px:0 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black  rounded-box w-72">
                            <NavLink to='/'><a>Home</a></NavLink>
                            <NavLink to='/addBooks'><a>Add Books</a></NavLink>
                            <NavLink to='/allBooks'><a>All Books</a></NavLink>
                            <NavLink to='/borrowedBooks'><a>Borrowed Books</a></NavLink>
                            <div className='text-sky-700 font-semibold'>
                                <p>{user?.displayName}</p>
                                <p>{user?.email}</p>
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="https://i.ibb.co/BBtg816/Logo.png" className='w-16' alt="" />
                        <a className="normal-case text-sky-600 font-bold text-2xl">Books Library</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-5 px-1 items-center">
                        <NavLink to='/'><a>Home</a></NavLink>
                        <NavLink to='/addBooks'><a>Add Books</a></NavLink>
                        <NavLink to='/allBooks'><a>All Books</a></NavLink>
                        <NavLink to='/borrowedBooks'><a>Borrowed Books</a></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="avatar m-1" tabIndex={0}>
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src='https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png' />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <a className="flex items-center pt-2 text-sm text-gray-600 transition-colors duration-300 transform hover:bg-gray-10">
                                        <img className="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png" alt="jane avatar" />
                                        <div className="mx-1">
                                            <h1 className="text-sm font-semibold text-gray-700">{user?.displayName}</h1>
                                            <p className="text-sm text-gray-500">{user?.email}</p>
                                        </div>
                                        <div className="divider"></div>
                                    </a>
                                    <a onClick={handleSignOut} className="flex items-center p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="mx-1 font-semibold">
                                            Sign Out
                                        </span>
                                    </a>
                                </ul>
                            </div>
                            :
                            <Link to="/login">
                                <button className="btn text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 ml-1 lg:ml-40">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;
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
                            <div className='flex items-center'>
                                <div className='text-center hidden lg:block'>
                                    <h4>{user?.displayName}</h4>
                                    <p>{user?.email}</p>
                                </div>
                                <button onClick={handleSignOut} className="btn text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 ml-1">Sign Out</button>
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
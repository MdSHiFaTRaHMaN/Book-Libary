import { NavLink } from 'react-router-dom';
import './Navber.css'
const Navber = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100 px:0 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/'><a>Home</a></NavLink>
                        <NavLink to='/addBooks'><a>Add Books</a></NavLink>
                        <NavLink to='/allBooks'><a>All Books</a></NavLink>
                        <NavLink to='/borrowedBooks'><a>Borrowed Books</a></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
                    <a className="btn btn-info">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;
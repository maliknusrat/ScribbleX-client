import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidUser, } from "react-icons/bi";
import { FaUserMinus } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from "react";
import { Image } from 'antd';
import { TfiWrite } from "react-icons/tfi";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
  }

  console.log(user);
  const navlinks = <>
    <li><NavLink to='/' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Home</NavLink></li>
   {user && <li><NavLink to='/addblog' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Add blog</NavLink></li>}
    {user && <li><NavLink to='/blogs/allBlogs' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>All Blogs</NavLink></li>}
    <li><NavLink to='/featuresblogs' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Features Blogs</NavLink></li>
    <li><NavLink to='/wishlist' className={({ isActive }) => isActive ? "text-red-600 underline font-bold" : ''}>Wishlist</NavLink></li>

  </>

  const login = <>
    {user ? <div className="flex flex-row items-center gap-4 ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            // width={200}
            src={user.photoURL}
          />
        </div>
      </label>
      <FaUserMinus onClick={logoutHandler} className="text-red-600 text-3xl hover:text-slate-800"></FaUserMinus> </div> : <NavLink to='/login' className={({ isActive }) => isActive ? "text-red-600 underline" : ''}> <BiSolidUser className="p-2 text-red-600 text-5xl"></BiSolidUser></NavLink>}

  </>
  return (
    <div className="navbar max-w-6xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <TfiWrite className="text-4xl font-bold text-orange-700  "></TfiWrite>
          <a className="btn btn-ghost normal-case font-serif font-semibold text-2xl">ScribbleX</a>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {login}
      </div>
    </div>
  );
};

export default Navbar;
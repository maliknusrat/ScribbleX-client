// import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const BlogLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content displaySet">
                        {/* Page content here */}
                        <Outlet></Outlet>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        {/* <Link>Category</Link> */}
                        <ul className="mt-10 md:mt-0 lg:mt-0 menu Link-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <Link to={`/blogs/categories/${'All'}`} className="btn text-left w-full">All</Link>
                            <Link to={`/blogs/categories/${'Sports'}`} className="btn text-left w-full">Sports</Link>
                            <Link to={`/blogs/categories/${'Environment'}`} className="btn text-left w-full">Environment</Link>
                            <Link to={`/blogs/categories/${'Fashion'}`} className="btn text-left w-full">Fashion</Link>
                            <Link to={`/blogs/categories/${'Food'}`} className="btn text-left w-full">Food</Link>
                            <Link to={`/blogs/categories/${'Personal'}`} className="btn text-left w-full">Personal</Link>
                            <Link to={`/blogs/categories/${'Arts'}`} className="btn text-left w-full">Arts</Link>
                            <Link to={`/blogs/categories/${'Culture'}`} className="btn text-left w-full">Culture</Link>
                            <Link to={`/blogs/categories/${'Region'}`} className="btn text-left w-full">Region</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;
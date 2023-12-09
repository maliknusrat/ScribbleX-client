// import { Button } from "antd";
import { Button } from "antd/es/radio";
import { useEffect } from "react";
import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
// import {  useParams } from "react-router-dom";


const RecentBlogs = () => {
    const [blogs, setblogs] = useState([]);
    // const { id } = useParams();
    // console.log(id);
    useEffect(() => {
       ' https://scribblex-server.vercel.app/'
        fetch('https://scribblex-server.vercel.app/blog')
            .then(res => res.json())
            .then(data => {
                setblogs(data.slice(0,6));
                console.log(data);
            })
    }, [])
    return (
        <div >
            <h2 className="text-4xl italic font-serif font-semibold m-10 ">Recent Blogs</h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    blogs.map(blog =>
                        <div key={blog._id} >
                            <div className="card p-6 rounded-none bg-base-100 shadow-xl">
                                <figure><img className="h-[300px]" src={blog.image} alt="Movie" /></figure>
                                <div className='flex items-end justify-end my-5'>
                                    <Button className='w-12 '><BsBookmark className='text-xl mt-1'></BsBookmark></Button>
                                </div>

                                <div className="flex justify-between w-full">
                                    <div className="mx-5 mt-3">
                                        <h2 className="card-title  h-[80px]">{blog.blogTitle}</h2>
                                        <p className="italic text-orange-400 text-lg">{blog.category}</p>
                                        <p className="h-[120px]  text-justify">{blog.shortDescription}</p>
                                        <div className="flex text-xl justify-between items-center mt-2">
                                            <Link to={{ pathname: `/blogDetails/${blog._id}` }} className="btn rounded-none btn-neutral">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default RecentBlogs;
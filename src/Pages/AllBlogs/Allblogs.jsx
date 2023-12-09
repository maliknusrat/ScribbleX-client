// import React from 'react';
import { Button } from 'antd/es/radio';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { BsBookmark } from "react-icons/bs";
import { Link, useNavigate, useParams,} from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Allblogs = () => {
  const [searchText, setSearchText] = useState('');
  const[blogs,setblogs] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
    const navigate = useNavigate();
    
   // {credentials: 'include'}

  useEffect(()=>{
    fetch('https://scribblex-server.vercel.app/blog')
    .then(res=>res.json())
    .then(data=>{
      setblogs(data)
    })
  },[])

 
  const handleAddToWishlist = (blogs) => {
    console.log(blogs);
    const addToWishlist = {
        user: user.email,
        blogid:blogs._id,
        image: blogs.image,
        blogTitle: blogs.blogTitle            ,
        category: blogs.category,
        shortDescription:blogs.shortDescription,
        details:blogs.details
    }
    fetch(`https://scribblex-server.vercel.app/wishlist/${id}`, {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addToWishlist)
    })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Add to Your Wishlist',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(result => {
                if (result.isConfirmed) {
                      navigate('/')
                  }
              })
        }
        })
    }
    
    const handleSearch = () => {
        fetch(`https://scribblex-server.vercel.app/search/${searchText}`)
            .then(res => res.json())
            .then(data => {
              setblogs(data);
              console.log(data);
            });
    }




  return (
    <div className="grid grid-cols-1 gap-2" >
      <div className="p-2 text-center">
          <input onChange={(e) => {
              setSearchText(e.target.value)
          }}
          className='p-1 input input-bordered' placeholder="Enter Blog Title"
              type="text" />
          <button onClick={handleSearch} className="btn ml-5">Search</button>
      </div>
      {
        blogs.map(blog => <div key={blog._id} >
          <div className="card p-6 rounded-none bg-base-100 shadow-xl">
                <figure><img className="h-[400px]" src={blog.image} alt="Movie" /></figure>
                <div className='flex items-end justify-end my-5'>
                <Button onClick={()=>handleAddToWishlist(blog)} className='w-12 mr-12'><BsBookmark  className='text-xl mt-1'></BsBookmark></Button>
                </div>
                
                <div className="flex justify-between w-full">
                    <div className="mx-5 mt-3">
                        <h2 className="card-title">{blog.blogTitle}</h2>
                        <p className="italic text-orange-400 text-lg">{blog.category}</p>
                        <p className="text-justify">{blog.shortDescription}</p>
                        
                        <div className="flex justify-between mt-2">
                        <Link to={{ pathname: `/blogDetails/${blog._id}` }} className="btn rounded-none btn-neutral">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
      }
    </div>
  );
};

export default Allblogs;
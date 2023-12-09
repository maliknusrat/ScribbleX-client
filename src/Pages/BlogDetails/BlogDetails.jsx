import { useState } from "react";
import {  useParams,useNavigate, Link, } from "react-router-dom";
import { AuthContext } from './../../Provider/AuthProvider';
import { useContext } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { BsBookmark } from "react-icons/bs";
import { Button, Image } from "antd";
// import { useQuery } from "@tanstack/react-query";
import { AiFillEdit } from 'react-icons/ai';


const BlogDetails = () => {
    const [blogs, setblogs] = useState([]);
    const { id } = useParams();
    console.log(id);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://scribblex-server.vercel.app/blogDetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
          setblogs(data)
        })
      },[id])

    // const { data: blogs = [], refetch } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://scribblex-server.vercel.app/blogDetails/${user?.email}`);
    //         console.log(res);
    //         return res.json();
    //     },
    // });

      const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;

        const comment = form.feedback.value;
        const userName = user?.displayName;
        const userPic = user?.photoURL;
        const blogId = form.blogId.value;

        const commentInfo = {
            comment:comment,
            userName: userName,
            userPic: userPic,
            blogId:blogId
        }

        fetch(`https://scribblex-server.vercel.app/addComment/${blogId}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(commentInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Add to Your Comment',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                // refetch();
            }
        })
      }

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


    return (
        <div>
             <div className="card p-6 rounded-none bg-base-100 shadow-xl">
                <figure><img className="h-[400px]" src={blogs.image} alt="Movie" /></figure>
                {user?.email == blogs.email ? <div className="flex justify-end my-7 mr-5">
                    <Link to={`/updateblog/${blogs._id}`}><Button ><AiFillEdit className="text-xl"></AiFillEdit></Button></Link>
                </div> : ''}
                <div className="flex justify-between w-full">
                    <div className="mx-5 mt-3">
                        <h2 className="card-title">{blogs.blogTitle}</h2>
                        <p className="italic text-orange-400 text-lg"><span className="font-bold">Category Name: </span>{blogs.category}</p>
                        <p className="w-400px text-justify"><span className="font-bold">Short Description: </span>{blogs.shortDescription}</p>
                        <p className="w-400px text-justify mt-3"><span className="font-bold">Full Description: </span>{blogs.details}</p>
                        <div className="mx-3 my-3"> 
                            <form onSubmit={handleAddComment} action="" className="flex  justify-center gap-4">
                                <div className="form-control w-full mb-3">
                                    <label>
                                        <input required type="text" name="feedback"
                                            placeholder="Comment"
                                            className="input border-olive-lightgreen w-full bg-slate-100" />
                                    </label>
                                </div>
                                <div className="form-control w-full mb-3 hidden">
                                    <label>
                                        <input required type="text" name="blogId"
                                            defaultValue={blogs._id}
                                            className="input border-olive-lightgreen w-full bg-slate-100" />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="submit" value="SEND"
                                            className="input border-olive-lightgreen w-full bg-slate-100" />
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div>
                            {
                                blogs.comment?.map(comment => <div key={comment.blogId}>
                                    <div className="flex items-center gap-5">
                                        <Image className="w-[50px] rounded-full"
                                            width={30}
                                            src={comment.userPic}
                                        />
                                        <div className="flex flex-col items-start">
                                            <p >{comment.userName}</p>
                                            <p className="italic">{comment.comment}</p>
                                        </div>
                                    </div>
                                   
                                    
                                </div>)
                            }
                        </div>
                        <div className="flex text-xl justify-end items-center mt-2">
                            {/* <Link className="btn rounded-none btn-neutral">Details</Link> */}
                            <Button onClick={()=>handleAddToWishlist(blogs)}><BsBookmark></BsBookmark></Button>
                            
                        </div>
                       {/* {user?.email == blogs.email ?  <div>
                            <Link to={`/updateblog/${blogs._id}`} className="btn btn-warning">Update</Link>
                        </div> : ''} */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BlogDetails;
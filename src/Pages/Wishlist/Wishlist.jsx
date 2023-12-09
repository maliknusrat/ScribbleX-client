import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from 'antd/es/radio';
import { AuthContext } from './../../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from "sweetalert2";

const Wishlist = () => {

    const { user } = useContext(AuthContext);

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
          try {
            const res = await fetch(`https://scribblex-server.vercel.app/wishlists/${user?.email}`);
      
            if (!res.ok) {
              throw new Error(`Request failed with status: ${res.status}`);
            }
      
            const data = await res.json();
            return data;
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error to let React Query handle it
          }
        },
      });
      
   

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://scribblex-server.vercel.app/wishlists/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            ).then(result => {
                                if (result.isConfirmed) {
                                    refetch()
                                    // window.location.reload();
                                }
                            })
                        }
                    })
            }
        })
    }


    return (
        <div>
            {console.log(blogs)}
            <h2 className="text-3xl font-serif font-semibold text-center my-6">WishList Collection</h2>
            {
                blogs.map(blog => <div key={blog._id}>
                    <div className="card p-6 rounded-none bg-base-100 shadow-xl">
                        <figure><img className="h-[400px]" src={blog.image} alt="Movie" /></figure>
                        <div className='flex items-end justify-end my-5'>
                            <Button className="text-2xl mr-10" onClick={() => handleDelete(blog._id)}><RiDeleteBin6Fill className="mt-[2px]"></RiDeleteBin6Fill></Button>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="mx-5 mt-3">
                                <h2 className="card-title">{blog.blogTitle}</h2>
                                <p className="italic text-orange-400 text-lg">{blog.category}</p>
                                <p className="w-400px text-justify">{blog.shortDescription}</p>
                                <div className="flex text-xl justify-between items-center mt-2">
                                    <Link to={ `/blogDetails/${blog.blogid}` } className="btn rounded-none btn-neutral">Details</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Wishlist;
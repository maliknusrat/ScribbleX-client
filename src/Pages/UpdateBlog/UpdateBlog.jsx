import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBlog = () => {
    const [blogs, setblogs] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://scribblex-server.vercel.app/blogDetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
          setblogs(data)
        })
      },[id])

      const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const blogTitle = form.blogTitle.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const details = form.details.value;

        const newblog = {blogTitle,image,category,shortDescription,details}

        fetch(`https://scribblex-server.vercel.app/blogUpdate/${id}`, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newblog)
        } )
        .then(res=>res.json()
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                form.reset();
                Swal.fire({
                    title:'Success!',
                    text:'Successfully Update Your Blog',
                    icon:'success',
                    confirmButtonText:'Cool!!!'

                })
            }
        }))

      }

    return (
        <div className="max-w-5xl mx-auto  ">
            <div>
                <h2 className="text-3xl text-center my-7 italic font-thin ">Update Your Blog</h2>
            </div>
            <div className="flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body">

                        <div className="form-control">
                            <input type="text" name='blogTitle' placeholder="Blog Title" className="input input-bordered border-black rounded-none" defaultValue={blogs.blogTitle} required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='image' placeholder="Image Url" className="input input-bordered border-black rounded-none" defaultValue={blogs.image} required />
                        </div>

                        <div className="form-control">
                        <input type="text" name='category' placeholder="Category" className="input input-bordered border-black rounded-none" required defaultValue={blogs.category} />
                        {/* <label className="">
                            <select className="select input input-bordered border-black rounded-none  w-full " name="category">
                                <option>Category</option>
                                <option value='Sports'>Sports</option>
                                    <option value='Environment'>Environment</option>
                                    <option value='Culture'>Culture</option>
                                    <option value='Arts'>Arts</option>
                                    <option value='Food'>Food</option>
                                    <option value='Region'>Region</option>
                                    <option value='Travel'>Travel</option>
                                    <option value='Fashion'>Fashion</option>
                                    <option value='Personal'>Personal</option>
                            </select>
                        </label> */}
                    </div>

                        <div className="form-control">
                            <input type="text" name='shortDescription' placeholder="Short Description" className="input input-bordered border-black rounded-none" defaultValue={blogs.shortDescription} required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered border-black rounded-none" required defaultValue={blogs.details} />
                        </div>
                       
                        <div className="form-control mt-6">
                            <input className="btn btn-neutral rounded-none" type="submit" value="Confirm"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;
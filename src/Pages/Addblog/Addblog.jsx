import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Addblog = () => {
    const {user} = useContext(AuthContext);
    
    const handleBlog = event =>{
        event.preventDefault();

        const form = event.target;
        const blogTitle = form.blogTitle.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const details = form.details.value;
        const email = user?.email;
        const userName = user?.displayName;
        const userPhoto = user?.photoURL
        
        const newblog = {blogTitle,image,category,shortDescription,details,email,userName,userPhoto}
        console.log(newblog);

        //send data to server
        fetch('https://scribblex-server.vercel.app/blog', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newblog)
        } )
        .then(res=>res.json()
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    title:'Success!',
                    text:'Blog Added Successfully',
                    icon:'success',
                    confirmButtonText:'Cool!!!'

                })
            }
        }))
    }
     
    return (
        <div>
        <div className="max-w-5xl mx-auto  ">
            <div>
                <h2 className="text-3xl text-center my-7 italic font-thin ">Add Your Blog</h2>
            </div>
            <div className="flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
                    <form onSubmit={handleBlog} className="card-body">

                        <div className="form-control">
                            <input type="text" name='blogTitle' placeholder="Blog Title" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='image' placeholder="Image Url" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                        <label className="">
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
                        </label>
                    </div>

                        <div className="form-control">
                            <input type="text" name='shortDescription' placeholder="Short Description" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered border-black rounded-none" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Addblog;
import Swal from "sweetalert2";
import "../FamousBloggers/FamousBlooger.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
 
const NewsLetter = () => {
   
    const {user} = useContext(AuthContext);
    
    const handleSubcription = event =>{
        event.preventDefault();

        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const Uemail = user?.email;
        
        const newblog = {firstName,lastName,email,Uemail}
        console.log(newblog);

        //send data to backend
        fetch('https://scribblex-server.vercel.app/subcription', {
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
                    text:'Thank you for subscribing to our newsletter',
                    icon:'success',
                    confirmButtonText:'Ok'

                })
            }
        }))
    }

    return (
        <div>
            <h2 className="home-heading font-semibold text-center py-6 my-6 text-3xl">Newsletter</h2>
            <div className="max-w-5xl mx-auto">
                <form onSubmit={handleSubcription} className="mb-5">
                    <div className="grid grid-cols-2 my-5 gap-4">
                        <div className="form-control">
                            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered border-black rounded-none" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered border-black rounded-none" required />
                        </div>
                    </div>

                    <div className="form-control">
                            <input type="email" name='email' placeholder="Enter Your Mail" className="input input-bordered border-black rounded-none" required />
                        
                    </div>

                    <div className="form-control flex items-center mt-6">
                                <button className="btn btn-neutral w-56 rounded-none">Submit</button>
                    </div>

                </form>
                
            </div>
        </div>
    );
};

export default NewsLetter;
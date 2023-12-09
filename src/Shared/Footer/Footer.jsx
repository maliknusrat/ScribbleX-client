import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
// import { SiMinutemailer } from "react-icons/si";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-orange-50 to-orange-400 mt-10'>
            <div className='max-w-6xl mx-auto pt-7 grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center' >
                <motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }} className='flex items-center justify-center gap-3'>
                        <TfiWrite className="text-4xl font-bold text-orange-700"></TfiWrite>
                    <motion.h2 animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }} className="text-3xl  font-serif font-semibold">ScribbleX</motion.h2>
                </motion.div>
                <div className='flex flex-col border-r-neutral-800 items-center '>
                    <div className=' flex flex-col border-r-neutral-800 gap-3 items-Start justify-center mt-5'>
                        <p>Support: </p>
                        <p>Help Line:</p>
                        <Link to="/about"> About Us</Link>
                        <p>Terms and Condition</p>
                    </div>
                </div>

                <div className='flex flex-col items-start pt-5 justify-center gap-2'>
                    <h2 className="text-xl  font-serif font-light">Follow Us</h2>
                    <div className='flex gap-4 text-2xl'>
                        <FaGoogle></FaGoogle>
                        <FaGithub></FaGithub>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
            </div>
            <div className='text-lg font-extralight italic flex flex-col items-center justify-center  gap-1 p-8'>
                <p>@copyright ScribbleX 2023</p>
            </div>
        </div>
    );
};

export default Footer;
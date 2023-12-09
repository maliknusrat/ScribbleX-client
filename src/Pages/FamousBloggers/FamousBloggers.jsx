import img1 from '../../assets/Slider_image_blogger-06.jpg'
import img2 from '../../assets/Slider_image_blogger-05.jpg'
import img3 from '../../assets/Slider_image_blogger-03.jpg'
import img4 from '../../assets/Slider_image_blogger-01.jpg'
import img5 from '../../assets/Slider_image_blogger-02.jpg'
import img6 from '../../assets/Slider_image_blogger-04.jpg'
import "./FamousBlooger.css"
import { motion } from "framer-motion"




const FamousBloggers = () => {
    return (


        <div className='max-w-7xl mx-auto'>
            <h2 className=' home-heading text-left ml-14 my-14'>Famous Blogger</h2>
            <div className='flex items-center justify-center'>
                {/* export const MyComponent = () => (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                ) */}
                <div className='md:pl-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    <motion.div
                        whileHover={{ scale: 1.05 }} // You can customize the animation properties here
                        className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl"
                    >
                        <figure><img src={img1} alt="" className='w-full h-[300px] rounded-xl' /></figure>
                        <div className="card-body">
                            <motion.h2
                                whileHover={{ color: '#ff9900' }} className="font-semibold text-2xl text-center mt-3">Shahidul Alam</motion.h2>
                            <p className='text-justify p-4'>
                                Shahidul Alam (born 1955) is a Bangladeshi photojournalist, teacher, and social activist. He has been a photographer for more than forty years and his photographs have been published in almost every major western media outlet.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl"
                    >
                        <figure>
                            <img src={img2} alt="" className='w-full h-[300px] rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <motion.h2
                                whileHover={{ color: '#ff9900' }} // Change the color to your preference
                                className="font-semibold text-2xl text-center mt-3"
                            >
                                Heather Armstrong
                            </motion.h2>
                            <motion.p whileHover={{ scale: 1.02 }} className='text-justify p-4'>
                                Heather Armstrong is an American blogger who writes under the pseudonym of Dooce, a pseudonym from her inability to quickly spell “dude” while chatting online with her former co-workers.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        whileHover={{ scale: 1.05 }} // You can customize the animation properties here
                        className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl"
                    >
                        <figure><img src={img1} alt="" className='w-full h-[300px] rounded-xl' /></figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-2xl text-center mt-3">Shahidul Alam</h2>
                            <p className='text-justify p-4'>
                                Shahidul Alam (born 1955) is a Bangladeshi photojournalist, teacher, and social activist. He has been a photographer for more than forty years and his photographs have been published in almost every major western media outlet.
                            </p>
                        </div>
                    </motion.div> */}

                    <motion.div
                        whileHover={{ scale: 1.05 }} className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl">
                        <figure><img src={img3} alt="" className='w-full h-[300px] rounded-xl' /></figure>
                        <div className="card-body">
                            <motion.h2
                                whileHover={{ color: '#ff9900' }} className="font-semibold text-2xl text-center mt-3">Mario Lavandeira</motion.h2>
                            <p className='text-justify p-4'>
                                Mario Armando Lavandeira Jr., also known as Perez Hilton is an American blogger and media personality, with his blog, PerezHilton.com, known for covering gossips around celebrities.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        whileHover={{ scale: 1.05 }} className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl">
                        <figure><img src={img4} alt="" className='w-full h-[300px] rounded-xl' /></figure>
                        <div className="card-body">
                            <motion.h2
                                whileHover={{ color: '#ff9900' }} className="font-semibold text-2xl text-center mt-3">Joshua Micah Marshall</motion.h2>
                            <p className='text-justify p-4'>
                                Joshua Micah Marshall formerly worked as a magazine editor, but he chose to vent on the web.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        whileHover={{ scale: 1.05 }} className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl">
                        <figure><img src={img5} alt="" className='w-full h-[300px] rounded-xl' /></figure>
                        <div className="card-body">
                            <motion.h2
                                whileHover={{ color: '#ff9900' }} className="font-semibold text-2xl text-center mt-3">Olivia Palermo</motion.h2>
                            <p className='text-justify p-4'>
                                Olivia Palermo is an American fashion entrepreneur and influencer, cum Blogger born February 28, 1986, in New York, USA.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        whileHover={{ scale: 1.05 }} className="bg-lightorange card card-compact w-full md:w-[360px] lg:w-96 shadow-xl">
                        <figure><img src={img6} alt="" className='w-full h-[300px] rounded-xl' /></figure>
                        <div className="card-body">
                            <motion.h2
                                whileHover={{ color: '#ff9900' }} className="font-semibold text-2xl text-center mt-3">Jason Kottke</motion.h2>
                            <p className='text-justify p-4'>
                                Jason Kottke is a graphic designer and web designer, famous for his blog Kottke.org. Jason won a Lifetime Achievement Award as a blogger.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default FamousBloggers;
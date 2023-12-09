import art from '../../assets/Category/Art.jpg';
import culture from '../../assets/Category/Culture.jpg';
import environment from '../../assets/Category/Environment.jpg';
import fashion from '../../assets/Category/Fashion.jpg';
import sports from '../../assets/Category/Sport.jpg';
import travel from '../../assets/Category/Travel.jpg';
import personal from '../../assets/Category/Personal.jpg';
import food from '../../assets/Category/Food.jpg';
import region from '../../assets/Category/Region.jpg';

import Marquee from "react-fast-marquee";

const Categories = () => {
    return (
        <div className='max-w-6xl  mx-auto -z-10 mt-10 pb-10'>
            <h2 className='text-5xl text-left mr-10 home-heading font-black mb-8 py-8'>Blog Categories</h2>
            <Marquee>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={art} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Art</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={culture} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Culture</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={environment} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Environment</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={sports} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Sports</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={fashion} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Fashion</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={travel} alt="" className='w-full h-[252px]' />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Travel</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={personal} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Personal</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={food} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Food</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mr-5 justify-center'>
                        <div className="card w-[350px] bg-base-100 shadow-xl image-full">
                            <figure>
                                <img src={region} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white">Region</h2>
                            </div>
                        </div>
                    </div>
            </Marquee>
        </div>
    );
};

export default Categories;
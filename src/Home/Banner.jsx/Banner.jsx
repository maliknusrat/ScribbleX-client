import slide1 from "../../assets/Slider/Slider_image-01.jpg"
import slide2 from "../../assets/Slider/Slider_image-02.jpg"
import slide3 from "../../assets/Slider/Slider_image-03.jpg"
import slide4 from "../../assets/Slider/Slider_image-04.jpg"
import slide5 from "../../assets/Slider/Slider_image-05.jpg"

import { Carousel } from 'antd'

const contentStyle = {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    background: '#364d79',
};
const Banner = () => {
    return (


        <Carousel autoplay>
            <div>
                <img src={slide1} style={contentStyle} alt="" />
            </div>
            <div>
                <img src={slide2} style={contentStyle} alt="" />
            </div>
            <div>
                <img src={slide3} style={contentStyle} alt="" />
            </div>
            <div>
                <img src={slide4} style={contentStyle} alt="" />
            </div>

            <div>
                <img src={slide5} style={contentStyle} alt="" />
            </div>
        </Carousel>
    );
};

export default Banner;
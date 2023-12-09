
import FamousBloggers from '../Pages/FamousBloggers/FamousBloggers';
import NewsLetter from '../Pages/NewsLetter/NewsLetter';
import RecentBlogs from '../Pages/RecentBlogs/RecentBlogs';
import Banner from './Banner.jsx/Banner';
import Categories from './Categories/Categories';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <RecentBlogs></RecentBlogs>
           <FamousBloggers></FamousBloggers>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
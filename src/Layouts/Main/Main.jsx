
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';


const Main = () => {
    const location = useLocation();
    const noFooterShow = location.pathname.includes('/allblogs');
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noFooterShow ||  <Footer></Footer>}
           
        </div>
    );
};

export default Main;

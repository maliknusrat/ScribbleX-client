import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Main from './Layouts/Main/Main';
import NewsLetter from './Pages/NewsLetter/NewsLetter';
import Addblog from './Pages/Addblog/Addblog';
import Error from './Pages/ErrorPage/Error';
import FeatureBlogs from './Pages/FeatureBlogs/FeatureBlogs';
import Wishlist from './Pages/Wishlist/Wishlist';
import RecentBlogs from './Pages/RecentBlogs/RecentBlogs';
import FamousBloggers from './Pages/FamousBloggers/FamousBloggers';
import Allblogs from './Pages/AllBlogs/Allblogs';
import LogIN from './Authtentication/LogIN/LogIN';
import AuthProvider from './Provider/AuthProvider';
import SignUp from './Authtentication/SignUp/SignUp';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import BlogLayout from './Layouts/BlogLayout';
import Categories from './Pages/Category/Categories';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import UpdateBlog from './Pages/UpdateBlog/UpdateBlog';

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
     {
      path:"/",
      element:<Home></Home>,
      // loader:() => fetch('https://scribblex-server.vercel.app/blog')
     },
     {
      path:"/newsletter",
      element:<NewsLetter></NewsLetter>,
      // loader:() => fetch('https://scribblex-server.vercel.app/subcription')
     },
     {
      path:"/addblog",
      element:<Addblog></Addblog>
     },
     {
      path:"/featuresblogs",
      element:<FeatureBlogs></FeatureBlogs>
     },
     {
      path:"/wishlist",
      element:<Wishlist></Wishlist>
     },
     {
      path:"/blogDetails/:id",
      element:<BlogDetails></BlogDetails>
     },

     {
      path:"/recentblog",
      element:<RecentBlogs></RecentBlogs>
     },
     {
      path:"/famousbloggers",
      element:<FamousBloggers></FamousBloggers>
     },
     {
      path:"/login",
      element:<LogIN></LogIN>
     },
     {
      path:"/signup",
      element:<SignUp></SignUp>
     },
     {
      path:"/updateblog/:id",
      element:<UpdateBlog></UpdateBlog>
     },

    ],
  },
  {
    path: '/blogs',
    element: <BlogLayout></BlogLayout>,
    children: [
      {
        path:'allBlogs',
        element: <Allblogs></Allblogs>
      },
      {
        path:'categories/:id',
        element: <Categories></Categories>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  </QueryClientProvider>
);

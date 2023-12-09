
import { Image } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Serial Number',
        selector: 'index',
        sortable: true,
    },
    {
        name: 'Blog Title',
        selector: row => row.blogTitle,
        
    },
    {
        name: 'Blog Owner',
        selector: row => row.userName,
    },
    {
        name: 'Blog Profile Picture',
        cell: (row) => <Image src={row.userPhoto} alt="Blog" style={{padding: '5px', width: '50px', height: '50px', borderRadius:'100%' }} />,
    },
    {
        name: 'Full Description `Word Count',
        selector: 'wordCount',
        sortable: true,
      },
    //   {
    //     name: 'Full Description',
    //     selector: 'details',
    //     sortable: true,
    //     cell: row => <div style={{ whiteSpace: 'pre-wrap' }}>{row.details}</div>, // Display original 'Details' field
    //   },
];

const calculateWordCount = (text) => {
    return text.split(/\s+/).length; 
  };

function FeatureBlogs()
{
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
    fetch('https://scribblex-server.vercel.app/blog')
        .then(res => res.json())
        .then(data => {
            setblogs(data)
            console.log(data);
        })
    }, [])

const dataWithWordCount = blogs.map((item,index) => ({
    ...item,
    wordCount: calculateWordCount(item.details),
    index: index+1,
  }));
  const sortedData = dataWithWordCount.slice().sort((a, b) => b.wordCount - a.wordCount);


    return (
        <div className=' mx-10'>
            <h2 className="text-3xl font-serif font-semibold my-6 text-center">Feature Blogs</h2>
            <DataTable
            columns={columns}
            data={sortedData}
            pagination
            sortFunction={'blogTitle.length'}
        />
        </div>
    );
}





export default FeatureBlogs;
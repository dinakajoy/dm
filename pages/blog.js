import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/_App/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/_App/Footer';

const Blog = () => {
    const posts = useSelector((state) => state.posts.postsData);
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
                imgClass="bg-15" 
            /> 
            <BlogThreeGrid posts={posts} />
            <Footer />
        </React.Fragment>
    );
}

export default Blog;

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/_App/Navbar2';
import PageBanner from '../../components/Blog/PageBanner';
import BlogDetail from '../../components/Blog/BlogDetail';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import Footer from '../../components/_App/Footer';
import Comments from '../../components/Blog/Comments';

const BlogDetails = () => {
    const router = useRouter();
    const posts = useSelector((state) => state.posts.postsData);
    const id = router.query.id;
    const post = posts.find(p => p.id === id);
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner {...post} /> 
 
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="ol-md-12">
                            <div className="blog-details-desc">
                                <BlogDetail {...post} />
                                {/* Comments */}
                                {/* <Comments /> */}
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    );
}

export default BlogDetails;
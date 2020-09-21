import React from 'react';
import Link from 'next/link';

const BlogThreeGrid = ({posts}) => {
    return (
        <div className="blog-area two ptb-100">
			<div className="container">
				<div className="row">

                    {posts.length ? posts.map(post => (
                        <div className="col-lg-4 col-md-6" key={post.id}>
                            <div className="single-blog">
                                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                    <a><img src={post.picture} alt={post.topic} /></a>
                                </Link>
                            
                                <div className="blog-content">
                                    <ul>
                                        <li>{post.author}</li>
                                        <li>17/05/2020</li>
                                    </ul>
                                    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                        <a><h3>{post.topic}</h3></a>
                                    </Link>
                                    <p>{post.body.substring(0,50)}...</p>
                                    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <h2>Empty</h2>
                    )}
 
                    {/* Pagination */}
                    <div className="col-lg-12">
                        <div className="page-navigation-area text-center">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link page-links">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#">
                                        <a className="page-link">1</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">2</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">3</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    )
}

export default BlogThreeGrid;
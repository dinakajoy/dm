import React from 'react';
import Link from 'next/link';

const BlogDetail = (post) => {
  return (
    <>
      {/* <div className="article-image">
        <img src={post.picture} alt={post.topic} />
      </div> */}

      <div className="article-content" style={{padding: '30px'}}>
        <div className="entry-meta">
          <ul>
            <li><span>Posted On:</span> May 19, 2020</li>
            <li><span>Posted By:</span> <Link href="#"><a>{post.author}</a></Link></li>
          </ul>
        </div>

        <h3>{post.topic}</h3>
        <p>{post.body}</p>
        <blockquote className="flaticon-quote">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid praesentium eveniet illum asperiores, quidem, ipsum voluptatum numquam ducimus nisi exercitationem dolorum facilis Repellendus aliquid praesentium eveniet illum asperiores.</p>
        </blockquote>
        <p>{post.body2}</p>
        <p>{post.body3}</p>
        <div className="b-d-s-img m-5">
          <img src="/img/blog/blog4.jpg" alt="Image" />
        </div>

        <p>{post.body2}</p>
      </div>
 
      <div className="post-navigation">
        <div className="navigation-links">
          <div className="nav-previous">
            <Link href="#">
              <a><i className='bx bx-left-arrow-alt'></i> Prev Post</a>
            </Link>
          </div>

          <div className="nav-next">
            <Link href="#">
              <a>Next Post <i className='bx bx-right-arrow-alt'></i></a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
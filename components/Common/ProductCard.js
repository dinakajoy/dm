import React from 'react';
import Link from 'next/link';
import AddToCart from '../Shop/AddToCart';

const ProductCard= ({ products }) => {
    return (
        <div className="products-area">
			<div className="container">
				<div className="section-title">
					<span>Products</span>
					<h2>Our Popular Products</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia, quae minus vero vel reprehenderit, aliquid alias delectus autem.</p>
				</div>

				<div className="row">
					{products.map(product => (
						<div className="col-lg-4 col-sm-6" key={product.id}>
							<div className="single-product">
								<div className="product-img">
									<img src={product.image} alt="Image" />

									<AddToCart btnClass="default-btn" {...product} />
								</div>
								<div className="product-content">
									<h3>
										<Link href="/product/[id]" as={`/product/${product.id}`}>
											<a>{product.title}</a>
										</Link>
									</h3>
									  
									<ul>
										<li>${product.price - 2}</li>
										<li><del>${product.price}</del></li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
    )
}

export default ProductCard;
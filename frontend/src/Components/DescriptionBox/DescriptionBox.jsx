import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An e-commerce website offering a seamless shopping experience with a wide range of products across categories like electronics, fashion, and home essentials. With secure payment options, fast delivery, and easy returns, it provides customers with convenience and value, making online shopping simple and enjoyable.
            </p>
            <p>
            The e-commerce website displays various products, detailed descriptions, prices, customer reviews, and secure payment options. Users can browse categories, view promotions, and easily add items to their shopping cart.
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox

import PropTypes from 'prop-types';
// import { useState } from 'react';

const Item = ({ image, title, price, discount, setActiveItem, isActive }) => {

    const handleItemClick = () => {
        setActiveItem(title);
    };
    return (
        <div className={`plans__item ${isActive ? 'active' : ''}`} onClick={handleItemClick}>
            <img src={image} alt={`${title}-icon`} />
            <div className="details">
                <span className='title'>{title}</span>
                <span className='price'>{price}</span>
                <span className='discount'>{discount}</span>
            </div>
        </div>
    )
}

Item.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
    setActiveItem: PropTypes.string.isRequired
};

export default Item

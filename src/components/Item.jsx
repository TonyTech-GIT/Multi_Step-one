import PropTypes from 'prop-types';
// import { useState } from 'react';

const Item = ({ image, title, price, discount, setActiveItem, isActive, setTestFunc, time }) => {

    const handleItemClick = () => {
        const selectedItem = {
            title,
            price
        }
        setActiveItem(title);

        console.log(selectedItem);

        setTestFunc(selectedItem)


    };


    return (
        <div className={`plans__item ${isActive ? 'active' : ''}`} onClick={handleItemClick}>
            <img src={image} alt={`${title}-icon`} />
            <div className="details">
                <span className='title'>{title}</span>
                <span className='price'>${price}/{time}</span>
                <span className='discount'>{discount}</span>
            </div>
        </div>
    )
}

Item.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setActiveItem: PropTypes.func.isRequired,
    setTestFunc: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired
};

export default Item

import PropTypes from 'prop-types';

const Item = ({ image, title, price, discount }) => {
    return (
        <div className="plans__item">
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
};

export default Item

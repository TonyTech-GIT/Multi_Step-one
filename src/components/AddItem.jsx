import PropTypes from 'prop-types';

const AddItem = ({ title, text, price }) => {
    return (

        <div className={`addon__item `}>
            <div className='details-container'>
                <input type="checkbox" />
                <div className="details">
                    <span className='title'>{title}</span>

                    <span className='text'>{text}</span>
                </div>
            </div>

            <span className='price'>{price}</span>
        </div>
    )
}

AddItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,

};

export default AddItem

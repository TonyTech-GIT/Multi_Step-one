import PropTypes from 'prop-types';
import { useState } from 'react';

const AddItem = ({ title, text, price }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleIsChecked = () => {
        setIsChecked(!isChecked)
    }
    return (

        <div className={`addon__item ${isChecked ? 'active' : ''}`} >
            <div className='details-container'>
                <input type="checkbox" checked={isChecked} onChange={handleIsChecked} />
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

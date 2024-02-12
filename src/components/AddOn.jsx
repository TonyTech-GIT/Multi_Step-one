

import { Link } from 'react-router-dom';

import AddItem from './AddItem';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const AddOn = ({ addonToggle, setAddonItems }) => {
    // const [pricePlan, setPricePlan] = useState(true)

    // useEffect(() => {
    //     console.log('in add-on', addonToggle)
    // }, [addonToggle])

    const [checkedItems, setCheckedItems] = useState([])


    const handleCheckedItem = (item) => {
        // Check if the item is already in the array
        const exists = checkedItems.some((checkedItem) => checkedItem.title === item.title);

        if (exists) {
            // If exists, remove it (uncheck)
            const updatedItems = checkedItems.filter((checkedItem) => checkedItem.title !== item.title);
            setCheckedItems(updatedItems);
        } else {
            // If doesn't exist, add it (check)
            const updatedItems = [...checkedItems, item];
            setCheckedItems(updatedItems);
        }
    };

    useEffect(() => {
        setCheckedItems(checkedItems)



    }, [checkedItems])

    console.log('in addon', checkedItems);

    setAddonItems(checkedItems)


    const addItems = [
        {

            title: 'Online service',
            price: `${addonToggle ? 1 : 10}`,
            time: `${addonToggle ? 'mo' : 'yr'}`,
            text: `Access to multiplayer games`
        },
        {

            title: 'Larger storage',
            price: `${addonToggle ? 2 : 20}`,
            time: `${addonToggle ? 'mo' : 'yr'}`,
            text: `Extra 1TB of cloud save`
        },
        {

            title: 'Customizable profile',
            price: `${addonToggle ? 2 : 20}`,
            time: `${addonToggle ? 'mo' : 'yr'}`,
            text: `Custom theme on your profile`
        }
    ]

    return (
        <>
            <section className='personal'>
                <div className="personal__bg">
                    <div className="personal__bg-nums">
                        <span>1</span>
                        <span>2</span>
                        <span className='three'>3</span>
                        <span>4</span>
                    </div>
                </div>
                <div className="form-desk">
                    <div className="desk-img">
                        <div >
                            <div className="num-details">
                                <span>1</span>
                                <div>
                                    <p>STEP 1</p>
                                    <h5>YOUR INFO</h5>
                                </div>
                            </div>
                            <div className="num-details">
                                <span>2</span>
                                <div>
                                    <p>STEP 2</p>
                                    <h5>SELECT PLAN</h5>
                                </div>
                            </div>
                            <div className="num-details">
                                <span className='three'>3</span>
                                <div>
                                    <p>STEP 3</p>
                                    <h5>ADD-ONS</h5>
                                </div>
                            </div>
                            <div className="num-details">
                                <span>4</span>
                                <div>
                                    <p>STEP 4</p>
                                    <h5>SUMMARY</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="addon__container">
                        <h2>Pick add-ons</h2>
                        <p>Add-ons help enhance your gaming experience.</p>

                        <div className="addons">
                            {addItems.map((addItem, index) => (
                                <AddItem
                                    key={index}
                                    isChecked={checkedItems?.some((item) => item.title === addItem.title)}
                                    setCheckedTest={() => handleCheckedItem(addItem)}

                                    {...addItem}

                                />
                            ))}


                        </div>


                    </div>
                </div>

            </section>

            <Link to='/plans' className='back-link-addon'>
                <span className='back-addon'>Go Back</span>

            </Link>

            <Link to='/summary'>
                <button className="btn-addon">Next Step</button>
            </Link>

        </>
    )
}

AddOn.propTypes = {
    addonToggle: PropTypes.bool.isRequired,
    setAddonItems: PropTypes.func.isRequired
}

export default AddOn


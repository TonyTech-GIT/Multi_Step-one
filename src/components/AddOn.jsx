
import { useState } from 'react';

import { Link } from 'react-router-dom';

import AddItem from './AddItem';

const AddOn = () => {
    const [pricePlan, setPricePlan] = useState(true)






    const addItems = [
        {

            title: 'Online service',
            price: `${pricePlan ? '$1/mo' : '$10/yr'}`,
            text: `Access to multiplayer games`
        },
        {

            title: 'Larger storage',
            price: `${pricePlan ? '$2/mo' : '$20/yr'}`,
            text: `Extra 1TB of cloud save`
        },
        {

            title: 'Customizable profile',
            price: `${pricePlan ? '$2/mo' : '$20/yr'}`,
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
                        <span>3</span>
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
                                <span>3</span>
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

export default AddOn


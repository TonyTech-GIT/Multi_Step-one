
import { useState } from 'react';

import { Link } from 'react-router-dom';

import AddItem from './AddItem';

const AddOn = () => {
    const [planToggle, setPlanToggle] = useState(true)
    const [active, setActive] = useState(true)
    const [pricePlan, setPricePlan] = useState(true)
    const [discountPlan, setDiscountPlan] = useState(true)
    const [activeItem, setActiveItem] = useState('');


    const handleToggle = () => {
        setPlanToggle(!planToggle)

        setActive(!active)

        setPricePlan(!pricePlan)

        setDiscountPlan(!discountPlan)

        setActiveItem(activeItem)

    }

    // const innerStyle = {
    //     transform: `translateX(${planToggle ? '0px' : '25px'})`,
    // }
    // const activeStyleMonthly = {
    //     color: `${active ? 'var(--primary-color)' : 'var(--neutral-one)'}`
    // }

    // const activeStyleYearly = {
    //     color: `${!active ? 'var(--primary-color)' : 'var(--neutral-one)'}`
    // }

    const addItems = [
        {

            title: 'Online service',
            price: `${pricePlan ? '$9/mo' : '$90/yr'}`,
            text: `Access to multiplayer games`
        },
        {

            title: 'Larger storage',
            price: `${pricePlan ? '$12/mo' : '$120/yr'}`,
            text: `Extra 1TB of cloud save`
        },
        {

            title: 'Customizable profile',
            price: `${pricePlan ? '$15/mo' : '$150/yr'}`,
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
                                    setActiveItem={setActiveItem}
                                    isActive={activeItem === addItem.title}
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


import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import Item from './Item';

const Plans = () => {
    const [planToggle, setPlanToggle] = useState(true)
    const [active, setActive] = useState(true)
    const [pricePlan, setPricePlan] = useState(true)
    const [discountPlan, setDiscountPlan] = useState(true)

    const handleToggle = () => {
        setPlanToggle(!planToggle)

        setActive(!active)

        setPricePlan(!pricePlan)

        setDiscountPlan(!discountPlan)
    }

    const innerStyle = {
        transform: `translateX(${planToggle ? '0px' : '25px'})`,
    }
    const activeStyleMonthly = {
        color: `${active ? 'var(--primary-color)' : 'var(--neutral-one)'}`
    }

    const activeStyleYearly = {
        color: `${!active ? 'var(--primary-color)' : 'var(--neutral-one)'}`
    }

    const items = [
        {
            image: arcade,
            title: 'Arcade',
            price: `${pricePlan ? '$9/mo' : '$90/yr'}`,
            discount: `${!discountPlan ? '2 months free' : ''}`
        },
        {
            image: advanced,
            title: 'Advanced',
            price: `${pricePlan ? '$12/mo' : '$120/yr'}`,
            discount: `${!discountPlan ? '2 months free' : ''}`
        },
        {
            image: pro,
            title: 'Pro',
            price: `${pricePlan ? '$15/mo' : '$150/yr'}`,
            discount: `${!discountPlan ? '2 months free' : ''}`
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
                    <div className="plans__container">
                        <h2>Select your plan</h2>
                        <p>you have the option of monthly or yearly billing.</p>

                        <div className="plans">
                            {items.map((item, index) => (
                                <Item key={index} {...item}
                                />
                            ))}


                        </div>

                        <div className="toggle">
                            <span className={active ? 'active' : ''} style={activeStyleMonthly}>Monthly</span>
                            <div className="outer">
                                <div className="inner" style={innerStyle} onClick={handleToggle}></div>
                            </div>
                            <span className={active ? 'active' : ''} style={activeStyleYearly}>Yearly</span>
                        </div>
                    </div>
                </div>

            </section>

            <Link to='/' className='back-link'>
                <span className='back'>Go Back</span>

            </Link>
            <button className="btn">Next Step</button>
        </>
    )
}

export default Plans

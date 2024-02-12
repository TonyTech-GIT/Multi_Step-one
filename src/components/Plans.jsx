import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';


import Item from './Item';

const Plans = ({ setSummaryDetails, setCalToggle }) => {
    const [planToggle, setPlanToggle] = useState(true, () => {

        // Retrieve the value from localStorage, or default to true if not found
        const storedValue = localStorage.getItem('planToggle');
        return storedValue ? JSON.parse(storedValue) : true;
    })

    const [active, setActive] = useState(true)
    const [pricePlan, setPricePlan] = useState(true)
    const [timePeriod, setTimePeriod] = useState(true)
    const [discountPlan, setDiscountPlan] = useState(true)
    const [activeItem, setActiveItem] = useState('');
    const [activeFunc, setActiveFunc] = useState('')


    useEffect(() => {
        // Save the updated planToggle value to localStorage
        localStorage.setItem('planToggle', JSON.stringify(planToggle));

        console.log(planToggle);



    }, [planToggle])


    setCalToggle(planToggle)
    setSummaryDetails(activeFunc)

    // console.log('kinunuunu', activeFunc)

    const handleToggle = () => {
        setPlanToggle(!planToggle)

        setActive(!active)

        setPricePlan(!pricePlan)

        setTimePeriod(!timePeriod)

        setDiscountPlan(!discountPlan)

        setActiveItem(activeItem)

        // setSelectedPlan(item)

        // setSummaryDetails({
        //     selectedCard: activeFunc,
        //     planToggle: planToggle
        // })


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
            price: `${pricePlan ? 9 : 90}`,
            time: `${timePeriod ? 'mo' : 'yr'}`,
            discount: `${!discountPlan ? '2 months free' : ''}`
        },
        {
            image: advanced,
            title: 'Advanced',
            price: `${pricePlan ? 12 : 120}`,
            time: `${timePeriod ? 'mo' : 'yr'}`,
            discount: `${!discountPlan ? '2 months free' : ''}`
        },
        {
            image: pro,
            title: 'Pro',
            price: `${pricePlan ? 15 : 150}`,
            time: `${timePeriod ? 'mo' : 'yr'}`,
            discount: `${!discountPlan ? '2 months free' : ''}`
        }
    ]

    return (
        <>
            <section className='personal'>
                <div className="personal__bg">
                    <div className="personal__bg-nums">
                        <span>1</span>
                        <span className='two'>2</span>
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
                                <span className='two'>2</span>
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
                                <Item
                                    key={index}
                                    setActiveItem={setActiveItem}
                                    isActive={activeItem === item.title}
                                    setTestFunc={setActiveFunc}
                                    {...item}

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

            <Link to='/add-ons'>
                <button className="plan_Btn">Next Step</button>
            </Link>

        </>
    )
}

Plans.propTypes = {
    setSummaryDetails: PropTypes.func.isRequired,
    setCalToggle: PropTypes.func.isRequired
}

export default Plans

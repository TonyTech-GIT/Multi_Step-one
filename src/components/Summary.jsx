import { Link } from "react-router-dom"

import PropTypes from 'prop-types';
import { useEffect } from "react";


const Summary = ({ resData, toggleInfo }) => {

    useEffect(() => {
        console.log('knnuiin', resData)

        console.log('in summary', toggleInfo);
    })


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
                    <div className="summary__container">
                        <h2>Finishing up</h2>
                        <p>Double-check everything looks OK before confirming.</p>

                        <div className="summary__container-checkout">
                            <div className="plans">
                                <div className="info">
                                    {/* <span>{resData.title} (Monthly)</span> */}
                                    <span>
                                        {resData ? `${resData.title} ${toggleInfo ? '(Monthly)' : '(Yearly)'
                                            }` : 'No Plan Selected'
                                        }
                                    </span>
                                    <Link className="plan-link" to='/plans'>Change</Link>
                                </div>
                                <span className="plans-price">
                                    {resData.price}
                                </span>
                            </div>


                            <div className="extras">
                                <div className="first">
                                    <span className="extras-text">Online service</span>
                                    <span className="extras-price">+$1/mo</span>
                                </div>
                                <div className="second">
                                    <span className="extras-text">Larger storage</span>
                                    <span className="extras-price">+$2/mo</span>
                                </div>
                            </div>
                        </div>

                        <div className="summary__container-total">
                            <span className="total-text">Total (per month)</span>
                            <span className="total-price">+$12/mo</span>
                        </div>


                    </div>
                </div>

            </section>

            <Link to='/add-ons' className='back-link-summary'>
                <span className='back-summary'>Go Back</span>

            </Link>

            <Link to='/plans'>
                <button className="btn-summary">Confirm</button>
            </Link>

        </>

    )
}

Summary.propTypes = {
    resData: PropTypes.object.isRequired,
    toggleInfo: PropTypes.bool.isRequired
}

export default Summary;

import { Link, useNavigate } from "react-router-dom"

import PropTypes from 'prop-types';
import { useEffect } from "react";


const Summary = ({ resData, toggleInfo, resAddon }) => {
    const navigate = useNavigate()

    useEffect(() => {
        console.log('knnuiin', resData)

        console.log('in summary', toggleInfo);

        console.log('in sumsum', resAddon);
    })

    const handleConfirmation = () => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    const resDataPrice = parseFloat(resData.price)
    const resTotalPrice = resDataPrice + resAddon.reduce((total, addOne) => total + parseFloat(addOne.price), 0)
    return (
        <>
            <section className='personal'>
                <div className="personal__bg">
                    <div className="personal__bg-nums">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span className="four">4</span>
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
                                <span className="four">4</span>
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
                                    ${resDataPrice}/{toggleInfo ? 'mo' : 'yr'}
                                </span>
                            </div>


                            <div className="extras">
                                {resAddon.map((addon, index) => (
                                    <div key={index} className="first">
                                        <span className="extras-text">
                                            {addon.title}
                                        </span>
                                        <span className="extras-price">
                                            ${addon.price}/{toggleInfo ? 'mo' : 'yr'}
                                        </span>
                                    </div>
                                ))}


                            </div>
                        </div>

                        <div className="summary__container-total">
                            <span className="total-text">
                                Total{`${toggleInfo ? '(Monthly)' : '(Yearly)'}`
                                }</span>
                            <span className="total-price">${resTotalPrice.toFixed(2)}/{toggleInfo ? 'mo' : 'yr'}</span>
                        </div>


                    </div>
                </div>

            </section>

            <Link to='/add-ons' className='back-link-summary'>
                <span className='back-summary'>Go Back</span>

            </Link>

            <Link to='/appreciation' onClick={handleConfirmation}>
                <button className="btn-summary" >Confirm</button>
            </Link>


        </>

    )
}

Summary.propTypes = {
    resData: PropTypes.object.isRequired,
    toggleInfo: PropTypes.bool.isRequired,
    resAddon: PropTypes.array.isRequired
}

export default Summary;

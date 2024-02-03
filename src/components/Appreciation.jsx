// import { Link } from "react-router-dom"

import ThanksImg from '../assets/images/icon-thank-you.svg'


const Appreciation = () => {


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
                    <div className="appreciation__container">
                        {/* <h2>Finishing up</h2>
                        <p>Double-check everything looks OK before confirming.</p> */}
                        <div className="appreciation">
                            <img src={ThanksImg} alt="thanks-img" />
                            <h2>Thank you!</h2>
                            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                        </div>




                    </div>
                </div>

            </section>

            {/* <Link to='/add-ons' className='back-link-summary'>
                <span className='back-summary'>Go Back</span>

            </Link>

            <Link to='/plans'>
                <button className="btn-summary">Confirm</button>
            </Link> */}

        </>

    )
}



export default Appreciation;

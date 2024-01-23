import { Link } from "react-router-dom"

const Personal = () => {
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
                    <div className="personal__form">
                        <h2>Personal info</h2>
                        <p>Please provide your name, email, address, and phone number.</p>
                        <label className="field">
                            Name

                        </label>
                        <input type="text" placeholder="e.g. Stephen King" required />
                        <label className="field">
                            Email Address

                        </label>
                        <input type="text" placeholder="e.g. stephenking@lorem.com" required />
                        <label className="field">
                            Phone Number

                        </label>
                        <input type="text" placeholder="e.g. +1 234 567 890" required />
                    </div>
                </div>

            </section>

            <Link to='/plans'>
                <button className="btn">Next Step</button>
            </Link>

        </>

    )
}

export default Personal

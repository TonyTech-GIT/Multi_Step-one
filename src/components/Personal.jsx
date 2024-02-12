import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Personal = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        // Retrieve form data from local storage when the component mounts
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            setName(storedFormData.name || '');
            setEmail(storedFormData.email || '');
            setPhone(storedFormData.phone || '');
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
    };

    const handleSubmit = () => {
        // Store form data in local storage
        const formData = { name, email, phone };
        localStorage.setItem('formData', JSON.stringify(formData));
    };


    return (
        <>
            <section className='personal'>
                <div className="personal__bg">
                    <div className="personal__bg-nums">
                        <span className="one">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
                <div className="form-desk">
                    <div className="desk-img">
                        <div >
                            <div className="num-details">
                                <span className="one">1</span>
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
                        <div className="labels">
                            <label className="field">
                                Name

                            </label>
                            <span className={`error-message ${!name && 'show'}`}>This field is required</span>
                        </div>

                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            placeholder="e.g. Stephen King"
                            required
                            className={!name && 'empty'}
                        />

                        <div className="labels">
                            <label className="field">
                                Email Address

                            </label>
                            <span className={`error-message ${!email && 'show'}`}>This field is required</span>
                        </div>

                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="e.g. stephenking@lorem.com"
                            required
                            className={!email && 'empty'}
                        />


                        <div className="labels">
                            <label className="field">
                                Phone Number

                            </label>
                            <span className={`error-message ${!phone && 'show'}`}>This field is required</span>
                        </div>

                        <input
                            name="phone"
                            value={phone}
                            onChange={handleInputChange}
                            type="number"
                            placeholder="e.g. +1 234 567 890"
                            required
                            className={!phone && 'empty'}
                        />


                    </div>
                </div>

            </section>

            <Link to='/plans' onClick={handleSubmit}>
                <button className="btn">Next Step</button>
            </Link>

        </>

    )
}

export default Personal

import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import { useForm } from 'react-hook-form';
import contact from '../../assets/images/contact_bg.png';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        getValues,
    } = useForm();

    const [showThanks, setShowThanks] = useState(false);
    const [submittedName, setSubmittedName] = useState('');
    const navigate = useNavigate();

    const contactData = async (newData) => {
        try {
            const response = await fetch(`http://localhost:8080/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                return { success: true };
            } else {
                return { success: false, error: 'Failed to submit the contact form.' };
            }
        } catch (error) {
            return { success: false, error: 'Failed to connect to the server.' };
        }
    };

    const onSubmit = async () => {
        const data = getValues();

        console.log("Nombre recolectado:", data.name);

        const { success, error } = await contactData(data);

        if (success) {
            setSubmittedName(data.name);
            setShowThanks(true);
            reset();
        } else {
            alert(error);
        }
    };

    useEffect(() => {
        if (showThanks) {
            console.log("Submitted Name:", submittedName);
        }
    }, [showThanks, submittedName]);

    const navigateToMetaverse = () => {
        navigate('/multiverse');
    };

    return (
        <section className="box-contact">
            <div className="form-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='form-title'>CONTACT</h2>
                        <div>
                            <label>Name</label>
                            <input type="text" {...register('name', { required: 'Name field is required.', maxLength: 40 })} />
                            {errors.name?.message && <p className="error-message">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="text"
                                {...register('email', {
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address.',
                                    },
                                    required: 'Email field is required.',
                                })}
                            />
                            {errors.email?.message && <p className="error-message">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label>Message</label>
                            <input type="text" {...register('message', { required: 'Message field is required.' })} />
                            {errors.message?.message && <p className="error-message">{errors.message.message}</p>}
                        </div>
                        <input className="contact-button" type="submit" value="SEND" />
                    </form>
                </div>
                {showThanks && (
                    <div className="thanks-container">
                        <h2>Thank you, {submittedName}!</h2>
                        <button onClick={navigateToMetaverse}>Surprise! (beta)</button>
                    </div>
                )}
            </div>
            <img src={contact} alt="" className="contact-image" />
        </section>
    );
};

export default ContactForm;

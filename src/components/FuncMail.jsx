import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/FuncMail.css';

const FuncMail = () => {
    const [formData, setFormData] = useState({
        mailTitle: '',
        mailDescription: '',
        mailEmail: '',
        isMailEmailRequired: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.isMailEmailRequired && !formData.mailEmail) {
            alert('Email is required');
            return;
        }
        console.log('Mail Form Data Submitted:', formData);
    };

    const handleDiscard = () => {
        setFormData({
            mailTitle: '',
            mailDescription: '',
            mailEmail: '',
            isMailEmailRequired: false,
        });
        console.log('Mail Form Data Discarded');
    };

    return (
        <div className="mail-form-container">
            <form onSubmit={handleSubmit} className="mail-form-original">
                {/* Title Field */}
                <div className="mail-form-group">
                    <label>Mail Title</label>
                    <input
                        type="text"
                        name="mailTitle"
                        value={formData.mailTitle}
                        onChange={handleChange}
                    />
                </div>

                {/* Description Field */}
                <div className="mail-form-group">
                    <label>Mail Description</label>
                    <input
                        type="text"
                        name="mailDescription"
                        value={formData.mailDescription}
                        onChange={handleChange}
                    />
                </div>

                <div className="mail-button-group">
                    <button type="submit">Save</button>
                    <button className='mail-discard-button' type="button" onClick={handleDiscard}>Discard</button>
                </div>

                <Link to="/">
                    <button id='back-btn'>Welcome Page</button>
                </Link>

            </form>

            <div className="mail-form-mirror">
                <div className='main-form'>
                    <div className="mail-form-group" id='f1'>
                        <input
                            type="button"
                            name="mirroredTitle"
                            value={formData.mailTitle}
                            style={{ width: 'auto', minWidth: '50px', maxWidth: '550px' }}
                        />
                    </div>

                    <div className="mail-form-group" id='f2'>
                        <input
                            type="button"
                            name="mirroredDescription"
                            value={formData.mailDescription}
                            style={{ width: 'auto', minWidth: '50px', maxWidth: '550px' }}
                        />
                    </div>

                    <div className="mail-form-group" id='f3'>
                        <input
                            type="text"
                            name="mirroredButtonText"
                            value={formData.mirroredButtonText}
                            onChange={handleChange}
                            style={{ minWidth: '500px', Width: 'auto', maxWidth: '550px' }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FuncMail;

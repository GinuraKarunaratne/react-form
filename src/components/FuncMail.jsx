import React, { useState } from 'react';

const FuncMail = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        email: '',
        isEmailRequired: false,
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
        if (formData.isEmailRequired && !formData.email) {
            alert('Email is required');
            return;
        }
        console.log('Form Data Submitted:', formData);
    };

    const handleDiscard = () => {
        setFormData({
            title: '',
            description: '',
            email: '',
            isEmailRequired: false,
        });
        console.log('Form Data Discarded');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-original">
                {/* Title Field */}
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                {/* Description Field */}
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                {/* Email Required Switch */}
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="isEmailRequired"
                            checked={formData.isEmailRequired}
                            onChange={handleChange}
                        />
                        Require Email
                    </label>
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={formData.isEmailRequired}
                    />
                </div>

                {/* Save and Discard Buttons */}
                <div className="button-group">
                    <button type="submit">Save</button>
                    <button id='disc' type="button" onClick={handleDiscard}>Discard</button>
                </div>
            </form>
        </div>
    );
};

export default FuncMail;

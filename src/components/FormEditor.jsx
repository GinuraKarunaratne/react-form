import React, { useState } from 'react';
import './FormEditor.css';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const FormEditor = () => {
    const [formData, setFormData] = useState({
        title: 'Welcome to the Form Editor',
        description: 'This is the form Description',
        buttonText: 'Start',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    const handleDiscard = () => {
        setFormData({
            title: 'Welcome to the Form Editor',
            description: 'This is the form Description',
            buttonText: 'Start',
            image: null
        });
        console.log('Form Data Discarded');
    };

    const handleRemoveImage = () => {
        setFormData({ ...formData, image: null });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-original">
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
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                {/* Button Text Field */}
                <div className="form-group">
                    <label>Button Text</label>
                    <input
                        type="text"
                        name="buttonText"
                        value={formData.buttonText}
                        onChange={handleChange}
                    />
                </div>

                {/* Upload Image Field */}
                <div className="image-group">
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        id="file-input"
                        onChange={handleChange}
                        style={{ display: 'none' }} // Hide the default file input
                    />
                    <label htmlFor="file-input" className="upload-button">
                        <span>Insert Image</span>
                    </label>
                </div>

                {/* Display Selected Image */}
                {formData.image && (
                    <div className="image-preview">
                        <img
                            src={URL.createObjectURL(formData.image)}
                            alt="Selected"
                            style={{ maxWidth: '240px', maxHeight: '200px' }}
                        />
                        <button
                            type="button"
                            className="remove-image-button"
                            onClick={handleRemoveImage}
                        >
                            <RemoveCircleIcon style={{ color: 'red' }} />
                        </button>
                    </div>
                )}

                {/* Save and Discard Buttons */}
                <div className="button-group">
                    <button type="submit">Save</button>
                    <button id='disc' type="button" onClick={handleDiscard}>Discard</button>
                </div>
            </form>

            {/* Right: Mirrored Fields */}
            <div className="form-mirror">
                <div className='left-mirror'>
                    <div className="form-group" id='m1'>
                        <input
                            type="button"
                            name="mirroredTitle"
                            value={formData.title}
                            style={{ fontSize: '38px', width: 'auto', minWidth: '550px', maxWidth: '550px'}}
                        />
                    </div>

                    <div className="form-group" id='m2'>
                        <input
                            type="button"
                            name="mirroredDescription"
                            value={formData.description}
                            style={{ fontSize: '28px', width: 'auto', minWidth: '250px', maxWidth: '550px'}}
                        />
                    </div>

                    <div className="form-group" id='m3'>
                        <input
                            type="button"
                            name="mirroredButtonText"
                            value={formData.buttonText}
                            style={{ fontSize: '16px', width: 'auto' }}
                        />
                    </div>
                </div>

                <div className='right-mirror'>
                    {formData.image && (
                        <div className="image-preview-mirror" style={{ marginTop: '20px' }}>
                            <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Selected"
                            />
                            <button
                                type="button"
                                className="remove-image-button"
                                onClick={handleRemoveImage}
                            >
                                <RemoveCircleIcon style={{ color: 'red' }} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormEditor;
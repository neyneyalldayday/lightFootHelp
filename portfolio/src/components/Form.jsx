import React, { useState } from 'react';

// The styles used for the contact form
const styles = {
    contactLink: {
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)',
        fontSize: '1.1rem',
        fontWeight: '500'
    }
}

function Form() {
    // Setting initial state to an object
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alerts the user their name, subject and message. Also clears the `formData.name`, `formData.subject and `formData.message` inputs
        alert(`Hello ${formData.name}! Thank you for your message about ${formData.subject}. Please find a review of your message here: ${formData.message}`);
        setFormData({
            name: '',
            subject: '',
            message: ''
        });
    };

    // Each input has a `value`, `name`, and `onChange` prop, the value sets the form data that is uses to alert the user
    return (
        <div>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Your Name</label>
                    <input
                        style={styles.contactLink}
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                        type="text"
                        className="form-control"
                        placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Subject</label>
                    <input
                        style={styles.contactLink}
                        name="subject"
                        onChange={handleInputChange}
                        value={formData.subject}
                        type="text"
                        className="form-control"
                        placeholder="Subject of your Message" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                        style={styles.contactLink}
                        name="message"
                        onChange={handleInputChange}
                        value={formData.message}
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"></textarea>
                </div>
                <button style={styles.contactLink} type="button" className="btn-light btn mt-3 col-4" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;

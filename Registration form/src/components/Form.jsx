import React, { useState } from 'react';
import backgroundImage from '../assets/Background.jpg'; // Import the image

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
                <h3 className="text-lg font-semibold text-center">{message}</h3>
                <div className="flex justify-center mt-4">
                    <button 
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500" 
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const DeveloperRegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        portfolio: '',
        primaryLanguage: '',
        experience: '',
        skills: '',
        password: ''
    });

    const [loading, setLoading] = useState(false); // State for loading
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
    const [modalMessage, setModalMessage] = useState(''); // State for modal message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { fullName, email, phone, password } = formData;

        if (!fullName || !email || !phone || !password) {
            setModalMessage('Please fill in all required fields.');
            setModalVisible(true);
            return false;
        }

        // Simple email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setModalMessage('Please enter a valid email address.');
            setModalVisible(true);
            return false;
        }

        // Check phone number length (assuming it should be at least 10 digits)
        if (phone.length < 10) {
            setModalMessage('Phone number must be at least 10 digits long.');
            setModalVisible(true);
            return false;
        }

        // Check password length (assuming it should be at least 6 characters)
        if (password.length < 6) {
            setModalMessage('Password must be at least 6 characters long.');
            setModalVisible(true);
            return false;
        }

        // If all validations pass
        setModalMessage('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Validate the form before submitting
        if (!validateForm()) {
            setLoading(false); // End loading
            return; // Stop submission if validation fails
        }

        setModalMessage('Submitting your data...'); // Set prompt message

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                setModalMessage('Registration successful!'); // Success message
                setModalVisible(true); // Show modal
                
                // Clear form fields after successful registration
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    github: '',
                    linkedin: '',
                    portfolio: '',
                    primaryLanguage: '',
                    experience: '',
                    skills: '',
                    password: ''
                });

                console.log(result); // Check this in the browser's Network tab
            } else {
                setModalMessage('Registration failed. Please try again.'); // Error message
                setModalVisible(true); // Show modal
            }
        } catch (error) {
            console.error('Error:', error);
            setModalMessage('An error occurred. Please try again.'); // Error message
            setModalVisible(true); // Show modal
        } finally {
            setLoading(false); // End loading
        }
    };

    const closeModal = () => {
        setModalVisible(false); // Close modal
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}  // Use the imported image
        >
            <div className="bg-black bg-opacity-10 border backdrop-blur-md p-8 mx-4 my-5 rounded-lg shadow-md w-full max-w-4xl">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Developer Registration</h2>

                    {/* Full Name and Email */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="w-full md:w-1/2">
                            <label className="block text-white">Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="block text-white">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                    </div>

                    {/* Phone and GitHub */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="w-full md:w-1/2">
                            <label className="block text-white">Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="block text-white">GitHub:</label>
                            <input
                                type="text"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                    </div>

                    {/* LinkedIn and Portfolio */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="w-full md:w-1/2">
                            <label className="block text-white">LinkedIn:</label>
                            <input
                                type="text"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="block text-white">Portfolio:</label>
                            <input
                                type="text"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                    </div>

                    {/* Language, Experience, Skills and Password */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="w-full md:w-1/3">
                            <label className="block text-white">Primary Language:</label>
                            <input
                                type="text"
                                name="primaryLanguage"
                                value={formData.primaryLanguage}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <label className="block text-white">Experience:</label>
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <label className="block text-white">Skills:</label>
                            <input
                                type="text"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                className="w-full p-2 border rounded outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition duration-300"
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>

            {modalVisible && <Modal message={modalMessage} onClose={closeModal} />}
        </div>
    );
};

export default DeveloperRegistrationForm;

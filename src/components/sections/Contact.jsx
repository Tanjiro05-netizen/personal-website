import React, { forwardRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,  // From EmailJS dashboard
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // From EmailJS dashboard
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                    to_name: 'Anon',         // Replace with your actual name
                    to_email: 'CrackedSlayer26@gmail.com'   // Replace with your actual email
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY  // From EmailJS dashboard
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
            console.error('Failed to send email:', error);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="min-h-screen flex flex-col justify-center"
        >
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-400"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                        <p className="text-green-500 text-center">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
});

export default Contact;
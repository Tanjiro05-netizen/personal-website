import axios from 'axios';

export default async function handler(req, res) {
    console.log('Starting handler...'); // Debugging

    // Log environment variables (remove sensitive values in production)
    console.log('Environment Variables:', {
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    });

    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        console.log('Received request payload:', { name, email, message }); // Debugging

        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                template_params: {
                    from_name: name,
                    reply_to: email,
                    message: message,
                    to_name: 'Anon',
                    to_email: 'CrackedSlayer26@gmail.com',
                },
            });

            console.log('EmailJS response:', response.data); // Debugging
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error.response?.data || error.message || error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
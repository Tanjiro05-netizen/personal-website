const axios = require('axios').default;

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.emailjs.com/api/v1.0/email/send',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                accessToken: process.env.EMAILJS_PRIVATE_KEY,
                template_params: {
                    from_name: name,
                    reply_to: email,
                    message: message,
                    to_name: 'Anon',
                    to_email: 'CrackedSlayer26@gmail.com',
                },
            },
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('EmailJS Error:', error.response?.data || error.message);
        return res.status(500).json({
            error: 'Failed to send email',
            details: error.message
        });
    }
}
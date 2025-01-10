// api/sendEmail.js
import emailjs from '@emailjs/browser';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            await emailjs.send(
                process.env.EMAILJS_SERVICE_ID, // Use server-side environment variable
                process.env.EMAILJS_TEMPLATE_ID, // Use server-side environment variable
                {
                    from_name: name,
                    reply_to: email,
                    message: message,
                    to_name: 'Anon', // Replace with your actual name
                    to_email: 'CrackedSlayer26@gmail.com', // Replace with your actual email
                },
                process.env.EMAILJS_PUBLIC_KEY // Use server-side environment variable
            );

            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Failed to send email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
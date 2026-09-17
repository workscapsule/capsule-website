const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());

// API Endpoint for customer enquiries
app.post('/api/send-enquiry', async (req, res) => {
  try {
    const { sendEnquiryEmail } = await import('./api/emailService.js');
    const result = await sendEnquiryEmail(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message || 'Error processing enquiry' });
  }
});

// Serve Vite production build
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for client routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Capsule Company server running on http://localhost:${PORT}`);
});

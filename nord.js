const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/check-cibil', async (req, res) => {
  const { panNumber, mobile, fullName } = req.body;

  try {
    // Credit Bureau API Endpoint (Example)
    const apiResponse = await axios.post('https://api.fintechprovider.com/v1/credit-report', {
      pan: panNumber,
      phone: mobile,
      name: fullName
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY_HERE'
      }
    });

    // Score aur report client ko bhejna
    res.json({
      success: true,
      cibilScore: apiResponse.data.score,
      reportSummary: apiResponse.data.summary
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Verification failed' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

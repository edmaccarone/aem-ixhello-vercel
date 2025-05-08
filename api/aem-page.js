
const axios = require('axios');

module.exports = async (req, res) => {
  console.log('📥 Incoming request to /api/aem-page');

  try {
    const response = await axios.get('http://localhost:4502/content/ixhello-integration-demo/us/en.model.json', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    });

    if (!response.data || typeof response.data !== 'object') {
      console.error('❌ Invalid or empty data received from AEM');
      return res.status(500).json({ error: 'Invalid data from AEM' });
    }

    console.log('✅ AEM data fetched. Sending to client...');
    res.json(response.data);
  } catch (err) {
    console.error('❌ Error fetching from AEM:', err.message);
    res.status(500).json({ error: 'Fetch failed', detail: err.message });
  }
};

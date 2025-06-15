const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'patient_data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `patient_${formData.patientId}_${timestamp}.json`;
    const filepath = path.join(dataDir, filename);

    // Save the data
    fs.writeFile(filepath, JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).json({ error: 'Failed to save data' });
            return;
        }
        res.json({ success: true, message: 'Data saved successfully' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Patient data will be stored in: ${dataDir}`);
}); 
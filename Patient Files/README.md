# Patient Form System

A secure system for collecting patient information and storing it locally on your computer.

## Setup Instructions

1. Make sure you have Node.js installed on your computer
2. Open a terminal in this directory
3. Run the following commands:
   ```bash
   npm install
   npm start
   ```
4. The server will start running at http://localhost:3000

## How to Use

1. Once the server is running, you can share the URL http://localhost:3000 with your patients
2. Patients can fill out the form and submit their information
3. All submitted data will be stored in the `patient_data` folder on your computer
4. Each submission creates a new JSON file with the patient's information

## Security Notes

- The form is served locally on your computer
- All data is stored in JSON files on your computer
- No data is sent to external servers
- Each submission is stored in a separate file with a timestamp

## Accessing Patient Data

All patient submissions are stored in the `patient_data` folder in JSON format. Each file is named with the pattern:
`patient_[ID]_[timestamp].json`

## Stopping the Server

To stop the server, press Ctrl+C in the terminal where it's running. 
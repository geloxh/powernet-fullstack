require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/User');
const readLine = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => new Promise((resolve) => rl.question(question, resolve));

async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/powernet');

        const email = await prompt('Admin email: ');
        const password  = await prompt('Admin password: ');
        const name = await prompt('Admin name: ');

        const existing = await User.findOne({ email });
        if (existing) {
            console.log('User already exists.');
            process.exit(1);
        }

        await new User({ name, email, password, role: 'admin' }).save();
        console.log('Admin created successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

createAdmin();
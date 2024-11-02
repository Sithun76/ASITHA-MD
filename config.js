const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=rv52ASzY#8zDxZw3t5xvn9rPL30_43ldKiqU-bGHrvbEqX3lQwqI
SESSION_ID: process.env.SESSION_ID || "",
MONGODB: process.env.MONGODB || "",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};

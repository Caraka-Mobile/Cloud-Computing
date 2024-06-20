const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const generateSecretKey = (length = 64) => {
    return crypto.randomBytes(length).toString('hex');
};

const secretKey = generateSecretKey();
const envFilePath = path.join(__dirname, '.env');

// Memeriksa apakah file .env sudah ada
if (fs.existsSync(envFilePath)) {
    // Jika sudah ada, tambahkan atau perbarui JWT_SECRET_KEY
    const envContent = fs.readFileSync(envFilePath, 'utf8');
    const updatedEnvContent = envContent.replace(/JWT_SECRET_KEY=.*/, `JWT_SECRET_KEY=${secretKey}`);
    
    // Jika JWT_SECRET_KEY belum ada, tambahkan di akhir
    if (!envContent.includes('JWT_SECRET_KEY=')) {
        fs.appendFileSync(envFilePath, `\nJWT_SECRET_KEY=${secretKey}`);
    } else {
        fs.writeFileSync(envFilePath, updatedEnvContent);
    }
} else {
    // Jika file .env belum ada, buat baru
    fs.writeFileSync(envFilePath, `JWT_SECRET_KEY=${secretKey}`);
}

console.log('Generated JWT Secret Key and saved to .env');

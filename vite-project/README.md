# 🔐 Password Strength Analyzer

A React-based tool that calculates password entropy and estimates brute-force cracking time - all client-side for maximum privacy.

![Demo Screenshot](https://via.placeholder.com/800x400?text=Password+Strength+Analyzer+Demo) *(replace with actual screenshot)*

## Features

✨ Real-time password strength evaluation  
📏 Character set analysis (lower/upper/digits/symbols)  
🧮 Entropy calculation in bits  
⏱️ Crack time estimation (seconds to centuries)  
🔒 100% client-side - no data leaves your browser  

## How It Works

1. **Character Set Detection**:
   - Lowercase letters (+26 to charset)
   - Uppercase letters (+26)
   - Digits (+10)
   - Symbols (+32)

2. **Entropy Calculation**:  
   `Entropy = length × log₂(charset_size)`

3. **Crack Time Estimation**:
    < 28 bits → Minutes
    < 36 bits → Days
    < 60 bits → Years
    60+ bits → Centuries

   
## Installation

```bash
npm install password-strength-analyzer
# or
yarn add password-strength-analyzer

git clone https://github.com/your-username/Password-Strength-Analyzer.git
cd Password-Strength-Analyzer
npm install
npm start

Limitations

⚠️ Estimates brute-force attacks only
⚠️ Doesn't account for dictionary attacks
⚠️ Accuracy depends on entropy thresholds
License

MIT © [Hafsa Abid]

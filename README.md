# 🔐 Password Strength Analyzer

A React-based tool that calculates password entropy and estimates brute-force cracking time - all client-side for maximum privacy.

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

## 🚀 Quick Installation

### 1. Copy-Paste Method
```bash
cd your-react-project/src/components
curl -O https://raw.githubusercontent.com/HafsaAbid82/Password-Strength-Analyzer/main/Psa.jsx
curl -O https://raw.githubusercontent.com/HafsaAbid82/Password-Strength-Analyzer/main/Psa.css
```
### 2. Developer Method
```bash
# Clone the project
git clone https://github.com/HafsaAbid82/Password-Strength-Analyzer.git

# Install as local dependency (optional)
cd your-react-project
npm install ../path-to-cloned-folder

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

// 1. NBC Bank Corporate Logo SVG
const nbcBankSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Mt Kilimanjaro Peak -->
  <polygon points="120,70 170,25 210,70" fill="#E2E8F0"/>
  <polygon points="170,25 210,70 260,70 210,40" fill="#CBD5E1"/>
  <polygon points="155,38 170,25 185,38 170,45" fill="#FFFFFF"/>
  <!-- Red Giraffe Silhouette -->
  <path d="M50 110 C50 80, 65 65, 80 50 C85 45, 90 35, 92 25 C93 20, 96 18, 100 18 C104 18, 106 22, 104 28 C102 34, 108 30, 112 35 C108 40, 100 45, 95 55 C90 65, 95 85, 90 110 Z" fill="#DC2626"/>
  <circle cx="98" cy="22" r="2.5" fill="#FFF"/>
  <!-- Giraffe Spots -->
  <path d="M75 60 Q82 58 78 68 Q72 66 75 60 Z M82 75 Q90 72 86 84 Q78 82 82 75 Z M65 85 Q72 82 70 94 Q62 92 65 85 Z" fill="#991B1B"/>
  <!-- NBC Blue Text -->
  <text x="125" y="102" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="64" fill="#0E2F6B" letter-spacing="-1">NBC</text>
  <!-- Red Subtext -->
  <text x="62" y="126" font-family="'Inter', sans-serif" font-weight="800" font-size="16" fill="#DC2626" letter-spacing="0.5">National Bank of Commerce</text>
  <!-- Blue Tagline -->
  <text x="95" y="146" font-family="'Inter', sans-serif" font-weight="600" font-style="italic" font-size="14" fill="#0E2F6B">Conveniently Everywhere.</text>
</svg>`;

// 2. CRDB Bank Corporate Logo SVG
const crdbBankSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Left Green Bars -->
  <rect x="30" y="55" width="40" height="10" rx="3" fill="#15803D"/>
  <rect x="30" y="73" width="40" height="10" rx="3" fill="#15803D"/>
  <rect x="30" y="91" width="40" height="10" rx="3" fill="#15803D"/>
  <!-- Right Green Bars -->
  <rect x="330" y="55" width="40" height="10" rx="3" fill="#15803D"/>
  <rect x="330" y="73" width="40" height="10" rx="3" fill="#15803D"/>
  <rect x="330" y="91" width="40" height="10" rx="3" fill="#15803D"/>
  <!-- CRDB Center Text -->
  <text x="200" y="80" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="46" fill="#15803D" text-anchor="middle" letter-spacing="2">CRDB</text>
  <!-- Lines around BANK -->
  <line x1="90" y1="92" x2="135" y2="92" stroke="#15803D" stroke-width="4"/>
  <text x="200" y="120" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#15803D" text-anchor="middle" letter-spacing="6">BANK</text>
  <line x1="265" y1="92" x2="310" y2="92" stroke="#15803D" stroke-width="4"/>
</svg>`;

// 3. Azam Media Logo SVG
const azamMediaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Top Blue Arc -->
  <path d="M70 65 C120 20, 280 20, 330 65 C280 40, 120 40, 70 65 Z" fill="url(#azamBlueGrad)"/>
  <defs>
    <linearGradient id="azamBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#003399"/>
      <stop offset="50%" stop-color="#00A3E0"/>
      <stop offset="100%" stop-color="#003399"/>
    </linearGradient>
  </defs>
  <!-- Red "azam" Text -->
  <text x="120" y="98" font-family="'Poppins', sans-serif" font-weight="900" font-size="52" fill="#E30613" font-style="italic">azam</text>
  <!-- Cyan/Blue "Media" Text -->
  <text x="175" y="138" font-family="'Poppins', sans-serif" font-weight="900" font-size="48" fill="#00A3E0" font-style="italic">Media</text>
</svg>`;

// 4. TBC Broadcast Logo SVG
const tbcSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Outer Rounded Blue Container -->
  <rect x="50" y="25" width="300" height="110" rx="28" fill="url(#tbcBlue)" stroke="#FACC15" stroke-width="4"/>
  <defs>
    <linearGradient id="tbcBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <!-- Concentric Yellow Radar Rings -->
  <ellipse cx="200" cy="80" rx="130" ry="45" fill="none" stroke="#FACC15" stroke-width="2" opacity="0.6"/>
  <ellipse cx="200" cy="80" rx="100" ry="34" fill="none" stroke="#FACC15" stroke-width="2.5" opacity="0.75"/>
  <ellipse cx="200" cy="80" rx="70" ry="24" fill="none" stroke="#FACC15" stroke-width="3" opacity="0.9"/>
  <!-- 3D Silver TBC Text -->
  <text x="202" y="100" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="60" fill="#000" text-anchor="middle" font-style="italic" opacity="0.5">TBC</text>
  <text x="200" y="98" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="60" fill="#FFFFFF" text-anchor="middle" font-style="italic" stroke="#E2E8F0" stroke-width="1">TBC</text>
</svg>`;

// 5. CRDB Federation Cup Logo SVG
const crdbCupSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Green Mountain Base -->
  <path d="M40 160 L100 100 L160 160 Z" fill="#15803D"/>
  <path d="M85 115 L100 100 L115 115 Z" fill="#22C55E"/>
  <!-- Trophy Cup -->
  <path d="M70 40 L130 40 L125 90 C125 115 75 115 75 90 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
  <!-- Handles -->
  <path d="M70 45 C50 45 50 75 73 80" fill="none" stroke="#FACC15" stroke-width="5"/>
  <path d="M130 45 C150 45 150 75 127 80" fill="none" stroke="#FACC15" stroke-width="5"/>
  <!-- Football Globe on top -->
  <circle cx="100" cy="30" r="16" fill="#0EA5E9" stroke="#FFF" stroke-width="2"/>
  <!-- CRDB Text -->
  <text x="100" y="145" font-family="'Poppins', sans-serif" font-weight="900" font-size="14" fill="#15803D" text-anchor="middle">CRDB BANK</text>
  <text x="100" y="165" font-family="'Poppins', sans-serif" font-weight="900" font-size="13" fill="#22C55E" text-anchor="middle">FEDERATION CUP</text>
</svg>`;

// 6. WPL Logo SVG
const wplSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Female Player Silhouette -->
  <path d="M45 130 C40 100 55 70 70 50 C75 42 80 30 78 20 C82 20 86 25 84 32 C80 45 68 65 60 90 L85 110 L70 145 Z" fill="#9333EA"/>
  <circle cx="80" cy="18" r="7" fill="#9333EA"/>
  <circle cx="50" cy="148" r="8" fill="#3B82F6" stroke="#9333EA" stroke-width="2"/>
  <!-- Script Wpl Text -->
  <text x="125" y="110" font-family="'Brush Script MT', 'Dancing Script', cursive, sans-serif" font-weight="700" font-size="72" fill="#7E22CE">Wpl</text>
  <!-- Subtitle -->
  <text x="125" y="138" font-family="'Poppins', sans-serif" font-weight="800" font-size="11" fill="#A855F7" text-anchor="middle">Women's Premier League</text>
</svg>`;

// 7. Beach Soccer League Logo SVG
const beachSoccerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Palm Tree -->
  <path d="M135 125 Q138 85 145 50" stroke="#78350F" stroke-width="6" fill="none"/>
  <path d="M145 50 C125 35 105 45 100 50 C120 55 135 55 145 50 Z" fill="#16A34A"/>
  <path d="M145 50 C165 35 185 45 190 50 C170 55 155 55 145 50 Z" fill="#15803D"/>
  <path d="M145 50 C140 25 155 10 160 10 C155 28 152 40 145 50 Z" fill="#22C55E"/>
  <!-- Player Silhouette Bicycle Kick -->
  <path d="M60 90 C70 70 95 65 110 80 L90 100 L65 110 Z" fill="#B91C1C"/>
  <circle cx="65" cy="55" r="7" fill="#B91C1C"/>
  <circle cx="50" cy="45" r="8" fill="#EA580C" stroke="#FFF" stroke-width="2"/>
  <!-- Green Beach Soccer Text -->
  <text x="100" y="152" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="18" fill="#16A34A" text-anchor="middle" letter-spacing="1">BEACH</text>
  <text x="100" y="172" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="18" fill="#15803D" text-anchor="middle" letter-spacing="1">SOCCER</text>
  <text x="100" y="188" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#166534" text-anchor="middle">League</text>
</svg>`;

// 8. RCL Regional Champions League Logo SVG
const rclSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Red Kicking Player Silhouette -->
  <path d="M40 120 L75 60 L110 90 L75 140 Z" fill="#DC2626"/>
  <circle cx="65" cy="45" r="8" fill="#DC2626"/>
  <circle cx="35" cy="130" r="7" fill="#1E3A8A"/>
  <!-- Bold Navy RCL Text -->
  <text x="135" y="115" font-family="'Poppins', 'Arial Black', sans-serif" font-weight="900" font-size="52" fill="#1E3A8A" letter-spacing="-1">RCL</text>
  <text x="135" y="134" font-family="'Inter', sans-serif" font-weight="800" font-size="8" fill="#DC2626" letter-spacing="0.5">REGIONAL CHAMPIONS LEAGUE</text>
</svg>`;

fs.writeFileSync(path.join(imagesDir, 'sponsor-nbc-bank.svg'), nbcBankSvg);
fs.writeFileSync(path.join(imagesDir, 'sponsor-crdb-bank.svg'), crdbBankSvg);
fs.writeFileSync(path.join(imagesDir, 'sponsor-azam-media.svg'), azamMediaSvg);
fs.writeFileSync(path.join(imagesDir, 'sponsor-tbc.svg'), tbcSvg);
fs.writeFileSync(path.join(imagesDir, 'logo-crdb-cup.svg'), crdbCupSvg);
fs.writeFileSync(path.join(imagesDir, 'logo-wpl.svg'), wplSvg);
fs.writeFileSync(path.join(imagesDir, 'logo-beach-soccer.svg'), beachSoccerSvg);
fs.writeFileSync(path.join(imagesDir, 'logo-rcl.svg'), rclSvg);

console.log('Successfully created sponsor and competition SVG logos!');

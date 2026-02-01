function BibleCharacterIllust({ characterId }) {
  const illustrations = {
    // ===== 기존 16명 =====

    // 요셉 - 색동옷, 밀 이삭
    joseph: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="70" y="110" width="60" height="60" rx="10" fill="#E65100" />
        <rect x="80" y="110" width="8" height="60" rx="2" fill="#FDD835" />
        <rect x="96" y="110" width="8" height="60" rx="2" fill="#43A047" />
        <rect x="112" y="110" width="8" height="60" rx="2" fill="#1E88E5" />
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="28" ry="12" fill="#4E342E" />
        <ellipse cx="75" cy="72" rx="6" ry="14" fill="#4E342E" />
        <ellipse cx="125" cy="72" rx="6" ry="14" fill="#4E342E" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M92 90 Q100 98 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="150" y1="170" x2="155" y2="100" stroke="#8D6E63" strokeWidth="3" />
        <ellipse cx="155" cy="100" rx="5" ry="10" fill="#FDD835" />
        <ellipse cx="150" cy="110" rx="5" ry="10" fill="#FDD835" transform="rotate(-15,150,110)" />
        <ellipse cx="160" cy="108" rx="5" ry="10" fill="#FDD835" transform="rotate(15,160,108)" />
      </svg>
    ),

    // 룻 - 밀 이삭 들고 있는 모습, 머리 수건
    ruth: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="70" y="110" width="60" height="60" rx="10" fill="#7B1FA2" />
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        <path d="M68 75 Q100 40 132 75 Q130 65 100 50 Q70 65 68 75Z" fill="#CE93D8" />
        <path d="M68 75 Q65 90 72 100 L70 110 Q100 100 130 110 L128 100 Q135 90 132 75 Q100 85 68 75Z" fill="#CE93D8" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M92 90 Q100 98 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <circle cx="118" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <line x1="140" y1="170" x2="145" y2="110" stroke="#8D6E63" strokeWidth="2" />
        <line x1="148" y1="170" x2="150" y2="115" stroke="#8D6E63" strokeWidth="2" />
        <line x1="155" y1="170" x2="155" y2="120" stroke="#8D6E63" strokeWidth="2" />
        <ellipse cx="145" cy="105" rx="4" ry="8" fill="#FFD54F" />
        <ellipse cx="150" cy="110" rx="4" ry="8" fill="#FFD54F" />
        <ellipse cx="155" cy="115" rx="4" ry="8" fill="#FFD54F" />
      </svg>
    ),

    // 이사야 - 두루마리, 선지자 옷
    isaiah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="70" y="110" width="60" height="60" rx="10" fill="#283593" />
        <path d="M65 115 L70 170 L130 170 L135 115 Q100 125 65 115Z" fill="#3949AB" opacity="0.7" />
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="28" ry="12" fill="#5D4037" />
        <ellipse cx="75" cy="72" rx="6" ry="14" fill="#5D4037" />
        <ellipse cx="125" cy="72" rx="6" ry="14" fill="#5D4037" />
        <ellipse cx="100" cy="100" rx="12" ry="8" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="140" y="120" width="25" height="40" rx="3" fill="#FFF9C4" />
        <circle cx="140" cy="120" r="5" fill="#D7CCC8" />
        <circle cx="165" cy="120" r="5" fill="#D7CCC8" />
        <circle cx="140" cy="160" r="5" fill="#D7CCC8" />
        <circle cx="165" cy="160" r="5" fill="#D7CCC8" />
        <line x1="147" y1="130" x2="158" y2="130" stroke="#8D6E63" strokeWidth="1" />
        <line x1="147" y1="135" x2="158" y2="135" stroke="#8D6E63" strokeWidth="1" />
        <line x1="147" y1="140" x2="158" y2="140" stroke="#8D6E63" strokeWidth="1" />
        <line x1="147" y1="145" x2="155" y2="145" stroke="#8D6E63" strokeWidth="1" />
      </svg>
    ),

    // 다니엘 - 사자, 왕궁 옷
    daniel: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <ellipse cx="50" cy="155" rx="25" ry="20" fill="#F9A825" />
        <circle cx="50" cy="135" r="18" fill="#F9A825" />
        <ellipse cx="50" cy="130" rx="24" ry="18" fill="#FF8F00" />
        <circle cx="43" cy="132" r="2" fill="#3E2723" />
        <circle cx="57" cy="132" r="2" fill="#3E2723" />
        <ellipse cx="50" cy="139" rx="4" ry="2.5" fill="#E65100" />
        <rect x="75" y="110" width="55" height="60" rx="10" fill="#1565C0" />
        <rect x="95" y="110" width="15" height="60" rx="2" fill="#FFD54F" opacity="0.5" />
        <circle cx="102" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="102" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="78" cy="72" rx="5" ry="13" fill="#3E2723" />
        <ellipse cx="126" cy="72" rx="5" ry="13" fill="#3E2723" />
        <circle cx="93" cy="78" r="3" fill="#3E2723" />
        <circle cx="111" cy="78" r="3" fill="#3E2723" />
        <circle cx="94" cy="77" r="1" fill="white" />
        <circle cx="112" cy="77" r="1" fill="white" />
        <path d="M96 90 Q102 95 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // 기드온 - 횃불과 항아리
    gideon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#795548" />
        <rect x="85" y="115" width="30" height="30" rx="5" fill="#A1887F" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#4E342E" />
        <ellipse cx="76" cy="70" rx="5" ry="12" fill="#4E342E" />
        <ellipse cx="124" cy="70" rx="5" ry="12" fill="#4E342E" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="150" y1="160" x2="155" y2="105" stroke="#8D6E63" strokeWidth="4" />
        <ellipse cx="155" cy="95" rx="8" ry="12" fill="#FF6F00" />
        <ellipse cx="155" cy="90" rx="5" ry="9" fill="#FFCA28" />
        <ellipse cx="155" cy="87" rx="3" ry="5" fill="#FFF9C4" />
        <ellipse cx="45" cy="150" rx="15" ry="20" fill="#D7CCC8" />
        <ellipse cx="45" cy="132" rx="10" ry="5" fill="#BCAAA4" />
      </svg>
    ),

    // 다윗 - 하프/수금, 왕관
    david: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#1B5E20" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <circle cx="82" cy="62" r="8" fill="#D84315" />
        <circle cx="95" cy="56" r="8" fill="#D84315" />
        <circle cx="108" cy="56" r="8" fill="#D84315" />
        <circle cx="118" cy="62" r="8" fill="#D84315" />
        <circle cx="76" cy="74" r="6" fill="#D84315" />
        <circle cx="124" cy="74" r="6" fill="#D84315" />
        <polygon points="82,55 86,42 92,52 100,38 108,52 114,42 118,55" fill="#FFD54F" />
        <rect x="82" y="55" width="36" height="5" rx="2" fill="#FFD54F" />
        <circle cx="92" cy="55" r="2" fill="#E53935" />
        <circle cx="100" cy="53" r="2" fill="#1E88E5" />
        <circle cx="108" cy="55" r="2" fill="#E53935" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M92 89 Q100 98 108 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M140 120 Q160 120 160 150 Q160 170 145 170 L140 170 Z" fill="none" stroke="#8D6E63" strokeWidth="3" />
        <line x1="143" y1="125" x2="143" y2="165" stroke="#FFD54F" strokeWidth="1" />
        <line x1="148" y1="122" x2="148" y2="168" stroke="#FFD54F" strokeWidth="1" />
        <line x1="153" y1="121" x2="153" y2="169" stroke="#FFD54F" strokeWidth="1" />
        <line x1="158" y1="123" x2="158" y2="168" stroke="#FFD54F" strokeWidth="1" />
      </svg>
    ),

    // 사도 요한 - 사랑의 상징
    john: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FCE4EC" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#C62828" />
        <path d="M67 115 L72 170 L128 170 L133 115 Q100 125 67 115Z" fill="#D32F2F" opacity="0.6" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="72" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="72" rx="5" ry="12" fill="#5D4037" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M92 89 Q100 98 108 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <circle cx="118" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <path d="M150 120 C150 115 143 110 143 117 C143 110 136 115 136 120 L143 130 L150 120Z" fill="#E53935" />
        <path d="M165 135 C165 130 158 125 158 132 C158 125 151 130 151 135 L158 145 L165 135Z" fill="#EF9A9A" />
      </svg>
    ),

    // 누가 - 깃펜, 두루마리
    luke: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#2E7D32" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#4E342E" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#4E342E" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#4E342E" />
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#4E342E" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M94 89 Q100 94 106 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="138" y="125" width="22" height="35" rx="3" fill="#FFF9C4" />
        <circle cx="138" cy="125" r="4" fill="#D7CCC8" />
        <circle cx="160" cy="125" r="4" fill="#D7CCC8" />
        <line x1="143" y1="133" x2="155" y2="133" stroke="#8D6E63" strokeWidth="1" />
        <line x1="143" y1="138" x2="155" y2="138" stroke="#8D6E63" strokeWidth="1" />
        <line x1="143" y1="143" x2="152" y2="143" stroke="#8D6E63" strokeWidth="1" />
        <line x1="165" y1="110" x2="155" y2="150" stroke="#5D4037" strokeWidth="2" />
        <path d="M165 110 L170 100 L163 108 Z" fill="#5D4037" />
      </svg>
    ),

    // 베드로 - 물고기, 그물
    peter: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E3F2FD" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#0D47A1" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#5D4037" />
        <ellipse cx="78" cy="68" rx="5" ry="10" fill="#5D4037" />
        <ellipse cx="122" cy="68" rx="5" ry="10" fill="#5D4037" />
        <ellipse cx="100" cy="100" rx="14" ry="7" fill="#5D4037" />
        <circle cx="91" cy="76" r="4" fill="#3E2723" />
        <circle cx="109" cy="76" r="4" fill="#3E2723" />
        <circle cx="92" cy="75" r="1.5" fill="white" />
        <circle cx="110" cy="75" r="1.5" fill="white" />
        <path d="M90 88 Q100 100 110 88" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="155" cy="140" rx="20" ry="10" fill="#64B5F6" />
        <polygon points="175,140 190,130 190,150" fill="#64B5F6" />
        <circle cx="148" cy="138" r="2" fill="#1A237E" />
        <path d="M135 165 Q145 158 155 165 Q165 172 175 165" stroke="#90CAF9" strokeWidth="2" fill="none" />
        <path d="M130 175 Q140 168 150 175 Q160 182 170 175" stroke="#90CAF9" strokeWidth="2" fill="none" />
      </svg>
    ),

    // 미리암 - 소고(탬버린), 춤추는 모습
    miriam: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <path d="M70 115 Q75 170 100 170 Q125 170 130 115 Q100 125 70 115Z" fill="#F57C00" />
        <line x1="70" y1="120" x2="45" y2="90" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        <line x1="130" y1="120" x2="155" y2="90" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        <circle cx="100" cy="78" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#3E2723" />
        <ellipse cx="76" cy="78" rx="5" ry="20" fill="#3E2723" />
        <ellipse cx="124" cy="78" rx="5" ry="20" fill="#3E2723" />
        <ellipse cx="80" cy="98" rx="4" ry="10" fill="#3E2723" />
        <ellipse cx="120" cy="98" rx="4" ry="10" fill="#3E2723" />
        <path d="M86 76 Q91 72 96 76" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M104 76 Q109 72 114 76" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M90 88 Q100 100 110 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="85" r="5" fill="#FFAB91" opacity="0.6" />
        <circle cx="118" cy="85" r="5" fill="#FFAB91" opacity="0.6" />
        <circle cx="40" cy="82" r="14" fill="#FFECB3" stroke="#FFB300" strokeWidth="2" />
        <circle cx="33" cy="76" r="2.5" fill="#FFD54F" />
        <circle cx="47" cy="76" r="2.5" fill="#FFD54F" />
        <circle cx="33" cy="88" r="2.5" fill="#FFD54F" />
        <circle cx="47" cy="88" r="2.5" fill="#FFD54F" />
        <text x="155" y="75" fontSize="20" fill="#FF6F00">♪</text>
        <text x="165" y="60" fontSize="16" fill="#FFB300">♫</text>
      </svg>
    ),

    // 바나바 - 열린 팔, 따뜻한 느낌
    barnabas: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#E65100" />
        <line x1="72" y1="125" x2="40" y2="110" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        <line x1="128" y1="125" x2="160" y2="110" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        <circle cx="37" cy="108" r="6" fill="#FFCC80" />
        <circle cx="163" cy="108" r="6" fill="#FFCC80" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="100" cy="99" rx="11" ry="6" fill="#5D4037" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        <path d="M90 88 Q100 100 110 88" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="35" y="90" fontSize="14" fill="#FFD54F">✦</text>
        <text x="155" y="90" fontSize="14" fill="#FFD54F">✦</text>
        <text x="100" y="45" fontSize="10" fill="#FFD54F">✦</text>
      </svg>
    ),

    // 사도 바울 - 서신/편지
    paul: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#F3E5F5" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4A148C" />
        <path d="M67 115 L72 170 L128 170 L133 115 Q100 125 67 115Z" fill="#6A1B9A" opacity="0.6" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="60" rx="25" ry="8" fill="#FFCC80" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#5D4037" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#5D4037" />
        <ellipse cx="100" cy="100" rx="12" ry="7" fill="#5D4037" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="140" y="130" width="25" height="18" rx="2" fill="#FFF9C4" />
        <path d="M140 130 L152.5 142 L165 130" stroke="#D7CCC8" strokeWidth="1.5" fill="none" />
        <line x1="150" y1="155" x2="170" y2="115" stroke="#5D4037" strokeWidth="2" />
        <polygon points="170,115 173,108 167,112" fill="#5D4037" />
      </svg>
    ),

    // 여호수아 - 검, 방패
    joshua: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4E342E" />
        <rect x="78" y="112" width="44" height="35" rx="5" fill="#8D6E63" />
        <rect x="95" y="112" width="10" height="35" rx="2" fill="#A1887F" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M72 72 Q100 40 128 72 Q128 62 100 50 Q72 62 72 72Z" fill="#8D6E63" />
        <rect x="96" y="45" width="8" height="20" rx="4" fill="#A1887F" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        <line x1="86" y1="71" x2="96" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="148" y="90" width="5" height="50" rx="1" fill="#B0BEC5" />
        <rect x="142" y="88" width="17" height="6" rx="2" fill="#8D6E63" />
        <rect x="148" y="140" width="5" height="10" rx="2" fill="#5D4037" />
      </svg>
    ),

    // 아브라함 - 지팡이, 별
    abraham: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#5C6BC0" />
        <path d="M67 117 L72 170 L128 170 L133 117 Q100 127 67 117Z" fill="#7986CB" opacity="0.6" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#E0E0E0" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#E0E0E0" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#E0E0E0" />
        <ellipse cx="100" cy="102" rx="14" ry="10" fill="#E0E0E0" />
        <ellipse cx="100" cy="112" rx="10" ry="6" fill="#EEEEEE" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="145" y1="70" x2="150" y2="175" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" />
        <path d="M145 70 Q140 60 135 65" stroke="#8D6E63" strokeWidth="4" fill="none" strokeLinecap="round" />
        <polygon points="40,40 43,50 53,50 45,56 48,66 40,60 32,66 35,56 27,50 37,50" fill="#FFD54F" />
        <polygon points="165,45 167,51 173,51 168,55 170,61 165,57 160,61 162,55 157,51 163,51" fill="#FFD54F" transform="scale(0.7) translate(70,20)" />
      </svg>
    ),

    // 모세 - 지팡이, 석판
    moses: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E0F2F1" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#00695C" />
        <path d="M67 117 L72 170 L128 170 L133 117 Q100 127 67 117Z" fill="#00897B" opacity="0.6" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#BDBDBD" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#BDBDBD" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#BDBDBD" />
        <ellipse cx="100" cy="102" rx="14" ry="10" fill="#BDBDBD" />
        <ellipse cx="95" cy="115" rx="8" ry="8" fill="#E0E0E0" />
        <ellipse cx="105" cy="115" rx="8" ry="8" fill="#E0E0E0" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        <path d="M94 89 Q100 95 106 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="148" y1="60" x2="155" y2="175" stroke="#8D6E63" strokeWidth="5" strokeLinecap="round" />
        <rect x="28" y="125" width="22" height="28" rx="4" fill="#90A4AE" />
        <path d="M28 129 Q39 120 50 129" fill="#90A4AE" />
        <line x1="33" y1="135" x2="45" y2="135" stroke="#546E7A" strokeWidth="1.5" />
        <line x1="33" y1="140" x2="45" y2="140" stroke="#546E7A" strokeWidth="1.5" />
        <line x1="33" y1="145" x2="42" y2="145" stroke="#546E7A" strokeWidth="1.5" />
      </svg>
    ),

    // 느헤미야 - 성벽, 건축 도구
    nehemiah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FBE9E7" />
        <rect x="20" y="145" width="25" height="35" fill="#BCAAA4" />
        <rect x="22" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="35" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="155" y="145" width="25" height="35" fill="#BCAAA4" />
        <rect x="157" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="170" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#BF360C" />
        <rect x="82" y="114" width="36" height="30" rx="5" fill="#D84315" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="100" cy="99" rx="12" ry="6" fill="#3E2723" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        <line x1="86" y1="71" x2="96" y2="72" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="72" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="140" y="100" width="18" height="30" rx="2" fill="#FFF9C4" />
        <circle cx="140" cy="100" r="3" fill="#D7CCC8" />
        <circle cx="158" cy="100" r="3" fill="#D7CCC8" />
        <line x1="144" y1="108" x2="154" y2="108" stroke="#8D6E63" strokeWidth="1" />
        <line x1="144" y1="113" x2="154" y2="113" stroke="#8D6E63" strokeWidth="1" />
        <line x1="144" y1="118" x2="152" y2="118" stroke="#8D6E63" strokeWidth="1" />
      </svg>
    ),

    // ===== 신규 16명 =====

    // 에스라 - 율법서, 두루마리
    ezra: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFFDE7" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4E342E" />
        <rect x="85" y="112" width="30" height="40" rx="3" fill="#6D4C41" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="100" cy="100" rx="12" ry="7" fill="#3E2723" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M94 89 Q100 94 106 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 큰 두루마리 (율법서) */}
        <rect x="135" y="105" width="30" height="50" rx="3" fill="#FFF9C4" />
        <circle cx="135" cy="105" r="6" fill="#D7CCC8" />
        <circle cx="165" cy="105" r="6" fill="#D7CCC8" />
        <circle cx="135" cy="155" r="6" fill="#D7CCC8" />
        <circle cx="165" cy="155" r="6" fill="#D7CCC8" />
        <line x1="142" y1="115" x2="158" y2="115" stroke="#8D6E63" strokeWidth="1.5" />
        <line x1="142" y1="121" x2="158" y2="121" stroke="#8D6E63" strokeWidth="1.5" />
        <line x1="142" y1="127" x2="158" y2="127" stroke="#8D6E63" strokeWidth="1.5" />
        <line x1="142" y1="133" x2="158" y2="133" stroke="#8D6E63" strokeWidth="1.5" />
        <line x1="142" y1="139" x2="155" y2="139" stroke="#8D6E63" strokeWidth="1.5" />
      </svg>
    ),

    // 한나 - 기도하는 모습, 성전
    hannah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#F3E5F5" />
        {/* 성전 기둥 배경 */}
        <rect x="25" y="100" width="12" height="80" fill="#D1C4E9" rx="3" />
        <rect x="163" y="100" width="12" height="80" fill="#D1C4E9" rx="3" />
        <rect x="72" y="115" width="56" height="55" rx="10" fill="#7B1FA2" />
        <circle cx="100" cy="82" r="28" fill="#FFCC80" />
        {/* 머리 수건 */}
        <path d="M70 77 Q100 45 130 77 Q128 67 100 52 Q72 67 70 77Z" fill="#BA68C8" />
        <path d="M70 77 Q67 92 74 102 L72 112 Q100 102 128 112 L126 102 Q133 92 130 77 Q100 87 70 77Z" fill="#BA68C8" />
        {/* 기도하는 손 */}
        <path d="M90 130 L100 120 L110 130" stroke="#FFCC80" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="91" cy="80" r="3" fill="#3E2723" />
        <circle cx="109" cy="80" r="3" fill="#3E2723" />
        <circle cx="92" cy="79" r="1" fill="white" />
        <circle cx="110" cy="79" r="1" fill="white" />
        <path d="M94 92 Q100 97 106 92" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="83" cy="89" r="4" fill="#FFAB91" opacity="0.5" />
        <circle cx="117" cy="89" r="4" fill="#FFAB91" opacity="0.5" />
        {/* 눈물 */}
        <ellipse cx="85" cy="85" rx="1.5" ry="3" fill="#90CAF9" opacity="0.6" />
      </svg>
    ),

    // 예레미야 - 눈물, 두루마리
    jeremiah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#37474F" />
        <path d="M67 115 L72 170 L128 170 L133 115 Q100 125 67 115Z" fill="#455A64" opacity="0.6" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#4E342E" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#4E342E" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#4E342E" />
        <ellipse cx="100" cy="100" rx="12" ry="7" fill="#4E342E" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 슬픈 미소 */}
        <path d="M94 92 Q100 89 106 92" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 눈물 */}
        <ellipse cx="86" cy="85" rx="2" ry="4" fill="#64B5F6" opacity="0.7" />
        <ellipse cx="114" cy="85" rx="2" ry="4" fill="#64B5F6" opacity="0.7" />
        <ellipse cx="84" cy="93" rx="1.5" ry="3" fill="#90CAF9" opacity="0.5" />
        {/* 두루마리 */}
        <rect x="140" y="125" width="22" height="35" rx="3" fill="#FFF9C4" />
        <circle cx="140" cy="125" r="4" fill="#D7CCC8" />
        <circle cx="162" cy="125" r="4" fill="#D7CCC8" />
        <line x1="145" y1="133" x2="157" y2="133" stroke="#8D6E63" strokeWidth="1" />
        <line x1="145" y1="138" x2="157" y2="138" stroke="#8D6E63" strokeWidth="1" />
        <line x1="145" y1="143" x2="154" y2="143" stroke="#8D6E63" strokeWidth="1" />
      </svg>
    ),

    // 솔로몬 - 왕관, 성전
    solomon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        {/* 성전 실루엣 배경 */}
        <rect x="30" y="140" width="140" height="40" fill="#FFE0B2" rx="3" />
        <rect x="45" y="120" width="110" height="25" fill="#FFCC80" rx="2" opacity="0.5" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#1565C0" />
        <rect x="88" y="112" width="24" height="58" rx="3" fill="#FFD54F" opacity="0.4" />
        <circle cx="100" cy="78" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#3E2723" />
        {/* 화려한 왕관 */}
        <polygon points="78,55 84,38 92,50 100,32 108,50 116,38 122,55" fill="#FFD54F" />
        <rect x="78" y="55" width="44" height="6" rx="2" fill="#FFD54F" />
        <circle cx="88" cy="55" r="3" fill="#E53935" />
        <circle cx="100" cy="52" r="3" fill="#1E88E5" />
        <circle cx="112" cy="55" r="3" fill="#43A047" />
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#3E2723" />
        <circle cx="91" cy="76" r="3" fill="#3E2723" />
        <circle cx="109" cy="76" r="3" fill="#3E2723" />
        <circle cx="92" cy="75" r="1" fill="white" />
        <circle cx="110" cy="75" r="1" fill="white" />
        <path d="M94 88 Q100 93 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // 엘리야 - 불, 제단
    elijah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FBE9E7" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#795548" />
        {/* 양가죽 외투 */}
        <path d="M67 117 L72 170 L128 170 L133 117 Q100 127 67 117Z" fill="#8D6E63" opacity="0.7" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#5D4037" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#5D4037" />
        <ellipse cx="100" cy="100" rx="12" ry="7" fill="#5D4037" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M93 90 Q100 95 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 하늘에서 내려오는 불 */}
        <ellipse cx="155" cy="110" rx="15" ry="22" fill="#FF6F00" opacity="0.8" />
        <ellipse cx="155" cy="105" rx="10" ry="16" fill="#FFCA28" opacity="0.9" />
        <ellipse cx="155" cy="100" rx="6" ry="10" fill="#FFF9C4" />
        {/* 제단 돌 */}
        <rect x="140" y="132" width="30" height="15" rx="3" fill="#9E9E9E" />
        <rect x="143" y="147" width="24" height="10" rx="2" fill="#BDBDBD" />
        <line x1="155" y1="80" x2="155" y2="95" stroke="#FF6F00" strokeWidth="2" strokeDasharray="4,3" />
      </svg>
    ),

    // 요나단 - 활과 화살, 우정의 상징
    jonathan: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#2E7D32" />
        <rect x="82" y="112" width="36" height="30" rx="5" fill="#388E3C" opacity="0.7" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#5D4037" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M92 89 Q100 97 108 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="87" r="4" fill="#FFAB91" opacity="0.5" />
        <circle cx="118" cy="87" r="4" fill="#FFAB91" opacity="0.5" />
        {/* 활 */}
        <path d="M150 100 Q170 130 150 160" stroke="#8D6E63" strokeWidth="3" fill="none" />
        <line x1="150" y1="100" x2="150" y2="160" stroke="#A1887F" strokeWidth="1.5" />
        {/* 화살 */}
        <line x1="140" y1="130" x2="175" y2="130" stroke="#5D4037" strokeWidth="2" />
        <polygon points="175,130 170,126 170,134" fill="#5D4037" />
        {/* 우정의 하트 */}
        <path d="M42 140 C42 136 37 132 37 137 C37 132 32 136 32 140 L37 148 L42 140Z" fill="#81C784" />
      </svg>
    ),

    // 에스더 - 왕관, 아름다운 옷
    esther: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FCE4EC" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#AD1457" />
        {/* 아름다운 외투 */}
        <path d="M65 117 L70 170 L130 170 L135 117 Q100 127 65 117Z" fill="#C2185B" opacity="0.5" />
        <rect x="92" y="112" width="16" height="58" rx="2" fill="#FFD54F" opacity="0.3" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 긴 머리카락 */}
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#3E2723" />
        <ellipse cx="76" cy="78" rx="5" ry="22" fill="#3E2723" />
        <ellipse cx="124" cy="78" rx="5" ry="22" fill="#3E2723" />
        <ellipse cx="80" cy="100" rx="4" ry="12" fill="#3E2723" />
        <ellipse cx="120" cy="100" rx="4" ry="12" fill="#3E2723" />
        {/* 작은 왕관 (왕비) */}
        <polygon points="86,55 90,45 96,52 100,42 104,52 110,45 114,55" fill="#FFD54F" />
        <rect x="86" y="55" width="28" height="4" rx="2" fill="#FFD54F" />
        <circle cx="96" cy="55" r="2" fill="#E91E63" />
        <circle cx="100" cy="53" r="2" fill="#E91E63" />
        <circle cx="104" cy="55" r="2" fill="#E91E63" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M93 90 Q100 97 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="83" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <circle cx="117" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
      </svg>
    ),

    // 니고데모 - 밤, 등불
    nicodemus: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#1A237E" />
        {/* 별 배경 */}
        <circle cx="40" cy="35" r="2" fill="#FFF9C4" />
        <circle cx="160" cy="30" r="1.5" fill="#FFF9C4" />
        <circle cx="170" cy="55" r="2" fill="#FFF9C4" />
        <circle cx="30" cy="60" r="1.5" fill="#FFF9C4" />
        <circle cx="55" cy="25" r="1" fill="#FFF9C4" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#283593" />
        {/* 바리새인 옷 */}
        <rect x="85" y="110" width="30" height="60" rx="3" fill="#3949AB" opacity="0.6" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#E0E0E0" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#E0E0E0" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#E0E0E0" />
        <ellipse cx="100" cy="100" rx="11" ry="6" fill="#E0E0E0" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M94 89 Q100 94 106 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 등불 */}
        <rect x="148" y="125" width="14" height="20" rx="3" fill="#FFE082" />
        <ellipse cx="155" cy="118" rx="7" ry="10" fill="#FFCA28" opacity="0.8" />
        <ellipse cx="155" cy="115" rx="4" ry="7" fill="#FFF9C4" opacity="0.9" />
        <rect x="150" y="145" width="10" height="5" rx="2" fill="#8D6E63" />
        {/* 등불 빛 퍼짐 */}
        <circle cx="155" cy="120" r="20" fill="#FFF9C4" opacity="0.15" />
      </svg>
    ),

    // 삼손 - 근육, 기둥
    samson: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        {/* 기둥 */}
        <rect x="30" y="80" width="16" height="100" fill="#BDBDBD" rx="3" />
        <rect x="154" y="80" width="16" height="100" fill="#BDBDBD" rx="3" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#795548" />
        {/* 근육질 팔 */}
        <line x1="72" y1="125" x2="42" y2="115" stroke="#FFCC80" strokeWidth="10" strokeLinecap="round" />
        <line x1="128" y1="125" x2="158" y2="115" stroke="#FFCC80" strokeWidth="10" strokeLinecap="round" />
        <circle cx="42" cy="115" r="7" fill="#FFCC80" />
        <circle cx="158" cy="115" r="7" fill="#FFCC80" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 긴 머리카락 (삼손) */}
        <ellipse cx="100" cy="55" rx="28" ry="12" fill="#5D4037" />
        <ellipse cx="74" cy="78" rx="7" ry="22" fill="#5D4037" />
        <ellipse cx="126" cy="78" rx="7" ry="22" fill="#5D4037" />
        <ellipse cx="78" cy="100" rx="5" ry="14" fill="#5D4037" />
        <ellipse cx="122" cy="100" rx="5" ry="14" fill="#5D4037" />
        <circle cx="91" cy="78" r="4" fill="#3E2723" />
        <circle cx="109" cy="78" r="4" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.5" fill="white" />
        <circle cx="110" cy="77" r="1.5" fill="white" />
        {/* 결연한 표정 */}
        <line x1="86" y1="71" x2="96" y2="73" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="73" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M94 91 Q100 96 106 91" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // 마리아 (베다니) - 향유 항아리
    "mary-bethany": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#E65100" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리 수건 */}
        <path d="M70 77 Q100 45 130 77 Q128 67 100 52 Q72 67 70 77Z" fill="#FFAB91" />
        <path d="M70 77 Q67 92 74 100 L72 110 Q100 102 128 110 L126 100 Q133 92 130 77 Q100 87 70 77Z" fill="#FFAB91" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M93 90 Q100 97 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="83" cy="87" r="5" fill="#FFAB91" opacity="0.4" />
        <circle cx="117" cy="87" r="5" fill="#FFAB91" opacity="0.4" />
        {/* 향유 항아리 */}
        <ellipse cx="150" cy="145" rx="12" ry="18" fill="#BCAAA4" />
        <ellipse cx="150" cy="128" rx="7" ry="4" fill="#A1887F" />
        <rect x="147" y="122" width="6" height="8" rx="2" fill="#8D6E63" />
        {/* 향유 흘러내리는 효과 */}
        <ellipse cx="150" cy="140" rx="5" ry="3" fill="#FFE082" opacity="0.6" />
        <path d="M148 135 Q145 142 147 148" stroke="#FFD54F" strokeWidth="1.5" fill="none" opacity="0.7" />
      </svg>
    ),

    // 빌립 (전도자) - 마차, 두루마리
    philip: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#F57F17" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#5D4037" />
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        <path d="M90 89 Q100 98 110 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 마차 바퀴 */}
        <circle cx="45" cy="160" r="16" fill="none" stroke="#8D6E63" strokeWidth="3" />
        <circle cx="45" cy="160" r="3" fill="#8D6E63" />
        <line x1="45" y1="144" x2="45" y2="176" stroke="#8D6E63" strokeWidth="1.5" />
        <line x1="29" y1="160" x2="61" y2="160" stroke="#8D6E63" strokeWidth="1.5" />
        {/* 두루마리 */}
        <rect x="150" y="130" width="18" height="28" rx="2" fill="#FFF9C4" />
        <circle cx="150" cy="130" r="3" fill="#D7CCC8" />
        <circle cx="168" cy="130" r="3" fill="#D7CCC8" />
        <line x1="154" y1="137" x2="164" y2="137" stroke="#8D6E63" strokeWidth="1" />
        <line x1="154" y1="142" x2="164" y2="142" stroke="#8D6E63" strokeWidth="1" />
        {/* 반짝임 */}
        <text x="160" y="120" fontSize="12" fill="#FFD54F">✦</text>
      </svg>
    ),

    // 아볼로 - 웅변, 두루마리
    apollos: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EDE7F6" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4527A0" />
        <path d="M67 115 L72 170 L128 170 L133 115 Q100 125 67 115Z" fill="#5E35B1" opacity="0.5" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#4E342E" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#4E342E" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#4E342E" />
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#4E342E" />
        {/* 한 팔 들어올린 모습 (웅변) */}
        <line x1="128" y1="120" x2="155" y2="90" stroke="#FFCC80" strokeWidth="7" strokeLinecap="round" />
        <circle cx="155" cy="88" r="5" fill="#FFCC80" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        {/* 열정적 미소 */}
        <path d="M90 89 Q100 99 110 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 말풍선 느낌 */}
        <ellipse cx="160" cy="70" rx="18" ry="12" fill="white" opacity="0.8" />
        <text x="152" y="74" fontSize="12" fill="#4527A0" fontWeight="bold">!</text>
        {/* 두루마리 */}
        <rect x="30" y="140" width="18" height="25" rx="2" fill="#FFF9C4" />
        <circle cx="30" cy="140" r="3" fill="#D7CCC8" />
        <circle cx="48" cy="140" r="3" fill="#D7CCC8" />
      </svg>
    ),

    // 갈렙 - 포도 한 송이, 정탐 지팡이
    caleb: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4E342E" />
        <rect x="82" y="112" width="36" height="30" rx="5" fill="#6D4C41" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#5D4037" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        <line x1="86" y1="71" x2="96" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 정탐 지팡이에 매달린 포도 */}
        <line x1="140" y1="95" x2="170" y2="95" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" />
        <line x1="155" y1="95" x2="155" y2="110" stroke="#8D6E63" strokeWidth="2" />
        <circle cx="150" cy="118" r="5" fill="#7B1FA2" />
        <circle cx="160" cy="118" r="5" fill="#7B1FA2" />
        <circle cx="155" cy="125" r="5" fill="#7B1FA2" />
        <circle cx="148" cy="126" r="4" fill="#9C27B0" />
        <circle cx="162" cy="126" r="4" fill="#9C27B0" />
        <circle cx="155" cy="132" r="4" fill="#9C27B0" />
        <ellipse cx="155" cy="108" rx="5" ry="3" fill="#4CAF50" />
      </svg>
    ),

    // 브리스길라 - 천막, 환대
    priscilla: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        {/* 천막 배경 */}
        <path d="M20 170 L100 90 L180 170 Z" fill="#D7CCC8" opacity="0.4" />
        <path d="M30 170 L100 100 L170 170 Z" fill="#BCAAA4" opacity="0.3" />
        <rect x="72" y="115" width="56" height="55" rx="10" fill="#5C6BC0" />
        <circle cx="100" cy="82" r="28" fill="#FFCC80" />
        {/* 머리 수건 */}
        <path d="M70 78 Q100 48 130 78 Q128 68 100 54 Q72 68 70 78Z" fill="#7986CB" />
        <path d="M70 78 Q67 93 74 102 L72 112 Q100 104 128 112 L126 102 Q133 93 130 78 Q100 88 70 78Z" fill="#7986CB" />
        <circle cx="91" cy="80" r="3" fill="#3E2723" />
        <circle cx="109" cy="80" r="3" fill="#3E2723" />
        <circle cx="92" cy="79" r="1" fill="white" />
        <circle cx="110" cy="79" r="1" fill="white" />
        <path d="M92 92 Q100 100 108 92" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="83" cy="89" r="5" fill="#FFAB91" opacity="0.5" />
        <circle cx="117" cy="89" r="5" fill="#FFAB91" opacity="0.5" />
        {/* 환대의 빵 */}
        <ellipse cx="155" cy="148" rx="14" ry="8" fill="#D7CCC8" />
        <ellipse cx="155" cy="145" rx="12" ry="7" fill="#FFCC80" />
        {/* 컵 */}
        <rect x="35" y="140" width="12" height="16" rx="2" fill="#90CAF9" />
        <ellipse cx="41" cy="140" rx="8" ry="3" fill="#64B5F6" />
      </svg>
    ),

    // 드보라 - 야자나무, 사사 지위
    deborah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E0F2F1" />
        {/* 야자나무 */}
        <line x1="160" y1="180" x2="158" y2="100" stroke="#795548" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="145" cy="95" rx="20" ry="6" fill="#4CAF50" transform="rotate(-30,145,95)" />
        <ellipse cx="170" cy="92" rx="20" ry="6" fill="#4CAF50" transform="rotate(25,170,92)" />
        <ellipse cx="155" cy="88" rx="18" ry="5" fill="#66BB6A" transform="rotate(-5,155,88)" />
        <rect x="72" y="115" width="56" height="55" rx="10" fill="#00695C" />
        <circle cx="100" cy="82" r="28" fill="#FFCC80" />
        {/* 머리 장식 */}
        <path d="M70 78 Q100 48 130 78 Q128 68 100 54 Q72 68 70 78Z" fill="#26A69A" />
        <path d="M70 78 Q67 93 74 100 Q100 90 126 100 Q133 93 130 78 Q100 88 70 78Z" fill="#26A69A" />
        <rect x="90" y="58" width="20" height="4" rx="2" fill="#FFD54F" />
        <circle cx="91" cy="80" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="80" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="79" r="1.2" fill="white" />
        <circle cx="110" cy="79" r="1.2" fill="white" />
        {/* 지혜로운 미소 */}
        <path d="M93 92 Q100 98 107 92" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 재판봉 */}
        <rect x="35" y="120" width="5" height="40" rx="2" fill="#8D6E63" />
        <circle cx="37" cy="118" r="6" fill="#A1887F" />
      </svg>
    ),

    // 히스기야 - 왕관, 개혁의 상징
    hezekiah: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FBE9E7" />
        {/* 부서진 우상 (개혁 상징) */}
        <rect x="30" y="150" width="15" height="20" rx="2" fill="#BDBDBD" transform="rotate(-15,37,160)" />
        <rect x="25" y="155" width="10" height="8" rx="1" fill="#9E9E9E" transform="rotate(10,30,159)" />
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#BF360C" />
        <rect x="85" y="114" width="30" height="30" rx="5" fill="#D84315" opacity="0.7" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#3E2723" />
        {/* 왕관 */}
        <polygon points="82,55 86,42 92,52 100,38 108,52 114,42 118,55" fill="#FFD54F" />
        <rect x="82" y="55" width="36" height="5" rx="2" fill="#FFD54F" />
        <circle cx="92" cy="55" r="2" fill="#E53935" />
        <circle cx="100" cy="53" r="2" fill="#1E88E5" />
        <circle cx="108" cy="55" r="2" fill="#E53935" />
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#3E2723" />
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        <line x1="86" y1="71" x2="96" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 두루마리 (율법) */}
        <rect x="148" y="120" width="16" height="25" rx="2" fill="#FFF9C4" />
        <circle cx="148" cy="120" r="3" fill="#D7CCC8" />
        <circle cx="164" cy="120" r="3" fill="#D7CCC8" />
      </svg>
    ),
  }

  return (
    <div className="w-32 h-32 mx-auto mb-3">
      {illustrations[characterId] || null}
    </div>
  )
}

export default BibleCharacterIllust

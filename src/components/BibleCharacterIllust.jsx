function BibleCharacterIllust({ mbtiType }) {
  const illustrations = {
    // 요셉 - 색동옷, 밀 이삭
    ISTJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        {/* 몸 */}
        <rect x="70" y="110" width="60" height="60" rx="10" fill="#E65100" />
        {/* 색동옷 줄무늬 */}
        <rect x="80" y="110" width="8" height="60" rx="2" fill="#FDD835" />
        <rect x="96" y="110" width="8" height="60" rx="2" fill="#43A047" />
        <rect x="112" y="110" width="8" height="60" rx="2" fill="#1E88E5" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        {/* 머리카락 */}
        <ellipse cx="100" cy="58" rx="28" ry="12" fill="#4E342E" />
        <ellipse cx="75" cy="72" rx="6" ry="14" fill="#4E342E" />
        <ellipse cx="125" cy="72" rx="6" ry="14" fill="#4E342E" />
        {/* 눈 */}
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        {/* 미소 */}
        <path d="M92 90 Q100 98 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 밀 이삭 */}
        <line x1="150" y1="170" x2="155" y2="100" stroke="#8D6E63" strokeWidth="3" />
        <ellipse cx="155" cy="100" rx="5" ry="10" fill="#FDD835" />
        <ellipse cx="150" cy="110" rx="5" ry="10" fill="#FDD835" transform="rotate(-15,150,110)" />
        <ellipse cx="160" cy="108" rx="5" ry="10" fill="#FDD835" transform="rotate(15,160,108)" />
      </svg>
    ),

    // 룻 - 밀 이삭 들고 있는 모습, 머리 수건
    ISFJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        {/* 몸 */}
        <rect x="70" y="110" width="60" height="60" rx="10" fill="#7B1FA2" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        {/* 머리 수건 */}
        <path d="M68 75 Q100 40 132 75 Q130 65 100 50 Q70 65 68 75Z" fill="#CE93D8" />
        <path d="M68 75 Q65 90 72 100 L70 110 Q100 100 130 110 L128 100 Q135 90 132 75 Q100 85 68 75Z" fill="#CE93D8" />
        {/* 눈 */}
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        {/* 미소 */}
        <path d="M92 90 Q100 98 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 볼 터치 */}
        <circle cx="82" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <circle cx="118" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        {/* 밀 다발 */}
        <line x1="140" y1="170" x2="145" y2="110" stroke="#8D6E63" strokeWidth="2" />
        <line x1="148" y1="170" x2="150" y2="115" stroke="#8D6E63" strokeWidth="2" />
        <line x1="155" y1="170" x2="155" y2="120" stroke="#8D6E63" strokeWidth="2" />
        <ellipse cx="145" cy="105" rx="4" ry="8" fill="#FFD54F" />
        <ellipse cx="150" cy="110" rx="4" ry="8" fill="#FFD54F" />
        <ellipse cx="155" cy="115" rx="4" ry="8" fill="#FFD54F" />
      </svg>
    ),

    // 이사야 - 두루마리, 선지자 옷
    INFJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        {/* 몸 */}
        <rect x="70" y="110" width="60" height="60" rx="10" fill="#283593" />
        {/* 외투 */}
        <path d="M65 115 L70 170 L130 170 L135 115 Q100 125 65 115Z" fill="#3949AB" opacity="0.7" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        {/* 머리카락과 수염 */}
        <ellipse cx="100" cy="58" rx="28" ry="12" fill="#5D4037" />
        <ellipse cx="75" cy="72" rx="6" ry="14" fill="#5D4037" />
        <ellipse cx="125" cy="72" rx="6" ry="14" fill="#5D4037" />
        <ellipse cx="100" cy="100" rx="12" ry="8" fill="#5D4037" />
        {/* 눈 */}
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        {/* 평온한 미소 */}
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 두루마리 */}
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
    INTJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        {/* 사자 (뒤쪽) */}
        <ellipse cx="50" cy="155" rx="25" ry="20" fill="#F9A825" />
        <circle cx="50" cy="135" r="18" fill="#F9A825" />
        <ellipse cx="50" cy="130" rx="24" ry="18" fill="#FF8F00" />
        <circle cx="43" cy="132" r="2" fill="#3E2723" />
        <circle cx="57" cy="132" r="2" fill="#3E2723" />
        <ellipse cx="50" cy="139" rx="4" ry="2.5" fill="#E65100" />
        {/* 몸 */}
        <rect x="75" y="110" width="55" height="60" rx="10" fill="#1565C0" />
        {/* 금 장식 */}
        <rect x="95" y="110" width="15" height="60" rx="2" fill="#FFD54F" opacity="0.5" />
        {/* 얼굴 */}
        <circle cx="102" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 */}
        <ellipse cx="102" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="78" cy="72" rx="5" ry="13" fill="#3E2723" />
        <ellipse cx="126" cy="72" rx="5" ry="13" fill="#3E2723" />
        {/* 눈 (지적인 눈빛) */}
        <circle cx="93" cy="78" r="3" fill="#3E2723" />
        <circle cx="111" cy="78" r="3" fill="#3E2723" />
        <circle cx="94" cy="77" r="1" fill="white" />
        <circle cx="112" cy="77" r="1" fill="white" />
        {/* 진지한 미소 */}
        <path d="M96 90 Q102 95 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // 기드온 - 횃불과 항아리
    ISTP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#795548" />
        {/* 갑옷 느낌 */}
        <rect x="85" y="115" width="30" height="30" rx="5" fill="#A1887F" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#4E342E" />
        <ellipse cx="76" cy="70" rx="5" ry="12" fill="#4E342E" />
        <ellipse cx="124" cy="70" rx="5" ry="12" fill="#4E342E" />
        {/* 눈 */}
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 결연한 미소 */}
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 횃불 */}
        <line x1="150" y1="160" x2="155" y2="105" stroke="#8D6E63" strokeWidth="4" />
        <ellipse cx="155" cy="95" rx="8" ry="12" fill="#FF6F00" />
        <ellipse cx="155" cy="90" rx="5" ry="9" fill="#FFCA28" />
        <ellipse cx="155" cy="87" rx="3" ry="5" fill="#FFF9C4" />
        {/* 항아리 */}
        <ellipse cx="45" cy="150" rx="15" ry="20" fill="#D7CCC8" />
        <ellipse cx="45" cy="132" rx="10" ry="5" fill="#BCAAA4" />
      </svg>
    ),

    // 다윗 - 하프/수금, 왕관
    ISFP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#1B5E20" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 (곱슬) */}
        <circle cx="82" cy="62" r="8" fill="#D84315" />
        <circle cx="95" cy="56" r="8" fill="#D84315" />
        <circle cx="108" cy="56" r="8" fill="#D84315" />
        <circle cx="118" cy="62" r="8" fill="#D84315" />
        <circle cx="76" cy="74" r="6" fill="#D84315" />
        <circle cx="124" cy="74" r="6" fill="#D84315" />
        {/* 왕관 */}
        <polygon points="82,55 86,42 92,52 100,38 108,52 114,42 118,55" fill="#FFD54F" />
        <rect x="82" y="55" width="36" height="5" rx="2" fill="#FFD54F" />
        <circle cx="92" cy="55" r="2" fill="#E53935" />
        <circle cx="100" cy="53" r="2" fill="#1E88E5" />
        <circle cx="108" cy="55" r="2" fill="#E53935" />
        {/* 눈 */}
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 행복한 미소 */}
        <path d="M92 89 Q100 98 108 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 수금(하프) */}
        <path d="M140 120 Q160 120 160 150 Q160 170 145 170 L140 170 Z" fill="none" stroke="#8D6E63" strokeWidth="3" />
        <line x1="143" y1="125" x2="143" y2="165" stroke="#FFD54F" strokeWidth="1" />
        <line x1="148" y1="122" x2="148" y2="168" stroke="#FFD54F" strokeWidth="1" />
        <line x1="153" y1="121" x2="153" y2="169" stroke="#FFD54F" strokeWidth="1" />
        <line x1="158" y1="123" x2="158" y2="168" stroke="#FFD54F" strokeWidth="1" />
      </svg>
    ),

    // 사도 요한 - 사랑의 상징, 두루마리
    INFP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FCE4EC" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#C62828" />
        {/* 외투 */}
        <path d="M67 115 L72 170 L128 170 L133 115 Q100 125 67 115Z" fill="#D32F2F" opacity="0.6" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 (젊은 모습) */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="72" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="72" rx="5" ry="12" fill="#5D4037" />
        {/* 눈 (부드러운) */}
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 따뜻한 미소 */}
        <path d="M92 89 Q100 98 108 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 볼 터치 */}
        <circle cx="82" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        <circle cx="118" cy="87" r="5" fill="#FFAB91" opacity="0.5" />
        {/* 하트 */}
        <path d="M150 120 C150 115 143 110 143 117 C143 110 136 115 136 120 L143 130 L150 120Z" fill="#E53935" />
        <path d="M165 135 C165 130 158 125 158 132 C158 125 151 130 151 135 L158 145 L165 135Z" fill="#EF9A9A" />
      </svg>
    ),

    // 누가 - 깃펜, 두루마리
    INTP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#2E7D32" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#4E342E" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#4E342E" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#4E342E" />
        {/* 수염 (짧은) */}
        <ellipse cx="100" cy="98" rx="10" ry="5" fill="#4E342E" />
        {/* 눈 (지적인) */}
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 사려깊은 미소 */}
        <path d="M94 89 Q100 94 106 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 두루마리와 깃펜 */}
        <rect x="138" y="125" width="22" height="35" rx="3" fill="#FFF9C4" />
        <circle cx="138" cy="125" r="4" fill="#D7CCC8" />
        <circle cx="160" cy="125" r="4" fill="#D7CCC8" />
        <line x1="143" y1="133" x2="155" y2="133" stroke="#8D6E63" strokeWidth="1" />
        <line x1="143" y1="138" x2="155" y2="138" stroke="#8D6E63" strokeWidth="1" />
        <line x1="143" y1="143" x2="152" y2="143" stroke="#8D6E63" strokeWidth="1" />
        {/* 깃펜 */}
        <line x1="165" y1="110" x2="155" y2="150" stroke="#5D4037" strokeWidth="2" />
        <path d="M165 110 L170 100 L163 108 Z" fill="#5D4037" />
      </svg>
    ),

    // 베드로 - 물고기, 그물
    ESTP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E3F2FD" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#0D47A1" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 (짧고 거친) */}
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#5D4037" />
        <ellipse cx="78" cy="68" rx="5" ry="10" fill="#5D4037" />
        <ellipse cx="122" cy="68" rx="5" ry="10" fill="#5D4037" />
        {/* 수염 */}
        <ellipse cx="100" cy="100" rx="14" ry="7" fill="#5D4037" />
        {/* 눈 (열정적) */}
        <circle cx="91" cy="76" r="4" fill="#3E2723" />
        <circle cx="109" cy="76" r="4" fill="#3E2723" />
        <circle cx="92" cy="75" r="1.5" fill="white" />
        <circle cx="110" cy="75" r="1.5" fill="white" />
        {/* 활짝 웃는 미소 */}
        <path d="M90 88 Q100 100 110 88" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 물고기 */}
        <ellipse cx="155" cy="140" rx="20" ry="10" fill="#64B5F6" />
        <polygon points="175,140 190,130 190,150" fill="#64B5F6" />
        <circle cx="148" cy="138" r="2" fill="#1A237E" />
        {/* 물결 */}
        <path d="M135 165 Q145 158 155 165 Q165 172 175 165" stroke="#90CAF9" strokeWidth="2" fill="none" />
        <path d="M130 175 Q140 168 150 175 Q160 182 170 175" stroke="#90CAF9" strokeWidth="2" fill="none" />
      </svg>
    ),

    // 미리암 - 소고(탬버린), 춤추는 모습
    ESFP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        {/* 몸 (춤추는 자세) */}
        <path d="M70 115 Q75 170 100 170 Q125 170 130 115 Q100 125 70 115Z" fill="#F57C00" />
        {/* 팔 (들어올린) */}
        <line x1="70" y1="120" x2="45" y2="90" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        <line x1="130" y1="120" x2="155" y2="90" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        {/* 얼굴 */}
        <circle cx="100" cy="78" r="28" fill="#FFCC80" />
        {/* 머리카락 (긴 머리) */}
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#3E2723" />
        <ellipse cx="76" cy="78" rx="5" ry="20" fill="#3E2723" />
        <ellipse cx="124" cy="78" rx="5" ry="20" fill="#3E2723" />
        <ellipse cx="80" cy="98" rx="4" ry="10" fill="#3E2723" />
        <ellipse cx="120" cy="98" rx="4" ry="10" fill="#3E2723" />
        {/* 눈 (즐거운) */}
        <path d="M86 76 Q91 72 96 76" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M104 76 Q109 72 114 76" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 활짝 웃는 입 */}
        <path d="M90 88 Q100 100 110 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 볼 터치 */}
        <circle cx="82" cy="85" r="5" fill="#FFAB91" opacity="0.6" />
        <circle cx="118" cy="85" r="5" fill="#FFAB91" opacity="0.6" />
        {/* 소고 (탬버린) */}
        <circle cx="40" cy="82" r="14" fill="#FFECB3" stroke="#FFB300" strokeWidth="2" />
        <circle cx="33" cy="76" r="2.5" fill="#FFD54F" />
        <circle cx="47" cy="76" r="2.5" fill="#FFD54F" />
        <circle cx="33" cy="88" r="2.5" fill="#FFD54F" />
        <circle cx="47" cy="88" r="2.5" fill="#FFD54F" />
        {/* 음표 */}
        <text x="155" y="75" fontSize="20" fill="#FF6F00">♪</text>
        <text x="165" y="60" fontSize="16" fill="#FFB300">♫</text>
      </svg>
    ),

    // 바나바 - 열린 팔, 따뜻한 느낌
    ENFP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        {/* 몸 */}
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#E65100" />
        {/* 팔 (벌린 모습) */}
        <line x1="72" y1="125" x2="40" y2="110" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        <line x1="128" y1="125" x2="160" y2="110" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" />
        {/* 손 */}
        <circle cx="37" cy="108" r="6" fill="#FFCC80" />
        <circle cx="163" cy="108" r="6" fill="#FFCC80" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#5D4037" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#5D4037" />
        {/* 수염 */}
        <ellipse cx="100" cy="99" rx="11" ry="6" fill="#5D4037" />
        {/* 눈 (따뜻한) */}
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        {/* 환한 미소 */}
        <path d="M90 88 Q100 100 110 88" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 반짝임 */}
        <text x="35" y="90" fontSize="14" fill="#FFD54F">✦</text>
        <text x="155" y="90" fontSize="14" fill="#FFD54F">✦</text>
        <text x="100" y="45" fontSize="10" fill="#FFD54F">✦</text>
      </svg>
    ),

    // 사도 바울 - 검(말씀), 서신/편지
    ENTP: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#F3E5F5" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4A148C" />
        {/* 외투 */}
        <path d="M67 115 L72 170 L128 170 L133 115 Q100 125 67 115Z" fill="#6A1B9A" opacity="0.6" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 대머리 + 측면 머리 */}
        <ellipse cx="100" cy="60" rx="25" ry="8" fill="#FFCC80" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#5D4037" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#5D4037" />
        {/* 수염 */}
        <ellipse cx="100" cy="100" rx="12" ry="7" fill="#5D4037" />
        {/* 눈 (날카로운) */}
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 자신감 있는 미소 */}
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 편지/서신 */}
        <rect x="140" y="130" width="25" height="18" rx="2" fill="#FFF9C4" />
        <path d="M140 130 L152.5 142 L165 130" stroke="#D7CCC8" strokeWidth="1.5" fill="none" />
        {/* 펜 */}
        <line x1="150" y1="155" x2="170" y2="115" stroke="#5D4037" strokeWidth="2" />
        <polygon points="170,115 173,108 167,112" fill="#5D4037" />
      </svg>
    ),

    // 여호수아 - 검, 방패
    ESTJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        {/* 몸 */}
        <rect x="72" y="110" width="56" height="60" rx="10" fill="#4E342E" />
        {/* 갑옷 */}
        <rect x="78" y="112" width="44" height="35" rx="5" fill="#8D6E63" />
        <rect x="95" y="112" width="10" height="35" rx="2" fill="#A1887F" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 투구 */}
        <path d="M72 72 Q100 40 128 72 Q128 62 100 50 Q72 62 72 72Z" fill="#8D6E63" />
        <rect x="96" y="45" width="8" height="20" rx="4" fill="#A1887F" />
        {/* 눈 (결연한) */}
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        {/* 눈썹 (결연한) */}
        <line x1="86" y1="71" x2="96" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="73" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        {/* 미소 */}
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 검 */}
        <rect x="148" y="90" width="5" height="50" rx="1" fill="#B0BEC5" />
        <rect x="142" y="88" width="17" height="6" rx="2" fill="#8D6E63" />
        <rect x="148" y="140" width="5" height="10" rx="2" fill="#5D4037" />
      </svg>
    ),

    // 아브라함 - 지팡이, 별
    ESFJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        {/* 몸 */}
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#5C6BC0" />
        {/* 외투 */}
        <path d="M67 117 L72 170 L128 170 L133 117 Q100 127 67 117Z" fill="#7986CB" opacity="0.6" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 (흰색, 노인) */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#E0E0E0" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#E0E0E0" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#E0E0E0" />
        {/* 긴 수염 (흰색) */}
        <ellipse cx="100" cy="102" rx="14" ry="10" fill="#E0E0E0" />
        <ellipse cx="100" cy="112" rx="10" ry="6" fill="#EEEEEE" />
        {/* 눈 (자애로운) */}
        <circle cx="91" cy="78" r="3" fill="#3E2723" />
        <circle cx="109" cy="78" r="3" fill="#3E2723" />
        <circle cx="92" cy="77" r="1" fill="white" />
        <circle cx="110" cy="77" r="1" fill="white" />
        {/* 따뜻한 미소 */}
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 지팡이 */}
        <line x1="145" y1="70" x2="150" y2="175" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" />
        <path d="M145 70 Q140 60 135 65" stroke="#8D6E63" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* 별 */}
        <polygon points="40,40 43,50 53,50 45,56 48,66 40,60 32,66 35,56 27,50 37,50" fill="#FFD54F" />
        <polygon points="165,45 167,51 173,51 168,55 170,61 165,57 160,61 162,55 157,51 163,51" fill="#FFD54F" transform="scale(0.7) translate(70,20)" />
      </svg>
    ),

    // 모세 - 지팡이, 석판
    ENFJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E0F2F1" />
        {/* 몸 */}
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#00695C" />
        {/* 외투 */}
        <path d="M67 117 L72 170 L128 170 L133 117 Q100 127 67 117Z" fill="#00897B" opacity="0.6" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 (흰색) */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#BDBDBD" />
        <ellipse cx="77" cy="72" rx="5" ry="14" fill="#BDBDBD" />
        <ellipse cx="123" cy="72" rx="5" ry="14" fill="#BDBDBD" />
        {/* 긴 수염 */}
        <ellipse cx="100" cy="102" rx="14" ry="10" fill="#BDBDBD" />
        <ellipse cx="95" cy="115" rx="8" ry="8" fill="#E0E0E0" />
        <ellipse cx="105" cy="115" rx="8" ry="8" fill="#E0E0E0" />
        {/* 눈 (카리스마) */}
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        {/* 미소 */}
        <path d="M94 89 Q100 95 106 89" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 지팡이 */}
        <line x1="148" y1="60" x2="155" y2="175" stroke="#8D6E63" strokeWidth="5" strokeLinecap="round" />
        {/* 석판 */}
        <rect x="28" y="125" width="22" height="28" rx="4" fill="#90A4AE" />
        <path d="M28 129 Q39 120 50 129" fill="#90A4AE" />
        <line x1="33" y1="135" x2="45" y2="135" stroke="#546E7A" strokeWidth="1.5" />
        <line x1="33" y1="140" x2="45" y2="140" stroke="#546E7A" strokeWidth="1.5" />
        <line x1="33" y1="145" x2="42" y2="145" stroke="#546E7A" strokeWidth="1.5" />
      </svg>
    ),

    // 느헤미야 - 성벽, 건축 도구
    ENTJ: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FBE9E7" />
        {/* 성벽 (배경) */}
        <rect x="20" y="145" width="25" height="35" fill="#BCAAA4" />
        <rect x="22" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="35" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="155" y="145" width="25" height="35" fill="#BCAAA4" />
        <rect x="157" y="140" width="8" height="8" fill="#A1887F" />
        <rect x="170" y="140" width="8" height="8" fill="#A1887F" />
        {/* 몸 */}
        <rect x="72" y="112" width="56" height="58" rx="10" fill="#BF360C" />
        {/* 갑옷 */}
        <rect x="82" y="114" width="36" height="30" rx="5" fill="#D84315" />
        {/* 얼굴 */}
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        {/* 머리카락 */}
        <ellipse cx="100" cy="58" rx="26" ry="11" fill="#3E2723" />
        <ellipse cx="77" cy="70" rx="5" ry="12" fill="#3E2723" />
        <ellipse cx="123" cy="70" rx="5" ry="12" fill="#3E2723" />
        {/* 수염 (정돈된) */}
        <ellipse cx="100" cy="99" rx="12" ry="6" fill="#3E2723" />
        {/* 눈 (결단력 있는) */}
        <circle cx="91" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="109" cy="78" r="3.5" fill="#3E2723" />
        <circle cx="92" cy="77" r="1.2" fill="white" />
        <circle cx="110" cy="77" r="1.2" fill="white" />
        {/* 눈썹 */}
        <line x1="86" y1="71" x2="96" y2="72" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="71" x2="104" y2="72" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
        {/* 자신감 있는 미소 */}
        <path d="M93 90 Q100 96 107 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 두루마리 (계획서) */}
        <rect x="140" y="100" width="18" height="30" rx="2" fill="#FFF9C4" />
        <circle cx="140" cy="100" r="3" fill="#D7CCC8" />
        <circle cx="158" cy="100" r="3" fill="#D7CCC8" />
        <line x1="144" y1="108" x2="154" y2="108" stroke="#8D6E63" strokeWidth="1" />
        <line x1="144" y1="113" x2="154" y2="113" stroke="#8D6E63" strokeWidth="1" />
        <line x1="144" y1="118" x2="152" y2="118" stroke="#8D6E63" strokeWidth="1" />
      </svg>
    ),
  }

  return (
    <div className="w-32 h-32 mx-auto mb-3">
      {illustrations[mbtiType] || null}
    </div>
  )
}

export default BibleCharacterIllust

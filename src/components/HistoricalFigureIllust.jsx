function HistoricalFigureIllust({ figureId }) {
  const illustrations = {
    // 이순신 - 투구, 갑옷, 칼
    "yi-sun-sin": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E3F2FD" />
        <rect x="70" y="112" width="60" height="58" rx="8" fill="#37474F" />
        <rect x="85" y="112" width="30" height="20" rx="2" fill="#546E7A" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M70 68 Q100 42 130 68" fill="#455A64" />
        <rect x="75" y="62" width="50" height="8" rx="3" fill="#607D8B" />
        <path d="M100 42 L100 32" stroke="#FDD835" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="28" r="5" fill="#FDD835" />
        <ellipse cx="100" cy="96" rx="8" ry="3" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="140" y1="170" x2="155" y2="110" stroke="#90A4AE" strokeWidth="3" strokeLinecap="round" />
        <line x1="155" y1="110" x2="157" y2="105" stroke="#FDD835" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),

    // 앙겔라 메르켈 - 단정한 짧은 헤어, 정장
    merkel: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#1565C0" />
        <rect x="95" y="112" width="10" height="20" fill="#FAFAFA" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M74 72 Q80 52 100 56 Q120 52 126 72" fill="#D7CCC8" />
        <ellipse cx="76" cy="76" rx="5" ry="8" fill="#D7CCC8" />
        <ellipse cx="124" cy="76" rx="5" ry="8" fill="#D7CCC8" />
        <circle cx="90" cy="78" r="3" fill="#1565C0" />
        <circle cx="110" cy="78" r="3" fill="#1565C0" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <circle cx="115" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
      </svg>
    ),

    // 간디 - 둥근 안경, 면직물, 소박한 모습, 물레
    gandhi: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="75" y="112" width="50" height="58" rx="8" fill="#FAFAFA" />
        <path d="M72 115 L75 170 L125 170 L128 115 Q100 125 72 115Z" fill="#ECEFF1" opacity="0.6" />
        <circle cx="100" cy="78" r="28" fill="#A1887F" />
        <ellipse cx="100" cy="60" rx="18" ry="5" fill="#E0E0E0" />
        <rect x="82" y="72" width="16" height="11" rx="5.5" fill="none" stroke="#FFD54F" strokeWidth="2" />
        <rect x="102" y="72" width="16" height="11" rx="5.5" fill="none" stroke="#FFD54F" strokeWidth="2" />
        <line x1="98" y1="78" x2="102" y2="78" stroke="#FFD54F" strokeWidth="2" />
        <circle cx="90" cy="77" r="2.5" fill="#1B0000" />
        <circle cx="110" cy="77" r="2.5" fill="#1B0000" />
        <circle cx="91" cy="76" r="1" fill="white" />
        <circle cx="111" cy="76" r="1" fill="white" />
        <path d="M94 90 Q100 96 106 90" stroke="#1B0000" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="152" cy="150" r="15" fill="none" stroke="#8D6E63" strokeWidth="2" />
        <line x1="152" y1="142" x2="152" y2="158" stroke="#8D6E63" strokeWidth="1.5" />
        <line x1="144" y1="150" x2="160" y2="150" stroke="#8D6E63" strokeWidth="1.5" />
      </svg>
    ),

    // 마틴 루터 킹 - 정장, 강인한 표정
    mlk: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#212121" />
        <rect x="97" y="112" width="6" height="40" fill="#FAFAFA" />
        <polygon points="97,112 100,125 103,112" fill="#C62828" />
        <circle cx="100" cy="80" r="30" fill="#8D6E63" />
        <ellipse cx="100" cy="58" rx="25" ry="10" fill="#3E2723" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <ellipse cx="100" cy="98" rx="10" ry="4" fill="#3E2723" />
        <path d="M94 90 Q100 94 106 90" stroke="#1B0000" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="78" y="108" width="44" height="6" rx="2" fill="#FAFAFA" />
      </svg>
    ),

    // 아이작 뉴턴 - 긴 갈색 가발, 사과
    newton: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#4E342E" />
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="30" ry="12" fill="#6D4C41" />
        <ellipse cx="70" cy="78" rx="10" ry="20" fill="#6D4C41" />
        <ellipse cx="130" cy="78" rx="10" ry="20" fill="#6D4C41" />
        <path d="M65 90 Q68 110 75 115" stroke="#6D4C41" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M135 90 Q132 110 125 115" stroke="#6D4C41" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="155" cy="150" r="14" fill="#F44336" />
        <line x1="155" y1="136" x2="157" y2="128" stroke="#4E342E" strokeWidth="2" />
        <ellipse cx="160" cy="130" rx="5" ry="3" fill="#4CAF50" />
      </svg>
    ),

    // 이소룡 - 노란 트레이닝복, 날렵한 체형
    "bruce-lee": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="72" y="110" width="56" height="60" rx="8" fill="#FDD835" />
        <line x1="100" y1="110" x2="100" y2="170" stroke="#212121" strokeWidth="2" />
        <circle cx="100" cy="78" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#1B0000" />
        <circle cx="90" cy="76" r="3" fill="#1B0000" />
        <circle cx="110" cy="76" r="3" fill="#1B0000" />
        <circle cx="91" cy="75" r="1" fill="white" />
        <circle cx="111" cy="75" r="1" fill="white" />
        <path d="M92 88 Q100 85 108 88" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="82" y1="70" x2="88" y2="73" stroke="#1B0000" strokeWidth="2" strokeLinecap="round" />
        <line x1="118" y1="70" x2="112" y2="73" stroke="#1B0000" strokeWidth="2" strokeLinecap="round" />
        <line x1="130" y1="120" x2="160" y2="105" stroke="#FFCC80" strokeWidth="6" strokeLinecap="round" />
        <line x1="70" y1="120" x2="45" y2="135" stroke="#FFCC80" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),

    // 모차르트 - 18세기 가발, 빨간 코트, 음표
    mozart: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FCE4EC" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#C62828" />
        <rect x="85" y="112" width="30" height="30" rx="2" fill="#FFECB3" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="30" ry="12" fill="#ECEFF1" />
        <ellipse cx="68" cy="74" rx="8" ry="14" fill="#ECEFF1" />
        <ellipse cx="132" cy="74" rx="8" ry="14" fill="#ECEFF1" />
        <path d="M62 82 Q65 95 72 100" stroke="#ECEFF1" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M138 82 Q135 95 128 100" stroke="#ECEFF1" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M92 90 Q100 98 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="150" cy="155" r="5" fill="#212121" />
        <line x1="155" y1="155" x2="155" y2="135" stroke="#212121" strokeWidth="2" />
        <path d="M155 135 Q162 140 155 145" fill="#212121" />
        <circle cx="165" cy="148" r="5" fill="#212121" />
        <line x1="170" y1="148" x2="170" y2="128" stroke="#212121" strokeWidth="2" />
      </svg>
    ),

    // 빈센트 반 고흐 - 붕대 감은 귀, 빨간 수염, 별이 빛나는 밤 배경, 팔레트
    "van-gogh": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#1A237E" />
        <circle cx="45" cy="40" r="8" fill="#FDD835" opacity="0.8" />
        <circle cx="150" cy="30" r="5" fill="#FFF9C4" opacity="0.6" />
        <circle cx="55" cy="75" r="4" fill="#FFF9C4" opacity="0.5" />
        <circle cx="160" cy="65" r="6" fill="#FDD835" opacity="0.7" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#1565C0" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="60" rx="24" ry="8" fill="#FF8F00" />
        <ellipse cx="78" cy="70" rx="4" ry="8" fill="#FF8F00" />
        <ellipse cx="122" cy="70" rx="4" ry="8" fill="#FF8F00" />
        <ellipse cx="100" cy="96" rx="10" ry="5" fill="#E65100" />
        <circle cx="90" cy="78" r="3" fill="#1565C0" />
        <circle cx="110" cy="78" r="3" fill="#1565C0" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="120" y="78" width="12" height="8" rx="3" fill="#FAFAFA" />
        <path d="M82 72 Q84 68 86 72" stroke="#E65100" strokeWidth="1.5" fill="none" />
        <path d="M114 72 Q116 68 118 72" stroke="#E65100" strokeWidth="1.5" fill="none" />
        <ellipse cx="48" cy="155" rx="14" ry="10" fill="#8D6E63" />
        <circle cx="42" cy="152" r="3" fill="#F44336" />
        <circle cx="48" cy="150" r="3" fill="#FDD835" />
        <circle cx="54" cy="152" r="3" fill="#1565C0" />
        <circle cx="48" cy="158" r="3" fill="#4CAF50" />
      </svg>
    ),

    // 아인슈타인 - 헝클어진 흰 머리, 콧수염, 칠판
    einstein: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#455A64" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M68 65 Q75 35 100 45 Q125 35 132 65" fill="none" stroke="#ECEFF1" strokeWidth="10" strokeLinecap="round" />
        <path d="M65 70 Q60 50 70 42" stroke="#ECEFF1" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M135 70 Q140 50 130 42" stroke="#ECEFF1" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="90" cy="76" r="3" fill="#3E2723" />
        <circle cx="110" cy="76" r="3" fill="#3E2723" />
        <circle cx="91" cy="75" r="1" fill="white" />
        <circle cx="111" cy="75" r="1" fill="white" />
        <ellipse cx="100" cy="96" rx="12" ry="4" fill="#BDBDBD" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="140" y="130" width="30" height="25" rx="2" fill="#2E7D32" />
        <text x="145" y="147" fill="white" fontSize="10" fontFamily="serif">E=mc²</text>
      </svg>
    ),

    // 윈스턴 처칠 - 중절모, 시가, 정장, V 손가락
    churchill: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        <rect x="68" y="112" width="64" height="58" rx="10" fill="#212121" />
        <rect x="95" y="112" width="10" height="40" fill="#FAFAFA" />
        <circle cx="100" cy="80" r="30" fill="#FFCC80" />
        <rect x="72" y="52" width="56" height="10" rx="5" fill="#3E2723" />
        <ellipse cx="100" cy="52" rx="35" ry="8" fill="#3E2723" />
        <rect x="80" y="44" width="40" height="14" rx="4" fill="#3E2723" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M92 92 Q100 88 108 92" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="100" rx="6" ry="3" fill="#BDBDBD" opacity="0.6" />
        <line x1="120" y1="95" x2="145" y2="85" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
        <circle cx="148" cy="83" r="4" fill="#FF8A65" opacity="0.7" />
      </svg>
    ),

    // 찰리 채플린 - 중절모, 콧수염, 지팡이, 넓은 바지
    chaplin: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#EFEBE9" />
        <rect x="72" y="112" width="56" height="58" rx="8" fill="#212121" />
        <rect x="80" y="140" width="18" height="30" rx="2" fill="#212121" />
        <rect x="102" y="140" width="18" height="30" rx="2" fill="#212121" />
        <circle cx="100" cy="78" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="24" ry="8" fill="#1B0000" />
        <ellipse cx="78" cy="68" rx="4" ry="8" fill="#1B0000" />
        <ellipse cx="122" cy="68" rx="4" ry="8" fill="#1B0000" />
        <rect x="74" y="50" width="52" height="10" rx="5" fill="#212121" />
        <ellipse cx="100" cy="50" rx="32" ry="6" fill="#212121" />
        <rect x="80" y="42" width="40" height="12" rx="5" fill="#212121" />
        <circle cx="90" cy="76" r="3" fill="#3E2723" />
        <circle cx="110" cy="76" r="3" fill="#3E2723" />
        <circle cx="91" cy="75" r="1" fill="white" />
        <circle cx="111" cy="75" r="1" fill="white" />
        <rect x="94" y="86" width="12" height="4" rx="2" fill="#3E2723" />
        <path d="M92 92 Q100 98 108 92" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="140" y1="170" x2="148" y2="100" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
        <path d="M145 100 Q150 96 148 100" stroke="#8D6E63" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // 월트 디즈니 - 콧수염, 미키마우스 귀
    disney: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E3F2FD" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#37474F" />
        <rect x="95" y="112" width="10" height="40" fill="#FAFAFA" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#5D4037" />
        <ellipse cx="76" cy="72" rx="5" ry="10" fill="#5D4037" />
        <ellipse cx="124" cy="72" rx="5" ry="10" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="90" y="92" width="20" height="4" rx="2" fill="#5D4037" />
        <circle cx="150" cy="140" r="18" fill="#212121" />
        <circle cx="140" cy="125" r="10" fill="#212121" />
        <circle cx="160" cy="125" r="10" fill="#212121" />
        <circle cx="150" cy="143" r="8" fill="#FFCC80" />
        <ellipse cx="150" cy="147" rx="5" ry="3" fill="#212121" />
        <circle cx="146" cy="140" r="2" fill="#212121" />
        <circle cx="154" cy="140" r="2" fill="#212121" />
      </svg>
    ),

    // 레오나르도 다 빈치 - 르네상스 모자, 긴 수염, 스케치북
    davinci: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#5D4037" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="28" ry="10" fill="#795548" />
        <ellipse cx="74" cy="72" rx="6" ry="14" fill="#795548" />
        <ellipse cx="126" cy="72" rx="6" ry="14" fill="#795548" />
        <path d="M88 95 Q100 120 112 95" fill="#BDBDBD" />
        <ellipse cx="100" cy="106" rx="8" ry="12" fill="#BDBDBD" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="48" rx="22" ry="6" fill="#D32F2F" />
        <rect x="82" y="42" width="36" height="8" rx="3" fill="#D32F2F" />
        <rect x="140" y="125" width="22" height="30" rx="2" fill="#FFF9C4" />
        <circle cx="151" cy="140" r="8" fill="none" stroke="#8D6E63" strokeWidth="1" />
        <line x1="147" y1="148" x2="155" y2="148" stroke="#8D6E63" strokeWidth="0.5" />
      </svg>
    ),

    // 마거릿 대처 - 단정한 헤어, 정장, 강한 표정
    thatcher: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#1A237E" />
        <rect x="95" y="112" width="10" height="20" fill="#FAFAFA" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M72 68 Q80 48 100 52 Q120 48 128 68" fill="#5D4037" />
        <path d="M72 68 Q70 60 75 55" fill="#5D4037" />
        <path d="M128 68 Q130 60 125 55" fill="#5D4037" />
        <ellipse cx="74" cy="75" rx="5" ry="10" fill="#5D4037" />
        <ellipse cx="126" cy="75" rx="5" ry="10" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#1565C0" />
        <circle cx="110" cy="78" r="3" fill="#1565C0" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 94 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <circle cx="115" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <circle cx="100" cy="110" r="4" fill="#FAFAFA" />
      </svg>
    ),

    // 플로렌스 나이팅게일 - 간호 모자, 램프
    nightingale: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#5D4037" />
        <path d="M68 115 L70 170 L130 170 L132 115 Q100 125 68 115Z" fill="#FAFAFA" opacity="0.7" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#5D4037" />
        <ellipse cx="76" cy="72" rx="5" ry="12" fill="#5D4037" />
        <ellipse cx="124" cy="72" rx="5" ry="12" fill="#5D4037" />
        <rect x="78" y="48" width="44" height="8" rx="3" fill="#FAFAFA" />
        <path d="M80 48 L100 42 L120 48" fill="none" stroke="#FAFAFA" strokeWidth="3" />
        <path d="M95 46 L100 42 L105 46" fill="#E53935" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M92 90 Q100 97 108 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="145" y="140" width="6" height="20" rx="2" fill="#8D6E63" />
        <path d="M140 140 L148 130 L156 140 Z" fill="#FDD835" />
        <circle cx="148" cy="135" r="5" fill="#FFE082" opacity="0.6" />
      </svg>
    ),

    // 넬슨 만델라 - 밝은 셔츠, 온화한 미소, 주먹
    mandela: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#2E7D32" />
        <rect x="70" y="112" width="60" height="15" rx="5" fill="#FDD835" />
        <circle cx="100" cy="80" r="30" fill="#8D6E63" />
        <ellipse cx="100" cy="58" rx="24" ry="8" fill="#E0E0E0" />
        <ellipse cx="78" cy="68" rx="4" ry="8" fill="#E0E0E0" />
        <ellipse cx="122" cy="68" rx="4" ry="8" fill="#E0E0E0" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M88 92 Q100 102 112 92" stroke="#1B0000" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M82 73 Q86 70 90 73" stroke="#3E2723" strokeWidth="1.5" fill="none" />
        <path d="M110 73 Q114 70 118 73" stroke="#3E2723" strokeWidth="1.5" fill="none" />
        <line x1="140" y1="140" x2="155" y2="130" stroke="#8D6E63" strokeWidth="6" strokeLinecap="round" />
        <circle cx="158" cy="128" r="8" fill="#8D6E63" />
      </svg>
    ),

    // 신사임당 - 한복, 포도 그림
    "shin-saimdang": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <path d="M65 112 Q100 105 135 112 L132 170 L68 170 Z" fill="#7B1FA2" />
        <path d="M75 112 Q100 108 125 112 L122 170 L78 170 Z" fill="#CE93D8" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M76 68 Q100 58 124 68" fill="#1B0000" />
        <ellipse cx="100" cy="60" rx="22" ry="6" fill="#1B0000" />
        <rect x="90" y="52" width="20" height="6" rx="2" fill="#1B0000" />
        <line x1="100" y1="52" x2="100" y2="46" stroke="#1B0000" strokeWidth="2" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="150" cy="145" r="6" fill="#7B1FA2" />
        <circle cx="156" cy="150" r="5" fill="#9C27B0" />
        <circle cx="147" cy="152" r="5" fill="#7B1FA2" />
        <path d="M152 140 Q155 132 150 128" stroke="#4CAF50" strokeWidth="2" fill="none" />
        <ellipse cx="148" cy="128" rx="4" ry="2" fill="#4CAF50" />
      </svg>
    ),

    // 세종대왕 - 익선관, 곤룡포, 한글 책
    sejong: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <rect x="68" y="112" width="64" height="58" rx="10" fill="#C62828" />
        <rect x="85" y="112" width="30" height="25" rx="2" fill="#FDD835" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <rect x="80" y="52" width="40" height="10" rx="4" fill="#212121" />
        <path d="M88 52 L85 42 Q100 38 115 42 L112 52" fill="#212121" />
        <rect x="95" y="38" width="10" height="6" rx="2" fill="#212121" />
        <ellipse cx="100" cy="96" rx="8" ry="3" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="140" y="135" width="22" height="28" rx="2" fill="#FFF9C4" />
        <text x="144" y="152" fill="#3E2723" fontSize="8" fontFamily="serif">ㄱㄴㄷ</text>
        <text x="144" y="160" fill="#3E2723" fontSize="8" fontFamily="serif">ㅎㅏㄴ</text>
      </svg>
    ),

    // 장영실 - 관복, 측우기
    "jang-yeong-sil": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#1565C0" />
        <rect x="85" y="112" width="30" height="20" rx="2" fill="#90CAF9" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <rect x="82" y="52" width="36" height="8" rx="3" fill="#212121" />
        <rect x="90" y="46" width="20" height="8" rx="2" fill="#212121" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="96" rx="6" ry="2" fill="#5D4037" />
        <rect x="148" y="125" width="12" height="20" rx="2" fill="none" stroke="#78909C" strokeWidth="2" />
        <rect x="148" y="135" width="12" height="10" rx="1" fill="#42A5F5" opacity="0.6" />
        <line x1="154" y1="120" x2="154" y2="125" stroke="#78909C" strokeWidth="2" />
        <rect x="150" y="118" width="8" height="4" rx="1" fill="#78909C" />
      </svg>
    ),

    // 아멜리아 에어하트 - 비행 모자, 고글, 스카프
    earhart: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E3F2FD" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#795548" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M70 72 Q100 52 130 72" fill="#5D4037" />
        <ellipse cx="100" cy="62" rx="30" ry="10" fill="#5D4037" />
        <ellipse cx="72" cy="72" rx="6" ry="10" fill="#5D4037" />
        <ellipse cx="128" cy="72" rx="6" ry="10" fill="#5D4037" />
        <rect x="82" y="72" width="16" height="10" rx="5" fill="none" stroke="#FDD835" strokeWidth="2" />
        <rect x="102" y="72" width="16" height="10" rx="5" fill="none" stroke="#FDD835" strokeWidth="2" />
        <line x1="98" y1="77" x2="102" y2="77" stroke="#FDD835" strokeWidth="2" />
        <circle cx="90" cy="77" r="2.5" fill="#3E2723" />
        <circle cx="110" cy="77" r="2.5" fill="#3E2723" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M125 115 Q140 108 155 115 Q145 120 135 118" fill="#E53935" />
        <circle cx="85" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <circle cx="115" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
      </svg>
    ),

    // 프리다 칼로 - 꽃 화관, 연결 눈썹, 화려한 의상
    "frida-kahlo": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <rect x="68" y="112" width="64" height="58" rx="10" fill="#C62828" />
        <path d="M68 115 Q100 125 132 115" fill="#FDD835" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="26" ry="10" fill="#1B0000" />
        <ellipse cx="76" cy="72" rx="5" ry="12" fill="#1B0000" />
        <ellipse cx="124" cy="72" rx="5" ry="12" fill="#1B0000" />
        <path d="M84 70 Q100 66 116 70" stroke="#1B0000" strokeWidth="3" fill="none" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="52" r="6" fill="#E53935" />
        <circle cx="95" cy="48" r="5" fill="#FF9800" />
        <circle cx="105" cy="48" r="5" fill="#E91E63" />
        <circle cx="115" cy="52" r="6" fill="#FF5722" />
        <circle cx="100" cy="46" r="4" fill="#FDD835" />
        <circle cx="85" cy="86" r="4" fill="#FFAB91" opacity="0.4" />
        <circle cx="115" cy="86" r="4" fill="#FFAB91" opacity="0.4" />
      </svg>
    ),

    // 윤동주 - 둥근 안경, 학생복, 별
    "yun-dong-ju": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#1A237E" />
        <circle cx="45" cy="35" r="4" fill="#FFF9C4" opacity="0.7" />
        <circle cx="155" cy="30" r="3" fill="#FFF9C4" opacity="0.5" />
        <circle cx="160" cy="60" r="5" fill="#FDD835" opacity="0.6" />
        <circle cx="40" cy="70" r="3" fill="#FFF9C4" opacity="0.4" />
        <rect x="72" y="112" width="56" height="58" rx="8" fill="#212121" />
        <rect x="95" y="112" width="10" height="40" fill="#FAFAFA" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="60" rx="24" ry="8" fill="#1B0000" />
        <ellipse cx="78" cy="68" rx="4" ry="8" fill="#1B0000" />
        <ellipse cx="122" cy="68" rx="4" ry="8" fill="#1B0000" />
        <rect x="82" y="73" width="14" height="10" rx="5" fill="none" stroke="#455A64" strokeWidth="1.5" />
        <rect x="104" y="73" width="14" height="10" rx="5" fill="none" stroke="#455A64" strokeWidth="1.5" />
        <line x1="96" y1="78" x2="104" y2="78" stroke="#455A64" strokeWidth="1.5" />
        <circle cx="89" cy="78" r="2.5" fill="#1B0000" />
        <circle cx="111" cy="78" r="2.5" fill="#1B0000" />
        <path d="M94 90 Q100 94 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <polygon points="155,145 157,151 163,151 158,155 160,161 155,157 150,161 152,155 147,151 153,151" fill="#FDD835" opacity="0.8" />
      </svg>
    ),

    // 마리 퀴리 - 검은 드레스, 시험관, 빛나는 물질
    "marie-curie": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#212121" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M76 70 Q80 52 100 56 Q120 52 124 70" fill="#5D4037" />
        <ellipse cx="76" cy="76" rx="6" ry="10" fill="#5D4037" />
        <ellipse cx="124" cy="76" rx="6" ry="10" fill="#5D4037" />
        <path d="M70 82 Q72 95 78 100" stroke="#5D4037" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M130 82 Q128 95 122 100" stroke="#5D4037" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="148" y="130" width="8" height="25" rx="3" fill="none" stroke="#78909C" strokeWidth="2" />
        <rect x="148" y="140" width="8" height="15" rx="2" fill="#76FF03" opacity="0.5" />
        <circle cx="152" cy="128" r="6" fill="#76FF03" opacity="0.2" />
        <circle cx="152" cy="128" r="10" fill="#76FF03" opacity="0.1" />
      </svg>
    ),

    // 코코 샤넬 - 짧은 단발, 진주 목걸이, 작은 검은 드레스
    "coco-chanel": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#212121" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M72 72 Q80 52 100 56 Q120 52 128 72" fill="#3E2723" />
        <ellipse cx="74" cy="78" rx="6" ry="12" fill="#3E2723" />
        <ellipse cx="126" cy="78" rx="6" ry="12" fill="#3E2723" />
        <path d="M68 82 Q70 90 74 94" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M132 82 Q130 90 126 94" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 93 106 88" stroke="#C62828" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="108" r="3" fill="#FFF9C4" />
        <circle cx="90" cy="110" r="3" fill="#FFF9C4" />
        <circle cx="98" cy="111" r="3" fill="#FFF9C4" />
        <circle cx="106" cy="111" r="3" fill="#FFF9C4" />
        <circle cx="114" cy="110" r="3" fill="#FFF9C4" />
        <circle cx="120" cy="108" r="3" fill="#FFF9C4" />
        <ellipse cx="100" cy="48" rx="10" ry="5" fill="none" stroke="#212121" strokeWidth="2" />
      </svg>
    ),

    // 김홍도 - 갓, 도포, 붓과 두루마리
    "kim-hong-do": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#8D6E63" />
        <path d="M68 115 Q100 125 132 115" fill="#A1887F" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="52" rx="35" ry="6" fill="#212121" />
        <rect x="82" y="44" width="36" height="10" rx="4" fill="#212121" />
        <rect x="92" y="38" width="16" height="8" rx="6" fill="#212121" />
        <ellipse cx="100" cy="96" rx="8" ry="3" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="150" y1="125" x2="145" y2="165" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
        <circle cx="145" cy="167" r="2" fill="#212121" />
        <rect x="155" y="135" width="16" height="22" rx="2" fill="#FFF9C4" />
        <line x1="158" y1="142" x2="168" y2="142" stroke="#8D6E63" strokeWidth="0.5" />
        <line x1="158" y1="146" x2="166" y2="146" stroke="#8D6E63" strokeWidth="0.5" />
        <line x1="158" y1="150" x2="168" y2="150" stroke="#8D6E63" strokeWidth="0.5" />
      </svg>
    ),

    // 유관순 - 한복, 태극기
    "yu-gwan-sun": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FAFAFA" />
        <path d="M65 112 Q100 105 135 112 L132 170 L68 170 Z" fill="#E53935" />
        <path d="M80 112 Q100 108 120 112 L118 170 L82 170 Z" fill="#FAFAFA" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="24" ry="8" fill="#1B0000" />
        <path d="M76 68 Q80 82 76 92" stroke="#1B0000" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M124 68 Q120 82 124 92" stroke="#1B0000" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <circle cx="115" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <rect x="140" y="120" width="20" height="14" rx="1" fill="#FAFAFA" stroke="#212121" strokeWidth="1" />
        <circle cx="150" cy="127" r="4" fill="none" stroke="#E53935" strokeWidth="1.5" />
        <path d="M148 125 Q150 123 152 125" stroke="#1565C0" strokeWidth="1.5" fill="none" />
        <path d="M148 129 Q150 131 152 129" stroke="#E53935" strokeWidth="1.5" fill="none" />
      </svg>
    ),

    // 백남준 - 안경, TV 모니터
    "nam-june-paik": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8EAF6" />
        <rect x="72" y="112" width="56" height="58" rx="8" fill="#37474F" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="60" rx="24" ry="8" fill="#3E2723" />
        <ellipse cx="78" cy="68" rx="4" ry="8" fill="#3E2723" />
        <ellipse cx="122" cy="68" rx="4" ry="8" fill="#3E2723" />
        <rect x="82" y="73" width="16" height="10" rx="5" fill="none" stroke="#212121" strokeWidth="2" />
        <rect x="102" y="73" width="16" height="10" rx="5" fill="none" stroke="#212121" strokeWidth="2" />
        <line x1="98" y1="78" x2="102" y2="78" stroke="#212121" strokeWidth="2" />
        <circle cx="90" cy="78" r="2.5" fill="#1B0000" />
        <circle cx="110" cy="78" r="2.5" fill="#1B0000" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="138" y="128" width="26" height="22" rx="3" fill="#37474F" />
        <rect x="141" y="131" width="20" height="16" rx="1" fill="#E3F2FD" />
        <rect x="143" y="133" width="6" height="4" fill="#E53935" />
        <rect x="151" y="133" width="6" height="4" fill="#1565C0" />
        <rect x="143" y="139" width="6" height="4" fill="#4CAF50" />
        <rect x="151" y="139" width="6" height="4" fill="#FDD835" />
        <line x1="151" y1="152" x2="151" y2="156" stroke="#37474F" strokeWidth="2" />
        <line x1="145" y1="156" x2="157" y2="156" stroke="#37474F" strokeWidth="2" />
      </svg>
    ),

    // 광개토대왕 - 갑옷, 왕관, 말
    gwanggaeto: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="68" y="112" width="64" height="58" rx="8" fill="#455A64" />
        <rect x="82" y="112" width="36" height="20" rx="2" fill="#607D8B" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <path d="M72 68 Q100 42 128 68" fill="#FDD835" />
        <rect x="78" y="62" width="44" height="8" rx="3" fill="#FFC107" />
        <path d="M95 42 L100 30 L105 42" fill="#FDD835" />
        <circle cx="100" cy="30" r="4" fill="#FF5722" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M92 90 Q100 86 108 90" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="96" rx="6" ry="2.5" fill="#5D4037" />
        <line x1="140" y1="170" x2="158" y2="115" stroke="#9E9E9E" strokeWidth="3" strokeLinecap="round" />
        <line x1="158" y1="115" x2="160" y2="108" stroke="#FDD835" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),

    // 허준 - 관복, 동의보감 책, 약초
    "heo-jun": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#1565C0" />
        <path d="M68 115 Q100 125 132 115" fill="#42A5F5" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <rect x="82" y="52" width="36" height="8" rx="3" fill="#212121" />
        <rect x="90" y="46" width="20" height="8" rx="2" fill="#212121" />
        <ellipse cx="100" cy="96" rx="8" ry="3" fill="#5D4037" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 88 Q100 93 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="140" y="128" width="18" height="24" rx="2" fill="#5D4037" />
        <rect x="142" y="130" width="14" height="20" rx="1" fill="#FFF9C4" />
        <text x="143" y="143" fill="#3E2723" fontSize="6" fontFamily="serif">東醫</text>
        <text x="143" y="149" fill="#3E2723" fontSize="6" fontFamily="serif">寶鑑</text>
        <path d="M44 150 Q48 140 52 150" stroke="#4CAF50" strokeWidth="2" fill="none" />
        <line x1="48" y1="150" x2="48" y2="162" stroke="#4CAF50" strokeWidth="2" />
        <ellipse cx="45" cy="148" rx="3" ry="2" fill="#66BB6A" />
        <ellipse cx="51" cy="146" rx="3" ry="2" fill="#66BB6A" />
      </svg>
    ),

    // 안창호 - 정장, 안경, 연설 제스처
    "ahn-chang-ho": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF3E0" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#212121" />
        <rect x="95" y="112" width="10" height="40" fill="#FAFAFA" />
        <polygon points="95,112 100,125 105,112" fill="#37474F" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="60" rx="24" ry="8" fill="#1B0000" />
        <ellipse cx="78" cy="68" rx="4" ry="8" fill="#1B0000" />
        <ellipse cx="122" cy="68" rx="4" ry="8" fill="#1B0000" />
        <rect x="82" y="73" width="14" height="10" rx="5" fill="none" stroke="#455A64" strokeWidth="1.5" />
        <rect x="104" y="73" width="14" height="10" rx="5" fill="none" stroke="#455A64" strokeWidth="1.5" />
        <line x1="96" y1="78" x2="104" y2="78" stroke="#455A64" strokeWidth="1.5" />
        <circle cx="89" cy="78" r="2.5" fill="#1B0000" />
        <circle cx="111" cy="78" r="2.5" fill="#1B0000" />
        <ellipse cx="100" cy="96" rx="6" ry="2" fill="#3E2723" />
        <path d="M94 88 Q100 92 106 88" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="135" y1="125" x2="155" y2="110" stroke="#FFCC80" strokeWidth="5" strokeLinecap="round" />
        <circle cx="158" cy="108" r="5" fill="#FFCC80" />
      </svg>
    ),

    // 선덕여왕 - 금관, 화려한 옷
    "queen-seondeok": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#FFF8E1" />
        <path d="M65 112 Q100 105 135 112 L132 170 L68 170 Z" fill="#7B1FA2" />
        <path d="M75 112 Q100 108 125 112 L122 170 L78 170 Z" fill="#E1BEE7" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="58" rx="24" ry="8" fill="#1B0000" />
        <path d="M76 66 Q78 80 76 90" stroke="#1B0000" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M124 66 Q122 80 124 90" stroke="#1B0000" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M78 50 Q100 38 122 50" fill="#FDD835" />
        <rect x="82" y="46" width="36" height="6" rx="2" fill="#FFC107" />
        <circle cx="100" cy="42" r="4" fill="#FF5722" />
        <circle cx="88" cy="46" r="3" fill="#4FC3F7" />
        <circle cx="112" cy="46" r="3" fill="#4FC3F7" />
        <circle cx="90" cy="78" r="3" fill="#1B0000" />
        <circle cx="110" cy="78" r="3" fill="#1B0000" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 95 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
        <circle cx="115" cy="86" r="4" fill="#FFAB91" opacity="0.3" />
      </svg>
    ),

    // 스티브 잡스 - 검은 터틀넥, 안경, 사과 로고
    "steve-jobs": (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="#F5F5F5" />
        <rect x="70" y="112" width="60" height="58" rx="10" fill="#212121" />
        <circle cx="100" cy="80" r="28" fill="#FFCC80" />
        <ellipse cx="100" cy="60" rx="24" ry="8" fill="#5D4037" />
        <ellipse cx="78" cy="70" rx="4" ry="8" fill="#5D4037" />
        <ellipse cx="122" cy="70" rx="4" ry="8" fill="#5D4037" />
        <rect x="82" y="73" width="16" height="10" rx="5" fill="none" stroke="#212121" strokeWidth="1.5" />
        <rect x="102" y="73" width="16" height="10" rx="5" fill="none" stroke="#212121" strokeWidth="1.5" />
        <line x1="98" y1="78" x2="102" y2="78" stroke="#212121" strokeWidth="1.5" />
        <circle cx="90" cy="78" r="3" fill="#3E2723" />
        <circle cx="110" cy="78" r="3" fill="#3E2723" />
        <circle cx="91" cy="77" r="1" fill="white" />
        <circle cx="111" cy="77" r="1" fill="white" />
        <path d="M94 90 Q100 94 106 90" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="96" rx="6" ry="3" fill="#8D6E63" />
        <path d="M148 140 Q140 125 148 115 Q162 115 155 130 Q162 140 155 155 Q140 155 148 140Z" fill="#9E9E9E" />
        <line x1="151" y1="115" x2="153" y2="108" stroke="#5D4037" strokeWidth="2" />
        <ellipse cx="156" cy="109" rx="4" ry="2.5" fill="#4CAF50" />
      </svg>
    )
  }

  const illust = illustrations[figureId]
  if (!illust) return null

  return (
    <div className="w-32 h-32 mx-auto mb-4">
      {illust}
    </div>
  )
}

export default HistoricalFigureIllust

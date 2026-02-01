// 96개 문항 풀 (차원당 24개)
export const questionsPool = [
  // ===== E (외향) vs I (내향) - 24문항 =====
  {
    id: 1,
    question: "모임에서 나는...",
    type: "EI",
    answers: [
      { text: "여러 사람과 두루 대화하는 것을 즐긴다", value: "E" },
      { text: "한두 명과 깊은 대화를 나누는 것을 선호한다", value: "I" }
    ]
  },
  {
    id: 2,
    question: "주말에 에너지를 충전하려면...",
    type: "EI",
    answers: [
      { text: "친구들을 만나거나 밖에 나가는 것이 좋다", value: "E" },
      { text: "집에서 혼자만의 시간을 갖는 것이 좋다", value: "I" }
    ]
  },
  {
    id: 3,
    question: "처음 보는 사람들과의 모임에서...",
    type: "EI",
    answers: [
      { text: "먼저 다가가서 대화를 시작한다", value: "E" },
      { text: "상대방이 먼저 말을 걸어주길 기다린다", value: "I" }
    ]
  },
  {
    id: 4,
    question: "연락할 때 나는...",
    type: "EI",
    answers: [
      { text: "전화 통화를 선호한다", value: "E" },
      { text: "문자나 메신저를 선호한다", value: "I" }
    ]
  },
  {
    id: 5,
    question: "취미 활동을 한다면...",
    type: "EI",
    answers: [
      { text: "동아리나 그룹 활동에 참여한다", value: "E" },
      { text: "혼자서 할 수 있는 활동을 즐긴다", value: "I" }
    ]
  },
  {
    id: 6,
    question: "관심 분야가 생기면...",
    type: "EI",
    answers: [
      { text: "다양한 분야를 넓게 탐색한다", value: "E" },
      { text: "하나의 분야를 깊이 파고든다", value: "I" }
    ]
  },
  {
    id: 7,
    question: "점심시간에 나는...",
    type: "EI",
    answers: [
      { text: "동료들과 함께 밥을 먹으러 간다", value: "E" },
      { text: "혼자 조용히 식사하는 것이 편하다", value: "I" }
    ]
  },
  {
    id: 8,
    question: "좋은 일이 생기면...",
    type: "EI",
    answers: [
      { text: "바로 주변 사람들에게 이야기한다", value: "E" },
      { text: "혼자 조용히 기쁨을 느낀다", value: "I" }
    ]
  },
  {
    id: 9,
    question: "카페에서 공부하거나 작업할 때...",
    type: "EI",
    answers: [
      { text: "사람들이 있는 곳이 오히려 집중이 잘 된다", value: "E" },
      { text: "조용하고 한적한 곳을 찾게 된다", value: "I" }
    ]
  },
  {
    id: 10,
    question: "스트레스를 받으면...",
    type: "EI",
    answers: [
      { text: "누군가에게 이야기하면서 풀고 싶다", value: "E" },
      { text: "혼자 생각을 정리하며 풀고 싶다", value: "I" }
    ]
  },
  {
    id: 11,
    question: "팀 프로젝트를 할 때...",
    type: "EI",
    answers: [
      { text: "함께 모여 토론하는 것이 효율적이다", value: "E" },
      { text: "각자 맡은 부분을 따로 작업하는 것이 효율적이다", value: "I" }
    ]
  },
  {
    id: 12,
    question: "새로운 환경에 적응할 때...",
    type: "EI",
    answers: [
      { text: "주변 사람들과 빠르게 어울린다", value: "E" },
      { text: "시간을 두고 천천히 적응한다", value: "I" }
    ]
  },
  {
    id: 13,
    question: "전화벨이 울리면...",
    type: "EI",
    answers: [
      { text: "반가운 마음으로 바로 받는다", value: "E" },
      { text: "누구인지 확인하고 받을지 결정한다", value: "I" }
    ]
  },
  {
    id: 14,
    question: "운동을 한다면...",
    type: "EI",
    answers: [
      { text: "팀 스포츠나 그룹 운동이 즐겁다", value: "E" },
      { text: "조깅이나 헬스 같은 개인 운동이 편하다", value: "I" }
    ]
  },
  {
    id: 15,
    question: "하루 일과가 끝나면...",
    type: "EI",
    answers: [
      { text: "사람들과 어울리며 하루를 마무리한다", value: "E" },
      { text: "빨리 집에 가서 쉬고 싶다", value: "I" }
    ]
  },
  {
    id: 16,
    question: "아이디어가 떠오르면...",
    type: "EI",
    answers: [
      { text: "바로 누군가에게 말하면서 정리한다", value: "E" },
      { text: "혼자 충분히 생각한 후에 공유한다", value: "I" }
    ]
  },
  {
    id: 17,
    question: "여행 중에 나는...",
    type: "EI",
    answers: [
      { text: "현지인이나 여행객에게 말을 걸기도 한다", value: "E" },
      { text: "조용히 풍경을 감상하는 것이 좋다", value: "I" }
    ]
  },
  {
    id: 18,
    question: "발표나 프레젠테이션을 할 때...",
    type: "EI",
    answers: [
      { text: "사람들 앞에 서는 것이 자연스럽다", value: "E" },
      { text: "긴장되고 부담스럽다", value: "I" }
    ]
  },
  {
    id: 19,
    question: "모르는 사람이 많은 파티에 초대받으면...",
    type: "EI",
    answers: [
      { text: "새로운 사람들을 만날 기회라 기대된다", value: "E" },
      { text: "아는 사람이 없으면 가기 싫다", value: "I" }
    ]
  },
  {
    id: 20,
    question: "생각할 때 나는...",
    type: "EI",
    answers: [
      { text: "말로 하면서 생각이 정리된다", value: "E" },
      { text: "머릿속으로 충분히 정리한 후 말한다", value: "I" }
    ]
  },
  {
    id: 21,
    question: "긴 연휴가 주어지면...",
    type: "EI",
    answers: [
      { text: "여러 사람과 만남이나 여행을 계획한다", value: "E" },
      { text: "밀린 책이나 드라마를 보며 쉬고 싶다", value: "I" }
    ]
  },
  {
    id: 22,
    question: "대화할 때 나는...",
    type: "EI",
    answers: [
      { text: "말하면서 에너지를 얻는다", value: "E" },
      { text: "많이 말하면 에너지가 빠진다", value: "I" }
    ]
  },
  {
    id: 23,
    question: "회식이나 단체 모임 후에...",
    type: "EI",
    answers: [
      { text: "2차, 3차까지 가고 싶다", value: "E" },
      { text: "1차만 참석하고 빠지고 싶다", value: "I" }
    ]
  },
  {
    id: 24,
    question: "내 인간관계는...",
    type: "EI",
    answers: [
      { text: "넓고 다양한 인맥을 갖고 있다", value: "E" },
      { text: "소수의 깊은 관계를 유지한다", value: "I" }
    ]
  },

  // ===== S (감각) vs N (직관) - 24문항 =====
  {
    id: 25,
    question: "새로운 것을 배울 때 나는...",
    type: "SN",
    answers: [
      { text: "구체적인 사실과 세부사항에 집중한다", value: "S" },
      { text: "전체적인 개념과 가능성을 먼저 파악한다", value: "N" }
    ]
  },
  {
    id: 26,
    question: "일을 할 때...",
    type: "SN",
    answers: [
      { text: "현실적이고 실용적인 방법을 선호한다", value: "S" },
      { text: "창의적이고 새로운 방법을 시도한다", value: "N" }
    ]
  },
  {
    id: 27,
    question: "대화할 때 나는...",
    type: "SN",
    answers: [
      { text: "있는 그대로의 사실을 전달한다", value: "S" },
      { text: "비유나 은유를 사용해서 설명한다", value: "N" }
    ]
  },
  {
    id: 28,
    question: "문제를 해결할 때...",
    type: "SN",
    answers: [
      { text: "과거 경험을 바탕으로 판단한다", value: "S" },
      { text: "상상력과 직감을 활용한다", value: "N" }
    ]
  },
  {
    id: 29,
    question: "평소 나는...",
    type: "SN",
    answers: [
      { text: "현재에 집중하며 살아간다", value: "S" },
      { text: "미래의 가능성을 자주 생각한다", value: "N" }
    ]
  },
  {
    id: 30,
    question: "업무 지시를 받을 때...",
    type: "SN",
    answers: [
      { text: "구체적이고 명확한 지시가 편하다", value: "S" },
      { text: "자유롭게 방향만 잡아주는 것이 좋다", value: "N" }
    ]
  },
  {
    id: 31,
    question: "설명서를 볼 때...",
    type: "SN",
    answers: [
      { text: "순서대로 차근차근 읽어본다", value: "S" },
      { text: "대충 훑어보고 감으로 해본다", value: "N" }
    ]
  },
  {
    id: 32,
    question: "영화를 볼 때 나는...",
    type: "SN",
    answers: [
      { text: "디테일한 장면이나 고증에 관심이 간다", value: "S" },
      { text: "숨겨진 의미나 상징에 관심이 간다", value: "N" }
    ]
  },
  {
    id: 33,
    question: "쇼핑을 할 때...",
    type: "SN",
    answers: [
      { text: "필요한 물건 위주로 실용적으로 산다", value: "S" },
      { text: "당장 필요 없어도 마음에 들면 산다", value: "N" }
    ]
  },
  {
    id: 34,
    question: "글을 쓸 때 나는...",
    type: "SN",
    answers: [
      { text: "구체적인 사실과 데이터를 중시한다", value: "S" },
      { text: "전체적인 흐름과 아이디어를 중시한다", value: "N" }
    ]
  },
  {
    id: 35,
    question: "요리를 할 때...",
    type: "SN",
    answers: [
      { text: "레시피를 정확하게 따른다", value: "S" },
      { text: "감으로 재료를 넣으며 응용한다", value: "N" }
    ]
  },
  {
    id: 36,
    question: "뉴스를 볼 때...",
    type: "SN",
    answers: [
      { text: "구체적인 사건과 수치에 집중한다", value: "S" },
      { text: "사건 이면의 맥락과 흐름을 생각한다", value: "N" }
    ]
  },
  {
    id: 37,
    question: "길을 알려줄 때...",
    type: "SN",
    answers: [
      { text: "건물명이나 구체적인 랜드마크를 알려준다", value: "S" },
      { text: "대략적인 방향과 느낌을 알려준다", value: "N" }
    ]
  },
  {
    id: 38,
    question: "여행지를 선택할 때...",
    type: "SN",
    answers: [
      { text: "후기와 평점을 꼼꼼히 비교한다", value: "S" },
      { text: "사진 한 장의 느낌만으로도 결정할 수 있다", value: "N" }
    ]
  },
  {
    id: 39,
    question: "책을 읽을 때 나는...",
    type: "SN",
    answers: [
      { text: "사실 기반의 논픽션이나 실용서를 좋아한다", value: "S" },
      { text: "상상력을 자극하는 소설이나 판타지를 좋아한다", value: "N" }
    ]
  },
  {
    id: 40,
    question: "사진을 찍을 때...",
    type: "SN",
    answers: [
      { text: "있는 그대로의 모습을 담으려 한다", value: "S" },
      { text: "분위기나 느낌을 담으려 한다", value: "N" }
    ]
  },
  {
    id: 41,
    question: "선물을 받으면...",
    type: "SN",
    answers: [
      { text: "실용적인지 따져본다", value: "S" },
      { text: "어떤 의미를 담았을지 생각해본다", value: "N" }
    ]
  },
  {
    id: 42,
    question: "미래에 대해...",
    type: "SN",
    answers: [
      { text: "현실적인 목표를 세우고 준비한다", value: "S" },
      { text: "다양한 가능성을 상상하며 꿈꾼다", value: "N" }
    ]
  },
  {
    id: 43,
    question: "누군가의 이야기를 들을 때...",
    type: "SN",
    answers: [
      { text: "구체적인 사실관계가 궁금하다", value: "S" },
      { text: "그 이야기에 담긴 의미가 궁금하다", value: "N" }
    ]
  },
  {
    id: 44,
    question: "집을 꾸밀 때...",
    type: "SN",
    answers: [
      { text: "실용성과 수납 공간을 우선 고려한다", value: "S" },
      { text: "전체적인 분위기와 감성을 먼저 생각한다", value: "N" }
    ]
  },
  {
    id: 45,
    question: "대화 중 '만약에...' 라는 말을 들으면...",
    type: "SN",
    answers: [
      { text: "비현실적이라 흥미가 별로 없다", value: "S" },
      { text: "상상이 즐거워서 이야기가 길어진다", value: "N" }
    ]
  },
  {
    id: 46,
    question: "새로운 기기를 사면...",
    type: "SN",
    answers: [
      { text: "사용 설명서를 먼저 읽고 기능을 파악한다", value: "S" },
      { text: "일단 이것저것 눌러보면서 익힌다", value: "N" }
    ]
  },
  {
    id: 47,
    question: "과거를 떠올리면...",
    type: "SN",
    answers: [
      { text: "구체적인 장면과 사실이 선명하게 기억난다", value: "S" },
      { text: "전체적인 느낌이나 감정이 먼저 떠오른다", value: "N" }
    ]
  },
  {
    id: 48,
    question: "일할 때 나는...",
    type: "SN",
    answers: [
      { text: "검증된 방법대로 안정적으로 처리한다", value: "S" },
      { text: "더 나은 방법이 없을까 항상 고민한다", value: "N" }
    ]
  },

  // ===== T (사고) vs F (감정) - 24문항 =====
  {
    id: 49,
    question: "결정을 내릴 때 중요한 것은...",
    type: "TF",
    answers: [
      { text: "논리적이고 합리적인 분석", value: "T" },
      { text: "사람들의 감정과 관계", value: "F" }
    ]
  },
  {
    id: 50,
    question: "친구가 고민을 털어놓을 때...",
    type: "TF",
    answers: [
      { text: "문제 해결을 위한 조언을 해준다", value: "T" },
      { text: "공감하고 위로해준다", value: "F" }
    ]
  },
  {
    id: 51,
    question: "나는...",
    type: "TF",
    answers: [
      { text: "객관적이고 공정한 판단을 중시한다", value: "T" },
      { text: "따뜻하고 배려하는 태도를 중시한다", value: "F" }
    ]
  },
  {
    id: 52,
    question: "누군가 내 의견을 비판하면...",
    type: "TF",
    answers: [
      { text: "내용이 타당한지 논리적으로 따져본다", value: "T" },
      { text: "먼저 감정적으로 상처를 받는다", value: "F" }
    ]
  },
  {
    id: 53,
    question: "갈등이 생겼을 때...",
    type: "TF",
    answers: [
      { text: "원인을 분석하고 합리적으로 해결한다", value: "T" },
      { text: "서로의 감정을 먼저 살피고 화해를 시도한다", value: "F" }
    ]
  },
  {
    id: 54,
    question: "팀에서 중요한 것은...",
    type: "TF",
    answers: [
      { text: "목표 달성과 성과", value: "T" },
      { text: "팀원 간의 화합과 분위기", value: "F" }
    ]
  },
  {
    id: 55,
    question: "선물을 고를 때...",
    type: "TF",
    answers: [
      { text: "실용적이고 쓸모 있는 것을 고른다", value: "T" },
      { text: "상대방이 감동할 만한 것을 고른다", value: "F" }
    ]
  },
  {
    id: 56,
    question: "친구에게 솔직한 조언을 할 때...",
    type: "TF",
    answers: [
      { text: "사실을 있는 그대로 직접적으로 말한다", value: "T" },
      { text: "상대 기분을 살피며 돌려서 말한다", value: "F" }
    ]
  },
  {
    id: 57,
    question: "뉴스에서 안타까운 사건을 보면...",
    type: "TF",
    answers: [
      { text: "원인과 대책이 무엇인지 생각한다", value: "T" },
      { text: "피해자의 감정에 마음이 아프다", value: "F" }
    ]
  },
  {
    id: 58,
    question: "칭찬을 받으면...",
    type: "TF",
    answers: [
      { text: "구체적으로 어떤 점이 좋았는지 궁금하다", value: "T" },
      { text: "인정받았다는 느낌 자체가 기분 좋다", value: "F" }
    ]
  },
  {
    id: 59,
    question: "회의에서 나는...",
    type: "TF",
    answers: [
      { text: "논리적 근거를 들어 의견을 제시한다", value: "T" },
      { text: "참석자들의 분위기를 살피며 발언한다", value: "F" }
    ]
  },
  {
    id: 60,
    question: "실수를 했을 때...",
    type: "TF",
    answers: [
      { text: "원인을 파악하고 재발 방지를 생각한다", value: "T" },
      { text: "관련된 사람들에게 미안한 마음이 먼저 든다", value: "F" }
    ]
  },
  {
    id: 61,
    question: "SNS에 올라온 감성 글을 보면...",
    type: "TF",
    answers: [
      { text: "논리적으로 맞는지 따져보게 된다", value: "T" },
      { text: "감정에 공감하며 읽게 된다", value: "F" }
    ]
  },
  {
    id: 62,
    question: "슬픈 영화를 보면...",
    type: "TF",
    answers: [
      { text: "스토리의 개연성을 분석하게 된다", value: "T" },
      { text: "등장인물에 감정이입이 되어 눈물이 난다", value: "F" }
    ]
  },
  {
    id: 63,
    question: "누군가 울고 있으면...",
    type: "TF",
    answers: [
      { text: "무슨 일인지 상황부터 파악하려 한다", value: "T" },
      { text: "일단 안아주거나 곁에 있어준다", value: "F" }
    ]
  },
  {
    id: 64,
    question: "공정함과 배려 중 택한다면...",
    type: "TF",
    answers: [
      { text: "공정한 원칙이 더 중요하다", value: "T" },
      { text: "상황에 따른 배려가 더 중요하다", value: "F" }
    ]
  },
  {
    id: 65,
    question: "리더를 뽑을 때...",
    type: "TF",
    answers: [
      { text: "능력과 실력이 가장 중요하다", value: "T" },
      { text: "인품과 사람을 대하는 태도가 중요하다", value: "F" }
    ]
  },
  {
    id: 66,
    question: "약속을 어긴 사람에게...",
    type: "TF",
    answers: [
      { text: "왜 지키지 못했는지 이유를 따진다", value: "T" },
      { text: "속상한 마음을 먼저 표현한다", value: "F" }
    ]
  },
  {
    id: 67,
    question: "토론할 때 나는...",
    type: "TF",
    answers: [
      { text: "옳고 그름을 따지는 것이 중요하다", value: "T" },
      { text: "상대방의 입장도 이해하려 한다", value: "F" }
    ]
  },
  {
    id: 68,
    question: "후배가 같은 실수를 반복하면...",
    type: "TF",
    answers: [
      { text: "문제점을 정확히 짚어주어야 한다", value: "T" },
      { text: "기분이 상하지 않게 격려하며 알려준다", value: "F" }
    ]
  },
  {
    id: 69,
    question: "상을 줄 때...",
    type: "TF",
    answers: [
      { text: "객관적인 성과에 따라 주어야 한다", value: "T" },
      { text: "노력과 과정도 함께 인정해야 한다", value: "F" }
    ]
  },
  {
    id: 70,
    question: "결혼식 축사를 한다면...",
    type: "TF",
    answers: [
      { text: "재치있고 핵심적인 내용으로 간결하게 한다", value: "T" },
      { text: "진심이 담긴 감동적인 이야기를 한다", value: "F" }
    ]
  },
  {
    id: 71,
    question: "친구가 이직 고민을 하면...",
    type: "TF",
    answers: [
      { text: "연봉, 성장성 등 조건을 비교해준다", value: "T" },
      { text: "어떤 곳에서 더 행복할지 함께 고민한다", value: "F" }
    ]
  },
  {
    id: 72,
    question: "사과를 할 때...",
    type: "TF",
    answers: [
      { text: "무엇이 잘못되었는지 명확히 인정한다", value: "T" },
      { text: "상대의 마음이 풀릴 때까지 진심을 전한다", value: "F" }
    ]
  },

  // ===== J (판단) vs P (인식) - 24문항 =====
  {
    id: 73,
    question: "여행을 계획할 때...",
    type: "JP",
    answers: [
      { text: "미리 일정을 상세하게 짠다", value: "J" },
      { text: "대략만 정하고 즉흥적으로 움직인다", value: "P" }
    ]
  },
  {
    id: 74,
    question: "일할 때 나는...",
    type: "JP",
    answers: [
      { text: "계획을 세우고 단계적으로 진행한다", value: "J" },
      { text: "상황에 따라 유연하게 대처한다", value: "P" }
    ]
  },
  {
    id: 75,
    question: "마감 기한이 있는 일을...",
    type: "JP",
    answers: [
      { text: "미리미리 해두고 여유를 갖는다", value: "J" },
      { text: "마감 직전에 집중해서 끝낸다", value: "P" }
    ]
  },
  {
    id: 76,
    question: "내 방이나 책상은...",
    type: "JP",
    answers: [
      { text: "항상 정리정돈이 되어있다", value: "J" },
      { text: "나만의 방식으로 어질러져 있다", value: "P" }
    ]
  },
  {
    id: 77,
    question: "생활에서 나는...",
    type: "JP",
    answers: [
      { text: "안정적이고 예측 가능한 것을 좋아한다", value: "J" },
      { text: "변화와 새로운 경험을 즐긴다", value: "P" }
    ]
  },
  {
    id: 78,
    question: "중요한 결정을 내릴 때...",
    type: "JP",
    answers: [
      { text: "빠르게 결정하고 실행에 옮긴다", value: "J" },
      { text: "여러 가능성을 열어두고 천천히 결정한다", value: "P" }
    ]
  },
  {
    id: 79,
    question: "약속 시간에...",
    type: "JP",
    answers: [
      { text: "항상 정해진 시간보다 일찍 도착한다", value: "J" },
      { text: "시간에 맞추거나 조금 늦는 편이다", value: "P" }
    ]
  },
  {
    id: 80,
    question: "할 일 목록을...",
    type: "JP",
    answers: [
      { text: "작성해두고 하나씩 완료하면 뿌듯하다", value: "J" },
      { text: "작성해도 잘 안 보게 되어 머릿속으로 관리한다", value: "P" }
    ]
  },
  {
    id: 81,
    question: "갑자기 계획이 변경되면...",
    type: "JP",
    answers: [
      { text: "불편하고 스트레스를 받는다", value: "J" },
      { text: "오히려 새로운 상황이 재미있다", value: "P" }
    ]
  },
  {
    id: 82,
    question: "집을 나서기 전에...",
    type: "JP",
    answers: [
      { text: "필요한 것들을 미리 꼼꼼히 챙긴다", value: "J" },
      { text: "필요하면 그때 사거나 해결한다", value: "P" }
    ]
  },
  {
    id: 83,
    question: "일이 여러 개 쌓이면...",
    type: "JP",
    answers: [
      { text: "우선순위를 정해서 순서대로 처리한다", value: "J" },
      { text: "하고 싶은 것부터 기분에 따라 처리한다", value: "P" }
    ]
  },
  {
    id: 84,
    question: "주말 아침에...",
    type: "JP",
    answers: [
      { text: "오늘 할 일을 미리 정해두는 편이다", value: "J" },
      { text: "일어나서 기분에 따라 움직이는 편이다", value: "P" }
    ]
  },
  {
    id: 85,
    question: "옷장을 보면...",
    type: "JP",
    answers: [
      { text: "종류별로 정리되어 있다", value: "J" },
      { text: "자주 입는 옷 위주로 섞여 있다", value: "P" }
    ]
  },
  {
    id: 86,
    question: "식당에서 메뉴를 고를 때...",
    type: "JP",
    answers: [
      { text: "미리 정해두거나 빠르게 결정한다", value: "J" },
      { text: "이것저것 고민하다 마지막에 결정한다", value: "P" }
    ]
  },
  {
    id: 87,
    question: "장기 프로젝트를 할 때...",
    type: "JP",
    answers: [
      { text: "중간 목표를 세워 체크하며 진행한다", value: "J" },
      { text: "큰 방향만 정하고 그때그때 진행한다", value: "P" }
    ]
  },
  {
    id: 88,
    question: "짐을 쌀 때...",
    type: "JP",
    answers: [
      { text: "체크리스트를 만들어 하나씩 확인한다", value: "J" },
      { text: "생각나는 대로 넣고 빠진 건 나중에 산다", value: "P" }
    ]
  },
  {
    id: 89,
    question: "하루 일과를 마치고...",
    type: "JP",
    answers: [
      { text: "내일 할 일을 미리 정리해둔다", value: "J" },
      { text: "내일은 내일 생각하며 쉰다", value: "P" }
    ]
  },
  {
    id: 90,
    question: "영화나 드라마를 볼 때...",
    type: "JP",
    answers: [
      { text: "미리 뭘 볼지 정해두고 본다", value: "J" },
      { text: "그때그때 끌리는 것을 고른다", value: "P" }
    ]
  },
  {
    id: 91,
    question: "새 학기나 새 직장을 시작할 때...",
    type: "JP",
    answers: [
      { text: "필요한 준비물을 미리 완벽하게 챙긴다", value: "J" },
      { text: "가서 필요한 것을 그때 파악한다", value: "P" }
    ]
  },
  {
    id: 92,
    question: "약속을 잡을 때...",
    type: "JP",
    answers: [
      { text: "날짜와 시간, 장소를 미리 확정한다", value: "J" },
      { text: "대충 정하고 당일에 구체적으로 정한다", value: "P" }
    ]
  },
  {
    id: 93,
    question: "쉬는 날 갑자기 친구가 만나자고 하면...",
    type: "JP",
    answers: [
      { text: "이미 계획이 있으면 거절하는 편이다", value: "J" },
      { text: "재미있을 것 같으면 계획을 바꿔서라도 만난다", value: "P" }
    ]
  },
  {
    id: 94,
    question: "나의 핸드폰 앱 정리 상태는...",
    type: "JP",
    answers: [
      { text: "폴더별로 깔끔하게 정리되어 있다", value: "J" },
      { text: "자주 쓰는 앱 위주로 흩어져 있다", value: "P" }
    ]
  },
  {
    id: 95,
    question: "마트에 갈 때...",
    type: "JP",
    answers: [
      { text: "살 것을 미리 적어가는 편이다", value: "J" },
      { text: "가서 돌아다니며 필요한 것을 고른다", value: "P" }
    ]
  },
  {
    id: 96,
    question: "인생에서 중요한 것은...",
    type: "JP",
    answers: [
      { text: "목표를 세우고 차근차근 이루어가는 것", value: "J" },
      { text: "다양한 경험을 하며 자유롭게 사는 것", value: "P" }
    ]
  }
];

/**
 * Fisher-Yates 셔플 알고리즘
 */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * 차원당 균등하게 랜덤 문항을 추출한다.
 * @param {number} count - 12 또는 24
 * @returns {Array} 셔플된 문항 배열
 */
export function getRandomQuestions(count) {
  const perDimension = count / 4;
  const dimensions = ["EI", "SN", "TF", "JP"];

  const selected = [];
  for (const dim of dimensions) {
    const pool = questionsPool.filter(q => q.type === dim);
    const shuffled = shuffle(pool);
    selected.push(...shuffled.slice(0, perDimension));
  }

  return shuffle(selected);
}

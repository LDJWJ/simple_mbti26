export const questionsShort = [
  // E (외향) vs I (내향)
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

  // S (감각) vs N (직관)
  {
    id: 4,
    question: "새로운 것을 배울 때 나는...",
    type: "SN",
    answers: [
      { text: "구체적인 사실과 세부사항에 집중한다", value: "S" },
      { text: "전체적인 개념과 가능성을 먼저 파악한다", value: "N" }
    ]
  },
  {
    id: 5,
    question: "일을 할 때...",
    type: "SN",
    answers: [
      { text: "현실적이고 실용적인 방법을 선호한다", value: "S" },
      { text: "창의적이고 새로운 방법을 시도한다", value: "N" }
    ]
  },
  {
    id: 6,
    question: "대화할 때 나는...",
    type: "SN",
    answers: [
      { text: "있는 그대로의 사실을 전달한다", value: "S" },
      { text: "비유나 은유를 사용해서 설명한다", value: "N" }
    ]
  },

  // T (사고) vs F (감정)
  {
    id: 7,
    question: "결정을 내릴 때 중요한 것은...",
    type: "TF",
    answers: [
      { text: "논리적이고 합리적인 분석", value: "T" },
      { text: "사람들의 감정과 관계", value: "F" }
    ]
  },
  {
    id: 8,
    question: "친구가 고민을 털어놓을 때...",
    type: "TF",
    answers: [
      { text: "문제 해결을 위한 조언을 해준다", value: "T" },
      { text: "공감하고 위로해준다", value: "F" }
    ]
  },
  {
    id: 9,
    question: "나는...",
    type: "TF",
    answers: [
      { text: "객관적이고 공정한 판단을 중시한다", value: "T" },
      { text: "따뜻하고 배려하는 태도를 중시한다", value: "F" }
    ]
  },

  // J (판단) vs P (인식)
  {
    id: 10,
    question: "여행을 계획할 때...",
    type: "JP",
    answers: [
      { text: "미리 일정을 상세하게 짠다", value: "J" },
      { text: "대략만 정하고 즉흥적으로 움직인다", value: "P" }
    ]
  },
  {
    id: 11,
    question: "일할 때 나는...",
    type: "JP",
    answers: [
      { text: "계획을 세우고 단계적으로 진행한다", value: "J" },
      { text: "상황에 따라 유연하게 대처한다", value: "P" }
    ]
  },
  {
    id: 12,
    question: "마감 기한이 있는 일을...",
    type: "JP",
    answers: [
      { text: "미리미리 해두고 여유를 갖는다", value: "J" },
      { text: "마감 직전에 집중해서 끝낸다", value: "P" }
    ]
  }
];

const additionalQuestions = [
  // EI 추가 (id 13-15)
  {
    id: 13,
    question: "연락할 때 나는...",
    type: "EI",
    answers: [
      { text: "전화 통화를 선호한다", value: "E" },
      { text: "문자나 메신저를 선호한다", value: "I" }
    ]
  },
  {
    id: 14,
    question: "취미 활동을 한다면...",
    type: "EI",
    answers: [
      { text: "동아리나 그룹 활동에 참여한다", value: "E" },
      { text: "혼자서 할 수 있는 활동을 즐긴다", value: "I" }
    ]
  },
  {
    id: 15,
    question: "관심 분야가 생기면...",
    type: "EI",
    answers: [
      { text: "다양한 분야를 넓게 탐색한다", value: "E" },
      { text: "하나의 분야를 깊이 파고든다", value: "I" }
    ]
  },

  // SN 추가 (id 16-18)
  {
    id: 16,
    question: "문제를 해결할 때...",
    type: "SN",
    answers: [
      { text: "과거 경험을 바탕으로 판단한다", value: "S" },
      { text: "상상력과 직감을 활용한다", value: "N" }
    ]
  },
  {
    id: 17,
    question: "평소 나는...",
    type: "SN",
    answers: [
      { text: "현재에 집중하며 살아간다", value: "S" },
      { text: "미래의 가능성을 자주 생각한다", value: "N" }
    ]
  },
  {
    id: 18,
    question: "업무 지시를 받을 때...",
    type: "SN",
    answers: [
      { text: "구체적이고 명확한 지시가 편하다", value: "S" },
      { text: "자유롭게 방향만 잡아주는 것이 좋다", value: "N" }
    ]
  },

  // TF 추가 (id 19-21)
  {
    id: 19,
    question: "누군가 내 의견을 비판하면...",
    type: "TF",
    answers: [
      { text: "내용이 타당한지 논리적으로 따져본다", value: "T" },
      { text: "먼저 감정적으로 상처를 받는다", value: "F" }
    ]
  },
  {
    id: 20,
    question: "갈등이 생겼을 때...",
    type: "TF",
    answers: [
      { text: "원인을 분석하고 합리적으로 해결한다", value: "T" },
      { text: "서로의 감정을 먼저 살피고 화해를 시도한다", value: "F" }
    ]
  },
  {
    id: 21,
    question: "팀에서 중요한 것은...",
    type: "TF",
    answers: [
      { text: "목표 달성과 성과", value: "T" },
      { text: "팀원 간의 화합과 분위기", value: "F" }
    ]
  },

  // JP 추가 (id 22-24)
  {
    id: 22,
    question: "내 방이나 책상은...",
    type: "JP",
    answers: [
      { text: "항상 정리정돈이 되어있다", value: "J" },
      { text: "나만의 방식으로 어질러져 있다", value: "P" }
    ]
  },
  {
    id: 23,
    question: "생활에서 나는...",
    type: "JP",
    answers: [
      { text: "안정적이고 예측 가능한 것을 좋아한다", value: "J" },
      { text: "변화와 새로운 경험을 즐긴다", value: "P" }
    ]
  },
  {
    id: 24,
    question: "중요한 결정을 내릴 때...",
    type: "JP",
    answers: [
      { text: "빠르게 결정하고 실행에 옮긴다", value: "J" },
      { text: "여러 가능성을 열어두고 천천히 결정한다", value: "P" }
    ]
  }
];

export const questionsFull = [...questionsShort, ...additionalQuestions];

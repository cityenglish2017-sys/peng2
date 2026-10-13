/* ================================================= */
/* 등장인물 */
/* ================================================= */

const characters = {

  ajun: {
    name: "아준이",
    emoji: "👦"
  },

  ise: {
    name: "이서",
    emoji: "👧"
  },

  mom: {
    name: "엄마",
    emoji: "👩"
  },

  grandma: {
    name: "진주할머니",
    emoji: "👵"
  },

  uncle: {
    name: "삼촌",
    emoji: "🧔"
  },

  aunt: {
    name: "이모",
    emoji: "👩‍🦰"
  },

  teacher: {
    name: "선생님",
    emoji: "👩‍🏫"
  },

  friend: {
    name: "친구",
    emoji: "🧒"
  },

  classmate: {
    name: "반 친구",
    emoji: "👦"
  },

  guest: {
    name: "호텔 손님",
    emoji: "🧳"
  },

  staff: {
    name: "호텔 직원",
    emoji: "🧑‍💼"
  }

};


/* ================================================= */
/* 기차역 문제 */
/* ================================================= */

const stationMissions = [

  {
    type: "감정 이해",

    icon: "😟",

    title: "엄마가 안 보여요",

    characters: [
      "ajun",
      "mom"
    ],

    text:
      "아준이가 창원중앙역에서 잠깐 한눈을 판 사이 엄마가 보이지 않아요. 아준이는 어떤 기분일까요?",

    choices: [
      "신나서 뛰어다닌다",
      "걱정되고 무서울 수 있다",
      "아무 느낌도 없다",
      "엄마가 일부러 숨었다고 화낸다"
    ],

    answer: 1,

    feedback:
      "맞아요! 익숙한 사람이 갑자기 보이지 않으면 걱정되고 무서울 수 있어요.",

    speech:
      "“엄마가 안 보여서 걱정돼요. 도와주세요.”라고 말해보세요."
  },


  {
    type: "사회적 판단",

    icon: "🧳",

    title: "진주할머니의 무거운 가방",

    characters: [
      "ajun",
      "grandma"
    ],

    text:
      "진주할머니가 무궁화호를 타려고 하는데 가방이 무거워 보여요. 아준이는 어떻게 하면 좋을까요?",

    choices: [
      "가방이 왜 무거운지 물어본다",
      "도움이 필요한지 먼저 물어본다",
      "못 본 척 지나간다",
      "빨리 오라고 말한다"
    ],

    answer: 1,

    feedback:
      "좋아요! 상대가 힘들어 보일 때는 도움이 필요한지 먼저 물어보면 좋아요.",

    speech:
      "“할머니, 제가 가방 들어드릴까요?”라고 말해보세요."
  },


  {
    type: "관제 판단",

    icon: "🚦",

    title: "HEMU 앞 신호가 빨간색",

    characters: [
      "ajun"
    ],

    text:
      "아준 관제사가 HEMU를 보고 있는데 앞 신호가 빨간색이에요. 무엇을 해야 할까요?",

    choices: [
      "그냥 출발한다",
      "신호가 바뀔 때까지 정지시킨다",
      "더 빨리 달리라고 한다",
      "기관사가 알아서 판단하게 한다"
    ],

    answer: 1,

    feedback:
      "정답! 빨간 신호에서는 정지하고 안전을 확인해야 해요.",

    speech:
      "“HEMU는 현재 위치에서 정지하세요. 신호 확인 후 출발하겠습니다.”라고 말해보세요."
  },


  {
    type: "대화 기술",

    icon: "💬",

    title: "삼촌의 부산 이야기",

    characters: [
      "ajun",
      "uncle"
    ],

    text:
      "삼촌이 “나는 어제 부산에 갔다 왔어.”라고 말했어요. 가장 자연스러운 다음 말은 무엇일까요?",

    choices: [
      "나는 HEMU가 제일 좋아!",
      "부산에서 뭐 했어?",
      "그래",
      "근데 SRT는 빨라!"
    ],

    answer: 1,

    feedback:
      "맞아요! 상대가 말한 내용과 연결된 질문을 하면 대화가 자연스럽게 이어져요.",

    speech:
      "“삼촌, 부산에서 뭐 했어?”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "💺",

    title: "엄마의 좌석에 다른 사람이 있어요",

    characters: [
      "mom",
      "ajun"
    ],

    text:
      "엄마가 예약한 KTX-산천 좌석에 다른 사람이 앉아 있고 그 사람도 자기 자리라고 해요. 어떻게 해야 할까요?",

    choices: [
      "먼저 앉은 사람이 주인이다",
      "두 사람의 표와 좌석 번호를 확인한다",
      "가위바위보를 한다",
      "엄마에게 서서 가라고 한다"
    ],

    answer: 1,

    feedback:
      "정답! 의견이 다를 때는 싸우기보다 사실을 확인하는 것이 좋아요.",

    speech:
      "“두 분 표의 좌석 번호를 같이 확인해 볼게요.”라고 말해보세요."
  },


  {
    type: "관제 판단",

    icon: "🛤️",

    title: "열차 진로가 겹쳐요",

    characters: [
      "ajun"
    ],

    text:
      "무궁화호와 KTX-산천이 같은 선로 방향으로 들어가려고 해요. 아준 관제사는 어떻게 해야 할까요?",

    choices: [
      "둘 다 빨리 지나가게 한다",
      "한 열차를 정지시키고 순서대로 통과시킨다",
      "기관사끼리 알아서 피한다",
      "신호를 모두 초록색으로 한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 관제사는 열차의 순서와 진로를 안전하게 조절해야 해요.",

    speech:
      "“무궁화호는 대기하세요. KTX-산천이 먼저 통과합니다.”라고 말해보세요."
  },


  {
    type: "감정 이해",

    icon: "😢",

    title: "이서가 기차를 놓쳤어요",

    characters: [
      "ise",
      "mom"
    ],

    text:
      "이서가 타고 싶었던 SRT가 눈앞에서 출발했어요. 이서는 어떤 기분일까요?",

    choices: [
      "속상할 수 있다",
      "무조건 화가 난다",
      "아무렇지도 않다",
      "더 신난다"
    ],

    answer: 0,

    feedback:
      "그래요. 기대하던 것을 놓치면 속상할 수 있어요.",

    speech:
      "“이서야, 속상했지? 다음 기차를 같이 알아보자.”라고 말해보세요."
  },


  {
    type: "대화 기술",

    icon: "❓",

    title: "진주할머니 말을 못 들었어요",

    characters: [
      "ajun",
      "grandma"
    ],

    text:
      "역 방송 때문에 진주할머니가 한 말을 잘 못 들었어요. 아준이는 어떻게 해야 할까요?",

    choices: [
      "대충 알아들은 척한다",
      "다시 말해 달라고 부탁한다",
      "내 생각대로 대답한다",
      "그냥 웃는다"
    ],

    answer: 1,

    feedback:
      "정답! 잘 못 들었을 때는 추측하지 말고 다시 확인하면 좋아요.",

    speech:
      "“할머니, 잘 못 들었어요. 한 번만 다시 말씀해 주세요.”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "🎒",

    title: "주인 없는 가방",

    characters: [
      "ajun",
      "mom"
    ],

    text:
      "승강장 의자에 주인 없는 가방이 오래 놓여 있어요. 어떻게 하는 것이 좋을까요?",

    choices: [
      "열어본다",
      "가져간다",
      "만지지 않고 직원에게 알린다",
      "발로 밀어본다"
    ],

    answer: 2,

    feedback:
      "맞아요! 주인 없는 물건은 직접 확인하지 말고 직원에게 알려주는 것이 좋아요.",

    speech:
      "“역무원님, 여기 주인 없는 가방이 있어요.”라고 말해보세요."
  },


  {
    type: "대화 기술",

    icon: "🤝",

    title: "좋아하는 기차가 달라요",

    characters: [
      "ajun",
      "ise"
    ],

    text:
      "아준이는 HEMU가 좋고 이서는 SRT가 좋다고 해요. 어떻게 이야기하면 좋을까요?",

    choices: [
      "HEMU가 무조건 최고라고 한다",
      "서로 왜 좋아하는지 이야기한다",
      "이서가 틀렸다고 한다",
      "더 이상 이야기하지 않는다"
    ],

    answer: 1,

    feedback:
      "좋아요! 좋아하는 것이 서로 달라도 상대 생각을 물어볼 수 있어요.",

    speech:
      "“나는 HEMU가 좋아. 이서는 SRT가 왜 좋아?”라고 말해보세요."
  }

];


/* ================================================= */
/* 학교 문제 */
/* ================================================= */

const schoolMissions = [

  {
    type: "대화 기술",

    icon: "👂",

    title: "친구가 이야기 중이에요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "친구가 주말에 있었던 일을 이야기하고 있어요. 그런데 아준이도 빨리 말하고 싶어요. 어떻게 하면 좋을까요?",

    choices: [
      "친구 말을 끊고 바로 말한다",
      "친구가 말을 끝낼 때까지 기다린다",
      "더 큰 목소리로 말한다",
      "친구에게 그만 말하라고 한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 친구가 말을 마칠 때까지 기다리면 서로 편하게 대화할 수 있어요.",

    speech:
      "친구 말이 끝난 뒤 “나도 이야기 하나 해도 돼?”라고 말해보세요."
  },


  {
    type: "감정 이해",

    icon: "😔",

    title: "친구가 혼자 있어요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "쉬는 시간인데 친구가 혼자 책상에 앉아서 친구들이 노는 모습을 보고 있어요. 어떻게 생각할 수 있을까요?",

    choices: [
      "무조건 혼자 있고 싶은 것이다",
      "같이 놀고 싶지만 먼저 말하기 어려울 수도 있다",
      "화가 난 것이 확실하다",
      "아무 생각이 없다"
    ],

    answer: 1,

    feedback:
      "좋아요! 겉으로 보이는 행동만 보고 마음을 단정하지 않는 것이 중요해요.",

    speech:
      "“같이 놀래?”라고 친구에게 물어보세요."
  },


  {
    type: "문제 해결",

    icon: "✏️",

    title: "친구가 연필을 빌려달래요",

    characters: [
      "ajun",
      "classmate"
    ],

    text:
      "친구가 연필을 두고 와서 아준이에게 연필을 빌려달라고 했어요. 여분의 연필이 있다면 어떻게 하면 좋을까요?",

    choices: [
      "싫다고 놀린다",
      "빌려주고 나중에 돌려달라고 말한다",
      "바닥에 던져준다",
      "선생님에게 혼내달라고 한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 도와줄 수 있는 상황이라면 친절하게 도와줄 수 있어요.",

    speech:
      "“여기 하나 있어. 쓰고 나중에 돌려줘.”라고 말해보세요."
  },


  {
    type: "사회적 판단",

    icon: "🚶",

    title: "급식 줄에서 새치기",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "급식을 기다리고 있는데 친구가 아준이 앞에 갑자기 새치기했어요. 어떻게 말하면 좋을까요?",

    choices: [
      "야! 당장 뒤로 가!",
      "밀어낸다",
      "우리 여기서부터 줄 서고 있었어. 뒤에 서줄래?",
      "친구와 싸운다"
    ],

    answer: 2,

    feedback:
      "좋아요! 화가 나도 상황을 설명하고 원하는 행동을 말하는 것이 좋아요.",

    speech:
      "“우리 여기서부터 줄 서고 있었어. 뒤에 서줄래?”라고 말해보세요."
  },


  {
    type: "감정 이해",

    icon: "😳",

    title: "발표하기 전 친구",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "친구가 발표하기 전 손을 꼭 쥐고 작은 목소리로 “나 못할 것 같아.”라고 말해요. 어떤 기분일까요?",

    choices: [
      "긴장되고 걱정된다",
      "무조건 화가 났다",
      "졸리다",
      "발표가 너무 쉽다"
    ],

    answer: 0,

    feedback:
      "맞아요! 여러 사람 앞에서 말하기 전에는 긴장될 수 있어요.",

    speech:
      "“긴장돼도 괜찮아. 천천히 하면 돼.”라고 말해보세요."
  },


  {
    type: "대화 기술",

    icon: "💬",

    title: "질문에 맞게 대답하기",

    characters: [
      "teacher",
      "ajun"
    ],

    text:
      "선생님이 “아준아, 오늘 준비물 가져왔니?”라고 물었어요. 가장 알맞은 대답은 무엇일까요?",

    choices: [
      "나는 어제 기차를 봤어요",
      "네, 준비물 가져왔어요",
      "오늘 날씨가 좋아요",
      "SRT가 빨라요"
    ],

    answer: 1,

    feedback:
      "정답! 질문에서 무엇을 묻는지 듣고 그 내용에 맞춰 대답하면 좋아요.",

    speech:
      "“네, 준비물 가져왔어요.”라고 말해보세요."
  },


  {
    type: "사과하기",

    icon: "🙇",

    title: "친구의 공책에 물을 쏟았어요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "아준이가 실수로 친구 공책에 물을 쏟았어요. 어떻게 하면 좋을까요?",

    choices: [
      "친구가 가까이 둔 탓이라고 한다",
      "미안하다고 하고 함께 닦는다",
      "모른 척한다",
      "공책을 숨긴다"
    ],

    answer: 1,

    feedback:
      "맞아요! 실수했을 때는 사과하고 해결을 도와주는 것이 좋아요.",

    speech:
      "“미안해. 내가 실수했어. 같이 닦을게.”라고 말해보세요."
  },


  {
    type: "대화 기술",

    icon: "🔄",

    title: "친구들이 다른 이야기 중이에요",

    characters: [
      "ajun",
      "friend",
      "classmate"
    ],

    text:
      "친구들이 축구 이야기를 하고 있는데 아준이는 기차 이야기를 하고 싶어졌어요. 어떻게 하면 좋을까요?",

    choices: [
      "갑자기 기차 이야기만 계속한다",
      "친구들 이야기를 듣다가 적절한 때에 주제를 바꾼다",
      "축구 이야기를 하면 안 된다고 한다",
      "더 크게 기차 이야기를 한다"
    ],

    answer: 1,

    feedback:
      "좋아요! 대화 중에는 지금 이야기하는 주제를 함께 따라가는 것도 중요해요.",

    speech:
      "“그 이야기 끝나면 내가 기차 이야기 하나 해도 돼?”라고 말해보세요."
  },


  {
    type: "사회적 판단",

    icon: "📚",

    title: "도서관에서 친구가 큰 소리로 말해요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "학교 도서관에서 친구가 큰 목소리로 이야기하고 있어요. 어떻게 말하는 것이 좋을까요?",

    choices: [
      "조용히 해!",
      "친구를 밀어낸다",
      "여기는 도서관이니까 조금 작은 목소리로 말하자",
      "나도 더 크게 말한다"
    ],

    answer: 2,

    feedback:
      "좋아요! 이유와 함께 부탁하면 상대가 이해하기 쉬워요.",

    speech:
      "“여기는 도서관이니까 조금 작은 목소리로 말하자.”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "⚽",

    title: "둘 다 같은 공을 쓰고 싶어요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "아준이와 친구가 쉬는 시간에 하나뿐인 공을 서로 먼저 쓰고 싶어 해요. 어떻게 하면 좋을까요?",

    choices: [
      "먼저 잡은 사람이 계속 사용한다",
      "서로 차례를 정하거나 같이 놀 방법을 찾는다",
      "공을 숨긴다",
      "친구에게 양보하라고 명령한다"
    ],

    answer: 1,

    feedback:
      "정답! 둘 다 원하는 것이 있을 때는 서로 만족할 수 있는 방법을 찾을 수 있어요.",

    speech:
      "“우리 10분씩 번갈아 쓸까?”라고 말해보세요."
  },


  {
    type: "감정 이해",

    icon: "😕",

    title: "친구의 대답이 짧아요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "아준이가 계속 이야기하는데 친구가 “응.”, “그래.”라고만 대답하며 창밖을 보고 있어요. 어떻게 생각할 수 있을까요?",

    choices: [
      "친구가 더 듣고 싶다",
      "친구가 다른 것에 관심이 있거나 대화를 쉬고 싶을 수 있다",
      "친구가 아준이를 싫어한다",
      "더 크게 이야기해야 한다"
    ],

    answer: 1,

    feedback:
      "좋아요! 상대의 표정, 시선, 대답 길이를 보면 대화를 계속하고 싶은지 생각해 볼 수 있어요.",

    speech:
      "“내 이야기 더 듣고 싶어, 아니면 다른 얘기할까?”라고 물어보세요."
  },


  {
    type: "칭찬하기",

    icon: "👏",

    title: "친구가 어려운 문제를 풀었어요",

    characters: [
      "ajun",
      "friend"
    ],

    text:
      "친구가 어려운 문제를 여러 번 생각한 끝에 혼자 풀었어요. 어떻게 말해주면 좋을까요?",

    choices: [
      "그것도 오래 걸렸네",
      "끝까지 생각해서 풀었네. 잘했어!",
      "나는 더 빨리 풀었어",
      "별로 안 어려운데?"
    ],

    answer: 1,

    feedback:
      "맞아요! 결과뿐 아니라 노력한 과정을 칭찬해주면 좋아요.",

    speech:
      "“끝까지 생각해서 풀었네. 잘했어!”라고 말해보세요."
  }

];


/* ================================================= */
/* 호텔 문제 */
/* ================================================= */

const hotelMissions = [

  {
    type: "고객 응대",

    icon: "🛎️",

    title: "방이 너무 시끄러워요",

    characters: [
      "ajun",
      "guest"
    ],

    text:
      "손님이 프런트로 와서 “옆방이 너무 시끄러워서 잠을 잘 수 없어요.”라고 말했어요. 아준 지배인은 어떻게 해야 할까요?",

    choices: [
      "조금 참으라고 한다",
      "불편했겠다고 말하고 상황을 확인해 해결한다",
      "손님이 예민하다고 말한다",
      "옆방 손님에게 바로 화낸다"
    ],

    answer: 1,

    feedback:
      "좋아요! 먼저 손님의 불편을 인정하고 상황을 확인한 뒤 해결해야 해요.",

    speech:
      "“불편을 드려 죄송합니다. 바로 확인해 보겠습니다.”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "🔑",

    title: "객실 키가 작동하지 않아요",

    characters: [
      "ajun",
      "grandma"
    ],

    text:
      "진주할머니가 객실 앞에서 카드키가 작동하지 않는다며 프런트에 도움을 요청했어요. 어떻게 할까요?",

    choices: [
      "카드를 더 세게 대보라고 한다",
      "객실 정보와 신원을 확인한 뒤 새 키를 준비한다",
      "다른 방에 그냥 들어가라고 한다",
      "내일 다시 오라고 한다"
    ],

    answer: 1,

    feedback:
      "정답! 호텔에서는 안전을 위해 객실 정보를 확인한 뒤 문제를 해결하는 것이 좋아요.",

    speech:
      "“객실을 확인한 뒤 새 카드키를 준비해 드리겠습니다.”라고 말해보세요."
  },


  {
    type: "감정 이해",

    icon: "😠",

    title: "체크인이 늦어 화난 손님",

    characters: [
      "ajun",
      "uncle"
    ],

    text:
      "삼촌이 호텔에 도착했는데 객실 준비가 늦어지고 있어 화가 났어요. 어떤 말부터 하는 것이 좋을까요?",

    choices: [
      "기다리면 된다고 한다",
      "불편했겠다고 말하고 현재 상황을 설명한다",
      "호텔은 원래 바쁘다고 한다",
      "손님이 너무 급하다고 말한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 불편한 마음을 먼저 인정하면 그 다음 설명도 더 잘 들을 수 있어요.",

    speech:
      "“기다리게 해서 죄송합니다. 객실 준비 상황을 바로 확인해 드리겠습니다.”라고 말해보세요."
  },


  {
    type: "고객 응대",

    icon: "🧺",

    title: "수건이 부족해요",

    characters: [
      "ajun",
      "mom"
    ],

    text:
      "엄마가 객실에 수건이 부족하다고 전화했어요. 아준 지배인은 어떻게 대답하면 좋을까요?",

    choices: [
      "내일 가져다준다고 한다",
      "필요한 수량을 확인하고 객실로 보내드린다",
      "직접 프런트로 오라고 한다",
      "원래 수건이 적다고 한다"
    ],

    answer: 1,

    feedback:
      "좋아요! 필요한 것이 무엇인지 정확히 확인한 뒤 해결하면 좋아요.",

    speech:
      "“수건 몇 장이 더 필요하신가요? 객실로 보내드리겠습니다.”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "❄️",

    title: "방이 너무 추워요",

    characters: [
      "ajun",
      "ise"
    ],

    text:
      "이서가 객실이 너무 춥다고 이야기해요. 지배인은 어떻게 하면 좋을까요?",

    choices: [
      "이불을 덮으라고만 한다",
      "객실 온도와 난방 상태를 확인하고 해결한다",
      "창문을 열라고 한다",
      "추운 게 정상이라고 한다"
    ],

    answer: 1,

    feedback:
      "정답! 불편한 점을 들었으면 원인을 확인하고 가능한 해결책을 찾아야 해요.",

    speech:
      "“많이 추우셨죠? 난방 상태를 바로 확인해 드릴게요.”라고 말해보세요."
  },


  {
    type: "대화 기술",

    icon: "❓",

    title: "손님의 말을 잘 못 들었어요",

    characters: [
      "ajun",
      "guest"
    ],

    text:
      "호텔 로비가 시끄러워서 손님이 요청한 내용을 잘 못 들었어요. 어떻게 해야 할까요?",

    choices: [
      "대충 알아들은 척한다",
      "정중하게 다시 말해 달라고 요청한다",
      "내가 생각한 대로 처리한다",
      "다른 직원에게 넘긴다"
    ],

    answer: 1,

    feedback:
      "맞아요! 서비스에서는 내용을 정확히 이해하는 것이 중요해요.",

    speech:
      "“죄송합니다. 마지막 말씀을 한 번만 다시 말씀해 주시겠어요?”라고 말해보세요."
  },


  {
    type: "고객 응대",

    icon: "🍳",

    title: "조식 장소를 묻는 손님",

    characters: [
      "ajun",
      "aunt"
    ],

    text:
      "이모가 “아침 식사는 어디서 먹나요?”라고 물었어요. 가장 좋은 안내는 무엇일까요?",

    choices: [
      "저쪽이에요",
      "2층 레스토랑입니다. 엘리베이터에서 내리면 오른쪽에 있어요",
      "아침에 알아서 찾아가세요",
      "직원에게 물어보세요"
    ],

    answer: 1,

    feedback:
      "좋아요! 위치를 안내할 때는 층수와 방향을 구체적으로 말하면 좋아요.",

    speech:
      "“조식은 2층 레스토랑입니다. 엘리베이터에서 내리시면 오른쪽이에요.”라고 말해보세요."
  },


  {
    type: "감정 이해",

    icon: "😟",

    title: "아이의 장난감을 잃어버렸어요",

    characters: [
      "ajun",
      "ise",
      "mom"
    ],

    text:
      "이서가 호텔 로비에서 좋아하는 장난감을 잃어버리고 울고 있어요. 지배인은 어떻게 하면 좋을까요?",

    choices: [
      "새것을 사라고 한다",
      "속상한 마음을 이해하고 분실물 확인을 도와준다",
      "울지 말라고 한다",
      "장난감을 잘 챙겼어야 한다고 말한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 먼저 아이의 마음을 이해하고 해결 방법을 찾아주면 좋아요.",

    speech:
      "“많이 속상했구나. 분실물 보관소를 같이 확인해 볼게.”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "🚿",

    title: "객실에서 물이 안 나와요",

    characters: [
      "ajun",
      "guest"
    ],

    text:
      "손님이 객실 욕실에서 물이 나오지 않는다고 전화했어요. 지배인은 어떻게 해야 할까요?",

    choices: [
      "조금 기다리라고만 한다",
      "시설 상태를 확인하고 필요하면 객실 변경도 안내한다",
      "물을 사서 쓰라고 한다",
      "손님이 사용법을 모른다고 한다"
    ],

    answer: 1,

    feedback:
      "좋아요! 문제 원인을 확인하면서 불편을 줄일 다른 방법도 함께 생각해야 해요.",

    speech:
      "“시설을 바로 확인하겠습니다. 오래 걸리면 다른 객실도 준비해 드릴게요.”라고 말해보세요."
  },


  {
    type: "고객 응대",

    icon: "🚗",

    title: "주차장을 찾는 손님",

    characters: [
      "ajun",
      "uncle"
    ],

    text:
      "삼촌이 호텔 주차장 입구를 찾지 못해 전화했어요. 어떻게 설명하면 좋을까요?",

    choices: [
      "호텔 옆에 있다고 한다",
      "정문을 지나 오른쪽 지하 주차장 입구로 들어오라고 설명한다",
      "주변을 돌아보라고 한다",
      "다른 사람에게 물어보라고 한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 길 안내는 기준점과 방향을 같이 설명하면 이해하기 쉬워요.",

    speech:
      "“정문을 지나서 오른쪽으로 오시면 지하 주차장 입구가 있습니다.”라고 말해보세요."
  },


  {
    type: "사회적 판단",

    icon: "🤫",

    title: "로비에서 크게 소리치는 손님",

    characters: [
      "ajun",
      "guest"
    ],

    text:
      "한 손님이 호텔 로비에서 큰 소리로 전화하고 있어 다른 손님들이 불편해하고 있어요. 어떻게 말할까요?",

    choices: [
      "조용히 하세요!",
      "전화를 끊으라고 한다",
      "죄송하지만 다른 손님들을 위해 목소리를 조금 낮춰주실 수 있을까요?",
      "아무 말도 하지 않는다"
    ],

    answer: 2,

    feedback:
      "좋아요! 정중한 부탁과 이유를 함께 말하는 것이 좋아요.",

    speech:
      "“죄송하지만 다른 손님들을 위해 목소리를 조금 낮춰주실 수 있을까요?”라고 말해보세요."
  },


  {
    type: "문제 해결",

    icon: "🧳",

    title: "체크아웃 후 짐 보관",

    characters: [
      "ajun",
      "grandma"
    ],

    text:
      "진주할머니가 체크아웃을 했지만 기차 시간이 남아 짐을 맡길 수 있는지 물어봤어요. 어떻게 할까요?",

    choices: [
      "객실에 두고 가라고 한다",
      "짐 보관 서비스를 안내하고 필요한 정보를 확인한다",
      "직접 들고 다니라고 한다",
      "로비 아무 곳에 두라고 한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 손님의 다음 일정까지 생각해 적절한 서비스를 안내하면 좋아요.",

    speech:
      "“짐 보관이 가능합니다. 확인 후 안전하게 보관해 드릴게요.”라고 말해보세요."
  }

];


/* ================================================= */
/* 장소 설정 */
/* ================================================= */

const placeSettings = {

  station: {

    title:
      "창원중앙역 화용언어 관제센터",

    role:
      "🚆 관제사",

    helperTitle:
      "관제사 작전",

    helperTip:
      "승객과 기관사의 상황을 살펴보고 가장 안전하고 자연스러운 방법을 찾아보세요!",

    celebrationEmoji:
      "🚆",

    celebrationTitle:
      "관제 임무 성공!",

    missions:
      stationMissions

  },


  school: {

    title:
      "학교생활 화용언어 교실",

    role:
      "🎒 학생",

    helperTitle:
      "멋진 학생 작전",

    helperTip:
      "친구의 말과 표정을 살펴보고 서로 기분 좋게 지낼 수 있는 방법을 찾아보세요!",

    celebrationEmoji:
      "🏫",

    celebrationTitle:
      "학교 임무 성공!",

    missions:
      schoolMissions

  },


  hotel: {

    title:
      "그랜드 산톡 호텔 지배인",

    role:
      "🏨 호텔 지배인",

    helperTitle:
      "지배인 서비스 작전",

    helperTip:
      "손님의 말을 정확히 듣고 감정을 이해한 뒤 가장 좋은 해결 방법을 찾아보세요!",

    celebrationEmoji:
      "🏨",

    celebrationTitle:
      "호텔 임무 성공!",

    missions:
      hotelMissions

  }

};


/* ================================================= */
/* HTML 요소 */
/* ================================================= */

const scoreEl =
  document.getElementById("score");

const streakEl =
  document.getElementById("streak");

const mainTitle =
  document.getElementById("mainTitle");

const roleBadge =
  document.getElementById("roleBadge");

const missionTypeEl =
  document.getElementById("missionType");

const missionIconEl =
  document.getElementById("missionIcon");

const missionTitleEl =
  document.getElementById("missionTitle");

const missionTextEl =
  document.getElementById("missionText");

const characterArea =
  document.getElementById("characterArea");

const choiceArea =
  document.getElementById("choiceArea");

const feedbackEl =
  document.getElementById("feedback");

const speechBox =
  document.getElementById("speechBox");

const speechPromptEl =
  document.getElementById("speechPrompt");

const doneSpeakingBtn =
  document.getElementById("doneSpeakingBtn");

const startBtn =
  document.getElementById("startBtn");

const nextBtn =
  document.getElementById("nextBtn");

const soundBtn =
  document.getElementById("soundBtn");

const celebration =
  document.getElementById("celebration");

const celebrationText =
  document.getElementById("celebrationText");

const celebrationEmoji =
  document.getElementById("celebrationEmoji");

const celebrationTitle =
  document.getElementById("celebrationTitle");

const helperTitle =
  document.getElementById("helperTitle");

const helperTip =
  document.getElementById("helperTip");


/* 장소 장면 */

const stationScene =
  document.getElementById("stationScene");

const schoolScene =
  document.getElementById("schoolScene");

const hotelScene =
  document.getElementById("hotelScene");

const placeTabs =
  document.querySelectorAll(".place-tab");


/* 열차 */

const mugunghwa =
  document.getElementById("mugunghwa");

const ktx =
  document.getElementById("ktx");

const hemu =
  document.getElementById("hemu");

const srt =
  document.getElementById("srt");

const allTrains = [
  mugunghwa,
  ktx,
  hemu,
  srt
];


/* ================================================= */
/* 게임 상태 */
/* ================================================= */

let currentPlace =
  "station";

let currentMission =
  null;

let score =
  0;

let streak =
  0;

let usedByPlace = {

  station: [],

  school: [],

  hotel: []

};

let awaitingSpeech =
  false;

let gameStarted =
  false;


/* ================================================= */
/* 장소 변경 */
/* ================================================= */

function changePlace(place) {

  currentPlace =
    place;

  currentMission =
    null;

  awaitingSpeech =
    false;


  placeTabs.forEach(tab => {

    tab.classList.toggle(
      "active",
      tab.dataset.place === place
    );

  });


  stationScene.classList.toggle(
    "hidden",
    place !== "station"
  );

  schoolScene.classList.toggle(
    "hidden",
    place !== "school"
  );

  hotelScene.classList.toggle(
    "hidden",
    place !== "hotel"
  );


  const setting =
    placeSettings[place];


  mainTitle.textContent =
    setting.title;

  roleBadge.textContent =
    setting.role;

  helperTitle.textContent =
    setting.helperTitle;

  helperTip.textContent =
    setting.helperTip;


  celebrationEmoji.textContent =
    setting.celebrationEmoji;

  celebrationTitle.textContent =
    setting.celebrationTitle;


  feedbackEl.className =
    "feedback hidden";

  speechBox.classList.add(
    "hidden"
  );

  nextBtn.classList.add(
    "hidden"
  );


  choiceArea.innerHTML =
    "";


  if (gameStarted) {

    nextMission();

  }

  else {

    showPlaceIntro();

  }

}


/* ================================================= */
/* 장소 소개 */
/* ================================================= */

function showPlaceIntro() {

  const setting =
    placeSettings[currentPlace];


  missionTypeEl.textContent =
    "새로운 장소";


  if (
    currentPlace === "station"
  ) {

    missionIconEl.textContent =
      "🚆";

    missionTitleEl.textContent =
      "창원중앙역 관제센터";

    missionTextEl.textContent =
      "열차와 승객에게 생기는 문제를 해결해 보세요!";

    characterArea.innerHTML =
      `<span class="character-chip">👦 아준 관제사</span>`;

  }


  if (
    currentPlace === "school"
  ) {

    missionIconEl.textContent =
      "🏫";

    missionTitleEl.textContent =
      "우리 반 교실";

    missionTextEl.textContent =
      "학생이 되어 친구와 선생님 사이에서 일어나는 상황을 해결해 보세요!";

    characterArea.innerHTML =
      `<span class="character-chip">👦 학생 아준이</span>`;

  }


  if (
    currentPlace === "hotel"
  ) {

    missionIconEl.textContent =
      "🏨";

    missionTitleEl.textContent =
      "그랜드 산톡 호텔";

    missionTextEl.textContent =
      "호텔 지배인이 되어 손님의 요청과 불편을 해결해 보세요!";

    characterArea.innerHTML =
      `<span class="character-chip">👦 아준 지배인</span>`;

  }

}


/* ================================================= */
/* 등장인물 표시 */
/* ================================================= */

function showCharacters(
  characterIds
) {

  characterArea.innerHTML =
    "";


  characterIds.forEach(id => {

    const person =
      characters[id];


    if (!person) {
      return;
    }


    const chip =
      document.createElement(
        "span"
      );


    chip.className =
      "character-chip";


    chip.textContent =
      `${person.emoji} ${person.name}`;


    characterArea.appendChild(
      chip
    );

  });

}


/* ================================================= */
/* 랜덤 문제 선택 */
/* ================================================= */

function pickMission() {

  const missions =
    placeSettings[
      currentPlace
    ].missions;


  const used =
    usedByPlace[
      currentPlace
    ];


  if (
    used.length >=
    missions.length
  ) {

    usedByPlace[
      currentPlace
    ] = [];

  }


  const activeUsed =
    usedByPlace[
      currentPlace
    ];


  let index;


  do {

    index =
      Math.floor(
        Math.random() *
        missions.length
      );

  }
  while (
    activeUsed.includes(index)
  );


  activeUsed.push(index);


  return missions[index];

}


/* ================================================= */
/* 게임 시작 */
/* ================================================= */

function startGame() {

  gameStarted =
    true;


  score =
    0;


  streak =
    0;


  usedByPlace = {

    station: [],

    school: [],

    hotel: []

  };


  updateScore();


  startBtn.classList.add(
    "hidden"
  );


  nextMission();

}


/* ================================================= */
/* 다음 문제 */
/* ================================================= */

function nextMission() {

  currentMission =
    pickMission();


  awaitingSpeech =
    false;


  missionTypeEl.textContent =
    currentMission.type;


  missionIconEl.textContent =
    currentMission.icon;


  missionTitleEl.textContent =
    currentMission.title;


  missionTextEl.textContent =
    currentMission.text;


  showCharacters(
    currentMission.characters
  );


  feedbackEl.className =
    "feedback hidden";


  feedbackEl.textContent =
    "";


  speechBox.classList.add(
    "hidden"
  );


  nextBtn.classList.add(
    "hidden"
  );


  choiceArea.innerHTML =
    "";


  currentMission
    .choices
    .forEach(
      (choice,index) => {


        const button =
          document.createElement(
            "button"
          );


        button.className =
          "choice-btn";


        button.type =
          "button";


        button.textContent =
          `${index + 1}. ${choice}`;


        button.addEventListener(
          "click",
          () =>
            checkAnswer(
              index,
              button
            )
        );


        choiceArea.appendChild(
          button
        );

      }
    );

}


/* ================================================= */
/* 답 확인 */
/* ================================================= */

function checkAnswer(
  index,
  clickedButton
) {

  if (
    awaitingSpeech
  ) {

    return;

  }


  const buttons =
    [
      ...choiceArea
        .querySelectorAll(
          ".choice-btn"
        )
    ];


  if (
    index ===
    currentMission.answer
  ) {


    clickedButton
      .classList
      .add(
        "correct"
      );


    buttons.forEach(
      button => {

        button.disabled =
          true;

      }
    );


    feedbackEl.textContent =
      currentMission.feedback;


    feedbackEl.className =
      "feedback good";


    score +=
      1;


    streak +=
      1;


    updateScore();


    speechPromptEl.textContent =
      currentMission.speech;


    speechBox.classList.remove(
      "hidden"
    );


    awaitingSpeech =
      true;


    if (
      currentPlace ===
      "station"
    ) {

      animateTrain();

    }

  }

  else {


    clickedButton
      .classList
      .add(
        "wrong"
      );


    clickedButton.disabled =
      true;


    streak =
      0;


    updateScore();


    feedbackEl.textContent =
      "한 번 더 생각해 볼까요? 상대방의 마음, 말, 상황을 함께 살펴보세요.";


    feedbackEl.className =
      "feedback try";

  }

}


/* ================================================= */
/* 말하기 완료 */
/* ================================================= */

function finishSpeech() {

  if (
    !awaitingSpeech
  ) {

    return;

  }


  awaitingSpeech =
    false;


  speechBox.classList.add(
    "hidden"
  );


  nextBtn.classList.remove(
    "hidden"
  );


  const setting =
    placeSettings[
      currentPlace
    ];


  celebrationEmoji.textContent =
    setting.celebrationEmoji;


  celebrationTitle.textContent =
    setting.celebrationTitle;


  if (
    streak >= 3
  ) {

    celebrationText.textContent =
      `${streak}번 연속 성공! 정말 멋진 판단이에요!`;

  }

  else {

    celebrationText.textContent =
      "상황을 이해하고 직접 말하기까지 성공했어요!";

  }


  celebration.classList.remove(
    "hidden"
  );


  setTimeout(
    () => {

      celebration.classList.add(
        "hidden"
      );

    },
    850
  );

}


/* ================================================= */
/* 점수 */
/* ================================================= */

function updateScore() {

  scoreEl.textContent =
    score;


  streakEl.textContent =
    streak;

}


/* ================================================= */
/* 열차 애니메이션 */
/* ================================================= */

function animateTrain() {

  const train =
    allTrains[
      Math.floor(
        Math.random() *
        allTrains.length
      )
    ];


  train.classList.remove(
    "engine-boost"
  );


  void train.offsetWidth;


  train.classList.add(
    "engine-boost"
  );

}


/* ================================================= */
/* 문제 읽어주기 */
/* ================================================= */

function speakCurrentMission() {

  if (
    !currentMission
  ) {

    return;

  }


  if (
    !(
      "speechSynthesis"
      in window
    )
  ) {

    return;

  }


  window
    .speechSynthesis
    .cancel();


  const names =
    currentMission
      .characters
      .map(
        id =>
          characters[id]?.name
      )
      .filter(Boolean)
      .join(", ");


  const text =
    `등장인물 ${names}. ${currentMission.title}. ${currentMission.text}`;


  const utterance =
    new SpeechSynthesisUtterance(
      text
    );


  utterance.lang =
    "ko-KR";


  utterance.rate =
    0.88;


  utterance.pitch =
    1.03;


  window
    .speechSynthesis
    .speak(
      utterance
    );

}


/* ================================================= */
/* 이벤트 연결 */
/* ================================================= */

placeTabs.forEach(
  tab => {

    tab.addEventListener(
      "click",
      () => {

        changePlace(
          tab.dataset.place
        );

      }
    );

  }
);


startBtn.addEventListener(
  "click",
  startGame
);


nextBtn.addEventListener(
  "click",
  nextMission
);


doneSpeakingBtn.addEventListener(
  "click",
  finishSpeech
);


soundBtn.addEventListener(
  "click",
  speakCurrentMission
);


celebration.addEventListener(
  "click",
  () => {

    celebration.classList.add(
      "hidden"
    );

  }
);


/* 처음 화면 */

showPlaceIntro();
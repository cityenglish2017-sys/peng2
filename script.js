
"use strict";

// ======================================
// 펭귄마트 2 - 게임 데이터
// ======================================

const PRODUCTS = [
  { id:"ice", name:"아이스크림", emoji:"🍦", price:3, type:"food" },
  { id:"strawberry", name:"딸기", emoji:"🍓", price:2, type:"food" },
  { id:"cake", name:"케이크", emoji:"🍰", price:5, type:"food" },
  { id:"cookie", name:"쿠키", emoji:"🍪", price:2, type:"food" },
  { id:"donut", name:"도넛", emoji:"🍩", price:3, type:"food" },
  { id:"juice", name:"주스", emoji:"🧃", price:2, type:"food" },
  { id:"milk", name:"우유", emoji:"🥛", price:2, type:"food" },
  { id:"apple", name:"사과", emoji:"🍎", price:2, type:"food" },
  { id:"banana", name:"바나나", emoji:"🍌", price:2, type:"food" },
  { id:"pizza", name:"피자", emoji:"🍕", price:5, type:"food" },
  { id:"burger", name:"햄버거", emoji:"🍔", price:5, type:"food" },
  { id:"popcorn", name:"팝콘", emoji:"🍿", price:3, type:"food" },
  { id:"choco", name:"초콜릿", emoji:"🍫", price:3, type:"food" },
  { id:"water", name:"생수", emoji:"💧", price:1, type:"food" },
  { id:"bread", name:"빵", emoji:"🥐", price:3, type:"food" },
  { id:"sushi", name:"초밥", emoji:"🍣", price:5, type:"food" },

  { id:"car", name:"토미카 자동차", emoji:"🚗", price:7, type:"toy" },
  { id:"police", name:"토미카 경찰차", emoji:"🚓", price:8, type:"toy" },
  { id:"fire", name:"토미카 소방차", emoji:"🚒", price:8, type:"toy" },
  { id:"ambulance", name:"토미카 구급차", emoji:"🚑", price:8, type:"toy" },
  { id:"bus", name:"토미카 버스", emoji:"🚌", price:7, type:"toy" },
  { id:"taxi", name:"토미카 택시", emoji:"🚕", price:7, type:"toy" },
  { id:"truck", name:"토미카 트럭", emoji:"🚚", price:8, type:"toy" },
  { id:"race", name:"경주 자동차", emoji:"🏎️", price:9, type:"toy" },
  { id:"teddy", name:"곰인형", emoji:"🧸", price:6, type:"toy" },
  { id:"robot", name:"로봇", emoji:"🤖", price:8, type:"toy" },
  { id:"ball", name:"축구공", emoji:"⚽", price:5, type:"toy" },
  { id:"gift", name:"선물상자", emoji:"🎁", price:2, type:"toy" },

  { id:"ktx", name:"KTX 산천", emoji:"🚄", price:10, type:"train" },
  { id:"blue", name:"KTX 청룡", emoji:"🚅", price:11, type:"train" },
  { id:"srt", name:"SRT", emoji:"🚄", price:10, type:"train" },
  { id:"mugunghwa", name:"무궁화호", emoji:"🚃", price:8, type:"train" },
  { id:"itx", name:"ITX 청춘", emoji:"🚆", price:9, type:"train" },
  { id:"maeum", name:"ITX 마음", emoji:"🚈", price:9, type:"train" },
  { id:"saemaeul", name:"새마을호", emoji:"🚞", price:9, type:"train" },
  { id:"ticket", name:"기차 승차권", emoji:"🎫", price:2, type:"train" }
];

const CUSTOMERS = [
  { name:"아준이", emoji:"👦", likes:["train","toy"] },
  { name:"이서", emoji:"👧", likes:["food","toy"] },
  { name:"엄마", emoji:"👩", likes:["food"] },
  { name:"아빠", emoji:"👨", likes:["food","train"] },
  { name:"진주할머니", emoji:"👵", likes:["food"] },
  { name:"진주할아버지", emoji:"👴", likes:["food","train"] },
  { name:"마산할머니", emoji:"👵", likes:["food"] },
  { name:"마산할아버지", emoji:"👴", likes:["toy","train"] },
  { name:"삼촌", emoji:"🧑", likes:["toy","train"] },
  { name:"이모", emoji:"👩‍🦰", likes:["food","toy"] },
  { name:"숙모", emoji:"👩‍🦱", likes:["food","toy"] },
  { name:"시환이", emoji:"👦", likes:["toy","train"] },
  { name:"예나", emoji:"👧", likes:["food","toy"] },
  { name:"펭귄 손님", emoji:"🐧", likes:["food","toy","train"] }
];

const EVENTS = [
  {
    title:"🔧 자판기 고장!",
    message:"자판기에서 이상한 소리가 나요. 어떻게 할까요?",
    choices:["🔧 수리 버튼 누르기","🚀 세게 흔들기","💤 그냥 잠자기","❌ 물건 버리기"],
    correct:0,
    success:"수리 성공! 자판기가 다시 작동해요."
  },
  {
    title:"📦 재고가 부족해요!",
    message:"물건을 채워야 해요. 무엇을 할까요?",
    choices:["📦 창고에서 가져오기","🗑️ 자판기 버리기","🙈 모른 척하기","🚪 가게 닫기"],
    correct:0,
    success:"재고 보충 완료! 상품이 다시 가득 찼어요."
  },
  {
    title:"🧹 바닥에 주스가!",
    message:"손님이 주스를 흘렸어요. 안전하게 해결해요.",
    choices:["🧹 바닥 닦기","🏃 뛰어다니기","💦 더 흘리기","😴 잠자기"],
    correct:0,
    success:"바닥이 깨끗해졌어요! 손님들이 안전해요."
  },
  {
    title:"⚡ 정전 발생!",
    message:"자판기 화면이 꺼졌어요. 어떻게 할까요?",
    choices:["🔦 안전 확인 후 어른 부르기","🔌 젖은 손으로 만지기","💥 기계 때리기","🏃 그냥 도망가기"],
    correct:0,
    success:"어른의 도움으로 전기가 돌아왔어요!"
  },
  {
    title:"🎁 깜짝 선물!",
    message:"오늘의 특별 손님에게 선물을 드려요!",
    choices:["🎁 선물 포장하기","🗑️ 선물 버리기","😠 화내기","🙅 손님 무시하기"],
    correct:0,
    success:"손님이 정말 기뻐해요!"
  },
  {
    title:"🚄 기차 특별 배송!",
    message:"기차 장난감 배송 상자가 도착했어요!",
    choices:["📦 상품 확인하기","🚀 상자 던지기","🙈 확인 안 하기","❌ 상자 버리기"],
    correct:0,
    success:"기차 장난감을 안전하게 진열했어요!"
  },
  {
    title:"💰 거스름돈 문제!",
    message:"손님에게 거스름돈을 돌려줘야 해요.",
    choices:["🪙 정확하게 돌려주기","🙈 돈 숨기기","🏃 도망가기","❌ 무시하기"],
    correct:0,
    success:"정확하게 계산했어요!"
  },
  {
    title:"❄️ 냉장고 점검!",
    message:"아이스크림 냉장고가 따뜻해졌어요!",
    choices:["🧑‍🔧 어른에게 점검 부탁하기","☀️ 햇볕에 두기","🚪 문 열어두기","🙈 모른 척하기"],
    correct:0,
    success:"냉장고를 안전하게 점검했어요!"
  }
];

// ======================================
// 게임 상태
// ======================================

let mode = "easy";
let coins = 0;
let successes = 0;
let level = 1;

let currentCustomer = null;
let currentOrder = [];
let displayedProducts = [];
let selectedProducts = [];
let stock = {};
let waitingForNext = false;
let eventActive = false;
let lastCustomerName = "";

const $ = id => document.getElementById(id);

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.85;
    utterance.pitch = 1.12;

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.log("음성 재생을 사용할 수 없습니다.");
  }
}

// ======================================
// 시작 및 화면 전환
// ======================================

function startGame(selectedMode) {
  mode = selectedMode;
  coins = 0;
  successes = 0;
  level = 1;
  stock = {};
  lastCustomerName = "";

  PRODUCTS.forEach(product => {
    stock[product.id] = 3;
  });

  $("startScreen").classList.add("hidden");
  $("gameScreen").classList.remove("hidden");

  updateScore();
  nextCustomer();
}

function goHome() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  $("feedback").classList.add("hidden");
  $("gameScreen").classList.add("hidden");
  $("startScreen").classList.remove("hidden");
  window.scrollTo(0, 0);
}

function updateScore() {
  $("levelText").textContent = "⭐ " + level + "단계";
  $("coinText").textContent = "🪙 " + coins;
  $("successText").textContent = "🎁 " + successes;
}

// ======================================
// 손님과 주문
// ======================================

function chooseCustomer() {
  const candidates = CUSTOMERS.filter(
    customer => customer.name !== lastCustomerName
  );

  const customer = randomItem(candidates);
  lastCustomerName = customer.name;
  return customer;
}

function generateOrder() {
  const count = mode === "easy"
    ? 1
    : (successes < 2 ? 2 : randomItem([2, 2, 3]));

  let pool = PRODUCTS.filter(product =>
    currentCustomer.likes.includes(product.type)
  );

  // 아준 도전 모드에서는 다양한 종류를 섞어서 판매
  if (mode === "hard" && Math.random() < 0.65) {
    pool = PRODUCTS;
  }

  let order = shuffle(pool).slice(0, count);

  // 기차 특별 주문이 가끔 등장
  if (mode === "hard" && Math.random() < 0.3) {
    const train = randomItem(
      PRODUCTS.filter(p => p.type === "train" && p.id !== "ticket")
    );

    order[0] = train;
  }

  // 중복 제거 후 부족한 수량 채우기
  const ids = new Set(order.map(p => p.id));

  for (const product of shuffle(PRODUCTS)) {
    if (ids.size >= count) break;
    if (!ids.has(product.id)) {
      order.push(product);
      ids.add(product.id);
    }
  }

  return order.filter(
    (product, index, array) =>
      array.findIndex(p => p.id === product.id) === index
  ).slice(0, count);
}

function makeDisplayProducts() {
  const required = [...currentOrder];
  const limit = mode === "easy" ? 6 : 9;

  const others = shuffle(
    PRODUCTS.filter(p =>
      !required.some(item => item.id === p.id)
    )
  );

  displayedProducts = shuffle([
    ...required,
    ...others.slice(0, limit - required.length)
  ]);

  // 품절 미션은 주문 생성 후 해결할 수 있도록
  // 모든 주문 상품의 재고를 우선 보장
  currentOrder.forEach(product => {
    if (stock[product.id] <= 0) {
      stock[product.id] = 1;
    }
  });
}

function nextCustomer() {
  waitingForNext = false;
  eventActive = false;
  selectedProducts = [];

  $("feedback").classList.add("hidden");
  $("nextBtn").classList.add("hidden");
  $("sellBtn").disabled = false;
  $("clearBtn").disabled = false;
  $("deliveryItem").textContent = "✨";
  $("machineStatus").textContent = "🟢 영업 중";
  $("eventBox").classList.add("hidden");

  currentCustomer = chooseCustomer();
  currentOrder = generateOrder();

  $("customerAvatar").textContent = currentCustomer.emoji;
  $("customerName").textContent = currentCustomer.name;

  makeDisplayProducts();
  renderProducts();
  renderBasket();
  renderOrder();

  // 도전 모드에서 3번째 손님 이후 돌발 미션
  if (
    mode === "hard" &&
    successes >= 2 &&
    Math.random() < 0.4
  ) {
    showRandomEvent();
  } else {
    speakOrder();
  }
}

function renderOrder() {
  const names = currentOrder.map(p => p.name);

  const text = names.join(" 그리고 ");

  $("orderMessage").textContent =
    currentCustomer.name + ": " +
    text + " 주세요!";

  $("orderIcons").textContent =
    currentOrder.map(p => p.emoji).join(" + ");
}

function speakOrder() {
  const names = currentOrder.map(p => p.name).join(" 그리고 ");

  speak(
    "안녕하세요! 저는 " +
    currentCustomer.name +
    "예요. " +
    names +
    " 주세요!"
  );
}

// ======================================
// 자판기 상품 선택
// ======================================

function renderProducts() {
  const grid = $("productGrid");
  grid.innerHTML = "";

  displayedProducts.forEach(product => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "product-card";

    const isSelected = selectedProducts.some(
      item => item.id === product.id
    );

    const soldOut = stock[product.id] <= 0;

    if (isSelected) button.classList.add("selected");
    if (soldOut) button.classList.add("out-of-stock");

    button.disabled = eventActive || waitingForNext;

    const emoji = document.createElement("span");
    emoji.className = "product-emoji";
    emoji.textContent = product.emoji;

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = product.name;

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = "🪙 " + product.price;

    button.append(emoji, name, price);

    if (soldOut) {
      const label = document.createElement("span");
      label.className = "stock-label";
      label.textContent = "품절";
      button.appendChild(label);
    }

    button.addEventListener("click", () => {
      selectProduct(product.id);
    });

    grid.appendChild(button);
  });
}

function selectProduct(id) {
  if (eventActive || waitingForNext) return;

  if (stock[id] <= 0) {
    showFeedback(
      "📦",
      "품절이에요!",
      "이 물건은 재고가 없어요.\n다른 물건을 골라 보세요!",
      "다시 고르기",
      () => $("feedback").classList.add("hidden")
    );
    return;
  }

  const existingIndex = selectedProducts.findIndex(
    product => product.id === id
  );

  if (existingIndex >= 0) {
    selectedProducts.splice(existingIndex, 1);
  } else {
    if (selectedProducts.length >= currentOrder.length) {
      speak("주문한 개수만큼 골랐어요. 판매하기를 눌러 주세요.");
      return;
    }

    const product = PRODUCTS.find(p => p.id === id);
    selectedProducts.push(product);
  }

  renderProducts();
  renderBasket();
}

function renderBasket() {
  const basket = $("basket");

  if (selectedProducts.length === 0) {
    basket.textContent = "물건을 눌러 주세요!";
  } else {
    basket.textContent = selectedProducts
      .map(p => p.emoji + " " + p.name)
      .join(" + ");
  }

  $("selectionCount").textContent =
    selectedProducts.length +
    " / " +
    currentOrder.length +
    "개 선택";
}

function clearSelection() {
  if (waitingForNext || eventActive) return;

  selectedProducts = [];
  renderProducts();
  renderBasket();
}

// ======================================
// 판매와 정답 판정
// ======================================

function sellProducts() {
  if (eventActive || waitingForNext) return;

  if (selectedProducts.length === 0) {
    showFeedback(
      "🛒",
      "물건을 골라 주세요!",
      "먼저 자판기에서 물건을 눌러 주세요.",
      "확인",
      () => $("feedback").classList.add("hidden")
    );
    return;
  }

  const correct =
    selectedProducts.length === currentOrder.length &&
    currentOrder.every(orderProduct =>
      selectedProducts.some(
        selected => selected.id === orderProduct.id
      )
    );

  if (!correct) {
    showFeedback(
      "🤔",
      "주문을 다시 확인해요!",
      currentCustomer.name +
      "이 주문한 물건과 조금 달라요.\n" +
      "주문 그림을 보고 다시 골라 보세요!",
      "다시 도전!",
      () => {
        $("feedback").classList.add("hidden");
        selectedProducts = [];
        renderProducts();
        renderBasket();
        speakOrder();
      }
    );
    return;
  }

  // 판매 성공
  waitingForNext = true;

  let earned = selectedProducts.reduce(
    (sum, product) => sum + product.price, 0
  );

  coins += earned;
  successes++;

  level = Math.floor(successes / 5) + 1;

  selectedProducts.forEach(product => {
    stock[product.id] = Math.max(
      0, stock[product.id] - 1
    );
  });

  $("deliveryItem").textContent =
    selectedProducts.map(p => p.emoji).join(" ");

  $("machineStatus").textContent = "🎉 판매 성공!";
  $("sellBtn").disabled = true;
  $("clearBtn").disabled = true;

  updateScore();

  showFeedback(
    "🎉",
    "판매 성공!",
    currentCustomer.name +
    "이 정말 좋아해요!\n" +
    "🪙 " + earned + "코인을 받았어요!",
    "다음 손님 ➡️",
    nextCustomer
  );
}

// ======================================
// 돌발 미션
// ======================================

function showRandomEvent() {
  eventActive = true;

  const event = randomItem(EVENTS);

  $("eventBox").classList.remove("hidden");
  $("eventTitle").textContent = event.title;
  $("eventMessage").textContent = event.message;

  $("machineStatus").textContent = "⚠️ 돌발 상황!";
  $("sellBtn").disabled = true;

  const choices = $("eventChoices");
  choices.innerHTML = "";

  // 정답 위치를 매번 바꾸기
  const shuffled = shuffle(
    event.choices.map((text, index) => ({
      text,
      correct: index === event.correct
    }))
  );

  shuffled.forEach(choice => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "event-choice";
    button.textContent = choice.text;

    button.addEventListener("click", () => {
      if (choice.correct) {
        eventActive = false;
        coins += 3;
        updateScore();

        $("eventBox").classList.add("hidden");
        $("machineStatus").textContent = "🟢 영업 중";
        $("sellBtn").disabled = false;

        // 재고 보충 미션 성공 시 상품 재고 추가
        if (event.title.includes("재고")) {
          displayedProducts.forEach(product => {
            stock[product.id] = Math.max(
              2, stock[product.id]
            );
          });
        }

        renderProducts();

        showFeedback(
          "🌟",
          "미션 성공!",
          event.success + "\n보너스 3코인!",
          "주문 받기 ➡️",
          () => {
            $("feedback").classList.add("hidden");
            speakOrder();
          }
        );
      } else {
        showFeedback(
          "💡",
          "다시 생각해 봐요!",
          "더 안전하고 좋은 방법을 찾아보세요!",
          "다시 도전",
          () => $("feedback").classList.add("hidden")
        );
      }
    });

    choices.appendChild(button);
  });

  renderProducts();
  speak(event.title + " " + event.message);
}

// ======================================
// 팝업
// ======================================

let feedbackAction = null;

function showFeedback(icon, title, message, buttonText, action) {
  $("feedbackIcon").textContent = icon;
  $("feedbackTitle").textContent = title;
  $("feedbackMessage").textContent = message;
  $("feedbackBtn").textContent = buttonText;

  feedbackAction = action;

  $("feedback").classList.remove("hidden");

  speak(title + " " + message);
}

function handleFeedbackButton() {
  if (typeof feedbackAction === "function") {
    const action = feedbackAction;
    feedbackAction = null;
    action();
  } else {
    $("feedback").classList.add("hidden");
  }
}

// ======================================
// 버튼 연결
// ======================================

document.addEventListener("DOMContentLoaded", () => {

  $("easyBtn").addEventListener("click", () => {
    startGame("easy");
  });

  $("hardBtn").addEventListener("click", () => {
    startGame("hard");
  });

  $("homeBtn").addEventListener("click", goHome);

  $("repeatBtn").addEventListener("click", () => {
    if (eventActive) {
      speak($("eventTitle").textContent + " " +
            $("eventMessage").textContent);
    } else {
      speakOrder();
    }
  });

  $("clearBtn").addEventListener("click", clearSelection);

  $("sellBtn").addEventListener("click", sellProducts);

  $("nextBtn").addEventListener("click", nextCustomer);

  $("feedbackBtn").addEventListener(
    "click",
    handleFeedbackButton
  );

  console.log("펭귄마트 2 준비 완료!");
});

console.log("Portfolio Site");
let intro = document.getElementById("intro");
let mouseCursor = document.getElementById("mouseCursor");
let quickBar = document.querySelector(".quickBar");
let image = document.getElementById("image");
let role1 = document.querySelector(".role1");
let role2 = document.querySelector(".role2");
let role3 = document.querySelector(".role3");
let role4 = document.querySelector(".role4");
let r1Angle = 0;
let r2Angle = 90;
let r3Angle = 180;
let r4Angle = 270;
let cards = document.getElementsByClassName("card");
cards = Array.from(cards);

intro.addEventListener("mousemove", (e) => {
  // console.log(e.clientX, e.clientY)
  mouseCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const quickBarZoomIn = () => {
  mouseCursor.style.height = "3rem";
};
const quickBarZoomOut = () => {
  mouseCursor.style.height = "2rem";
};

image.addEventListener("mouseenter", (e) => {
  mouseCursor.style.height = "4.5rem";
  mouseCursor.style.background = "hsla(305, 42%, 46%, 0.381)";
});
image.addEventListener("mouseleave", (e) => {
  mouseCursor.style.height = "2rem";
  mouseCursor.style.background = "hsla(0, 0%, 100%, 0.594)";
});

setInterval(() => {
  r1Angle += 90;
  role1.style.transform = `rotateZ(${r1Angle}deg) translate(50px)`;

  r2Angle += 90;
  role2.style.transform = `rotateZ(${r2Angle}deg) translate(50px)`;

  r3Angle += 90;
  role3.style.transform = `rotateZ(${r3Angle}deg) translate(50px)`;

  r4Angle += 90;
  role4.style.transform = `rotateZ(${r4Angle}deg) translate(50px)`;
}, 2000);

let lastCard = cards[0];
lastCard.classList.add("cardCenter");
lastCard.classList.remove("cardLeft");

let cardNumber = 1;

const displayCard = (card) => {
  // console.log(card)
  if (lastCard) {
    lastCard.classList.remove("cardCenter");
    lastCard.classList.add("cardLeft");
  }
  // console.log(i, card)
  card.classList.remove("cardLeft");
  card.classList.add("cardCenter");
  lastCard = card;
};

let cardInterval = setInterval(() => {
  cardNumber = (cardNumber + 1) % cards.length;
  // console.log(cards, cardNumber);
  displayCard(cards[cardNumber]);
}, 2000);

Array.from(cards).forEach((card, i) => {
  card.addEventListener("click", (e) => {
    if (card.target) {
      card = card.target;
    }
    displayCard(card);
    clearInterval(cardInterval)
  });
});

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
let projects = document.getElementById("projects");
let slideUp = document.getElementById("slideUp");
let slideDown = document.getElementById("slideDown");
let projectsArr = ["fetn", "tb", "vss", "wb"];
let projectsArrPointer = 0;

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
    clearInterval(cardInterval);
  });
});

// setTimeout(() => {
//   a()
// }, 1000);

const a = () => {
  Fetn_Mobile.classList.remove("not_visible_frame");
  Fetn_Mobile.classList.add("visible_frame");
  Fetn_Laptop.classList.remove("not_visible_frame");
  Fetn_Laptop.classList.add("visible_frame");
  setTimeout(() => {
    let hiddenItems = Array.from(document.getElementsByClassName("hidden"));
    hiddenItems.forEach((e) => {
      e.classList.remove("hidden");
      e.classList.add("visible");
    });
  }, 1000);
};
const b = () => {
  Fetn_Mobile.classList.add("not_visible_frame");
  Fetn_Mobile.classList.remove("visible_frame");
  Fetn_Laptop.classList.add("not_visible_frame");
  Fetn_Laptop.classList.remove("visible_frame");
};

const showProject = (projectName, hideProject) => {
  projects.classList.add(projectName)
  projects.classList.remove(hideProject)
  let projectFrame = document.getElementById(projectName);
  let mobileFrame = document.getElementById(projectName + "_mobile");
  let laptopFrame = document.getElementById(projectName + "_laptop");
  console.log(mobileFrame, laptopFrame);
  mobileFrame.classList.remove("not_visible_frame");
  mobileFrame.classList.add("visible_frame");
  laptopFrame.classList.remove("not_visible_frame");
  laptopFrame.classList.add("visible_frame");

  setTimeout(() => {
    let hiddenItems = Array.from(projectFrame.getElementsByClassName("hidden"));
    hiddenItems.forEach((e) => {
      e.classList.remove("hidden");
      e.classList.add("visible");
    });
  }, 1000);
};

showProject("fetn");

const hideProject = (projectName) => {
  let projectFrame = document.getElementById(projectName);
  let mobileFrame = document.getElementById(projectName + "_mobile");
  let laptopFrame = document.getElementById(projectName + "_laptop");
  console.log(mobileFrame, laptopFrame);
  mobileFrame.classList.add("not_visible_frame");
  mobileFrame.classList.remove("visible_frame");
  laptopFrame.classList.add("not_visible_frame");
  laptopFrame.classList.remove("visible_frame");

  setTimeout(() => {
    let hiddenItems = Array.from(
      projectFrame.getElementsByClassName("visible")
    );
    hiddenItems.forEach((e) => {
      e.classList.remove("visible");
      e.classList.add("hidden");
    });
  }, 1000);
};

slideDown.addEventListener("click", () => {
  hideProject(projectsArr[projectsArrPointer]);
  prev = projectsArr[projectsArrPointer]
  projectsArrPointer = (projectsArrPointer + 1) % projectsArr.length;
  setTimeout(() => {
    showProject(projectsArr[projectsArrPointer], prev);
  }, 500);
});

slideUp.addEventListener("click", () => {
  hideProject(projectsArr[projectsArrPointer]);
  prev = projectsArr[projectsArrPointer]
  projectsArrPointer =
    projectsArrPointer - 1 < 0
      ? projectsArr.length - 1
      : projectsArrPointer - 1;
  setTimeout(() => {
    showProject(projectsArr[projectsArrPointer], prev);
  }, 500);
});

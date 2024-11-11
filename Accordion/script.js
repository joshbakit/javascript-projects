const data = [
  {
    id: 1,
    title: "What is the largest planet in our solar system?",
    content: "Jupiter is the largest planet in our solar system.",
  },
  {
    id: 2,
    title: "Who painted the Mona Lisa?",
    content: "The Mona Lisa was painted by Leonardo da Vinci.",
  },
  {
    id: 3,
    title: "What is the main ingredient in guacamole?",
    content: "The main ingredient in guacamole is avocado.",
  },
  {
    id: 4,
    title: "What is 15 - 8?",
    content: "The answer to 15 minus 8 is 7.",
  },
  {
    id: 5,
    title: "Which animal is known as the “King of the Jungle”?",
    content: "The lion is known as the “King of the Jungle.”",
  },
  {
    id: 6,
    title:
      "What is the chemical symbol for water?What is the chemical symbol for water?",
    content: "The chemical symbol for water is H₂O.",
  },
  {
    id: 7,
    title: "How many days are there in a leap year?",
    content: "There are 366 days in a leap year.",
  },
  {
    id: 8,
    title: "Who discovered gravity when an apple fell on his head?",
    content: "Isaac Newton discovered gravity when an apple fell on his head.",
  },
  {
    id: 9,
    title: "What is the smallest prime number?",
    content: "The smallest prime number is 2.",
  },
  {
    id: 10,
    title: "What type of animal is a Komodo dragon?",
    content: "A Komodo dragon is a type of lizard.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordion() {
  accordionWrapper.innerHTML = data
    .map(
      (item) =>
        `<div class="accordion_item">
            <div class="accordion_title">
                <h3>${item.title}</h3>
                <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div class="accordion_content">
                <div>${item.content}</div>
            </div>
        </div>`
    )
    .join(" ");
}
createAccordion();

const accordionTitle = document.querySelectorAll(".accordion_title");

accordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let alreadyHaveActiveClass = document.querySelectorAll(".active");
      alreadyHaveActiveClass.forEach((item) => {
        item.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});

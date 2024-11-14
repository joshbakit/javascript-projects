const usersList = document.querySelector(".user-list");
const scrollToBottom = document.querySelector(".scroll-to-bottom");
const scrollToTop = document.querySelector(".scroll-to-top");
const loader = document.querySelector(".loading");

function showLoader() {
  loader.classList.add("show");
  usersList.classList.add("hide");
}
function removeLoader() {
  loader.classList.remove("show");
  usersList.classList.remove("hide");
}

async function fetchUsers() {
  try {
    showLoader();
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    const users = result.users;
    console.log(users);
    if (result && result.users) displayUsers(result.users);
    removeLoader();
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();

function displayUsers(getUsers) {
  usersList.innerHTML = getUsers
    .map(
      (users) => `
        <li>
            <div class="card">
            <img src="https://dummyjson.com/icon/emilys/128" />
            <div>
            <p>${users.firstName} ${users.lastName}</p>
            <p>${users.university}</p>
            </div>
            </div> 
        </li>
    `
    )
    .join("");
  console.log(getUsers);
}

scrollToBottom.addEventListener("click", () => {
  console.log(document.body.scrollHeight);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const postContainer = document.querySelector(".post-container");
const progressBar = document.querySelector(".progress-bar");

async function fetchPost() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    console.log(result.users);
    if (result && result.users) displayusers(result.users);
  } catch (error) {
    console.log(error);
  }
}
fetchPost();

function displayusers(user) {
  postContainer.innerHTML = user
    .map(
      (item) =>
        `
  <div class="card" key=${item.id}>
    <p class="user-name">${item.firstName}</p>
    <p class="user-agent">${item.userAgent}</p>
    <p class="user-university">${item.university}</p>
  </div> 
  `
    )
    .join("");
}

window.onscroll = () => {
  handleScroll();
};

function handleScroll() {
  let getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percentageScroll = (getScrollFromTop / height) * 100;
  progressBar.style.width = `${percentageScroll}%`;

  console.log(percentageScroll);
}

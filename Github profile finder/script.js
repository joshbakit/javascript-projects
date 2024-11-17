const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const profileContainer = document.querySelector(".result");
const github_BASE_URL = "https://api.github.com/users/";

async function getGithubProfile() {
  try {
    const response = await fetch(`${github_BASE_URL}${searchInput.value}`);
    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      profileContainer.innerHTML = `<span>no user found</span>`;
      return;
    }
    displayProfileDetails(result);
    searchInput.value = "";
  } catch (error) {
    console.log(error);
  }
}

function displayProfileDetails(profile) {
  const { login, avatar_url, public_repos, followers, following } = profile;
  profileContainer.innerHTML = `
  <div class="card">
  <img src=${avatar_url} alt=${login}>
  <div class="items">
    <p class="username">${login}</p>
    <p class="repos">Repos :${public_repos}</p>
    <p class="followers">Followers :${followers}</p>
    <p class="following">Following :${following}</p>
  </div>
  </div>
  `;
}

searchButton.addEventListener("click", getGithubProfile);

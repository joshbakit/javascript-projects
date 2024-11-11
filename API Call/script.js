const apiContainer = document.querySelector(".api-container");


// function fetchUsingXHR() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhr.responseType = "json";
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       displayData(xhr.response);
//     } else {
//       console.log("error fetching data");
//     }
//   };
// }

// function fetchUsingFetchMethod() {
//   const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });

//   fetchRequest
//     .then((response) => response.json())
//     .then((data) => {
//       displayData(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log(fetchRequest);
// }

// async function fetchUsingAsyncAwaitMethod() {
//   const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });
//   const data = await result.json();
//   displayData(data);
// }

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject("error fetching data");
      }
    };
  });
  return promise;
}

async function fetchUsingXHRandAsyncAwaitWithHelperMethod() {
  const data = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayData(data);
}

function displayData(data) {
  if (!data) return;
  apiContainer.innerHTML = data
    .map(
      (postItem) =>
        `
    <div class="api-item">
    <span>ID: ${postItem.id}</span>
    <h2>TITLE: ${postItem.title}</h2>
    <p>BODY: ${postItem.body}</p>
    </div>
`
    )
    .join("");
}

displayData();

// fetchUsingFetchMethod(); **Fetch using Fetch Method**
// fetchUsingXHR(); **Fetch using XHR Method**
// fetchUsingAsyncAwaitMethod(); **Fetch using async await Method**
fetchUsingXHRandAsyncAwaitWithHelperMethod();

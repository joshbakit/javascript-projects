const generateQuoteBtn = document.querySelector(".generate-quote-btn");
const quoteContainer = document.querySelector(".quote-container");

async function fetchQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const result = await response.json();
    console.log(result);
    if (result && result.quote) displayQuote(result);
  } catch (error) {
    console.log(error);
  }
}

function displayQuote(item) {
  quoteContainer.innerHTML = `
      <div class="quote-content" key=${item.id}>
        <span>${item.id}</span>
        <h1>" ${item.quote} "</h1>
        <p>-${item.author}</p>
      </div>
      `;
}

generateQuoteBtn.addEventListener("click", fetchQuote);

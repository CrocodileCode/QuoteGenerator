const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {

    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "New Quote";

    });
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);
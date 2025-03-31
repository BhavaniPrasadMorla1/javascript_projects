
const apikey = '04db0a5a057d46ecbfdd89979776dd48';

const blogContainer = document.getElementById("blog-container");
const searchFeild = document.getElementById("search-input");
const searchButton = document.getElementById("Search-button");

// Fetch random news articles
async function fetchNews(query) {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error Fetching News", error);
        return [];
    }
}

// Handle the search button click event
searchButton.addEventListener("click", async () => {
    const query = searchFeild.value.trim();
    if (query !== "") {
        try {
            const articles = await fetchNews(query);
            displayBlogs(articles);
        } catch (error) {
            console.log("Error fetching news by Query", error);
        }
    }
});

// Display blog articles on the page
function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "...." : article.title;
        title.textContent = truncatedTitle;

        const description = document.createElement("p");
        const truncatedDescription = article.description.length > 130 ? article.description.slice(0, 130) + "...." : article.description;
        description.textContent = truncatedDescription;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);

        blogCard.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });

        blogContainer.appendChild(blogCard);
    });
}

// Fetch and display random news on page load
(async () => {
    try {
        const articles = await fetchNews('random');  // You can use a default query like 'random' for random articles
        displayBlogs(articles);
        console.log(articles);
    } catch (error) {
        console.error("Error Fetching Random News", error);
    }
})();

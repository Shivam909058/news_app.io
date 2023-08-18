function toggleMode() {
    let body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}

async function searchEventNews() {
    const searchTerm = document.getElementById('eventSearch').value;

    let endpoint = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=871645c5d369436484d45cc70b208603`;

    try {
        let response = await fetch(endpoint);
        if (response.ok) {
            let data = await response.json();
            displayNews(data.articles);
        } else {
            console.error('Failed to fetch news');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayNews(articles) {
    let outputHTML = '';
    for (let article of articles) {
        outputHTML += `
        <div class="news__article">
            <h3><a href="${article.url}">${article.title}</a></h3>
            <img src="${article.urlToImage}" alt="${article.title}">
            <p>${article.description}</p>
        </div>
        `;
    }

    document.getElementById('newsResults').innerHTML = outputHTML;
}

let newsDiv = document.getElementById('newsDiv')
let searchBtn = document.getElementById('searchBtn')


searchBtn.addEventListener('click', () => {
    let inputId = document.getElementById('exampleInputEmail1')

    let API_KEY = `https://newsapi.org/v2/everything?q=${inputId.value}&from=2024-11-07&sortBy=publishedAt&apiKey=0dc5fa2e48f14a57b24ec41b22797520`

    fetch(API_KEY)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data.articles.map((e, i) => {
                newsDiv.innerHTML += `
                   <div class="card" style="width: 18rem;">
                      <img src=${e.urlToImage} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${e.title}</h5>
                          <p class="card-text">${e.description}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                   </div>
                   `
            })
        })
})




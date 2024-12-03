// let myApiKey = '0dc5fa2e48f14a57b24ec41b22797520'

// console.log(myApiKey);

// const fetchNews = async (params) => {
//     console.log('fetching news......');

//     var url = 'https://newsapi.org/v2/everything?' +
//         'q=Apple&' +
//         'from=2024-12-02&' +
//         'sortBy=popularity&' +
//         'pageSize=20&' +
//         'page=2&' +
//         'apiKey=0dc5fa2e48f14a57b24ec41b22797520';

//     var req = new Request(url);

//     let a = await fetch(req)
//     let response = await a.json()
//     console.log(response);

// }
const fetchNews = async () => {
    console.log('fetching news......');

    const url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2024-12-02&' +
        'sortBy=popularity&' +
        'pageSize=20&' +
        'page=2&' +
        'apiKey=0dc5fa2e48f14a57b24ec41b22797520';

    try {
        const req = new Request(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json',
                'Connection': 'keep-alive'
            }
        });

        const a = await fetch(req);

        if (!a.ok) {
            console.error(`HTTP error! status: ${a.status}`);
            return;
        }

        const response = await a.json();
        console.log(response);
    } catch (error) {
        console.error('Error fetching news:', error);
    }

};
fetchNews();
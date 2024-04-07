async function fetchCryptoPrices() {
    const apiKey = 'c23d33c2-13ad-412b-83a2-ecd11f8881d8';
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,74`; // IDs for Bitcoin, Ethereum, Dogecoin

    try {
        const response = await fetch(url, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.data; // Return the data containing cryptocurrency quotes
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

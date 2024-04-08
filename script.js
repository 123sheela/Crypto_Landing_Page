// Function to fetch cryptocurrency prices
async function fetchCryptoPrices() {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,74');
    const data = await response.json();
    return data; // Assuming API response is in JSON format with price data
}

// Function to update prices on the webpage
async function updatePrices() {
    const prices = await fetchCryptoPrices();

    // Update Bitcoin price
    document.getElementById('bitcoin-price').textContent = prices.bitcoin;

    // Update Ethereum price
    document.getElementById('ethereum-price').textContent = prices.ethereum;

    // Update Dogecoin price
    document.getElementById('dogecoin-price').textContent = prices.dogecoin;
}

// Update prices initially and set interval for updating every X seconds
updatePrices(); // Initial update
setInterval(updatePrices, 60000); // Update every minute (adjust as needed)

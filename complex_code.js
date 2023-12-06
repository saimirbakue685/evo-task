/* complex_code.js */

// This code is a simulation of a stock market trading platform.
// It includes various features such as real-time price updates, user authentication, buy/sell orders, and portfolio management.

// Simulated data for stocks
const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.25 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2500.50 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 350.75 },
  // ... more stock data
];

// Simulated data for user accounts
const users = [
  { id: 1, username: "john_doe", password: "password1", balance: 10000, portfolio: [] },
  { id: 2, username: "jane_smith", password: "password2", balance: 5000, portfolio: [] },
  // ... more user accounts
];

// Function to authenticate user
function authenticate(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? user.id : null;
}

// Function to get stock by symbol
function getStockBySymbol(symbol) {
  return stocks.find(stock => stock.symbol === symbol);
}

// Function to place a buy order
function placeBuyOrder(userId, symbol, quantity) {
  const stock = getStockBySymbol(symbol);
  if (stock) {
    const totalCost = stock.price * quantity;
    const user = users.find(u => u.id === userId);

    if (user.balance >= totalCost) {
      user.balance -= totalCost;
      user.portfolio.push({ symbol, quantity, price: stock.price });

      console.log(`Buy order placed for ${quantity} shares of ${symbol} stock.`);
    } else {
      console.log("Insufficient balance to place the order.");
    }
  } else {
    console.log("Invalid stock symbol.");
  }
}

// Function to place a sell order
function placeSellOrder(userId, symbol, quantity) {
  const stock = getStockBySymbol(symbol);
  if (stock) {
    const user = users.find(u => u.id === userId);
    const stockInPortfolio = user.portfolio.find(p => p.symbol === symbol);

    if (stockInPortfolio && stockInPortfolio.quantity >= quantity) {
      const totalSellAmount = stock.price * quantity;
      user.balance += totalSellAmount;

      if (stockInPortfolio.quantity > quantity) {
        stockInPortfolio.quantity -= quantity;
      } else {
        user.portfolio = user.portfolio.filter(p => p.symbol !== symbol);
      }

      console.log(`Sell order placed for ${quantity} shares of ${symbol} stock.`);
    } else {
      console.log("Insufficient shares to place the order.");
    }
  } else {
    console.log("Invalid stock symbol.");
  }
}

// Example usage
const userId = authenticate("john_doe", "password1");

if (userId) {
  console.log(`User authenticated with ID: ${userId}`);
  console.log("Current portfolio:");
  console.log(users.find(u => u.id === userId).portfolio);
  
  placeBuyOrder(userId, "AAPL", 5);
  placeBuyOrder(userId, "GOOGL", 3);
  
  console.log("Current portfolio after placing buy orders:");
  console.log(users.find(u => u.id === userId).portfolio);

  placeSellOrder(userId, "AAPL", 2);
  
  console.log("Current portfolio after placing a sell order:");
  console.log(users.find(u => u.id === userId).portfolio);
} else {
  console.log("Authentication failed.");
}

// ... Other functions, classes, and features of the trading platform

// ... More code (over 200 lines) including real-time price updates, market data analysis, etc.

// End of complex_code.js
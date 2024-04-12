const { Quote } = require("../models");

async function getQuotes() {
  try {
    const quotes = await Quote.getAllQuotes();
    return quotes;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}

module.exports = { getQuotes };

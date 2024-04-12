module.exports = {
  getQuote: function(quotes, quote_id, options) {
    const quote = quotes.find(quote => quote.id === quote_id);
    return options.fn(quote);
  },
  json: function(context) {
    return JSON.stringify(context);
  }
};
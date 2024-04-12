
const db = require("../config/connection");

async function getAllQuotes() {
  const [quotes] = await db.query(`SELECT * FROM quotes`);
  return quotes;
}

module.exports = { getAllQuotes };

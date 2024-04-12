const db = require("../config/connection");

async function createVisual(visualData) {
  const [result] = await db.query(`INSERT INTO visuals SET ?`, visualData);
  return result;
}

async function updateVisual(id, visualData) {
  const [result] = await db.query(`UPDATE visuals SET ? WHERE id = ?`, [visualData, id]);
  return result;
}

async function deleteVisual(id) {
  const [result] = await db.query(`DELETE FROM visuals WHERE id = ?`, [id]);
  return result;
}

module.exports = { createVisual, updateVisual, deleteVisual };
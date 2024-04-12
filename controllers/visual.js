const { Visual } = require("../models");

async function createVisual(req, res) {
  const visualData = req.body;

  try {
    const result = await Visual.createVisual(visualData);
    res.status(201).json({ message: 'Visual created successfully', id: result.insertId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

async function updateVisual(req, res) {
  const id = req.params.id;
  const visualData = req.body;

  try {
    await Visual.updateVisual(id, visualData);
    res.status(200).json({ message: 'Visual updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}


async function deleteVisual(req, res) {
  const id = req.params.id;

  try {

    const result = await Visual.deleteVisual(id);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Visual not found' });
    } else {
      res.status(200).json({ message: 'Visual deleted successfully' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}


module.exports = { createVisual, updateVisual, deleteVisual };

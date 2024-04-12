const { User } = require("../models");

async function create(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.redirect("/signup?error=must include username and password");

    const user = await User.create(username, password);

    if (!user) return res.redirect("/signup?error=error creating new user");

    req.session.isLoggedIn = true;
    req.session.save(() => res.redirect("/"));
  } catch (err) {
    console.log(err);
    return res.redirect(`/signup?error=${err.message}`);
  }
}

async function getVisuals(userId) {
  try {
    const visuals = await User.getVisuals(userId);

    if (!visuals) return { error: 'No visuals found for this user' };
    return visuals;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
}

module.exports = { create, getVisuals };

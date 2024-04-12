const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/login", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("login", { error: req.query.error });
});

router.get("/signup", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("signup", { error: req.query.error });
});

router.get("/private", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("protected", { isLoggedIn });
});

router.get("/dashboard", checkAuth, async (req, res) => {
  try {

    if (!req.session || !req.session.user) {
      return res.redirect("/login");
    }

    const visuals = await controllers.user.getVisuals(req.session.user.id);
    const quotes = await controllers.quote.getQuotes();

    // Check for errors
    if (visuals.error) {
      console.log(visuals.error);
      return res.status(500).send({ error: visuals.error });
    }

    if (quotes.error) {
      console.log(quotes.error);
      return res.status(500).send({ error: quotes.error });
    }

    res.render("dashboard", { isLoggedIn: req.session.isLoggedIn, visuals, quotes });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});


router.get("/visual/:id?", checkAuth, async (req, res) => {
  const { session: { isLoggedIn }, params: { id } } = req;

  try {
    const quotes = await controllers.quote.getQuotes();
    const visuals = await controllers.user.getVisuals(req.session.user.id);

    if (quotes.error) {
      console.log(quotes.error);
      return res.status(500).send({ error: quotes.error });
    }

    let visual;
    if (id) {
      visual = visuals.find(el => el.id === parseInt(id) || el.id === id);
      if (visual.error) {
        console.log(visual.error);
        return res.status(500).send({ error: visual.error });
      }
    } else {
      const randomQuoteNumber = Math.floor(Math.random() * 20) + 1;
      const randomPicNumber = (Math.floor(Math.random() * 60) + 1).toString();
      visual = { user_id: req.session.user.id, quote_id: randomQuoteNumber, photo_id: randomPicNumber };
    }

    res.render("visual", { isLoggedIn, quotes, visual });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;

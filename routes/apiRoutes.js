const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);
router.post("/visual", checkAuth, controllers.visual.createVisual);
router.put("/visual/:id", checkAuth, controllers.visual.updateVisual);
router.delete("/visual/:id", checkAuth, controllers.visual.deleteVisual);

module.exports = router;
const router = require("express").Router();
const {
  models: { User, Order_Products, Order },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
//Gets a single user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id);

    res.send(singleUser);
  } catch (err) {
    next(err);
  }
});

//Deletes a single user based off of ID
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await User.findByPk(req.params.id);
    await deleteUser.destroy();
    res.send(deleteUser);
  } catch (err) {
    next(err);
  }
});

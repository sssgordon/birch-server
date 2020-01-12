const { Router } = require("express");
const Category = require("./model");

const router = new Router();

// CRUD endpoints
router.post("/category", async (req, res, next) => {
  try {
    const category = {
      weather: req.body.weather
    };

    const newCategory = await Category.create(category);
    res.status(201).send(newCategory);
  } catch (error) {
    next(error);
  }
});

router.get("/category", async (req, res, next) => {
  try {
    const category = await Category.findAll({ order: [["id", "ASC"]] });
    res.send(category);
  } catch (error) {
    next(error);
  }
});

router.put("/category/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      const updatedCategory = await category.update(req.body);
      res.status(202).send(updatedCategory);
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/category/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      category.destroy();
      res.send({ message: "Category deleted" });
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

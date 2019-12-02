const { Router } = require("express");
const Product = require("./model");

const router = new Router();

router.post("/products", async (req, res, next) => {
  try {
    const product = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      inStock: req.body.inStock,
      price: req.body.price
    };
    const newProduct = await Product.create(product);
    res.status(201).send(newProduct);
  } catch (error) {
    next(error);
  }
});

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.findAll({ order: [["id", "DESC"]] });
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.put("/products/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      const updatedProduct = await product.update(req.body);
      res.status(202).send(updatedProduct);
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/products/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      product.destroy();
      res.send({ message: "Product deleted" });
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

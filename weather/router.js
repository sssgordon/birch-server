const { Router } = require("express");
const Weather = require("./model");

const router = new Router();

// CRUD endpoints
router.post("/weather", async (req, res, next) => {
  try {
    const weather = {
      category: req.body.category
    };

    const newWeather = await Weather.create(weather);
    res.status(201).send(newWeather);
  } catch (error) {
    next(error);
  }
});

router.get("/weather", async (req, res, next) => {
  try {
    const weather = await Weather.findAll({ order: [["id", "ASC"]] });
    res.send(weather);
  } catch (error) {
    next(error);
  }
});

router.put("/weather/:id", async (req, res, next) => {
  try {
    const weather = await Weather.findByPk(req.params.id);
    if (weather) {
      const updatedWeather = await weather.update(req.body);
      res.status(202).send(updatedWeather);
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/weather/:id", async (req, res, next) => {
  try {
    const weather = await Weather.findByPk(req.params.id);
    if (weather) {
      weather.destroy();
      res.send({ message: "Weather deleted" });
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

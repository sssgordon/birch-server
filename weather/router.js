const { Router } = require("express");
const Weather = require("./model");

const router = new Router();

// test endpoints
router.post("/weather", async (req, res, next) => {
  try {
    const weather = {
      category: req.body.category
    };

    const newWeather = await Weather.create(weather);
    res.send(newWeather);
  } catch (error) {
    next(error);
  }
});

router.get("/weather", async (req, res, next) => {
  try {
    const weather = await Weather.findAll();
    res.send(weather);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

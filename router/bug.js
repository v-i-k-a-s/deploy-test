const express = require("express");
const router = express.Router();
const bugController = require("../controller/bugController.js");
const { Joi, celebrate } = require("celebrate");
// const Joi = require("joi");

router.post(
  "/create",
  celebrate({
    body: Joi.object().keys({
      title: Joi.string().uppercase().required(),
      bugAuther: Joi.string().uppercase().required(),
      bugDisc: Joi.string().min(30).required(),
      bug: Joi.required(),
      bugLevel: Joi.required(),
    }),
  }),
  bugController.create
);

router.get("/filter", bugController.getByFilter);

router.get("/search", bugController.getBySearch);

module.exports = router;

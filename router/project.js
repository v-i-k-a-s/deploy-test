const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
const { celebrate, Joi } = require("celebrate");
// const { Joi, celebrate } = require("celebrate");

router.post(
  "/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().uppercase().required(),
      auther: Joi.string().uppercase().required(),
      disc: Joi.string().min(30).required(),
    }),
  }),
  projectController.create
);

router.get("/:id", projectController.getById);

module.exports = router;

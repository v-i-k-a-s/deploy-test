const ProjectModel = require("../models/project");

module.exports = {
  get: async (req, res) => {
    let data = await ProjectModel.find({});

    if (!data) {
      return res.redirect("back");
    }

    return res.render("index", {
      // title: "home",
      data: data,
    });
  },
};

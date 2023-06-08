const ProjectModel = require("../models/project");
const BugModel = require("../models/bug");

module.exports = {
  create: async (req, res) => {
    try {
      let data = await ProjectModel.create(req.body);

      return res.status(200).redirect("back");
    } catch (error) {
      console.log('error',error);
      return res.status(500).json({
        message: "fail",
        sucsess: false,
      });
    }
  },

  getById: async (req, res) => {
    try {
      req.header.token = req.params.id;
      let project = await ProjectModel.findById(req.params.id);

      let issue = await BugModel.find({ project: req.header.token });
      // console.log("issue: ", issue);

      if (!project) {
        return res.status(404).redirect("back");
      }

      return res.status(200).render("project-details", {
        project: project,
        data: issue,
      });
    } catch (error) {
      return res.status(500).json({
        message: "fail",
        sucsess: false,
      });
    }
  },
};

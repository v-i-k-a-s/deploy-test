const BugModel = require("../models/bug");
const ProjectModel = require("../models/project");

module.exports = {
  create: async (req, res) => {
    // console.log("something");
    // console.log(req.header.token);
    try {
      // console.log(req.body);

      let data = await BugModel.create({
        title: req.body.title,
        project: req.header.token,
        bugAuther: req.body.bugAuther,
        bugDisc: req.body.bugDisc,
      });

      let bugName = req.body.bug;
      let bugLevel = req.body.bugLevel;

      if (bugName.length > 5) {
        // console.log("in bug 1");
        data.bug.push(bugName);
        data.bugLevel.push(bugLevel);
      } else {
        for (let i = 0; i < bugName.length; i++) {
          data.bug.push(bugName[i]);
          if (bugLevel[i] == undefined) {
            data.bugLevel.push("easy");
          } else {
            data.bugLevel.push(bugLevel[i]);
          }
        }
      }

      data.save();
      // console.log("saved data; ", data);

      return res.status(201).redirect("back");
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  },

  getByFilter: async (req, res) => {
    try {
      // console.log(req.header.token);

      let issue = await BugModel.find({
        $and: [
          { project: req.header.token },
          { bug: { $elemMatch: { $eq: req.query.bug } } },
          { bugAuther: { $regex: req.query.bugAuther, $options: "i" } },
        ],
      });

      let project = await ProjectModel.findById(req.header.token);

      return res.status(200).render("project-details", {
        project: project,
        data: issue,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  },

  getBySearch: async (req, res) => {
    try {
      // console.log(req.header.token);
      let issue = await BugModel.find({
        $and: [
          { project: req.header.token },
          {
            $or: [
              { title: { $regex: req.query.search, $options: "i" } },
              { bugDisc: { $regex: req.query.search, $options: "i" } },
            ],
          },
        ],
      });

      let project = await ProjectModel.findById(req.header.token);

      // console.log(issue, ": issue");

      return res.status(200).render("project-details", {
        project: project,
        data: issue,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  },
};

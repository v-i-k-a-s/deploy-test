const mongosse = require("mongoose");

const projectSchema = new mongosse.Schema(
  {
    name: {
      type: String,
    },
    auther: {
      type: String,
    },
    disc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongosse.model("Project", projectSchema);
module.exports = Project;

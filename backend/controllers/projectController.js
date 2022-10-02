const Project = require('../models/projectModel.js');

//get all projects
exports.getData = async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({
    status: 'Success',
    "data":projects
  });
};

//create project
exports.create = async (req, res, next) => {
  const newProject = await Project.create(req.body);
  res.status(200).json({
    status: 'Project has been create',
    data: newProject,
  });
};

//update project
exports.update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updated = await Project.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.status(200).json({
    status: 'Project has been updated',
    data: updated,
  });
};

// delete project
exports.delete = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await Project.findOneAndDelete({ _id: id });

  res.status(200).json({
    status: 'Project has been deleted',
  });
};
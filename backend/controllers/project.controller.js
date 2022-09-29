const Project = require('../models/projects.model')

exports.create = async (req, res, next)=>{
    const newProject = await Project.create();
    res.status(200).json({
        status:'Project has been create',
        data : newProject
    })
}
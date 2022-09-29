const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  privacy: { type: String, enum: ['public', 'private'] },
  manage: { type: String, enum: ['everyone', 'admin'] },
  todoId: Object,
  inProgressTodoId: Object,
  completedTodoId:Object,
  userId: Object,
  clientId: Object,
  memberId: Object,
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;

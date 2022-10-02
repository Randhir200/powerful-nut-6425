const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  privacy: { type: String, enum: ['public', 'private'] },
  manage: { type: String, enum: ['everyone', 'admin'] },
  todoId: [
    {
      type: String,
      title: String,
      description: String,
    },
  ],
  inProgressTodoId: [
    {
      type: String,
      title: String,
      description: String,
    },
  ],
  completedTodoId: [
    {
      type: String,
      title: String,
      description: String,
    },
  ],
  userId: Object,
  clientId: [],
  memberId: Object,
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
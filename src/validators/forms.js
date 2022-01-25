const task_create = {
  title: ['required'],
  description: ['required'],
  priority: ['required', 'select'],
  due_date: ['required', 'date', 'future_date'],
  comment: [{ name: 'min_length', value: 2 }]
}
const task_edit = {
  due_date: ['date', 'future_date'],
  priority: ['select'],
}

const comment_create = {
  message: ['required']
}

const forms = { task_create, task_edit, comment_create };

export default forms;

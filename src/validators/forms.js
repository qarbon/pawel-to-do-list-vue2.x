const task_form = {
  title: ['required'],
  description: ['required'],
  priority: ['required', 'select'],
  due_date: ['required', 'date', 'future_date'],
  message: [{ name: 'min_length', value: 2 }]
}

const forms = { task_form };

export default forms;

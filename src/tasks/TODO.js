import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      editingTaskId: null,
      editText: '',
    };
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.setState({ tasks: JSON.parse(savedTasks) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleEditChange = (event) => {
    this.setState({ editText: event.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, { id: Date.now(), text: newTask }],
        newTask: '',
      });
    }
  };

  startEdit = (id, text) => {
    this.setState({ editingTaskId: id, editText: text });
  };

  cancelEdit = () => {
    this.setState({ editingTaskId: null, editText: '' });
  };

  saveEdit = () => {
    const { tasks, editingTaskId, editText } = this.state;
    const updatedTasks = tasks.map(task => {
      if (task.id === editingTaskId) {
        return { ...task, text: editText };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks, editingTaskId: null, editText: '' });
  };

  removeTask = (id) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, newTask, editingTaskId, editText } = this.state;
    return (
        
      <div>
        <h1>TODO List</h1>
        
        <input type="text" value={newTask} onChange={this.handleChange} />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={this.handleEditChange}
                  />
                  <button onClick={this.saveEdit}>Save</button>
                  <button onClick={this.cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{task.text}</span>
                  <button onClick={() => this.startEdit(task.id, task.text)}>Edit</button>
                  <button onClick={() => this.removeTask(task.id)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;

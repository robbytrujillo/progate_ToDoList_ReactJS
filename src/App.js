import React from 'react'
import Todos from './components/Todos';  // Lalukan Import
import TodoForm from './components/TodoForm' // Lakukan import TodoForm


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish Progate React Course',
        completed: true // Menganti nilai awal ke true
      },
      {
        id: 2,
        title: 'Have lunch with Guru Domba',
        completed: false
      },
      {
        id: 3,
        title: 'Study React with Ninja Ken',
        completed: false
      }
    ]
  }

  // toggleCompleted = () => {
  //   console.log('this is toggleCompleted function')
  // }

  toggleCompleted = (todoId) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  addTodo = (todoTitle) => {
    const todos = this.state.todos
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    const updatedTodos = this.state.todos.concat(newTodo)
    this.setState({todos: updatedTodos})
  }

  render() {
    //console.log(this.state.todos)
    return (
      <div style={{textAlign: 'center', padding: '12px'}}>
        <h1>My Todo List</h1>
        {/* Menampilkan component TodoForm */}
        <TodoForm addTodo={this.addTodo}/>
        <Todos
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
// import React from 'react'

// const TodoItem = (props) => {
//     const getStyle = () => {
//         let textDecoration = ''
//         if (props.todo.completed) {
//           textDecoration = 'line-through'
//         } else {
//           textDecoration = 'none'
//         }
    
//         return {
//         //   border: '2px solid #f4f4f4',
//         //   fontSize: '24px',
//           flexGrow: '1',
//           textDecoration: textDecoration
//         }
        
//       }

//       const wrapperStyle = {
//         display: 'flex',
//         alignItems: 'center',
//         border: '2px solid #f4f4f4',
//         padding: '12px',
//         fontSize: '24px',
//       }

//       const buttonStyle = {
//         backgroundColor: '#BB0000',
//         color: '#fff',
//         height: '30px',
//         width: '30px',
//         borderRadius: '100%',
//         cursor: 'pointer',
//         fontSize: '16px',
//       }

//       const toggleCompleted = () => {
//         console.log('this is toggleCompleted function')
//       }

//     //   handleSubmit = (event) => {
//     //     event.preventDefault()
//     //     this.props.addTodo(this.state.title)
//     //   }

//   return (
//     <div style={wrapperStyle}>
//     <input
//       type='checkbox'
//       onChange={() => props.toggleCompleted(props.todo.id)}
//     />
//     <p style={getStyle()}>{props.todo.title}</p>
//     <button style={buttonStyle}>x</button>
//     </div>
//   )
// }

// export default TodoItem

// import React, {useContext} from 'react'
// import { TodoContext } from '../App'

// const TodoItem = (props) => {
  
//   const {toggleCompleted, deleteTodo} = useContext(TodoContext)

//   return (
//     <div style={wrapperStyle}>
//       <input
//         type='checkbox'
//         onChange={() => toggleCompleted(props.todo.id)}
//       />
//       <p style={getStyle()}>{props.todo.title}</p>
//       <button
//          style={buttonStyle}
// 	 onClick={() => deleteTodo(props.todo.id)}
// 	>
// 	  x
// 	</button>
//     </div>
//   )
// }

// export default TodoItem
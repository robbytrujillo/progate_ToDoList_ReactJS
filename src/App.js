import React from 'react'
import Counter from './components/Counter'
import GameOver from './components/GameOver'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isGameOver: false}
  }

  finishGame = () => {
    this.setState({isGameOver: true})
  }

  render() {
    let component;
    if (this.state.isGameOver) {
      component = <GameOver />
    } else {
      component = <Counter finishGame={this.finishGame} />
    }

    return (
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        {component}
      </div>
    )
  }
}

export default App;






// import React, {useState} from 'react'
// import Todos from './components/Todos';
// import TodoForm from './components/TodoForm'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0};
//   }
  
//   handleClick() {
//     this.setState({count: this.state.count + 1});
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => {this.handleClick()}}>+</button>
//       </div>
//     );
//   }
// }

// import React from 'react'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0};
//   }
  
//   handleClick() {
//     this.setState({count: this.state.count + 1});
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => {this.handleClick()}}>+</button>
//       </div>
//     );
//   }
// }


//react hook
// import React, {useState} from 'react';

// const App = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {handleClick()}}>+</button>
//     </div>
//   );
// }

// export default App;


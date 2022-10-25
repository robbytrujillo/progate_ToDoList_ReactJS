import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    console.log('Initialized')
  }

  componentDidMount() {
    //console.log('Mounted')
    document.getElementById('count').innerHTML = this.state.count;
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate() {
    //console.log('Updated')
    document.getElementById('count').innerHTML = this.state.count
  }

  componentWillUnmount() {
    //console.log('Unmounted Soon')
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  handleKeyPress = (event) => {
    const { key } = event;
    if (key === 'Enter') {
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    console.log('Rendered!')
    return (
      <div>
        <h1 style={{fontSize: '64px'}}>
          {this.state.count}
        </h1>
        <button style={buttonStyle} onClick={() => {this.handleClick()}}>+</button>
        <div>
          <button
            onClick={() => {this.props.finishGame()}}
            style={buttonStyle}
          >
            Finish Game
          </button>
          <div
            id="count"
            style={{fontSize: '64px', marginTop: '20px'}}
           ></div>
        </div >
      </div>
    );
  }
}

const buttonStyle = {
  fontSize: '32px',
  width: '200px',
  height: '48px',
  borderRadius: '4px',
  marginRight: '24px',
  marginLeft: '24px',
  marginTop: '30px',
  color: '#fff',
  backgroundColor: '#66ccff',
}


export default Counter;


//menggunakan react hook
// import React, {useState, useEffect} from 'react';

// const Counter = (props) => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.getElementById('count').innerHTML = count
//     window.addEventListener('keydown', handleKeyPress)
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress)
//     }
//   })

//   const handleClick = () => {
//   	setCount(count + 1);
//   }

//   const handleKeyPress = (event) => {
//     const { key } = event;
//     if (key === 'Enter') {
//       setCount(count + 1);
//     }
//   }

//   return (
//     <div>
//       <h1 style={{fontSize: '64px'}}>{count}</h1>
//       <button
//         style={buttonStyle}
//         onClick={() => {handleClick()}}
//       >
//         +
//       </button>
//       <div>
//         <button
//           onClick={() => {props.finishGame()}}
//           style={buttonStyle}
//         >
//           Finish Game
//         </button>
//         <div
//           id="count"
//           style={{fontSize: '64px', marginTop: '20px'}}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default Counter;
import React, { Component } from 'react';

import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePlaceSubmit(place) {
    console.log(place);
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
//
// import Greeting from './greeting';
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'John',
//     };
//   }
//
//   handleNameChange(name) {
//     this.setState({ name });
//   }
//
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={e => this.handleNameChange(e.target.value)}
//         />
//         <button onClick={() => this.handleNameChange('Bob')}>I am Bob</button>
//         <Greeting name={this.state.name} />
//       </div>
//     );
//   }
// }
//
// export default App;

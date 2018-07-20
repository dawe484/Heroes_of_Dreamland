import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Heroes from './Heroes';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1 className="App-title">Hello World!</h1>
      //   <p className="App-intro">Starting... React</p>
      // </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/heroes" exact component={Heroes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
// export default () => {
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact component={Home} />
//     </Switch>
//   </BrowserRouter>;
// };

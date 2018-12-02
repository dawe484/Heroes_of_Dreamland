import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Heroes from './Heroes';

import './index.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1 className="App-title">Hello World!</h1>
      //   <p className="App-intro">Starting... React</p>
      // </div>
      <Router>
        {/* <div className="App"> */}
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/heroes" exact component={Heroes} />
        </Switch>
        {/* <Footer /> */}
        {/* </div> */}
      </Router>
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

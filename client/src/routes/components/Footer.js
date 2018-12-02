import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      /* <!-- Footer --> */
      <footer id="main-footer" className="grid">
        {/* <!-- Copyright --> */}
        <div className="copyright">
          <div className="container">
            <p>© 2018 Heroes of Dreamland</p>
          </div>
        </div>
        {/* <!-- //Copyright --> */}
      </footer>
      /* <!-- //Footer --> */
    );
  }
}

export default Footer;

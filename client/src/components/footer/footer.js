import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);
}

  render() {
    return (        
       <footer className="app-footer" role="contentInfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div> 
                    <div className="col-md-4">
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>                 
                </div>
            </div>
       </footer>
      );
  }
}

export default Footer;

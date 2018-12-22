//Babel
import 'babel-polyfill';

//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Weather from 'components/weather/weather'
import News from 'components/news/news'
import Main from 'components/main/main'
import Navigation from 'components/navigation/navigation'

class App extends Component {
  render() {
    return (
          <div className="app-container">
            <Navigation />                                  
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Main} exact />
                    <Route path='/weather' component={Weather} />
                    <Route path='/news' component={News} />
                </Switch>            
            </BrowserRouter>             
        </div>     
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

import React from 'react';
import Navbar from './Navbar';
import PaintingContainer from './PaintingContainer';
import About from './About';
import Login from './Login';
import { Route, Switch, withRouter } from 'react-router-dom';
import api from '../services/api';

class App extends React.Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem('token', user.id);

    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
    this.setState({ auth: { currentUser: {} } });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          icon="paint brush"
          title="Painterest"
          description="web-100917 App"
          currentUser={this.state.auth.currentUser}
          handleLogout={this.handleLogout}
        />
        <div id="content" className="ui container">
          <Switch>
            <Route
              path="/login"
              render={routerProps => {
                return (
                  <Login {...routerProps} handleLogin={this.handleLogin} />
                );
              }}
            />
            <Route path="/paintings" component={PaintingContainer} />
            <Route path="/" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

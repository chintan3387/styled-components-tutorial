import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import DarkTheme from './theme/dark';
import LightTheme from './theme/light';
import PasswordInput from './components/common/PasswordInput';
import Button from './components/common/Button';
import Spinner from './components/common/spinner';

const LoginWithFacebookButton = Button.extend`
  background: #0051a2;
  border-color: #0051a2;
  color: white;
`;


class App extends Component {
  state = {
    theme: LightTheme,
    showPassword: false,
  }

  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'dark' ? LightTheme : DarkTheme,
    })
  }

  handleTogglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <section>
          <Spinner />
        </section>
      </ThemeProvider>
    );
  }
}

export default App;

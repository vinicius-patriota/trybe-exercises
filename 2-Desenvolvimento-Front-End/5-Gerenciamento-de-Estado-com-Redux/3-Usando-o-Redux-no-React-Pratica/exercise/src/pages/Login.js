import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLogin } from '../redux/actions'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, getLogin } = this.props;

    getLogin(this.state);
    history.push('/clients');
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input id="email" name="email" type="email" onChange={ this.handleChange } />
          </label>  
          <label htmlFor="password">
            Password:
            <input id="password" name="password" type="text" onChange={ this.handleChange } />
          </label>
          <button type="submit" onClick={ this.handleClick }>Entrar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLogin: e => dispatch(getLogin(e))
});

export default connect(null, mapDispatchToProps)(Login);

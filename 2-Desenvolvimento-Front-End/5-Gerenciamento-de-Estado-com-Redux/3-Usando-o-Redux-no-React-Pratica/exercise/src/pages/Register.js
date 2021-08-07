import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../redux/actions';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.validateRegister = this.validateRegister.bind(this);
  }

  validateRegister() {
    const { name, age, email } = this.state;
    const { addRegister } = this.props;

    addRegister({ name, age, email });

    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;

    if (!userLogin.email) return <h1>Login nao efetuado!</h1>

    return (
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Idade"
          value={age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <button onClick={ this.validateRegister }>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer
});

const mapDispatchToProps = (dispatch) => ({
  addRegister: e => dispatch(addRegister(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

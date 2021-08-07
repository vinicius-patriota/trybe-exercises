import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const { registers, userLogin } = this.props;

    if ( !userLogin.email ) return <h1>Login nao efetuado!</h1>;
    if ( registers.length < 1 ) {
      return (
        <div>
          <h2>Nenhum Cliente Cadastrado</h2>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    };

    return (
      <div>
        <Link to="/register">Cadastre Outros</Link>
        <div>
          { registers.map((register, index) => {
            return (
              <div key={ index }>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.name}</p>
                <p>Idade: {register.age}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps)(Clients);

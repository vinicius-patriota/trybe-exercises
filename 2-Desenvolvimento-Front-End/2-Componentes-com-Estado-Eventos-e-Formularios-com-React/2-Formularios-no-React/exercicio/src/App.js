import React, { Component } from 'react';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
      formError: {
        ...this.state.formError,
        [name]: this.validateField(name, value),
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(INITIAL_STATE) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={this.state}
          onBlurHandler={this.onBlurHandler}
        />
        <div className='container'>
          <FormError formError={this.state.formError} />
        </div>
        {submitted && <FormDataDisplay currentState={this.state} />}
      </main>
    )
  }
}

export default App;

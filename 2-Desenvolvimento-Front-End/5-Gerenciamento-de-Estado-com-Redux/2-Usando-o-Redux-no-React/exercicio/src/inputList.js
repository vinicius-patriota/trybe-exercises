import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssignment from './actions';

class InputList extends React.Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
    };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={(event) => this.setState({ textValue: event.target.value })}
        />
        <button type="button" onClick={() => add(textValue)}>
          Adicionar Tarefa
      </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
});

InputList.propTypes = {
  add: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(InputList);

const Redux = require("redux");

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: ((state.colors.length - 1) === index) ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: (index === 0) ? state.colors.length - 1 : state.index - 1,
      };
    default:
      return state;
  };
};

const nextColor = () => {
  return {
    type: 'NEXT_COLOR',
  };
};

const prevColor = () => {
  return {
    type: 'PREVIOUS_COLOR',
  };
};

const store = Redux.createStore(reducer);

const buttonNext = document.getElementById('next');
const buttonPrev = document.getElementById('previous');

buttonNext.addEventListener('click', () => {
  store.dispatch(nextColor());
});

buttonPrev.addEventListener('click', () => {
  store.dispatch(prevColor());
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});

console.log(store.getState());

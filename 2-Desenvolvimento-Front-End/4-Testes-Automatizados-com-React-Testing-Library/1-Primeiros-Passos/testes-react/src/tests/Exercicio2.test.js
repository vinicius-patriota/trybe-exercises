import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../components/Item';

describe('Testando o componente Item e suas funcionalidades', () => {
  it('Verifica a adicao de multiplos items na lista', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByLabelText, getByText } = render(<App />);
    const inputText = getByLabelText('Tarefa:');
    const buttonAdd = getByText('Adicionar');

    listTodo.forEach((item) => {
      fireEvent.change(inputText, { target: { value: item } });
      fireEvent.click(buttonAdd);
    });

    listTodo.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it('Testa o Componente Item', () => {
    const { getByText } = render(<Item content={'Limpar a casa'} />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  });
});